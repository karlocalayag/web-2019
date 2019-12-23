//

$(document).ready(function(){
	$('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});


})



// external js: isotope.pkgd.js

//$('.grid').isotope({
  //itemSelector: '.grid-item',
  //masonry: {
    //columnWidth: 100
  //}
//});

///////

$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	})
	return false;
});
