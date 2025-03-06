const displayEle = document.querySelector('.display');
const decreaseBtnEle = document.querySelector('.decrease-btn');
const resetBtnEle = document.querySelector('.reset-btn');
const increaseBtnEle = document.querySelector('.increase-btn');
let count = 0;

decreaseBtnEle.addEventListener('click', () => decreaseCounter());
resetBtnEle.addEventListener('click', () => resetCounter());
increaseBtnEle.addEventListener('click', () => increaseCounter());

function increaseCounter() {
    count++;
    displayEle.textContent = count;
}

function resetCounter() {
    count = 0;
    displayEle.textContent = count;
}

function decreaseCounter() {
    count--;
    displayEle.textContent = count;
}