$(document).ready(function(){
	console.log("ready!");

	var currentPosition = 0;
	var slides = $('.slide');
	var slideHeight = slides.height();
	var smallSlideHeight;
	// console.log(slideHeight);
	var numberOfSlides = $('.slide').length;
	var slideShowInterval;
	var speed = 2000;
	var slidesHolder = document.getElementById('slidesHolder');
	// console.log(numberOfSlides + "slides on screen right now!" );

	//check class function
	function hasClass(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}

	$(".testing").click(function(){
		$("#masthead").addClass("st-menu-open");
		$("#slidesHolder").addClass("push");
		$("#slidesHolder").css('transform-origin', 'center ' + 50/numberOfSlides + '%' + ' 0px');
		// //hover and darken background
		// $(slides).hover(function(){
		// 	$('.site-content')
		// });
	});
	// $(document).on('click', function(event) {
	// 	if (!$(event.target).closest('.testing').length) {
	// 		$("#masthead").removeClass("st-menu-open");
	// 		$("#slidesHolder").removeClass("push");
	// 		// $('#slidesHolder')
	// 		//   .animate({'marginTop' : (slideHeight)*(-currentPosition)});
	// 	}
	// });

	// slideShowInterval = setInterval(changePosition, speed);
	
	slides.wrapAll('<div id="slidesHolder"></div>');
	
	//the slideHolder is the height of all the slides
	$('#slidesHolder').css('height', slideHeight * numberOfSlides);
	
	//check if the window is resized, then change the height of the slide
	$( window ).on("resize", function(){
		slideHeight = slides.height();
		console.log(slideHeight);
	});
	
	function changePosition(num) {
		if(currentPosition == numberOfSlides - 1) {
			currentPosition = 0;
		}
		else if(num == 1){
			currentPosition++;
		}
		else if(num == 0){
			if(currentPosition <= 0){
				alert("There are no more new posts!");
			}
			else{
				currentPosition--;
			}
		}
		moveSlide();
	}
	
	function moveSlide() {
		var clsPush = document.getElementById('slidesHolder').className;
		slideHeight = slides.height();

		/* something went very wrong here, apparently just moving the .slide would work!!*/
		// if(clsPush == "push"){
		// 	slideHeight = slides.height()*0.5;
		// 	smallSlideHeight = slides.height()*0.5;
		// 	console.log(slideHeight);
		// }
		// else{
		// 	slideHeight = slides.height();
		// 	console.log(slideHeight);
		// }
			// $('#slidesHolder')
			//   .animate({'marginTop' : (slideHeight)*(-currentPosition)});
			$('.slide')
			  .animate({top : (slideHeight)*(-currentPosition)});
	}

	//check if arrow anchors are clicked
	$('.prev').click(function(){
		changePosition(0);
	});

	$('.next').click(function(){
		changePosition(1);
	});

	//check if up or down key is pressed
	$('html').keydown(function(e){
		var UP = 38;
		var DOWN = 40;
		var ENTER = 13
		
		if(e.which == ENTER){
			$("#masthead").removeClass("st-menu-open");
			$("#slidesHolder").removeClass("push");
		}

		if(e.which == DOWN){
			changePosition(1);
		}
		else if(e.which == UP){
			changePosition(0);
		}
	});

	$.firefly({
		color: '#fb9553',
		minPixel: 3,
		maxPixel: 6,
		total : 10,
		on: '.site-content'
	});
});