$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

window.onload = function() {

	var imageSlider = new Vue({
		el: "#image-slider",
		data: {
			heading: "Lorem Ipsem dolor set amet con sect",
			subHeading: "Lorem Ipsem dolor set amet con sect",
			slides: [
				{
					image: "./assets/images/laptop.png",
					text: "Short description about the current slide. Preferable length would be around 150 characters",
					heading: "Marketing",
				},
				{
					image: "./assets/images/img-2.jpg",
					text: "Short description about the current slide. Preferable length would be around 150 characters",
					heading: "Marketing",
				},
				{
					image: "./assets/images/img-3.jpg",
					text: "Short description about the current slide. Preferable length would be around 150 characters",
					heading: "Content Writing",
				},
				{
					image: "./assets/images/img-4.jpg",
					text: "Short description about the current slide. Preferable length would be around 150 characters",
					heading: "Web Development",
				},
				{
					image: "./assets/images/img-5.jpg",
					text: "Short description about the current slide. Preferable length would be around 150 characters",
					heading: "Just a long sentence to see transition",
				},
			],
		},

		methods: {
			hello: function() {
				console.log("Hello");
			}
		}
	});

	/*var testimony = new Vue({
		el: "#testimony",
		data: {
			testimony: [
				{
					user: "Arun Kumar",
					company: "Designer",
					review: "It's been few months since I started working with the online monk and it's been great so far. I consider myself fortunate to work with them. We have a structured and well organized system that enables us to focus on our game and deliver the best. The down to earth attitude of the management is an asset. Wishing all the very best for the company to unravel higher levels of success. "
				},
				{
					user: "Archana",
					company: "Writer",
					review: "I have been writing for TOM for a few months now and I have no complaints at all. The payments happen proactively and there is a cohesive discussion before content requests are sent out. What more can a writer ask for? ",
				},
				{
					user: "Iti Shree",
					company: "Writer",
					review: "My experience has been great with TOM, it is like an amazing family. Arpan is amazingly cooperative. I have learned so many things here and besides all of that writing here is fun.",
				},
			]
		}
	});*/

	//add slide buttons
	$('.slide').each(function() {
		console.log("hello");
		$('.slide-buttons').append('<span class="slide-toggle-button"></span>');
	});

	$('.slide-toggle-button').click(function() {
		var index = $(this).index();
		currentSlide = index;
		changeSlide(index);
	});

	//scroll to top
	$('.scroll-to-top').click(function(){
		$('html, body').animate({
			scrollTop: 0,
		}, 1000);
	});

	function changeSlide(index){
		$('.slide-toggle-button').removeClass('active');
		$('.slide-toggle-button:eq('+index+')').addClass('active');

		$('.slide').removeClass('active');
		$('.slide:eq('+index+')').addClass('active');

	}

	$('#menu').click(function() {
		$(this).toggleClass("menu-visible");
		$('#site-nav').toggleClass('reveal');
		$('header').addClass('scrolled');
		if($(window).scrollTop() < 5 && !$(this).hasClass('menu-visible')) {
			window.setTimeout(function(){ $('header').removeClass('scrolled'); }, 1500);
		}
	});


	var prevScroll = 0;
	counterInitiated = false;
	$(window).on('resize scroll', function() {
	  	$('.animated').each(function() {
	    
		    if ($(this).isInViewport()) {
		    	$(this).addClass("full");
		    }
	  });

	  	//checking that header nav is at top or not and accordingly add its background
	  	if($(window).scrollTop() > 5) {
	  		$('header').addClass("scrolled");
	  	}else {
	  		$('header').removeClass("scrolled");
	  	}

	  	if($(window).scrollTop() > $(window).height()) {
	  		$('.scroll-to-top').addClass("visible");
	  	}else {
	  		$('.scroll-to-top').removeClass("visible");
	  	}

	  	//check if counter is in view port and start to animate it
	  	if($('.counter').isInViewport() && !counterInitiated) {
	  		startCounter();
	  		counterInitiated = true;
	  	}

	  	//check if testimony is in view and modify it
	  	if($('.testimony').isInViewport()) {
	  		$('.testimony').removeClass("hidden");
	  	}
	});
	var currentSlide = 0;
	window.setInterval(function() {
		//console.log("called");
		//changeSlide((currentSlide++)%$('.slide').length);
	}, 5000);

	//find classes with slide text-left and change there inner html
	$('.slide-text-left').each(function(){
		var text = $(this).text();
		$(this).html('').append("<span class='anim-left'>"+text+"</span>");
	});

	//show details card
	$('.logo img, .logo span, ._detail-card, ._detail-card::after').hover(function() {
		$('._detail-card').toggleClass("active");
	});


	//testimony card holders
	$('.testimony-cards-holder').css({
		"width": (($(".testimony-card").width() + 32 ) * $(".testimony-card").length)+"px",
	});

	var currentTestimonySlide = 0;
	//switching of testimony slide
	$('#testimony-switcher').click(function(){
		$('.testimony-card').removeClass("shrink");
		$('.testimony-card:eq('+currentTestimonySlide+')').addClass("shrink");
		currentTestimonySlide = ++currentTestimonySlide % $('.testimony-card').length;
		// remove margin on smaller devices
		margin = ($(window).width() > 577) ? 32 : 0;
		var p = ($('.testimony-card').width() + margin) * currentTestimonySlide;
		//if(currentTestimonySlide == 0) {$('.testimony-card').removeClass("shrink");}
		var s = "translateX(-"+p+"px)";
		$('.testimony-cards-holder').css({
			"transform" : s,
		});
	});

	//counter whic is below banner
	function startCounter() {
		$('.count').each(function() {
			var count = parseInt($(this).text().replace('+', ''));
			console.log(count);

			countTill(0, count, $(this), 0);
		});
	}

	function countTill(start, final, ele, inc){
		var steps = 50;
		var duration = 30;
		if(steps == inc){
			ele.html(final+"+");
			return;
		}
		var cur = Math.ceil(start + (final / steps) * inc);
		//console.log(start, final, inc, cur);
		ele.html(cur+"+");
		window.setTimeout(function(){
			countTill(start, final, ele, ++inc);
		}, duration);
	}
	//start customer curousel
	function startCurousel(){
		$('.slider-customer').removeClass("sliding");
		window.setTimeout(function() {$('.slider-customer').addClass("sliding");}, 100);
		window.setTimeout(startCurousel, 50000);
	}

	$('.slide-down-button').click(function() {
		$('html, body').animate({
			scrollTop: $(window).height(),
		}, 1000);
	});

	startCurousel();
	console.log("called");
	changeSlide(0);
};
