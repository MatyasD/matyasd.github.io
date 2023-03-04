window.onload = () => update()
const player = new Player(0, 0);



let mouseX;
let mouseY;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function update() {

    player.bullets.forEach(item => item.moveToDirection());
    player.move();



    window.requestAnimationFrame(update)
}
