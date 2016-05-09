/**customHotKeys*/
var initGlobalHotKey=function(){
	addKey('return', submit);
	addKey('alt+f5',refresh);
	addKey('alt+f1',help);
	addKey('alt+f2',modifyPwd);
	addKey('alt+s',coachShow);
	addKey('alt+n',memberRegist);
	addKey('alt+r',stats);
	addKey('alt+c',lessonMng);
};

/**
 * 菜单导航页热键
 */
var hotkeysNavPage=function(){
	addKey('home',home);
	addKey('alt+0',gohistory);
	addKey('alt+1',linkHref1);
	addKey('alt+2',linkHref2);
	addKey('alt+3',linkHref3);
	addKey('alt+4',linkHref4);
	addKey('alt+5',linkHref5);
	addKey('alt+6',linkHref6);
	addKey('alt+7',linkHref7);
	addKey('alt+8',linkHref8);
	addKey('alt+9',linkHref9);
};
/**
 * 菜单导航页热键
 */
var hotkeysContentPage=function(){
	addKey('home',home);
};
/*************热键封装***************/
var modifyPwd=function(){
	autoSizeDialog('修改密码','sys/pwdModify.do?id='+sysUserId,600,350);
};
var gohistory=function(){
	history.back(-1);
};
var linkHref1=function(){
	linkTopage(1);
};
var linkHref2=function(){
	linkTopage(2);
};
var linkHref3=function(){
	linkTopage(3);
};
var linkHref4=function(){
	linkTopage(4);
};
var linkHref5=function(){
	linkTopage(6);
};
var linkHref6=function(){
	linkTopage(6);
};
var linkHref7=function(){
	linkTopage(7);
};
var linkHref8=function(){
	linkTopage(8);
};
var linkHref9=function(){
	linkTopage(9);
};
var linkTopage=function(index){
	if($('#quickNav_'+index)&&
			$('#quickNav_'+index).attr('href')){
		location.href = $('#quickNav_'+index).attr('href');
	}
	
};
var home=function(){
	location.href=basePath+"home.do";
};
var addKey=function(keyName,keyFunc){
	 $hotKeys.add(keyName,keyFunc);
};
var coachShow=function(){
	window.open(basePath+"coach/show.do");
};
var lessonMng=function(){
	addTab('lessonMng','开课管理','coach/lessonMng.do');
};
var memberRegist=function(){
	addTab('appendMember','会籍注册','member/append.do');
};
var stats=function(){
	addTab('swipe','会籍刷卡','swipe.do');
};

var refresh=function(){
	var a = $('.refresh');
	var url = a.attr('href');
	if(url){
		window.location=url;
	}
	
};

var submit =function(){
	var btn = $('.submit');
	if(btn&&btn.length>0){
		btn[0].click();
	}
	var chur = $('#chur');
	if(chur){
		chur.click();
	}
	if($('#swipeConfirmBtn')){
		$('#swipeConfirmBtn').click();
	}
};

var help=function(){
	if(addTab!='undefined'){
		addTab('help','使用帮助','help.do');
	}
};
