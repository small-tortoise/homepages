var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
RADIUS = 8;
currentShowTimeSeconds = 0;
const colors = ["#3385e5", "#0099cc", "#aa66cc", "#9933cc", "#99cc00", "#669900", "#ffbb33", "#ff8800", "#ff4444", "#cc0000", "#cc00ff", "#ff0000", "#ccff00"];
var balls = [];
window.onload = function() {
	WINDOW_WIDTH = document.documentElement.clientWidth;
	WINDOW_HEIGHT = document.documentElement.clientHeight;
	MARGIN_TOP = Math.round(WINDOW_HEIGHT / 5);
	MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10);
	RADUIS = Math.round(WINDOW_WIDTH * 4 / 5 / 108) - 1
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;
	currentShowTimeSeconds = getCurrentTimeSeconds();
	setInterval(function() {
		render(context);
		update();
	}, 50)
}

function render(ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	var hours = parseInt(currentShowTimeSeconds / 3600);
	var minutes = parseInt((currentShowTimeSeconds - hours * 3600) / 60);
	var seconds = currentShowTimeSeconds % 60;
	renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), ctx);
	renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), ctx);
	renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
	renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), ctx);
	renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), ctx);
	renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
	renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), ctx);
	renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), ctx);
	for (i = 0; i < balls.length; i++) {
		ctx.fillStyle = balls[i].color;
		ctx.beginPath();
		ctx.arc(balls[i].x, balls[i].y, RADIUS, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();


	}
}

function renderDigit(x, y, num, ctx) {
	ctx.fillStyle = '#66d9ef';
	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if (digit[num][i][j] === 1) {
				ctx.beginPath();
				ctx.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, Math.PI * 2);
				ctx.fill();
			}
		}
	}
}

function getCurrentTimeSeconds() {
	var currentTime = new Date();
	rent = currentTime.getHours() * 3600 + currentTime.getMinutes() * 60 + currentTime.getSeconds();
	return rent;
}

function update() {
	var nextCurrentTimeSeconds = getCurrentTimeSeconds();
	var nextHours = parseInt(nextCurrentTimeSeconds / 3600);
	var nextMiutes = parseInt((nextCurrentTimeSeconds - nextHours * 3600) / 60);
	var nextSeconds = nextCurrentTimeSeconds % 60;

	var currentHours = parseInt(currentShowTimeSeconds / 3600);
	var currentMinutes = parseInt((currentShowTimeSeconds - currentHours * 3600) / 60);
	var currentSeconds = currentShowTimeSeconds % 60;
	if (currentSeconds != nextSeconds) {
		if (parseInt(currentHours / 10) != parseInt(nextHours / 10)) {
			addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(nextHours / 10));
		}
		if (parseInt(currentHours % 10) != parseInt(nextHours % 10)) {
			addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(nextHours % 10));
		}
		if (parseInt(currentMinutes / 10) != parseInt(nextMiutes / 10)) {
			addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(nextMiutes / 10));
		}
		if (parseInt(currentMinutes % 10) != parseInt(nextMiutes % 10)) {
			addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(nextMiutes % 10));
		}
		if (parseInt(currentSeconds / 10) != parseInt(nextSeconds / 10)) {
			addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(nextSeconds / 10));
		}
		if (parseInt(currentSeconds % 10) != parseInt(nextSeconds % 10)) {
			addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(nextSeconds % 10));
		}
		currentShowTimeSeconds = nextCurrentTimeSeconds;
	}
	updateBall();


}

function addBalls(x, y, num) {
	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if (digit[num][i][j] === 1) {
				var aBall = {
					x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
					y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
					g: Math.random() + 1.5,
					vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
					vy: -5,
					color: colors[Math.floor(Math.random() * colors.length)]
				}
				balls.push(aBall);
			}
		}
	}
}

function updateBall() {
	for (var i = 0; i < balls.length; i++) {
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;
		if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
			balls[i].y = WINDOW_HEIGHT - RADIUS;
			balls[i].vy = -balls[i].vy * 0.75;
		}
	}

	var cnt = 0;
	for (var i = 0; i < balls.length; i++)
		if (balls[i].x + RADIUS > 0 && balls[i].x - RADUIS < WINDOW_WIDTH)
			balls[cnt++] = balls[i];
	while (balls.length > Math.min(300, cnt)) {
		balls.pop();
	}


}