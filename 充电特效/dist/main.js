!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);let o=()=>{},i=()=>{};window.onload=function(){const t=document.getElementById("g-number");let e=null;const n=document.getElementsByClassName("g-bubbls")[0];function r(){e=document.createDocumentFragment();for(let t=0;t<11;t++)e.appendChild(document.createElement("li"));n.appendChild(e)}function a(t){return parseInt(100*t)}let s=0;navigator.getBattery?navigator.getBattery().then(s=>{s.charging&&r(),s.level?t.innerText=a(s.level)+" %":t.innerText="100 %";const l=()=>{s.charging?r():(n.innerHTML="",e=null)},c=()=>{t.innerText=""+a(s.level)};o=()=>{s.removeEventListener("chargingchange",l)},i=()=>{s.removeEventListener("levelchange",c)},s.addEventListener("chargingchange",l),s.addEventListener("levelchange",c)}):(s=100,t.innerText="100 %",r())},window.onbeforeunload=function(){o(),i()}},function(t,e,n){var o=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);t.exports=i.locals||{}},function(t,e,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},o=[],i=0;i<t.length;i++){var r=t[i],l=e.base?r[0]+e.base:r[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var f=s(u),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:g(d,e),references:1}),o.push(u)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function p(t,e,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,m=0;function g(t,e){var n,o,i;if(e.singleton){var r=m++;n=h||(h=c(e)),o=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=c(e),o=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=s(n[o]);a[i].references--}for(var r=l(t,e),c=0;c<n.length;c++){var u=s(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,'html,body{width:100%;height:100%;display:flex;background:#000;overflow:hidden}.g-number{position:absolute;width:300px;top:20%;text-align:center;font-size:32px;z-index:10;color:#fff}.g-container{position:relative;width:300px;height:75vh;margin:auto auto 0px}.g-contrast{filter:contrast(15) hue-rotate(0);width:300px;height:100%;background-color:#000;overflow:hidden;animation:hueRotate 10s infinite linear}.g-circle{position:relative;width:300px;height:300px;box-sizing:border-box;filter:blur(8px)}.g-circle::after{content:"";position:absolute;top:40%;left:50%;transform:translate(-50%, -50%) rotate(0);width:200px;height:200px;background-color:#00ff6f;border-radius:42% 38% 62% 49% / 45%;animation:rotate 10s infinite linear}.g-circle::before{content:"";position:absolute;width:176px;height:176px;top:40%;left:50%;transform:translate(-50%, -50%);border-radius:50%;background-color:#000;z-index:10}.g-bubbles{position:absolute;left:50%;bottom:0;width:100px;height:40px;transform:translate(-50%, 0);border-radius:100px 100px 0 0;background-color:#00ff6f;filter:blur(5px)}li{list-style:none;position:absolute;border-radius:50%;background:#00ff6f}li:nth-child(0){left:169px;bottom:0;transform:translate(-50%, -50%);width:25px;height:25px;animation:moveToTop 9s ease-in-out -2.762s infinite}li:nth-child(1){left:147px;bottom:0;transform:translate(-50%, -50%);width:26px;height:26px;animation:moveToTop 7s ease-in-out -3.896s infinite}li:nth-child(2){left:179px;bottom:0;transform:translate(-50%, -50%);width:16px;height:16px;animation:moveToTop 9s ease-in-out -3.009s infinite}li:nth-child(3){left:125px;bottom:0;transform:translate(-50%, -50%);width:26px;height:26px;animation:moveToTop 7s ease-in-out -4.264s infinite}li:nth-child(4){left:149px;bottom:0;transform:translate(-50%, -50%);width:27px;height:27px;animation:moveToTop 5s ease-in-out -4.257s infinite}li:nth-child(5){left:149px;bottom:0;transform:translate(-50%, -50%);width:18px;height:18px;animation:moveToTop 5s ease-in-out -2.824s infinite}li:nth-child(6){left:140px;bottom:0;transform:translate(-50%, -50%);width:22px;height:22px;animation:moveToTop 5s ease-in-out -.499s infinite}li:nth-child(7){left:137px;bottom:0;transform:translate(-50%, -50%);width:28px;height:28px;animation:moveToTop 8s ease-in-out -4.32s infinite}li:nth-child(8){left:158px;bottom:0;transform:translate(-50%, -50%);width:23px;height:23px;animation:moveToTop 7s ease-in-out -3.845s infinite}li:nth-child(9){left:156px;bottom:0;transform:translate(-50%, -50%);width:30px;height:30px;animation:moveToTop 6s ease-in-out -1.775s infinite}li:nth-child(10){left:172px;bottom:0;transform:translate(-50%, -50%);width:18px;height:18px;animation:moveToTop 7s ease-in-out -1.623s infinite}li:nth-child(11){left:172px;bottom:0;transform:translate(-50%, -50%);width:26px;height:26px;animation:moveToTop 4s ease-in-out -2.441s infinite}@keyframes rotate{50%{border-radius:45% / 42% 38% 58% 49%}100%{transform:translate(-50%, -50%) rotate(720deg)}}@keyframes moveToTop{90%{opacity:1}100%{opacity:.1;transform:translate(-50%, -265px)}}@keyframes hueRotate{100%{filter:contrast(15) hue-rotate(360deg)}}\n',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([i]).join("\n")}var a,s,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}}]);