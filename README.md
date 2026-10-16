# सुभाष चन्द विवेक कुमार ज्वेलर्स (Subhash Chand Vivek Kumar Jewellers)

A modern, responsive, uncluttered luxury landing page for **सुभाष चन्द विवेक कुमार ज्वेलर्स (Subhash Chand Vivek Kumar Jewellers)** (मोदनवाल परिवार).

---

## 🏛️ Shop Details & Contacts

- **Official Business / Shop Name:** सुभाष चन्द विवेक कुमार ज्वेलर्स (Subhash Chand Vivek Kumar Jewellers)
- **Main Store / New Address:** Patna Chauraha, near Dakkhana Gali
- **Heritage Store / Old Address:** Jaleshwar Nath Road, Bhalganj, Gorakhpur
- **Family & Proprietors:** श्री. कुशल चन्द्र मोदनवाल, श्री. सुभाष चन्द मोदनवाल, विवेक कुमार मोदनवाल (Modanwal Family)
- **First Mobile Number:** `8574591059`
- **Second Mobile Number:** `7394993006`
- **WhatsApp:** [https://wa.me/917394993006](https://wa.me/917394993006) (`7394993006`)

---

## ✨ Features & Design Highlights

1. **Official Shop Branding:**
   - Consistent use of **Subhash Chand Vivek Kumar Jewellers** across navigation, hero, metadata, schema markup, store cards, philosophy, WhatsApp enquiry messages, and footer.

2. **Automatic Indian Festival Calendar Management:**
   - Built-in astronomical calendar covering key Indian festivals (Diwali, Dhanteras, Dussehra, Karwa Chauth, New Year, Makar Sankranti/Khichdi Parv, Vasant Panchami, Maha Shivratri, Holi, Chaitra Navratri, Akshaya Tritiya, Teej, Raksha Bandhan, Janmashtami, and Ganesh Utsav).
   - Localized for Uttar Pradesh and Gorakhpur traditions (such as the sacred Khichdi Parv).
   - Evaluated strictly in the **Asia/Kolkata** time zone to avoid incorrect transitions around midnight.

3. **Strict Two-Day Replacement Rule:**
   - Active festival content remains displayed throughout the festival period.
   - Exactly **two days after the last festival mentioned in the active festival content has ended**, the system automatically removes the expired promotion and seamlessly transitions to the next relevant upcoming celebration.
   - Runs automatically on load and checks periodically so the site never shows outdated seasonal offers, even if unrefreshed for days.

4. **Sanskrit Shloka & Adornment Philosophy:**
   - Featuring Mahakavi Bhartrihari's celebrated *Niti Shatakam* verse (श्लोक १९):
     `केयूरा न विभूषयन्ति पुरुषं हारा न चन्द्रोज्ज्वलाः...`
   - Complete Hindi meaning (भावार्थ) & brand philosophy explaining that true adornment is trust, integrity, and grace.

5. **Our Two Stores Showcase:**
   - Dedicated cards for Patna Chauraha and Gorakhpur stores with direct click-to-call, WhatsApp, and Google Maps links.

6. **Curated Collections & Photo Gallery:**
   - High-resolution jewellery photography with Lightbox modal and direct WhatsApp enquiry.

---

## 📅 Testing Festival Transitions (Preview Mode)

To preview how the website automatically transitions between festivals, add the `?date=YYYY-MM-DD` query parameter to the URL in any browser:
- `http://localhost:3000/?date=2026-10-16` — Current active Diwali & Dhanteras season
- `http://localhost:3000/?date=2026-11-12` — Exactly 2 days after Bhai Dooj (Diwali still displayed)
- `http://localhost:3000/?date=2026-11-13` — 2 full days passed; transitions automatically to New Year & Winter Vivah
- `http://localhost:3000/?date=2027-01-04` — 2 days after New Year; transitions automatically to Makar Sankranti (Khichdi Parv)
- `http://localhost:3000/?date=2027-01-17` — 2 days after Khichdi; transitions to Vasant Panchami & Maha Shivratri
- `http://localhost:3000/?date=2027-04-20` — Akshaya Tritiya special showcase

Or run in browser developer console:
```js
FestivalManager.setSimulationDate('2027-01-14');
```

---

## 🚀 How to Run Locally

Double-click `index.html` or run:
```bash
python3 -m http.server 3000
```
Open `http://localhost:3000` in any browser.
