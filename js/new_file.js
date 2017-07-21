$("#jian").click(function (){
	$("#jian").html("▲");
	$("#xian").css("display","block")
	
})
$.each($("#xian li"),function(){
	$(this).click(function(){
		$("#inp").val(parseInt($(this).html()))
		$("#xian").css("display","none")
		$("#jian").html("▼");
	})
})
$("#erjian").click(function (){
	$("#erjian").html("▲");
	$("#erxian").css("display","block")
	
})
$.each($("#erxian li"),function(){
	$(this).click(function(){
		$("#erinp").val(parseInt($(this).html()))
		$("#erxian").css("display","none")
		$("#erjian").html("▼");
	})
})
//$(document).click(function (){
//	$("#xian").css("display","none")
//	$("#jian").html("▼");
//})
