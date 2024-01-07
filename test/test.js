// Simple getting something on the console
let setup = `Generate ten multiple choice questions on a give text in JSON format. Here is an example:
[{
    "question": "What is the capital of France?",
    "options": ["Berlin", "Paris", "Madrid", "Rome"],
    "correct_answer": "1"
  }]`

let data = null;

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
}

async function getKey() {
    let key = null;
    let response = await fetch("http://localhost:8080").then(res => res.text()).then(text => key = text);
    return key
}


getResponse(`Over the last two years, mathematicians have identified the best versions of a child’s playroom’s worth of shapes. These results occupy a quirky corner of math and, fittingly, have been produced by unlikely collaborations, involving a mathematician practicing origami with his wife and a professor teaching her undergraduates to play with paper.

The work takes place within the study of “optimal” shapes, which involves understanding which version of a shape best achieves a goal given some constraints.Bees understand this implicitly: They build honeycombs with hexagonal cells because hexagons provide the most storage capacity using the fewest resources.

    At least in lore, the first person to search for such a shape was Dido, the founding queen of Carthage.After she landed on what is today the shore of Tunisia, she struck a deal with the Berber king, Iarbas.He agreed to give her whatever land she could enclose in a single ox hide.Rather than lay the meager hide flat, as Iarbas had anticipated, Dido cut it into thin strips, which she used to encircle and claim an entire hill.The ascendant queen’s insight was that given a fixed amount of material, the optimal area - enclosing shape, which defined the city limits of Carthage, is the circle.

“They usually have this flavor.There’s a family of objects, and you want to know which one maximizes this or minimizes that,” said Richard Schwartz of Brown University, who posted three results about optimal shapes in quick succession starting this past August, including one with his wife, Brienne Elisabeth Brown.

All of the recent results are about minimizing the amount of paper, rope or string used to make a particular shape.Schwartz’s recent run started with the Möbius strip, which is formed by taking a strip of paper, giving it a twist, and joining the ends.It has the bizarre feature of being a surface that only has one side, which means you can trace its entire surface without ever lifting your finger.`);



