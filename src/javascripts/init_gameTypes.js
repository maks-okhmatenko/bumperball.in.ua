/* eslint-disable no-tabs */
/* global CUSTOM_MESSAGES */
import $ from 'jquery';

const { GAME_TYPES } = CUSTOM_MESSAGES;

function initGameTypes() {
  const $offers = $('.types-list');
  const $format = $('.request .request-format');

  GAME_TYPES.map(({
    TITLE, DESCRIPTION,
  }) => {
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

    $format.append(`
			<option value="${TITLE}">${TITLE}</option>
		`);
  });
}

export default initGameTypes;
