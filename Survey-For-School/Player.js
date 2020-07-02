class Player {
    constructor(){
        this.index = null;
       
        this.name = null;
        this.class = null;
        this.email = null;
        this.age = null;
        this.school = null;
    }

    getCount(){
       
        var playerCountRef = database.ref("playerCount");
        
        playerCountRef.on("value", function(data){
            
            playerCount = data.val();
        })
    }

    updateCount(count){
        
        database.ref("/").update({
            
            playerCount: count
        })
    }

    update(){
        
        var playerIndex = "players/player" + this.index;
        
        database.ref(playerIndex).set({
            
            name: this.name,
           
        })
    }

    static getPlayerinfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
}
