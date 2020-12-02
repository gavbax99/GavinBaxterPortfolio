$(document).ready(function(){

    $(".nav-button").on("click", function () {
        var data = $(this).attr("data-name");
        var hamburgerMenu = $(".hamburger-list").css("right");
        $('html,body').animate({ scrollTop: $(`#${data}`).offset().top}, 1000);
        if (hamburgerMenu == "0px") {
            $(".hamburger-list").css("right", "-100px");
        };
    });

    $(".hamburger").on("click", function () {
        var hamburgerMenu = $(".hamburger-list").css("right");
        if (hamburgerMenu == "-100px") {
            $(".hamburger-list").css("right", "0px");
        };
    });

    $(".hamburger-x").on("click", function (){
        $(".hamburger-list").css("right", "-100px");
    });

});

// Preloader fade
$(window).on("load", function() {

	$(".load-cover").css("background-color", "transparent");
	setTimeout(() => { $(".load-cover").remove() }, 1000)

});