var elonMoneyAdition = 2700000
var avMoneyAdition = 1
var elonMoneyAditionBase = 2700000
var avMoneyAditionBase = 1
let elonMoneyTotal = 0
let avMoneyTotal = 0
let accumulator1 = document.getElementById('accumulator1')
let accumulator2 = document.getElementById('accumulator2')
let moneyButton = document.getElementById('getdatmoney')
let option0 = document.getElementById('option0')
let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')

function makeMoney() {
    elonMoneyTotal = elonMoneyAdition + elonMoneyTotal
    avMoneyTotal = avMoneyTotal + avMoneyAdition
    accumulator1.innerHTML = '$' + elonMoneyTotal
    accumulator2.innerHTML = '$' + avMoneyTotal
}
option0.addEventListener('click', function() {
    option0.classList.add('selectedoption')
    option1.classList.remove('selectedoption')
    option2.classList.remove('selectedoption')
    option3.classList.remove('selectedoption')
    elonMoneyAdition = elonMoneyAditionBase
    avMoneyAdition = avMoneyAditionBase
})
option1.addEventListener('click', function() {
    option1.classList.add('selectedoption')
    option0.classList.remove('selectedoption')
    option2.classList.remove('selectedoption')
    option3.classList.remove('selectedoption')
    elonMoneyAdition = elonMoneyAditionBase * 1000
    avMoneyAdition = avMoneyAditionBase * 1000
})
option2.addEventListener('click', function() {
    option2.classList.add('selectedoption')
    option0.classList.remove('selectedoption')
    option1.classList.remove('selectedoption')
    option3.classList.remove('selectedoption')
    elonMoneyAdition = elonMoneyAditionBase * 10000
    avMoneyAdition = avMoneyAditionBase * 10000
})
option3.addEventListener('click', function() {
    option3.classList.add('selectedoption')
    option0.classList.remove('selectedoption')
    option2.classList.remove('selectedoption')
    option1.classList.remove('selectedoption')
    elonMoneyAdition = elonMoneyAditionBase * 100000
    avMoneyAdition = avMoneyAditionBase * 100000
})
moneyButton.addEventListener('click', makeMoney)