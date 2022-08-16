function randomPurple() {
    lumRadius = 8;
    h = 255;
    s = 49;
    l = 30 + + Math.floor(2 * lumRadius * Math.random()) - lumRadius;
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

window.onload = function() {
    canv = document.getElementById("header-background");
    c = canv.getContext("2d");

    canv.width = 2 * 1200;
    canv.height = 2 * canv.offsetHeight;
    width = canv.width;
    height = canv.height;

    rows = 3;
    squareSize = height / rows;
    cols = Math.floor(width / squareSize) + 1;

    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            // draw square
            c.fillStyle = randomPurple();
            c.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
            // draw triangle
            c.fillStyle = randomPurple();
            c.beginPath();
            c.moveTo(col * squareSize, row * squareSize);
            c.lineTo(col * squareSize, (row + 1) * squareSize);
            if ((row + col) % 2 == 0) {
                c.lineTo((col + 1) * squareSize, (row + 1) * squareSize);
            } else {
                c.lineTo((col + 1) * squareSize, row * squareSize);
            }
            c.closePath();
            c.fill();
        }
    }

    const header = document.getElementById("site-header");
    
    canv.toBlob(blob => {
        var imageUrl = URL.createObjectURL(blob);
        header.style.background = "url(" + imageUrl + ")";
        header.style.backgroundSize = "auto " + header.offsetHeight + "px";
    });
}