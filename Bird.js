class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {

    super.display();

    var posX = this.body.position.x;
    var posY = this.body.position.y;

    if(this.body.velocity.x > 10 && posX > 200){
      var position = [posX,posY];
      this.trajectory.push(position);
    }

    for(var i = 0; i < this.trajectory.length; i++){
      image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1]);
    }
    
  }
} 
