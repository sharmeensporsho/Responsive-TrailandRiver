
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        perPage: 5,
        breakpoints: {
          992: {
            perPage: 4,
          },
          768: {
            perPage: 3,
          },
          400: {
            perPage: 2,
          },
        },
        rewind : true,
        pagination: false,
    } );
    splide.mount();
  } );
