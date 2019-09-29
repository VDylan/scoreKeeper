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

function addScorePlayerOne() {
  if (scorePlayerOne.textContent != scoreLimit) {
    scoreOne++;
  }
  scorePlayerOne.textContent = scoreOne;
}

playerOneButton.addEventListener("click", addScorePlayerOne);