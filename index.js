// Pop-Quiz Questions
const questions = [
    {
    number: 1,
    question: "Commonly used data-types DO Not include:",
    answer: "alerts",
    options: ["alerts", "strings", "booleans", "numbers"]
    },
    {
    number: 2,
    question: "The condition in an if / else statement is enclosed with _____.",
    answer: "curly brackets",
    options: ["curly bracket", "quotes", "parenthesis", "square brackets"]
    },
    {
    number: 3,
    question: "Arrays in JavaScript can be used to store _____.",
    answer: "all of the above",
    options: ["numbers and strings", "boolean", "other arrays", "all of the above"]},
    {
    number: 4,
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answer: "qoutes",
    options: ["commas", "qoutes", "curly bracket", "parenthesis"]},
    {
    number: 5,
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: "console.log",
    options: ["console.log", "Javascirpt", "for loops", "terminal/bash"]},
];

// All buttons
const startButton = document.querySelector(".start-button");
const exitButton = document.querySelector(".exit-button");
const continueButton = document.querySelector(".continue-button");
const nextButton = document.querySelector(".next-button");

//All "Pages"
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const thirdPage = document.querySelector(".third-page");
const fourthPage = document.querySelector(".fourth-page");

const questionD = document.querySelector(".question-d")
const options = document.querySelector(".options")

//Everything timer
var timer = document.getElementById('timer');

//other needed variables
const timer = 30;
let score = 0;
let hs = [];

function countdown() {
    var timeLeft = 30;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else {
            timer.textContent = '';
            clearInterval(timeInterval);
            endGame(); 
        }   
    }, 1000);
}

document.querySelector(".startButton").onclick = () => {
    quesDisplay();
}

function quesDisplay(index) {
    const questionD = document.querySelector(".questionD");

    let ques_tag = '<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    questionD.innerHTML = questionD;
    options.innerHTML = options;
    
    const options = options.querySelectorAll(".options");
    // set onclick attribute to all available options
    for(i=0; i < options.length; i++){
        options[i].setAttribute("onclick", "optionSelected(this)");
    }
}
function showQuetions(index){
    const quesDisplay = document.querySelector(".questionD");
    
    let questionD = '<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
    let options = '<div class="options"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="options"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="options"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="options"><span>'+ questions[index].options[3] +'</span></div>';
    questionD.innerHTML = questionD; 
    options.innerHTML = options; 
    
    const option = options.querySelectorAll(".options");

    // set onclick
    for(i=0; i < option.length; i++){
        options[i].setAttribute("onclick", "optionSelected(this)");
    }
}

//if user clicked on option
function optionSelected(answer){
    //Add to selected choices
}

function showresults(){
    //add to results
}


