$(document).ready(function() {
    // initial
    $('#content').load('hero.html');


    $('nav div ul#nav li a.navi').click(function() {
        var page = $(this).attr('href');

        $('#content').load(''+ page +'.html');
        $(window).scrollTop(0);
        return false;
    })


})
