// Typewriter for p5js
// by Olaf Val

function setup() {
  createCanvas(400, 400);

  tw1 = new Typewriter();
}

function draw() {
  background(215);

  noStroke();

  tw1.twBox(50, 50, 300, 300);
  
  tw1.twAlign('CENTER');
  
  tw1.twSpeed(10); // potional
  tw1.twType('Typewriter.js<br>This is my slightly longer sample text to demonstrate the automatic line break. This arises as soon as the twBox command is used. It also overrides the positioning of the text. <br><br> Have fun!', 10, 10);

}

function mousePressed() {
  tw1.twRestart();
}
