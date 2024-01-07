"use strict";


function updateQuestion() {
    // Display the first question

    questionText[0].textContent = questions[questionCount].question;  // Blurred bg
    questionText[1].textContent = questions[questionCount].question;  // Foreground

    // Display the options
    for (let i = 0; i < 4; i++) {
        options[i].querySelector('.text-sm').textContent = questions[questionCount].options[i];

    }    
}

function nextQuestion() {
    if (questionCount < max) {
        questionCount++;
        updateQuestion();
    }
}

function prevQuestion() {
    if (questionCount > 0) {
        questionCount--;
        updateQuestion();
    }
}

function answerQuestion(optionNum) {
    userAnswers[questionCount] = optionNum;
}

function submitAnswers() {
    for (let i = 0; i < max; i++) {
        if (userAnswers[i] == questions[i].correct_answer) {
            score++;
        }
    }
    console.log(`Score is ${score}`);
    showScore();
}

function showScore() {
    document.querySelector('.final').style.opacity = 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.tscore').textContent = max;
}


let questions = JSON.parse(sessionStorage.getItem('questions'));
let max = questions.length;
let questionCount = 0;
let userAnswers = []
for (let i = 0; i < questions.length; i++) {
    userAnswers.push(-1);
}
let score = 0;


let questionText = document.getElementsByClassName('question');
let options = document.getElementsByClassName('fgoption');
for (let i = 0; i < 4; i++) {
    options[i].addEventListener('click', () => answerQuestion(i))
}

let next_btn = document.getElementById('next_btn');
next_btn.addEventListener('click', nextQuestion);

let prev_btn = document.getElementById('prev_btn');
prev_btn.addEventListener('click', prevQuestion);

let submit_btn = document.getElementById('submit_btn');
submit_btn.addEventListener('click', submitAnswers);

updateQuestion(questionCount);

