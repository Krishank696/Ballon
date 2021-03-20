var ballon;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  createCanvas(500, 500);
  background("blue");  
  drawSprites();

if(keyDown(37)){
 ballon.x = x-1;
}
if(keyDown(39)){
  ballon.x = x+1;
 }
 if(keyDown(38)){
  ballon.y = y-1;
 }
 if(keyDown(40)){
  ballon.y = x+1;
 }




}