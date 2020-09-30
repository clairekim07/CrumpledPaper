
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,paperObject, groundObject

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	background("skyblue");
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundObject=new Ground(width/2,620,width,20);
	bin1=new Bin(1200,510,20,200);
	//bin2=new Bin(1000,510,20,200);
	//bin3=new Bin(1100,600,200,20);
	paperObject = new Ball(100,500,10);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  bin1.display();
  //bin2.display();
  //bin3.display();
  groundObject.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:8,y:-4.3});
  
	}
}




