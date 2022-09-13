/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let result = ''; // 'win' or 'lose'
let guess; // 1, 2, 3
let pearl; // 1, 2, 3

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

// display
/* Actions */
function displayShells(gameState) {
    gameState = 'results'; // FIXME Delete
    result = 'lose'; // FIXME Delete
    guess = 3; // FIXME Delete
    pearl = 2; // FIXME Delete

    console.log(
        `gameState: ${gameState}`,
        `guess: ${guess}`,
        `result: ${result}`,
        `pearl: ${pearl}`
    );

    if (gameState === 'guess') {
        guesses.classList.remove('hidden');
        results.classList.add('hidden');
        playAgainBtn.classList.add('hidden');
    } else if (gameState === 'results') {
        guesses.classList.add('hidden');
        results.classList.remove('hidden');
        playAgainBtn.classList.remove('hidden');
        if (guess === 1) {
            shell1.classList.add('reveal');
            if (result === 'win') {
                console.log(`gameState: reveal`, `guess: 1`, `result: win`, `pearl: 1`);
                display1.textContent = 'Found it!';
                pearl1.classList.remove('hidden');
            } else {
                display1.textContent = 'Not Here!';
                if (pearl === 2) {
                    console.log(`gameState: reveal`, `guess: 1`, `result: lose`, `pearl: 2`);
                    shell2.classList.add('reveal');
                    pearl2.classList.remove('hidden');
                } else {
                    console.log(`gameState: reveal`, `guess: 1`, `result: lose`, `pearl: 3`);
                    shell3.classList.add('reveal');
                    pearl3.classList.remove('hidden');
                }
            }
        } else if (guess === 2) {
            shell2.classList.add('reveal');
            if (result === 'win') {
                console.log(`gameState: reveal`, `guess: 2`, `result: win`, `pearl: 2`);
                display2.textContent = 'Found it!';
                pearl2.classList.remove('hidden');
            } else {
                display2.textContent = 'Not Here!';
                if (pearl === 1) {
                    console.log(`gameState: reveal`, `guess: 2`, `result: lose`, `pearl: 1`);
                    shell1.classList.add('reveal');
                    pearl1.classList.remove('hidden');
                } else {
                    console.log(`gameState: reveal`, `guess: 2`, `result: lose`, `pearl: 3`);
                    shell3.classList.add('reveal');
                    pearl3.classList.remove('hidden');
                }
            }
        } else {
            shell3.classList.add('reveal');
            if (result === 'win') {
                console.log(`gameState: reveal`, `guess: 3`, `result: win`, `pearl: 3`);
                display3.textContent = 'Found it!';
                pearl3.classList.remove('hidden');
            } else {
                display3.textContent = 'Not Here!';
                if (pearl === 1) {
                    console.log(`gameState: reveal`, `guess: 3`, `result: lose`, `pearl: 1`);
                    shell1.classList.add('reveal');
                    pearl1.classList.remove('hidden');
                } else {
                    console.log(`gameState: reveal`, `guess: 3`, `result: lose`, `pearl: 2`);
                    shell2.classList.add('reveal');
                    pearl2.classList.remove('hidden');
                }
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
