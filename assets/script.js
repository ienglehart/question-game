//pool of questions and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [ "numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];


var startEl = document.getElementById('startTime');
var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answer');

startEl.onclick(countdown());

// 60 second timer
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        if(timeLeft < 0) {
        clearInterval(timeInterval);
        }
    }, 1000);
}




var correctAnswers = 0;

//question asking function
function question(){
  for(var i = 0; i < questions.length; i++) {
      questionEl = questions[i].title;

      //somehow this is gonna print a list from the array.
      for(var x = 0; answerEl = questions[i].choices[x]; x++){

      }

      //so i have no idea how i would go about getting the inputs from the buttons in here
      if(answer ===  && questions[i].answer === ""){
        correctAnswers++;
      }
      else{
        timeLeft - 15;
      }
  }
}
