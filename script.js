const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function computer() {
  const randomVariable = Math.random();
  if (randomVariable >= 0 && randomVariable < 1 / 3) {
    return "Rock";
  } else if (randomVariable >= 1 / 3 && randomVariable < 2 / 3) {
    return "Paper";
  } else if (randomVariable >= 2 / 3 && randomVariable < 1) {
    return "Scissors";
  }
}

function decisionMaker(move, compMove) {
  let result;
  if (move === compMove) {
    result = "Oh, It's a tie!";
  } else if (move === "Rock" && compMove === "Paper") {
    result = "Oops, You Lose!";
  } else if (move === "Rock" && compMove === "Scissors") {
    result = "Congrats, You won!";
  } else if (move === "Paper" && compMove === "Rock") {
    result = "Congrats, You won!";
  } else if (move === "Paper" && compMove === "Scissors") {
    result = "Oops, You Lose!";
  } else if (move === "Scissors" && compMove === "Rock") {
    result = "Oops, You Lose!";
  } else if (move === "Scissors" && compMove === "Paper") {
    result = "Congrats, You won!";
  }

  if (result === "Congrats, You won!") {
    score.wins++;
  } else if (result === "Oops, You Lose!") {
    score.losses++;
  } else {
    score.ties++;
  }
  // Save updated score to local storage
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  return result;
}

const winSound = new Audio("./sounds/won.wav");
const loseSound = new Audio("./sounds/lose.wav");
const tieSound = new Audio("./sounds/tie.wav");

function playGame(move) {

  let playerMove;
  if (move === "Rock") {
    playerMove = "./img/rock.png";
  } else if (move === "Paper") {
    playerMove = "./img/paper.png";
  } else {
    playerMove = "./img/scissor.png";
  }

  let compMove = computer();
  let cpMove;
  if (compMove === "Rock") {
    cpMove = "./img/rock.png";
  } else if (compMove === "Paper") {
    cpMove = "./img/paper.png";
  } else {
    cpMove = "./img/scissor.png";
  }
  let result = decisionMaker(move, compMove);

  if (result.includes("won")) {
    winSound.play();
  }else if (result.includes("Lose")) {
    loseSound.play();
  }else {
    tieSound.play();
  }

  document.querySelector(".js-decision").innerHTML = `<p> ${result} </p>`;
  document.querySelector(
    ".js-judgement"
  ).innerHTML = `<p> You picked <img class = "judgement-icon" src = ${playerMove}> Computer Picked <img src = ${cpMove} class = "judgement-icon"></p>`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
