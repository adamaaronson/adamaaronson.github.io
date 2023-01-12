function randomPurple() {
    lumRadius = 8;
    h = 255;
    s = 49;
    l = 30 + Math.floor(2 * lumRadius * Math.random()) - lumRadius;
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

window.onload = function() {
    let triangles = document.getElementsByClassName("header-shape");

    for (let triangle of triangles) {
        triangle.setAttribute("fill", randomPurple());
    }
}