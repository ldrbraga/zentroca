const onlineLink = $('.zentroca-participate__infos__links--online');
const physicalLink = $('.zentroca-participate__infos__links--physical');
const onlineContent = $('.zentroca-participate__infos__content--online');
const physicalContent = $('.zentroca-participate__infos__content--physical');

onlineLink.click((e) => {
  e.preventDefault();

  physicalContent.css('display', 'none');
  onlineContent.css('display', 'block');

  onlineLink.addClass('active');
  physicalLink.removeClass('active');
});

physicalLink.click((e) => {
  e.preventDefault();

  onlineContent.css('display', 'none');
  physicalContent.css('display', 'block');

  onlineLink.removeClass('active');
  physicalLink.addClass('active');
});
