const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Con = Matter.Constraint;

var boy,boyImg;
function preload()
{
	boyImg = loadImage('boy.png');
}

function setup() {
	createCanvas(1000, 500);

	boy = createSprite(200,400,50,200);
	boy.addAnimation("boy",boyImg);
	boy.scale = 0.15;

	engine = Engine.create();
	world = engine.world;

	g = new ground(500,490,1000,20);
	t = new tree(800,255,300,500);

	m1 = new mango(800,60);
	m2 = new mango(866,90);
	m3 = new mango(870,149);
	m4 = new mango(900,169);
	m5 = new mango(795,199);
	m6 = new mango(770,110);
	m7 = new mango(710,204);

	s = new stone();

	slingShot = new constraint(s.body,{x:100, y:300});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  g.display();
  t.display();

  s.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();

  slingShot.display();

  if(keyDown("space")){
	Matter.body.setPosition(s.body,{x:100 , y:300});
  }

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(s.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
}

function detectCollision(i1,i2){
	var distance = dist(i1.body.position.x,i1.body.positon.y,i2.body.position.x,i2.body.position.y);
	if(distance<=(i1.width/2)+(i2.width/2)){
		Matter.body.setStatic(i2.body,false);
	}
}