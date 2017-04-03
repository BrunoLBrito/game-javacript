var cnv = document.querySelector('canvas'),
WIDTH = cnv.width = 500,
HEIGHT = cnv.height = 500,
ctx = cnv.getContext('2d');
var keys = {};

function Player(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = 5;
}

var player = new Player(50, 50, 50, 50, '#f00');

addEventListener('keydown', function(e){
    keys[e.keyCode] = true;
});

addEventListener('keyup', function(e){
    delete keys[e.keyCode];
});

function move(){
    if(37 in keys && player.x > 0){
        player.x -= player.speed;
    }else if(39 in keys && player.x + player.width <= WIDTH){
        player.x += player.speed;
    }
    if(38 in keys && player.y > 0){
        player.y -= player.speed;
    }else if(40 in keys && player.y + player.height <= HEIGHT){
        player.y += player.speed;
    }
}

function render(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update(){
    move();
}

function run(){
    update();
    render();
    requestAnimationFrame(run);
}

addEventListener('load', run);

