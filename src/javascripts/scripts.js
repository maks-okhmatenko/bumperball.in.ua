import $ from 'jquery';
import 'slick-carousel';
import 'jquery-mask-plugin';
import { FORM_URL } from './environment';

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
};
// Form
function submitForm(event) {
  event.preventDefault();

  const form = document.querySelector('#feedback-form');
  const input = document.getElementsByClassName('request-input');
  const formData = new FormData(form);
  const request = new XMLHttpRequest();
  //const formDataJson = JSON.stringify(Object.fromEntries(formData));

  request.open('POST', FORM_URL);
  request.setRequestHeader('Content-Type', 'application/json, charset=utf-8');

  request.onload = function() {
    hideLoader();
    showMessage('success');
  }

  request.onerror = function() {
    hideLoader();
    showMessage('error');
  }

  showLoader();
  request.send(formData);
};

let formError = document.querySelector('.form-error');
let formResult = document.querySelector('.form-result');
let preloader = document.querySelector('.preloader');
  

function showLoader() {
  preloader.classList.add('active')
}

function hideLoader() {
  preloader.classList.remove('active')
}

function showMessage(messageType = 'success') {
  if (messageType === 'success') {
    formResult.classList.add('active');
  } else {
    formError.classList.add('active');
  }
}

function hideMessage() {
  formResult.classList.remove('active');
  formError.classList.remove('active');
}

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

  document.addEventListener('click', function() {
    hideMessage();
  });
});