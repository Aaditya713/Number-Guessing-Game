const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");

checkBtn.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);

    if (userGuess < 1 || userGuess > 100) {
        setMessage("Please enter a valid number between 1 and 100.", "red");
    } else {
        attempts++;
        if (userGuess === secretNumber) {
            setMessage(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`, "green");
        } else if (userGuess < secretNumber) {
            setMessage("Try a higher number.", "blue");
        } else {
            setMessage("Try a lower number.", "blue");
        }
    }
});

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}
