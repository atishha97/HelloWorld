let score = 0;
let isSquished = false;
let missedClicks = 0;
let gameOver = false;
const maxMisses = 10;
let hearts = [];
let isFeeding = false;
let feedingTime = 0;
const feedingDuration = 2000; // Duration in milliseconds
let mouse = {
  x: 100,
  y: 100,
  speedX: 4,
  speedY: 4
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255, 234, 217);
  //drawButtons();
  drawCat();
  updateAndDrawHearts();
  catGame();

  // Draw the paw print emoji at cursor position
  textSize(64);
  textAlign(CENTER, CENTER);
  text('🐾', mouseX, mouseY);

  if (isFeeding && millis() - feedingTime > feedingDuration) {
    isFeeding = false;
  }  
}

// Function to draw a cat
function drawCat() {
  // Calculate center offset
  const centerX = width/2;  // Center of canvas horizontally
  const centerY = height/2 - 50;  // Slightly above center vertically
  
  // Offset all coordinates by moving from current positions to center-relative positions
  strokeCap(ROUND);
  stroke(255, 157, 77);
  strokeWeight(6);

  // Left ear - shift 150 units left from center for left ear
  line(centerX - 50, centerY, centerX - 100, centerY - 100); // Left ear
  line(centerX - 150, centerY, centerX - 100, centerY - 100); // Left ear

  // Center line
  line(centerX - 50, centerY, centerX + 50, centerY);

  // Right ear - shift 150 units right from center for right ear
  line(centerX + 50, centerY, centerX + 100, centerY - 100); // Right ear
  line(centerX + 100, centerY - 100, centerX + 150, centerY); // Right ear

  // Eyes
  strokeWeight(40);
  stroke(255, 137, 41);
  point(centerX - 50, centerY + 50); // Left eye
  point(centerX + 50, centerY + 50); // Right eye

  stroke(255,255,255);
  strokeWeight(10);
  point(centerX - 50, centerY + 50); // Left eye
  point(centerX + 50, centerY + 50); // Right eye

  // Nose
  strokeWeight(40);
  stroke(224, 119, 34);
  point(centerX, centerY + 80); // Nose

  // Mouth
  strokeWeight(6);
  fill(255, 234, 217);
  arc(centerX - 50, centerY + 100, 100, 90, 0, PI);
  arc(centerX + 50, centerY + 100, 100, 90, 0, PI);

  // Draw tongue if feeding
  if (isFeeding) {
    textSize(40);
    textAlign(CENTER, CENTER);
    text('⭐️', centerX - 50, centerY + 50); // Left eye star
    text('⭐️', centerX + 50, centerY + 50); // Right eye star
    
    fill(255, 150, 150); // Tongue
    stroke(255, 150, 150);
    ellipse(centerX, centerY + 130, 40, 30);
    
    strokeWeight(6); // Mouth
    fill(255, 234, 217);
    stroke(224, 119, 34);
    arc(centerX - 50, centerY + 100, 100, 90, 0, PI);
    arc(centerX + 50, centerY + 100, 100, 90, 0, PI);
  }

  // Whiskers
  strokeWeight(5);
  stroke(112, 48, 2);
  // Left whiskers
  line(centerX - 190, centerY + 30, centerX - 85, centerY + 70); // Upper
  line(centerX - 150, centerY + 90, centerX - 85, centerY + 90); // Middle
  line(centerX - 190, centerY + 150, centerX - 85, centerY + 110); // Lower

  // Right whiskers
  line(centerX + 190, centerY + 30, centerX + 85, centerY + 70); // Upper
  line(centerX + 150, centerY + 90, centerX + 85, centerY + 90); // Middle
  line(centerX + 190, centerY + 150, centerX + 85, centerY + 110); // Lower
}

// Function to draw the buttons
function drawButtons() {
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

// Animating heart emojis
function updateAndDrawHearts() {
  for (let i = hearts.length - 1; i >= 0; i--) {
    let heart = hearts[i];
    heart.x += heart.vx;
    heart.y += heart.vy;
    heart.alpha -= 2;
    fill(255, 0, 0, heart.alpha);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(':heart:', heart.x, heart.y);
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

// When the feedCatButton is pressed
function feedCat() {
  isFeeding = true;
  feedingTime = millis();
}

function catGame() {
  // Game Over State
  if (gameOver) {
    push();
    // Dark overlay
    fill(0, 0, 0, 150);
    noStroke();
    rect(0, 0, width, height);
    
    // Game Over text
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(255);
    textStyle(BOLD);
    noStroke();
    text('TOO MANY MISSED CATCHES!', width/2, height/2 - 20);
    
    textSize(20);
    textStyle(NORMAL);
    noStroke();
    text(`Final Score: ${score} Mice Caught`, width/2, height/2 + 20);
    text('Click anywhere to restart', width/2, height/2 + 100);
    pop();
    return;
  }

  if (!isSquished) {
    // Update mouse position
    mouse.x += mouse.speedX;
    mouse.y += mouse.speedY;

    // Bounce off edges
    if (mouse.x > width - 50 || mouse.x < 50) {
      mouse.speedX *= -1;
      mouse.speedY = random(-5, 5);
    }
    if (mouse.y > height - 50 || mouse.y < 50) {
      mouse.speedY *= -1;
      mouse.speedX = random(-5, 5);
    }

    // Random direction changes
    if (random(1) < 0.02) {
      mouse.speedX = random(-5, 5);
      mouse.speedY = random(-5, 5);
    }

    // Draw the mouse
    textSize(48);
    text('🐁', mouse.x, mouse.y);
  } else {
    // Draw squished mouse
    textSize(48);
    text('💀', mouse.x, mouse.y);
  }

  // Show missed clicks counter
  push();
  textAlign(LEFT, TOP);
  textStyle(BOLD)
  textSize(20);
  fill(0);
  noStroke();
  text(`Missed Paws: ${missedClicks}/${maxMisses}`, 20, 20);
  pop();

  // Score text
  push();
  fill(0);
  noStroke();
  textSize(24);
  
  const x = width/2;
  const y = height - 20;
  
  textStyle(BOLD);
  textAlign(RIGHT, BOTTOM);
  text('Paws-on Power:', x - 10, y);
  
  textStyle(NORMAL);
  textAlign(LEFT, BOTTOM);
  text(`${score} ${score === 1 ? 'Mouse' : 'Mice'} Squished!`, x + 10, y);
  pop();
}

function mousePressed() {
  if (gameOver) {
    // Reset game
    gameOver = false;
    score = 0;
    missedClicks = 0;
    isSquished = false;
    mouse = {
      x: random(100, width-100),
      y: random(100, height-100),
      speedX: 4,
      speedY: 4
    };
    return;
  }

  if (!isSquished) {
    let d = dist(mouseX, mouseY, mouse.x, mouse.y);
    if (d < 30) {
      // Successful catch
      isSquished = true;
      score++;
      feedCat();
      setTimeout(() => {
        isSquished = false;
        mouse.x = random(100, width-100);
        mouse.y = random(100, height-100);
      }, 1000);
    } else {
      // Missed click
      missedClicks++;
      console.log("Missed! Count:", missedClicks);
      
      // Check for game over
      if (missedClicks >= maxMisses) {
        gameOver = true;
        return;
      }
    }
  }
}