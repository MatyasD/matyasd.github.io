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
        this.el.setAttribute("draggable", "false")
        this.el.style.position = 'absolute';
        this.el.style.transform = `rotate(${angle}deg)`;

        //this.el.style.border = "1px solid"



        body.appendChild(this.el);
    }

    moveToDirection() {


        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        console.log("------------------------------------")
        console.log(this.el.offsetWidth)
        this.el.style.top = `${this.y - (this.el.offsetHeight / 2)}px`;
        this.el.style.left = `${this.x - (this.el.offsetWidth / 2)}px`;

        if ((this.x - 1000) > 1000 || (this.x + 1000) < -1000) {
            this.el.remove();
            player.bullets.splice(player.bullets.findIndex(({ x }) => x == this.x), 1)
        } else if ((this.y - 1000) > 1000 || (this.y + 1000) < -1000) {
            this.el.remove();
            player.bullets.splice(player.bullets.findIndex(({ y }) => y == this.y), 1)
        }

        // console.log("bullet left: " + this.el.style.left)
        // console.log("bullet top: " + this.el.style.top)

    }

}