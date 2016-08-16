$(document).ready(function() {
	var pic = 0;

	$('#arrow-prev').click(function() {

		var currentPic = pic;
		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		pic -= 1;

		if(pic < 0) {
			pic = 5;
			prevDot = $('.dot').last();
		}
		
		$('#Top').removeClass('background' + currentPic);
		$('#Top').addClass('background' + pic);

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');

	});

	$('#arrow-next').click(function() {

		var currentPic = pic;
		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		pic += 1;

		if(pic > 5) {
			pic = 0;
			nextDot = $('.dot').first();
		}

		$('#Top').removeClass('background' + currentPic);
		$('#Top').addClass('background' + pic);

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');

	});

	$('.dot').click(function() {
		var activeDot = $('.active-dot');
		var clickedDot = $(this).index();

		$('#Top').removeClass('background' + pic);
		$('#Top').addClass('background' + clickedDot);
		pic = clickedDot;

		activeDot.removeClass('active-dot');
		$(this).addClass('active-dot');
	});
	

});