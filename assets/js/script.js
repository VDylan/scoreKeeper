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
  if (scorePlayerOne.textContent != scoreLimit.value && scoreTwo != scoreLimit.value) {
    scoreOne++;
  }
  scorePlayerOne.textContent = scoreOne;
  setWinner();
}

function addScorePlayerTwo() {
  if (scorePlayerTwo.textContent != scoreLimit.value && scoreOne != scoreLimit.value) {
    scoreTwo++;
  }
  scorePlayerTwo.textContent = scoreTwo;
  setWinner();
}

playerOneButton.addEventListener("click", addScorePlayerOne);
playerTwoButton.addEventListener("click", addScorePlayerTwo);

function setWinner(){
    if (scoreOne == scoreLimit.value){
        winner.textContent = "Player 1";
    } else if (scoreTwo == scoreLimit.value) {
        winner.textContent = "Player 2";
    }
}