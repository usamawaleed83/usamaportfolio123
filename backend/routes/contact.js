const express = require('express');
const nodemailer = require('nodemailer');
const Message = require('../models/Message');
const router = express.Router();

const createTransporter = () => {
    try {
        return nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    } catch (error) {
        return null;
    }
};

// POST /api/contact
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Save to MongoDB
        await Message.create({ name, email, message });

        // Try to send email
        const transporter = createTransporter();
        if (transporter && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            try {
                await transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: 'usamawaleed83@gmail.com',
                    subject: `Portfolio Contact from ${name}`,
                    html: `<h3>New Contact Form Submission</h3>
                           <p><strong>Name:</strong> ${name}</p>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Message:</strong> ${message}</p>`
                });
            } catch (emailError) {
                console.error('Email failed (message saved to DB):', emailError.message);
            }
        }

        res.status(200).json({ success: true, message: 'Message received successfully!' });

    } catch (error) {
        console.error('Contact form error:', error.message, error.stack);
        res.status(500).json({ success: false, message: 'Failed to send message', error: error.message });
    }
});

module.exports = router;