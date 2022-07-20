const quizQuestion= [
{
    question: "How old is Arexon?",
    a: "21",
    b: "22",
    c: "23",
    d: "24",
    correct: "b" 
},
{
    question: "When did Arexon was born?",
    a: "July 3, 1999",
    b: "July 4, 2000",
    c: "July 5, 2000",
    d: "July 6, 1999",
    correct: "d"
} ,
{
    question: "Where did Arexon was born",
    a: "Muntinlupa",
    b: "Cavite",
    c: "Pasay",
    d: "Romblon",
    correct: "d"
},
{
    question: "Where does Arexon reside?",
    a: "Muntinlupa",
    b: "Cavite",
    c: "Pasay",
    d: "Romblon",
    correct: "a"
},
{
    question: "What is Arexon's favorite color?",
    a: "red",
    b: "blue",
    c: "yellow",
    d: "green",
    correct: "c"
} 

]

const questionEl= document.querySelector('#question')
const choices=document.querySelectorAll('.choice')
const aText= document.getElementById("a-text")
const bText= document.getElementById("b-text")
const cText= document.getElementById("c-text")
const dText= document.getElementById("d-text")
const submit = document.getElementById('submit')
const selected= document.querySelectorAll('.choice')
const quizResult= document.getElementById('message')
const container= document.querySelector('.container')

let currentQuestion=0
let score=0


loadQuiz()

function getSelected(){  
    let answer= undefined
    selected.forEach( function(selected){
        if(selected.checked){
        answer= selected.id
      }
    })
    return answer 
}
function deselectAnswer(){
    selected.forEach(selected=>{
        selected.checked= false
    })
      
}

function loadQuiz(){
    deselectAnswer()
    const quiz = quizQuestion[currentQuestion]
    questionEl.innerHTML= quiz.question
    aText.innerHTML= quiz.a
    bText.innerHTML= quiz.b
    cText.innerHTML= quiz.c
    dText.innerHTML= quiz.d

}

 submit.addEventListener('click', function(){
    
     const answer =getSelected()

     if(answer){

   if(answer===quizQuestion[currentQuestion].correct){
    score = score+1
    }
        currentQuestion++
        if(currentQuestion < quizQuestion.length ){
            loadQuiz()
        }else{
            quizResult.style.display = "flex"
            container.style.display= "none"
            quizResult.innerHTML= `You answered correctly at ${score}/${quizQuestion.length} questions  <button id= "reset" onclick="location.reload()">Retake</button>`
            
        }

     }
     
 })


 