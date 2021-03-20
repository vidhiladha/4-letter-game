var form;
var button;

function setup() {
  createCanvas(1000,600);
  database = firebase.database();
  //createSprite(400, 200, 50, 50);
  //this.input = new (300,50);
}

function draw() {
  
  background("yellow"); 
  fill("black");
  textSize(35);
  //stroke("red");
  text("4 LETTER GAME",400,50) 

  //this.input.display();




  drawSprites();
}