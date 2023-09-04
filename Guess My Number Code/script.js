"use strict";
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 12;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");

    // Change background color to green when player wins
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Check if current score is greater than current high schore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // Reset game when again button is clicked
    document.querySelector(".again").addEventListener("click", function () {
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".score").textContent = 20;
      displayMessage("Start guessing...");
      document.querySelector(".number").textContent = "?";
      document.querySelector(".number").style.width = "15rem";
      document.querySelector(".guess").value = ".";

      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;
    });

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lose!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
