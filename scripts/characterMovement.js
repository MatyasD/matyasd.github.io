let keyPresses = {};
let positionX = 0;
let positionY = 0;
let deg = 0;
let playerDiv = document.querySelector("#player")
let img = document.querySelector(".player-img");

window.addEventListener("keydown", function (e) {
    keyPresses[e.key] = true;
})

window.addEventListener("keyup", function (e) {
    keyPresses[e.key] = false;
})



window.addEventListener("mousedown", function (e) {
    shootInterval = setInterval(function () {
        player.shoot()

    }, 50)
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
    //img.style.transform = `rotate(${angle}deg)`;
    //contour.style.transform = `rotate(${angle}deg)`;
    playerDiv.style.transform = `rotate(${angle}deg)`;
    console.log("Angle: " + angle)
    mouseX = e.clientX;
    mouseY = e.clientY;
})



