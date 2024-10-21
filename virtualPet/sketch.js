let hearts = [];
let isFeeding = false;
let feedingTime = 0;
const feedingDuration = 2000; // Duration in milliseconds

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255, 234, 217);
  drawButtons();
  drawCat();
  updateAndDrawHearts();
  
  if (isFeeding && millis() - feedingTime > feedingDuration) {
    isFeeding = false;
  }
}

// Function to draw a cat
function drawCat(){
  strokeCap(ROUND);
  stroke(255, 157, 77);
  strokeWeight(6);
  line(200, 150, 150, 50); // Left ear
  line(100, 150, 150, 50); // Left ear
  line(200, 150, 300, 150);
  line(300, 150, 350, 50); // Right ear
  line (350, 50, 400, 150); // Right ear

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
    textSize(40);
    textAlign(CENTER, CENTER);
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

// Function to draw the buttons
function drawButtons(){
  let feedButton = createButton('Feed'); // Feed button
  feedButton.position(70, 360);
  feedButton.size(130, 40);
  feedButton.style('background-color', '#FF9D4D');
  feedButton.style('color', 'white');
  feedButton.style('font-size', '16px');
  feedButton.style('border', 'none');
  feedButton.style('border-radius', '5px');
  feedButton.mousePressed(feedCat);

  let petButton = createButton('Pet'); // Pet button
  petButton.position(300, 360);
  petButton.size(130, 40);
  petButton.style('background-color', '#FF9D4D');
  petButton.style('color', 'white');
  petButton.style('font-size', '16px');
  petButton.style('border', 'none');
  petButton.style('border-radius', '5px');
  petButton.mousePressed(petCat);
  }

// Function responsible for animating and rendering the heart emojis
function updateAndDrawHearts() {
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


// When the petButton is pressed
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