
$(function(){
	$(".op_movie").click(function(){
		var id =$(this).attr("data-youtube");
		var frame = '<iframe width="100%" height="100%" src="https://nontapat5130.github.io/'+ id +'?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
console.log(frame)
			$("#floatMovie").show();
			$("#floatMovie").find(".player").html(frame);
			$("#floatMovie").velocity({opacity:1},300)
	})
})
