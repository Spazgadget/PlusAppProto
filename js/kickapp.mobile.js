// JavaScript Document

var scrollingRouteList;

$(function () {
	

	var theScroll;
	function scroll() {
    theScroll = new iScroll('pagebody');
}
	document.addEventListener('DOMContentLoaded', scroll, false);
			
/* tab functionality  for both 2- and 3-tab setups */
$('#tab0').on('click', function(){
  $(this).css('border-bottom','14px solid #25BEEB');
  $('#tab1').css('border-bottom','14px solid #333');
  $('#tab2').css('border-bottom','14px solid #333');
  $('#page0').css('display','block');
  $('#page1').css('display','none');
  $('#page2').css('display','none');
})

$('#tab1').on('click', function(){
  $(this).css('border-bottom','14px solid #25BEEB');
  $('#tab0').css('border-bottom','14px solid #333');
  $('#tab2').css('border-bottom','14px solid #333');
  $('#page0').css('display','none');
  $('#page1').css('display','block');
  $('#page2').css('display','none');
})

$('#tab2').on('click', function(){
  $(this).css('border-bottom','14px solid #25BEEB');
  $('#tab0').css('border-bottom','14px solid #333');
  $('#tab1').css('border-bottom','14px solid #333');
  $('#page0').css('display','none');
  $('#page1').css('display','none');
  $('#page2').css('display','block');
})

$('#star').on('click', function(){
  $(this).toggleClass('starselected');
})

$('#settings').on('click', function(){
		// change view
		showActions();
})

	function showActions(){
		
		$('#settings-panel').css({display: 'block', left: '800px'});
		animateActions();
	}

	function animateActions(){
		$('#container').anim({translateX: '-720px', opacity: 0.5}, 0.5, 'ease-out');
		$('#settings-panel').anim({translateX: '0px', opacity: 1}, 0.5, 'ease-out');
		}
		
	function hideActions(){
		$('#container').anim({translateX: '0px', opacity: 1}, 0.35, 'ease-out', function () {
			
		});
		$('#settings-panel').anim({translateX: '710px', opacity: 0}, 0.35, 'ease-out', function () {
			
		});
		}
	
	/**
	 * back to home view
	 **/
	$('#back-btn').click(function () {
		hideDetail(function () {
			$('#view-holder').anim({translateX: '-0px'}, 0.35, 'ease-out', function () {
				$('#map-title-text').html('');
			});
		});
	});
	
	

	
	/**
	 * Start application
	 **/
	$('#splash').click(function () {
		$('#kick-main').show();
		$('#splash').anim({translateY: '-480px'	}, 0.25, 'ease-out');

		// set scroller
		document.addEventListener('touchmove', function(e){ e.preventDefault(); });
		scrollingRouteList = new iScroll('route-list-scroller');
	});
	
	/**
	 * action panel 
	 **/
	$('#action-stream').click(function () {
		document.location = "2_1_0_ConferenceStream.html";
		//hideActions();
	});
	$('#action-map').click(function () {
		document.location = "2_2_0_Map.html";
		//hideActions();
	});
	$('#action-agenda').click(function () {
		document.location = "2_3_0_Agenda.html";
		//hideActions();
	});
	$('#action-attendees').click(function () {
		document.location = "2_4_0_Attendees.html";
		//hideActions();
	});
	$('#action-speakers').click(function () {
		document.location = "2_5_0_Speakers.html";
		//hideActions();
	});
	$('#action-sponsors').click(function () {
		document.location = "2_6_0_Sponsors.html";
		//hideActions();
	});
	$('#action-exhibitors').click(function () {
		document.location = "2_7_0_Exhibitors.html";
		//hideActions();
	});
	$('#action-feedback').click(function () {
		document.location = "2_8_0_Feedback.html";
		//hideActions();
	});
	
	/**
	 * profile links 
	 **/
	$('.listing img').click(function () {
		document.location = "2_4_1_Profile.html";
		//alert("image");
		//hideActions();
	});
});