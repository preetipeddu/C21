var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3;

function setup() {
  createCanvas(1600,400);
  fixedRect = createSprite(400, 200, 30, 50);
  movingRect = createSprite(200,200,50,30);


  gameObject1 = createSprite(600,200,30,50);
  gameObject2 = createSprite(800,200,30,50);
  gameObject3 = createSprite(1000,200,30,50);


  fixedRect.shapeColor = "purple";
  gameObject1.shapeColor = "purple";
  gameObject2.shapeColor = "purple";
  gameObject3.shapeColor = "purple";

  movingRect.shapeColor = "purple";

  gameObject3.velocityX = -5;
  fixedRect.velocityX = 5;

  //30/2 = 15
  //50/2 = 25
  //15+25 = 40
}

function draw() {
  background(255,255,255);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  //checking collision
  


  if(isTouching(movingRect,gameObject2)){

    //true
    gameObject2.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
    

  }else{
    //false

    gameObject2.shapeColor = "purple";
    movingRect.shapeColor = "purple";

  }


  bounceOff(fixedRect, gameObject3);


  //bounce off 

  drawSprites();
}


