window.onload = function (){
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	var skyStyle = context.createRadialGradient(canvas.width/2,canvas.height,0,canvas.width/2,canvas.height,canvas.height);
	skyStyle.addColorStop(0.0,'#035');
	skyStyle.addColorStop(1.0,'#26292c');
	context.fillStyle = skyStyle;
	context.fillRect(0,0,canvas.width,canvas.height);
	for(var i=0;i<200;i++){
		var r = Math.random() * 5 + 5;
		var x = Math.random() * canvas.width;
		var y = Math.random() * canvas.height * 0.65;
		var a  = Math.random() * 360;
		drawStar(context,x,y,r,r/2,a);
	}
	drawLand(context);
	fillMoon(context, 2, 800, 150, 80, 20,'#fd971e');
	
}
function drawLand(ctx){
	ctx.save();
	ctx.moveTo(0,450);
	ctx.bezierCurveTo(440,300,660,700,canvas.width,450);
	ctx.lineTo(canvas.width,700);
	ctx.lineTo(0,700);
	ctx.closePath();
	var lineStyle = ctx.createLinearGradient(0,800,0,0);
	lineStyle.addColorStop(0.0,'#628f06');
	lineStyle.addColorStop(1.0,'#344c02');
	ctx.fillStyle = lineStyle;
	ctx.fill();
	ctx.restore();
}
function drawStar(ctx,x,y,outerR,innerR,rot){
	ctx.beginPath();
	for(var i=0;i<5;i++){
		context.lineTo(Math.cos((18 + i * 72 - rot) / 180 * Math.PI) * outerR + x ,
			           -Math.sin((18 + i * 72 - rot) / 180 * Math.PI) * outerR + y);
		context.lineTo(Math.cos((54 + i * 72 - rot) / 180 * Math.PI) * innerR + x ,
			           -Math.sin((54 + i * 72 - rot) / 180 * Math.PI) * innerR + y);
	}
	ctx.closePath();
	ctx.fillStyle = '#e6db74';
	ctx.strokeStyle = '#e6db74';
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.shadowColor = 'rgba(0,0,0,0.2)';
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 5;
	ctx.fill();
	ctx.stroke();

}

function fillMoon(ctx,d,x,y,R,rot,fillColor){
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate( Math.PI / 180 * rot);
	ctx.scale(R,R);
	pathMoon(ctx,d);
	ctx.fillStyle = fillColor || '#fd971e';
	ctx.shadowColor = 'rgba(0,0,0,0.3)';
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY =2;
	ctx.shadowBlur = 5;
	ctx.fill();
	ctx.restore();
}
function pathMoon(ctx,d){
	ctx.beginPath();
	ctx.arc(0,0,1,Math.PI * 0.5,Math.PI * 1.5,true);
	ctx.moveTo(0,-1);
	ctx.arcTo(d,0,0,1,1 * dis(0,-1,d,0) / (d-0));
	ctx.closePath();
}
function dis(x1,y1,x2,y2){
	return Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2) *  (y1-y2) );
}
