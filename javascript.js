function game(str) {
  let options = ["paper", "scissor", "rock"];
  let random = Math.floor(Math.random() * 3);

  let userPick = str;
  let computerPick = options[random];
  console.log(`USER: ${userPick}`);
  console.log(`COMPUTER: ${computerPick}`);

  switch (true) {
    case computerPick === "paper" && userPick === "paper":
      console.log("It´s a draw!");
      break;
    case computerPick === "scissor" && userPick === "scissor":
      console.log("It´s a draw!");
      break;
    case computerPick === "rock" && userPick === "rock":
      console.log("It´s a draw!");
      break;
    case computerPick === "paper" && userPick === "rock":
      console.log("Computer Wins");
      break;
    case computerPick === "paper" && userPick === "scissor":
      console.log("User Wins");
      break;
    case computerPick === "rock" && userPick === "scissor":
      console.log("Computer wins");
      break;
    case computerPick === "rock" && userPick === "paper":
      console.log("User wins");
      break;
    case computerPick === "scissor" && userPick === "paper":
      console.log("Computer wins!");
      break;
    case computerPick === "scissor" && userPick === "rock":
      console.log("User wins!");
      break;
    default:
      console.log("Computer says: no");
  }
}

game("paper");
