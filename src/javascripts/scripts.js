import $ from 'jquery';
import 'slick-carousel';
import 'jquery-mask-plugin';

import { FORM_URL } from './environment';
import initGallery from './init_gallery';
import initFeedbacks from './init_feedback';


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

const formError = document.querySelector('.form-error');
const formResult = document.querySelector('.form-result');
// const preloader = document.querySelector('.preloader');
const loader = document.querySelector('.request-btn');

function showLoader() {
  loader.classList.add('active');
  // preloader.classList.add('active');
}

function hideLoader() {
  loader.classList.remove('active');
  // preloader.classList.remove('active');
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

function validateForm(formJson) {
  const $inputs = $('.request-input');
  const formConfig = {
    name: {
      required: true,
    },
    phone: {
      required: true,
      regex: /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/i,
    },
    email: {
      required: false,
    },
    format: {
      required: false,
    },
  };

  console.log($inputs);
  console.log(formJson);

  return !$inputs.toArray().map((input) => {
    const { name } = input;
    const config = formConfig[name];
    if (config && (
      !input.value && config.required
      || config.regex && !config.regex.test(input.value)
    )) {
      $(input).addClass('invalid');
      return true;
    }
    return false;
  }).reduce((acc, it) => acc || it);
}

// Form
function submitForm(event) {
  event.preventDefault();

  const form = document.querySelector('#feedback-form');
  const formData = new FormData(form);
  const formDataJson = JSON.stringify(Object.fromEntries(formData));

  if (!validateForm(formDataJson)) return;

  $('#request').addClass('done');
  $('#request .request-title').addClass('loading-icon');

  const request = new XMLHttpRequest();
  request.open('POST', FORM_URL);
  request.setRequestHeader('Content-Type', 'application/json, charset=utf-8');

  request.onload = () => {
    hideLoader();
    showMessage('success');
  };

  request.onerror = () => {
    hideLoader();
    showMessage('error');
  };
  showLoader();
  request.send(formData);
}

function initFormEvents() {
  const $form = $('#feedback-form');
  const $phone = $('#phone-field');
  const $inputs = $('.request-input');

  $phone.mask('+38(000)000-00-00');
  $form.submit(submitForm);

  $inputs.on('input', (event) => { $(event.target).removeClass('invalid'); });
}

$(document).ready(() => {
  initNavEvents();
  initFormEvents();
  initFeedbacks();
  initGallery();

  document.addEventListener('click', () => {
    hideMessage();
  });
});
