
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
const slider = document.querySelector('.slider__list')
const items = Array.from(slider.children);


if(slider) {
  items.forEach(function (item, index) {

    item.dataset.index = index;
  
  
    if (item.dataset.index != 0) {
      item.classList.add('none');
    }
  
    item.addEventListener('click', function () {
  
      const nextSlideIndex = parseInt(item.dataset.index) + 1 < items.length ? parseInt(item.dataset.index) + 1 : 0;
      console.log(nextSlideIndex);
      item.classList.add('none');
      console.log(`data-index="${nextSlideIndex}"`)
      const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
      console.log(nextSlide);
      nextSlide.classList.remove('none');
  
    })
  
  
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

    const sliderFasade = document.querySelector('.plane__fasad');

    const sliderItems = Array.from(sliderFasade.children);

    sliderItems.forEach(function (slide, index) {

      slide.dataset.index = index;

      if (slide.dataset.index != 0) {
        slide.classList.add('none');
      }

      slide.addEventListener('click', function () {
        const nextSlideIndex = parseInt(slide.dataset.index) + 1 < sliderItems.length ? parseInt(slide.dataset.index) + 1 : 0;
        slide.classList.add('none');
        const nextSlide = sliderFasade.querySelector(`[data-index="${nextSlideIndex}"]`);
        //    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('none');


        //      const nextSlideIndex = parseInt(item.dataset.index) + 1 < items.length ? parseInt(item.dataset.index) + 1 : 0;
        console.log(nextSlideIndex);

      })


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