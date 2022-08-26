



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    pagination: true,
    navigation: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
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











