var canvas = document.querySelector("canvas");
var wrapperHeight = $("#dot-container").innerHeight();
var wrapperWidth = $("body").innerWidth();

canvas.width = wrapperWidth;
canvas.height = wrapperHeight;

var c = canvas.getContext("2d");

// var colorArray = [
//     "247, 67, 86",
//     "53, 172, 228"
// ];
// this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

var ticker = 0;

function Dot(x, y, dy, radius) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    if (radius > 13) {
        this.color = "0, 176, 155";
    } else {
        this.color = "150, 201, 61";
    }
    
    this.ttl = 500;
    this.opacityChange = 2/this.ttl;
    this.opacity = 0;
}

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
    this.opacity += this.opacityChange;
    if (this.opacity > 0.9) {
        this.opacityChange = -this.opacityChange;
    }
};

var dotArray = [];

if (wrapperWidth > 600) {
    for (i = 0 ; i < 12 ; i++) {
        var radius = Math.floor((Math.random() * 15) + 5);
        var x = Math.random() * (wrapperWidth - radius * 2) + radius;
        var y = Math.random() * (wrapperHeight - radius * 2) + radius;
        var dy = (Math.random() * -.5) -0.3;
        dotArray.push(new Dot(x, y, dy, radius));
    }
} else {
    for (i = 0 ; i < 8 ; i++) {
        var radius = Math.floor((Math.random() * 15) + 5);
        var x = Math.random() * (wrapperWidth - radius * 2) + radius;
        var y = Math.random() * (wrapperHeight - radius * 2) + radius;
        var dy = (Math.random() * -.5) -0.3;
        dotArray.push(new Dot(x, y, dy, radius));
    }
}

window.onresize = function() {
    var rsy = $("#dot-container").innerHeight();
    canvas.width = document.body.clientWidth;
    canvas.height = rsy; 
}

function animate() {
    requestAnimationFrame(animate);
    var rsy = $("#dot-container").innerHeight();
    c.clearRect(0, 0, document.body.clientWidth, rsy);

    for (i = 0 ; i < dotArray.length ; i++) {
        dotArray[i].update();
        if (dotArray[i].ttl == 0) {
            dotArray.splice(i, 1);
        }
    }

    ticker++;

    if(document.body.clientWidth > 600) {
        if (ticker % 20 == 0) {
            var radius = Math.floor((Math.random() * 15) + 5);
            var x = Math.random() * document.body.clientWidth;
            var y = Math.random() * rsy;
            var dy = (Math.random() * -.5) -0.3;
            dotArray.push(new Dot(x, y, dy, radius));
        }
    } else {
        if (ticker % 40 == 0) {
            var radius = Math.floor((Math.random() * 15) + 5);
            var x = Math.random() * document.body.clientWidth;
            var y = Math.random() * rsy;
            var dy = (Math.random() * -.5) -0.3;
            dotArray.push(new Dot(x, y, dy, radius));
        }
    }

}

animate();