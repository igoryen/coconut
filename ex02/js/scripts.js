$( document ).ready( function(){
	console.log("ready");


	// if the popup goes offscreen
	$(".barbara").hover(function(){
		$popup = $( this ).children("ul.betty");
		var x2 = $popup.offset().left + $popup.width()
		if( x2 > $(window).width() ){
		    //change left to right
		    console.log("outside");
		    $popup.addClass("rt");
		}
		else {
			$popup.removeClass("rt");
		}
	});


	

	// $(".carol").on("click", function(){
	// 	// console.log("click");

	// 	$popup = $( this ).siblings("ul.betty");

	// 	// console.log( "on click the class is " + $popup.attr("class"));

	// 	if( $popup.is(":visible")) {
	// 		console.log( "betty visible? " + $popup.is(":visible"));
	// 		$popup.trigger("mouseleave");

	// 	}
	// 	// else {
	// 	// 	console.log( $popup.is(":visible"));
	// 	// }
		
	// });

	



	// $(".carol").on("click", function(){
	// 	console.log("click");

	// 	$popup = $( this ).siblings("ul.betty");

	// 	console.log( "on click the class is " + $popup.attr("class"));

	// 	if( $popup.hasClass("hidden")) {
	// 		// console.log( $popup.attr("class"));
	// 		$popup.removeClass("hidden");
	// 		$popup.addClass("showing");

	// 		$popup.parents().siblings().children(".betty").removeClass("showing").addClass("hidden");

	// 		var x2 = $popup.offset().left + $popup.width()
	// 		if( x2 > $(window).width() ){
	// 		    //change left to right
	// 		    console.log("outside");
	// 		    $popup.addClass("rightmost");
	// 		}
	// 	}
	// 	else if ( $popup.hasClass("showing")) {
	// 		console.log("visible. will be hidden...");
	// 		$popup.removeClass("showing");
	// 		$popup.addClass("hidden");
	// 	}
	// });

	// $(".carol").hover( 		

	// 	function(){
	// 		$popup = $( this ).siblings("ul.betty");
	// 		// console.log($popup);

	// 		$popup.removeClass("hidden");
	// 		$popup.addClass("showing");

	// 		var x2 = $popup.offset().left + $popup.width()
	// 		if( x2 > $(window).width() ){
	// 		    //change left to right
	// 		    // console.log("outside");
	// 		    $popup.addClass("rightmost");
	// 		}
	// 	},
	// 	function(){
	// 		$popup = $( this ).siblings("ul.betty");
	// 		$popup.removeClass("showing");
	// 		$popup.addClass("hidden");
	// 	}
	// );
		


	$("#closenav").on( "click", function(){
		console.log("Close");

		// if( $("#opennav").is(":visible") ) {
		// $("#opennav").css({"display": "block"});

		// $("#main").css({
		// 	"margin-left": "0"
		// });

		// }

		$(".anthony").css({
			"width": "0%",
			"height": "100vh"
		});

		// $("#opennav").css({
		// 	"z-index": "2"
		// });
	});

	$("#opennav").on( "click", function(){
		console.log("Open");

		// if( $("#opennav").is(":hidden")) {
		// 	$(this).css("display": "block !important");
		// }

		// $("#opennav").css({"display": "none"});
		

		// $("#main").css({
		// 	"margin-left": "250px"
		// });


		$(".anthony").css({
			"width": "300px",
			// "height": "100%"
		});

		// $("#opennav").css({
		// 	"z-index": "0"
		// });
	});

	// $(".carol").hover(
	// 	function(){
	// 		// alert($(this).attr("class"))


	// 		$( this ).next(".betty").show();
	// 	},
	// 	function() {
	// 		$( this ).next(".betty").hide();	
	// 	}
	// );

	// $(".barbara").first().css("background", "blue");

	// $(document).mouseup(function(e) 
	// {
	//     var container = $(".betty");

	//     // if the target of the click isn't the container nor a descendant of the container
	//     if (!container.is(e.target) && container.has(e.target).length === 0)  {
	//         // container.removeClass("showing").addClass("hidden");
	//         container.hide();

	//     }
	// });

});