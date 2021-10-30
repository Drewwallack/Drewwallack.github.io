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
			sec = sec-1;
			boxText.innerHTML = sec;
			console.log(sec);
			}
		}
	}
	function colorShift() {
		let num = Math.round(Math.random()*6);
		boxText.style.color = colors[num];
		boxText.style.fontFamily = "'Libre Franklin', sans-serif";
		boxText.style.fontSize = '130px';

	}
	function redirect() {
		let body = document.querySelector('body');
		box.remove();
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
		redirectDecide = redirectDecide+1;
		if (redirectDecide == 4) {
			redirectDecide = 0;
			redirectIteration++;
		}
		if (redirectIteration == 2) {
			clearInterval(redirectInter)
			console.log('hey')
		}
	}
button.addEventListener('click', runCancelColorShift);

/* tomorrow - set pages equal to variables and insert them into arrays, random number generator to
find which link to go to. Either find a way to redirect to said page, or replace bigText.innerHTML 
with it. Goodnight! */
