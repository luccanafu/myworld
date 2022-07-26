class Game {
  constructor() {}
  getState(){
    var gameStateref = database.ref("gameState")
    gameStateref.on("value",function(data){
      gameState = data.val()
    })
  }
  
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
 
  start() {
    player = new Player();
    form = new Form();
    form.display();
    contagemPlayersRef = player.getCount()            
    jogador = createSprite(width/2,height*0.9)
  }
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
  play(){
    drawSprites()
  }
}

