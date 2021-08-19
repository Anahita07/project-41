class Drop{
    constructor(x,y){
        var options ={
           friction: 0.001,
           restitution:0.1   
        }
   
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.rain);
   }
    
    showDrop(){
 
        fill(71, 159, 214);
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
    }

    updateY(){

        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,200),y:random(0,100)})
        }

    }

}