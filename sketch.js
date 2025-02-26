function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
   fill("purple");
  circle (200,200,300);
  
   fill("white");
  circle (150,150,60);
  
   fill ("white");
  circle (250,150,60);
  
  line (150,270,250,235);
  fill ("cyan");
  triangle (200,180,170,220,220,220);
  line(123,115,178,113); //sombrancelha esquerda
  line(225,116,279,106); //sombrancelha direita
 // circle(150,150,10); // pupila olho esquerdo
  // circle(250,150,10); // pupila olho direito
  
  olhoX = map(mouseX,0 ,400,130,170);
  olhoY = map(mouseY,0 ,400,130,170);
  
  circle(olhoX,olhoY,10); //nova pupila esquerda
   circle(olhoX+100,olhoY,10); //nova pupila esquerda

  
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
