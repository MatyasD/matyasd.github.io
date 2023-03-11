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

        let bulletPoint = document.querySelector(".bullet-point");
        let bulletPointPos = {
            x: bulletPoint.getBoundingClientRect().left,
            y: bulletPoint.getBoundingClientRect().top
        }

        console.log(bulletPointPos)

        // let offset = (Math.random() - 0.5) * Math.PI / 15;
        // přičíst offset pro spread
        let bullDirection = Math.atan2(mouseY - bulletPointPos.y, mouseX - bulletPointPos.x);



        let bullet = new Bullet(bulletPointPos.x, bulletPointPos.y, bullDirection, 15);
        bullet.createBullet();
        this.bullets.push(bullet);
        console.log("Player x: " + this.x)
        console.log("Player y: " + this.y)
        //console.log("MouseX: " + mouseX)
        //console.log("MouseY: " + mouseY)
    }
}
