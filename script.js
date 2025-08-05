function initCarousel({ sliderClass, contentClass, dotClass, dotsContainerClass, btnNextId, btnPrevId }) {
  const btnPrev = document.getElementById(btnPrevId);
  const btnNext = document.getElementById(btnNextId);
  const slider = document.querySelector(`.${sliderClass}`);

  if (!btnPrev || !btnNext || !slider) {
    console.warn(`Botões ou slider "${sliderClass}" não encontrados.`);
    return;
  }

  const content = slider.querySelector(`.${contentClass}`);
  const dotsContainer = slider.parentElement.querySelector(`.${dotsContainerClass}`);

  if (!content || !dotsContainer) {
    console.warn(`Conteúdo ou container de bolinhas do carrossel "${sliderClass}" não foi encontrado.`);
    return;
  }

  const { width: slideWidth } = window.getComputedStyle(slider);
  const { width: contentWidth } = window.getComputedStyle(content);

  const slideProps = {
    width: parseInt(slideWidth),
    scroll: 0,
    current: 0
  };

  const contentLength = content.children.length;
  for (let index = 1; index < contentLength; index++) {
    const newDot = dotsContainer.querySelector(`.${dotClass}`).cloneNode();
    dotsContainer.appendChild(newDot);
  }

  const allDots = dotsContainer.querySelectorAll(`.${dotClass}`);

  function setCurrentDot() {
    allDots.forEach((dot, i) => {
      dot.classList.toggle('current', i === slideProps.current);
    });
  }

  function controlSlider(direction) {
    if (direction === 'next') {
      if (slideProps.scroll + slideProps.width < parseInt(contentWidth)) {
        slideProps.scroll += slideProps.width;
      }
      if (slideProps.current < contentLength - 1) {
        slideProps.current += 1;
        setCurrentDot();
      }
    } else {
      if (slideProps.current > 0) {
        slideProps.current -= 1;
        setCurrentDot();
      }
      slideProps.scroll = Math.max(0, slideProps.scroll - slideProps.width);
    }

    slider.scrollLeft = slideProps.scroll;
  }

  btnNext.addEventListener('click', () => controlSlider('next'));
  btnPrev.addEventListener('click', () => controlSlider('prev'));

  setCurrentDot();
}


window.addEventListener('DOMContentLoaded', () => {

  // Inicializa o carrossel para Flyers
  initCarousel({
    sliderClass: 'slider-flyers',
    contentClass: 'content-flyers',
    dotClass: 'dot-flyers',
    dotsContainerClass: 'length-dots-flyers',
    btnNextId: 'nextSliderFlyers',
    btnPrevId: 'previousSliderFlyers'
  });

  // Inicializa o carrossel para Sites
  initCarousel({
    sliderClass: 'slider-sites',
    contentClass: 'content-sites',
    dotClass: 'dot-sites',
    dotsContainerClass: 'length-dots-sites',
    btnNextId: 'nextSliderSite',
    btnPrevId: 'previousSliderSite'
  });

  //Inicializa o carrossel para Logos
  initCarousel({
    sliderClass: 'slider-logos',
    contentClass: 'content-logos',
    dotClass: 'dot-logos',
    dotsContainerClass: 'length-dots-logos',
    btnNextId: 'nextSliderLogos',
    btnPrevId: 'previousSliderLogos'
  });

  //Inicializa o carrossel para Camisas
  initCarousel({
    sliderClass: 'slider-camisas',
    contentClass: 'content-camisas',
    dotClass: 'dot-camisas',
    dotsContainerClass: 'length-dots-camisas',
    btnNextId: 'nextSliderCamisas',
    btnPrevId: 'previousSliderCamisas'
  });

});

