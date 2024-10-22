

/**  

const questions = [
    {
        question: "Which is the most populated country in the world?",
        answers: [
            { text: "China", correct: false },
            { text: "Brazil", correct: false },
            { text: "India", correct: true },
            { text: "Nigeria", correct: false }
        ]
    },
    {
        question: "A question that does not require an answer is called___?",
        answers: [
            { text: "Simple question", correct: false },
            { text: "Rhetorical question", correct: true },
            { text: "Open question", correct: false },
            { text: "Divergent question", correct: false }
        ]
    },
    {
        question: "What is the most effective means of communication?",
        answers: [
            { text: "Visual", correct: false },
            { text: "Written", correct: false },
            { text: "Non-verbal", correct: false },
            { text: "Verbal", correct: true }
        ]
    },
    {
        question: "What is sociology about?",
        answers: [
            { text: "Systematic study of human society and social interaction", correct: true },
            { text: "Study of society", correct: false },
            { text: "Systematic study of sociological perspectives", correct: false },
            { text: "Study of sociopaths", correct: false }
        ]
    },
    {
        question: "The saying 'A word is enough for the wise' is an example of___",
        answers: [
            { text: "Idiom", correct: false },
            { text: "Metaphor", correct: false },
            { text: "Non-verbal", correct: false },
            { text: "Adage", correct: true }
        ]
    },
    {
        question: "Introverts, extroverts, and ambiverts are examples of___?",
        answers: [
            { text: "Character", correct: false },
            { text: "Personality type", correct: true },
            { text: "Training", correct: false },
            { text: "Nurture", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answers"); 
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.add(button.dataset.correct ? "correct" : "incorrect");
    });
     if (correct) {
        score++;
    }
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz completed! Your score: ${score}/${questions.length}`);
        startQuiz();
    }
});

startQuiz();**/



const questions = [
    {
        question: "Which is the most populated country in the world?",
        answers: [
            { text: "China", correct: false },
            { text: "Brazil", correct: false },
            { text: "India", correct: true },
            { text: "Nigeria", correct: false }
        ]
    },
    {
        question: "A question that does not require an answer is called_?",
        answers: [
            { text: "Simple question", correct: false },
            { text: "Rhetorical question", correct: true },
            { text: "Open question", correct: false },
            { text: "Divergent question", correct: false }
        ]
    },
    {
        question: "What is the most effective means of communication?",
        answers: [
            { text: "Visual", correct: false },
            { text: "Written", correct: false },
            { text: "Non-verbal", correct: false },
            { text: "Verbal", correct: true }
        ]
    },
    {
        question: "What is sociology about?",
        answers: [
            { text: "Systematic study of human society and social interaction", correct: true },
            { text: "Study of society", correct: false },
            { text: "Systematic study of sociological perspectives", correct: false },
            { text: "Study of sociopaths", correct: false }
        ]
    },
    {
        question: "The saying 'A word is enough for the wise' is an example of_",
        answers: [
            { text: "Idiom", correct: false },
            { text: "Metaphor", correct: false },
            { text: "Non-verbal", correct: false },
            { text: "Adage", correct: true }
        ]
    },
    {
        question: "Introverts, extroverts, and ambiverts are examples of_?",
        answers: [
            { text: "Character", correct: false },
            { text: "Personality type", correct: true },
            { text: "Training", correct: false },
            { text: "Nurture", correct: false }
        ]
    },

    {
        question: "The fastest means of transportation___?",
        answers: [
            { text: "Train", correct: false },
            { text: "Sea", correct: false },
            { text: "Road", correct: false },
            { text: "Air", correct: true }
        ]
    },

    {
        question: "what animal have the farthest vision?",
        answers: [
            { text: "Cheetah", correct: false },
            { text: "Eagle", correct: true },
            { text: "Falcon", correct: false },
            { text: "Dolphin", correct: false }
        ]
    },
    
    {
        question: "What is the largest organ in the body?",
        answers: [
            { text: "Skin", correct: true },
            { text: "Brain", correct: false },
            { text: "Stomach", correct: false },
            { text: "Eye", correct: false }
        ]
    },

    {
        question: "How many days makes 1 leap year?",
        answers: [
            { text: "266 days", correct: false },
            { text: "666 days", correct: false },
            { text: "366 days", correct: true },
            { text: "365 days", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answers"); 
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        selectedButton.classList.add("correct");
        score++;  // Increment score only if the answer is correct
    } else {
        selectedButton.classList.add("incorrect");
        // Show the correct answer
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        });
    }

    // Disable all buttons after an answer is selected
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });

     // Debug log for score
    nextButton.style.display = "block";
}




nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz completed! Your score: ${score}/${questions.length}`);    
        startQuiz();
    }
});

startQuiz();