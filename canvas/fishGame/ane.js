var aneObj = function() {
	this.rootX = []; //起始点的x坐标，起始点的y坐标为画布的高度，无需定义;
	this.headX = []; //海葵头部的x坐标，
	this.headY = []; //海葵头部的Y坐标;
	this.amp = []; //海葵摆动的振幅；
	this.angle = 0;
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.rootX[i] = i * 16 + Math.random() * 20;
		this.headX[i] = this.rootX[i];
		this.headY[i] = h - 250 + Math.random() * 50;
		this.amp[i] = Math.random() * 50 + 50;
	}
}
aneObj.prototype.draw = function() {
	this.angle += delatime * 0.0008;
	var l = Math.sin(this.angle);
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	ctx2.save();
	ctx2.lineWidth = 20;
	ctx2.globalAlpha = "0.6";
	for (var i = 0; i < this.num; i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.rootX[i], can2.height);
		this.headX[i] = this.rootX[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.rootX[i], can2.height - 150, this.headX[i], this.headY[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}