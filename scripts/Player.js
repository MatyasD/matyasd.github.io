class Player {
    constructor(x, y, hp, gun) {
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.gun = gun;
        this.bullets = [];
    }

    showHp() {
        let hpInfoEl = document.getElementById("hpInfoText").innerHTML = `${this.hp}`;
    }

    move() {
        if (keyPresses.w) this.y -= 5;
        if (keyPresses.s) this.y += 5;
        if (keyPresses.a) this.x -= 5;
        if (keyPresses.d) this.x += 5;

        playerDiv.style.left = `${this.x}px`;
        playerDiv.style.top = `${this.y}px`;

    }




}
