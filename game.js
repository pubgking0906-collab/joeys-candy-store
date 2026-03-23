// ========== משתנים גלובליים ==========
let gameState = {
    currentScreen: 'welcome',
    totalStars: 0,
    completedLevels: {
        level1: false,
        level2: false,
        level3: false,
        level4: false
    },
    currentLevel: null,
    currentRound: 1,
    starsEarned: 0
};

// ========== רמה 1: ספירה ==========
let countingState = {
    targetCount: 0,
    currentCount: 0,
    candyTypes: ['🍬', '🍭', '🍫', '🧁', '🍩'],
    customers: ['🐰', '🦊', '🐻', '🦄', '🐱'],
    currentCustomer: 0,
    currentCandyType: 0
};

// ========== רמה 2: חיבור ==========
let additionState = {
    num1: 0,
    num2: 0,
    answer: 0,
    userAnswer: ''
};

// ========== רמה 3: השוואה ==========
let comparisonState = {
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
        { avatar: '🦄', name: 'החד־קרן' }
    ]
};

// ========== רמה 4: חיסור ==========
let subtractionState = {
    totalCandies: 0,
    toSell: 0,
    sold: 0,
    userAnswer: ''
};

// ========== טעינת התקדמות ==========
function loadProgress() {
    const saved = localStorage.getItem('joyCandyProgress_v2');
    if (saved) {
        const data = JSON.parse(saved);
        gameState.totalStars = data.totalStars || 0;
        gameState.completedLevels = data.completedLevels || gameState.completedLevels;
        updateStarsDisplay();
        updateLevelCards();
    }
}

function saveProgress() {
    localStorage.setItem('joyCandyProgress_v2', JSON.stringify({
        totalStars: gameState.totalStars,
        completedLevels: gameState.completedLevels
    }));
}

function updateStarsDisplay() {
    const starsEl = document.getElementById('total-stars');
    if (starsEl) {
        starsEl.textContent = gameState.totalStars;
    }
}

function updateLevelCards() {
    for (let i = 1; i <= 4; i++) {
        const card = document.querySelector(`.level-card[data-level="${i}"]`);
        const starsContainer = document.getElementById(`level-${i}-stars`);
        
        if (gameState.completedLevels[`level${i}`]) {
            if (card) card.classList.add('completed');
            if (starsContainer) {
                const stars = starsContainer.querySelectorAll('.star');
                stars.forEach(star => star.classList.add('earned'));
            }
        }
    }
}

// ========== ניווט בין מסכים ==========
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
    }
    gameState.currentScreen = screenId;
}

function startGame() {
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
            showScreen('level-1-game');
            initCountingRound();
            break;
        case 2:
            showScreen('level-2-game');
            initAdditionRound();
            break;
        case 3:
            showScreen('level-3-game');
            initComparisonRound();
            break;
        case 4:
            showScreen('level-4-game');
            initSubtractionRound();
            break;
    }
}

function showCelebration() {
    showScreen('celebration-screen');
    createConfetti();
    
    setTimeout(() => {
        backToMenu();
    }, 3000);
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    if (!confettiContainer) return;
    
    confettiContainer.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -10 + 'px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = ['#ff69b4', '#ba55d3', '#40e0d0', '#ffd700'][Math.floor(Math.random() * 4)];
        confetti.style.animation = `fall ${2 + Math.random() * 2}s linear`;
        confettiContainer.appendChild(confetti);
    }
}

// ========== רמה 1: ספירת ממתקים ==========
function initCountingRound() {
    document.getElementById('current-round').textContent = gameState.currentRound;
    
    // בחירת לקוח אקראי
    countingState.currentCustomer = Math.floor(Math.random() * countingState.customers.length);
    const customerAvatar = countingState.customers[countingState.currentCustomer];
    document.getElementById('customer-avatar').textContent = customerAvatar;
    
    // קביעת מספר ממתקים מטרה
    const minCandies = 3 + (gameState.currentRound - 1) * 2;
    const maxCandies = 10 + (gameState.currentRound - 1) * 3;
    countingState.targetCount = Math.floor(Math.random() * (maxCandies - minCandies + 1)) + minCandies;
    
    document.getElementById('customer-speech').textContent = `אני רוצה ${countingState.targetCount} ממתקים בבקשה!`;
    document.getElementById('count-target').textContent = countingState.targetCount;
    
    // יצירת צנצנת עם ממתקים
    countingState.currentCount = 0;
    document.getElementById('count-current').textContent = '0';
    
    const jar = document.getElementById('candy-jar');
    jar.innerHTML = '';
    
    countingState.currentCandyType = Math.floor(Math.random() * countingState.candyTypes.length);
    const candyType = countingState.candyTypes[countingState.currentCandyType];
    
    // יצירת ממתקים עם מיקומים אקראיים
    const totalInJar = countingState.targetCount + Math.floor(Math.random() * 5);
    for (let i = 0; i < totalInJar; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy-item';
        candy.textContent = candyType;
        candy.style.animationDelay = (Math.random() * 2) + 's';
        candy.onclick = () => clickCandy(candy);
        jar.appendChild(candy);
    }
}

function clickCandy(candyElement) {
    if (candyElement.classList.contains('counted')) return;
    
    candyElement.classList.add('counted');
    countingState.currentCount++;
    document.getElementById('count-current').textContent = countingState.currentCount;
    
    if (countingState.currentCount === countingState.targetCount) {
        setTimeout(() => {
            roundSuccess();
        }, 500);
    }
}

function resetCounting() {
    countingState.currentCount = 0;
    document.getElementById('count-current').textContent = '0';
    document.querySelectorAll('.candy-item').forEach(c => c.classList.remove('counted'));
}

function roundSuccess() {
    gameState.starsEarned++;
    
    if (gameState.currentRound < 5) {
        gameState.currentRound++;
        setTimeout(() => {
            initCountingRound();
        }, 1000);
    } else {
        completeLevel();
    }
}

function completeLevel() {
    const levelKey = `level${gameState.currentLevel}`;
    gameState.completedLevels[levelKey] = true;
    gameState.totalStars += gameState.starsEarned;
    saveProgress();
    showCelebration();
}

// ========== רמה 2: חיבור ממתקים ==========
function initAdditionRound() {
    document.getElementById('l2-current-round').textContent = gameState.currentRound;
    
    // יצירת תרגיל חיבור
    const maxNum = 5 + gameState.currentRound * 2;
    additionState.num1 = Math.floor(Math.random() * maxNum) + 1;
    additionState.num2 = Math.floor(Math.random() * maxNum) + 1;
    additionState.answer = additionState.num1 + additionState.num2;
    additionState.userAnswer = '';
    
    document.getElementById('num1').textContent = additionState.num1;
    document.getElementById('num2').textContent = additionState.num2;
    document.getElementById('answer-display').textContent = '?';
    
    // יצירת קבוצות ממתקים
    const group1 = document.getElementById('group-1');
    const group2 = document.getElementById('group-2');
    group1.innerHTML = '';
    group2.innerHTML = '';
    
    for (let i = 0; i < additionState.num1; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy';
        candy.textContent = '🍬';
        group1.appendChild(candy);
    }
    
    for (let i = 0; i < additionState.num2; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy';
        candy.textContent = '🍬';
        group2.appendChild(candy);
    }
    
    document.getElementById('addition-question').textContent =
        `יש לך ${additionState.num1} ממתקים אדומים ו-${additionState.num2} כחולים. כמה ממתקים יש לך ביחד?`;
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
        clearAnswer();
        alert('כמעט! ננסה שוב 😊');
    }
}

// ========== רמה 3: השוואת ממתקים ==========
function initComparisonRound() {
    document.getElementById('l3-current-round').textContent = gameState.currentRound;
    
    // בחירת שתי דמויות אקראיות
    const chars = [...comparisonState.characters];
    const char1Index = Math.floor(Math.random() * chars.length);
    comparisonState.char1 = {...chars[char1Index]};
    chars.splice(char1Index, 1);
    
    const char2Index = Math.floor(Math.random() * chars.length);
    comparisonState.char2 = {...chars[char2Index]};
    
    // קביעת מספרים
    const maxNum = 10 + gameState.currentRound * 2;
    comparisonState.char1.count = Math.floor(Math.random() * maxNum) + 1;
    comparisonState.char2.count = Math.floor(Math.random() * maxNum) + 1;
    
    // וידוא שהם לא שווים
    while (comparisonState.char1.count === comparisonState.char2.count) {
        comparisonState.char2.count = Math.floor(Math.random() * maxNum) + 1;
    }
    
    comparisonState.correctAnswer = comparisonState.char1.count > comparisonState.char2.count ? 1 : 2;
    
    // עדכון תצוגה
    document.getElementById('char1-avatar').textContent = comparisonState.char1.avatar;
    document.getElementById('char1-name').textContent = comparisonState.char1.name;
    document.getElementById('char1-number').textContent = comparisonState.char1.count;
    
    document.getElementById('char2-avatar').textContent = comparisonState.char2.avatar;
    document.getElementById('char2-name').textContent = comparisonState.char2.name;
    document.getElementById('char2-number').textContent = comparisonState.char2.count;
    
    // יצירת ממתקים (עד 10 מוצגים)
    const candies1 = document.getElementById('char1-candies');
    const candies2 = document.getElementById('char2-candies');
    candies1.innerHTML = '';
    candies2.innerHTML = '';
    
    const displayCount1 = Math.min(comparisonState.char1.count, 10);
    for (let i = 0; i < displayCount1; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy';
        candy.textContent = '🍬';
        candies1.appendChild(candy);
    }
    
    const displayCount2 = Math.min(comparisonState.char2.count, 10);
    for (let i = 0; i < displayCount2; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy';
        candy.textContent = '🍬';
        candies2.appendChild(candy);
    }
}

function selectCharacter(charNum) {
    if (charNum === comparisonState.correctAnswer) {
        roundSuccess();
    } else {
        alert('כמעט! ננסה שוב 😊');
    }
}

// ========== רמה 4: חיסור ממתקים ==========
function initSubtractionRound() {
    document.getElementById('l4-current-round').textContent = gameState.currentRound;
    
    // קביעת מספרים
    const maxTotal = 10 + gameState.currentRound * 2;
    subtractionState.totalCandies = Math.floor(Math.random() * (maxTotal - 5 + 1)) + 5;
    subtractionState.toSell = Math.floor(Math.random() * (subtractionState.totalCandies - 1)) + 1;
    subtractionState.sold = 0;
    subtractionState.userAnswer = '';
    
    document.getElementById('subtraction-story').innerHTML =
        `היו לך ${subtractionState.totalCandies} ממתקים.<br>
        מכרת ${subtractionState.toSell} ממתקים ללקוחות.<br>
        כמה ממתקים נשארו לך?`;
    
    document.getElementById('to-sell').textContent = subtractionState.toSell;
    document.getElementById('sold-count').textContent = '0';
    document.getElementById('subtraction-instruction').style.display = 'block';
    document.getElementById('subtraction-keyboard').classList.add('hidden');
    
    // יצירת מדף ממתקים
    const shelf = document.getElementById('candy-shelf');
    shelf.innerHTML = '';
    
    for (let i = 0; i < subtractionState.totalCandies; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy';
        candy.textContent = '🍬';
        candy.onclick = () => sellCandy(candy);
        shelf.appendChild(candy);
    }
    
    document.getElementById('s-num1').textContent = subtractionState.totalCandies;
    document.getElementById('s-num2').textContent = subtractionState.toSell;
    document.getElementById('s-answer-display').textContent = '?';
}

function sellCandy(candyElement) {
    if (candyElement.classList.contains('sold')) return;
    if (subtractionState.sold >= subtractionState.toSell) return;
    
    candyElement.classList.add('sold');
    subtractionState.sold++;
    document.getElementById('sold-count').textContent = subtractionState.sold;
    
    if (subtractionState.sold === subtractionState.toSell) {
        setTimeout(() => {
            document.getElementById('subtraction-instruction').style.display = 'none';
            document.getElementById('subtraction-keyboard').classList.remove('hidden');
        }, 500);
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
    const correctAnswer = subtractionState.totalCandies - subtractionState.toSell;
    
    if (userNum === correctAnswer) {
        roundSuccess();
    } else {
        clearAnswerSub();
        alert('כמעט! ננסה שוב 😊');
    }
}

// ========== אנימציית נפילת קונפטי ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== טעינה ראשונית ==========
window.onload = () => {
    loadProgress();
};
