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
