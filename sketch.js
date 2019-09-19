// p5.Typewriter
// by Olaf Val

function setup() {
  createCanvas(400, 400);

  tw1 = new Typewriter();
  tw2 = new Typewriter();
}

function draw() {
  background(245);

  noStroke();

  tw1.twSpeed(100); // potional
  tw1.twType('This is my example text.', 10, 10);
  if (tw1.twCompleted()) {
    tw2.twSpeed(20); // potional
    tw2.twType('And here comes the second line.', 10, 30);
  }
}

function mousePressed() {
  tw1.twRestart();
  tw2.twRestart();
}
