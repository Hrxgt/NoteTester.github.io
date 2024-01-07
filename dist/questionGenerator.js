"use strict";

// ---- QUESTION GENERATING FUNCTIONS -----
async function getResponse(prompt) {
    // EXPOSES KEY!!! YOU'RE LUCKY THIS IS LOCAL YOU FOOL!!
    let key = await getKey();

    const url = `https://api.openai.com/v1/chat/completions`;
    const body = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: setup,
            },
            {
                role: 'user',
                content: prompt,
            }
        ],
        max_tokens: 1000
    }
    console.log("Request sent, waiting...")
    const response = await fetch(
        url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + key,
            },
            body: JSON.stringify(body)
        }
    );
    let full_response = await response.json(); // Extracting data as a JSON Object from the response
    console.log("Response received.")
    data = full_response.choices[0].message.content;
    sessionStorage.setItem('questions', data);
    location.href = 'question.html';
}

async function getKey() {
    let key = null;
    let response = await fetch("http://localhost:8080").then(res => res.text()).then(text => key = text);
    return key
}


// --------------------


// ----- NOTES FETCH FUNCTIONS ------
function getNotes(event) {
    let fileInput = document.getElementById('file_input');
    if (fileInput.files.length == 0) {
        return;
    }

    let reader = new FileReader()
    reader.addEventListener('load', (event) => notes = event.target.result);
    reader.readAsText(fileInput.files[0]);
}
// ------------


// Set up ChatGPT to take notes or an article as input and generate questions.
let setup = `Generate ten multiple choice questions on a given text in JSON format. Here is an example:
[{
    "question": "What is the capital of France?",
    "options": ["Berlin", "Paris", "Madrid", "Rome"],
    "correct_answer": 1
  }]
The options list is 0-indexed, so correct answer should be in the range 0 to 3.`

let data = null;
let notes = null;


// WEBPAGE CODE
let upload_btn = document.getElementById('upload_btn');
upload_btn.addEventListener('click', getNotes)

let generate_btn = document.getElementById('generate_btn');
generate_btn.addEventListener('click', () => {
    getResponse(notes);
    console.log("clicked");
    document.querySelector('.loader').style.opacity = '1';
    document.querySelector('.generate').style.opacity = '0';
});

// Notes generation

