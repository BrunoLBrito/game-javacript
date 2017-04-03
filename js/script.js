var cnv = document.querySelector('canvas'),
WIDTH = cnv.width,
HEIGHT = cnv.height,
ctx = cnv.getContext('2d');

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

