const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder1,thunder2,thunder3,thunder4
var drops = []
var ThunderFrame

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/4.png")
  }
  
function setup(){
  createCanvas(500,700)
  

   engine = Engine.create();
   world = engine.world;    
 
  //  thunder1 = createSprite(100,100,10,40)
  //  thunder2 = createSprite(200,100,10,40)
  //  thunder3 = createSprite(300,100,10,40)
  //  thunder4 = createSprite(400,100,10,40)

   umbrella = new Umbrella(200,500);

   for(var i = 0; i < 100; i++){
     drops.push(new Drop(random(0,400),random(0,400)));
   }
}

function draw(){
 background("black");

 Engine.update(engine);

rand = Math.round(random(1,4));
 if(frameCount % 80 === 0){

  ThunderFrame = frameCount;
  thunder = createSprite(random(10,370),random(10,30),10,10);
 
  switch(rand){
          
       case 1 : thunder.addImage(thunder1);
       break;
       case 2 : thunder.addImage(thunder2);
       break;
       case 3 : thunder.addImage(thunder3);
       break;
       case 4 : thunder.addImage(thunder4);
       default:break;
 }
   
thunder.scale =  random(0.3,0.6);
 }

if(ThunderFrame + 10 === frameCount && thunder){
  thunder.destroy();
  }

  umbrella.display();
 
  for(var i = 0; i < 100; i++){
    drops[i].showDrop();
    drops[i].updateY();
 }

drawSprites();
} 

