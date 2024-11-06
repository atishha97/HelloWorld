let hearts = [];
let isFeeding = false;
let feedingTime = 0;
const feedingDuration = 2000; // Duration in milliseconds
let label = 'waiting..';
let classifier;
let lastDetectedLabel = '';
let lastDetectionTime = 0;
const detectionCooldown = 1000; // Cooldown period in milliseconds
const labelBackgroundHeight = 40; // Height of the label background

function preload() {
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/c-XR35fgs/model.json');
}

function setup() {
  createCanvas(500, 500);
  // Create the video but don't display it
  video = createCapture(VIDEO);
  video.hide();
  // Start classifying
  classifyVideo();
}

function draw() {
  background(255, 234, 217);
  drawCat();
  updateAndDrawHearts();

  if (isFeeding && millis() - feedingTime > feedingDuration) {
    isFeeding = false;
  }

  // Draw label background
  noStroke();
  fill(255, 157, 77, 200); // Semi-transparent orange background
  rect(0, height - labelBackgroundHeight, width, labelBackgroundHeight);

  // Display current detection
  noStroke();
  textSize(16);
  textAlign(CENTER, CENTER);
  fill(255); // White text
  text(label, width/2, height - labelBackgroundHeight/2);

  // Check for new detections with cooldown
  if (millis() - lastDetectionTime > detectionCooldown) {
    if (label !== lastDetectedLabel) {
      if (label === 'Fish') {
        feedCat();
        lastDetectionTime = millis();
      } else if (label === 'Heart') {
        petCat();
        lastDetectionTime = millis();
      }
      lastDetectedLabel = label;
    }
  }
}

// Function to draw a cat
function drawCat() {
  strokeCap(ROUND);
  stroke(255, 157, 77);
  strokeWeight(6);
  line(200, 150, 150, 50); // Left ear
  line(100, 150, 150, 50); // Left ear
  line(200, 150, 300, 150);
  line(300, 150, 350, 50); // Right ear
  line(350, 50, 400, 150); // Right ear
  
  strokeWeight(40);
  stroke(255, 137, 41);
  point(200, 200); // Left eye
  point(300, 200); // Right eye
  
  stroke('rgb(255,255,255)');
  strokeWeight(10);
  point(200, 200); // Left eye
  point(300, 200); // Right eye
  
  strokeWeight(40);
  stroke(224, 119, 34);
  point(250, 230); // Nose
  
  strokeWeight(6); // Mouth
  fill(255, 234, 217);
  arc(200, 250, 100, 90, 0, PI);
  arc(300, 250, 100, 90, 0, PI);

  // Draw tongue if feeding
  if (isFeeding) {
    noStroke();
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0);
    text('⭐', 200, 200); // Left eye star
    text('⭐', 300, 200); // Right eye star
    
    fill(255, 150, 150); // Tongue
    stroke(255, 150, 150);
    ellipse(250, 280, 40, 30);

    strokeWeight(6); // Mouth
    fill(255, 234, 217);
    stroke(224, 119, 34);
    arc(200, 250, 100, 90, 0, PI);
    arc(300, 250, 100, 90, 0, PI);
  }

  strokeWeight(5);
  stroke(112, 48, 2) // Left whiskers
  line(60, 180, 165, 220);
  line(100, 240, 165, 240);
  line(60, 300, 165, 260);
  line(440, 180, 335, 220); // Right whiskers
  line(400, 240, 335, 240);
  line(440, 300, 335, 260);
}

// Function responsible for animating and rendering the heart emojis
function updateAndDrawHearts() {
  noStroke();
  for (let i = hearts.length - 1; i >= 0; i--) {
    let heart = hearts[i];
    heart.x += heart.vx;
    heart.y += heart.vy;
    heart.alpha -= 2;
    fill(255, 0, 0, heart.alpha);
    textSize(30);
    textAlign(CENTER, CENTER);
    text('❤️', heart.x, heart.y);
    if (heart.alpha <= 0) {
      hearts.splice(i, 1);
    }
  }
}

// When a heart is detected
function petCat() {
  for (let i = 0; i < 20; i++) {
    hearts.push({
      x: 250,
      y: 200,
      vx: random(-2, 2),
      vy: random(-2, 2),
      alpha: 255
    });
  }
}

function feedCat() {
  isFeeding = true;
  feedingTime = millis();
}

// STEP 2 classify!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}