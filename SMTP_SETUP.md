# SMTP Email Setup Guide

## Overview
The form submission now uses SMTP to send emails directly to `gyankwadwomends2001@gmail.com` when users submit requests.

## Environment Variables Required

Create a `.env` file in your project root with the following variables:

```env
# SMTP Configuration for Email Sending
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Gmail Setup Instructions

1. **Enable 2-Factor Authentication**
   - Go to your Google Account settings
   - Enable 2-factor authentication

2. **Generate App Password**
   - Go to Google Account > Security > App passwords
   - Generate a new app password for "Mail"
   - Use this app password as `SMTP_PASS` (not your regular password)

3. **Update Environment Variables**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=gyankwadwomends2001@gmail.com
   SMTP_PASS=your-16-character-app-password
   ```

## Other SMTP Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Custom SMTP (Hosting Provider)
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
```

## Installation

1. **Install Dependencies**
   ```bash
   npm install nodemailer @types/nodemailer
   ```

2. **Create Environment File**
   ```bash
   cp .env.example .env
   # Edit .env with your actual SMTP credentials
   ```

3. **Test the Setup**
   - Submit a test form
   - Check the email at gyankwadwomends2001@gmail.com

## Email Features

- **Automatic Email Sending**: Forms are sent directly to the specified email
- **Service-Specific Subjects**: Different subject lines based on service type
- **HTML & Text Formats**: Professional email formatting
- **Reply-To**: Emails can be replied to directly to the submitter
- **Error Handling**: User-friendly error messages if email fails

## Troubleshooting

### Common Issues

1. **Authentication Failed**
   - Make sure you're using an app password for Gmail
   - Check that 2FA is enabled for Gmail

2. **Connection Timeout**
   - Verify SMTP host and port
   - Check firewall settings

3. **Invalid Credentials**
   - Double-check username and password
   - Ensure environment variables are loaded correctly

### Security Notes

- Never commit your `.env` file to version control
- Use app passwords instead of regular passwords
- Consider using OAuth2 for production environments
- Rotate passwords regularly

## Email Content

The emails include:
- Service type and request details
- Complete user information
- Formatted HTML layout
- Timestamp of submission
- File count information 