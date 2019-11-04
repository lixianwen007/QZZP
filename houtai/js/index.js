$(function(){
	// 为导航添加事件
	$('.layui-body').load('./pages/zhuye.html');
	$("ul.layui-nav").on("click","li",function(){
		var url = $(this).attr("url");
		$("ul.layui-nav > li").removeClass("current");
		$(this).addClass("current");
		$(".layui-body").load(url);
	})
});