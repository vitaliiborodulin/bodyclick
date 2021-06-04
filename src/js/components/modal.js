var btnOpen = document.querySelectorAll('.btn');
var modal = document.getElementById('wrapper-modal');

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btn-close');

for (var i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('active');
  });
}

function closeModal() {
  modal.classList.remove('active');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);