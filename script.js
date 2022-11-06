const mainJs = document.querySelector('main');

// timer elements
const minuteJs = document.querySelector('.minute');
const secondJs = document.querySelector('.seconds');

// modals
const startModal = document.querySelector('.start-modal');

// buttons
const startBtn = document.querySelector('.start-btn');

// timer


window.addEventListener("load", () => {
    mainJs.style.opacity = '0.5';
});

startBtn.addEventListener('click', () => {
    mainJs.style.opacity = '1';
    startModal.style.display = 'none';
});
