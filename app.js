(() => {
  'use strict';

  const mainImage = document.getElementById('hero-painting');
  const viewerImage = document.querySelector('#art-dialog img');
  const artError = document.getElementById('art-error');
  const viewerError = document.getElementById('viewer-fallback');
  const dialog = document.getElementById('art-dialog');
  const closeButton = document.getElementById('close-art');
  let returnFocus;

  function updateImageState() {
    artError.hidden = mainImage.naturalWidth > 0;
  }

  mainImage.addEventListener('load', updateImageState);
  mainImage.addEventListener('error', updateImageState);
  if (mainImage.complete) updateImageState();

  viewerImage.addEventListener('error', () => { viewerError.hidden = false; });
  viewerImage.addEventListener('load', () => { viewerError.hidden = true; });

  document.querySelector('[data-open-art]').addEventListener('click', event => {
    if (typeof dialog.showModal !== 'function') {
      window.open(mainImage.src, '_blank', 'noopener');
      return;
    }
    returnFocus = event.currentTarget;
    dialog.showModal();
    document.body.classList.add('modal-open');
    closeButton.focus();
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    returnFocus?.focus();
  });
})();
