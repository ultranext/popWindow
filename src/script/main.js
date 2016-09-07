require.config({

	paths:
})

require(['jquery','window'],function($,w){

	$(#a).on('click',function(){
		w.Window.alert("welcome")
	})
})