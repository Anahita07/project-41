class Umbrella{
    constructor(x,y){
        var options ={
          isStatic: true  
        }
   
        this.umbrella = Bodies.circle(x,y,50,options);
        this.image = loadImage("images/Walking Frame/walking_1.png")
        this.radius = 50;
        World.add(world,this.umbrella);
   }
    
  display(){
   
    var pos = this.umbrella.position
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,300,300)

  }

}