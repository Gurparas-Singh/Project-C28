class constraint{
    constructor(b1,b2){
        var options = {
            bodyA: b1,
            pointB: b2,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = b2;
        this.chain = Con.create(options);
        World.add(world,this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA){
        var p1 = this.chain.bodyA.position;
        var p2 = this.pointB;
        line(p1.x,p1.y,p2.x,p2.y);
        }
    }
}