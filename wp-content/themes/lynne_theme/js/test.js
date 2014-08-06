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

	//check class function
	function hasClass(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}

	$(".open_tab").click(function(){
		// $("#masthead").addClass("st-menu-open");
		// $("#slidesHolder").addClass("push");
		$( "#masthead" ).toggleClass( "st-menu-open");
		$( "#slidesHolder" ).toggleClass( "push");
		$( ".open_tab").toggleClass( "rotate_arrow" );
		$("#slidesHolder").css('transform-origin', 'center ' + 50/numberOfSlides + '%' + ' 0px');
	});
	
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

	// $.firefly({
	// 	color: '#fb9553',
	// 	minPixel: 3,
	// 	maxPixel: 6,
	// 	total : 10,
	// 	on: '.site-content'
	// });
});