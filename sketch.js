var database;
var formObj;
var playerCount = 0;
var player;
var gameObj;
var gameState =0;

function preload() {

}

function setup() {
    createCanvas(displayWidth, displayHeight);

    database = firebase.database();

    gameObj = new Game();
    gameObj.getState();
    gameObj.start();
}

function draw() {
    background(255);

    if (playerCount === 2) {
        gameObj.update(1);
    }
}