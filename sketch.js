var rect1,rect2;



function setup() {

  createCanvas(1200,600);
  rect1=createSprite(400, 200, 50, 80);
  rect2=createSprite(200, 200, 80, 50);

  rect1.shapeColor="orange";
  rect2.shapeColor="blue";
}

function draw() {
  background(0); 
  
  rect2.x=mouseX;
  rect2.y=mouseY;

   if (rect2.x-rect1.x<rect2.width/2+rect1.width/2 &&
    rect1.x-rect2.x<rect2.width/2+rect1.width/2 && 
    rect2.y-rect1.y<rect2.height/2+rect1.height/2 &&
    rect1.y-rect2.y<rect2.height/2+rect1.height/2){
      rect1.shapeColor="yellow";
  rect2.shapeColor="green";

   }
   else{
    rect1.shapeColor="orange";
    rect2.shapeColor="blue";
   }

  drawSprites();
}