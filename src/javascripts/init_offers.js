/* eslint-disable no-tabs */
import $ from 'jquery';

const { OFFERS } = CUSTOM_MESSAGES;

function initOffers() {
  const $offers = $('.offers-list');

  OFFERS.map(({
    TITLE, DESCRIPTION, OFFERS_LIST, SERVICE,
  }) => {
    $offers.append(`
			<div class="offer-card">
				<div class="offer">
					<span class="offer-title">${TITLE}</span>
					<span class="offer-sub-title">Закажи свою игру</span>
					<div class="offer-description">${DESCRIPTION}</div>
					<div class="offer-prices">
						${OFFERS_LIST.map((item) => `
								${item}<br/>
							`).join('')}
					</div>
					<div class="offer-items">
						<span class="items-title">${SERVICE.TITLE}</span>
						${SERVICE.ITEMS.map((item) => `<span class="items-item">${item}</span>`).join('')}
					</div>
					<div class="offer-button-wrap">
						<button class="offer-button">Заказать ${TITLE}</button>
					</div>
				</div>
			</div>
		`);
  });
}

export default initOffers;
