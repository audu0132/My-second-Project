
    // JavaScript for responsive navigation
    const mediaButton = document.getElementById('media_button');
    const menu = document.getElementById('menu_list');
  
    mediaButton.addEventListener('click', () => {
      menu.classList.toggle('show-menu');
    });
  
    let redBtn = document.getElementById('red');
    let blueBtn = document.getElementById('blue');
    let blackBtn = document.getElementById('black');
    let bike = document.getElementById('bike');
  
    redBtn.onclick = function () {
      bike.style.backgroundImage = "url(BMW1.png)";
    };
    blueBtn.onclick = function () {
      bike.style.backgroundImage = "url(BMW2.png)";
    };
    blackBtn.onclick = function () {
      bike.style.backgroundImage = "url(BMW3.png)";
    };
  
    // Hero slider
    let hero_slide = document.querySelector('#hero_slide');
  
    let hero_slide_items = hero_slide.querySelectorAll('.slide');
  
    let hero_slide_chat = 0;
  
    let hero_slide_play = true;
  
    let hero_slide_control_items = hero_slide.querySelectorAll('.slide-control-item');
  
    let slide_next = hero_slide.querySelector('.slide-next');
  
    let slide_prev = hero_slide.querySelector('.slide-prev');
  
    showSlide = (chat) => {
      hero_slide.querySelector('.slide.active').classList.remove('active');
      hero_slide.querySelector('.slide-control-item.active').classList.remove('active');
      hero_slide_control_items[chat].classList.add('active');
      hero_slide_items[chat].classList.add('active');
    };
  
    nextSlide = () => {
      hero_slide_chat = hero_slide_chat + 1 === hero_slide_items.length ? 0 : hero_slide_chat + 1;
      showSlide(hero_slide_chat);
    };
  
    prevSlide = () => {
      hero_slide_chat = hero_slide_chat - 1 < 0 ? hero_slide_items.length - 1 : hero_slide_chat - 1;
      showSlide(hero_slide_chat);
    };
  
    slide_next.addEventListener('click', () => nextSlide());
  
    slide_prev.addEventListener('click', () => prevSlide());
  
    hero_slide_control_items.forEach((item, chat) => {
      item.addEventListener('click', () => showSlide(chat));
    });
  
    hero_slide.addEventListener('mouseover', () => hero_slide_play = false);
  
    hero_slide.addEventListener('mouseleave', () => hero_slide_play = true);
  
    setTimeout(() => hero_slide_items[0].classList.add('active'), 200);
  
    // Auto slide
    setInterval(() => {
      if (!hero_slide_play) return;
      nextSlide();
    }, 5000);
  
    // Change header style when scrolling
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }
    });
  
    // Element show on scroll
    let scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60); };
  
    let el_to_show = document.querySelectorAll('.show-on-scroll');
  
    isElInViewPort = (el) => {
      let rect = el.getBoundingClientRect();
      let distance = 200;
      return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance));
    };
  
    loop = () => {
      el_to_show.forEach(el => {
        if (isElInViewPort(el)) el.classList.add('show');
      });
      scroll(loop);
    };
  
    loop();
