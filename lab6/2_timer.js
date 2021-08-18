function timer() {
    // TODO
    $('#start-timer').on('click', startTimer);
    $('#stop-timer').on('click', stopTime);

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var interval;

    function startTimer() {
        addtime();
        interval = setInterval(addtime, 1000);
    };

    function addtime() {
        seconds++;
        if (minutes >= 60) {
            hours++;
            seconds = 0;
        }
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        $('#hours').text((hours ? (hours > 9 ? hours : "0" + hours) : "00"));
        $('#minutes').text((minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00"));
        $('#seconds').text((seconds > 9) ? seconds : "0" + seconds);
    };

    function stopTime() {
        clearInterval(interval);
    };
}