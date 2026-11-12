
(function () {
  'use strict';

  const green = '#00e676';

  function update() {
    document.querySelectorAll('body *').forEach(el => {
      if (el.children.length > 3) return;

      const label = (el.textContent || '').trim();

      if (label !== 'Торренты') return;

      const button = el.closest(
        '.selector, .full-start__button, .button'
      ) || el;

      button.style.setProperty(
        'color', green, 'important'
      );
      button.style.setProperty(
        'border-color', green, 'important'
      );
    });
  }

  let pending = false;

  function schedule() {
    if (pending) return;
    pending = true;

    requestAnimationFrame(() => {
      pending = false;
      update();
    });
  }

  update();

  new MutationObserver(schedule).observe(
    document.body,
    { childList: true, subtree: true }
  );
})();
