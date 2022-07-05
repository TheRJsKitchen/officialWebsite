
$(document).ready(function() {

    $('nav div ul#nav li a.aboutNav').click(function() {
        var d = $('p#footerRJ');
    
        $('#content').load('hero.html');

        setTimeout(
            function() 
            {
                $('html, body').animate({
                    scrollTop: $("#myFoot").offset().top
                }, 0);
            }, 500);


        return false;
    })

})