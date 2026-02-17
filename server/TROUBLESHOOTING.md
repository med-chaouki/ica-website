# 🔧 Troubleshooting 500 Error

## Current Status

You're getting a **500 Internal Server Error** when submitting the contact form. This is likely because:

1. The server hasn't been restarted since the `.env` file was created
2. There might be an authentication issue with Gmail

---

## ✅ What I've Done

1. ✅ Created `.env` file with your credentials
2. ✅ Recreated it with proper ASCII encoding to avoid any encoding issues
3. ✅ Verified the credentials are correctly formatted

---

## 🔄 **CRITICAL: You MUST Restart the Server**

The server is still running with the OLD configuration (no credentials). You need to restart it:

### Steps:

1. **Go to your server terminal** (the one running `npm run dev` in the `server` folder)

2. **Stop the server:**
   - Press `Ctrl+C`

3. **Start it again:**
   ```bash
   npm run dev
   ```

4. **Look for this output:**
   ```
   🚀 Server running on http://localhost:3000/
   📧 Email configured: ✓
   📬 Recipient: mohamedchaouki089@gmail.com
   ```

   **If you see `📧 Email configured: ✓`** → The credentials are loaded! ✅
   
   **If you see `📧 Email configured: ✗`** → The `.env` file isn't being read ❌

---

## 🧪 Test Again

After restarting the server:

1. Go to http://localhost:5173/contact
2. Fill out the form
3. Submit

**Expected result:** Success message + email in your inbox

---

## 🚨 If You Still Get Errors

### Check the Server Terminal

After submitting the form, look at the server terminal for error messages. Common errors:

#### Error: "Invalid login"
- The app password might be incorrect
- Make sure you're using an **app-specific password**, not your regular Gmail password
- Regenerate the app password at: https://myaccount.google.com/apppasswords

#### Error: "Missing credentials"
- The server didn't restart properly
- The `.env` file might not be in the right location (should be in `server` folder)

#### Error: "EAUTH"
- 2-factor authentication might not be enabled on your Gmail account
- The app password might have been revoked

---

## 📋 Quick Checklist

- [ ] Server has been restarted (Ctrl+C then `npm run dev`)
- [ ] Server shows `📧 Email configured: ✓`
- [ ] Both frontend (port 5173) and backend (port 3000) are running
- [ ] 2-factor authentication is enabled on Gmail account
- [ ] App password was generated correctly

---

## 🆘 Alternative: Use a Test Mode

If you're still having issues and want to test the form without email, I can temporarily modify the server to:
- Skip email sending
- Just log the form data to console
- Return success immediately

This would let you verify the form and API are working, then we can debug the email issue separately.

**Let me know if you want me to set up this test mode!**
