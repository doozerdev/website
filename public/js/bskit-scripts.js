/// <reference path="../typings/jquery/jquery.d.ts"/>
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

