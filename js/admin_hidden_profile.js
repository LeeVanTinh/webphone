const hinhanhhien = document.getElementById('hinhanhhien');
const showProfile = document.getElementById('hidden');

hinhanhhien.addEventListener('click', function() {
  showProfile.style.display = 'block';
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;

  if (!targetElement.closest('.img_header')) {
    showProfile.style.display = 'none';
  }
});