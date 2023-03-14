let keyPresses = {};
let positionX = 0;
let positionY = 0;
let deg = 0;
let playerDiv = document.querySelector("#player")
let img = document.querySelector(".player-img");

window.addEventListener("keydown", function (e) {
    keyPresses[e.key] = true;
    if (e.key == "r") {
        player.gun.reload();
    }
})

window.addEventListener("keyup", function (e) {
    keyPresses[e.key] = false;
})

window.addEventListener("click", function (e) {
    player.gun.shoot()
})

window.addEventListener("mousedown", function (e) {
    shootInterval = setInterval(function () {
        player.gun.shoot()

    }, player.gun.fireRate)
})

window.addEventListener("mouseup", function (e) {
    clearInterval(shootInterval)
})


var imgCenter = {
    x: 0,
    y: 0
};

let mouseX;
let mouseY;
var angle = 0;
document.addEventListener("mousemove", e => {
    imgCenter = {
        x: img.getBoundingClientRect().left + (img.getBoundingClientRect().width + 45) / 2,
        y: img.getBoundingClientRect().top + img.getBoundingClientRect().height / 2
    };
    angle = Math.atan2(mouseX - imgCenter.x, - (mouseY - imgCenter.y)) * (180 / Math.PI);

    playerDiv.style.transform = `rotate(${angle}deg)`;

    mouseX = e.clientX;
    mouseY = e.clientY;
})



