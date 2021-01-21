class Monster{
    constructor(x,y,radius){
    
    var options = {
        density:1,
        frictionAir:1,
        isStatic: false,
        restitution: 1
    }

    this.x = x
    this.y = y
    this.radius = 1500
    
    this.image = loadImage("images/Monster-01.png")

    this.body = Bodies.circle(this.x,this.y,(this.radius)/2,options)

    World.add(world, this.body)

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        scale(0.15)
        image(this.image, this.x, this.y,this.radius)
        pop();
      
    }
}