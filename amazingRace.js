$(document).ready(function() {
	var player1Position = -1;
	var player2Position = -1;
	var startTime = null;
	var endTime = null;
	var win = false;

	$('#entry').submit(function(event) {
	    event.preventDefault();
	    var name1 = $('#name1').val();
	    var name2 = $('#name2').val();
		$('#name1').attr("disabled", "disabled");
		$('#name2').attr("disabled", "disabled");
		// $("#entry")[0].reset();
		$('.nameFill1').append('h1').text(name1);
		$('.nameFill2').append('h1').text(name2);
});

    $('#start').click(function() {

		$("body").keydown(function() {

			$("#banner").prepend( '<button type="button" onclick="location.reload();">Start over</button>' );
			if (startTime === null) {
				startTime = new Date().getTime();
			}

			if (event.which === 65) {
				if (player1Position === 42) {
					endTime = new Date().getTime();
					var name1 = $('#name1').val();
					var timeDiff = Math.floor((endTime - startTime) /1000);
					win === true;
					$("#banner").prepend().text(name1 + " wins with a time of " + timeDiff + " seconds!");
					$("#banner").prepend( '<button type="button" onclick="location.reload();">Start over</button>' );
					$("#banner").css( "display", "block" );
				}
				$(".car1").animate({marginLeft: '+=20px'}, 0);
				player1Position++;

			} else if (event.which === 76) {
				if (player2Position === 42) {
					endTime = new Date().getTime();
	    			var name2 = $('#name2').val();
					var timeDiff = Math.floor((endTime - startTime) /1000);
					win === true;
					$("#banner").prepend().text(name2 + " wins with a time of " + timeDiff + " seconds!");
					$("#banner").prepend('<button type="button" onclick="location.reload();">Start over</button>');
					$("#banner").css("display","block");
				}
				$(".car2").animate({marginLeft: '+=20px'}, 0);
				player2Position++;
			}

		});
	});

});

