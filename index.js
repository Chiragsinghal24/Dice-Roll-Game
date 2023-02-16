window.addEventListener('click',()=>{
	document.getElementById("song").play();
});
var name1 = prompt("Player 1 Name Please");
// var gender1=prompt("gender of player 1");
var name2 = prompt("Player 2 Name Please");
// var gender2=prompt("gender of player 2");
document.querySelector(".l1").innerHTML = name1;
document.querySelector(".l2").innerHTML = name2;

// Select the dice images
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

// Function to roll the dice
// function rollthedice() {
//   // Generate random numbers and dice image sources
//   var randomnumber1 = Math.floor(Math.random() * 6) + 1;
//   var randomnumber2 = Math.floor(Math.random() * 6) + 1;
//   var randomdiceimage1 = "dice" + randomnumber1 + ".png";
//   var randomdiceimage2 = "dice" + randomnumber2 + ".png";
//   var randomimagesource1 = "images/" + randomdiceimage1;
//   var randomimagesource2 = "images/" + randomdiceimage2;

//   // Update the dice images
//   dice1.setAttribute("src", randomimagesource1);
//   dice2.setAttribute("src", randomimagesource2);

//   // Update the result text
//   var resultText = document.querySelector("h1");
//   if (randomnumber1 > randomnumber2) {
//     resultText.innerHTML = "Jeetgya " + name1;
//   } else if (randomnumber2 > randomnumber1) {
//     resultText.innerHTML = "Jeetgya " + name2;
//   } else {
//     resultText.innerHTML = "Draw!";
//   }
// }

// // Select the button element and add a click event listener to it
// var rollButton = document.querySelector(".butn");
// rollButton.addEventListener("click", rollthedice);

// Function to roll the dice


var scoreBox = document.getElementById("score-box");
var player1Score = document.getElementById("player1-score");
var player2Score = document.getElementById("player2-score");

// Initialize the scores
var score1 = 0;
var score2 = 0;

function rollthedice() {
  // Generate random numbers and dice image sources
  var randomnumber1 = Math.floor(Math.random() * 6) + 1;
  var randomnumber2 = Math.floor(Math.random() * 6) + 1;
  var randomdiceimage1 = "dice" + randomnumber1 + ".png";
  var randomdiceimage2 = "dice" + randomnumber2 + ".png";
  var randomimagesource1 = "images/" + randomdiceimage1;
  var randomimagesource2 = "images/" + randomdiceimage2;

  // Add the animation class to the dice images
  dice1.classList.add("animate");
  dice2.classList.add("animate");

  // Wait for 1 second (1000 milliseconds)
  setTimeout(function() {
    // Remove the animation class from the dice images
    dice1.classList.remove("animate");
    dice2.classList.remove("animate");

    // Update the dice images
    dice1.setAttribute("src", randomimagesource1);
    dice2.setAttribute("src", randomimagesource2);

    // Update the result text
    var resultText = document.querySelector("h1");
    if (score1 >= 6|| score2 >=6) {
      if(score1>score2){
        resultText.innerHTML = name1 +" wins🏆";
      }
      else if(score2>score1){
        resultText.innerHTML = name2 +" wins🏆";
      }
      return;
    }
    else if (randomnumber1 > randomnumber2) {
      score1++;
      player1Score.textContent = score1;
      resultText.innerHTML = name1 +" chance";
    } 
    else if (randomnumber2 > randomnumber1) {
      score2++;
      player2Score.textContent = score2;
      resultText.innerHTML = name2 +" chance";
    } 
    else {
      resultText.innerHTML = "Draw!";
    }
  }, 1000); // Wait for 1 second (1000 milliseconds) before updating the dice images
}


