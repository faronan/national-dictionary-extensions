(()=>{"use strict";var e,t={538:(e,t,n)=>{var r,o=n(294),i=n(935),l=function(){var e=document.getElementById("input");if(e)return e.value},a=function(e){var t=document.getElementById("input");t&&(t.value=e)},u=function(e){var t=document.getElementById("searchResult");t&&(t.innerText=e)},c=function(e){return t=void 0,n=void 0,o=function(){var t,n;return function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(r){switch(r.label){case 0:return[4,fetch("https://www.weblio.jp/content/"+e).then((function(e){return e.text()})).then((function(e){return(new DOMParser).parseFromString(e,"text/html")})).then((function(e){return e.getElementsByClassName("kiji")}))];case 1:return 0!=(t=r.sent()).length?(n=t[0].children,u(n[1].innerText)):u("用語解説で「"+e+"」に一致する見出し語は見つかりませんでした。"),[2]}}))},new((r=void 0)||(r=Promise))((function(e,i){function l(e){try{u(o.next(e))}catch(e){i(e)}}function a(e){try{u(o.throw(e))}catch(e){i(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,a)}u((o=o.apply(t,n||[])).next())}));var t,n,r,o};i.render(o.createElement(o.StrictMode,null,o.createElement((function(){return o.createElement("div",null,o.createElement("main",{style:{minWidth:"700px"}},o.createElement("div",null,o.createElement("input",{type:"text",id:"input"}),o.createElement("button",{id:"searchButton",style:{height:"30px",width:"50px"}},"検索")),o.createElement("text",{id:"searchResult"})))}),null)),document.getElementById("root")),(r=document.getElementById("searchButton"))&&r.addEventListener("click",(function(){var e=l();e&&c(e)})),chrome.storage.local.get("selectionString",(function(e){var t=e.selectionString;a(t)}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var l=1/0;for(s=0;s<e.length;s++){for(var[n,o,i]=e[s],a=!0,u=0;u<n.length;u++)(!1&i||l>=i)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(a=!1,i<l&&(l=i));if(a){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={42:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[l,a,u]=n,c=0;if(l.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var s=u(r)}for(t&&t(n);c<l.length;c++)i=l[c],r.o(e,i)&&e[i]&&e[i][0](),e[l[c]]=0;return r.O(s)},n=self.webpackChunkchrome_extension=self.webpackChunkchrome_extension||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[736],(()=>r(538)));o=r.O(o)})();