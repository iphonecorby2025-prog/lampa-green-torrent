
(function () {
  'use strict';

  const green = '#00e676';

  const style = document.createElement('style');
  style.textContent = `
    .button--torrent,
    .full-start__button.selector,
    .torrent {
      color: ${green} !important;
      border-color: ${green} !important;
    }
  `;

  document.head.appendChild(style);
})();
