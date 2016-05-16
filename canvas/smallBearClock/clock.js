var clockCanvas = document.getElementById("clock");
clockCtx = clockCanvas.getContext("2d"),
	bgCanvas = document.getElementById("background"),
	bgCtx = bgCanvas.getContext("2d");
var w = window.innerWidth,
	h = window.innerHeight,
	angle = 0;
amp = 1.95 * Math.PI;
var lastTime = Date.now(),
	deltaTime = 0;
var d = new Date(),
	hour = d.getHours(),
	minute = d.getMinutes(),
	second = d.getSeconds();
clockCanvas.width = w;
clockCanvas.height = h;
bgCanvas.width = w;
bgCanvas.height = h;
var clockX = 120,
	colokY = 120;
drawClock();

function drawClock() {
	requestAnimationFrame(drawClock);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	var dd = new Date(),
		curhour = dd.getHours(),
		curminute = dd.getMinutes(),
		cursecond = dd.getSeconds();

	if (cursecond != second) {
		second = cursecond;
		hour = curhour;
		minute = curminute;
		amp *= -1;
	}


	clockCtx.clearRect(0, 0, w, h);
	clockCtx.save();
	clockCtx.translate(clockX, colokY);

	clockCtx.beginPath();
	clockCtx.lineWidth = 6;
	clockCtx.strokeStyle = "#78afd3";
	clockCtx.arc(0, 0, 100, 0, 2 * Math.PI);
	clockCtx.closePath();
	clockCtx.stroke();

	clockCtx.beginPath();
	clockCtx.fillStyle = "#78afd3";
	clockCtx.arc(0, 0, 90, 0, Math.PI * 2);
	clockCtx.closePath();
	clockCtx.fill();

	clockCtx.beginPath();
	clockCtx.fillStyle = "#285f83";
	clockCtx.arc(0, 0, 10, 0, Math.PI * 2);
	clockCtx.closePath();
	clockCtx.fill();

	clockCtx.beginPath();
	clockCtx.fillStyle = "#689fc3";
	clockCtx.arc(-25, -40, 10, 0, Math.PI * 2);
	clockCtx.closePath();
	clockCtx.fill();

	clockCtx.beginPath();
	clockCtx.fillStyle = "#689fc3";
	clockCtx.arc(25, -40, 10, 0, Math.PI * 2);
	clockCtx.closePath();
	clockCtx.fill();

	clockCtx.beginPath();
	clockCtx.fillStyle = "#4070a0";
	clockCtx.arc(0, 30, 20, -1.1 * Math.PI, -1.9 * Math.PI, true);
	clockCtx.closePath();
	clockCtx.fill();

	clockCtx.fillStyle = "#78afd3";

	clockCtx.beginPath();
	clockCtx.fillStyle = "#689fc3";
	clockCtx.arc(-85, -85, 15, 0, Math.PI * 2);
	clockCtx.closePath();
	clockCtx.fill();

	clockCtx.beginPath();
	clockCtx.fillStyle = "#689fc3";
	clockCtx.arc(85, -85, 15, 0, Math.PI * 2);
	clockCtx.closePath();
	clockCtx.fill();

	for (var i = 0; i < 4; i++) {
		clockCtx.save();
		clockCtx.beginPath();
		clockCtx.rotate(i * Math.PI * 2 / 4);
		clockCtx.arc(0, -100, 6, 0, 2 * Math.PI);
		clockCtx.closePath();
		clockCtx.fill();
		clockCtx.restore();
	}
	clockCtx.lineWidth = 0.5;
	clockCtx.strokeStyle = "#326689";
	for (var i = 0; i < 60; i++) {
		if (i % 5 === 0) {
			continue;
		}
		clockCtx.save();
		clockCtx.rotate(i * Math.PI * 2 / 60);
		clockCtx.beginPath();
		clockCtx.moveTo(0, -101);
		clockCtx.lineTo(0, -93);
		clockCtx.closePath();
		clockCtx.stroke();
		clockCtx.restore();
	}
	for (var i = 0; i < 12; i++) {
		if (i % 3 === 0) {
			continue;
		};
		clockCtx.save();
		clockCtx.rotate(i * Math.PI * 2 / 12);
		clockCtx.beginPath();
		clockCtx.moveTo(0, -101);
		clockCtx.lineTo(0, -85);
		clockCtx.closePath();
		clockCtx.stroke();
		clockCtx.restore();

	}
	clockCtx.strokeStyle = "#164671";
	clockCtx.lineWidth = 2;
	clockCtx.lineCap = 'round';
	clockCtx.save();
	clockCtx.beginPath();
	clockCtx.rotate((hour+(minute/60)+(second/3600))*2*Math.PI/12);
	clockCtx.moveTo(0,0);
	clockCtx.lineTo(0,-40);
    clockCtx.closePath();
    clockCtx.stroke();
    clockCtx.restore();

    clockCtx.strokeStyle = "#164671";
	clockCtx.lineWidth = 2;
	clockCtx.lineCap = 'round';
	clockCtx.save();
	clockCtx.beginPath();
	clockCtx.rotate((minute+(second/60))*2*Math.PI/60);
	clockCtx.moveTo(0,0);
	clockCtx.lineTo(0,-65);
    clockCtx.closePath();
    clockCtx.stroke();
    clockCtx.restore();

     clockCtx.strokeStyle = "#164671";
	clockCtx.lineWidth = 2;
	clockCtx.lineCap = 'round';
	clockCtx.save();
	clockCtx.beginPath();
	clockCtx.rotate(second*2*Math.PI/60);
	clockCtx.moveTo(0,0);
	clockCtx.lineTo(0,-80);
    clockCtx.closePath();
    clockCtx.stroke();
    clockCtx.restore();
    clockCtx.strokeStyle = "#689fc3";
	clockCtx.fillStyle = "#689fc3";

    bai(0,100,0,90,amp);

	clockCtx.restore();



}
function bai(sx,sy,tx,ty,rat){
	clockCtx.save();
	clockCtx.translate(sx,sy);
	clockCtx.rotate(rat);
	clockCtx.beginPath();
	clockCtx.moveTo(0,0);
	clockCtx.lineTo(tx,ty);
	clockCtx.closePath();
	clockCtx.stroke();
	clockCtx.beginPath();
	clockCtx.arc(tx,ty,15,0,Math.PI *2)
	clockCtx.closePath();
	clockCtx.fill();
	clockCtx.restore();
}