class Rectangle {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0,
        'frictionStatic': 2,
        'isStatic': true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
    display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("Blue");
    stroke("Red");
    strokeWeight(5);
    rect(0,0, this.width, this.height);
    pop();
  }
};
