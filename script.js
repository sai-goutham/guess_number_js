'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1
let highscore = 0;
let score = 20;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage("⛔Guess A Number!")
    } else if (guess === secretNumber) {
        displayMessage('🥳 Correct Number, Won the game')

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = ('#06878a');

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? "Too High 📈" : "Too Low 📉"
            displayMessage(guess > secretNumber ? "Too High 📈" : "Too Low 📉")
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('🧨 You lost the game!!!')
            document.querySelector('.score').textContent = 0;
        }

    }
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "Too High 📈"
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🧨 You lost the game!!!'
    //         document.querySelector('.score').textContent = 0;
    //     }

    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "Too Low 📉"
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🧨 You lost the game!!!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     document.querySelector('.message').textContent = "Too Low 📉"
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // }

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    displayMessage("Start guessing...")
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})