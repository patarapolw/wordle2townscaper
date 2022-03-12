import{l as b}from"./vendor.0b632fde.js";const T=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};T();var L=`<h1 id="wordlehttpswwwpowerlanguagecoukwordle-to-townscaperhttpswwwtownscapergamecom"><a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>++ to <a href="https://www.townscapergame.com/">TownScaper</a></h1>
<p>Similar to <a href="https://tarmo888.github.io/Wordle2Townscaper/">https://tarmo888.github.io/Wordle2Townscaper/</a>, but can parse Wordle variants.</p>
<p>Try also - <a href="https://www.wordle2.in/">Wordle 2</a>, <a href="https://www.quordle.com/">Quordle</a>, <a href="https://taximanli.github.io/kotobade-asobou/">\u8A00\u8449\u3067\u904A\u307C\u3046</a>, <a href="https://plum-chloride.jp/kotonoha-tango/index.html">\u3053\u3068\u306E\u306F\u305F\u3093\u3054</a>, <a href="https://blog.duolingo.com/wordle-in-other-languages/">French, Italian, Spanish, Portuguese, Swedish, and German Wordle</a>, <a href="https://qntm.org/files/wordle/index.html">Absurdle</a>, <a href="http://saltong.carldegs.com/mini">Saltong Mini (Filipino)</a>, <a href="https://nerdlegame.com/">Nerdle (Math)</a></p>`;const E={" ":[],"\u2B1C":[":white_square:",":white_large_square:","\u26AA\uFE0F",":white_circle:",":large_white_circle:","\u{1F90D}",":white_heart:"],"\u2B1B":[":black_square:",":black_large_square:","\u26AB\uFE0F",":black_circle:",":large_black_circle:","\u{1F5A4}",":black_heart:"],"\u{1F7E5}":[":red_square:",":large_red_square:","\u{1F534}",":red_circle:",":large_red_circle:","\u2764\uFE0F",":red_heart:"],"\u{1F7E7}":[":orange_square:",":large_orange_square:","\u{1F7E0}",":orange_circle:",":large_orange_circle:","\u{1F9E1}",":orange_heart:"],"\u{1F7E8}":[":yellow_square:",":large_yellow_square:","\u{1F7E1}",":yellow_circle:",":large_yellow_circle:","\u{1F49B}",":yellow_heart:"],"\u{1F7E9}":[":green_square:",":large_green_square:","\u{1F7E2}",":green_circle:",":large_green_circle:","\u{1F49A}",":green_heart:"],"\u{1F7E6}":[":blue_square:",":large_blue_square:","\u{1F535}",":blue_circle:",":large_blue_circle:","\u{1F499}",":blue_heart:"],"\u{1F7EA}":[":purple_square:",":large_purple_square:","\u{1F7E3}",":purple_circle:",":large_purple_circle:","\u{1F49C}",":purple_heart:"],"\u2195\uFE0F":[":arrow_up_down:"],"\u2194":[":arrow_left_right:"],"\u{1F53C}":[":arrow_up_small:",":arrow_up:"],"\u{1F53D}":[":arrow_down_small:",":arrow_down:"],"\u2B05\uFE0F":[":arrow_left:"],"\u2196\uFE0F":[":arrow_upper_left:",":arrow_up_left:"],"\u2199\uFE0F":[":arrow_lower_left:",":arrow_down_left:"],"\u27A1\uFE0F":[":arrow_right:"],"\u2197\uFE0F":[":arrow_upper_right:",":arrow_up_right:"],"\u2198\uFE0F":[":arrow_lower_right:",":arrow_down_right:"]},S={" ":-1,"\u2B1C":-1,"\u2B1B":-1,"\u{1F7E5}":1,"\u{1F7E7}":2,"\u{1F7E8}":3,"\u{1F53D}":3,"\u2194":3,"\u2B05\uFE0F":4,"\u2196\uFE0F":4,"\u2199\uFE0F":4,"\u{1F7E9}":5,"\u{1F7E6}":10,"\u{1F53C}":10,"\u2195\uFE0F":10,"\u{1F7EA}":11,"\u27A1\uFE0F":12,"\u2197\uFE0F":12,"\u2198\uFE0F":12};function j(e){return e!==" "}const g="\u2B1C";document.querySelector("#readme").innerHTML=L;const p=document.querySelector("#raw"),d=document.querySelector("#ntries"),M=document.querySelectorAll(".townscaper-id"),w=document.querySelector("#townscaper-link"),h=document.querySelector("#submit"),m=document.querySelector("#cleaned"),q=document.querySelector("#link-area"),N=document.querySelector("#building-squares"),B=document.querySelectorAll("a[data-wordle-ntries]"),a={type:localStorage.getItem("type")||void 0,ntries:Number(localStorage.getItem("ntries"))||void 0,width:Number(localStorage.getItem("width"))||void 0},F=new Map;B.forEach(e=>{if(e.innerText){const o={type:e.innerText,ntries:Number(e.getAttribute("data-wordle-ntries")),width:Number(e.getAttribute("data-wordle-width"))};F.set(o.type,o),e.addEventListener("click",()=>{a.type===o.type?(a.type=void 0,a.width=void 0):(a.type=o.type,a.ntries=o.ntries,a.width=o.width,d.value=String(o.ntries)),h.click()})}});const O=new RegExp(`(${[...F.keys()].map(e=>x(e)).join("|")})`);p.addEventListener("input",()=>{h.click()});p.addEventListener("paste",()=>{setTimeout(()=>{let e="";const o=O.exec(p.value);if(o&&o[1]){const t=F.get(o[1]);t&&(e=t.type,a.type=t.type,a.ntries=t.ntries,a.width=t.width,d.value=String(t.ntries))}if(!e){a.type=void 0;const t=/\d+\/(\d+)/.exec(p.value);t&&t[1]&&(a.ntries=Number(t[1]),d.value=t[1])}h.click()})});m.addEventListener("input",()=>{setTimeout(()=>{A(m.innerText,!0).then(v)})});d.addEventListener("input",()=>{a.type=void 0,a.ntries=Number(d.value)||void 0,h.click()});const _=new Map;Object.entries(E).map(([e,o])=>{o.map(t=>{_.set(t,e)}),_.set(e,e)});N.innerText=Object.keys(E).join("");const I=new RegExp(`(?:${[...new Set(_.keys())].map(e=>x(e)).join("|")})`,"g");h.addEventListener("click",()=>{setTimeout(()=>{C(p.value).then(v)})});async function C(e){const o=[];for(const r of e.trim().split(/(?:\r?\n){2,}/g)){const n=r.trim();n&&(o.push(...await A(n)),o.push([]))}const t=[],l=r=>!r.join("").trim().length;return o.map((r,n)=>{l(r)&&(n===0||n===o.length-1||o[n-1]&&l(o[n-1]))||t.push(r)}),m.innerHTML=t.map(r=>r.join("")).join("<br/>"),t}async function A(e,o){let t=[],l=0;for(const r of e.split(`
`)){const n=Array.from(r.matchAll(I));if(n.length>0){const i=n.map(s=>_.get(s[0]));t.push(i),i.length>l&&(l=i.length)}}return o||t.length&&a.ntries&&a.ntries>t.length&&(t=[...t,...Array(a.ntries-t.length).fill(t[0].map(r=>j(r)?g:" "))]),t}async function v(e=[]){if(q.setAttribute("data-changed",""),!e||!e.length){y();return}const o=[],t=Math.max(...e.map(l=>l.length));for(let l=0;l<t;l++){const r={x:9*(l+1),y:-9,voxels:{0:15}};for(let n=0;n<e.length;n++){const i=S[e[e.length-n-1][l]];typeof i!="undefined"&&i>=0&&(r.voxels[n+1]=i)}o.push(r)}y(b.sparseToClip(o))}function y(e,o){if(e){q.removeAttribute("data-changed");let t=e;Object.entries(a).map(([r,n])=>{n?(t+=`&${r}=${n}`,localStorage.setItem(r,n)):localStorage.removeItem(r)});const l=new URL(location.href);l.hash=t,location.replace(l.href),k()}else o=!1;if(e=e||"FCIfgnPf_c",M.forEach(t=>{t.innerText=e}),w.href=w.getAttribute("data-baseurl")+e,w.innerText=w.href.replace(/^https:\/\//,""),o===!0){const t=new Map;Object.entries(S).map(([i,s])=>{t.set(s,i)});const l=b.clipToSparse(e),r=Math.max(0,...l.flatMap(i=>Object.keys(i.voxels).map(s=>Number(s)-1))),n=JSON.parse(JSON.stringify(Array(r).fill(Array(l.length).fill(g))));if(a.ntries){const{ntries:i}=a;Array(Math.floor(r/i)).fill(null).map((s,c)=>{if(!c)return;const u=c*i-1;n[u]=[]})}if(l.map(i=>{Object.entries(i.voxels).map(([s,c])=>{let u=Number(s);if(u===0)return;u=r-u+1;const f=i.x/9-1;n[u]=n[u]||[],n[u][f]=t.get(c)||g})}),a.width){const{width:i}=a;l.length>i?Array(Math.floor(l.length/i)).fill(null).map((s,c)=>{!c||n.map(u=>{if(!c)return;const f=c*i;u[f]===g?u[f]=" ":a.width=void 0})}):a.width=void 0}m.innerHTML=n.map(i=>i.join("")).join("<br/>")}}function k(){d.value=String(a.ntries||""),document.querySelectorAll("[data-wordle-ntries]").forEach(e=>{e.textContent===a.type?e.setAttribute("data-current","true"):e.removeAttribute("data-current")})}function x(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function R(){k();let e="";new URL(location.href).hash.replace(/^#/,"").split("&").map(o=>o.split("=",2)).map(([o,t])=>{if(!t){e=o;return}switch(o){case"type":a.type=decodeURIComponent(t);break;case"ntries":a.ntries=Number(t)||void 0;break;case"width":a.width=Number(t)||void 0}}),y(e,!0)}R();
