const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ball,ground;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world, ball);
  console.log(ball);

  var ground_options = {
    isStatic : true
  }
  
  ground = Bodies.rectangle(400,400,800,50,ground_options);
  World.add(world,ground);
  
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(50,50,50,50);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,200,100);
  rect(ground.position.x,ground.position.y,800,50);
  drawSprites();
}