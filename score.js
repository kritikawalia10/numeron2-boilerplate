// Iteration 8: Making scoreboard functional
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
var score = urlParams.get("score");

var scoreBoard = document.getElementById("score-board");
var playAgain = document.getElementById("play-again-button");
scoreBoard.innerHTML = score;
playAgain.onclick = (evt)=>{
    location.href = "./game.html";
};