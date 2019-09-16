// p5.Typewriter
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
  tw1.twTyp(20, 150, "I don't necessarily agree  ");
  if (tw1.twCompleted()) {
    tw2.twSpeed(120); // potional
    tw2.twTyp(20, 200, 'with everything that I say.');
  }

  // Blind text for creating a rhetorical pause
  if (tw2.twCompleted()) {
    tw3.twSpeed(400); // potional
    tw3.twTyp(20, 250, '     ');
  }

  textStyle(NORMAL);
  textSize(25);
  if (tw3.twCompleted()) {
    tw4.twSpeed(50); // potional
    tw4.twTyp(20, 250, 'Marshall McLuhan');
  }

}

function mousePressed() {
  tw1.twRestart(); // This also restarts line two
}