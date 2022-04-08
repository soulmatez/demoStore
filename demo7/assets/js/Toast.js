let Toast = {
	renderConfig(Obj){
		let _wxObj = Obj.wxMsg;
		let _clearFixNode =  Obj.clearFixNode;
	    for(let _key in _wxObj){
			_wxObj[_key] ? $("#"+_key).html(_wxObj[_key]) : $("#"+_key).remove()
	    }
		// 解决问题吸顶Bug
		if(_clearFixNode.isclear){
			let num = parseInt($(".fixBox").css("height")) + _clearFixNode.offset + 'px';
			$("." + _clearFixNode.ParentNodeClass).css("padding-top",num);
			$("." + _clearFixNode.ChildNodeClass).css("top",num)
		}
		
	}
}

// 弹出弹窗
$("#pointButton").click(function(){
	// initCSS
	var windowHeight = $(window).height();//获取当前窗口高度
	let ScrollTop = getScrollTop();
	$(".toast").css("top",ScrollTop + windowHeight / 2);
	
	copy($("#tel").html());
	$("#opacBox").css("display","block")
})

// 关闭弹窗
$("#closeButton").click(function(){
	$("#opacBox").css("display","none")
})

// 复制内容到粘贴板
function copy(text) {
    var input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var res = document.execCommand('copy');
    document.body.removeChild(input);
    return res;
}

// h5打开微信
function testApp(url) { 
	var timeout, t = 1000, hasApp = true; 
	setTimeout(function () { 
		 if (!hasApp) { 
			//没有安装微信
			 var r=confirm("您没有安装微信，请先安装微信!");
			 if (r==true){
				 location.href="http://weixin.qq.com/"
			 }
		 }else{
			 //安装微信
		}
		 document.body.removeChild(ifr); 
	}, 2000) 

	window.location.href = 'weixin://';
}

// 获取滚动条的高度
function getScrollTop() {
    var scroll_top = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scroll_top = document.body.scrollTop;
    }
    return scroll_top;
}