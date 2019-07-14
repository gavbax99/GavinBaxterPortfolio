$(document).ready(function(){

    $(".nav-button").on("click", function () {
        var data = $(this).attr("data-name");
        $('html,body').animate({ scrollTop: $(`#${data}`).offset().top}, 1000);
    });

});

// Preloader fade
$(window).on("load", function() {

});