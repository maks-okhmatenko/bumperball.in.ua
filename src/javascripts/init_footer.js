/* eslint-disable no-tabs */
/* global CUSTOM_MESSAGES */
import $ from 'jquery';

const { INFO } = CUSTOM_MESSAGES;
const { PHONES, EMAILS, SOCIAL_MEDIA } = INFO;

function initPhones() {
  const $footerphones = $('.footer .phone');

  PHONES.forEach((number) => {
    $footerphones.append(`
      <a href="tel:${number}" class="phone-item">${number}</a>
    `);
  });

  const $headerphones = $('.header .phone');

  PHONES.forEach((number) => {
    $headerphones.append(`
      <a href="tel:${number}" class="phone-item">${number}</a>
    `);
  });
}

function initEmails() {
  const $feedbacks = $('.footer .emails');

  EMAILS.forEach((email) => {
    $feedbacks.append(`
      <a class="footer-link" href="mailto:${email}">${email}</a>
    `);
  });
}

function initSocialMedia() {
  const $feedbacks = $('.footer .social-list');

  SOCIAL_MEDIA.forEach(({ ICON, HREF }) => {
    $feedbacks.append(`
      <li class="social-el">
        <a href="${HREF}" target="_blank" class="social-link">
          <i class="${ICON}"></i>
        </a>
      </li>
    `);
  });
}

function initInfo() {
  initPhones();
  initEmails();
  initSocialMedia();
}

export default initInfo;
