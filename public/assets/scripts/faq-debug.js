"use strict";

var faqBtn = $('.zentroca-faq');
var faqContent = $('.zentroca-about__box__content__faq');
var clickBtn = faqBtn.click(function (e) {
  e.preventDefault();
  faqContent.slideToggle();
});