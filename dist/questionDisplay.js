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
}


let questions = JSON.parse(sessionStorage.getItem('questions'));
let max = questions.length - 1;
let questionCount = 0;
let userAnswers = []
let score = 0;
for (let i = 0; i < questions.length; i++) {
    userAnswers.push(-1);
}

let questionText = document.getElementsByClassName('question');
let options = document.getElementsByClassName('fgoption');
for (let i = 0; i < 4; i++) {
    options[i].addEventListener('click', () => answerQuestion(i))
}

let next_btn = document.getElementById('next_btn');
next_btn.addEventListener('click', nextQuestion);

let submit_btn = document.getElementById('submit_btn');
submit_btn.addEventListener('click', submitAnswers);

updateQuestion(questionCount);

