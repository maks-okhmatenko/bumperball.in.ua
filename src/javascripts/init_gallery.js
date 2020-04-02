import $ from 'jquery';
import 'slick-carousel';
import { ROOT_URL, GALLERY_URL } from './environment';

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

function loadImages() {
  const $gallery = $('#gallery .slider');

  $.ajax({
    url: GALLERY_URL,
    success(data) {
      const fileLinks = JSON.parse(data.message);

      fileLinks.forEach((it) => {
        $gallery.append(`
          <div class="slider__el">
            <img class="img" src="${ROOT_URL}/${it}" alt="Slide">
          </div>
        `);
      });

      initSlideEvents();
    },
  });
}

export default loadImages;
