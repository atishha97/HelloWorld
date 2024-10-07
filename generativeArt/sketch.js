// To keep track of how many times the draw function has been called
let drawCount = 0;

function setup() {
  // Create a canvas that fills the browser window
  createCanvas(windowWidth, windowHeight);
  // Set the frame rate to 6 frames per second
  frameRate(6);
}

function draw() {
  // Only draw 5 times before stopping
  if (drawCount < 5) {
    // Set a semi-transparent red background
    background(238, 46, 49, 10);

    // Create 10 sets of shapes
    for (let i = 0; i < 10; i++) {
      // Draw 1000 random points
      for (let x = 0; x < 1000; x++) {
        point(random(windowWidth), random(windowHeight));
      }
      
      // Draw a semi-transparent white ellipse
      stroke(255, 255, 255, 80);
      fill(7, 30, 34, random(255));
      ellipse(random(windowWidth), random(windowHeight), random(200));

      // Draw a rectangle with a random fill color
      strokeWeight(2);
      fill(244, 192, 149, random(255));
      rect(random(windowWidth), random(windowHeight), random(200));
    
      // Draw another ellipse with no stroke and a random red fill
      noStroke();
      fill(238, 46, 49, random(255));
      ellipse(random(windowWidth), random(windowHeight), random(200));
    }
    
    // Increment the draw count
    drawCount++;
  } else {
    // Stop the draw loop after 5 iterations
    noLoop();
  }
}

// Resize the canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}