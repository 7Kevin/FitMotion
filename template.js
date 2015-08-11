$(function(){
	$("button").hide();
    $('.afb img:gt(0)').hide();
    setInterval(function(){
      $('.afb :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.afb');}, 
      5000);
});

$(".Oo").on("click" , function(){
	$(".home").hide();
	$(".menukaart").hide();
	$(".informatie").hide();
	$(".contact").hide();
	$(".overons").show();
});

$(".Menu").on("click" , function(){
	$(".home").hide();
	$(".overons").hide();
	$(".informatie").hide();
	$(".contact").hide();
	$(".menukaart").show();
});

$(".Inf").on("click" , function(){
	$(".home").hide();
	$(".overons").hide();
	$(".menukaart").hide();
	$(".contact").hide();
	$(".informatie").show();
});

$(".Co").on("click" , function(){
	$(".home").hide();
	$(".overons").hide();
	$(".menukaart").hide();
	$(".informatie").hide();
	$(".contact").show();
});
