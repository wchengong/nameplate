
// Intialize Letteringg JS
$('h1').lettering();

//make the backstretch go!//
$.backstretch('/img/cat.jpg');

// Intialize Masonry
$('article').masonry({
	itemSelector: 'section',
	columnWidth: 300,
	gutter: 10,
	isFitWidth: true
});
