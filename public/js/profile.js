$(document).ready(function () {

    var uuName = $('#uuName').text();

    $.get('/authorityCheck', {uuName:uuName}, function (result) {
        
        if(result.uuName != uuName){
            $("p.buttonX").hide(0.001);
        }

    });

    $(".revAbt").on('click', '.buttonX', function () {
        if(confirm('Are you sure you want to delete this review?')){
            var reviewer = $(this).siblings('.reviewer').children('a').text();
            var reviewee = $(this).parentsUntil('#reviewBox').children('.revAbt:last').children('.reviewee').text();

            $.get('/deleteReview', {reviewer:reviewer, reviewee:reviewee});
            $(this).closest('.revEntry').remove();
        }
    });
});