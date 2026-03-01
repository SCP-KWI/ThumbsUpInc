# Phase 3 Implementation Plan

## Status: IN PROGRESS

### 1. Complete Translations ✅ DONE
- Created `translations.js` with complete EN/DE translations
- All UI elements translated
- Welcome screen, game over screen, reflection screen
- Dashboard, tooltips, all buttons

### 2. Info Tooltips - TO DO
**Implementation:**
- Add `<span class="info-icon" data-tooltip="key">ⓘ</span>` next to:
  - Engagement meter
  - Happiness meter  
  - Anger meter
  - Each content type slider
- CSS: `.info-icon:hover::after` shows tooltip
- Tooltips reference TRANSLATIONS.tooltipXXX

### 3. Enhanced Post Structure - TO DO
**New post structure:**
```html
<div class="post {type}">
  <div class="post-header">
    <div class="post-avatar">[Avatar]</div>
    <div class="post-user">
      <span class="post-username">Username</span>
      <span class="post-timestamp">2h ago</span>
    </div>
  </div>
  <div class="post-content">
    <h4 class="post-heading">Heading</h4>
    <div class="post-image">[Image placeholder]</div>
    <p class="post-text">Content text...</p>
  </div>
</div>
```

**Post templates expanded to 10+ per type in posts.json**

### 4. SVG Avatar System - TO DO
**States needed:**
- 5 happiness levels: veryHappy, happy, neutral, sad, verySad
- 3 engagement distances: close, medium, far
- Anger overlay: red tint when angry

**File:** Create `avatar.svg` with CSS classes for state changes

### 5. Reflection Screen - TO DO
**New HTML structure in index.html:**
- Reflection modal with questions
- Real-world connection text
- "Back to Start" button

### 6. Game Flow Buttons - TO DO
**Update game over screen:**
- Add 3 buttons: "Play Again", "Continue Playing", "View Reflection"
- "Continue Playing" → infinite mode (no timer)
- "View Reflection" → show reflection screen

## Files to Update:
1. ✅ translations.js - CREATED
2. ⏳ index.html - Add tooltips, reflection screen
3. ⏳ styles.css - Tooltip styles, enhanced post styles, avatar styles
4. ⏳ script.js - Load translations, apply tooltips, reflection logic
5. ⏳ posts.json - Expand to 10+ per type with enhanced structure
6. ⏳ avatar.svg - CREATE

## Next Steps:
Due to token limitations, I recommend:
1. I'll provide the key updated files one at a time
2. You test each update
3. We iterate on any issues

Shall I proceed with completing tooltips + enhanced posts first?
