//BOOST YOUR CONCENTRATION APP
//Made by J AJITESH

//Declaring the variables
var ball1, ball2, ball3, ball4, ball5;
var ball6, ball7, ball8, ball9, ball10;
var home, appInfo, game;
var gameEnter = false;


//Setup function
function setup() {

  //Creating the canvas and giving its size
  createCanvas(displayWidth-30, displayHeight-30);
  
  home = new Home();
  home.display();

}

//Draw function
function draw() {

  //Background color
  background(30, 255, 228);  

  if(gameEnter){
    game.display();
  }
  
}

function mouseClicked(){
    game.gameStop();
}

