var wall, thickness;
var bullet, speed, weight;

function setup(){
  createCanvas(1200, 400);
  
  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(10, 200, 10, 30);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  thickness = random(22, 83);
  wall = createSprite(1100, 200, thickness, height/2);
  wall.sahpeColor = "grey";
}

function draw(){
  background(0);
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage > 10){
      wall.shapeColor = "red";
    }
    if(damage < 10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}