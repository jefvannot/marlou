/*$('.arrow').on('click', function() {
	$('.horizontal-wrapper').scrollLeft();
	$('.left').css("background-color", "red");
});


$(".left").on('click', function () { 
  var leftPos = $('.horizontal-wrapper').scrollLeft();
  $(".horizontal-wrapper").animate({scrollLeft: leftPos - 200}, 800);
});

$(".right").on('click', function () { 
   $('.horizontal-wrapper').scrollLeft($('.horizontal-wrapper').scrollLeft() + 20);
});
*/






/******* Horizontal Mouse Scroll ********/
$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});

/******* Arrows sroll click event ********/
	
	/*** code bon sans repeat ***
$('.right').on('click', function () { 
   $('html, body, *').animate({scrollLeft: $('.horizontal-wrapper').scrollLeft() + $(window).width()}, 800);
});
	*/

	/*** code bon sans gestion de taille ***
$('.right').on('click', function() { 
   $('html, body, *').each(function() {
   		$(this).animate({scrollLeft: $(this).scrollLeft() + $(window).width() * 0.5}, 800);
   	});
});

$('.left').on('click', function() { 
   $('html, body, *').each(function() {
   		$(this).animate({scrollLeft: $(this).scrollLeft() - $(window).width()}, 800);
   	});
});
	*/

/*
var imgNum = 0;

$('.right').on('click', function() 
{ 
   $('html, body, *').each(function() 
   {
   		$(this).animate({scrollLeft: $(this).scrollLeft() + ($(".img-" + imgNum).width() + 2)}, 800);
   		console.log(imgNum);
   		
   	});
   imgNum++;
});

$('.left').on('click', function() { 
   $('html, body, *').each(function() {
   		$(this).animate({scrollLeft: $(this).scrollLeft() - $(window).width()}, 800);
   	});
});
*/



$(document).ready(function() 
{
  var p = $("#gallery").portfolio();
  p.init();
});

$('.navbar-link').on('click', function()
{
  portfolio.slideTo($(gallery).find('img').first());
});

/*
$('.right').on('click', function() 
{ 
   $('html, body, *').each(function() 
   {
      $(this).animate({scrollLeft: $(this).scrollLeft() + (($("img").withinViewport()).width() + 2)}, 800);
    });
   
});

$('.left').on('click', function() 
{ 
   $('html, body, *').each(function() 
   {
      $(this).animate({scrollLeft: $(this).scrollLeft() - (($("img").withinViewport()).width() + 2)}, 800);
    });
   
});
*/



/*
$('.right').on('click', function() 
{ 
   $('html, body, *').each(function()
   {
      
        console.log(1);
        $(this).animate({scrollLeft: $(this).scrollLeft() + (($("img").withinViewport()).width() + 2)}, 800);  

      /*
      else if ($("img").withinViewportRight())
      {
        $(this).animate({scrollLeft: $(this).scrollLeft() + (($("img").withinViewportRight()).width() + 2)}, 800);
      }
      
      else
      {
        console.log(3);
        $(this).animate({scrollLeft: leftPos - 200}, 800);
      }
      
    });
   
});
*/










/*
$(function() {
    $('ul.nav a').bind('click',function(event){
        var $anchor = $(this);
        /*
        if you want to use one of the easing effects:
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1500,'easeInOutExpo');
         *
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1000);
        event.preventDefault();
    });
});
*/


/*

<script>
    $(document).ready(function() {
            var p = $("#gallery").portfolio();
            p.init();
    });
</script>

*/


