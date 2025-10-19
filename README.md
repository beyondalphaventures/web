# BeyondAlpha - Trading Platform & Venture Capital

Complete retail trading platform with integrated venture capital fund.

## 🚀 Features

### Trading Platform
- **$0 Commission Trading** - Trade U.S. stocks and ETFs with zero fees
- **24/5 Market Access** - Extended trading hours Sunday 8PM to Friday 8PM ET
- **IPO Access** - One-click subscription to public offerings
- **Multi-Platform** - iOS, Android, Mac, Windows, and web
- **Bank-Level Security** - 2FA, encryption, FINRA/SIPC protection
- **IRA Accounts** - Up to 3% match on transfers

### Venture Capital Fund
Focused on 5 breakthrough sectors:
- 🤖 **Artificial Intelligence**
- 🔗 **Blockchain**
- ⚛️ **Quantum Computing**
- 🦾 **Robotics**
- 🧬 **Longevity**

## 📋 Setup Instructions

### 1. Configure Analytics

Replace placeholder IDs in both `index.html` and `about.html`:

**Google Analytics:**
```javascript
// Replace GA_MEASUREMENT_ID with your actual GA4 measurement ID
gtag('config', 'GA_MEASUREMENT_ID');
```

**Facebook Pixel:**
```javascript
// Replace YOUR_PIXEL_ID with your actual Facebook Pixel ID
fbq('init', 'YOUR_PIXEL_ID');
```

### 2. Deploy to GitHub Pages

```bash
git push origin main
```

The site will automatically deploy via GitHub Actions.

### 3. KYC/Onboarding Integration

The signup form currently logs to console. Connect it to your backend API.

### 4. Test Locally

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## 📁 Project Structure

```
/
├── index.html          # Main trading platform page
├── about.html          # About page with CEO video
├── public/img/         # Images and logos
└── .github/workflows/  # GitHub Pages deployment
```

## 🎯 Next Steps

1. Replace `GA_MEASUREMENT_ID` with your Google Analytics ID
2. Replace `YOUR_PIXEL_ID` with your Facebook Pixel ID
3. Connect signup/login forms to your backend
4. Update SEC/FINRA registration numbers
5. Push to deploy: `git push origin main`

---

© 2025 Beyond Alpha Ventures. All rights reserved.
