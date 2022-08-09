$('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        570:{items: 2,
        },
        1000:{
            items: 3,
        },
        1200:{
            items: 4,
        },
        1400:{
            items: 4,
            loop: false,
        },
    }
})