var $ = {
	// get请求
	get : function(url,handler){
		// 1. 实例化xhr对象
		var xhr = new XMLHttpRequest();
		// 2. 设置请求行
		xhr.open("get",url);
		// 3. 设置请求头（Content-Type）
		xhr.responseType = "json";
		// 4. 设置请求体，并且发送
		xhr.send()
		// 5.监听响应
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				if(this.status === 200){
					var response = this.response;
					handler.call(this,response)
				}
			}
		}
	},
	//post提交
	post : function(url,data,handler,type){
		// 1. 实例化xhr对象
		var xhr = new XMLHttpRequest();
		// 2. 设置请求行
		xhr.open("post",url);
		// 3. 设置请求头（）
		xhr.responseType = "json";
		if(!type){
			type = "application/x-www-form-urlencoded";
		}
		xhr.setRequestHeader("Content-Type",type)
		// 4. 设置请求体，并且发送
		xhr.send(data)
		// 5.监听响应
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				if(this.status === 200){
					var response = this.response;
					handler.call(this,response)
				}
			}
		}
	}
}