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
    centroids = [],
    data_points_assigned_to_centroids = [],
    colors = ['#f2542d','#2a9d8f','#f4a261','#d62828','#457b9d','#06d6a0','#118ab2','#293241','#6a994e','#8338ec'];

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
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
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

function drawCentroids([x, y], index) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = colors[index];
    ctx.arc(x, y, 7, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}

function removeAllCentroids() {
    centroids = [];
    drawAll();
}

// calculate distance between two points
// eculidean distance
function distance(point1, point2) {
    return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
}


function assignCentroids() {
    
}
