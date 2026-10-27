document.documentElement.classList.add("js");
const WHATSAPP="5573981767575";
const MSG="Olá! Vim pelo site da Elevare Pilates e gostaria de agendar uma aula.";
document.querySelectorAll(".js-wa").forEach(a=>{a.href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`;a.target="_blank";a.rel="noopener"});
document.getElementById("ano").textContent=new Date().getFullYear();
const menu=document.getElementById("menu"),btn=document.querySelector(".menu-btn");
function setMenu(o){menu.classList.toggle("open",o);btn.setAttribute("aria-expanded",o);btn.setAttribute("aria-label",o?"Fechar menu":"Abrir menu")}
btn.addEventListener("click",()=>setMenu(!menu.classList.contains("open")));
menu.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
const io="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12}):null;
document.querySelectorAll(".reveal").forEach(el=>io?io.observe(el):el.classList.add("in"));
