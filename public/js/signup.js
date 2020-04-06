$(document).ready(function () {

    $('#uuName').keyup(function () {

        var uuName = $('#uuName').val();

        $.get('/signupCheck', {uuName:uuName}, function (result) {

            if(result.uuName == uuName) {
                $('#uuName').css('color', 'red');
                $('#error').text('Username already exists');
                $('#submit').prop('disabled', true);
            }
            else {
                $('#uuName').css('color', '#77dd77');
                $('#error').text('');
                $('#submit').prop('disabled', false);
            }
        });
    });
});
