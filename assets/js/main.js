$(document).ready(function(){

    $(".header-logo").on("click", function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    $(".nav-button").on("click", function () {
        var data = $(this).attr("data-name");
        $('html,body').animate({ scrollTop: $(`#${data}`).offset().top}, 1000);
    });


    // ================= SCROLL THROTTLE =================

    // var previous = $(window).scrollTop();
    // var throttled = _.throttle(function(){

    //     console.log("scroll");

    //     var check = $(".header-class").css("top");

    //     var current = $(this).scrollTop();

    //     if (current > previous) {
    //         if (check == "0px") {
    //             $(".header-class").css("top", "-120px");
    //         }
    //     } else {
    //         if (check == "-120px") {
    //             $(".header-class").css("top", "0px");
    //         }
    //     }
    //     previous = current;
    // }, 200);

    // $(window).scroll(throttled);


});

// Preloader fade
$(window).on("load", function() {


});