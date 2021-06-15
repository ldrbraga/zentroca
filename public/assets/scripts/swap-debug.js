"use strict";

var onlineLink = $('.zentroca-participate__infos__links--online');
var physicalLink = $('.zentroca-participate__infos__links--physical');
var onlineContent = $('.zentroca-participate__infos__content--online');
var physicalContent = $('.zentroca-participate__infos__content--physical');
var onlineLinkNew = $('.zentroca-new__box__content__links--online');
var physicalLinkNew = $('.zentroca-new__box__content__links--physical');
var onlineContentNew = $('.zentroca-new__box__content__form');
var physicalContentNew = $('.zentroca-new__box__content__result');
onlineLink.click(function (e) {
  e.preventDefault();
  onlineContent.css('display', 'block');
  physicalContent.css('display', 'none');
  onlineLink.addClass('active');
  physicalLink.removeClass('active');
});
physicalLink.click(function (e) {
  e.preventDefault();
  $(physicalContent).fadeToggle(500);
  onlineContent.css('display', 'none');
  physicalContent.css('display', 'block');
  onlineLink.removeClass('active');
  physicalLink.addClass('active');
});
onlineLinkNew.click(function (e) {
  e.preventDefault();
  onlineContentNew.css('display', 'block');
  physicalContentNew.css('display', 'none');
  onlineLinkNew.addClass('active');
  physicalLinkNew.removeClass('active');
});
physicalLinkNew.click(function (e) {
  e.preventDefault();
  $(physicalContentNew).fadeToggle(500);
  onlineContentNew.css('display', 'none');
  physicalContentNew.css('display', 'block');
  onlineLinkNew.removeClass('active');
  physicalLinkNew.addClass('active');
});