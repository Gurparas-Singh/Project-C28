class mango{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,40,40,{isStatic:true,restitution:0,friction:1});
        this.image = loadImage('mango.png');
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
    }
}