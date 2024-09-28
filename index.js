import{a as d,i as y,S as v}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const F=document.querySelector(".gallery");function p(s){const o=s.map(e=>`<li class="gallery-item">
  
        <a class="gallery-link" href=${e.webformatURL}> 
          <img
            class="gallery-image"
            src=${e.webformatURL}
            alt='${e.tags}'
  
          />
          </a>
          <ul class='properties'>
          <li class='property'><div class='key'>Likes</div> ${e.likes}</li>
          <li class='property'><div class='key'>Views </div> ${e.views}</li>
          <li class='property'><div class='key'>Comments </div> ${e.comments}</li>
          <li class='property'><div class='key'>Downloads </div> ${e.downloads}</li>
          
          
  
  
  </ul>
  
          </li>
          `).join("");F.insertAdjacentHTML("beforeend",o),loadMore.style.display="block"}let u=0,m=20;d.defaults.baseURL="https://pixabay.com/api/";async function h(s,o=1){const e={key:"46119113-9d91afa1c686c5ea1318b0639",q:encodeURIComponent(s),image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:m};loadingMessage.style.display="block";try{const l=await d.get("",{params:e});return loadingMessage.style.display="none",u=l.data.totalHits,l.data}catch(l){console.log(l),loadingMessage.style.display="none"}}const w=document.querySelector("#searchButton"),x=document.querySelector(".gallery"),f=document.querySelector("#input"),n=document.querySelector("#loadingMessage"),a=document.querySelector("#loadMore");let i;w.addEventListener("click",async s=>{s.preventDefault(),i=1,x.innerHTML="",a.style.display="none",n.style.display="block";const o=f.value.trim();try{const e=await h(o);e.hits.length===0?(console.log("No pics"),y.error({title:"",titleColor:"#FFFFFF",message:" Sorry, there are no images matching your search query. Please, try again!",iconUrl:"https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-octagon.svg",backgroundColor:"#EF4040",messageColor:"#FFFFFF",close:!0,maxWidth:"432px",fontSize:"16px",fontWeight:"400",lineHeight:"24px",letterSpacing:"0.5px",onOpening:b})):(p(e.hits),g.refresh()),n.style.display="none"}catch(e){console.log(e),n.style.display="none"}});function b(s,o){var e=o.querySelector(".iziToast-close");e.style.backgroundColor="transparent",e.style.backgroundImage="url('https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-lg.svg')",e.style.backgroundSize="contain",e.style.width="16px",e.style.height="16px",e.style.color="transparent",e.style.margin="18px"}let g=new v(".gallery a",{captionsData:"alt",captionDelay:250});g.on("show.simplelightbox",function(){});a.addEventListener("click",async s=>{s.preventDefault(),i+=1});a.addEventListener("click",async s=>{s.preventDefault(),i+=1;const o=f.value.trim();try{const e=await h(o,i);if(u<=i*m)console.log("No more pics"),a.style.display="none",y.error({title:"",titleColor:"#FFFFFF",message:"No more pics",iconUrl:"https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-octagon.svg",backgroundColor:"#EF4040",messageColor:"#FFFFFF",close:!0,maxWidth:"432px",fontSize:"16px",fontWeight:"400",lineHeight:"24px",letterSpacing:"0.5px",onOpening:b});else{p(e.hits);const t=document.querySelector(".gallery-item").getBoundingClientRect();console.log(t.height),window.scrollBy({top:t.height*2,behavior:"smooth"}),g.refresh()}n.style.display="none"}catch(e){console.log(e),n.style.display="none"}});
//# sourceMappingURL=index.js.map
