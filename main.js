var add_data_points_manually = document.getElementById("add-data-points-manually")
var add_data_points_randomly = document.getElementById("add-data-points-randomly")
var add_data_points_randomly_count = document.getElementById("add-data-points-randomly-count")
var add_data_points_from_file = document.getElementById("add-data-points-from-file")
var remove_all_data_points = document.getElementById("remove-all-data-points")

var add_centroids_manually = document.getElementById("add-centroids-manually")
var add_centroids_randomly = document.getElementById("add-centroids-randomly")
var add_centroids_randomly_count = document.getElementById("add-centroids-randomly-count")
var remove_all_centroids = document.getElementById("remove-all-centroids")


var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
let data_points = [],
    centroids = [];

add_data_points_randomly.addEventListener("click", () => randomDataPoints(add_data_points_randomly_count.value), false);
remove_all_data_points.addEventListener("click", removeAllDataPoints, false);

add_centroids_randomly.addEventListener("click", () => randomCetroids(add_centroids_randomly_count.value), false);
remove_all_centroids.addEventListener("click", removeAllCentroids, false);

// The number of data points to be added
function randomDataPoints(count) {
    for (let i = 0; i < count; i++) {
        let newPoint = [
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height)
        ];
        data_points.push(newPoint);
    }
    drawAll();
}

function drawAll() {
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw data points
    data_points.map(drawDataPoints);
    centroids.map(drawCentroids);
}

function drawDataPoints([x, y]) {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill();
}

//remove all data points
function removeAllDataPoints() {
    data_points = [];
    drawAll();
}
// add random centroid
function randomCetroids(count) {
    for (let i = 0; i < count; i++) {
        let newPoint = [
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height)
        ];
        centroids.push(newPoint);
    }
    drawAll();
}

function drawCentroids([x, y]) {
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function removeAllCentroids() {
    centroids = [];
    drawAll();
}