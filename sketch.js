
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var roof, bob;
var chain;
var constrainedbob;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(450,250,500,50);

	bob1=new Bob(200,400,100);
	bob2=new Bob(300,400,100);
	bob3=new Bob(400,400,100);
	bob4=new Bob(500,400,100);
	bob5=new Bob(600,400,100);

	chain1=new Chain(bob1.body,{x:200,y:300});
	chain2=new Chain(bob2.body ,{x:300,y:300});
	chain3=new Chain(bob3.body ,{x:400,y:300});
	chain4=new Chain(bob4.body ,{x:500,y:300});
	chain5=new Chain(bob5.body ,{x:600,y:300});


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  roof.display()
  bob1.display()
  bob3.display()
  bob2.display()
  bob4.display()
  bob5.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW)
	 {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-350,y:-85});
	   }
}



