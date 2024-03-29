let questions = [
    {
        question:"Which element is used to insert the JavaScript into the HTML?",
        selections: ["<Javascript>", "<js>", "<script>", "<scripting>" ],
        answer: "<script>"
    },
    {
        question:"What is the correct syntax refering to an external script called 'script.js?'?",
        selections: ["<script src = 'script.js'>", "<script name = 'script.js'>", "<script href = 'script.js'>", "<script value = 'script.js>"],
        answer: "<script src = 'script.js'>"
    },
    {
        question:"Which is the correct 'for' loop?",
        selections:["for (i=0; i <=5)", "for (i=0; i<=5; i++)", "for i = 1 to 5",  "for (i<=5; i++"],
        answer: "for (i=0; i<=5; i++)"
    },
    {
        question:"Which is the corret way to add a comment in JavaScript?",
        selections:["//comment", "'commment", "<!--comment-->", "#comment"],
        answer: "//comment"
    },
    {
        question:"How many times will this loop iterate 'for (x=1; x<11; x++)'",
        selections:["9", "10", "11", "0"],
        answer:"10"
    },
    {
        question:"What are the + - * and / symbols in JavaScript?",
        selections:["operators", "expressions", "functions", "objects"],
        answer:"operators"
    },
    {
        question:"The expression 'x! = y' returns 'false' if:",
        selections:["x equals y", "x is less than y", "x is more than y", "x does not equal y"],
        answer: "x equals y"
    }
]

const startButton = document.getElementById("startButton")
const questionScreen = document.getElementById("questionScreen")
const questionEl = document.getElementById("question")
const selectionsEl = document.getElementById("selections")
const scoreContent = document.getElementById("score")
const initials = document.getElementById("initials")
const saveButton = document.getElementById("saveButton")
const timer = document.getElementById("timer")
const answerStatus = document.getElementById("answerStatus")
const latestScore = document.getElementById("latestScore")
let currentQuestion
let currentScore
let timeLeft



function startQuiz() {
    currentQuestion = 0;
    currentScore = 0;
    timeLeft = 30;
    startTimer();
    showQuestion();
    nextQuestion();
    let saveData = localStorage.getItem("previousScore");

    if (saveData != null) {
        latestScore.innerText = "Previous Score : " + saveData;
    }
}

function saveScore() {
    let game = currentScore + " achieved by " + initials.value;
    localStorage.setItem("previousScore", game);
    latestScore.innerText = "Previous Score : " + game;
}

function startTimer() {
    timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval); // Stop the timer
            endQuiz(); // Call endQuiz() function to display end screen
        }
    }, 1000);
}
function showQuestion() {
    document.getElementById("startScreen").classList.add("hidden")
    questionScreen.classList.remove("hidden")
    document.getElementById("gameOver").classList.add("hidden")
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        let thisQuestion = questions[currentQuestion]
        questionEl.textContent = thisQuestion.question
        selectionsEl.innerHTML= ""
        for (let i =0; i < thisQuestion.selections.length; i=i + 1) {
            let option = document.createElement("button")
            option.classList.add("option")
            option.textContent = thisQuestion.selections[i]
            option.addEventListener("click", optionsClick) // fixed function name here
            selectionsEl.appendChild(option) // fixed variable name here
        }
    } else {
        endQuiz()
    }
}

function optionsClick(event) {
    let selectedOption = event.target.textContent
    let thisQuestion = questions[currentQuestion]
    if (selectedOption === thisQuestion.answer) {
        currentScore = currentScore + 5;
        answerStatus.innerText = "Question: correct";
    } else {
        timeLeft = timeLeft - 5;
        answerStatus.innerText = "Question: Wrong, Wrong, Worng.";
    }
    currentQuestion = currentQuestion + 1;
    if (currentQuestion >= questions.length) { // Check if all questions answered
        clearInterval(timeInterval)
        endQuiz(); // Call endQuiz() function to display end screen
    } else {
        nextQuestion(); // Move to next question
    }
}

function endQuiz () {
    clearInterval(timeInterval)
    questionScreen.classList.add("hidden")
    document.getElementById("gameOver").classList.remove("hidden")
    scoreContent.textContent = currentScore
    answerStatus.innerText = ""
}





startButton.addEventListener("click", startQuiz)
saveButton.addEventListener("click", saveScore)