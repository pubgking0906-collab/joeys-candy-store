# חנות הממתקים של ג'וי

Joey's Candy Store


חנות הממתקים של ג'וי


👸



⭐
שחקי






בחרי רמה


⭐
0





1

ספירת ממתקים

🍬


⭐
⭐
⭐
⭐
⭐




2

חיבור ממתקים

🍭


⭐
⭐
⭐
⭐
⭐




3

השוואת ממתקים

🍫


⭐
⭐
⭐
⭐
⭐




4

חיסור ממתקים

🧁


⭐
⭐
⭐
⭐
⭐








← חזרה

סיבוב 1/5






🐰


אני רוצה 5 ממתקים בבקשה!








0 / 5


התחל מחדש






← חזרה

סיבוב 1/5






יש לך 3 ממתקים אדומים ו-2 כחולים.

כמה ממתקים יש לך ביחד?






+







3 + 2 = ?



0
1
2
3
4
5
6
7
8
9
נקה
בדוק







← חזרה

סיבוב 1/5






מי הזמין יותר ממתקים?




🧚

הפיה




5



VS



🐉

הדרקון




3









← חזרה

סיבוב 1/5






היו לך 7 ממתקים.

מכרת 4 ממתקים ללקוחות.

כמה ממתקים נשארו לך?







לחצי על 4 ממתקים כדי למכור אותם



נמכרו: 0 / 4





7 - 4 = ?

0
1
2
3
4
5
6
7
8
9
נקה
בדוק







כל הכבוד!


⭐
⭐
⭐
⭐
⭐

סיימת את הרמה בהצלחה!












================================================================================
📄 קובץ 2: styles.css
================================================================================
/* ========== גלובלי ========== */
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
font-family: 'Varela Round', 'Segoe UI', sans-serif;
direction: rtl;
background: linear-gradient(135deg, #ffeef8 0%, #e3d4f5 50%, #d4f1f4 100%);
min-height: 100vh;
overflow-x: hidden;
}

#app {
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
}

/* ========== מסכים ========== */
.screen {
display: none;
width: 100%;
max-width: 1200px;
animation: fadeIn 0.5s ease;
}

.screen.active {
display: flex;
flex-direction: column;
align-items: center;
}

@keyframes fadeIn {
from {
opacity: 0;
transform: scale(0.95);
}
to {
opacity: 1;
transform: scale(1);
}
}

/* ========== מסך פתיחה ========== */
#welcome-screen {
text-align: center;
padding: 60px 20px;
}

.game-title {
font-size: 48px;
font-weight: bold;
background: linear-gradient(135deg, #ff69b4, #ba55d3, #40e0d0);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
margin-bottom: 40px;
animation: titleBounce 2s ease-in-out infinite;
}

@keyframes titleBounce {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-10px); }
}

.character-container {
margin: 40px 0;
}

.character {
font-size: 180px;
animation: float 3s ease-in-out infinite;
}

@keyframes float {
0%, 100% { transform: translateY(0) rotate(0deg); }
50% { transform: translateY(-20px) rotate(5deg); }
}

.play-button {
background: linear-gradient(135deg, #ff69b4, #ff1493);
color: white;
font-size: 32px;
font-weight: bold;
padding: 20px 60px;
border: none;
border-radius: 50px;
cursor: pointer;
box-shadow: 0 8px 20px rgba(255, 20, 147, 0.4);
transition: all 0.3s ease;
display: flex;
align-items: center;
gap: 10px;
}

.play-button:hover {
transform: scale(1.1);
box-shadow: 0 12px 30px rgba(255, 20, 147, 0.6);
}

.play-button:active {
transform: scale(0.95);
}

.star-icon {
font-size: 32px;
animation: spin 2s linear infinite;
}

@keyframes spin {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}

/* ========== תפריט רמות ========== */
#level-menu {
padding: 40px 20px;
width: 100%;
}

.menu-header {
text-align: center;
margin-bottom: 40px;
}

.menu-header h2 {
font-size: 42px;
color: #ba55d3;
margin-bottom: 20px;
}

.stars-display {
font-size: 36px;
color: #ffd700;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
}

.levels-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 30px;
width: 100%;
max-width: 900px;
margin: 0 auto;
}

.level-card {
background: white;
border-radius: 25px;
padding: 30px 20px;
text-align: center;
cursor: pointer;
transition: all 0.3s ease;
box-shadow: 0 6px 20px rgba(186, 85, 211, 0.2);
position: relative;
}

.level-card:hover {
transform: translateY(-10px);
box-shadow: 0 12px 30px rgba(186, 85, 211, 0.4);
}

.level-card.locked {
opacity: 0.5;
cursor: not-allowed;
}

.level-card.locked:hover {
transform: none;
}

.level-number {
position: absolute;
top: 15px;
right: 15px;
width: 40px;
height: 40px;
background: linear-gradient(135deg, #ff69b4, #ba55d3);
color: white;
font-size: 24px;
font-weight: bold;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
}

.level-card h3 {
font-size: 24px;
color: #ba55d3;
margin-bottom: 20px;
}

.level-icon {
font-size: 80px;
margin: 20px 0;
}

.level-stars {
display: flex;
justify-content: center;
gap: 8px;
margin-top: 20px;
}

.level-stars .star {
font-size: 24px;
opacity: 0.3;
transition: all 0.3s ease;
}

.level-stars .star.earned {
opacity: 1;
animation: starPop 0.5s ease;
}

@keyframes starPop {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.3); }
}

/* ========== מסכי משחק ========== */
.game-screen {
padding: 20px;
width: 100%;
}

.game-header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
width: 100%;
max-width: 900px;
margin-left: auto;
margin-right: auto;
}

.back-button {
background: white;
color: #ba55d3;
font-size: 20px;
font-weight: bold;
padding: 12px 24px;
border: 3px solid #ba55d3;
border-radius: 15px;
cursor: pointer;
transition: all 0.3s ease;
}

.back-button:hover {
background: #ba55d3;
color: white;
}

.round-indicator {
background: white;
color: #ba55d3;
font-size: 20px;
font-weight: bold;
padding: 12px 24px;
border-radius: 15px;
box-shadow: 0 4px 10px rgba(186, 85, 211, 0.3);
}

.game-content {
background: white;
border-radius: 30px;
padding: 40px;
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
width: 100%;
max-width: 900px;
margin: 0 auto;
}

/* ========== רמה 1: ספירה ========== */
.customer-request {
text-align: center;
margin-bottom: 40px;
}

.customer-avatar {
font-size: 100px;
margin-bottom: 20px;
animation: bounce 1s ease infinite;
}

@keyframes bounce {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-15px); }
}

.speech-bubble {
background: #ffb6d9;
color: #8b4789;
font-size: 24px;
font-weight: bold;
padding: 20px 30px;
border-radius: 25px;
display: inline-block;
position: relative;
box-shadow: 0 4px 15px rgba(255, 182, 217, 0.4);
}

.speech-bubble::before {
content: '';
position: absolute;
top: -15px;
left: 50%;
transform: translateX(-50%);
width: 0;
height: 0;
border-left: 15px solid transparent;
border-right: 15px solid transparent;
border-bottom: 15px solid #ffb6d9;
}

.candy-jar {
background: linear-gradient(180deg, rgba(135, 206, 235, 0.2), rgba(64, 224, 208, 0.3));
border: 5px solid #40e0d0;
border-radius: 20px;
min-height: 300px;
padding: 30px;
margin: 30px 0;
display: flex;
flex-wrap: wrap;
gap: 15px;
justify-content: center;
align-items: center;
position: relative;
}

.candy-item {
font-size: 50px;
cursor: pointer;
transition: all 0.3s ease;
animation: float 3s ease-in-out infinite;
}

.candy-item:hover {
transform: scale(1.2);
}

.candy-item.counted {
opacity: 0.5;
transform: scale(0.8);
}

.counting-display {
text-align: center;
font-size: 48px;
font-weight: bold;
color: #ba55d3;
margin: 30px 0;
}

.reset-button {
background: #87ceeb;
color: white;
font-size: 22px;
font-weight: bold;
padding: 15px 40px;
border: none;
border-radius: 20px;
cursor: pointer;
display: block;
margin: 20px auto;
box-shadow: 0 4px 15px rgba(135, 206, 235, 0.4);
transition: all 0.3s ease;
}

.reset-button:hover {
background: #40e0d0;
transform: scale(1.05);
}

/* ========== רמה 2: חיבור ========== */
.math-question {
text-align: center;
font-size: 26px;
color: #8b4789;
font-weight: bold;
margin-bottom: 40px;
line-height: 1.6;
}

.candy-groups {
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
margin: 40px 0;
flex-wrap: wrap;
}

.candy-group {
display: flex;
flex-wrap: wrap;
gap: 10px;
padding: 20px;
border-radius: 20px;
min-width: 150px;
justify-content: center;
}

.candy-group.red {
background: rgba(255, 105, 180, 0.2);
border: 3px solid #ff69b4;
}

.candy-group.blue {
background: rgba(135, 206, 235, 0.2);
border: 3px solid #87ceeb;
}

.candy-group .candy {
font-size: 40px;
}

.plus-sign {
font-size: 60px;
font-weight: bold;
color: #ba55d3;
}

.equation {
text-align: center;
font-size: 48px;
font-weight: bold;
color: #ba55d3;
margin: 40px 0;
}

.answer-box {
display: inline-block;
min-width: 80px;
padding: 10px 20px;
background: #fff;
border: 4px solid #ba55d3;
border-radius: 15px;
color: #ff69b4;
}

.number-keyboard {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 15px;
max-width: 500px;
margin: 30px auto;
}

.num-key, .clear-key, .check-key {
font-size: 28px;
font-weight: bold;
padding: 20px;
border: none;
border-radius: 15px;
cursor: pointer;
transition: all 0.3s ease;
}

.num-key {
background: white;
color: #ba55d3;
border: 3px solid #ba55d3;
}

.num-key:hover {
background: #ba55d3;
color: white;
transform: scale(1.1);
}

.clear-key {
background: #ffb6d9;
color: white;
grid-column: span 2;
}

.clear-key:hover {
background: #ff69b4;
}

.check-key {
background: #51cf66;
color: white;
grid-column: span 2;
}

.check-key:hover {
background: #40c057;
transform: scale(1.05);
}

/* ========== רמה 3: השוואה ========== */
.comparison-question {
text-align: center;
font-size: 32px;
color: #8b4789;
font-weight: bold;
margin-bottom: 40px;
}

.comparison-container {
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
flex-wrap: wrap;
}

.character-card {
background: linear-gradient(135deg, #ffeef8, #e3d4f5);
border: 4px solid #ba55d3;
border-radius: 25px;
padding: 30px;
text-align: center;
cursor: pointer;
transition: all 0.3s ease;
min-width: 250px;
}

.character-card:hover {
transform: scale(1.1);
box-shadow: 0 10px 30px rgba(186, 85, 211, 0.4);
}

.char-avatar {
font-size: 100px;
margin-bottom: 15px;
}

.char-name {
font-size: 24px;
font-weight: bold;
color: #ba55d3;
margin-bottom: 20px;
}

.char-candies {
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 8px;
margin: 20px 0;
min-height: 60px;
}

.char-candies .candy {
font-size: 30px;
}

.char-number {
font-size: 48px;
font-weight: bold;
color: #ff69b4;
margin-top: 15px;
}

.vs-divider {
font-size: 48px;
font-weight: bold;
color: #ffd700;
animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.2); }
}

/* ========== רמה 4: חיסור ========== */
.story-text {
text-align: center;
font-size: 26px;
color: #8b4789;
font-weight: bold;
margin-bottom: 40px;
line-height: 1.8;
}

.candy-shelf {
background: linear-gradient(180deg, #fff, #ffeef8);
border: 4px solid #ba55d3;
border-radius: 20px;
padding: 30px;
min-height: 250px;
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
align-items: center;
margin: 30px 0;
}

.candy-shelf .candy {
font-size: 50px;
cursor: pointer;
transition: all 0.3s ease;
}

.candy-shelf .candy:hover {
transform: scale(1.2);
}

.candy-shelf .candy.sold {
opacity: 0;
transform: scale(0);
}

.instruction {
text-align: center;
font-size: 24px;
color: #ba55d3;
font-weight: bold;
margin: 20px 0;
}

.sold-counter {
text-align: center;
font-size: 32px;
font-weight: bold;
color: #ff69b4;
margin: 20px 0;
}

.number-keyboard.hidden {
display: none;
}

/* ========== מסך חגיגה ========== */
#celebration-screen {
text-align: center;
padding: 60px 20px;
}

.celebration-content {
position: relative;
}

.celebration-title {
font-size: 72px;
font-weight: bold;
background: linear-gradient(135deg, #ffd700, #ffed4e);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
margin-bottom: 40px;
animation: wiggle 0.5s ease-in-out infinite;
}

@keyframes wiggle {
0%, 100% { transform: rotate(-3deg); }
50% { transform: rotate(3deg); }
}

.celebration-stars {
display: flex;
justify-content: center;
gap: 20px;
margin: 40px 0;
}

.big-star {
font-size: 80px;
animation: starPop 0.8s ease infinite;
}

.big-star:nth-child(1) { animation-delay: 0s; }
.big-star:nth-child(2) { animation-delay: 0.1s; }
.big-star:nth-child(3) { animation-delay: 0.2s; }
.big-star:nth-child(4) { animation-delay: 0.3s; }
.big-star:nth-child(5) { animation-delay: 0.4s; }

.celebration-text {
font-size: 36px;
color: #ba55d3;
font-weight: bold;
margin-top: 30px;
}

/* ========== רספונסיבי ========== */
@media (max-width: 768px) {
.game-title {
font-size: 36px;
}

.character {
font-size: 120px;
}

.play-button {
font-size: 24px;
padding: 15px 40px;
}

.levels-grid {
grid-template-columns: 1fr;
max-width: 400px;
}

.game-content {
padding: 25px;
}

.speech-bubble {
font-size: 20px;
padding: 15px 20px;
}

.candy-jar {
min-height: 250px;
padding: 20px;
}

.candy-item {
font-size: 40px;
}

.math-question, .story-text {
font-size: 22px;
}

.equation {
font-size: 36px;
}

.number-keyboard {
grid-template-columns: repeat(3, 1fr);
}

.comparison-container {
flex-direction: column;
gap: 30px;
}

.character-card {
min-width: auto;
width: 100%;
max-width: 300px;
}

.celebration-title {
font-size: 48px;
}

.big-star {
font-size: 60px;
}
}

@media (max-width: 480px) {
.game-title {
font-size: 28px;
}

.character {
font-size: 100px;
}

.play-button {
font-size: 20px;
padding: 12px 30px;
}

.menu-header h2 {
font-size: 32px;
}

.level-card {
padding: 20px 15px;
}

.level-card h3 {
font-size: 20px;
}

.level-icon {
font-size: 60px;
}

.game-content {
padding: 20px;
}

.customer-avatar {
font-size: 80px;
}

.speech-bubble {
font-size: 18px;
}

.counting-display {
font-size: 36px;
}

.equation {
font-size: 28px;
}

.num-key, .clear-key, .check-key {
font-size: 22px;
padding: 15px;
}
}


================================================================================
📄 קובץ 3: game.js
================================================================================
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
`היו לך ${subtractionState.totalCandies} ממתקים.
מכרת ${subtractionState.toSell} ממתקים ללקוחות.
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


================================================================================
הוראות שימוש:
================================================================================
1. צור תיקייה חדשה
2. העתק כל חלק לקובץ נפרד (index.html, styles.css, game.js)
3. פתח את index.html בדפדפן

בהצלחה!
ג'וני 🐙
