$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,

    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // настройки адаприва
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 2,
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 3,
      },
      // если браузер >= 992px
      992: {
        slidesPerView: 6,
      }
    }

  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 1,

    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $("#review-1").on('click', function () {

    $.fancybox.open([{
        src: 'https://цветы-барнаул.рф/files/catalog/rozy/buket-iz-roz-madam-bombastik-i-pshenicy1-min.jpg',
        opts: {
          caption: 'First caption',
          thumb: 'https://цветы-барнаул.рф/files/catalog/rozy/buket-iz-roz-madam-bombastik-i-pshenicy1-min.jpg'
        }
      },
      {
        src: 'https://www.bella-roza.ru/published/publicdata/SHOP/attachments/SC/products_pictures/26_enl.jpg',
        opts: {
          caption: 'Second caption',
          thumb: 'https://www.bella-roza.ru/published/publicdata/SHOP/attachments/SC/products_pictures/26_enl.jpg'
        }
      }
    ], {
      loop: true,
      thumbs: {
        autoStart: true
      }
    });

  });
});