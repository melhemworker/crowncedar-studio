
const header=document.querySelector('[data-header]');
const toggle=document.querySelector('[data-menu-toggle]');
const mobile=document.querySelector('[data-mobile-menu]');
if(toggle&&mobile){toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));});}
const onScroll=()=>{if(header) header.classList.toggle('scrolled',window.scrollY>10)};onScroll();window.addEventListener('scroll',onScroll,{passive:true});
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const io=new IntersectionObserver((entries)=>{for(const e of entries){if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}}},{threshold:.12});els.forEach(el=>io.observe(el));}else{els.forEach(el=>el.classList.add('is-visible'));}
