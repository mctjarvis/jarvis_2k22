$(document).ready(function(){
	  console.log("Welcome to A Stranger's Journey!");
	
	  setTimeout(function() {
			$('html, body').animate({scrollLeft:0}, 50);
			setTimeout(function() {
				$('html, body').animate({scrollTop:0}, 50);
			},100);
	  });
	
		var cursor = $('#cs-cursor');
		
		setTimeout(function() {
			$('.asj-nav-bar').removeClass('hidden');
		}, 600);
	
		setTimeout(function() {
			 $('.info-subsite').addClass('show');
			 $('#footer').addClass('show');
			 $('#cookies-eu-banner').addClass('show');
		 }, 200);		
	
	  // $(window).mousemove(function(e) {
		// 	cursor.css({
		// 		top: e.clientY - cursor.height() / 2,
		// 		left: e.clientX - cursor.width() / 2
		// 	});
		// });
	
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
			
		if (scrollTop > 1600) {
			$('#to-top-btn').addClass('show');
		} else {
			$('#to-top-btn').removeClass('show');
		}
	
		if(scrollTop <= ($(window).height() * 2) ) {
			$('#header .planet').css('transform', 'translate('+scrollTop/6+'px,'+scrollTop/1.5+'px)rotate(-'+scrollTop/164+'deg)');
		}
	
		if( $(window).scrollTop() > $(window).innerHeight() ) {
		  $('.asj-nav-bar').removeClass('hidden');
		}
	});
	
	$('#to-top-btn').click(function() {
		$('html, body').animate({scrollTop:0}, 800);
		$('.asj-nav-bar').removeClass('open');
		$('.asj-nav-bar-backlayer').removeClass('menu-is-open');    
	});
		
	$('.nav-btn').click(function(){
		$('.asj-nav-bar').toggleClass('open');
		$('.asj-nav-bar-backlayer').toggleClass('menu-is-open');    
	});
	
	$('.asj-nav-bar-backlayer').click(function(){
		$('.asj-nav-bar').removeClass('open');
		$(this).removeClass('menu-is-open');
	});
	  
	$('.copyright-bar .year').html(new Date().getFullYear());	
});