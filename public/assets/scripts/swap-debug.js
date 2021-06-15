"use strict";

var onlineLink = $('.zentroca-participate__infos__links--online');
var physicalLink = $('.zentroca-participate__infos__links--physical');
var onlineContent = $('.zentroca-participate__infos__content--online');
var physicalContent = $('.zentroca-participate__infos__content--physical');
onlineLink.click(function (e) {
  e.preventDefault();
  physicalContent.css('display', 'none');
  onlineContent.css('display', 'block');
  onlineLink.addClass('active');
  physicalLink.removeClass('active');
});
physicalLink.click(function (e) {
  e.preventDefault();
  onlineContent.css('display', 'none');
  physicalContent.css('display', 'block');
  onlineLink.removeClass('active');
  physicalLink.addClass('active');
});