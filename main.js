(()=>{"use strict";var e={267:(e,t,o)=>{o.d(t,{Z:()=>a});const n="ee8c332cbd72a23de5f8e2a32d0e2337",a=e=>{(async(e,t="US")=>(await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${e},${t}&appid=${n}`)).json())(e).then((e=>{console.log(e);const t=e.lat,o=e.lon;(async(e,t,o="imperial",a="en")=>(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&units=${o}&lang=${a}&lon=${t}&appid=${n}`)).json())(t,o).then((e=>{console.log(e),function(e){const t=document.querySelector("p.degrees"),o=document.querySelector("p.city"),n=document.querySelector("p.time"),a=document.querySelector(".weather-type > p");t.textContent=e.main.temp,o.textContent=e.name,n.textContent=e.dt,a.textContent=e.weather[0].main}(e)})),(async(e,t)=>(await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&appid=${n}`)).json())(t,o).then((e=>{}))}))}},596:(e,t,o)=>{var n=o(267);const a=document.querySelector("button"),r=document.querySelector("form");r.addEventListener("submit",(e=>{e.preventDefault()})),a.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("input");console.log(t.value),(0,n.Z)(t.value),r.reset()})),(0,n.Z)("07094")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(267),o(596)})();