var aircraft,Star,meteoroid,alienspaceship,alienspaceship2,space;
var aircraftImg,starImg,meteoroidImg,alienspaceshipImg,alienspaceship2Img,spaceImg;
var stars = 0;
var starG,meteoroidG,alienspaceshipG,alienspaceship2G;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  aircraftImg = loadImage("S.png");
  starImg = loadImage("ST.png");
  meteoroidImg = loadImage("M.png");
  alienspaceshipImg = loadImage("A 1.webp");
  alienspaceship2Img = loadImage("ab.png");
  spaceImg = loadImage("space.jpg")
  endImg = loadAnimation("GO.png");
}

function setup(){
  
  createCanvas(650,650);
// Moving background
space=createSprite(325,325);
space.addImage(spaceImg);
space.velocityY = 4;


//creating aircraft moving
aircraft = createSprite(70,580,20,20);
aircraft.addAnimation("aircraft",aircraftImg);
aircraft.scale=0.15;

meteoroidG = new Group();
starG = new Group();
alienspaceshipG = new Group();
alienspaceship2G = new Group();

}

function draw() {
 
  if(gameState===PLAY){
    background(0);
  

  aircraft.x = World.mouseX;
  aircraft.y = World.mouseY;
  
  edges= createEdgeSprites();
  aircraft.collide(edges);
  
  //code to reset the background
  if(space.y > 400 ){
     space.y = height/2;
  }
  createMeteoroid();
  createStar();
  createAlienspaceship();
  createAlienspaceship2();

    if (starG.isTouching(aircraft)) {
      starG.destroyEach();
      stars=stars+50;}
      

    if(alienspaceshipG.isTouching(aircraft)) {
      gameState===END;
       aircraft.addAnimation("aircraft",endImg);    
       aircraft.x=width/2;
       aircraft.y=height/2;
       aircraft.scale=0.2;
       space.velocityY=0;
         
     
     
      starG.destroyEach();
      meteoroidG.destroyEach();
      alienspaceshipG.destroyEach();
      alienspaceship2G.destroyEach();
  
      starG.setVelocityYEach(0);
      meteoroidG.setVelocityYEach(0);
      alienspaceshipG.setVelocityYEach(0);
      alienspaceship2G.setVelocityYEach(0);}

    if(alienspaceship2G.isTouching(aircraft)) {
        gameState===END;
        aircraft.addAnimation("aircraft",endImg);    
        aircraft.x=width/2;
        aircraft.y=height/2;
        aircraft.scale=0.2;
        space.velocityY=0;

        
       
        starG.destroyEach();
        meteoroidG.destroyEach();
        alienspaceshipG.destroyEach();
        alienspaceship2G.destroyEach();
    
        starG.setVelocityYEach(0);
        meteoroidG.setVelocityYEach(0);
        alienspaceshipG.setVelocityYEach(0);
        alienspaceship2G.setVelocityYEach(0);}

    if(meteoroidG.isTouching(aircraft)) {
          gameState===END;
          aircraft.addAnimation("aircraft",endImg);    
          aircraft.x=width/2;
          aircraft.y=height/2;
          aircraft.scale=0.2;    
          space.velocityY=0;
         
         
          starG.destroyEach();
          meteoroidG.destroyEach();
          alienspaceshipG.destroyEach();
          alienspaceship2G.destroyEach();
      
          starG.setVelocityYEach(0);
          meteoroidG.setVelocityYEach(0);
          alienspaceshipG.setVelocityYEach(0);
          alienspaceship2G.setVelocityYEach(0);
        }
         drawSprites();
         textSize(20);
         fill(255);
         text("Score="+ stars,10,30);
  }

}

function createMeteoroid() {
  if (World.frameCount % 200 === 0) {
  var meteoroid = createSprite(Math.round(random(50, 500),40, 10, 10));
  meteoroid.addImage(meteoroidImg);
  meteoroid.scale=0.12;
  meteoroid.velocityY = 3;
  meteoroid.lifetime = 215;
  meteoroidG.add(meteoroid);
  }
}

function createStar() {
  if (World.frameCount % 320 === 0) {
  var Star = createSprite(Math.round(random(50, 500),40, 10, 10));
  Star.addImage(starImg);
  Star.scale=0.14;
  Star.velocityY = 3;
  Star.lifetime = 210;
  starG.add(Star);
}
}

function createAlienspaceship() {
  if (World.frameCount % 410 === 0) {
  var alienspaceship = createSprite(Math.round(random(50, 500),40, 10, 10));
  alienspaceship.addImage(alienspaceshipImg);
  alienspaceship.scale=0.13;
  alienspaceship.velocityY = 3;
  alienspaceship.lifetime = 210;
  alienspaceshipG.add(alienspaceship);
  }
}

function createAlienspaceship2(){
  if (World.frameCount % 530 === 0) {
  var alienspaceship2 = createSprite(Math.round(random(50, 500),40, 10, 10));
  alienspaceship2.addImage(alienspaceship2Img);
  alienspaceship2.scale=0.2;
  alienspaceship2.velocityY = 3;
  alienspaceship2.lifetime = 300;
  alienspaceship2G.add(alienspaceship2);
  }
}