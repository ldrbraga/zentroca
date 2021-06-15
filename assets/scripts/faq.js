const faqBtn = $('.zentroca-faq');
const faqContent = $('.zentroca-about__box__content__faq');

const clickBtn = faqBtn.click((e) => {
  e.preventDefault();

  faqContent.slideToggle();
});