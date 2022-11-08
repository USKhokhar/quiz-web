
// QUESTIONS

let questions = [
    {
        flag: 'https://countryflagsapi.com/png/br',
        answer : [
            {option: 'Panama', correct: false},
            {option: 'Argentina', correct: false},
            {option: 'Brazil', correct: true},
            {option: 'Bolivia', correct: false},
        ]
    },
    {
        flag: 'https://countryflagsapi.com/png/ru',
        answer : [
            {option: 'Russia', correct: true},
            {option: 'France', correct: false},
            {option: 'Italy', correct: false},
            {option: 'Greece', correct: false},
        ]
    },
    {
        flag: 'https://countryflagsapi.com/png/bt',
        answer : [
            {option: 'Nepal', correct: false},
            {option: 'Bhutan', correct: true},
            {option: 'Thailand', correct: false},
            {option: 'Laos', correct: false},
        ]
    },
    {
        flag: 'https://countryflagsapi.com/png/png',
        answer : [
            {option: 'Panama', correct: false},
            {option: 'Vietnam', correct: false},
            {option: 'Papua New Guinea', correct: true},
            {option: 'North Macedonia', correct: false},
        ]
    },
    {
        flag: 'https://countryflagsapi.com/png/vat',
        answer : [
            {option: 'Serbia', correct: false},
            {option: 'Vatican City', correct: true},
            {option: 'Somalia', correct: false},
            {option: 'Bolivia', correct: false},
        ]
    },
    {
        flag: 'https://countryflagsapi.com/png/sl',
        answer : [
            {option: 'Sri Lanka', correct: false},
            {option: 'Zanzibar', correct: false},
            {option: 'Sierra Leone', correct: true},
            {option: 'Tanzania', correct: false},
        ]
    },
    {
        flag: 'https://countryflagsapi.com/png/mex',
        answer : [
            {option: 'Panama', correct: false},
            {option: 'Canada', correct: false},
            {option: 'Slovakia', correct: false},
            {option: 'Mexico', correct: true},
        ]
    },
    {
        flag: 'https://countryflagsapi.com/png/pan',
        answer : [
            {option: 'Panama', correct: true},
            {option: 'Czech Republic', correct: false},
            {option: 'Cambodia', correct: false},
            {option: 'Bolivia', correct: false},
        ]
    },
    {
        flag: 'https://countryflagsapi.com/png/fiji',
        answer : [
            {option: 'Panama', correct: false},
            {option: 'Fiji', correct: true},
            {option: 'French Polynesia', correct: false},
            {option: 'Tuvalu', correct: false},
        ]
    },
    {
        flag: 'https://countryflagsapi.com/png/tuv',
        answer : [
            {option: 'British Indian Territory', correct: false},
            {option: 'Argentina', correct: false},
            {option: 'Tuvalu', correct: true},
            {option: 'Spain', correct: false},
        ]
    }

]

const mainJs = document.querySelector('main');
const scoreDisplay = document.querySelector('#score-display');
const quesDisplay = document.querySelector('#ques-display');

// QNA
let flagEl = document.querySelector('.flag');
const optA = document.querySelector('.a');
const optB = document.querySelector('.b');
const optC = document.querySelector('.c');
const optD = document.querySelector('.d');
let quesIndex;

// timer elements
const counterJs = document.querySelector('.counter');

// modals
const startModal = document.querySelector('.start-modal');
const exitModal = document.querySelector('.exit-modal');

// buttons
const startBtn = document.querySelector('.start-btn');
const exitBtn = document.querySelector('.exit-btn');
const yesBtn = document.querySelector('.y-btn');
const noBtn = document.querySelector('.n-btn');
const openScoreBtn = document.querySelector('.open');
const closeScoreBtn = document.querySelector('.close');
const answerBtn = document.querySelectorAll('.answer-btn');

// timer
const startTime = 5;
let totalTime = startTime * 60;

updateCounter = () => {
    const minute = Math.floor(totalTime / 60);
    let second = totalTime % 60;

    
    counterJs.innerHTML = `0${minute} : ${second}`;
    if(second < 10){
        counterJs.innerHTML = `0${minute} : 0${second}`;
    }

    // if(minute === -1){
    //     counterJs.innerHTML = `00 : 00`;
    //     clearInterval(updateCounter);
    //     window.location.replace('./tq.html');
    // }

    totalTime--;
}

// OPENING SCORE DISPLAY ON SMALLER SCREEN
openScoreBtn.addEventListener('click', () => {
    scoreDisplay.style.display = 'flex';
    quesDisplay.style.display = 'none';
    openScoreBtn.style.display = 'none';
    closeScoreBtn.style.display = 'block'
})
closeScoreBtn.addEventListener('click', () => {
    scoreDisplay.style.display = 'none';
    quesDisplay.style.display = 'flex';
    openScoreBtn.style.display = 'block';
    closeScoreBtn.style.display = 'none'
})

// START MODAl
window.addEventListener("load", () => {
    mainJs.style.opacity = '0.5';
    exitModal.style.display = 'none';
});

startBtn.addEventListener('click', () => {
    mainJs.style.opacity = '1';
    startModal.style.display = 'none';
    setInterval(updateCounter, 1000);

    quesIndex = Math.floor(Math.random() * 9);
    setQues(quesIndex);
});

// EXIT MODAL
exitBtn.addEventListener('click', () => {
    mainJs.style.opacity = '0.5';
    exitModal.style.display = 'flex';
})

noBtn.addEventListener('click', () => {
    mainJs.style.opacity = '1';
    exitModal.style.display = 'none';
})

yesBtn.addEventListener('click', () => {
    window.location.replace("./tq.html");
})

const setQues = (e) => {
    flagEl.src = questions[e].flag
    optA.innerHTML = questions[e].answer[0].option;
    optB.innerHTML = questions[e].answer[1].option;
    optC.innerHTML = questions[e].answer[2].option;
    optD.innerHTML = questions[e].answer[3].option;
}