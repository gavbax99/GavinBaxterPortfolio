// Feel free to use this <canvas> code for your own purposes!
// Gavin Baxter - 2019

var canvas = document.querySelector("canvas");

// Name of parent container of <canvas>
var wrapperHeight = $("#dot-container").innerHeight();
var wrapperWidth = $("body").innerWidth();

// Initiate <canvas> size on load
canvas.width = wrapperWidth;
canvas.height = wrapperHeight;

var c = canvas.getContext("2d");

// Ticker variable to spawn dots in an innerval
var ticker = 0;

// Dot object that will be spawned
function Dot(x, y, dy, radius) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    // Large dots are a different color than small dots
    if (radius > 13) {
        this.color = "0, 176, 155";
    } else {
        this.color = "150, 201, 61";
    }
    // ttl = time to live; how long until the dot is removed from <canvas>
    this.ttl = 500;
    this.opacityChange = 2/this.ttl;
    this.opacity = 0;
};

// Our draw and update prototypes that will create and update our dots respectively
Dot.prototype.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    c.fill(); 
    c.closePath();
};

Dot.prototype.update = function () {
    this.y += this.dy;
    this.draw();
    this.ttl -= 1;
    // Increase the opacity, then once it reaches above 0.9 reduce the opacity back to 0
    this.opacity += this.opacityChange;
    if (this.opacity > 0.9) {
        this.opacityChange = -this.opacityChange;
    };
};

// The array our dots will live in
var dotArray = [];

// Depending on the screen size, initialize <canvas> with some dots before the innerval kicks in
if (wrapperWidth > 600) {
    for (i = 0 ; i < 12 ; i++) {
        var radius = Math.floor((Math.random() * 15) + 5);
        var x = Math.random() * (wrapperWidth - radius * 2) + radius;
        var y = Math.random() * (wrapperHeight - radius * 2) + radius;
        var dy = (Math.random() * -.5) -0.3;
        dotArray.push(new Dot(x, y, dy, radius));
    };
} else {
    for (i = 0 ; i < 8 ; i++) {
        var radius = Math.floor((Math.random() * 15) + 5);
        var x = Math.random() * (wrapperWidth - radius * 2) + radius;
        var y = Math.random() * (wrapperHeight - radius * 2) + radius;
        var dy = (Math.random() * -.5) -0.3;
        dotArray.push(new Dot(x, y, dy, radius));
    };
};

// Resize <canvas> to fit the current size of the screen on resize
window.onresize = function() {
    var rsy = $("#dot-container").innerHeight();
    canvas.width = document.body.clientWidth;
    canvas.height = rsy; 
};

// Our main animate funtion
function animate() {
    requestAnimationFrame(animate);
    var rsy = $("#dot-container").innerHeight();
    c.clearRect(0, 0, document.body.clientWidth, rsy);

    // Update our dots, and if their time to live is 0, remove it from <canvas>
    for (i = 0 ; i < dotArray.length ; i++) {
        dotArray[i].update();
        if (dotArray[i].ttl == 0) {
            dotArray.splice(i, 1);
        }
    };

    // Incrament our ticker every frame
    ticker++;

    // Depending on the screen size, draw our dots on innerval
    if(document.body.clientWidth > 600) {
        // Large screens spawn dots every 20 frames
        if (ticker % 20 == 0) {
            var radius = Math.floor((Math.random() * 15) + 5);
            var x = Math.random() * document.body.clientWidth;
            var y = Math.random() * rsy;
            var dy = (Math.random() * -.5) -0.3;
            dotArray.push(new Dot(x, y, dy, radius));
        };
    } else {
        // Small screens spawn dots every 40 frames
        if (ticker % 40 == 0) {
            var radius = Math.floor((Math.random() * 15) + 5);
            var x = Math.random() * document.body.clientWidth;
            var y = Math.random() * rsy;
            var dy = (Math.random() * -.5) -0.3;
            dotArray.push(new Dot(x, y, dy, radius));
        };
    };
};

// Go function go!
animate();