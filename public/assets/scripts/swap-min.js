"use strict";var onlineLink=$(".zentroca-participate__infos__links--online"),physicalLink=$(".zentroca-participate__infos__links--physical"),onlineContent=$(".zentroca-participate__infos__content--online"),physicalContent=$(".zentroca-participate__infos__content--physical"),onlineLinkNew=$(".zentroca-new__box__content__links--online"),physicalLinkNew=$(".zentroca-new__box__content__links--physical"),onlineContentNew=$(".zentroca-new__box__content__form"),physicalContentNew=$(".zentroca-new__box__content__result");onlineLink.click(function(n){n.preventDefault(),onlineContent.css("display","block"),physicalContent.css("display","none"),onlineLink.addClass("active"),physicalLink.removeClass("active")}),physicalLink.click(function(n){n.preventDefault(),$(physicalContent).fadeToggle(500),onlineContent.css("display","none"),physicalContent.css("display","block"),onlineLink.removeClass("active"),physicalLink.addClass("active")}),onlineLinkNew.click(function(n){n.preventDefault(),onlineContentNew.css("display","block"),physicalContentNew.css("display","none"),onlineLinkNew.addClass("active"),physicalLinkNew.removeClass("active")}),physicalLinkNew.click(function(n){n.preventDefault(),$(physicalContentNew).fadeToggle(500),onlineContentNew.css("display","none"),physicalContentNew.css("display","block"),onlineLinkNew.removeClass("active"),physicalLinkNew.addClass("active")});