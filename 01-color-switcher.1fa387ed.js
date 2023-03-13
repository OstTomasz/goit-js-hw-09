const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body;let d;t.addEventListener("click",(()=>{t.disabled=!0,d=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1)})),e.addEventListener("click",(()=>{clearInterval(d),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1fa387ed.js.map
