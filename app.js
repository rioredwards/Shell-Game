/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'

/* Component */
// Get DOM
const results = document.getElementById('results');
const playAgainBtn = document.getElementById('play-again-button');

// display
/* Actions */
function displayShells(gameState) {
    if (gameState === 'guess') {
        results.classList.add('hidden');
        playAgainBtn.classList.add('hidden');
    }
}

function loadPage() {
    displayShells(gameState);
}

// event listeners

/* Run page load code */
loadPage();
