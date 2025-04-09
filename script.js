const flipbook = new FlipBook('#flipbook', {
  pdf: 'PORTFOLIO_MASTERS.pdf',
  zoom: 1
});

document.getElementById('zoomIn').addEventListener('click', () => {
  flipbook.setZoom(flipbook.options.zoom + 0.1);
});

document.getElementById('zoomOut').addEventListener('click', () => {
  flipbook.setZoom(Math.max(0.5, flipbook.options.zoom - 0.1));
});
