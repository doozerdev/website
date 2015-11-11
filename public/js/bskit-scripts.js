/*	Javascript code for all elements
/*----------------------------------------------------*/

/* -------- NavBar Scrolling change -------- */
// old option: var mainbottom = $('#header-3').offset().top + $('#header-3').height();
var mainbottom = $('#header-3').height();

function switchNavBar(){
    //round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());
	
    if (stop > mainbottom - 20) {
        $('#navdzr').addClass('navbar-dzr-solid');
    } else {
        $('#navdzr').removeClass('navbar-dzr-solid');
    }
};


$(window).scroll(switchNavBar);
	
/* -------- Modal & Form Events ---------*/
$('#ExpertModal').on('show.bs.modal', function (e) {
	if (e.relatedTarget.id == 'signupbutton') {
		console.log("modal triggered by button");
		ga('send', 'event', 'SignUp', 'openexpertform', 'dialogbutton');
	} else if (e.relatedTarget.id == 'signuplink') {
		console.log("modal triggered by link");
		ga('send', 'event', 'SignUp', 'openexpertform', 'dialoglink');
	}
});


var submitSignUp = function (usertype, location) {
	ga('send', 'event', 'SignUp', usertype, location);
	return true;	
};
 

/* -------- Owl Carousel -------- */
$(document).ready(function() {
	$(".scenario-carousel").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 600,
		rewindSpeed: 2000,
		singleItem : true,
	    autoPlay : 8000,
		stopOnHover: true,		
	});
});

// End Owl Carousel



/* -------- Tooltip -------- */
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});
// End Tooltip

