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
        question:"Which is the orret way to add a comment in JavaScript?",
        seletions:["//comment", "'commment", "<!--comment-->", "#comment"],
        answer: "//comment"
    },
    {
        question:"How many times will this loop iterate 'for (x=1; x<11; x++)'",
        selections:["9", "10", "11", "0"],
        answer:"10"
    },
    {
        question:"What are the + - * and / symbols in JavaScript?",
        selectons:["operators", "expressions", "functions", "objects"],
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
const question = document.getElementById("question")
const selections = document.getElementById("selections")
const score = document.getElementById("score")
const initials = document.getElementById("initials")
const saveButton = document.getElementById("saveButton")
const timer = document.getElementById("timer")
const answerStatus = document.getElementById("answerStatus")
const latestScore = document.getElementById("latestScore")

function startQuiz() {
    let currentQuestion = 0
    let currentScore = 0
    let timeLeft = 30
    startTimer()
    showQuestion()
    nextQuestion()
    let saveData =  localStorage.getItem("previousScore")

    fi (saveData != null) {
        latestScore.innerText = "Previous Score : " + saveData
    }
}

function startTimer() {
    let timerInterval = setInterval(function(){
        timeLeft--
        timer.innerText = "Time Remaining: " + timeLeft
        if (timeLeft <=0) {
            clearInterval(timerInterval)
            endQuiz()
        }
    }, 1000)
}
function showQuestion() {
    document.getElementById("startScreen").classList.add("hidden")
    questionScreen.classList.remove("hidden")
    document.getElementById("gameOver").classList.add("hidden")
}