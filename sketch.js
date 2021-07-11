var sea;
var ship;
function preload(){
seaImg= loadImage("sea.png");
shipImg1= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
 sea=createSprite(200,180,400,400);
  sea.addImage(seaImg);
 
 ship= createSprite(200,180,200,200);
 ship.addAnimation(shipImg1);
 
}

function draw() {
  sea.velocityX=-4;
  if(sea.x<0){
    sea.x=sea.width/2;
  }

}