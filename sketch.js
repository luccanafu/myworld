var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var jogador
function preload() {
  backgroundImage = loadImage("./assets/333121.jpg");
  hero = loadImage("./assets/herolucca.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  if(gameState === 1){
    game.play()
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

