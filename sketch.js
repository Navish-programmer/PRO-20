var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500)
  car=createSprite(50,200,10,5)
  wall=createSprite(350,200,10,60)
  
 // if (wall.x-car.x===(car.width+wall.width)/2){




 deformation=(weight*speed*speed)/2/22509;

//}
if(deformation> 180){

  car.shapeColor=color(255,0,0);
}
else if(deformation< 180 && deformation> 100){

  car.shapeColor="yellow"

}else if(deformation< 100){

  car.shapeColor="green"

}
}

function draw() {
  background(255,255,255);
car.velocityX=speed;
    
car.collide( wall);

  drawSprites();
}