/**photoSave*/
var savePhoto=function(){
	if(photoType[0]==getSavePhotoType()){
		var photo = $("#photoFile").val();
		
		if(!photo||""==photo||'undefined'==photo){
			
			if(($('#photoBlank').attr('src')&&
				$('#photoBlank').attr('src').indexOf('.jpg')<=0)||
			   ($('#photo').attr('src')&&
				$('#photo').attr('src').indexOf('.jpg')<=0)){
				info('请先选择图片或拍照！');
				return;
			}
		}
		if(photo!=""){
			saveFilePhoto();
			return;
		}
		sucInfoBox();
		
	}else if(photoType[1]==getSavePhotoType()){
		cfm("请确认已拍照并保存?",refreshImg,null);
	}
	
};
var refreshImg=function(people_id){
	if(!people_id){
		people_id = $('#peopleId').val();
	}
	var url = $('#photoSaveUrl').val().split('/')[0]+"/photoRefresh.do";
	ajaxLoad(url,{id:people_id},updImgSrc);
};
var updImgSrc=function(data){
	if($('#photo')){
		$('#photo').attr("src",basePath+'img/photo.do?path='+data.imgpath);
	}
	if($('#photoBlank')){
		$('#photoBlank').attr("src",basePath+'img/photo.do?path='+data.imgpath);
	}
};
var saveFilePhoto=function(){
	var url = $('#photoSaveUrl').val();
	ajaxFile(url,'photoFile',null,saveFilePhotoSuc);
};
var saveFilePhotoSuc=function(data){
	$("#imgPath").val(data.imgpath);
	$("#photo,#photoBlank").attr("src",basePath+"img/photo.do?path="+data.imgpath);
	sucInfoBox();
};
var saveCameraPhoto=function(){
	var url = $('#photoSaveUrl').val();
	url = url.replace('photoSave','cameraSave');
	
	var pic = document.getElementById("canvas").toDataURL("image/png");
	pic = pic.replace(/^data:image\/(png|jpg);base64,/, "");
	ajaxLoad(url, {peopleId:$('#peopleId').val(),imageData:pic});
	
};