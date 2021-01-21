const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const World = Matter.World

var backgroungImg
var hero, ground, constraint, monster, block1 
function preload() {
//preload the images here
  backgroundImg = loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create()
  world = engine.world
  // create sprites here

  ground = new Ground(1000,600,2000,20)
  hero = new Hero(250,300)
  monster = new Monster(1500,400)
  block1 = new Block(1000,500,100,100)
  constraint = new Fly(hero.body, {x:500, y:50})

}

function draw() {
  background(backgroundImg);

  ground.display()
  hero.display()
  constraint.display()
  monster.display()
 
  block1.display()
 
}


function mouseDragged(){

  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}

