const menuBtn=document.querySelector(".menu-btn"),nav=document.querySelector(".nav");
menuBtn?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("quoteForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const subject=encodeURIComponent("New Aureon Technologies Project Enquiry");
  const body=encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Project Type: ${data.get("type")}

Project Details:
${data.get("message")}`);
  window.location.href=`mailto:hello@aureontechnologies.com?subject=${subject}&body=${body}`;
});
document.getElementById("themeBtn")?.addEventListener("click",()=>{const r=document.documentElement,n=r.dataset.theme==="light"?"dark":"light";r.dataset.theme=n;try{localStorage.setItem("aureon-theme",n)}catch(e){}});
