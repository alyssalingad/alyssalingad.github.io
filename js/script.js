$(document).ready(function () {

    /* ================================================
    SOURCE: https://jsfiddle.net/cse_tushar/Dxtyu/141/
    =================================================== */
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('li').each(function () {
            $(this).removeClass('active');
        })
        $(this).parent().addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    /* ================================================
     END OF SOURCE: https://jsfiddle.net/cse_tushar/Dxtyu/141/
     =================================================== */

    new WOW().init();
    
    // for read on button
    $("#read").click(function() {
        var element_id = "#About";
        $('html,body').animate(
            {scrollTop: $(element_id).offset().top}, 'slow');

    });


});


/* ================================================
 SOURCE: https://jsfiddle.net/cse_tushar/Dxtyu/141/
 =================================================== */

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        event.preventDefault();
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu li a').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
    });
}
/* ================================================
 END OF SOURCE: https://jsfiddle.net/cse_tushar/Dxtyu/141/
 =================================================== */