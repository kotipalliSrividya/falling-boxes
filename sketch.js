const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxA=[];
var ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
  ground=Bodies.rectangle(200,380,800,20,{isStatic:true});
  World.add(world,ground);
}
function mousePressed(){
  boxA.push(new Boxy(mouseX,mouseY,20,20));
}
function draw() {
  background(255,255,255);  
  //Engine.update(engine);
  for(var i=0;i<boxA.length;i++){
  boxA[i].display();
  }
  rect(ground.position.x,ground.position.y,40,20);
}