var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	typeSpeed : 50,
	backSpeed : 25,
	showCursor: false,
	loop: true,
});

// slideshow code

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1)
    .next()
    .fadeIn(1)
    .end()
    .appendTo('#slideshow');
}, 3000);