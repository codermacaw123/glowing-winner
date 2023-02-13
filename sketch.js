const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var bottomGround,topGround,leftGround,rightGround;
var ball;
var btn_up,btn_right

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  
  btn_up=createImg("up.png");
  btn_up.position(20,30);
  btn_up.size(50,50);
  btn_up.mouseClicked(vForce)

  btn_right=createImg("right.png");
  btn_right.position(200,30);
  btn_right.size(50,50);
  btn_right.mouseClicked(hForce)

  bottomGround= new Ground(200,390,400,20);
  topGround= new Ground(200,10,400,20);
  leftGround= new Ground(10,200,20,400)
  rightGround= new Ground(390,200,20,400);

  var ballOptions={
    restitution:0.6
  }
  ball=Bodies.circle(200,50,20,ballOptions);
  World.add(world,ball)


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20)
  
  bottomGround.display();
  topGround.display();
  leftGround.display();
  rightGround.display();
  
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.09})
}

