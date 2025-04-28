var randomNumber1 =
  "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
var dice1 = document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", randomNumber1);
var randomNumber2 =
  "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
var dice2 = document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", randomNumber2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
