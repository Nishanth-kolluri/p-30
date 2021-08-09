class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.06,
            length:20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    
    display(){
     
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
        strokeWeight(4);
        stroke(64,224,208);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
     
    }
    attach(){
        this.sling.bodyA = bodyA;
    }
}