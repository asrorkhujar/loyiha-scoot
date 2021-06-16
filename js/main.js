// FAQ - with toggle
let elsTabToggle = document.querySelectorAll('.tab__toggle');
let elTab = document.querySelector('.tab');

elsTabToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.closest('.tab').classList.toggle('tab__open')
  })
})