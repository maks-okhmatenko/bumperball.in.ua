/* eslint-disable no-tabs */
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
					<button class="type-button">Заказать ${TITLE}</button>
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
