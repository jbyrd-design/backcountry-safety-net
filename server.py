#!/usr/bin/env python3
"""
Backcountry Safety Net - Flask Web Server
Simple server to host the web application and serve GeoJSON data
"""

from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
import os
import json

app = Flask(__name__, static_folder='.')
CORS(app)

# Get the directory of the current script
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route('/')
def index():
    """Serve the main HTML page"""
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve static files (CSS, JS, images)"""
    return send_from_directory('.', path)

@app.route('/api/trails')
def get_trails():
    """API endpoint to get trail data"""
    trails = [
        {
            "type": "Feature",
            "properties": {
                "name": "Lost Creek Trail",
                "difficulty": "Moderate",
                "length_miles": 8.5,
                "elevation_gain": 1800,
                "risk_score": 2.3,
                "surface": "Natural",
                "uses": "Hiking, Backpacking"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.7, 39.25],
                    [-105.55, 39.35],
                    [-105.4, 39.45]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Goose Creek Trail",
                "difficulty": "Easy",
                "length_miles": 4.2,
                "elevation_gain": 800,
                "risk_score": 1.6,
                "surface": "Natural",
                "uses": "Hiking, Equestrian"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.6, 39.3],
                    [-105.55, 39.35],
                    [-105.5, 39.4]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Wigwam Trail",
                "difficulty": "Difficult",
                "length_miles": 6.8,
                "elevation_gain": 2600,
                "risk_score": 3.4,
                "surface": "Rocky",
                "uses": "Hiking, Mountaineering"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.5, 39.35],
                    [-105.38, 39.42],
                    [-105.3, 39.5]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Brookside-McCurdy Trail",
                "difficulty": "Moderate",
                "length_miles": 12.3,
                "elevation_gain": 2100,
                "risk_score": 2.8,
                "surface": "Natural",
                "uses": "Hiking, Backpacking"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.75, 39.4],
                    [-105.5, 39.48],
                    [-105.25, 39.55]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Rolling Creek Trail",
                "difficulty": "Easy",
                "length_miles": 3.1,
                "elevation_gain": 500,
                "risk_score": 1.4,
                "surface": "Maintained",
                "uses": "Hiking, Biking"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.65, 39.45],
                    [-105.6, 39.475],
                    [-105.55, 39.5]
                ]
            }
        }
    ]
    
    return jsonify({
        "type": "FeatureCollection",
        "features": trails
    })

@app.route('/api/risk-zones')
def get_risk_zones():
    """API endpoint to get risk zone data"""
    zones = [
        {
            "type": "Feature",
            "properties": {
                "risk_level": "Low",
                "risk_score": 1.3,
                "area_acres": 33500
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [-105.7, 39.25],
                    [-105.6, 39.25],
                    [-105.6, 39.35],
                    [-105.7, 39.35],
                    [-105.7, 39.25]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "risk_level": "Moderate",
                "risk_score": 2.2,
                "area_acres": 63500
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [-105.6, 39.35],
                    [-105.45, 39.35],
                    [-105.45, 39.5],
                    [-105.6, 39.5],
                    [-105.6, 39.35]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "risk_level": "High",
                "risk_score": 3.1,
                "area_acres": 20400
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [-105.45, 39.45],
                    [-105.3, 39.45],
                    [-105.3, 39.55],
                    [-105.45, 39.55],
                    [-105.45, 39.45]
                ]]
            }
        }
    ]
    
    return jsonify({
        "type": "FeatureCollection",
        "features": zones
    })

@app.route('/api/statistics')
def get_statistics():
    """API endpoint to get risk statistics"""
    stats = {
        "total_area_acres": 119790,
        "risk_distribution": {
            "low": 28,
            "moderate": 53,
            "high": 17,
            "extreme": 2
        },
        "risk_factors": {
            "terrain": 2.4,
            "wildfire": 2.1,
            "remoteness": 2.3,
            "weather": 1.9
        },
        "elevation_range": {
            "min": 8000,
            "max": 12400
        },
        "trail_count": 5,
        "total_trail_miles": 34.9
    }
    
    return jsonify(stats)

@app.route('/health')
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "message": "Backcountry Safety Net API is running"})

if __name__ == '__main__':
    print("=" * 60)
    print("Backcountry Safety Net - Web Application")
    print("=" * 60)
    print(f"Server starting on http://localhost:5000")
    print("Press Ctrl+C to stop the server")
    print("=" * 60)
    
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True
    )
