class Form {
    constructor() {
        this.greeting = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton("Play");
    }

    display() {
        var title = createElement('h2')
        title.html("Kabaddi");
        title.position(windowWidth / 2, 0);

        this.input.position(windowWidth / 2 - 40, windowHeight / 2 - 80);
        this.button.position(windowWidth / 2 + 30, windowHeight / 2);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.addPlayers();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(130, 100);
        })

    }
}
