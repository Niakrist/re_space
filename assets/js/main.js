
const priceElems = document.querySelectorAll('.price__elems');

if (priceElems) {
  priceElems.forEach(function(priceElem) {

    priceElem.addEventListener('click', function(e) {
  
      if (e.target.matches('.arrow__wrapper')) {
        const priceElemsNameText = priceElem.querySelector('.price__elems-name-text');
        const myArrow = e.target.querySelector('img');
        myArrow.classList.toggle('rotate-img')
        priceElemsNameText.classList.toggle('none');
      }
  
      if (e.target.matches('.arrow__sub-wrapper')) {
        const priceul = e.target.closest('.price__ul');
        const pricesubul = priceul.querySelector('.price__sub-ul');
        pricesubul.classList.toggle('none');
        const myArrow = e.target.querySelector('img');
        myArrow.classList.toggle('rotate-img')
        }
    })
  })
}

const priceShowAll = document.querySelector('.price__show-all');

if (priceShowAll) {
  priceShowAll.addEventListener('click', function() {
    const priceElemsNameTexts = document.querySelectorAll('.price__elems-name-text');
    const images = document.querySelectorAll('.arrow-js');
    for (let priceElemsNameText of priceElemsNameTexts) {
      priceElemsNameText.classList.remove('none');
    }
  
    for (let image of images) {
      image.classList.add('rotate-img');
    }
  })
}
const sliderList = document.querySelectorAll('.slider__item')
const slider = Array.from(sliderList);

if(slider) {

  slider.forEach(function (slide, index) {

    slide.dataset.index = index;
  
    if (slide.dataset.index != 0) {
      slide.classList.add('none');
    }

    slider[0].setAttribute('data-active-slide', '');

    slide.addEventListener('click', function () {

      slide.classList.add('none');
      slide.removeAttribute('data-active-slide');
      
      const nextSlideIndex = parseInt(slide.dataset.index) + 1 < slider.length ? parseInt(slide.dataset.index) + 1 : 0;
      const parentElement = slide.closest('.slider__list');

      const nextSlide = parentElement.querySelector(`[data-index="${nextSlideIndex}"]`)
      nextSlide.classList.remove('none');
      nextSlide.setAttribute('data-active-slide', '');
    })

  })

  const nextArrowSlid = document.querySelector('.slider__arrow-right');

  nextArrowSlid.addEventListener('click', function() {
    const slideCurrent = document.querySelector('[data-active-slide]');
    const slideIndexCurrent = slideCurrent.dataset.index;

    slideCurrent.classList.add('none');
    slideCurrent.removeAttribute('data-active-slide');

    const nextSlideIndex = Number(slideIndexCurrent) + 1 < slider.length ? Number(slideIndexCurrent) + 1 : 0;
    const parentElement = nextArrowSlid.closest('.slider__list');
    const nextSlid = parentElement.querySelector(`[data-index="${nextSlideIndex}"]`);

    nextSlid.classList.remove('none');
    nextSlid.setAttribute('data-active-slide', '');
  })

  const prevArrowSlide = document.querySelector('.slider__arrow-left');

  prevArrowSlide.addEventListener('click', function() {

    const slideCurrent = document.querySelector('[data-active-slide]');
    const slideIndexCurrent = slideCurrent.dataset.index;

    slideCurrent.classList.add('none');
    slideCurrent.removeAttribute('data-active-slide');

    const prevSlideIndex = Number(slideIndexCurrent) - 1 > 0 ? Number(slideIndexCurrent) - 1 : (slider.length - 1);
    const parentElement =  prevArrowSlide.closest('.slider__list');
    const prevSlide = parentElement.querySelector(`[data-index="${prevSlideIndex}"]`);

    prevSlide.classList.remove('none');
    prevSlide.setAttribute('data-active-slide', '');

  })

}
const fasade = document.querySelector('.fasade');
const plane = document.querySelector('.plane-nav');
const squares = document.querySelector('.squares');

const fasadeDate = document.querySelector('[data-fasad="fasad"]');
const planeDate = document.querySelector('[data-plan="plan"]');
const squaresDate = document.querySelector('[data-squares="squares"]');

if (fasade) {
  fasade.addEventListener('click', function () {
    fasadeDate.classList.remove('none');
    fasade.classList.add('acticve-color');
    planeDate.classList.add('none');
    squaresDate.classList.add('none');
    plane.classList.remove('acticve-color');
    squares.classList.remove('acticve-color');


    const sliderFasade = document.querySelectorAll('.plane__slide');
    const sliderItems = Array.from(sliderFasade)
    const nextArrowFasad = document.querySelector('.fasad__arrow-right');
    const prevArrowFasad = document.querySelector('.fasad__arrow-left');

    sliderItems.forEach(function (slide, index) {

      slide.dataset.index = index;

      if (slide.dataset.index != 0) {
        slide.classList.add('none');
      }

      sliderItems[0].classList.remove('none');
      sliderItems[0].setAttribute('data-active-fasad', '');

      slide.addEventListener('click', function () {

        slide.classList.add('none');
        slide.removeAttribute('data-active-fasad');

        const nextSlideIndex = Number(slide.dataset.index) + 1 < sliderItems.length ? Number(slide.dataset.index) + 1 : 0;
        const parentElement = slide.closest('div');

        const nextSlide = parentElement.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('none');
        nextSlide.setAttribute('data-active-fasad', '');
      })
    })

    nextArrowFasad.addEventListener('click', function () {
      const slideCurrent = document.querySelector('[data-active-fasad]');
      const slideIndexCurrent = slideCurrent.dataset.index;

      slideCurrent.classList.add('none');
      slideCurrent.removeAttribute('data-active-fasad');

      const nextSlideIndex = (Number(slideIndexCurrent) + 1) < sliderItems.length ? (Number(slideIndexCurrent) + 1) : 0;
      const parentElement = nextArrowFasad.closest('.plane__fasad');
      const nextSlide = parentElement.querySelector(`[data-index="${nextSlideIndex}"]`);
      console.log(nextSlide);
      nextSlide.classList.remove('none');
      nextSlide.setAttribute('data-active-fasad', '');

    })

    prevArrowFasad.addEventListener('click', function () {
      const slideCurrent = document.querySelector('[data-active-fasad]');
      const slideIndexCurrent = slideCurrent.dataset.index;

      slideCurrent.classList.add('none');
      slideCurrent.removeAttribute('data-active-fasad');

      const prevSlideIndex = (Number(slideIndexCurrent) - 1) > 0 ? (Number(slideIndexCurrent) - 1) : (sliderItems.length - 1);
      const parentElement = prevArrowFasad.closest('.plane__fasad');
      const prevSlide = parentElement.querySelector(`[data-index="${prevSlideIndex}"]`);
      prevSlide.classList.remove('none');
      prevSlide.setAttribute('data-active-fasad', '');
    })
  })

}

if (plane) {
  plane.addEventListener('click', function () {
    planeDate.classList.remove('none');
    plane.classList.add('acticve-color');
    fasadeDate.classList.add('none');
    squaresDate.classList.add('none');
    fasade.classList.remove('acticve-color');
    squares.classList.remove('acticve-color');
  })
}

if (squares) {
  squares.addEventListener('click', function () {
    squaresDate.classList.remove('none');
    squares.classList.add('acticve-color');
    fasadeDate.classList.add('none');
    planeDate.classList.add('none');
    fasade.classList.remove('acticve-color');
    plane.classList.remove('acticve-color');
  })
}