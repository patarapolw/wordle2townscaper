import{l as y}from"./vendor.0b632fde.js";const b=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}};b();var q=`<h1 id="wordlehttpswwwpowerlanguagecoukwordle-to-townscaperhttpswwwtownscapergamecom"><a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>++ to <a href="https://www.townscapergame.com/">TownScaper</a></h1>
<p>Similar to <a href="https://tarmo888.github.io/Wordle2Townscaper/">https://tarmo888.github.io/Wordle2Townscaper/</a>, but can parse Wordle variants.</p>
<p>Try also - <a href="https://www.quordle.com/">Quordle</a>, <a href="https://taximanli.github.io/kotobaasobou/">\u8A00\u8449\u3067\u904A\u307C\u3046</a>, <a href="https://plum-chloride.jp/kotonoha-tango/index.html">\u3053\u3068\u306E\u306F\u305F\u3093\u3054</a>, <a href="https://blog.duolingo.com/wordle-in-other-languages/">French, Italian, Spanish, Portuguese, Swedish, and German Wordle</a>, <a href="https://qntm.org/files/wordle/index.html">Absurdle</a>, <a href="http://saltong.carldegs.com/mini">Saltong Mini (Filipino)</a>, <a href="https://nerdlegame.com/">Nerdle (Math)</a></p>`;const p={" ":[],"\u2B1C":["\u26AA\uFE0F",":white_large_square:",":white_circle:"],"\u2B1B":["\u26AB\uFE0F",":black_large_square:",":black_circle:"],"\u{1F7E5}":[":red_square:",":large_red_square:"],"\u{1F7E7}":[":yellow_square:",":large_yellow_square:"],"\u{1F7E8}":["\u{1F7E1}",":yellow_square:",":yellow_circle:"],"\u{1F7E9}":["\u{1F7E2}",":green_square:",":green_circle:"],"\u{1F7E6}":[":blue_square:",":large_blue_square:"],"\u{1F7EA}":[":purple_square:",":large_purple_square:"]},S={" ":-1,"\u2B1C":-1,"\u2B1B":-1,"\u{1F7E5}":1,"\u{1F7E7}":2,"\u{1F7E8}":3,"\u{1F7E9}":5,"\u{1F7E6}":10,"\u{1F7EA}":11};function _(e){return e!==" "}document.querySelector("#readme").innerHTML=q;const c=document.querySelector("#raw"),u=document.querySelector("#ntries"),h=document.querySelector("#townscaper-id"),f=document.querySelector("#townscaper-link"),s=document.querySelector("#submit"),m=document.querySelector("#cleaned"),g=document.querySelector("#link-area"),F=document.querySelector("#building-squares");document.querySelectorAll("[data-wordle-ntries]").forEach(e=>{e.addEventListener("click",()=>{u.value=String(e.getAttribute("data-wordle-ntries")),s.click()})});c.oninput=()=>{s.click()};c.onpaste=()=>{s.click()};m.oninput=()=>{s.click()};u.oninput=()=>{s.click()};const i=new Map;Object.entries(p).map(([e,r])=>{i.set(e,e),r.map(l=>{i.set(l,e)})});F.innerText=Object.keys(p).join(" ");const k=`(?:${[...new Set(i.keys())].join("|")})`,E=new RegExp(k,"g");s.onclick=()=>{setTimeout(()=>{A().then(B)})};s.click();async function A(){const e=[];for(const r of c.value.trim().split(/(?:\r?\n){2,}/g)){const l=r.trim();l&&(e.push(...v(l)),e.push([]))}return e.pop(),m.innerHTML=e.map(r=>r.join("")).join("<br/>"),e}function v(e){let r=[],l=0;for(const t of e.split(`
`)){const o=Array.from(t.matchAll(E));if(o.length>0){const a=o.map(w=>i.get(w[0]));r.push(a),a.length>l&&(l=a.length)}}const n=Number(u.value);return r.length&&!isNaN(n)&&n>r.length&&(r=[...r,...Array(n-r.length).fill(r[0].map(t=>_(t)?"\u2B1B":" "))]),r}async function B(e=[]){if(g.setAttribute("data-changed",""),!e||!e.length){d();return}const r=[],l=Math.max(...e.map(n=>n.length));for(let n=0;n<l;n++){const t={x:9*(n+1),y:-9,voxels:{0:15}};for(let o=0;o<e.length;o++){const a=S[e[e.length-o-1][n]];typeof a!="undefined"&&a>=0&&(t.voxels[o+1]=a)}r.push(t)}d(y.sparseToClip(r))}function d(e){e&&g.removeAttribute("data-changed"),h.value=e||"FCIfgnPf_c",f.href="https://"+f.innerText.trim()+h.value}async function L(){d()}L();
