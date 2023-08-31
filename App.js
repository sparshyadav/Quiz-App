const questions = [
    {
        'que': 'What does the abbreviation HTML stand for?',
        'a': 'HyperText Markup Language.',
        'b': 'HighText Markup Language',
        'c': 'HyperText Markdown Language',
        'd': 'None of the Above',
        'cor': 'a'
    },
    {
        'que': 'What does the abbreviation CSS stand for?',
        'a': 'Cascading Special Sheets',
        'b': 'Cascading Style Sheets',
        'c': 'Color and Style Sheets',
        'd': 'None of the Above',
        'cor': 'b'
    },
    {
        'que': 'How many sizes of headers are available in HTML by default?',
        'a': '5',
        'b': '7',
        'c': '4',
        'd': '6',
        'cor': 'd'
    },
    {
        'que': 'In how many ways can CSS be written?',
        'a': '1',
        'b': '2',
        'c': '3',
        'd': '4',
        'cor': 'c'
    },
    {
        'que': 'Which of the following does not require a closing tag?',
        'a': '<br>',
        'b': '<hr>',
        'c': 'Both A and B',
        'd': 'None of the Above',
        'cor': 'c'
    },
];

let index=0;
const queBox=document.getElementById("queBox");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
const loadQuestion=()=>{
    const data=questions[index];
    queBox.innerText=`${index+1}. ${data.que}`;
    option1.innerText=data.a;
    option2.innerText=data.b;
    option3.innerText=data.c;
    option4.innerText=data.d;
    console.log(data);
}

const submitQuiz=()=>{
    const ans=getAnswer();
}

const getAnswer=()=>{
    
}

loadQuestion();


