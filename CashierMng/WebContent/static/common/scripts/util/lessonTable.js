$(function(){
	initLessonTable();
	initLessonData();
});
var initLessonData = function(){
	ajaxData('lesson/lessonAll.do',{},fillLesson);
};
var fillLesson = function(data){
	if(data!=null){
		var lessonVoList = data;
		for(var index in lessonVoList){
			var lessonVo = lessonVoList[index];
			appendLessonContent(lessonVo);
		}
	}
};
var appendLessonContent = function (lessonVo){
	var tiemIndexs = lessonVo.timeIndexs;
	var weekDays = lessonVo.weekDays;
	for(var col in weekDays){
		for(var row in tiemIndexs){
			var content='<p style="text-align:center;" data-toggle="tooltip" data-placement="top" title="#remarks">#content</p>';
			var contentAreId = "#"+weekDays[col]+tiemIndexs[row];
			content = content.replace('#remarks',lessonVo.info.remarks);
			content = content.replace('#content',lessonVo.info.lessoname+'<br/>'+lessonVo.teacher.name);
			$(content).appendTo(contentAreId);
		}
	}
	bootstrapInit();
};
var lessonTable = '<table class="fc-border-separate " style="width: 100%" cellspacing="0">#tableContent</table>';
var tableHeader = '<thead>#tableHeader</thead>';
var tableBody = '<tbody>#content</tbody>';
var initLessonTable=function(){
	//draw header
	var header = '<tr class="fc-first fc-last ">';
	header=header+'<th class="fc-day-header fc-sun fc-widget-header fc-first" style="width: 145px;">时间</th>';
	var headerItem='<th class="fc-day-header fc-sun fc-widget-header" style="width: 145px;">#headerItem</th>';
	var weekLength = 0;
	var timeLength = 0;
	for(var col in weekDayMap){
		weekLength++;
		console.log(weekDayMap[col]);
	}
	for(var row in timeIndexMap){
		timeLength++;
		console.log(timeIndexMap[row]);
	}
	var index=0;
	for(var col in weekDayMap){
		if(index==weekLength-1){
			header=header+'<th class="fc-day-header fc-sun fc-widget-header fc-last" style="width: 145px;">'
					+weekDayMap[col]+'</th>';
		}else{
			header=header+headerItem.replace('#headerItem',weekDayMap[col]);
		}
		index++;
	}
	header=header+'</tr>';
	tableHeader = tableHeader.replace('#tableHeader',header);
	//draw content
	var content='';
	var contentTd='<td class="fc-day  fc-widget-content #colFlag">#contentTd</td>';
	var tdContent ='<div style="min-height: 130px;"><div class="fc-day-content">#tdContent</div></div>';
	index=0;
	for(var row in timeIndexMap){
		
		content=content+'<tr class="fc-week '+(index==0?'fc-first':(index==timeLength-1?'fc-last':''))+'">';
		content=content+contentTd.replace('#contentTd', tdContent.replace('#tdContent', timeIndexMap[row]));
		var tdItem = '<div id="#tdItemId" class="tdItem" style="position: relative; height: 41px;">&nbsp;</div>';
		var colIndex=0;
		for(var col in weekDayMap){
			var colFlag = (colIndex==0?'fc-first':(colIndex==weekLength-1?'fc-last':''));
			
			content=content+contentTd.replace('#colFlag',colFlag).replace(
					'#contentTd', tdContent.replace(
							'#tdContent', tdItem.replace(
									'#tdItemId', col+row)));
			colIndex++;
		}
		content=content+'</tr>';
		index++;
	}
	tableBody = tableBody.replace('#content', content);
	
	lessonTable = lessonTable.replace('#tableContent', tableHeader+tableBody);
	$("#lessonTable").html(lessonTable);
};