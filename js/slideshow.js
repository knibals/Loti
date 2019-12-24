(function ($, Drupal) {

    'use strict';
  
    Drupal.behaviors.slideshow = {
      attach: function (context, settings) {
        $('.expertises').slick({
          dots: true,
          autoplay: true,
        });
      }
    };
  
  } (jQuery, Drupal));
