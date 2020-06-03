/*  var str = prompt("scissor, paper or rock?");

 if (str != null) {
  document.getElementById("moderator").innerHTML = "<h3>" + str + "</h3>";
}

*/

function showResult(result) {
  document.getElementById("result").innerText = result;
  if (result == "It´s a draw!") {
    counterU++;
    counterC++;
    document.getElementById("counterU").innerText = counterU;

    document.getElementById("counterC").innerText = counterC;
  } else if (result == "Computer wins!") {
    counterC++;
    document.getElementById("counterU").innerText = counterU;

    document.getElementById("counterC").innerText = counterC;
  } else if (result == "User wins!") {
    counterU++;
    document.getElementById("counterU").innerText = counterU;

    document.getElementById("counterC").innerText = counterC;
  } else {
    console.log("ERROR");
  }
  if (counterU == 3) {
    document.getElementById("counterU").innerText = "USER WON";
  }
  if (counterC == 3) {
    document.getElementById("counterC").innerText = "COMPUTER WON";
  }
}

counterU = 0;
counterC = 0;

function game(str) {
  let options = ["paper", "scissor", "rock"];
  let random = Math.floor(Math.random() * 3);

  let userPick = str;
  let computerPick = options[random];
  console.log(`USER: ${userPick}`);
  let imgpaper =
    "https://res.cloudinary.com/benchberlin/image/upload/v1591013520/scissor_paper_rock/paper_nrm9ak.png";

  let imgrock =
    "https://res.cloudinary.com/benchberlin/image/upload/v1591013519/scissor_paper_rock/rock_b1xwby.png";

  let imgscissor =
    "https://res.cloudinary.com/benchberlin/image/upload/v1591013520/scissor_paper_rock/scissor_xxk712.png";

  console.log(`COMPUTER: ${computerPick}`);

  switch (true) {
    case computerPick === "paper" && userPick === "paper":
      showResult("It´s a draw!");
      document.getElementById("computerPick").innerHTML =
        '<img class="paperC" src="' + imgpaper + '">';
      break;
    case computerPick === "scissor" && userPick === "scissor":
      showResult("It´s a draw!");
      document.getElementById("computerPick").innerHTML =
        '<img class="paperC" src="' + imgscissor + '">';
      break;
    case computerPick === "rock" && userPick === "rock":
      showResult("It´s a draw!");
      document.getElementById("computerPick").innerHTML =
        '<img class="paperC" src="' + imgrock + '">';
      break;
    case computerPick === "paper" && userPick === "rock":
      showResult("Computer wins!");
      document.getElementById("computerPick").innerHTML =
        '<img class="paperC" src="' + imgpaper + '">';
      break;
    case computerPick === "paper" && userPick === "scissor":
      showResult("Computer wins!");
      document.getElementById("computerPick").innerHTML =
        '<img class="paperC" src="' + imgpaper + '">';
      break;
    case computerPick === "rock" && userPick === "scissor":
      showResult("Computer wins!");
      document.getElementById("computerPick").innerHTML =
        '<img class="paperC" src="' + imgrock + '">';
      break;
    case computerPick === "rock" && userPick === "paper":
      showResult("User wins!");
      document.getElementById("computerPick").innerHTML =
        '<img class="paperC" src="' + imgrock + '">';
      break;
    case computerPick === "scissor" && userPick === "paper":
      showResult("User wins!");
      document.getElementById("computerPick").innerHTML =
        '<img class="paperC" src="' + imgscissor + '">';
      break;
    case computerPick === "scissor" && userPick === "rock":
      showResult("User wins!");
      document.getElementById("computerPick").innerHTML =
        '<img class="paperC" src="' + imgscissor + '">';
      break;
    default:
      showResult("INVALID");
  }
}

document.querySelector(".paper").addEventListener("click", () => {
  console.log("paper");
  if (counterU !== 3 && counterC !== 3) {
    game("paper");
  }
});

document.querySelector(".scissor").addEventListener("click", () => {
  console.log("scissor");
  if (counterU !== 3 && counterC !== 3) {
    game("scissor");
  }
});

document.querySelector(".rock").addEventListener("click", () => {
  console.log("rock");
  if (counterU !== 3 && counterC !== 3) {
    game("rock");
  }
});
