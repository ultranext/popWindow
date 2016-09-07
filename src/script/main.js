require.config({
	paths:{
		jquery:"../lib/jquery-1.12.2.min",
	}
})

require(['jquery','window'],function($,w){

	$('#btn').on('click',function(){
		new w.Window().alert({content:'welcome',
			width:300,
			height:200,
			y:100
	})
	})
})