window.onload = function () {

    function rndTop() {
        var x = $("#top-container").width();
        var y = $("#top-container").height();
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    function rndMid() {
        var x = $("#mid-container").width();
        var y = $("#mid-container").height();
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    function rndBot() {
        var x = $("#bot-container").width();
        var y = $("#bot-container").height();
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    function rndLower() {
        var x = $("#lower-container").width();
        var y = $("#lower-container").height();
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    // DOT INTERVAL - TOP SECTION - SMALL DOTS
    setTimeout(function () {
        setInterval(function () {

            var randomSize = Math.floor((Math.random() * 8) + 5);

            var newImg = $("<div>")
            newImg.addClass("circle-small");
            newImg.addClass("circle");
            newImg.css("width", randomSize + "px");
            newImg.css("height", randomSize + "px");

            var xy = rndTop();
            var xPos = xy[1] - 200;
            var xPos2 = xy[1] - 400;

            newImg.css("left", (xy[0]-randomSize) + "px");
            newImg.css("top", xy[1] + "px");

            $("#top-container").append(newImg);

            newImg.css("width", randomSize + "px");
            newImg.css("opacity", "1");
            newImg.css("top", xPos + "px");

            setTimeout(function () {
                newImg.css("opacity", "0");
                newImg.css("top", xPos2 + "px");
                setTimeout(function () {
                    newImg.remove();
                }, 1600);
            }, 1600);

        }, 400);
    }, 2000);

    // DOT INTERVAL - MID SECTION - MED DOTS
    setTimeout(function () {
        setInterval(function () {

            var randomSize = Math.floor((Math.random() * 14) + 11);

            var newImg = $("<div>");
            newImg.addClass("circle-mid");
            newImg.addClass("circle");
            newImg.css("width", randomSize + "px");
            newImg.css("height", randomSize + "px");

            var xy = rndMid();
            var xPos = xy[1] - 190;
            var xPos2 = xy[1] - 380;

            newImg.css("left", (xy[0]-randomSize) + "px");
            newImg.css("top", xy[1] + "px");

            $("#mid-container").append(newImg);

            newImg.css("width", randomSize + "px");
            newImg.css("opacity", "1");
            newImg.css("top", xPos + "px");

            setTimeout(function () {
                newImg.css("opacity", "0");
                newImg.css("top", xPos2 + "px");
                setTimeout(function () {
                    newImg.remove();
                }, 1800);
            }, 1800);

        }, 700);
    }, 1000);

    // DOT INTERVAL - BOT SECTION - BIG DOTS
    setInterval(function () {

        var randomSize = Math.floor((Math.random() * 22) + 17);

        var newImg = $("<div>");
        newImg.addClass("circle-big");
        newImg.addClass("circle");
        newImg.css("width", randomSize + "px");
        newImg.css("height", randomSize + "px");

        var xy = rndBot();
        var xPos = xy[1] - 175;
        var xPos2 = xy[1] - 350;

        newImg.css("left", (xy[0]-randomSize) + "px");
        newImg.css("top", xy[1] + "px");

        $("#bot-container").append(newImg);

        newImg.css("width", randomSize + "px");
        newImg.css("opacity", "1");
        newImg.css("top", xPos + "px");

        setTimeout(function () {
            newImg.css("opacity", "0");
            newImg.css("top", xPos2 + "px");
            setTimeout(function () {
                newImg.remove();
            }, 2000);
        }, 2000);

    }, 900);

    // DOT INTERVAL - LOWER SECTION - XL DOTS
    setInterval(function () {

        var randomSize = Math.floor((Math.random() * 40) + 30);

        var newImg = $("<div>");
        newImg.addClass("circle-xl");
        newImg.addClass("circle");
        newImg.css("width", randomSize + "px");
        newImg.css("height", randomSize + "px");

        var xy = rndLower();
        var xPos = xy[1] - 100;
        var xPos2 = xy[1] - 200;

        newImg.css("left", (xy[0]-randomSize) + "px");
        newImg.css("top", xy[1] + "px");

        $("#lower-container").append(newImg);

        newImg.css("width", randomSize + "px");
        newImg.css("opacity", "1");
        newImg.css("top", xPos + "px");

        setTimeout(function () {
            newImg.css("opacity", "0");
            newImg.css("top", xPos2 + "px");
            setTimeout(function () {
                newImg.remove();
            }, 2000);
        }, 2000);

    }, 1000);

    // Prevent moving on mobile devices
    var fixed = document.getElementById('wrapper');

    fixed.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
};
