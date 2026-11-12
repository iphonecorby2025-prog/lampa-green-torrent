
(function () {
  'use strict';

  function greenTorrent() {
    document.querySelectorAll(
      '.button--torrent, .torrent'
    ).forEach(function (el) {
      el.style.color = '#00e676';
    });
  }

  greenTorrent();

  new MutationObserver(greenTorrent).observe(
    document.body,
    { childList: true, subtree: true }
  );
})();

