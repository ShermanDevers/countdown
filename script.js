let timerStart = false;
let hours;
let minutes;
let seconds;
let secondsRemaining;
let originalSecondsRemaining;
let newTime;
const timerElement = document.querySelector('.timerText');

function readInput() {
    let alerted = false;
    hours = parseInt(document.querySelector('#hours').value);
    if (isNaN(hours)) {
        alert("Please enter a numerical value for all inputs");
        alerted = true;
    }

    minutes = parseInt(document.querySelector('#minutes').value);
    if (isNaN(minutes) && alerted == false) { 
        alert("Please enter a numerical value for all inputs");
        alerted = true;
    }

    seconds = parseInt(document.querySelector('#seconds').value);
    if (isNaN(seconds) && alerted == false) {
        alert("Please enter a numerical value for all inputs");
        alerted = true;
    }

    secondsRemaining = (hours * 3600) + (minutes * 60) + seconds;
    originalSecondsRemaining = secondsRemaining;
    if (alerted == false) {
        start();
    }
}

const button = document.querySelector('button');
button.addEventListener('click', updateTimer);

function start() {

    timerElement.textContent = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;
    if (timerElement.innerHTML != "00:00:00") {
        document.getElementsByClassName("timerText")[0].style.color = "white"
    }
    timerStart = true;
}

function updateTimer() {
    if (timerStart == true) {
        if (secondsRemaining === 0) {
            timerElement.textContent = "Time's up!";
            document.title = "Time's up!";
            let alarm = new Audio('alarm/alarm.mp3');
            alarm.play();
            return;
        }

        const hours = Math.floor(secondsRemaining / 3600);
        const minutes = Math.floor((secondsRemaining / 60) % 60);
        const seconds = secondsRemaining % 60;
        newTime = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;
        timerElement.textContent = newTime;
        document.title = newTime;
        secondsRemaining--;
        setTimeout(updateTimer, 1000);
    }
}

updateTimer();

function resetTimer() {
    const timerElement = document.querySelector('.timerText');
    const hours = Math.floor(originalSecondsRemaining / 3600);
    const minutes = Math.floor((originalSecondsRemaining / 60) % 60);
    const seconds = originalSecondsRemaining % 60;
    newTime = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;
    timerElement.textContent = newTime;
    document.title = newTime;
    timerStart = false;
}
