/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let result = ''; // 'win' or 'lose'
let guess; // 1, 2, 3
let pearl; // 1, 2, 3
let wins = 0;
let losses = 0;
let total = 0;

const shellOptions = [1, 2, 3];

/* Component */
// Get DOM
const results = document.getElementById('results');
const playAgainBtn = document.getElementById('play-again-button');
const guessesDiv = document.getElementById('guessesDiv');

// Get triplet DOM Elements: (guessesEl, ShellsEl, pearlsEl and displaysEl)
const guessesEl = [];
const shellsEl = [];
const pearlsEl = [];
const displaysEl = [];
for (let i = 0; i < 3; i++) {
    guessesEl[i] = document.getElementById(`guess-${i + 1}`);
    shellsEl[i] = document.getElementById(`shell-${i + 1}`);
    pearlsEl[i] = document.getElementById(`pearl-${i + 1}`);
    displaysEl[i] = document.getElementById(`display-${i + 1}`);
}

const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');

// display
/* Actions */
function displayGuess() {
    guessesDiv.classList.remove('hidden');
    results.classList.add('hidden');
    playAgainBtn.classList.add('hidden');
    for (let i = 0; i < 3; i++) {
        pearlsEl[i].classList.add('hidden');
        shellsEl[i].classList.remove('reveal');
        displaysEl[i].textContent = '';
    }
}

function displayResults() {
    guessesDiv.classList.add('hidden');
    results.classList.remove('hidden');
    playAgainBtn.classList.remove('hidden');
    shellsEl[guess - 1].classList.add('reveal');
    pearlsEl[pearl - 1].classList.remove('hidden');
    if (result === 'win') {
        displaysEl[guess - 1].textContent = 'Found It!';
    } else {
        displaysEl[guess - 1].textContent = 'Not Here!';
        shellsEl[pearl - 1].classList.add('reveal');
    }
}

function makeGuess(userGuess) {
    gameState = 'results';
    guess = userGuess;
    result = userGuess === pearl ? 'win' : 'lose';
    updateScoreboard();
    displayResults();
}

function placePearl() {
    pearl = getRandomItem(shellOptions);
}

function playAgain() {
    gameState = 'guess';
    result = '';
    guess = 0;
    pearl = 0;
    loadPage();
}

function updateScoreboard() {
    if (result === 'win') wins++;
    if (result === 'lose') losses++;
    total++;
}

function displayScoreboard() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    totalDisplay.textContent = total;
}

function loadPage() {
    if (gameState === 'guess') {
        placePearl();
        displayGuess();
    }
    displayScoreboard();
}

// event listeners
for (let i = 0; i < 3; i++) {
    guessesEl[i].addEventListener('click', () => {
        makeGuess(i + 1);
    });
}

playAgainBtn.addEventListener('click', () => {
    playAgain();
});

/* Run page load code */
loadPage();
