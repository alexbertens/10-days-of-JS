const quizData = [
    {
        question: 'Question 1',
        a: 'answer 1',
        b: 'answer 2',
        c: 'answer 3',
        d: 'answer 4',
        correct: 'c'
    }, {
        question: 'Question 2',
        a: 'answer 1',
        b: 'answer 2',
        c: 'answer 3',
        d: 'answer 4',
        correct: 'a'
    }, {
        question: 'Question 3',
        a: 'answer 1',
        b: 'answer 2',
        c: 'answer 3',
        d: 'answer 4',
        correct: 'c'
    }, {
        question: 'Question 4',
        a: 'answer 1',
        b: 'answer 2',
        c: 'answer 3',
        d: 'answer 4',
        correct: 'c'
    }, {
        question: 'Question 5',
        a: 'answer 1',
        b: 'answer 2',
        c: 'answer 3',
        d: 'answer 4',
        correct: 'c'
    }, {
        question: 'Question 6',
        a: 'answer 1',
        b: 'answer 2',
        c: 'answer 3',
        d: 'answer 4',
        correct: 'c'
    }, {
        question: 'Question 7',
        a: 'answer 1',
        b: 'answer 2',
        c: 'answer 3',
        d: 'answer 4',
        correct: 'c'
    }, {
        question: 'Question 8',
        a: 'answer 1',
        b: 'answer 2',
        c: 'answer 3',
        d: 'answer 4',
        correct: 'c'
    }, {
        question: 'Question 9',
        a: 'answer 1',
        b: 'answer 2',
        c: 'answer 3',
        d: 'answer 4',
        correct: 'c'
    }, {
        question: 'Question 10',
        a: 'answer 1',
        b: 'answer 2',
        c: 'answer 3',
        d: 'answer 4',
        correct: 'c'
    }
];

const quiz = document.getElementById("quiz");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerHTML = currentQuizData.question;
    a_text.innerText =currentQuizData.a;
    b_text.innerText =currentQuizData.b;
    c_text.innerText =currentQuizData.c;
    d_text.innerText =currentQuizData.d;   
}

function getSelected() {
    const answerElement = document.querySelectorAll(".answer");

    let answer = undefined;
    answerElement.forEach((answerElement) => {
        if(answerElement.checked) {
            answer = answerElement.id;
        }
    })

    return answer;
}

function deselectAnswer() {
    answerElement.forEach((answerElement) => {
        answerElement.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    //Check to see the answer
    const answer = getSelected();
    
    if (answer) {

        if(answer === quizData[currentQuiz].correct) {
            score++;
        console.log(score);
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else{
            submitBtn.style.display = "none";
            quiz.innerHTML = `<h2>You Answered ${score}/${quizData.length} questions Correctly.</h2>
            
            <button onclick="location.reload()">Reload</button>`;
            }  
    }

    
    
    
})