/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'

/* Component */
// Get DOM
const results = document.getElementById('results');
const playAgainBtn = document.getElementById('play-again-button');

const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

// display
/* Actions */
function displayShells(gameState) {
    if (gameState === 'guess') {
        results.classList.add('hidden');
        playAgainBtn.classList.add('hidden');
    }
}

function liftShell(userGuess) {
    gameState = 'results';
    console.log(userGuess);
}

function loadPage() {
    displayShells(gameState);
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

/* Run page load code */
loadPage();
