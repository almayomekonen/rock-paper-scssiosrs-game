const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  ties: 0,
  losses: 0,
};
updateScore();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "תיקו";
    } else if (computerMove === "paper") {
      result = "אתה הפסדת";
    } else if (computerMove === "scissors") {
      result = "אתה ניצחת";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "אתה ניצחת";
    } else if (computerMove === "paper") {
      result = "תיקו";
    } else if (computerMove === "scissors") {
      result = "אתה הפסדת";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "אתה הפסדת";
    } else if (computerMove === "paper") {
      result = "אתה ניצחת";
    } else if (computerMove === "scissors") {
      result = "תיקו";
    }
  }

  if (result === "אתה ניצחת") {
    score.wins += 1;
    const resultElement = document.querySelector(".js-result");

    resultElement.classList.remove("victory-animation", "loss", "tie");

    void resultElement.offsetWidth;

    resultElement.classList.add("victory-animation", "win");
  } else if (result === "אתה הפסדת") {
    score.losses += 1;
    const resultElement = document.querySelector(".js-result");

    resultElement.classList.remove("victory-animation", "win", "tie");

    resultElement.classList.add("loss");
  } else if (result === "תיקו") {
    score.ties += 1;
    const resultElement = document.querySelector(".js-result");

    resultElement.classList.remove("victory-animation", "win", "loss");

    resultElement.classList.add("tie");
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-picks").innerHTML = `
  אתה  
   <img class="small-image" src="./rock-paper-scssisors-images/${playerMove}-emoji.png" />
   <img class="small-image" src="./rock-paper-scssisors-images/${computerMove}-emoji.png" />
  מחשב
  `;
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `נצחונות: ${score.wins} | הפסדים: ${score.losses} | שוויון: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
