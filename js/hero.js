$(document).ready(function() {

    $('#full').click(function() {
        var page = $(this).attr('href');

        $('#content').load(''+ page +'.html');
        $(window).scrollTop(0);
        return false;
    })
})