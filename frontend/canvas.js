// Selectors
const canvas = document.querySelector('#show-canvas');
const canvastwo = document.querySelector('#show-canvas-two');
const ctx = canvas.getContext('2d');
const ctxtwo = canvastwo.getContext('2d');


function startRotating() {
    // Rotate
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctxtwo.translate(canvas.width / 2, canvas.height / 2);
    setInterval(rotate, 10);
}


function rotate() {
    // Rotate properties
    ctx.clearRect(-100, -100, 200, 200);
    ctxtwo.clearRect(-100, -100, 200, 200);
    ctx.rotate(Math.PI / 360);
    ctxtwo.rotate(Math.PI / 360);

    // Create a linear gradient
    // The start gradient point is at x=20, y=0
    // The end gradient point is at x=220, y=0
    const gradient = ctx.createLinearGradient(100, 0, 200, 0);

    // Add colors to gradient
    gradient.addColorStop(0, '#a68b17');
    gradient.addColorStop(.5, '#a73d24');

    // Style
    ctx.fillStyle = gradient;
    ctxtwo.fillStyle = gradient;

    // Draw rectangles with colors
    ctx.fillRect(-50, -50, 100, 100);
    ctxtwo.fillRect(-50, -50, 100, 100);


    // Draw text inside rectangle
    ctx.fillStyle = 'black';
    ctx.font = 'bold 20px serif';
    ctx.fillText(`Tasks`, -25, 5);

    // Draw text inside rectangle
    ctxtwo.fillStyle = 'black';
    ctxtwo.font = 'bold 20px serif';
    ctxtwo.fillText(`Tasks`, -25, 5);
}

// init function
window.addEventListener('load', startRotating);