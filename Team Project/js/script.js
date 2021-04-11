const wrapper = document.getElementById('wrapper');
const sliderSec = document.getElementById('slider-section');
let clickCounter = 1;


function countClick() {
    clickCounter++;
    checkClickCounter();
} 

function checkClickCounter() {

    if (clickCounter % 2 == 0) {
        wrapper.classList.add('menu-open');
        sliderSec.classList.add('is-hidden');
    } else {
        wrapper.classList.remove('menu-open');
        sliderSec.classList.remove('is-hidden');
    }
}