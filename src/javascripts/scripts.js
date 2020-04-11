/* global CUSTOM_MESSAGES */
import $ from 'jquery';
import 'slick-carousel';
import 'jquery-mask-plugin';
import 'is-in-viewport';
import { CountUp } from 'countup.js';

import { FORM_URL } from './environment';
import initGallery from './init_gallery';
import initFeedbacks from './init_feedback';
import initOffers from './init_offers';
import initGameTypes from './init_gameTypes';
import initInfo from './init_footer';
import initAboutUs from './init_about_us';

window.jQuery = $;
window.$ = $;

function toggleSticky(header, upButton) {
  if (window.pageYOffset > 100) {
    header.addClass('sticky');
    upButton.addClass('sticky');
  } else {
    header.removeClass('sticky');
    upButton.removeClass('sticky');
  }
}

function initNavEvents() {
  const $hamburgerBtn = $('#hamburger');
  const $desktopNavLink = $('.navigation-link');
  const $mobileNavLink = $('.mobile-menu__link');
  const $upBtn = $('#up-button');

  $upBtn.on('click', () => {
    $('body,html').animate({
      scrollTop: 0,
    }, 1000);
  });

  // Hamburger menu
  $hamburgerBtn.on('click', () => {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('is-open');
  });

  // Scroll to pages
  $desktopNavLink.on('click', (event) => {
    const margin = 0;
    const elementID = $(event.target).attr('href');
    const offsetTop = $(elementID).offset().top;

    $('body,html').animate({
      scrollTop: offsetTop - margin,
    }, 1000);
  });

  $mobileNavLink.on('click', (event) => {
    const margin = 0;
    const elementID = $(event.target).attr('href');
    const offsetTop = $(elementID).offset().top;

    $('.mobile-menu').toggleClass('is-open');
    $('body,html').animate({
      scrollTop: offsetTop - margin,
    }, 1000);
  });
  const $header = $('.header');
  const $upButton = $('#up-button');

  $(window).scroll(() => {
    toggleSticky($header, $upButton);
  });
}

const loader = document.querySelector('.request-btn');

function loaderVisible(flag) {
  if (flag) loader.classList.add('active');
  else loader.classList.remove('active');
}

function setRequestMessage(message) {
  $('#request .request-title').html(message);
}

function validateForm() {
  const $inputs = $('.request-input');
  const formConfig = {
    name: {
      required: true,
    },
    phone: {
      required: true,
      regex: /((\+38)?\(?\d{3}\)?[\s.-]?(\d{7}|\d{3}[\s.-]\d{2}[\s.-]\d{2}|\d{3}-\d{4}))/i,
    },
    email: {
      required: true,
      regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
    },
    format: {
      required: false,
    },
  };

  return !$inputs.toArray().map((input) => {
    const { name } = input;
    const config = formConfig[name];
    const isRequired = (!input.value && config && config.required);
    const regExNotValid = config && config.regex && !config.regex.test(input.value);

    if (config && (isRequired || regExNotValid)) {
      $(input).addClass('invalid');
      return true;
    }
    return false;
  }).reduce((acc, it) => acc || it);
}

// Form
function submitForm(event) {
  event.preventDefault();

  const { FORM } = CUSTOM_MESSAGES;

  const form = document.querySelector('#feedback-form');
  const formData = new FormData(form);
  const formDataJson = JSON.stringify(Object.fromEntries(formData));

  if (!validateForm()) return;

  $('#request').addClass('done');
  $('#request .request-title').html('<span class="loading-icon"></span>');

  const request = new XMLHttpRequest();
  request.open('POST', FORM_URL);
  request.setRequestHeader('Content-Type', 'application/json, charset=utf-8');

  request.onload = (data) => {
    loaderVisible(false);

    if (data.target.status < 300) setRequestMessage(FORM.success);
    else setRequestMessage(FORM.error);
  };

  request.onerror = () => {
    loaderVisible(false);
    setRequestMessage(FORM.error);
  };
  loaderVisible(true);
  request.send(formDataJson);
}

function initFormEvents() {
  const $form = $('#feedback-form');
  const $phone = $('#phone-field');
  const $inputs = $('.request-input');

  $phone.mask('+38(000)000-00-00');
  $form.submit(submitForm);

  $inputs.on('input', (event) => { $(event.target).removeClass('invalid'); });
}

function initCounts() {
  const $facts = $('.facts-list');
  let started = false;

  $(window).scroll(() => {
    const isVisible = $facts.isInViewport();

    if (isVisible.length && !started) {
      started = true;
      const games = new CountUp('games', 223);
      const years = new CountUp('years', 5);
      const cities = new CountUp('cities', 17);
      const kids = new CountUp('kids', 600);
      const parties = new CountUp('parties', 50, { prefix: '>' });

      games.start();
      years.start();
      cities.start();
      kids.start();
      parties.start();
    }
  });
}

$(document).ready(() => {
  initCounts();
  initNavEvents();
  initFormEvents();
  initAboutUs();
  initOffers();
  initGameTypes();
  initFeedbacks();
  initGallery();
  initInfo();
});
