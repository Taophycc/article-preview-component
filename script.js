'use strict';
const share = document.querySelectorAll('.share');
const footerSection = document.querySelector('.footer-section');
const popup = document.querySelector('.popup');
const popupShare = document.querySelector('.popup .share');

for (let i = 0; i < share.length; i++)
  share[i].addEventListener('click', function () {
    if (window.innerWidth <= 768) {
      footerSection.classList.toggle('hidden');
      footerSection.classList.toggle('show');
      popup.classList.toggle('hidden');
      popup.classList.toggle('show');
    }

    if (window.innerWidth >= 768) {
      popup.classList.toggle('hidden');
      popupShare.classList.add('hidden');
    }
  });
