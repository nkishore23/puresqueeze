# PureSqueeze | Artisan Cold-Pressed Juice Bar & Wellness Storefront

A modern, production-quality storefront for an organic juice bar featuring fresh fruit-inspired design tokens, interactive category filtering, live cart management, and seamless WhatsApp ordering with Indian Rupee (₹) pricing.

---

## 🎨 Design System & Palette

- **Vibrant Orange (`#FF6B00`)**: Fresh citrus accent used for primary CTAs, active pills, badges, and pricing.
- **Fresh Lime Green (`#65A30D`)**: Botanical wellness accent for alkalinity tags, farm badges, and benefits.
- **Warm Cream Canvas (`#FAF6EE` & `#FFFDF9`)**: Organic, editorial background delivering a soft, premium aesthetic.
- **Rich Stone (`#1C1917` & `#57534E`)**: High-contrast, accessible typography for optimal legibility.
- **Official WhatsApp Green (`#25D366`)**: Instant conversational ordering CTAs and floating trigger.

---

## 🚀 Key Features

1. **Production-Quality Hero Section**:
   - Compelling headline with editorial highlights and floating micro-badges (*Farm to Glass*, *Hydraulic Cold Press*).
   - High-resolution fresh juice imagery with styled CSS fallback backgrounds.
2. **Category Filter Tabs**:
   - Filter seamlessly between *All Items*, *Cold-Pressed Juices*, *Super Smoothies*, *Wellness Shots*, and *Cleanse Packs*.
   - Live counter displaying active item counts.
3. **Interactive Juice Basket with Consolidated WhatsApp Ordering**:
   - Add items directly to your basket (`+ Add to Order`).
   - Modify quantities (`+` / `−`), view live subtotal calculations in Indian Rupees (`₹`).
   - Single-click checkout formats all items and totals into a pre-filled WhatsApp message.
4. **Individual WhatsApp Quick Order**:
   - Every product card features a direct WhatsApp button pre-filling the exact beverage name and price.
5. **Fast Delivery Inquiry Form**:
   - Collects customer name, delivery locality, and preferred drink, routing directly to the juice bar's WhatsApp line.
6. **Responsive Navigation & Mobile Drawer**:
   - Desktop navigation with scroll-aware active section highlights and glassmorphic header blur.
   - Smooth animated drawer for mobile screens with keyboard `Escape` accessibility.
7. **Robust Image Fallback Handling**:
   - High-quality Unsplash photography paired with styled CSS gradients and emoji fallbacks so the UI remains pristine even offline.

---

## 📁 File Structure

```
juice-shop/
├── index.html       # Semantic HTML5 storefront markup
├── style.css        # Custom design tokens, responsive layouts, and UI transitions
├── script.js        # Mobile drawer, category filters, cart & WhatsApp logic
└── README.md        # Documentation and verification guide
```

---

## 💻 How to Preview & Verify Interactions

### 1. Previewing Locally
- **Direct Browser Preview**: Double-click `index.html` in File Explorer, or right-click and choose **Open with > Chrome / Edge / Firefox / Safari**.
- **Local HTTP Server (Recommended)**:
  ```powershell
  python -m http.server 8000
  ```
  Open `http://localhost:8000` in your web browser.

### 2. Verifying Key Interactions
- **Mobile Navigation**: Shrink your browser window below 768px and click the hamburger icon in the top right to verify drawer slide-in and backdrop dismiss.
- **Category Filtering**: Click between *Cold-Pressed Juices*, *Super Smoothies*, *Wellness Shots*, and *Cleanse Packs* to verify card filtering and counter updates.
- **Add to Basket & Cart Management**: Click `+ Add` or `+ Add to Order` on any drink; observe the toast notification, basket counter badge increment, and drawer quantity adjustments.
- **WhatsApp Checkout**: Open the basket and click `Confirm on WhatsApp` (or any card's `WhatsApp` button) to verify the pre-filled message URL generation targeting `+91 98765 43210`.
- **Fast Delivery Form**: Scroll to the *Hours & Location* section, enter a name and delivery area, and submit to verify the formatted message generation.
# puresqueeze
