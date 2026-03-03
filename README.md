# Thumbs Up Inc. - Social Media Business Simulator

**Target Audience:** 15-year-old students in CS class
**Languages:** English & German

## Overview

An educational game that teaches students about social media business models by having them play as "the algorithm" managing a social media feed. Students must balance profit maximization with user engagement to understand how platforms monetize attention.

Players experience the ethical tensions of social media platforms firsthand: higher profits often come at the cost of user wellbeing, while keeping users happy may mean sacrificing revenue.

## How to Play

### Starting the Game
1. Click "Start Game" on the welcome screen
2. Read the instructions about balancing profit and user engagement
3. Your goal: Survive 10 minutes while earning money

### Controls
- Use **sliders** to adjust what percentage of each content type appears in the feed
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
- *What it is:* Genuine posts from friends, family, and followed accounts — the original purpose of social media.
- Strategy: Baseline content that keeps users happy but earns nothing

**Ads** (Gold)
- *What it is:* Clearly labelled paid advertisements — the most transparent form of monetization on platforms.
- Strategy: Direct monetization with happiness penalty

### Level 2: Native Advertising
Unlocks at: **90 seconds OR $60**

**Sponsored Content** (Purple)
- *What it is:* Paid posts styled to look like organic content, making advertising harder to distinguish from genuine posts.
- Strategy: Disguised advertising, slightly less annoying than direct ads

### Level 3: The Influencer Economy
Unlocks at: **180 seconds OR $150**

**Influencer Partnerships** (Pink)
- *What it is:* Creators paid to promote products to their followers — blurring the line between personal recommendation and advertisement.
- Strategy: Lower revenue but positive for happiness - a balanced choice

**Viral Organic Content** (Green)
- *What it is:* Trending posts that spread rapidly because many users share them — often feel-good or entertaining content.
- Strategy: Makes users very happy but earns nothing

### Level 4: The Outrage Machine
Unlocks at: **300 seconds OR $280**

**Propaganda** (Red)
- *What it is:* Politically or ideologically charged content designed to provoke strong emotion and shape beliefs — highly engaging precisely because it makes people angry.
- Strategy: High revenue that scales with engagement. Creates anger which boosts engagement - a dangerous feedback loop!

**Clickbait** (Orange)
- *What it is:* Sensationalist headlines engineered to provoke curiosity or outrage, prioritising clicks over accuracy or value.
- Strategy: Moderate revenue that scales with engagement. Less extreme than propaganda.

**Note:** At 100% engagement, Propaganda earns $6/view. At 50% engagement, only $3/view. These values update live!

### Level 5: Maximum Extraction
Unlocks at: **420 seconds OR $500**

**Scams** (Dark Red)
- *What it is:* Fraudulent content that tricks users into giving away money or personal data — the most harmful content on real platforms, and notoriously difficult to moderate at scale.
- **Special:** 5% chance per scam post = instant game over!
- Strategy: Extremely profitable but very risky. Do you dare?

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

## License

CC-BY-NC [[https://creativecommons.org/licenses/by-nc/4.0/]]
