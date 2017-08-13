// Setup p5.js.
function setup () {

    // Create a canvas, fill the entire window.
    createCanvas(window.innerWidth, window.innerHeight);

}

// Main draw event loop.
function draw() {

    // Fill with white.
    fill(255);

    // If the mouse is pressed, fill with black.
    if (mouseIsPressed) {
        fill(0);
    }

    // Draw an ellipse, centered at the mouse location.
    ellipse(mouseX, mouseY, 20, 20);

}
