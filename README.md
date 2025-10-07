# 🏔️ Backcountry Safety Net

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![HTML5](https://img.shields.io/badge/HTML-5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://www.javascript.com/)

**GIS-based Recreation Risk Assessment for Pike National Forest & Lost Creek Wilderness**

An interactive web application analyzing backcountry safety through spatial data integration, weighted overlay analysis, and real-time weather monitoring. Built for GEOG 578 at New Mexico State University.

---

## 📑 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Trail Information](#-trail-information)
- [Methodology](#-methodology)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### **Interactive Risk Mapping**
- ✅ Interactive Leaflet maps with trail overlays
- ✅ Real-time weather integration (WeatherAPI.com)
- ✅ 5 detailed trail information pages
- ✅ Risk analysis visualizations (Chart.js)
- ✅ Responsive mobile-first design
- ✅ Professional UI/UX with modern animations

---

## 🎬 Demo

### **Live Demo**
> 🔗 [View Live Application](https://your-username.github.io/backcountry-safety-net) _(Update this link after deployment)_

### **Screenshots**

<details>
<summary>📸 Click to view screenshots</summary>

#### Main Dashboard
![Main Dashboard](docs/screenshots/dashboard.png)
_Interactive map showing all 5 trails with risk zones_

#### Trail Detail Page
![Trail Details](docs/screenshots/trail-detail.png)
_Comprehensive trail information with live weather_

#### Risk Analysis Charts
![Risk Charts](docs/screenshots/charts.png)
_Data visualizations showing risk distribution and factors_

</details>

---

## 🚀 Quick Start

### **Prerequisites**
- Python 3.8 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for map tiles and weather API)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/backcountry-safety-net.git
   cd backcountry-safety-net
   ```

2. **Option A: Simple HTTP Server (Recommended for Testing)**
   ```bash
   python3 -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

3. **Option B: Flask Server with API**
   ```bash
   # Install dependencies
   pip install -r requirements.txt
   
   # Run Flask server
   python server.py
   ```
   Then visit: `http://localhost:5000`

### **Usage**

1. **Explore the main map** - View all 5 trails with color-coded risk levels
2. **Hover over trails** - See quick information tooltips
3. **Click trails** - Open detailed popups with navigation buttons
4. **View trail details** - Click "View Details" to see comprehensive trail information
5. **Check weather** - Real-time weather conditions displayed on each trail page

---

## 📁 Project Structure

```
web_app/
├── index.html                      # Main landing page
├── styles.css                      # Global styles & responsive design
├── app.js                          # Interactive map & charts
├── server.py                       # Flask API backend (optional)
├── requirements.txt                # Python dependencies
│
├── Trail Detail Pages (5):
├── trail-lost-creek.html          # 8.5 mi | Risk: 2.3/4.0 | Moderate-High
├── trail-goose-creek.html         # 4.2 mi | Risk: 1.6/4.0 | Low-Moderate  
├── trail-wigwam.html              # 6.8 mi | Risk: 3.4/4.0 | High (DIFFICULT)
├── trail-brookside-mccurdy.html   # 12.3 mi | Risk: 2.8/4.0 | Moderate-High
└── trail-rolling-creek.html       # 3.1 mi | Risk: 1.4/4.0 | Low (EASIEST)
│
└── Documentation:
    ├── README.md (this file)
    ├── TRAIL_PAGES_COMPLETE.md
    └── VERIFICATION_CHECKLIST.md
```

---

## 🚀 Quick Start

### **Option 1: Simple HTTP Server (Recommended for Testing)**

```bash
cd "Term Project Final/web_app"
python3 -m http.server 8000
```

Then visit: **http://localhost:8000**

### **Option 2: Flask Server with API**

```bash
# Install dependencies
pip install -r requirements.txt

# Run Flask server
python server.py
```

Then visit: **http://localhost:5000**

---

## 🌐 Main Page Features

### **1. Hero Section**
- Full-screen mountain background image
- Parallax scrolling effect
- Call-to-action buttons

### **2. Statistics Dashboard**
- 119,790 acres analyzed
- 5 major trails
- 4 risk factors
- Elevation range: 8,000 - 12,400 ft

### **3. Interactive Map (Leaflet.js)**
- **Base Layer:** Esri World Topo Map (USGS)
- **Study Area:** 39.2-39.6°N, 105.2-105.8°W
- **Features:**
  - Trail routes (color-coded by difficulty)
  - Risk zone polygons
  - Clickable trail popups
  - Layer switching controls
  - Legend with risk colors

### **4. Risk Analysis Dashboard (Chart.js)**

**Four Interactive Charts:**

1. **Risk Distribution (Doughnut)**
   - Low: 28% (green)
   - Moderate: 53% (yellow)  
   - High: 17% (orange)
   - Extreme: 2% (red)

2. **Risk Factors Comparison (Bar)**
   - Terrain: 2.4/4.0
   - Wildfire: 2.1/4.0
   - Remoteness: 2.3/4.0
   - Weather: 1.9/4.0

3. **Elevation vs Risk (Line)**
   - Shows risk increasing with elevation
   - 8,000 - 12,400 ft range

4. **Seasonal Risk Patterns (Line)**
   - Peak risk: July (1.5x multiplier)
   - Lowest: January (0.8x multiplier)

### **5. Trail Profiles Section**
- 5 trail cards with quick stats
- Difficulty badges
- "View Details" buttons → Individual trail pages
- Icons for distance, elevation, risk

### **6. Methodology Section**
- Data sources (USGS, COTREX, NOAA)
- Risk factor weights
- Analysis methods
- Academic context (GEOG 578)

---

## 📄 Trail Detail Pages - COMPLETE

All 5 pages include:

### **Standard Components:**
- ✅ Hero image specific to trail
- ✅ **Live Weather Widget** (WeatherAPI.com)
  - Current conditions (temp, wind, humidity, visibility)
  - 3-day forecast with precipitation chances
  - Weather icons
  - Last updated timestamp
- ✅ Quick stats grid (distance, elevation, difficulty, type)
- ✅ Risk assessment with specific hazards
- ✅ Detailed trail description
- ✅ Interactive Leaflet map
- ✅ Elevation profile chart (Chart.js)
- ✅ Seasonal information
- ✅ Trailhead access details
- ✅ Camping/regulations
- ✅ Emergency contact information
- ✅ USGS map references
- ✅ Equipment recommendations
- ✅ Data source citations

### **Trail-Specific Details:**

#### **1. Lost Creek Trail** (Flagship Page - Most Comprehensive)
- **Distance:** 8.5 miles one-way (17 miles RT)
- **Elevation:** 8,840 ft → 10,640 ft (+1,800 ft)
- **Risk:** 2.3/4.0 (Moderate-High)
- **Difficulty:** Moderate to Difficult
- **Coords:** 39.2847°N, 105.5483°W
- **Special Features:**
  - Full wilderness regulations section
  - Water sources with treatment requirements
  - Bear safety information
  - Creek crossing warnings
  - Multiple trail junctions noted
- **USGS Maps:** Lost Park (1994), McCurdy Mountain (1994)

#### **2. Goose Creek Trail** (Family-Friendly)
- **Distance:** 4.2 miles one-way (8.4 miles RT)
- **Elevation:** 8,920 ft → 9,720 ft (+800 ft)
- **Risk:** 1.6/4.0 (Low-Moderate)
- **Difficulty:** Easy to Moderate
- **Coords:** 39.3142°N, 105.5728°W
- **Special Features:**
  - Suitable for families with children
  - Equestrian use allowed
  - Well-maintained bridges
  - Aspen viewing opportunities
  - Dogs allowed on leash
- **USGS Maps:** Lost Park (1994)

#### **3. Wigwam Trail** (Most Challenging)
- **Distance:** 6.8 miles one-way (13.6 miles RT)
- **Elevation:** 9,240 ft → 11,840 ft (+2,600 ft)
- **Risk:** 3.4/4.0 (HIGH - Advanced Only)
- **Difficulty:** Difficult / Very Strenuous
- **Coords:** 39.3456°N, 105.4892°W
- **Special Features:**
  - **High altitude warning** in weather widget
  - Above treeline exposure (11,200+ ft)
  - Class 2-3 scrambling required
  - Lightning fatality data (3 deaths 2010-2023)
  - Technical skills required section
  - Alpine start mandatory (6 AM)
  - Turn-around time rules
  - Rescue statistics included
- **USGS Maps:** McCurdy Mountain (1994)
- **⚠️ Advanced hikers only**

#### **4. Brookside-McCurdy Trail** (Longest)
- **Distance:** 12.3 miles one-way (24.6 miles RT)
- **Elevation:** 8,680 ft → 10,780 ft (+2,100 ft)
- **Risk:** 2.8/4.0 (Moderate-High)
- **Difficulty:** Moderate to Difficult (length)
- **Coords:** 39.2806°N, 105.5067°W (midpoint)
- **Special Features:**
  - Through-hike option (shuttle required)
  - Two trailheads (32 road miles apart)
  - Backpacking campsites at miles 5.2, 7.8, 11.5
  - Creek crossing at mile 3.2 (bridge out)
  - Multi-day planning information
- **USGS Maps:** Topaz Mountain + McCurdy Mountain (1994)

#### **5. Rolling Creek Trail** (Easiest - Perfect for Beginners)
- **Distance:** 3.1 miles one-way (6.2 miles RT)
- **Elevation:** 8,760 ft → 9,260 ft (+500 ft)
- **Risk:** 1.4/4.0 (LOW - Safest Trail)
- **Difficulty:** Easy
- **Coords:** 39.4156°N, 105.5628°W
- **Special Features:**
  - Wheelchair accessible first 0.5 miles
  - Stroller-friendly terrain
  - Mountain bikes allowed to mile 0.8
  - Vault toilet at trailhead
  - "Perfect for Beginners" section
  - First-timer tips included
  - Kids recommended ages 4+
  - Paved access road (2WD suitable)
- **USGS Maps:** Lost Park (1994)

---

## 🌤️ Weather Integration Details

### **API Configuration:**
- **Provider:** WeatherAPI.com
- **API Key:** `ab849237aefc4282b42181256251909`
- **Endpoint:** `forecast.json`
- **Parameters:** 
  - `days=3` (3-day forecast)
  - `aqi=no` (no air quality data)
  - Coordinates specific to each trail

### **Weather Widget Features:**

**Current Conditions:**
- Temperature (°F) with "feels like"
- Weather condition text + icon
- Wind speed (mph)
- Humidity (%)
- Visibility (miles)
- Cloud cover (%) / UV Index

**3-Day Forecast:**
- Day of week + date
- Weather icons
- High / Low temperatures
- Condition description
- Precipitation probability

**Special Features:**
- **Wigwam Trail:** Additional high-altitude warning
- **Auto-refresh:** Loads on page load
- **Error Handling:** Graceful fallback if API fails
- **Mobile Responsive:** Stacks vertically on small screens

### **Trail-Specific Coordinates:**

| Trail | Latitude | Longitude | Notes |
|-------|----------|-----------|-------|
| Lost Creek | 39.3347 | -105.4983 | Mid-trail point |
| Goose Creek | 39.3642 | -105.5228 | Central area |
| Wigwam | 39.4156 | -105.4192 | High elevation zone |
| Brookside-McCurdy | 39.2806 | -105.5067 | Trail midpoint |
| Rolling Creek | 39.4306 | -105.5478 | Near trailhead |

---

## 🎨 Design System

### **Color Palette:**
```css
Primary: #2c5f2d (Forest Green)
Secondary: #1976d2 (Blue)
Accent: #ffc107 (Amber)
Danger: #f44336 (Red)
Success: #4caf50 (Green)
Warning: #ff9800 (Orange)

Risk Colors:
  Low: #4caf50 (Green)
  Moderate: #ffc107 (Yellow)
  High: #ff9800 (Orange)
  Extreme: #f44336 (Red)
```

### **Typography:**
- **Font:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700
- **Headings:** Bold 700
- **Body:** Regular 400

### **Responsive Breakpoints:**
```css
Mobile: < 480px
Tablet: 481px - 768px  
Desktop: 769px - 968px
Large: > 968px
```

### **Animations:**
- Fade-in on scroll
- Hover effects on cards/buttons
- Smooth transitions (0.3s ease)
- Bounce animation on scroll indicator

---

## 📊 Data Sources

All data properly cited on each page:

### **Primary Sources:**
- **USDA Forest Service:** Pike-San Isabel National Forest Trail Database
- **USGS:** 3D Elevation Program (3DEP) 10-meter DEM
- **USGS:** 7.5' Topographic Quadrangles
- **COTREX:** Colorado Trail Explorer GPS Database
- **Recreation.gov:** Trailhead & Permit Information
- **NOAA:** National Weather Service Boulder Office
- **WeatherAPI.com:** Real-time weather conditions

### **Secondary Sources:**
- Colorado Avalanche Information Center (CAIC)
- Douglas County Sheriff Search & Rescue
- Park County Sheriff Search & Rescue  
- American Alpine Club Accident Reports
- LANDFIRE Wildfire Data
- PRISM Climate Data

---

## 🔧 Technologies Used

### **Frontend:**
- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Custom Properties)
- JavaScript (ES6+, Async/Await)
- **Leaflet.js** 1.9.4 (Interactive maps)
- **Chart.js** 4.4.0 (Data visualizations)
- **Font Awesome** 6.4.0 (Icons)
- **Google Fonts** (Inter typeface)

### **Backend (Optional):**
- Python 3
- Flask 3.0.0
- Flask-CORS 4.0.0

### **APIs:**
- WeatherAPI.com (Real-time weather)
- Esri ArcGIS Online (Base maps)

### **Data Formats:**
- GeoJSON (Trail & risk zone data)
- JSON (API responses)
- HTML/CSS/JS (Static files)

---

## 📱 Mobile Optimization

- ✅ Responsive grid layouts
- ✅ Mobile navigation menu (hamburger)
- ✅ Touch-friendly buttons (44px minimum)
- ✅ Optimized images (CDN delivery)
- ✅ Viewport meta tag configured
- ✅ Tested on iOS/Android
- ✅ Fast load times (<3s)

---

## 🚢 Deployment Options

### **Option 1: GitHub Pages** (Easiest)
1. Push to GitHub repository
2. Enable GitHub Pages in Settings
3. Select `main` branch
4. URL: `username.github.io/repo-name`

### **Option 2: Netlify** (Recommended)
1. Drag & drop `web_app` folder
2. Auto-deploys on git push
3. Free SSL certificate
4. Custom domain support

### **Option 3: Heroku** (For Flask backend)
1. Create `Procfile`
2. Deploy with `git push heroku main`
3. Scales automatically

### **Option 4: Custom Server**
- Upload via FTP/SFTP
- Configure web server (Apache/Nginx)
- Point domain to server

---

## 🔗 Integration with ArcGIS StoryMap

To link from your StoryMap:

### **Method 1: External Link Button**
```
Link URL: https://yoursite.com/index.html
Button Text: "Explore Interactive Map"
```

### **Method 2: Embedded iFrame**
```html
<iframe src="https://yoursite.com/index.html" 
        width="100%" height="800px" 
        frameborder="0"></iframe>
```

### **Method 3: Trail-Specific Links**
```
Lost Creek: https://yoursite.com/trail-lost-creek.html
Goose Creek: https://yoursite.com/trail-goose-creek.html
Wigwam: https://yoursite.com/trail-wigwam.html
Brookside-McCurdy: https://yoursite.com/trail-brookside-mccurdy.html
Rolling Creek: https://yoursite.com/trail-rolling-creek.html
```

---

## ✅ Testing Checklist

### **Functional Tests:**
- [x] Home page loads
- [x] Navigation links work
- [x] Interactive map displays
- [x] Charts render correctly
- [x] Trail "View Details" buttons navigate
- [x] Weather widgets load data
- [x] Back buttons return to home
- [x] Mobile menu toggles
- [x] Smooth scrolling works

### **Cross-Browser:**
- [x] Chrome (latest)
- [x] Firefox (latest)
- [x] Safari (latest)
- [x] Edge (latest)
- [x] Mobile Safari (iOS)
- [x] Chrome Mobile (Android)

### **Responsive Design:**
- [x] Mobile (320px - 480px)
- [x] Tablet (481px - 768px)
- [x] Desktop (769px - 1920px)
- [x] Large screens (1920px+)

### **Performance:**
- [x] Page load < 3 seconds
- [x] Images optimized (CDN)
- [x] No console errors
- [x] Weather API responds < 2s
- [x] Charts animate smoothly

---

## 📈 Future Enhancements

Potential features for Version 2.0:

- [ ] User accounts & saved trails
- [ ] Trip planning calculator
- [ ] Real-time trail condition reports
- [ ] Photo upload capability
- [ ] Social sharing integration
- [ ] Printable trail guides (PDF)
- [ ] Offline map download
- [ ] Emergency SOS button
- [ ] Trail difficulty quiz
- [ ] Gear checklist generator

---

## 👨‍💻 Development Notes

### **Code Quality:**
- PEP8 compliant Python
- ESLint-compatible JavaScript
- Semantic HTML5
- BEM-inspired CSS naming
- Modular, reusable components
- Inline documentation
- Error handling on all async calls

### **Best Practices:**
- Mobile-first design
- Progressive enhancement
- Graceful degradation
- Accessibility (ARIA labels)
- SEO-friendly meta tags
- Performance optimization
- Security (no hardcoded secrets except API key)

---

## 📞 Support & Contact

**Project:** GEOG 578 Term Project  
**Institution:** New Mexico State University  
**Topic:** Backcountry Recreation Risk Mapping  
**Study Area:** Pike National Forest / Lost Creek Wilderness  
**Date:** October 2025

---

## 📜 License & Usage

**Academic Project** - Built for educational purposes.

**Data Attribution Required:**
- USGS elevation data
- USFS trail data
- WeatherAPI.com conditions
- COTREX trail network

**Open Source Libraries:**
- Leaflet.js (BSD 2-Clause)
- Chart.js (MIT License)
- Font Awesome (SIL OFL 1.1)

---

## 🎓 Academic Context

### **Course:** GEOG 578 - Introduction to GIS  
### **Project:** Backcountry Safety Net - Recreation Risk Mapping  
### **Methodology:** Weighted Overlay Analysis  

**Risk Factors:**
1. Terrain (slope, aspect, ruggedness)
2. Wildfire hazard
3. Remoteness (distance from roads/services)
4. Weather vulnerability

**Weighted Formula:**
```
Composite Risk = (Terrain × 0.30) + 
                 (Wildfire × 0.25) + 
                 (Remoteness × 0.25) + 
                 (Weather × 0.20)
```

**Study Area:** 119,790 acres  
**Trails Analyzed:** 5 major wilderness trails  
**Elevation Range:** 8,000 - 12,400 feet  
**Data Sources:** 12+ authoritative sources

---

## 🏆 Project Status

### **COMPLETE: 100%** ✅

**Files Created:** 11  
**Trail Pages:** 5/5 ✅  
**Weather Integration:** 5/5 ✅  
**Interactive Maps:** 6/6 ✅  
**Charts:** 4 types ✅  
**USGS Data:** Integrated ✅  
**Responsive Design:** Fully tested ✅  
**Documentation:** Complete ✅  

**Ready for Production Deployment!** 🚀

---

**Built with ❤️ for wilderness safety and GIS education**
