(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const h=document.querySelector("#hamburger"),u=document.querySelector("#navbar"),y=u.querySelectorAll("a");h.addEventListener("click",()=>{u.classList.toggle("navbar-active")});y.forEach(t=>{t.addEventListener("click",()=>{u.classList.toggle("navbar-active")})});let l=document.querySelectorAll(".faq");for(let t=0;t<l.length;t++){let e=l[t].querySelector(".faq-answer"),o=l[t].querySelector(".arrow-down");l[t].addEventListener("click",()=>{for(let a=0;a<l.length;a++){let n=l[a].querySelector(".faq-answer"),s=l[a].querySelector(".arrow-down");l[t]!=l[a]&&(n.style.maxHeight="0px",s.classList.replace("rotate-180","rotate-0"))}o.classList.contains("rotate-180")?(e.style.maxHeight=0+"px",o.classList.replace("rotate-180","rotate-0")):(e.style.maxHeight=e.scrollHeight+"px",o.classList.replace("rotate-0","rotate-180"))})}let w=document.querySelectorAll(".switcher");localStorage.setItem("color-theme","dark");localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");w.forEach(t=>{t.addEventListener("click",function(){localStorage.getItem("color-theme")?localStorage.getItem("color-theme")==="light"?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"))})});document.addEventListener("DOMContentLoaded",function(){if(window.location.pathname.includes("index.html")||window.location.pathname==="/"){const e=[{formId:"contactForm1",messageId:"thankYouMessage1"},{formId:"contactForm2",messageId:"thankYouMessage2"}];e.forEach(({formId:o,messageId:a})=>{const n=document.getElementById(o);if(!n){console.warn(`Form with ID "${o}" not found`);return}n.addEventListener("submit",function(s){s.preventDefault();const r={data:{email:new FormData(n).get("email")}},f=n.querySelector('button[type="submit"]'),p=n.querySelector(".loader");f.classList.add("hidden"),p.classList.remove("hidden"),fetch("https://cd-send-mail-acknowledge.glitch.me/sendemail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(c=>c.json()).then(c=>{console.log("Success:",c),e.forEach(({formId:m})=>{document.getElementById(m).classList.add("hidden")}),e.forEach(({messageId:m})=>{const g=document.getElementById(m);g.classList.remove("hidden"),g.classList.add("slide-in-bottom")})}).catch(c=>{console.error("Error:",c),f.classList.remove("hidden"),p.classList.add("hidden")})})})}});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".tab"),e=document.querySelectorAll(".panel"),o=document.querySelectorAll('[id^="preview-panel-"]');t.forEach(a=>{a.addEventListener("click",function(){t.forEach(r=>{r.setAttribute("aria-selected","false"),r.setAttribute("tabindex","-1"),r.classList.remove("active")}),e.forEach(r=>{r.classList.add("invisible","opacity-0"),r.classList.remove("scale-100","opacity-100")}),o.forEach(r=>{r.classList.add("invisible","opacity-0","translate-y-[100%]"),r.classList.remove("scale-100","opacity-100","translate-y-0"),r.style.zIndex="0"}),a.setAttribute("aria-selected","true"),a.setAttribute("tabindex","0"),a.classList.add("active");const n=a.getAttribute("aria-controls"),s=document.getElementById(n);s.classList.remove("invisible","opacity-0"),s.classList.add("scale-100","opacity-100");const i=`preview-${n}`,d=document.getElementById(i);d&&(d.classList.remove("invisible","opacity-0","translate-y-[100%]"),d.classList.add("scale-100","opacity-100","translate-y-0"),d.style.zIndex="10")})})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("imageModal"),e=document.getElementById("zoomedImage");if(!t||!e){console.warn("Modal elements not found. Image zoom functionality disabled.");return}window.openZoomModal=function(o){!o||(e.src=o.src,e.alt=o.alt,t.classList.remove("hidden"),document.body.style.overflow="hidden")},window.closeZoomModal=function(){t.classList.add("hidden"),document.body.style.overflow=""},t.addEventListener("click",o=>{o.target===o.currentTarget&&window.closeZoomModal()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&window.closeZoomModal()})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("daily-calls"),e=document.getElementById("hourly-cost"),o=document.getElementById("minutes-saved"),a=document.getElementById("annual-savings");if(t&&e&&o&&a){const n=()=>{const s=parseFloat(t.value)||0,i=parseFloat(e.value)||0,d=parseFloat(o.value)||0,r=s*d*(i/60)*250;a.textContent="$"+Math.round(r).toLocaleString()};t.addEventListener("input",n),e.addEventListener("input",n),o.addEventListener("input",n)}});const L=["gmail.com","yahoo.com","hotmail.com","outlook.com","aol.com","icloud.com","proton.me","protonmail.com"];function x(t){var o;const e=(o=t.split("@")[1])==null?void 0:o.toLowerCase();return L.includes(e)?{valid:!1,message:"Please use your work email address"}:{valid:!0,message:""}}document.getElementById("work-email").addEventListener("input",function(t){const e=x(t.target.value),o=document.getElementById("email-error");e.valid?(o.classList.add("hidden"),t.target.setCustomValidity("")):(o.textContent=e.message,o.classList.remove("hidden"),t.target.setCustomValidity(e.message))});document.addEventListener("DOMContentLoaded",function(){if(document.getElementById("demo-video")){const e=document.getElementById("placeholder-container"),o=document.getElementById("main-gif");e&&o&&(o.addEventListener("load",function(){o.classList.add("opacity-100","transition-opacity","duration-500"),e.classList.add("opacity-0","transition-opacity","duration-300"),setTimeout(()=>{e.style.display="none"},500)}),o.addEventListener("error",function(){console.error("Failed to load GIF");const a=e.querySelector(".animate-spin"),n=e.querySelector("p");a&&(a.style.display="none"),n&&(n.textContent="Preview image unavailable")}),setTimeout(function(){o.complete&&o.naturalHeight!==0?o.dispatchEvent(new Event("load")):o.dispatchEvent(new Event("error"))},1e4))}});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname.includes("ai-agent");let e=document.getElementById("cross-promotion-banner");e?v(e,t):(e=E(t),document.body.appendChild(e));const o=document.getElementById("close-promotion");if(!e||!o){console.error("Banner elements not found");return}b(),setTimeout(function(){e.classList.remove("translate-y-full"),e.classList.add("fctr-attention")},3e3),o.addEventListener("click",function(){e.classList.remove("fctr-attention"),e.classList.add("translate-y-full")})});function E(t){const e=document.createElement("div");return e.id="cross-promotion-banner",e.className="fixed bottom-0 right-0 z-50 max-w-sm transform translate-y-full transition-transform duration-150 ease-out",v(e,t),e}function v(t,e){e?t.innerHTML=`
            <div class="relative m-4 rounded-lg border border-purple-300 bg-gradient-to-r from-purple-500 to-blue-600 p-4 shadow-xl dark:border-purple-500 dark:from-purple-600 dark:to-blue-700">
              <button id="close-promotion" class="absolute top-2 right-2 text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0">
                  <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-white">Try our Identity Portal</h3>
                  <p class="mt-1 text-xs text-white text-opacity-90">Secure identity verification for helpdesk teams !</p><br/>
                  <a href="/index.html" class="mt-2 inline-flex items-center rounded-md bg-white px-3 py-1 text-xs font-medium text-purple-700 hover:bg-gray-100">
                    Explore Identity Portal
                    <svg class="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
        `:document.querySelector("#cross-promotion-banner .text-purple-600")||(t.innerHTML=`
                <div class="relative m-4 rounded-lg border border-purple-300 bg-gradient-to-r from-purple-500 to-blue-600 p-4 shadow-xl dark:border-purple-500 dark:from-purple-600 dark:to-blue-700">
                  <button id="close-promotion" class="absolute top-2 right-2 text-white hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0">
                      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 class="text-sm font-bold text-white">Try our AI Agent for Okta</h3>
                      <p class="mt-1 text-xs text-white text-opacity-90">Natural language query for Okta management!</p><br/>
                      <a href="/ai-agent.html" class="mt-2 inline-flex items-center rounded-md bg-white px-3 py-1 text-xs font-medium text-purple-700 hover:bg-gray-100">
                        Explore AI Agent
                        <svg class="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
            `)}function b(){if(!document.getElementById("fctr-animation-styles")){const t=document.createElement("style");t.id="fctr-animation-styles",t.textContent=`
            @keyframes fctrAttentionEntry {
                0% { transform: translateY(100%); opacity: 0.5; }
                20% { opacity: 1; }
                60% { transform: translateY(-10px); }
                75% { transform: translateY(5px); }
                85% { transform: translateY(-3px); }
                92% { transform: translateY(2px); }
                100% { transform: translateY(0); }
            }
            
            .fctr-attention {
                animation: fctrAttentionEntry 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
                will-change: transform;
            }
            
            @media (prefers-reduced-motion: reduce) {
                .fctr-attention {
                    animation: none;
                    transform: translateY(0);
                }
            }
        `,document.head.appendChild(t)}}
