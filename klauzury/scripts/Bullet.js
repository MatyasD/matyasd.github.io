class Bullet {
    constructor(x, y, direction, speed) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = speed;
        this.path = "../assets/others/bullet.png";
        this.el = document.createElement("img");
    }

    createBullet() {
        let body = document.querySelector("body");

        this.el.src = this.path;
        this.el.setAttribute("class", "bullet");
        this.el.style.position = 'absolute';
        this.el.style.left = `${this.x}px`;
        this.el.style.top = `${this.y}px`;
        this.el.style.transform = `rotate(${angle}deg)`;
        body.appendChild(this.el);
    }

    moveToDirection() {
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        this.el.style.top = `${this.y}px`;
        this.el.style.left = `${this.x}px`;

        if ((this.x - 1000) > 1000 || (this.x + 1000) < -1000) {
            this.el.remove();
            player.bullets.splice(player.bullets.findIndex(({ x }) => x == this.x), 1)
        } else if ((this.y - 1000) > 1000 || (this.y + 1000) < -1000) {
            this.el.remove();
            player.bullets.splice(player.bullets.findIndex(({ y }) => y == this.y), 1)
        }

    }

}