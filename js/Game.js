class Game {
    constructor() {

    }

    getState() {
        console.log("before update: " + gameState);
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
        console.log("after update: " + gameState);
    }

    async start() {
        console.log("gameState before check : " + gameState);
        if (gameState === 0) {
            console.log("gameState after check : " + gameState);
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            formObj = new Form();
            formObj.display();
        }
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    play() {
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.y = player.y - 50
            player.update();
        }

        if (keyIsDown(DOWN_ARROW) && player.index !== null) {
            player.y = player.y + 50
            player.update();
        }

        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.x = player.x - 50
            player.update();
        }

        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.x = player.x + 50
            player.update();
        }
    }
}