import{a as m}from"./assets/vendor-N5iQpiFS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const p=document.querySelector(".footer-form"),l=document.querySelector(".email-input"),u=document.querySelector(".comment-input"),n=document.querySelector(".backdrop"),f=document.querySelector(".close-modal-button"),a=document.querySelector(".modal-title"),d=document.querySelector(".modal-text"),y=async o=>{o.preventDefault();const r=l.value.trim(),c=u.value.trim();try{const s=await m.post("https://portfolio-js.b.goit.study/api/requests",{email:`${r}`,comment:`${c}`});l.value="",u.value="",n.classList.add("is-open")}catch(s){console.log(s),a.classList.add("error-title"),a.textContent="Error!",d.classList.add("error-text"),d.textContent="Sorry something went wrong",n.classList.add("is-open")}};p.addEventListener("submit",y);f.addEventListener("click",o=>{n.classList.remove("is-open")});document.addEventListener("keydown",o=>{(o.key==="Escape"||o.keyCode===27)&&n.classList.remove("is-open")});
//# sourceMappingURL=index.js.map
