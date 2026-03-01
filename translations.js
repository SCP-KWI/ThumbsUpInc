// Thumbs Up Inc. - Complete Translations
// Phase 3: Full bilingual support

const TRANSLATIONS = {
    en: {
        // Header
        title: 'THUMBS UP INC.',
        subtitle: 'Manage the algorithm. Maximize profit. Keep them scrolling.',
        languageLabel: 'Language:',
        
        // Panels
        userTitle: 'USER',
        feedTitle: 'FEED PREVIEW',
        characterLabel: 'Character:',
        
        // Metrics
        engagementLabel: '📊 Engagement:',
        happinessLabel: '😊 Happiness:',
        angerLabel: '😠 Anger:',
        moneyLabel: '💰 Money:',
        timeLabel: '⏱️ Time:',
        
        // Control Panel
        contentMixTitle: 'CONTENT MIX',
        contentMixInstructions: 'Adjust sliders to control what users see. Total must not exceed 100%.',
        totalLabel: 'Total:',
        totalWarning: '⚠️ Cannot exceed 100%',
        strategyTitle: 'Current Strategy:',
        levelLabel: 'Level:',
        perView: '/view',
        
        // Buttons
        startButton: 'Start Game',
        playAgain: 'Play Again',
        continueButton: 'Continue Playing',
        viewReflection: 'View Reflection',
        resumeGame: 'Resume Game',
        openDashboard: '📊 Open Dashboard',
        backToStart: 'Back to Start',
        
        // Welcome Screen
        welcomeTitle: '🎮 Welcome to Thumbs Up Inc.',
        welcomeText: 'You are the algorithm controlling a social media feed. Your goal is to maximize profit while keeping users engaged enough that they don\'t quit.',
        howToPlay: 'How to Play:',
        howToPlayItems: [
            'Use sliders to control what content appears in the feed',
            'Organic content keeps users happy but earns $0',
            'Ads and other content generate revenue but affect user wellbeing',
            'Keep engagement above 20% or the user quits!',
            'Survive for 10 minutes and unlock all content types'
        ],
        
        // Game Over Screen
        userLeftTitle: '😞 USER HAS LEFT THE PLATFORM!',
        userLeftReason: 'Engagement dropped too low. The user quit your platform.',
        congratsTitle: '🎉 CONGRATULATIONS!',
        congratsReason: 'You survived the full 10 minutes! You\'ve successfully maximized profit while keeping the user engaged.',
        scamQuitReason: 'The user fell for a scam and quit in disgust!',
        finalScoreTitle: 'Final Score',
        moneyEarned: '💰 Money Earned:',
        timeSurvived: '⏱️ Time Survived:',
        finalEngagement: '📊 Final Engagement:',
        
        // Dashboard
        dashboardTitle: '📊 PERFORMANCE DASHBOARD',
        dashTotalEarnings: '💰 Total Earnings',
        dashMoneyRate: '💵 Money Per Minute',
        dashTimeElapsed: '⏱️ Time Elapsed',
        dashRevenueBreakdown: 'Revenue Breakdown',
        dashUserExperience: 'User Experience',
        dashCurrentHappiness: '😊 Current Happiness',
        dashCurrentAnger: '😠 Current Anger',
        dashCurrentEngagement: '📊 Current Engagement',
        dashContentEffects: 'Content Type Effects Reference',
        tableContentType: 'Content Type',
        tableRevenue: 'Revenue',
        tableHappiness: 'Happiness',
        tableAnger: 'Anger',
        tableEngagement: 'Engagement',
        
        // Unlock Popup
        newContentUnlocked: '🎉 NEW CONTENT UNLOCKED!',
        gotIt: 'Got it',
        
        // Tooltips
        tooltipEngagement: 'How much time users spend scrolling. Falls when bored or unhappy.',
        tooltipHappiness: 'User emotional wellbeing. Above 50% engagement rises, below 50% it falls.',
        tooltipAnger: 'User frustration. Very engaging but makes users miserable.',
        tooltipOrganic: 'Posts from friends and family. Makes users happy but earns nothing.',
        tooltipAds: 'Display advertisements. Decreases happiness, generates revenue.',
        tooltipPartner: 'Native advertising disguised as organic posts. Less annoying than ads.',
        tooltipInfluencer: 'Celebrity endorsements. Neutral for happiness, moderate revenue.',
        tooltipViral: 'Highly shareable content. Makes users very happy but earns nothing.',
        tooltipPropaganda: 'Political content designed to create outrage. Very engaging through anger.',
        tooltipClickbait: 'Sensationalized headlines. Moderately annoying and anger-inducing.',
        tooltipScams: 'Fraudulent offers. Extremely profitable but risky - users might quit immediately.',
        
        // Reflection Screen
        reflectionTitle: '💭 Reflection & Real-World Connection',
        reflectionQuestions: 'Think About:',
        reflectionQ1: 'How did it feel to prioritize money over user happiness?',
        reflectionQ2: 'What would a "healthy" social media platform look like?',
        reflectionQ3: 'Why don\'t real platforms choose to show more organic content?',
        reflectionQ4: 'Did you feel pressure to enable propaganda or scams? Why?',
        reflectionQ5: 'How does this compare to your own social media use?',
        realWorldTitle: '🌍 The Real World',
        realWorldText: 'Real social media platforms face these exact same pressures. Their algorithms optimize for "engagement" (time on platform) because that\'s how they make money from advertisers.\n\nResearch shows this often makes users unhappy, anxious, or angry - but those emotions keep people scrolling. Many platforms have been criticized for prioritizing profit over wellbeing.\n\nThink about your own social media use: Do you feel better or worse after scrolling? What content do you see most? Who benefits from your attention?'
    },
    de: {
        // Header
        title: 'THUMBS UP INC.',
        subtitle: 'Verwalte den Algorithmus. Maximiere den Profit. Halte sie am Scrollen.',
        languageLabel: 'Sprache:',
        
        // Panels
        userTitle: 'NUTZER',
        feedTitle: 'FEED-VORSCHAU',
        characterLabel: 'Charakter:',
        
        // Metrics
        engagementLabel: '📊 Engagement:',
        happinessLabel: '😊 Freude:',
        angerLabel: '😠 Wut:',
        moneyLabel: '💰 Geld:',
        timeLabel: '⏱️ Zeit:',
        
        // Control Panel
        contentMixTitle: 'INHALTS-MIX',
        contentMixInstructions: 'Passe Schieberegler an, um zu kontrollieren, was Nutzer sehen. Gesamt darf 100% nicht überschreiten.',
        totalLabel: 'Gesamt:',
        totalWarning: '⚠️ Darf 100% nicht überschreiten',
        strategyTitle: 'Aktuelle Strategie:',
        levelLabel: 'Level:',
        perView: '/Ansicht',
        
        // Buttons
        startButton: 'Spiel starten',
        playAgain: 'Nochmal spielen',
        continueButton: 'Weiterspielen',
        viewReflection: 'Reflexion ansehen',
        resumeGame: 'Spiel fortsetzen',
        openDashboard: '📊 Dashboard öffnen',
        backToStart: 'Zurück zum Start',
        
        // Welcome Screen
        welcomeTitle: '🎮 Willkommen bei Thumbs Up Inc.',
        welcomeText: 'Du bist der Algorithmus, der einen Social-Media-Feed kontrolliert. Dein Ziel ist es, den Profit zu maximieren und die Nutzer engagiert genug zu halten, dass sie nicht aufgeben.',
        howToPlay: 'Wie man spielt:',
        howToPlayItems: [
            'Verwende Schieberegler, um zu kontrollieren, welche Inhalte im Feed erscheinen',
            'Organische Inhalte halten Nutzer glücklich, verdienen aber $0',
            'Werbung und andere Inhalte generieren Umsatz, beeinflussen aber das Wohlbefinden',
            'Halte das Engagement über 20%, oder der Nutzer geht!',
            'Überlebe 10 Minuten und schalte alle Inhaltstypen frei'
        ],
        
        // Game Over Screen
        userLeftTitle: '😞 NUTZER HAT DIE PLATTFORM VERLASSEN!',
        userLeftReason: 'Engagement ist zu stark gesunken. Der Nutzer hat deine Plattform verlassen.',
        congratsTitle: '🎉 GLÜCKWUNSCH!',
        congratsReason: 'Du hast die vollen 10 Minuten überlebt! Du hast erfolgreich den Profit maximiert und den Nutzer engagiert gehalten.',
        scamQuitReason: 'Der Nutzer ist auf einen Betrug hereingefallen und hat angewidert die Plattform verlassen!',
        finalScoreTitle: 'Endpunktzahl',
        moneyEarned: '💰 Verdientes Geld:',
        timeSurvived: '⏱️ Überlebte Zeit:',
        finalEngagement: '📊 Finales Engagement:',
        
        // Dashboard
        dashboardTitle: '📊 PERFORMANCE DASHBOARD',
        dashTotalEarnings: '💰 Gesamtverdienst',
        dashMoneyRate: '💵 Geld pro Minute',
        dashTimeElapsed: '⏱️ Verstrichene Zeit',
        dashRevenueBreakdown: 'Umsatzaufschlüsselung',
        dashUserExperience: 'Nutzererfahrung',
        dashCurrentHappiness: '😊 Aktuelle Freude',
        dashCurrentAnger: '😠 Aktuelle Wut',
        dashCurrentEngagement: '📊 Aktuelles Engagement',
        dashContentEffects: 'Inhaltstypen-Effekte Referenz',
        tableContentType: 'Inhaltstyp',
        tableRevenue: 'Umsatz',
        tableHappiness: 'Freude',
        tableAnger: 'Wut',
        tableEngagement: 'Engagement',
        
        // Unlock Popup
        newContentUnlocked: '🎉 NEUER INHALT FREIGESCHALTET!',
        gotIt: 'Verstanden',
        
        // Tooltips
        tooltipEngagement: 'Wie viel Zeit Nutzer mit Scrollen verbringen. Fällt bei Langeweile oder Unzufriedenheit.',
        tooltipHappiness: 'Emotionales Wohlbefinden der Nutzer. Über 50% steigt Engagement, unter 50% fällt es.',
        tooltipAnger: 'Frustration der Nutzer. Sehr fesselnd, aber macht Nutzer unglücklich.',
        tooltipOrganic: 'Posts von Freunden und Familie. Macht Nutzer glücklich, verdient aber nichts.',
        tooltipAds: 'Display-Werbung. Verringert Glück, generiert Umsatz.',
        tooltipPartner: 'Native Advertising getarnt als organische Posts. Weniger nervig als Werbung.',
        tooltipInfluencer: 'Promi-Empfehlungen. Neutral fürs Glück, moderater Umsatz.',
        tooltipViral: 'Sehr teilbare Inhalte. Macht Nutzer sehr glücklich, verdient aber nichts.',
        tooltipPropaganda: 'Politische Inhalte die Empörung erzeugen. Sehr fesselnd durch Wut.',
        tooltipClickbait: 'Sensationelle Schlagzeilen. Mäßig nervig und wut-erzeugend.',
        tooltipScams: 'Betrügerische Angebote. Extrem profitabel aber riskant - Nutzer könnten sofort gehen.',
        
        // Reflection Screen
        reflectionTitle: '💭 Reflexion & Realwelt-Verbindung',
        reflectionQuestions: 'Denk nach über:',
        reflectionQ1: 'Wie hat es sich angefühlt, Geld über das Glück der Nutzer zu stellen?',
        reflectionQ2: 'Wie würde eine "gesunde" Social-Media-Plattform aussehen?',
        reflectionQ3: 'Warum zeigen echte Plattformen nicht mehr organische Inhalte?',
        reflectionQ4: 'Hast du dich unter Druck gefühlt, Propaganda oder Betrug zu aktivieren? Warum?',
        reflectionQ5: 'Wie vergleicht sich das mit deiner eigenen Social-Media-Nutzung?',
        realWorldTitle: '🌍 Die reale Welt',
        realWorldText: 'Echte Social-Media-Plattformen stehen vor genau denselben Herausforderungen. Ihre Algorithmen optimieren für "Engagement" (Zeit auf der Plattform), weil sie so Geld mit Werbetreibenden verdienen.\n\nForschung zeigt, dass dies Nutzer oft unglücklich, ängstlich oder wütend macht - aber diese Emotionen halten Menschen am Scrollen. Viele Plattformen wurden kritisiert, weil sie Profit über Wohlbefinden stellen.\n\nDenk über deine eigene Social-Media-Nutzung nach: Fühlst du dich besser oder schlechter nach dem Scrollen? Welche Inhalte siehst du am meisten? Wer profitiert von deiner Aufmerksamkeit?'
    }
};

// Export for browser (window object)
if (typeof window !== 'undefined') {
    window.TRANSLATIONS = TRANSLATIONS;
}

// Export for Node.js modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TRANSLATIONS;
}
