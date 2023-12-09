// Generate a random number between 1 and 10
const targetNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

function checkGuess() {
    // Get the player's guess from the input
    const playerGuess = document.getElementById('guessInput').value;

    // Increment the attempts
    attempts++;

    // Check if the guess is correct
    if (playerGuess == targetNumber) {
        displayMessage(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
        disableInput();
    } else {
        displayMessage(`Wrong guess. Try again.`);
    }
}

function displayMessage(message) {
    document.getElementById('message').innerText = message;
}

function disableInput() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
