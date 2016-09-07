define(['jquery'],function($){

	function Window (){

		this.cfg={
			width:200,
			height:150,
			content:'',
			title:'系统提示',
			hasCloseBtn:false,
			handler_close_Btn:null,
			handler_cofm_btn:null
		}
	};
	Window.prototype = {
		alert:function(cfg){
			var CFG = $.extend(this.cfg,cfg);
			var boundingBox = $('<div class="window_boundingBox"><header class="title">'+CFG.title+
				'</header><div class="msg_zone">'+ CFG.content+
				'</div><footer><input type="button" value="确定" class="cofm_btn"></footer><div/>');
			boundingBox.appendTo("body");
			var btn = $('.cofm_btn');
			btn.click(function(){
				CFG.handler_cofm_btn&&CFG.handler_cofm_btn();
				boundingBox.remove();
			})
			
			boundingBox.css({
				width:CFG.width + 'px',
				height: CFG.height + 'px',
				left: (CFG.x||(window.innerWidth - CFG.width)/2) + 'px',
				top: (CFG.y||(window.innerHeight - CFG.height)/2) + 'px'
			})
			if(CFG.hasCloseBtn){
				var closeBtn = $('<img src="src/images/icon_close_alt2.png" alt="close" class="closeBtn"/>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					CFG.handler_close_Btn&&CFG.handler_close_Btn();
					boundingBox.remove();
				})
			}
		},
		confirm:function(){},
		prompt: function(){}
	}
	return{
		Window:Window
	}
})