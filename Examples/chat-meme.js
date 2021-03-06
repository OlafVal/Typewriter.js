// Typewriter for p5js
// by Olaf Val

function setup() {
  createCanvas(400, 400);

  tw1 = new Typewriter();
  tw2 = new Typewriter();
  tw3 = new Typewriter();
  tw4 = new Typewriter();

  textFont('Arial');
  fill(80,55,25);

}

function draw() {
  background(245);

  noStroke();
  textSize(32);
  textStyle(ITALIC);
  
  textAlign(RIGHT);
  text('hey', 380,120);
  
  // Blind text for creating a pause
  tw1.twSpeed(500); // potional
  tw1.twType('        ',0 , 0);
  if (tw1.twCompleted()) {
    tw2.twSpeed(80); // potional
    tw2.twType('hey sorry i was busy', 20, 200);
  }

  // Blind text for creating a pause
  if (tw2.twCompleted()) {
    tw3.twSpeed(500);
    tw3.twType('       ', 0, 0);
  }

  if (tw3.twCompleted()) {
    tw4.twSpeed(150);
    tw4.twAlign('RIGHT');
    tw4.twType('i sent that 2 years ago', 380, 300);
  }

}

function mousePressed() {
  tw1.twRestart();
  tw2.twRestart();
  tw3.twRestart();
  tw4.twRestart();
}
