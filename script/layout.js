window.onload = function() {
  waterfall('main', 'box');
 
}

function waterfall(parent, box) {
  //将main下的所有class为box元素的盒子取出来;
  var oParent = document.getElementById(parent);
  var oBoxs = getByClass(oParent, box);
  //计算整个页面的列数（页面宽/box的宽）
  var oBoxW = oBoxs[0].offsetWidth;
  var cols =Math.floor(document.documentElement.clientWidth / oBoxW);
  //设置main的宽度;
  oParent.style.cssText = 'width:' +oBoxW*cols +'px;margin:0 auto';
  var hArr = [];
  for(var i=0;i<oBoxs.length;i++){
    if(i<cols){
      hArr.push(oBoxs[i].offsetHeight);
    }else{
      var minH = Math.min.apply(null,hArr);
      var index = getMinhIndex(hArr,minH);
      oBoxs[i].style.position = "absolute";
      oBoxs[i].style.top = minH + 'px';
      oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
      hArr[index] += oBoxs[i].offsetHeight;

    }
  }
}

//根据class获取元素
function getByClass(parent, clsName) {
  var boxArr = new Array(); //储存class名为box的盒子的数组；
  oElements = parent.getElementsByTagName('*');
  for (var i = 0; i < oElements.length; i++) {
    if (oElements[i].className == clsName) {
      boxArr.push(oElements[i]);

    }
  }
  return boxArr;
}

function getMinhIndex(arr,vla){
  for(var i in arr){
    if(arr[i] == vla){
      return i;
    }
  }
}
//检测是否具备了加载滚动数据库块的条件
function checkScrollSlide(){
  var oParent = document.getElementById('main');
  var oBoxs = getByClass(oParent,'box');
  var lastBoxH = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.body.clientHeight || document.documentElement.clientHeight;
  return (lastBoxH<scrollTop+height)?true:false;
}