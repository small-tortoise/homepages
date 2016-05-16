var babyFishObj = function() {
	this.x;
	this.y;
	this.angle;
	this.babyFishTailTimer = 0;
	this.babyFishTailCount = 0;
	this.babyFishbodyTimer = 0;
	this.babyFishBodyCount = 0;
	this.babyFishEyeTimer = 0;
	this.babyFishEyeCount = 0;
	this.babyFishEyeInterval = 1000;
};
babyFishObj.prototype.init = function() {
	this.x = w * 0.5;
	this.y = h * 0.5;
	this.angle = 0;
};
babyFishObj.prototype.draw = function() {
	this.x = lerDistance(bigFish.x, this.x, 0.98);
	this.y = lerDistance(bigFish.y, this.y, 0.98);
	delatY = bigFish.y - this.y;
	delatX = bigFish.x - this.x;
	var deta = Math.atan2(delatY, delatX) + Math.PI;
	this.angle = lerpAngle(deta, this.angle, 0.6);
	this.babyFishTailTimer += delatime;
	if (this.babyFishTailTimer > 50) {
		this.babyFishTailCount = (this.babyFishTailCount + 1) % 8;
		this.babyFishTailTimer %= 50;
	}
	this.babyFishbodyTimer += delatime;
	if (this.babyFishbodyTimer > 300) {
		this.babyFishBodyCount = this.babyFishBodyCount + 1;
		this.babyFishbodyTimer %= 300;
		if (this.babyFishBodyCount > 19) {
			this.babyFishBodyCount = 19;
			data.gameOver = true;

		}

	}
	this.babyFishEyeTimer += delatime;
	if (this.babyFishEyeTimer > this.babyFishEyeInterval) {
		this.babyFishEyeCount = (this.babyFishEyeCount + 1) % 2;
		this.babyFishEyeTimer %= this.babyFishEyeInterval;
		if (this.babyFishEyeCount == 0) {
			this.babyFishEyeInterval = Math.random() * 1500 + 2000;
		} else {
			this.babyFishEyeInterval = 200;
		}
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var babyFishTailCount = this.babyFishTailCount;
	var babyFishBodyCount = this.babyFishBodyCount;
	var babyFishEyeCount = this.babyFishEyeCount;
	ctx1.drawImage(babyFishTail[babyFishTailCount], -babyFishTail[babyFishTailCount].width * 0.5 + 23, -babyFishTail[babyFishTailCount].height * 0.5);
	ctx1.drawImage(babyFishBody[babyFishBodyCount], -babyFishBody[babyFishBodyCount].width * 0.5, -babyFishBody[babyFishBodyCount].height * 0.5);
	ctx1.drawImage(babyFishEye[babyFishEyeCount], -babyFishEye[babyFishEyeCount].width * 0.5, -babyFishEye[babyFishEyeCount].height * 0.5);
	ctx1.restore();
}