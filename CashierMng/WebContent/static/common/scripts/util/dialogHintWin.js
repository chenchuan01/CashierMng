/**dialogHintWin*/
/*************窗口封装***************/


var smallSize=['300px','200px'];
var smallLangSize=['300px','500px'];
var middleSize=['600px','520px'];
var midlangSize=['700px','710px'];
var largeSize=['1200px','650px'];
var autoSizeWin = function(title,url,w,h){
	win(title, url, w+'px', h+'px');
};
var autoSizeDialog = function(title,url,w,h){
	winDialog(title, url, w, h);
};
var smallWin=function(title,url){
	win(title, url, smallSize[0], smallSize[1]);
};
var smallLangWin=function(title,url){
	win(title, url, smallLangSize[0], smallLangSize[1]);
};

var middleWin=function(title,url){
	win(title, url, middleSize[0], middleSize[1]);
};
var midlangWin=function(title,url){
	win(title, url, midlangSize[0], midlangSize[1]);
};
var largeWin=function(title,url){
	win(title, url, largeSize[0], largeSize[1]);
};
var winDialog=function(title,url,width,height){
	if(!title){
		title = "";
	}
	$.dialog({
        title: title,
        content: 'url:'+basePath+url,
        lock: true,
		width:width,
		height:height
	});
};
var win = function(title,url,width,height){
	if(!title){
		title = "";
	}
	var modalId = "#formModal";
	//title
	$(modalId+' .modal-title').text(title);
	//size
	$(modalId+' .modal-dialog').css('width',width);
	$(modalId+' .modal-dialog').css('min-height',height);
	//content
	ajaxHtml(url, {}, function(html){
		$(modalId+' .modal-body').html(html);
		$(modalId).modal('toggle');
	});
};
/*************提示框封装***************/

var authInfoBox = function(){
	 $('body').alert({ type:'primary' });
};
var sucInfoBox = function(){
	$('body').alert({ type:'success' });
};
var warnInfoBox = function(){
	$('body').alert({ type:'warning' });
};
var errorInfoBox = function(){
	$('body').alert({ type:'danger' });
};
var cfm=function(msg,sure,cancel){
	$('body').alert({
			type: 'info',
			content:msg,
			buttons: [{
				id: 'yes',
				name: '确定',
				callback: function () {
					sure();
				}
			}, {
				id: 'no',
				name: '取消',
				callback: function () {
					cancel();
				}
			}]
		});
};
var info=function(msg){
	$('body').alert({
			type: 'info',
			title:'提示信息',
			content:msg,
			buttons: [{
				id: 'yes',
				name: '关闭',
				callback: function () {
					$('.closed').click();
				}
			}]
		});
};
var error=function(msg){
	$('body').alert({
			type: 'danger',
			title:'系统信息',
			content:msg,
			buttons: [{
				id: 'yes',
				name: '关闭',
				callback: function () {
					$('.closed').click();
				}
			}]
		});
};