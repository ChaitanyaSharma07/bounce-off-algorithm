var fixedRect, movingRect, rect_1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(410, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect_1 = createSprite(400, 700, 50, 50);
  rect_1.shapeColor = "blue";
  rect_1.velocityY = -5;

  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (bounceOff(fixedRect, rect_1)) {
    fixedRect.velocityY = fixedRect.velocityY * -1;
    rect_1.velocityY = rect_1.velocityY * -1;

  }
  
 
  drawSprites();
}



