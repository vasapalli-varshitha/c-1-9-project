var car1,car2,car3,car4,road;
vargCar1,pCar1,yCar1;
var greenCar_1,pinkCar_1,yellowCar_1;
var carCG2,carCG3,carCG4;
var car1Img,car2Img,car3Img,car4Img,roadImg,gameOverImg;
var gameState = PLAY;
var gameOver, restart;
var END =0;
var PLAY =1;
var distance=0;

function preload(){
roadImg = loadImage("path.png");
car1Img = loadImage("blueCar.png");
car2Img = loadImage("greenCar.png");
car3Img = loadImage("pinkCar.png");
car4Img = loadImage("yellowCar.png");
gameOverImg = loadImage("gameOver.png");
}

function setup() {
createCanvas(400,400);
road = createSprite(200,150);
road.addImage(roadImg);
road.velocityY = -5;
road.scale

car1 = createSprite(70,150);
car1.scale=0.07;

 gameOver = createSprite(350,150);
 gameOver.addImage(gameOverImg);
 gameOver.scale = 0.8;
 gameOver.visible = false; 

carCG2 = new Group();
carCG3 = new Group();
carCG4 = new Group();

}

function draw() {
   background(100);
   drawSprites();
   textSize(20);
    fill(255);
    text("Distance: "+ distance,900,30);
  if(gameState===PLAY){
     car1.addImage(car1Img);
     distance = distance + Math.round(getFrameRate()/50);
     road.velocityY = -(6 + 2*distance/150);
     car1.x= World.mouseX;
     edges = createEdgeSprites();
     car1.collide(edges);
      
    if(road.y > 400 ){
       road.y = height/2;
     }
      
     var select_oppCar = Math.round(random(1,3));
      
    if (World.frameCount % 150 === 0) {
       if (select_oppCar === 1) {
         greenCar_1();
        }
    else if (select_oppCar === 2) {
      pinkCar_1();
    }

    else {
      yellowCar_1();
     }
     }
    
    if(carCG2.isTouching(car1)){
       gameState = END;
       gCar1.velocityY = 0;
     }
        
    if(carCG3.isTouching(car1)){
       gameState = END;
       pCar1.velocityY = 0;
     }
        
    if(carCG4.isTouching(car1)){
       gameState = END;
       yCar1.velocityY = 0;
     }
        
   }

  else if (gameState === END) {
    gameOver.visible = true;
    text("press UP ARROW to reset the game" ,200,250);
     if (keyDown("down_arrow")){
        reset();
      }
           
    road.velocityX = 0;
    car1.velocityY = 0;
          
    carCG2.setVelocityXEach(0);
    carCG2.setLifetimeEach(-1);
        
    carCG3.setVelocityXEach(0);
    carCG3.setLifetimeEach(-1);
        
    carCG4.setVelocityXEach(0);
    carCG4.setLifetimeEach(-1);

    
  }
      
    
    
    
}
    



function greenCar_1(){
   gCar1=createSprite(1100,Math.round(random(50, 250)));
   gCar1.scale =0.06;
   gCar1.velocityX = -(6 + 2*distance/150);
   gCar1.addImage(car2Img);
   gCar1.lifetime=170;
   carCG2.add(gCar1);
}

function pinkCar_1(){
   pCar1 =createSprite(1100,Math.round(random(50, 250)));
   pCar1.scale =0.06;
   pCar1.velocityX = -(6 + 2*distance/150);
   pCar1.addImage(car3Img);
   pCar1.lifetime=170;
   carCG3.add(pCar1);
}

function yellowCar_1(){
   yCar1 =createSprite(1100,Math.round(random(50, 250)));
   yCar1.scale =0.06;
   yCar1.velocityX = -(6 + 2*distance/150);
   yCar1.addImage(car4Img);
   yCar1.lifetime=170;
   carCG4.add(yCar1);
}

function reset(){
   gameState=PLAY;
   gameOver.visible=false;
   carCG2.destroyEach();
   carCG3.destroyEach();
   carCG4.destroyEach();
}

