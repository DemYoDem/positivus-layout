const commentsSliderElement = document.querySelector('.testimonials__list');
const commentsSliderSlideElementArray = commentsSliderElement.querySelectorAll('.testimonials__list-item');
const commentsSliderPaginationElement = document.querySelector('.testimonials__list-pagination-list');
const commentsSliderPaginationButtonElementArray = commentsSliderPaginationElement.querySelectorAll('.testimonials__list-pagination-list-item-button');
let commentsSliderPaginationButtonSelectedElement = commentsSliderPaginationElement.querySelector('.testimonials__list-pagination-list-item-button.selected');
let commentsSliderPosition = 0;
const commentsSliderMaxPosition = commentsSliderSlideElementArray.length - 1;

function slide() {
    const sliderOffset = commentsSliderElement.offsetLeft;
    const targetSlider = commentsSliderSlideElementArray[commentsSliderPosition]

    commentsSliderPaginationButtonSelectedElement.classList.remove('selected');
    commentsSliderPaginationButtonSelectedElement = commentsSliderPaginationButtonElementArray[commentsSliderPosition];
    commentsSliderPaginationButtonSelectedElement.classList.add('selected');

    commentsSliderElement.scrollTo({
        left: targetSlider.offsetLeft - sliderOffset - targetSlider.offsetWidth / 2,
        behavior: 'smooth'
    });
}

document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__menu-outer').classList.toggle('visible');
})

document.querySelector('.header__menu-outer').addEventListener('click', () => {
    document.querySelector('.header__menu-outer').classList.toggle('visible');
})

document.querySelector('.testimonials__list-pagination-button.left').addEventListener('click', () => {
    if (--commentsSliderPosition < 0) commentsSliderPosition = commentsSliderMaxPosition
    slide()
})

document.querySelector('.testimonials__list-pagination-button.right').addEventListener('click', () => {
    if (++commentsSliderPosition > commentsSliderMaxPosition) commentsSliderPosition = 0
    slide()
})

let i = 0;

commentsSliderPaginationElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('testimonials__list-pagination-list-item-button')) {

        commentsSliderPosition = Array.from(commentsSliderPaginationElement.children).indexOf(e.target.closest('.testimonials__list-pagination-list-item'))
        slide()
    }
})