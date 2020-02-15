$('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });

  $(window).on('scroll', function() {

  });

  // object-fit polyfill run
  objectFitImages();

  jarallax(document.querySelectorAll('.jarallax'), {
  disableParallax: function () {
    return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
  },
  disableVideo: function () {
    return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
  }
});
