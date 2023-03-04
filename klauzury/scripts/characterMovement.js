let keyPresses = {};
let positionX = 0;
let positionY = 0;
let deg = 0;
let playerDiv = document.querySelector("#player")
let img = document.querySelector(".player-img");
let contour = document.querySelector(".contour");

window.addEventListener("keydown", function (e) {
    keyPresses[e.key] = true;
})

window.addEventListener("keyup", function (e) {
    keyPresses[e.key] = false;
})



window.addEventListener("click", function (e) {
    player.shoot()

})

var imgCenter = {
    x: 0,
    y: 0
};

var angle = 0;
document.addEventListener("mousemove", e => {
    imgCenter = {
        x: img.getBoundingClientRect().left + (img.getBoundingClientRect().width + 45) / 2,
        y: img.getBoundingClientRect().top + img.getBoundingClientRect().height / 2
    };
    angle = Math.atan2(e.pageX - imgCenter.x, - (e.pageY - imgCenter.y)) * (180 / Math.PI);
    img.style.transform = `rotate(${angle}deg)`;
    contour.style.transform = `rotate(${angle}deg)`
})



