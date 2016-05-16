var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
context.globalAlpha = 0.7;
var balls = [];
for (var i = 0; i < 100; i++) {
	var R = Math.floor(Math.random() * 255);
	var G = Math.floor(Math.random() * 255);
	var B = Math.floor(Math.random() * 255);
	var radius = Math.floor(Math.random() * 20 + 15);
	aball = {
		color: "rgb(" + R + "," + G + "," + B + ")",
		radius: radius,
		x: Math.random() * (canvas.width - 2 * radius) + radius,
		y: Math.random() * (canvas.height - 2 * radius) + radius,
		vx: (Math.random() * 5 + 5) * Math.pow(-1, Math.floor(Math.random() * 100)),
		vy: (Math.random() * 5 + 5) * Math.pow(-1, Math.floor(Math.random() * 100))
	}
	balls[i] = aball;
}
setInterval(function() {
	draw(context);
	update(canvas.width, canvas.height);
}, 50);

function draw(ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < balls.length; i++) {
		ctx.globalCompositeOperation = 'lighter';
		ctx.beginPath();
		ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2);
		ctx.fillStyle = balls[i].color;
		ctx.closePath();
		ctx.fill();

	}
}

function update(canvasWidth, canvasHeight) {
	for (var i = 0; i < balls.length; i++) {
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;

		if (balls[i].x - balls[i].radius <= 0) {
			balls[i].x = balls[i].radius;
			balls[i].vx = -balls[i].vx;

		}
		if(balls[i].x + balls[i].radius >= canvasWidth){
			balls[i].x = canvasWidth - balls[i].radius;
			balls[i].vx = -balls[i].vx;
		}
		if(balls[i].y - balls[i].radius <= 0){
			balls[i].y = balls[i].radius;
			balls[i].vy = -balls[i].vy;
		}
		if(balls[i].y + balls[i].radius >= canvasHeight){
			balls[i].y = canvasHeight - balls[i].radius;
			balls[i].vy = -balls[i].vy;
		}
	}
}