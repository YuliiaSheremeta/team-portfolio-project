import{a as b}from"./assets/vendor-N5iQpiFS.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function d(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=d(t);fetch(t.href,o)}})();const L=document.querySelector(".mobile-menu-burger-btn"),v=document.querySelector(".mobile-menu-close-btn"),s=document.querySelector(".mobile-menu-wrapper"),g=document.querySelector(".mobile-menu-container");L&&v&&s&&(L.addEventListener("click",p),v.addEventListener("click",p),g.addEventListener("click",p));function p(e){e.stopPropagation(),s.classList.contains("is-open")?s.classList.remove("is-open"):s.classList.add("is-open")}const q=document.querySelector(".title-menu"),c=document.querySelector(".tablet-menu-wrapper");function f(e){e.stopPropagation(),c.classList.contains("is-open")?c.classList.remove("is-open"):c.classList.add("is-open")}q.addEventListener("click",f);c.addEventListener("click",f);const S=document.querySelectorAll(".tablet-menu-item");S.forEach(function(e){e.addEventListener("click",f)});document.addEventListener("DOMContentLoaded",function(){new Accordion("#accordion-faq-left",{duration:400,showMultiple:!0,collapse:!0})});document.addEventListener("DOMContentLoaded",function(){new Accordion("#accordion-faq-right",{duration:400,showMultiple:!0,collapse:!0})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".section-faq-item-button").forEach(n=>{n.addEventListener("click",function(){this.classList.toggle("rotated")})})});const h=document.querySelector(".footer-form"),i=document.querySelector(".email-input"),l=document.querySelector(".comment-input"),u=document.querySelector(".footer-title");document.querySelector(".footer-contact-list");const a=document.querySelector(".backdrop"),w=document.querySelector(".close-modal-button"),y=document.querySelector(".modal-title"),E=document.querySelector(".modal-text"),M=async e=>{e.preventDefault();const n=i.value.trim(),d=l.value.trim();try{const r=await b.post("https://portfolio-js.b.goit.study/api/requests",{email:`${n}`,comment:`${d}`});i.value="",l.value="",a.classList.add("is-open")}catch(r){console.log(r),y.classList.add("error-title"),y.textContent="Error!",E.classList.add("error-text"),E.textContent="Sorry something went wrong",a.classList.add("is-open")}};h.addEventListener("submit",M);w.addEventListener("click",e=>{a.classList.remove("is-open")});document.addEventListener("keydown",e=>{(e.key==="Escape"||e.keyCode===27)&&a.classList.remove("is-open")});i.addEventListener("focus",e=>{u.classList.add("animate-title")});i.addEventListener("blur",e=>{u.classList.remove("animate-title")});l.addEventListener("focus",e=>{u.classList.add("animate-title")});l.addEventListener("blur",e=>{u.classList.remove("animate-title")});
//# sourceMappingURL=index.js.map
