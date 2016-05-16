window.onload = function(){
	var box = document.getElementById('container');
	var imgs = box.getElementsByTagName('img');
	var imgWidth = imgs[0].offsetWidth;
	var exposeWidth = 160;
	var boxWidth = 	imgWidth + (imgs.length - 1) * exposeWidth;
	box.style.width =  boxWidth + 'px';
	function setPos(){
		for(var i=1,len = imgs.length;i<len;i++){
			imgs[i].style.left = imgWidth + (i - 1) * exposeWidth + 'px';
		}
	}
	setPos();
	var translate = imgWidth - exposeWidth;
	for(var i=0,len = imgs.length;i<len;i++){
		(function(i){
			imgs[i].onmouseover = function(){
				setPos();
				for(var j=1;j<=i;j++){
					imgs[j].style.left = parseInt(imgs[j].style.left,10) - translate + 'px';
				}
			}
		})(i);
	}
}