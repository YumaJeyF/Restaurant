import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export function workSwiper() {
    Swiper.use([Navigation, Pagination, Autoplay]);

    const slider = document.querySelector('.swiper');

    const mySwiper = new Swiper(slider, {
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: true,
        speed: 800,
	    pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
	    },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        breakpoints: {
            250: {
                slidesPerView: 1,
                loop: true
            },
            630: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        }
    });
}