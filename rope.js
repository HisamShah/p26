class Chain{
    constructor(body1,pointB)
    {

        var options={
            bodyA: body1,
            pointB: pointB,
            stiffness:0.04,
            length:300
  
        } 
        this.chain = Constraint.create(options)
        this.pointB=pointB;
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}