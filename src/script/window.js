define(['widget','jquery','jqueryUI'],function(widget,$,$UI){

	function Window (){
		
		this.handlers ={};
		this.cfg={
			width:200,
			height:150,
			content:'',
			title:'系统提示',
			hasCloseBtn:false,
			handler_close_Btn:null,
			handler_cofm_btn:null,
			skinClass:null,
			textForCofmBtn:"确定",
			hasMask:false,
			ifDraggable:true,
			dragHandle:null,

		}
	};
	Window.prototype =$.extend({},new widget.Widget(),{
		
		alert:function(cfg){
			var that = this;
			var mask = null;
			var CFG = $.extend(this.cfg,cfg);
			var boundingBox = $('<div class="window_boundingBox"><header class="title">'+CFG.title+
				'</header><div class="msg_zone">'+ CFG.content+
				'</div><footer><input type="button" value="'+CFG.textForCofmBtn+'" class="cofm_btn"></footer><div/>');
			boundingBox.appendTo("body");
			if(CFG.hasMask){
				mask = $('<div class="mask"></div>');
				mask.appendTo('body');
			}
			var btn = $('.cofm_btn');
			btn.click(function(){
				//CFG.handler_cofm_btn&&CFG.handler_cofm_btn();
				that.fire('alert');
				boundingBox.remove();
				mask.remove();

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
					//CFG.handler_close_Btn&&CFG.handler_close_Btn();
					that.fire('close');
					boundingBox.remove();
					mask.remove();
				})
			}
			if(CFG.skinClass){
				boundingBox.addClass(CFG.skinClass);
				
			}
			if(CFG.ifDraggable){
				if(CFG.dragHandle){
					boundingBox.draggable({handle:CFG.dragHandle});
				}
				boundingBox.draggable();
			}
			if(CFG.handler_cofm_btn){
				this.on('alert',CFG.handler_cofm_btn);
			}
			if(CFG.handler_close_Btn){
				this.on('close',CFG.handler_close_Btn);
			}

			return this;
		},
		confirm:function(){},
		prompt: function(){}
	}) 
	return{
		Window:Window
	}
})