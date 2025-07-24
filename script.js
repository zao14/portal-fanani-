document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});
function showSecret() {
  const button = document.querySelector('.secret-button');
  button.style.display = 'block';
}

function openModal() {
  document.getElementById('secret-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('secret-modal').style.display = 'none';
}
function showSecret() {
  const btn = document.querySelector('.secret-button');
  btn.style.display = 'block';
}
