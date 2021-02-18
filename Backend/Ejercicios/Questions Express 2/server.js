const questionsPack = {
    "questions": [
        {
            "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
            "answers": [
                "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
                "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
                "#demo.innerHTML = \"Hello World!\";",
                "document.getElement(\"p\").innerHTML = \"Hello World!\";"
            ],
            "correctAnswer": 2
        },
        {
            "question": "Which event occurs when the user clicks on an HTML element?",
            "answers": [
                "onmouseover",
                "onmouseclick",
                "onclick",
                "onchange"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Where is the correct place to insert a JavaScript?",
            "answers": [
                "Both the <head> section and the <body> section are correct",
                "The <footer>",
                "The <body> section",
                "The <head> section"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Inside which HTML element do we put the JavaScript?",
            "answers": [
                "<script>",
                "<js>",
                "<javascript>",
                "<scripting>"
            ],
            "correctAnswer": 2
        },
        {
            "question": "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
            "answers": [
                "if i =! 5 then",
                "if (i <> 5)",
                "if i <> 5",
                "if (i != 5)"
            ],
            "correctAnswer": 3
        },
        {
            "question": "How does a FOR loop start?",
            "answers": [
                "for (i <= 5; i++)",
                "for i = 1 to 5",
                "for (i = 0; i <= 5; i++)",
                "for (i = 0; i <= 5)"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Which operator is used to assign a value to a variable?",
            "answers": [
                "x",
                "*",
                "-",
                "="
            ],
            "correctAnswer": 0
        }
    ]
}





const users = {
    "28": {
        "name": "Miguel Ángel",
        "surname": "Florido",
        "role": "Teacher",
    },
    "54560416": {
        "name": "Susana",
        "surname": "Pérez",
        "role": "Futbolista"
    },
    "1": {
        "name": "Ángel",
        "surname": "Flor",
        "role": "Peacher",
    },
    "2": {
        "name": "Ana",
        "surname": "Pérez",
        "role": "Gamer"
    },
    "3": {
        "name": "Miguel",
        "surname": "Ido",
        "role": "Cher",
    },
    "4": {
        "name": "Susano",
        "surname": "Uchiha",
        "role": "Ninja"
    },
    "5": {
        "name": "Naruto",
        "surname": "Uzumaki",
        "role": "Hokague",
    },
    "6": {
        "name": "Sakura",
        "surname": "Rosa",
        "role": "Medical"
    },
};


/*
    Imports
*/
const express = require("express");

/*
    Config vars
*/
const port = 8080;
const server = express();

/*
    Imports
*/
server.get("/quiz", (req, res) => {
    res.send({questions: [questionsPack]});
    // const questions = req.query.questions;
    // const quizQuestions = questionsPack[questions];
    // res.send(quizQuestions ? quizQuestions : {"error": "Question not found"});
});

server.get("/userData", (req, res) => {
    const userId = req.query.userId;
    const userInfo = users[userId];
    res.send(userInfo ? userInfo : {"error": "user not found"});
});


/*
    Start Server
*/
server.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});