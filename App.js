const questions = [
    {
        question: 'What does the abbreviation HTML stand for?',
        answerA: 'Hyper Text Markup Language',
        answerB: 'Hyper Transfer Markup Language', 
        answerC: 'High Text Markup Language', 
        answerD: 'Hyper Text Markeup Language'
    },
    {
        question: 'What does the abbreviation CSS stand for?',
        answerA: 'Cascading Special Sheets',
        answerB: 'Cascading Style Sheets', 
        answerC: 'Color and Style Sheets', 
        answerD: 'None of the Above'
    },
    {
        question: 'How many sizes of headers are available in HTML by default?',
        answerA: '5',
        answerB: '7', 
        answerC: '4', 
        answerD: '6'
    },
    {
        question: 'In how many ways can CSS be written?',
        answerA: '1',
        answerB: '2', 
        answerC: '3', 
        answerD: '4'
    },
    {
        question: 'Which of the following does not require a closing tag?',
        answerA: '<br>',
        answerB: '<hr>', 
        answerC: 'Both A and B', 
        answerD: 'None of the Above'
    },
];

const questionElement=document.getElementById("question");
const answer1=document.querySelector(".btn1");
const answer2=document.querySelector(".btn2");
const answer3=document.querySelector(".btn3");
const answer4=document.querySelector(".btn4");
const nextButton=document.getElementById("next-btn");

let index=0;
let score=0;

function startQuiz(){
    index=0;
    score=0;
    nextButton.innerHTML="Next";
    ShowQuestion();
}

function ShowQuestion(){
    let currentQuestion=questions[index];
    let questionNo=index+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    answer1.innerHTML=currentQuestion.answerA;
    answer2.innerHTML=currentQuestion.answerB;
    answer3.innerHTML=currentQuestion.answerC;
    answer4.innerHTML=currentQuestion.answerD;
    
}

startQuiz();
ShowQuestion();



