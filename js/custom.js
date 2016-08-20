// Custom JS for the Theme
 
// Preloader 
//-------------------------------------------------------------------------------

$(window).load(function(){

	$('#status').fadeOut(); 
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({'overflow':'visible'});
   $('.navbar').fadeIn();

	$('img.img-fade').hide();

	function anim() {

		var fadeSpeed	= 3000;	// = 2.5 sec
		var displayTime	= 5000;	// = 8 sec

		$("#header-bg-fade img.img-fade").first().appendTo('#header-bg-fade').fadeOut(fadeSpeed);
		$("#header-bg-fade img").first().fadeIn(fadeSpeed);
		setTimeout(anim, displayTime);
	}

	anim();
});
 

// Tooltip 
//-------------------------------------------------------------------------------

$(".my-tooltip").tooltip();// use the title

 

// Navigation 
//-------------------------------------------------------------------------------

$(document).scroll(function () {
     var y = $(this).scrollTop();
 });

var navigation_links = $("nav li a");

navigation_links.click( function(event) {
  var position = $(this).attr('href');
  $('html, body').animate({ scrollTop: $(position).offset().top - 72}, 'slow', function(){
  });
  return false;
});



// Eventinfo Buttons 
//-------------------------------------------------------------------------------

var eventinfo_links = $(".event-info-nav-button");

eventinfo_links.click( function(event) {
  var link = $(this).find("a");
  var position = link.attr('href');
  $('html, body').animate({ scrollTop: $(position).offset().top - 73}, 'slow', function(){
  });
  return false;
});



// Register Button 
//-------------------------------------------------------------------------------

var register_button = $(".event-info-register-btn");

register_button.click( function(event) {
  var link = $(this);
  var position = link.attr('href');
  $('html, body').animate({ scrollTop: $(position).offset().top - 73}, 'slow', function(){
  });
  return false;
});



// Scroll to Top Button
//-------------------------------------------------------------------------------

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').removeClass("animated fadeOutRight");
      $('.scrollup').fadeIn().addClass("animated fadeInRight");
      } else {
      $('.scrollup').removeClass("animated fadeInRight");
      $('.scrollup').fadeOut().addClass("animated fadeOutRight");
    }
  });
  
  $('.scrollup, .navbar-brand').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 'slow', function(){
      $("nav li a").removeClass('active');
    });
    return false;
  });


  //Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
  var carusel = $(this).parents('.carousel');
  right_carusel(carusel);
  return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
  var carusel = $(this).parents('.carousel');
  left_carusel(carusel);
  return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
    $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
  auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
  setInterval(function(){
    if (!$(carusel).is('.hover'))
      right_carusel(carusel);
  }, 3000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})

 
