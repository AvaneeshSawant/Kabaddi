class Player {
    constructor() {
        this.index = null;
        this.x = null;
        this.y = null;
        this.name = null;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    } 

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    addPlayers() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            x: this.x,
            y: this.y
        });
    }


}