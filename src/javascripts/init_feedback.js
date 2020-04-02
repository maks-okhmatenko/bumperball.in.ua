/* eslint-disable no-tabs */
/* global CUSTOM_MESSAGES */
import $ from 'jquery';

const { FEEDBACK } = CUSTOM_MESSAGES;

function initFeedback() {
  const $feedbacks = $('.feedback-list');

  FEEDBACK.forEach(({
    city, name, avatarLink, feedback, socialMedia,
  }) => {
    $feedbacks.append(`
			<div class="feedback-item">
				<div class="feedback-image">
					<img src="/avatars/${avatarLink}" alt="avatar">
				</div>
				<div class="feedback-info">
					<span class="name i-bold">${name}</span>
					<span class="city">${city}</span>
				</div>
				<p class="feedback-text">${feedback}</p>
				<div class="social">
					<ul class="social-list">

						${socialMedia.map(({ icon, href }) => `
								<li class="social-el">
									<a href="${href}" target="_blank" class="social-link">
										<i class="${icon}"></i>
									</a>
								</li>
							`).join('')}

					</ul>
				</div>
			</div>
		`);
  });
}

export default initFeedback;
