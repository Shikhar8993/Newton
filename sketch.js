const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar;
var ball,ball1,ball2,ball3,ball4;
var chain, chain1 ,chain2, chain3 , chain4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bar = new Bar(300,50,450,20);


   ball = new Ball(120,150,25);
   ball1 = new Ball(200,150,25);
   ball2 = new Ball(280,150,25);
   ball3 = new Ball(360,150,25);
   ball4 = new Ball(440,150,25);

   chain = new SlingShot(bar.body,ball1.body);
   chain1 = new SlingShot(bar.body,ball.body);
   chain2 = new SlingShot(bar.body,ball2.body);
   chain3 = new SlingShot(bar.body,ball3.body);
   chain4 = new SlingShot(bar.body,ball4.body);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  
 bar.display();

 ball.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();

 

  drawSprites();
 
}



