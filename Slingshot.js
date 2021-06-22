class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    fly(){
        this.Slingshot.bodyA=null;
    }

    Launch(bodyA){
        this.Slingshot.bodyA=bodyA;
    }

    display(){
       
    }
    
}
