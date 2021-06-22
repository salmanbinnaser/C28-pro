class Slinshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.Slinshot = Constraint.create(options);
        World.add(world, this.Slinshot);
    }

    fly(){
        this.Slinshot.bodyA=null;
    }

    Launch(bodyA){
        this.Slinshot.bodyA=bodyA;
    }

    display(){
       
    }
    
}