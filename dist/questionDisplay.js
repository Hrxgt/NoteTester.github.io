"use strict";

function updateQuestion(questionCount) {
    // Display the first question
    questionText[0].textContent = questions[questionCount].question;  // Blurred bg
    questionText[1].textContent = questions[questionCount].question;  // Foreground

    // Display the options
    for (let i = 0; i < 4; i++) {
        options[i].querySelector('.text-sm').textContent = questions[questionCount].options[i];

    }    
}


let questions = JSON.parse(sessionStorage.getItem('questions'));
let questionCount = 0;

let questionText = document.getElementsByClassName('question');
let options = document.getElementsByClassName('fgoption');

let next_btn = document.getElementById('next_btn');
next_btn.addEventListener('click', () => questionCount++);


