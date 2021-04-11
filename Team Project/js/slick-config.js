$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
            breakpoint: 1224,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
            },
            {
            breakpoint: 812,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
        ]
    });
});