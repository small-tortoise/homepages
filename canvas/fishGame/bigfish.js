 var bigFishObj = function() {
 	this.x;
 	this.y;
 	this.bigFishTailTimer = 0;
 	this.bigFishTailCount = 0;
 	this.bigFishBodyCount = 0;
 	this.bigFishBodyTimer = 0;
 	this.bigFishEyeTime = 0;
 	this.bigFishEyeCount = 0;
 	this.bigFishEyeInterval = 1000;
 	this.angle;


 }
 bigFishObj.prototype.init = function() {
 	this.x = w * 0.5;
 	this.y = h * 0.5;
 	this.angle = 0;

 }
 bigFishObj.prototype.draw = function() {
 	this.x = lerDistance(mouseX, this.x, 0.9);
 	this.y = lerDistance(mouseY, this.y, 0.9);
 	var delatY = mouseY - this.y;
 	var delatX = mouseX - this.x;
 	var beta = Math.atan2(delatY, delatX) + Math.PI;
 	this.angle = lerpAngle(beta, this.angle, 0.6);
 	this.bigFishTailTimer += delatime;
 	if (this.bigFishTailTimer > 50) {
 		this.bigFishTailCount = (this.bigFishTailCount + 1) % 8;
 		this.bigFishTailTimer %= 50;
 	}
 	this.bigFishEyeTime += delatime;
 	if (this.bigFishEyeTime > this.bigFishEyeInterval) {
 		this.bigFishEyeCount = (this.bigFishEyeCount + 1) % 2;
 		this.bigFishEyeTime %= this.bigFishEyeInterval;
 	}
 	if (this.bigFishEyeCount == 0) {
 		this.bigFishEyeInterval = Math.random() * 1500 + 2000;
 	} else {
 		this.bigFishEyeInterval = 200;
 	}

 	ctx1.save();
 	ctx1.translate(this.x, this.y);
 	ctx1.rotate(this.angle);
 	var bigFishTailCount = this.bigFishTailCount;
 	var bigFishBodyCount = this.bigFishBodyCount;
 	var bigFishEyeCount = this.bigFishEyeCount;
 	if (data.double == 1) {
 		ctx1.drawImage(bigFishBodyOrange[bigFishBodyCount], -bigFishBodyOrange[bigFishBodyCount].width * 0.5, -bigFishBodyOrange[bigFishBodyCount].height * 0.5);
 	} else {
 		ctx1.drawImage(bigFishBodyblue[bigFishBodyCount], -bigFishBodyblue[bigFishBodyCount].width * 0.5, -bigFishBodyblue[bigFishBodyCount].height * 0.5);
 	}

 	ctx1.drawImage(bigFishTail[bigFishTailCount], -bigFishTail[bigFishTailCount].width * 0.5 + 23, -bigFishTail[bigFishTailCount].height * 0.5);

 	ctx1.drawImage(bigFishEye[bigFishEyeCount], -bigFishEye[bigFishEyeCount].width * 0.5, -bigFishEye[bigFishEyeCount].height * 0.5);

 	ctx1.restore();
 }