let cor;
let posicaohorizontal;
let posicaovertical;

function setup() {
  createCanvas(2000, 1000);
  background("white")
  cor=color(random(0,255), random(0,255), random(0,255));
  posicaohorizontal=200;
  posicaovertical=200
}

function draw() {
  circle(posicaohorizontal,posicaovertical,50);
  fill(cor);
  if(mouseIsPressed){ 
  if(mouseX > posicaohorizontal){
    posicaohorizontal=posicaohorizontal+7;
  }
   if(mouseX < posicaohorizontal){
    posicaohorizontal=posicaohorizontal-7;
  }
  if(mouseY > posicaovertical){
    posicaovertical=posicaovertical+7;
  }
   if(mouseY < posicaovertical){
    posicaovertical=posicaovertical-7;
  }
     cor=color(random(101,111), random(7,254), random(25,192));
  }
}
