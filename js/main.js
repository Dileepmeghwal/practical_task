$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})


const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-menu");
humburger.addEventListener("click", () => {
    humburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


document.querySelectorAll(".nav-link").forEach((n=>n.addEventListener("click", () => {
    humburger.classList.remove('active');
    navMenu.classList.remove("active");
})))










