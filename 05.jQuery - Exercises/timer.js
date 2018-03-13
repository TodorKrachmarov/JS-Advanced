function timer() {
    let timer;
    $('#start-timer').on('click', function () {
        timer = setInterval(step, 1000);
        $('#start-timer').attr('disabled', 'disabled');
    });
    $('#stop-timer').on('click', function () {
        clearInterval(timer)
        $('#start-timer').removeAttr('disabled');
    });
    function step() {
        let sec = Number($('#seconds').text());
        sec++;
        if (sec >= 60){
            sec = 0;
            let min = Number($('#minutes').text());
            min++;
            if(min >= 60){
                min = 0;
                let hours = Number($('#hours').text());
                hours++;
                $('#hours').text(hours > 9 ? hours : '0' + hours);
            }
            $('#minutes').text(min > 9 ? min : '0' + min);
        }
        $('#seconds').text(sec > 9 ? sec : '0' + sec);
    };

}