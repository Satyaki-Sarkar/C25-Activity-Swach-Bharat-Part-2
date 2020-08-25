
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boxBottom,boxLeft,boxRight;
var ball;

function preload()
{
	img1=loadImage("dustbingreen.png");
	img2=loadImage("paper.png");
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground();

	boxBottom=new Rectangle(1100,560,200,20);
	boxLeft=new Rectangle(1100-85,460,20,210);
	boxRight=new Rectangle(1100+85,460,20,210);

	ball=new Ball(100,510,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Yellow");
  ground.display();
  //boxBottom.display();
  //boxLeft.display();
  //boxRight.display();
  ball.display();
  imageMode(CENTER);
  image(img1,1100,460,200,220);
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		var options={
			x:90,
			y:-85
        }
		Matter.Body.applyForce(ball.body,ball.body.position,options)
	}
}
