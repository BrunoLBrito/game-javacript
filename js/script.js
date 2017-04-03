var cnv = document.querySelector('canvas'),
WIDTH = cnv.width = 500,
HEIGHT = cnv.height = 500,
ctx = cnv.getContext('2d');

function Player(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = 5;
}

var player = new Player(50, 50, 50, 50, '#f00');

function move(){

}

function render(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update(){

}

function run(){
    update();
    render();
    requestAnimationFrame(run);
}

addEventListener('load', run);

