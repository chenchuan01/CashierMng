/**customHotKeys*/
var dateTimePicker=function(){
	/**时间控件*/
	var day = new Date();
	$('#Date').html(
			'<a href="javascript:;" class="weekDay">'+
			dayNames[day.getDay()] + 
			'</a>|<a href="javascript:;" class="monthDay">' + 
			monthNames[day.getMonth()]+ 
			',' + 
			day.getDate() + 
			'</a>|<a href="javascript:;" class="fullYear">' + 
			day.getFullYear());
	$('#digital-clock').clock({
        offset: '+8',
        type: 'digital'
	});
	/**jquery-日期控件*/
	$(".datepickerInput").datepicker(
		{ 
		language: 'zh-CN',
        autoclose: true,
        todayHighlight: true,
        format: 'yyyy-mm-dd'
       });
	
};