<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Loading</title>
<link rel="shortcut icon" href="static/img/icons/earth.ico">
<script type="text/javascript" src="static/js/jquery/jquery-2.0.3.min.js"></script>
<script type="text/javascript">
$(function(){
	setTimeout('window.location.href = "${pageContext.request.contextPath}/home.do";',1000);
});
</script>
</head>
<body style="height: 100%;background: #fff; overflow: hidden;">
<div style="height: 100%;text-align: center;">
	<div style="margin-top: 15%">
		<img alt="loading" src="static/img/loaders/loading.gif">
	</div>	
</div>
</body>
</html>