//pool of questions and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["alerts", "booleans", "strings", "numbers"],
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


var startEl = document.getElementById('startBtn');
var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('currentQuestion');
var answerEl = document.getElementById('answer');
var ans0 = document.getElementById('ans0');
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');



startEl.addEventListener("click", function() {
  // > TEST < window.alert("click");
  question();
  countdown();
});


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
  //questionEl.innerHTML = ("hi from buton press")
  
  for(var i = 0; i < questions.length; i++) {
    var question = questions[i].title;
    questionEl.innerHTML=(question);

     
    //Print answer options from array
    for(var x = 0; answerEl = questions[i].choices[x]; x++){
      var answerSelect = document.getElementById('answer' + x);
      var answerText = questions[i].choices[x]

      answerSelect.innerHTML=(answerText);
    };
    
    //event listener
    ans0.addEventListener("click", function(){
      // console.log("eyy beans");
      if(questions[i].choices[0] === questions[i].answer ){
        correctAnswers++;
        return;
      }else{
        timeLeft -15;
        return;
      };
    })
  }
};
