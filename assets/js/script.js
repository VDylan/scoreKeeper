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

const resetButton = document.querySelector(".resetScore");

function requiredScore() {
    scoreToWin.textContent = scoreLimit.value;
}

scoreLimit.addEventListener("change", requiredScore);

function setWinner(){
    if (scoreOne == scoreLimit.value){
        winner.textContent = "Player 1";
    } else if (scoreTwo == scoreLimit.value) {
        winner.textContent = "Player 2";
    }
}

function addScorePlayerOne() {
  if (scoreOne != scoreLimit.value && scoreTwo != scoreLimit.value) {
    scoreOne++;
  }
  scorePlayerOne.textContent = scoreOne;
  setWinner();
}

function addScorePlayerTwo() {
  if (scoreTwo != scoreLimit.value && scoreOne != scoreLimit.value) {
    scoreTwo++;
  }
  scorePlayerTwo.textContent = scoreTwo;
  setWinner();
}

playerOneButton.addEventListener("click", addScorePlayerOne);
playerTwoButton.addEventListener("click", addScorePlayerTwo);

function resetScoreKeeper() {
    scorePlayerOne.textContent = 0;
    scoreOne = 0;
    scorePlayerTwo.textContent = 0;
    scoreTwo = 0;
    scoreToWin.textContent = 0;
    winner.textContent = "_____";
    scoreLimit.value = null;
}

resetButton.addEventListener("click", resetScoreKeeper);