var myVar = setInterval(myTimer, 1000);
function myTimer() {
	var now = new Date();
	document.getElementById('digital').innerHTML = now.toLocaleTimeString();
}

function tick() {
	with (new Date()) {
		var h, m, s;
		h = 30 * (getHours() % 12 + getMinutes() / 60);
		m = 6 * getMinutes();
		s = 6 * getSeconds();
		document.getElementById('second').style.cssText = '-webkit-transform:rotate(' + s + 'deg);';
		document.getElementById('minute').style.cssText = '-webkit-transform:rotate(' + m + 'deg);';
		document.getElementById('hour').style.cssText = '-webkit-transform:rotate(' + h + 'deg);';
		setTimeout(tick, 1000);
	}
}
