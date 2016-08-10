/**
 * Created by Alyssa on 8/7/2016.
 */

$(document).ready(function() {
    
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
    
    
    
    
});

