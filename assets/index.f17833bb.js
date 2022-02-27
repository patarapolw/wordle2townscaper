import{l as q}from"./vendor.0b632fde.js";const S=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};S();var _=`<h1 id="wordlehttpswwwpowerlanguagecoukwordle-to-townscaperhttpswwwtownscapergamecom"><a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>++ to <a href="https://www.townscapergame.com/">TownScaper</a></h1>
<p>Similar to <a href="https://tarmo888.github.io/Wordle2Townscaper/">https://tarmo888.github.io/Wordle2Townscaper/</a>, but can parse Wordle variants.</p>
<p>Try also - <a href="https://www.quordle.com/">Quordle</a>, <a href="https://taximanli.github.io/kotobaasobou/">\u8A00\u8449\u3067\u904A\u307C\u3046</a>, <a href="https://plum-chloride.jp/kotonoha-tango/index.html">\u3053\u3068\u306E\u306F\u305F\u3093\u3054</a>, <a href="https://blog.duolingo.com/wordle-in-other-languages/">French, Italian, Spanish, Portuguese, Swedish, and German Wordle</a>, <a href="https://qntm.org/files/wordle/index.html">Absurdle</a>, <a href="http://saltong.carldegs.com/mini">Saltong Mini (Filipino)</a>, <a href="https://nerdlegame.com/">Nerdle (Math)</a></p>`;const h={" ":[],"\u2B1C":["\u26AA\uFE0F",":white_large_square:",":white_circle:"],"\u2B1B":["\u26AB\uFE0F",":black_large_square:",":black_circle:"],"\u{1F7E5}":[":red_square:",":large_red_square:"],"\u{1F7E7}":[":yellow_square:",":large_yellow_square:"],"\u{1F7E8}":["\u{1F7E1}",":yellow_square:",":yellow_circle:"],"\u{1F7E9}":["\u{1F7E2}",":green_square:",":green_circle:"],"\u{1F7E6}":[":blue_square:",":large_blue_square:"],"\u{1F7EA}":[":purple_square:",":large_purple_square:"]},F={" ":-1,"\u2B1C":-1,"\u2B1B":-1,"\u{1F7E5}":1,"\u{1F7E7}":2,"\u{1F7E8}":3,"\u{1F7E9}":5,"\u{1F7E6}":10,"\u{1F7EA}":11};function k(t){return t!==" "}document.querySelector("#readme").innerHTML=_;const u=document.querySelector("#raw"),c=document.querySelector("#ntries"),f=document.querySelector("#townscaper-id"),m=document.querySelector("#townscaper-link"),s=document.querySelector("#submit"),d=document.querySelector("#cleaned"),g=document.querySelector("#link-area"),E=document.querySelector("#building-squares");document.querySelectorAll("[data-wordle-ntries]").forEach(t=>{t.addEventListener("click",()=>{c.value=String(t.getAttribute("data-wordle-ntries")),s.click()})});u.oninput=()=>{s.click()};u.onpaste=()=>{s.click()};d.oninput=()=>{setTimeout(()=>{w(d.innerText,!0).then(y)})};c.oninput=()=>{s.click()};const i=new Map;Object.entries(h).map(([t,n])=>{i.set(t,t),n.map(o=>{i.set(o,t)})});E.innerText=Object.keys(h).join(" ");const A=`(?:${[...new Set(i.keys())].join("|")})`,v=new RegExp(A,"g");s.onclick=()=>{setTimeout(()=>{T(u.value).then(y)})};s.click();async function T(t){const n=[];for(const o of t.trim().split(/(?:\r?\n){2,}/g)){const l=o.trim();l&&(n.push(...await w(l)),n.push([]))}return n.pop(),d.innerHTML=n.map(o=>o.join("")).join("<br/>"),n}async function w(t,n){let o=[],l=0;for(const e of t.split(`
`)){const r=Array.from(e.matchAll(v));if(r.length>0){const a=r.map(b=>i.get(b[0]));o.push(a),a.length>l&&(l=a.length)}}if(!n){const e=Number(c.value);o.length&&!isNaN(e)&&e>o.length&&(o=[...o,...Array(e-o.length).fill(o[0].map(r=>k(r)?"\u2B1B":" "))])}return o}async function y(t=[]){if(g.setAttribute("data-changed",""),!t||!t.length){p();return}const n=[],o=Math.max(...t.map(l=>l.length));for(let l=0;l<o;l++){const e={x:9*(l+1),y:-9,voxels:{0:15}};for(let r=0;r<t.length;r++){const a=F[t[t.length-r-1][l]];typeof a!="undefined"&&a>=0&&(e.voxels[r+1]=a)}n.push(e)}p(q.sparseToClip(n))}function p(t){t&&g.removeAttribute("data-changed"),f.value=t||"FCIfgnPf_c",m.href="https://"+m.innerText.trim()+f.value}async function B(){p()}B();