class Ball {
    constructor(x, y,width){
        var options={
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body=Bodies.circle(x,y,width,options);
        this.image=loadImage("paper.png");
        this.width=width;

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width+40,this.width+40);
        pop();
    }
}