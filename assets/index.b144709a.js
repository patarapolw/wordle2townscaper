var M=Object.defineProperty;var b=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var y=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,S=(e,r)=>{for(var t in r||(r={}))T.call(r,t)&&y(e,t,r[t]);if(b)for(var t of b(r))B.call(r,t)&&y(e,t,r[t]);return e};import{l as q}from"./vendor.0b632fde.js";const N=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};N();var O=`<h1 id="wordlehttpswwwpowerlanguagecoukwordle-to-townscaperhttpswwwtownscapergamecom"><a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>++ to <a href="https://www.townscapergame.com/">TownScaper</a></h1>
<p>Similar to <a href="https://tarmo888.github.io/Wordle2Townscaper/">https://tarmo888.github.io/Wordle2Townscaper/</a>, but can parse Wordle variants.</p>
<p>Try also - <a href="https://www.quordle.com/">Quordle</a>, <a href="https://taximanli.github.io/kotobaasobou/">\u8A00\u8449\u3067\u904A\u307C\u3046</a>, <a href="https://plum-chloride.jp/kotonoha-tango/index.html">\u3053\u3068\u306E\u306F\u305F\u3093\u3054</a>, <a href="https://blog.duolingo.com/wordle-in-other-languages/">French, Italian, Spanish, Portuguese, Swedish, and German Wordle</a>, <a href="https://qntm.org/files/wordle/index.html">Absurdle</a>, <a href="http://saltong.carldegs.com/mini">Saltong Mini (Filipino)</a>, <a href="https://nerdlegame.com/">Nerdle (Math)</a></p>`;const A={" ":[],"\u2B1C":["\u26AA\uFE0F",":white_large_square:",":white_circle:"],"\u2B1B":["\u26AB\uFE0F",":black_large_square:",":black_circle:"],"\u{1F7E5}":[":red_square:",":large_red_square:"],"\u{1F7E7}":[":yellow_square:",":large_yellow_square:"],"\u{1F7E8}":["\u{1F7E1}",":yellow_square:",":yellow_circle:"],"\u{1F7E9}":["\u{1F7E2}",":green_square:",":green_circle:"],"\u{1F7E6}":[":blue_square:",":large_blue_square:"],"\u{1F7EA}":[":purple_square:",":large_purple_square:"]},_={" ":-1,"\u2B1C":-1,"\u2B1B":-1,"\u{1F7E5}":1,"\u{1F7E7}":2,"\u{1F7E8}":3,"\u{1F7E9}":5,"\u{1F7E6}":10,"\u{1F7EA}":11};function L(e){return e!==" "}document.querySelector("#readme").innerHTML=O;const g=document.querySelector("#raw"),k=document.querySelector("#ntries"),v=document.querySelectorAll(".townscaper-id"),p=document.querySelector("#townscaper-link"),d=document.querySelector("#submit"),h=document.querySelector("#cleaned"),E=document.querySelector("#link-area"),I=document.querySelector("#building-squares"),l={type:localStorage.getItem("type")||void 0,ntries:Number(localStorage.getItem("ntries"))||void 0,width:Number(localStorage.getItem("width"))||void 0};document.querySelectorAll("[data-wordle-ntries]").forEach(e=>{e.addEventListener("click",()=>{l.type=e.textContent||void 0,l.ntries=Number(e.getAttribute("data-wordle-ntries"))||void 0,l.width=Number(e.getAttribute("data-wordle-width"))||void 0,j(),d.click()})});g.oninput=()=>{d.click()};g.onpaste=()=>{d.click()};h.oninput=()=>{setTimeout(()=>{F(h.innerText,!0).then(x)})};k.oninput=()=>{d.click()};const f=new Map;Object.entries(A).map(([e,r])=>{f.set(e,e),r.map(t=>{f.set(t,e)})});I.innerText=Object.keys(A).join(" ");const C=new RegExp(`(?:${[...new Set(f.keys())].join("|")})`,"g");d.onclick=()=>{setTimeout(()=>{P(g.value).then(x)})};async function P(e){const r=[];for(const n of e.trim().split(/(?:\r?\n){2,}/g)){const o=n.trim();o&&(r.push(...await F(o)),r.push([]))}const t=[],i=n=>!n.join("").trim().length;return r.map((n,o)=>{i(n)&&(o===0||o===r.length-1||r[o-1]&&i(r[o-1]))||t.push(n)}),h.innerHTML=t.map(n=>n.join("")).join("<br/>"),t}async function F(e,r){let t=[],i=0;for(const n of e.split(`
`)){const o=Array.from(n.matchAll(C));if(o.length>0){const a=o.map(c=>f.get(c[0]));t.push(a),a.length>i&&(i=a.length)}}return r||t.length&&l.ntries&&l.ntries>t.length&&(t=[...t,...Array(l.ntries-t.length).fill(t[0].map(n=>L(n)?"\u2B1B":" "))]),t}async function x(e=[]){if(E.setAttribute("data-changed",""),!e||!e.length){w();return}const r=[],t=Math.max(...e.map(i=>i.length));for(let i=0;i<t;i++){const n={x:9*(i+1),y:-9,voxels:{0:15}};for(let o=0;o<e.length;o++){const a=_[e[e.length-o-1][i]];typeof a!="undefined"&&a>=0&&(n.voxels[o+1]=a)}r.push(n)}w(q.sparseToClip(r))}function w(e,r=l){if(e){E.removeAttribute("data-changed");let t=e;Object.entries(r).map(([i,n])=>{n&&(t+=`&${i}=${n}`,localStorage.setItem(i,n))}),history.replaceState(S({v:e},r),t,`#${t}`)}else r={};if(e=e||"FCIfgnPf_c",v.forEach(t=>{t.innerText=e}),p.href=p.getAttribute("data-baseurl")+e,p.innerText=p.href.replace(/^https:\/\//,""),Object.keys(r).length){const t=new Map;Object.entries(_).map(([a,c])=>{t.set(c,a)});const i=q.clipToSparse(e),n=Math.max(0,...i.flatMap(a=>Object.keys(a.voxels).map(c=>Number(c)-1))),o=JSON.parse(JSON.stringify(Array(n).fill(Array(i.length).fill("\u2B1B"))));if(r.ntries){const{ntries:a}=r;Array(Math.floor(n/a)).fill(null).map((c,u)=>{if(!u)return;const s=u*a-1;o[s]=[]})}if(i.map(a=>{Object.entries(a.voxels).map(([c,u])=>{let s=Number(c);if(s===0)return;s=n-s+1;const m=a.x/9-1;console.log(s),o[s]=o[s]||[],o[s][m]=t.get(u)||"\u2B1C"})}),r.width){const{width:a}=r;Array(Math.floor(i.length/a)).fill(null).map((c,u)=>{!u||o.map(s=>{if(!u)return;const m=u*a;s[m]=" "})})}h.innerHTML=o.map(a=>a.join("")).join("<br/>")}}function j(){k.value=String(l.ntries||""),document.querySelectorAll("[data-wordle-ntries]").forEach(e=>{e.textContent===l.type?e.setAttribute("data-current","true"):e.removeAttribute("data-current")})}async function W(){j();let e="";new URL(location.href).hash.replace(/^#/,"").split("&").map(r=>r.split("=",2)).map(([r,t])=>{if(!t){e=r;return}switch(r){case"type":l.type=t;break;case"ntries":l.ntries=Number(t)||void 0;break;case"width":l.width=Number(t)||void 0}}),w(e,l)}W();
