const canvas = document.querySelector('#show-canvas');
const canvastwo = document.querySelector('#show-canvas-2');
const ctx = canvas.getContext('2d');
const ctxtwo = canvastwo.getContext('2d');


function startRotating() {
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctxtwo.translate(canvas.width / 2, canvas.height / 2);
    setInterval(rotate, 10);
}


function rotate() {
    ctx.clearRect(-100, -100, 200, 200);
    ctxtwo.clearRect(-100, -100, 200, 200);
    ctx.rotate(Math.PI / 360);
    ctxtwo.rotate(Math.PI / 360);

    // Create a linear gradient
    // The start gradient point is at x=20, y=0
    // The end gradient point is at x=220, y=0
    const gradient = ctx.createLinearGradient(100, 0, 200, 0);

    // Add three color stops
    gradient.addColorStop(0, '#a68b17');
    gradient.addColorStop(.5, '#a73d24');
    ctx.fillStyle = gradient;
    ctxtwo.fillStyle = gradient;
    ctx.fillRect(-50, -50, 100, 100);
    ctxtwo.fillRect(-50, -50, 100, 100);
}


window.addEventListener('load', startRotating);