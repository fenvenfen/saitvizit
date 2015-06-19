$(document).ready(function(){
	startSlider();
});


function startSlider(){
	$(".slider").cycle({
		timeout: 6000,
		speed: 2000
	});
}