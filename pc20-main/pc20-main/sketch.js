
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2;
var wedge1;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

function preload() { }
 function setup() 
 {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world; 

	block1_options={ isStatic:true } 
	block1 = Bodies.rectangle(100,350,150,20,block1_options);
    World.add(world,block1); 

    block2_options={ isStatic:true }
	block2 = Bodies.rectangle(700,350,150,20,block2_options);
	World.add(world,block2);

	wedge1_options={ isStatic:true};

	wedge1 = Bodies.rectangle(400,100,150,20,wedge1_options);
	World.add(world,wedge1);
	Engine.run(engine);
} 
		 
		 
		 
function draw() 
{
	rectMode(CENTER); 
	background("lightGreen")
  
	rect(block1.position.x,block1.position.y,150,20);
	rect(block2.position.x,block2.position.y,150,20);
	//rect(wedge1.position.x,wedge1.position.y,150,20);
	
	Matter.Body.rotate(wedge1,angle1);

	push();
	translate(wedge1.position.x,wedge1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 = angle1+2;
	

	//drawSprites();
}
			 



