class Bob {
    constructor() {
      var options = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(100,200,35, options);
      this.shapeColor = "pink";
      
      this.radius = 35;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
     rectMode(CENTER);
     rect(pos.x,pos.y,this.radius); 
     
      pop();
    }
  }
  