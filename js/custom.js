
$(document).ready(function() {

  // Smooth scrolling
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, 'easeInOutExpo');

          if ( $(this).parents('.nav-menu').length ) {
            $('.nav-menu .menu-active').removeClass('menu-active');
            $(this).closest('li').addClass('menu-active');
          }

          if ( $('body').hasClass('mobile-nav-active') ) {
              $('body').removeClass('mobile-nav-active');
              $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
              $('#mobile-body-overly').fadeOut();
          }
          return false;
        }
      }
    });
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {opacity:'show'},
    speed: 400
  });

  // Mobile Navigation
  if( $('#nav-menu-container').length ) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
      $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
      $('body').append( $mobile_nav );
      $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
      $('body').append( '<div id="mobile-body-overly"></div>' );
      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

      $(document).on('click', '.menu-has-children i', function(e){
          $(this).next().toggleClass('menu-item-active');
          $(this).nextAll('ul').eq(0).slideToggle();
          $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });

      $(document).on('click', '#mobile-nav-toggle', function(e){
          $('body').toggleClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').toggle();
      });

      $(document).click(function (e) {
          var container = $("#mobile-nav, #mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
             if ( $('body').hasClass('mobile-nav-active') ) {
                  $('body').removeClass('mobile-nav-active');
                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                  $('#mobile-body-overly').fadeOut();
              }
          }
      });
  } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Stick the header at top on scroll
  $("#header").sticky({topSpacing:0, zIndex: '50'});

  // Counting numbers

  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Tooltip & popovers
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  // Background image via data tag
  $('[data-block-bg-img]').each(function() {
    // @todo - invoke backstretch plugin if multiple images
    var $this = $(this),
      bgImg = $this.data('block-bg-img');

      $this.css('backgroundImage','url('+ bgImg + ')').addClass('block-bg-img');
  });

  // jQuery counterUp
  if(jQuery().counterUp) {
    $('[data-counter-up]').counterUp({
      delay: 20,
    });
  }

  //Scroll Top link
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrolltop').fadeIn();
    } else {
      $('.scrolltop').fadeOut();
    }
  });

  $('.scrolltop, #logo a').click(function(){
    $("html, body").animate({
      scrollTop: 0
    }, 1000, 'easeInOutExpo');
    return false;
  });

});

 function changeImage(imgName){
var image = document.getElementById("img1");
image.src = imgName;
};

function changeImage2(imgName){
var image = document.getElementById("img2");
image.src = imgName;
};



/***************** SECTION FUNC2, PLANO **************** /*

/*cambia fotos de producto desde lista o desde plano*/
function primera(a){
var photo = document.getElementById('product');
photo.src = a;
};


/*Cambia nombre del producto desde lista o desde plano*/
function changeText(value) {
document.getElementById('pText').innerHTML = value;

};


/* cambia colores desde plano y desde lista 
function changeColor(negro) {
  
    var x = document.getElementsByClassName("listajs");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";

  };

/*
  var toBlack = document.getElementById(negro);
  toBlack.style.color = "black";
};


/*componenetes 2 (ex carouseles) */

function imgCartuchos(foto){
  var imagenes = document.getElementById('acaCartucho');
  imagenes.src = foto;
};

function cartuchoTexto(nombre){
  var z = document.getElementById('nombreCartucho');
  z.innerHTML = nombre;
};

function lineaTexto(x){
  var t =  document.getElementById('linea');
  t.innerHTML = x;
};


/**************** Instalacion ******************* */

function openModal() {
  var m =  document.getElementById('myModal');
  m.style.display = "block";
}

function closeModal() {
  var close = document.getElementById('myModal')
  close.style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('demo');
  var captionText = document.getElementById('caption');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


 function toggle(id){
        var off= document.getElementById(id);
        if (off.style.display != 'block') {
            off.style.display = "block";
        } else {
            off.style.display = "none";
        }        
    }

 