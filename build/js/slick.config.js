
$('.mainslider').slick({
	slidesToScroll: 1,
	autoplay: false,
	dots: false,
	infinite: true,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	// centerMode: true,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				arrows: true,
				// centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				// centerMode: true,
				centerPadding: '10px',
				slidesToShow: 1
			}
		}
	]
});


$('.serviceslider').slick({
	slidesToScroll: 1,
	autoplay: false,
	arrows: false,
	dots: true,
	infinite: true,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	// centerMode: true,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				arrows: true,
				// centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 1
			}
		}
	]
});

