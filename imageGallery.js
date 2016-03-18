$(document).ready(function(){
	var imageName = ["http://i66.tinypic.com/oa93rp.png", "http://i65.tinypic.com/20jh11j.png", "http://i64.tinypic.com/4to5r6.png","http://i66.tinypic.com/2ztj3t4.png","http://i64.tinypic.com/345n6mc.png","http://i68.tinypic.com/xeidrl.png","http://i63.tinypic.com/sb4rpl.png","http://i63.tinypic.com/2u7cbrk.png","http://i64.tinypic.com/2lwn0at.png","http://i66.tinypic.com/1z1zjbq.png","http://i64.tinypic.com/11tvq4j.png","http://i63.tinypic.com/m9u2d0.png"];
	var imageTitle=[ "Surprised.", "Burger", "Many cats", "Sandwich"]
	var counter = 0;

	var clickaway =
	function go (){
		$("#picture").fadeOut(300, function(){
		$("#picture").attr("src", imageName[counter]);
		$("#imageCaption").text(imageTitle[counter]);
		counter++;
		if(counter > 2) {counter = 0;}
		$("#picture").fadeIn(500)
		//go();
	});
	}
	clickaway();
	$("#picture").click(clickaway);
	});//end of document ready