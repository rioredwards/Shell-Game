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

const shellOptions = ['1', '2', '3'];

/* Component */
// Get DOM
const results = document.getElementById('results');
const playAgainBtn = document.getElementById('play-again-button');

const guesses = document.getElementById('guesses');
const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');
const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');
const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');
const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');

// display
/* Actions */
function displayShells(gameState) {
    if (gameState === 'guess') {
        guesses.classList.remove('hidden');
        results.classList.add('hidden');
        playAgainBtn.classList.add('hidden');
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
        display1.textContent = '';
        display2.textContent = '';
        display3.textContent = '';
    } else if (gameState === 'results') {
        guesses.classList.add('hidden');
        results.classList.remove('hidden');
        playAgainBtn.classList.remove('hidden');
        if (guess === '1') {
            shell1.classList.add('reveal');
            if (result === 'win') {
                display1.textContent = 'Found it!';
                pearl1.classList.remove('hidden');
            } else {
                display1.textContent = 'Not Here!';
                if (pearl === 2) {
                    shell2.classList.add('reveal');
                    pearl2.classList.remove('hidden');
                } else {
                    shell3.classList.add('reveal');
                    pearl3.classList.remove('hidden');
                }
            }
        } else if (guess === '2') {
            shell2.classList.add('reveal');
            if (result === 'win') {
                display2.textContent = 'Found it!';
                pearl2.classList.remove('hidden');
            } else {
                display2.textContent = 'Not Here!';
                if (pearl === 1) {
                    shell1.classList.add('reveal');
                    pearl1.classList.remove('hidden');
                } else {
                    shell3.classList.add('reveal');
                    pearl3.classList.remove('hidden');
                }
            }
        } else {
            shell3.classList.add('reveal');
            if (result === 'win') {
                display3.textContent = 'Found it!';
                pearl3.classList.remove('hidden');
            } else {
                display3.textContent = 'Not Here!';
                if (pearl === 1) {
                    shell1.classList.add('reveal');
                    pearl1.classList.remove('hidden');
                } else {
                    shell2.classList.add('reveal');
                    pearl2.classList.remove('hidden');
                }
            }
        }
    }
}

function liftShell(userGuess) {
    gameState = 'results';
    guess = userGuess;
    if (userGuess === pearl) {
        result = 'win';
    } else {
        result = 'lose';
    }
    updateScoreboard();
    displayShells(gameState);
    loadPage();
}

function placePearl() {
    pearl = getRandomItem(shellOptions);
}

function playAgain() {
    gameState = 'guess';
    result = '';
    guess = '';
    pearl = '';
    loadPage();
}

function updateScoreboard() {
    if (result === 'win') {
        wins++;
    } else {
        losses++;
    }
    total++;
}

function displayScoreboard() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    totalDisplay.textContent = total;
}

function loadPage() {
    displayShells(gameState);
    if (gameState === 'guess') placePearl(pearl);
    displayScoreboard();
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

playAgainBtn.addEventListener('click', () => {
    playAgain();
});

/* Run page load code */
loadPage();
