class Game {
    constructor(){}

    gameState(){
        var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
}  
}