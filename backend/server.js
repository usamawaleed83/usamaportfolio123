const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');

// Load environment variables first
dotenv.config({ path: path.join(__dirname, '.env') });

const contactRoutes = require('./routes/contact');
const { router: adminRoutes, passport } = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://usamawaleed83_db_user:32mmwASPFiy0C7uI@cluster0.p1rlbg6.mongodb.net/portfolio';
mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174', 'https://usamaportfolio123.vercel.app'],
    credentials: true
}));
app.use(express.json());

// Session middleware for passport
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-session-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Portfolio Backend is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});