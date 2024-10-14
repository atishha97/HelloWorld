let customFont;
let currentColor;
let lastMinute = -1;

function preload() {
  customFont = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceSansPro-Bold.otf');
}

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  colorMode(HSB, 360, 120, 180, 270);
  textAlign(CENTER, CENTER);
  textFont(customFont);
  textSize(14);
  currentColor = generateNeonColor();
}

function draw() {
  background(18, 18, 18);
  
  let h = hour();
  let m = minute();
  let s = second();
  
  if (m != lastMinute) {
    currentColor = generateNeonColor();
    lastMinute = m;
  }
  
  let alpha = map(s, 0, 59, 255, 100);
  
  drawPetals(currentColor, alpha, h);
  drawCenter();
  displayTime(h, m, s);
}

function generateNeonColor() {
  let h = random(360);
  let s = 100;
  let b = 100;
  return color(h, s, b);
}

function drawPetals(petalColor, alpha, h) {
  push();
  translate(width / 2, height / 2);
  rotate(90);
  noStroke();
  
  let numPetals = 48;
  let maxPetalLength = 300;
  let minPetalLength = 100;
  let petalWidth = 30;
  
  // Calculate petal length based on the hour
  let petalLength;
  if (h < 12) {
    // AM: Grow from minPetalLength to maxPetalLength
    petalLength = map(h, 0, 11, minPetalLength, maxPetalLength);
  } else {
    // PM: Shrink from maxPetalLength to minPetalLength
    petalLength = map(h, 12, 23, maxPetalLength, minPetalLength);
  }
  
  for (let i = 0; i < numPetals; i++) {
    fill(hue(petalColor), saturation(petalColor), brightness(petalColor), alpha);
    rotate(360 / numPetals);
    ellipse(petalLength / 2, 0, petalLength, petalWidth);
  }
  
  pop();
}

function drawCenter() {
  noStroke();
  fill(0);
  ellipse(width / 2, height / 2, 100, 100);
}

function displayTime(h, m, s) {
  fill(255);
  let period = h < 12 ? "AM" : "PM";
  h = h % 12;
  h = h ? h : 12; // Convert 0 to 12 for midnight
  let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2) + ' ' + period;
  text(timeString, width / 2, height / 2);
}