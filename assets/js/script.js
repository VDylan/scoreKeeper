"use strict";

const playerOneButton = document.querySelector(".playerOneButton");
let scorePlayerOne = document.querySelector(".scorePlayerOne");
let scoreOne = 0;

const playerTwoButton = document.querySelector(".playerTwoButton");
let scorePlayerTwo = document.querySelector(".scorePlayerTwo");
let scoreTwo = 0;

let scoreToWin = document.querySelector(".scoreToWin");
let scoreLimit = document.querySelector(".scoreLimit");
const winner = document.querySelector(".winnerName");

const reset = document.querySelector(".resetScore");

function requiredScore() {
    scoreToWin.textContent = scoreLimit.value;
}

scoreLimit.addEventListener("change", requiredScore);

function addScorePlayerOne() {
  if (scorePlayerOne.textContent != scoreLimit.value) {
    scoreOne++;
  }
  scorePlayerOne.textContent = scoreOne;
}

function addScorePlayerTwo() {
  if (scorePlayerTwo.textContent != scoreLimit.value) {
    scoreTwo++;
  }
  scorePlayerTwo.textContent = scoreTwo;
}

playerOneButton.addEventListener("click", addScorePlayerOne);
playerTwoButton.addEventListener("click", addScorePlayerTwo);