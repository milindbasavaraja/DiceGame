var player1RandomNumber = Math.floor(Math.random() * 6) + 1;
var player2RandomNumber = Math.floor(Math.random() * 6) + 1;
console.log("Player 1:" + player1RandomNumber);
console.log("Player 2:" + player2RandomNumber);
var image1Src = "images/dice".concat(player1RandomNumber).concat(".png");
var image2Src = "images/dice".concat(player2RandomNumber).concat(".png");

document.querySelector("img.img1").setAttribute("src", image1Src);
document.querySelector("img.img2").setAttribute("src", image2Src);

if (player1RandomNumber == player2RandomNumber) {
  document.querySelector(".container h1").textContent = "Tie";
} else if (player1RandomNumber > player2RandomNumber) {
  document.querySelector(".container h1").textContent = "Player 1 Wins";
} else {
  document.querySelector(".container h1").textContent = "Player 2 Wins";
}
