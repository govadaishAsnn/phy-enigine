const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;

var ball;





function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  object=Bodies.rectangle(200,380,400,20,{isStatic:true});
  ball=Bodies.circle(200,100,30,{restitution:0.8});
  
  

  World.add(world,object);
  World.add(world,ball);

  


  
}

function draw() {
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);  
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  



  

 
}














