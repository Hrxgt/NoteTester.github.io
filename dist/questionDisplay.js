"use strict";


function updateQuestion() {
    // Display the first question
    questionText.textContent = (questionCount+1) + '. ' + questions[questionCount].question;

    // Display the options
    for (let i = 0; i < 4; i++) {
        options[i].querySelector('div.w-full').textContent = questions[questionCount].options[i];
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
    console.log(userAnswers);
}

function submitAnswers() {
    score = 0
    wrongAnswers = []
    for (let i = 0; i < max; i++) {
        if (userAnswers[i] == questions[i].correct_answer) {
            score++;
        } else if (userAnswers[i] != -1) {
            wrongAnswers.push(i);
        }

    }
    showScore();
}

function showScore() {
    document.querySelector('.score').textContent = score;
    document.querySelector('.total_questions').textContent = max;
    let wrong = document.querySelector('.wrong-answers');
    wrong.innerHTML = '';
    for (let i = 0; i < wrongAnswers.length; i++) {
        let q = wrongAnswers[i];
        let corr = questions[q].correct_answer;
        let p = document.createElement('p')
        p.style.color = 'red';
        p.textContent = `Question ${q+1}: The correct answer was '${questions[q].options[corr]}'`
        wrong.appendChild(p);
    }
}


let questions = JSON.parse(sessionStorage.getItem('questions'));
let max = questions.length;
let questionCount = 0;
let userAnswers = []
let wrongAnswers = []
for (let i = 0; i < questions.length; i++) {
    userAnswers.push(-1);
}
let score = 0;


let questionText = document.querySelector('.mb-5');
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

