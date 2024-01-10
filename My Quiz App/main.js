//Array Declaration

const quizData=[{
    question:"What do you stand for HTML ? ",
    options:[
       "Hypertext Markup Languages",
       "Hyper Transfer Markup Languages",
       "Hyper Machine Lanuguages",
       "Hyperlink and text Markup Languages"
    ],
    correct: 0,
},
{
    question:"Which CSS property is used control the spacing between elements ?",
    options:["Margin","Padding","Spacing","Border-spacing"],
    correct: 1,
},
{
    question:"Which Javascript function used to select an HTML element by its id?",
    options:[
        "document.query",
        "getElementById",
        "selectElement",
        "findElementById"
           ],
    correct: 1,
},
{
    question:"In React.js which book is used a perform side effects in a function component ?",
    options:["UseEffect","UseState","UseContext","UseReducer"],
    correct: 0,
},
{
    question: "Which HTML tag is used to create an ordered list?",
    options:["<li>","<ul>","<ol>","<dl>"],
    correct: 2,
},
];
// JavaScript Initialization
const quiz =document.querySelector("#quizsection");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option1, option2, option3, option4]= document.querySelectorAll("#question, .option1, .option1, .option1, .option1");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

//Load quiz 

const loadQuiz =()=>{
    const {question , options}=quizData[currentQuiz];
    
    console.log(options);
    questionElm.innerText = question;
    options.forEach((curOption, index )=> window [`option${index + 1}`].innerText=curOption)
};
loadQuiz();

// get select the Answer index onclick Submit button 
const getselectedOption=()=>{
let answerElement = Array.from(answerElm);
return answerElement.findIndex((curElm)=> curElm.checked);
};
//deSelectedAnswer
const deSelectedAnswer = ()=> {
   return answerElm.forEach((curElm) => curElm.checked = false);
};
submitBtn.addEventListener("click", () => {
    const selectedOptionIndex=getselectedOption();
    console.log(selectedOptionIndex);
     
    if(selectedOptionIndex=== quizData[currentQuiz].correct){
        score= score+1;
    }

    currentQuiz++;
    
    if(currentQuiz<quizData.length)
    {
        deSelectedAnswer();
        loadQuiz()

    }
    else
    {
        quiz.innerHTML = `<div class="result">
        <h1> Results </h1>
        <h2> Your Score : ${score}/${quizData.length} Correct Answer </h2>
        <p> Congratulations on completing the Quiz ! </p>
        <button class="Reload-Button" onclick="location.reload()"> Play Again </button>
        </div>`;
    }

});