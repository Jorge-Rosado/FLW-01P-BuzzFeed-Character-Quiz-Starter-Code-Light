document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  
  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
let imageSource = document.querySelector(".imgresult")
let result = document.querySelector(".displayResult")
let scoreOne
let scoreTwo
let scoreThree




  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
userInput1 = q1.value.toLowerCase();
userInput2 = q2.value.toLowerCase();
userInput3 = q3.value.toLowerCase();



    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
if(userInput1 === "flaming hot cheetos"){
  scoreOne = 4
} else if(userInput1 === "lays"){
  scoreOne = 1
} else if(userInput1 === "takis"){
  scoreOne = 3
} else if(userInput1 === "doritos"){
  scoreOne = 2
}



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
if(userInput2 === "crying"){
  scoreTwo = 4
} else if(userInput2 === "lol"){
  scoreTwo = 1
} else if(userInput2 === "lmfao"){
  scoreTwo = 3
} else if(userInput2 === "lmao"){
  scoreTwo = 2
}



    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
if(userInput3 === "go out with friends"){
  scoreThree = 4
} else if(userInput3 === "sleep"){
  scoreThree = 1
} else if(userInput3 === "spend time with family"){
  scoreThree = 3
} else if(userInput3 === "do your own thing"){
  scoreThree = 2
}



    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.

let sumOfScores = scoreOne + scoreTwo + scoreThree
    

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.


if(sumOfScores <= 5){ result.insertAdjacentHTML("afterend", "<h1> You seem like you're more like Walter! </h1>")
imageSource.src="images/dad.webp"
} else if (sumOfScores > 5 && sumOfScores <= 8) {
result.insertAdjacentHTML("afterend", "<h1> You seem like you're more like Josh! </h1>")
  imageSource.src="images/josh.webp"
}  else if (sumOfScores > 8 && sumOfScores <= 10) {
result.insertAdjacentHTML("afterend", "<h1> You seem like you're more like Megan! </h1>")
  imageSource.src="images/megan.jpg"
}  else if (sumOfScores > 10) {
result.insertAdjacentHTML("afterend", "<h1> You seem like you're more like Drake! </h1>")
  imageSource.src="images/drake.webp"
}
  }
};