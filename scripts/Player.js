class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.bullets = [];
    }

    move() {
        if (keyPresses.w) this.y -= 5;
        if (keyPresses.s) this.y += 5;
        if (keyPresses.a) this.x -= 5;
        if (keyPresses.d) this.x += 5;

        playerDiv.style.left = `${this.x}px`;
        playerDiv.style.top = `${this.y}px`;
    }

    shoot() {
        let bullDirection = Math.atan2(mouseY - this.y, mouseX - this.x);
        let bullet = new Bullet(this.x, this.y, bullDirection, 15);
        bullet.createBullet();
        this.bullets.push(bullet);
        console.log(this.bullets)
    }
}

