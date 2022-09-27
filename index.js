const burger = document.querySelector('.burger'),
  mobileNav = document.querySelector('.mobile-nav'),
  modal = document.querySelector('.modal'),
  modal2 = document.querySelector('.modal2'),
  login = document.querySelector('.header-button'),
  modalClose = document.querySelector('.modal-close'),
  modalClose2 = document.querySelector('.modal-close2'),
  modalLink = document.querySelector('.modal-login--link'),
  modalAccountLink = document.querySelector('.modal-account--link'),
  image = document.querySelectorAll('.destinations-container .slider-container img'),
  slider = document.querySelector('.slider-container');

let count = 0,
  width;


if(burger) {
  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    burger.classList.toggle('open');

  })
}

if(login) {
  login.addEventListener('click', () => {
    modal.classList.toggle('modal-active');
  })
}

if(modalClose) {
  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-active');
  })
}

if(modalLink) {
  modalLink.addEventListener('click', () => {
    modal.classList.remove('modal-active');
    modal2.classList.add('modal-active');
  })
}

if(modalClose2) {
  modalClose2.addEventListener('click', () => {
    modal2.classList.remove('modal-active');
    modal.classList.remove('modal-active');
  })
}

if(modalAccountLink) {
  modalAccountLink.addEventListener('click', () => {
    modal2.classList.remove('modal-active');
    modal.classList.add('modal-active');
  })
}

// slider

function init() {
  width = document.querySelector('.destinations-container').offsetWidth;
  slider.style.width = width*image.length + 'px';
  image.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  })
  rollSlider();
}

window.addEventListener('resize', init);
init()

document.querySelector('.slider-prev').addEventListener('click', () => {
  count--;
  if(count < 0) {
    count = image.length - 1;
  }
  rollSlider();
})

document.querySelector('.slider-next').addEventListener('click', () => {
  count++;
  if(count >= image.length) {
    count = 0;
  }
  rollSlider();
})

function rollSlider() {
  slider.style.transform = 'translate(-'+count*width + 'px)';
}