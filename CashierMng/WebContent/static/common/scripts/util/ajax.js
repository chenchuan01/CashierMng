/**ajax*/
/*************Ajax封装***************/
var ajaxData = function(url,dataArry,sucfun,errFun){
	$.ajax({
		type:"POST",
		url:url,
		data:dataArry,
		dataType:"json",
		success:function(data){
			commonSuc(data,sucfun);
		},
		error:function(data){
			commonErr(data, errFun);
		}
	});
};
var ajaxHtml= function(url,dataArry,sucfun,errFun){
	$.ajax({
		type:"POST",
		url:url,
		data:dataArry,
		dataType:"html",
		success:function(data){
			var temp = data;
			try {
				temp=eval('('+data+')');
				if(temp.msg){
					error(temp.msg);
					return;
				}
			} catch (e) {
				commonSuc(data,sucfun);
				return;
			}
			commonSuc(data,sucfun);
			
		},
		error:function(data){
			commonErr(data, errFun);
		}
	});
};
var ajaxLoad = function(url,dataArry,sucfun,errFun){
	loadToggle();
	$.ajax({
		type:"POST",
		url:url,
		data:dataArry,
		dataType:"json",
		success:function(data){
			loadToggle();
			commonSuc(data,sucfun);
		},
		error:function(data){
			loadToggle();
			commonErr(data, errFun);
		}
	});
	
};
var ajaxFile=function(url,fileId,dataArray,sucfun,errFun){
	var peopleId = $('#peopleId').val();
	loadToggle();
	$.ajaxFileUpload({
		    type:"POST",
            url: url+"?id="+peopleId, 
            secureuri: false, 
            fileElementId:fileId,
            dataType: 'text',
            success: function (data,status){
            	loadToggle();
            	var rslt = eval("("+data+")");
            	commonSuc(rslt[0], sucfun);
            },
            error: function (data,status, e){
            	loadToggle();
            	commonErr(data, errFun);
            }
        }
    );
};
var commonSuc=function(data,sucfun){
	if(data.msg){
		error(data.msg);
		return;
	}
	if(typeof(sucfun)=="function"){
		sucfun(data);
	}else{
		sucInfoBox();
	}
	refreshCurPage();
};
var commonErr=function(data,errFun){
	if(typeof(errFun)=="function"){
		errFun(data);
		return;
	}
	data = eval(data);
	if(data&&data.msg){
		error(data.msg);
	}else{
		errorInfoBox();
	}
	
};
var loadToggle=function(){
	$('#load').toggle(50);
	
};
var refreshCurPage=function(){
	var pageId =getParentPageId();
	if(pageId){
		var obj=window.parent.document.getElementById(pageId);
		if(obj&&obj.contentWindow){
			obj.contentWindow.location.reload(true);
		}
		
	}
	
};
function getUrl(formId){
	if(formId){
		return $(formId).attr('action');
	}
	return $('form[action]').first().attr('action');
}