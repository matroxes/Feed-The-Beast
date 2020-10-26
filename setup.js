const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')
canvas.width = 500;
canvas.height = 500;

const pointsPlace = document.getElementById('points')

const pointsWin = document.querySelector('#pointsWin')

const wictory = document.querySelector('.wictory')

const btn = document.querySelector('.again')

addEventListener('click', () => {
    location.reload();
})

var frame = 0;
let lastTime = new Date();
function animate() {
    setTimeout(() => {
    c.clearRect(0, 0, canvas.width, canvas.height)
    countPrice()
    pointsWin.innerHTML = 500 - score
    if (pointsWin.innerHTML <= 0) {
        wictory.classList.remove('wictory-hidden')
        wictory.classList.add('wictory-active')
    } else {
        if (frame >= 300 - foodSpeedMinus) {
        foodArray.push( new Food(15 + foodSizePlus, 1 + foodPointsPlus, foodSizePlus))
        frame = 0;
    }

    player.eat(playerSizePlus)

    foodArray.forEach( function(element) {
        /*element.draw(-6, -6); */ // ЭТО ТОЖЕ ПРИВЯЗАНО К УЛУЧШЕНИЯМ // For foodSizePlus = 9
        /*element.draw(-5, -5);*/ // For foodSizePlus = 6
        /*element.draw(-4.5, -4.5);*/ // For foodSizePlus = 3
        element.draw(-4, -4); // For foodSizePlus = 0
    });
    frame++

    player.update(playerSpeedPlus, playerSizePlus);
    player.draw(playerSizePlus);
    player.eat();
    }

    newScore();
        requestAnimationFrame(animate);
    }, 1000/60)

}

class Player{
    constructor(x, y, playerSizePlus, playerSpeedPlus){
        this.x = x;
        this.y = y;
        this.w = 30
        this.h = 30
        this.d = 3;
        this.sX2 = 0;
        this.sY2 = 0;
        this.hyp = 0;
    }
    update(playerSpeedPlus, playerSizePlus) {
        if (keyPressed == 38) { // UP
            if (player.y  + playerSizePlus + player.h >= 0) {
                player.y -= (player.d + playerSpeedPlus);
            } else {
                player.y = canvas.height
            }

        keyPressed = 0

        }
        else if (keyPressed == 37) { //Left
            if (player.x  + playerSizePlus + player.w >= 0) {
                player.x -= (player.d + playerSpeedPlus);
            } else {
                player.x = canvas.width
            }
            keyPressed = 0
        }
        else if (keyPressed == 39) { //Right
            if (player.x <= canvas.width) {
                player.x += (player.d + playerSpeedPlus);
            } else {
                player.x = 0 - player.w - playerSizePlus;
            }
            keyPressed = 0
        }
        else if (keyPressed == 40) {
            if (player.y <= canvas.height) {
                player.y += (player.d + playerSpeedPlus);
            } else {
                player.y = 0 - player.h - playerSizePlus
            }
            keyPressed = 0
        }
    }
    draw(playerSizePlus) {/*
        c.fillStyle = 'red';
        c.fillRect(this.x, this.y, this.h + playerSizePlus, this.w + playerSizePlus);*/
        c.drawImage(ufo, this.x -15, this.y -17, this.h + playerSizePlus + 25, this.w + playerSizePlus +25)
    }
    eat(playerSizePlus) {
        for (var i = 0; i < foodArray.length; i++) {
            let element = foodArray[i]
            player.sX2 = Math.pow(player.x - element.x, 2)
            player.sY2 = Math.pow(player.y - element.y, 2)
            player.hyp = Math.sqrt(player.sX2 + player.sY2)

            if (player.x >= element.x || player.y >= element.y) {
                if (player.hyp <= element.foodSize){
                score += element.foodPoints;
                foodArray.splice(i, 1)
                }
            } else if (player.x < element.x || player.y < element.y) {
                if (player.hyp <= (player.h + playerSizePlus)){
                score += element.foodPoints;
                foodArray.splice(i, 1)
                }
            } else if (player.x < element.x && player.y > element.y) {
                if (player.hyp <= (player.h + playerSizePlus)){
                score += element.foodPoints;
                foodArray.splice(i, 1)
                }
            } else if (player.x > element.x && player.y < element.y) {
                if (player.hyp <= (player.h + playerSizePlus)){
                score += element.foodPoints;
                foodArray.splice(i, 1)
                }
            }

        }

    }
}



//Add Event Listeners
addEventListener('keydown', (e) => {
    if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
        keyPressed = e.keyCode;
    }
})


class Food{
    constructor(foodSize, foodPoints, foodSizePlus) {
        this.foodSize = foodSize;
        this.foodPoints = foodPoints;
        this.x = Math.floor(Math.random()* (canvas.width - this.foodSize*2 - 30 + foodSizePlus) + 15)
        this.y = Math.floor(Math.random()* (canvas.height - this.foodSize*2- 30 + foodSizePlus) + 15)
    }
    draw(XimgCorrection, YimgCorrection) {
        /*c.fillStyle = 'red';
        c.fillRect(this.x, this.y, this.foodSize, this.foodSize)*/
        c.drawImage(star, this.x + XimgCorrection, this.y + YimgCorrection, this.foodSize*1.5, this.foodSize*1.5)
    }
}

function newScore() {
    pointsPlace.innerHTML = score;
}


var keyPressed;
var foodArray = []
var player = new Player(canvas.height/2-20, canvas.height/2-20, 0, 0);
var score = 0;

const star = new Image()
star.src = 'star.png'

const ufo = new Image()
ufo.src = 'unnamed.png'


// Some more global variables
var foodSpeedMinus = 0;// max = 240
var foodSizePlus = 0; // max = 9
var foodPointsPlus = 0; // max = 3
var playerSpeedPlus = 0; // max = 15
var playerSizePlus = 0; // max = 25, 15,


animate();
