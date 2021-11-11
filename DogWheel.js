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
let title = document.querySelector('#Title')
//selection interval
function runStopPickChoiceFirst() {
    dogInterval = setInterval(pickChoice, 100)
}
//selection system
function pickChoice() {
    title.innerHTML = 'SELECTING...'
    dogChoice = Math.round(Math.random()*7)
    pickButtonText.innerHTML = y[dogChoice]
    hey = y[dogChoice]
    x++;
    console.log(x)
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
    if (hey==='HEAD SCRATCHES') {
        pickButtonText.style.top = '50px'
    } else {
        pickButtonText.style.top = '75px'
    }
}
//final selection
function finalPick() {
    let finalPickText = document.createElement('div');
    buttonContainerTwo.appendChild(finalPickText);
 
    finalPickText.innerHTML = 'FINAL PICK'
    finalPickText.id = 'final-pick-text'
    pickButtonText.style.fontWeight = 'bold'
    pickButtonText.style.color = 'white'
    pickButton.style.top = '80px'
    title.innerHTML = 'Jasper Gets...'
    if (hey==='BIG TREAT' || hey==='WALK' || hey==='PARK') {
        pickButton.style.backgroundColor = 'green'
    }
    if (hey==='BELLY RUBS' || hey==='HEAD SCRATCHES' || hey==='TREAT'){
        pickButtonText.style.color = 'black'
        pickButton.style.backgroundColor = 'yellow'
    }
    if (hey==='NOTHING') {
        pickButton.style.backgroundColor = 'red'
    }
    pickButton.addEventListener('click', resetCount)
}
//redirect
function resetCount() {
    window.location.href = 'DogWheel.html'
}

pickButton.addEventListener('click', runStopPickChoiceFirst)
