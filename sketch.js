

var score1=0,lives1=10;
var score2=0,lives2=10;
gamestate="serve"
function preload()
{
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  wall1=createSprite(width/2,5,width,10)
  wall2=createSprite(width/2,height-5,width,10)
  wall3=createSprite(5,height/2,10,height)
  wall4=createSprite(width-5,height/2,10,height)

 wall16=createSprite(width/2,height-110,width-300,10)
  wall17=createSprite(width/2-100,height-50,width-100,10)
  
  wallgroup=new Group();
  wallgroup.add(wall1)
  wallgroup.add(wall2)
  wallgroup.add(wall3)
  wallgroup.add(wall4)
  wallgroup.add(wall16)
  wallgroup.add(wall17)
enemygroup=new Group()
coingroup=new Group()
  for(var i=100;i<width-100;i+=100){
    var wallA=createSprite(i,150,10,height/2)
    var enemy1=createSprite(i-40,10,30,20)
    enemy1.shapeColor="red"
    enemy1.velocityY=Math.random(-2,2)
    enemygroup.add(enemy1)
    wallA.shapeColor="teal"
  wallgroup.add(wallA)
    }
  for(var i=150;i<width-150;i+=100){ 
   var wallB=createSprite(i,height/2,10,height/2)
   var enemy1=createSprite(i-40,height/2,30,20)
    enemy1.shapeColor="red"
    enemy1.velocityY=Math.random(-2,2)
    enemygroup.add(enemy1)
    wallgroup.add(wallB)
     wallB.shapeColor="teal"
  }
  console.log(wallgroup)
player=createSprite(50,height-25,30,30)
player.shapeColor="blue"
player2=createSprite(50,height-25,33,33)
player2.shapeColor="yellow"

for(var i=1;i<70;i++){
  x=Math.round(random(50,width-50))
  y=Math.round(random(50,height-150))
     var coin =createSprite(x,y,20,20)
     coin.shapeColor="lightgreen"
    coingroup.add(coin)
}
textSize(20)
fill("white")
}
function draw()  
{
  background(51);
  if(gamestate==="serve"){
    text("player1 is blue so use wasd",width/2,height/2)
    text("player2 is yellow so use arrow",width/2,height/2-100)
  }
  else if(gamestate=="play"){
    if(keyDown("a")) {
      player.x-=10 
     }
     if(keyDown("d")) {
       player.x+=10 
      } if(keyDown("w")) {
       player.y-=10 
      }
      if(keyDown("s")) {
        player.y+=10 
       }
       player.collide(wallgroup)
       if(keyDown("left")) {
         player2.x-=10 
        }
        if(keyDown("right")) {
          player2.x+=10 
         } if(keyDown("up")) {
          player2.y-=10 
         }
         if(keyDown("down")) {
           player2.y+=10 
          }
          player2.collide(wallgroup)
   
         enemygroup.bounceOff(wallgroup)
         player.overlap(coingroup,coindestroy,score1)
         player2.overlap(coingroup,coindestroy,score2)
         //player.isTouching(enemygroup,lifeover)
         if(player.bounceOff(enemygroup)){
           
           lifeover1()
          
         }
         if(player2.bounceOff(enemygroup)){
           lifeover2()
         }
     drawSprites();

  }
  else if(gamestate==="end"){
 text("gameOver",width/2,height/2)
  }
 
//  setTimeout({},2000)
  
  text("yellow player",50,25)
  text("blue player",width-150,25)
  text("SCORE1:->"+score1,50,50)
  text("LIVES1:->"+lives1,50,120)
  text("SCORE2:->"+score2,width-150,50)
  text("LIVES2:->"+lives2,width-150,120)
}
function coindestroy(player,coin,score){
coin.destroy()
score+=10
player.height+=1
console.log(score)
}
function lifeover1()
{
  lives1--;
  
  if(lives1>=1){
gamestate="serve"
  }
  else{
gamestate="over"
  }
}

function lifeover2()
{
  lives2--;
  
  if(lives2>=1){
gamestate="serve"
  }
  else{
gamestate="over"
  }
}
function mouseClicked(){
  if(gamestate==="serve")
  gamestate="play"
}