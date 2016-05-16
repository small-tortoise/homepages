var can1;
var can2;
var ctx1;
var ctx2;
var backgroumdImage = new Image();
var w;
var h;
var lastTime;
var delatime;
var ane;
var fruit;
var bigFish;
var babyFish;
var bigFishTail = [];
var bigFishBody = [];
var bigFishBodyOrange = [];
var bigFishBodyblue = [];
var bigFishEye = [];
var babyFishTail = [];
var babyFishBody = [];
var babyFishEye = [];
var mouseX;
var mouseY;
var data;
var wave;
var halo;
var dust;
var dustPic = [];
document.body.onload = game;


function game() {
	init();
	lastTime = Date.now();
	gameLoop();

}

function init() {
	can1 = document.getElementById("canvas1"); //鱼，特效，漂浮物，
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext("2d");
	w = can2.width;
	h = can2.height;
	backgroumdImage.src = "src/background.jpg";
	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
	bigFish = new bigFishObj();
	bigFish.init();
	babyFish = new babyFishObj();
	babyFish.init();
	data = new dataObj();
	mouseX = can1.width * 0.5;
	mouseY = can1.height * 0.5;
	ctx1.font = '20px Verdana';
	ctx1.textAlign = 'center';
	can1.addEventListener("mousemove", mousemove, false);
	for (var i = 0; i < 8; i++) {
		bigFishTail[i] = new Image();
		bigFishTail[i].src = "src/bigTail" + i + ".png";
	}
	
	for (var i = 0; i < 2; i++) {
		bigFishEye[i] = new Image();
		bigFishEye[i].src = "src/bigEye" + i + ".png";
	}
	for (var i = 0; i < 8; i++) {
		babyFishTail[i] = new Image();
		babyFishTail[i].src = "src/babyTail" + i + ".png";
	}
	for (var i = 0; i < 20; i++) {
		babyFishBody[i] = new Image();
		babyFishBody[i].src = "src/babyFade" + i + ".png";
	}
	for (var i = 0; i < 8; i++) {
		bigFishBodyOrange[i] = new Image();
		bigFishBodyblue[i] = new Image();
		bigFishBodyOrange[i].src = "src/bigSwim" + i + ".png";
		bigFishBodyblue[i].src = "src/bigSwimBlue" + i + ".png";
	}
	for (var i = 0; i < 2; i++) {
		babyFishEye[i] = new Image();
		babyFishEye[i].src = "src/babyEye" + i + ".png";
	}
	wave = new waveObj();
	wave.init();
	halo = new haloObj();
	halo.init();
	dust = new dustObj();
	dust.init();
	for (var i = 0; i < 7; i++) {
		dustPic[i] = new Image();
		dustPic[i].src = "src/dust" + i + ".png";
	}


}

function gameLoop() {
	window.requestAnimFrame(gameLoop);
	var now = Date.now();
	delatime = now - lastTime;
	lastTime = now;
	if (delatime > 40) delatime = 40;
	background();
	ane.draw();
	fruit.draw();
	fruitMonitor();
	ctx1.clearRect(0, 0, w, h);
	bigFish.draw();
	babyFish.draw();
	bigFishFuritDistance();
	bigFishBabyFishDistance();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}

function mousemove(e) {
	if (!data.gameOver) {
		if (e.offsetX || e.layerX) {
			mouseX = e.offsetX == undefined ? e.layerX : e.offsetX;
			mouseY = e.offsetY == undefined ? e.layerY : e.offsetY;
		}

	}

}