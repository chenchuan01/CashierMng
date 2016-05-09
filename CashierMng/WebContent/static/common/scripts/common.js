/**common*/
/**
 * import
 */
var $import=function(file){ 
	if ( file.match(/.js$/)){  
	    document.write('<script type="text/javascript" src="' + file + '"></script>'); 
	}else{ 
	    document.write('<style type="text/css">@import "' + file + '" ;</style>'); 
	}
};
/**
 * 禁用按钮
 */
var $btnDisable=function(selector){
	if(!selector){
		selector='.submit';
	}
	$(selector).addClass('disabled');
	$(selector).attr('disabled','disabled');
	
};
var $btnEnable=function(selector){
	if(!selector){
		selector='.submit';
	}
	$(selector).removeClass('disabled');
	$(selector).removeAttr('disabled');
};
function cleanFormById(formId){
	if(formId){
		var selector=formId+' input[name],'+
		formId+' textare[name],'+
		formId+' select[name]';
		$(selector).each(function(){$(this).val('');});
	}
}
/**
 * jsonObjToMap
 */
var $jsonObjToMap=function(jsonObj){
	var map = {};
	for(var item in jsonObj){
		map[item]=jsonObj[item];
	}
	return map;
};
/**
 * isMapNull
 */
var $isMapNull = function(dataMap,filed){
	return (dataMap[filed]==null||dataMap[filed]==''||dataMap[filed]=='null')&&dataMap[filed]!=0;
};
/**
 * 通过处理item属性值，返回映射数据(包含情况xx;xx.xx;xx,xx.xx)
 */
var $getDataFiled=function(dataMap,filed){
	var fileds = filed.split(FILEDS_SPLIT);
	if(fileds.length<=1){
		return $singledData(dataMap,fileds[0]);
	}else{
		return $multipleData(dataMap,fileds);
	}
};
/**
 * 单个属性，返回数据(xx;xx.xx)
 */
var $singledData= function(dataMap,filed){
	//single filed
	
	//xx.xx
	if(filed!=null&&filed.indexOf(FILED_SPLIT)>0){
		var fileds = filed.split(FILED_SPLIT);
		var tempMap = dataMap;
		for(var i =0;i<fileds.length;i++){
			var tempfiled = fileds[i];
			if($isMapNull(tempMap,tempfiled)){
				return NONE_VAL_FLAG;
			}
			tempMap = $getDataVal(tempMap, tempfiled);
		}
		return tempMap;
	}
	//xx
	else{
		return $isMapNull(dataMap,filed)?NONE_VAL_FLAG:$getDataVal(dataMap,filed);
	}
	
}; 
/**
 * 获得属性值
 */
var $getDataVal=function(dataMap,filed){
	//特殊处理会员卡类型和赠送会籍单位
	if(filed!=null&&filed!=""){
		if(specialFileds.type==filed){
			var type = dataMap[filed];
			return g_cardType[type];
		}else if(specialFileds.paymetric==filed){
			return g_dateMetric[dataMap[filed]];
		}else if(specialFileds.givemetric==filed){
			return g_dateMetric[dataMap[filed]];
		}else if(specialFileds.paytype==filed){
			$('input[name="paytype"]').removeAttr('checked');
			var selecter = 'input[name="paytype"]';
			var val = dataMap[filed];
			$(selecter).each(function(){
				if($(this).val()==val)
					$(this).attr('checked','checked');
			});
		}else if(specialFileds.timeindex==filed){
			var timeArry = dataMap[filed];
			var timeIndexs = "";
			for (var int = 0; int < timeArry.length; int++) {
				if(int==timeArry.length-1){
					timeIndexs=timeIndexs+timeIndexMap[timeArry[int]];
				}else{
					timeIndexs=timeIndexs+timeIndexMap[timeArry[int]]+",";
				}
				
			}
			return timeIndexs;
		}else if(specialFileds.weekday==filed){
			var weekArry = dataMap[filed];
			var weekDays = "";
			for (var int = 0; int < weekArry.length; int++) {
				if(int==weekArry.length-1){
					weekDays=weekDays+weekDayMap[weekArry[int]];
				}else{
					weekDays=weekDays+weekDayMap[weekArry[int]]+",";
				}
			}
			return weekDays;
		}
	}
	return dataMap[filed];
};
/**
 * 多个属性，返回组合数据(xx+xx;xx.xx+xx.xx)
 */
var $multipleData=function(dataMap,fileds){
	var infoArray = [];
	for(var index=0;index<fileds.length;index++){
		infoArray[index]=$singledData(dataMap, fileds[index]);
	}
	var groupInfo = "";
	for(var index=0;index< infoArray.length;index++){
		groupInfo = groupInfo +infoArray[index];
	}
	return groupInfo;
};
/**
 * 根据信息类型,回填信息数据
 */
var commFillInfo = function(dataMap,selector,type){
	$(selector).each(function(){
		var showFiled = $(this);
		var itemFileds = showFiled.attr('item');
		if(type==infoType.val){
			showFiled.val($getDataFiled(dataMap,itemFileds));
		}else if(type==infoType.text){
			showFiled.text($getDataFiled(dataMap,itemFileds));
		}else if(type==infoType.src){
			var orginalSrc=showFiled.attr('src');
			orginalSrc = orginalSrc.replace('#src',$singledData(dataMap,itemFileds));
			showFiled.attr('src',orginalSrc);
		}else if(type = infoType.radio){
			var checkVal = $getDataFiled(dataMap,itemFileds);
			var radios = $('input[type="radio"]');
			radios.removeAttr('checked');
			for (var int = 0; int < radios.length; int++) {
				if($(radios[int]).val()==checkVal){
					$(radios[int]).attr('checked','checked');
				}
			}
		}
	});
};
/**自定义热键*/
$import(basePath+'static/common/scripts/util/customHotKeys.js');
/**时间日期控件*/
$import(basePath+'static/common/scripts/util/dateTimePicker.js');
/**分步表单封装*/
$import(basePath+'static/common/scripts/util/stepForm.js');
/**Ajax 封装*/
$import(basePath+'static/common/scripts/util/ajax.js');
/**自定义验证 封装*/
$import(basePath+'static/common/scripts/util/customValid.js');
/**照片保存 封装*/
$import(basePath+'static/common/scripts/util/photoSave.js');
/**对话框、提示框 封装*/
$import(basePath+'static/common/scripts/util/dialogHintWin.js');
/**people信息查询 封装*/
$import(basePath+'static/common/scripts/util/queryPeople.js');
/**页面初始化 封装*/
$import(basePath+'static/common/scripts/util/loadPage.js');

/************Test DATA**************/
var showTest=function(){
	$(".dataTest").toggle();
};
/************Parameter DATA**************/
function getParams(formId){
	var params={};
	if(formId){
		$(formId+' input[name],'+formId+' textarea[name],'+formId+' select[name]').each(function(){
			var name =$(this).attr('name');
			var value =$(this).val();
			if(name!='undefined'&&value!='undefined'){
				if($(this).attr('type')!='checkbox'){
					params[name]=value;
				}
				
			}
		});
		$(formId+' input[type="checkbox"]:checked,'+formId+' input[type="radio"]:checked').each(function(){
			params[$(this).attr('name')]=$(this).val();
		});
	}else{
		$('input[name],textarea[name],select[name]').each(function(){
			var name =$(this).attr('name');
			var value =$(this).val();
			if(name!='undefined'&&value!='undefined'){
				params[name]=value;
			}
		});
		$('input[type="checkbox"]:checked,input[type="radio"]:checked').each(function(){
			params[$(this).attr('name')]=$(this).val();
		});
	}
	return params;
}
/************Save DATA**************/
var saveInfo=function(formId,saveFun){
	valid(formId, saveFun);
};
var exportFile=function(url,obj){
	url = url.replace('#p1',$('#exportStart').val()).replace('#p2',$('#exportEnd').val());
	window.location.href=url;
};
var doSaveInfo =function(){
	var params = getParams();
	ajaxLoad(getUrl(), params);
};

var save=function(formId){
	var params = getParams(formId);
	ajaxLoad(getUrl(formId),params,function(){
		cfm('保存修改成功！是否关闭对话框？',function(){
			$('#formModal').modal('toggle');
			page(1);
		});
	});
};
var savePwd=function(formId){
	var params = getParams(formId);
	ajaxLoad(getUrl(formId),params);
};
/************DELETE DATA**************/
var deleteUrl;
var deleteItem=function(url){
	deleteUrl=url;
	cfm("确认删除此条信息？",doDelete);
};
var doDelete=function(){
	ajaxLoad(deleteUrl, {}, function(){page(1);});
};
