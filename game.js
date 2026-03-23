// ========================================
// חנות הממתקים של ג'וי - לוגיקת משחק
// ========================================

// === State ===
const gameState = {
    currentScreen: 'home',
    currentLevel: null,
    currentRound: 1,
    starsEarned: 0,
    totalStars: 0,
    soundEnabled: true,
    completedLevels: {
        level1: false,
        level2: false,
        level3: false,
        level4: false
    }
};

// === Level States ===
const countingState = {
    targetCount: 0,
    currentCount: 0,
    candyTypes: ['🍬', '🍭', '🍫', '🧁', '🍩', '🍪', '🎂'],
    customers: ['🐰', '🦊', '🐻', '🦄', '🐱', '🐶', '🐸', '🦋']
};

const additionState = {
    num1: 0,
    num2: 0,
    answer: 0,
    userAnswer: '',
    candyCount: 0  // Counter for candy clicking
};

const comparisonState = {
    char1: { avatar: '🧚', name: 'הפיה', count: 0 },
    char2: { avatar: '🐉', name: 'הדרקון', count: 0 },
    correctAnswer: 1,
    characters: [
        { avatar: '🧚', name: 'הפיה' },
        { avatar: '🐉', name: 'הדרקון' },
        { avatar: '🦋', name: 'הפרפר' },
        { avatar: '🐸', name: 'הצפרדע' },
        { avatar: '🦁', name: 'האריה' },
        { avatar: '🐰', name: 'הארנב' },
        { avatar: '🦊', name: 'השועל' },
        { avatar: '🦄', name: 'החד־קרן' },
        { avatar: '🐻', name: 'הדוב' },
        { avatar: '🐼', name: 'הפנדה' }
    ]
};

const subtractionState = {
    totalCandies: 0,
    toSell: 0,
    sold: 0,
    userAnswer: ''
};

// === Navigation ===
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
    }
    gameState.currentScreen = screenId;
}

function goToHome() {
    showScreen('home-screen');
}

function goToLevelMenu() {
    showScreen('level-menu');
    loadProgress();
}

function backToMenu() {
    showScreen('level-menu');
    gameState.currentLevel = null;
    gameState.currentRound = 1;
    gameState.starsEarned = 0;
}

function selectLevel(levelNum) {
    gameState.currentLevel = levelNum;
    gameState.currentRound = 1;
    gameState.starsEarned = 0;
    
    switch(levelNum) {
        case 1:
            showScreen('game-level-1');
            initCountingRound();
            break;
        case 2:
            showScreen('game-level-2');
            initAdditionRound();
            break;
        case 3:
            showScreen('game-level-3');
            initComparisonRound();
            break;
        case 4:
            showScreen('game-level-4');
            initSubtractionRound();
            break;
    }
}

// === Progress ===
function loadProgress() {
    const saved = localStorage.getItem('joyCandyProgress_v3');
    if (saved) {
        const data = JSON.parse(saved);
        gameState.totalStars = data.totalStars || 0;
        gameState.completedLevels = data.completedLevels || gameState.completedLevels;
        gameState.soundEnabled = data.soundEnabled !== false;
    }
    updateStarsDisplay();
    updateLevelCards();
    document.getElementById('sound-toggle').checked = gameState.soundEnabled;
}

function saveProgress() {
    localStorage.setItem('joyCandyProgress_v3', JSON.stringify({
        totalStars: gameState.totalStars,
        completedLevels: gameState.completedLevels,
        soundEnabled: gameState.soundEnabled
    }));
}

function updateStarsDisplay() {
    const el = document.getElementById('total-stars');
    if (el) el.textContent = gameState.totalStars;
}

function updateLevelCards() {
    for (let i = 1; i <= 4; i++) {
        const starsContainer = document.getElementById(`level-${i}-stars`);
        if (gameState.completedLevels[`level${i}`] && starsContainer) {
            starsContainer.querySelectorAll('.mini-star').forEach(star => {
                star.classList.add('earned');
            });
        }
    }
}

function resetProgress() {
    if (confirm('בטוחה שאת רוצה למחוק את כל ההתקדמות?')) {
        localStorage.removeItem('joyCandyProgress_v3');
        gameState.totalStars = 0;
        gameState.completedLevels = {
            level1: false, level2: false, level3: false, level4: false
        };
        updateStarsDisplay();
        document.querySelectorAll('.mini-star').forEach(s => s.classList.remove('earned'));
        showToast('ההתקדמות נמחקה', 'success');
        toggleSettings();
    }
}

// === Settings ===
function toggleSettings() {
    const modal = document.getElementById('settings-modal');
    modal.classList.toggle('hidden');
}

document.getElementById('sound-toggle')?.addEventListener('change', (e) => {
    gameState.soundEnabled = e.target.checked;
    saveProgress();
});

// === Toast ===
function showToast(message, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + type;
    
    // Add confetti for success
    if (type === 'success') {
        createMiniConfetti();
    }
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}

// Mini confetti for success feedback
function createMiniConfetti() {
    const colors = ['#ff69b4', '#ba55d3', '#40e0d0', '#ffd700', '#ff6b6b', '#51cf66'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'mini-confetti';
        confetti.style.left = (30 + Math.random() * 40) + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = (Math.random() * 0.3) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 1500);
    }
}

// === Round Success & Completion ===
function roundSuccess() {
    gameState.starsEarned++;
    showToast('נכון! ⭐', 'success');
    
    if (gameState.currentRound < 5) {
        gameState.currentRound++;
        setTimeout(() => {
            switch(gameState.currentLevel) {
                case 1: initCountingRound(); break;
                case 2: initAdditionRound(); break;
                case 3: initComparisonRound(); break;
                case 4: initSubtractionRound(); break;
            }
        }, 800);
    } else {
        completeLevel();
    }
}

function completeLevel() {
    const levelKey = `level${gameState.currentLevel}`;
    if (!gameState.completedLevels[levelKey]) {
        gameState.completedLevels[levelKey] = true;
        gameState.totalStars += gameState.starsEarned;
    }
    saveProgress();
    
    // Update victory screen
    document.getElementById('earned-stars').textContent = gameState.starsEarned;
    document.getElementById('completed-level').textContent = gameState.currentLevel;
    
    showScreen('victory-screen');
    createConfetti();
}

function playAgain() {
    selectLevel(gameState.currentLevel);
}

// === Confetti ===
function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    
    const colors = ['#ff69b4', '#ba55d3', '#40e0d0', '#ffd700', '#ff6b6b', '#51cf66'];
    
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        container.appendChild(piece);
    }
}

// ==========================================
// Level 1: Counting
// ==========================================
function initCountingRound() {
    document.getElementById('l1-round').textContent = `${gameState.currentRound}/5`;
    
    // Random customer
    const customer = countingState.customers[Math.floor(Math.random() * countingState.customers.length)];
    document.getElementById('customer-avatar').textContent = customer;
    
    // Target count (increases with rounds)
    const min = 3 + (gameState.currentRound - 1);
    const max = 7 + (gameState.currentRound - 1) * 2;
    countingState.targetCount = Math.floor(Math.random() * (max - min + 1)) + min;
    countingState.currentCount = 0;
    
    document.getElementById('customer-speech').textContent = `אני רוצה ${countingState.targetCount} ממתקים!`;
    document.getElementById('l1-target').textContent = countingState.targetCount;
    document.getElementById('l1-counted').textContent = '0';
    
    // Create candy jar
    const jar = document.getElementById('candy-jar');
    jar.innerHTML = '';
    
    const candyType = countingState.candyTypes[Math.floor(Math.random() * countingState.candyTypes.length)];
    const totalCandies = countingState.targetCount + Math.floor(Math.random() * 5) + 2;
    
    for (let i = 0; i < totalCandies; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy-item';
        candy.textContent = candyType;
        candy.style.animationDelay = (Math.random() * 2) + 's';
        candy.onclick = () => clickCandy(candy);
        jar.appendChild(candy);
    }
}

function clickCandy(el) {
    if (el.classList.contains('counted')) return;
    
    el.classList.add('counted');
    countingState.currentCount++;
    document.getElementById('l1-counted').textContent = countingState.currentCount;
    
    if (countingState.currentCount === countingState.targetCount) {
        setTimeout(roundSuccess, 500);
    } else if (countingState.currentCount > countingState.targetCount) {
        showToast('יותר מדי! נתחיל מחדש 😊', 'error');
        setTimeout(resetCounting, 800);
    }
}

function resetCounting() {
    countingState.currentCount = 0;
    document.getElementById('l1-counted').textContent = '0';
    document.querySelectorAll('#candy-jar .candy-item').forEach(c => c.classList.remove('counted'));
}

// ==========================================
// Level 2: Addition
// ==========================================
function initAdditionRound() {
    document.getElementById('l2-round').textContent = `${gameState.currentRound}/5`;
    
    const maxNum = 5 + gameState.currentRound;
    additionState.num1 = Math.floor(Math.random() * maxNum) + 1;
    additionState.num2 = Math.floor(Math.random() * maxNum) + 1;
    additionState.answer = additionState.num1 + additionState.num2;
    additionState.userAnswer = '';
    additionState.candyCount = 0;  // Reset candy counter
    
    document.getElementById('num1').textContent = additionState.num1;
    document.getElementById('num2').textContent = additionState.num2;
    document.getElementById('l2-equation').textContent = `${additionState.num1}+${additionState.num2}`;
    document.getElementById('answer-display').textContent = '?';
    document.getElementById('addition-question').textContent = 
        `יש לך ${additionState.num1} ממתקים ו-${additionState.num2} עוד. כמה ביחד?`;
    
    // Create candy groups with clickable candies
    const group1 = document.getElementById('group-1');
    const group2 = document.getElementById('group-2');
    group1.innerHTML = '';
    group2.innerHTML = '';
    
    for (let i = 0; i < additionState.num1; i++) {
        const candy = document.createElement('span');
        candy.className = 'candy clickable-candy';
        candy.textContent = '🍬';
        candy.onclick = () => clickAdditionCandy(candy);
        group1.appendChild(candy);
    }
    
    for (let i = 0; i < additionState.num2; i++) {
        const candy = document.createElement('span');
        candy.className = 'candy clickable-candy';
        candy.textContent = '🍭';
        candy.onclick = () => clickAdditionCandy(candy);
        group2.appendChild(candy);
    }
}

// Click candy in addition level - shows count animation
function clickAdditionCandy(el) {
    if (el.classList.contains('counted')) return;
    
    el.classList.add('counted');
    additionState.candyCount++;
    
    // Create floating number animation
    const numDisplay = document.createElement('div');
    numDisplay.className = 'floating-count';
    numDisplay.textContent = additionState.candyCount;
    
    // Position relative to the candy
    const rect = el.getBoundingClientRect();
    numDisplay.style.left = rect.left + rect.width / 2 + 'px';
    numDisplay.style.top = rect.top + 'px';
    
    document.body.appendChild(numDisplay);
    
    // Remove after animation (2 seconds)
    setTimeout(() => {
        numDisplay.remove();
    }, 2000);
}

// Reset addition candies (for retry)
function resetAdditionCandies() {
    additionState.candyCount = 0;
    document.querySelectorAll('.clickable-candy').forEach(c => c.classList.remove('counted'));
}

function addDigit(digit) {
    if (additionState.userAnswer.length < 2) {
        additionState.userAnswer += digit;
        document.getElementById('answer-display').textContent = additionState.userAnswer;
    }
}

function clearAnswer() {
    additionState.userAnswer = '';
    document.getElementById('answer-display').textContent = '?';
}

function checkAddition() {
    const userNum = parseInt(additionState.userAnswer);
    if (userNum === additionState.answer) {
        roundSuccess();
    } else {
        showToast('כמעט! ננסה שוב 😊', 'error');
        clearAnswer();
    }
}

// ==========================================
// Level 3: Comparison
// ==========================================
function initComparisonRound() {
    document.getElementById('l3-round').textContent = `${gameState.currentRound}/5`;
    
    // Pick 2 random characters
    const chars = [...comparisonState.characters];
    const idx1 = Math.floor(Math.random() * chars.length);
    comparisonState.char1 = { ...chars[idx1] };
    chars.splice(idx1, 1);
    const idx2 = Math.floor(Math.random() * chars.length);
    comparisonState.char2 = { ...chars[idx2] };
    
    // Set counts
    const maxNum = 8 + gameState.currentRound * 2;
    comparisonState.char1.count = Math.floor(Math.random() * maxNum) + 1;
    comparisonState.char2.count = Math.floor(Math.random() * maxNum) + 1;
    
    // Ensure different counts
    while (comparisonState.char1.count === comparisonState.char2.count) {
        comparisonState.char2.count = Math.floor(Math.random() * maxNum) + 1;
    }
    
    comparisonState.correctAnswer = comparisonState.char1.count > comparisonState.char2.count ? 1 : 2;
    
    // Update display
    document.getElementById('char1-avatar').textContent = comparisonState.char1.avatar;
    document.getElementById('char1-name').textContent = comparisonState.char1.name;
    document.getElementById('char1-number').textContent = comparisonState.char1.count;
    
    document.getElementById('char2-avatar').textContent = comparisonState.char2.avatar;
    document.getElementById('char2-name').textContent = comparisonState.char2.name;
    document.getElementById('char2-number').textContent = comparisonState.char2.count;
    
    // Create candies (max 8 shown)
    const candies1 = document.getElementById('char1-candies');
    const candies2 = document.getElementById('char2-candies');
    candies1.innerHTML = '';
    candies2.innerHTML = '';
    
    const show1 = Math.min(comparisonState.char1.count, 8);
    for (let i = 0; i < show1; i++) {
        const candy = document.createElement('span');
        candy.className = 'candy';
        candy.textContent = '🍬';
        candies1.appendChild(candy);
    }
    
    const show2 = Math.min(comparisonState.char2.count, 8);
    for (let i = 0; i < show2; i++) {
        const candy = document.createElement('span');
        candy.className = 'candy';
        candy.textContent = '🍬';
        candies2.appendChild(candy);
    }
}

function selectCharacter(charNum) {
    if (charNum === comparisonState.correctAnswer) {
        roundSuccess();
    } else {
        showToast('כמעט! ננסה שוב 😊', 'error');
    }
}

// ==========================================
// Level 4: Subtraction
// ==========================================
function initSubtractionRound() {
    document.getElementById('l4-round').textContent = `${gameState.currentRound}/5`;
    
    const maxTotal = 8 + gameState.currentRound * 2;
    subtractionState.totalCandies = Math.floor(Math.random() * (maxTotal - 5 + 1)) + 5;
    subtractionState.toSell = Math.floor(Math.random() * (subtractionState.totalCandies - 1)) + 1;
    subtractionState.sold = 0;
    subtractionState.userAnswer = '';
    
    document.getElementById('subtraction-story').innerHTML =
        `היו לך ${subtractionState.totalCandies} ממתקים 🍬<br>
        מכרת ${subtractionState.toSell} ללקוחות<br>
        כמה נשארו?`;
    
    document.getElementById('to-sell-display').textContent = subtractionState.toSell;
    document.getElementById('sold-count').textContent = '0';
    document.getElementById('subtraction-instruction').style.display = 'block';
    document.getElementById('subtraction-keyboard').classList.add('hidden');
    
    document.getElementById('s-num1').textContent = subtractionState.totalCandies;
    document.getElementById('s-num2').textContent = subtractionState.toSell;
    document.getElementById('s-answer-display').textContent = '?';
    
    // Create candy shelf
    const shelf = document.getElementById('candy-shelf');
    shelf.innerHTML = '';
    
    const candyType = countingState.candyTypes[Math.floor(Math.random() * countingState.candyTypes.length)];
    
    for (let i = 0; i < subtractionState.totalCandies; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy-item';
        candy.textContent = candyType;
        candy.onclick = () => sellCandy(candy);
        shelf.appendChild(candy);
    }
}

function sellCandy(el) {
    if (el.classList.contains('sold')) return;
    if (subtractionState.sold >= subtractionState.toSell) return;
    
    el.classList.add('sold');
    subtractionState.sold++;
    document.getElementById('sold-count').textContent = subtractionState.sold;
    
    if (subtractionState.sold === subtractionState.toSell) {
        setTimeout(() => {
            document.getElementById('subtraction-instruction').style.display = 'none';
            document.getElementById('subtraction-keyboard').classList.remove('hidden');
        }, 400);
    }
}

function addDigitSub(digit) {
    if (subtractionState.userAnswer.length < 2) {
        subtractionState.userAnswer += digit;
        document.getElementById('s-answer-display').textContent = subtractionState.userAnswer;
    }
}

function clearAnswerSub() {
    subtractionState.userAnswer = '';
    document.getElementById('s-answer-display').textContent = '?';
}

function checkSubtraction() {
    const userNum = parseInt(subtractionState.userAnswer);
    const correct = subtractionState.totalCandies - subtractionState.toSell;
    
    if (userNum === correct) {
        roundSuccess();
    } else {
        showToast('כמעט! ננסה שוב 😊', 'error');
        clearAnswerSub();
    }
}

// === Init ===
window.onload = () => {
    loadProgress();
};
