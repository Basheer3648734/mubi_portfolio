const leftarrow = document.querySelector('#leftarrow');
const rightarrow = document.querySelector('#rightarrow');
let i = 1;
const totalImages = document.querySelector('.gallery').getAttribute("data-length");
const slidedetail = document.querySelector("#slidedetail");
const slide = document.querySelector(".slide")
const moveleft = () => {
    if (i == 1) {
        i = totalImages;
    }
    else {
        i--;
    }
}
const moveright = () => {
    if (i == totalImages) {
        i = 1;
    }
    else {
        i++;
    }
}

setInterval(() => {
    if (i >= totalImages) {
        i = 0;
    }

    i++;
    slide.setAttribute("src", `img/${i}.jpg`);
    slidedetail.innerHTML = `${i}/${totalImages}`

}, 5000);
leftarrow.addEventListener('click', () => {
    moveleft();
    slide.setAttribute("src", `img/${i}.jpg`);
    console.log("image changed")
    slidedetail.innerHTML = `${i}/${totalImages}`
})
rightarrow.addEventListener('click', () => {
    moveright();
    slide.setAttribute("src", `img/${i}.jpg`);
    console.log("image changed")
    slidedetail.innerHTML = `${i}/${totalImages}`
})

const gototop = document.querySelector(".goToTop");
// gototop.style.top = "10vh";

//ham-tick1
const nav = document.querySelector(".nav");
const hamburger = document.querySelector('.hamburger');
const ham1 = document.querySelector('#ham1');
const ham2 = document.querySelector('#ham2');
const ham3 = document.querySelector('#ham3');
// hamburger.classList.add('ham-active')
const main = document.querySelector('.main-info-section');
let open = 1;
nav.addEventListener('click', () => {
    ham1.classList.add('ham-stick1');
    ham2.classList.add('ham-stick2');
    ham3.classList.add('ham-stick3');
})
hamburger.addEventListener('click', () => {
    if (open == 1) {
        ham1.classList.add('ham-stick1');
        ham2.classList.add('ham-stick2');
        ham3.classList.add('ham-stick3');
        nav.classList.remove('nav-closed');
        // nav.setAttribute('style', 'position:fixed');
        open = 0;
    }
    else if (open == 0) {
        nav.classList.add('nav-closed');
        ham1.classList.remove('ham-stick1');
        ham2.classList.remove('ham-stick2');
        ham3.classList.remove('ham-stick3');
        open = 1;
    }
})
