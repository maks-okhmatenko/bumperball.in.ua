/* eslint-disable no-tabs */
/* global CUSTOM_MESSAGES */
import $ from 'jquery';

const { GAME_TYPES, OFFERS } = CUSTOM_MESSAGES;

function initGameTypes() {
  const $offers = $('.types-list');
  const $format = $('.request .request-format');

  OFFERS.forEach(({ FORM_TITLE }) => {
    $format.append(`
			<option value="${FORM_TITLE}">${FORM_TITLE}</option>
		`);
  });

  GAME_TYPES.forEach(({ TITLE, DESCRIPTION }) => {
    $offers.append(`
		<div class="type-card">
			<div class="type">
				<span class="type-title">${TITLE}</span>
				<p class="type-text">${DESCRIPTION}</p>
				<div class="type-button-wrap">
					<a class="type-button" href="#contacts">Заказать ${TITLE}</a>
				</div>
			</div>
		</div>
		`);
  });
}

export default initGameTypes;
