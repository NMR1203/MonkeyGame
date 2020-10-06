var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score, survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450, 375);

  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/ 2;
   
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  score = 0;
  survivalTime = 0;
}


function draw() {
   background(220);

  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 350,50); 
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime, 25, 50)
  
  if (keyDown("space") && monkey.y >= 300){
    monkey.velocityY = -15;
  }

  if(ground.x < 0){
    ground.x = ground.width/2;
  } 

//gravity
  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);
  
  bananas();
  obstacles();
  drawSprites();
  
}

function bananas(){
  if (frameCount % 80 === 0){
  var banana = createSprite(600,250,40,10);
  banana.addImage(bananaImage);
  banana.y = random(100,200);
  banana.velocityX = -5;
  banana.lifetime = 300;
  banana.scale = 0.08;
    
  bananaGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
  var obstacle = createSprite(600,250,40,10);
  obstacle.addImage(obstacleImage);
  obstacle.y = 325;
  obstacle.velocityX = -5;
  obstacle.lifetime = 300;
  obstacle.scale = 0.15;
    
  obstaclesGroup.add(obstacle);
  } 
}