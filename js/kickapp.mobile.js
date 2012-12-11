// JavaScript Document

var scrollingRouteList;

$(function () {
	

	var theScroll;

    theScroll = new iScroll('wrapper');

	
			
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


$('#gotoconf').on('click', function(){
  document.location = "2_0_0_ConferenceHomeScreen.html";
})


$('#herogotoconf').on('click', function(){
  document.location = "2_0_0_ConferenceHomeScreen.html";
})

$('#settings').on('click', function(){
		// change view
		showActions();
})

	function showActions(){
		
		$('#settings-panel').css('display','block');
		$('#container').anim({translateX: '-720px'}, 0.35, 'ease-out');
		$('#settings-panel').anim({opacity: 1, translateX: '-720px'}, 0.35, 'ease-out');
	}

		function hideActions(){


			
			$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
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
	
	$('#homelink').click(function () {
		
		document.location = "1_0_0_Dashboard.html";
		//hideActions();
	});	
	$('#action-stream').click(function () {
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_1_0_ConferenceStream.html";
		//hideActions();
	});
	$('#action-map').click(function () {
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_2_0_Map.html";
	});
	$('#action-agenda').click(function () {
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_3_0_Agenda.html";
		//hideActions();
	});
	$('#action-attendees').click(function () {
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_4_0_Attendees.html";
		//hideActions();
	});
	$('#action-speakers').click(function () {
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_5_0_Speakers.html";
		//hideActions();
	});
	$('#action-sponsors').click(function () {
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_6_0_Sponsors.html";
		//hideActions();
	});
	$('#action-exhibitors').click(function () {
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_7_0_Exhibitors.html";
		//hideActions();
	});
	$('#action-feedback').click(function () {
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_8_0_Feedback.html";
		//hideActions();
	});
		$('.photo').mouseover(function () {
			$(this).children('.photobar').anim({opacity:1}, 0.2, 'linear', function () {
			});
		});
				$('.photo').mouseout(function () {
					$(this).children('.photobar').anim({opacity:0}, 0.2, 'linear', function () {
					});
				});
							$('.photo').click(function () {
								$('#bigphotoholder').css('display','block')
								$('#bigphotoholder').anim({opacity:.8}, 0.35, 'ease-out', function () {
								});
							});	
							$('#bigphotoholder').click(function () {
									$('#bigphotoholder').css('display','none')
									$('#bigphotoholder').css('opacity','0')
								});

								/**
								 * profile links 
								 **/
					$('.sessionimages #gotoconf').click(function () {
						document.location = "2_0_0_ConferenceHomeScreen.html";
									//alert("image");
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