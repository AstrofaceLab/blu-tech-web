# 🚀 Netlify Deployment - Simple Guide

## **Quick Deployment (3 Steps)**

### **Step 1: Build the Project**
```bash
npm run build
```
✅ Make sure build completes without errors

---

### **Step 2: Deploy to Netlify**

#### **Option A: Drag & Drop (Easiest - 2 minutes)**

1. **Go to Netlify:**
   - Open: https://app.netlify.com
   - Login with: **blessingotakiti890@gmail.com** / **Otakiti@890**

2. **Deploy:**
   - Click "Add new site" → "Deploy manually"
   - Drag the **`.next`** folder from your project
   - Wait 30 seconds
   - Done! ✅

#### **Option B: Netlify CLI (Recommended)**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login
# Browser opens → Login with blessingotakiti890@gmail.com

# Deploy
netlify deploy --prod --dir=.next
```

---

### **Step 3: Connect Custom Domain**

1. **In Netlify Dashboard:**
   - Go to your site
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter: **blutechafrica.com**
   - Click "Verify"

2. **Update DNS (at your domain registrar):**

   **Add these DNS records:**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME  
   Name: www
   Value: YOUR-SITE-NAME.netlify.app
   ```

3. **Enable HTTPS:**
   - In Netlify → Domain settings
   - Click "Verify DNS configuration"
   - Click "Provision certificate"
   - Enable "Force HTTPS"

---

## ✅ **That's It!**

**Your site will be live at:**
- https://blutechafrica.com
- https://www.blutechafrica.com

**Deployment URL:** https://YOUR-SITE-NAME.netlify.app

---

## � **To Update Site Later:**

```bash
# Make changes to code
npm run build
netlify deploy --prod --dir=.next
```

---

## 📞 **Need Help?**

**Netlify Support:** https://docs.netlify.com

**DNS takes 24-48 hours to propagate globally**
