class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  back(){
    this.body.position.x = 200
    this.body.position.y = 50
    
    this.body.velocity.y= 0
    this.body.velocity.x = 0
}
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
