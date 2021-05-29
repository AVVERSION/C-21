var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  movingRect1 = createSprite(400,400,80,30);
  movingRect1.shapeColor = "yellow";
  movingRect2 = createSprite(200,400,80,30);
  movingRect2.shapeColor = "yellow";
movingRect1.velocityX = -2;
movingRect2.velocityX =  2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

 }
 else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
 BounceOff(movingRect1,movingRect2); 
 drawSprites();
}

