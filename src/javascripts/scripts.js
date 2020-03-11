import $ from 'jquery';
import 'slick-carousel';
import 'jquery-mask-plugin';

window.jQuery = $;
window.$ = $;

function initNavEvents() {
  const $hamburgerBtn = $('#hamburger');
  const $desktopNavLink = $('.navigation-link');

  // Hamburger menu
  $hamburgerBtn.on('click', () => {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('is-open');
  });

  // Scroll to pages
  $desktopNavLink.on('click', () => {
    const margin = 0;
    const elementID = $(this).attr('href');
    const offsetTop = $(elementID).offset().top;

    $('body,html').animate({
      scrollTop: offsetTop - margin,
    }, 1000);
  });
}

function initSlideEvents() {
  const $slick = $('.slider');

  $slick.slick({
    dots: true,
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<span class="btn-prev"></span>',
    nextArrow: '<span class="btn-next"></span>',
  });
}
// Form

let message = {
  loading: 'Загрузка...',
  success: 'Спасибо! Скоро мы с вами свяжемся!',
  failure: 'Что-то пошло не так...'
};



function submitForm(event) {
  event.preventDefault();

  const form = document.querySelector('#feedback-form');
  let input = form.getElementsByClassName('.request-input');
  let statusMessage = document.createElement('div');

  statusMessage.classList.add('status');
  form.appendChild(statusMessage);

  let request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:8888/form/form.php');
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  let formData = new FormData();

  input.forEach(function(field, index) {
    debugger;
    const value = field.value;
    const name = field.name;
    
    formData.append(name, value);
  });

 
/*
  let obj = {};
  formData.forEach(function(value, key){
    obj[key] = value;

    let json = JSON.stringify(obj);

  request.send(json);
  });
*/
}

  

  request.addEventListener('readystatechange', function()  {
    if (request.readyState < 4) {
      statusMessage.innerHTML = message.loading;
    } else if (request.readyState === 4 && request.status == 200) {
      statusMessage.innerHTML = message.success;
    } else {
      statusMessage.innerHTML = message.failure;
    }
  });

    for(let i = 0; i < input.length; i++) {
      input[i].value ='';
    }
});

function initFormEvents() {
  const $form = $('#feedback-form');
  const $phone = $('#phone-field');

  $phone.mask('+( 000 ) 00 000 0000');
  $form.submit(submitForm);
}

$(document).ready(() => {
  initNavEvents();
  initSlideEvents();
  initFormEvents();
});



