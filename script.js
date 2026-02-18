let time = 30;
let started = false;
let timer;

const input = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const restartBtn = document.getElementById("restart");

input.addEventListener("input", function () {
    if (!started) {
        started = true;
        timer = setInterval(countDown, 1000);
    }
});

function countDown() {
    time--;
    timeDisplay.innerText = time;

    if (time === 0) {
        clearInterval(timer);
        input.disabled = true;
        calculateWPM();
    }
}

function calculateWPM() {
    let characters = input.value.length;
    let words = characters / 5;
    let wpm = Math.round(words * 2);
    wpmDisplay.innerText = wpm;
}

restartBtn.addEventListener("click", function () {
    clearInterval(timer);
    time = 30;
    started = false;

    input.value= "";
    input.disabled = false;

    timeDisplay.innerText = time;
    wpmDisplay.innerText = 0;
});
