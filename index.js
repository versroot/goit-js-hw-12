import{a as u,S as F,i as v}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const w=document.querySelector(".gallery");function m(s){const o=s.map(e=>`<li class="gallery-item">
  
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
          `).join("");w.insertAdjacentHTML("beforeend",o),loadMore.style.display="block"}let d=0,p=15;u.defaults.baseURL="https://pixabay.com/api/";async function h(s,o=1){const e={key:"46119113-9d91afa1c686c5ea1318b0639",q:encodeURIComponent(s),image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:p};loadingMessage.style.display="block";try{const i=await u.get("",{params:e});return loadingMessage.style.display="none",d=i.data.totalHits,i.data}catch(i){iziToast.error({title:"",titleColor:"#FFFFFF",message:i,iconUrl:"https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-octagon.svg",backgroundColor:"#EF4040",messageColor:"#FFFFFF",close:!0,maxWidth:"432px",fontSize:"16px",fontWeight:"400",lineHeight:"24px",letterSpacing:"0.5px",onOpening:b}),loadingMessage.style.display="none"}}const x=document.querySelector("#searchButton"),S=document.querySelector(".gallery"),f=document.querySelector("#input"),n=document.querySelector("#loadingMessage"),c=document.querySelector("#loadMore");let a;function l(s){v.error({title:"",titleColor:"#FFFFFF",message:s,iconUrl:"https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-octagon.svg",backgroundColor:"#EF4040",messageColor:"#FFFFFF",close:!0,maxWidth:"432px",fontSize:"16px",fontWeight:"400",lineHeight:"24px",letterSpacing:"0.5px",onOpening:b})}x.addEventListener("click",async s=>{s.preventDefault(),a=1,S.innerHTML="",c.style.display="none";const o=f.value.trim();if(o!=""){n.style.display="block";try{const e=await h(o);if(e.hits.length===0){console.log("No pics"),l("Sorry, there are no images matching your search query. Please, try again!");return}else m(e.hits),y.refresh();n.style.display="none",d<=a*p&&(console.log("No more pics"),c.style.display="none",l("No more pics"))}catch(e){console.log(e),l(e),n.style.display="none"}}else l("Empty request")});function b(s,o){var e=o.querySelector(".iziToast-close");e.style.backgroundColor="transparent",e.style.backgroundImage="url('https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-lg.svg')",e.style.backgroundSize="contain",e.style.width="16px",e.style.height="16px",e.style.color="transparent",e.style.margin="18px"}let y=new F(".gallery a",{captionsData:"alt",captionDelay:250});y.on("show.simplelightbox",function(){});c.addEventListener("click",async s=>{s.preventDefault();const o=f.value.trim();try{const e=await h(o,a);if(e.hits.length===0||d<=a*p){console.log("No more pics"),c.style.display="none",l("No more pics");return}m(e.hits);const t=document.querySelector(".gallery-item").getBoundingClientRect();console.log(t.height),window.scrollBy({top:t.height*2,behavior:"smooth"}),y.refresh(),a+=1,n.style.display="none"}catch(e){console.log(e),n.style.display="none"}});
//# sourceMappingURL=index.js.map
