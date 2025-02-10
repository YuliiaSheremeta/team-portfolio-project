import{A as b,S as f,i as y,a as S}from"./assets/vendor-BSKYezAz.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();const w=document.querySelector(".mobile-menu-burger-btn"),L=document.querySelector(".mobile-menu-close-btn"),r=document.querySelector(".mobile-menu-wrapper"),q=document.querySelector(".mobile-menu-container");w&&L&&r&&(w.addEventListener("click",p),L.addEventListener("click",p),q.addEventListener("click",p),document.addEventListener("keydown",M));function p(e){e.stopPropagation(),r.classList.contains("is-open")?r.classList.remove("is-open"):r.classList.add("is-open")}function M(e){e.key==="Escape"&&r.classList.contains("is-open")&&r.classList.remove("is-open")}const x=document.querySelector(".title-menu"),c=document.querySelector(".tablet-menu-wrapper");function v(e){e.stopPropagation(),c.classList.contains("is-open")?c.classList.remove("is-open"):c.classList.add("is-open")}x.addEventListener("click",v);c.addEventListener("click",v);const C=document.querySelectorAll(".tablet-menu-item");C.forEach(function(e){e.addEventListener("click",v)});document.addEventListener("DOMContentLoaded",function(){new b(".accordion-container",{duration:400,showMultiple:!0,openOnInit:[0],onOpen:function(e){console.log(e)}})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".about-trigger").forEach(n=>{n.addEventListener("click",function(){this.classList.toggle("rotated")})})});document.addEventListener("DOMContentLoaded",function(){new f(".swiper-container",{loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},on:{init:function(){e(this)},slideChangeTransitionEnd:function(){e(this)}}});function e(n){n.slides.forEach(function(i){i.classList.remove("leftmost")}),n.slides[n.activeIndex]&&n.slides[n.activeIndex].classList.add("leftmost")}});new f(".swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".projects-swiper-button-next",prevEl:".projects-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,on:{init:function(e){g(e)},slideChange:function(e){g(e)}}});function g(e){const n=document.querySelector(".projects-swiper-button-prev"),i=document.querySelector(".projects-swiper-button-next");!n||!i||(n.disabled=e.isBeginning,i.disabled=e.isEnd,n.classList.toggle("projects-swiper-button-disabled",e.isBeginning),i.classList.toggle("projects-swiper-button-disabled",e.isEnd))}document.addEventListener("DOMContentLoaded",function(){new Accordion("#accordion-faq-left",{duration:400,showMultiple:!0,collapse:!0})});document.addEventListener("DOMContentLoaded",function(){new Accordion("#accordion-faq-right",{duration:400,showMultiple:!0,collapse:!0})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".section-faq-item-button").forEach(n=>{n.addEventListener("click",function(){this.classList.toggle("rotated")})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers-section"),n=document.querySelectorAll(".marquee");function i(o){const t=o.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function s(){n.forEach(o=>{o.style.animationPlayState=i(e)?"running":"paused"})}window.addEventListener("scroll",s),window.addEventListener("resize",s),s()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".reviews-swiper-container"),n=i=>{y.error({title:"❌",message:i,position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3})};fetch("https://portfolio-js.b.goit.study/api/reviews").then(i=>{if(!i.ok)throw new Error("Failed to fetch reviews");return i.json()}).then(i=>{if(i.length===0)throw new Error("Failed to fetch reviews");e.innerHTML=`
            <div class='swiper'>
              <div class='swiper-wrapper'>
                ${i.map(t=>`
                  <div class='swiper-slide'>
                    <img src='${t.avatar_url}' alt='${t.author}'>
                    <div class='swiper-slide-review'>
                    <h3>${t.author}</h3>
                    <p>${t.review}</p>
                    </div>
                  </div>`).join("")}
              </div>
              <!-- Кнопки навігації -->
              <div class="swiper-buttons">
              <div class="swiper-button-prev">
                <svg class="swiper-button-icon">
                  <use href="img/sprite.svg#icon-swiperrigth"></use>
                </svg>
              </div>
              <div class="swiper-button-next">
                <svg class="swiper-button-icon">
                  <use href="img/sprite.svg#icon-swiperrigth"></use>
                </svg>
              </div>
              </div>
            </div>`;let s=new f(".reviews .swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:10});function o(){let t=1;window.matchMedia("(min-width: 768px)").matches&&(t=2),window.matchMedia("(min-width: 1440px)").matches&&(t=4),s.params.slidesPerView=t,s.update()}window.addEventListener("resize",o),o()}).catch(i=>{n(i.message),e.innerHTML="<p class='not-found'>Not found</p>"})});const k=document.querySelector(".footer-form"),d=document.querySelector(".email-input"),l=document.querySelector(".comment-input"),u=document.querySelector(".footer-title");document.querySelector(".footer-contact-list");const a=document.querySelector(".backdrop"),O=document.querySelector(".close-modal-button"),E=document.querySelector(".modal-title"),h=document.querySelector(".modal-text"),P=async e=>{e.preventDefault();const n=d.value.trim(),i=l.value.trim();try{const s=await S.post("https://portfolio-js.b.goit.study/api/requests",{email:`${n}`,comment:`${i}`});d.value="",l.value="",a.classList.add("is-open")}catch(s){console.log(s),E.classList.add("error-title"),E.textContent="Error!",h.classList.add("error-text"),h.textContent="Sorry something went wrong",a.classList.add("is-open")}};k.addEventListener("submit",P);O.addEventListener("click",e=>{a.classList.remove("is-open")});document.addEventListener("keydown",e=>{(e.key==="Escape"||e.keyCode===27)&&a.classList.remove("is-open")});d.addEventListener("focus",e=>{u.classList.add("animate-title")});d.addEventListener("blur",e=>{u.classList.remove("animate-title")});l.addEventListener("focus",e=>{u.classList.add("animate-title")});l.addEventListener("blur",e=>{u.classList.remove("animate-title")});
//# sourceMappingURL=index.js.map
