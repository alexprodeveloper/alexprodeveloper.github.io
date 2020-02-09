/*Feedback*/
$('.slider').owlCarousel({
    loop:true,
    margin:0,
	nav:true,
	navText:false,
	dots:false,
	responsive:{
		0:{
            items:1,
            nav:true
        },
		850:{
            items:2,
            nav:true
        },
		1200:{
            items:3,
            nav:true
        }
    }
});

/*Occasion*/
$('.occasion_slider').owlCarousel({
    loop:true,
    margin:0,
	nav:true,
	navText:["Предыдущая страница","Следующая страница"],
	dots:false,
	responsive:{
		0:{
            items:1,
            navText:["",""]
        },
        550:{
        	items:1,
        	nav:true
        },
		1450:{
            items:2,
            nav:true
        }
    }
});

/*All feedback*/
$(document).ready(function() {
	$('select.nice').selectBox();      
});

/*Map*/
/*$(document).ready(function() {
	$(".menu").accordion({
		accordion:true,
		speed: 500,
		closedSign: '<em class="plus"></em>',
		openedSign: '<em class="minus"></em>'
	});
});*/

$( function() {
 $( ".menu" ).accordion({
 collapsible: true
 });
 } );

/*special offer*/
 $('.mail').click(function(){
	$('#mail').arcticmodal()
});
	 
/*experts*/
$('.my_tabs ul a').click(function() {
	$('.my_tabs ul a.active').removeClass('active');
	$(this).addClass('active');
	$('.my_tabs div.item').removeClass('active')
	                  .eq($(this).parent().index()).addClass('active');
	return false;
});

/*Modals*/
 $('.ent').click(function(){
	$('#autorization').arcticmodal()
});
	 
 $('.feedback_but').click(function(){
	$('#feedback').arcticmodal()
});

 $('.organization').click(function(){
	$('#org').arcticmodal()
});


 /*services*/
$(document).ready(function(){ 
	$(".scroll").click(function (event) { 
		event.preventDefault(); 
		var id = $(this).attr('href'), 
		top = $(id).offset().top; 
		$('body,html').animate({scrollTop: top}, 1500); 
	}); 
});


 $('.slide').owlCarousel({
    loop:false,
    margin:0,
	nav:false,
	navText:false,
	dots:false,
	responsive:{
		0:{
            items:1,
        },
		700:{
            items:2,
        },
		1000:{
            items:3,
        }
    }
});


$('.photo_slider').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	nav:true,
	navText:false,
	dots:false,
	autoplay:true,
	autoplayTimeout:300,
	autoplayHoverPause : true,
});



$(document).ready(function() {

	$(".sert_pic").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

});


/*немного доделать*/
$(document).ready(function() {
	$(".vip_page .specialOffer .offer .more").click(function (event) {
		$(".vip_page .specialOffer .offer p").addClass("ha");
		return false;
	})
})




 $('.brand_slider').owlCarousel({
    loop:true,
    margin:0,
	nav:true,
	navText:false,
	dots:false,
	responsive:{
		0:{
            items:1,
        },
        400:{
            items:2,
        },
		600:{
            items:3,
        },
        700:{
            items:4,
        },
        800:{
            items:5,
        },
		1000:{
            items:6,
        }
    }
});





$('.near_slider').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	nav:true,
	navText:true,
	dots:false,
	autoplay:true,
	autoplayTimeout:300,
	autoplayHoverPause : true,
});


$('.my_tabs.beauty ul li').click(function() {
	$('.my_tabs ul li.active').removeClass('active');
	$(this).addClass('active');
	$('.my_tabs div.block').removeClass('active')
	                  .eq($(this).parent().index()).addClass('active');
	return false;
});

$('.articles_slider').owlCarousel({
    loop:true,
    margin:0,
	nav:false,
	navText:false,
	dots:false,
	responsive:{
		0:{
            items:1,
            nav:true
        },
		850:{
            items:2,
            nav:true
        },
		1200:{
            items:3,
            nav:true
        }
    }
});


jQuery(function()
	{
		jQuery('.scroll_block').jScrollPane({
			autoReinitialise: false,
			showArrows:true
		});
		
	});


$('.serv div').click(function() {
	$('.serv div.active').removeClass('active');
	$(this).addClass('active');
	return false;
});

$('.switch .option').click(function() {
	$('.switch .option.active').removeClass('active');
	$(this).addClass('active');
	return false;
});
$("#cat").change(function() {
	$('.allServices_page .filter_block .filter .scrolling_block .item').removeClass('active')
	                  .eq($(this).index()).addClass('active');
	return false;
});


$(".anoncesTheme_page .hidden_filter").click(function(){
	$(".anoncesTheme_page .hidden_filter").addClass('active');
})

$(".anoncesTheme_page .hidden_filter .close").click(function(){
	$(".anoncesTheme_page .hidden_filter").toggleClass('active');
})

/*
$(".hidden_filter .wrap .first .option").change(function() {
	$('.hidden_filter .wrap .first .option.tapped').removeClass('tapped')
	                  .eq($(this).index()).addClass('tapped');
	return false;
});

$(".anoncesTheme_page .hidden_filter .wrap .second .option").change(function() {
	$('.anoncesTheme_page .hidden_filter .wrap .second .option').removeClass('tapped')
	                  .eq($(this).index()).addClass('tapped');
	return false;
});*/


