const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball
var ground;
var left;
var right;
var top_wall;
var bt1,bt2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 var option= {
   restitution : 0.08
  
 }
  ball = Bodies.circle(200,200,10,option);
  World.add(world,ball)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  bt1= createImg("right.png")
  bt1.position(20,50)
  bt1.size(50,80)
  //blinding a function to event at call back function
  bt1.mouseClicked(hforce)
  bt2 = createImg("up.png")
  bt2.position(250,150)
  bt2.size(40,50)
  bt2.mouseClicked(vforce)
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,10)
  Engine.update(engine);
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0})
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005})
}







