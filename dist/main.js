(()=>{"use strict";function e(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function t(t){t.stopPropagation();var a=t.currentTarget;"light"===a.dataset.mode?(a.dataset.mode="dark",localStorage.theme="dark",e()):(a.dataset.mode="light",localStorage.theme="light",e())}function a(){document.querySelectorAll('[x-ref="panel"]').forEach((function(e){"{ selected: true }"===e.parentElement.getAttribute("x-data")&&e.style.setProperty("max-height","".concat(e.scrollHeight,"px"))}))}document.addEventListener("DOMContentLoaded",(function(n){var r,o;localStorage.theme||localStorage.setItem("theme","light"),e(),document.querySelector("#mode").addEventListener("click",t),r=document.querySelector("#breadcrumb"),(o=document.body.dataset.section)||r.previousElementSibling.classList.add("hidden"),r.textContent=o,document.querySelectorAll(".accordion").forEach((function(e){e.addEventListener("click",(function(e){return function(e){var t=e.target.closest("div").parentElement,a=Array.from(t.children);"{ expanded: false }"===t.getAttribute("x-data")?(a.forEach((function(e){e.hasAttribute("x-data")&&e.setAttribute("x-data","{ selected: true }")})),t.setAttribute("x-data","{ expanded: true }")):(a.forEach((function(e){e.hasAttribute("x-data")&&e.setAttribute("x-data","{ selected: false }")})),t.setAttribute("x-data","{ expanded: false }"))}(e)}))})),document.querySelectorAll(".more").forEach((function(e){e.addEventListener("click",(function(e){return setTimeout((function(){a()}),100)}))}))})),window.addEventListener("resize",(function(e){a()}))})();