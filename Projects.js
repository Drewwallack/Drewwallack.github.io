let button = document.querySelector('#pickbutton');
let box = document.getElementById('centertextbox')
let boxText = document.getElementById('centertext');
let colors = ['red', 'green', 'blue', 'yellow', 'blue', 'pink', 'black'];
let runColorShift = 0;
let executed = true;
let redirect1 = [`deciding`, `deciding.`, `deciding..`, `deciding...`];
let redirectDecide = 0;
let redirectInter = 0;
let bigText = 0;
let redirectIteration = 0
let project = ['DogWheel.html', 'playingaround.html'];
// Random project selection
function runCancelColorShift() {
	let color = setInterval(colorShift, 170)
	boxText.innerHTML = 'in...';
	boxText.style.fontFamily = "'Libre Franklin', sans-serif";
	boxText.style.fontSize = '130px';
	let countSet = setInterval(count, 1000)
	let sec = 6;
	function count() {
		if (sec == 0) {
			clearInterval(countSet);
			redirect()
		} else {
			sec = sec - 1
			boxText.innerHTML = sec
		}
	}
}
function colorShift() {
	let num = Math.round(Math.random() * 6);
	boxText.style.color = colors[num];
	boxText.style.fontFamily = "'Libre Franklin', sans-serif";
	boxText.style.fontSize = '130px';

}
function redirect() {
	let body = document.querySelector('body');
	let pageOr = document.querySelector('#or')
	let dropDown = document.querySelector('.dropdown')
	box.remove();
	pageOr.remove()
	dropDown.remove()
	body.style.backgroundColor = 'black';
	bigText = document.createElement('div');
	document.body.appendChild(bigText);
	bigText.id = 'big-text';
	bigText.innerHTML = redirectInter = setInterval(redirectCount, 1000);
	if (bigText.innerHTML = 3) {
		redirectCount()
	}
}
function redirectCount() {
	bigText.innerHTML = redirect1[redirectDecide];
	redirectDecide = redirectDecide + 1;
	if (redirectDecide == 4) {
		redirectDecide = 0;
		redirectIteration++;
	}
	if (redirectIteration > 1) {
		clearInterval(redirectInter)
		goPlease()
	}
}
function goPlease() {
	let proj = Math.round(Math.random() * 1);
	bigText.innerHTML = 'Redirecting to ' + project[proj]
	setTimeout(() => {
		window.location.href = project[proj]
	}, 2000)

}
button.addEventListener('click', runCancelColorShift);

