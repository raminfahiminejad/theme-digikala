const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const scrollAmount = 220; // هر بار چقدر حرکت کنه، کمی بیشتر از min-w li

next.addEventListener('click', () => {
  slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});






let list = document.getElementById("list");
let mega = document.getElementById('mega')
list.addEventListener('mouseover', openMenu);

function openMenu() {
    mega.classList.remove('hidden');
    mega.classList.add('flex')
}



let more = document.getElementById('more');
let tf = document.querySelectorAll('tf');

tf.forEach((tags)=> {
    more.addEventListener('click' , (e) => {
        if(e.target.tagName === 'A'){

            debugger
            tags.childNodes[1].classList.toggle('hidden');
            tags.childNodes[5].classList.toggle('h-[100px]');

            if(more.innerText==='مشاهده بیشتر'){
                
                more.innerText = 'بستن';
            }else{
                more.innerText = 'مشاهده بیشتر'
            }

        }
    })
})





const tabs = document.querySelectorAll('#tabs li');
const contents = document.querySelectorAll('.content > div');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach((content)=>{
          content.classList.remove('after:bg-red-500')
    })
    tabscontents.forEach((content)=>{
      content.classList.add('hidden' , 'flex')
    })
    tabs[index].classList.add('after:bg-red-500');
    tabscontents[index].classList.remove('hidden');
  })
});


const accordions = document.querySelectorAll('.accordion');

accordions.forEach(item => {
  const btn = item.querySelector('.toggleBtn');
  const text = item.querySelector('.text');
  const icon = item.querySelector('svg');

  btn.addEventListener('click', () => {
    text.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  });
});


const selectBox = document.getElementById('selectBox');
const dropdown = document.getElementById('dropdown');
const input = document.getElementById('selectInput');
const options = dropdown.querySelectorAll('span');

selectBox.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
});

options.forEach(option => {
  option.addEventListener('click', () => {
    input.value = option.innerText;
    dropdown.classList.add('hidden');
  });
});

document.addEventListener('click', (e) => {
  if (!selectBox.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add('hidden');
  }
});


let lastScroll = 0;
const border = document.getElementById('headerBorder');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    border.classList.add('opacity-0');
  } else {
    border.classList.remove('opacity-0');
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});












 
