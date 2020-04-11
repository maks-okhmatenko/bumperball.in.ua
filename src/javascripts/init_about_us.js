/* eslint-disable no-tabs */
/* global CUSTOM_MESSAGES */
import $ from 'jquery';

const { ABOUT_US } = CUSTOM_MESSAGES;

function initAboutUs() {
  const $about = $('.facts-list');

  ABOUT_US.forEach(({ TITLE, DESCRIPTION, ID }) => {
    $about.append(`
		<div class="fact">
			<span class="fact-value" id="${ID}">${TITLE}</span>
			<span class="fact-text">${DESCRIPTION}</span>
		</div>
	`);
  });
}

export default initAboutUs;
