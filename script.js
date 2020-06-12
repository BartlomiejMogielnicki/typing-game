const settingsBtn = document.getElementById('btn-settings');
const settingsContainer = document.querySelector('.settings-container');
const settingsForm = document.getElementById('settings-form');
const selectDifficulty = document.getElementById('difficulty');

const gameContainer = document.querySelector('.game-container');
const wordEl = document.getElementById('word');
const inputWordEl = document.getElementById('text');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const summaryScreen = document.getElementById('summary-container')
// Words array
const words = ['one', 'two', 'three', 'four', 'five', 'six'];

// Set initial variables
let time = 10;
let score = 0
let word = '';

// Focus input automatically
inputWordEl.focus();

// Game over
const gameOver = () => {
    summaryScreen.innerHTML = `
    <h2>Time ran out!</h2>
    <p>Your score is ${score}.</p>
    <button onclick="window.location.reload()">Restart</button>
    `;

    summaryScreen.style.display = "flex";
}

// Time countdown
const updateTime = () => {
    time--;
    timeEl.textContent = `${time}s`;

    if (time === 0) {
        clearInterval(timeInverval);

        gameOver();
    }
}

// Time set interval
const timeInverval = setInterval(updateTime, 1000);

// Pick random word and update DOM
const randomWord = () => {
    word = words[Math.floor(Math.random() * words.length)];
    wordEl.textContent = word;
}

randomWord();

// Update DOM
const updateScore = () => {
    scoreEl.textContent = score;
}

// Correct input update DOM
const correctWord = () => {
    score++;
    updateScore();
    randomWord();
    inputWordEl.value = '';
}

// Check input word
const checkInput = (e) => {
    if (e.target.value === word) {
        correctWord();
    }
}

// Event listeners
// Input value
inputWordEl.addEventListener('input', checkInput);

// Hide and show settings-container
settingsBtn.addEventListener('click', () => {
    settingsContainer.classList.toggle('hide');
})