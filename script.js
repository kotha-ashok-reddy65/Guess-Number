"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guessVal = Number(document.querySelector(".guess").value);

  if (!guessVal) {
    document.querySelector(".message").textContent = "No number";
  } else if (guessVal === secretNumber) {
    document.querySelector(".message").textContent = "Your guess was right!";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
      //document.querySelector(".score").textContent = 0;
    }
  } else if (guessVal !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessVal > secretNumber ? "Too High" : "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

let visible = document.querySelector(".main");

let btnC = document.querySelector("#btn");
btnC.addEventListener("click", function () {
  visible.classList.remove("hidden");
});
