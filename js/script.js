!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).LazyLoad=n()}(this,(function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,o=n&&"classList"in document.createElement("p"),r=n&&window.devicePixelRatio>1,c={elements_selector:".lazy",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},a=function(n){return t({},c,n)},l=function(t,n){var e,i="LazyLoad::Initialized",o=new t(n);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},s="loading",u="loaded",d="applied",f="error",v="native",_=function(t,n){return t.getAttribute("data-"+n)},g=function(t){return _(t,"ll-status")},m=function(t,n){return function(t,n,e){var i="data-ll-status";null!==e?t.setAttribute(i,e):t.removeAttribute(i)}(t,0,n)},b=function(t){return m(t,null)},p=function(t){return null===g(t)},h=function(t){return g(t)===v},E=[s,u,d,f],y=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},L=function(t,n){o?t.classList.add(n):t.className+=(t.className?" ":"")+n},I=function(t,n){o?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},k=function(t){return t.llTempImage},A=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},w=function(t,n){t&&(t.loadingCount+=n)},O=function(t,n){t&&(t.toLoadCount=n)},x=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},z=function(t,n,e){e&&t.setAttribute(n,e)},C=function(t,n){t.removeAttribute(n)},N=function(t){return!!t.llOriginalAttrs},M=function(t){if(!N(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},S=function(t){if(N(t)){var n=t.llOriginalAttrs;z(t,"src",n.src),z(t,"srcset",n.srcset),z(t,"sizes",n.sizes)}},T=function(t,n){z(t,"sizes",_(t,n.data_sizes)),z(t,"srcset",_(t,n.data_srcset)),z(t,"src",_(t,n.data_src))},R=function(t){C(t,"src"),C(t,"srcset"),C(t,"sizes")},q=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&x(e).forEach(n)},D={IMG:function(t,n){q(t,(function(t){M(t),T(t,n)})),M(t),T(t,n)},IFRAME:function(t,n){z(t,"src",_(t,n.data_src))},VIDEO:function(t,n){!function(t,e){x(t).forEach((function(t){z(t,"src",_(t,n.data_src))}))}(t),z(t,"poster",_(t,n.data_poster)),z(t,"src",_(t,n.data_src)),t.load()}},G=function(t,n){var e=D[t.tagName];e&&e(t,n)},B=function(t,n,e){w(e,1),L(t,n.class_loading),m(t,s),y(n.callback_loading,t,e)},V=["IMG","IFRAME","VIDEO"],j=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||y(t.callback_finish,n)},F=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},P=function(t,n,e){t.removeEventListener(n,e)},U=function(t){return!!t.llEvLisnrs},$=function(t){if(U(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];P(t,e,i)}delete t.llEvLisnrs}},H=function(t,n,e){!function(t){delete t.llTempImage}(t),w(e,-1),function(t){t&&(t.toLoadCount-=1)}(e),I(t,n.class_loading),n.unobserve_completed&&A(t,e)},J=function(t,n,e){var i=k(t)||t;U(i)||function(t,n,e){U(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";F(t,i,n),F(t,"error",e)}(i,(function(o){!function(t,n,e,i){var o=h(n);H(n,e,i),L(n,e.class_loaded),m(n,u),y(e.callback_loaded,n,i),o||j(e,i)}(0,t,n,e),$(i)}),(function(o){!function(t,n,e,i){var o=h(n);H(n,e,i),L(n,e.class_error),m(n,f),y(e.callback_error,n,i),o||j(e,i)}(0,t,n,e),$(i)}))},K=function(t,n,e){!function(t){return V.indexOf(t.tagName)>-1}(t)?function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG")}(t),J(t,n,e),function(t,n,e){var i=_(t,n.data_bg),o=_(t,n.data_bg_hidpi),c=r&&o?o:i;c&&(t.style.backgroundImage='url("'.concat(c,'")'),k(t).setAttribute("src",c),B(t,n,e))}(t,n,e),function(t,n,e){var i=_(t,n.data_bg_multi),o=_(t,n.data_bg_multi_hidpi),c=r&&o?o:i;c&&(t.style.backgroundImage=c,function(t,n,e){L(t,n.class_applied),m(t,d),n.unobserve_completed&&A(t,n),y(n.callback_applied,t,e)}(t,n,e))}(t,n,e)}(t,n,e):function(t,n,e){J(t,n,e),G(t,n),B(t,n,e)}(t,n,e)},Q=["IMG","IFRAME","VIDEO"],W=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},X=function(t){return Array.prototype.slice.call(t)},Y=function(t){return t.container.querySelectorAll(t.elements_selector)},Z=function(t){return function(t){return g(t)===f}(t)},tt=function(t,n){return function(t){return X(t).filter(p)}(t||Y(n))},nt=function(t,e){var o=a(t);this._settings=o,this.loadingCount=0,function(t,n){i&&!W(t)&&(n._observer=new IntersectionObserver((function(e){!function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,i){var o=function(t){return E.indexOf(g(t))>=0}(t);m(t,"entered"),L(t,e.class_entered),I(t,e.class_exited),function(t,n,e){n.unobserve_entered&&A(t,e)}(t,e,i),y(e.callback_enter,t,n,i),o||K(t,e,i)}(t.target,t,n,e):function(t,n,e,i){p(t)||(L(t,e.class_exited),function(t,n,e,i){e.cancel_on_exit&&function(t){return g(t)===s}(t)&&"IMG"===t.tagName&&($(t),function(t){q(t,(function(t){R(t)})),R(t)}(t),function(t){q(t,(function(t){S(t)})),S(t)}(t),I(t,e.class_loading),w(i,-1),b(t),y(e.callback_cancel,t,n,i))}(t,n,e,i),y(e.callback_exit,t,n,i))}(t.target,t,n,e)}))}(e,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(o,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=Y(t),X(e).filter(Z)).forEach((function(n){I(n,t.class_error),b(n)})),n.update()}(t,e)}))}(o,this),this.update(e)};return nt.prototype={update:function(t){var n,o,r=this._settings,c=tt(t,r);O(this,c.length),!e&&i?W(r)?function(t,n,e){t.forEach((function(t){-1!==Q.indexOf(t.tagName)&&function(t,n,e){t.setAttribute("loading","lazy"),J(t,n,e),G(t,n),m(t,v)}(t,n,e)})),O(e,0)}(c,r,this):(o=c,function(t){t.disconnect()}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,o)):this.loadAll(c)},destroy:function(){this._observer&&this._observer.disconnect(),Y(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;tt(t,e).forEach((function(t){A(t,n),K(t,e,n)}))}},nt.load=function(t,n){var e=a(n);K(t,e)},nt.resetStatus=function(t){b(t)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)l(t,e);else l(t,n)}(nt,window.lazyLoadOptions),nt})),document.addEventListener("DOMContentLoaded",(function(){new LazyLoad({});var t=["вазндан халос булишни","чиройли қоматга","янги овқатланиш","ўзига бўлган ишончга"],n=["скинуть лишние килограммы","подтянутое тело","новые пищевые привычки","уверенность в себе"],e=document.getElementById("ph"),i=document.getElementById("ph-ru"),o=0;e&&setInterval((function(){!function(n){e.innerText=t[n]}(o),++o>=t.length&&(o=0)}),3e3),i&&setInterval((function(){!function(t){i.innerText=n[t]}(o),++o>=n.length&&(o=0)}),3e3);for(var r=document.querySelectorAll(".btn"),c=document.getElementById("form"),a=document.querySelector("#form .overlay"),l=document.querySelector("#form .btn-close"),s=0;s<r.length;s++)r[s].addEventListener("click",(function(t){t.preventDefault(),c.classList.add("active")}));function u(){c.classList.remove("active")}a.addEventListener("click",u),l.addEventListener("click",u);var d=document.querySelector(".header__mobile"),f=document.getElementById("menu"),v=document.querySelectorAll(".menu__list a"),_=document.querySelector("#menu .btn-close");d.addEventListener("click",(function(t){t.preventDefault(),f.classList.add("active")}));for(var g=0;g<v.length;g++)v[g].addEventListener("click",m);function m(){f.classList.remove("active")}_.addEventListener("click",m)}));