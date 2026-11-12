(function () {
  'use strict';

  const style = document.createElement('style');
  style.textContent = `
    .button--torrent,
    .full-start__button.selector,
    .torrent {
      color: #00e676 !important;
      border-color: #00e676 !important;
    }
  `;

  document.head.appendChild(style);
})();
