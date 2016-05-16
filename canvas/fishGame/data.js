var dataObj = function() {
	this.fruitNum = 0;
	this.double = 1;
	this.gameOver = false;
	this.score = 0;
	this.alpha = 0;
}
dataObj.prototype.draw = function() {
	var w = can1.width;
	var h = can1.height;
	ctx1.save();
	ctx1.fillStyle = "#fff";
	ctx1.shadowColor = "#fff";
	ctx1.shadowBlur = 5;
	if (this.gameOver) {
		this.alpha += delatime * 0.0005;
		if (this.alpha > 1) {
			this.alpha = 1;
		}
		ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
		ctx1.fillText("GameOver ", w * 0.5, h * 0.5);
	}
	ctx1.fillText("SCORE:" + this.score, w * 0.5, h - 80);
	ctx1.restore();
}
dataObj.prototype.addScore = function() {
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;


}