window.onload = function() {
	var btn = document.getElementById('btn');
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;
	window.onscroll = function() {
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (osTop >= clientHeight) {
			btn.style.display = 'block';
		}else{
			btn.style.display = 'none';
		}
		if (!isTop) {
			clearInterval(timer);
		}
		isTop = false;
	}
	btn.onclick = function() {
		timer = setInterval(function() {
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var isPeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + isPeed;
			

			isTop = true;
			if (osTop == 0) {
				clearInterval(timer);
			}
		}, 30);

	}
}
