const onlineLink = $('.zentroca-participate__infos__links--online');
const physicalLink = $('.zentroca-participate__infos__links--physical');
const onlineContent = $('.zentroca-participate__infos__content--online');
const physicalContent = $('.zentroca-participate__infos__content--physical');

const onlineLinkNew = $('.zentroca-new__box__content__links--online');
const physicalLinkNew = $('.zentroca-new__box__content__links--physical');
const onlineContentNew = $('.zentroca-new__box__content__form');
const physicalContentNew = $('.zentroca-new__box__content__result');

onlineLink.click((e) => {
  e.preventDefault();
  
  onlineContent.css('display', 'block');
  physicalContent.css('display', 'none');
  
  onlineLink.addClass('active');
  physicalLink.removeClass('active');
});

physicalLink.click((e) => {
  e.preventDefault();

  $(physicalContent).fadeToggle(500);

  onlineContent.css('display', 'none');
  physicalContent.css('display', 'block');
  
  onlineLink.removeClass('active');
  physicalLink.addClass('active');
});

onlineLinkNew.click((e) => {
  e.preventDefault();
  
  onlineContentNew.css('display', 'block');
  physicalContentNew.css('display', 'none');
  
  onlineLinkNew.addClass('active');
  physicalLinkNew.removeClass('active');
});

physicalLinkNew.click((e) => {
  e.preventDefault();

  $(physicalContentNew).fadeToggle(500);

  onlineContentNew.css('display', 'none');
  physicalContentNew.css('display', 'block');
  
  onlineLinkNew.removeClass('active');
  physicalLinkNew.addClass('active');
});
