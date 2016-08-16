$(document).ready(function() {
	var up = false;

	/*this var fixes completion of second function in hover after a click
	  initially completed function to immediately remove the hover class*/
	var after_Click = false;


	/* Used this style of hover instead of css because it kept the
	   icon hovered as it scrolled up and stayed that way until
	   the mouse was moved, this as the next function fixed it */
	   

	$('.fa').hover(
		function() {
			if(up && ($(this).attr('class')) == "fa fa-envelope-square fa-5x hovering" ){
				$(this).removeClass('hovering');
			}
			else {
				$(this).addClass('hovering');
			}
		},
		function() {
			if(up && ($(this).attr('class')) == "fa fa-envelope-square fa-5x" ){
				$(this).addClass('hovering');
			}
			else if (after_Click) {
				after_Click = false;
			}
			else {
				$(this).removeClass('hovering');
			}
		}
	);  


	$(".fa-envelope-square").click(function() {

		after_Click = true;

		if(!up) {
			$(this).addClass('hovering');
			$("#icons").animate({top:'-=22vh'}, 500);
			$("#email-wind").delay(600).fadeIn(800);
			up = true;
		}
		else {
			$("#email-wind").fadeOut(500);
			$("#icons").delay(650).animate({top:'+=22vh'}, 500);
			up = false;
		}
	});

	$('.form-input').keydown(function(e) {
	  if(e.keyCode == 13) { // for enter key
	    return false; // prevent execution of rest of the script + event propagation / event bubbling + prevent default behaviour
	  }
	});

	$('.form-input').change(function() {
		if( ($("#name").val()) && ($("#email").val()) && ($("#message").val()) && ($('#email').val() == ($('#confirm').val()))) { 
			$('input[type=submit]').removeClass('disabled-button');
			$('input[type=submit]').addClass('active-button');
			$('#warning').hide();
		}
		else {
			$('input[type=submit]').removeClass('active-button');
			$('input[type=submit]').addClass('disabled-button');
			$('#warning').show();
		}
	});


	$('input[type=submit]').click(function() {
		$('.form-input').val('');
	});

});
