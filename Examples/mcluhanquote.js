// Typewriter for p5js
// by Olaf Val

function setup() {
  createCanvas(400, 400);

  tw1 = new Typewriter();
  tw2 = new Typewriter();
  tw3 = new Typewriter();
  tw4 = new Typewriter();

  textFont('Times New Roman');
  fill(80,55,25);
}

function draw() {
  background(245);

  noStroke();
  textSize(35);
  textStyle(ITALIC);
  tw1.twSpeed(80); // potional
  tw1.twType("I don't necessarily agree  ", 20, 150);
  if (tw1.twCompleted()) {
    tw2.twSpeed(120); // potional
    tw2.twType('with everything that I say.', 20, 200);
  }

  // Blind text for creating a rhetorical pause
  if (tw2.twCompleted()) {
    tw3.twSpeed(400); // potional
    tw3.twType('     ', 20, 250);
  }

  textStyle(NORMAL);
  textSize(25);
  if (tw3.twCompleted()) {
    tw4.twSpeed(50); // potional
    tw4.twType('Marshall McLuhan', 20, 250);
  }

}

function mousePressed() {
  tw1.twRestart();
  tw2.twRestart();
  tw3.twRestart();
  tw4.twRestart();
}
