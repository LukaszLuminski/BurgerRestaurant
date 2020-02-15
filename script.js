$('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });

  $(window).on('scroll', function() {

  });

  // object-fit polyfill run
  objectFitImages();

  jarallax(document.querySelectorAll('.jarallax'), {
    disableParallax: /iPad|iPhone|iPod|Android/,
    disableVideo: /iPad|iPhone|iPod|Android/
  });
