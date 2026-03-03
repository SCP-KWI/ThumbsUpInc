// Thumbs Up Inc. - Main Game Script
// Phase 2: Full Content & Progression

class ThumbsUpGame {
  constructor() {
    // Game state
    this.state = {
      isPlaying: false,
      isPaused: false,
      money: GAME_CONFIG.STARTING_MONEY,
      engagement: GAME_CONFIG.STARTING_ENGAGEMENT,
      happiness: GAME_CONFIG.STARTING_HAPPINESS,
      anger: GAME_CONFIG.STARTING_ANGER,
      timeRemaining: GAME_CONFIG.GAME_DURATION,
      timeElapsed: 0,
      currentLevel: 1,
      unlockedContent: ["organic", "ads"],
      contentMix: {
        organic: 100,
        ads: 0,
        partner: 0,
        influencer: 0,
        viralOrganic: 0,
        propaganda: 0,
        clickbait: 0,
        scams: 0,
      },
      revenueByType: {
        organic: 0,
        ads: 0,
        partner: 0,
        influencer: 0,
        viralOrganic: 0,
        propaganda: 0,
        clickbait: 0,
        scams: 0,
      },
      postsShownByType: {
        organic: 0,
        ads: 0,
        partner: 0,
        influencer: 0,
        viralOrganic: 0,
        propaganda: 0,
        clickbait: 0,
        scams: 0,
      },
      happinessSum: 0,
      angerSum: 0,
      emotionSamples: 0,
    };

    // Timers
    this.gameLoopInterval = null;
    this.feedGenerationInterval = null;
    this.lastUpdateTime = 0;

    // Post templates (will be loaded from JSON)
    this.postTemplates = {};

    // Current language
    this.currentLang = localStorage.getItem("thumbsUpLang") || "de";

    // Current character
    this.currentCharacter = localStorage.getItem("thumbsUpCharacter") || "chloe";

    this.externalTranslations = window.TRANSLATIONS || {};

    // Content type to profile image folder mapping
    this.profileImageFolders = {
      organic: 'regular',
      ads: 'companies',
      partner: 'sponsored',
      influencer: 'influencers',
      viralOrganic: 'viral',
      propaganda: 'propaganda',
      clickbait: 'news',
      scams: 'scammers'
    };

    // Translations
    this.translations = {
      en: {
        title: "THUMBS UP INC.",
        subtitle: "Manage the algorithm. Maximize profit. Keep them scrolling.",
        userTitle: "USER",
        feedTitle: "FEED PREVIEW",
        engagementLabel: "📊 Engagement:",
        happinessLabel: "😊 Happiness:",
        angerLabel: "😠 Anger:",
        moneyLabel: "💰 Money:",
        timeLabel: "⏱️ Time:",
        engagementLabelShort: "📊 Engagement:",
        contentMixTitle: "CONTENT MIX",
        contentMixInstructions:
          "Adjust sliders to control what users see. Total must not exceed 100%.",
        totalLabel: "Total:",
        totalWarning: "⚠️ Cannot exceed 100%",
        strategyTitle: "Current Strategy:",
        levelLabel: "Level:",
        view: "/view",
        startButton: "Start Game",
        playAgain: "Play Again",
        resumeGame: "Resume Game",
        openDashboard: "📊 Open Dashboard",
      },
      de: {
        title: "THUMBS UP INC.",
        subtitle:
          "Verwalte den Algorithmus. Maximiere den Profit. Halte sie am Scrollen.",
        userTitle: "NUTZER",
        feedTitle: "FEED VORSCHAU",
        engagementLabel: "📊 Engagement:",
        happinessLabel: "😊 Freude:",
        angerLabel: "😠 Wut:",
        moneyLabel: "💰 Geld:",
        timeLabel: "⏱️ Zeit:",
        engagementLabelShort: "📊 Engagement:",
        contentMixTitle: "INHALTS-MIX",
        contentMixInstructions:
          "Passe Schieberegler an, um zu kontrollieren, was Nutzer sehen. Gesamt darf 100% nicht überschreiten.",
        totalLabel: "Gesamt:",
        totalWarning: "⚠️ Darf 100% nicht überschreiten",
        strategyTitle: "Aktuelle Strategie:",
        levelLabel: "Level:",
        view: "/Ansicht",
        startButton: "Spiel starten",
        playAgain: "Nochmal spielen",
        resumeGame: "Spiel fortsetzen",
        openDashboard: "📊 Dashboard öffnen",
      },
    };

    // Initialize
    this.loadPostTemplates();
    this.setupEventListeners();
    this.initializeTooltips();
    this.setupPhase3EventListeners();
    this.applyLanguage();
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  async loadPostTemplates() {
    try {
      const response = await fetch("posts.json");
      this.postTemplates = await response.json();
    } catch (error) {
      console.error("Error loading post templates:", error);
    }
  }

  setupEventListeners() {
    document
      .getElementById("start-button")
      .addEventListener("click", () => this.startGame());
    document
      .getElementById("play-again-button")
      .addEventListener("click", () => this.resetGame());
    document
      .getElementById("dashboard-button")
      .addEventListener("click", () => this.openDashboard());
    document
      .getElementById("close-dashboard")
      .addEventListener("click", () => this.closeDashboard());
    document
      .getElementById("language-select")
      .addEventListener("change", (e) => this.switchLanguage(e.target.value));
    document.getElementById("language-select").value = this.currentLang;
    document
      .getElementById("character-select")
      .addEventListener("change", (e) => this.switchCharacter(e.target.value));
    document.getElementById("character-select").value = this.currentCharacter;

    window.addEventListener("resize", () => this.checkScreenSize());
    this.checkScreenSize();
  }

  checkScreenSize() {
    const warning = document.getElementById("small-screen-warning");
    if (window.innerWidth < 1000) {
      warning.classList.remove("hidden");
    } else {
      warning.classList.add("hidden");
    }
  }

  // ============================================
  // LANGUAGE MANAGEMENT
  // ============================================

  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem("thumbsUpLang", lang);
    this.applyLanguage();
    if (
      this.state.isPlaying ||
      document.getElementById("start-screen").classList.contains("hidden")
    ) {
      this.generateSliders();
    }
  }

  switchCharacter(character) {
    this.currentCharacter = character;
    localStorage.setItem("thumbsUpCharacter", character);
    this.updatePortrait();
  }

  applyLanguage() {
    const t = this.translations[this.currentLang];
    const ext = (this.externalTranslations[this.currentLang]) || {};

    // Update all elements with data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const value = t[key] || ext[key];
      if (value) {
        element.textContent = value;
      }
    });

    // Header
    document.querySelector("header h1").textContent = t.title;
    document.querySelector("header .subtitle").textContent = t.subtitle;

    // Buttons
    const dashboardButton = document.getElementById("dashboard-button");
    if (dashboardButton) dashboardButton.textContent = t.openDashboard;

    const startButton = document.getElementById("start-button");
    if (startButton) startButton.textContent = t.startButton;

    const playAgainButton = document.getElementById("play-again-button");
    if (playAgainButton) playAgainButton.textContent = t.playAgain;

    const closeDashboard = document.getElementById("close-dashboard");
    if (closeDashboard) closeDashboard.textContent = t.resumeGame;

    this.initializeTooltips();
    // Apply external translations if available
    if (this.externalTranslations[this.currentLang]) {
      const t = this.externalTranslations[this.currentLang];

      // Apply all data-i18n translations from external file
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (t[key]) {
          if (element.tagName === "INPUT" || element.tagName === "BUTTON") {
            element.value = t[key];
          } else {
            element.textContent = t[key];
          }
        }
      });
    }
  }

  t(key) {
    return this.translations[this.currentLang][key]
      || (this.externalTranslations[this.currentLang] || {})[key]
      || key;
  }

  // ============================================
  // GAME CONTROL
  // ============================================

  startGame() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    this.generateSliders();
    this.populateEffectsTable();
    this.state.isPlaying = true;
    for (let i = 0; i < 3; i++) this.generateFeedPost();
    this.updateUI();

    const startTutorial = () => {
      // Wait one animation frame so the browser has laid out the newly visible
      // game container (and settled any image-driven layout shifts) before
      // measuring element positions for the tutorial spotlight.
      requestAnimationFrame(() => {
        this.showTutorial(() => {
          this.lastUpdateTime = Date.now();
          this.gameLoopInterval = setInterval(
            () => this.gameLoop(),
            GAME_CONFIG.UPDATE_INTERVAL,
          );
          this.scheduleFeedPost();
        });
      });
    };

    const avatarImg = document.getElementById('avatar-portrait');
    if (avatarImg.complete) {
      startTutorial();
    } else {
      avatarImg.addEventListener('load',  startTutorial, { once: true });
      avatarImg.addEventListener('error', startTutorial, { once: true });
    }
  }

  showTutorial(onComplete) {
    const steps = [
      { targetId: 'engagement-metric', tail: 'left',  textKey: 'tutorialEngagement' },
      { targetId: 'emotions-metrics',  tail: 'left',  textKey: 'tutorialEmotions'   },
      { targetId: 'feed-container',    tail: 'left',  textKey: 'tutorialFeed'        },
      { targetId: 'sliders-container', tail: 'right', textKey: 'tutorialSliders'     },
    ];

    const overlay   = document.getElementById('tutorial-overlay');
    const spotlight = document.getElementById('tutorial-spotlight');
    const bubble    = document.getElementById('tutorial-bubble');
    const textEl    = document.getElementById('tutorial-text');
    const okBtn     = document.getElementById('tutorial-ok-btn');

    overlay.classList.remove('hidden');
    spotlight.classList.remove('hidden');
    bubble.classList.remove('hidden');

    let stepIndex = 0;

    const showStep = (i) => {
      const step = steps[i];
      textEl.setAttribute('data-i18n', step.textKey);
      textEl.textContent = this.t(step.textKey);
      bubble.setAttribute('data-tail', step.tail);

      const target = document.getElementById(step.targetId);
      const rect   = target.getBoundingClientRect();
      const pad    = 8;

      spotlight.style.left   = `${rect.left   - pad}px`;
      spotlight.style.top    = `${rect.top    - pad}px`;
      spotlight.style.width  = `${rect.width  + pad * 2}px`;
      spotlight.style.height = `${rect.height + pad * 2}px`;

      // Read actual rendered dimensions (forces reflow so size reflects current content)
      const bubbleW = bubble.offsetWidth;
      const bubbleH = bubble.offsetHeight;
      const gap     = 20;

      let left = step.tail === 'left'
        ? rect.right + gap
        : rect.left - bubbleW - gap;
      let top = rect.top + rect.height / 2 - bubbleH / 2;

      // Clamp within the visible viewport on both axes
      left = Math.max(8, Math.min(left, window.innerWidth  - bubbleW - 8));
      top  = Math.max(8, Math.min(top,  window.innerHeight - bubbleH - 8));

      bubble.style.left = `${left}px`;
      bubble.style.top  = `${top}px`;
    };

    showStep(0);

    if (this._tutorialOkHandler) {
      okBtn.removeEventListener('click', this._tutorialOkHandler);
    }

    this._tutorialOkHandler = () => {
      stepIndex++;
      if (stepIndex < steps.length) {
        showStep(stepIndex);
      } else {
        overlay.classList.add('hidden');
        spotlight.classList.add('hidden');
        bubble.classList.add('hidden');
        textEl.removeAttribute('data-i18n');
        okBtn.removeEventListener('click', this._tutorialOkHandler);
        this._tutorialOkHandler = null;
        onComplete();
      }
    };

    okBtn.addEventListener('click', this._tutorialOkHandler);
  }

  resetGame() {
    if (this.gameLoopInterval) clearInterval(this.gameLoopInterval);
    if (this.feedGenerationInterval) clearTimeout(this.feedGenerationInterval);
    this.state = {
      isPlaying: false,
      isPaused: false,
      money: 0,
      engagement: 100,
      happiness: 100,
      anger: 0,
      timeRemaining: 600,
      timeElapsed: 0,
      currentLevel: 1,
      unlockedContent: ["organic", "ads"],
      contentMix: {
        organic: 100,
        ads: 0,
        partner: 0,
        influencer: 0,
        viralOrganic: 0,
        propaganda: 0,
        clickbait: 0,
        scams: 0,
      },
      revenueByType: {
        organic: 0,
        ads: 0,
        partner: 0,
        influencer: 0,
        viralOrganic: 0,
        propaganda: 0,
        clickbait: 0,
        scams: 0,
      },
      postsShownByType: {
        organic: 0,
        ads: 0,
        partner: 0,
        influencer: 0,
        viralOrganic: 0,
        propaganda: 0,
        clickbait: 0,
        scams: 0,
      },
      happinessSum: 0,
      angerSum: 0,
      emotionSamples: 0,
    };
    document.getElementById("feed-container").innerHTML = "";
    document.getElementById("gameover-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
    document.getElementById("game-container").classList.add("hidden");
  }

  endGame(reason) {
    if (this.gameLoopInterval) clearInterval(this.gameLoopInterval);
    if (this.feedGenerationInterval) clearTimeout(this.feedGenerationInterval);
    this.state.isPlaying = false;

    const timeSurvived = GAME_CONFIG.GAME_DURATION - this.state.timeRemaining;
    const minutesSurvived = Math.floor(timeSurvived / 60);
    const secondsSurvived = Math.floor(timeSurvived % 60);

    if (reason === "engagement") {
      document.getElementById("gameover-title").textContent =
        this.currentLang === "de"
          ? "😞 NUTZER HAT DIE PLATTFORM VERLASSEN!"
          : "😞 USER HAS LEFT THE PLATFORM!";
      document.getElementById("gameover-reason").textContent =
        this.currentLang === "de"
          ? "Engagement ist zu stark gesunken. Der Nutzer hat deine Plattform verlassen."
          : "Engagement dropped too low. The user quit your platform.";
    } else if (reason === "scam") {
      document.getElementById("gameover-title").textContent =
        this.currentLang === "de"
          ? "😞 NUTZER HAT DIE PLATTFORM VERLASSEN!"
          : "😞 USER HAS LEFT THE PLATFORM!";
      document.getElementById("gameover-reason").textContent =
        this.currentLang === "de"
          ? "Der Nutzer ist auf einen Betrug hereingefallen und hat angewidert die Plattform verlassen!"
          : "The user fell for a scam and quit in disgust!";
    } else if (reason === "complete") {
      document.getElementById("gameover-title").textContent =
        this.currentLang === "de" ? "🎉 GLÜCKWUNSCH!" : "🎉 CONGRATULATIONS!";
      document.getElementById("gameover-reason").textContent =
        this.currentLang === "de"
          ? "Du hast die vollen 10 Minuten überlebt! Du hast erfolgreich den Profit maximiert und den Nutzer engagiert gehalten."
          : "You survived the full 10 minutes! You've successfully maximized profit while keeping the user engaged.";
    }

    document.getElementById("final-money").textContent = this.formatMoney(
      this.state.money,
    );
    document.getElementById("final-time").textContent =
      `${minutesSurvived}:${secondsSurvived.toString().padStart(2, "0")} / 10:00`;
    document.getElementById("final-engagement").textContent =
      Math.round(this.state.engagement) + "%";
    document.getElementById("gameover-screen").classList.remove("hidden");
  }

  // ============================================
  // GAME LOOP
  // ============================================

  gameLoop() {
    if (!this.state.isPlaying || this.state.isPaused) return;

    const now = Date.now();
    const deltaTime = (now - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = now;

    this.state.timeRemaining -= deltaTime;
    this.state.timeElapsed += deltaTime;

    if (this.state.timeRemaining <= 0) {
      this.state.timeRemaining = 0;
      this.endGame("complete");
      return;
    }

    this.checkLevelUnlocks();
    this.updateEngagement(deltaTime);
    this.updateEmotions(deltaTime);
    this.calculateMoney(deltaTime);

    // Track happiness/anger for reflection statistics
    this.state.happinessSum += this.state.happiness;
    this.state.angerSum += this.state.anger;
    this.state.emotionSamples++;

    if (this.state.engagement <= GAME_CONFIG.ENGAGEMENT_DEATH_THRESHOLD) {
      this.endGame("engagement");
      return;
    }

    this.updateUI();
  }

  updateEngagement(deltaTime) {
    // Base decay: user gets bored over time (per update tick)
    const decay = GAME_CONFIG.ENGAGEMENT_DECAY_RATE;

    // Happiness effect: centered at 50%
    // Above 50% happiness -> engagement rises
    // Below 50% happiness -> engagement falls
    // The further from 50%, the stronger the effect
    const happinessDelta = this.state.happiness - 50;
    const happinessEffect =
      happinessDelta * GAME_CONFIG.HAPPINESS_ENGAGEMENT_MULTIPLIER;

    // Anger effect: anger is very engaging (outrage keeps them scrolling!)
    // Anger is MORE engaging than happiness - that's the core mechanic
    const angerEffect =
      this.state.anger * GAME_CONFIG.ANGER_ENGAGEMENT_MULTIPLIER;

    // Apply all changes (per update tick, not per second)
    this.state.engagement += -decay + happinessEffect + angerEffect;
    this.state.engagement = this.clamp(this.state.engagement, 0, 100);
  }

  updateEmotions(deltaTime) {
    let happinessChange = 0;
    let angerChange = 0;

    for (const [type, percentage] of Object.entries(this.state.contentMix)) {
      if (percentage > 0 && CONTENT_TYPES[type]) {
        // Divide by 10 so config values can be whole numbers
        happinessChange +=
          (percentage / 100) * CONTENT_TYPES[type].happiness / 10;
        angerChange +=
          (percentage / 100) * CONTENT_TYPES[type].anger / 10;
      }
    }

    this.state.happiness += happinessChange;
    this.state.anger += angerChange;

    // Anger naturally decreases over time (people calm down)
    if (this.state.anger > 0) {
      this.state.anger -= GAME_CONFIG.ANGER_DECAY_RATE; // Anger decays per update
    }

    this.state.happiness = this.clamp(this.state.happiness, 0, 100);
    this.state.anger = this.clamp(this.state.anger, 0, 100);
  }

  calculateMoney(deltaTime) {
    for (const [type, percentage] of Object.entries(this.state.contentMix)) {
      if (percentage > 0 && CONTENT_TYPES[type]) {
        const revenue = CONTENT_TYPES[type].revenue;
        const frequency = percentage / 100;
        const engagementMultiplier = this.state.engagement / 100;

        const earningsThisTick =
          revenue * frequency * engagementMultiplier;
        this.state.money += earningsThisTick;
        this.state.revenueByType[type] += earningsThisTick;
      }
    }
  }

  // ============================================
  // LEVEL UNLOCKING
  // ============================================

  checkLevelUnlocks() {
    const timeElapsed = GAME_CONFIG.GAME_DURATION - this.state.timeRemaining;

    // Check all levels to see if any should unlock
    for (let i = 0; i < LEVELS.length; i++) {
      const level = LEVELS[i];
      const levelNumber = level.number; // 1, 2, 3, 4, 5

      // Only unlock if this level is higher than current and meets requirements
      // Requirements are OR - either time OR money threshold met
      if (levelNumber > this.state.currentLevel) {
        if (
          timeElapsed >= level.timeThreshold ||
          this.state.money >= level.moneyThreshold
        ) {
          this.unlockLevel(levelNumber);
          break; // Only unlock one level at a time
        }
      }
    }
  }

  unlockLevel(levelNumber) {
    console.log(`Unlocking level ${levelNumber}`);
    this.state.currentLevel = levelNumber;
    const level = LEVELS[levelNumber - 1];

    console.log(`Level unlocks:`, level.unlocks);
    console.log(`Current unlocked content before:`, this.state.unlockedContent);

    for (const contentType of level.unlocks) {
      if (!this.state.unlockedContent.includes(contentType)) {
        this.state.unlockedContent.push(contentType);
        console.log(`Added ${contentType} to unlocked content`);
      }
    }

    console.log(`Current unlocked content after:`, this.state.unlockedContent);

    this.showUnlockPopup(level);
    this.generateSliders();
    document.getElementById("current-level").textContent =
      this.state.currentLevel;
  }

  showUnlockPopup(level) {
    this.state.isPaused = true;
    const container = document.getElementById("unlock-popup-container");
    const popupText = this.currentLang === "de" ? level.popupDE : level.popupEN;

    let contentListHTML = "";
    for (const contentType of level.unlocks) {
      const ct = CONTENT_TYPES[contentType];
      const name = this.currentLang === "de" ? ct.nameDE : ct.name;

      // Build effects string safely
      const happinessStr =
        ct.happiness >= 0 ? "+" + ct.happiness : ct.happiness;
      const angerStr = ct.anger >= 0 ? "+" + ct.anger : ct.anger;

      // Get perView translation
      const perView = this.externalTranslations[this.currentLang]?.perView || this.translations[this.currentLang]?.perView || "/view";

      // Show engagement-based revenue for propaganda/clickbait
      let revenueDisplay;
      if (ct.engagementBased) {
        const currentRevenue = (ct.revenue * (this.state.engagement / 100)).toFixed(2);
        revenueDisplay = `💰$${currentRevenue}${perView} (=$${ct.revenue}×engagement)`;
      } else {
        revenueDisplay = `💰$${ct.revenue}${perView}`;
      }

      const effects =
        revenueDisplay + " | 😊" +
        happinessStr +
        " | 😠" +
        angerStr;

      contentListHTML += `
                <div class="unlock-content-item">
                    <div class="unlock-content-name">${name}</div>
                    <div class="unlock-content-effects">${effects}</div>
                </div>
            `;
    }

    const buttonText = this.currentLang === "de" ? "Verstanden" : "Got it";

    container.innerHTML = `
            <div class="modal-overlay">
                <div class="unlock-popup">
                    <h3>${this.currentLang === "de" ? "🎉 NEUER INHALT FREIGESCHALTET!" : "🎉 NEW CONTENT UNLOCKED!"}</h3>
                    <p>${popupText}</p>
                    <div class="unlock-content-list">
                        ${contentListHTML}
                    </div>
                    <div class="unlock-buttons">
                        <button id="unlock-close-button" class="btn btn-primary">${buttonText}</button>
                    </div>
                </div>
            </div>
        `;

    // Attach event listener after the DOM is updated
    const closeButton = document.getElementById("unlock-close-button");
    if (closeButton) {
      closeButton.addEventListener("click", () => this.closeUnlockPopup());
    }
  }

  closeUnlockPopup() {
    document.getElementById("unlock-popup-container").innerHTML = "";

    // Reset lastUpdateTime to prevent time catch-up after pause
    this.lastUpdateTime = Date.now();
    this.state.isPaused = false;
  }

  // ============================================
  // SLIDER CONTROLS
  // ============================================

  generateSliders() {
    const container = document.getElementById("sliders-container");
    container.innerHTML = "";

    for (const contentType of this.state.unlockedContent) {
      const ct = CONTENT_TYPES[contentType];

      // Skip if content type not found in config
      if (!ct) {
        console.error(
          `Content type '${contentType}' not found in CONTENT_TYPES`,
        );
        continue;
      }

      const name = this.currentLang === "de" ? ct.nameDE : ct.name;

      // Build effects string safely
      const happinessStr =
        ct.happiness >= 0 ? "+" + ct.happiness : ct.happiness;
      const angerStr = ct.anger >= 0 ? "+" + ct.anger : ct.anger;

      // Get perView translation
      const perView = this.externalTranslations[this.currentLang]?.perView || this.translations[this.currentLang]?.perView || "/view";

      // Calculate revenue display (engagement-based for propaganda/clickbait)
      let revenueDisplay;
      if (ct.engagementBased) {
        const engagementScaledRevenue = (ct.revenue * (this.state.engagement / 100)).toFixed(2);
        revenueDisplay = `💰$${engagementScaledRevenue}${perView}`;
      } else {
        revenueDisplay = `💰$${ct.revenue}${perView}`;
      }

      const effects =
        revenueDisplay + " | 😊" +
        happinessStr +
        " | 😠" +
        angerStr;

      // Get tooltip key based on content type
      // Special case: viralOrganic -> tooltipViral
      let tooltipKey;
      if (contentType === "viralOrganic") {
        tooltipKey = "tooltipViral";
      } else {
        tooltipKey = "tooltip" + contentType.charAt(0).toUpperCase() + contentType.slice(1);
      }

      const sliderGroup = document.createElement("div");
      sliderGroup.className = "slider-group";
      sliderGroup.innerHTML = `
                <label for="${contentType}-slider">
                    <span class="slider-name">${name}</span>
                    <span class="info-icon" data-tooltip-key="${tooltipKey}">ⓘ</span>
                    <span id="${contentType}-slider-info" class="slider-info">${effects}</span>
                </label>
                <div class="slider-controls">
                    <input type="range" id="${contentType}-slider" class="slider" min="0" max="100" value="${this.state.contentMix[contentType]}">
                    <span id="${contentType}-percentage" class="percentage-display">${this.state.contentMix[contentType]}%</span>
                </div>
            `;

      container.appendChild(sliderGroup);

      // Add event listener after appending to DOM
      const slider = document.getElementById(`${contentType}-slider`);
      if (slider) {
        slider.addEventListener("input", (e) => {
          this.updateSlider(contentType, parseInt(e.target.value));
        });
      }
    }

    this.updateSliderDisplay();
    this.initializeTooltips();
  }

  updateSlider(type, value) {
    const oldValue = this.state.contentMix[type];
    const change = value - oldValue;

    // Update the changed slider
    this.state.contentMix[type] = value;

    // Calculate current total
    let total = 0;
    for (const contentType of this.state.unlockedContent) {
      total += this.state.contentMix[contentType];
    }

    // If total exceeds 100%, reduce other sliders proportionally
    if (total > 100) {
      const excess = total - 100;
      const otherSliders = this.state.unlockedContent.filter(
        (ct) => ct !== type,
      );

      // Calculate total value of other sliders
      let otherTotal = 0;
      for (const ct of otherSliders) {
        otherTotal += this.state.contentMix[ct];
      }

      // Reduce each other slider proportionally
      if (otherTotal > 0) {
        for (const ct of otherSliders) {
          const proportion = this.state.contentMix[ct] / otherTotal;
          const reduction = excess * proportion;
          this.state.contentMix[ct] = Math.max(
            0,
            this.state.contentMix[ct] - reduction,
          );
        }
      } else {
        // If all other sliders are 0, cap this slider at 100
        this.state.contentMix[type] = 100;
      }
    }

    // Round all values
    for (const ct of this.state.unlockedContent) {
      this.state.contentMix[ct] = Math.round(this.state.contentMix[ct]);
    }

    this.updateSliderDisplay();
  }

  updateSliderDisplay() {
    for (const contentType of this.state.unlockedContent) {
      const slider = document.getElementById(`${contentType}-slider`);
      const display = document.getElementById(`${contentType}-percentage`);

      if (slider && display) {
        const roundedValue = Math.round(this.state.contentMix[contentType]);
        slider.value = roundedValue;
        display.textContent = roundedValue + "%";
        this.state.contentMix[contentType] = roundedValue;
      }
    }

    let total = 0;
    for (const contentType of this.state.unlockedContent) {
      total += this.state.contentMix[contentType];
    }

    document.getElementById("total-percentage").textContent =
      Math.round(total) + "%";

    const warning = document.getElementById("total-warning");
    if (total > 100) {
      warning.classList.remove("hidden");
    } else {
      warning.classList.add("hidden");
    }

    this.updateStrategyInfo();
  }

  updateStrategyInfo() {
    let moneyPerSec = 0;

    for (const [type, percentage] of Object.entries(this.state.contentMix)) {
      if (percentage > 0 && CONTENT_TYPES[type]) {
        moneyPerSec +=
          CONTENT_TYPES[type].revenue *
          (percentage / 100) *
          (this.state.engagement / 100);
      }
    }

    // Convert from money per tick to money per second
    const ticksPerSecond = 1000 / GAME_CONFIG.UPDATE_INTERVAL;
    moneyPerSec *= ticksPerSecond;

    const organicPct = this.state.contentMix.organic;
    let strategy = "";

    if (organicPct === 100) {
      strategy =
        this.currentLang === "de"
          ? "100% organischer Inhalt - verdient $0/sek"
          : "100% organic content - earning $0/sec";
    } else if (moneyPerSec === 0) {
      strategy =
        this.currentLang === "de"
          ? "Noch keine Monetarisierung - verdient $0/sek"
          : "No monetization yet - earning $0/sec";
    } else {
      strategy =
        this.currentLang === "de"
          ? `Verdient ~$${moneyPerSec.toFixed(2)}/sek`
          : `Earning ~$${moneyPerSec.toFixed(2)}/sec`;
    }

    document.getElementById("strategy-info").textContent = strategy;
  }

  // ============================================
  // FEED GENERATION
  // ============================================

  getRandomProfileImage(contentType) {
    const folder = this.profileImageFolders[contentType];
    if (!folder) return '';

    // Images are organized as r1-r3 (rows) and c1-c5 (columns)
    const row = Math.floor(Math.random() * 3) + 1; // 1-3
    const col = Math.floor(Math.random() * 5) + 1; // 1-5

    return `portraits/${folder}/${folder}_r${row}_c${col}.png`;
  }

  scheduleFeedPost() {
    let interval = GAME_CONFIG.POST_GENERATION_INTERVAL;
    if (this.state.engagement < 25) interval *= 1.25;
    else if (this.state.engagement > 75) interval *= 0.75;
    this.feedGenerationInterval = setTimeout(() => {
      if (!this.state.isPlaying) return;
      this.generateFeedPost();
      this.scheduleFeedPost();
    }, interval);
  }

  generateFeedPost() {
    if (!this.state.isPlaying) return;

    const feedContainer = document.getElementById("feed-container");

    const rand = Math.random() * 100;
    let cumulative = 0;
    let postType = "organic";

    for (const contentType of this.state.unlockedContent) {
      cumulative += this.state.contentMix[contentType];
      if (rand < cumulative) {
        postType = contentType;
        break;
      }
    }

    // Track post shown
    this.state.postsShownByType[postType]++;

    if (postType === "scams" && CONTENT_TYPES.scams.scamRisk) {
      if (Math.random() < CONTENT_TYPES.scams.scamRisk) {
        this.endGame("scam");
        return;
      }
    }

    const templates = this.postTemplates[postType]
      ? this.postTemplates[postType][this.currentLang]
      : null;
    if (!templates || templates.length === 0) return;

    const template = templates[Math.floor(Math.random() * templates.length)];

    const post = document.createElement("div");
    post.className = `post ${postType}`;

    // Get random profile image for this content type
    const profileImagePath = this.getRandomProfileImage(postType);

    // PHASE 3: Enhanced post structure
    if (typeof template === "object") {
      // New structure with username, heading, content, image, timestamp
      post.innerHTML = `
            <div class="post-header">
                <div class="post-avatar" style="background-image: url('${profileImagePath}');"></div>
                <div class="post-user">
                    <span class="post-username">${template.username || "User"}</span>
                    <span class="post-timestamp">${template.timestamp || "1h ago"}</span>
                </div>
            </div>
            <div class="post-content">
                ${template.heading ? `<h4 class="post-heading">${template.heading}</h4>` : ""}
                ${template.image && template.image.trim() !== '' ? `<img class="post-image" src="posts/${template.image}" alt="">` : ""}
                <p class="post-text">${template.content}</p>
            </div>
        `;
    } else {
      // Fallback for old string-based templates
      post.textContent = template;
    }

    feedContainer.insertBefore(post, feedContainer.firstChild);

    while (feedContainer.children.length > 5) {
      feedContainer.removeChild(feedContainer.lastChild);
    }
  }

  // ============================================
  // DASHBOARD
  // ============================================

  openDashboard() {
    this.state.isPaused = true;
    this.updateDashboard();
    document.getElementById("dashboard-overlay").classList.remove("hidden");
  }

  closeDashboard() {
    document.getElementById("dashboard-overlay").classList.add("hidden");

    // Reset lastUpdateTime to prevent time catch-up after pause
    this.lastUpdateTime = Date.now();
    this.state.isPaused = false;
  }

  updateDashboard() {
    document.getElementById("dash-total-money").textContent = this.formatMoney(
      this.state.money,
    );

    const moneyPerMinute =
      this.state.money / (this.state.timeElapsed / 60) || 0;
    document.getElementById("dash-money-rate").textContent =
      this.formatMoney(moneyPerMinute);

    const minutes = Math.floor(this.state.timeElapsed / 60);
    const seconds = Math.floor(this.state.timeElapsed % 60);
    document.getElementById("dash-time-elapsed").textContent =
      `${minutes}:${seconds.toString().padStart(2, "0")}`;

    document.getElementById("dash-happiness").textContent =
      Math.round(this.state.happiness) + "%";
    document.getElementById("dash-anger").textContent =
      Math.round(this.state.anger) + "%";
    document.getElementById("dash-engagement").textContent =
      Math.round(this.state.engagement) + "%";

    this.updateRevenueChart();
  }

  updateRevenueChart() {
    const chartContainer = document.getElementById("revenue-chart");
    chartContainer.innerHTML = "";

    let total = 0;
    for (const amount of Object.values(this.state.revenueByType)) {
      total += amount;
    }

    if (total === 0) {
      chartContainer.innerHTML =
        '<p style="text-align: center; color: var(--neutral-gray);">No revenue yet</p>';
      return;
    }

    for (const contentType of this.state.unlockedContent) {
      const amount = this.state.revenueByType[contentType];
      if (amount > 0) {
        const ct = CONTENT_TYPES[contentType];
        const name = this.currentLang === "de" ? ct.nameDE : ct.name;
        const percentage = (amount / total) * 100;

        const bar = document.createElement("div");
        bar.className = "chart-bar";
        bar.innerHTML = `
                    <div class="chart-label">${name}</div>
                    <div class="chart-bar-container">
                        <div class="chart-bar-fill" style="width: ${percentage}%; background-color: ${ct.color};">
                            ${percentage > 10 ? Math.round(percentage) + "%" : ""}
                        </div>
                    </div>
                    <div class="chart-value">${this.formatMoney(amount)}</div>
                `;
        chartContainer.appendChild(bar);
      }
    }
  }

  populateEffectsTable() {
    const tbody = document.getElementById("effects-table-body");
    tbody.innerHTML = "";

    for (const contentType of this.state.unlockedContent) {
      const ct = CONTENT_TYPES[contentType];
      const name = this.currentLang === "de" ? ct.nameDE : ct.name;

      // Show engagement-based revenue for propaganda/clickbait
      let revenueDisplay;
      if (ct.engagementBased) {
        const currentRevenue = (ct.revenue * (this.state.engagement / 100)).toFixed(2);
        revenueDisplay = `$${currentRevenue} ($${ct.revenue}×eng)`;
      } else {
        revenueDisplay = `$${ct.revenue}`;
      }

      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${name}</td>
                <td>${revenueDisplay}</td>
                <td>${ct.happiness >= 0 ? "+" : ""}${ct.happiness}</td>
                <td>${ct.anger >= 0 ? "+" : ""}${ct.anger}</td>
            `;
      tbody.appendChild(row);
    }
  }

  // ============================================
  // ADD NEW METHOD: initializeTooltips
  // ============================================
  initializeTooltips() {
    // Get translations for tooltips
    const t =
      this.externalTranslations[this.currentLang] ||
      this.externalTranslations["en"];

    // Apply tooltip texts to all info icons
    document.querySelectorAll(".info-icon").forEach((icon) => {
      const tooltipKey = icon.getAttribute("data-tooltip-key");
      if (tooltipKey && t[tooltipKey]) {
        icon.setAttribute("data-tooltip", t[tooltipKey]);
      }
    });
  }

  // ============================================
  // ADD NEW METHOD: setupPhase3EventListeners
  // ============================================
  setupPhase3EventListeners() {
    // Continue Playing button
    const continueBtn = document.getElementById("continue-playing-button");
    if (continueBtn) {
      continueBtn.addEventListener("click", () =>
        this.continuePlayingInfinite(),
      );
    }

    // View Reflection button
    const reflectionBtn = document.getElementById("view-reflection-button");
    if (reflectionBtn) {
      reflectionBtn.addEventListener("click", () =>
        this.showReflectionScreen(),
      );
    }

    // Back to Start button
    const backBtn = document.getElementById("back-to-start-button");
    if (backBtn) {
      backBtn.addEventListener("click", () => this.backToStart());
    }
  }

  // ============================================
  // UI UPDATES
  // ============================================

  updateUI() {
    document.getElementById("money-display").textContent = this.formatMoney(
      this.state.money,
    );

    const minutes = Math.floor(this.state.timeRemaining / 60);
    const seconds = Math.floor(this.state.timeRemaining % 60);
    document.getElementById("timer-display").textContent =
      `${minutes}:${seconds.toString().padStart(2, "0")}`;

    const engagementPct = Math.round(this.state.engagement);
    document.getElementById("engagement-display").textContent =
      engagementPct + "%";
    document.getElementById("engagement-value").textContent =
      engagementPct + "%";
    this.updateMeter("engagement-bar", this.state.engagement);

    const happinessPct = Math.round(this.state.happiness);
    document.getElementById("happiness-value").textContent = happinessPct + "%";
    this.updateMeter("happiness-bar", this.state.happiness);

    const angerPct = Math.round(this.state.anger);
    document.getElementById("anger-value").textContent = angerPct + "%";
    this.updateMeter("anger-bar", this.state.anger, true);

    this.updateAvatar();
    document.getElementById("current-level").textContent =
      this.state.currentLevel;

    this.updateAvatarState();

    // Update engagement-based revenue displays
    this.updateEngagementBasedDisplays();
  }

  updateMeter(elementId, value, reversed = false) {
    const bar = document.getElementById(elementId);
    if (!bar) return;

    bar.style.width = value + "%";
    bar.classList.remove("high", "medium", "low", "warning-flash");

    if (reversed) {
      if (value < 30) bar.classList.add("low");
      else if (value < 60) bar.classList.add("medium");
      else bar.classList.add("high");
    } else {
      if (value >= 60) bar.classList.add("high");
      else if (value >= 30) bar.classList.add("medium");
      else bar.classList.add("low");

      // Add flashing warning for engagement bar when below warning threshold
      if (elementId === "engagement-bar" && value <= GAME_CONFIG.ENGAGEMENT_WARNING_THRESHOLD && value > GAME_CONFIG.ENGAGEMENT_DEATH_THRESHOLD) {
        bar.classList.add("warning-flash");
      }
    }
  }

  updateAvatar() {
    // Avatar is now handled by updatePortrait() in updateAvatarState()
    // Keeping this method for backwards compatibility
  }

  formatMoney(amount) {
    return "$" + Math.round(amount).toLocaleString();
  }

  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  // ============================================
  // PORTRAIT SYSTEM
  // ============================================
  updateAvatarState() {
    this.updatePortrait();
  }

  // ============================================
  // UPDATE ENGAGEMENT-BASED DISPLAYS
  // ============================================
  updateEngagementBasedDisplays() {
    // Get perView translation
    const perView = this.externalTranslations[this.currentLang]?.perView || this.translations[this.currentLang]?.perView || "/view";

    // Update slider info for engagement-based content
    for (const contentType of this.state.unlockedContent) {
      const ct = CONTENT_TYPES[contentType];
      if (ct && ct.engagementBased) {
        const sliderInfo = document.getElementById(`${contentType}-slider-info`);
        if (sliderInfo) {
          const engagementScaledRevenue = (ct.revenue * (this.state.engagement / 100)).toFixed(2);
          const happinessStr = ct.happiness >= 0 ? "+" + ct.happiness : ct.happiness;
          const angerStr = ct.anger >= 0 ? "+" + ct.anger : ct.anger;
          sliderInfo.textContent = `💰$${engagementScaledRevenue}${perView} | 😊${happinessStr} | 😠${angerStr}`;
        }
      }
    }
  }

  updatePortrait() {
    const happiness = this.state.happiness;
    const engagement = this.state.engagement;
    const anger = this.state.anger;

    let emotion = "neutral";

    // Priority 1: Anger (overrides everything)
    if (anger >= 70) {
      emotion = "angry3";
    } else if (anger >= 50) {
      emotion = "angry2";
    } else if (anger >= 30) {
      emotion = "angry1";
    }
    // Priority 2: Boredom (low engagement)
    else if (engagement <= 30) {
      emotion = "bored";
    }
    // Priority 3: Happiness/Sadness scale
    else if (happiness >= 90) {
      emotion = "happy3";
    } else if (happiness >= 75) {
      emotion = "happy2";
    } else if (happiness >= 60) {
      emotion = "happy1";
    } else if (happiness >= 40) {
      emotion = "neutral";
    } else if (happiness >= 30) {
      emotion = "sad1";
    } else if (happiness >= 20) {
      emotion = "sad2";
    } else {
      emotion = "sad3";
    }

    // Update portrait image
    const portrait = document.getElementById("avatar-portrait");
    if (portrait) {
      portrait.src = `portraits/${this.currentCharacter}/${emotion}.png`;
    }
  }

  continuePlayingInfinite() {
    // Hide game over screen
    document.getElementById("gameover-screen").classList.add("hidden");

    // Show game container
    document.getElementById("game-container").classList.remove("hidden");

    // Enable infinite mode (no timer)
    this.state.isPlaying = true;
    this.state.timeRemaining = Infinity;

    // Hide timer display or show infinity
    const timerDisplay = document.getElementById("timer-display");
    if (timerDisplay) {
      timerDisplay.textContent = "∞";
    }

    // Restart game loop without timer countdown
    this.lastUpdateTime = Date.now();
    if (this.gameLoopInterval) clearInterval(this.gameLoopInterval);
    if (this.feedGenerationInterval) clearTimeout(this.feedGenerationInterval);

    this.gameLoopInterval = setInterval(
      () => this.gameLoopInfinite(),
      GAME_CONFIG.UPDATE_INTERVAL,
    );
    this.scheduleFeedPost();
  }

  // ============================================
  // ADD NEW METHOD: gameLoopInfinite
  // ============================================
  gameLoopInfinite() {
    if (!this.state.isPlaying || this.state.isPaused) return;

    const now = Date.now();
    const deltaTime = (now - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = now;

    // Infinite mode doesn't count down time, but keeps track of elapsed time
    this.state.timeElapsed += deltaTime;

    // Use the same update methods as normal game loop
    this.updateEngagement(deltaTime);
    this.updateEmotions(deltaTime);
    this.calculateMoney(deltaTime);

    // Check for game over (engagement drops to 0%)
    if (this.state.engagement <= GAME_CONFIG.ENGAGEMENT_DEATH_THRESHOLD) {
      this.endGame("engagement");
      return;
    }

    this.updateUI();
  }

  // ============================================
  // ADD NEW METHOD: showReflectionScreen
  // ============================================
  showReflectionScreen() {
    // Hide game over screen
    document.getElementById("gameover-screen").classList.add("hidden");

    // Populate statistics
    this.populateReflectionStats();

    // Show reflection screen
    document.getElementById("reflection-screen").classList.remove("hidden");
  }

  populateReflectionStats() {
    // Calculate average happiness and anger
    const avgHappiness = this.state.emotionSamples > 0
      ? Math.round(this.state.happinessSum / this.state.emotionSamples)
      : 0;
    const avgAnger = this.state.emotionSamples > 0
      ? Math.round(this.state.angerSum / this.state.emotionSamples)
      : 0;

    document.getElementById("stats-avg-happiness").textContent = avgHappiness + "%";
    document.getElementById("stats-avg-anger").textContent = avgAnger + "%";

    // Populate posts shown and revenue table
    const tbody = document.getElementById("reflection-stats-tbody");
    tbody.innerHTML = "";

    // Get all content types that were shown
    const contentTypes = Object.keys(this.state.postsShownByType)
      .filter(type => this.state.postsShownByType[type] > 0)
      .sort((a, b) => this.state.postsShownByType[b] - this.state.postsShownByType[a]);

    contentTypes.forEach(type => {
      const row = document.createElement("tr");
      const contentName = CONTENT_TYPES[type]
        ? (this.currentLang === 'de' ? CONTENT_TYPES[type].nameDE : CONTENT_TYPES[type].name)
        : type;

      const count = this.state.postsShownByType[type];
      const revenue = this.state.revenueByType[type];

      row.innerHTML = `
        <td style="color: ${CONTENT_TYPES[type]?.color || '#fff'}">${contentName}</td>
        <td>${count}</td>
        <td>$${revenue.toFixed(2)}</td>
      `;
      tbody.appendChild(row);
    });

    // If no posts were shown, add a message
    if (contentTypes.length === 0) {
      const row = document.createElement("tr");
      row.innerHTML = `<td colspan="3" style="text-align: center; font-style: italic;">No posts shown</td>`;
      tbody.appendChild(row);
    }
  }

  // ============================================
  // ADD NEW METHOD: backToStart
  // ============================================
  backToStart() {
    // Hide reflection screen
    document.getElementById("reflection-screen").classList.add("hidden");

    // Reset game state
    if (this.gameLoopInterval) clearInterval(this.gameLoopInterval);
    if (this.feedGenerationInterval) clearTimeout(this.feedGenerationInterval);

    this.state = {
      isPlaying: false,
      isPaused: false,
      money: GAME_CONFIG.STARTING_MONEY,
      engagement: GAME_CONFIG.STARTING_ENGAGEMENT,
      happiness: GAME_CONFIG.STARTING_HAPPINESS,
      anger: GAME_CONFIG.STARTING_ANGER,
      timeRemaining: GAME_CONFIG.GAME_DURATION,
      timeElapsed: 0,
      currentLevel: 1,
      unlockedContent: ["organic", "ads"],
      contentMix: {
        organic: 100,
        ads: 0,
        partner: 0,
        influencer: 0,
        viralOrganic: 0,
        propaganda: 0,
        clickbait: 0,
        scams: 0,
      },
      revenueByType: {
        organic: 0,
        ads: 0,
        partner: 0,
        influencer: 0,
        viralOrganic: 0,
        propaganda: 0,
        clickbait: 0,
        scams: 0,
      },
      postsShownByType: {
        organic: 0,
        ads: 0,
        partner: 0,
        influencer: 0,
        viralOrganic: 0,
        propaganda: 0,
        clickbait: 0,
        scams: 0,
      },
      happinessSum: 0,
      angerSum: 0,
      emotionSamples: 0,
    };

    // Clear feed
    document.getElementById("feed-container").innerHTML = "";

    // Show start screen
    document.getElementById("start-screen").classList.remove("hidden");
    document.getElementById("game-container").classList.add("hidden");
  }
}

let game;
document.addEventListener("DOMContentLoaded", () => {
  game = new ThumbsUpGame();
});
