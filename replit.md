# Backcountry Safety Net

## Overview
GIS-based Recreation Risk Assessment web application for Pike National Forest & Lost Creek Wilderness. Built with Flask (Python backend) and vanilla JavaScript frontend with interactive Leaflet maps and Chart.js visualizations.

## Project Structure
- **Backend**: Flask server (`server.py`) serving static files and API endpoints
- **Frontend**: HTML/CSS/JS with Leaflet.js maps and Chart.js charts
- **Trail Pages**: 5 detailed trail information pages with live weather
- **Weather Integration**: WeatherAPI.com for real-time conditions

## Technology Stack
- Python 3.11 with Flask 3.0.0
- Leaflet.js 1.9.4 for interactive maps
- Chart.js 4.4.0 for data visualizations
- WeatherAPI.com for live weather data

## Recent Changes
- 2025-10-07: Mobile responsiveness improvements
  - Added comprehensive mobile CSS media queries for all pages
  - Optimized layouts for tablet (768px) and mobile (480px) viewports
  - Made all grids, navigation, and content mobile-friendly
  - Updated all 5 trail detail pages with mobile styles
  - Desktop functionality and styling fully preserved
- 2025-10-07: Initial Replit setup completed
  - Installed Python 3.11 and Flask dependencies
  - Created config.js with Weather API key
  - Configured Flask server for Replit (port 5000, host 0.0.0.0)
  - Setup workflow for frontend server

## Configuration
- Server runs on port 5000 (frontend)
- Weather API key stored in config.js (from README)
- Flask configured with CORS for API access

## Development Notes
- The application uses a simple Flask server to serve static files
- All trail pages include live weather widgets
- Interactive maps show 5 trails with risk assessments
- No database required - all data embedded in code
