# Contributing to Backcountry Safety Net

Thank you for your interest in contributing to the Backcountry Safety Net project! This document provides guidelines for contributing to this GIS-based recreation risk assessment application.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Data Attribution](#data-attribution)

---

## Code of Conduct

This project is an academic GIS project focused on backcountry safety. All contributors are expected to:

- Be respectful and professional
- Maintain data accuracy and proper attribution
- Follow best practices for GIS and web development
- Prioritize user safety in risk assessments

---

## How Can I Contribute?

### 🐛 Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS information
- Screenshots if applicable

### ✨ Suggesting Enhancements

Enhancement suggestions are welcome! Please include:
- Clear description of the proposed feature
- Use case and benefits
- Potential implementation approach

### 📝 Improving Documentation

Documentation improvements are always appreciated:
- Fix typos or unclear instructions
- Add examples or clarifications
- Update outdated information
- Translate documentation

### 💻 Code Contributions

Areas where contributions are valuable:
- Adding new trails with accurate USGS data
- Improving risk assessment algorithms
- Enhancing mobile responsiveness
- Adding data visualization features
- Performance optimizations
- Accessibility improvements

---

## Development Setup

### Prerequisites

- Python 3.8+
- Git
- Modern web browser
- Text editor/IDE

### Local Development

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/backcountry-safety-net.git
   cd backcountry-safety-net
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow coding standards (see below)
   - Test thoroughly
   - Update documentation

4. **Test locally**
   ```bash
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

---

## Coding Standards

### Python (server.py)

- Follow **PEP 8** style guide
- Use type hints where applicable
- Add docstrings to all functions
- Maximum line length: 88 characters
- Use meaningful variable names

**Example:**
```python
def get_trail_risk(elevation: float, slope: float) -> float:
    """
    Calculate risk score based on terrain factors.
    
    Args:
        elevation: Trail elevation in feet
        slope: Average slope in degrees
    
    Returns:
        Risk score from 0.0 to 4.0
    """
    # Implementation
```

### JavaScript (app.js)

- Use **ES6+ syntax**
- Consistent 4-space indentation
- Semicolons required
- Use `const` and `let`, avoid `var`
- Add JSDoc comments for functions

**Example:**
```javascript
/**
 * Initialize map with trail data
 * @param {number} lat - Latitude of center point
 * @param {number} lon - Longitude of center point
 */
function initializeMap(lat, lon) {
    // Implementation
}
```

### HTML/CSS

- Semantic HTML5 elements
- BEM-inspired CSS naming
- Mobile-first responsive design
- Consistent indentation (2 spaces)
- Accessibility attributes (ARIA labels)

### Data Standards

- All coordinates in decimal degrees (WGS84)
- Elevations in feet
- Distances in miles
- Proper USGS data attribution
- Cite all external data sources

---

## Pull Request Process

1. **Update Documentation**
   - README.md if adding features
   - Inline code comments
   - Update CHANGELOG.md

2. **Testing Checklist**
   - [ ] Works on Chrome, Firefox, Safari
   - [ ] Mobile responsive (test on phone)
   - [ ] No console errors
   - [ ] All links functional
   - [ ] Weather API loads correctly
   - [ ] Maps render properly

3. **Submit Pull Request**
   - Clear title describing the change
   - Detailed description of what changed
   - Reference related issues
   - Include screenshots if UI changes

4. **Code Review**
   - Address reviewer feedback
   - Make requested changes
   - Re-test after modifications

5. **Merge**
   - Squash commits if needed
   - Update version number
   - Close related issues

---

## Data Attribution

### Required Citations

When adding new trails or data:

1. **USGS Data**
   - Source: USGS 3D Elevation Program
   - Quad name and date
   - Example: `USGS Lost Park Quadrangle (1994)`

2. **Trail Data**
   - Source: USFS or COTREX
   - Last updated date
   - Example: `USFS Pike-San Isabel NF (2024)`

3. **Weather Data**
   - Always maintain WeatherAPI.com attribution
   - Include last updated timestamp

### Data Quality Standards

- Verify elevation data against USGS sources
- Cross-reference trail distances with official sources
- Document data collection methodology
- Include margin of error where applicable

---

## Commit Message Guidelines

Use conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(trails): add Brookside-McCurdy trail data

- Added trail coordinates from USGS quad
- Integrated elevation profile
- Added weather widget
- Updated trail count to 5

Closes #15
```

```
fix(map): resolve blank map initialization issue

- Removed duplicate tile layer
- Fixed addRiskZones function error
- Map now loads correctly

Fixes #23
```

---

## Questions?

For questions about contributing:
- Open an issue for discussion
- Check existing issues first
- Be specific and provide context

---

## Academic Integrity

This is an academic project for GEOG 578 at NMSU. When contributing:
- Respect academic integrity policies
- Do not submit others' work as your own
- Properly cite all sources
- Maintain scientific rigor

---

**Thank you for contributing to wilderness safety through GIS technology!** 🏔️
