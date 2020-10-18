//QUIZ elements
var questionEl = document.getElementById("question");
var userChoices = document.querySelectorAll(".choice-answer");
var btn = document.querySelector("#button");


//Variables
// var userAlert = alert("Welcome to the quiz! You have 120 seconds to complete, and each wrong answer will decuct 15 seconds. Good luck!");
var currentQ = {};
var score = 0;  //user score
var qCounter = 0; //so the user knows what question they are on
var highScore = 0
var startClick = false



var questionArray = [];  //questions that will be used in quiz

var quizQuestions = [
 {
   questionEl: "What does HTML stand for?",
   choices: ["Hyper Talk Mockup Language",
   "Hyper Text Markup Language",
  "Hyper Time Media Language",
   "Hyper True Markup Language"],
   answer: "Hyper Text Markup Language"
 },

 {
  questionEl: "Which of these choices is the correct way to write a paragraph tag?",
  choices: ["<p/> <p>",
  "<p> <p/>",
  "<p> </p>",
  "<p /p>"],
  answer: "<p> </p>"
},

{
  questionEl: "Which two attributes are required for image tags?",
  choices: ["src and alt",
  "src and id",
  "src and class",
   "src and li"],
  answer: "src and alt"
},

{
  questionEl: "Which of these is NOT a value for the 'float' property?",
  choices: ["Undefined",
  "Left",
  "Right",
  "Inherit"],
  answer: "Undefined"
},

{
  questionEl: "Which of these is used to transverse UP in the DOM?",
  choices: [".up",
  ".parentElement",
  ".upElement",
  ".previous"], 
  answer: ".parentElement"
},

{
  questionEl: "What is the most popular programming language?",
  choices: ["CSS",
  "HTML",
  "Bootstrap",
  "JavaScript"],
  answer: "JavaScript"
},

{
  questionEl: "What type of value will a confirm return?",
  choices: ["Boolean",
  "String",
  "Numeric",
  "Prompt"],
  answer: "Boolean"
},

{
  questionEl: "What does CSS stand for?",
  choices: ["Cascading Style Spread",
  "Controlled Style Sheet",
  "Copied Spread Sheet",
  "Cascading Style Sheet"],
  answer: "Cascading Style Sheet"
},

{
  questionEl: "What is the proper way to increment a variable?",
  choices: ["i.increaseByOne",
  "i++",
  "i=+",
  "++i"],
  answer: "i++"
},

{
  questionEl: "Which of these is not a color value for CSS?",
  choices: ["Color",
  "HEX Value",
  "PrimaryColor Values",
  "RGB Value"],
  answer: "PrimaryColor Values"
},
]



 function startQuiz () {
   score = 0;
   qCounter = 0;
   timeleft= 120;
   btn.setAttribute("class", "hide")
  
   startTimer();
   getNextQuestion("answer match");
 };

 function getNextQuestion (lastChoice) {
   console.log(lastChoice);
 
   if(lastChoice == "answer match"){
     console.log("quiz has begun")
   }else if(lastChoice == quizQuestions[qCounter-1].answer){
     score +=10;
     console.log(score);
   }else {
     console.log("incorrect")
    timeleft -= 15;
   }
  
   questionEl.textContent = quizQuestions[qCounter].questionEl;
   var i =0;
   userChoices.forEach(choice => {
     choice.textContent = quizQuestions[qCounter].choices[i]
     i++;
   })
    qCounter++;
    if (qCounter >= 10) {
      document.location.href = "endpage.html";
    }
    
 };

 userChoices.forEach(choice => {
   choice.addEventListener('click', function(){
     var choice = this.textContent;
     getNextQuestion(choice);
  }); 
 }); 
 
 btn.addEventListener("click", startQuiz);


 var timeleft = 120;
 function startTimer(){
 
  var downTimer = setInterval(function(){
    if(timeleft <= 0 || qCounter == 10){
      localStorage.setItem("mostRecentScore", score);
      clearInterval(downTimer);
     
    } if (timeleft <= 0){
      clearInterval()
     ;
    }
      document.getElementById("countdown").textContent = timeleft;
      timeleft -= 1;
    }, 1000);

    // localStorage.getItem("highScore");
  }


   

// function unhide(btn, quiz) {
//   var hideQ = document.getElementById(quiz);
//   if (hideQ) {
//       if(hideQ.container=='hidden'){
//           hideQ.container = 'unhidden' ;
//           clickedButton.value = 'hide';
//       }else {
//           hideQ.container = 'hidden';
//           clickedButton.value = 'unhide'
//       }
//   }}

var highScore = localStorage.getItem("highScore");
  if (highScore  || score > parseInt(highScore)) {
  localStorage.setItem("highscore", score);
}


