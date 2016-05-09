/**stepForm*/
var finish=function(){
	var cardHideId=$('#cardInfo input[name="id"]');
	if($('#peopleId').val()==""){
		info('请先填写并保存基本信息！');
	}else if(cardHideId&&cardHideId.val()==""){
		info('请先填写并保存会员卡信息！');
	}else{
		savePhoto();
	}
};
var stepFirstNext=function(){
	valid('#peopleInfo',saveFristStep);
};
var stepSecondNext=function(formId){
	if(!$('input[name="cardno"]')||$('input[name="cardno"]').val()==null){
		return;
	}
	valid(formId,saveSecondStep);
};
var stepThirdNext=function(formId){
	valid(formId,saveThirdStep);
};

/**Top-Next Save*/
var saveNoStep =function(){
	var params = getParams();
	ajaxLoad(getUrl(), params,step_no_next);
};

/**
 * step1:保存基本信息
 */
var saveFristStep =function(formId){
	var params = getParams(formId);
	ajaxLoad(getUrl(formId), params,step_no_next);
};

/**
 * step2:根据传入id#cardInfo||#cmMap
 */
var saveSecondStep =function(formId){
	var params = getParams(formId);
	if(formId=='#cardInfo'){
		ajaxLoad(getUrl(formId), params,step_card_next);
	}
};
var cmFormModal =function(url){
	ajaxLoad(url,{},fillCmForm);
	$('#memberModal').modal('show');
};
/**
 * step3:
 * 私教非必须
 **/
var saveThirdStep=function(formId){
	var params = getParams(formId);
	if(formId=='#cmMap'){
		ajaxLoad(getUrl(formId), params,fillCoachMemberForm);
	}else if(formId=='#memberCoachMap'){
		if($('#coachId').val()!=''&&$('#coachId').val()!='undefined'){
			ajaxLoad(getUrl(formId), params,fillMemberCoachForm);
		}
		
	}
	$('#formModal').modal('toggle');
};
var saveCmMap=function(){
	var formId = "#cmMap";
	saveThirdStep(formId);
};
/**
 * 回设id并刷新列表
 */
var fillCoachMemberForm = function(data){
	fillCmForm(data);
	if($('#serach')){
		page(1);//刷新会员列表
	}
	
};
function fillCmForm(data) {
	var cmMapVo = data;
	commFillInfo(cmMapVo,'#cmMap input[item]',infoType.val);
}
/**
 * 基本信息下一步
 */
var step_no_next=function(data){
    infoNextStep(data);
};
var step_top_save=function(data){
    infoNextStep(data);
    sucInfoBox();
};
var step_card_next=function(data){
	var hiddenId=$('#cardInfo input[name="id"]');
	hiddenId.val(data.card.id);
	if($('#cardAccount_id')){
		$('#cardAccount_id').val(data.cardPay.id);
		$('#cardAccount_title').val(data.cardPay.title);
		
	};
	//查询会员私教
	var member_id=$('#cmMap input[name="member_id"]');
	if(member_id.val()!=""||member_id.val()!=null){
		ajaxData(getUrl('#cmMap'), {'member_id':member_id}, fillMemberCoachForm);
	}
};
/**
 * 回显会员添加私人教练表单
 */
var fillMemberCoachForm=function(data){
	var memberCoachVo = data;
	var selector ="#memberCoachMap input[item],#memberCoachMap select[item]"; 
	commFillInfo(memberCoachVo,selector, infoType.val);
};
/**
 * 基本信息下一步回设信息
 */
var infoNextStep=function(data){
	setItemId(data);
	//保存完基本信息之后，将people隐藏表单域摄入值，和摄入教练添加会员页面的教练信息
	setPeopleHide(data);
	//coachForm
	setCoach(data);
	setMember(data);
};
var setCoach=function(data){
	var coach = data;
	$('#item_coachName').val(coach.name);
	$('#item_coachTel').val(coach.tel);
	if($('input[name="coach_id"]')){
		$('input[name="coach_id"]').each(function(){
			$(this).val(coach.id);
		});
	};
};
var setMember=function(data){
	var card_member = $('#cardInfo input[name="member_id"]');
	if(card_member){
		card_member.each(function(){
			$(this).val(data.id);
		});
	};
	
};
/**
 * 设置ID主键
 */
var setItemId=function(data){
	if(data){
		$('#peopleId').val(data.id);
	}
};
/**
 * 设置基本信息隐藏域
 */
var setPeopleHide=function(data){
	if(data){
		//摄入People信息隐藏表单值
		$('#completed').val(data.completed);
		$('#addtime').val(data.addtime);
		$('#imgPath').val(data.imgPath);
	}
};

