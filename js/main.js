$(document).ready(function(){
	startSlider(); //start simple  slider
});


function startSlider(){
	$(".slider").cycle({
		timeout: 6000,
		speed: 2000
	});
}