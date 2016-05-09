/**var*/
/**
 * 照片类型
 */
var photoType = [ "file", "camera" ];

/**
 * 会员卡状态
 */
var cardstatus = {
	actived:0,
	limited:-1,
	stop:-2,
	init:-3
};
/**
 * 信息类型
 */
var infoType = {
	text : "text",
	val : "val",
	src : "src",
	radio:"radio",
	checkbox:"checkbox"
};
/**
 * 刷卡进离场标志
 */
var swipeFlag ={
	swipeIn:"1",
	swipeOut:"0"
};
/**
 * 需要特殊处理的属性
 */
var specialFileds = {
	type : 'cardtype',
	givemetric : 'givemetric',
	timeindex:'timeIndexs',
	weekday:'weekDays',
	paymetric:'paymetric',
	paytype:'paytype'	
};
/**
 * 空值占位符
 */
var NONE_VAL_FLAG = '';

/**
 * 值间占位
 */
var VAL_FLAG='-';
/**
 * 属性中从属属性分割符‘.’
 */
var FILED_SPLIT = '.';
/**
 * 多个属性分割符‘,’
 */
var FILEDS_SPLIT = ',';
/**
 * 配置多个值之间分隔符‘;’
 */
var CONFIG_VAL_SPLIT = ';';
/**
 * 配置映射分割符‘:’
 */
var CONFIG_TO_SPLIT = ':';
/**
 * 更新表单时，父类list的索引
 */
var g_pageId;
/**
 * 默认保存照片类型，file
 */
var g_photo_save_type = photoType[0];

/**
 * 会员卡类型
 */
var g_cardType = {};
/**
 * 赠送时间单位
 */
var g_dateMetric = {};

/**
 * 返回照片保存类型
 */
var getSavePhotoType = function() {
	return g_photo_save_type;
};
/**
 * 设置照片类型
 */
var setSavePhotoType = function(saveType) {
	g_photo_save_type = saveType;
};
/**
 * 返回表单父级list索引
 */
var getParentPageId = function() {
	return g_pageId;
};
/**
 * 设置表单父级list索引
 */
var setParentPageId = function(id) {
	g_pageId = id;
};
/**
 * 设置照片类型
 */
var savePhotoType = function(index) {
	if (index == 0 || index == 1) {
		setSavePhotoType(photoType[index]);
	}

};
/**
 * 设置会员卡类型map
 */
var setCardTypeMap = function() {
	var cardTypeMap = {};
	var types = cardTypeConfig.split(CONFIG_VAL_SPLIT);
	for ( var index = 0;index< types.length;index++) {
		var items = types[index].split(CONFIG_TO_SPLIT);
		cardTypeMap[items[0]] = items[1];
	}
	g_cardType = cardTypeMap;
};
/**
 * 设置赠送会籍时间单位
 */
var setDateMetricMap = function() {
	var dateMetricMap = {};
	var metrics = dateMetricConfig.split(CONFIG_VAL_SPLIT);
	for ( var index = 0;index< metrics.length;index++) {
		var items = metrics[index].split(CONFIG_TO_SPLIT);
		dateMetricMap[items[0]] = items[1];
	}
	g_dateMetric = dateMetricMap;
};
/**
 * 初始化需要查询系统配置的js全局变量
 */
var initGlobalVals = function() {
	setCardTypeMap();
	setDateMetricMap();
};