const container = document.querySelector('#container');
const guessInput = document.querySelector('#guess-input');
const submitBtn = document.querySelector('#submit-btn');
const result = document.querySelector('#result p')

submitBtn.addEventListener('click', run);

let randomNumber = null;
let count = 0;
let gameOver = false;

function run() {
    if (gameOver) {
        gameOver = false;
        submitBtn.innerText = 'SUBMIT';
        guessInput.value = "";
        count = 0;
    } else {
        if (guessInput.value != "") {

            if (randomNumber === null) {
                randomNumber = Math.floor(Math.random() * 10) + 1;
            }
        
            let userAnswer = parseInt(guessInput.value);
        
            if (userAnswer === randomNumber) {
                guessInput.style.border = 'solid 3px #89FC3F'
        
                result.style.color = '#89FC3F';
                result.style.display = 'inline-block'
                result.innerHTML = `Got it right ${userAnswer} is corret!`;
        
                randomNumber = null;
                setTimeout(() => {
                    result.style.display = 'none';
                    guessInput.style.border = 'solid 3px #7D7D7D'
                    submitBtn.innerText = 'Play Again'
                    gameOver = true;
                }, 4000);
            } else {
                result.style.color = '#FF2E2E';
                result.style.display = 'inline-block'
                if (count > 1) {
                    result.innerHTML = `${userAnswer} is not corret, ${randomNumber} is the answer`;
                } else {
                    result.innerHTML = `${userAnswer} is not corret, ${2 - count} guesses left`;
                }
        
                randomNumber = null;
                setTimeout(() => {
                    result.style.display = 'none';
                    guessInput.style.border = 'solid 3px #7D7D7D'
                    if (count > 2) {
                        submitBtn.innerText = 'Play Again'
                        gameOver = true;
                    }
                }, 4000);
        
                count++;
            }
        }
    }
}
