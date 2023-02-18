// JavaScript source code
function countDown(start) {
    let clock = setInterval(function () {
        start--;
        if (start <= 0) {
            clearInterval(clock);
            console.log("Done!");
        } else {
            console.log(start);
        }
    }, 1000);
}
function randomNumGame() {
    let attempts = 0;
    let num;
    let timer = setInterval(function () {
        num = Math.random();
        attempts++;
        if (num > 0.75) {
            clearInterval(timer);
            console.log("It took " + attempts + " tries!");
        }
    }, 1000);
}
