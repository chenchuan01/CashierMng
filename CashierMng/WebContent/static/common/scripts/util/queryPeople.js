/** query people */
var initSwipeQuery = function() {
	inOutQuery();
	queryMember();
	queryCoach();
	queryAdviser();
	queryTeacher();
//	countCarFinalDate();
};
function queryMember(){
	queryCardNo();
	queryMemberName();
	queryMemberTel();
}
function queryCoach(){
	queryCoachName();
	queryCoachTel();
	queryCoachDrop();
}
function queryAdviser(){
	queryAdviserName();
}
/** query teacher */
var queryTeacher=function(){
	var teacherInput = $("#lesson_teacher_name,#lesson_teacher_tel");
	var teacherMap = {};
	var showSelect = {};
	teacherInput.typeahead({
		source : function(query, process) {
			var reg = /^\d+$/;
			var parameter = {};
			if(reg.test(query)){
				parameter['tel']=query;
			}else{
				parameter['name']=query;
			}
			if(1 <= query.length){
				$.ajax({
					url : "teacher/queryTeacher.do",
					type : 'POST',
					dataType : 'JSON',
					async : true,
					data : parameter,
					success : function(data) {
						var arr = [];
						for (i in data) {
							var teacher = data[i];
							var key =teacher.name+VAL_FLAG+teacher.tel;
							teacherMap[teacher.id]=teacher;
							showSelect[key] = teacher.id;
							arr.push(key);
						};
						process(arr);
					}
				});
			};
		},
		matcher: function (item) {
		    return true;
		},
		highlighter: function(item) {
	        return item;
	    },
	    updater: function (item) {
	    	var teacher =teacherMap[showSelect[item]];
	    	setTeacherInfo(teacher);
	        return teacher.name;
	    }
	});
};
var setTeacherInfo=function(teacher){
	$('#lesson_teacher_id').val(teacher.id);
	$('#lesson_teacher_name').val(teacher.name);
	$('#lesson_teacher_tel').val(teacher.tel);
};
/** query adviser */
var queryAdviserName=function(){
	var adviserInput = $('#adviserName');
	var adviserMap = {};
	var showSelect = {};
	adviserInput.typeahead({
		source : function(query, process) {
			var reg = /^\d+$/;
			var parameter = {};
			if(reg.test(query)){
				parameter['tel']=query;
			}else{
				parameter['name']=query;
			}
			if(1 <= query.length){
				$.ajax({
					url : "adviser/queryAdviser.do",
					type : 'POST',
					dataType : 'JSON',
					async : true,
					data : parameter,
					success : function(data) {
						var arr = [];
						for (i in data) {
							var adviser = data[i];
							var key =adviser.name+VAL_FLAG+adviser.tel;
							adviserMap[adviser.id]=adviser;
							showSelect[key] = adviser.id;
							arr.push(key);
						};
						process(arr);
					}
				});
			};
		},
		matcher: function (item) {
		    return true;
		},
		highlighter: function(item) {
	        return item;
	    },
	    updater: function (item) {
	    	var adviser =adviserMap[showSelect[item]];
	    	setAdviserInfo(adviser);
	        return adviser.name;
	    }
	});
	
	
};
var setAdviserInfo = function(adviser){
	$('#adviserId').val(adviser.id);
	$('#adviserTel').val(adviser.tel);
};
/** query coach */
var queryCoachName = function(){
	var coachNameInput = $('#coachName');
	var coachVoMap = {};
	var showSelect = {};
	coachNameInput.typeahead({
		source : function(query, process) {
			var parameter = {
				name : query
			};
			if(1 <= query.length){
				$.ajax({
					url : "coach/queryCoach.do",
					type : 'POST',
					dataType : 'JSON',
					async : true,
					data : parameter,
					success : function(data) {
						var arr = [];
						for (i in data) {
							var coachVo = data[i];
							var key =coachVo.info.name+VAL_FLAG+coachVo.info.tel;
							coachVoMap[coachVo.info.id]=coachVo;
							showSelect[key] = coachVo.info.id;
							arr.push(key);
						};
						process(arr);
					}
				});
			};
		},
		matcher: function (item) {
		    return true;
		},
		highlighter: function(item) {
	        return item;
	    },
	    updater: function (item) {
	    	var coachVo =coachVoMap[showSelect[item]];
	    	setCoachInfo(coachVo);
	        return coachVo.info.name;
	    }
	});
};
var queryCoachTel = function(){
	var coachTelInput = $('#coachTel');
	var coachVoMap = {};
	var showSelect = {};
	coachTelInput.typeahead({
		source : function(query, process) {
			var parameter = {
				tel : query
			};
			if(1 <= query.length){
				$.ajax({
					url : "coach/queryCoach.do",
					type : 'POST',
					dataType : 'JSON',
					async : true,
					data : parameter,
					success : function(data) {
						var arr = [];
						for (i in data) {
							var coachVo = data[i];
							var key =coachVo.info.name+VAL_FLAG+coachVo.info.tel;
							coachVoMap[coachVo.info.id]=coachVo;
							showSelect[key] = coachVo.info.id;
							arr.push(key);
						};
						process(arr);
					}
				});
			};
		},
		matcher: function (item) {
		    return true;
		},
		highlighter: function(item) {
	        return item;
	    },
	    updater: function (item) {
	    	var coachVo =coachVoMap[showSelect[item]];
	    	setCoachInfo(coachVo);
	        return coachVo.info.tel;
	    }
	});
};
var queryCoachDrop=function(){
	$('#dropTelCoach').click(function(){
		$('#coachTel').val('1');
	});
	$('#dropNameCoach').click(function(){
	    $('#coachName').val(' ');
	});
};
var setCoachInfo=function(coachVo){
	$("#coachName").val(coachVo.info.name);
	$("#coachTel").val(coachVo.info.tel);
	$("#coachId").val(coachVo.info.id);
};
/** query member */
var queryCardNo = function() {
	var cardNoInput = $("#queryCardNo");
	var memberVoMap = {};
	var showSelect = {};
	cardNoInput.typeahead({
		source : function(query, process) {
			var parameter = {
				cardno : query
			};
			if(cardNoSize <= query.length){
				$.ajax({
					url : "member/queryMember.do",
					type : 'POST',
					dataType : 'JSON',
					async : true,
					data : parameter,
					success : function(data) {
						var arr = [];
						for (i in data) {
							var memberVo = data[i];
							var key =memberVo.info.name+VAL_FLAG+memberVo.card.cardno+VAL_FLAG+memberVo.info.tel;
							memberVoMap[memberVo.info.id]=memberVo;
							showSelect[key] = memberVo.info.id;
							arr.push(key);
						};
						process(arr);
					}
				});
			};
		},
		matcher: function (item) {
		    return true;
		},
		highlighter: function(item) {
	        return item;
	    },
	    updater: function (item) {
	    	var memberVo =memberVoMap[showSelect[item]];
	    	setMemberInfo(memberVo);
	        return memberVo.card.cardno;
	    }
	});
};
var setMemberInfo=function(memberVo){
	$("#memberName").val(memberVo.info.name);
	$("#memberTel").val(memberVo.info.tel);
	$("#memberId").val(memberVo.info.id);
	$("#queryCardNo").val(memberVo.card.cardno);
};
var queryMemberName = function() {
	var memberNameInput = $("#memberName");
	var memberVoMap = {};
	var showSelect = {};
	memberNameInput.typeahead({
		source : function(query, process) {
			var parameter = {
				name : query
			};
			if(1 <= query.length){
				$.ajax({
					url : "member/queryMember.do",
					type : 'POST',
					dataType : 'JSON',
					async : true,
					data : parameter,
					success : function(data) {
						var arr = [];
						for (i in data) {
							var memberVo = data[i];
							var key =memberVo.info.name+VAL_FLAG+memberVo.card.cardno+VAL_FLAG+memberVo.info.tel;
							memberVoMap[memberVo.info.id]=memberVo;
							showSelect[key] = memberVo.info.id;
							arr.push(key);
						};
						process(arr);
					}
				});
			};
		},
		matcher: function (item) {
		    return true;
		},
		highlighter: function(item) {
	        return item;
	    },
	    updater: function (item) {
	    	var memberVo =memberVoMap[showSelect[item]];
	    	setMemberInfo(memberVo);
	        return memberVo.info.name;
	    }
	});
};
var queryMemberTel = function() {
	var memberTelInput = $("#memberTel");
	var memberVoMap = {};
	var showSelect = {};
	memberTelInput.typeahead({
		source : function(query, process) {
			var parameter = {
				tel : query
			};
			if(1 <= query.length){
				$.ajax({
					url : "member/queryMember.do",
					type : 'POST',
					dataType : 'JSON',
					async : true,
					data : parameter,
					success : function(data) {
						var arr = [];
						for (i in data) {
							var memberVo = data[i];
							var key =memberVo.info.name+VAL_FLAG+memberVo.card.cardno+VAL_FLAG+memberVo.info.tel;
							memberVoMap[memberVo.info.id]=memberVo;
							showSelect[key] = memberVo.info.id;
							arr.push(key);
						};
						process(arr);
					}
				});
			};
		},
		matcher: function (item) {
		    return true;
		},
		highlighter: function(item) {
	        return item;
	    },
	    updater: function (item) {
	    	var memberVo =memberVoMap[showSelect[item]];
	    	setMemberInfo(memberVo);
	        return memberVo.info.tel;
	    }
	});
};

/**
 * 判断会员卡号长度并查询
 */
var checkActionQuery = function(inputDoc, queryFun) {
	var cardNo = $(inputDoc).val() ? $(inputDoc).val() : "";
	if (cardNoSize <= cardNo.length) {
		queryFun(cardNo);
	}
};
/**
 * 进出场刷卡
 */
var inOutQuery = function() {
	$("#inOutSwipe").keyup(function() {
		checkActionQuery(this, querySwipeVo);
	});
};

/**
 * 查询并返回vo
 */
var querySwipeVo = function(cardNo) {
	var params = {
		"cardNo" : cardNo
	};
	ajaxLoad(basePath + "swipe/swipeCard.do", params, showSwipeForm);
};
var swipeForm=function(url_params){
	var item = url_params.split('?id=');
	querySwipeVo(item[1]);
};
/**
 * 进场,出场确认页面数据摄入
 */
var showSwipeForm = function(data) {
	var formId = '#swipeConfirm';
	var swipeVo = $jsonObjToMap(data);
	var inOutFlag = data.swipeFlag;
	$('#swipeFlag').val(inOutFlag);
	$('#swipeConfirmBtn').click(function(){
			$btnDisable('#swipeConfirmBtn');
			submitSwipeConfirm();
	});
	if(swipeFlag.swipeIn==inOutFlag){
		$('#swipeConfirmBtn').text('进场');
		$('#swipeConfirmBtn').removeClass('btn-danger');
		$('#swipeConfirmBtn').addClass('btn-success');
		$('#swipeConfirm input[name="tempCabinet"]').focus();
		
	}else if(swipeFlag.swipeOut==inOutFlag){
		$('#swipeConfirmBtn').text('离场');
		$('#swipeConfirmBtn').removeClass('btn-success');
		$('#swipeConfirmBtn').addClass('btn-danger');
	}
	commFillInfo(swipeVo, formId + ' input[item]', infoType.val);
	commFillInfo(swipeVo, formId + ' td[item]', infoType.text);
	commFillInfo(swipeVo, formId + ' b[item]', infoType.text);
	commFillInfo(swipeVo, formId + ' img[item]', infoType.src);
	//禁止进场
	if((cardstatus.limited==swipeVo.card.status&&swipeFlag.swipeIn==inOutFlag)||cardstatus.stop==swipeVo.card.status){
		$btnDisable('#swipeConfirmBtn');
	}
	else{
		$btnEnable('#swipeConfirmBtn');
	}
	$('#swipeModal').modal('show');
	$("#inOutSwipe").val('');
};
var submitSwipeConfirm = function(){
	var formId = '#swipeConfirm';
	var params =getParams(formId);
	cleanFormById(formId);
	
	ajaxData(getUrl(formId),params,refreshSwipeList,function(){
		refreSwipeTableList();
		});
};
var refreshSwipeList=function(){
	$('#swipeModal').modal('hide');
	refreSwipeTableList();
	
};
var refreSwipeTableList=function(){
	refreshNums();
	page(1);
	$('#inOutSwipe').focus();
};
var refreshNums = function(){
	var params = getParams('#search');
	params['page']=1;
	ajaxData('swipe/swipeNumsQuery.do',params,setCountNums);
};
var setCountNums = function(data){
	if($('#swipeInNums')){
		$('#swipeInNums').text(data['swipeInNums']);
	}
	if($('#tb_swipeInNums')){
		$('#tb_swipeInNums').text(data['swipeInNums']);
	}
	if($('#memberNums')){
		$('#memberNums').text(data['memberNums']);
	}
	if($('#tb_memberNums')){
		$('#tb_memberNums').text(data['memberNums']);
	}
	if($('#swipeOutNums')){
		$('#swipeOutNums').text(data['swipeOutNums']);
	}
	if($('#tb_swipeOutNums')){
		$('#tb_swipeOutNums').text(data['swipeOutNums']);
	}
	
	
};
var countCarFinalDate=function(){
	var countDateElement = $('#cardDueDate,#cardGivedateMetric');
	countDateElement.change(queryFinalDate);
	var countGiveDate = $('#cardGivedate');
	countGiveDate.keyup(queryFinalDate);
	
};
var queryFinalDate = function(){
	var start = $('#cardActiveDate').val();
	var end = $('#cardDueDate').val();
	var give = $('#cardGivedate').val();
	var metric = $('#cardGivedateMetric').val();
	if(start!=""&&end!=""&&give!=""&&end.length>=10){
		var param = {
				activedate:start,
				duedate:end,
				givedate:give,
				givemetric:metric
		};
		ajaxData('card/countFinal.do',param,function(data){$('#cardFinalDate').val(data.finalDate);});
	}
};