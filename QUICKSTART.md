# 🚀 Quick Start Guide

## Current Status
✅ Portfolio website is built and running
✅ Contact form is ready
⚠️ Email configuration needed (5 minutes)

## Next Steps

### 1. Configure Email (Required for contact form)

Open the `.env.local` file and add your Gmail App Password:

1. **Generate Gmail App Password:**
   - Visit: https://myaccount.google.com/apppasswords
   - Enable 2-Step Verification if needed
   - Create an app password
   - Copy the 16-character code

2. **Update .env.local:**
   ```
   EMAIL_USER=mohamedraafatqourany@gmail.com
   EMAIL_PASSWORD=paste_your_app_password_here
   ```

3. **Restart the server:**
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

### 2. Test the Contact Form

1. Open http://localhost:3000
2. Scroll to the Contact section
3. Fill out and submit the form
4. Check your email!

### 3. Deploy Your Portfolio

**Option A: Vercel (Recommended - Free)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Option B: Manual**
1. Push code to GitHub
2. Connect to Vercel.com
3. Add environment variables in Vercel dashboard
4. Deploy!

## 📁 Project Structure

```
mohammed-portfolio/
├── app/
│   ├── api/contact/       # Email API endpoint
│   ├── page.tsx           # Main page
│   └── layout.tsx         # Layout wrapper
├── components/
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Work history
│   ├── Projects.tsx       # Portfolio projects
│   ├── Contact.tsx        # Contact form
│   └── Navigation.tsx     # Navigation bar
├── .env.local             # Email credentials (DO NOT COMMIT)
└── package.json
```

## 🛠 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code quality
```

## 📧 Contact Form Features

✅ Real-time form validation
✅ Loading states during submission
✅ Success/error notifications
✅ Direct email to mohamedraafatqourany@gmail.com
✅ Professional HTML email template
✅ Reply-to functionality (responds to sender)

## 🎨 Customization

Update your information in:
- `components/Contact.tsx` - Contact details
- `components/Projects.tsx` - Portfolio projects
- `components/Experience.tsx` - Work experience
- `components/About.tsx` - Skills and summary
- `app/layout.tsx` - SEO metadata

## 🔒 Security

- `.env.local` is in `.gitignore` (not committed to Git)
- Use Gmail App Password (not your real password)
- Environment variables are secure on Vercel

## 📞 Support

If you need help:
1. Check EMAIL_SETUP.md for detailed email configuration
2. View the README.md for general information
3. Email issues to the developer

---

**You're all set! Your portfolio is ready to impress your customers! 🎉**
