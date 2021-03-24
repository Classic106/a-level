$( document ).ready(function() {
    console.log("dsfdsfs");
    $('.slider').slick({
        infinite: true,
	    dots: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
        adaptiveHeight: true,
        initialSlide: 8,
        prevArrow: '<div class="prev slider_btn icon-angle-left"></div>',
        nextArrow: '<div class="next slider_btn icon-angle-right"></div>',
    });
});