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
  block1 = new Block(1000,550,100,100)
  block2 = new Block(1000,450,100,100)
  block3 = new Block(1000,350,100,100)
  block4 = new Block(1000,250,100,100)

  block5 = new Block(1200,550,100,100)
  block6 = new Block(1200,450,100,100)
  block7 = new Block(1200,350,100,100)
  block8 = new Block(1200,250,100,100)

  block9 = new Block(1400,550,100,100)
  block10 = new Block(1400,450,100,100)
  block11 = new Block(1400,350,100,100)
  block12 = new Block(1400,250,100,100)

  constraint = new Fly(hero.body, {x:500, y:50})

}

function draw() {
  background(backgroundImg);

  ground.display()
  hero.display()
  constraint.display()
  monster.display()
 
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
 
}


function mouseDragged(){

  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}

