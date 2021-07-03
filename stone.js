class stone{
    constructor(){
            this.body = Bodies.rectangle(100,300,60,60,{isStatic:false ,restitution:0,friction:1,density:1.2});
            this.image = loadImage('stone.png');
            World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,100,300,60,60);    
    }
}