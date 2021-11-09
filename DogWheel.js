let pickButton = document.getElementById('pick-button')
let pickButtonText = document.getElementById('pick-button-text')
let y = ['WALK', 'TREAT', 'BIG TREAT', 'NOTHING', 'BELLY RUBS', 'HEAD SCRATCHES', 'PARK', 'WALK']
let x = 0
let dogInterval = 0
let body = document.querySelector('body');
let buttonContainer = document.getElementById('container')
let buttonContainerTwo = document.getElementById('container-two')
let dogChoice = 0
let hey = 0
function runStopPickChoiceFirst() {
    dogInterval = setInterval(pickChoice, 100)
}

function pickChoice() {
    dogChoice = Math.round(Math.random()*7)
    pickButtonText.innerHTML = y[dogChoice]
    hey = y[dogChoice]
    x++;
    if (x==15) {
        clearInterval(dogInterval)
        dogInterval = setInterval(pickChoice, 200)
    }
    if (x==25){
        clearInterval(dogInterval)
        dogInterval = setInterval(pickChoice, 300)
    }
    if (x==30) {
        clearInterval(dogInterval)
        dogInterval = setInterval(pickChoice, 400)
    }
    if (x==35) {
        clearInterval(dogInterval)
        finalPick()
    }
}

function finalPick() {
    let finalPickText = document.createElement('div');
    buttonContainerTwo.appendChild(finalPickText);
 
    finalPickText.innerHTML = 'FINAL PICK'
    finalPickText.id = 'final-pick-text'
    pickButtonText.style.fontWeight = 'bold'
    pickButtonText.style.color = 'white'
    pickButton.style.top = '80px'
    if (hey==='BIG TREAT' || hey==='WALK' || hey==='PARK') {
    pickButton.style.backgroundColor = 'green'
    } 
    if (hey==='BELLY RUBS' || hey==='HEAD SCRATCHES' || hey==='TREAT'){
    pickButton.style.backgroundColor = 'yellow'
    }
    if (hey==='NOTHING') {
    pickButton.style.backgroundColor = 'red'
    }
}

pickButton.addEventListener('click', runStopPickChoiceFirst)
