import{d as A,K as O,e as P,g as B,b as p,f as F,h as H,j as h,k as U,l as Y,m as $}from"./index-CQZDqF9H.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const D=new WeakMap,T=(e,s,t,o=0,i=!1)=>{D.has(e)!==t&&(t?G(e,s,o,i):W(e,s))},q=e=>e===e.getRootNode().activeElement,G=(e,s,t,o=!1)=>{const i=s.parentNode,r=s.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),i.appendChild(r),D.set(e,r);const a=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",s.style.transform="translate3d(".concat(a,"px,").concat(t,"px,0) scale(0)")},W=(e,s)=>{const t=D.get(e);t&&(D.delete(e),t.remove()),e.style.pointerEvents="",s.style.transform=""},N=50,j=(e,s,t)=>{if(!t||!s)return()=>{};const o=a=>{q(s)&&T(e,s,a)},i=()=>T(e,s,!1),r=()=>o(!0),c=()=>o(!1);return P(t,"ionScrollStart",r),P(t,"ionScrollEnd",c),s.addEventListener("blur",i),()=>{B(t,"ionScrollStart",r),B(t,"ionScrollEnd",c),s.removeEventListener("blur",i)}},I="input, textarea, [no-blur], [contenteditable]",z=()=>{let e=!0,s=!1;const t=document,o=()=>{s=!0},i=()=>{e=!0},r=c=>{if(s){s=!1;return}const a=t.activeElement;if(!a||a.matches(I))return;const f=c.target;f!==a&&(f.matches(I)||f.closest(I)||(e=!1,setTimeout(()=>{e||a.blur()},50)))};return P(t,"ionScrollStart",o),t.addEventListener("focusin",i,!0),t.addEventListener("touchend",r,!1),()=>{B(t,"ionScrollStart",o,!0),t.removeEventListener("focusin",i,!0),t.removeEventListener("touchend",r,!1)}},J=.3,Q=(e,s,t,o)=>{var i;const r=(i=e.closest("ion-item,[ion-item]"))!==null&&i!==void 0?i:e;return V(r.getBoundingClientRect(),s.getBoundingClientRect(),t,o)},V=(e,s,t,o)=>{const i=e.top,r=e.bottom,c=s.top,a=Math.min(s.bottom,o-t),f=c+15,l=a-N-r,d=f-i,S=Math.round(l<0?-l:d>0?-d:0),v=Math.min(S,i-c),n=Math.abs(v)/J,y=Math.min(400,Math.max(150,n));return{scrollAmount:v,scrollDuration:y,scrollPadding:t,inputSafeY:-(i-f)+4}},R="$ionPaddingTimer",M=(e,s,t)=>{const o=e[R];o&&clearTimeout(o),s>0?e.style.setProperty("--keyboard-offset","".concat(s,"px")):e[R]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},_=(e,s,t)=>{const o=()=>{s&&M(s,0,t)};e.addEventListener("focusout",o,{once:!0})};let g=0;const K="data-ionic-skip-scroll-assist",X=(e,s,t,o,i,r,c,a=!1)=>{const f=r&&(c===void 0||c.mode===H.None);let u=!1;const l=h!==void 0?h.innerHeight:0,d=w=>{if(u===!1){u=!0;return}k(e,s,t,o,w.detail.keyboardHeight,f,a,l,!1)},S=()=>{u=!1,h===null||h===void 0||h.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",S,!0)},v=async()=>{if(s.hasAttribute(K)){s.removeAttribute(K);return}k(e,s,t,o,i,f,a,l),h===null||h===void 0||h.addEventListener("ionKeyboardDidShow",d),e.addEventListener("focusout",S,!0)};return e.addEventListener("focusin",v,!0),()=>{e.removeEventListener("focusin",v,!0),h===null||h===void 0||h.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",S,!0)}},C=e=>{document.activeElement!==e&&(e.setAttribute(K,"true"),e.focus())},k=async(e,s,t,o,i,r,c=!1,a=0,f=!0)=>{if(!t&&!o)return;const u=Q(e,t||o,i,a);if(t&&Math.abs(u.scrollAmount)<4){C(s),r&&t!==null&&(M(t,g),_(s,t,()=>g=0));return}if(T(e,s,!0,u.inputSafeY,c),C(s),U(()=>e.click()),r&&t&&(g=u.scrollPadding,M(t,g)),typeof window<"u"){let l;const d=async()=>{l!==void 0&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",S),window.removeEventListener("ionKeyboardDidShow",d),t&&await $(t,0,u.scrollAmount,u.scrollDuration),T(e,s,!1,u.inputSafeY),C(s),r&&_(s,t,()=>g=0)},S=()=>{window.removeEventListener("ionKeyboardDidShow",S),window.addEventListener("ionKeyboardDidShow",d)};if(t){const v=await Y(t),w=v.scrollHeight-v.clientHeight;if(f&&u.scrollAmount>w-v.scrollTop){s.type==="password"?(u.scrollAmount+=N,window.addEventListener("ionKeyboardDidShow",S)):window.addEventListener("ionKeyboardDidShow",d),l=setTimeout(d,1e3);return}}d()}},Z=!0,te=async(e,s)=>{if(A===void 0)return;const t=s==="ios",o=s==="android",i=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",t),a=e.getBoolean("inputBlurring",t),f=e.getBoolean("scrollPadding",!0),u=Array.from(A.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,d=new WeakMap,S=await O.getResizeMode(),v=async n=>{await new Promise(m=>p(n,m));const y=n.shadowRoot||n,L=y.querySelector("input")||y.querySelector("textarea"),b=F(n),x=b?null:n.closest("ion-footer");if(!L)return;if(b&&c&&!l.has(n)){const m=j(n,L,b);l.set(n,m)}if(!(L.type==="date"||L.type==="datetime-local")&&(b||x)&&r&&!d.has(n)){const m=X(n,L,b,x,i,f,S,o);d.set(n,m)}},w=n=>{if(c){const y=l.get(n);y&&y(),l.delete(n)}if(r){const y=d.get(n);y&&y(),d.delete(n)}};a&&Z&&z();for(const n of u)v(n);A.addEventListener("ionInputDidLoad",n=>{v(n.detail)}),A.addEventListener("ionInputDidUnload",n=>{w(n.detail)})};export{te as startInputShims};
