var dustObj = function() {
	this.x = [];
	this.y = [];
	this.amp = [];
	this.No = [];
	this.angle;
}
dustObj.prototype.num = 30;
dustObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = Math.random() * can1.width;
		this.y[i] = Math.random() * can1.height;
		this.amp[i] = 20 + Math.random() * 25;
		this.No[i] = Math.floor(Math.random() * 7);

	}
	this.angle = 0;
}
dustObj.prototype.draw = function() {
	this.angle += delatime * 0.0008;
	var l = Math.sin(this.angle);
	for (var i = 0; i < this.num; i++) {
		var no = this.No[i];
		ctx1.drawImage(dustPic[no],this.x[i] + l * this.amp[i],this.y[i]);
	}
}