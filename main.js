// This is for sidebar

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const offcanvasMenu = document.querySelector('.nav-items');

openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.add('active');
});

closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('active');
});

// JavaScript  for Slider
const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide, index)=>{
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = ()=> {
    if (counter === 0) {
        counter = 4
    } else {
        counter--
    }
    slideImage()
}

const goNext = ()=> {
    if (counter === 4){
        counter = 0
    } else {
        counter++
    }
    slideImage()
}

const slideImage = ()=>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}