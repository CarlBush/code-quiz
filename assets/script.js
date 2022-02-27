var startQuiz = document.querySelector("#start-quiz");
var ulCreate = document.createElement("ul");
var questionsDiv = document.querySelector("#questionsDiv");
var timerElement = document.querySelector("#timer");

var questionIndex = 0;
var score = 0;
var zeroInterval = 0;
var secondsLeft = 75;
var questions=[
    {   arrayQuestion: "What is the rarest M&M color?",
        arrayAnswers: ["Brown", "Yellow", "Red", "Green"],
        arrayCorrect: "Brown"},
        
    {   arrayQuestion: "In what year were the first Air Jordan sneakers released?",
        arrayAnswers: ["1987", "1984", "1990", "1994"],
        arrayCorrect: "1984"},

    {   arrayQuestion: " In the United Kingdom, what is the day after Christmas known as??",
        arrayAnswers: ["Boxing Day", "Tea Day", "Royal Day", "Christmas Past Day"],
        arrayCorrect: "Boxing Day"},

    {   arrayQuestion: "How many ribs are in a human body?",
        arrayAnswers: ["8", "12", "16", "24"],
        arrayCorrect: "24"},

    {   arrayQuestion: "Which country is known as the Land of White Elephant??",
        arrayAnswers: ["Kazakhstan", "India", "Ethiopia", "Thailand"],
        arrayCorrect: "Thailand"}
];

startQuiz.addEventListener("click", function (){
    if (zeroInterval == 0) {
        zeroInterval = setInterval(function () {
            secondsLeft--;
            console.log(secondsLeft);
            timerElement.textContent = secondsLeft + " seconds remaining.";

            if (secondsLeft <= 0) {
                questionsDiv.innerHTML = "";
                timerElement.innerHTML = "";
                clearInterval(zeroInterval);
                timerElement.textContent = "Time's up! You scored " + secondsLeft;
            }
        }, 1000);
    }
    render(questionIndex);
});

function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for(var i = 0; i <questions.length; i++){
    var questionLoop = questions[questionIndex].arrayQuestion;
    var answerLoop = questions[questionIndex].arrayAnswers;
    questionsDiv.textContent = questionLoop;
    questionsDiv.className ="fs-3 fw-light";
    }

    answerLoop.forEach(function (newItem){
        var listItem = document.createElement("li");
        listItem.className = "btn btn-primary d-flex justify-content-center align-items-center col-2 mt-1";
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (correctAnswer));
    })

};

function correctAnswer(event) {
    var element = event.target;
        if(element.matches("li")){
            var createDiv = document.createElement("div");
            createDiv.className = "fs-3 fw-light";
            if (element.textContent == questions[questionIndex].arrayCorrect){
                score++;
                createDiv.textContent = "Correct"
                console.log(questionIndex);
                secondsLeft;
            }
            else {
                createDiv.textContent = "Wrong";
                secondsLeft = secondsLeft - 10;
            }
        }
        questionIndex++;

        if(questionIndex >=questions.length){
            questionsDiv.innerHTML = "";
            timerElement.innerHTML = "";
            clearInterval(zeroInterval);
            createDiv.textContent = "Quiz is over you scored a " + secondsLeft + ".";
        }
        else{
            render(questionIndex);
        }
        questionsDiv.appendChild(createDiv);
};