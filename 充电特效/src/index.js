import './index.scss';
let timer;
window.onload = function () {
	let perNum = 0;
	const percent = document.getElementById('g-number');
	timer = this.setInterval(() => {
		perNum += this.Math.random() * 5 | 0;
		this.console.log(perNum)
		if(perNum > 100) {
			perNum = 100
			this.clearInterval(timer);
		}
		percent.innerText = perNum + '%';
	},5000);
};

window.onbeforeunload = function () {
	this.clearInterval(timer);
}