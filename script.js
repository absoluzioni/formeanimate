let ball = document.querySelector(".ball--1");
let htmlSymbol = document.querySelector(".ball--2");
let piano = document.querySelector(".shape");
let filterElements = document.querySelectorAll('[class *= "filter-"]');
let filterImages= document.querySelectorAll(".container-image");
let retro = document.querySelector(".retro");

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
    if (piano.classList.contains("view-card")) {
        piano.classList.add("animation-3");
        retro.classList.add("animation-text");
        setTimeout(function() {
            piano.classList.remove("view-card");
            piano.classList.remove("animation-3");
            retro.classList.remove("animation-text");
            piano.classList.add("view-message");
            retro.classList.add("view-text");
        }, 2001)
    } else {
        piano.classList.add("animation-4");
        retro.classList.remove("view-text");
        retro.classList.add("animation-removetext");
        setTimeout(function() {
            piano.classList.remove("view-message");
            piano.classList.remove("animation-4");
            retro.classList.remove("animation-removetext");
            piano.classList.add("view-card");
        }, 2001)
    }
})


filterImages.forEach(function(element) {
    element.addEventListener("click", function() {
        let myAttribute = element.getAttribute('data-filter') ;
        let myImage = element.querySelector(`[data-filter = "${myAttribute}"] > img`);
        let myDescription = element.querySelector(`[data-filter = "${myAttribute}"] > p.description`);
        console.log(myImage);
        if (myImage.classList.contains("filter-none")) {
            myImage.classList.add("filter-none");
            myDescription.classList.add("no-display");
        } else {
            myImage.classList.remove("filter-none");
            myDescription.classList.remove("no-display");
        }
    });
});

filterElements.forEach(function(element) {
    element.addEventListener("click", function() {
        if (!element.classList.contains("filter-none")) {
            element.classList.add("filter-none");
        } else {
            element.classList.remove("filter-none");
        }
    });
});




