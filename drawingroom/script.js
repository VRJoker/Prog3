var socket;

function main() {
    socket = io.connect('http://localhost:3000');

    socket.on("kentroni kordinat", function nkel(arr) {
        ellipse(arr[0], arr[1], 5, 5);


    });
}

function setup() {
    createCanvas(600, 600);
    background("#acacac");
}

function mouseDragged() {
    socket.emit("kordinates", [mouseX, mouseY])
}




window.onload = main;

