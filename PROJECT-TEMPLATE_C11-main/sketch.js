     var seaImagem, seaSprite;    
     var shipSprite, shipAnimacao;                                                                     
function preload(){
  seaImagem = loadImage("sea.png");
  shipAnimacao = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  seaSprite = createSprite(200, 200, 600, 20);
  seaSprite.addImage(seaImagem);
  seaSprite.scale=0.3;
  shipSprite = createSprite(100, 170, 50, 50)
  shipSprite.addAnimation("correndo", shipAnimacao);
  shipSprite.scale=0.3;
}

function draw() {
  background("blue");
    drawSprites();

 
}
