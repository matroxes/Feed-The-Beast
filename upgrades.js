var speed = document.getElementById('img-1');
var excp   = document.getElementById('img-2');
var more  = document.getElementById('img-3');
var time  = document.getElementById('img-4');

var bar1 = document.querySelector('.block-1')
var bar2 = document.querySelector('.block-2')
var bar3 = document.querySelector('.block-3')
var bar4 = document.querySelector('.block-4')
var bar5 = document.querySelector('.block-5')
var bar6 = document.querySelector('.block-6')
var bar7 = document.querySelector('.block-7')
var bar8 = document.querySelector('.block-8')
var bar9 = document.querySelector('.block-9')
var bar10 = document.querySelector('.block-10')
var bar11 = document.querySelector('.block-11')
var bar12 = document.querySelector('.block-12')

var sign1 = document.querySelector('#sign-1')
var sign2 = document.querySelector('#sign-2')
var sign3 = document.querySelector('#sign-3')
var sign4 = document.querySelector('#sign-4')

let speedCounter = 1;
let excpCounter  = 1;
let moreCounter  = 1;
let timeCounter  = 1;

let firstPoint = 5;
let secondPoint = 15;
let thirdPoint = 30;



var addToFirst  = 0;
var addToSecond = 0;
var addToThird  = 0;

function countPrice() {
    if (speedCounter === 1) {
        sign1.innerHTML = (firstPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else if (speedCounter === 2) {
        sign1.innerHTML = (secondPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else if (speedCounter === 3) {
        sign1.innerHTML = (thirdPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else  {
        sign1.innerHTML = 'Max';
    }

    if (excpCounter === 1) {
        sign2.innerHTML = (firstPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else if (excpCounter === 2 ) {
        sign2.innerHTML = (secondPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else if (excpCounter === 3) {
        sign2.innerHTML = (thirdPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else  {
        sign2.innerHTML = 'Max';
    }

    if (moreCounter === 1) {
        sign3.innerHTML = (firstPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else if (moreCounter === 2) {
        sign3.innerHTML = (secondPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else if (moreCounter === 3) {
        sign3.innerHTML = (thirdPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else  {
        sign3.innerHTML = 'Max';
    }

    if (timeCounter === 1) {
        sign4.innerHTML = (firstPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else if (timeCounter === 2) {
        sign4.innerHTML = (secondPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else if (timeCounter === 3) {
        sign4.innerHTML = (thirdPoint + addToFirst + addToSecond + addToThird) + ' очков';
    } else  {
        sign4.innerHTML = 'Max';
    }
}

function upgradeSpeed() {
    playerSpeedPlus += 2
}
function upgradeExcp() {
    playerSizePlus += 8
}
function upgradeMore() {
    foodPointsPlus += 1;
    foodSizePlus += 3;
}
function upgradeTime() {
    foodSpeedMinus += 80;
}



speed.addEventListener('click', () => {
    if (speedCounter === 1 && score >= firstPoint) {
        bar1.style.backgroundColor = '#FF6B90'
        score -= firstPoint + addToFirst
        addToFirst++;

        upgradeSpeed()

        speedCounter++
        return false;
    }
    if (speedCounter === 2 && score >= secondPoint) {
        bar2.style.backgroundColor = '#FF6B90'
        score -= secondPoint
        addToSecond++

        upgradeSpeed()

        speedCounter++
        return false;
    }
    if (speedCounter === 3 && score >= thirdPoint) {
        bar3.style.backgroundColor = '#FF6B90'
        score -= thirdPoint
        addToThird++

        upgradeSpeed()

        speedCounter++
        return false;
    }

})

excp.addEventListener('click', () => {
    if (excpCounter === 1 && score >= firstPoint) {
        bar4.style.backgroundColor = '#0FFF83'
        score -= firstPoint + addToFirst
        addToFirst++;

        upgradeExcp()

        excpCounter +=1;
        return false;
    }
    if (excpCounter === 2 && score >= secondPoint) {
        bar5.style.backgroundColor = '#0FFF83'
        score -= secondPoint
        addToSecond++

        upgradeExcp()

        excpCounter +=1;
        return false;
    }
    if (excpCounter === 3 && score >= thirdPoint) {
        bar6.style.backgroundColor = '#0FFF83'
        score -= thirdPoint
        addToThird++

        upgradeExcp()

        excpCounter +=1;
        return false;
    }
})

more.addEventListener('click', () => {
    if (moreCounter === 1 && score >= firstPoint) {
        bar7.style.backgroundColor = '#841FFF'
        score -= firstPoint + addToFirst
        addToFirst++;

        upgradeMore()

        moreCounter +=1;
        return false;
    }
    if (moreCounter === 2 && score >= secondPoint) {
        bar8.style.backgroundColor = '#841FFF'
        score -= secondPoint
        addToSecond++

        upgradeMore()

        moreCounter +=1;
        return false;
    }
    if (moreCounter === 3 && score >= thirdPoint) {
        bar9.style.backgroundColor = '#841FFF'
        score -= thirdPoint
        addToThird++

        upgradeMore()

        moreCounter +=1;
        return false;
    }
})

time.addEventListener('click', () => {
    if (timeCounter === 1 && score >= firstPoint) {
        bar10.style.backgroundColor = '#fff870'
        score -= firstPoint + addToFirst
        addToFirst++;

        upgradeTime()

        timeCounter +=1;
        return false;
    }
    if (timeCounter === 2 && score >= secondPoint) {
        bar11.style.backgroundColor = '#fff870'
        score -= secondPoint
        addToSecond++

        upgradeTime()

        timeCounter +=1;
        return false;
    }
    if (timeCounter === 3 && score >= thirdPoint) {
        bar12.style.backgroundColor = '#fff870'
        score -= thirdPoint
        addToThird++

        upgradeTime()

        timeCounter +=1;
        return false;
    }
})
