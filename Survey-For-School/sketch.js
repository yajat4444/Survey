
var canvas;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;

function setup(){
    
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    
    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("lightblue");
    strokeWeight(20);
    stroke(0);
    line(0,150,1400,150);
    
    if(playerCount === 2){
        game.update(1);
    }
 
    if(gameState===1){
        clear();
        game.play();
    }
}
