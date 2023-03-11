window.onload = () => update()
const player = new Player(0, 0);

function update() {

    player.bullets.forEach(item => item.moveToDirection());
    player.move();


    console.log(1)
    window.requestAnimationFrame(update)
}
