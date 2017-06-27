function timer() {
    let time = 0;
    let start = $('#start-timer').click(startTimer);
    let stop = $('#stop-timer').click(stopTimer);
    let interval = undefined;


    function startTimer() {
        if (!interval) {
            interval = setInterval(step, 1000);
        }
    }
    function stopTimer() {
        clearInterval(interval);
        interval = undefined;
    }

    function step() {
        time++;
        $('#hours').text(("0" + Math.trunc(time / 3600)).slice(-2));
        $('#minutes').text(("0" + Math.trunc((time % 3600)/60)).slice(-2));
        $('#seconds').text(("0" + Math.trunc((time%3600)%60)).slice(-2));
    }
}