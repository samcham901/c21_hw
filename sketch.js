
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj
var leftSide
//var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
		
}
ball = Matter.Bodies.circle(50, 200, 20, ball_options);
	World.add(world, ball);
	groundObj = new Ground(width / 2, 670, width, 20);
  leftSide = new Ground(600, 600, 20, 120);
  rightSide = new Ground(780, 600, 20, 120);
	Engine.run(engine);
  
}


function draw() {
	
	ellipseMode(RADIUS);
	rectMode(CENTER);
  background(0);
	groundObj.display()
	leftSide.display()
	rightSide.display()
ellipse(ball.position.x, ball.position.y, 20,20) 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:60, y:-80})
	}
}
