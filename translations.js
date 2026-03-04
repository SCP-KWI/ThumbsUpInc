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
        totalWarning: 'Cannot exceed 100%',
        strategyTitle: 'Current Strategy:',
        levelLabel: 'Level:',
        perView: '/view',
        
        // Buttons
        startButton: 'Start Game',
        playAgainButton: 'Play Again',
        continuePlayingButton: 'Continue Playing',
        viewReflectionButton: 'View Reflection',
        resumeGame: 'Resume Game',
        openDashboard: '📊 Pause / Open Dashboard',
        backToStart: 'Back to Start',
        
        // Welcome Screen
        welcomeTitle: ' 👍️ Welcome to Thumbs Up Inc. 👍️',
        welcomeText: 'You are the algorithm controlling a social media feed. Your goal is to maximize profit while keeping users engaged enough that they don\'t quit.',
        howToPlayTitle: 'How to Play:',
        howToPlay1: 'Use sliders to control what content appears in the feed',
        howToPlay2: 'Organic content keeps users happy but earns $0',
        howToPlay3: 'Ads generate revenue but make users unhappy',
        howToPlay4: 'Keep engagement above 20% or the user quits!',
        howToPlay5: 'Survive for 10 minutes to win',
        
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
        newContentUnlocked: 'NEW CONTENT UNLOCKED!',
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
        tooltipPropaganda: 'Political content designed to create outrage. Revenue scales with engagement ($6×engagement%). Very engaging through anger.',
        tooltipClickbait: 'Sensationalized headlines. Revenue scales with engagement ($4×engagement%). Moderately annoying and anger-inducing.',
        tooltipScams: 'Fraudulent offers. Extremely profitable but risky - users might quit immediately.',
        tooltipCharacter: 'Choose your customer (has no influence on the game)',
        tooltipLockSlider: 'Lock a slider in place',

        // Screen size warning
        smallScreenTitle: '🖥️ Screen Too Small',
        smallScreenText: 'Thumbs Up Inc. is designed for desktop screens. Please open it on a device with a screen width of at least 1000px.',

        // Tutorial
        tutorialOk: 'Ok',
        tutorialEngagement: 'The goal of the game is to keep your user on the platform. When engagement falls to 0, your user loses interest in Thumbs Up Inc and leaves the app.',
        tutorialEmotions: 'Happiness and anger drive your user\'s engagement. Make your users happy and/or angry to engage them with Thumbs Up Inc!',
        tutorialFeed: 'Here you can see the feed presented to your user. Posts can earn you money and will make the user happier, sadder or angrier.',
        tutorialSliders: 'With these sliders you can control the content mix your user will see. Increase the percentages for each content type to increase the likelihood such a post will be shown in the feed. Next to each content type you can see how much it will earn you and the impact such a post has on the user.',

        // Reflection Screen
        reflectionTitle: '💭 Reflection & Real-World Connection',
        statsTitle: '📊 Your Game Statistics',
        statsAvgHappiness: '😊 Average Happiness',
        statsAvgAnger: '😠 Average Anger',
        statsPostsShown: 'Posts Shown by Content Type',
        statsContentType: 'Content Type',
        statsCount: 'Count',
        statsRevenue: 'Revenue',
        reflectionQuestion1Title: 'What did you notice?',
        reflectionQuestion1Text: 'During the game, you had to balance profit against user well-being. What strategies did you use? Did you prioritize money or happiness?',
        reflectionQuestion2Title: 'Real-World Connection',
        reflectionQuestion2Text: 'Real social media platforms face similar decisions. They must balance:',
        reflectionPoint1: 'Advertising revenue vs. user experience',
        reflectionPoint2: 'Engagement (time on platform) vs. user happiness',
        reflectionPoint3: 'Viral content vs. quality content',
        reflectionPoint4: 'Short-term profits vs. long-term trust',
        reflectionQuestion3Title: 'Think About It',
        reflectionQuestion3Text: 'How does this game compare to your real social media use? What content do you see most often? How does it make you feel? What responsibility do platforms have to their users?',
        reflectionConclusion: 'Remember: Behind every feed is an algorithm making choices. Understanding these choices helps you become a more informed digital citizen.',
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
        totalWarning: 'Darf 100% nicht überschreiten',
        strategyTitle: 'Aktuelle Strategie:',
        levelLabel: 'Level:',
        perView: '/Ansicht',
        
        // Buttons
        startButton: 'Spiel starten',
        playAgainButton: 'Nochmal spielen',
        continuePlayingButton: 'Weiterspielen',
        viewReflectionButton: 'Reflexion ansehen',
        resumeGame: 'Spiel fortsetzen',
        openDashboard: '📊 Pause / Dashboard öffnen',
        backToStart: 'Zurück zum Start',
        
        // Welcome Screen
        welcomeTitle: '👍️ Willkommen bei Thumbs Up Inc. 👍️',
        welcomeText: 'Du bist der Algorithmus, der einen Social-Media-Feed kontrolliert. Dein Ziel ist es, den Profit zu maximieren und die Nutzer engagiert genug zu halten, dass sie nicht aufgeben.',
        howToPlayTitle: 'Wie man spielt:',
        howToPlay1: 'Verwende Schieberegler, um zu kontrollieren, welche Inhalte im Feed erscheinen',
        howToPlay2: 'Organische Inhalte halten Nutzer glücklich, verdienen aber $0',
        howToPlay3: 'Werbung generiert Umsatz, macht Nutzer aber unglücklich',
        howToPlay4: 'Halte das Engagement über 20%, oder der Nutzer geht!',
        howToPlay5: 'Überlebe 10 Minuten, um zu gewinnen',
        
        // Game Over Screen
        userLeftTitle: '😞 NUTZER HAT DIE PLATTFORM VERLASSEN!',
        userLeftReason: 'Engagement ist zu stark gesunken. Der Nutzer hat deine Plattform verlassen.',
        congratsTitle: 'GLÜCKWUNSCH!',
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
        tooltipPropaganda: 'Politische Inhalte die Empörung erzeugen. Umsatz skaliert mit Engagement ($6×Engagement%). Sehr fesselnd durch Wut.',
        tooltipClickbait: 'Sensationelle Schlagzeilen. Umsatz skaliert mit Engagement ($4×Engagement%). Mässig nervig und wut-erzeugend.',
        tooltipScams: 'Betrügerische Angebote. Extrem profitabel aber riskant - Nutzer könnten sofort gehen.',
        tooltipCharacter: 'Wähle deine Kund*in/deinen Kunden (hat keinen Einfluss auf das Spiel)',
        tooltipLockSlider: 'Schieberegler fixieren',

        // Screen size warning
        smallScreenTitle: '🖥️ Bildschirm zu klein',
        smallScreenText: 'Thumbs Up Inc. ist für Desktop-Bildschirme konzipiert. Bitte öffne es auf einem Gerät mit einer Bildschirmbreite von mindestens 1000px.',

        // Tutorial
        tutorialOk: 'Ok',
        tutorialEngagement: 'Das Ziel des Spiels ist es, deine Nutzer*in auf der Plattform zu halten. Wenn das Engagement auf 0 fällt, verliert dein*e Nutzer*in das Interesse an Thumbs Up Inc und verlässt die App.',
        tutorialEmotions: 'Freude und Wut treiben das Engagement dein*er Nutzer*in an. Mache dein*e Nutzer*in glücklich und/oder wütend, um sie bei Thumbs Up Inc zu engagieren!',
        tutorialFeed: 'Hier siehst du den Feed, der dein*er Nutzer*in präsentiert wird. Posts können dir Geld einbringen und werden den/die Nutzer*in glücklicher, trauriger oder wütender machen.',
        tutorialSliders: 'Mit diesen Schiebereglern kannst du den Inhalts-Mix steuern, den dein*e Nutzer*in sehen wird. Erhöhe die Prozentsätze für jeden Inhaltstyp, um die Wahrscheinlichkeit zu erhöhen, dass ein solcher Post im Feed erscheint. Neben jedem Inhaltstyp siehst du, wie viel er dir einbringt und welche Auswirkungen ein solcher Post auf dein*e Nutzer*in hat.',

        // Reflection Screen
        reflectionTitle: '💭 Reflexion & Realwelt-Verbindung',
        statsTitle: '📊 Deine Spiel-Statistiken',
        statsAvgHappiness: '😊 Durchschnittliche Freude',
        statsAvgAnger: '😠 Durchschnittliche Wut',
        statsPostsShown: 'Gezeigte Posts nach Inhaltstyp',
        statsContentType: 'Inhaltstyp',
        statsCount: 'Anzahl',
        statsRevenue: 'Umsatz',
        reflectionQuestion1Title: 'Was hast du bemerkt?',
        reflectionQuestion1Text: 'Während des Spiels musstest du Profit gegen das Wohlbefinden der Nutzer abwägen. Welche Strategien hast du verwendet? Hast du Geld oder Glück priorisiert?',
        reflectionQuestion2Title: 'Realwelt-Verbindung',
        reflectionQuestion2Text: 'Echte Social-Media-Plattformen stehen vor ähnlichen Entscheidungen. Sie müssen abwägen:',
        reflectionPoint1: 'Werbeumsatz vs. Nutzererfahrung',
        reflectionPoint2: 'Engagement (Zeit auf der Plattform) vs. Nutzerglück',
        reflectionPoint3: 'Virale Inhalte vs. Qualitätsinhalte',
        reflectionPoint4: 'Kurzfristige Profite vs. langfristiges Vertrauen',
        reflectionQuestion3Title: 'Denk darüber nach',
        reflectionQuestion3Text: 'Wie vergleicht sich dieses Spiel mit deiner echten Social-Media-Nutzung? Welche Inhalte siehst du am häufigsten? Wie fühlt es sich an? Welche Verantwortung haben Plattformen gegenüber ihren Nutzern?',
        reflectionConclusion: 'Denk daran: Hinter jedem Feed steht ein Algorithmus, der Entscheidungen trifft. Diese Entscheidungen zu verstehen hilft dir, ein informierterer digitaler Bürger zu werden.',
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
