require.config({
	paths:{
		jquery:"../lib/jquery-1.12.2.min",
		jqueryUI:"../lib/jquery-ui-1.12.0/jquery-ui"
	}
})

require(['jquery','window','jqueryUI'],function($,w,$UI){

	$('#btn').on('click',function(){
		var win = new w.Window()
		win.alert({content:'welcome',
			width:300,
			height:200,
			y:100,
			hasCloseBtn:true,
			hasMask:true,
			dragHandle:".title",
			handler_cofm_btn: function(){
				alert("you alert comfirm button");
			},
			handler_close_Btn: function(){
				alert('you alert comfirm button');
			}
	});
	})
})