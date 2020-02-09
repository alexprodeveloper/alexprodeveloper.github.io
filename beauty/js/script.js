
$(function()
	{
		$('.pane').jScrollPane({
			autoReinitialise: false,
			showArrows:true
		});
		
	});

$("#datepicker").datepicker();

$('#header .right_block .icons a').hover(function(){
	$(this).toggleClass('hatch');
});

$('.btn11').click (function(){
  $(this).toggleClass('open');
  $('#header .mobile__menu').toggleClass('active');
  $('body').toggleClass('hid');
  $('#header .logo').toggleClass('act');
});

$("#cat").change(function() {
	$('.catalog__page .filter_block .filter .scrolling_block .item').removeClass('active')
	                  .eq($(this).index()).addClass('active');
	return false;
});

$('.regInCatalog_page .step3 .table_block .deskript a').click(function(){
	$(this).toggleClass('active');
	$(this).prev().slideToggle();
	$(this).prev().prev().toggleClass('active');
});

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#load_img').addClass('active').attr('src', e.target.result);
	  $('#load_text').hide();
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function() {
  readURL(this);
});

function readURL2(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#photo').addClass('active').attr('src', e.target.result);
	  $('#camera').hide();
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgLoad").change(function() {
  readURL2(this);
});

$(document).ready( function() {
    $("#hid_load").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename").val(filename);
    });
});

$(".anonces_page .top_block .add_area .block .title").wrapInner('<span class="rL w100 h100 tb"><span class="rL w100 h100 tbc vM">');

$(".anonces_page .catalog_stickers .row .item .sold_out").next().next().addClass('sold');

$(".anonces_page .catalog_stickers .row .item .text_block .title.payed").parent().prev().addClass('payed')

$(document).ready(function(){
 
	$('.anonces_page .catalog_pad .row .item .text_block .title').each(function(){
		var newText = $(this).text().split(' ').join('</span><span>');
		newText = '<span>' + newText + '</span>';
 
		$(this).html(newText);
	});
 
});

 $(function(){
	$('.anonces_page .sorting .switcher span').click(function(){
		$('.anonces_page .sorting .switcher span').removeClass("active");
		$(this).toggleClass('active');
	});
	
	
	$(".anonces_page .sorting .switcher .pad").on("click", function(){
		$('.anonces_page .main_catalog').removeClass("catalog_stickers");
		$(".anonces_page .main_catalog").addClass("catalog_pad");
	})

	$(".anonces_page .sorting .switcher .sticker").on("click", function(){
		$('.anonces_page .main_catalog').removeClass("catalog_pad");
		$(".anonces_page .main_catalog").addClass("catalog_stickers");
	})
	});
	
 $('.anonces_page.inr').parent().prev().addClass('hide');
 $('.anonces_page.inr').parent().css({'padding-top' : '0'});
	
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 550) {
            $('.anonces_page.ind .top_block').addClass('fix_block');
            $('.anonces_page.ind .subtop').addClass('to_fix');
			$('.anonces_page.ind .search_block').addClass('fix_block');
			$('.anonces_page.ind .subsearch').addClass('to_fix');
        } else {
           $('.anonces_page.ind .top_block').removeClass('fix_block');
           $('.anonces_page.ind .subtop').removeClass('to_fix');
		   $('.anonces_page.ind .search_block').removeClass('fix_block');
		   $('.anonces_page.ind .subsearch').removeClass('to_fix');
        }
    });
 });