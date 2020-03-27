/* eslint-disable no-tabs */
import $ from 'jquery';

const { ABOUT_US } = CUSTOM_MESSAGES;

function initAboutUs() {
  const $about = $('.facts-list');

  ABOUT_US.map(({
    TITLE, DESCRIPTION,
  }) => {
    $about.append(`
		<div class="fact">
			<span class="fact-value">${TITLE}</span>
			<span class="fact-text">${DESCRIPTION}</span>
		</div>
	`);
  });
}

export default initAboutUs;
