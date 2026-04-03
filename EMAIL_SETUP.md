# Email Setup for Contact Form

## Current Status
✅ **Contact Form**: Working - Messages are stored in admin panel
⚠️ **Email Notifications**: Requires Gmail App Password setup

## How It Works Now
1. Contact form submissions are **always stored** in the admin panel
2. You can view all messages by logging into `/admin`
3. Email notifications are attempted but may fail without proper Gmail setup

## To Enable Email Notifications

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click "2-Step Verification"
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### Step 3: Update Environment Variables
Replace in `backend/.env`:
```
EMAIL_PASS=your-16-character-app-password-here
```

## Alternative: View Messages in Admin Panel
Even without email setup, all contact form messages are stored and can be viewed:
1. Go to `/admin`
2. Login with username: `admin`, password: `admin123`
3. View all contact messages in the dashboard

## Current Behavior
- ✅ Messages are always stored successfully
- ✅ Contact form shows success message
- ✅ Messages appear in admin dashboard
- ⚠️ Email notifications may not work without App Password

The contact form will work perfectly for collecting messages, even if email notifications aren't configured!