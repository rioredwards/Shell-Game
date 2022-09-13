/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let guess = '1'; // '1', '2', '3'
let pearl = '1'; // '1', '2', '3'
let result = ''; // 'win' or 'lose'

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

// display
/* Actions */
function displayShells(gameState) {
    gameState = 'guess'; // FIXME Delete
    result = 'win'; // FIXME Delete

    if (gameState === 'guess') {
        results.classList.add('hidden');
        playAgainBtn.classList.add('hidden');
    }
    if (gameState === 'results') {
        guesses.classList.add('hidden');
        results.classList.remove('hidden');
        playAgainBtn.classList.remove('hidden');
        if (result === 'win') {
            if (guess === '1') {
                console.log('win - 1');
            } else if (guess === '2') {
                console.log('win - 2');
            } else {
                console.log('win - 3');
            }
        } else {
            if (guess === '1') {
                console.log('lose - 1');
            } else if (guess === '2') {
                console.log('lose - 2');
            } else {
                console.log('lose - 3');
            }
        }
    }
}

function liftShell(userGuess) {
    if (userGuess === pearl) {
        // Win
        // Lift the shell with pearl
        // Display 'Found It!'
    } else {
        // Lose
        // Lift the shell with pearl
        // Lift the shell guessed
        // Display 'Not Here!'
    }
    gameState = 'results';
    console.log(userGuess);
}

function loadPage() {
    displayShells(gameState);
}

// function playAgain() {} TODO

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

/* Run page load code */
loadPage();
