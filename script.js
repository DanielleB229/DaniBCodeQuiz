var homeContainer = document.getElementById("home-container");
var quizContainer= document.getElementById("quiz-container");
var beginButton = document.getElementById("begin-button");
var questionDiv = document.getElementById("question");
var answer1Button = document.getElementById("answer1button");
var answer2Button = document.getElementById("answer2button");
var answer3Button =document.getElementById("answer3button");
var answer4Button =document.getElementById("answer4button");
var scoreContainer= document.getElementById("score-container");
var questionIndex = 0;
var counter = 44;
var timeRemaining = document.getElementById("time-remaining");
var scoreSpan= document.getElementById("score-span");
var interval = null;
var FinalResults = document.getElementById("textfrominput");
var submitButton = document.getElementById("submitButton");
var highScoreContainer = document.getElementById("high-score-container");


beginButton.addEventListener("click", function() {
    homeContainer.classList.add("hide");
    quizContainer.classList.remove("hide");

    interval = setInterval(function() {
        timeRemaining.innerText = counter;
        counter = counter - 1; 
        if (counter < 0) counter = 0;
        if (counter===0) {
            scoreContainer.classList.remove("hide");
            quizContainer.classList.add("hide");
            scoreSpan.innerText = counter;
        }
           
    }, 1000);


    // Displays the first question
    questionDiv.innerText = questions[questionIndex].question;
    answer1Button.innerText= questions[questionIndex].answer1;
    answer2Button.innerText= questions[questionIndex].answer2;
    answer3Button.innerText= questions[questionIndex].answer3;
    answer4Button.innerText= questions[questionIndex].answer4;
});

function OnSubmitClick(event) {
    var saveinfo = FinalResults.value; 
    console.log(saveinfo);
    var savescore = scoreSpan.innerText; 
    console.log(savescore);

    window.localStorage.setItem(saveinfo, savescore);

    scoreContainer.classList.add("hide");
    highScoreContainer.classList.remove("hide");

    for (var i = 0; i < window.localStorage.length; i++) {
        var key =  window.localStorage.key(i); 
        var value = window.localStorage.getItem(key); 
        
        highScoreContainer.innerText +="\n"+ key +" " + value;
    }
} 


submitButton.addEventListener("click", OnSubmitClick);

function onAnswerClick(event) {
    
    // Check answer
    var userAnswer = event.target.innerText;
    var correctAnswer = questions[questionIndex].correct;

    if (userAnswer === correctAnswer) { // right answer
        counter= counter;

    } else { // wrong answer
        counter = counter - 4;
    }


     //  next question
    questionIndex = questionIndex + 1;

    if (questionIndex === 5) {
        scoreContainer.classList.remove("hide");
        quizContainer.classList.add("hide");

        // stop timer
        clearInterval(interval);

        scoreSpan.innerText = counter;
    }
    else {
    // Displays the next question
    questionDiv.innerText = questions[questionIndex].question;
    answer1Button.innerText= questions[questionIndex].answer1;
    answer2Button.innerText= questions[questionIndex].answer2;
    answer3Button.innerText= questions[questionIndex].answer3;
    answer4Button.innerText= questions[questionIndex].answer4;
    }

}



answer1Button.addEventListener("click", onAnswerClick);
answer2Button.addEventListener("click", onAnswerClick);
answer3Button.addEventListener("click", onAnswerClick);
answer4Button.addEventListener("click", onAnswerClick);

var questions = [{
    question: "What is JavaScript?",
    answer1: "A framework of CSS",
    answer2: "JavaScript (JS for short) is a full-fledged dynamic programming language that can add interactivity to a website.",
    answer3: "We have not convered this information in class",
    answer4: "A general-purpose coding language",
    correct: "JavaScript (JS for short) is a full-fledged dynamic programming language that can add interactivity to a website.",
},
{
    question: "What are vairables?",
    answer1: "snippets of text that can be added along with code",
    answer2: "code the brwoser ignores",
    answer3: "Variables are containers that store values",
    answer4: "Non factors",
    correct: "Variables are containers that store values",
},
{
    question: "What is an operator?",
    answer1: "a function",
    answer2: "null information",
    answer3: "An operator is a mathematical symbol that produces a result based on two values (or variables)",
    answer4: "code that deploys emergency services",
    correct: "An operator is a mathematical symbol that produces a result based on two values (or variables)",
},
{
    question: "What are functions?",
    answer1: "Code that cannot be defined",
    answer2: "Functions are a way of packaging functionality that you wish to reuse",
    answer3: "Alert messages without purpose",
    answer4: "Web forms",
    correct: "Functions are a way of packaging functionality that you wish to reuse",
},   
{
    question:"What happens when a variable is declared outside of a function?",
    answer1: "A variable is invalidated when declared outside a fucntion",
    answer2: "A variable declared outside a function, becomes GLOBAL",
    answer3: "A variable declared outside of a function, becomes DISPLACED",
    answer4: "A variable declared outside of a function, becomes a BOOLEAN",
    correct: "A variable declared outside a function, becomes GLOBAL",
}];

