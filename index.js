import{A as M,S as g,i as x,a as O}from"./assets/vendor-BSKYezAz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const y=document.querySelector(".mobile-menu-burger-btn"),h=document.querySelector(".mobile-menu-close-btn"),c=document.querySelector(".mobile-menu-wrapper"),B=document.querySelector(".mobile-menu-container");y&&h&&c&&(y.addEventListener("click",f),h.addEventListener("click",f),B.addEventListener("click",f),document.addEventListener("keydown",P));function f(e){e.stopPropagation(),c.classList.contains("is-open")?c.classList.remove("is-open"):c.classList.add("is-open")}function P(e){e.key==="Escape"&&c.classList.contains("is-open")&&c.classList.remove("is-open")}const j=document.querySelector(".title-menu"),a=document.querySelector(".tablet-menu-wrapper");function b(e){e.stopPropagation(),a.classList.contains("is-open")?a.classList.remove("is-open"):a.classList.add("is-open")}j.addEventListener("click",b);a.addEventListener("click",b);const V=document.querySelectorAll(".tablet-menu-item");V.forEach(function(e){e.addEventListener("click",b)});document.addEventListener("DOMContentLoaded",function(){new M(".accordion-container",{duration:400,showMultiple:!0,openOnInit:[0],onOpen:function(e){console.log(e)}})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".about-trigger").forEach(t=>{t.addEventListener("click",function(){this.classList.toggle("rotated")})})});document.addEventListener("DOMContentLoaded",function(){new g(".swiper-container",{loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},on:{init:function(){e(this)},slideChangeTransitionEnd:function(){e(this)}}});function e(t){t.slides.forEach(function(i){i.classList.remove("leftmost")}),t.slides[t.activeIndex]&&t.slides[t.activeIndex].classList.add("leftmost")}});new g(".swiper",{loop:!1,slidesPerView:1,navigation:{nextEl:".projects-swiper-button-next",prevEl:".projects-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,on:{init:function(e){S(e)},slideChange:function(e){S(e)}}});function S(e){const t=document.querySelector(".projects-swiper-button-prev"),i=document.querySelector(".projects-swiper-button-next");!t||!i||(t.disabled=e.isBeginning,i.disabled=e.isEnd,t.classList.toggle("projects-swiper-button-disabled",e.isBeginning),i.classList.toggle("projects-swiper-button-disabled",e.isEnd))}document.addEventListener("DOMContentLoaded",function(){new Accordion("#accordion-faq-left",{duration:400,showMultiple:!0,collapse:!0})});document.addEventListener("DOMContentLoaded",function(){new Accordion("#accordion-faq-right",{duration:400,showMultiple:!0,collapse:!0})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".section-faq-item-button").forEach(t=>{t.addEventListener("click",function(){this.classList.toggle("rotated")})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers-section"),t=document.querySelectorAll(".marquee__line");function i(n){const o=n.getBoundingClientRect();return o.top<window.innerHeight&&o.bottom>0}function s(){t.forEach(n=>{n.style.animationPlayState=i(e)?"running":"paused"})}window.addEventListener("scroll",s),window.addEventListener("resize",s),s()});const q="/team-portfolio-project/assets/sprite-Ri2QJPrX.svg";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".reviews-swiper-container"),t=i=>{x.error({title:"❌",message:i,position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3})};fetch("https://portfolio-js.b.goit.study/api/reviews").then(i=>{if(!i.ok)throw new Error("Failed to fetch reviews");return i.json()}).then(i=>{if(i.length===0)throw new Error("Failed to fetch reviews");e.innerHTML=`
            <div class='swiper'>
              <div class='swiper-wrapper'>
                ${i.map(o=>`
                  <div class='swiper-slide'>
                    <img src='${o.avatar_url}' alt='${o.author}'>
                    <div class='swiper-slide-review'>
                    <h3>${o.author}</h3>
                    <p>${o.review}</p>
                    </div>
                  </div>`).join("")}
              </div>
              <div class="swiper-buttons">
              <div class="swiper-button-prev">
                <svg class="swiper-button-icon">
                  <use href="${q}#icon-swiperrigth"></use>
                </svg>
              </div>
              <div class="swiper-button-next">
                <svg class="swiper-button-icon">
                  <use href="${q}#icon-swiperrigth"></use>
                </svg>
              </div>
              </div>
            </div>`;let s=new g(".reviews .swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:16});function n(){let o=1;window.matchMedia("(min-width: 768px)").matches&&(o=2),window.matchMedia("(min-width: 1440px)").matches&&(o=4),s.params.slidesPerView=o,s.update()}window.addEventListener("resize",n),n()}).catch(i=>{t(i.message),e.innerHTML="<p class='not-found'>Not found</p>"})});const d=document.querySelector("body"),$=document.querySelector(".footer-form"),l=document.querySelector(".email-input"),u=document.querySelector(".comment-input"),m=document.querySelector(".footer-title");document.querySelector(".footer-contact-list");const r=document.querySelector(".backdrop"),v=document.querySelector(".close-modal-button"),k=document.querySelector(".modal-title"),C=document.querySelector(".modal-text"),A=async e=>{e.preventDefault(),v.removeEventListener("click",L),r.removeEventListener("click",w),document.removeEventListener("keydown",E);const t=l.value.trim(),i=u.value.trim();try{const s=await O.post("https://portfolio-js.b.goit.study/api/requests",{email:`${t}`,comment:`${i}`});l.value="",u.value="",d.classList.add("footer-modal-open"),r.classList.add("is-open"),v.addEventListener("click",L),r.addEventListener("click",w),document.addEventListener("keydown",E)}catch{k.classList.add("error-title"),k.textContent="Error!",C.classList.add("error-text"),C.textContent="Sorry something went wrong",v.addEventListener("click",L),r.addEventListener("click",w),document.addEventListener("keydown",E),d.classList.add("footer-modal-open"),r.classList.add("is-open")}};$.addEventListener("submit",A);l.addEventListener("focus",e=>{m.classList.add("animate-title")});l.addEventListener("blur",e=>{m.classList.remove("animate-title")});u.addEventListener("focus",e=>{m.classList.add("animate-title")});u.addEventListener("blur",e=>{m.classList.remove("animate-title")});const L=e=>{r.classList.remove("is-open"),d.classList.remove("footer-modal-open")},w=e=>{e.target===r&&(r.classList.remove("is-open"),d.classList.remove("footer-modal-open"))},E=e=>{(e.key==="Escape"||e.keyCode===27)&&(r.classList.remove("is-open"),d.classList.remove("footer-modal-open"))};
//# sourceMappingURL=index.js.map
