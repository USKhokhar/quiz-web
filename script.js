const mainJs = document.querySelector('main');

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

    totalTime--;
}

// START MODAl
window.addEventListener("load", () => {
    mainJs.style.opacity = '0.5';
    exitModal.style.display = 'none';
});

startBtn.addEventListener('click', () => {
    mainJs.style.opacity = '1';
    startModal.style.display = 'none';
    setInterval(updateCounter, 1000);
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