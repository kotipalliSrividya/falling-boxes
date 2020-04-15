class Boxy{
    constructor(x,y,w,h){
        var opt={
            restitution:1
        }
        this.body=Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body);
        this.w=w;
        this.h=h;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill(0);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}