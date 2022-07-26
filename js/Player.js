class Player {
  constructor() {
    this.name = null
    this.index = null
    this.positionX = 0
    this.positionY = 0
  }
  getCount(){
    var contagemPlayersRef = database.ref("contagemPlayers")
    contagemPlayersRef.on("value",data =>{
      contagemPlayersRef = data.val()
    })
  }
  updateCount(count){
    database.ref("/").update({
      contagemPlayers:count
    })
  }
  addPlayer(){
    var playerIndex = ("player/player"+index)
    this.positionX = width/2
    this.positionY = height*0.9
    database.ref(playerIndex).set({
    name:this.name,
    positionX:this.positionX,
    positionY:this.positionY,
    })
  }
  
  update(){
   var playerIndex = "players/player"+this.index
   database.ref(playerIndex).update({
    positionX:this.positionX,
    positionY:this.positionY,
   })
  }
  static GetPlayersInfo(){
    var palyerInfoRef = database.ref("players")
    palyerInfoRef.on("value",data =>{
      allPlayer = data.val()
    })
  }
}
