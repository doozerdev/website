/// <reference path="../typings/jquery/jquery.d.ts"/>
/*	Javascript code for all elements
/*----------------------------------------------------*/


/* -------- Owl Carousel -------- */
$(".scenario-carousel").owlCarousel({
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem : true,
    autoPlay : 4000,		
});
// End Owl Carousel



/* -------- Tooltip -------- */
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});
// End Tooltip

