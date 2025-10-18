#!/usr/bin/env python3
"""
Filter COTREX trails GeoJSON to include only specified trails
and add difficulty colors based on trail difficulty levels.
"""

import json
import sys
from pathlib import Path

# Difficulty color mapping from the web app
DIFFICULTY_COLORS = {
    'easy': '#4caf50',      # Green
    'moderate': '#ffc107',  # Amber/Yellow
    'difficult': '#ff9800'  # Orange
}

# Trail filter criteria with difficulty levels
TRAIL_FILTERS = [
    {
        'match_type': 'starts_with',
        'name': 'Wigwam Trail',
        'difficulty': 'difficult',
        'distance': '6.8 mi',
        'elevation_gain': '+2,600 ft'
    },
    {
        'match_type': 'exact',
        'name': 'Goose Creek Trail',
        'difficulty': 'easy',
        'distance': '4.2 mi',
        'elevation_gain': '+800 ft'
    },
    {
        'match_type': 'contains',
        'name': 'Brookside-McCurdy',
        'difficulty': 'moderate',
        'distance': '12.3 mi',
        'elevation_gain': '+2,100 ft'
    },
    {
        'match_type': 'exact',
        'name': 'Lost Creek Trail',
        'difficulty': 'moderate',
        'distance': '8.5 mi',
        'elevation_gain': '+1,800 ft'
    },
    {
        'match_type': 'exact',
        'name': 'Rolling Creek Trail',
        'difficulty': 'easy',
        'distance': '3.1 mi',
        'elevation_gain': '+500 ft'
    }
]


def matches_filter(trail_name, filter_config):
    """
    Check if a trail name matches the filter criteria.
    
    Args:
        trail_name: Name property from GeoJSON feature
        filter_config: Filter configuration dictionary
        
    Returns:
        bool: True if trail matches filter
    """
    if not trail_name or trail_name.strip() == ' ':
        return False
    
    trail_name_lower = trail_name.lower()
    filter_name_lower = filter_config['name'].lower()
    
    # Exclude roads/trailheads - we only want actual trails
    if 'road' in trail_name_lower or 'trailhead' in trail_name_lower:
        return False
    
    if filter_config['match_type'] == 'starts_with':
        return trail_name_lower.startswith(filter_name_lower)
    elif filter_config['match_type'] == 'exact':
        return trail_name_lower == filter_name_lower
    elif filter_config['match_type'] == 'contains':
        return filter_name_lower in trail_name_lower
    
    return False


def filter_trails(input_path, output_path):
    """
    Filter GeoJSON to include only specified trails with difficulty colors.
    
    Args:
        input_path: Path to input GeoJSON file
        output_path: Path to output filtered GeoJSON file
    """
    print(f"Reading GeoJSON from: {input_path}")
    
    # Read input GeoJSON
    with open(input_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f"Total features in input: {len(data['features'])}")
    
    # Filter features
    filtered_features = []
    trail_counts = {filter_config['name']: 0 for filter_config in TRAIL_FILTERS}
    
    for feature in data['features']:
        properties = feature.get('properties', {})
        trail_name = properties.get('name', '')
        
        # Check against each filter
        for filter_config in TRAIL_FILTERS:
            if matches_filter(trail_name, filter_config):
                # Add difficulty and color properties
                properties['difficulty'] = filter_config['difficulty']
                properties['difficulty_color'] = DIFFICULTY_COLORS[filter_config['difficulty']]
                properties['distance'] = filter_config['distance']
                properties['elevation_gain'] = filter_config['elevation_gain']
                
                filtered_features.append(feature)
                trail_counts[filter_config['name']] += 1
                
                print(f"✓ Found: {trail_name} (difficulty: {filter_config['difficulty']})")
                break
    
    # Create output GeoJSON
    output_data = {
        'type': 'FeatureCollection',
        'name': 'Filtered_Trails',
        'crs': data.get('crs'),
        'features': filtered_features,
        'metadata': {
            'description': 'Filtered trails for Backcountry Safety Net web app',
            'trail_count': len(filtered_features),
            'difficulty_colors': DIFFICULTY_COLORS
        }
    }
    
    # Write output GeoJSON
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2)
    
    # Print summary
    print(f"\n{'='*60}")
    print(f"Filtering complete!")
    print(f"{'='*60}")
    print(f"Total features filtered: {len(filtered_features)}")
    print(f"\nTrail breakdown:")
    for trail_name, count in trail_counts.items():
        print(f"  - {trail_name}: {count} feature(s)")
    print(f"\nOutput saved to: {output_path}")


def main():
    """Main function to run the trail filter."""
    # Define paths
    base_dir = Path(__file__).parent.parent
    input_file = base_dir / 'GOEJSON' / 'COTREX_Trails.geojson'
    output_file = Path(__file__).parent / 'data' / 'filtered_trails.geojson'
    
    # Create data directory if it doesn't exist
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    # Check if input file exists
    if not input_file.exists():
        print(f"Error: Input file not found: {input_file}")
        sys.exit(1)
    
    # Run filter
    filter_trails(str(input_file), str(output_file))


if __name__ == '__main__':
    main()
