let rpsHeader = document.getElementById('rps-header')
let rpsContainer = document.getElementById('rps-container')
let r = document.getElementById('r')
let p = document.getElementById('p')
let s = document.getElementById('s')
let ri = document.getElementById('ri')
let pi = document.getElementById('pi')
let si = document.getElementById('si')
let rps = document.querySelector('.rps-choices')
let options = ['r', 'p', 's']
let playerChoice = []
let x = 0
let z = 0
let y = 0
let finalChoice = 0
let scoreboard = document.getElementById('scoreboard')

function startGame() {
    if (x < 1) {
        r.addEventListener('click', choseRock)
        p.addEventListener('click', chosePaper)
        s.addEventListener('click', choseScissors)
    } else {
        setTimeout(computerChoice, 1000)
    }
}
function choseRock() {
    playerChoice.push('r')
    x++;
    rpsHeader.innerHTML = 'YOU CHOOSE ROCK'
    startGame()
    return playerChoice;
}
function chosePaper() {
    playerChoice.push('p')
    x++;
    rpsHeader.innerHTML = 'YOU CHOOSE PAPER'
    startGame()
    return playerChoice;
}
function choseScissors() {
    playerChoice.push('s')
    x++;
    rpsHeader.innerHTML = 'YOU CHOSE SCISSORS'
    startGame()
    return playerChoice;
}
function computerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    playerChoice.push(options[computerChoice])
    if (options[computerChoice] == 'r') {
        rpsHeader.innerHTML = 'COMPUTER CHOOSES ROCK'
    }
    if (options[computerChoice] == 'p') {
        rpsHeader.innerHTML = 'COMPUTER CHOOSES PAPER'
    }
    if (options[computerChoice] == 's') {
        rpsHeader.innerHTML = 'COMPUTER CHOOSES SCISSORS'
    }
    setChoice()
}
function setChoice() {
    finalChoice = playerChoice.join('')
    setTimeout(game, 1000)
}
function game() {
    switch (finalChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win()
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw()
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            loss()
            break;
    }
}
function win() {
    rpsHeader.innerHTML = 'YOU WIN!'
    setTimeout(restart, 2000)
    y++;
}
function draw() {
    rpsHeader.innerHTML = 'ITS A DRAW!'
    setTimeout(restart, 2000)
}
function loss() {
    rpsHeader.innerHTML = 'YOU LOSE!'
    setTimeout(restart, 2000)
    z++;
}
function restart() {
    rpsHeader.innerHTML = 'ROCK, PAPER, SCISSORS'
    scoreboard.innerHTML = y + ':' + z
    finalChoice = 0
    playerChoice = []
    x = 0
}

startGame()