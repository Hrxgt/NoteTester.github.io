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


let questions = JSON.parse(sessionStorage.getItem('questions'));
let max = questions.length - 1;
let questionCount = 0;

let questionText = document.getElementsByClassName('question');
let options = document.getElementsByClassName('fgoption');

let next_btn = document.getElementById('next_btn');
next_btn.addEventListener('click', nextQuestion);

updateQuestion(questionCount);

