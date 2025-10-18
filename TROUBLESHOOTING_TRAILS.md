# Trail Display Troubleshooting Guide

## Issue: Trail Pages Showing Straight Lines Instead of Actual Trails

If individual trail pages are showing straight lines instead of detailed trail geometry from the GeoJSON, follow these troubleshooting steps:

---

## ✅ Updates Made

### 1. Main Map Zoom (app.js)
- **Changed:** Initial zoom from 11 to **10**
- **Effect:** All trails now visible on page load

### 2. Trail Page Colors (All Pages)
Updated all trail page elevation charts to match difficulty colors:

| Trail | Difficulty | Color | Chart Color |
|-------|-----------|-------|-------------|
| Lost Creek | Moderate | 🟡 #ffc107 | ✅ Fixed |
| Goose Creek | Easy | 🟢 #4caf50 | ✅ Correct |
| Wigwam | Difficult | 🟠 #ff9800 | ✅ Fixed |
| Brookside-McCurdy | Moderate | 🟡 #ffc107 | ✅ Fixed |
| Rolling Creek | Easy | 🟢 #4caf50 | ✅ Correct |

### 3. Console Logging (All Trail Pages)
Added detailed logging to help debug:
- GeoJSON fetch status
- Number of features loaded
- Number of trail segments found
- Error messages with alerts

---

## 🔍 Troubleshooting Steps

### Step 1: Clear Browser Cache

The most common issue is **browser caching**. Try these methods:

**Chrome/Edge:**
1. Press `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)
2. Or: DevTools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"

**Firefox:**
1. Press `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)

**Safari:**
1. Press `Cmd+Option+R`
2. Or: Develop menu → Empty Caches

### Step 2: Check Console for Errors

Open browser DevTools (F12 or right-click → Inspect) and check Console tab:

**Expected Output (Success):**
```
Fetching trail data for Lost Creek
Total features loaded: 26
Lost Creek segments found: 5
Trail layer added to map
```

**Error Indicators:**
- `HTTP error! status: 404` = GeoJSON file not found
- `Total features loaded: 26` but `segments found: 0` = Name mismatch
- No console output = JavaScript error or fetch blocked

### Step 3: Verify GeoJSON File

Check that the filtered GeoJSON exists:

```bash
ls -lh web_app/data/filtered_trails.geojson
```

**Expected:** ~550KB file

If missing, regenerate it:

```bash
cd web_app
python3 filter_trails.py
```

### Step 4: Check File Paths

All trail pages should load GeoJSON from:
```javascript
fetch('data/filtered_trails.geojson')
```

This is a **relative path** from the HTML file location.

**File Structure:**
```
web_app/
├── trail-lost-creek.html
├── trail-goose-creek.html
├── data/
│   └── filtered_trails.geojson
```

### Step 5: Test Individual Trail Page

Navigate to a trail page directly:
```
http://localhost:8000/trail-lost-creek.html
```

Check browser console for:
1. ✅ Fetch successful
2. ✅ Features loaded
3. ✅ Trail segments found
4. ❌ Any errors

### Step 6: Verify Trail Names

The filter looks for **exact trail names** in GeoJSON:

```javascript
// This must match exactly
f.properties.name === 'Lost Creek Trail'
```

Check trail names in GeoJSON:
```bash
cd web_app
python3 -c "import json; data=json.load(open('data/filtered_trails.geojson')); names = set([f['properties']['name'] for f in data['features']]); print('\n'.join(sorted(names)))"
```

**Expected Output:**
```
Brookside-McCurdy Trail
Goose Creek Trail
Lost Creek Trail
Rolling Creek Trail
Wigwam Trail
```

---

## 🐛 Common Issues & Solutions

### Issue: 404 Error on GeoJSON

**Symptom:** Console shows `HTTP error! status: 404`

**Solution:**
1. Verify file exists: `ls web_app/data/filtered_trails.geojson`
2. If missing, run: `python3 web_app/filter_trails.py`
3. Restart web server

### Issue: 0 Segments Found

**Symptom:** Console shows `segments found: 0`

**Solution:**
Trail name mismatch. Check exact names:
```bash
# In terminal
cd web_app
python3 -c "import json; data=json.load(open('data/filtered_trails.geojson')); print([f['properties']['name'] for f in data['features'][:5]])"
```

Update trail page filter to match exact name.

### Issue: Trails Still Not Showing

**Symptom:** No errors, but trails don't display

**Solution:**
1. **Hard refresh:** `Cmd+Shift+R` or `Ctrl+Shift+R`
2. **Clear site data:** DevTools → Application → Clear Storage → Clear site data
3. **Try incognito:** Open page in incognito/private window
4. **Restart server:** Stop and restart `python3 -m http.server 8000`

### Issue: CORS Error

**Symptom:** Console shows `Access-Control-Allow-Origin` error

**Solution:**
Must use a web server (not `file://`):
```bash
cd web_app
python3 -m http.server 8000
```

Then access via: `http://localhost:8000`

### Issue: Map Shows but No Trails

**Symptom:** Basemap loads, but trail lines don't appear

**Solution:**
1. Check console for JavaScript errors
2. Verify Leaflet.js loaded: Check Network tab for leaflet.js (200 status)
3. Check that `L.geoJSON()` function exists: Type `L.geoJSON` in console

---

## 📊 Expected Behavior

### Main Interactive Map (index.html)
- **Zoom Level:** 10 (shows all 5 trails)
- **Trails:** All 5 trails visible with correct colors
- **Interaction:** Hover for tooltip, click for popup

### Individual Trail Pages (trail-*.html)
- **Load:** GeoJSON fetches automatically
- **Display:** Detailed multi-segment trail geometry
- **Color:** Matches difficulty (green/amber/orange)
- **Zoom:** Auto-fits to show entire trail
- **Interaction:** Click trail for popup with info

---

## 🔧 Manual Verification

### Test 1: Check GeoJSON Content

```bash
cd web_app
head -30 data/filtered_trails.geojson
```

Should see:
```json
{
  "type": "FeatureCollection",
  "name": "Filtered_Trails",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Lost Creek Trail",
        ...
```

### Test 2: Count Features

```bash
python3 -c "import json; print(len(json.load(open('data/filtered_trails.geojson'))['features']))"
```

**Expected:** 26

### Test 3: Test Fetch

Open browser console on any trail page and run:

```javascript
fetch('data/filtered_trails.geojson')
  .then(r => r.json())
  .then(d => console.log('Features:', d.features.length))
```

**Expected:** `Features: 26`

---

## 🎨 Color Reference

All colors now consistent across app:

| Difficulty | Hex Code | RGB | Usage |
|-----------|----------|-----|-------|
| **Easy** | #4caf50 | rgb(76, 175, 80) | Rolling Creek, Goose Creek |
| **Moderate** | #ffc107 | rgb(255, 193, 7) | Lost Creek, Brookside-McCurdy |
| **Difficult** | #ff9800 | rgb(255, 152, 0) | Wigwam |

**Applied To:**
- ✅ Trail lines on maps
- ✅ Elevation chart lines
- ✅ Difficulty badges
- ✅ Trail cards

---

## 🚀 Quick Fix Checklist

Try these in order:

- [ ] 1. Hard refresh page (`Cmd+Shift+R`)
- [ ] 2. Check console for errors (F12)
- [ ] 3. Verify GeoJSON file exists
- [ ] 4. Clear browser cache completely
- [ ] 5. Try incognito window
- [ ] 6. Restart web server
- [ ] 7. Regenerate GeoJSON: `python3 filter_trails.py`
- [ ] 8. Check file paths are correct

---

## 📞 Still Having Issues?

If trails still show as straight lines after all troubleshooting:

1. **Check Console Output:**
   - Screenshot any errors
   - Note exact error messages

2. **Verify Setup:**
   ```bash
   # From project root
   ls web_app/data/filtered_trails.geojson  # Should exist
   cat web_app/trail-lost-creek.html | grep "fetch"  # Should see fetch call
   ```

3. **Test Main Map:**
   - Does `index.html` show detailed trails?
   - If yes: individual pages should work too
   - If no: GeoJSON issue or path problem

4. **Network Tab:**
   - Open DevTools → Network tab
   - Reload page
   - Check if `filtered_trails.geojson` loads (200 status)
   - If 404: path issue
   - If 200: check console for JavaScript errors

---

## ✅ Success Indicators

You'll know it's working when:

1. **Console shows:**
   ```
   Fetching trail data for [Trail Name]
   Total features loaded: 26
   [Trail Name] segments found: [2-13]
   Trail layer added to map
   ```

2. **Map displays:**
   - Detailed multi-segment trail paths
   - Correct difficulty colors
   - Trail follows actual terrain/turns
   - Not straight lines between points

3. **Interaction works:**
   - Click trail → popup with info
   - Trail auto-fits in view
   - Trail matches main map

---

**Last Updated:** October 17, 2025  
**Browser Cache:** If updated recently, MUST clear cache to see changes
