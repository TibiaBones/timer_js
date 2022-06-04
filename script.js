let timer = document.getElementById("time");
let centiseconds = document.getElementById("centiseconds").textContent;
let seconds = document.getElementById("seconds").textContent;
let minets = document.getElementById("minets").textContent;
let timerid;

timer.addEventListener("click", timerid = function() {
    setInterval(function() {
        let localCentiseconds = +centiseconds;
        let localSeconds = +seconds;
        let localMinets = +minets;

        ++localCentiseconds;
        if (localCentiseconds == 100) {
            localCentiseconds = 0;
            localSeconds += 1;
            centiseconds = String(localCentiseconds);
        } else {
            centiseconds = String(localCentiseconds);
        };
        if (localSeconds == 60) {
            localSeconds = 0;
            localMinets += 1;
            seconds = String(localSeconds);
        } else {
            seconds = String(localSeconds);
        };
        if (localMinets == 100) {
            clearInterval(timerid);
            minets = String(localMinets);
        } else {
            minets = String(localMinets);
        };

        if (localCentiseconds < 10) {
            centiseconds = "0" + localCentiseconds;
        }
        if (localSeconds < 10) {
            seconds = "0" + localSeconds;
        }
        if (localMinets < 10) {
            minets = "0" + localMinets;
        }

        document.getElementById("centiseconds").textContent = `${centiseconds}`;
        document.getElementById("seconds").textContent = `${seconds}`;
        document.getElementById("minets").textContent = `${minets}`;
        timer.addEventListener("click", clearInterval(timerid));
    }, 10);
})













































// let timer = document.getElementById("time");
// let start = new Date(0000, 0, 0, 0, 0, 0, 00);


// timer.addEventListener("click", function() {
//     setInterval(function() {
//         seconds = Math.floor(centiseconds / 100);
//         minets = Math.floor(seconds / 60)



//     }, 10);
// })