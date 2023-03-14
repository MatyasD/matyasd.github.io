window.onload = () => update()
const player = new Player(0, 0, 100, new Gun(30, 0, 100, 100, 10, 3));
player.showHp();
player.gun.showAmmoInfo();

function update() {

    player.bullets.forEach(item => item.moveToDirection());
    player.bullets.forEach(item => item.checkCollisions());

    player.move();


    window.requestAnimationFrame(update)
}
