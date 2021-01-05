class Chain{
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:50,
            stiffness:1
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain)

    }
    display(){
        stroke("gold")
        strokeWeight(4)
        var pointA=this.chain.bodyA.position 
        var pointB=this.chain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    
}