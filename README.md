# Thumbs Up Inc. - Social Media Business Simulator

**Version:** 3.0 (Complete Edition)
**Author:** Philip (Kantonsschule Wiedikon)
**Target Audience:** 15-year-old students in CS class
**Languages:** English & German

## Overview

An educational game that teaches students about social media business models by having them play as "the algorithm" managing a social media feed. Students must balance profit maximization with user engagement to understand how platforms monetize attention.

Players experience the ethical tensions of social media platforms firsthand: higher profits often come at the cost of user wellbeing, while keeping users happy may mean sacrificing revenue.

## Features

### Core Gameplay
- ✅ **3-column responsive layout** (User Avatar, Feed Preview, Control Panel)
- ✅ **5-level progression system** with content unlocking
- ✅ **8 content types** with unique mechanics and revenue models
- ✅ **10-minute timed gameplay** with victory/loss conditions
- ✅ **Dynamic metrics system** (Engagement, Happiness, Anger)
- ✅ **Real-time revenue calculation** based on content mix and engagement
- ✅ **Game over mechanics** (low engagement or scam backfire)

### User Interface
- ✅ **Character selection** (Chloe, Kitty, Nick, Rob) with emotional portraits
- ✅ **9 emotional states** (happy1-3, neutral, sad1-3, angry1-3, bored)
- ✅ **Auto-scrolling feed** with realistic social media posts
- ✅ **Interactive sliders** with 100% total constraint
- ✅ **Visual feedback** through color-coded meters and animations
- ✅ **Dashboard overlay** with detailed statistics and charts
- ✅ **Tooltips** explaining all game mechanics

### Content & Localization
- ✅ **Bilingual support** (English/German) with language switcher
- ✅ **Enhanced post templates** with usernames, timestamps, and images
- ✅ **Profile images** (90+ unique avatars across 8 categories)
- ✅ **Post images** for organic content (music, homework, etc.)
- ✅ **Fully translated UI** including tooltips and help text

### Educational Components
- ✅ **Reflection screen** prompting students to think about real-world implications
- ✅ **Statistics tracking** showing average happiness, anger, and content distribution
- ✅ **Continue playing mode** for experimentation after winning
- ✅ **Progressive content unlocks** teaching escalating monetization strategies

## File Structure

```
/thumbs-up-inc/
├── index.html          # Main HTML structure with modals and overlays
├── styles.css          # Complete styling with responsive design
├── script.js           # Game logic, state management, UI updates
├── config.js           # Balance constants, content types, level definitions
├── translations.js     # English and German translations
├── posts.json          # Post templates with enhanced structure
├── /portraits/         # Character and profile images
│   ├── /chloe/        # Character portraits (9 emotions)
│   ├── /kitty/
│   ├── /nick/
│   ├── /rob/
│   ├── /regular/      # Profile images for organic content
│   ├── /companies/    # Profile images for ads
│   ├── /sponsored/    # Profile images for sponsored content
│   ├── /influencers/  # Profile images for influencer posts
│   ├── /viral/        # Profile images for viral content
│   ├── /propaganda/   # Profile images for propaganda
│   ├── /news/         # Profile images for clickbait
│   └── /scammers/     # Profile images for scams
├── /posts/            # Post content images
│   ├── music.jpg
│   ├── homework.jpg
│   └── ...
└── README.md          # This file
```

## Setup Instructions

1. **Download all files and folders** to a single directory
2. **Preserve folder structure** (especially `/portraits/` and `/posts/`)
3. **Open `index.html`** in a modern web browser
4. **Select language** (English or German)
5. **Choose character** (optional - purely cosmetic)
6. **Click "Start Game"** to begin

No server or installation required - runs entirely in the browser!

## How to Play

### Starting the Game
1. Click "Start Game" on the welcome screen
2. Read the instructions about balancing profit and user engagement
3. Your goal: Survive 10 minutes while earning money

### Controls
- Use **sliders** to adjust what percentage of each content type appears in the feed
- **Total must not exceed 100%** - adjusting one slider reduces others proportionally
- Content appears in the feed based on your mix percentages
- Watch the three metrics (Engagement, Happiness, Anger) on the left panel

### Winning & Losing
- **Win:** Keep engagement above 0% for the full 10 minutes
- **Lose:** Engagement drops to 0% OR user falls for a scam (5% chance with scam content)
- After game over, you can:
  - **Play Again** - restart from the beginning
  - **Continue Playing** - infinite mode for experimentation
  - **View Reflection** - see statistics and think about real-world implications

### Dashboard
- Click **"📊 Open Dashboard"** anytime to see:
  - Total earnings and money per minute
  - Revenue breakdown by content type
  - Current user metrics
  - Content type effects reference table

## Content Types & Strategy

### Level 1: The Organic Era
Unlocks at: **Game Start**

**Organic Content** (Blue)
- Revenue: $0/view
- Happiness: +2
- Anger: 0
- Strategy: Baseline content that keeps users happy but earns nothing

**Ads** (Gold)
- Revenue: $3/view
- Happiness: -5
- Anger: 0
- Strategy: Direct monetization with happiness penalty

### Level 2: Native Advertising
Unlocks at: **90 seconds OR $60**

**Sponsored Content** (Purple)
- Revenue: $3/view
- Happiness: -4
- Anger: 0
- Strategy: Disguised advertising, slightly less annoying than direct ads

### Level 3: The Influencer Economy
Unlocks at: **180 seconds OR $150**

**Influencer Partnerships** (Pink)
- Revenue: $1/view
- Happiness: +1
- Anger: 0
- Strategy: Lower revenue but positive for happiness - a balanced choice

**Viral Organic Content** (Green)
- Revenue: $0/view
- Happiness: +3
- Anger: 0
- Strategy: Makes users very happy but earns nothing

### Level 4: The Outrage Machine
Unlocks at: **300 seconds OR $280**

**Propaganda** (Red)
- Revenue: **$6×(engagement%)/view** (engagement-based!)
- Happiness: -6
- Anger: +8
- Strategy: High revenue that scales with engagement. Creates anger which boosts engagement - a dangerous feedback loop!

**Clickbait** (Orange)
- Revenue: **$4×(engagement%)/view** (engagement-based!)
- Happiness: -4
- Anger: +6
- Strategy: Moderate revenue that scales with engagement. Less extreme than propaganda.

**Note:** At 100% engagement, Propaganda earns $6/view. At 50% engagement, only $3/view. These values update live!

### Level 5: Maximum Extraction
Unlocks at: **420 seconds OR $500**

**Scams** (Dark Red)
- Revenue: $10/view
- Happiness: -15
- Anger: 0
- **Special:** 5% chance per scam post = instant game over!
- Strategy: Extremely profitable but very risky. Do you dare?

## Game Mechanics

### Metrics Explained

**📊 Engagement (0-100%)**
- How much time/attention the user spends scrolling
- Decays at -0.04 per update tick (natural boredom)
- Influenced by happiness: above 50% happiness → engagement rises, below 50% → engagement falls
- **Anger is very engaging!** Boosts engagement more than happiness
- Game over at 0% engagement

**😊 Happiness (0-100%)**
- User's emotional wellbeing
- Increased by organic, viral, and influencer content
- Decreased by ads, sponsored content, propaganda, clickbait, scams
- Threshold at 50%: above = good for engagement, below = bad for engagement

**😠 Anger (0-100%)**
- User frustration level
- Increased dramatically by propaganda and clickbait
- **Very engaging** - angry users scroll more!
- Naturally decays over time (people calm down)
- Creates ethical dilemma: profit through outrage?

### Revenue Calculation

Standard content:
```
Revenue per tick = base_revenue × (content_percentage/100) × (engagement/100)
```

Engagement-based content (Propaganda & Clickbait):
```
Revenue per tick = (base_revenue × engagement/100) × (content_percentage/100) × (engagement/100)
                  = base_revenue × (content_percentage/100) × (engagement/100)²
```

This means propaganda and clickbait earn MORE when engagement is high - creating a strategic synergy with anger-inducing content!

## Customization

### Editing Post Templates

Edit `posts.json` to customize what appears in the feed:

```json
{
  "organic": {
    "en": [
      {
        "username": "alex_friend",
        "heading": "Great day at the park!",
        "content": "Had an amazing time with friends today ☀️",
        "image": "park.jpg",
        "timestamp": "2h ago"
      }
    ],
    "de": [ ... ]
  }
}
```

### Adjusting Game Balance

Edit `config.js` to change difficulty and mechanics:

```javascript
const GAME_CONFIG = {
  GAME_DURATION: 600,              // Game length in seconds
  ENGAGEMENT_DECAY_RATE: 0.04,     // Base decay per tick (lower = easier)
  ENGAGEMENT_DEATH_THRESHOLD: 0,   // Game over threshold
  HAPPINESS_ENGAGEMENT_MULTIPLIER: 0.01,  // Happiness effect strength
  ANGER_ENGAGEMENT_MULTIPLIER: 0.008,     // Anger effect strength
  ANGER_DECAY_RATE: 0.1           // How fast anger decays
};
```

### Modifying Content Effects

Also in `config.js`, adjust individual content types:

```javascript
const CONTENT_TYPES = {
  propaganda: {
    revenue: 6,              // Base revenue
    happiness: -6,           // Happiness change
    anger: 8,               // Anger change
    engagementBased: true,  // Revenue scales with engagement
    unlockLevel: 4          // When it unlocks
  }
};
```

### Adjusting Level Requirements

Modify when new content unlocks:

```javascript
const LEVELS = [
  {
    number: 4,
    timeThreshold: 300,      // Unlock at 300 seconds OR
    moneyThreshold: 280,     // $280 earned (whichever comes first)
    unlocks: ['propaganda', 'clickbait']
  }
];
```

## Educational Goals

By playing this game, students should understand:

1. **Business Model Fundamentals**
   - Social media platforms are profit-driven businesses
   - Monetization primarily happens through advertising
   - "Free" platforms make money from user attention and data

2. **The Engagement Trap**
   - Platforms optimize for engagement, not happiness
   - Anger and outrage are highly engaging
   - Algorithms may promote content that makes users unhappy but keeps them scrolling

3. **Ethical Tensions**
   - Profit maximization often conflicts with user wellbeing
   - Companies face pressure to increase revenue quarter-over-quarter
   - The gap between what users want and what keeps them engaged

4. **Progression of Monetization**
   - Platforms start with simple organic content
   - Gradually introduce more invasive monetization
   - Native advertising designed to be less obvious
   - Algorithmic amplification of outrage for engagement

5. **Critical Thinking**
   - Recognizing when they're being manipulated by algorithms
   - Understanding why they see certain content
   - Questioning platform incentives
   - Being informed digital citizens

## Reflection Questions

After playing, students should discuss:

1. What strategies did you use? Did you prioritize money or happiness?
2. Did you use anger-inducing content? How did that feel?
3. How does this game compare to real social media platforms?
4. What content do you see most on your feeds? Why might that be?
5. What responsibility do platforms have to their users?
6. Should algorithms be designed to maximize engagement or wellbeing?
7. How can you be a more informed consumer of social media?

## Technical Details

### Browser Compatibility
Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires:
- ES6+ JavaScript support
- CSS Grid and Flexbox
- LocalStorage for settings persistence

### Performance
- Update interval: 400ms
- Post generation: 10 seconds
- Smooth animations and transitions
- Maximum 5 posts in feed DOM for performance

### Responsive Design
- Optimized for desktop browsers (1920×1080 reference)
- Scales to 85% for better fit
- Grid layout adapts to screen size
- Scrollable panels prevent overflow

## Troubleshooting

**Images not loading:**
- Ensure `/portraits/` and `/posts/` folders are in the same directory as `index.html`
- Check that folder structure matches exactly
- Verify image file names match those in `posts.json`

**Language not switching:**
- Check browser console for JavaScript errors
- Verify `translations.js` is loaded before `script.js`
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Game feels too easy/hard:**
- Adjust `ENGAGEMENT_DECAY_RATE` in `config.js` (lower = easier)
- Modify `HAPPINESS_ENGAGEMENT_MULTIPLIER` (higher = easier)
- Change level unlock thresholds

**Revenue displays not updating:**
- This is expected for Propaganda/Clickbait - they update every game tick
- Other content types have fixed revenue per view
- Check Dashboard for detailed revenue breakdown

## Credits

**Game Design & Development:** Philip
**Institution:** Kantonsschule Wiedikon
**Purpose:** Computer Science Education
**Target Group:** 15-year-old students

**Special Thanks:**
- Students for playtesting and feedback
- Teaching staff for educational guidance

## License

Educational use only. Free for classroom and teaching purposes.

## Version History

**3.0 (Complete Edition)** - Current
- Full bilingual support (English/German)
- 5-level progression system with 8 content types
- Character selection with emotional portraits
- Enhanced post templates with images and profile pictures
- Engagement-based revenue for propaganda/clickbait
- Dashboard with statistics and charts
- Reflection screen with educational prompts
- Continue playing mode

**2.0** - Not released
- Initial multi-level implementation

**1.0 (MVP)** - Initial release
- Basic 2-content type gameplay
- Single-language prototype
