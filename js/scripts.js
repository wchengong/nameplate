// Intialize Letteringg JS

$('h1').lettering();

//make the backstretch go!//
$.backstretch('/img/2.jpg');

// Intialize Masonry
$('article').masonry({
	itemSelector: 'section',
	columnWidth: 200,
	gutter: 10,
	isFitWidth: true
});
