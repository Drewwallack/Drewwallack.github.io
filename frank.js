// variables
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var situationTitle = document.getElementById('situation-title')
var situationDescription = document.getElementById('situation-description')
var isolationPointsDisplay = document.getElementById('isolation-points')
var isolationPoints = 0
let gameTrack = 0
// game text
const titleI = 'Intro'
const I = `Hearing soft rain patter on the metal trash cans and the concrete alleyway, you open your eyes to a foreign world. Confused at first, your worries are quelled by the soft sound of the rain and the sight of another creature staring at you, smiling. The smile feels good, comforting, but as you start to smile back, his smile fades into a look of distinct fear upon his face. His breathing quickens. You hope to calm him down, so you continue smiling, which only seems to make things worse. He starts walking away, and you start walking after him. The walk turns into a run, and after a few quick turns, you become lost in the dark of the dimly lit night.

Press 1 to attempt to search for a place to stay. Press 2 to stay the night on the sidewalk.`
const titleS1 = '1/1/22'
const S1 = `You travel to nearby shops and restaurants, which all turn out to be closed. Eventually, you stumble upon a dim 24 hour CVS, and attempt to enter. Immediately after entering, under the blinding fluorescent lights, another creature yelps and pulls out a black canister labeled, “pepper spray”

Press 1 to attempt to swat the pepper spray. Press 2 to run away. 
`
const titleS2 = '1/1/22'
const S2 = `As you travel for a bench to rest, you stumble on two small creatures walking together, hand-in-hand. They see you, and they run away screaming. A feeling of loneliness washes over you.

Pressing any number will advance the game.
`
const titleS3 = '1/1/22'
const S3 = `You swat the pepper spray out of the mans hand, displaying incredible strength that both the man and you did not expect to be true. In shock, the man stands still, and you begin to grab random objects. Soons, the night is lit with sirens and loud noises, and angry people barge into the store speaking some incomprehensible language. You sprint out of the store through a back door, but the person in the shop remembered enough detail for the police to construct a mediocre description of your face. You now have a rectangular piece of metal that lights up when touched, however.

You think it may be useful. Press 1 to attempt to use the device. Press 2 to fall asleep. 
`
const titleS4 = '1/1/22'
const S4 = `After sprinting out of the store, you trip on a curb and fall hard on the sidewalk and feel a sharp pain in your knee. Unable to do anything about the injury, you limp to an rare open field of grass and lay down, pledging to somehow try and act nicer tomorrow.

You fall asleep. Pressing any number will advance the game.
`
const titleS5 = '1/1/22'
const S5 = `Sulking to an ideal looking piece of grass, you find a rectangular piece of metal that lit up when touched.

You think it may be useful. Press 1 to attempt to use the device. Press 2 to fall asleep.
`
const titleS6 = '1/1/22'
const S6 = `You repeatedly keep clicking the device, but all you see is a lit up jumble of incoherent lights. You reflect on seeing other creatures being able to use the device easily, which adds to a distinct feeling of being an outcast. 

Nevertheless, pledging to figure out how to use the device, you go to sleep optimistic. Pressing any number will advance the game
`
// game tracking
const gameTitleSequence = [titleI, titleS1, titleS2, titleS3, titleS4, titleS5, titleS6]
const gameDescriptionSequence = [I, S1, S2, S3, S4, S5, S6]
const gameDescriptionSequenceButTheyAreStrings = ['I', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6']
const advance = {
    'IC1':1,
    'IC2':2,
    'S1C1':3,
    'S1C2':4,
    'S2C1':5,
    'S2C2':5,
    'S2C3':5,
    'S3C1':6,
    'S3C2':null,
    'S4C1':null,
    'S4C2':null,
    'S4C3':null,
    'S5C1':6,
    'S5C2':null,
    'S6C1':null,
    'S6C2':null,
    'S6C3':null
}
// main game
function game(){
    // story
    button1.style.opacity = 100
    button2.style.opacity = 100
    button3.style.opacity = 100
    if (gameTrack == 0||gameTrack == 1||gameTrack == 3||gameTrack == 5) {
        button3.style.opacity = 0
    }
    situationTitle.innerText = gameTitleSequence[gameTrack]
    situationDescription.innerText = gameDescriptionSequence[gameTrack]
    // advance the game
    button1.addEventListener('click', clickOn1)
    button2.addEventListener('click', clickOn2)
    button3.addEventListener('click', clickOn3)
}
function clickOn1(){
    gameTrack = advance[gameDescriptionSequenceButTheyAreStrings[gameTrack]+'C1']
    console.log(gameTrack)
    game()
}
function clickOn2(){
    gameTrack = advance[gameDescriptionSequenceButTheyAreStrings[gameTrack]+'C2']
    console.log(gameTrack)
    game()
}
function clickOn3(){
    gameTrack = advance[gameDescriptionSequenceButTheyAreStrings[gameTrack]+'C3']
    console.log(gameTrack)
    game()
}
button1.addEventListener('click', game)
button2.addEventListener('click', game)
button3.addEventListener('click', game)