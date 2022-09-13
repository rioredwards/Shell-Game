/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let guess = ''; // '1', '2', '3'
let pearl = ''; // '1', '2', '3'
let result = ''; // 'win' or 'lose'

let total = 0;
let wins = 0;

// probability array
const shell = [1, 2, 3];

/* Actions */
function loadPage() {
    displayGuess();
    displayResults();
    displayScoreboard();
}

function liftShell(userGuess) {
    gameState = 'results';
    guess = userGuess;
    pearl = getRandomItem(shell);
    total++;

    if (guess === pearl) {
        result = 'win';
        wins++;
    } else {
        result = 'lose';
    }

    loadPage();
}

function playAgain() {
    gameState = 'guess';
    loadPage();
}

/* Components */

/* Scoreboard */
const totalDisplay = document.getElementById('total-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = total - wins;
}

// get DOM
const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

// display
function displayGuess() {
    guess1.classList.remove('win', 'lose', 'fade-out');
    guess2.classList.remove('win', 'lose', 'fade-out');
    guess3.classList.remove('win', 'lose', 'fade-out');

    if (gameState === 'results') {
        if (guess === '1') {
            // guess is 1
            guess2.classList.add('hidden');
            guess3.classList.add('hidden');
            guess1.classList.add(result);
        } else if (guess === '2') {
            // guess is 2
            guess1.classList.add('hidden');
            guess3.classList.add('hidden');
            guess2.classList.add(result);
        } else {
            // guess is 3
            guess1.classList.add('hidden');
            guess2.classList.add('hidden');
            guess3.classList.add(result);
        }
    }
}

// event listeners
guess1.addEventListener('click', () => {
    liftShell('1');
});
guess2.addEventListener('click', () => {
    liftShell('2');
});
guess3.addEventListener('click', () => {
    liftShell('3');
});

/* Results */
const resultsSection = getElementById('results');
const  = getElementById('');

/* Run page load code */
loadPage();
