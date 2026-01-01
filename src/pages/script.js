






const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const scrollAmount = 260; // تقریبا اندازه عکس

next.addEventListener('click', () => {
  slider.scrollLeft += scrollAmount;
});

prev.addEventListener('click', () => {
  slider.scrollLeft -= scrollAmount;
});
