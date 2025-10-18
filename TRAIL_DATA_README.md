# Trail Data Integration - Implementation Guide

## Overview

The Backcountry Safety Net web application now displays **exact trail geometry** from the COTREX dataset instead of simplified straight lines. This provides users with accurate trail paths showing all turns, elevation changes, and terrain features.

## Changes Made

### 1. Trail Filtering Script (`filter_trails.py`)

Created a Python script that:
- Filters the full COTREX GeoJSON (96,972 features) to extract only 5 specific trails
- Adds difficulty level and color properties to each trail feature
- Exports a clean, filtered GeoJSON file (26 trail segments)

**Filtered Trails:**
1. **Wigwam Trail** - Difficult (Orange: `#ff9800`) - 4 segments
2. **Goose Creek Trail** - Easy (Green: `#4caf50`) - 2 segments
3. **Brookside-McCurdy Trail** - Moderate (Amber: `#ffc107`) - 13 segments
4. **Lost Creek Trail** - Moderate (Amber: `#ffc107`) - 5 segments
5. **Rolling Creek Trail** - Easy (Green: `#4caf50`) - 2 segments

### 2. Web Application Updates (`app.js`)

**Before:**
- Used hardcoded coordinate arrays (6-8 points per trail)
- Simple straight line connections between points
- Static, approximate trail paths

**After:**
- Loads actual trail geometry from `data/filtered_trails.geojson`
- Uses Leaflet GeoJSON layer for proper rendering
- Displays detailed trail paths with all geographic features
- Color-coded by difficulty level matching the existing design

### 3. Difficulty Color Mapping

Consistent with the original design:

| Difficulty | Color | Hex Code | Usage |
|-----------|-------|----------|-------|
| **Easy** | Green | `#4caf50` | Rolling Creek, Goose Creek |
| **Moderate** | Amber/Yellow | `#ffc107` | Lost Creek, Brookside-McCurdy |
| **Difficult** | Orange | `#ff9800` | Wigwam Trail |

### 4. Data Structure

The filtered GeoJSON includes enhanced properties:

```json
{
  "properties": {
    "name": "Wigwam Trail",
    "difficulty": "difficult",
    "difficulty_color": "#ff9800",
    "distance": "6.8 mi",
    "elevation_gain": "+2,600 ft",
    "surface": "dirt",
    "hiking": "yes",
    "trail_num": "635"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [[lon, lat], ...]
  }
}
```

## File Structure

```
web_app/
├── data/
│   └── filtered_trails.geojson    # Filtered trail data (26 features)
├── filter_trails.py               # Trail filtering script
├── app.js                         # Updated web app JavaScript
├── index.html                     # Main page (unchanged)
└── TRAIL_DATA_README.md          # This file
```

## Usage

### Running the Filter Script

If you need to regenerate the filtered trails:

```bash
cd web_app
python3 filter_trails.py
```

The script will:
1. Read from `../GOEJSON/COTREX_Trails.geojson`
2. Filter based on trail names and difficulty
3. Output to `data/filtered_trails.geojson`

### Adding New Trails

To add additional trails, edit `filter_trails.py`:

```python
TRAIL_FILTERS = [
    {
        'match_type': 'exact',        # or 'starts_with', 'contains'
        'name': 'Trail Name',
        'difficulty': 'moderate',      # easy, moderate, or difficult
        'distance': '5.2 mi',
        'elevation_gain': '+1,200 ft'
    }
]
```

Then re-run the script.

## Technical Details

### Trail Matching Logic

The filter script supports three match types:

1. **`exact`**: Trail name must exactly match (case-insensitive)
   - Example: "Lost Creek Trail" matches "Lost Creek Trail" only

2. **`starts_with`**: Trail name must start with the filter string
   - Example: "Wigwam Trail" matches "Wigwam Trail #635"

3. **`contains`**: Trail name must contain the filter string
   - Example: "Brookside-McCurdy" matches "Brookside-McCurdy Trail"

**Exclusions:**
- Roads (containing "road" in name)
- Trailhead access paths (containing "trailhead" in name)

### Web App Loading

The `addTrailData()` function in `app.js`:

1. Fetches the filtered GeoJSON file
2. Creates a Leaflet GeoJSON layer
3. Styles each trail using its `difficulty_color` property
4. Adds interactive tooltips and popups
5. Links to detail pages for each trail

### Browser Compatibility

The implementation uses:
- **Fetch API** for loading GeoJSON (modern browsers)
- **Leaflet 1.9.4** for map rendering
- **ES6 template literals** for HTML generation

## Validation

### Verify Trail Count

```bash
cd web_app
python3 -c "import json; data=json.load(open('data/filtered_trails.geojson')); print(f'Total features: {len(data[\"features\"])}')"
```

Expected output: `Total features: 26`

### Check Trail Names

```bash
python3 -c "import json; data=json.load(open('data/filtered_trails.geojson')); names = set([f['properties']['name'] for f in data['features']]); print('\n'.join(sorted(names)))"
```

Expected output:
```
Brookside-McCurdy Trail
Goose Creek Trail
Lost Creek Trail
Rolling Creek Trail
Wigwam Trail
```

## Data Sources

- **COTREX**: Colorado Trail Explorer database
  - Source: Colorado Parks and Wildlife
  - Total trails: 40,000+ miles statewide
  - Resolution: High-accuracy GPS tracks

- **Trail Properties**: USFS Trail Data
  - Distance measurements
  - Elevation data from USGS 3DEP
  - Trail surface and usage information

## Performance

**Before (Hardcoded):**
- 40 coordinate points total (all trails)
- Instant loading
- Approximate paths

**After (GeoJSON):**
- ~2,000+ coordinate points (exact geometry)
- ~50ms load time on modern browsers
- Accurate trail representation

## Future Enhancements

Potential improvements:

1. **Dynamic Trail Selection**: Add UI controls to toggle specific trails
2. **Trail Segments**: Break long trails into named segments
3. **Elevation Profile**: Add mouseover elevation data
4. **3D Visualization**: Integrate terrain elevation with trail paths
5. **Trail Conditions**: Add real-time condition updates via API

## Troubleshooting

### Map Not Loading Trails

1. Check browser console for errors (F12)
2. Verify `data/filtered_trails.geojson` exists
3. Ensure web server is serving the file (check CORS)
4. Test the GeoJSON at: https://geojson.io

### Incorrect Trail Colors

Colors are defined in `app.js`:

```javascript
const RISK_COLORS = {
    low: '#4caf50',      // Green (Easy)
    moderate: '#ffc107',  // Amber (Moderate)
    high: '#ff9800'      // Orange (Difficult)
};
```

And applied in `filter_trails.py`:

```python
DIFFICULTY_COLORS = {
    'easy': '#4caf50',
    'moderate': '#ffc107',
    'difficult': '#ff9800'
}
```

Ensure both files use matching color codes.

## Contact & Support

For questions about this implementation:
- Check the inline code comments in `filter_trails.py` and `app.js`
- Review the original COTREX dataset documentation
- Consult Leaflet GeoJSON documentation: https://leafletjs.com/reference.html#geojson

---

**Last Updated**: October 2025  
**Version**: 1.0  
**Course**: GEOG 578 - Intro to GIS, NMSU
