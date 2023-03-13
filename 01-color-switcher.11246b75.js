const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.body;let d;e.addEventListener("click",(()=>{e.disabled=!0,d=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.11246b75.js.map
