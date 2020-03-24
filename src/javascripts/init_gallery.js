import $ from 'jquery';
import 'slick-carousel';


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
  const folder = '/images/gallery';
  const $gallery = $('#gallery .slider');

  $.ajax({
    url: folder,
    success(data) {
      $(data).find('a').attr('href', (i, val) => {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
          $gallery.append(`
              <div class="slider__el">
                <img class="img" src="${val}" alt="Slide">
              </div>
            `);
        }
      });
      // init slick
      initSlideEvents();
    },
  });
}

export default loadImages();
