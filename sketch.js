var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  
  //create the rectangles
  fixedrect=createSprite(200, 200, 50, 80);
  movingrect=createSprite(400, 200, 80, 30);

  //give them colour
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
}

function draw() {
  background(0);  

  //let the person control the rectangle with mouse
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  
  //give the isTouching condition
  if (isTouching (movingrect ,fixedrect)) {
    movingrect.shapeColor="green";
    fixedrect.shapeColor="yellow"; 
  }
  else {
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }

  drawSprites();
}