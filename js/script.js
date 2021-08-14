/* DESCRIPTION: CUSTOM JS FILE */

/* NAVIGATION*/
// COLLAPSE THE NAVBAR BY ADDING THE TOP-NAV-COLLAPSE CLASS
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};





/* CARD SLIDER - SWIPER */
var cardSlider = new Swiper(".card-slider", {
    autoplay: {
        delay: 750,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    spaceBetween: 80,
    breakpoints: {
        // when window is <= 767px
        767: {
        slidesPerView: 2,
        },
        // when window is <= 991px
        991: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
    },
});

/* BACK TO TOP BUTTON */
// GET THE BUTTON
myButton = document.getElementById("myBtn");

// WHEN THE USER SCROLLS DOWN 20PX FROM THE TOP OF THE DOCUMENT, SHOW THE BUTTON
function scrollFunctionBTT() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// WHEN THE USER CLICKS ON THE BUTTON, SCROLL TO THE TOP OF THE DOCUMENT
function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; 
}

// AOS ANIMATION ON SCROLL
AOS.init({
    duration: 1000,
    easing: "ease",
    once: true, 
});




function openmenu(){
	document.getElementById("sideMenu").style.width="200px";
	$('img').hide()
};
function closemenu(){
	document.getElementById("sideMenu").style.width="0px";
	$('img').show()
};