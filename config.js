// Thumbs Up Inc. - Game Configuration
// Phase 2: Complete rebalanced system

const GAME_CONFIG = {
  // Timer settings
  GAME_DURATION: 600, // 10 minutes in seconds
  UPDATE_INTERVAL: 400, // Game loop runs every 100ms
  
  // Engagement mechanics (all values are PER UPDATE TICK, not per second)
  ENGAGEMENT_DECAY_RATE: 0.04, // Base engagement decay per update tick
  ENGAGEMENT_DEATH_THRESHOLD: 0, // Game over if engagement drops to 0%
  ENGAGEMENT_WARNING_THRESHOLD: 20, // Visual warning threshold - flash red bar

  // Happiness/Anger effects on engagement (per update tick)
  // Happiness above 50% increases engagement, below 50% decreases it
  // The further from 50%, the stronger the effect
  HAPPINESS_ENGAGEMENT_MULTIPLIER: 0.01, // Per percentage point away from 50%
  ANGER_ENGAGEMENT_MULTIPLIER: 0.008, // Anger is more engaging than happiness!
  ANGER_DECAY_RATE: 0.1, // Anger naturally decays per update (people calm down)
  SCAM_ENGAGEMENT_DRAIN_PER_SEC: 2, // Engagement lost per second at 100% scam content (scales with scam %)
  
  // Feed settings
  POST_GENERATION_INTERVAL: 10000, // Generate new post every 2 seconds
  FEED_SCROLL_SPEED: 50, // Pixels per second
  MAX_POSTS_VISIBLE: 10, // Keep last 10 posts in DOM
  
  // UI thresholds for color coding
  METER_HIGH_THRESHOLD: 60, // Green
  METER_MEDIUM_THRESHOLD: 30, // Yellow
  // Below medium = Red
  
  // Starting values
  STARTING_ENGAGEMENT: 60,
  STARTING_HAPPINESS: 60,
  STARTING_ANGER: 0,
  STARTING_MONEY: 0
};

const CONTENT_TYPES = {
  organic: {
    name: 'Organic Content',
    nameDE: 'Organische Inhalte',
    revenue: 0,
    happiness: 2,
    anger: 0,
    color: '#5B8DC7',
    unlockLevel: 1,
    description: 'Non-monetized posts from friends (increases happiness)',
    descriptionDE: 'Nicht-monetisierte Posts von Freunden (erhöht Glück)'
  },
  ads: {
    name: 'Ads',
    nameDE: 'Werbung',
    revenue: 0.3,
    happiness: -5,
    anger: 0,
    color: '#D4A76A',
    unlockLevel: 1,
    description: 'Standard display advertisements (decreases happiness)',
    descriptionDE: 'Standard Werbeanzeigen (verringert Glück)'
  },
  partner: {
    name: 'Sponsored Content',
    nameDE: 'Gesponserte Inhalte',
    revenue: 0.3,
    happiness: -4,
    anger: 0,
    color: '#9B7EBD',
    unlockLevel: 2,
    description: 'Native advertising (revenue scales with engagement, small happiness penalty)',
    descriptionDE: 'Native Advertising (Umsatz skaliert mit Engagement, kleine Glücksstrafe)'
  },
  influencer: {
    name: 'Influencer Partnerships',
    nameDE: 'Influencer-Partnerschaften',
    revenue: 0.1,
    happiness: 1,
    anger: 0,
    color: '#E89AC7',
    unlockLevel: 3,
    description: 'Paid endorsements (less money but no happiness penalty)',
    descriptionDE: 'Bezahlte Empfehlungen (weniger Geld aber keine Glücksstrafe)'
  },
  viralOrganic: {
    name: 'Viral Organic Content',
    nameDE: 'Virale organische Inhalte',
    revenue: 0,
    happiness: 3,
    anger: 0,
    color: '#7FBF7F',
    unlockLevel: 3,
    description: 'Highly shareable content (very positive but earns nothing)',
    descriptionDE: 'Sehr teilbare Inhalte (sehr positiv aber verdient nichts)'
  },
  propaganda: {
    name: 'Propaganda',
    nameDE: 'Propaganda',
    revenue: 0.6,
    happiness: -6,
    anger: 8,
    color: '#C85A54',
    unlockLevel: 4,
    engagementBased: true,
    description: 'Political content (revenue scales with engagement: $6×engagement)',
    descriptionDE: 'Politische Inhalte (Umsatz skaliert mit Engagement: $6×Engagement)'
  },
  clickbait: {
    name: 'Clickbait',
    nameDE: 'Clickbait',
    revenue: 0.4,
    happiness: -4,
    anger: 6,
    color: '#E8A87C',
    unlockLevel: 4,
    engagementBased: true,
    description: 'Sensationalized headlines (revenue scales with engagement: $4×engagement)',
    descriptionDE: 'Sensationelle Schlagzeilen (Umsatz skaliert mit Engagement: $4×Engagement)'
  },
  scams: {
    name: 'Scams',
    nameDE: 'Betrug',
    revenue: 2,
    happiness: -15,
    anger: 0,
    color: '#8B4646',
    unlockLevel: 5,
    scamRisk: 0.05,
    description: 'Fraudulent offers (extremely profitable, 5% chance user quits immediately)',
    descriptionDE: 'Betrügerische Angebote (extrem profitabel, 5% Chance Nutzer geht sofort)'
  }
};

// Avatar states based on metrics
const AVATAR_STATES = {
  expression: {
    happy: { min: 60, emoji: '😊' },
    neutral: { min: 30, emoji: '😐' },
    sad: { min: 0, emoji: '😢' }
  },
  distance: {
    close: { min: 60, label: 'Very engaged' },
    medium: { min: 30, label: 'Moderately engaged' },
    far: { min: 0, label: 'Losing interest' }
  }
};

// Level unlock system
const LEVELS = [
  {
    number: 1,
    name: 'The Organic Era',
    nameDE: 'Die organische Ära',
    timeThreshold: 0,
    moneyThreshold: 0,
    unlocks: ['organic', 'ads'],
    popupEN: "Welcome to Thumbs Up Inc.! Right now, users see posts from friends and family. You earn $0. Investors are getting impatient...",
    popupDE: "Willkommen bei Thumbs Up Inc.! Momentan sehen Nutzer nur Posts von Freunden und Familie. Du verdienst $0. Die Investoren werden ungeduldig..."
  },
  {
    number: 2,
    name: 'Native Advertising',
    nameDE: 'Native Advertising',
    timeThreshold: 90,
    moneyThreshold: 20,
    unlocks: ['partner'],
    popupEN: "Great! Advertisers want to blend in. Sponsored Content looks like real posts but pays you money. Users might not even notice... at first.",
    popupDE: "Super! Werbetreibende wollen sich einfügen. Gesponserte Inhalte sehen aus wie echte Posts, bringen dir aber Geld. Die Nutzer merken es vielleicht nicht mal... am Anfang."
  },
  {
    number: 3,
    name: 'The Influencer Economy',
    nameDE: 'Die Influencer-Wirtschaft',
    timeThreshold: 180,
    moneyThreshold: 50,
    unlocks: ['influencer', 'viralOrganic'],
    popupEN: "Influencers have massive followings. Pay them to promote products. They're neutral for happiness! We've also improved our algorithm to find viral content - but it doesn't pay...",
    popupDE: "Influencer haben riesige Followerzahlen. Bezahle sie, um Produkte zu bewerben. Sie sind neutral fürs Glück! Wir haben auch unseren Algorithmus verbessert, um virale Inhalte zu finden - aber die zahlen nichts..."
  },
  {
    number: 4,
    name: 'The Outrage Machine',
    nameDE: 'Die Empörungsmaschine',
    timeThreshold: 300,
    moneyThreshold: 100,
    unlocks: ['propaganda', 'clickbait'],
    popupEN: "Political groups will pay BIG money to influence opinions. These ads pay MORE when users are highly engaged! Warning: Users will get angry... but angry users are VERY engaged users.",
    popupDE: "Politische Gruppen zahlen RICHTIG Geld, um Meinungen zu beeinflussen. Diese Anzeigen zahlen MEHR bei hohem Engagement! Warnung: Nutzer werden wütend... aber wütende Nutzer sind SEHR engagierte Nutzer."
  },
  {
    number: 5,
    name: 'Maximum Extraction',
    nameDE: 'Maximale Ausbeutung',
    timeThreshold: 420,
    moneyThreshold: 200,
    unlocks: ['scams'],
    popupEN: "Shady operators want to reach your users. It's risky - 5% chance users quit immediately - but the money is incredible.",
    popupDE: "Zwielichtige Anbieter wollen deine Nutzer erreichen. Es ist riskant - 5% Chance Nutzer gehen sofort - aber das Geld ist unglaublich."
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GAME_CONFIG, CONTENT_TYPES, AVATAR_STATES, LEVELS };
}
