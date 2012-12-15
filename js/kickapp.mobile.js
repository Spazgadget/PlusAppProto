// JavaScript Document

var scrollingRouteList;
var subpage;

$(function () {
	console.log('start');
	var theScroll;

   if($('#wrapper').length > 0) {
		theScroll = new iScroll('wrapper');
	}
		
			
/* tab functionality  for both 2- and 3-tab setups */
$('#tab0').on('click', function(){
  $(this).css('border-bottom','14px solid #25BEEB');
  $('#tab1').css('border-bottom','14px solid #333');
  $('#tab2').css('border-bottom','14px solid #333');
  $('#page0').css('display','block');
  $('#page1').css('display','none');
  $('#page2').css('display','none');
	checkOptions(0);
})

$('#tab1').on('click', function(){
	subpage
  $(this).css('border-bottom','14px solid #25BEEB');
  $('#tab0').css('border-bottom','14px solid #333');
  $('#tab2').css('border-bottom','14px solid #333');
  $('#page0').css('display','none');
  $('#page1').css('display','block');
  $('#page2').css('display','none');
	checkOptions(1);
})

$('#tab2').on('click', function(){
  $(this).css('border-bottom','14px solid #25BEEB');
  $('#tab0').css('border-bottom','14px solid #333');
  $('#tab1').css('border-bottom','14px solid #333');
  $('#page0').css('display','none');
  $('#page1').css('display','none');
  $('#page2').css('display','block');
	checkOptions(2);
})

/* subtab functionality  for both 2- and 3-tab setups */
$('#sub0').on('click', function(){
	if(whichpage=="dashboard"){
		$('#searchcopy').html("All Circles");
	}
	$(this).removeClass('optionoff');
	$('#sub1').addClass('optionoff');
	$('#sub2').addClass('optionoff');
	$('#subpage0').css('display','block');
	$('#subpage1').css('display','none');
	$('#subpage2').css('display','none');
})

$('#sub1').on('click', function(){
if(whichpage=="dashboard"){
	$('#searchcopy').html("Search Nearby");
}
	$(this).removeClass('optionoff');
	$('#sub0').addClass('optionoff');
	$('#sub2').addClass('optionoff');
	$('#subpage0').css('display','none');
	$('#subpage1').css('display','block');
	$('#subpage2').css('display','none');
})
			
$('#sub2').on('click', function(){
if(whichpage=="dashboard"){
	$('#searchcopy').html("All Themes");
}
	$(this).removeClass('optionoff');
	$('#sub0').addClass('optionoff');
	$('#sub1').addClass('optionoff');
	$('#subpage0').css('display','none');
	$('#subpage1').css('display','none');
	$('#subpage2').css('display','block');
})

$('.star').on('click', function(){
  $(this).toggleClass('starselected');
})


$('#gotoconf').on('click', function(){
  document.location = "2_0_0_ConferenceHomeScreen.html";
})


$('#gotosession').on('click', function(){
  document.location = "2_2_2_SessionDetails.html";
})

$('#settings').on('click', function(){
		// change view
		$('#settings').attr('src','../img/hdpi/10_device_access_storage.png')
		showActions();
})

	function checkOptions(tab){
		
		switch(whichpage){
			case "dashboard":
				if(tab==0){
					$('#sub0').html("PAST");
					$('#sub1').html("PRESENT");
					$('#sub2').html("FUTURE");
				}
				if(tab==1){
					$('#sub0').html("BY CIRCLES");
					$('#sub1').html("BY LOCATION");
					$('#sub2').html("BY THEME");
				}
				break;
			case "map":
				if(tab==0){
					$('#optionsbar').css('display','none');
				}
				if(tab==1){
					$('#optionsbar').css('display','block');
				}
				break;
			
			
			
			
		}
	}

	function showActions(){
		
		//$('#settings-panel').css('display','block');
		$('#container').anim({opacity: .7, translateX: '-710px'}, 0.35, 'ease-out');
		$('#settings-panel').anim({opacity: 1, translateX: '-710px'}, 0.35, 'ease-out');
		$('#settings').on('click', function(){
				// change view
				hideActions();
		})
	}

	function hideActions(){
		$('#container').anim({opacity: 1, translateX: '0px'}, 0.35, 'ease-out');
		$('#settings-panel').anim({opacity: 0, translateX: '0px'}, 0.35, 'ease-out');
		$('#settings').on('click', function(){
				// change view
				showActions();
		})
	}
	

	
	

	
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

	$('#action-home').click(function () {
		whichpage = "dashboard";
		document.location = "1_0_0_Dashboard.html";
		hideActions();
	});
	$('#action-stream').click(function () {
		whichpage = "stream";
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_1_0_ConferenceStream.html";
		hideActions();
	});
	$('#action-map').click(function () {
		whichpage = "map";
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_2_0_Map.html";
		hideActions();
	});
	$('#action-agenda').click(function () {
		whichpage = "agenda";
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_3_0_Agenda.html";
		hideActions();
	});
	$('#action-attendees').click(function () {
		whichpage = "attendees";
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_4_0_Attendees.html";
		hideActions();
	});
	$('#action-speakers').click(function () {
		whichpage = "speakers";
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_5_0_Speakers.html";
		hideActions();
	});
	$('#action-sponsors').click(function () {
		whichpage = "sponsors";
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_6_0_Sponsors.html";
		hideActions();
	});
	$('#action-exhibitors').click(function () {
		whichpage = "exhibitors";
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_7_0_Exhibitors.html";
		hideActions();
	});
	$('#action-feedback').click(function () {
		whichpage = "feedback";
		$('#settings-panel').css({left:'800px', top:'50px',opacity:'0'});
		document.location = "2_8_0_Feedback.html";
		hideActions();
	});

	$('.photo').click(function () {
		$('#bigphotoholder').css('display','block')
		$('#bigphotoholder').anim({opacity:.9}, 0.35, 'ease-out', function () {
		});
	});	
	$('#bigphotoholder').click(function () {
		$('#bigphotoholder').css('display','none')
		$('#bigphotoholder').css('opacity','0')
		});


	$('.sessionimages #gotoconf').click(function () {
		document.location = "2_0_0_ConferenceHomeScreen.html";
								
		});
		



	$('img.sponsorlink').click(function () {
		document.location = "2_6_1_SponsorProfile.html";
	});

	$('img.profilelink').click(function () {
		document.location = "2_4_1_Profile.html";
	});
	
	$('img.speakerlink').click(function () {
		document.location = "2_5_1_SpeakerProfile.html";
	});

	console.log('ready');

	$('#mysignin').click(function () {
		document.location = "1_0_0_Dashboard.html";
	});

	$('#splash').click(function () {
		document.location = "0_1_0_Login.html";
	});

});