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
  tw1.twTyp(10, 10, 'This is my example text.');
  if (tw1.twCompleted()) {
    tw2.twSpeed(20); // potional
    tw2.twTyp(10, 30, 'And here comes the second line.');
  }
}

function mousePressed() {
  tw1.twRestart(); // This also restarts line two
}