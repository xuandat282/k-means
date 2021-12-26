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

// The number of data points to be added
function randomDataPoints(count) {
    // random data points
    for (let i = 0; i < count; i++) {
        let newPoint = [
            Math.floor(Math.random() * canvas.width - 1),
            Math.floor(Math.random() * canvas.height - 1)
        ];
        data_points.push(newPoint);
    }
}



add_data_points_randomly.addEventListener("click", drawRandomDataPoints(add_data_points_randomly_count.value));

// draw random data points
function drawRandomDataPoints(count) {
    randomDataPoints(count);
    drawAll();
}

function drawAll() {
    data_points.map(drawDataPoints)
}

function drawDataPoints([x, y]) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
}
    