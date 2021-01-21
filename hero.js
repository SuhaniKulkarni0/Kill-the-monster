class Hero{
    constructor(x,y,radius){
    
    var options = {
        'density':1,
        'frictionAir':1
    }

    this.x = x
    this.y = y
    this.radius = radius


    this.body = Bodies.rectangle(this.x,this.y,(this.radius)/2,options)
    this.image = loadImage("images/Superhero-01.png")

    World.add(world, this.body)

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        scale(0.25)
        image(this.image, this.x, this.y,this.radius)
        pop();
      
    }
}