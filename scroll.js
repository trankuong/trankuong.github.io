$(document).ready(function() {
  
	$('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
        if ($target) {
          var targetOffset = $target.offset().top - $('#Cover').height();
					
					/*to fix cases where scroll doesn't scroll enough, leaving small pixel from last div*/
					targetOffset = Math.round(targetOffset);

        $(this).click(function() {
          $('html, body').animate({scrollTop: targetOffset}, 1000);
          return false;
        });
      }
    }
  });

});