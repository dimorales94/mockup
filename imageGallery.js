$(document).ready(function(){
	var imageName = ["http://i64.tinypic.com/35176tf.jpg", "http://i68.tinypic.com/6sf7r5.jpg", "http://i68.tinypic.com/2d8f4ih.gif","http://i65.tinypic.com/34sngo2.jpg"];
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