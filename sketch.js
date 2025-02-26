function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
   fill("purple")
  circle (200,200,300);
  
   fill("white")
  circle (150,150,60);
  
   fill ("white")
  circle (250,150,60);
  
  line (150,270,250,235);
  fill ("cyan")
  triangle (200,180,170,220,220,220);
  
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
