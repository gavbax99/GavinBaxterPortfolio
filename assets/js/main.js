$(document).ready(function(){

    // FIX HEADER VIA SCROLL BAR 
    // function getScrollbarWidth() {

    //     // Creating invisible container
    //     const outer = document.createElement('div');
    //     outer.style.visibility = 'hidden';
    //     outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    //     outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    //     document.body.appendChild(outer);
        
    //     // Creating inner element and placing it in the container
    //     const inner = document.createElement('div');
    //     outer.appendChild(inner);
        
    //     // Calculating difference between container's full width and the child width
    //     const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
        
    //     // Removing temporary elements from the DOM
    //     outer.parentNode.removeChild(outer);
        
    //     console.log(scrollbarWidth);
    //     return scrollbarWidth;

    // };
    
    // var headerAdjust = getScrollbarWidth();
    // $(".header-inner").css("margin-left", `${headerAdjust}px`);


    // ================= SCROLL THROTTLE =================

    var previous = $(window).scrollTop();
    var throttled = _.throttle(function(){

        var check = $(".header-class").css("top");

        var current = $(this).scrollTop();

        if (current > previous) {
            if (check == "0px") {
                $(".header-class").css("top", "-120px");
            }
        } else {
            if (check == "-120px") {
                $(".header-class").css("top", "0px");
            }
        }
        previous = current;
    }, 700);

    $(window).scroll(throttled);


});

// Preloader fade
$(window).on("load", function() {


});