# Thumbs Up Inc. - Social Media Business Simulator

**Version:** 1.0 (Phase 1 - MVP)  
**Author:** Philip (Kantonsschule Wiedikon)  
**Target Audience:** 15-year-old students in CS class

## Overview

An educational game that teaches students about social media business models by having them play as "the algorithm" managing a social media feed. Students must balance profit maximization with user engagement to understand how platforms monetize attention.

## Phase 1 Features

This MVP implementation includes:

- ✅ 3-column responsive layout (User Avatar, Feed Preview, Control Panel)
- ✅ Two content types: Organic Content and Ads
- ✅ Engagement, Happiness, and Anger metrics
- ✅ 10-minute timer gameplay
- ✅ Money calculation based on content mix and engagement
- ✅ Game over when engagement drops below 20%
- ✅ Auto-scrolling feed with sample posts
- ✅ Interactive sliders with 100% constraint
- ✅ Visual feedback through meters and avatar animations

## File Structure

```
/thumbs-up-inc/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling
├── script.js           # Main game logic
├── config.js           # Balance constants & content definitions
├── posts.json          # Post templates (easily editable)
└── README.md           # This file
```

## Setup Instructions

1. **Download all files** to a single directory
2. **Open `index.html`** in a modern web browser (Chrome, Firefox, Safari, Edge)
3. **Click "Start Game"** to begin playing

No server or installation required - just open in browser!

## How to Play

1. Click "Start Game" to begin
2. Use the sliders to adjust content mix:
   - **Organic Content**: Keeps users happy but earns $0
   - **Ads**: Generates revenue but decreases happiness
3. Keep engagement above 20% for 10 minutes to win
4. Watch the user's happiness, anger, and engagement levels
5. Balance profit with user wellbeing

## Game Mechanics

### User Metrics

- **Engagement (0-100%)**: Time/attention user spends on platform
  - Decays at -2% per 10 seconds
  - Boosted by happiness (+0.5% per 10 happiness points)
  - Boosted by anger (+1% per 10 anger points)
  - Game over if drops below 20%

- **Happiness (0-100%)**: User's emotional wellbeing
  - Increased by organic content (+2 per second per 100%)
  - Decreased by ads (-5 per second per 100%)

- **Anger (0-100%)**: User's frustration level
  - Currently minimal in Phase 1 (no anger-inducing content yet)
  - Naturally decreases over time

### Content Types

**Organic Content**
- Revenue: $0
- Happiness: +2
- Engagement: +3
- Purpose: Baseline content, keeps users happy

**Ads**
- Revenue: $2 per view (scaled by engagement)
- Happiness: -5
- Engagement: 0
- Purpose: Monetization at the cost of happiness

### Money Calculation

```
Money per second = Σ (Content Type Revenue × Content Frequency × Engagement%)

Example:
- Ads at 30%, engagement at 75% = $2 × 0.30 × 0.75 = $0.45/second
```

## Customization

### Editing Post Templates

Edit `posts.json` to change the text that appears in the feed:

```json
{
  "organic": [
    "Your custom organic post here...",
    "Another friendly post..."
  ],
  "ads": [
    "Your custom ad here...",
    "Another advertisement..."
  ]
}
```

### Adjusting Game Balance

Edit `config.js` to change game difficulty:

```javascript
const GAME_CONFIG = {
  ENGAGEMENT_DECAY_RATE: 0.2,        // Lower = easier
  ENGAGEMENT_DEATH_THRESHOLD: 20,     // Lower = harder
  HAPPINESS_ENGAGEMENT_BONUS: 0.05,   // Higher = easier
  // ... etc
};
```

### Modifying Content Effects

Also in `config.js`:

```javascript
const CONTENT_TYPES = {
  organic: {
    revenue: 0,
    happiness: 2,    // Increase for more happiness
    engagement: 3    // Increase for more engagement
  },
  ads: {
    revenue: 2,      // Increase for more money
    happiness: -5,   // Make less negative to reduce penalty
    engagement: 0
  }
};
```

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Educational Goals

Students should understand:
1. Social media companies are profit-driven businesses
2. Monetization happens through ads and sponsored content
3. Platforms balance revenue with just enough user satisfaction
4. Showing organic content represents lost revenue
5. The tension between profit and user wellbeing

## Future Phases

Phase 2+ will add:
- Level unlocking system (6 levels)
- Additional content types (Sponsored, Influencer, Propaganda, Clickbait, Scams)
- Dashboard with statistics and charts
- German/English language switching
- More detailed post templates and styling
- Advanced game mechanics

## Credits

Educational game design by Philip for Kantonsschule Wiedikon CS students.

## License

Educational use only.
