!function(){function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n,o,r,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c={},i={},l=a.parcelRequired7c6;null==l&&((l=function(t){if(t in c)return c[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return c[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},a.parcelRequired7c6=l),l.register("iE7OH",(function(e,n){var o,r;t(e.exports,"register",(function(){return o}),(function(t){return o=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var a={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},r=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),l.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return o.default(t)};var n,o=(n=l("8NIkP"))&&n.__esModule?n:{default:n}})),l.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}})),l.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),l.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),l.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return o.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o.default(t,e)};var n,o=(n=l("8NIkP"))&&n.__esModule?n:{default:n}})),l.register("aNJCr",(function(e,n){var o;t(e.exports,"getBundleURL",(function(){return o}),(function(t){return o=t}));var r={};function a(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(t){var e=r[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),r[t]=e),e}})),l("iE7OH").register(JSON.parse('{"EVgbq":"index.09833b3c.js","3xlH5":"icons.3e73bffe.svg","6sajJ":"emptyState.4efd87c2.png","8La6z":"emptyStateM2x.c9ea35c5.png"}')),n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-menu-container"),r=document.querySelector(".js-close-menu"),n.addEventListener("click",(function(){var t="true"===n.getAttribute("aria-expanded")||!1;n.classList.toggle("is-open"),n.setAttribute("aria-expanded",!t),o.classList.toggle("is-open")})),r.addEventListener("click",(function(){var t="true"===n.getAttribute("aria-expanded")||!1;n.classList.toggle("is-open"),n.setAttribute("aria-expanded",!t),o.classList.toggle("is-open")}));var s=document.querySelector("#dropdownmob"),d=document.querySelector("#dropdowndesk");s.addEventListener("click",(function(){document.getElementById("myDropdownn").classList.toggle("show")})),d.addEventListener("click",(function(){document.getElementById("myDropdown").classList.toggle("show")})),window.onclick=function(t){if(!t.target.matches(".dropbtn")){var e,n=document.getElementsByClassName("dropdown-content");for(e=0;e<n.length;e++){var o=n[e];o.classList.contains("show")&&o.classList.remove("show")}}};var u="https://thecocktaildb.com/api/json/v1/1/search.php?f=";function g(t,e){return fetch("".concat(t).concat(e)).then((function(t){return t.json()}))}var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(t){return m.default(t)||p.default(t)||y.default(t)||h.default()};var m=_(l("kMC0W")),p=_(l("7AJDX")),h=_(l("8CtQK")),y=_(l("auk6i"));function _(t){return t&&t.__esModule?t:{default:t}}var f;f=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("3xlH5");var b=function(t,e){try{var n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}},k=function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},w={save:b,load:k,remove:function(t,e){try{for(var n=k(t),o=0;o<n.length;o++)n[o].idDrink===e&&n.splice(o,1);b(t,n)}catch(t){console.error("Get state error: ",t.message)}}};function x(t,e){if(e){var n=e.map((function(t){var e=t.idDrink,n=t.strDrink,o=t.strDrinkThumb,r=t.strInstructions;function a(t,e){for(var n=[],o=Object.entries(t),r=0;r<o.length;r++)o[r][0].includes(e)&&null!==o[r][1]&&n.push(o[r][1]);return n}return{idDrink:e,strDrink:n,strDrinkThumb:o,cocktailIngr:a(t,"strIngredient"),cocktailMeasure:a(t,"strMeasure"),strInstructions:r}}));b(t,n)}}var L=[];function S(t,e){b(t,L.push(e))}L.push(k("ingridient"));var E=document.querySelector(".hero__list");document.querySelector(".product__list");E.addEventListener("click",j);var T=0,q=0,M=[],A=document.querySelector(".paginator"),O=document.querySelector(".pagination-buttton"),H=document.querySelector(".second-vector"),D=window.matchMedia("(min-width: 1280px)"),C=window.matchMedia("(max-width: 768px)"),I=window.matchMedia("(max-width: 1280px)");function j(t){var e=t.target;if(t.target!==t.currentTarget)return g(u,e.textContent).then((function(t){var e=t.drinks;M.push(e),it(e);var n=document.querySelector(".product__list");if(C.matches){q=3,T=e.length;for(var o=Math.ceil(T/q),r="",a=0;a<o;a++)r+='<button  class="paginator-item" data-page='+a*q+'  id="page'+(a+1)+'">'+(a+1)+"</button>";O.style.display="block",H.style.display="block",A.innerHTML=r;for(var c=document.querySelectorAll(".product__wraper"),i=0;i<c.length;i++)i<q&&(c[i].style.display="block");var l=document.getElementById("page1");l.classList.add("paginator_active"),document.querySelector(".paginator").addEventListener("click",(function(t){var e=(t||window.event).target,n=e.id;if("button"!==e.tagName.toLowerCase())return;var o=+e.dataset.page;console.log(o),l.classList.remove("paginator_active"),(l=document.getElementById(n)).classList.add("paginator_active");for(var r=0,a=0;a<c.length;a++){var i=c[a].dataset.num;(i<=o||i>=o)&&(c[a].style.display="none")}for(var s=o;s<c.length&&!(r>=q);s++)c[s].style.display="block",r++}))}else if(I.matches){q=6,T=e.length;for(var s=Math.ceil(T/q),d="",u=0;u<s;u++)d+='<button  class="paginator-item" data-page='+u*q+'  id="page'+(u+1)+'">'+(u+1)+"</button>";O.style.display="block",H.style.display="block",A.innerHTML=d;for(var g=document.querySelectorAll(".product__wraper"),v=0;v<g.length;v++)v<q&&(n.style.gap="0",g[v].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ");var m=document.getElementById("page1");m.classList.add("paginator_active"),document.querySelector(".paginator").addEventListener("click",(function(t){var e=(t||window.event).target,n=e.id;if("button"!==e.tagName.toLowerCase())return;var o=+e.dataset.page;console.log(o),m.classList.remove("paginator_active"),(m=document.getElementById(n)).classList.add("paginator_active");for(var r=0,a=0;a<g.length;a++){var c=g[a].dataset.num;(c<=o||c>=o)&&(g[a].style.display="none")}for(var i=o;i<g.length&&!(r>=q);i++)g[i].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ",r++}))}else if(D.matches){q=9,T=e.length;for(var p=Math.ceil(T/q),h="",y=0;y<p;y++)h+='<button  class="paginator-item" data-page='+y*q+'  id="page'+(y+1)+'">'+(y+1)+"</button>";O.style.display="block",H.style.display="block",A.innerHTML=h;for(var _=document.querySelectorAll(".product__wraper"),f=0;f<_.length;f++)f<q&&(n.style.gap="0",_[f].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ");var b=document.getElementById("page1");b.classList.add("paginator_active"),document.querySelector(".paginator").addEventListener("click",(function(t){var e=(t||window.event).target,n=e.id;if("button"!==e.tagName.toLowerCase())return;var o=+e.dataset.page;console.log(o),b.classList.remove("paginator_active"),(b=document.getElementById(n)).classList.add("paginator_active");for(var r=0,a=0;a<_.length;a++){var c=_[a].dataset.num;(c<=o||c>=o)&&(_[a].style.display="none")}for(var i=o;i<_.length&&!(r>=q);i++)_[i].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ",r++}))}})).catch((function(t){console.log(t)}))}var B=window.matchMedia("(min-width: 1280px)"),N=window.matchMedia("(max-width: 768px)"),P=window.matchMedia("(max-width: 1280px)"),F=[];function R(t){var e=!0,n=!1,o=void 0;try{for(var r,a=t[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){r.value.style.display="block"}}catch(t){n=!0,o=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw o}}}g(u,function(){for(var t="",e="ADGIJKLNSPV",n=0;n<1;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}()).then((function(t){F.push(t.drinks),it(t.drinks);var e=document.querySelectorAll(".product__wraper");N.matches?R(Array.from(e).slice(0,3)):P.matches?R(Array.from(e).slice(0,6)):B.matches&&R(Array.from(e).slice(0,9))})).catch((function(t){console.log(t)}));var V=w.save,J="ingridient",W=document.querySelector(".modal-cocktail");function G(t){for(var n=t.strDrink,o=t.strDrinkThumb,r=t.strInstructions,a=t.strGlass,c=(t.strCategory,[]),i=[],l=1;l<15;l+=1)t["strIngredient".concat(l)]&&(i.push(t["strIngredient".concat(l)]),c.push(t["strMeasure".concat(l)]));var s,d=i.map((function(t){return'\n\n        <li class="modal-cocktail__item">\n        <a class="modal-cocktail__link link" href="#" data-modal-ingredient-open>'.concat(t,"</a>\n\n        </li>")})).join(""),u='\n\n    <button class="modal__close-btn" type="button" data-modal-cocktail-close>\n      <svg class="modal__close-svg" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">\n        <use href="'.concat(e(f),'#menu-close"></use>\n      </svg>\n    </button>\n\n    <h3 class="modal-cocktail__title">').concat(n,'</h3>\n    <div class="modal-wraper">\n      <div class="modal-cocktail__wrap-instructions">\n        <h4 class="modal-cocktail__subtitle">Instructions:</h4>\n        <p class="modal-cocktail__instructions">').concat(r,'</p>\n      </div>\n      <img\n        class="modal-cocktail__image"\n        src="').concat(o,'"\n        alt="Cocktail ').concat(a,' "\n      />\n      <div class="modal-cocktail__wrap-ingredients">\n        <h4 class="modal-cocktail__ingredients">Ingredients</h4>\n        <p class="modal-cocktail__per">Per cocktail</p>\n        <ul class="modal-cocktail__list">').concat(d,'</ul>\n      </div>\n    </div>\n    <button type="button" class="button__add-or-remove--modal">Add to favorite</button>');s=u,W.insertAdjacentHTML("afterbegin",s);var g=document.querySelectorAll("[data-modal-ingredient-open]");Array.from(g).map((function(t){t.addEventListener("click",K)}))}var U={openModalIngred:document.querySelector("[data-modal-ingredient-open]"),closeModalIngred:document.querySelector(".modal-ingredient__backdrop"),modalIngred:document.querySelector("[data-modal-ingredient]")};function K(t){var e=t.target.textContent;U.closeModalIngred.classList.remove("is-hidden2"),g("https://thecocktaildb.com/api/json/v1/1/search.php?i=",e).then((function(t){!function(t){document.querySelector(".ingridient-wrapper")&&(document.querySelector(".ingridient-wrapper").innerHTML="");e='\n <div class="ingridient-wrapper">\n  <h3 class="modal-ingredient__title">'.concat(t.strIngredient,'</h3>\n    <h4 class="modal-ingredient__subtitle">').concat(t.strType,'</h4>\n    <hr class="modal-ingredient__line" />\n    <p class="modal-ingredient__description">\n      <span class="modal-ingredient__name-span">').concat(t.strIngredient,"</span> ").concat(t.strDescription="drink",'\n    </p>\n    <ul class="modal-ingredient__list list">\n      <li class="modal-ingredient__item">Type: ').concat(t.strType,'</li>\n      <li class="modal-ingredient__item">Alcohol by volume: ').concat(t.strABV=0,'%</li>\n      <li class="modal-ingredient__item">Flavour: fantastic </li>\n\n    </ul>\n    <div class="modal-ingredient__button">\n      <button type="button" class="button__add-or-remove--modal-ingr">\n        Add to favorite\n      </button>\n </div>\n'),document.querySelector(".modal-ingredient").insertAdjacentHTML("afterbegin",e);var e;var n=document.querySelector(".button__add-or-remove--modal-ingr");n.style.boxShadow="0 1px 1px #0000001f, 0 4px 4px #0000000f, 1px 4px 6px #00000029",n.addEventListener("click",S(J,t)),U.closeModalIngred.addEventListener("click",(function(){return U.closeModalIngred.classList.add("is-hidden2")}))}(t.ingredients[0]),V(J,t.ingredients[0])})).catch((function(t){console.log(t)}))}var Q,Y=document.querySelector("[data-modal-cocktail]"),z=document.querySelector(".modal-cocktail");function X(t){Y.classList.toggle("is-hidden2"),Z(z);var e=t.target.attributes[0].value;G(F[0].find((function(t){return t.idDrink===e}))||M[0].find((function(t){return t.idDrink===e}))),document.querySelector("[data-modal-cocktail-close]").addEventListener("click",$)}function $(){Y.classList.toggle("is-hidden2")}function Z(t){t.innerHTML=""}var tt=function(t){return document.querySelector(t)},et=w.save,nt=w.load,ot=w.remove,rt=[],at="cocktailsFromFetch",ct="cocktails";function it(t){t?function(t){(function(){tt(".product").innerHTML="";var t='\n  <h2 class="product__title">Cocktails</h2>\n  <ul class="product__list"></ul>\n  ';tt(".product").insertAdjacentHTML("beforeEnd",t)})(),tt(".product__list").innerHTML="";var n=t.map((function(t,n){return'<li id="'.concat(t.idDrink,'" class="product__item">   \n        <div class="product__wraper" data-num="').concat(n,'">\n\n          <div class="product__image-part">\n            <picture>\n              <source\n                srcset="\n                ').concat(t.strDrinkThumb," 1x,\n                ").concat(t.strDrinkThumb,' 2x\n                "\n                media="(min-width:1200px)"\n              />\n              <source\n                srcset="\n                ').concat(t.strDrinkThumb," 1x,\n                ").concat(t.strDrinkThumb,' 2x\n                "\n                media="(min-width:768px)"\n              />\n              <source\n                srcset="\n                ').concat(t.strDrinkThumb," 1x,\n                ").concat(t.strDrinkThumb,' 2x\n                "\n                media="(max-width:767px)"\n              />\n              <img\n                class="product__image"\n                src="').concat(t.strDrinkThumb,'"\n                alt="cocktail"\n                width="280"\n                height="280"\n              />\n            </picture>\n          </div>\n          <div class="product__description-part">\n            <h3 class="product__subtitle">').concat(t.strDrink,'</h3>\n            <div class="product__buttons">\n              <button data-="').concat(t.idDrink,'" class="button button__learn-more" data-modal-cocktail-open >Learn more</button>\n              <button data-="').concat(t.idDrink,'" class="button button__add-or-remove">\n              \n              ').concat(dt("Add to",t.idDrink)?"Remove":"Add to",'\n                <div class="product__heart-wraper">\n\n                  <svg class="product__big-icon--').concat(dt("Add to",t.idDrink)?"remove":"add",'" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n                    <use href="').concat(e(f),'#bigHeart"></use>\n                  </svg>\n                  <svg class="product__small-icon--').concat(dt("Add to",t.idDrink)?"remove":"add",'" viewBox="0 0 22 26" xmlns="http://www.w3.org/2000/svg">\n                    <use href="').concat(e(f),'#smallHeart"></use>\n                  </svg>\n                </div>\n              </button>\n            </div>\n          </div>\n        </div>\n      </li>')})).join("");tt(".product__list").insertAdjacentHTML("beforeEnd",n);var o=document.querySelectorAll(".button.button__learn-more");Array.from(o).map((function(t){t.addEventListener("click",X)})),x(at,t)}(t):function(){tt(".product").innerHTML="",A.innerHTML="",O.innerHTML="",H.innerHTML="";var t='\n  <p class="product__empty-state">\n      Sorry, we didn\'t find any cocktail for you\n    </p>\n    <picture>\n      <source\n        srcset="\n        '.concat(lt," 1x,\n          ").concat(st,' 2x\n        "\n        media="(min-width:1200px)"\n      />\n      <source\n        srcset="\n        ').concat(lt," 1x,\n          ").concat(st,' 2x\n        "\n        media="(min-width:768px)"\n      />\n      <source\n        srcset="\n        ').concat(lt," 1x,\n          ").concat(st,' 2x\n        "\n        media="(max-width:767px)"\n      />\n      <img\n        class="product__empty-image"\n        src="').concat(lt,'"\n        alt="cocktail"\n        width="280"\n        height="308"\n      />\n    </picture>\n  ');tt(".product").insertAdjacentHTML("beforeEnd",t)}()}nt("cocktails")&&nt("cocktails").length>0&&(Q=rt).push.apply(Q,e(v)(nt("cocktails")));var lt;lt=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("6sajJ");var st;function dt(t,e){return null!=nt(ct)&&nt(ct).map((function(t){return t.idDrink})).find((function(t){return t===e}))}st=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("8La6z");var ut=document.querySelector(".container.product");ut&&ut.addEventListener("click",(function(t){gt=t.target.attributes[0].nodeValue;var n=nt("cocktailsFromFetch");rt.map((function(t){return t.idDrink})).find((function(t){return t===gt}))?function(t,n){"Remove"===t.target.innerText&&(t.target.innerHTML='Add to\n  <div class="product__heart-wraper">\n    <svg class="product__big-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n      <use href="'.concat(e(f),'#bigHeart"></use>\n    </svg>\n    <svg class="product__small-icon--add" viewBox="0 0 22 26" xmlns="http://www.w3.org/2000/svg">\n      <use href="').concat(e(f),'#smallHeart"></use>\n    </svg>\n  </div>'));ot(ct,n)}(t,gt):function(t,n,o){"Add to"===t.target.innerText&&(t.target.innerHTML='Remove\n    <div class="product__heart-wraper">\n      <svg class="product__big-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n        <use href="'.concat(e(f),'#bigHeart"></use>\n      </svg>\n      <svg class="product__small-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n        <use href="').concat(e(f),'#smallHeart"></use>\n      </svg>\n    </div>'),function(t,n,o){var r,a=[];n.map((function(t){t.idDrink===o&&a.push(t)}));(r=rt).push.apply(r,e(v)(a)),et(ct,rt)}(0,n,o))}(t,n,gt)}));var gt=0;var vt=document.querySelector(".search-container__form"),mt=document.querySelector(".search-container__form-mob");mt.addEventListener("submit",kt),vt.addEventListener("submit",kt);var pt=0,ht=0,yt=document.querySelector(".paginator"),_t=window.matchMedia("(min-width: 1280px)"),ft=window.matchMedia("(max-width: 768px)"),bt=window.matchMedia("(max-width: 1280px)");function kt(t){var e=document.querySelector(".backdrop-mob");document.querySelector(".js-open-menu").classList.remove("is-open"),e.classList.remove("is-open"),t.preventDefault(),g("https://thecocktaildb.com/api/json/v1/1/search.php?s=",t.currentTarget.elements.searchQuery.value).then((function(t){var e=t.drinks;M.push(e),it(e);var n=document.querySelector(".product__list");if(ft.matches){ht=3,pt=e.length;for(var o=Math.ceil(pt/ht),r="",a=0;a<o;a++)r+='<button  class="paginator-item" data-page='+a*ht+'  id="page'+(a+1)+'">'+(a+1)+"</button>";O.style.display="block",H.style.display="block",yt.innerHTML=r;for(var c=document.querySelectorAll(".product__wraper"),i=0;i<c.length;i++)i<ht&&(c[i].style.display="block");var l=document.getElementById("page1");l.classList.add("paginator_active"),document.querySelector(".paginator").addEventListener("click",(function(t){var e=(t||window.event).target,n=e.id;if("button"!==e.tagName.toLowerCase())return;var o=+e.dataset.page;console.log(o),l.classList.remove("paginator_active"),(l=document.getElementById(n)).classList.add("paginator_active");for(var r=0,a=0;a<c.length;a++){var i=c[a].dataset.num;(i<=o||i>=o)&&(c[a].style.display="none")}for(var s=o;s<c.length&&!(r>=ht);s++)c[s].style.display="block",r++}))}else if(bt.matches){ht=6,pt=e.length;for(var s=Math.ceil(pt/ht),d="",u=0;u<s;u++)d+='<button  class="paginator-item" data-page='+u*ht+'  id="page'+(u+1)+'">'+(u+1)+"</button>";O.style.display="block",H.style.display="block",yt.innerHTML=d;for(var g=document.querySelectorAll(".product__wraper"),v=0;v<g.length;v++)v<ht&&(n.style.gap="0",g[v].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ");var m=document.getElementById("page1");m.classList.add("paginator_active"),document.querySelector(".paginator").addEventListener("click",(function(t){var e=(t||window.event).target,n=e.id;if("button"!==e.tagName.toLowerCase())return;var o=+e.dataset.page;console.log(o),m.classList.remove("paginator_active"),(m=document.getElementById(n)).classList.add("paginator_active");for(var r=0,a=0;a<g.length;a++){var c=g[a].dataset.num;(c<=o||c>=o)&&(g[a].style.display="none")}for(var i=o;i<g.length&&!(r>=ht);i++)g[i].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ",r++}))}else if(_t.matches){ht=9,pt=e.length;for(var p=Math.ceil(pt/ht),h="",y=0;y<p;y++)h+='<button  class="paginator-item" data-page='+y*ht+'  id="page'+(y+1)+'">'+(y+1)+"</button>";O.style.display="block",H.style.display="block",yt.innerHTML=h;for(var _=document.querySelectorAll(".product__wraper"),f=0;f<_.length;f++)f<ht&&(n.style.gap="0",_[f].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ");var b=document.getElementById("page1");b.classList.add("paginator_active"),document.querySelector(".paginator").addEventListener("click",(function(t){var e=(t||window.event).target,n=e.id;if("button"!==e.tagName.toLowerCase())return;var o=+e.dataset.page;console.log(o),b.classList.remove("paginator_active"),(b=document.getElementById(n)).classList.add("paginator_active");for(var r=0,a=0;a<_.length;a++){var c=_[a].dataset.num;(c<=o||c>=o)&&(_[a].style.display="none")}for(var i=o;i<_.length&&!(r>=ht);i++)_[i].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ",r++}))}})).catch((function(t){console.log(t)}))}var wt=w.remove,xt=(0,w.load)("cocktails"),Lt=document.querySelector("[data-modal-cocktail]"),St=document.querySelectorAll(".qweqwe"),Et=document.querySelector(".hero"),Tt=document.querySelector(".section-cocktails"),qt=document.querySelector(".paginator-sections");function Mt(){(document.querySelector(".backdrop-mob.js-menu-container").classList.remove("is-open"),Tt.style.display="none",qt.style.display="none",Et.innerHTML="",Et.insertAdjacentHTML("afterbegin",'\n<body>\n    <div class="container favorite"></div>\n        <h1 class="favorite__title">Favorite cocktails</h1>\n        <ul class="favorite__list">\n        </ul>\n        <p class="default-text">You haven\'t added any favorite cocktails yet</p>\n    </div>\n\n    <script type="module" src="/src/index.js"><\/script>\n</body>\n\n   '),document.querySelector(".default-text"))?(Et.style.marginBottom="40px",document.querySelector(".favorite__list").insertAdjacentHTML("afterbegin",function(t){if(t){document.querySelector(".default-text").style.display="none"}return t.map((function(t){return'\n        <li id="'.concat(t.idDrink,'" class="favorite__item">   \n          <div class="favorite__wraper">\n\n\n          <div class="favorite__image-part">\n            <picture>\n              <source\n                srcset="\n                ').concat(t.strDrinkThumb," 1x,\n                ").concat(t.strDrinkThumb,' 2x\n                "\n                media="(min-width:1200px)"\n              />\n              <source\n                srcset="\n                ').concat(t.strDrinkThumb," 1x,\n                ").concat(t.strDrinkThumb,' 2x\n                "\n                media="(min-width:768px)"\n              />\n              <source\n                srcset="\n                ').concat(t.strDrinkThumb," 1x,\n                ").concat(t.strDrinkThumb,' 2x\n                "\n                media="(max-width:767px)"\n              />\n              <img\n                class="favorite__image"\n                src="').concat(t.strDrinkThumb,'"\n                alt="cocktail"\n                width="280"\n                height="280"\n              />\n            </picture>\n          </div>\n\n          <div class="favorite__description-part">\n            <h3 class="favorite__subtitle">').concat(t.strDrink,'</h3>\n            <div class="favorite__buttons">\n              <button data-="').concat(t.idDrink,'" class="button button__learn-more" data-modal-cocktail-open >Learn more</button>\n              <button data-="').concat(t.idDrink,'" class="button button__add-or-remove">\n              \n              ',"Remove",'\n                <div class="favorite__heart-wraper">\n\n                  <svg class="favorite__big-icon--',"remove",'" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n                    <use href="').concat(e(f),'#bigHeart"></use>\n                  </svg>\n                  <svg class="favorite__small-icon--',"remove",'" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n                    <use href="').concat(e(f),'#smallHeart"></use>\n                  </svg>\n                </div>\n              </button>\n            </div>\n          </div>\n        </div>\n      </li>\n      \n  ')})).join("")}(xt))):document.querySelector(".default-text").style.display="block"}Array.from(St).map((function(t){t.addEventListener("click",Mt)})),document.querySelector("body").addEventListener("click",(function(t){if(document.querySelector(".favorite__list")){document.querySelector(".favorite__list").addEventListener("click",(function(t){if("Remove"==t.target.innerText){var n=t.target.attributes[0].nodeValue;t.target.innerHTML='Add to\n          <div class="product__heart-wraper">\n            <svg class="product__big-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n              <use href="'.concat(e(f),'#bigHeart"></use>\n            </svg>\n            <svg class="product__small-icon--add" viewBox="0 0 22 26" xmlns="http://www.w3.org/2000/svg">\n              <use href="').concat(e(f),'#smallHeart"></use>\n            </svg>\n          </div>'),wt("cocktails",n)}else if("Add to"==t.target.innerText){var o=t.target.attributes[0].nodeValue;t.target.innerHTML='Remove\n        <div class="product__heart-wraper">\n          <svg class="product__big-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n            <use href="'.concat(e(f),'#bigHeart"></use>\n          </svg>\n          <svg class="product__small-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n            <use href="').concat(e(f),'#smallHeart"></use>\n          </svg>\n        </div>'),addToFavoriteLocalStorage(KEYFAVORITE,cocktailFromFetch,o)}else if("Learn more"===t.target.innerText){Lt.classList.toggle("is-hidden2"),Z(z);var r=JSON.parse(localStorage.getItem("cocktails"));idCard=t.target.attributes[0].value,G(r.find((function(t){return t.idDrink===idCard}))),document.querySelector("[data-modal-cocktail-close]").addEventListener("click",$)}}))}}));(0,w.load)("cocktails");var At=document.querySelectorAll(".qweqwe123"),Ot=document.querySelector(".hero"),Ht=document.querySelector(".section-cocktails"),Dt=document.querySelector(".paginator-sections");function Ct(){document.querySelector(".backdrop-mob.js-menu-container").classList.remove("is-open"),Ht.style.display="none",Dt.style.display="none",Ot.innerHTML="",Ot.insertAdjacentHTML("afterbegin",'\n<body>\n    <div class="container favorite"></div>\n        <h1 class="favorite__title">Favorite ingredients</h1>\n         <ul class="favorite__list">\n        </ul>\n        <p class="default-text">You haven\'t added any favorite cocktails yet</p>\n    </div>\n\n    <script type="module" src="/src/index.js"><\/script>\n</body>\n\n   ');document.querySelector(".favorite__list")}Array.from(At).map((function(t){t.addEventListener("click",Ct)}));document.querySelector("#checkbox__light"),document.querySelector("#checkbox__dark");var It=document.querySelector("#slider_round"),jt=document.querySelector("#checkbox__lightt"),Bt=document.querySelector("#checkbox__darkk"),Nt=document.querySelector("#slider_roundd"),Pt=document.querySelector(".dropbtn"),Ft=document.querySelector(".dropbtn-mob"),Rt=document.querySelector(".dropdown-content-desk"),Vt=document.querySelector(".body"),Jt=document.querySelector(".site-nav__link"),Wt=document.querySelector(".imput__header"),Gt=(document.querySelector(".product__title"),document.querySelector(".icon__menu")),Ut=document.querySelector(".backdrop-mob"),Kt=document.querySelector(".dropdown-content button"),Qt=document.querySelector(".favorite-ingridients"),Yt=document.querySelector(".mob-menu__link"),zt=document.querySelector(".product__title");It.addEventListener("click",(function(){document.body.classList.toggle("dark")?(Vt.style.backgroundColor="var(--black-bg-color)",Wt.style.backgroundColor="var(--black-bg-color)",Wt.style.color="var(--orange-text-color)",Jt.style.color="var(--white-bg-color)",Pt.style.color="var(--white-bg-color)",Rt.style.backgroundColor="transparent",Ft.style.backgroundColor="var(--white-bg-color)",Kt.style.color="var(--white-bg-color)",Qt.style.color="var(--white-bg-color)",Ft.style.borderSolid="var(--orange-text-color)",Gt.style.color="var(--white-bg-color)",Ut.style.background="var(--black-bg-color)",zt.style.color="var(--white-bg-color)",jt.style.color="var(--white-bg-color)",Bt.style.color="var(--orange-text-color)",Yt.style.color="var(--white-bg-color)"):(Vt.style.backgroundColor="var(--white-bg-color)",Wt.style.backgroundColor="var(--white-bg-color)",Wt.style.color="var(--black-bg-color)",Jt.style.color="var(--black-bg-color)",Pt.style.color="var(--black-bg-color)",Rt.style.backgroundColor="var(--white-bg-color)",Ft.style.backgroundColor="var(--white-bg-color)",Kt.style.color="var(--black-bg-color)",Qt.style.color="var(--black-bg-color)",Ft.style.borderSolid="var(--white-bg-color)",Ut.style.background="var(--white-bg-color)",Gt.style.color="var(--black-bg-color)",zt.style.color="var(--black-bg-color)",jt.style.color="var(--orange-text-color)",Bt.style.color="var(--black-bg-color)",Yt.style.color="var(--black-bg-color)")})),Nt.addEventListener("click",(function(){document.body.classList.toggle("dark")?(Vt.style.background="var(--black-bg-color)",Wt.style.backgroundColor="var(--black-bg-color)",Wt.style.color="var(--orange-text-color)",Jt.style.color="var(--white-bg-color)",Pt.style.color="var(--white-bg-color)",Rt.style.backgroundColor="transparent",Ft.style.backgroundColor="var(--white-bg-color)",Kt.style.color="var(--white-bg-color)",Qt.style.color="var(--white-bg-color)",Ft.style.borderSolid="var(--orange-text-color)",Gt.style.color="var(--white-bg-color)",Ut.style.background="var(--black-bg-color)",zt.style.color="var(--white-bg-color)",jt.style.color="var(--white-bg-color)",Bt.style.color="var(--orange-text-color)",Yt.style.color="var(--white-bg-color)"):(Vt.style.backgroundColor="var(--white-bg-color)",Wt.style.backgroundColor="var(--white-bg-color)",Wt.style.color="var(--black-bg-color)",Jt.style.color="var(--black-bg-color)",Pt.style.color="var(--black-bg-color)",Rt.style.backgroundColor="var(--white-bg-color)",Ft.style.backgroundColor="var(--white-bg-color)",Kt.style.color="var(--black-bg-color)",Qt.style.color="var(--black-bg-color)",Ft.style.borderSolid="var(--white-bg-color)",Gt.style.color="var(--black-bg-color)",Ut.style.background="var(--white-bg-color)",zt.style.color="var(--black-bg-color)",jt.style.color="var(--orange-text-color)",Bt.style.color="var(--black-bg-color)",Yt.style.color="var(--black-bg-color)")}));var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var $t={};function Zt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty($t,"__esModule",{value:!0}),$t.default=function(t,e,n){e&&Zt(t.prototype,e);n&&Zt(t,n);return t};var te={};Object.defineProperty(te,"__esModule",{value:!0}),te.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t};var ee=function(){"use strict";function t(n,o){e(Xt)(this,t),this._el="string"==typeof n?document.querySelector(n):n,this._params=o||{},this._onClickFn=this._onClick.bind(this),this._params.options&&(this._el.innerHTML=this.constructor.template(this._params),this._el.classList.add(this.constructor.EL)),this._elToggle=this._el.querySelector(this.constructor.DATA_TOGGLE),this._el.addEventListener("click",this._onClickFn)}return e($t)(t,[{key:"_onClick",value:function(t){var e=t.target,n=e.closest(this.constructor.DATA).dataset.select;"toggle"===n?this.toggle():"option"===n&&this._changeValue(e)}},{key:"_updateOption",value:function(t){var e=t.closest(".".concat(this.constructor.EL_OPTION)),n=this._el.querySelector(".".concat(this.constructor.EL_OPTION_SELECTED));return n&&n.classList.remove(this.constructor.EL_OPTION_SELECTED),e.classList.add(this.constructor.EL_OPTION_SELECTED),this._elToggle.textContent=e.textContent,this._elToggle.value=e.dataset.value,this._elToggle.dataset.index=e.dataset.index,this._el.dispatchEvent(new CustomEvent("itc.select.change")),this._params.onSelected&&this._params.onSelected(this,e),e.dataset.value}},{key:"_reset",value:function(){var t=this._el.querySelector(".".concat(this.constructor.EL_OPTION_SELECTED));return t&&t.classList.remove(this.constructor.EL_OPTION_SELECTED),this._elToggle.textContent="Выберите из списка",this._elToggle.value="",this._elToggle.dataset.index="-1",this._el.dispatchEvent(new CustomEvent("itc.select.change")),this._params.onSelected&&this._params.onSelected(this,null),""}},{key:"_changeValue",value:function(t){t.classList.contains(this.constructor.EL_OPTION_SELECTED)||(this._updateOption(t),this.hide())}},{key:"show",value:function(){var t=this;document.querySelectorAll(this.constructor.EL_SHOW).forEach((function(e){e.classList.remove(t.constructor.EL_SHOW)})),this._el.classList.add("".concat(this.constructor.EL_SHOW))}},{key:"hide",value:function(){this._el.classList.remove(this.constructor.EL_SHOW)}},{key:"toggle",value:function(){this._el.classList.contains(this.constructor.EL_SHOW)?this.hide():this.show()}},{key:"dispose",value:function(){this._el.removeEventListener("click",this._onClickFn)}},{key:"value",get:function(){return this._elToggle.value},set:function(t){var e=this,n=!1;this._el.querySelectorAll(".select__option").forEach((function(o){o.dataset.value===t&&(n=!0,e._updateOption(o))})),n||this._reset()}},{key:"selectedIndex",get:function(){return this._elToggle.dataset.index},set:function(t){var e=this._el.querySelector('.select__option[data-index="'.concat(t,'"]'));e&&this._updateOption(e),this._reset()}}],[{key:"template",value:function(t){var e=this,n=t.name,o=t.options,r=t.targetValue,a=[],c=-1,i="",l="Выберите из списка";return o.forEach((function(t,n){var o="";t[0]===r&&(o=" ".concat(e.EL_OPTION_SELECTED),c=n,i=t[0],l=t[1]),a.push('<li class="itc-select__option'.concat(o,'" data-select="option"\n        data-value="').concat(t[0],'" data-index="').concat(n,'">').concat(t[1],"</li>"))})),'<button type="button" class="itc-select__toggle" name="'.concat(n,'"\n      value="').concat(i,'" data-select="toggle" data-index="').concat(c,'">\n      ').concat(l,'</button><div class="itc-select__dropdown">\n      <ul class="itc-select__options">').concat(a.join(""),"</ul></div>")}},{key:"hideOpenSelect",value:function(){var t=this;document.addEventListener("click",(function(e){if(!e.target.closest(".".concat(t.EL))){var n=t;document.querySelectorAll(".".concat(t.EL_SHOW)).forEach((function(t){t.classList.remove(n.EL_SHOW)}))}}))}},{key:"create",value:function(t,e){return this._el="string"==typeof t?document.querySelector(t):t,this._el?new this(t,e):null}}]),t}();e(te)(ee,"EL","itc-select"),e(te)(ee,"EL_SHOW","itc-select_show"),e(te)(ee,"EL_OPTION","itc-select__option"),e(te)(ee,"EL_OPTION_SELECTED","itc-select__option_selected"),e(te)(ee,"DATA","[data-select]"),e(te)(ee,"DATA_TOGGLE",'[data-select="toggle"]'),ee.hideOpenSelect();new ee("#select-2",{name:"letter",targetValue:"A",options:[["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"],["G","G"],["H","H"],["I","I"],["J","J"],["K","K"],["L","L"],["M","M"],["N","N"],["O","O"],["P","P"],["Q","Q"],["R","R"],["S","S"],["T","T"],["U","U"],["V","V"],["W","W"],["X","X"],["Y","Y"],["Z","Z"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["0","0"]]});document.querySelectorAll(".itc-select__options")[0].addEventListener("click",j)}();
//# sourceMappingURL=index.09833b3c.js.map
