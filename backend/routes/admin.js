const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Message = require('../models/Message');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const router = express.Router();

const adminCredentials = { username: 'admin', password: 'admin123' };

const authorizedEmails = ['usamaq530@gmail.com', 'usamawaleed83@gmail.com'];

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/admin/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value;
    if (authorizedEmails.includes(email)) {
        return done(null, { id: profile.id, email, name: profile.displayName, photo: profile.photos[0].value });
    } else {
        return done(null, false, { message: 'Unauthorized email' });
    }
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'No token provided' });
    try {
        req.admin = jwt.verify(token, JWT_SECRET);
        next();
    } catch {
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

// Regular Admin Login
router.post('/login', async (req, res) => {
    console.log('Login attempt received:', req.body?.username);
    try {
        const { username, password } = req.body;
        if (username === adminCredentials.username && password === adminCredentials.password) {
            const token = jwt.sign({ username, role: 'admin', loginType: 'regular' }, JWT_SECRET, { expiresIn: '24h' });
            res.json({ success: true, token, message: 'Login successful', user: { username, loginType: 'regular' } });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Login failed' });
    }
});

// Google OAuth Routes
router.get('/auth/google', (req, res, next) => {
    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
        return res.redirect('https://usamaportfolio123.vercel.app/admin?error=oauth_not_configured');
    }
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
});

router.get('/auth/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
        if (req.user) {
            const token = jwt.sign(
                { email: req.user.email, name: req.user.name, role: 'admin', loginType: 'google', photo: req.user.photo },
                JWT_SECRET, { expiresIn: '24h' }
            );
            res.redirect(`https://usamaportfolio123.vercel.app/admin/dashboard?token=${token}`);
        } else {
            res.redirect('https://usamaportfolio123.vercel.app/admin?error=unauthorized');
        }
    }
);

// Get all messages from MongoDB
router.get('/messages', verifyToken, async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json({ success: true, messages });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch messages' });
    }
});

// Get dashboard stats from MongoDB
router.get('/stats', verifyToken, async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const [totalMessages, todayMessages, unreadMessages] = await Promise.all([
            Message.countDocuments(),
            Message.countDocuments({ createdAt: { $gte: today } }),
            Message.countDocuments({ read: false })
        ]);

        res.json({ success: true, stats: { totalMessages, todayMessages, unreadMessages } });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch stats' });
    }
});

// Mark message as read
router.patch('/messages/:id/read', verifyToken, async (req, res) => {
    try {
        await Message.findByIdAndUpdate(req.params.id, { read: true });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update message' });
    }
});

module.exports = { router, passport };