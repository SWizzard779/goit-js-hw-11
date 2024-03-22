import{i as l,S as c}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();function d(r){const o="https://pixabay.com/api/",i=new URLSearchParams({key:"42978821-e3c6f538b5791c0a766c3ba19",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${o}?${i}`;return fetch(n).then(e=>e.json()).then(e=>e.hits).catch(e=>console.log(e))}function p({webformatURL:r,largeImageURL:o,tags:i,likes:n,views:t,comments:e,downloads:a}){return`<li class="gallery-item">
    <a class="gallery-link" href= ${o}>  
        <img class="gallery-image"
            src= "${r}"
            alt = "${i}"
        />
    </a>
    <div class="container"><h3 class="header">Likes
        <p class="views">${n}</p>
    </h3>
    <h3 class="header">Views
    <p class="views">${t}</p>
    </h3>
    <h3 class="header">Comments
    <p class="views">${e}</p>
    </h3>
    <h3 class="header">Downloads
    <p class="views">${a}</p>
    </h3>
    </div>
    
</li>`}function f(r){return r.map(p).join("")}const s=document.querySelector(".form");document.querySelector("#search");const g=document.querySelector(".gallery");s.addEventListener("submit",m);function m(r){r.preventDefault();const o=r.currentTarget.elements.input.value.trim();if(!o){l.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topCenter"});return}h(),d(o).then(i=>{if(u(),i.length===0){l.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});return}const n=f(i);g.innerHTML=n,new c(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(i=>{l.error({title:"Error",message:`Failed to load images. Please try again later. Error: ${i.message}`,position:"topCenter"})}),s.reset()}function h(){const r=document.createElement("div");r.className="loader",s.insertAdjacentElement("afterend",r)}function u(){const r=document.querySelector(".loader");r&&r.remove()}
//# sourceMappingURL=commonHelpers.js.map
