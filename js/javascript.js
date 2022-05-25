const elSiteDark = document.querySelector('.site-dark-button');

elSiteDark.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});