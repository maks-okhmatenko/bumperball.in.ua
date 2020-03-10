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

function submitForm(event) {
  event.preventDefault();
  const $form = $(this);
  console.log($form.serializeArray());

  $.ajax({
    type: 'POST',
    url: '/script.php',
    success(...rest) {
      console.log(...rest);
    },
    error(...rest) {
      console.log(...rest);
    },
  });
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
});
