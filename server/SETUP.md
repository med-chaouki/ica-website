# Backend Contact Form API - Setup Instructions

## 📋 Prerequisites

- Node.js installed
- Gmail account with 2-factor authentication enabled
- Access to the ICA website server directory

## 🚀 Quick Start

### 1. Configure Gmail App Password

Since we're using Gmail to send emails, you need to create an app-specific password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already enabled)
3. Scroll down to **App passwords**: https://myaccount.google.com/apppasswords
4. Create a new app password:
   - Select app: **Mail**
   - Select device: **Other (Custom name)** → Enter "ICA Website"
5. Copy the generated 16-character password (you'll need this for the `.env` file)

### 2. Set Up Environment Variables

The server needs a `.env` file with your email credentials. You'll need to create this file manually (it's gitignored for security).

**Option A: Copy from template**
```bash
cd server
copy .env.example .env
```

**Option B: Create manually**

Create a file named `.env` in the `server` directory with the following content:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-16-character-app-password
RECIPIENT_EMAIL=mohamedchaouki089@gmail.com
PORT=3000
```

**Replace:**
- `EMAIL_USER` with your Gmail address
- `EMAIL_PASS` with the app password you generated in step 1

### 3. Install Dependencies (Already Done)

Dependencies have been installed, but if you need to reinstall:

```bash
cd server
npm install
```

### 4. Start the Server

The server should already be running. If not:

```bash
cd server
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:3000/
📧 Email configured: ✓
📬 Recipient: mohamedchaouki089@gmail.com
```

## 🧪 Testing

### Test 1: Health Check

Open your browser or use curl:
```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{"status":"ok","timestamp":"2026-01-08T22:00:00.000Z"}
```

### Test 2: Contact Form Submission

Use the website's contact form at http://localhost:5173/contact or test with curl:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"company\":\"Test Company\",\"email\":\"test@example.com\",\"phone\":\"+212600000000\",\"sector\":\"industrie\",\"message\":\"This is a test message from the API\"}"
```

Expected response:
```json
{"success":true,"message":"Message envoyé avec succès"}
```

### Test 3: Validation

Test with incomplete data:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"A\"}"
```

Expected response (400 error):
```json
{
  "success":false,
  "errors":[
    "Le nom est requis (minimum 2 caractères)",
    "L'entreprise est requise (minimum 2 caractères)",
    ...
  ]
}
```

## 📧 Email Format

When a form is submitted, you'll receive an email at `mohamedchaouki089@gmail.com` with:

**Subject:** `Nouveau message de contact - [Company Name]`

**Content:** Beautifully formatted HTML email with:
- Contact information (name, company, email, phone, sector)
- The message content
- Professional styling with your brand colors

## 🔧 Troubleshooting

### Email not configured (✗)

If you see `📧 Email configured: ✗`, check:
1. `.env` file exists in the `server` directory
2. `EMAIL_USER` and `EMAIL_PASS` are set correctly
3. No extra spaces or quotes around the values

### Authentication error

If emails fail to send:
1. Verify 2-factor authentication is enabled on your Gmail account
2. Use an app-specific password, not your regular Gmail password
3. Check that the email address in `EMAIL_USER` matches the account where you created the app password

### CORS errors in browser

If you see CORS errors in the browser console:
- Make sure the server is running on port 3000
- The frontend should be on port 5173 (default Vite dev server)
- Both are configured in the server's CORS settings

## 🌐 Production Deployment

For production, update the `.env` file:

```env
NODE_ENV=production
FRONTEND_URL=https://your-production-domain.com
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=mohamedchaouki089@gmail.com
PORT=3000
```

Also update the frontend API URL in `Contact.jsx` from `http://localhost:3000` to your production backend URL.

## 📝 Alternative Email Services

If you prefer not to use Gmail, you can easily switch to:

### Resend (Recommended for production)
- Free tier: 100 emails/day
- Modern API, excellent deliverability
- https://resend.com

### SendGrid
- Free tier: 100 emails/day
- Enterprise-grade
- https://sendgrid.com

### AWS SES
- Very cost-effective for high volume
- Requires AWS account
- https://aws.amazon.com/ses/

Let me know if you'd like help configuring any of these alternatives!
