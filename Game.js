class Game {
    constructor(){}

    gameState(){
        var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

    
    

}  

    async start() {
        if(gameState === 0){
            player = new Player
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
            }
        }

    form = new form()
    form.display();
    }
}