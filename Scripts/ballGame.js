var canvas = document.getElementById("canvas");
var ctx = canvas.getContext( "2d" );

var FPS = 30;

var particle = {
    x: 50,
    y: 50,
    vx: 0,
    vy: 0,
    radius: 20,
    color: "red",
    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
    },
    update: function() {
        this.x += this.vx / FPS;
        this.y += this.vy / FPS;
        // Collision detection
        if ( ( this.x - this.radius ) < 0 ) {
            this.x = this.radius;
        }
        if ( ( this.x + this.radius ) > canvas.width ) {
            this.x = canvas.width - this.radius;
        }
        if ( ( this.y - this.radius ) < 0 ) {
            this.y = this.radius;
        }
        if ( ( this.y + this.radius ) > canvas.height ) {
            this.y = canvas.height - this.radius;
        }
    }
};

function draw() {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    particle.draw();
}

function update() {
    particle.update();
}

function tick() {
    draw();
    update();
}

setInterval( tick, 1000 / FPS );
window.onkeydown = function( e ) {
    e = e || window.event;
    var code = e.keyCode;
    if ( code === 37 ) {
    // Left key
    particle.vx = -200;
} else if ( code === 38 ) {
    // Up key
    particle.vy = -200;
} else if ( code === 39 ) {
    // Right key
    particle.vx = 200;
} else if ( code === 40 ) {
    // Down key
    particle.vy = 200;
}
};/*
window.onkeyup = function( e ) {
    e = e || window.event;
    var code = e.keyCode;
    if ( code === 37 ) {
    // Left key
    particle.vx = 0;
} else if ( code === 38 ) {
    // Up key
    particle.vy = 0;
} else if ( code === 39 ) {
    // Right key
    particle.vx = 0;
} else if ( code === 40 ) {
    // Down key
    particle.vy = 0;
}
};
*/
