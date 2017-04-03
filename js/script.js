var cnv = document.querySelector('canvas'),
WIDTH = cnv.width,
HEIGHT = cnv.height,
ctx = cnv.getContext('2d');

function Player(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

function move(){

}

function render(){

}

function update(){

}

function run(){
    update();
    render();
    requestAnimationFrame(run);
}

addEventListener('load', run);

