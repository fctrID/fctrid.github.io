(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g=document.querySelector("#hamburger"),d=document.querySelector("#navbar"),L=d.querySelectorAll("a");g.addEventListener("click",()=>{d.classList.toggle("navbar-active")});L.forEach(o=>{o.addEventListener("click",()=>{d.classList.toggle("navbar-active")})});let c=document.querySelectorAll(".faq");for(let o=0;o<c.length;o++){let a=c[o].querySelector(".faq-answer"),r=c[o].querySelector(".arrow-down");c[o].addEventListener("click",()=>{for(let s=0;s<c.length;s++){let e=c[s].querySelector(".faq-answer"),t=c[s].querySelector(".arrow-down");c[o]!=c[s]&&(e.style.maxHeight="0px",t.classList.replace("rotate-180","rotate-0"))}r.classList.contains("rotate-180")?(a.style.maxHeight=0+"px",r.classList.replace("rotate-180","rotate-0")):(a.style.maxHeight=a.scrollHeight+"px",r.classList.replace("rotate-0","rotate-180"))})}let y=document.querySelectorAll(".switcher");localStorage.setItem("color-theme","dark");localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");y.forEach(o=>{o.addEventListener("click",function(){localStorage.getItem("color-theme")?localStorage.getItem("color-theme")==="light"?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"))})});document.addEventListener("DOMContentLoaded",function(){const o=[{formId:"contactForm1",messageId:"thankYouMessage1"},{formId:"contactForm2",messageId:"thankYouMessage2"}];o.forEach(({formId:a,messageId:r})=>{const s=document.getElementById(a);s.addEventListener("submit",function(e){e.preventDefault();const h={data:{email:new FormData(s).get("email")}},m=s.querySelector('button[type="submit"]'),u=s.querySelector(".loader");m.classList.add("hidden"),u.classList.remove("hidden"),fetch("https://cd-send-mail-acknowledge.glitch.me/sendemail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then(l=>l.json()).then(l=>{console.log("Success:",l),o.forEach(({formId:i})=>{document.getElementById(i).classList.add("hidden")}),o.forEach(({messageId:i})=>{const f=document.getElementById(i);f.classList.remove("hidden"),f.classList.add("slide-in-bottom")})}).catch(l=>{console.error("Error:",l),m.classList.remove("hidden"),u.classList.add("hidden")})})})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".tab"),a=document.querySelectorAll(".panel");o.forEach(r=>{r.addEventListener("click",function(){o.forEach(t=>{t.setAttribute("aria-selected","false"),t.setAttribute("tabindex","-1"),t.classList.remove("active")}),a.forEach(t=>{t.classList.add("invisible","opacity-0"),t.classList.remove("scale-100","opacity-100")}),r.setAttribute("aria-selected","true"),r.setAttribute("tabindex","0"),r.classList.add("active");const s=r.getAttribute("aria-controls"),e=document.getElementById(s);e.classList.remove("invisible","opacity-0"),e.classList.add("scale-100","opacity-100")})})});