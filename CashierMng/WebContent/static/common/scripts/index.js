var g_pagIndex = 1;

var indexInitFunc = function(){
	 //日历
    /*$("#datepicker").datepicker();*/
    //左边菜单
    $('.one').click(function () {
        $('.one').removeClass('one-hover');
        $(this).addClass('one-hover');
        $(this).parent().find('.kid').toggle();
    });
    //影藏菜单
    var l = $('.left_c');
    var r = $('.right_c');
    var c = $('.Conframe');
    var tb = $('#tab_menu');
    $('.nav-tip').click(function () {
        if (l.css('left') >= '0px') {
            l.animate({
                left: -300
            }, 550);
            r.animate({
                left:15
            }, 550);
            c.animate({
                left: 15
            }, 550);
            tb.animate({
            	left: 11
            }, 550);
            $(this).animate({
                "background-position-x": "-12"
            }, 300);
            $("#arrow").removeClass("glyphicon-chevron-left");
            $("#arrow").addClass("glyphicon-chevron-right");
        } else {
            l.animate({
                left: 0
            }, 550);
            r.animate({
                left: 235
            }, 550);
            c.animate({
                left: 235
            }, 550);
            tb.animate({
                left: 231
            }, 550);
            $(this).animate({
                "background-position-x": "0"
            }, 300);
            $("#arrow").removeClass("glyphicon-chevron-right");
            $("#arrow").addClass("glyphicon-chevron-left");
        };
    });
    //横向菜单
    $('.top-menu-nav li').click(function () {
        $('.kidc').hide();
        $(this).find('.kidc').show();
        
    });
    $('.kidc').bind('mouseleave', function () {
        $('.kidc').hide();
    }) ;
    //tabs init
    tab = new TabView( {
		containerId :'tab_menu',
		pageid :'page',
		cid :'tab_po',
		position :"top"
	});
    //欢迎页添加
    tab.add( {
		id :'tab1_id_index1',
		title :"首页",
		url :basePath+"home.do",
		isClosed :false
	});
};
var g_tb_index=1;
var addTab=function(id,title,url,canClose){
	if(g_tb_index>=12){
		return;
	}
	if('undefined'==canClose){
		canClose=true;
	}
	g_tb_index++;
	if(!id||""==id||null==id){
		id='tab_id_index'+g_tb_index;
	}
	var ifream = $('#page_'+id);
	if(ifream.attr('src')){
		return;
	}
	tab.add( {
		id :id,
		title :title,
		url :basePath+url,
		isClosed :canClose
	});
	
};
