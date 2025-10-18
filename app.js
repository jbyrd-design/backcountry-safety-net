/**
 * Backcountry Safety Net - Web App JavaScript
 * Interactive map, charts, and user interface functionality
 */

// ===================================
// Global Variables
// ===================================
let map;
let currentLayer = 'composite';
const studyAreaBounds = [[39.2, -105.8], [39.6, -105.2]];
const studyAreaCenter = [39.4, -105.5];

// Risk color scheme
const RISK_COLORS = {
    low: '#4caf50',
    moderate: '#ffc107',
    high: '#f44336',
    extreme: '#d32f2f'
};

// ===================================
// Navigation & Scroll Functionality
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMap();
    initializeCharts();
    initializeScrollEffects();
});

function initializeNavigation() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    
                    // Update active link
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Close mobile menu
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator?.addEventListener('click', () => {
        document.querySelector('#map').scrollIntoView({ behavior: 'smooth' });
    });
}

function initializeScrollEffects() {
    // Active navigation on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// Interactive Map (Leaflet)
// ===================================
function initializeMap() {
    // Initialize map centered on study area (zoom 10 to show all trails)
    map = L.map('mapContainer').setView(studyAreaCenter, 10);
    
    // Add terrain base layer (Esri World Topo Map)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Esri, USGS',
        maxZoom: 16
    }).addTo(map);
    
    // Add study area boundary
    const boundary = L.rectangle(studyAreaBounds, {
        color: '#2c5f2d',
        weight: 3,
        fillOpacity: 0,
        dashArray: '10, 5'
    }).addTo(map);
    
    // Add sample trail data
    addTrailData();
    
    // Add sample risk zones
    addRiskZones();
    
    // Layer control buttons
    const layerButtons = document.querySelectorAll('.layer-btn');
    layerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            layerButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const layer = btn.getAttribute('data-layer');
            switchMapLayer(layer);
        });
    });
}

function addTrailData() {
    // Load trail data from filtered GeoJSON file
    fetch('data/filtered_trails.geojson?v=' + Date.now())
        .then(response => response.json())
        .then(data => {
            // Trail name to ID mapping for detail pages
            const trailIdMap = {
                'Lost Creek Trail': 'lost-creek',
                'Goose Creek Trail': 'goose-creek',
                'Wigwam Trail': 'wigwam',
                'Brookside-McCurdy Trail': 'brookside',
                'Rolling Creek Trail': 'rolling-creek'
            };
            
            // Risk scores and trail info for each trail
            const riskScores = {
                'Lost Creek Trail': 2.3,
                'Goose Creek Trail': 1.6,
                'Wigwam Trail': 3.4,
                'Brookside-McCurdy Trail': 2.8,
                'Rolling Creek Trail': 1.4
            };
            
            // Trail numbers from COTREX data
            const trailNumbers = {
                'Lost Creek Trail': '#1808',
                'Goose Creek Trail': '#827',
                'Wigwam Trail': '#609',
                'Brookside-McCurdy Trail': '#607',
                'Rolling Creek Trail': '#663'
            };
            
            // Add GeoJSON layer to map
            L.geoJSON(data, {
                style: function(feature) {
                    // Use difficulty color from GeoJSON properties
                    const color = feature.properties.difficulty_color || RISK_COLORS.moderate;
                    return {
                        color: color,
                        weight: 5,
                        opacity: 0.8,
                        lineJoin: 'round',
                        lineCap: 'round'
                    };
                },
                onEachFeature: function(feature, layer) {
                    const props = feature.properties;
                    const trailName = props.name;
                    const baseTrailName = trailName.split('#')[0].trim();
                    const trailId = trailIdMap[baseTrailName] || 'unknown';
                    const risk = riskScores[baseTrailName] || 'N/A';
                    
                    // Hover tooltip
                    layer.bindTooltip(`
                        <strong>${trailName}</strong><br>
                        ${props.distance} • ${props.elevation_gain}
                    `, {
                        sticky: true
                    });
                    
                    // Click popup with link to detail page
                    layer.bindPopup(`
                        <div style="padding: 10px; min-width: 200px;">
                            <h4 style="margin: 0 0 10px 0; color: ${props.difficulty_color};">${trailName}</h4>
                            <p style="margin: 5px 0;"><strong>Distance:</strong> ${props.distance}</p>
                            <p style="margin: 5px 0;"><strong>Elevation Gain:</strong> ${props.elevation_gain}</p>
                            <p style="margin: 5px 0;"><strong>Difficulty:</strong> <span style="text-transform: capitalize; color: ${props.difficulty_color}; font-weight: 600;">${props.difficulty}</span></p>
                            <p style="margin: 5px 0;"><strong>Risk Score:</strong> ${risk}/4.0</p>
                            ${trailId !== 'unknown' ? `
                                <a href="trail-${trailId}.html" 
                                   style="display: inline-block; margin-top: 10px; padding: 8px 16px; background: #2c5f2d; color: white; text-decoration: none; border-radius: 5px; font-weight: 600;">
                                    View Details →
                                </a>
                            ` : ''}
                        </div>
                    `);
                    
                    // Double-click to navigate to detail page
                    if (trailId !== 'unknown') {
                        layer.on('dblclick', function() {
                            window.location.href = `trail-${trailId}.html`;
                        });
                    }
                }
            }).addTo(map);
            
            console.log(`Loaded ${data.features.length} trail features from GeoJSON`);
        })
        .catch(error => {
            console.error('Error loading trail data:', error);
            // Fallback: show error message
            alert('Unable to load trail data. Please check that data/filtered_trails.geojson exists.');
        });
}

function addRiskZones() {
    // Add sample risk zones (in production, this would come from GeoJSON)
    const riskZones = [
        {
            name: 'High Elevation Zone',
            bounds: [[39.40, -105.45], [39.50, -105.35]],
            risk: 'high',
            color: RISK_COLORS.high
        },
        {
            name: 'Moderate Risk Area',
            bounds: [[39.25, -105.60], [39.35, -105.50]],
            risk: 'moderate',
            color: RISK_COLORS.moderate
        },
        {
            name: 'Low Risk Zone',
            bounds: [[39.35, -105.55], [39.42, -105.48]],
            risk: 'low',
            color: RISK_COLORS.low
        }
    ];
    
    riskZones.forEach(zone => {
        const rectangle = L.rectangle(zone.bounds, {
            color: zone.color,
            weight: 2,
            fillColor: zone.color,
            fillOpacity: 0.2
        }).addTo(map);
        
        rectangle.bindPopup(`
            <div style="padding: 10px;">
                <h4 style="margin: 0 0 10px 0; color: ${zone.color};">${zone.name}</h4>
                <p style="margin: 5px 0;"><strong>Risk Level:</strong> <span style="text-transform: capitalize;">${zone.risk}</span></p>
            </div>
        `);
    });
}

function switchMapLayer(layer) {
    currentLayer = layer;
    // In production, this would swap between different risk factor layers
    console.log(`Switched to ${layer} layer`);
}

// ===================================
// Charts & Data Visualization
// ===================================
function initializeCharts() {
    createRiskDistributionChart();
    createRiskFactorsChart();
    createElevationRiskChart();
    createSeasonalChart();
}

function createRiskDistributionChart() {
    const ctx = document.getElementById('riskDistChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Low Risk', 'Moderate Risk', 'High Risk'],
            datasets: [{
                label: 'Trail Risk Distribution',
                data: [40, 40, 20],
                backgroundColor: [
                    RISK_COLORS.low,
                    RISK_COLORS.moderate,
                    RISK_COLORS.high
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                },
                title: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

function createRiskFactorsChart() {
    const ctx = document.getElementById('riskFactorsChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Terrain', 'Wildfire', 'Remoteness', 'Weather'],
            datasets: [{
                label: 'Average Risk Level',
                data: [2.4, 2.1, 2.3, 1.9],
                backgroundColor: [
                    'rgba(44, 95, 45, 0.8)',
                    'rgba(255, 152, 0, 0.8)',
                    'rgba(25, 118, 210, 0.8)',
                    'rgba(156, 39, 176, 0.8)'
                ],
                borderColor: [
                    '#2c5f2d',
                    '#ff9800',
                    '#1976d2',
                    '#9c27b0'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4,
                    ticks: {
                        stepSize: 1,
                        font: {
                            family: 'Inter'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Risk Level (1-4)',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Inter'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function createElevationRiskChart() {
    const ctx = document.getElementById('elevationRiskChart');
    if (!ctx) return;
    
    // Sample data showing risk vs elevation
    const elevations = [8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12400];
    const risks = [1.5, 1.8, 2.0, 2.3, 2.6, 2.9, 3.2, 3.5, 3.7, 3.9];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: elevations,
            datasets: [{
                label: 'Composite Risk',
                data: risks,
                borderColor: '#f44336',
                backgroundColor: 'rgba(244, 67, 54, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4,
                    title: {
                        display: true,
                        text: 'Risk Level',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Elevation (feet)',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

function createSeasonalChart() {
    const ctx = document.getElementById('seasonalChart');
    if (!ctx) return;
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const riskValues = [0.8, 0.9, 1.0, 1.1, 1.3, 1.4, 1.5, 1.4, 1.2, 1.0, 0.9, 0.8];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Seasonal Risk Multiplier',
                data: riskValues,
                borderColor: '#ff9800',
                backgroundColor: 'rgba(255, 152, 0, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Risk Multiplier',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Multiplier: ' + context.parsed.y.toFixed(1) + 'x';
                        }
                    }
                }
            }
        }
    });
}

// ===================================
// Trail Details Function
// ===================================
function showTrailDetails(trailId) {
    // Map trail IDs to their detail pages
    const trailPages = {
        'lost-creek': 'trail-lost-creek.html',
        'goose-creek': 'trail-goose-creek.html',
        'wigwam': 'trail-wigwam.html',
        'brookside': 'trail-brookside-mccurdy.html',
        'rolling-creek': 'trail-rolling-creek.html'
    };
    
    const page = trailPages[trailId];
    if (page) {
        window.location.href = page;
    } else {
        console.error(`Trail page not found for: ${trailId}`);
    }
}

// ===================================
// Utility Functions
// ===================================

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Calculate risk level based on score
function getRiskLevel(score) {
    if (score < 1.5) return 'Low';
    if (score < 2.5) return 'Moderate';
    if (score < 3.5) return 'High';
    return 'Extreme';
}

// Get color for risk score
function getRiskColor(score) {
    if (score < 1.5) return RISK_COLORS.low;
    if (score < 2.5) return RISK_COLORS.moderate;
    if (score < 3.5) return RISK_COLORS.high;
    return RISK_COLORS.extreme;
}

// ===================================
// Export functions for external use
// ===================================
window.showTrailDetails = showTrailDetails;
window.scrollToTop = scrollToTop;
