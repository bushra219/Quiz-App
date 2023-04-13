const quizData=[
    {
        question : "who is the richest man of china ?",
        a: "Zhong Shanshan",
        b: "Jack Maa",
        c: "Yung sikhi",
        d: "Bill Gates",
        correct: "a",
    },
    {
        question: "Which is the most used language in 2019 ?",
        a: "Python",
        b: "C++",
        c: "Java",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "Who invented bulb ?",
        a: "Joseph Swan",
        b:  "Thomas Edison",
        c: "Hiram Maxim",
        d: "Alexander John",
        correct:"b", 
    },
    {
        question : "Who is the father of Computer ?",
        a: "Charlie Chaplin",
        b: "Basir graham",
        c: "Charles Babbage",
        d: "Alex Rolie",
        correct:"c",
    },
    {
        question: "Who is the best ?",
        a: "The Queen of Universe Bushra",
        b: "Asli Loji",
        c: "Forhem akhanda",
        d: "none",
        correct:"a",
    }
];
const quiz=document.querySelector('#quiz');
const answerEls=document.querySelectorAll('.answer');
const questionEl=document.querySelector('#question');
const a_text=document.querySelector('#a_text');
const b_text=document.querySelector('#b_text');
const c_text=document.querySelector('#c_text');
const d_text=document.querySelector('#d_text');
const subitBtn=document.querySelector('#submit');
let currentQuiz=0;
let score=0;

function loadQuiz(){

    deSelected();

    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}
loadQuiz();
function getSelected(){
    let answer=undefined;
    for(answerEl of answerEls){
        if(answerEl.checked){
            answer=answerEl.id;
        }
    }
    return answer;
}

function deSelected(){
    for(answerEl of answerEls ){
        answerEl.checked=false;
    }
}
subitBtn.addEventListener("click",()=>{
    const answer=getSelected();
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if(currentQuiz<quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
    
        }
    }
});

