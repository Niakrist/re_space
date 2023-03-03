const priceElems = document.querySelectorAll('.price__elems');

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

const priceShowAll = document.querySelector('.price__show-all');

priceShowAll.addEventListener('click', function() {
  const priceElemsNameTexts = document.querySelectorAll('.price__elems-name-text');
  const images = document.querySelectorAll('.arrow-js');
  for (let priceElemsNameText of priceElemsNameTexts) {
    priceElemsNameText.classList.remove('none');
  }

  for (let image of images) {
    image.classList.remove('rotate-img');
    image.classList.add('rotate-img');
  }


})