// ------------------------------------------------
// Project Name: Hintio Coming Soon & Landing Page Template
// Project Description: Hintio - clean and bold coming soon & landing page template to kick-start your project
// Tags: mix_design, hintio, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
// Version: 1.0.0
// Build Date: July 2020
// Last Update: July 2020
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: http://mixdesign.club
// File name: app-demo.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Main Section Loading Animation
//  2. SVG Fallback
//  3. Chrome Smooth Scroll
//  4. Images Moving Ban
//  5. Smooth Scroll To Top
//  6. Mailchimp Subscribition Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //
  $(".loader").addClass('is-animated');

  setTimeout(function(){
    $(".loader").addClass('loaded');
    $("body").addClass('loaded');
  },1300);
  // --------------------------------------------- //
  // Loader & Main Section Loading Animation End
  // --------------------------------------------- //

});

$(document).ready(function() {

  // --------------------------------------------- //
  // SVG Fallback Start
  // --------------------------------------------- //
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };
  // --------------------------------------------- //
  // SVG Fallback End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Chrome Smooth Scroll Start
  // --------------------------------------------- //
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };
  // --------------------------------------------- //
  // Chrome Smooth Scroll End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Images Moving Ban Start
  // --------------------------------------------- //
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  // --------------------------------------------- //
  // Images Moving Ban End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Smooth Scroll To Top Start
  // --------------------------------------------- //
  var offset = 300,
      offset_opacity = 1200,
      scroll_top_duration = 500,
      $back_to_top = $('.to-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
  // --------------------------------------------- //
  // Smooth Scroll To Top End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Subscribition Form Start
  // --------------------------------------------- //
  $('.subscribe-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=b382fff780'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.subscribe__container').find('.form').addClass('is-hidden');
      $('.subscribe__container').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.subscribe__container').find('.subscription-ok').removeClass('is-visible');
        $('.subscribe__container').find('.form').delay(300).removeClass('is-hidden');
        $('.subscribe-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.subscribe__container').find('.form').addClass('is-hidden');
      $('.subscribe__container').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.subscribe__container').find('.subscription-error').removeClass('is-visible');
        $('.subscribe__container').find('.form').delay(300).removeClass('is-hidden');
        $('.subscribe-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Subscribition Form End
  // --------------------------------------------- //

});
