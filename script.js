let ball = document.querySelector(".ball--1");
let htmlSymbol = document.querySelector(".ball--2");
let piano = document.querySelector(".shape");
let filterElements = document.querySelectorAll('[class *= "filter-"]');
let filterImages= document.querySelectorAll(".container-image");

console.log(filterElements.length);
ball.addEventListener("click", function() {
    ball.classList.add("animation-1")
    setTimeout(function() {
        ball.classList.remove("animation-1");
    }, 3001);
})

htmlSymbol.addEventListener("click", function() {
    htmlSymbol.classList.add("animation-2");
    setTimeout(function() {
        htmlSymbol.classList.remove("animation-2");
    }, 3001);
})

piano.addEventListener("click", function() {
    piano.classList.add("animation-3");
    setTimeout(function() {
        piano.classList.remove("animation-3");
    }, 3001);
})


filterImages.forEach(function(element) {
    let myAttribute = element.getAttribute('data-filter') 
    let myImage = element.querySelector(`[data-filter = "${myAttribute}"] > img`)
    let description = element.querySelector(`[data-filter = "${myAttribute}"] > .description`);
    element.addEventListener("click", function(e) {
        if (!myImage.classList.contains("filter-none")) {
            myImage.classList.add("filter-none");
            description.classList.add("no-display");
        } else {
            myImage.classList.remove("filter-none");
            description.classList.remove("no-display");
        }
        
    });
});




