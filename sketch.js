var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;
var arrowimg, arrow1img, arrow2img, arrow3img;
var bar_img,barimg;

function preload(){
  back_img = loadImage("images/metro1.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");

  fruit4_img = loadImage("images/orange2.png");
  // fruit5_img = loadImage("images/pineapple2.png");
   bar_img = loadImage("images/bar.jpg")
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  textAlign(CENTER)
  sel = createSelect();
  sel.position(580,450);
  sel.option("Marina");
  sel.option("Maina Prominade")
  sel.option("Al wadi")
   

}


function draw() {
 //background("green");

   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }

   drawSprites();
  
}
