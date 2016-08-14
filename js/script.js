$(document).ready(function () {

    /* ================================================
    SOURCE: https://jsfiddle.net/cse_tushar/Dxtyu/141/
    =================================================== */
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

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
        console.log('clicked abouttttttttttttttt');
        $('html,body').animate(
            {scrollTop: $(element_id).offset().top}, 'slow');

    });


});


/* ================================================
 SOURCE: https://jsfiddle.net/cse_tushar/Dxtyu/141/
 =================================================== */
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-fixed-top .container-fluid .navbar-right a').each(function () {
        event.preventDefault();
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-fixed-top .container-fluid .navbar-right ul li').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
    });
}
/* ================================================
 SOURCE: https://jsfiddle.net/cse_tushar/Dxtyu/141/
 =================================================== */


/*
 // for navigation bar
 $("a").click(function() {
 var element_id = $(this).attr('class');
 console.log(element_id);
 $('html,body').animate(
 {scrollTop: $(element_id).offset().top}, 'slow');

 console.log("clickeeeeed");
 });

 // for read on button
 $("#read").click(function() {
 var element_id = "#About";
 $('html,body').animate(
 {scrollTop: $(element_id).offset().top}, 'slow');

 });
 */