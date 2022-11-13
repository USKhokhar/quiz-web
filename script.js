// QUESTIONS
let questions = [
    {
        flag: 'https://countryflagsapi.com/png/br',
        
        a: 'Panama',
        b: 'Argentina',
        c: 'Brazil',
        d: 'Bolivia',
        ans: 'opt-c'
    },
    {
        flag: 'https://countryflagsapi.com/png/ru',
        
        a: 'Russia',
        b: 'France',
        c: 'Italy',
        d: 'Greece',
        ans: 'opt-a'
    },
    {
        flag: 'https://countryflagsapi.com/png/bt',
        
        a: 'Nepal',
        b: 'Bhutan',
        c: 'Thailand',
        d: 'Laos',
        ans: 'opt-b'
    },
    {
        flag: 'https://countryflagsapi.com/png/png',
        
        a: 'Panama',
        b: 'Vietnam',
        c: 'Papua New Guinea',
        d: 'North Macedonia',
        ans: 'opt-c'
    },
    {
        flag: 'https://countryflagsapi.com/png/vat',
        
        a: 'Serbia',
        b: 'Vatican City',
        c: 'Somalia',
        d: 'Bolivia',
        ans: 'opt-b'
    },
    {
        flag: 'https://countryflagsapi.com/png/sl',
        
        a: 'Sri Lanka',
        b: 'Zanzibar',
        c: 'Sierra Leone',
        d: 'Tanzania',
        ans: 'opt-c'
    },
    {
        flag: 'https://countryflagsapi.com/png/mex',
        
        a: 'Panama',
        b: 'Canada',
        c: 'Slovakia',
        d: 'Mexico',
        ans: 'opt-d'
    },
    {
        flag: 'https://countryflagsapi.com/png/pan',
        
        a: 'Panama',
        b: 'Czech Republic',
        c: 'Cambodia',
        d: 'Bolivia',
        ans: 'opt-a'
    },
    {
        flag: 'https://countryflagsapi.com/png/fiji',
        
        a: 'Panama',
        b: 'Fiji',
        c: 'French Polynesia',
        d: 'Tuvalu',
        ans: 'opt-b'
    },
    {
        flag: 'https://countryflagsapi.com/png/tuv',
        
        a: 'British Indian Territory',
        b: 'Argentina',
        c: 'Tuvalu',
        d: 'Spain',
        ans: 'opt-c'
    }

]

// QUESTION ELEMENTS

const flagEl = document.querySelector('.flag');
const quesNum = document.querySelector('.ques-number');
const optA = document.querySelector(".a");
const optB = document.querySelector(".b");
const optC = document.querySelector(".c");
const optD = document.querySelector(".d");
const options = document.querySelectorAll('.radio-btn');

let index = 0;

// CONTROL BUTTONS
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.previous-btn');
const clearBtn = document.querySelector('.clear-btn');
const markBtn = document.querySelector('.mark-btn');

// SCOREBOARD
let score = 0;
const attEl = document.querySelector('.att-count');
const mkEl = document.querySelector('.mk-count');
const naEl = document.querySelector('.na-count');
const numbersEl = document.querySelectorAll('.number');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const scoreBoard = document.querySelector('#score-display');
const quesDisplay = document.querySelector('#ques-display');
const submitBtn = document.querySelector('.submit');


// TIMER
const counterEl = document.querySelector('.counter');
const startTime = 5;
let totalTime = startTime*60;


updateTimer = () => {
    const minuteJs = Math.floor(totalTime/60);
    let secondJs = totalTime%60;
    (secondJs < 10) ? (counterEl.innerHTML = `0${minuteJs} : 0${secondJs}`) : counterEl.innerHTML = `0${minuteJs} : ${secondJs}`;
    totalTime--;
    if(totalTime < 0){
        counterEl.innerHTML = 'OVER'
    }
}

// MODALS
const overlayJs = document.querySelector('.overlay');
const startModal = document.querySelector('.start-modal');
const exitModal = document.querySelector('.exit-modal');
const startBtn = document.querySelector('.start-btn');
const exitBtn = document.querySelector('.exit-btn');
const yesBtn = document.querySelector('.y-btn');
const noBtn = document.querySelector('.n-btn');
const leaveBtn = document.querySelector('.leave');
const scoreModal = document.querySelector('.score-modal');
const confirmModal = document.querySelector('.confirm-modal');
const sBtn = document.querySelector('.yes');
const nsBtn = document.querySelector('.no');
const scoreCount = document.querySelector('.score');

confirmModal.style.display = 'none';
scoreModal.style.display = 'none';
exitModal.style.display = 'none';

// displaying question
setQuestion = (index) => {
    flagEl.src = questions[index].flag;
    optA.innerHTML = questions[index].a;
    optB.innerHTML = questions[index].b;
    optC.innerHTML = questions[index].c;
    optD.innerHTML = questions[index].d;

    quesNum.innerHTML = index+1;
}

// choosing function
selectedOpt = () => {
    let selected;
    options.forEach((opt) => {
        if(opt.checked){
            selected = opt.id;
        }
    })

    return selected;
}

// next button
nextBtn.addEventListener('click', () => {
    const choice = selectedOpt()
    
    options.forEach((opt) => {
        if(opt.checked){
            attEl.innerHTML++;
            opt.checked = false;
            numbersEl[quesNum.innerHTML-1].classList.add('attempted')
            numbersEl[quesNum.innerHTML-1].classList.remove('marked')
        } 
    });
    
    if(choice === questions[index].ans){
        score++;
    };
    
    index++
    if(index > 9){
        index = 9;
    };
    setQuestion(index);

    console.log( choice, score);
})

// previous button
prevBtn.addEventListener('click', () => {
   index--;
    if(index < 0){
        index = 0;
    }
    setQuestion(index);
})

// clear button
clearBtn.addEventListener('click', () =>{

    if(numbersEl[quesNum.innerHTML-1].classList.contains('attempted')){
         numbersEl[quesNum.innerHTML-1].classList.remove('attempted');
         attEl.innerHTML--;
    }
    if(numbersEl[quesNum.innerHTML-1].classList.contains('marked')){
        numbersEl[quesNum.innerHTML-1].classList.remove('marked');
        mkEl.innerHTML--;
    }
    // numbersEl[quesNum.innerHTML-1].classList.remove('attempted');
})

// mark button

markBtn.addEventListener('click', () => {
    numbersEl[quesNum.innerHTML-1].classList.add('marked');
    mkEl.innerHTML++;
    index++
    setQuestion(index);
})

// Number Navigation
numbersEl.forEach((num) => {
    num.addEventListener('click', () => {
        index = num.innerHTML-1;
        setQuestion(index);
    })
})

// SCOREBOARD FUNCTIONALITY

openScore = () => {
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    scoreBoard.style.display = 'flex';
    quesDisplay.style.display = 'none';
}

closeScore = () => {
    scoreBoard.style.display = 'none';
    quesDisplay.style.display = 'flex';
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}

openBtn.addEventListener('click', openScore);
closeBtn.addEventListener('click', closeScore);

// MODAL FUNCTIONALITY

// start modal

startBtn.addEventListener('click', () => {
    overlayJs.style.display = 'none';
    setQuestion(index);
    setInterval(updateTimer, 1000);
    startModal.style.display = 'none';
})

// exit button
exitBtn.addEventListener('click', () => {
    overlayJs.style.display = 'block';
    exitModal.style.display = 'flex';
})

yesBtn.addEventListener('click', () => {
    window.location.replace('./tq.html');
})
noBtn.addEventListener('click', () => {
    overlayJs.style.display = 'none';
    exitModal.style.display = 'none';
})

// submit confirmation modal

submitBtn.addEventListener('click', () => {
    confirmModal.style.display = 'flex';
    overlayJs.style.display = 'block';
    scoreCount.innerHTML = score;

})

sBtn.addEventListener('click', () =>{
    confirmModal.style.display = 'none';
    scoreModal.style.display = 'flex';
    overlayJs.style.display = 'block';
    overlayJs.style.background = 'var(--dark-clr-xx)';
})

nsBtn.addEventListener('click', () => {
    confirmModal.style.display = 'none';
    overlayJs.style.display = 'none';
})

// score Modal

leaveBtn.addEventListener('click', () => {
    window.location.replace('./tq.html');
})
