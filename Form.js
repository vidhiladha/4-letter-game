class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Play");
    }
    hide(){
    
    }
    display(){
        this.input.position(300,50);
        this.button.position(90,40);
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
}