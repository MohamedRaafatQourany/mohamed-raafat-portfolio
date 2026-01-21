# Setup Instructions for Contact Form Email

## Gmail App Password Setup

To enable the contact form to send emails directly to your Gmail, follow these steps:

### 1. Enable 2-Step Verification
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", select **2-Step Verification**
3. Follow the prompts to enable it

### 2. Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Other (Custom name)"
3. Name it "Portfolio Website" or similar
4. Click **Generate**
5. Copy the 16-character password (remove spaces)

### 3. Update Environment Variables
1. Open `.env.local` file in the project root
2. Replace `your_app_password_here` with the generated app password:

\`\`\`
EMAIL_USER=mohamedraafatqourany@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop  # Replace with your actual app password
\`\`\`

3. Save the file

### 4. Restart the Development Server
\`\`\`bash
# Stop the current server (Ctrl+C in terminal)
npm run dev
\`\`\`

## Alternative: Use a Different Email Provider

If you prefer not to use Gmail, you can use other email services:

### SendGrid (Free tier available)
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Get your API key
3. Update `app/api/contact/route.ts` to use SendGrid

### Resend (Recommended for developers)
1. Sign up at [Resend](https://resend.com/)
2. Get your API key
3. Update the API route accordingly

## Testing

After setup:
1. Visit http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form
4. Submit
5. Check your email inbox!

## Security Notes

- Never commit `.env.local` to Git (it's already in .gitignore)
- The app password is only for email sending, not your full Gmail access
- For production deployment, add these environment variables to your hosting platform (Vercel, Netlify, etc.)

## Deployment

When deploying to Vercel/Netlify:
1. Go to your project settings
2. Add environment variables:
   - `EMAIL_USER`: mohamedraafatqourany@gmail.com
   - `EMAIL_PASSWORD`: your_app_password
3. Redeploy the site
