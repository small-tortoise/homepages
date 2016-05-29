window.onload = function() {
	var oSidebar = getId('sidebar');
	var oLi = oSidebar.getElementsByTagName('li');
	var oArrow = getId('arrow');
	var oContainer = getId('container');
	var oSection = oContainer.getElementsByTagName('section');
	var oMenu = getByClass(oContainer, 'menu');
	var oMli = oContainer.getElementsByTagName('li');
	var iNow = 0;
	var iContentHeight = 0;
	var oSpinner = getByClass(oContainer, 'spinner');
	var oinfo = getByClass(oContainer, 'info');
	var oImg = getByClass(oContainer, 'img');
	var oinfoback = getByClass(oContainer, 'info-back');

	bindNav();
	contentAuto();
	mouseWheel();

	function bindNav() {
		oArrow.style.left = oLi[0].offsetLeft + oLi[0].offsetWidth / 2 - oArrow.offsetWidth / 2 + 'px';
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmousedown = function() {
				prevIndex = iNow;
				iNow = this.index;
				toMove(this.index);
			};
		}
		for (var i = 0; i < oMli.length; i++) {
			oMli[i].index = i;
			oMli[i].onclick = function() {
				prevIndex = iNow;
				iNow = this.index;
				toMove(this.index);
			}
		}
	}

	function toMove(index) {
		oArrow.style.left = oLi[index].offsetLeft + oLi[index].offsetWidth / 2 - oArrow.offsetWidth / 2 + 'px';
		oContainer.style.top = -index * iContentHeight + 'px';
		for (var i = 0; i < oMli.length; i++) {
			oMli[i].className = '';
		}
		oMli[index].className = 'active';
		if( cjAnimate[index].inAn ){
			cjAnimate[index].outAn();
		}
		if( cjAnimate[prevIndex].outAn ){
			cjAnimate[prevIndex].inAn();
		}

	}

	function mouseWheel() {
		var mouseBtn = true;
		var timer = null;
		if (oContainer.addEventListener) {
			oContainer.addEventListener('DOMMouseScroll', function(event) {
				var event = event || window.event;
				clearTimeout(timer);
				timer = setTimeout(function() {
					toChange(event);
				}, 200)
			}, false)
		}
		oContainer.onmousewheel = function(event) {
			var event = event || window.event;
			clearTimeout(timer);
			timer = setTimeout(function() {
				toChange(event);
			}, 200)
		}

		function toChange(event) {
			if (event.detail) {
				mouseBtn = event.detail > 0 ? true : false;
			} else {
				mouseBtn = event.wheelDelta < 0 ? true : false;
			}
			if ((iNow == 0 && !mouseBtn) || (iNow == oMli.length - 1 && mouseBtn)) {
				return
			}
			prevIndex = iNow;
			if (mouseBtn) {
				if (iNow != oMli.length - 1) {
					iNow++;
				}
				toMove(iNow);
			} else {
				if (iNow != 0) {
					iNow--;
				}
				toMove(iNow);
			}
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				return false;
			}
		}


	}

	function contentAuto() {
		iContentHeight = viewWidth();
		oContainer.style.height = iContentHeight + 'px';
		for (var i = 0; i < oSection.length; i++) {
			oSection[i].style.height = iContentHeight + 'px';
		}
	}

	function viewWidth() {
		return window.innerHeight || document.documentElement.clientHeight;
	}

	function getId(id) {
		return document.getElementById(id);
	}

	function getByClass(parent, classname) {
		var elements = parent.getElementsByTagName('*');
		var arr = [];
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].className == classname) {
				arr.push(elements[i]);
			}
		}
		return arr;
	}

	
	var cjAnimate = [{
		inAn: function() {
			var oinfo = getByClass(oContainer, 'info')[0];
			var oSpinner = getByClass(oContainer, 'spinner')[0];
			setStyle(oSpinner,'transform','rotate(0deg)');
			oinfo.style.opacity = 0;
		},
		outAn: function() {
			var oinfo = getByClass(oContainer, 'info')[0];
			var oSpinner = getByClass(oContainer, 'spinner')[0];
			setStyle(oSpinner,'transform','rotate(180deg)');
			oinfo.style.opacity = 1;
		}
	}, {
		inAn: function() {
			var oImg =  getByClass(oContainer, 'img')[1];
			var oinfo = getByClass(oContainer, 'info')[1];
			setStyle( oImg,'transform','scale(1) translateX(0)');
			setStyle( oinfo,'transform','translateX(-100%)');
			oinfo.style.opacity = 0;
		},
		outAn: function() {
			var oImg =  getByClass(oContainer, 'img')[1];
			var oinfo = getByClass(oContainer, 'info')[1];
			setStyle(oImg,'transform','scale(0.5) translateX(100%)');
			setStyle(oinfo,'transform','translateX(0)');
			oinfo.style.opacity = 1;
		}
	}, {
		inAn: function() {
			var oImg =  getByClass(oContainer, 'img')[2];
			setStyle(oImg, 'transform', 'rotate(0deg)');
		},
		outAn: function() {
			var oImg =  getByClass(oContainer, 'img')[2];
			setStyle(oImg, 'transform', 'rotate(120deg)');
		}
	}, {
		inAn: function() {
			var oImg =  getByClass(oContainer, 'img')[3];
			setStyle(oImg, 'transform', 'rotate3d(0, 0, 0, 0deg)');
		},
		outAn: function() {
			var oImg =  getByClass(oContainer, 'img')[3];
			setStyle(oImg, 'transform', 'rotate3d(0, 1, 0, 180deg)');
		}
	}, {
		inAn: function() {
			var oImg =  getByClass(oContainer, 'img')[4];
			var oinfoback = getByClass(oContainer, 'info-back')[4];
			setStyle(oImg, 'transform', 'translate3d(0,0,0) rotate3d(0,0,0,0deg)');
			setStyle(oinfoback, 'transform', 'translate3d(0,0,-220px) rotate3d(1,0,0,90deg)');
			oImg.style.opacity = 1;
			oinfoback.style.visibility = 'hidden';
		},
		outAn: function() {
			var oImg =  getByClass(oContainer, 'img')[4];
			var oinfoback = getByClass(oContainer, 'info-back')[4];
			setStyle(oImg, 'transform', 'translate3d(0,280px,0) rotate3d(1,0,0,-90deg)');
			setStyle(oinfoback, 'transform', 'rotate3d(1,0,0,0deg)');
			oinfoback.style.visibility = 'visible';
			oImg.style.opacity = 0;
		}
	}];

	for(var i=0;i<cjAnimate.length;i++){
		cjAnimate[i].inAn();
	}
	cjAnimate[0].outAn();

	function setStyle(obj,attr,value){
		obj.style[attr] = value;
		obj.style['webkit'+attr.substring(0,1).toUpperCase() + attr.substring(1)] = value;
	}
}