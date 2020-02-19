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