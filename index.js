import{a as y,i as m,S as f}from"./assets/vendor-D73Uttp0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const h=document.querySelector(".gallery");function u(o){const s=o.map(e=>`<li class="gallery-item">
  
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
          `).join("");h.insertAdjacentHTML("beforeend",s),loadMore.style.display="block"}let v=0;y.defaults.baseURL="https://pixabay.com/api/";async function g(o,s=1){const e={key:"46119113-9d91afa1c686c5ea1318b0639",q:encodeURIComponent(o),image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:"20"};loadingMessage.style.display="block";try{const l=await y.get("",{params:e});return loadingMessage.style.display="none",v=l.data.totalHits,l.data}catch(l){console.log(l),loadingMessage.style.display="none"}}const b=document.querySelector("#searchButton"),w=document.querySelector(".gallery"),p=document.querySelector("#input"),a=document.querySelector("#loadingMessage"),c=document.querySelector("#loadMore");let n=1;b.addEventListener("click",async o=>{o.preventDefault(),w.innerHTML="",c.style.display="none",a.style.display="block";const s=p.value.trim();try{const e=await g(s);e.hits.length===0?(console.log("No pics"),m.error({title:"",titleColor:"#FFFFFF",message:" Sorry, there are no images matching your search query. Please, try again!",iconUrl:"https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-octagon.svg",backgroundColor:"#EF4040",messageColor:"#FFFFFF",close:!0,maxWidth:"432px",fontSize:"16px",fontWeight:"400",lineHeight:"24px",letterSpacing:"0.5px",onOpening:L})):(u(e.hits),d.refresh()),a.style.display="none"}catch(e){console.log(e),a.style.display="none"}});function L(o,s){var e=s.querySelector(".iziToast-close");e.style.backgroundColor="transparent",e.style.backgroundImage="url('https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-lg.svg')",e.style.backgroundSize="contain",e.style.width="16px",e.style.height="16px",e.style.color="transparent",e.style.margin="18px"}let d=new f(".gallery a",{captionsData:"alt",captionDelay:250});d.on("show.simplelightbox",function(){});c.addEventListener("click",async o=>{o.preventDefault(),n+=1});c.addEventListener("click",async o=>{o.preventDefault(),n+=1;const s=p.value.trim();try{const e=await g(s,n);e.hits.length===0?(console.log("No pics"),iziError):(u(e.hits),d.refresh()),a.style.display="none"}catch(e){console.log(e),a.style.display="none"}});
//# sourceMappingURL=index.js.map
