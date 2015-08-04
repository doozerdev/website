/// <reference path="../typings/jquery/jquery.d.ts"/>
/*	Javascript code for all elements
/*----------------------------------------------------*/

 

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

