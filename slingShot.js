class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 4,
            length: 10
           
        }
        
       
        this.sling =Constraint.create(options);
        World.add(world, this.sling);

    }

    display(){
        var bodyA=this.sling.bodyA.position;
        var bodyB=this.sling.bodyB.position;

     strokeWeight(4);
     stroke("yellow");
     fill("yellow")
     line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
    // line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);

     
     push();
    
   
            
     pop();
           
        
    }
    
}