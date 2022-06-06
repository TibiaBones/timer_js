let timeBegan = null; // часы запустились?
let timeStopped = null; // в какое время был остановлен таймер?
let stopDuration = 0; // сколько времени таймер был остановлен?
let startInterval = null; // это для остановки setInterval()
let timerState = false; // состояние таймера. нужно для управления остановкой и запуском таймера


const timer = document.getElementById("time");
timer.addEventListener("click", function() {
    if (!timerState) {
        startTimer();
        timerState = true;
    } else {
        stopTimer();
        timerState = false;
    }
});

timer.addEventListener("dblclick", function() {
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stopDuration = 0;
    timerState = false;
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("centiseconds").textContent = "00";
});

function startTimer() {
    if (timeBegan === null) {
        timeBegan = new Date();
    };
    if (timeStopped !== null) {
        stopDuration += (new Date() - timeStopped);
    };

    startInterval = setInterval(timerRunning, 10);
};

function stopTimer() {
    timeStopped = new Date();
    clearInterval(startInterval);
};

function timerRunning() {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stopDuration);

    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();
    let centiseconds = Math.floor((timeElapsed.getUTCMilliseconds()) / 10);

    document.getElementById("minutes").textContent = `${minutes = minutes < 10 ? "0" + minutes : minutes}`;
    document.getElementById("seconds").textContent = `${seconds = seconds < 10 ? "0" + seconds : seconds}`;
    document.getElementById("centiseconds").textContent = `${centiseconds = centiseconds < 10 ? "0" + centiseconds : centiseconds}`;
}





































// let timer = document.getElementById("time");
// let start = new Date(0000, 0, 0, 0, 0, 0, 00);


// timer.addEventListener("click", function() {
//     setInterval(function() {
//         seconds = Math.floor(centiseconds / 100);
//         minets = Math.floor(seconds / 60)



//     }, 10);
// })