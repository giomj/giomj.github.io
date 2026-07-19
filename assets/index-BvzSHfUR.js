(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const it={},ir=[],xn=()=>{},Ff=()=>!1,ao=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),co=n=>n.startsWith("onUpdate:"),wt=Object.assign,hc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xd=Object.prototype.hasOwnProperty,Ze=(n,e)=>Xd.call(n,e),ke=Array.isArray,rr=n=>Jr(n)==="[object Map]",lo=n=>Jr(n)==="[object Set]",qc=n=>Jr(n)==="[object Date]",Ge=n=>typeof n=="function",ct=n=>typeof n=="string",bn=n=>typeof n=="symbol",nt=n=>n!==null&&typeof n=="object",Nf=n=>(nt(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),Of=Object.prototype.toString,Jr=n=>Of.call(n),jd=n=>Jr(n).slice(8,-1),kf=n=>Jr(n)==="[object Object]",dc=n=>ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Fr=fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$d=/-\w/g,Ft=uo(n=>n.replace($d,e=>e.slice(1).toUpperCase())),Yd=/\B([A-Z])/g,fi=uo(n=>n.replace(Yd,"-$1").toLowerCase()),fo=uo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bo=uo(n=>n?`on${fo(n)}`:""),Fn=(n,e)=>!Object.is(n,e),zs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Bf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ho=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Wc;const po=()=>Wc||(Wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qr(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ct(i)?Qd(i):qr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ct(n)||nt(n))return n}const Kd=/;(?![^(]*\))/g,Zd=/:([^]+)/,Jd=/\/\*[^]*?\*\//g;function Qd(n){const e={};return n.replace(Jd,"").split(Kd).forEach(t=>{if(t){const i=t.split(Zd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function sr(n){let e="";if(ct(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=sr(n[t]);i&&(e+=i+" ")}else if(nt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ep="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tp=fc(ep);function zf(n){return!!n||n===""}function np(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Qr(n[i],e[i]);return t}function Qr(n,e){if(n===e)return!0;let t=qc(n),i=qc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=bn(n),i=bn(e),t||i)return n===e;if(t=ke(n),i=ke(e),t||i)return t&&i?np(n,e):!1;if(t=nt(n),i=nt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(o&&!c||!o&&c||!Qr(n[a],e[a]))return!1}}return String(n)===String(e)}function ip(n,e){return n.findIndex(t=>Qr(t,e))}const Hf=n=>!!(n&&n.__v_isRef===!0),Ye=n=>ct(n)?n:n==null?"":ke(n)||nt(n)&&(n.toString===Of||!Ge(n.toString))?Hf(n)?Ye(n.value):JSON.stringify(n,Gf,2):String(n),Gf=(n,e)=>Hf(e)?Gf(n,e.value):rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[zo(i,s)+" =>"]=r,t),{})}:lo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>zo(t))}:bn(e)?zo(e):nt(e)&&!ke(e)&&!kf(e)?String(e):e,zo=(n,e="")=>{var t;return bn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class rp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&bt&&(bt.active?(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=bt;try{return bt=this,e()}finally{bt=t}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){if(this._on>0&&--this._on===0){if(bt===this)bt=this.prevScope;else{let e=bt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function sp(){return bt}let rt;const Ho=new WeakSet;class Vf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&(bt.active?bt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ho.has(this)&&(Ho.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xc(this),Xf(this);const e=rt,t=cn;rt=this,cn=!0;try{return this.fn()}finally{jf(this),rt=e,cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gc(e);this.deps=this.depsTail=void 0,Xc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ho.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Va(this)&&this.run()}get dirty(){return Va(this)}}let qf=0,Nr,Or;function Wf(n,e=!1){if(n.flags|=8,e){n.next=Or,Or=n;return}n.next=Nr,Nr=n}function pc(){qf++}function mc(){if(--qf>0)return;if(Or){let e=Or;for(Or=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Nr;){let e=Nr;for(Nr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Xf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),gc(i),op(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Va(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($f(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function $f(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Wr)||(n.globalVersion=Wr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Va(n))))return;n.flags|=2;const e=n.dep,t=rt,i=cn;rt=n,cn=!0;try{Xf(n);const r=n.fn(n._value);(e.version===0||Fn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{rt=t,cn=i,jf(n),n.flags&=-3}}function gc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)gc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function op(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let cn=!0;const Yf=[];function Hn(){Yf.push(cn),cn=!1}function Gn(){const n=Yf.pop();cn=n===void 0?!0:n}function Xc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=rt;rt=void 0;try{e()}finally{rt=t}}}let Wr=0;class ap{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!rt||!cn||rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==rt)t=this.activeLink=new ap(rt,this),rt.deps?(t.prevDep=rt.depsTail,rt.depsTail.nextDep=t,rt.depsTail=t):rt.deps=rt.depsTail=t,Zf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=rt.depsTail,t.nextDep=void 0,rt.depsTail.nextDep=t,rt.depsTail=t,rt.deps===t&&(rt.deps=i)}return t}trigger(e){this.version++,Wr++,this.notify(e)}notify(e){pc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{mc()}}}function Zf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const qa=new WeakMap,wi=Symbol(""),Wa=Symbol(""),Xr=Symbol("");function Tt(n,e,t){if(cn&&rt){let i=qa.get(n);i||qa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Kf),r.map=i,r.key=t),r.track()}}function Nn(n,e,t,i,r,s){const a=qa.get(n);if(!a){Wr++;return}const o=c=>{c&&c.trigger()};if(pc(),e==="clear")a.forEach(o);else{const c=ke(n),l=c&&dc(t);if(c&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Xr||!bn(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),l&&o(a.get(Xr)),e){case"add":c?l&&o(a.get("length")):(o(a.get(wi)),rr(n)&&o(a.get(Wa)));break;case"delete":c||(o(a.get(wi)),rr(n)&&o(a.get(Wa)));break;case"set":rr(n)&&o(a.get(wi));break}}mc()}function Ni(n){const e=Qe(n);return e===n?e:(Tt(e,"iterate",Xr),ln(n)?e:e.map(Vn))}function mo(n){return Tt(n=Qe(n),"iterate",Xr),n}function gn(n,e){return ci(n)?fr(Ci(n)?Vn(e):e):Vn(e)}const cp={__proto__:null,[Symbol.iterator](){return Go(this,Symbol.iterator,n=>gn(this,n))},concat(...n){return Ni(this).concat(...n.map(e=>ke(e)?Ni(e):e))},entries(){return Go(this,"entries",n=>(n[1]=gn(this,n[1]),n))},every(n,e){return Mn(this,"every",n,e,void 0,arguments)},filter(n,e){return Mn(this,"filter",n,e,t=>t.map(i=>gn(this,i)),arguments)},find(n,e){return Mn(this,"find",n,e,t=>gn(this,t),arguments)},findIndex(n,e){return Mn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Mn(this,"findLast",n,e,t=>gn(this,t),arguments)},findLastIndex(n,e){return Mn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Mn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Vo(this,"includes",n)},indexOf(...n){return Vo(this,"indexOf",n)},join(n){return Ni(this).join(n)},lastIndexOf(...n){return Vo(this,"lastIndexOf",n)},map(n,e){return Mn(this,"map",n,e,void 0,arguments)},pop(){return Mr(this,"pop")},push(...n){return Mr(this,"push",n)},reduce(n,...e){return jc(this,"reduce",n,e)},reduceRight(n,...e){return jc(this,"reduceRight",n,e)},shift(){return Mr(this,"shift")},some(n,e){return Mn(this,"some",n,e,void 0,arguments)},splice(...n){return Mr(this,"splice",n)},toReversed(){return Ni(this).toReversed()},toSorted(n){return Ni(this).toSorted(n)},toSpliced(...n){return Ni(this).toSpliced(...n)},unshift(...n){return Mr(this,"unshift",n)},values(){return Go(this,"values",n=>gn(this,n))}};function Go(n,e,t){const i=mo(n),r=i[e]();return i!==n&&!ln(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const lp=Array.prototype;function Mn(n,e,t,i,r,s){const a=mo(n),o=a!==n&&!ln(n),c=a[e];if(c!==lp[e]){const f=c.apply(n,s);return o?Vn(f):f}let l=t;a!==n&&(o?l=function(f,h){return t.call(this,gn(n,f),h,n)}:t.length>2&&(l=function(f,h){return t.call(this,f,h,n)}));const u=c.call(a,l,i);return o&&r?r(u):u}function jc(n,e,t,i){const r=mo(n),s=r!==n&&!ln(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(l,u,f){return o&&(o=!1,l=gn(n,l)),t.call(this,l,gn(n,u),f,n)}):t.length>3&&(a=function(l,u,f){return t.call(this,l,u,f,n)}));const c=r[e](a,...i);return o?gn(n,c):c}function Vo(n,e,t){const i=Qe(n);Tt(i,"iterate",Xr);const r=i[e](...t);return(r===-1||r===!1)&&bc(t[0])?(t[0]=Qe(t[0]),i[e](...t)):r}function Mr(n,e,t=[]){Hn(),pc();const i=Qe(n)[e].apply(n,t);return mc(),Gn(),i}const up=fc("__proto__,__v_isRef,__isVue"),Jf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bn));function fp(n){bn(n)||(n=String(n));const e=Qe(this);return Tt(e,"has",n),e.hasOwnProperty(n)}class Qf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Sp:ih:s?nh:th).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ke(e);if(!r){let c;if(a&&(c=cp[t]))return c;if(t==="hasOwnProperty")return fp}const o=Reflect.get(e,t,Nt(e)?e:i);if((bn(t)?Jf.has(t):up(t))||(r||Tt(e,"get",t),s))return o;if(Nt(o)){const c=a&&dc(t)?o:o.value;return r&&nt(c)?ja(c):c}return nt(o)?r?ja(o):vc(o):o}}class eh extends Qf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=ke(e)&&dc(t);if(!this._isShallow){const l=ci(s);if(!ln(i)&&!ci(i)&&(s=Qe(s),i=Qe(i)),!a&&Nt(s)&&!Nt(i))return l||(s.value=i),!0}const o=a?Number(t)<e.length:Ze(e,t),c=Reflect.set(e,t,i,Nt(e)?e:r);return e===Qe(r)&&c&&(o?Fn(i,s)&&Nn(e,"set",t,i):Nn(e,"add",t,i)),c}deleteProperty(e,t){const i=Ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Nn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!bn(t)||!Jf.has(t))&&Tt(e,"has",t),i}ownKeys(e){return Tt(e,"iterate",ke(e)?"length":wi),Reflect.ownKeys(e)}}class hp extends Qf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const dp=new eh,pp=new hp,mp=new eh(!0);const Xa=n=>n,fs=n=>Reflect.getPrototypeOf(n);function gp(n,e,t){return function(...i){const r=this.__v_raw,s=Qe(r),a=rr(s),o=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,l=r[n](...i),u=t?Xa:e?fr:Vn;return!e&&Tt(s,"iterate",c?Wa:wi),wt(Object.create(l),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function hs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function _p(n,e){const t={get(r){const s=this.__v_raw,a=Qe(s),o=Qe(r);n||(Fn(r,o)&&Tt(a,"get",r),Tt(a,"get",o));const{has:c}=fs(a),l=e?Xa:n?fr:Vn;if(c.call(a,r))return l(s.get(r));if(c.call(a,o))return l(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Tt(Qe(r),"iterate",wi),r.size},has(r){const s=this.__v_raw,a=Qe(s),o=Qe(r);return n||(Fn(r,o)&&Tt(a,"has",r),Tt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,c=Qe(o),l=e?Xa:n?fr:Vn;return!n&&Tt(c,"iterate",wi),o.forEach((u,f)=>r.call(s,l(u),l(f),a))}};return wt(t,n?{add:hs("add"),set:hs("set"),delete:hs("delete"),clear:hs("clear")}:{add(r){const s=Qe(this),a=fs(s),o=Qe(r),c=!e&&!ln(r)&&!ci(r)?o:r;return a.has.call(s,c)||Fn(r,c)&&a.has.call(s,r)||Fn(o,c)&&a.has.call(s,o)||(s.add(c),Nn(s,"add",c,c)),this},set(r,s){!e&&!ln(s)&&!ci(s)&&(s=Qe(s));const a=Qe(this),{has:o,get:c}=fs(a);let l=o.call(a,r);l||(r=Qe(r),l=o.call(a,r));const u=c.call(a,r);return a.set(r,s),l?Fn(s,u)&&Nn(a,"set",r,s):Nn(a,"add",r,s),this},delete(r){const s=Qe(this),{has:a,get:o}=fs(s);let c=a.call(s,r);c||(r=Qe(r),c=a.call(s,r)),o&&o.call(s,r);const l=s.delete(r);return c&&Nn(s,"delete",r,void 0),l},clear(){const r=Qe(this),s=r.size!==0,a=r.clear();return s&&Nn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=gp(r,n,e)}),t}function _c(n,e){const t=_p(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ze(t,r)&&r in i?t:i,r,s)}const vp={get:_c(!1,!1)},xp={get:_c(!1,!0)},bp={get:_c(!0,!1)};const th=new WeakMap,nh=new WeakMap,ih=new WeakMap,Sp=new WeakMap;function Ep(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vc(n){return ci(n)?n:xc(n,!1,dp,vp,th)}function yp(n){return xc(n,!1,mp,xp,nh)}function ja(n){return xc(n,!0,pp,bp,ih)}function xc(n,e,t,i,r){if(!nt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=Ep(jd(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Ci(n){return ci(n)?Ci(n.__v_raw):!!(n&&n.__v_isReactive)}function ci(n){return!!(n&&n.__v_isReadonly)}function ln(n){return!!(n&&n.__v_isShallow)}function bc(n){return n?!!n.__v_raw:!1}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function Mp(n){return!Ze(n,"__v_skip")&&Object.isExtensible(n)&&Bf(n,"__v_skip",!0),n}const Vn=n=>nt(n)?vc(n):n,fr=n=>nt(n)?ja(n):n;function Nt(n){return n?n.__v_isRef===!0:!1}function Tp(n){return Nt(n)?n.value:n}const Ap={get:(n,e,t)=>e==="__v_raw"?n:Tp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Nt(r)&&!Nt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function rh(n){return Ci(n)?n:new Proxy(n,Ap)}class wp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Kf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return Wf(this,!0),!0}get value(){const e=this.dep.track();return $f(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cp(n,e,t=!1){let i,r;return Ge(n)?i=n:(i=n.get,r=n.set),new wp(i,r,t)}const ds={},Ws=new WeakMap;let Si;function Rp(n,e=!1,t=Si){if(t){let i=Ws.get(t);i||Ws.set(t,i=[]),i.push(n)}}function Lp(n,e,t=it){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:c}=t,l=T=>r?T:ln(T)||r===!1||r===0?On(T,1):On(T);let u,f,h,p,b=!1,x=!1;if(Nt(n)?(f=()=>n.value,b=ln(n)):Ci(n)?(f=()=>l(n),b=!0):ke(n)?(x=!0,b=n.some(T=>Ci(T)||ln(T)),f=()=>n.map(T=>{if(Nt(T))return T.value;if(Ci(T))return l(T);if(Ge(T))return c?c(T,2):T()})):Ge(n)?e?f=c?()=>c(n,2):n:f=()=>{if(h){Hn();try{h()}finally{Gn()}}const T=Si;Si=u;try{return c?c(n,3,[p]):n(p)}finally{Si=T}}:f=xn,e&&r){const T=f,C=r===!0?1/0:r;f=()=>On(T(),C)}const m=sp(),d=()=>{u.stop(),m&&m.active&&hc(m.effects,u)};if(s&&e){const T=e;e=(...C)=>{const R=T(...C);return d(),R}}let M=x?new Array(n.length).fill(ds):ds;const E=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const C=u.run();if(T||r||b||(x?C.some((R,L)=>Fn(R,M[L])):Fn(C,M))){h&&h();const R=Si;Si=u;try{const L=[C,M===ds?void 0:x&&M[0]===ds?[]:M,p];M=C,c?c(e,3,L):e(...L)}finally{Si=R}}}else u.run()};return o&&o(E),u=new Vf(f),u.scheduler=a?()=>a(E,!1):E,p=T=>Rp(T,!1,u),h=u.onStop=()=>{const T=Ws.get(u);if(T){if(c)c(T,4);else for(const C of T)C();Ws.delete(u)}},e?i?E(!0):M=u.run():a?a(E.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function On(n,e=1/0,t){if(e<=0||!nt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Nt(n))On(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)On(n[i],e,t);else if(lo(n)||rr(n))n.forEach(i=>{On(i,e,t)});else if(kf(n)){for(const i in n)On(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&On(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function es(n,e,t,i){try{return i?n(...i):n()}catch(r){go(r,e,t)}}function fn(n,e,t,i){if(Ge(n)){const r=es(n,e,t,i);return r&&Nf(r)&&r.catch(s=>{go(s,e,t)}),r}if(ke(n)){const r=[];for(let s=0;s<n.length;s++)r.push(fn(n[s],e,t,i));return r}}function go(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||it;if(e){let o=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,c,l)===!1)return}o=o.parent}if(s){Hn(),es(s,null,10,[n,c,l]),Gn();return}}Dp(n,t,r,i,a)}function Dp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const It=[];let mn=-1;const or=[];let Qn=null,er=0;const sh=Promise.resolve();let Xs=null;function oh(n){const e=Xs||sh;return n?e.then(this?n.bind(this):n):e}function Pp(n){let e=mn+1,t=It.length;for(;e<t;){const i=e+t>>>1,r=It[i],s=jr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Sc(n){if(!(n.flags&1)){const e=jr(n),t=It[It.length-1];!t||!(n.flags&2)&&e>=jr(t)?It.push(n):It.splice(Pp(e),0,n),n.flags|=1,ah()}}function ah(){Xs||(Xs=sh.then(lh))}function Up(n){ke(n)?or.push(...n):Qn&&n.id===-1?Qn.splice(er+1,0,n):n.flags&1||(or.push(n),n.flags|=1),ah()}function $c(n,e,t=mn+1){for(;t<It.length;t++){const i=It[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;It.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ch(n){if(or.length){const e=[...new Set(or)].sort((t,i)=>jr(t)-jr(i));if(or.length=0,Qn){Qn.push(...e);return}for(Qn=e,er=0;er<Qn.length;er++){const t=Qn[er];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Qn=null,er=0}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function lh(n){try{for(mn=0;mn<It.length;mn++){const e=It[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),es(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<It.length;mn++){const e=It[mn];e&&(e.flags&=-2)}mn=-1,It.length=0,ch(),Xs=null,(It.length||or.length)&&lh()}}let qt=null,uh=null;function js(n){const e=qt;return qt=n,uh=n&&n.type.__scopeId||null,e}function Ip(n,e=qt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&al(-1);const s=js(e),a=Ri.length;let o;try{o=n(...r)}finally{for(let c=Ri.length;c>a;c--)Oh();js(s),i._d&&al(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Tr(n,e){if(qt===null)return n;const t=bo(qt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,c=it]=e[r];s&&(Ge(s)&&(s={mounted:s,updated:s}),s.deep&&On(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:c}))}return n}function pi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let c=o.dir[i];c&&(Hn(),fn(c,t,8,[n.el,o,n,e]),Gn())}}function Fp(n,e){if(At){let t=At.provides;const i=At.parent&&At.parent.provides;i===t&&(t=At.provides=Object.create(i)),t[n]=e}}function Hs(n,e,t=!1){const i=Pm();if(i||ar){let r=ar?ar._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const Np=Symbol.for("v-scx"),Op=()=>Hs(Np);function qo(n,e,t){return fh(n,e,t)}function fh(n,e,t=it){const{immediate:i,deep:r,flush:s,once:a}=t,o=wt({},t),c=e&&i||!e&&s!=="post";let l;if(Yr){if(s==="sync"){const p=Op();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!c){const p=()=>{};return p.stop=xn,p.resume=xn,p.pause=xn,p}}const u=At;o.call=(p,b,x)=>fn(p,u,b,x);let f=!1;s==="post"?o.scheduler=p=>{kt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,b)=>{b?p():Sc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Lp(n,e,o);return Yr&&(l?l.push(h):c&&h()),h}function kp(n,e,t){const i=this.proxy,r=ct(n)?n.includes(".")?hh(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const a=ts(this),o=fh(r,s.bind(i),t);return a(),o}function hh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Bp=Symbol("_vte"),zp=n=>n.__isTeleport,Wo=Symbol("_leaveCb");function Ec(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ec(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function dh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Yc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const $s=new WeakMap;function kr(n,e,t,i,r=!1){if(ke(n)){n.forEach((x,m)=>kr(x,e&&(ke(e)?e[m]:e),t,i,r));return}if(Br(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&kr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?bo(i.component):i.el,a=r?null:s,{i:o,r:c}=n,l=e&&e.r,u=o.refs===it?o.refs={}:o.refs,f=o.setupState,h=Qe(f),p=f===it?Ff:x=>Yc(u,x)?!1:Ze(h,x),b=(x,m)=>!(m&&Yc(u,m));if(l!=null&&l!==c){if(Kc(e),ct(l))u[l]=null,p(l)&&(f[l]=null);else if(Nt(l)){const x=e;b(l,x.k)&&(l.value=null),x.k&&(u[x.k]=null)}}if(Ge(c))es(c,o,12,[a,u]);else{const x=ct(c),m=Nt(c);if(x||m){const d=()=>{if(n.f){const M=x?p(c)?f[c]:u[c]:b()||!n.k?c.value:u[n.k];if(r)ke(M)&&hc(M,s);else if(ke(M))M.includes(s)||M.push(s);else if(x)u[c]=[s],p(c)&&(f[c]=u[c]);else{const E=[s];b(c,n.k)&&(c.value=E),n.k&&(u[n.k]=E)}}else x?(u[c]=a,p(c)&&(f[c]=a)):m&&(b(c,n.k)&&(c.value=a),n.k&&(u[n.k]=a))};if(a){const M=()=>{d(),$s.delete(n)};M.id=-1,$s.set(n,M),kt(M,t)}else Kc(n),d()}}}function Kc(n){const e=$s.get(n);e&&(e.flags|=8,$s.delete(n))}po().requestIdleCallback;po().cancelIdleCallback;const Br=n=>!!n.type.__asyncLoader,ph=n=>n.type.__isKeepAlive;function Hp(n,e){mh(n,"a",e)}function Gp(n,e){mh(n,"da",e)}function mh(n,e,t=At){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(_o(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ph(r.parent.vnode)&&Vp(i,e,t,r),r=r.parent}}function Vp(n,e,t,i){const r=_o(e,n,i,!0);gh(()=>{hc(i[e],r)},t)}function _o(n,e,t=At,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Hn();const o=ts(t),c=fn(e,t,n,a);return o(),Gn(),c});return i?r.unshift(s):r.push(s),s}}const Wn=n=>(e,t=At)=>{(!Yr||n==="sp")&&_o(n,(...i)=>e(...i),t)},qp=Wn("bm"),Wp=Wn("m"),Xp=Wn("bu"),jp=Wn("u"),$p=Wn("bum"),gh=Wn("um"),Yp=Wn("sp"),Kp=Wn("rtg"),Zp=Wn("rtc");function Jp(n,e=At){_o("ec",n,e)}const _h="components";function Zc(n,e){return xh(_h,n,!0,e)||n}const vh=Symbol.for("v-ndc");function Qp(n){return ct(n)?xh(_h,n,!1)||n:n||vh}function xh(n,e,t=!0,i=!1){const r=qt||At;if(r){const s=r.type;{const o=Om(s,!1);if(o&&(o===e||o===Ft(e)||o===fo(Ft(e))))return s}const a=Jc(r[n]||s[n],e)||Jc(r.appContext[n],e);return!a&&i?s:a}}function Jc(n,e){return n&&(n[e]||n[Ft(e)]||n[fo(Ft(e))])}function yc(n,e,t,i){let r;const s=t,a=ke(n);if(a||ct(n)){const o=a&&Ci(n);let c=!1,l=!1;o&&(c=!ln(n),l=ci(n),n=mo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(c?l?fr(Vn(n[u])):Vn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(nt(n))if(n[Symbol.iterator])r=Array.from(n,(o,c)=>e(o,c,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];r[c]=e(n[u],u,c,s)}}else r=[];return r}const $a=n=>n?Vh(n)?bo(n):$a(n.parent):null,zr=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$a(n.parent),$root:n=>$a(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Sh(n),$forceUpdate:n=>n.f||(n.f=()=>{Sc(n.update)}),$nextTick:n=>n.n||(n.n=oh.bind(n.proxy)),$watch:n=>kp.bind(n)}),Xo=(n,e)=>n!==it&&!n.__isScriptSetup&&Ze(n,e),em={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:c}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Xo(i,e))return a[e]=1,i[e];if(r!==it&&Ze(r,e))return a[e]=2,r[e];if(Ze(s,e))return a[e]=3,s[e];if(t!==it&&Ze(t,e))return a[e]=4,t[e];Ya&&(a[e]=0)}}const l=zr[e];let u,f;if(l)return e==="$attrs"&&Tt(n.attrs,"get",""),l(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==it&&Ze(t,e))return a[e]=4,t[e];if(f=c.config.globalProperties,Ze(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Xo(r,e)?(r[e]=t,!0):i!==it&&Ze(i,e)?(i[e]=t,!0):Ze(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let c;return!!(t[o]||n!==it&&o[0]!=="$"&&Ze(n,o)||Xo(e,o)||Ze(s,o)||Ze(i,o)||Ze(zr,o)||Ze(r.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ze(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Qc(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ya=!0;function tm(n){const e=Sh(n),t=n.proxy,i=n.ctx;Ya=!1,e.beforeCreate&&el(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:b,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:M,destroyed:E,unmounted:T,render:C,renderTracked:R,renderTriggered:L,errorCaptured:O,serverPrefetch:g,expose:_,inheritAttrs:D,components:G,directives:q,filters:A}=e;if(l&&nm(l,i,null),a)for(const X in a){const Y=a[X];Ge(Y)&&(i[X]=Y.bind(t))}if(r){const X=r.call(t,t);nt(X)&&(n.data=vc(X))}if(Ya=!0,s)for(const X in s){const Y=s[X],ie=Ge(Y)?Y.bind(t,t):Ge(Y.get)?Y.get.bind(t,t):xn,j=!Ge(Y)&&Ge(Y.set)?Y.set.bind(t):xn,k=Bm({get:ie,set:j});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>k.value,set:z=>k.value=z})}if(o)for(const X in o)bh(o[X],i,t,X);if(c){const X=Ge(c)?c.call(t):c;Reflect.ownKeys(X).forEach(Y=>{Fp(Y,X[Y])})}u&&el(u,n,"c");function N(X,Y){ke(Y)?Y.forEach(ie=>X(ie.bind(t))):Y&&X(Y.bind(t))}if(N(qp,f),N(Wp,h),N(Xp,p),N(jp,b),N(Hp,x),N(Gp,m),N(Jp,O),N(Zp,R),N(Kp,L),N($p,M),N(gh,T),N(Yp,g),ke(_))if(_.length){const X=n.exposed||(n.exposed={});_.forEach(Y=>{Object.defineProperty(X,Y,{get:()=>t[Y],set:ie=>t[Y]=ie,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===xn&&(n.render=C),D!=null&&(n.inheritAttrs=D),G&&(n.components=G),q&&(n.directives=q),g&&dh(n)}function nm(n,e,t=xn){ke(n)&&(n=Ka(n));for(const i in n){const r=n[i];let s;nt(r)?"default"in r?s=Hs(r.from||i,r.default,!0):s=Hs(r.from||i):s=Hs(r),Nt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function el(n,e,t){fn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function bh(n,e,t,i){let r=i.includes(".")?hh(t,i):()=>t[i];if(ct(n)){const s=e[n];Ge(s)&&qo(r,s)}else if(Ge(n))qo(r,n.bind(t));else if(nt(n))if(ke(n))n.forEach(s=>bh(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&qo(r,s,n)}}function Sh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let c;return o?c=o:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>Ys(c,l,a,!0)),Ys(c,e,a)),nt(e)&&s.set(e,c),c}function Ys(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ys(n,s,t,!0),r&&r.forEach(a=>Ys(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=im[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const im={data:tl,props:nl,emits:nl,methods:Pr,computed:Pr,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Pr,directives:Pr,watch:sm,provide:tl,inject:rm};function tl(n,e){return e?n?function(){return wt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function rm(n,e){return Pr(Ka(n),Ka(e))}function Ka(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Pr(n,e){return n?wt(Object.create(null),n,e):e}function nl(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:wt(Object.create(null),Qc(n),Qc(e??{})):e}function sm(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Dt(n[i],e[i]);return t}function Eh(){return{app:null,config:{isNativeTag:Ff,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let om=0;function am(n,e){return function(i,r=null){Ge(i)||(i=wt({},i)),r!=null&&!nt(r)&&(r=null);const s=Eh(),a=new WeakSet,o=[];let c=!1;const l=s.app={_uid:om++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:zm,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ge(u.install)?(a.add(u),u.install(l,...f)):Ge(u)&&(a.add(u),u(l,...f))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,f){return f?(s.components[u]=f,l):s.components[u]},directive(u,f){return f?(s.directives[u]=f,l):s.directives[u]},mount(u,f,h){if(!c){const p=l._ceVNode||en(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),c=!0,l._container=u,u.__vue_app__=l,bo(p.component)}},onUnmount(u){o.push(u)},unmount(){c&&(fn(o,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,f){return s.provides[u]=f,l},runWithContext(u){const f=ar;ar=l;try{return u()}finally{ar=f}}};return l}}let ar=null;const cm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ft(e)}Modifiers`]||n[`${fi(e)}Modifiers`];function lm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),a=s&&cm(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>ct(u)?u.trim():u)),a.number&&(r=t.map(ho)));let o,c=i[o=Bo(e)]||i[o=Bo(Ft(e))];!c&&s&&(c=i[o=Bo(fi(e))]),c&&fn(c,n,6,r);const l=i[o+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,fn(l,n,6,r)}}const um=new WeakMap;function yh(n,e,t=!1){const i=t?um:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ge(n)){const c=l=>{const u=yh(l,e,!0);u&&(o=!0,wt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!o?(nt(n)&&i.set(n,null),null):(ke(s)?s.forEach(c=>a[c]=null):wt(a,s),nt(n)&&i.set(n,a),a)}function vo(n,e){return!n||!ao(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ze(n,e[0].toLowerCase()+e.slice(1))||Ze(n,fi(e))||Ze(n,e))}function il(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:c,render:l,renderCache:u,props:f,data:h,setupState:p,ctx:b,inheritAttrs:x}=n,m=js(n);let d,M;try{if(t.shapeFlag&4){const T=r||i,C=T;d=_n(l.call(C,T,u,f,p,h,b)),M=o}else{const T=e;d=_n(T.length>1?T(f,{attrs:o,slots:a,emit:c}):T(f,null)),M=e.props?o:fm(o)}}catch(T){Ri.length=0,go(T,n,1),d=en(li)}let E=d;if(M&&x!==!1){const T=Object.keys(M),{shapeFlag:C}=E;T.length&&C&7&&(s&&T.some(co)&&(M=hm(M,s)),E=hr(E,M,!1,!0))}return t.dirs&&(E=hr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Ec(E,t.transition),d=E,js(m),d}const fm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ao(t))&&((e||(e={}))[t]=n[t]);return e},hm=(n,e)=>{const t={};for(const i in n)(!co(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function dm(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?rl(i,a,l):!!a;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Mh(a,i,h)&&!vo(l,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?rl(i,a,l):!0:!!a;return!1}function rl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Mh(e,n,s)&&!vo(t,s))return!0}return!1}function Mh(n,e,t){const i=n[t],r=e[t];return t==="style"&&nt(i)&&nt(r)?!Qr(i,r):i!==r}function pm({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Th={},Ah=()=>Object.create(Th),wh=n=>Object.getPrototypeOf(n)===Th;function mm(n,e,t,i=!1){const r={},s=Ah();n.propsDefaults=Object.create(null),Ch(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:yp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function gm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Qe(r),[c]=n.propsOptions;let l=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(vo(n.emitsOptions,h))continue;const p=e[h];if(c)if(Ze(s,h))p!==s[h]&&(s[h]=p,l=!0);else{const b=Ft(h);r[b]=Za(c,o,b,p,n,!1)}else p!==s[h]&&(s[h]=p,l=!0)}}}else{Ch(n,e,r,s)&&(l=!0);let u;for(const f in o)(!e||!Ze(e,f)&&((u=fi(f))===f||!Ze(e,u)))&&(c?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Za(c,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ze(e,f))&&(delete s[f],l=!0)}l&&Nn(n.attrs,"set","")}function Ch(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let c in e){if(Fr(c))continue;const l=e[c];let u;r&&Ze(r,u=Ft(c))?!s||!s.includes(u)?t[u]=l:(o||(o={}))[u]=l:vo(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,a=!0)}if(s){const c=Qe(t),l=o||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Za(r,c,f,l[f],n,!Ze(l,f))}}return a}function Za(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ze(a,"default");if(o&&i===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&Ge(c)){const{propsDefaults:l}=r;if(t in l)i=l[t];else{const u=ts(r);i=l[t]=c.call(null,e),u()}}else i=c;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===fi(t))&&(i=!0))}return i}const _m=new WeakMap;function Rh(n,e,t=!1){const i=t?_m:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let c=!1;if(!Ge(n)){const u=f=>{c=!0;const[h,p]=Rh(f,e,!0);wt(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return nt(n)&&i.set(n,ir),ir;if(ke(s))for(let u=0;u<s.length;u++){const f=Ft(s[u]);sl(f)&&(a[f]=it)}else if(s)for(const u in s){const f=Ft(u);if(sl(f)){const h=s[u],p=a[f]=ke(h)||Ge(h)?{type:h}:wt({},h),b=p.type;let x=!1,m=!0;if(ke(b))for(let d=0;d<b.length;++d){const M=b[d],E=Ge(M)&&M.name;if(E==="Boolean"){x=!0;break}else E==="String"&&(m=!1)}else x=Ge(b)&&b.name==="Boolean";p[0]=x,p[1]=m,(x||Ze(p,"default"))&&o.push(f)}}const l=[a,o];return nt(n)&&i.set(n,l),l}function sl(n){return n[0]!=="$"&&!Fr(n)}const Mc=n=>n==="_"||n==="_ctx"||n==="$stable",Tc=n=>ke(n)?n.map(_n):[_n(n)],vm=(n,e,t)=>{if(e._n)return e;const i=Ip((...r)=>Tc(e(...r)),t);return i._c=!1,i},Lh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Mc(r))continue;const s=n[r];if(Ge(s))e[r]=vm(r,s,i);else if(s!=null){const a=Tc(s);e[r]=()=>a}}},Dh=(n,e)=>{const t=Tc(e);n.slots.default=()=>t},Ph=(n,e,t)=>{for(const i in e)(t||!Mc(i))&&(n[i]=e[i])},xm=(n,e,t)=>{const i=n.slots=Ah();if(n.vnode.shapeFlag&32){const r=e._;r?(Ph(i,e,t),t&&Bf(i,"_",r,!0)):Lh(e,i)}else e&&Dh(n,e)},bm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Ph(r,e,t):(s=!e.$stable,Lh(e,r)),a=e}else e&&(Dh(n,e),a={default:1});if(s)for(const o in r)!Mc(o)&&a[o]==null&&delete r[o]},kt=Tm;function Sm(n){return Em(n)}function Em(n,e){const t=po();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=xn,insertStaticContent:b}=n,x=(v,P,F,W=null,H=null,V=null,oe=void 0,Z=null,ne=!!P.dynamicChildren)=>{if(v===P)return;v&&!Ar(v,P)&&(W=ye(v),z(v,H,V,!0),v=null),P.patchFlag===-2&&(ne=!1,P.dynamicChildren=null);const{type:ee,ref:Se,shapeFlag:y}=P;switch(ee){case xo:m(v,P,F,W);break;case li:d(v,P,F,W);break;case Gs:v==null&&M(P,F,W,oe);break;case Kt:G(v,P,F,W,H,V,oe,Z,ne);break;default:y&1?C(v,P,F,W,H,V,oe,Z,ne):y&6?q(v,P,F,W,H,V,oe,Z,ne):(y&64||y&128)&&ee.process(v,P,F,W,H,V,oe,Z,ne,Le)}Se!=null&&H?kr(Se,v&&v.ref,V,P||v,!P):Se==null&&v&&v.ref!=null&&kr(v.ref,null,V,v,!0)},m=(v,P,F,W)=>{if(v==null)i(P.el=o(P.children),F,W);else{const H=P.el=v.el;P.children!==v.children&&l(H,P.children)}},d=(v,P,F,W)=>{v==null?i(P.el=c(P.children||""),F,W):P.el=v.el},M=(v,P,F,W)=>{[v.el,v.anchor]=b(v.children,P,F,W,v.el,v.anchor)},E=({el:v,anchor:P},F,W)=>{let H;for(;v&&v!==P;)H=h(v),i(v,F,W),v=H;i(P,F,W)},T=({el:v,anchor:P})=>{let F;for(;v&&v!==P;)F=h(v),r(v),v=F;r(P)},C=(v,P,F,W,H,V,oe,Z,ne)=>{if(P.type==="svg"?oe="svg":P.type==="math"&&(oe="mathml"),v==null)R(P,F,W,H,V,oe,Z,ne);else{const ee=v.el&&v.el._isVueCE?v.el:null;try{ee&&ee._beginPatch(),g(v,P,H,V,oe,Z,ne)}finally{ee&&ee._endPatch()}}},R=(v,P,F,W,H,V,oe,Z)=>{let ne,ee;const{props:Se,shapeFlag:y,transition:S,dirs:I}=v;if(ne=v.el=a(v.type,V,Se&&Se.is,Se),y&8?u(ne,v.children):y&16&&O(v.children,ne,null,W,H,jo(v,V),oe,Z),I&&pi(v,null,W,"created"),L(ne,v,v.scopeId,oe,W),Se){for(const te in Se)te!=="value"&&!Fr(te)&&s(ne,te,null,Se[te],V,W);"value"in Se&&s(ne,"value",null,Se.value,V),(ee=Se.onVnodeBeforeMount)&&pn(ee,W,v)}I&&pi(v,null,W,"beforeMount");const re=ym(H,S);re&&S.beforeEnter(ne),i(ne,P,F),((ee=Se&&Se.onVnodeMounted)||re||I)&&kt(()=>{try{ee&&pn(ee,W,v),re&&S.enter(ne),I&&pi(v,null,W,"mounted")}finally{}},H)},L=(v,P,F,W,H)=>{if(F&&p(v,F),W)for(let V=0;V<W.length;V++)p(v,W[V]);if(H){let V=H.subTree;if(P===V||Nh(V.type)&&(V.ssContent===P||V.ssFallback===P)){const oe=H.vnode;L(v,oe,oe.scopeId,oe.slotScopeIds,H.parent)}}},O=(v,P,F,W,H,V,oe,Z,ne=0)=>{for(let ee=ne;ee<v.length;ee++){const Se=v[ee]=Z?In(v[ee]):_n(v[ee]);x(null,Se,P,F,W,H,V,oe,Z)}},g=(v,P,F,W,H,V,oe)=>{const Z=P.el=v.el;let{patchFlag:ne,dynamicChildren:ee,dirs:Se}=P;ne|=v.patchFlag&16;const y=v.props||it,S=P.props||it;let I;if(F&&mi(F,!1),(I=S.onVnodeBeforeUpdate)&&pn(I,F,P,v),Se&&pi(P,v,F,"beforeUpdate"),F&&mi(F,!0),ee&&(!v.dynamicChildren||v.dynamicChildren.length!==ee.length)&&(ne=0,oe=!1,ee=null),(y.innerHTML&&S.innerHTML==null||y.textContent&&S.textContent==null)&&u(Z,""),ee?_(v.dynamicChildren,ee,Z,F,W,jo(P,H),V):oe||Y(v,P,Z,null,F,W,jo(P,H),V,!1),ne>0){if(ne&16)D(Z,y,S,F,H);else if(ne&2&&y.class!==S.class&&s(Z,"class",null,S.class,H),ne&4&&s(Z,"style",y.style,S.style,H),ne&8){const re=P.dynamicProps;for(let te=0;te<re.length;te++){const se=re[te],pe=y[se],fe=S[se];(fe!==pe||se==="value")&&s(Z,se,pe,fe,H,F)}}ne&1&&v.children!==P.children&&u(Z,P.children)}else!oe&&ee==null&&D(Z,y,S,F,H);((I=S.onVnodeUpdated)||Se)&&kt(()=>{I&&pn(I,F,P,v),Se&&pi(P,v,F,"updated")},W)},_=(v,P,F,W,H,V,oe)=>{for(let Z=0;Z<P.length;Z++){const ne=v[Z],ee=P[Z],Se=ne.el&&(ne.type===Kt||!Ar(ne,ee)||ne.shapeFlag&198)?f(ne.el):F;x(ne,ee,Se,null,W,H,V,oe,!0)}},D=(v,P,F,W,H)=>{if(P!==F){if(P!==it)for(const V in P)!Fr(V)&&!(V in F)&&s(v,V,P[V],null,H,W);for(const V in F){if(Fr(V))continue;const oe=F[V],Z=P[V];oe!==Z&&V!=="value"&&s(v,V,Z,oe,H,W)}"value"in F&&s(v,"value",P.value,F.value,H)}},G=(v,P,F,W,H,V,oe,Z,ne)=>{const ee=P.el=v?v.el:o(""),Se=P.anchor=v?v.anchor:o("");let{patchFlag:y,dynamicChildren:S,slotScopeIds:I}=P;I&&(Z=Z?Z.concat(I):I),v==null?(i(ee,F,W),i(Se,F,W),O(P.children||[],F,Se,H,V,oe,Z,ne)):y>0&&y&64&&S&&v.dynamicChildren&&v.dynamicChildren.length===S.length?(_(v.dynamicChildren,S,F,H,V,oe,Z),(P.key!=null||H&&P===H.subTree)&&Uh(v,P,!0)):Y(v,P,F,Se,H,V,oe,Z,ne)},q=(v,P,F,W,H,V,oe,Z,ne)=>{P.slotScopeIds=Z,v==null?P.shapeFlag&512?H.ctx.activate(P,F,W,oe,ne):A(P,F,W,H,V,oe,ne):B(v,P,ne)},A=(v,P,F,W,H,V,oe)=>{const Z=v.component=Dm(v,W,H);if(ph(v)&&(Z.ctx.renderer=Le),Um(Z,!1,oe),Z.asyncDep){if(H&&H.registerDep(Z,N,oe),!v.el){const ne=Z.subTree=en(li);d(null,ne,P,F),v.placeholder=ne.el}}else N(Z,v,P,F,H,V,oe)},B=(v,P,F)=>{const W=P.component=v.component;if(dm(v,P,F))if(W.asyncDep&&!W.asyncResolved){X(W,P,F);return}else W.next=P,W.update();else P.el=v.el,W.vnode=P},N=(v,P,F,W,H,V,oe)=>{const Z=()=>{if(v.isMounted){let{next:y,bu:S,u:I,parent:re,vnode:te}=v;{const we=Ih(v);if(we){y&&(y.el=te.el,X(v,y,oe)),we.asyncDep.then(()=>{kt(()=>{v.isUnmounted||ee()},H)});return}}let se=y,pe;mi(v,!1),y?(y.el=te.el,X(v,y,oe)):y=te,S&&zs(S),(pe=y.props&&y.props.onVnodeBeforeUpdate)&&pn(pe,re,y,te),mi(v,!0);const fe=il(v),ge=v.subTree;v.subTree=fe,x(ge,fe,f(ge.el),ye(ge),v,H,V),y.el=fe.el,se===null&&pm(v,fe.el),I&&kt(I,H),(pe=y.props&&y.props.onVnodeUpdated)&&kt(()=>pn(pe,re,y,te),H)}else{let y;const{el:S,props:I}=P,{bm:re,m:te,parent:se,root:pe,type:fe}=v,ge=Br(P);mi(v,!1),re&&zs(re),!ge&&(y=I&&I.onVnodeBeforeMount)&&pn(y,se,P),mi(v,!0);{pe.ce&&pe.ce._hasShadowRoot()&&pe.ce._injectChildStyle(fe,v.parent?v.parent.type:void 0);const we=v.subTree=il(v);x(null,we,F,W,v,H,V),P.el=we.el}if(te&&kt(te,H),!ge&&(y=I&&I.onVnodeMounted)){const we=P;kt(()=>pn(y,se,we),H)}(P.shapeFlag&256||se&&Br(se.vnode)&&se.vnode.shapeFlag&256)&&v.a&&kt(v.a,H),v.isMounted=!0,P=F=W=null}};v.scope.on();const ne=v.effect=new Vf(Z);v.scope.off();const ee=v.update=ne.run.bind(ne),Se=v.job=ne.runIfDirty.bind(ne);Se.i=v,Se.id=v.uid,ne.scheduler=()=>Sc(Se),mi(v,!0),ee()},X=(v,P,F)=>{P.component=v;const W=v.vnode.props;v.vnode=P,v.next=null,gm(v,P.props,W,F),bm(v,P.children,F),Hn(),$c(v),Gn()},Y=(v,P,F,W,H,V,oe,Z,ne=!1)=>{const ee=v&&v.children,Se=v?v.shapeFlag:0,y=P.children,{patchFlag:S,shapeFlag:I}=P;if(S>0){if(S&128){j(ee,y,F,W,H,V,oe,Z,ne);return}else if(S&256){ie(ee,y,F,W,H,V,oe,Z,ne);return}}I&8?(Se&16&&xe(ee,H,V),y!==ee&&u(F,y)):Se&16?I&16?j(ee,y,F,W,H,V,oe,Z,ne):xe(ee,H,V,!0):(Se&8&&u(F,""),I&16&&O(y,F,W,H,V,oe,Z,ne))},ie=(v,P,F,W,H,V,oe,Z,ne)=>{v=v||ir,P=P||ir;const ee=v.length,Se=P.length,y=Math.min(ee,Se);let S;for(S=0;S<y;S++){const I=P[S]=ne?In(P[S]):_n(P[S]);x(v[S],I,F,null,H,V,oe,Z,ne)}ee>Se?xe(v,H,V,!0,!1,y):O(P,F,W,H,V,oe,Z,ne,y)},j=(v,P,F,W,H,V,oe,Z,ne)=>{let ee=0;const Se=P.length;let y=v.length-1,S=Se-1;for(;ee<=y&&ee<=S;){const I=v[ee],re=P[ee]=ne?In(P[ee]):_n(P[ee]);if(Ar(I,re))x(I,re,F,null,H,V,oe,Z,ne);else break;ee++}for(;ee<=y&&ee<=S;){const I=v[y],re=P[S]=ne?In(P[S]):_n(P[S]);if(Ar(I,re))x(I,re,F,null,H,V,oe,Z,ne);else break;y--,S--}if(ee>y){if(ee<=S){const I=S+1,re=I<Se?P[I].el:W;for(;ee<=S;)x(null,P[ee]=ne?In(P[ee]):_n(P[ee]),F,re,H,V,oe,Z,ne),ee++}}else if(ee>S)for(;ee<=y;)z(v[ee],H,V,!0),ee++;else{const I=ee,re=ee,te=new Map;for(ee=re;ee<=S;ee++){const Be=P[ee]=ne?In(P[ee]):_n(P[ee]);Be.key!=null&&te.set(Be.key,ee)}let se,pe=0;const fe=S-re+1;let ge=!1,we=0;const Fe=new Array(fe);for(ee=0;ee<fe;ee++)Fe[ee]=0;for(ee=I;ee<=y;ee++){const Be=v[ee];if(pe>=fe){z(Be,H,V,!0);continue}let Pe;if(Be.key!=null)Pe=te.get(Be.key);else for(se=re;se<=S;se++)if(Fe[se-re]===0&&Ar(Be,P[se])){Pe=se;break}Pe===void 0?z(Be,H,V,!0):(Fe[Pe-re]=ee+1,Pe>=we?we=Pe:ge=!0,x(Be,P[Pe],F,null,H,V,oe,Z,ne),pe++)}const de=ge?Mm(Fe):ir;for(se=de.length-1,ee=fe-1;ee>=0;ee--){const Be=re+ee,Pe=P[Be],Ne=P[Be+1],Ue=Be+1<Se?Ne.el||Fh(Ne):W;Fe[ee]===0?x(null,Pe,F,Ue,H,V,oe,Z,ne):ge&&(se<0||ee!==de[se]?k(Pe,F,Ue,2):se--)}}},k=(v,P,F,W,H=null)=>{const{el:V,type:oe,transition:Z,children:ne,shapeFlag:ee}=v;if(ee&6){k(v.component.subTree,P,F,W);return}if(ee&128){v.suspense.move(P,F,W);return}if(ee&64){oe.move(v,P,F,Le);return}if(oe===Kt){i(V,P,F);for(let y=0;y<ne.length;y++)k(ne[y],P,F,W);i(v.anchor,P,F);return}if(oe===Gs){E(v,P,F);return}if(W!==2&&ee&1&&Z)if(W===0)Z.persisted&&!V[Wo]?i(V,P,F):(Z.beforeEnter(V),i(V,P,F),kt(()=>Z.enter(V),H));else{const{leave:y,delayLeave:S,afterLeave:I}=Z,re=()=>{v.ctx.isUnmounted?r(V):i(V,P,F)},te=()=>{const se=V._isLeaving||!!V[Wo];V._isLeaving&&V[Wo](!0),Z.persisted&&!se?re():y(V,()=>{re(),I&&I()})};S?S(V,re,te):te()}else i(V,P,F)},z=(v,P,F,W=!1,H=!1)=>{const{type:V,props:oe,ref:Z,children:ne,dynamicChildren:ee,shapeFlag:Se,patchFlag:y,dirs:S,cacheIndex:I,memo:re}=v;if(y===-2&&(H=!1),Z!=null&&(Hn(),kr(Z,null,F,v,!0),Gn()),I!=null&&(P.renderCache[I]=void 0),Se&256){P.ctx.deactivate(v);return}const te=Se&1&&S,se=!Br(v);let pe;if(se&&(pe=oe&&oe.onVnodeBeforeUnmount)&&pn(pe,P,v),Se&6)ve(v.component,F,W);else{if(Se&128){v.suspense.unmount(F,W);return}te&&pi(v,null,P,"beforeUnmount"),Se&64?v.type.remove(v,P,F,Le,W):ee&&!ee.hasOnce&&(V!==Kt||y>0&&y&64)?xe(ee,P,F,!1,!0):(V===Kt&&y&384||!H&&Se&16)&&xe(ne,P,F),W&&ue(v)}const fe=re!=null&&I==null;(se&&(pe=oe&&oe.onVnodeUnmounted)||te||fe)&&kt(()=>{pe&&pn(pe,P,v),te&&pi(v,null,P,"unmounted"),fe&&(v.el=null)},F)},ue=v=>{const{type:P,el:F,anchor:W,transition:H}=v;if(P===Kt){le(F,W);return}if(P===Gs){T(v);return}const V=()=>{r(F),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(v.shapeFlag&1&&H&&!H.persisted){const{leave:oe,delayLeave:Z}=H,ne=()=>oe(F,V);Z?Z(v.el,V,ne):ne()}else V()},le=(v,P)=>{let F;for(;v!==P;)F=h(v),r(v),v=F;r(P)},ve=(v,P,F)=>{const{bum:W,scope:H,job:V,subTree:oe,um:Z,m:ne,a:ee}=v;ol(ne),ol(ee),W&&zs(W),H.stop(),V&&(V.flags|=8,z(oe,v,P,F)),Z&&kt(Z,P),kt(()=>{v.isUnmounted=!0},P)},xe=(v,P,F,W=!1,H=!1,V=0)=>{for(let oe=V;oe<v.length;oe++)z(v[oe],P,F,W,H)},ye=v=>{if(v.shapeFlag&6)return ye(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const P=h(v.anchor||v.el),F=P&&P[Bp];return F?h(F):P};let Ae=!1;const Me=(v,P,F)=>{let W;v==null?P._vnode&&(z(P._vnode,null,null,!0),W=P._vnode.component):x(P._vnode||null,v,P,null,null,null,F),P._vnode=v,Ae||(Ae=!0,$c(W),ch(),Ae=!1)},Le={p:x,um:z,m:k,r:ue,mt:A,mc:O,pc:Y,pbc:_,n:ye,o:n};return{render:Me,hydrate:void 0,createApp:am(Me)}}function jo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function mi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ym(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Uh(n,e,t=!1){const i=n.children,r=e.children;if(ke(i)&&ke(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=In(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Uh(a,o)),o.type===xo&&(o.patchFlag===-1&&(o=r[s]=In(o)),o.el=a.el),o.type===li&&!o.el&&(o.el=a.el)}}function Mm(n){const e=n.slice(),t=[0];let i,r,s,a,o;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<l?s=o+1:a=o;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Ih(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ih(e)}function ol(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Fh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Fh(e.subTree):null}const Nh=n=>n.__isSuspense;function Tm(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):Up(n)}const Kt=Symbol.for("v-fgt"),xo=Symbol.for("v-txt"),li=Symbol.for("v-cmt"),Gs=Symbol.for("v-stc"),Ri=[];let Wt=null;function at(n=!1){Ri.push(Wt=n?null:[])}function Oh(){Ri.pop(),Wt=Ri[Ri.length-1]||null}let $r=1;function al(n,e=!1){$r+=n,n<0&&Wt&&e&&(Wt.hasOnce=!0)}function kh(n){return n.dynamicChildren=$r>0?Wt||ir:null,Oh(),$r>0&&Wt&&Wt.push(n),n}function ut(n,e,t,i,r,s){return kh(K(n,e,t,i,r,s,!0))}function Bh(n,e,t,i,r){return kh(en(n,e,t,i,r,!0))}function zh(n){return n?n.__v_isVNode===!0:!1}function Ar(n,e){return n.type===e.type&&n.key===e.key}const Hh=({key:n})=>n??null,Vs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ct(n)||Nt(n)||Ge(n)?{i:qt,r:n,k:e,f:!!t}:n:null);function K(n,e=null,t=null,i=0,r=null,s=n===Kt?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Hh(e),ref:e&&Vs(e),scopeId:uh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qt};return o?(Ks(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=ct(t)?8:16),$r>0&&!a&&Wt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Wt.push(c),c}const en=Am;function Am(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===vh)&&(n=li),zh(n)){const o=hr(n,e,!0);return t&&Ks(o,t),$r>0&&!s&&Wt&&(o.shapeFlag&6?Wt[Wt.indexOf(n)]=o:Wt.push(o)),o.patchFlag=-2,o}if(km(n)&&(n=n.__vccOpts),e){e=wm(e);let{class:o,style:c}=e;o&&!ct(o)&&(e.class=sr(o)),nt(c)&&(bc(c)&&!ke(c)&&(c=wt({},c)),e.style=qr(c))}const a=ct(n)?1:Nh(n)?128:zp(n)?64:nt(n)?4:Ge(n)?2:0;return K(n,e,t,i,r,a,s,!0)}function wm(n){return n?bc(n)||wh(n)?wt({},n):n:null}function hr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:c}=n,l=e?Cm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Hh(l),ref:e&&e.ref?t&&s?ke(s)?s.concat(Vs(e)):[s,Vs(e)]:Vs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Kt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&hr(n.ssContent),ssFallback:n.ssFallback&&hr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Ec(u,c.clone(u)),u}function ei(n=" ",e=0){return en(xo,null,n,e)}function Gh(n,e){const t=en(Gs,null,n);return t.staticCount=e,t}function ri(n="",e=!1){return e?(at(),Bh(li,null,n)):en(li,null,n)}function _n(n){return n==null||typeof n=="boolean"?en(li):ke(n)?en(Kt,null,n.slice()):zh(n)?In(n):en(xo,null,String(n))}function In(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:hr(n)}function Ks(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ks(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!wh(e)?e._ctx=qt:r===3&&qt&&(qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ge(e)){if(i&65){Ks(n,{default:e});return}e={default:e,_ctx:qt},t=32}else e=String(e),i&64?(t=16,e=[ei(e)]):t=8;n.children=e,n.shapeFlag|=t}function Cm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=sr([e.class,i.class]));else if(r==="style")e.style=qr([e.style,i.style]);else if(ao(r)){const s=e[r],a=i[r];a&&s!==a&&!(ke(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!co(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function pn(n,e,t,i=null){fn(n,e,7,[t,i])}const Rm=Eh();let Lm=0;function Dm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Rm,s={uid:Lm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rh(i,r),emitsOptions:yh(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=lm.bind(null,s),n.ce&&n.ce(s),s}let At=null;const Pm=()=>At||qt;let Zs,Ja;{const n=po(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Zs=e("__VUE_INSTANCE_SETTERS__",t=>At=t),Ja=e("__VUE_SSR_SETTERS__",t=>Yr=t)}const ts=n=>{const e=At;return Zs(n),n.scope.on(),()=>{n.scope.off(),Zs(e)}},cl=()=>{At&&At.scope.off(),Zs(null)};function Vh(n){return n.vnode.shapeFlag&4}let Yr=!1;function Um(n,e=!1,t=!1){e&&Ja(e);const{props:i,children:r}=n.vnode,s=Vh(n);mm(n,i,s,e),xm(n,r,t||e);const a=s?Im(n,e):void 0;return e&&Ja(!1),a}function Im(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,em);const{setup:i}=t;if(i){Hn();const r=n.setupContext=i.length>1?Nm(n):null,s=ts(n),a=es(i,n,0,[n.props,r]),o=Nf(a);if(Gn(),s(),(o||n.sp)&&!Br(n)&&dh(n),o){if(a.then(cl,cl),e)return a.then(c=>{ll(n,c)}).catch(c=>{go(c,n,0)});n.asyncDep=a}else ll(n,a)}else qh(n)}function ll(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:nt(e)&&(n.setupState=rh(e)),qh(n)}function qh(n,e,t){const i=n.type;n.render||(n.render=i.render||xn);{const r=ts(n);Hn();try{tm(n)}finally{Gn(),r()}}}const Fm={get(n,e){return Tt(n,"get",""),n[e]}};function Nm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Fm),slots:n.slots,emit:n.emit,expose:e}}function bo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(rh(Mp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zr)return zr[t](n)},has(e,t){return t in e||t in zr}})):n.proxy}function Om(n,e=!0){return Ge(n)?n.displayName||n.name:n.name||e&&n.__name}function km(n){return Ge(n)&&"__vccOpts"in n}const Bm=(n,e)=>Cp(n,e,Yr),zm="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qa;const ul=typeof window<"u"&&window.trustedTypes;if(ul)try{Qa=ul.createPolicy("vue",{createHTML:n=>n})}catch{}const Wh=Qa?n=>Qa.createHTML(n):n=>n,Hm="http://www.w3.org/2000/svg",Gm="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,fl=Pn&&Pn.createElement("template"),Vm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Pn.createElementNS(Hm,n):e==="mathml"?Pn.createElementNS(Gm,n):t?Pn.createElement(n,{is:t}):Pn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Pn.createTextNode(n),createComment:n=>Pn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Pn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{fl.innerHTML=Wh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=fl.content;if(i==="svg"||i==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},qm=Symbol("_vtc");function Wm(n,e,t){const i=n[qm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const hl=Symbol("_vod"),Xm=Symbol("_vsh"),jm=Symbol(""),$m=/(?:^|;)\s*display\s*:/;function Ym(n,e,t){const i=n.style,r=ct(t);let s=!1;if(t&&!r){if(e)if(ct(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ur(i,o,"")}else for(const a in e)t[a]==null&&Ur(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?Zm(n,a,!ct(e)&&e?e[a]:void 0,o)||Ur(i,a,o):Ur(i,a,"")}}else if(r){if(e!==t){const a=i[jm];a&&(t+=";"+a),i.cssText=t,s=$m.test(t)}}else e&&n.removeAttribute("style");hl in n&&(n[hl]=s?i.display:"",n[Xm]&&(i.display="none"))}const dl=/\s*!important$/;function Ur(n,e,t){if(ke(t))t.forEach(i=>Ur(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Km(n,e);dl.test(t)?n.setProperty(fi(i),t.replace(dl,""),"important"):n[i]=t}}const pl=["Webkit","Moz","ms"],$o={};function Km(n,e){const t=$o[e];if(t)return t;let i=Ft(e);if(i!=="filter"&&i in n)return $o[e]=i;i=fo(i);for(let r=0;r<pl.length;r++){const s=pl[r]+i;if(s in n)return $o[e]=s}return e}function Zm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ct(i)&&t===i}const ml="http://www.w3.org/1999/xlink";function gl(n,e,t,i,r,s=tp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ml,e.slice(6,e.length)):n.setAttributeNS(ml,e,t):t==null||s&&!zf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":bn(t)?String(t):t)}function _l(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Wh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(o!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=zf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Mi(n,e,t,i){n.addEventListener(e,t,i)}function Jm(n,e,t,i){n.removeEventListener(e,t,i)}const vl=Symbol("_vei");function Qm(n,e,t,i,r=null){const s=n[vl]||(n[vl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,c]=ng(e);if(i){const l=s[e]=sg(i,r);Mi(n,o,l,c)}else a&&(Jm(n,o,a,c),s[e]=void 0)}}const eg=/(Once|Passive|Capture)$/,tg=/^on:?(?:Once|Passive|Capture)$/;function ng(n){let e,t;for(;(t=n.match(eg))&&!tg.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):fi(n.slice(2)),e]}let Yo=0;const ig=Promise.resolve(),rg=()=>Yo||(ig.then(()=>Yo=0),Yo=Date.now());function sg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(ke(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let c=0;c<a.length&&!i._stopped;c++){const l=a[c];l&&fn(l,e,5,o)}}else fn(r,e,5,[i])};return t.value=n,t.attached=rg(),t}const xl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,og=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Wm(n,i,a):e==="style"?Ym(n,t,i):ao(e)?co(e)||Qm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ag(n,e,i,a))?(_l(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gl(n,e,i,a,s,e!=="value")):n._isVueCE&&(cg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!ct(i)))?_l(n,Ft(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),gl(n,e,i,a))};function ag(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&xl(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xl(e)&&ct(t)?!1:e in n}function cg(n,e){const t=n._def.props;if(!t)return!1;const i=Ft(e);return Array.isArray(t)?t.some(r=>Ft(r)===i):Object.keys(t).some(r=>Ft(r)===i)}const Js=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ke(e)?t=>zs(e,t):e};function lg(n){n.target.composing=!0}function bl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cr=Symbol("_assign");function Sl(n,e,t){return e&&(n=n.trim()),t&&(n=ho(n)),n}const Ko={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[cr]=Js(r);const s=i||r.props&&r.props.type==="number";Mi(n,e?"change":"input",a=>{a.target.composing||n[cr](Sl(n.value,t,s))}),(t||s)&&Mi(n,"change",()=>{n.value=Sl(n.value,t,s)}),e||(Mi(n,"compositionstart",lg),Mi(n,"compositionend",bl),Mi(n,"change",bl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[cr]=Js(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?ho(n.value):n.value,c=e??"";if(o===c)return;const l=n.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===c)||(n.value=c)}},El={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Mi(n,"change",()=>{const r=Array.prototype.filter.call(n.options,s=>s.selected).map(s=>t?ho(Qs(s)):Qs(s));n[cr](n.multiple?lo(n._modelValue)?new Set(r):r:r[0]),n._assigning=!0,oh(()=>{n._assigning=!1})}),n[cr]=Js(i)},mounted(n,{value:e}){yl(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[cr]=Js(t)},updated(n,{value:e}){n._assigning||yl(n,e)}};function yl(n,e){const t=n.multiple,i=ke(e);if(!(t&&!i&&!lo(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=Qs(a);if(t)if(i){const c=typeof o;c==="string"||c==="number"?a.selected=e.some(l=>String(l)===String(o)):a.selected=ip(e,o)>-1}else a.selected=e.has(o);else if(Qr(Qs(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Qs(n){return"_value"in n?n._value:n.value}const ug=["ctrl","shift","alt","meta"],fg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ug.some(t=>n[`${t}Key`]&&!e.includes(t))},Hr=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=fg[e[a]];if(o&&o(r,e))return}return n(r,...s)})},hg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dg=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=fi(r.key);if(e.some(a=>a===s||hg[a]===s))return n(r)})},pg=wt({patchProp:og},Vm);let Ml;function mg(){return Ml||(Ml=Sm(pg))}const gg=(...n)=>{const e=mg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vg(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,_g(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function _g(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vg(n){return ct(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="157",xg=0,Tl=1,bg=2,Xh=1,Sg=2,Dn=3,ui=0,zt=1,kn=2,si=0,lr=1,Al=2,wl=3,Cl=4,Eg=5,tr=100,yg=101,Mg=102,Rl=103,Ll=104,Tg=200,Ag=201,wg=202,Cg=203,jh=204,$h=205,Rg=206,Lg=207,Dg=208,Pg=209,Ug=210,Ig=0,Fg=1,Ng=2,ec=3,Og=4,kg=5,Bg=6,zg=7,Yh=0,Hg=1,Gg=2,oi=0,Vg=1,qg=2,Wg=3,Xg=4,jg=5,Kh=300,dr=301,pr=302,tc=303,nc=304,So=306,ic=1e3,on=1001,rc=1002,Ut=1003,Dl=1004,Zo=1005,Zt=1006,$g=1007,Kr=1008,ai=1009,Yg=1010,Kg=1011,wc=1012,Zh=1013,ti=1014,ni=1015,Zr=1016,Jh=1017,Qh=1018,Li=1020,Zg=1021,an=1023,Jg=1024,Qg=1025,Di=1026,mr=1027,e_=1028,ed=1029,t_=1030,td=1031,nd=1033,Jo=33776,Qo=33777,ea=33778,ta=33779,Pl=35840,Ul=35841,Il=35842,Fl=35843,n_=36196,Nl=37492,Ol=37496,kl=37808,Bl=37809,zl=37810,Hl=37811,Gl=37812,Vl=37813,ql=37814,Wl=37815,Xl=37816,jl=37817,$l=37818,Yl=37819,Kl=37820,Zl=37821,na=36492,Jl=36494,Ql=36495,i_=36283,eu=36284,tu=36285,nu=36286,id=3e3,Pi=3001,r_=3200,s_=3201,o_=0,a_=1,Qt="",St="srgb",qn="srgb-linear",Cc="display-p3",Eo="display-p3-linear",eo="linear",ot="srgb",to="rec709",no="p3",ia=7680,c_=519,l_=512,u_=513,f_=514,h_=515,d_=516,p_=517,m_=518,g_=519,iu=35044,ru="300 es",sc=1035,Bn=2e3,io=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,oc=180/Math.PI;function ns(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function __(n,e){return(n%e+e)%e}function sa(n,e,t){return(1-t)*n+t*e}function su(n){return(n&n-1)===0&&n!==0}function ac(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],b=i[8],x=r[0],m=r[3],d=r[6],M=r[1],E=r[4],T=r[7],C=r[2],R=r[5],L=r[8];return s[0]=a*x+o*M+c*C,s[3]=a*m+o*E+c*R,s[6]=a*d+o*T+c*L,s[1]=l*x+u*M+f*C,s[4]=l*m+u*E+f*R,s[7]=l*d+u*T+f*L,s[2]=h*x+p*M+b*C,s[5]=h*m+p*E+b*R,s[8]=h*d+p*T+b*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,p=l*s-a*c,b=t*f+i*h+r*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/b;return e[0]=f*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Xe;function rd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function v_(){const n=ro("canvas");return n.style.display="block",n}const ou={};function Gr(n){n in ou||(ou[n]=!0,console.warn(n))}const au=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cu=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ps={[qn]:{transfer:eo,primaries:to,toReference:n=>n,fromReference:n=>n},[St]:{transfer:ot,primaries:to,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Eo]:{transfer:eo,primaries:no,toReference:n=>n.applyMatrix3(cu),fromReference:n=>n.applyMatrix3(au)},[Cc]:{transfer:ot,primaries:no,toReference:n=>n.convertSRGBToLinear().applyMatrix3(cu),fromReference:n=>n.applyMatrix3(au).convertLinearToSRGB()}},x_=new Set([qn,Eo]),et={enabled:!0,_workingColorSpace:qn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!x_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ps[e].toReference,r=ps[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ps[n].primaries},getTransfer:function(n){return n===Qt?eo:ps[n].transfer}};function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Oi;class sd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=ro("canvas")),Oi.width=e.width,Oi.height=e.height;const i=Oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ro("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ur(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b_=0;class od{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=ns(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ca(r[a].image)):s.push(ca(r[a]))}else s=ca(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S_=0;class Xt extends _r{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=on,r=on,s=Zt,a=Kr,o=an,c=ai,l=Xt.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=ns(),this.name="",this.source=new od(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Pi?St:Qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ic:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ic:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Pi:id}set encoding(e){Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pi?St:Qt}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Kh;Xt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],b=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(b-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(b+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,T=(p+1)/2,C=(d+1)/2,R=(u+h)/4,L=(f+x)/4,O=(b+m)/4;return E>T&&E>C?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=R/i,s=L/i):T>C?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=O/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=O/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-b)*(m-b)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-b)/M,this.y=(f-x)/M,this.z=(h-u)/M,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E_ extends _r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pi?St:Qt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new od(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends E_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ad extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class y_ extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],b=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=b,e[t+3]=x;return}if(f!==x||c!==h||l!==p||u!==b){let m=1-o;const d=c*h+l*p+u*b+f*x,M=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const C=Math.sqrt(E),R=Math.atan2(C,d*M);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const T=o*M;if(c=c*m+h*T,l=l*m+p*T,u=u*m+b*T,f=f*m+x*T,m===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=C,l*=C,u*=C,f*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],b=s[a+3];return e[t]=o*b+u*f+c*p-l*h,e[t+1]=c*b+u*h+l*f-o*p,e[t+2]=l*b+u*p+o*h-c*f,e[t+3]=u*b-o*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),h=c(i/2),p=c(r/2),b=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*p*b,this._y=l*p*f-h*u*b,this._z=l*u*b+h*p*f,this._w=l*u*f-h*p*b;break;case"YXZ":this._x=h*u*f+l*p*b,this._y=l*p*f-h*u*b,this._z=l*u*b-h*p*f,this._w=l*u*f+h*p*b;break;case"ZXY":this._x=h*u*f-l*p*b,this._y=l*p*f+h*u*b,this._z=l*u*b+h*p*f,this._w=l*u*f-h*p*b;break;case"ZYX":this._x=h*u*f-l*p*b,this._y=l*p*f+h*u*b,this._z=l*u*b-h*p*f,this._w=l*u*f+h*p*b;break;case"YZX":this._x=h*u*f+l*p*b,this._y=l*p*f+h*u*b,this._z=l*u*b-h*p*f,this._w=l*u*f-h*p*b;break;case"XZY":this._x=h*u*f-l*p*b,this._y=l*p*f-h*u*b,this._z=l*u*b+h*p*f,this._w=l*u*f+h*p*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*r-o*i,u=c*i+o*t-s*r,f=c*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=l*c+h*-s+u*-o-f*-a,this.y=u*c+h*-a+f*-s-l*-o,this.z=f*c+h*-o+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new Q,lu=new is;class rs{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox),ki.applyMatrix4(e.matrixWorld),this.union(ki);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)An.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(An)}else r.boundingBox===null&&r.computeBoundingBox(),ki.copy(r.boundingBox),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),ms.subVectors(this.max,Cr),Bi.subVectors(e.a,Cr),zi.subVectors(e.b,Cr),Hi.subVectors(e.c,Cr),jn.subVectors(zi,Bi),$n.subVectors(Hi,zi),gi.subVectors(Bi,Hi);let t=[0,-jn.z,jn.y,0,-$n.z,$n.y,0,-gi.z,gi.y,jn.z,0,-jn.x,$n.z,0,-$n.x,gi.z,0,-gi.x,-jn.y,jn.x,0,-$n.y,$n.x,0,-gi.y,gi.x,0];return!ua(t,Bi,zi,Hi,ms)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Bi,zi,Hi,ms))?!1:(gs.crossVectors(jn,$n),t=[gs.x,gs.y,gs.z],ua(t,Bi,zi,Hi,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],An=new Q,ki=new rs,Bi=new Q,zi=new Q,Hi=new Q,jn=new Q,$n=new Q,gi=new Q,Cr=new Q,ms=new Q,gs=new Q,_i=new Q;function ua(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_i.fromArray(n,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),u=i.dot(_i);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const M_=new rs,Rr=new Q,fa=new Q;class yo{constructor(e=new Q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):M_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(fa)),this.expandByPoint(Rr.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new Q,ha=new Q,_s=new Q,Yn=new Q,da=new Q,vs=new Q,pa=new Q;class cd{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ha.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_s),o=Yn.dot(this.direction),c=-Yn.dot(_s),l=Yn.lengthSq(),u=Math.abs(1-a*a);let f,h,p,b;if(u>0)if(f=a*c-o,h=a*o-c,b=s*u,f>=0)if(h>=-b)if(h<=b){const x=1/u;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-b?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=b?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ha).addScaledVector(_s,h),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,r,s){da.subVectors(t,e),vs.subVectors(i,e),pa.crossVectors(da,vs);let a=this.direction.dot(pa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const c=o*this.direction.dot(vs.crossVectors(Yn,vs));if(c<0)return null;const l=o*this.direction.dot(da.cross(Yn));if(l<0||c+l>a)return null;const u=-o*Yn.dot(pa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,c,l,u,f,h,p,b,x,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,h,p,b,x,m)}set(e,t,i,r,s,a,o,c,l,u,f,h,p,b,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=b,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,b=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+b*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=b+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*f,b=l*u,x=l*f;t[0]=h+x*o,t[4]=b*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-b,t[6]=x+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*f,b=l*u,x=l*f;t[0]=h-x*o,t[4]=-a*f,t[8]=b+p*o,t[1]=p+b*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*f,b=o*u,x=o*f;t[0]=c*u,t[4]=b*l-p,t[8]=h*l+x,t[1]=c*f,t[5]=x*l+h,t[9]=p*l-b,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,b=o*c,x=o*l;t[0]=c*u,t[4]=x-h*f,t[8]=b*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+b,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*c,p=a*l,b=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+x,t[5]=a*u,t[9]=p*f-b,t[2]=b*f-p,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T_,e,A_)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Kn.crossVectors(i,Gt),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Kn.crossVectors(i,Gt)),Kn.normalize(),xs.crossVectors(Gt,Kn),r[0]=Kn.x,r[4]=xs.x,r[8]=Gt.x,r[1]=Kn.y,r[5]=xs.y,r[9]=Gt.y,r[2]=Kn.z,r[6]=xs.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],b=i[2],x=i[6],m=i[10],d=i[14],M=i[3],E=i[7],T=i[11],C=i[15],R=r[0],L=r[4],O=r[8],g=r[12],_=r[1],D=r[5],G=r[9],q=r[13],A=r[2],B=r[6],N=r[10],X=r[14],Y=r[3],ie=r[7],j=r[11],k=r[15];return s[0]=a*R+o*_+c*A+l*Y,s[4]=a*L+o*D+c*B+l*ie,s[8]=a*O+o*G+c*N+l*j,s[12]=a*g+o*q+c*X+l*k,s[1]=u*R+f*_+h*A+p*Y,s[5]=u*L+f*D+h*B+p*ie,s[9]=u*O+f*G+h*N+p*j,s[13]=u*g+f*q+h*X+p*k,s[2]=b*R+x*_+m*A+d*Y,s[6]=b*L+x*D+m*B+d*ie,s[10]=b*O+x*G+m*N+d*j,s[14]=b*g+x*q+m*X+d*k,s[3]=M*R+E*_+T*A+C*Y,s[7]=M*L+E*D+T*B+C*ie,s[11]=M*O+E*G+T*N+C*j,s[15]=M*g+E*q+T*X+C*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],b=e[3],x=e[7],m=e[11],d=e[15];return b*(+s*c*f-r*l*f-s*o*h+i*l*h+r*o*p-i*c*p)+x*(+t*c*p-t*l*h+s*a*h-r*a*p+r*l*u-s*c*u)+m*(+t*l*f-t*o*p-s*a*f+i*a*p+s*o*u-i*l*u)+d*(-r*o*u-t*c*f+t*o*h+r*a*f-i*a*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],b=e[12],x=e[13],m=e[14],d=e[15],M=f*m*l-x*h*l+x*c*p-o*m*p-f*c*d+o*h*d,E=b*h*l-u*m*l-b*c*p+a*m*p+u*c*d-a*h*d,T=u*x*l-b*f*l+b*o*p-a*x*p-u*o*d+a*f*d,C=b*f*c-u*x*c-b*o*h+a*x*h+u*o*m-a*f*m,R=t*M+i*E+r*T+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=M*L,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*L,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*d+i*c*d)*L,e[3]=(f*c*s-o*h*s-f*r*l+i*h*l+o*r*p-i*c*p)*L,e[4]=E*L,e[5]=(u*m*s-b*h*s+b*r*p-t*m*p-u*r*d+t*h*d)*L,e[6]=(b*c*s-a*m*s-b*r*l+t*m*l+a*r*d-t*c*d)*L,e[7]=(a*h*s-u*c*s+u*r*l-t*h*l-a*r*p+t*c*p)*L,e[8]=T*L,e[9]=(b*f*s-u*x*s-b*i*p+t*x*p+u*i*d-t*f*d)*L,e[10]=(a*x*s-b*o*s+b*i*l-t*x*l-a*i*d+t*o*d)*L,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*p-t*o*p)*L,e[12]=C*L,e[13]=(u*x*r-b*f*r+b*i*h-t*x*h-u*i*m+t*f*m)*L,e[14]=(b*o*r-a*x*r-b*i*c+t*x*c+a*i*m-t*o*m)*L,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*h+t*o*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,p=s*u,b=s*f,x=a*u,m=a*f,d=o*f,M=c*l,E=c*u,T=c*f,C=i.x,R=i.y,L=i.z;return r[0]=(1-(x+d))*C,r[1]=(p+T)*C,r[2]=(b-E)*C,r[3]=0,r[4]=(p-T)*R,r[5]=(1-(h+d))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(b+E)*L,r[9]=(m-M)*L,r[10]=(1-(h+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const a=Gi.set(r[4],r[5],r[6]).length(),o=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const l=1/s,u=1/a,f=1/o;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Bn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,b;if(o===Bn)p=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===io)p=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Bn){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*l,p=(i+r)*u;let b,x;if(o===Bn)b=(a+s)*f,x=-2*f;else if(o===io)b=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new Q,nn=new mt,T_=new Q(0,0,0),A_=new Q(1,1,1),Kn=new Q,xs=new Q,Gt=new Q,uu=new mt,fu=new is;class Mo{constructor(e=0,t=0,i=0,r=Mo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mo.DEFAULT_ORDER="XYZ";class ld{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w_=0;const hu=new Q,Vi=new is,Cn=new mt,bs=new Q,Lr=new Q,C_=new Q,R_=new is,du=new Q(1,0,0),pu=new Q(0,1,0),mu=new Q(0,0,1),L_={type:"added"},D_={type:"removed"};class Et extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new Q,t=new Mo,i=new is,r=new Q(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bs.copy(e):bs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Lr,bs,this.up):Cn.lookAt(bs,Lr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(L_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,C_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,R_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),b=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),b.length>0&&(i.nodes=b)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new Q(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new Q,Rn=new Q,ma=new Q,Ln=new Q,qi=new Q,Wi=new Q,gu=new Q,ga=new Q,_a=new Q,va=new Q;let Ss=!1;class sn{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),Rn.subVectors(i,t),ma.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Rn),c=rn.dot(ma),l=Rn.dot(Rn),u=Rn.dot(ma),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(l*c-o*u)*h,b=(a*u-o*c)*h;return s.set(1-p-b,b,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,i,r,s,a,o,c){return Ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ss=!0),this.getInterpolation(e,t,i,r,s,a,o,c)}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Ln),c.setScalar(0),c.addScaledVector(s,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),Rn.subVectors(e,t),rn.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),rn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ss=!0),sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;qi.subVectors(r,i),Wi.subVectors(s,i),ga.subVectors(e,i);const c=qi.dot(ga),l=Wi.dot(ga);if(c<=0&&l<=0)return t.copy(i);_a.subVectors(e,r);const u=qi.dot(_a),f=Wi.dot(_a);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(qi,a);va.subVectors(e,s);const p=qi.dot(va),b=Wi.dot(va);if(b>=0&&p<=b)return t.copy(s);const x=p*l-c*b;if(x<=0&&l>=0&&b<=0)return o=l/(l-b),t.copy(i).addScaledVector(Wi,o);const m=u*b-p*f;if(m<=0&&f-u>=0&&p-b>=0)return gu.subVectors(s,r),o=(f-u)/(f-u+(p-b)),t.copy(r).addScaledVector(gu,o);const d=1/(m+x+h);return a=x*d,o=h*d,t.copy(i).addScaledVector(qi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let P_=0;class ss extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=lr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=$h,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=__(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xa(a,s,e+1/3),this.g=xa(a,s,e),this.b=xa(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const i=ud[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return et.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Bt(Mt.r*255,0,255))*65536+Math.round(Bt(Mt.g*255,0,255))*256+Math.round(Bt(Mt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Mt.copy(this),t);const i=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=St){et.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,i=Mt.g,r=Mt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Es);const i=sa(Zn.h,Es.h,t),r=sa(Zn.s,Es.s,t),s=sa(Zn.l,Es.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new tt;tt.NAMES=ud;class fd extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new Q,ys=new Je;class un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=iu,this.updateRange={offset:0,count:-1},this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class hd extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dd extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zn extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let U_=0;const Yt=new mt,ba=new Et,Xi=new Q,Vt=new rs,Dr=new rs,vt=new Q;class Xn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rd(e)?dd:hd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Vt.min,Dr.min),Vt.expandByPoint(vt),vt.addVectors(Vt.max,Dr.max),Vt.expandByPoint(vt)):(Vt.expandByPoint(Dr.min),Vt.expandByPoint(Dr.max))}Vt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)vt.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(e,l),vt.add(Xi)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let _=0;_<o;_++)l[_]=new Q,u[_]=new Q;const f=new Q,h=new Q,p=new Q,b=new Je,x=new Je,m=new Je,d=new Q,M=new Q;function E(_,D,G){f.fromArray(r,_*3),h.fromArray(r,D*3),p.fromArray(r,G*3),b.fromArray(a,_*2),x.fromArray(a,D*2),m.fromArray(a,G*2),h.sub(f),p.sub(f),x.sub(b),m.sub(b);const q=1/(x.x*m.y-m.x*x.y);isFinite(q)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(q),M.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(q),l[_].add(d),l[D].add(d),l[G].add(d),u[_].add(M),u[D].add(M),u[G].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let _=0,D=T.length;_<D;++_){const G=T[_],q=G.start,A=G.count;for(let B=q,N=q+A;B<N;B+=3)E(i[B+0],i[B+1],i[B+2])}const C=new Q,R=new Q,L=new Q,O=new Q;function g(_){L.fromArray(s,_*3),O.copy(L);const D=l[_];C.copy(D),C.sub(L.multiplyScalar(L.dot(D))).normalize(),R.crossVectors(O,D);const q=R.dot(u[_])<0?-1:1;c[_*4]=C.x,c[_*4+1]=C.y,c[_*4+2]=C.z,c[_*4+3]=q}for(let _=0,D=T.length;_<D;++_){const G=T[_],q=G.start,A=G.count;for(let B=q,N=q+A;B<N;B+=3)g(i[B+0]),g(i[B+1]),g(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new Q,s=new Q,a=new Q,o=new Q,c=new Q,l=new Q,u=new Q,f=new Q;if(e)for(let h=0,p=e.count;h<p;h+=3){const b=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,b),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(b,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let p=0,b=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)h[b++]=l[p++]}return new un(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _u=new mt,vi=new cd,Ms=new yo,vu=new Q,ji=new Q,$i=new Q,Yi=new Q,Sa=new Q,Ts=new Q,As=new Je,ws=new Je,Cs=new Je,xu=new Q,bu=new Q,Su=new Q,Rs=new Q,Ls=new Q;class ii extends Et{constructor(e=new Xn,t=new fd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ts.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Sa.fromBufferAttribute(f,e),a?Ts.addScaledVector(Sa,u):Ts.addScaledVector(Sa.sub(t),u))}t.add(Ts)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(Ms.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Ms,vu)===null||vi.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(_u.copy(s).invert(),vi.copy(e.ray).applyMatrix4(_u),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,x=h.length;b<x;b++){const m=h[b],d=a[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=M,C=E;T<C;T+=3){const R=o.getX(T),L=o.getX(T+1),O=o.getX(T+2);r=Ds(this,d,e,i,l,u,f,R,L,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const b=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=b,d=x;m<d;m+=3){const M=o.getX(m),E=o.getX(m+1),T=o.getX(m+2);r=Ds(this,a,e,i,l,u,f,M,E,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,x=h.length;b<x;b++){const m=h[b],d=a[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=M,C=E;T<C;T+=3){const R=T,L=T+1,O=T+2;r=Ds(this,d,e,i,l,u,f,R,L,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const b=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=b,d=x;m<d;m+=3){const M=m,E=m+1,T=m+2;r=Ds(this,a,e,i,l,u,f,M,E,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function I_(n,e,t,i,r,s,a,o){let c;if(e.side===zt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===ui,o),c===null)return null;Ls.copy(o),Ls.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ls);return l<t.near||l>t.far?null:{distance:l,point:Ls.clone(),object:n}}function Ds(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,ji),n.getVertexPosition(c,$i),n.getVertexPosition(l,Yi);const u=I_(n,e,t,i,ji,$i,Yi,Rs);if(u){r&&(As.fromBufferAttribute(r,o),ws.fromBufferAttribute(r,c),Cs.fromBufferAttribute(r,l),u.uv=sn.getInterpolation(Rs,ji,$i,Yi,As,ws,Cs,new Je)),s&&(As.fromBufferAttribute(s,o),ws.fromBufferAttribute(s,c),Cs.fromBufferAttribute(s,l),u.uv1=sn.getInterpolation(Rs,ji,$i,Yi,As,ws,Cs,new Je),u.uv2=u.uv1),a&&(xu.fromBufferAttribute(a,o),bu.fromBufferAttribute(a,c),Su.fromBufferAttribute(a,l),u.normal=sn.getInterpolation(Rs,ji,$i,Yi,xu,bu,Su,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new Q,materialIndex:0};sn.getNormal(ji,$i,Yi,f.normal),u.face=f}return u}class os extends Xn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,p=0;b("z","y","x",-1,-1,i,t,e,a,s,0),b("z","y","x",1,-1,i,t,-e,a,s,1),b("x","z","y",1,1,e,i,t,r,a,2),b("x","z","y",1,-1,e,i,-t,r,a,3),b("x","y","z",1,-1,e,t,i,r,s,4),b("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new zn(l,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(f,2));function b(x,m,d,M,E,T,C,R,L,O,g){const _=T/L,D=C/O,G=T/2,q=C/2,A=R/2,B=L+1,N=O+1;let X=0,Y=0;const ie=new Q;for(let j=0;j<N;j++){const k=j*D-q;for(let z=0;z<B;z++){const ue=z*_-G;ie[x]=ue*M,ie[m]=k*E,ie[d]=A,l.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[d]=R>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(z/L),f.push(1-j/O),X+=1}}for(let j=0;j<O;j++)for(let k=0;k<L;k++){const z=h+k+B*j,ue=h+k+B*(j+1),le=h+(k+1)+B*(j+1),ve=h+(k+1)+B*j;c.push(z,ue,ve),c.push(ue,le,ve),Y+=6}o.addGroup(p,Y,g),p+=Y,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const r in i)e[r]=i[r]}return e}function F_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pd(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const N_={clone:gr,merge:Pt};var O_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O_,this.fragmentShader=k_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=F_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class md extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends md{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oc*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class B_ extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Ki,Zi,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Ki,Zi,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const c=new Jt(Ki,Zi,e,t);c.layers=this.layers,this.add(c);const l=new Jt(Ki,Zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class gd extends Xt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z_ extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Pi?St:Qt),this.texture=new gd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new os(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:si});s.uniforms.tEquirect.value=t;const a=new ii(r,s),o=t.minFilter;return t.minFilter===Kr&&(t.minFilter=Zt),new B_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ea=new Q,H_=new Q,G_=new Xe;class Ei{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ea.subVectors(i,t).cross(H_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ea),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||G_.getNormalMatrix(e),r=this.coplanarPoint(Ea).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new yo,Ps=new Q;class Rc{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,s=new Ei,a=new Ei){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],p=r[8],b=r[9],x=r[10],m=r[11],d=r[12],M=r[13],E=r[14],T=r[15];if(i[0].setComponents(c-s,h-l,m-p,T-d).normalize(),i[1].setComponents(c+s,h+l,m+p,T+d).normalize(),i[2].setComponents(c+a,h+u,m+b,T+M).normalize(),i[3].setComponents(c-a,h-u,m-b,T-M).normalize(),i[4].setComponents(c-o,h-f,m-x,T-E).normalize(),t===Bn)i[5].setComponents(c+o,h+f,m+x,T+E).normalize();else if(t===io)i[5].setComponents(o,f,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _d(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function V_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,h=l.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),l.onUploadCallback();let b;if(f instanceof Float32Array)b=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)b=n.SHORT;else if(f instanceof Uint32Array)b=n.UNSIGNED_INT;else if(f instanceof Int32Array)b=n.INT;else if(f instanceof Int8Array)b=n.BYTE;else if(f instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:b,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,l),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:a,remove:o,update:c}}class Lc extends Xn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=t/c,p=[],b=[],x=[],m=[];for(let d=0;d<u;d++){const M=d*h-a;for(let E=0;E<l;E++){const T=E*f-s;b.push(T,-M,0),x.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){const E=M+l*d,T=M+l*(d+1),C=M+1+l*(d+1),R=M+1+l*d;p.push(E,T,R),p.push(T,C,R)}this.setIndex(p),this.setAttribute("position",new zn(b,3)),this.setAttribute("normal",new zn(x,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,X_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ev=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",xv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ov=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Hv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$v=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,i0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Y0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tx=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ox=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:q_,alphahash_pars_fragment:W_,alphamap_fragment:X_,alphamap_pars_fragment:j_,alphatest_fragment:$_,alphatest_pars_fragment:Y_,aomap_fragment:K_,aomap_pars_fragment:Z_,begin_vertex:J_,beginnormal_vertex:Q_,bsdfs:ev,iridescence_fragment:tv,bumpmap_pars_fragment:nv,clipping_planes_fragment:iv,clipping_planes_pars_fragment:rv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:ov,color_fragment:av,color_pars_fragment:cv,color_pars_vertex:lv,color_vertex:uv,common:fv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:dv,displacementmap_pars_vertex:pv,displacementmap_vertex:mv,emissivemap_fragment:gv,emissivemap_pars_fragment:_v,colorspace_fragment:vv,colorspace_pars_fragment:xv,envmap_fragment:bv,envmap_common_pars_fragment:Sv,envmap_pars_fragment:Ev,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Fv,envmap_vertex:Mv,fog_vertex:Tv,fog_pars_vertex:Av,fog_fragment:wv,fog_pars_fragment:Cv,gradientmap_pars_fragment:Rv,lightmap_fragment:Lv,lightmap_pars_fragment:Dv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Uv,lights_pars_begin:Iv,lights_toon_fragment:Nv,lights_toon_pars_fragment:Ov,lights_phong_fragment:kv,lights_phong_pars_fragment:Bv,lights_physical_fragment:zv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Gv,lights_fragment_maps:Vv,lights_fragment_end:qv,logdepthbuf_fragment:Wv,logdepthbuf_pars_fragment:Xv,logdepthbuf_pars_vertex:jv,logdepthbuf_vertex:$v,map_fragment:Yv,map_pars_fragment:Kv,map_particle_fragment:Zv,map_particle_pars_fragment:Jv,metalnessmap_fragment:Qv,metalnessmap_pars_fragment:e0,morphcolor_vertex:t0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:r0,normal_fragment_begin:s0,normal_fragment_maps:o0,normal_pars_fragment:a0,normal_pars_vertex:c0,normal_vertex:l0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:_0,project_vertex:v0,dithering_fragment:x0,dithering_pars_fragment:b0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:M0,shadowmap_vertex:T0,shadowmask_pars_fragment:A0,skinbase_vertex:w0,skinning_pars_vertex:C0,skinning_vertex:R0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:P0,tonemapping_fragment:U0,tonemapping_pars_fragment:I0,transmission_fragment:F0,transmission_pars_fragment:N0,uv_pars_fragment:O0,uv_pars_vertex:k0,uv_vertex:B0,worldpos_vertex:z0,background_vert:H0,background_frag:G0,backgroundCube_vert:V0,backgroundCube_frag:q0,cube_vert:W0,cube_frag:X0,depth_vert:j0,depth_frag:$0,distanceRGBA_vert:Y0,distanceRGBA_frag:K0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:Q0,linedashed_frag:ex,meshbasic_vert:tx,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:rx,meshmatcap_vert:sx,meshmatcap_frag:ox,meshnormal_vert:ax,meshnormal_frag:cx,meshphong_vert:lx,meshphong_frag:ux,meshphysical_vert:fx,meshphysical_frag:hx,meshtoon_vert:dx,meshtoon_frag:px,points_vert:mx,points_frag:gx,shadow_vert:_x,shadow_frag:vx,sprite_vert:xx,sprite_frag:bx},be={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},vn={basic:{uniforms:Pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Pt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Pt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Pt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Pt([be.points,be.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Pt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Pt([be.common,be.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Pt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Pt([be.sprite,be.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Pt([be.common,be.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Pt([be.lights,be.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};vn.physical={uniforms:Pt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Us={r:0,b:0,g:0};function Sx(n,e,t,i,r,s,a){const o=new tt(0);let c=s===!0?0:1,l,u,f=null,h=0,p=null;function b(m,d){let M=!1,E=d.isScene===!0?d.background:null;E&&E.isTexture&&(E=(d.backgroundBlurriness>0?t:e).get(E)),E===null?x(o,c):E&&E.isColor&&(x(E,1),M=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===So)?(u===void 0&&(u=new ii(new os(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:gr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=et.getTransfer(E.colorSpace)!==ot,(f!==E||h!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ii(new Lc(2,2),new Ii({name:"BackgroundMaterial",uniforms:gr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=et.getTransfer(E.colorSpace)!==ot,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=E,h=E.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,d){m.getRGB(Us,pd(n)),i.buffers.color.setClear(Us.r,Us.g,Us.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:b}}function Ex(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null);let l=c,u=!1;function f(A,B,N,X,Y){let ie=!1;if(a){const j=x(X,N,B);l!==j&&(l=j,p(l.object)),ie=d(A,X,N,Y),ie&&M(A,X,N,Y)}else{const j=B.wireframe===!0;(l.geometry!==X.id||l.program!==N.id||l.wireframe!==j)&&(l.geometry=X.id,l.program=N.id,l.wireframe=j,ie=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,O(A,B,N,X),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(A){return i.isWebGL2?n.bindVertexArray(A):s.bindVertexArrayOES(A)}function b(A){return i.isWebGL2?n.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function x(A,B,N){const X=N.wireframe===!0;let Y=o[A.id];Y===void 0&&(Y={},o[A.id]=Y);let ie=Y[B.id];ie===void 0&&(ie={},Y[B.id]=ie);let j=ie[X];return j===void 0&&(j=m(h()),ie[X]=j),j}function m(A){const B=[],N=[],X=[];for(let Y=0;Y<r;Y++)B[Y]=0,N[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:N,attributeDivisors:X,object:A,attributes:{},index:null}}function d(A,B,N,X){const Y=l.attributes,ie=B.attributes;let j=0;const k=N.getAttributes();for(const z in k)if(k[z].location>=0){const le=Y[z];let ve=ie[z];if(ve===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;j++}return l.attributesNum!==j||l.index!==X}function M(A,B,N,X){const Y={},ie=B.attributes;let j=0;const k=N.getAttributes();for(const z in k)if(k[z].location>=0){let le=ie[z];le===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(le=A.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),Y[z]=ve,j++}l.attributes=Y,l.attributesNum=j,l.index=X}function E(){const A=l.newAttributes;for(let B=0,N=A.length;B<N;B++)A[B]=0}function T(A){C(A,0)}function C(A,B){const N=l.newAttributes,X=l.enabledAttributes,Y=l.attributeDivisors;N[A]=1,X[A]===0&&(n.enableVertexAttribArray(A),X[A]=1),Y[A]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,B),Y[A]=B)}function R(){const A=l.newAttributes,B=l.enabledAttributes;for(let N=0,X=B.length;N<X;N++)B[N]!==A[N]&&(n.disableVertexAttribArray(N),B[N]=0)}function L(A,B,N,X,Y,ie,j){j===!0?n.vertexAttribIPointer(A,B,N,Y,ie):n.vertexAttribPointer(A,B,N,X,Y,ie)}function O(A,B,N,X){if(i.isWebGL2===!1&&(A.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const Y=X.attributes,ie=N.getAttributes(),j=B.defaultAttributeValues;for(const k in ie){const z=ie[k];if(z.location>=0){let ue=Y[k];if(ue===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ue!==void 0){const le=ue.normalized,ve=ue.itemSize,xe=t.get(ue);if(xe===void 0)continue;const ye=xe.buffer,Ae=xe.type,Me=xe.bytesPerElement,Le=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||ue.gpuType===Zh);if(ue.isInterleavedBufferAttribute){const Re=ue.data,v=Re.stride,P=ue.offset;if(Re.isInstancedInterleavedBuffer){for(let F=0;F<z.locationSize;F++)C(z.location+F,Re.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let F=0;F<z.locationSize;F++)T(z.location+F);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let F=0;F<z.locationSize;F++)L(z.location+F,ve/z.locationSize,Ae,le,v*Me,(P+ve/z.locationSize*F)*Me,Le)}else{if(ue.isInstancedBufferAttribute){for(let Re=0;Re<z.locationSize;Re++)C(z.location+Re,ue.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Re=0;Re<z.locationSize;Re++)T(z.location+Re);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Re=0;Re<z.locationSize;Re++)L(z.location+Re,ve/z.locationSize,Ae,le,ve*Me,ve/z.locationSize*Re*Me,Le)}}else if(j!==void 0){const le=j[k];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(z.location,le);break;case 3:n.vertexAttrib3fv(z.location,le);break;case 4:n.vertexAttrib4fv(z.location,le);break;default:n.vertexAttrib1fv(z.location,le)}}}}R()}function g(){G();for(const A in o){const B=o[A];for(const N in B){const X=B[N];for(const Y in X)b(X[Y].object),delete X[Y];delete B[N]}delete o[A]}}function _(A){if(o[A.id]===void 0)return;const B=o[A.id];for(const N in B){const X=B[N];for(const Y in X)b(X[Y].object),delete X[Y];delete B[N]}delete o[A.id]}function D(A){for(const B in o){const N=o[B];if(N[A.id]===void 0)continue;const X=N[A.id];for(const Y in X)b(X[Y].object),delete X[Y];delete N[A.id]}}function G(){q(),u=!0,l!==c&&(l=c,p(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:G,resetDefaultState:q,dispose:g,releaseStatesOfGeometry:_,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:T,disableUnusedAttributes:R}}function yx(n,e,t,i){const r=i.isWebGL2;let s;function a(l){s=l}function o(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,l,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function Mx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),b=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,T=a||e.has("OES_texture_float"),C=E&&T,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:E,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:R}}function Tx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ei,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const b=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||b===null||b.length===0||s&&!m)s?u(null):l();else{const M=s?0:i,E=M*4;let T=d.clippingState||null;c.value=T,T=u(b,h,E,p);for(let C=0;C!==E;++C)T[C]=t[C];d.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,b){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,b!==!0||m===null){const d=p+x*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,T=p;E!==x;++E,T+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ax(n){let e=new WeakMap;function t(a,o){return o===tc?a.mapping=dr:o===nc&&(a.mapping=pr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===tc||o===nc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new z_(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class vd extends md{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nr=4,Eu=[.125,.215,.35,.446,.526,.582],Ti=20,ya=new vd,yu=new tt;let Ma=null;const yi=(1+Math.sqrt(5))/2,Ji=1/yi,Mu=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,yi,Ji),new Q(0,yi,-Ji),new Q(Ji,0,yi),new Q(-Ji,0,yi),new Q(yi,Ji,0),new Q(-yi,Ji,0)];class Tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ma=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma),e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Zr,format:an,colorSpace:qn,depthBuffer:!1},r=Au(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wx(s)),this._blurMaterial=Cx(s,e,t)}return r}_compileMaterial(e){const t=new ii(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,i,r){const o=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(yu),u.toneMapping=oi,u.autoClear=!1;const p=new fd({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),b=new ii(new os,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(yu),x=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):M===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const E=this._cubeSize;Is(r,M*E,d>2?E:0,E,E),u.setRenderTarget(r),x&&u.render(b,o),u.render(e,o)}b.geometry.dispose(),b.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===dr||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ii(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Is(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mu[(r-1)%Mu.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ii(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,b=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),x=s/b,m=isFinite(s)?1+Math.floor(u*x):Ti;m>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const d=[];let M=0;for(let L=0;L<Ti;++L){const O=L/x,g=Math.exp(-O*O/2);d.push(g),L===0?M+=g:L<m&&(M+=2*g)}for(let L=0;L<d.length;L++)d[L]=d[L]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=b,h.mipInt.value=E-i;const T=this._sizeLods[r],C=3*T*(r>E-nr?r-E+nr:0),R=4*(this._cubeSize-T);Is(t,C,R,3*T,2*T),c.setRenderTarget(t),c.render(f,ya)}}function wx(n){const e=[],t=[],i=[];let r=n;const s=n-nr+1+Eu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-nr?c=Eu[a-n+nr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,b=6,x=3,m=2,d=1,M=new Float32Array(x*b*p),E=new Float32Array(m*b*p),T=new Float32Array(d*b*p);for(let R=0;R<p;R++){const L=R%3*2/3-1,O=R>2?0:-1,g=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];M.set(g,x*b*R),E.set(h,m*b*R);const _=[R,R,R,R,R,R];T.set(_,d*b*R)}const C=new Xn;C.setAttribute("position",new un(M,x)),C.setAttribute("uv",new un(E,m)),C.setAttribute("faceIndex",new un(T,d)),e.push(C),r>nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Au(n,e,t){const i=new Ui(n,e,t);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Cx(n,e,t){const i=new Float32Array(Ti),r=new Q(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function wu(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Cu(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===tc||c===nc,u=c===dr||c===pr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Tu(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Tu(n));const h=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Lx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Dx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const b in h.attributes)e.remove(h.attributes[b]);for(const b in h.morphAttributes){const x=h.morphAttributes[b];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const b in h)e.update(h[b],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const b in p){const x=p[b];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function l(f){const h=[],p=f.index,b=f.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let E=0,T=M.length;E<T;E+=3){const C=M[E+0],R=M[E+1],L=M[E+2];h.push(C,R,R,L,L,C)}}else if(b!==void 0){const M=b.array;x=b.version;for(let E=0,T=M.length/3-1;E<T;E+=3){const C=E+0,R=E+1,L=E+2;h.push(C,R,R,L,L,C)}}else return;const m=new(rd(h)?dd:hd)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Px(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,c;function l(h){o=h.type,c=h.bytesPerElement}function u(h,p){n.drawElements(s,p,o,h*c),t.update(p,s,1)}function f(h,p,b){if(b===0)return;let x,m;if(r)x=n,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](s,p,o,h*c,b),t.update(p,s,b)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f}function Ux(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ix(n,e){return n[0]-e[0]}function Fx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Nx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new xt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const b=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=b!==void 0?b.length:0;let m=s.get(u);if(m===void 0||m.count!==x){let B=function(){q.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const E=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let g=0;E===!0&&(g=1),T===!0&&(g=2),C===!0&&(g=3);let _=u.attributes.position.count*g,D=1;_>e.maxTextureSize&&(D=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const G=new Float32Array(_*D*4*x),q=new ad(G,_,D,x);q.type=ni,q.needsUpdate=!0;const A=g*4;for(let N=0;N<x;N++){const X=R[N],Y=L[N],ie=O[N],j=_*D*4*N;for(let k=0;k<X.count;k++){const z=k*A;E===!0&&(a.fromBufferAttribute(X,k),G[j+z+0]=a.x,G[j+z+1]=a.y,G[j+z+2]=a.z,G[j+z+3]=0),T===!0&&(a.fromBufferAttribute(Y,k),G[j+z+4]=a.x,G[j+z+5]=a.y,G[j+z+6]=a.z,G[j+z+7]=0),C===!0&&(a.fromBufferAttribute(ie,k),G[j+z+8]=a.x,G[j+z+9]=a.y,G[j+z+10]=a.z,G[j+z+11]=ie.itemSize===4?a.w:1)}}m={count:x,texture:q,size:new Je(_,D)},s.set(u,m),u.addEventListener("dispose",B)}let d=0;for(let E=0;E<h.length;E++)d+=h[E];const M=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const b=h===void 0?0:h.length;let x=i[u.id];if(x===void 0||x.length!==b){x=[];for(let T=0;T<b;T++)x[T]=[T,0];i[u.id]=x}for(let T=0;T<b;T++){const C=x[T];C[0]=T,C[1]=h[T]}x.sort(Fx);for(let T=0;T<8;T++)T<b&&x[T][1]?(o[T][0]=x[T][0],o[T][1]=x[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(Ix);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let M=0;for(let T=0;T<8;T++){const C=o[T],R=C[0],L=C[1];R!==Number.MAX_SAFE_INTEGER&&L?(m&&u.getAttribute("morphTarget"+T)!==m[R]&&u.setAttribute("morphTarget"+T,m[R]),d&&u.getAttribute("morphNormal"+T)!==d[R]&&u.setAttribute("morphNormal"+T,d[R]),r[T]=L,M+=L):(m&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),d&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const E=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Ox(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const xd=new Xt,bd=new ad,Sd=new y_,Ed=new gd,Ru=[],Lu=[],Du=new Float32Array(16),Pu=new Float32Array(9),Uu=new Float32Array(4);function vr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ru[r];if(s===void 0&&(s=new Float32Array(r),Ru[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function To(n,e){let t=Lu[e];t===void 0&&(t=new Int32Array(e),Lu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Uu.set(i),n.uniformMatrix2fv(this.addr,!1,Uu),_t(t,i)}}function Vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Pu.set(i),n.uniformMatrix3fv(this.addr,!1,Pu),_t(t,i)}}function qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Du.set(i),n.uniformMatrix4fv(this.addr,!1,Du),_t(t,i)}}function Wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function Yx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function Qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||xd,r)}function eb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sd,r)}function tb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ed,r)}function nb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bd,r)}function ib(n){switch(n){case 5126:return kx;case 35664:return Bx;case 35665:return zx;case 35666:return Hx;case 35674:return Gx;case 35675:return Vx;case 35676:return qx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return jx;case 35669:case 35673:return $x;case 5125:return Yx;case 36294:return Kx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function rb(n,e){n.uniform1fv(this.addr,e)}function sb(n,e){const t=vr(e,this.size,2);n.uniform2fv(this.addr,t)}function ob(n,e){const t=vr(e,this.size,3);n.uniform3fv(this.addr,t)}function ab(n,e){const t=vr(e,this.size,4);n.uniform4fv(this.addr,t)}function cb(n,e){const t=vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lb(n,e){const t=vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ub(n,e){const t=vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fb(n,e){n.uniform1iv(this.addr,e)}function hb(n,e){n.uniform2iv(this.addr,e)}function db(n,e){n.uniform3iv(this.addr,e)}function pb(n,e){n.uniform4iv(this.addr,e)}function mb(n,e){n.uniform1uiv(this.addr,e)}function gb(n,e){n.uniform2uiv(this.addr,e)}function _b(n,e){n.uniform3uiv(this.addr,e)}function vb(n,e){n.uniform4uiv(this.addr,e)}function xb(n,e,t){const i=this.cache,r=e.length,s=To(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||xd,s[a])}function bb(n,e,t){const i=this.cache,r=e.length,s=To(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Sd,s[a])}function Sb(n,e,t){const i=this.cache,r=e.length,s=To(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ed,s[a])}function Eb(n,e,t){const i=this.cache,r=e.length,s=To(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||bd,s[a])}function yb(n){switch(n){case 5126:return rb;case 35664:return sb;case 35665:return ob;case 35666:return ab;case 35674:return cb;case 35675:return lb;case 35676:return ub;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return db;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Eb}}class Mb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=ib(t.type)}}class Tb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=yb(t.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Iu(n,e){n.seq.push(e),n.map[e.id]=e}function wb(n,e,t){const i=n.name,r=i.length;for(Ta.lastIndex=0;;){const s=Ta.exec(i),a=Ta.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Iu(t,l===void 0?new Mb(o,n,e):new Tb(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Ab(o),Iu(t,f)),t=f}}}class qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);wb(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Cb=0;function Rb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Lb(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===no&&t===to?i="LinearDisplayP3ToLinearSRGB":e===to&&t===no&&(i="LinearSRGBToLinearDisplayP3"),n){case qn:case Eo:return[i,"LinearTransferOETF"];case St:case Cc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Nu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Rb(n.getShaderSource(e),a)}else return r}function Db(n,e){const t=Lb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pb(n,e){let t;switch(e){case Vg:t="Linear";break;case qg:t="Reinhard";break;case Wg:t="OptimizedCineon";break;case Xg:t="ACESFilmic";break;case jg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ub(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function Ib(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ir(n){return n!==""}function Ou(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ku(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(Nb,kb)}const Ob=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kb(n,e){let t=We[e];if(t===void 0){const i=Ob.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(n){return n.replace(Bb,zb)}function zb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function qb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yh:e="ENVMAP_BLENDING_MULTIPLY";break;case Hg:e="ENVMAP_BLENDING_MIX";break;case Gg:e="ENVMAP_BLENDING_ADD";break}return e}function Wb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Xb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Hb(t),l=Gb(t),u=Vb(t),f=qb(t),h=Wb(t),p=t.isWebGL2?"":Ub(t),b=Ib(s),x=r.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ir).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ir).join(`
`),d.length>0&&(d+=`
`)):(m=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),d=[p,zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?We.tonemapping_pars_fragment:"",t.toneMapping!==oi?Pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Db("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=cc(a),a=Ou(a,t),a=ku(a,t),o=cc(o),o=Ou(o,t),o=ku(o,t),a=Bu(a),o=Bu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=M+m+a,T=M+d+o,C=Fu(r,r.VERTEX_SHADER,E),R=Fu(r,r.FRAGMENT_SHADER,T);if(r.attachShader(x,C),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),n.debug.checkShaderErrors){const g=r.getProgramInfoLog(x).trim(),_=r.getShaderInfoLog(C).trim(),D=r.getShaderInfoLog(R).trim();let G=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,R);else{const A=Nu(r,C,"vertex"),B=Nu(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+g+`
`+A+`
`+B)}else g!==""?console.warn("THREE.WebGLProgram: Program Info Log:",g):(_===""||D==="")&&(q=!1);q&&(this.diagnostics={runnable:G,programLog:g,vertexShader:{log:_,prefix:m},fragmentShader:{log:D,prefix:d}})}r.deleteShader(C),r.deleteShader(R);let L;this.getUniforms=function(){return L===void 0&&(L=new qs(r,x)),L};let O;return this.getAttributes=function(){return O===void 0&&(O=Fb(r,x)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let jb=0;class $b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Yb(e),t.set(e,i)),i}}class Yb{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}}function Kb(n,e,t,i,r,s,a){const o=new ld,c=new $b,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return g===0?"uv":`uv${g}`}function m(g,_,D,G,q){const A=G.fog,B=q.geometry,N=g.isMeshStandardMaterial?G.environment:null,X=(g.isMeshStandardMaterial?t:e).get(g.envMap||N),Y=X&&X.mapping===So?X.image.height:null,ie=b[g.type];g.precision!==null&&(p=r.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,k=j!==void 0?j.length:0;let z=0;B.morphAttributes.position!==void 0&&(z=1),B.morphAttributes.normal!==void 0&&(z=2),B.morphAttributes.color!==void 0&&(z=3);let ue,le,ve,xe;if(ie){const st=vn[ie];ue=st.vertexShader,le=st.fragmentShader}else ue=g.vertexShader,le=g.fragmentShader,c.update(g),ve=c.getVertexShaderID(g),xe=c.getFragmentShaderID(g);const ye=n.getRenderTarget(),Ae=q.isInstancedMesh===!0,Me=!!g.map,Le=!!g.matcap,Re=!!X,v=!!g.aoMap,P=!!g.lightMap,F=!!g.bumpMap,W=!!g.normalMap,H=!!g.displacementMap,V=!!g.emissiveMap,oe=!!g.metalnessMap,Z=!!g.roughnessMap,ne=g.anisotropy>0,ee=g.clearcoat>0,Se=g.iridescence>0,y=g.sheen>0,S=g.transmission>0,I=ne&&!!g.anisotropyMap,re=ee&&!!g.clearcoatMap,te=ee&&!!g.clearcoatNormalMap,se=ee&&!!g.clearcoatRoughnessMap,pe=Se&&!!g.iridescenceMap,fe=Se&&!!g.iridescenceThicknessMap,ge=y&&!!g.sheenColorMap,we=y&&!!g.sheenRoughnessMap,Fe=!!g.specularMap,de=!!g.specularColorMap,Be=!!g.specularIntensityMap,Pe=S&&!!g.transmissionMap,Ne=S&&!!g.thicknessMap,Ue=!!g.gradientMap,U=!!g.alphaMap,_e=g.alphaTest>0,me=!!g.alphaHash,Te=!!g.extensions,Ee=!!B.attributes.uv1,he=!!B.attributes.uv2,De=!!B.attributes.uv3;let Ve=oi;return g.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ve=n.toneMapping),{isWebGL2:u,shaderID:ie,shaderType:g.type,shaderName:g.name,vertexShader:ue,fragmentShader:le,defines:g.defines,customVertexShaderID:ve,customFragmentShaderID:xe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,instancing:Ae,instancingColor:Ae&&q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:qn,map:Me,matcap:Le,envMap:Re,envMapMode:Re&&X.mapping,envMapCubeUVHeight:Y,aoMap:v,lightMap:P,bumpMap:F,normalMap:W,displacementMap:h&&H,emissiveMap:V,normalMapObjectSpace:W&&g.normalMapType===a_,normalMapTangentSpace:W&&g.normalMapType===o_,metalnessMap:oe,roughnessMap:Z,anisotropy:ne,anisotropyMap:I,clearcoat:ee,clearcoatMap:re,clearcoatNormalMap:te,clearcoatRoughnessMap:se,iridescence:Se,iridescenceMap:pe,iridescenceThicknessMap:fe,sheen:y,sheenColorMap:ge,sheenRoughnessMap:we,specularMap:Fe,specularColorMap:de,specularIntensityMap:Be,transmission:S,transmissionMap:Pe,thicknessMap:Ne,gradientMap:Ue,opaque:g.transparent===!1&&g.blending===lr,alphaMap:U,alphaTest:_e,alphaHash:me,combine:g.combine,mapUv:Me&&x(g.map.channel),aoMapUv:v&&x(g.aoMap.channel),lightMapUv:P&&x(g.lightMap.channel),bumpMapUv:F&&x(g.bumpMap.channel),normalMapUv:W&&x(g.normalMap.channel),displacementMapUv:H&&x(g.displacementMap.channel),emissiveMapUv:V&&x(g.emissiveMap.channel),metalnessMapUv:oe&&x(g.metalnessMap.channel),roughnessMapUv:Z&&x(g.roughnessMap.channel),anisotropyMapUv:I&&x(g.anisotropyMap.channel),clearcoatMapUv:re&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(g.sheenRoughnessMap.channel),specularMapUv:Fe&&x(g.specularMap.channel),specularColorMapUv:de&&x(g.specularColorMap.channel),specularIntensityMapUv:Be&&x(g.specularIntensityMap.channel),transmissionMapUv:Pe&&x(g.transmissionMap.channel),thicknessMapUv:Ne&&x(g.thicknessMap.channel),alphaMapUv:U&&x(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(W||ne),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:he,vertexUv3s:De,pointsUvs:q.isPoints===!0&&!!B.attributes.uv&&(Me||U),fog:!!A,useFog:g.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:z,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Me&&g.map.isVideoTexture===!0&&et.getTransfer(g.map.colorSpace)===ot,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===kn,flipSided:g.side===zt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:Te&&g.extensions.derivatives===!0,extensionFragDepth:Te&&g.extensions.fragDepth===!0,extensionDrawBuffers:Te&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&g.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(const D in g.defines)_.push(D),_.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(M(_,g),E(_,g),_.push(n.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function M(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function E(g,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),g.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),g.push(o.mask)}function T(g){const _=b[g.type];let D;if(_){const G=vn[_];D=N_.clone(G.uniforms)}else D=g.uniforms;return D}function C(g,_){let D;for(let G=0,q=l.length;G<q;G++){const A=l[G];if(A.cacheKey===_){D=A,++D.usedTimes;break}}return D===void 0&&(D=new Xb(n,_,g,s),l.push(D)),D}function R(g){if(--g.usedTimes===0){const _=l.indexOf(g);l[_]=l[l.length-1],l.pop(),g.destroy()}}function L(g){c.remove(g)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:l,dispose:O}}function Zb(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Jb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,b,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:b,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=b,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function o(f,h,p,b,x,m){const d=a(f,h,p,b,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(f,h,p,b,x,m){const d=a(f,h,p,b,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(f,h){t.length>1&&t.sort(f||Jb),i.length>1&&i.sort(h||Hu),r.length>1&&r.sort(h||Hu)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Qb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gu,n.set(i,[a])):r>=s.length?(a=new Gu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function eS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new tt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function tS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nS=0;function iS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rS(n,e){const t=new eS,i=tS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new Q);const s=new Q,a=new mt,o=new mt;function c(u,f){let h=0,p=0,b=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let x=0,m=0,d=0,M=0,E=0,T=0,C=0,R=0,L=0,O=0,g=0;u.sort(iS);const _=f===!0?Math.PI:1;for(let G=0,q=u.length;G<q;G++){const A=u[G],B=A.color,N=A.intensity,X=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=B.r*N*_,p+=B.g*N*_,b+=B.b*N*_;else if(A.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(A.sh.coefficients[ie],N);g++}else if(A.isDirectionalLight){const ie=t.get(A);if(ie.color.copy(A.color).multiplyScalar(A.intensity*_),A.castShadow){const j=A.shadow,k=i.get(A);k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,r.directionalShadow[x]=k,r.directionalShadowMap[x]=Y,r.directionalShadowMatrix[x]=A.shadow.matrix,T++}r.directional[x]=ie,x++}else if(A.isSpotLight){const ie=t.get(A);ie.position.setFromMatrixPosition(A.matrixWorld),ie.color.copy(B).multiplyScalar(N*_),ie.distance=X,ie.coneCos=Math.cos(A.angle),ie.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),ie.decay=A.decay,r.spot[d]=ie;const j=A.shadow;if(A.map&&(r.spotLightMap[L]=A.map,L++,j.updateMatrices(A),A.castShadow&&O++),r.spotLightMatrix[d]=j.matrix,A.castShadow){const k=i.get(A);k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,r.spotShadow[d]=k,r.spotShadowMap[d]=Y,R++}d++}else if(A.isRectAreaLight){const ie=t.get(A);ie.color.copy(B).multiplyScalar(N),ie.halfWidth.set(A.width*.5,0,0),ie.halfHeight.set(0,A.height*.5,0),r.rectArea[M]=ie,M++}else if(A.isPointLight){const ie=t.get(A);if(ie.color.copy(A.color).multiplyScalar(A.intensity*_),ie.distance=A.distance,ie.decay=A.decay,A.castShadow){const j=A.shadow,k=i.get(A);k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,r.pointShadow[m]=k,r.pointShadowMap[m]=Y,r.pointShadowMatrix[m]=A.shadow.matrix,C++}r.point[m]=ie,m++}else if(A.isHemisphereLight){const ie=t.get(A);ie.skyColor.copy(A.color).multiplyScalar(N*_),ie.groundColor.copy(A.groundColor).multiplyScalar(N*_),r.hemi[E]=ie,E++}}M>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=b;const D=r.hash;(D.directionalLength!==x||D.pointLength!==m||D.spotLength!==d||D.rectAreaLength!==M||D.hemiLength!==E||D.numDirectionalShadows!==T||D.numPointShadows!==C||D.numSpotShadows!==R||D.numSpotMaps!==L||D.numLightProbes!==g)&&(r.directional.length=x,r.spot.length=d,r.rectArea.length=M,r.point.length=m,r.hemi.length=E,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+L-O,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=g,D.directionalLength=x,D.pointLength=m,D.spotLength=d,D.rectAreaLength=M,D.hemiLength=E,D.numDirectionalShadows=T,D.numPointShadows=C,D.numSpotShadows=R,D.numSpotMaps=L,D.numLightProbes=g,r.version=nS++)}function l(u,f){let h=0,p=0,b=0,x=0,m=0;const d=f.matrixWorldInverse;for(let M=0,E=u.length;M<E;M++){const T=u[M];if(T.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),h++}else if(T.isSpotLight){const C=r.spot[b];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),b++}else if(T.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),o.identity(),a.copy(T.matrixWorld),a.premultiply(d),o.extractRotation(a),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:r}}function Vu(n,e){const t=new rS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function sS(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Vu(n,e),t.set(s,[c])):a>=o.length?(c=new Vu(n,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class oS extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aS extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uS(n,e,t){let i=new Rc;const r=new Je,s=new Je,a=new xt,o=new oS({depthPacking:s_}),c=new aS,l={},u=t.maxTextureSize,f={[ui]:zt,[zt]:ui,[kn]:kn},h=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:cS,fragmentShader:lS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const b=new Xn;b.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ii(b,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let d=this.type;this.render=function(C,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const O=n.getRenderTarget(),g=n.getActiveCubeFace(),_=n.getActiveMipmapLevel(),D=n.state;D.setBlending(si),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const G=d!==Dn&&this.type===Dn,q=d===Dn&&this.type!==Dn;for(let A=0,B=C.length;A<B;A++){const N=C[A],X=N.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Y=X.getFrameExtents();if(r.multiply(Y),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,X.mapSize.y=s.y)),X.map===null||G===!0||q===!0){const j=this.type!==Dn?{minFilter:Ut,magFilter:Ut}:{};X.map!==null&&X.map.dispose(),X.map=new Ui(r.x,r.y,j),X.map.texture.name=N.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ie=X.getViewportCount();for(let j=0;j<ie;j++){const k=X.getViewport(j);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),D.viewport(a),X.updateMatrices(N,j),i=X.getFrustum(),T(R,L,X.camera,N,this.type)}X.isPointLightShadow!==!0&&this.type===Dn&&M(X,L),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(O,g,_)};function M(C,R){const L=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ui(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,L,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,L,p,x,null)}function E(C,R,L,O){let g=null;const _=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(_!==void 0)g=_;else if(g=L.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const D=g.uuid,G=R.uuid;let q=l[D];q===void 0&&(q={},l[D]=q);let A=q[G];A===void 0&&(A=g.clone(),q[G]=A),g=A}if(g.visible=R.visible,g.wireframe=R.wireframe,O===Dn?g.side=R.shadowSide!==null?R.shadowSide:R.side:g.side=R.shadowSide!==null?R.shadowSide:f[R.side],g.alphaMap=R.alphaMap,g.alphaTest=R.alphaTest,g.map=R.map,g.clipShadows=R.clipShadows,g.clippingPlanes=R.clippingPlanes,g.clipIntersection=R.clipIntersection,g.displacementMap=R.displacementMap,g.displacementScale=R.displacementScale,g.displacementBias=R.displacementBias,g.wireframeLinewidth=R.wireframeLinewidth,g.linewidth=R.linewidth,L.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const D=n.properties.get(g);D.light=L}return g}function T(C,R,L,O,g){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===Dn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const G=e.update(C),q=C.material;if(Array.isArray(q)){const A=G.groups;for(let B=0,N=A.length;B<N;B++){const X=A[B],Y=q[X.materialIndex];if(Y&&Y.visible){const ie=E(C,Y,O,g);n.renderBufferDirect(L,null,G,ie,C,X)}}}else if(q.visible){const A=E(C,q,O,g);n.renderBufferDirect(L,null,G,A,C,null)}}const D=C.children;for(let G=0,q=D.length;G<q;G++)T(D[G],R,L,O,g)}}function fS(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const _e=new xt;let me=null;const Te=new xt(0,0,0,0);return{setMask:function(Ee){me!==Ee&&!U&&(n.colorMask(Ee,Ee,Ee,Ee),me=Ee)},setLocked:function(Ee){U=Ee},setClear:function(Ee,he,De,Ve,Ct){Ct===!0&&(Ee*=Ve,he*=Ve,De*=Ve),_e.set(Ee,he,De,Ve),Te.equals(_e)===!1&&(n.clearColor(Ee,he,De,Ve),Te.copy(_e))},reset:function(){U=!1,me=null,Te.set(-1,0,0,0)}}}function s(){let U=!1,_e=null,me=null,Te=null;return{setTest:function(Ee){Ee?ye(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Ee){_e!==Ee&&!U&&(n.depthMask(Ee),_e=Ee)},setFunc:function(Ee){if(me!==Ee){switch(Ee){case Ig:n.depthFunc(n.NEVER);break;case Fg:n.depthFunc(n.ALWAYS);break;case Ng:n.depthFunc(n.LESS);break;case ec:n.depthFunc(n.LEQUAL);break;case Og:n.depthFunc(n.EQUAL);break;case kg:n.depthFunc(n.GEQUAL);break;case Bg:n.depthFunc(n.GREATER);break;case zg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Ee}},setLocked:function(Ee){U=Ee},setClear:function(Ee){Te!==Ee&&(n.clearDepth(Ee),Te=Ee)},reset:function(){U=!1,_e=null,me=null,Te=null}}}function a(){let U=!1,_e=null,me=null,Te=null,Ee=null,he=null,De=null,Ve=null,Ct=null;return{setTest:function(st){U||(st?ye(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(st){_e!==st&&!U&&(n.stencilMask(st),_e=st)},setFunc:function(st,dn,Rt){(me!==st||Te!==dn||Ee!==Rt)&&(n.stencilFunc(st,dn,Rt),me=st,Te=dn,Ee=Rt)},setOp:function(st,dn,Rt){(he!==st||De!==dn||Ve!==Rt)&&(n.stencilOp(st,dn,Rt),he=st,De=dn,Ve=Rt)},setLocked:function(st){U=st},setClear:function(st){Ct!==st&&(n.clearStencil(st),Ct=st)},reset:function(){U=!1,_e=null,me=null,Te=null,Ee=null,he=null,De=null,Ve=null,Ct=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,f=new WeakMap;let h={},p={},b=new WeakMap,x=[],m=null,d=!1,M=null,E=null,T=null,C=null,R=null,L=null,O=null,g=!1,_=null,D=null,G=null,q=null,A=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=X>=2);let ie=null,j={};const k=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),ue=new xt().fromArray(k),le=new xt().fromArray(z);function ve(U,_e,me,Te){const Ee=new Uint8Array(4),he=n.createTexture();n.bindTexture(U,he),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<me;De++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(_e+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return he}const xe={};xe[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ye(n.DEPTH_TEST),c.setFunc(ec),H(!1),V(Tl),ye(n.CULL_FACE),F(si);function ye(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Ae(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Me(U,_e){return p[U]!==_e?(n.bindFramebuffer(U,_e),p[U]=_e,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=_e),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function Le(U,_e){let me=x,Te=!1;if(U)if(me=b.get(_e),me===void 0&&(me=[],b.set(_e,me)),U.isWebGLMultipleRenderTargets){const Ee=U.texture;if(me.length!==Ee.length||me[0]!==n.COLOR_ATTACHMENT0){for(let he=0,De=Ee.length;he<De;he++)me[he]=n.COLOR_ATTACHMENT0+he;me.length=Ee.length,Te=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,Te=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Re(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const v={[tr]:n.FUNC_ADD,[yg]:n.FUNC_SUBTRACT,[Mg]:n.FUNC_REVERSE_SUBTRACT};if(i)v[Rl]=n.MIN,v[Ll]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(v[Rl]=U.MIN_EXT,v[Ll]=U.MAX_EXT)}const P={[Tg]:n.ZERO,[Ag]:n.ONE,[wg]:n.SRC_COLOR,[jh]:n.SRC_ALPHA,[Ug]:n.SRC_ALPHA_SATURATE,[Dg]:n.DST_COLOR,[Rg]:n.DST_ALPHA,[Cg]:n.ONE_MINUS_SRC_COLOR,[$h]:n.ONE_MINUS_SRC_ALPHA,[Pg]:n.ONE_MINUS_DST_COLOR,[Lg]:n.ONE_MINUS_DST_ALPHA};function F(U,_e,me,Te,Ee,he,De,Ve){if(U===si){d===!0&&(Ae(n.BLEND),d=!1);return}if(d===!1&&(ye(n.BLEND),d=!0),U!==Eg){if(U!==M||Ve!==g){if((E!==tr||R!==tr)&&(n.blendEquation(n.FUNC_ADD),E=tr,R=tr),Ve)switch(U){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFunc(n.ONE,n.ONE);break;case wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,C=null,L=null,O=null,M=U,g=Ve}return}Ee=Ee||_e,he=he||me,De=De||Te,(_e!==E||Ee!==R)&&(n.blendEquationSeparate(v[_e],v[Ee]),E=_e,R=Ee),(me!==T||Te!==C||he!==L||De!==O)&&(n.blendFuncSeparate(P[me],P[Te],P[he],P[De]),T=me,C=Te,L=he,O=De),M=U,g=!1}function W(U,_e){U.side===kn?Ae(n.CULL_FACE):ye(n.CULL_FACE);let me=U.side===zt;_e&&(me=!me),H(me),U.blending===lr&&U.transparent===!1?F(si):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const Te=U.stencilWrite;l.setTest(Te),Te&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Z(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(U){_!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),_=U)}function V(U){U!==xg?(ye(n.CULL_FACE),U!==D&&(U===Tl?n.cullFace(n.BACK):U===bg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),D=U}function oe(U){U!==G&&(N&&n.lineWidth(U),G=U)}function Z(U,_e,me){U?(ye(n.POLYGON_OFFSET_FILL),(q!==_e||A!==me)&&(n.polygonOffset(_e,me),q=_e,A=me)):Ae(n.POLYGON_OFFSET_FILL)}function ne(U){U?ye(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function ee(U){U===void 0&&(U=n.TEXTURE0+B-1),ie!==U&&(n.activeTexture(U),ie=U)}function Se(U,_e,me){me===void 0&&(ie===null?me=n.TEXTURE0+B-1:me=ie);let Te=j[me];Te===void 0&&(Te={type:void 0,texture:void 0},j[me]=Te),(Te.type!==U||Te.texture!==_e)&&(ie!==me&&(n.activeTexture(me),ie=me),n.bindTexture(U,_e||xe[U]),Te.type=U,Te.texture=_e)}function y(){const U=j[ie];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){ue.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function Be(U){le.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function Pe(U,_e){let me=f.get(_e);me===void 0&&(me=new WeakMap,f.set(_e,me));let Te=me.get(U);Te===void 0&&(Te=n.getUniformBlockIndex(_e,U.name),me.set(U,Te))}function Ne(U,_e){const Te=f.get(_e).get(U);u.get(_e)!==Te&&(n.uniformBlockBinding(_e,Te,U.__bindingPointIndex),u.set(_e,Te))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,j={},p={},b=new WeakMap,x=[],m=null,d=!1,M=null,E=null,T=null,C=null,R=null,L=null,O=null,g=!1,_=null,D=null,G=null,q=null,A=null,ue.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ye,disable:Ae,bindFramebuffer:Me,drawBuffers:Le,useProgram:Re,setBlending:F,setMaterial:W,setFlipSided:H,setCullFace:V,setLineWidth:oe,setPolygonOffset:Z,setScissorTest:ne,activeTexture:ee,bindTexture:Se,unbindTexture:y,compressedTexImage2D:S,compressedTexImage3D:I,texImage2D:we,texImage3D:Fe,updateUBOMapping:Pe,uniformBlockBinding:Ne,texStorage2D:fe,texStorage3D:ge,texSubImage2D:re,texSubImage3D:te,compressedTexSubImage2D:se,compressedTexSubImage3D:pe,scissor:de,viewport:Be,reset:Ue}}function hS(n,e,t,i,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let x;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,S){return d?new OffscreenCanvas(y,S):ro("canvas")}function E(y,S,I,re){let te=1;if((y.width>re||y.height>re)&&(te=re/Math.max(y.width,y.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const se=S?ac:Math.floor,pe=se(te*y.width),fe=se(te*y.height);x===void 0&&(x=M(pe,fe));const ge=I?M(pe,fe):x;return ge.width=pe,ge.height=fe,ge.getContext("2d").drawImage(y,0,0,pe,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+pe+"x"+fe+")."),ge}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function T(y){return su(y.width)&&su(y.height)}function C(y){return o?!1:y.wrapS!==on||y.wrapT!==on||y.minFilter!==Ut&&y.minFilter!==Zt}function R(y,S){return y.generateMipmaps&&S&&y.minFilter!==Ut&&y.minFilter!==Zt}function L(y){n.generateMipmap(y)}function O(y,S,I,re,te=!1){if(o===!1)return S;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let se=S;if(S===n.RED&&(I===n.FLOAT&&(se=n.R32F),I===n.HALF_FLOAT&&(se=n.R16F),I===n.UNSIGNED_BYTE&&(se=n.R8)),S===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(se=n.R8UI),I===n.UNSIGNED_SHORT&&(se=n.R16UI),I===n.UNSIGNED_INT&&(se=n.R32UI),I===n.BYTE&&(se=n.R8I),I===n.SHORT&&(se=n.R16I),I===n.INT&&(se=n.R32I)),S===n.RG&&(I===n.FLOAT&&(se=n.RG32F),I===n.HALF_FLOAT&&(se=n.RG16F),I===n.UNSIGNED_BYTE&&(se=n.RG8)),S===n.RGBA){const pe=te?eo:et.getTransfer(re);I===n.FLOAT&&(se=n.RGBA32F),I===n.HALF_FLOAT&&(se=n.RGBA16F),I===n.UNSIGNED_BYTE&&(se=pe===ot?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function g(y,S,I){return R(y,I)===!0||y.isFramebufferTexture&&y.minFilter!==Ut&&y.minFilter!==Zt?Math.log2(Math.max(S.width,S.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?S.mipmaps.length:1}function _(y){return y===Ut||y===Dl||y===Zo?n.NEAREST:n.LINEAR}function D(y){const S=y.target;S.removeEventListener("dispose",D),q(S),S.isVideoTexture&&b.delete(S)}function G(y){const S=y.target;S.removeEventListener("dispose",G),B(S)}function q(y){const S=i.get(y);if(S.__webglInit===void 0)return;const I=y.source,re=m.get(I);if(re){const te=re[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(y),Object.keys(re).length===0&&m.delete(I)}i.remove(y)}function A(y){const S=i.get(y);n.deleteTexture(S.__webglTexture);const I=y.source,re=m.get(I);delete re[S.__cacheKey],a.memory.textures--}function B(y){const S=y.texture,I=i.get(y),re=i.get(S);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(I.__webglFramebuffer[te]))for(let se=0;se<I.__webglFramebuffer[te].length;se++)n.deleteFramebuffer(I.__webglFramebuffer[te][se]);else n.deleteFramebuffer(I.__webglFramebuffer[te]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[te])}else{if(Array.isArray(I.__webglFramebuffer))for(let te=0;te<I.__webglFramebuffer.length;te++)n.deleteFramebuffer(I.__webglFramebuffer[te]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let te=0;te<I.__webglColorRenderbuffer.length;te++)I.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[te]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let te=0,se=S.length;te<se;te++){const pe=i.get(S[te]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(S[te])}i.remove(S),i.remove(y)}let N=0;function X(){N=0}function Y(){const y=N;return y>=c&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+c),N+=1,y}function ie(y){const S=[];return S.push(y.wrapS),S.push(y.wrapT),S.push(y.wrapR||0),S.push(y.magFilter),S.push(y.minFilter),S.push(y.anisotropy),S.push(y.internalFormat),S.push(y.format),S.push(y.type),S.push(y.generateMipmaps),S.push(y.premultiplyAlpha),S.push(y.flipY),S.push(y.unpackAlignment),S.push(y.colorSpace),S.join()}function j(y,S){const I=i.get(y);if(y.isVideoTexture&&ee(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const re=y.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(I,y,S);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+S)}function k(y,S){const I=i.get(y);if(y.version>0&&I.__version!==y.version){Me(I,y,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+S)}function z(y,S){const I=i.get(y);if(y.version>0&&I.__version!==y.version){Me(I,y,S);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+S)}function ue(y,S){const I=i.get(y);if(y.version>0&&I.__version!==y.version){Le(I,y,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+S)}const le={[ic]:n.REPEAT,[on]:n.CLAMP_TO_EDGE,[rc]:n.MIRRORED_REPEAT},ve={[Ut]:n.NEAREST,[Dl]:n.NEAREST_MIPMAP_NEAREST,[Zo]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[$g]:n.LINEAR_MIPMAP_NEAREST,[Kr]:n.LINEAR_MIPMAP_LINEAR},xe={[l_]:n.NEVER,[g_]:n.ALWAYS,[u_]:n.LESS,[h_]:n.LEQUAL,[f_]:n.EQUAL,[m_]:n.GEQUAL,[d_]:n.GREATER,[p_]:n.NOTEQUAL};function ye(y,S,I){if(I?(n.texParameteri(y,n.TEXTURE_WRAP_S,le[S.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,le[S.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,le[S.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ve[S.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ve[S.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==on||S.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,_(S.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,_(S.minFilter)),S.minFilter!==Ut&&S.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ut||S.minFilter!==Zo&&S.minFilter!==Kr||S.type===ni&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Zr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(y,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Ae(y,S){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,S.addEventListener("dispose",D));const re=S.source;let te=m.get(re);te===void 0&&(te={},m.set(re,te));const se=ie(S);if(se!==y.__cacheKey){te[se]===void 0&&(te[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),te[se].usedTimes++;const pe=te[y.__cacheKey];pe!==void 0&&(te[y.__cacheKey].usedTimes--,pe.usedTimes===0&&A(S)),y.__cacheKey=se,y.__webglTexture=te[se].texture}return I}function Me(y,S,I){let re=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=n.TEXTURE_3D);const te=Ae(y,S),se=S.source;t.bindTexture(re,y.__webglTexture,n.TEXTURE0+I);const pe=i.get(se);if(se.version!==pe.__version||te===!0){t.activeTexture(n.TEXTURE0+I);const fe=et.getPrimaries(et.workingColorSpace),ge=S.colorSpace===Qt?null:et.getPrimaries(S.colorSpace),we=S.colorSpace===Qt||fe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Fe=C(S)&&T(S.image)===!1;let de=E(S.image,Fe,!1,u);de=Se(S,de);const Be=T(de)||o,Pe=s.convert(S.format,S.colorSpace);let Ne=s.convert(S.type),Ue=O(S.internalFormat,Pe,Ne,S.colorSpace,S.isVideoTexture);ye(re,S,Be);let U;const _e=S.mipmaps,me=o&&S.isVideoTexture!==!0,Te=pe.__version===void 0||te===!0,Ee=g(S,de,Be);if(S.isDepthTexture)Ue=n.DEPTH_COMPONENT,o?S.type===ni?Ue=n.DEPTH_COMPONENT32F:S.type===ti?Ue=n.DEPTH_COMPONENT24:S.type===Li?Ue=n.DEPTH24_STENCIL8:Ue=n.DEPTH_COMPONENT16:S.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Di&&Ue===n.DEPTH_COMPONENT&&S.type!==wc&&S.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ti,Ne=s.convert(S.type)),S.format===mr&&Ue===n.DEPTH_COMPONENT&&(Ue=n.DEPTH_STENCIL,S.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Li,Ne=s.convert(S.type))),Te&&(me?t.texStorage2D(n.TEXTURE_2D,1,Ue,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ue,de.width,de.height,0,Pe,Ne,null));else if(S.isDataTexture)if(_e.length>0&&Be){me&&Te&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,_e[0].width,_e[0].height);for(let he=0,De=_e.length;he<De;he++)U=_e[he],me?t.texSubImage2D(n.TEXTURE_2D,he,0,0,U.width,U.height,Pe,Ne,U.data):t.texImage2D(n.TEXTURE_2D,he,Ue,U.width,U.height,0,Pe,Ne,U.data);S.generateMipmaps=!1}else me?(Te&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Pe,Ne,de.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,de.width,de.height,0,Pe,Ne,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){me&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ue,_e[0].width,_e[0].height,de.depth);for(let he=0,De=_e.length;he<De;he++)U=_e[he],S.format!==an?Pe!==null?me?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,U.width,U.height,de.depth,Pe,U.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ue,U.width,U.height,de.depth,0,U.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,U.width,U.height,de.depth,Pe,Ne,U.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ue,U.width,U.height,de.depth,0,Pe,Ne,U.data)}else{me&&Te&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,_e[0].width,_e[0].height);for(let he=0,De=_e.length;he<De;he++)U=_e[he],S.format!==an?Pe!==null?me?t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,U.width,U.height,Pe,U.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ue,U.width,U.height,0,U.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(n.TEXTURE_2D,he,0,0,U.width,U.height,Pe,Ne,U.data):t.texImage2D(n.TEXTURE_2D,he,Ue,U.width,U.height,0,Pe,Ne,U.data)}else if(S.isDataArrayTexture)me?(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ue,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,Ne,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,de.width,de.height,de.depth,0,Pe,Ne,de.data);else if(S.isData3DTexture)me?(Te&&t.texStorage3D(n.TEXTURE_3D,Ee,Ue,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,Ne,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,de.width,de.height,de.depth,0,Pe,Ne,de.data);else if(S.isFramebufferTexture){if(Te)if(me)t.texStorage2D(n.TEXTURE_2D,Ee,Ue,de.width,de.height);else{let he=de.width,De=de.height;for(let Ve=0;Ve<Ee;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,Ue,he,De,0,Pe,Ne,null),he>>=1,De>>=1}}else if(_e.length>0&&Be){me&&Te&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,_e[0].width,_e[0].height);for(let he=0,De=_e.length;he<De;he++)U=_e[he],me?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Pe,Ne,U):t.texImage2D(n.TEXTURE_2D,he,Ue,Pe,Ne,U);S.generateMipmaps=!1}else me?(Te&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ne,de)):t.texImage2D(n.TEXTURE_2D,0,Ue,Pe,Ne,de);R(S,Be)&&L(re),pe.__version=se.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function Le(y,S,I){if(S.image.length!==6)return;const re=Ae(y,S),te=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const se=i.get(te);if(te.version!==se.__version||re===!0){t.activeTexture(n.TEXTURE0+I);const pe=et.getPrimaries(et.workingColorSpace),fe=S.colorSpace===Qt?null:et.getPrimaries(S.colorSpace),ge=S.colorSpace===Qt||pe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,de=[];for(let he=0;he<6;he++)!we&&!Fe?de[he]=E(S.image[he],!1,!0,l):de[he]=Fe?S.image[he].image:S.image[he],de[he]=Se(S,de[he]);const Be=de[0],Pe=T(Be)||o,Ne=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type),U=O(S.internalFormat,Ne,Ue,S.colorSpace),_e=o&&S.isVideoTexture!==!0,me=se.__version===void 0||re===!0;let Te=g(S,Be,Pe);ye(n.TEXTURE_CUBE_MAP,S,Pe);let Ee;if(we){_e&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,U,Be.width,Be.height);for(let he=0;he<6;he++){Ee=de[he].mipmaps;for(let De=0;De<Ee.length;De++){const Ve=Ee[De];S.format!==an?Ne!==null?_e?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Ve.width,Ve.height,Ne,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,U,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Ve.width,Ve.height,Ne,Ue,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,U,Ve.width,Ve.height,0,Ne,Ue,Ve.data)}}}else{Ee=S.mipmaps,_e&&me&&(Ee.length>0&&Te++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,U,de[0].width,de[0].height));for(let he=0;he<6;he++)if(Fe){_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,de[he].width,de[he].height,Ne,Ue,de[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,U,de[he].width,de[he].height,0,Ne,Ue,de[he].data);for(let De=0;De<Ee.length;De++){const Ct=Ee[De].image[he].image;_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,Ct.width,Ct.height,Ne,Ue,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,U,Ct.width,Ct.height,0,Ne,Ue,Ct.data)}}else{_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne,Ue,de[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,U,Ne,Ue,de[he]);for(let De=0;De<Ee.length;De++){const Ve=Ee[De];_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,Ne,Ue,Ve.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,U,Ne,Ue,Ve.image[he])}}}R(S,Pe)&&L(n.TEXTURE_CUBE_MAP),se.__version=te.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function Re(y,S,I,re,te,se){const pe=s.convert(I.format,I.colorSpace),fe=s.convert(I.type),ge=O(I.internalFormat,pe,fe,I.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>se),de=Math.max(1,S.height>>se);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,se,ge,Fe,de,S.depth,0,pe,fe,null):t.texImage2D(te,se,ge,Fe,de,0,pe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ne(S)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,i.get(I).__webglTexture,0,Z(S)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,te,i.get(I).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function v(y,S,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),S.depthBuffer&&!S.stencilBuffer){let re=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(I||ne(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===ni?re=n.DEPTH_COMPONENT32F:te.type===ti&&(re=n.DEPTH_COMPONENT24));const se=Z(S);ne(S)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,re,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,re,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(S.depthBuffer&&S.stencilBuffer){const re=Z(S);I&&ne(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,S.width,S.height):ne(S)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<re.length;te++){const se=re[te],pe=s.convert(se.format,se.colorSpace),fe=s.convert(se.type),ge=O(se.internalFormat,pe,fe,se.colorSpace),we=Z(S);I&&ne(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ge,S.width,S.height):ne(S)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function P(y,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const re=i.get(S.depthTexture).__webglTexture,te=Z(S);if(S.depthTexture.format===Di)ne(S)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(S.depthTexture.format===mr)ne(S)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function F(y){const S=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");P(S.__webglFramebuffer,y)}else if(I){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=n.createRenderbuffer(),v(S.__webglDepthbuffer[re],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),v(S.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(y,S,I){const re=i.get(y);S!==void 0&&Re(re.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&F(y)}function H(y){const S=y.texture,I=i.get(y),re=i.get(S);y.addEventListener("dispose",G),y.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=S.version,a.memory.textures++);const te=y.isWebGLCubeRenderTarget===!0,se=y.isWebGLMultipleRenderTargets===!0,pe=T(y)||o;if(te){I.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[fe]=[];for(let ge=0;ge<S.mipmaps.length;ge++)I.__webglFramebuffer[fe][ge]=n.createFramebuffer()}else I.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)I.__webglFramebuffer[fe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(se)if(r.drawBuffers){const fe=y.texture;for(let ge=0,we=fe.length;ge<we;ge++){const Fe=i.get(fe[ge]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&ne(y)===!1){const fe=se?S:[S];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ge=0;ge<fe.length;ge++){const we=fe[ge];I.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ge]);const Fe=s.convert(we.format,we.colorSpace),de=s.convert(we.type),Be=O(we.internalFormat,Fe,de,we.colorSpace,y.isXRRenderTarget===!0),Pe=Z(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Be,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,I.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),v(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),ye(n.TEXTURE_CUBE_MAP,S,pe);for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Re(I.__webglFramebuffer[fe][ge],y,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else Re(I.__webglFramebuffer[fe],y,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);R(S,pe)&&L(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const fe=y.texture;for(let ge=0,we=fe.length;ge<we;ge++){const Fe=fe[ge],de=i.get(Fe);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),ye(n.TEXTURE_2D,Fe,pe),Re(I.__webglFramebuffer,y,Fe,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),R(Fe,pe)&&L(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?fe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,re.__webglTexture),ye(fe,S,pe),o&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Re(I.__webglFramebuffer[ge],y,S,n.COLOR_ATTACHMENT0,fe,ge);else Re(I.__webglFramebuffer,y,S,n.COLOR_ATTACHMENT0,fe,0);R(S,pe)&&L(fe),t.unbindTexture()}y.depthBuffer&&F(y)}function V(y){const S=T(y)||o,I=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let re=0,te=I.length;re<te;re++){const se=I[re];if(R(se,S)){const pe=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(se).__webglTexture;t.bindTexture(pe,fe),L(pe),t.unbindTexture()}}}function oe(y){if(o&&y.samples>0&&ne(y)===!1){const S=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],I=y.width,re=y.height;let te=n.COLOR_BUFFER_BIT;const se=[],pe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(y),ge=y.isWebGLMultipleRenderTargets===!0;if(ge)for(let we=0;we<S.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let we=0;we<S.length;we++){se.push(n.COLOR_ATTACHMENT0+we),y.depthBuffer&&se.push(pe);const Fe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Fe===!1&&(y.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[we]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[pe])),ge){const de=i.get(S[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,I,re,0,0,I,re,te,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let we=0;we<S.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,fe.__webglColorRenderbuffer[we]);const Fe=i.get(S[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Z(y){return Math.min(f,y.samples)}function ne(y){const S=i.get(y);return o&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ee(y){const S=a.render.frame;b.get(y)!==S&&(b.set(y,S),y.update())}function Se(y,S){const I=y.colorSpace,re=y.format,te=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===sc||I!==qn&&I!==Qt&&(et.getTransfer(I)===ot?o===!1?e.has("EXT_sRGB")===!0&&re===an?(y.format=sc,y.minFilter=Zt,y.generateMipmaps=!1):S=sd.sRGBToLinear(S):(re!==an||te!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=z,this.setTextureCube=ue,this.rebindTextures=W,this.setupRenderTarget=H,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=ne}function dS(n,e,t){const i=t.isWebGL2;function r(s,a=Qt){let o;const c=et.getTransfer(a);if(s===ai)return n.UNSIGNED_BYTE;if(s===Jh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Qh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Yg)return n.BYTE;if(s===Kg)return n.SHORT;if(s===wc)return n.UNSIGNED_SHORT;if(s===Zh)return n.INT;if(s===ti)return n.UNSIGNED_INT;if(s===ni)return n.FLOAT;if(s===Zr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Zg)return n.ALPHA;if(s===an)return n.RGBA;if(s===Jg)return n.LUMINANCE;if(s===Qg)return n.LUMINANCE_ALPHA;if(s===Di)return n.DEPTH_COMPONENT;if(s===mr)return n.DEPTH_STENCIL;if(s===sc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===e_)return n.RED;if(s===ed)return n.RED_INTEGER;if(s===t_)return n.RG;if(s===td)return n.RG_INTEGER;if(s===nd)return n.RGBA_INTEGER;if(s===Jo||s===Qo||s===ea||s===ta)if(c===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Jo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Jo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ea)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ta)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pl||s===Ul||s===Il||s===Fl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Il)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===n_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Nl||s===Ol)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Nl)return c===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ol)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===kl||s===Bl||s===zl||s===Hl||s===Gl||s===Vl||s===ql||s===Wl||s===Xl||s===jl||s===$l||s===Yl||s===Kl||s===Zl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===kl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ql)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$l)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zl)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===na||s===Jl||s===Ql)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===na)return c===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ql)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===i_||s===eu||s===tu||s===nu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===na)return o.COMPRESSED_RED_RGTC1_EXT;if(s===eu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===nu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Li?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class pS extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mS={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,b=.005;l.inputState.pinching&&h>p+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mS)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class gS extends Xt{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:Di,u!==Di&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Di&&(i=ti),i===void 0&&u===mr&&(i=Li),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=c!==void 0?c:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _S extends _r{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,b=null;const x=t.getContextAttributes();let m=null,d=null;const M=[],E=[],T=new Jt;T.layers.enable(1),T.viewport=new xt;const C=new Jt;C.layers.enable(2),C.viewport=new xt;const R=[T,C],L=new pS;L.layers.enable(1),L.layers.enable(2);let O=null,g=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let z=M[k];return z===void 0&&(z=new Aa,M[k]=z),z.getTargetRaySpace()},this.getControllerGrip=function(k){let z=M[k];return z===void 0&&(z=new Aa,M[k]=z),z.getGripSpace()},this.getHand=function(k){let z=M[k];return z===void 0&&(z=new Aa,M[k]=z),z.getHandSpace()};function _(k){const z=E.indexOf(k.inputSource);if(z===-1)return;const ue=M[z];ue!==void 0&&(ue.update(k.inputSource,k.frame,l||a),ue.dispatchEvent({type:k.type,data:k.inputSource}))}function D(){r.removeEventListener("select",_),r.removeEventListener("selectstart",_),r.removeEventListener("selectend",_),r.removeEventListener("squeeze",_),r.removeEventListener("squeezestart",_),r.removeEventListener("squeezeend",_),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",G);for(let k=0;k<M.length;k++){const z=E[k];z!==null&&(E[k]=null,M[k].disconnect(z))}O=null,g=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",_),r.addEventListener("selectstart",_),r.addEventListener("selectend",_),r.addEventListener("squeeze",_),r.addEventListener("squeezestart",_),r.addEventListener("squeezeend",_),r.addEventListener("end",D),r.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,z),r.updateRenderState({baseLayer:p}),d=new Ui(p.framebufferWidth,p.framebufferHeight,{format:an,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let z=null,ue=null,le=null;x.depth&&(le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=x.stencil?mr:Di,ue=x.stencil?Li:ti);const ve={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),d=new Ui(h.textureWidth,h.textureHeight,{format:an,type:ai,depthTexture:new gS(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const xe=e.properties.get(d);xe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(k){for(let z=0;z<k.removed.length;z++){const ue=k.removed[z],le=E.indexOf(ue);le>=0&&(E[le]=null,M[le].disconnect(ue))}for(let z=0;z<k.added.length;z++){const ue=k.added[z];let le=E.indexOf(ue);if(le===-1){for(let xe=0;xe<M.length;xe++)if(xe>=E.length){E.push(ue),le=xe;break}else if(E[xe]===null){E[xe]=ue,le=xe;break}if(le===-1)break}const ve=M[le];ve&&ve.connect(ue)}}const q=new Q,A=new Q;function B(k,z,ue){q.setFromMatrixPosition(z.matrixWorld),A.setFromMatrixPosition(ue.matrixWorld);const le=q.distanceTo(A),ve=z.projectionMatrix.elements,xe=ue.projectionMatrix.elements,ye=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),Me=(ve[9]+1)/ve[5],Le=(ve[9]-1)/ve[5],Re=(ve[8]-1)/ve[0],v=(xe[8]+1)/xe[0],P=ye*Re,F=ye*v,W=le/(-Re+v),H=W*-Re;z.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(H),k.translateZ(W),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const V=ye+W,oe=Ae+W,Z=P-H,ne=F+(le-H),ee=Me*Ae/oe*V,Se=Le*Ae/oe*V;k.projectionMatrix.makePerspective(Z,ne,ee,Se,V,oe),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function N(k,z){z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;L.near=C.near=T.near=k.near,L.far=C.far=T.far=k.far,(O!==L.near||g!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,g=L.far);const z=k.parent,ue=L.cameras;N(L,z);for(let le=0;le<ue.length;le++)N(ue[le],z);ue.length===2?B(L,T,C):L.projectionMatrix.copy(T.projectionMatrix),X(k,L,z)};function X(k,z,ue){ue===null?k.matrix.copy(z.matrixWorld):(k.matrix.copy(ue.matrixWorld),k.matrix.invert(),k.matrix.multiply(z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(z.projectionMatrix),k.projectionMatrixInverse.copy(z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=oc*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(k){c=k,h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let Y=null;function ie(k,z){if(u=z.getViewerPose(l||a),b=z,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let le=!1;ue.length!==L.cameras.length&&(L.cameras.length=0,le=!0);for(let ve=0;ve<ue.length;ve++){const xe=ue[ve];let ye=null;if(p!==null)ye=p.getViewport(xe);else{const Me=f.getViewSubImage(h,xe);ye=Me.viewport,ve===0&&(e.setRenderTargetTextures(d,Me.colorTexture,h.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(d))}let Ae=R[ve];Ae===void 0&&(Ae=new Jt,Ae.layers.enable(ve),Ae.viewport=new xt,R[ve]=Ae),Ae.matrix.fromArray(xe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(xe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(ye.x,ye.y,ye.width,ye.height),ve===0&&(L.matrix.copy(Ae.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),le===!0&&L.cameras.push(Ae)}}for(let ue=0;ue<M.length;ue++){const le=E[ue],ve=M[ue];le!==null&&ve!==void 0&&ve.update(le,z,l||a)}Y&&Y(k,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),b=null}const j=new _d;j.setAnimationLoop(ie),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}}function vS(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,pd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,E,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),b(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,M,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*E,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xS(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,E){const T=E.program;i.uniformBlockBinding(M,T)}function l(M,E){let T=r[M.id];T===void 0&&(b(M),T=u(M),r[M.id]=T,M.addEventListener("dispose",m));const C=E.program;i.updateUBOMapping(M,C);const R=e.render.frame;s[M.id]!==R&&(h(M),s[M.id]=R)}function u(M){const E=f();M.__bindingPointIndex=E;const T=n.createBuffer(),C=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const E=r[M.id],T=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let R=0,L=T.length;R<L;R++){const O=T[R];if(p(O,R,C)===!0){const g=O.__offset,_=Array.isArray(O.value)?O.value:[O.value];let D=0;for(let G=0;G<_.length;G++){const q=_[G],A=x(q);typeof q=="number"?(O.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,g+D,O.__data)):q.isMatrix3?(O.__data[0]=q.elements[0],O.__data[1]=q.elements[1],O.__data[2]=q.elements[2],O.__data[3]=q.elements[0],O.__data[4]=q.elements[3],O.__data[5]=q.elements[4],O.__data[6]=q.elements[5],O.__data[7]=q.elements[0],O.__data[8]=q.elements[6],O.__data[9]=q.elements[7],O.__data[10]=q.elements[8],O.__data[11]=q.elements[0]):(q.toArray(O.__data,D),D+=A.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,g,O.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,E,T){const C=M.value;if(T[E]===void 0){if(typeof C=="number")T[E]=C;else{const R=Array.isArray(C)?C:[C],L=[];for(let O=0;O<R.length;O++)L.push(R[O].clone());T[E]=L}return!0}else if(typeof C=="number"){if(T[E]!==C)return T[E]=C,!0}else{const R=Array.isArray(T[E])?T[E]:[T[E]],L=Array.isArray(C)?C:[C];for(let O=0;O<R.length;O++){const g=R[O];if(g.equals(L[O])===!1)return g.copy(L[O]),!0}}return!1}function b(M){const E=M.uniforms;let T=0;const C=16;let R=0;for(let L=0,O=E.length;L<O;L++){const g=E[L],_={boundary:0,storage:0},D=Array.isArray(g.value)?g.value:[g.value];for(let G=0,q=D.length;G<q;G++){const A=D[G],B=x(A);_.boundary+=B.boundary,_.storage+=B.storage}if(g.__data=new Float32Array(_.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=T,L>0){R=T%C;const G=C-R;R!==0&&G-_.boundary<0&&(T+=C-R,g.__offset=T)}T+=_.storage}return R=T%C,R>0&&(T+=C-R),M.__size=T,M.__cache={},this}function x(M){const E={boundary:0,storage:0};return typeof M=="number"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class yd{constructor(e={}){const{canvas:t=v_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),b=new Int32Array(4);let x=null,m=null;const d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const E=this;let T=!1,C=0,R=0,L=null,O=-1,g=null;const _=new xt,D=new xt;let G=null;const q=new tt(0);let A=0,B=t.width,N=t.height,X=1,Y=null,ie=null;const j=new xt(0,0,B,N),k=new xt(0,0,B,N);let z=!1;const ue=new Rc;let le=!1,ve=!1,xe=null;const ye=new mt,Ae=new Je,Me=new Q,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return L===null?X:1}let v=i;function P(w,$){for(let ae=0;ae<w.length;ae++){const J=w[ae],ce=t.getContext(J,$);if(ce!==null)return ce}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ac}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",Te,!1),v===null){const $=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&$.shift(),v=P($,w),v===null)throw P($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&v instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),v.getShaderPrecisionFormat===void 0&&(v.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let F,W,H,V,oe,Z,ne,ee,Se,y,S,I,re,te,se,pe,fe,ge,we,Fe,de,Be,Pe,Ne;function Ue(){F=new Lx(v),W=new Mx(v,F,e),F.init(W),Be=new dS(v,F,W),H=new fS(v,F,W),V=new Ux(v),oe=new Zb,Z=new hS(v,F,H,oe,W,Be,V),ne=new Ax(E),ee=new Rx(E),Se=new V_(v,W),Pe=new Ex(v,F,Se,W),y=new Dx(v,Se,V,Pe),S=new Ox(v,y,Se,V),we=new Nx(v,W,Z),pe=new Tx(oe),I=new Kb(E,ne,ee,F,W,Pe,pe),re=new vS(E,oe),te=new Qb,se=new sS(F,W),ge=new Sx(E,ne,ee,H,S,h,c),fe=new uS(E,S,W),Ne=new xS(v,V,W,H),Fe=new yx(v,F,V,W),de=new Px(v,F,V,W),V.programs=I.programs,E.capabilities=W,E.extensions=F,E.properties=oe,E.renderLists=te,E.shadowMap=fe,E.state=H,E.info=V}Ue();const U=new _S(E,v);this.xr=U,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const w=F.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=F.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(B,N,!1))},this.getSize=function(w){return w.set(B,N)},this.setSize=function(w,$,ae=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,N=$,t.width=Math.floor(w*X),t.height=Math.floor($*X),ae===!0&&(t.style.width=w+"px",t.style.height=$+"px"),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(B*X,N*X).floor()},this.setDrawingBufferSize=function(w,$,ae){B=w,N=$,X=ae,t.width=Math.floor(w*ae),t.height=Math.floor($*ae),this.setViewport(0,0,w,$)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,$,ae,J){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,$,ae,J),H.viewport(_.copy(j).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy(k)},this.setScissor=function(w,$,ae,J){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,$,ae,J),H.scissor(D.copy(k).multiplyScalar(X).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){H.setScissorTest(z=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(w=!0,$=!0,ae=!0){let J=0;if(w){let ce=!1;if(L!==null){const Ce=L.texture.format;ce=Ce===nd||Ce===td||Ce===ed}if(ce){const Ce=L.texture.type,Ie=Ce===ai||Ce===ti||Ce===wc||Ce===Li||Ce===Jh||Ce===Qh,ze=ge.getClearColor(),He=ge.getClearAlpha(),je=ze.r,Oe=ze.g,qe=ze.b;Ie?(p[0]=je,p[1]=Oe,p[2]=qe,p[3]=He,v.clearBufferuiv(v.COLOR,0,p)):(b[0]=je,b[1]=Oe,b[2]=qe,b[3]=He,v.clearBufferiv(v.COLOR,0,b))}else J|=v.COLOR_BUFFER_BIT}$&&(J|=v.DEPTH_BUFFER_BIT),ae&&(J|=v.STENCIL_BUFFER_BIT),v.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),te.dispose(),se.dispose(),oe.dispose(),ne.dispose(),ee.dispose(),S.dispose(),Pe.dispose(),Ne.dispose(),I.dispose(),U.dispose(),U.removeEventListener("sessionstart",st),U.removeEventListener("sessionend",dn),xe&&(xe.dispose(),xe=null),Rt.stop()};function _e(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=V.autoReset,$=fe.enabled,ae=fe.autoUpdate,J=fe.needsUpdate,ce=fe.type;Ue(),V.autoReset=w,fe.enabled=$,fe.autoUpdate=ae,fe.needsUpdate=J,fe.type=ce}function Te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ee(w){const $=w.target;$.removeEventListener("dispose",Ee),he($)}function he(w){De(w),oe.remove(w)}function De(w){const $=oe.get(w).programs;$!==void 0&&($.forEach(function(ae){I.releaseProgram(ae)}),w.isShaderMaterial&&I.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,ae,J,ce,Ce){$===null&&($=Le);const Ie=ce.isMesh&&ce.matrixWorld.determinant()<0,ze=Gd(w,$,ae,J,ce);H.setMaterial(J,Ie);let He=ae.index,je=1;if(J.wireframe===!0){if(He=y.getWireframeAttribute(ae),He===void 0)return;je=2}const Oe=ae.drawRange,qe=ae.attributes.position;let lt=Oe.start*je,ft=(Oe.start+Oe.count)*je;Ce!==null&&(lt=Math.max(lt,Ce.start*je),ft=Math.min(ft,(Ce.start+Ce.count)*je)),He!==null?(lt=Math.max(lt,0),ft=Math.min(ft,He.count)):qe!=null&&(lt=Math.max(lt,0),ft=Math.min(ft,qe.count));const $t=ft-lt;if($t<0||$t===1/0)return;Pe.setup(ce,J,ze,ae,He);let yn,ht=Fe;if(He!==null&&(yn=Se.get(He),ht=de,ht.setIndex(yn)),ce.isMesh)J.wireframe===!0?(H.setLineWidth(J.wireframeLinewidth*Re()),ht.setMode(v.LINES)):ht.setMode(v.TRIANGLES);else if(ce.isLine){let $e=J.linewidth;$e===void 0&&($e=1),H.setLineWidth($e*Re()),ce.isLineSegments?ht.setMode(v.LINES):ce.isLineLoop?ht.setMode(v.LINE_LOOP):ht.setMode(v.LINE_STRIP)}else ce.isPoints?ht.setMode(v.POINTS):ce.isSprite&&ht.setMode(v.TRIANGLES);if(ce.isInstancedMesh)ht.renderInstances(lt,$t,ce.count);else if(ae.isInstancedBufferGeometry){const $e=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Fo=Math.min(ae.instanceCount,$e);ht.renderInstances(lt,$t,Fo)}else ht.render(lt,$t)},this.compile=function(w,$){function ae(J,ce,Ce){J.transparent===!0&&J.side===kn&&J.forceSinglePass===!1?(J.side=zt,J.needsUpdate=!0,us(J,ce,Ce),J.side=ui,J.needsUpdate=!0,us(J,ce,Ce),J.side=kn):us(J,ce,Ce)}m=se.get(w),m.init(),M.push(m),w.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(E._useLegacyLights),w.traverse(function(J){const ce=J.material;if(ce)if(Array.isArray(ce))for(let Ce=0;Ce<ce.length;Ce++){const Ie=ce[Ce];ae(Ie,w,J)}else ae(ce,w,J)}),M.pop(),m=null};let Ve=null;function Ct(w){Ve&&Ve(w)}function st(){Rt.stop()}function dn(){Rt.start()}const Rt=new _d;Rt.setAnimationLoop(Ct),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(w){Ve=w,U.setAnimationLoop(w),w===null?Rt.stop():Rt.start()},U.addEventListener("sessionstart",st),U.addEventListener("sessionend",dn),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera($),$=U.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,$,L),m=se.get(w,M.length),m.init(),M.push(m),ye.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ue.setFromProjectionMatrix(ye),ve=this.localClippingEnabled,le=pe.init(this.clippingPlanes,ve),x=te.get(w,d.length),x.init(),d.push(x),kc(w,$,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(Y,ie),this.info.render.frame++,le===!0&&pe.beginShadows();const ae=m.state.shadowsArray;if(fe.render(ae,w,$),le===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(x,w),m.setupLights(E._useLegacyLights),$.isArrayCamera){const J=$.cameras;for(let ce=0,Ce=J.length;ce<Ce;ce++){const Ie=J[ce];Bc(x,w,Ie,Ie.viewport)}}else Bc(x,w,$);L!==null&&(Z.updateMultisampleRenderTarget(L),Z.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(E,w,$),Pe.resetDefaultState(),O=-1,g=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function kc(w,$,ae,J){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)ae=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ue.intersectsSprite(w)){J&&Me.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);const Ie=S.update(w),ze=w.material;ze.visible&&x.push(w,Ie,ze,ae,Me.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ue.intersectsObject(w))){const Ie=S.update(w),ze=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Me.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Me.copy(Ie.boundingSphere.center)),Me.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(ze)){const He=Ie.groups;for(let je=0,Oe=He.length;je<Oe;je++){const qe=He[je],lt=ze[qe.materialIndex];lt&&lt.visible&&x.push(w,Ie,lt,ae,Me.z,qe)}}else ze.visible&&x.push(w,Ie,ze,ae,Me.z,null)}}const Ce=w.children;for(let Ie=0,ze=Ce.length;Ie<ze;Ie++)kc(Ce[Ie],$,ae,J)}function Bc(w,$,ae,J){const ce=w.opaque,Ce=w.transmissive,Ie=w.transparent;m.setupLightsView(ae),le===!0&&pe.setGlobalState(E.clippingPlanes,ae),Ce.length>0&&Hd(ce,Ce,$,ae),J&&H.viewport(_.copy(J)),ce.length>0&&ls(ce,$,ae),Ce.length>0&&ls(Ce,$,ae),Ie.length>0&&ls(Ie,$,ae),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Hd(w,$,ae,J){const ce=W.isWebGL2;xe===null&&(xe=new Ui(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")?Zr:ai,minFilter:Kr,samples:ce?4:0})),E.getDrawingBufferSize(Ae),ce?xe.setSize(Ae.x,Ae.y):xe.setSize(ac(Ae.x),ac(Ae.y));const Ce=E.getRenderTarget();E.setRenderTarget(xe),E.getClearColor(q),A=E.getClearAlpha(),A<1&&E.setClearColor(16777215,.5),E.clear();const Ie=E.toneMapping;E.toneMapping=oi,ls(w,ae,J),Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe);let ze=!1;for(let He=0,je=$.length;He<je;He++){const Oe=$[He],qe=Oe.object,lt=Oe.geometry,ft=Oe.material,$t=Oe.group;if(ft.side===kn&&qe.layers.test(J.layers)){const yn=ft.side;ft.side=zt,ft.needsUpdate=!0,zc(qe,ae,J,lt,ft,$t),ft.side=yn,ft.needsUpdate=!0,ze=!0}}ze===!0&&(Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe)),E.setRenderTarget(Ce),E.setClearColor(q,A),E.toneMapping=Ie}function ls(w,$,ae){const J=$.isScene===!0?$.overrideMaterial:null;for(let ce=0,Ce=w.length;ce<Ce;ce++){const Ie=w[ce],ze=Ie.object,He=Ie.geometry,je=J===null?Ie.material:J,Oe=Ie.group;ze.layers.test(ae.layers)&&zc(ze,$,ae,He,je,Oe)}}function zc(w,$,ae,J,ce,Ce){w.onBeforeRender(E,$,ae,J,ce,Ce),w.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ce.onBeforeRender(E,$,ae,J,w,Ce),ce.transparent===!0&&ce.side===kn&&ce.forceSinglePass===!1?(ce.side=zt,ce.needsUpdate=!0,E.renderBufferDirect(ae,$,J,ce,w,Ce),ce.side=ui,ce.needsUpdate=!0,E.renderBufferDirect(ae,$,J,ce,w,Ce),ce.side=kn):E.renderBufferDirect(ae,$,J,ce,w,Ce),w.onAfterRender(E,$,ae,J,ce,Ce)}function us(w,$,ae){$.isScene!==!0&&($=Le);const J=oe.get(w),ce=m.state.lights,Ce=m.state.shadowsArray,Ie=ce.state.version,ze=I.getParameters(w,ce.state,Ce,$,ae),He=I.getProgramCacheKey(ze);let je=J.programs;J.environment=w.isMeshStandardMaterial?$.environment:null,J.fog=$.fog,J.envMap=(w.isMeshStandardMaterial?ee:ne).get(w.envMap||J.environment),je===void 0&&(w.addEventListener("dispose",Ee),je=new Map,J.programs=je);let Oe=je.get(He);if(Oe!==void 0){if(J.currentProgram===Oe&&J.lightsStateVersion===Ie)return Hc(w,ze),Oe}else ze.uniforms=I.getUniforms(w),w.onBuild(ae,ze,E),w.onBeforeCompile(ze,E),Oe=I.acquireProgram(ze,He),je.set(He,Oe),J.uniforms=ze.uniforms;const qe=J.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=pe.uniform),Hc(w,ze),J.needsLights=qd(w),J.lightsStateVersion=Ie,J.needsLights&&(qe.ambientLightColor.value=ce.state.ambient,qe.lightProbe.value=ce.state.probe,qe.directionalLights.value=ce.state.directional,qe.directionalLightShadows.value=ce.state.directionalShadow,qe.spotLights.value=ce.state.spot,qe.spotLightShadows.value=ce.state.spotShadow,qe.rectAreaLights.value=ce.state.rectArea,qe.ltc_1.value=ce.state.rectAreaLTC1,qe.ltc_2.value=ce.state.rectAreaLTC2,qe.pointLights.value=ce.state.point,qe.pointLightShadows.value=ce.state.pointShadow,qe.hemisphereLights.value=ce.state.hemi,qe.directionalShadowMap.value=ce.state.directionalShadowMap,qe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,qe.spotShadowMap.value=ce.state.spotShadowMap,qe.spotLightMatrix.value=ce.state.spotLightMatrix,qe.spotLightMap.value=ce.state.spotLightMap,qe.pointShadowMap.value=ce.state.pointShadowMap,qe.pointShadowMatrix.value=ce.state.pointShadowMatrix);const lt=Oe.getUniforms(),ft=qs.seqWithValue(lt.seq,qe);return J.currentProgram=Oe,J.uniformsList=ft,Oe}function Hc(w,$){const ae=oe.get(w);ae.outputColorSpace=$.outputColorSpace,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function Gd(w,$,ae,J,ce){$.isScene!==!0&&($=Le),Z.resetTextureUnits();const Ce=$.fog,Ie=J.isMeshStandardMaterial?$.environment:null,ze=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qn,He=(J.isMeshStandardMaterial?ee:ne).get(J.envMap||Ie),je=J.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Oe=!!ae.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),qe=!!ae.morphAttributes.position,lt=!!ae.morphAttributes.normal,ft=!!ae.morphAttributes.color;let $t=oi;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&($t=E.toneMapping);const yn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ht=yn!==void 0?yn.length:0,$e=oe.get(J),Fo=m.state.lights;if(le===!0&&(ve===!0||w!==g)){const Ht=w===g&&J.id===O;pe.setState(J,w,Ht)}let dt=!1;J.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Fo.state.version||$e.outputColorSpace!==ze||ce.isInstancedMesh&&$e.instancing===!1||!ce.isInstancedMesh&&$e.instancing===!0||ce.isSkinnedMesh&&$e.skinning===!1||!ce.isSkinnedMesh&&$e.skinning===!0||ce.isInstancedMesh&&$e.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&$e.instancingColor===!1&&ce.instanceColor!==null||$e.envMap!==He||J.fog===!0&&$e.fog!==Ce||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==pe.numPlanes||$e.numIntersection!==pe.numIntersection)||$e.vertexAlphas!==je||$e.vertexTangents!==Oe||$e.morphTargets!==qe||$e.morphNormals!==lt||$e.morphColors!==ft||$e.toneMapping!==$t||W.isWebGL2===!0&&$e.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,$e.__version=J.version);let hi=$e.currentProgram;dt===!0&&(hi=us(J,$,ce));let Gc=!1,yr=!1,No=!1;const Lt=hi.getUniforms(),di=$e.uniforms;if(H.useProgram(hi.program)&&(Gc=!0,yr=!0,No=!0),J.id!==O&&(O=J.id,yr=!0),Gc||g!==w){Lt.setValue(v,"projectionMatrix",w.projectionMatrix),Lt.setValue(v,"viewMatrix",w.matrixWorldInverse);const Ht=Lt.map.cameraPosition;Ht!==void 0&&Ht.setValue(v,Me.setFromMatrixPosition(w.matrixWorld)),W.logarithmicDepthBuffer&&Lt.setValue(v,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Lt.setValue(v,"isOrthographic",w.isOrthographicCamera===!0),g!==w&&(g=w,yr=!0,No=!0)}if(ce.isSkinnedMesh){Lt.setOptional(v,ce,"bindMatrix"),Lt.setOptional(v,ce,"bindMatrixInverse");const Ht=ce.skeleton;Ht&&(W.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),Lt.setValue(v,"boneTexture",Ht.boneTexture,Z),Lt.setValue(v,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oo=ae.morphAttributes;if((Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0&&W.isWebGL2===!0)&&we.update(ce,ae,hi),(yr||$e.receiveShadow!==ce.receiveShadow)&&($e.receiveShadow=ce.receiveShadow,Lt.setValue(v,"receiveShadow",ce.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(di.envMap.value=He,di.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),yr&&(Lt.setValue(v,"toneMappingExposure",E.toneMappingExposure),$e.needsLights&&Vd(di,No),Ce&&J.fog===!0&&re.refreshFogUniforms(di,Ce),re.refreshMaterialUniforms(di,J,X,N,xe),qs.upload(v,$e.uniformsList,di,Z)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(qs.upload(v,$e.uniformsList,di,Z),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Lt.setValue(v,"center",ce.center),Lt.setValue(v,"modelViewMatrix",ce.modelViewMatrix),Lt.setValue(v,"normalMatrix",ce.normalMatrix),Lt.setValue(v,"modelMatrix",ce.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ht=J.uniformsGroups;for(let ko=0,Wd=Ht.length;ko<Wd;ko++)if(W.isWebGL2){const Vc=Ht[ko];Ne.update(Vc,hi),Ne.bind(Vc,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function Vd(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function qd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,$,ae){oe.get(w.texture).__webglTexture=$,oe.get(w.depthTexture).__webglTexture=ae;const J=oe.get(w);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=ae===void 0,J.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,$){const ae=oe.get(w);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(w,$=0,ae=0){L=w,C=$,R=ae;let J=!0,ce=null,Ce=!1,Ie=!1;if(w){const He=oe.get(w);He.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(v.FRAMEBUFFER,null),J=!1):He.__webglFramebuffer===void 0?Z.setupRenderTarget(w):He.__hasExternalTextures&&Z.rebindTextures(w,oe.get(w.texture).__webglTexture,oe.get(w.depthTexture).__webglTexture);const je=w.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);const Oe=oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[$])?ce=Oe[$][ae]:ce=Oe[$],Ce=!0):W.isWebGL2&&w.samples>0&&Z.useMultisampledRTT(w)===!1?ce=oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?ce=Oe[ae]:ce=Oe,_.copy(w.viewport),D.copy(w.scissor),G=w.scissorTest}else _.copy(j).multiplyScalar(X).floor(),D.copy(k).multiplyScalar(X).floor(),G=z;if(H.bindFramebuffer(v.FRAMEBUFFER,ce)&&W.drawBuffers&&J&&H.drawBuffers(w,ce),H.viewport(_),H.scissor(D),H.setScissorTest(G),Ce){const He=oe.get(w.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+$,He.__webglTexture,ae)}else if(Ie){const He=oe.get(w.texture),je=$||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,He.__webglTexture,ae||0,je)}O=-1},this.readRenderTargetPixels=function(w,$,ae,J,ce,Ce,Ie){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){H.bindFramebuffer(v.FRAMEBUFFER,ze);try{const He=w.texture,je=He.format,Oe=He.type;if(je!==an&&Be.convert(je)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Oe===Zr&&(F.has("EXT_color_buffer_half_float")||W.isWebGL2&&F.has("EXT_color_buffer_float"));if(Oe!==ai&&Be.convert(Oe)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===ni&&(W.isWebGL2||F.has("OES_texture_float")||F.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-J&&ae>=0&&ae<=w.height-ce&&v.readPixels($,ae,J,ce,Be.convert(je),Be.convert(Oe),Ce)}finally{const He=L!==null?oe.get(L).__webglFramebuffer:null;H.bindFramebuffer(v.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(w,$,ae=0){const J=Math.pow(2,-ae),ce=Math.floor($.image.width*J),Ce=Math.floor($.image.height*J);Z.setTexture2D($,0),v.copyTexSubImage2D(v.TEXTURE_2D,ae,0,0,w.x,w.y,ce,Ce),H.unbindTexture()},this.copyTextureToTexture=function(w,$,ae,J=0){const ce=$.image.width,Ce=$.image.height,Ie=Be.convert(ae.format),ze=Be.convert(ae.type);Z.setTexture2D(ae,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,ae.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,ae.unpackAlignment),$.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,J,w.x,w.y,ce,Ce,Ie,ze,$.image.data):$.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,J,w.x,w.y,$.mipmaps[0].width,$.mipmaps[0].height,Ie,$.mipmaps[0].data):v.texSubImage2D(v.TEXTURE_2D,J,w.x,w.y,Ie,ze,$.image),J===0&&ae.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(w,$,ae,J,ce=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=w.max.x-w.min.x+1,Ie=w.max.y-w.min.y+1,ze=w.max.z-w.min.z+1,He=Be.convert(J.format),je=Be.convert(J.type);let Oe;if(J.isData3DTexture)Z.setTexture3D(J,0),Oe=v.TEXTURE_3D;else if(J.isDataArrayTexture)Z.setTexture2DArray(J,0),Oe=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,J.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,J.unpackAlignment);const qe=v.getParameter(v.UNPACK_ROW_LENGTH),lt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),ft=v.getParameter(v.UNPACK_SKIP_PIXELS),$t=v.getParameter(v.UNPACK_SKIP_ROWS),yn=v.getParameter(v.UNPACK_SKIP_IMAGES),ht=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,ht.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ht.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,w.min.x),v.pixelStorei(v.UNPACK_SKIP_ROWS,w.min.y),v.pixelStorei(v.UNPACK_SKIP_IMAGES,w.min.z),ae.isDataTexture||ae.isData3DTexture?v.texSubImage3D(Oe,ce,$.x,$.y,$.z,Ce,Ie,ze,He,je,ht.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),v.compressedTexSubImage3D(Oe,ce,$.x,$.y,$.z,Ce,Ie,ze,He,ht.data)):v.texSubImage3D(Oe,ce,$.x,$.y,$.z,Ce,Ie,ze,He,je,ht),v.pixelStorei(v.UNPACK_ROW_LENGTH,qe),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,lt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,ft),v.pixelStorei(v.UNPACK_SKIP_ROWS,$t),v.pixelStorei(v.UNPACK_SKIP_IMAGES,yn),ce===0&&J.generateMipmaps&&v.generateMipmap(Oe),H.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),H.unbindTexture()},this.resetState=function(){C=0,R=0,L=null,H.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Cc?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Eo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Pi:id}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pi?St:qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bS extends yd{}bS.prototype.isWebGL1Renderer=!0;class SS extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Md extends ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qu=new Q,Wu=new Q,Xu=new mt,wa=new cd,Ns=new yo;class ES extends Et{constructor(e=new Xn,t=new Md){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)qu.fromBufferAttribute(t,r-1),Wu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=qu.distanceTo(Wu);e.setAttribute("lineDistance",new zn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;Xu.copy(r).invert(),wa.copy(e.ray).applyMatrix4(Xu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new Q,u=new Q,f=new Q,h=new Q,p=this.isLineSegments?2:1,b=i.index,m=i.attributes.position;if(b!==null){const d=Math.max(0,a.start),M=Math.min(b.count,a.start+a.count);for(let E=d,T=M-1;E<T;E+=p){const C=b.getX(E),R=b.getX(E+1);if(l.fromBufferAttribute(m,C),u.fromBufferAttribute(m,R),wa.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(h);O<e.near||O>e.far||t.push({distance:O,point:f.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let E=d,T=M-1;E<T;E+=p){if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,E+1),wa.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ju=new Q,$u=new Q;class yS extends ES{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ju.fromBufferAttribute(t,r),$u.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ju.distanceTo($u);e.setAttribute("lineDistance",new zn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Td extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ca=new mt,Yu=new Q,Ku=new Q;class MS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class TS extends MS{constructor(){super(new vd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AS extends Td{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new TS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wS extends Td{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);const xr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};function CS(){const n=[];for(let e=0;e<16;e++){const t=[e&1?1:-1,e&2?1:-1,e&4?1:-1,e&8?1:-1];n.push(t)}return n}function RS(){const n=[];for(let e=0;e<16;e++)for(let t=e+1;t<16;t++){let i=0;for(let r=0;r<4;r++)(e>>r&1)!==(t>>r&1)&&i++;i===1&&n.push([e,t])}return n}const LS={name:"Landing",methods:{enterKB(){location.hash="#/kb"}},mounted(){const n=this.$refs.canvas,e=n.parentElement.clientWidth,t=n.parentElement.clientHeight;n.width=e,n.height=t;const i=new yd({canvas:n,antialias:!0,alpha:!0});i.setSize(e,t),i.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const r=new SS;r.background=new tt(462888);const s=new Jt(45,e/t,.1,1e3);s.position.set(0,0,6);const a=new AS(16777215,.9);a.position.set(5,5,5),r.add(a),r.add(new wS(4210768,.6));const o=CS(),c=RS(),l=new Float32Array(c.length*2*3),u=new Xn;u.setAttribute("position",new un(l,3));const f=new Md({color:10216447,linewidth:2}),h=new yS(u,f);r.add(h);let p=.2,b=.4,x=!1,m=0,d=0;n.addEventListener("pointerdown",L=>{x=!0,m=L.clientX,d=L.clientY}),window.addEventListener("pointerup",()=>x=!1),window.addEventListener("pointermove",L=>{if(!x)return;const O=(L.clientX-m)*.01,g=(L.clientY-d)*.01;p+=g,b+=O,m=L.clientX,d=L.clientY});const M=(L,O)=>{const[g,_,D,G]=L,q=Math.cos(O.aXY),A=Math.sin(O.aXY),B=Math.cos(O.aZW),N=Math.sin(O.aZW),X=g*q-_*A,Y=g*A+_*q,ie=D*B-G*N,j=D*N+G*B,k=3,z=k/(k-j);return[X*z*.8,Y*z*.8,ie*z*.8]},E=L=>{for(let O=0;O<c.length;O++){const[g,_]=c[O],D=M(o[g],L),G=M(o[_],L);l[O*6+0]=D[0],l[O*6+1]=D[1],l[O*6+2]=D[2],l[O*6+3]=G[0],l[O*6+4]=G[1],l[O*6+5]=G[2]}u.attributes.position.needsUpdate=!0};E({aXY:p,aZW:b});let T;const C=()=>{p+=.005,b+=.007,E({aXY:p,aZW:b}),h.rotation.y+=.005,i.render(r,s),T=requestAnimationFrame(C)};C(),this._teardown=()=>{cancelAnimationFrame(T),i.dispose()},this.resetView=()=>{p=.2,b=.4},n.addEventListener("click",()=>this.enterKB());const R=()=>{const L=n.parentElement.clientWidth,O=n.parentElement.clientHeight;n.width=L,n.height=O,i.setSize(L,O),s.aspect=L/O,s.updateProjectionMatrix()};window.addEventListener("resize",R),this._resize=R},beforeUnmount(){this._teardown&&this._teardown(),this._resize&&window.removeEventListener("resize",this._resize)}},DS={class:"landing"},PS={ref:"canvas"};function US(n,e,t,i,r,s){return at(),ut("div",DS,[e[3]||(e[3]=K("h2",null,"Landing",-1)),e[4]||(e[4]=K("p",null,"Interactive 4D tesseract — click the shape to enter the knowledge base.",-1)),K("div",{id:"viz",onClick:e[1]||(e[1]=(...a)=>s.enterKB&&s.enterKB(...a)),style:{position:"relative",width:"800px",height:"500px","border-radius":"10px",overflow:"hidden","box-shadow":"0 8px 30px rgba(2,6,23,0.4)"}},[K("canvas",PS,null,512),K("button",{onClick:e[0]||(e[0]=Hr((...a)=>n.resetView&&n.resetView(...a),["stop"])),style:{position:"absolute",left:"12px",top:"12px","z-index":"10"}},"Reset view"),e[2]||(e[2]=K("div",{style:{position:"absolute",right:"12px",top:"12px","z-index":"10",color:"#fff","font-size":"13px","text-shadow":"0 1px 3px rgba(0,0,0,0.6)"}},"Click shape to enter KB",-1))])])}const IS=xr(LS,[["render",US],["__scopeId","data-v-f1749167"]]),FS="modulepreload",NS=function(n){return"/"+n},Zu={},Jn=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=NS(c),c in Zu)return;Zu[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":FS,l||(f.as="script"),f.crossOrigin="",f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),l)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};var OS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ad(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function kS(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var Ke={};const BS="Á",zS="á",HS="Ă",GS="ă",VS="∾",qS="∿",WS="∾̳",XS="Â",jS="â",$S="´",YS="А",KS="а",ZS="Æ",JS="æ",QS="⁡",eE="𝔄",tE="𝔞",nE="À",iE="à",rE="ℵ",sE="ℵ",oE="Α",aE="α",cE="Ā",lE="ā",uE="⨿",fE="&",hE="&",dE="⩕",pE="⩓",mE="∧",gE="⩜",_E="⩘",vE="⩚",xE="∠",bE="⦤",SE="∠",EE="⦨",yE="⦩",ME="⦪",TE="⦫",AE="⦬",wE="⦭",CE="⦮",RE="⦯",LE="∡",DE="∟",PE="⊾",UE="⦝",IE="∢",FE="Å",NE="⍼",OE="Ą",kE="ą",BE="𝔸",zE="𝕒",HE="⩯",GE="≈",VE="⩰",qE="≊",WE="≋",XE="'",jE="⁡",$E="≈",YE="≊",KE="Å",ZE="å",JE="𝒜",QE="𝒶",ey="≔",ty="*",ny="≈",iy="≍",ry="Ã",sy="ã",oy="Ä",ay="ä",cy="∳",ly="⨑",uy="≌",fy="϶",hy="‵",dy="∽",py="⋍",my="∖",gy="⫧",_y="⊽",vy="⌅",xy="⌆",by="⌅",Sy="⎵",Ey="⎶",yy="≌",My="Б",Ty="б",Ay="„",wy="∵",Cy="∵",Ry="∵",Ly="⦰",Dy="϶",Py="ℬ",Uy="ℬ",Iy="Β",Fy="β",Ny="ℶ",Oy="≬",ky="𝔅",By="𝔟",zy="⋂",Hy="◯",Gy="⋃",Vy="⨀",qy="⨁",Wy="⨂",Xy="⨆",jy="★",$y="▽",Yy="△",Ky="⨄",Zy="⋁",Jy="⋀",Qy="⤍",eM="⧫",tM="▪",nM="▴",iM="▾",rM="◂",sM="▸",oM="␣",aM="▒",cM="░",lM="▓",uM="█",fM="=⃥",hM="≡⃥",dM="⫭",pM="⌐",mM="𝔹",gM="𝕓",_M="⊥",vM="⊥",xM="⋈",bM="⧉",SM="┐",EM="╕",yM="╖",MM="╗",TM="┌",AM="╒",wM="╓",CM="╔",RM="─",LM="═",DM="┬",PM="╤",UM="╥",IM="╦",FM="┴",NM="╧",OM="╨",kM="╩",BM="⊟",zM="⊞",HM="⊠",GM="┘",VM="╛",qM="╜",WM="╝",XM="└",jM="╘",$M="╙",YM="╚",KM="│",ZM="║",JM="┼",QM="╪",eT="╫",tT="╬",nT="┤",iT="╡",rT="╢",sT="╣",oT="├",aT="╞",cT="╟",lT="╠",uT="‵",fT="˘",hT="˘",dT="¦",pT="𝒷",mT="ℬ",gT="⁏",_T="∽",vT="⋍",xT="⧅",bT="\\",ST="⟈",ET="•",yT="•",MT="≎",TT="⪮",AT="≏",wT="≎",CT="≏",RT="Ć",LT="ć",DT="⩄",PT="⩉",UT="⩋",IT="∩",FT="⋒",NT="⩇",OT="⩀",kT="ⅅ",BT="∩︀",zT="⁁",HT="ˇ",GT="ℭ",VT="⩍",qT="Č",WT="č",XT="Ç",jT="ç",$T="Ĉ",YT="ĉ",KT="∰",ZT="⩌",JT="⩐",QT="Ċ",eA="ċ",tA="¸",nA="¸",iA="⦲",rA="¢",sA="·",oA="·",aA="𝔠",cA="ℭ",lA="Ч",uA="ч",fA="✓",hA="✓",dA="Χ",pA="χ",mA="ˆ",gA="≗",_A="↺",vA="↻",xA="⊛",bA="⊚",SA="⊝",EA="⊙",yA="®",MA="Ⓢ",TA="⊖",AA="⊕",wA="⊗",CA="○",RA="⧃",LA="≗",DA="⨐",PA="⫯",UA="⧂",IA="∲",FA="”",NA="’",OA="♣",kA="♣",BA=":",zA="∷",HA="⩴",GA="≔",VA="≔",qA=",",WA="@",XA="∁",jA="∘",$A="∁",YA="ℂ",KA="≅",ZA="⩭",JA="≡",QA="∮",ew="∯",tw="∮",nw="𝕔",iw="ℂ",rw="∐",sw="∐",ow="©",aw="©",cw="℗",lw="∳",uw="↵",fw="✗",hw="⨯",dw="𝒞",pw="𝒸",mw="⫏",gw="⫑",_w="⫐",vw="⫒",xw="⋯",bw="⤸",Sw="⤵",Ew="⋞",yw="⋟",Mw="↶",Tw="⤽",Aw="⩈",ww="⩆",Cw="≍",Rw="∪",Lw="⋓",Dw="⩊",Pw="⊍",Uw="⩅",Iw="∪︀",Fw="↷",Nw="⤼",Ow="⋞",kw="⋟",Bw="⋎",zw="⋏",Hw="¤",Gw="↶",Vw="↷",qw="⋎",Ww="⋏",Xw="∲",jw="∱",$w="⌭",Yw="†",Kw="‡",Zw="ℸ",Jw="↓",Qw="↡",eC="⇓",tC="‐",nC="⫤",iC="⊣",rC="⤏",sC="˝",oC="Ď",aC="ď",cC="Д",lC="д",uC="‡",fC="⇊",hC="ⅅ",dC="ⅆ",pC="⤑",mC="⩷",gC="°",_C="∇",vC="Δ",xC="δ",bC="⦱",SC="⥿",EC="𝔇",yC="𝔡",MC="⥥",TC="⇃",AC="⇂",wC="´",CC="˙",RC="˝",LC="`",DC="˜",PC="⋄",UC="⋄",IC="⋄",FC="♦",NC="♦",OC="¨",kC="ⅆ",BC="ϝ",zC="⋲",HC="÷",GC="÷",VC="⋇",qC="⋇",WC="Ђ",XC="ђ",jC="⌞",$C="⌍",YC="$",KC="𝔻",ZC="𝕕",JC="¨",QC="˙",e1="⃜",t1="≐",n1="≑",i1="≐",r1="∸",s1="∔",o1="⊡",a1="⌆",c1="∯",l1="¨",u1="⇓",f1="⇐",h1="⇔",d1="⫤",p1="⟸",m1="⟺",g1="⟹",_1="⇒",v1="⊨",x1="⇑",b1="⇕",S1="∥",E1="⤓",y1="↓",M1="↓",T1="⇓",A1="⇵",w1="̑",C1="⇊",R1="⇃",L1="⇂",D1="⥐",P1="⥞",U1="⥖",I1="↽",F1="⥟",N1="⥗",O1="⇁",k1="↧",B1="⊤",z1="⤐",H1="⌟",G1="⌌",V1="𝒟",q1="𝒹",W1="Ѕ",X1="ѕ",j1="⧶",$1="Đ",Y1="đ",K1="⋱",Z1="▿",J1="▾",Q1="⇵",eR="⥯",tR="⦦",nR="Џ",iR="џ",rR="⟿",sR="É",oR="é",aR="⩮",cR="Ě",lR="ě",uR="Ê",fR="ê",hR="≖",dR="≕",pR="Э",mR="э",gR="⩷",_R="Ė",vR="ė",xR="≑",bR="ⅇ",SR="≒",ER="𝔈",yR="𝔢",MR="⪚",TR="È",AR="è",wR="⪖",CR="⪘",RR="⪙",LR="∈",DR="⏧",PR="ℓ",UR="⪕",IR="⪗",FR="Ē",NR="ē",OR="∅",kR="∅",BR="◻",zR="∅",HR="▫",GR=" ",VR=" ",qR=" ",WR="Ŋ",XR="ŋ",jR=" ",$R="Ę",YR="ę",KR="𝔼",ZR="𝕖",JR="⋕",QR="⧣",eL="⩱",tL="ε",nL="Ε",iL="ε",rL="ϵ",sL="≖",oL="≕",aL="≂",cL="⪖",lL="⪕",uL="⩵",fL="=",hL="≂",dL="≟",pL="⇌",mL="≡",gL="⩸",_L="⧥",vL="⥱",xL="≓",bL="ℯ",SL="ℰ",EL="≐",yL="⩳",ML="≂",TL="Η",AL="η",wL="Ð",CL="ð",RL="Ë",LL="ë",DL="€",PL="!",UL="∃",IL="∃",FL="ℰ",NL="ⅇ",OL="ⅇ",kL="≒",BL="Ф",zL="ф",HL="♀",GL="ﬃ",VL="ﬀ",qL="ﬄ",WL="𝔉",XL="𝔣",jL="ﬁ",$L="◼",YL="▪",KL="fj",ZL="♭",JL="ﬂ",QL="▱",eD="ƒ",tD="𝔽",nD="𝕗",iD="∀",rD="∀",sD="⋔",oD="⫙",aD="ℱ",cD="⨍",lD="½",uD="⅓",fD="¼",hD="⅕",dD="⅙",pD="⅛",mD="⅔",gD="⅖",_D="¾",vD="⅗",xD="⅜",bD="⅘",SD="⅚",ED="⅝",yD="⅞",MD="⁄",TD="⌢",AD="𝒻",wD="ℱ",CD="ǵ",RD="Γ",LD="γ",DD="Ϝ",PD="ϝ",UD="⪆",ID="Ğ",FD="ğ",ND="Ģ",OD="Ĝ",kD="ĝ",BD="Г",zD="г",HD="Ġ",GD="ġ",VD="≥",qD="≧",WD="⪌",XD="⋛",jD="≥",$D="≧",YD="⩾",KD="⪩",ZD="⩾",JD="⪀",QD="⪂",eP="⪄",tP="⋛︀",nP="⪔",iP="𝔊",rP="𝔤",sP="≫",oP="⋙",aP="⋙",cP="ℷ",lP="Ѓ",uP="ѓ",fP="⪥",hP="≷",dP="⪒",pP="⪤",mP="⪊",gP="⪊",_P="⪈",vP="≩",xP="⪈",bP="≩",SP="⋧",EP="𝔾",yP="𝕘",MP="`",TP="≥",AP="⋛",wP="≧",CP="⪢",RP="≷",LP="⩾",DP="≳",PP="𝒢",UP="ℊ",IP="≳",FP="⪎",NP="⪐",OP="⪧",kP="⩺",BP=">",zP=">",HP="≫",GP="⋗",VP="⦕",qP="⩼",WP="⪆",XP="⥸",jP="⋗",$P="⋛",YP="⪌",KP="≷",ZP="≳",JP="≩︀",QP="≩︀",e2="ˇ",t2=" ",n2="½",i2="ℋ",r2="Ъ",s2="ъ",o2="⥈",a2="↔",c2="⇔",l2="↭",u2="^",f2="ℏ",h2="Ĥ",d2="ĥ",p2="♥",m2="♥",g2="…",_2="⊹",v2="𝔥",x2="ℌ",b2="ℋ",S2="⤥",E2="⤦",y2="⇿",M2="∻",T2="↩",A2="↪",w2="𝕙",C2="ℍ",R2="―",L2="─",D2="𝒽",P2="ℋ",U2="ℏ",I2="Ħ",F2="ħ",N2="≎",O2="≏",k2="⁃",B2="‐",z2="Í",H2="í",G2="⁣",V2="Î",q2="î",W2="И",X2="и",j2="İ",$2="Е",Y2="е",K2="¡",Z2="⇔",J2="𝔦",Q2="ℑ",eU="Ì",tU="ì",nU="ⅈ",iU="⨌",rU="∭",sU="⧜",oU="℩",aU="Ĳ",cU="ĳ",lU="Ī",uU="ī",fU="ℑ",hU="ⅈ",dU="ℐ",pU="ℑ",mU="ı",gU="ℑ",_U="⊷",vU="Ƶ",xU="⇒",bU="℅",SU="∞",EU="⧝",yU="ı",MU="⊺",TU="∫",AU="∬",wU="ℤ",CU="∫",RU="⊺",LU="⋂",DU="⨗",PU="⨼",UU="⁣",IU="⁢",FU="Ё",NU="ё",OU="Į",kU="į",BU="𝕀",zU="𝕚",HU="Ι",GU="ι",VU="⨼",qU="¿",WU="𝒾",XU="ℐ",jU="∈",$U="⋵",YU="⋹",KU="⋴",ZU="⋳",JU="∈",QU="⁢",e3="Ĩ",t3="ĩ",n3="І",i3="і",r3="Ï",s3="ï",o3="Ĵ",a3="ĵ",c3="Й",l3="й",u3="𝔍",f3="𝔧",h3="ȷ",d3="𝕁",p3="𝕛",m3="𝒥",g3="𝒿",_3="Ј",v3="ј",x3="Є",b3="є",S3="Κ",E3="κ",y3="ϰ",M3="Ķ",T3="ķ",A3="К",w3="к",C3="𝔎",R3="𝔨",L3="ĸ",D3="Х",P3="х",U3="Ќ",I3="ќ",F3="𝕂",N3="𝕜",O3="𝒦",k3="𝓀",B3="⇚",z3="Ĺ",H3="ĺ",G3="⦴",V3="ℒ",q3="Λ",W3="λ",X3="⟨",j3="⟪",$3="⦑",Y3="⟨",K3="⪅",Z3="ℒ",J3="«",Q3="⇤",eI="⤟",tI="←",nI="↞",iI="⇐",rI="⤝",sI="↩",oI="↫",aI="⤹",cI="⥳",lI="↢",uI="⤙",fI="⤛",hI="⪫",dI="⪭",pI="⪭︀",mI="⤌",gI="⤎",_I="❲",vI="{",xI="[",bI="⦋",SI="⦏",EI="⦍",yI="Ľ",MI="ľ",TI="Ļ",AI="ļ",wI="⌈",CI="{",RI="Л",LI="л",DI="⤶",PI="“",UI="„",II="⥧",FI="⥋",NI="↲",OI="≤",kI="≦",BI="⟨",zI="⇤",HI="←",GI="←",VI="⇐",qI="⇆",WI="↢",XI="⌈",jI="⟦",$I="⥡",YI="⥙",KI="⇃",ZI="⌊",JI="↽",QI="↼",eF="⇇",tF="↔",nF="↔",iF="⇔",rF="⇆",sF="⇋",oF="↭",aF="⥎",cF="↤",lF="⊣",uF="⥚",fF="⋋",hF="⧏",dF="⊲",pF="⊴",mF="⥑",gF="⥠",_F="⥘",vF="↿",xF="⥒",bF="↼",SF="⪋",EF="⋚",yF="≤",MF="≦",TF="⩽",AF="⪨",wF="⩽",CF="⩿",RF="⪁",LF="⪃",DF="⋚︀",PF="⪓",UF="⪅",IF="⋖",FF="⋚",NF="⪋",OF="⋚",kF="≦",BF="≶",zF="≶",HF="⪡",GF="≲",VF="⩽",qF="≲",WF="⥼",XF="⌊",jF="𝔏",$F="𝔩",YF="≶",KF="⪑",ZF="⥢",JF="↽",QF="↼",eN="⥪",tN="▄",nN="Љ",iN="љ",rN="⇇",sN="≪",oN="⋘",aN="⌞",cN="⇚",lN="⥫",uN="◺",fN="Ŀ",hN="ŀ",dN="⎰",pN="⎰",mN="⪉",gN="⪉",_N="⪇",vN="≨",xN="⪇",bN="≨",SN="⋦",EN="⟬",yN="⇽",MN="⟦",TN="⟵",AN="⟵",wN="⟸",CN="⟷",RN="⟷",LN="⟺",DN="⟼",PN="⟶",UN="⟶",IN="⟹",FN="↫",NN="↬",ON="⦅",kN="𝕃",BN="𝕝",zN="⨭",HN="⨴",GN="∗",VN="_",qN="↙",WN="↘",XN="◊",jN="◊",$N="⧫",YN="(",KN="⦓",ZN="⇆",JN="⌟",QN="⇋",eO="⥭",tO="‎",nO="⊿",iO="‹",rO="𝓁",sO="ℒ",oO="↰",aO="↰",cO="≲",lO="⪍",uO="⪏",fO="[",hO="‘",dO="‚",pO="Ł",mO="ł",gO="⪦",_O="⩹",vO="<",xO="<",bO="≪",SO="⋖",EO="⋋",yO="⋉",MO="⥶",TO="⩻",AO="◃",wO="⊴",CO="◂",RO="⦖",LO="⥊",DO="⥦",PO="≨︀",UO="≨︀",IO="¯",FO="♂",NO="✠",OO="✠",kO="↦",BO="↦",zO="↧",HO="↤",GO="↥",VO="▮",qO="⨩",WO="М",XO="м",jO="—",$O="∺",YO="∡",KO=" ",ZO="ℳ",JO="𝔐",QO="𝔪",ek="℧",tk="µ",nk="*",ik="⫰",rk="∣",sk="·",ok="⊟",ak="−",ck="∸",lk="⨪",uk="∓",fk="⫛",hk="…",dk="∓",pk="⊧",mk="𝕄",gk="𝕞",_k="∓",vk="𝓂",xk="ℳ",bk="∾",Sk="Μ",Ek="μ",yk="⊸",Mk="⊸",Tk="∇",Ak="Ń",wk="ń",Ck="∠⃒",Rk="≉",Lk="⩰̸",Dk="≋̸",Pk="ŉ",Uk="≉",Ik="♮",Fk="ℕ",Nk="♮",Ok=" ",kk="≎̸",Bk="≏̸",zk="⩃",Hk="Ň",Gk="ň",Vk="Ņ",qk="ņ",Wk="≇",Xk="⩭̸",jk="⩂",$k="Н",Yk="н",Kk="–",Zk="⤤",Jk="↗",Qk="⇗",eB="↗",tB="≠",nB="≐̸",iB="​",rB="​",sB="​",oB="​",aB="≢",cB="⤨",lB="≂̸",uB="≫",fB="≪",hB=`
`,dB="∄",pB="∄",mB="𝔑",gB="𝔫",_B="≧̸",vB="≱",xB="≱",bB="≧̸",SB="⩾̸",EB="⩾̸",yB="⋙̸",MB="≵",TB="≫⃒",AB="≯",wB="≯",CB="≫̸",RB="↮",LB="⇎",DB="⫲",PB="∋",UB="⋼",IB="⋺",FB="∋",NB="Њ",OB="њ",kB="↚",BB="⇍",zB="‥",HB="≦̸",GB="≰",VB="↚",qB="⇍",WB="↮",XB="⇎",jB="≰",$B="≦̸",YB="⩽̸",KB="⩽̸",ZB="≮",JB="⋘̸",QB="≴",ez="≪⃒",tz="≮",nz="⋪",iz="⋬",rz="≪̸",sz="∤",oz="⁠",az=" ",cz="𝕟",lz="ℕ",uz="⫬",fz="¬",hz="≢",dz="≭",pz="∦",mz="∉",gz="≠",_z="≂̸",vz="∄",xz="≯",bz="≱",Sz="≧̸",Ez="≫̸",yz="≹",Mz="⩾̸",Tz="≵",Az="≎̸",wz="≏̸",Cz="∉",Rz="⋵̸",Lz="⋹̸",Dz="∉",Pz="⋷",Uz="⋶",Iz="⧏̸",Fz="⋪",Nz="⋬",Oz="≮",kz="≰",Bz="≸",zz="≪̸",Hz="⩽̸",Gz="≴",Vz="⪢̸",qz="⪡̸",Wz="∌",Xz="∌",jz="⋾",$z="⋽",Yz="⊀",Kz="⪯̸",Zz="⋠",Jz="∌",Qz="⧐̸",eH="⋫",tH="⋭",nH="⊏̸",iH="⋢",rH="⊐̸",sH="⋣",oH="⊂⃒",aH="⊈",cH="⊁",lH="⪰̸",uH="⋡",fH="≿̸",hH="⊃⃒",dH="⊉",pH="≁",mH="≄",gH="≇",_H="≉",vH="∤",xH="∦",bH="∦",SH="⫽⃥",EH="∂̸",yH="⨔",MH="⊀",TH="⋠",AH="⊀",wH="⪯̸",CH="⪯̸",RH="⤳̸",LH="↛",DH="⇏",PH="↝̸",UH="↛",IH="⇏",FH="⋫",NH="⋭",OH="⊁",kH="⋡",BH="⪰̸",zH="𝒩",HH="𝓃",GH="∤",VH="∦",qH="≁",WH="≄",XH="≄",jH="∤",$H="∦",YH="⋢",KH="⋣",ZH="⊄",JH="⫅̸",QH="⊈",eG="⊂⃒",tG="⊈",nG="⫅̸",iG="⊁",rG="⪰̸",sG="⊅",oG="⫆̸",aG="⊉",cG="⊃⃒",lG="⊉",uG="⫆̸",fG="≹",hG="Ñ",dG="ñ",pG="≸",mG="⋪",gG="⋬",_G="⋫",vG="⋭",xG="Ν",bG="ν",SG="#",EG="№",yG=" ",MG="≍⃒",TG="⊬",AG="⊭",wG="⊮",CG="⊯",RG="≥⃒",LG=">⃒",DG="⤄",PG="⧞",UG="⤂",IG="≤⃒",FG="<⃒",NG="⊴⃒",OG="⤃",kG="⊵⃒",BG="∼⃒",zG="⤣",HG="↖",GG="⇖",VG="↖",qG="⤧",WG="Ó",XG="ó",jG="⊛",$G="Ô",YG="ô",KG="⊚",ZG="О",JG="о",QG="⊝",eV="Ő",tV="ő",nV="⨸",iV="⊙",rV="⦼",sV="Œ",oV="œ",aV="⦿",cV="𝔒",lV="𝔬",uV="˛",fV="Ò",hV="ò",dV="⧁",pV="⦵",mV="Ω",gV="∮",_V="↺",vV="⦾",xV="⦻",bV="‾",SV="⧀",EV="Ō",yV="ō",MV="Ω",TV="ω",AV="Ο",wV="ο",CV="⦶",RV="⊖",LV="𝕆",DV="𝕠",PV="⦷",UV="“",IV="‘",FV="⦹",NV="⊕",OV="↻",kV="⩔",BV="∨",zV="⩝",HV="ℴ",GV="ℴ",VV="ª",qV="º",WV="⊶",XV="⩖",jV="⩗",$V="⩛",YV="Ⓢ",KV="𝒪",ZV="ℴ",JV="Ø",QV="ø",e4="⊘",t4="Õ",n4="õ",i4="⨶",r4="⨷",s4="⊗",o4="Ö",a4="ö",c4="⌽",l4="‾",u4="⏞",f4="⎴",h4="⏜",d4="¶",p4="∥",m4="∥",g4="⫳",_4="⫽",v4="∂",x4="∂",b4="П",S4="п",E4="%",y4=".",M4="‰",T4="⊥",A4="‱",w4="𝔓",C4="𝔭",R4="Φ",L4="φ",D4="ϕ",P4="ℳ",U4="☎",I4="Π",F4="π",N4="⋔",O4="ϖ",k4="ℏ",B4="ℎ",z4="ℏ",H4="⨣",G4="⊞",V4="⨢",q4="+",W4="∔",X4="⨥",j4="⩲",$4="±",Y4="±",K4="⨦",Z4="⨧",J4="±",Q4="ℌ",eq="⨕",tq="𝕡",nq="ℙ",iq="£",rq="⪷",sq="⪻",oq="≺",aq="≼",cq="⪷",lq="≺",uq="≼",fq="≺",hq="⪯",dq="≼",pq="≾",mq="⪯",gq="⪹",_q="⪵",vq="⋨",xq="⪯",bq="⪳",Sq="≾",Eq="′",yq="″",Mq="ℙ",Tq="⪹",Aq="⪵",wq="⋨",Cq="∏",Rq="∏",Lq="⌮",Dq="⌒",Pq="⌓",Uq="∝",Iq="∝",Fq="∷",Nq="∝",Oq="≾",kq="⊰",Bq="𝒫",zq="𝓅",Hq="Ψ",Gq="ψ",Vq=" ",qq="𝔔",Wq="𝔮",Xq="⨌",jq="𝕢",$q="ℚ",Yq="⁗",Kq="𝒬",Zq="𝓆",Jq="ℍ",Qq="⨖",eW="?",tW="≟",nW='"',iW='"',rW="⇛",sW="∽̱",oW="Ŕ",aW="ŕ",cW="√",lW="⦳",uW="⟩",fW="⟫",hW="⦒",dW="⦥",pW="⟩",mW="»",gW="⥵",_W="⇥",vW="⤠",xW="⤳",bW="→",SW="↠",EW="⇒",yW="⤞",MW="↪",TW="↬",AW="⥅",wW="⥴",CW="⤖",RW="↣",LW="↝",DW="⤚",PW="⤜",UW="∶",IW="ℚ",FW="⤍",NW="⤏",OW="⤐",kW="❳",BW="}",zW="]",HW="⦌",GW="⦎",VW="⦐",qW="Ř",WW="ř",XW="Ŗ",jW="ŗ",$W="⌉",YW="}",KW="Р",ZW="р",JW="⤷",QW="⥩",e5="”",t5="”",n5="↳",i5="ℜ",r5="ℛ",s5="ℜ",o5="ℝ",a5="ℜ",c5="▭",l5="®",u5="®",f5="∋",h5="⇋",d5="⥯",p5="⥽",m5="⌋",g5="𝔯",_5="ℜ",v5="⥤",x5="⇁",b5="⇀",S5="⥬",E5="Ρ",y5="ρ",M5="ϱ",T5="⟩",A5="⇥",w5="→",C5="→",R5="⇒",L5="⇄",D5="↣",P5="⌉",U5="⟧",I5="⥝",F5="⥕",N5="⇂",O5="⌋",k5="⇁",B5="⇀",z5="⇄",H5="⇌",G5="⇉",V5="↝",q5="↦",W5="⊢",X5="⥛",j5="⋌",$5="⧐",Y5="⊳",K5="⊵",Z5="⥏",J5="⥜",Q5="⥔",e8="↾",t8="⥓",n8="⇀",i8="˚",r8="≓",s8="⇄",o8="⇌",a8="‏",c8="⎱",l8="⎱",u8="⫮",f8="⟭",h8="⇾",d8="⟧",p8="⦆",m8="𝕣",g8="ℝ",_8="⨮",v8="⨵",x8="⥰",b8=")",S8="⦔",E8="⨒",y8="⇉",M8="⇛",T8="›",A8="𝓇",w8="ℛ",C8="↱",R8="↱",L8="]",D8="’",P8="’",U8="⋌",I8="⋊",F8="▹",N8="⊵",O8="▸",k8="⧎",B8="⧴",z8="⥨",H8="℞",G8="Ś",V8="ś",q8="‚",W8="⪸",X8="Š",j8="š",$8="⪼",Y8="≻",K8="≽",Z8="⪰",J8="⪴",Q8="Ş",e6="ş",t6="Ŝ",n6="ŝ",i6="⪺",r6="⪶",s6="⋩",o6="⨓",a6="≿",c6="С",l6="с",u6="⊡",f6="⋅",h6="⩦",d6="⤥",p6="↘",m6="⇘",g6="↘",_6="§",v6=";",x6="⤩",b6="∖",S6="∖",E6="✶",y6="𝔖",M6="𝔰",T6="⌢",A6="♯",w6="Щ",C6="щ",R6="Ш",L6="ш",D6="↓",P6="←",U6="∣",I6="∥",F6="→",N6="↑",O6="­",k6="Σ",B6="σ",z6="ς",H6="ς",G6="∼",V6="⩪",q6="≃",W6="≃",X6="⪞",j6="⪠",$6="⪝",Y6="⪟",K6="≆",Z6="⨤",J6="⥲",Q6="←",e9="∘",t9="∖",n9="⨳",i9="⧤",r9="∣",s9="⌣",o9="⪪",a9="⪬",c9="⪬︀",l9="Ь",u9="ь",f9="⌿",h9="⧄",d9="/",p9="𝕊",m9="𝕤",g9="♠",_9="♠",v9="∥",x9="⊓",b9="⊓︀",S9="⊔",E9="⊔︀",y9="√",M9="⊏",T9="⊑",A9="⊏",w9="⊑",C9="⊐",R9="⊒",L9="⊐",D9="⊒",P9="□",U9="□",I9="⊓",F9="⊏",N9="⊑",O9="⊐",k9="⊒",B9="⊔",z9="▪",H9="□",G9="▪",V9="→",q9="𝒮",W9="𝓈",X9="∖",j9="⌣",$9="⋆",Y9="⋆",K9="☆",Z9="★",J9="ϵ",Q9="ϕ",e7="¯",t7="⊂",n7="⋐",i7="⪽",r7="⫅",s7="⊆",o7="⫃",a7="⫁",c7="⫋",l7="⊊",u7="⪿",f7="⥹",h7="⊂",d7="⋐",p7="⊆",m7="⫅",g7="⊆",_7="⊊",v7="⫋",x7="⫇",b7="⫕",S7="⫓",E7="⪸",y7="≻",M7="≽",T7="≻",A7="⪰",w7="≽",C7="≿",R7="⪰",L7="⪺",D7="⪶",P7="⋩",U7="≿",I7="∋",F7="∑",N7="∑",O7="♪",k7="¹",B7="²",z7="³",H7="⊃",G7="⋑",V7="⪾",q7="⫘",W7="⫆",X7="⊇",j7="⫄",$7="⊃",Y7="⊇",K7="⟉",Z7="⫗",J7="⥻",Q7="⫂",eX="⫌",tX="⊋",nX="⫀",iX="⊃",rX="⋑",sX="⊇",oX="⫆",aX="⊋",cX="⫌",lX="⫈",uX="⫔",fX="⫖",hX="⤦",dX="↙",pX="⇙",mX="↙",gX="⤪",_X="ß",vX="	",xX="⌖",bX="Τ",SX="τ",EX="⎴",yX="Ť",MX="ť",TX="Ţ",AX="ţ",wX="Т",CX="т",RX="⃛",LX="⌕",DX="𝔗",PX="𝔱",UX="∴",IX="∴",FX="∴",NX="Θ",OX="θ",kX="ϑ",BX="ϑ",zX="≈",HX="∼",GX="  ",VX=" ",qX=" ",WX="≈",XX="∼",jX="Þ",$X="þ",YX="˜",KX="∼",ZX="≃",JX="≅",QX="≈",ej="⨱",tj="⊠",nj="×",ij="⨰",rj="∭",sj="⤨",oj="⌶",aj="⫱",cj="⊤",lj="𝕋",uj="𝕥",fj="⫚",hj="⤩",dj="‴",pj="™",mj="™",gj="▵",_j="▿",vj="◃",xj="⊴",bj="≜",Sj="▹",Ej="⊵",yj="◬",Mj="≜",Tj="⨺",Aj="⃛",wj="⨹",Cj="⧍",Rj="⨻",Lj="⏢",Dj="𝒯",Pj="𝓉",Uj="Ц",Ij="ц",Fj="Ћ",Nj="ћ",Oj="Ŧ",kj="ŧ",Bj="≬",zj="↞",Hj="↠",Gj="Ú",Vj="ú",qj="↑",Wj="↟",Xj="⇑",jj="⥉",$j="Ў",Yj="ў",Kj="Ŭ",Zj="ŭ",Jj="Û",Qj="û",e$="У",t$="у",n$="⇅",i$="Ű",r$="ű",s$="⥮",o$="⥾",a$="𝔘",c$="𝔲",l$="Ù",u$="ù",f$="⥣",h$="↿",d$="↾",p$="▀",m$="⌜",g$="⌜",_$="⌏",v$="◸",x$="Ū",b$="ū",S$="¨",E$="_",y$="⏟",M$="⎵",T$="⏝",A$="⋃",w$="⊎",C$="Ų",R$="ų",L$="𝕌",D$="𝕦",P$="⤒",U$="↑",I$="↑",F$="⇑",N$="⇅",O$="↕",k$="↕",B$="⇕",z$="⥮",H$="↿",G$="↾",V$="⊎",q$="↖",W$="↗",X$="υ",j$="ϒ",$$="ϒ",Y$="Υ",K$="υ",Z$="↥",J$="⊥",Q$="⇈",eY="⌝",tY="⌝",nY="⌎",iY="Ů",rY="ů",sY="◹",oY="𝒰",aY="𝓊",cY="⋰",lY="Ũ",uY="ũ",fY="▵",hY="▴",dY="⇈",pY="Ü",mY="ü",gY="⦧",_Y="⦜",vY="ϵ",xY="ϰ",bY="∅",SY="ϕ",EY="ϖ",yY="∝",MY="↕",TY="⇕",AY="ϱ",wY="ς",CY="⊊︀",RY="⫋︀",LY="⊋︀",DY="⫌︀",PY="ϑ",UY="⊲",IY="⊳",FY="⫨",NY="⫫",OY="⫩",kY="В",BY="в",zY="⊢",HY="⊨",GY="⊩",VY="⊫",qY="⫦",WY="⊻",XY="∨",jY="⋁",$Y="≚",YY="⋮",KY="|",ZY="‖",JY="|",QY="‖",eK="∣",tK="|",nK="❘",iK="≀",rK=" ",sK="𝔙",oK="𝔳",aK="⊲",cK="⊂⃒",lK="⊃⃒",uK="𝕍",fK="𝕧",hK="∝",dK="⊳",pK="𝒱",mK="𝓋",gK="⫋︀",_K="⊊︀",vK="⫌︀",xK="⊋︀",bK="⊪",SK="⦚",EK="Ŵ",yK="ŵ",MK="⩟",TK="∧",AK="⋀",wK="≙",CK="℘",RK="𝔚",LK="𝔴",DK="𝕎",PK="𝕨",UK="℘",IK="≀",FK="≀",NK="𝒲",OK="𝓌",kK="⋂",BK="◯",zK="⋃",HK="▽",GK="𝔛",VK="𝔵",qK="⟷",WK="⟺",XK="Ξ",jK="ξ",$K="⟵",YK="⟸",KK="⟼",ZK="⋻",JK="⨀",QK="𝕏",eZ="𝕩",tZ="⨁",nZ="⨂",iZ="⟶",rZ="⟹",sZ="𝒳",oZ="𝓍",aZ="⨆",cZ="⨄",lZ="△",uZ="⋁",fZ="⋀",hZ="Ý",dZ="ý",pZ="Я",mZ="я",gZ="Ŷ",_Z="ŷ",vZ="Ы",xZ="ы",bZ="¥",SZ="𝔜",EZ="𝔶",yZ="Ї",MZ="ї",TZ="𝕐",AZ="𝕪",wZ="𝒴",CZ="𝓎",RZ="Ю",LZ="ю",DZ="ÿ",PZ="Ÿ",UZ="Ź",IZ="ź",FZ="Ž",NZ="ž",OZ="З",kZ="з",BZ="Ż",zZ="ż",HZ="ℨ",GZ="​",VZ="Ζ",qZ="ζ",WZ="𝔷",XZ="ℨ",jZ="Ж",$Z="ж",YZ="⇝",KZ="𝕫",ZZ="ℤ",JZ="𝒵",QZ="𝓏",eJ="‍",tJ="‌",nJ={Aacute:BS,aacute:zS,Abreve:HS,abreve:GS,ac:VS,acd:qS,acE:WS,Acirc:XS,acirc:jS,acute:$S,Acy:YS,acy:KS,AElig:ZS,aelig:JS,af:QS,Afr:eE,afr:tE,Agrave:nE,agrave:iE,alefsym:rE,aleph:sE,Alpha:oE,alpha:aE,Amacr:cE,amacr:lE,amalg:uE,amp:fE,AMP:hE,andand:dE,And:pE,and:mE,andd:gE,andslope:_E,andv:vE,ang:xE,ange:bE,angle:SE,angmsdaa:EE,angmsdab:yE,angmsdac:ME,angmsdad:TE,angmsdae:AE,angmsdaf:wE,angmsdag:CE,angmsdah:RE,angmsd:LE,angrt:DE,angrtvb:PE,angrtvbd:UE,angsph:IE,angst:FE,angzarr:NE,Aogon:OE,aogon:kE,Aopf:BE,aopf:zE,apacir:HE,ap:GE,apE:VE,ape:qE,apid:WE,apos:XE,ApplyFunction:jE,approx:$E,approxeq:YE,Aring:KE,aring:ZE,Ascr:JE,ascr:QE,Assign:ey,ast:ty,asymp:ny,asympeq:iy,Atilde:ry,atilde:sy,Auml:oy,auml:ay,awconint:cy,awint:ly,backcong:uy,backepsilon:fy,backprime:hy,backsim:dy,backsimeq:py,Backslash:my,Barv:gy,barvee:_y,barwed:vy,Barwed:xy,barwedge:by,bbrk:Sy,bbrktbrk:Ey,bcong:yy,Bcy:My,bcy:Ty,bdquo:Ay,becaus:wy,because:Cy,Because:Ry,bemptyv:Ly,bepsi:Dy,bernou:Py,Bernoullis:Uy,Beta:Iy,beta:Fy,beth:Ny,between:Oy,Bfr:ky,bfr:By,bigcap:zy,bigcirc:Hy,bigcup:Gy,bigodot:Vy,bigoplus:qy,bigotimes:Wy,bigsqcup:Xy,bigstar:jy,bigtriangledown:$y,bigtriangleup:Yy,biguplus:Ky,bigvee:Zy,bigwedge:Jy,bkarow:Qy,blacklozenge:eM,blacksquare:tM,blacktriangle:nM,blacktriangledown:iM,blacktriangleleft:rM,blacktriangleright:sM,blank:oM,blk12:aM,blk14:cM,blk34:lM,block:uM,bne:fM,bnequiv:hM,bNot:dM,bnot:pM,Bopf:mM,bopf:gM,bot:_M,bottom:vM,bowtie:xM,boxbox:bM,boxdl:SM,boxdL:EM,boxDl:yM,boxDL:MM,boxdr:TM,boxdR:AM,boxDr:wM,boxDR:CM,boxh:RM,boxH:LM,boxhd:DM,boxHd:PM,boxhD:UM,boxHD:IM,boxhu:FM,boxHu:NM,boxhU:OM,boxHU:kM,boxminus:BM,boxplus:zM,boxtimes:HM,boxul:GM,boxuL:VM,boxUl:qM,boxUL:WM,boxur:XM,boxuR:jM,boxUr:$M,boxUR:YM,boxv:KM,boxV:ZM,boxvh:JM,boxvH:QM,boxVh:eT,boxVH:tT,boxvl:nT,boxvL:iT,boxVl:rT,boxVL:sT,boxvr:oT,boxvR:aT,boxVr:cT,boxVR:lT,bprime:uT,breve:fT,Breve:hT,brvbar:dT,bscr:pT,Bscr:mT,bsemi:gT,bsim:_T,bsime:vT,bsolb:xT,bsol:bT,bsolhsub:ST,bull:ET,bullet:yT,bump:MT,bumpE:TT,bumpe:AT,Bumpeq:wT,bumpeq:CT,Cacute:RT,cacute:LT,capand:DT,capbrcup:PT,capcap:UT,cap:IT,Cap:FT,capcup:NT,capdot:OT,CapitalDifferentialD:kT,caps:BT,caret:zT,caron:HT,Cayleys:GT,ccaps:VT,Ccaron:qT,ccaron:WT,Ccedil:XT,ccedil:jT,Ccirc:$T,ccirc:YT,Cconint:KT,ccups:ZT,ccupssm:JT,Cdot:QT,cdot:eA,cedil:tA,Cedilla:nA,cemptyv:iA,cent:rA,centerdot:sA,CenterDot:oA,cfr:aA,Cfr:cA,CHcy:lA,chcy:uA,check:fA,checkmark:hA,Chi:dA,chi:pA,circ:mA,circeq:gA,circlearrowleft:_A,circlearrowright:vA,circledast:xA,circledcirc:bA,circleddash:SA,CircleDot:EA,circledR:yA,circledS:MA,CircleMinus:TA,CirclePlus:AA,CircleTimes:wA,cir:CA,cirE:RA,cire:LA,cirfnint:DA,cirmid:PA,cirscir:UA,ClockwiseContourIntegral:IA,CloseCurlyDoubleQuote:FA,CloseCurlyQuote:NA,clubs:OA,clubsuit:kA,colon:BA,Colon:zA,Colone:HA,colone:GA,coloneq:VA,comma:qA,commat:WA,comp:XA,compfn:jA,complement:$A,complexes:YA,cong:KA,congdot:ZA,Congruent:JA,conint:QA,Conint:ew,ContourIntegral:tw,copf:nw,Copf:iw,coprod:rw,Coproduct:sw,copy:ow,COPY:aw,copysr:cw,CounterClockwiseContourIntegral:lw,crarr:uw,cross:fw,Cross:hw,Cscr:dw,cscr:pw,csub:mw,csube:gw,csup:_w,csupe:vw,ctdot:xw,cudarrl:bw,cudarrr:Sw,cuepr:Ew,cuesc:yw,cularr:Mw,cularrp:Tw,cupbrcap:Aw,cupcap:ww,CupCap:Cw,cup:Rw,Cup:Lw,cupcup:Dw,cupdot:Pw,cupor:Uw,cups:Iw,curarr:Fw,curarrm:Nw,curlyeqprec:Ow,curlyeqsucc:kw,curlyvee:Bw,curlywedge:zw,curren:Hw,curvearrowleft:Gw,curvearrowright:Vw,cuvee:qw,cuwed:Ww,cwconint:Xw,cwint:jw,cylcty:$w,dagger:Yw,Dagger:Kw,daleth:Zw,darr:Jw,Darr:Qw,dArr:eC,dash:tC,Dashv:nC,dashv:iC,dbkarow:rC,dblac:sC,Dcaron:oC,dcaron:aC,Dcy:cC,dcy:lC,ddagger:uC,ddarr:fC,DD:hC,dd:dC,DDotrahd:pC,ddotseq:mC,deg:gC,Del:_C,Delta:vC,delta:xC,demptyv:bC,dfisht:SC,Dfr:EC,dfr:yC,dHar:MC,dharl:TC,dharr:AC,DiacriticalAcute:wC,DiacriticalDot:CC,DiacriticalDoubleAcute:RC,DiacriticalGrave:LC,DiacriticalTilde:DC,diam:PC,diamond:UC,Diamond:IC,diamondsuit:FC,diams:NC,die:OC,DifferentialD:kC,digamma:BC,disin:zC,div:HC,divide:GC,divideontimes:VC,divonx:qC,DJcy:WC,djcy:XC,dlcorn:jC,dlcrop:$C,dollar:YC,Dopf:KC,dopf:ZC,Dot:JC,dot:QC,DotDot:e1,doteq:t1,doteqdot:n1,DotEqual:i1,dotminus:r1,dotplus:s1,dotsquare:o1,doublebarwedge:a1,DoubleContourIntegral:c1,DoubleDot:l1,DoubleDownArrow:u1,DoubleLeftArrow:f1,DoubleLeftRightArrow:h1,DoubleLeftTee:d1,DoubleLongLeftArrow:p1,DoubleLongLeftRightArrow:m1,DoubleLongRightArrow:g1,DoubleRightArrow:_1,DoubleRightTee:v1,DoubleUpArrow:x1,DoubleUpDownArrow:b1,DoubleVerticalBar:S1,DownArrowBar:E1,downarrow:y1,DownArrow:M1,Downarrow:T1,DownArrowUpArrow:A1,DownBreve:w1,downdownarrows:C1,downharpoonleft:R1,downharpoonright:L1,DownLeftRightVector:D1,DownLeftTeeVector:P1,DownLeftVectorBar:U1,DownLeftVector:I1,DownRightTeeVector:F1,DownRightVectorBar:N1,DownRightVector:O1,DownTeeArrow:k1,DownTee:B1,drbkarow:z1,drcorn:H1,drcrop:G1,Dscr:V1,dscr:q1,DScy:W1,dscy:X1,dsol:j1,Dstrok:$1,dstrok:Y1,dtdot:K1,dtri:Z1,dtrif:J1,duarr:Q1,duhar:eR,dwangle:tR,DZcy:nR,dzcy:iR,dzigrarr:rR,Eacute:sR,eacute:oR,easter:aR,Ecaron:cR,ecaron:lR,Ecirc:uR,ecirc:fR,ecir:hR,ecolon:dR,Ecy:pR,ecy:mR,eDDot:gR,Edot:_R,edot:vR,eDot:xR,ee:bR,efDot:SR,Efr:ER,efr:yR,eg:MR,Egrave:TR,egrave:AR,egs:wR,egsdot:CR,el:RR,Element:LR,elinters:DR,ell:PR,els:UR,elsdot:IR,Emacr:FR,emacr:NR,empty:OR,emptyset:kR,EmptySmallSquare:BR,emptyv:zR,EmptyVerySmallSquare:HR,emsp13:GR,emsp14:VR,emsp:qR,ENG:WR,eng:XR,ensp:jR,Eogon:$R,eogon:YR,Eopf:KR,eopf:ZR,epar:JR,eparsl:QR,eplus:eL,epsi:tL,Epsilon:nL,epsilon:iL,epsiv:rL,eqcirc:sL,eqcolon:oL,eqsim:aL,eqslantgtr:cL,eqslantless:lL,Equal:uL,equals:fL,EqualTilde:hL,equest:dL,Equilibrium:pL,equiv:mL,equivDD:gL,eqvparsl:_L,erarr:vL,erDot:xL,escr:bL,Escr:SL,esdot:EL,Esim:yL,esim:ML,Eta:TL,eta:AL,ETH:wL,eth:CL,Euml:RL,euml:LL,euro:DL,excl:PL,exist:UL,Exists:IL,expectation:FL,exponentiale:NL,ExponentialE:OL,fallingdotseq:kL,Fcy:BL,fcy:zL,female:HL,ffilig:GL,fflig:VL,ffllig:qL,Ffr:WL,ffr:XL,filig:jL,FilledSmallSquare:$L,FilledVerySmallSquare:YL,fjlig:KL,flat:ZL,fllig:JL,fltns:QL,fnof:eD,Fopf:tD,fopf:nD,forall:iD,ForAll:rD,fork:sD,forkv:oD,Fouriertrf:aD,fpartint:cD,frac12:lD,frac13:uD,frac14:fD,frac15:hD,frac16:dD,frac18:pD,frac23:mD,frac25:gD,frac34:_D,frac35:vD,frac38:xD,frac45:bD,frac56:SD,frac58:ED,frac78:yD,frasl:MD,frown:TD,fscr:AD,Fscr:wD,gacute:CD,Gamma:RD,gamma:LD,Gammad:DD,gammad:PD,gap:UD,Gbreve:ID,gbreve:FD,Gcedil:ND,Gcirc:OD,gcirc:kD,Gcy:BD,gcy:zD,Gdot:HD,gdot:GD,ge:VD,gE:qD,gEl:WD,gel:XD,geq:jD,geqq:$D,geqslant:YD,gescc:KD,ges:ZD,gesdot:JD,gesdoto:QD,gesdotol:eP,gesl:tP,gesles:nP,Gfr:iP,gfr:rP,gg:sP,Gg:oP,ggg:aP,gimel:cP,GJcy:lP,gjcy:uP,gla:fP,gl:hP,glE:dP,glj:pP,gnap:mP,gnapprox:gP,gne:_P,gnE:vP,gneq:xP,gneqq:bP,gnsim:SP,Gopf:EP,gopf:yP,grave:MP,GreaterEqual:TP,GreaterEqualLess:AP,GreaterFullEqual:wP,GreaterGreater:CP,GreaterLess:RP,GreaterSlantEqual:LP,GreaterTilde:DP,Gscr:PP,gscr:UP,gsim:IP,gsime:FP,gsiml:NP,gtcc:OP,gtcir:kP,gt:BP,GT:zP,Gt:HP,gtdot:GP,gtlPar:VP,gtquest:qP,gtrapprox:WP,gtrarr:XP,gtrdot:jP,gtreqless:$P,gtreqqless:YP,gtrless:KP,gtrsim:ZP,gvertneqq:JP,gvnE:QP,Hacek:e2,hairsp:t2,half:n2,hamilt:i2,HARDcy:r2,hardcy:s2,harrcir:o2,harr:a2,hArr:c2,harrw:l2,Hat:u2,hbar:f2,Hcirc:h2,hcirc:d2,hearts:p2,heartsuit:m2,hellip:g2,hercon:_2,hfr:v2,Hfr:x2,HilbertSpace:b2,hksearow:S2,hkswarow:E2,hoarr:y2,homtht:M2,hookleftarrow:T2,hookrightarrow:A2,hopf:w2,Hopf:C2,horbar:R2,HorizontalLine:L2,hscr:D2,Hscr:P2,hslash:U2,Hstrok:I2,hstrok:F2,HumpDownHump:N2,HumpEqual:O2,hybull:k2,hyphen:B2,Iacute:z2,iacute:H2,ic:G2,Icirc:V2,icirc:q2,Icy:W2,icy:X2,Idot:j2,IEcy:$2,iecy:Y2,iexcl:K2,iff:Z2,ifr:J2,Ifr:Q2,Igrave:eU,igrave:tU,ii:nU,iiiint:iU,iiint:rU,iinfin:sU,iiota:oU,IJlig:aU,ijlig:cU,Imacr:lU,imacr:uU,image:fU,ImaginaryI:hU,imagline:dU,imagpart:pU,imath:mU,Im:gU,imof:_U,imped:vU,Implies:xU,incare:bU,in:"∈",infin:SU,infintie:EU,inodot:yU,intcal:MU,int:TU,Int:AU,integers:wU,Integral:CU,intercal:RU,Intersection:LU,intlarhk:DU,intprod:PU,InvisibleComma:UU,InvisibleTimes:IU,IOcy:FU,iocy:NU,Iogon:OU,iogon:kU,Iopf:BU,iopf:zU,Iota:HU,iota:GU,iprod:VU,iquest:qU,iscr:WU,Iscr:XU,isin:jU,isindot:$U,isinE:YU,isins:KU,isinsv:ZU,isinv:JU,it:QU,Itilde:e3,itilde:t3,Iukcy:n3,iukcy:i3,Iuml:r3,iuml:s3,Jcirc:o3,jcirc:a3,Jcy:c3,jcy:l3,Jfr:u3,jfr:f3,jmath:h3,Jopf:d3,jopf:p3,Jscr:m3,jscr:g3,Jsercy:_3,jsercy:v3,Jukcy:x3,jukcy:b3,Kappa:S3,kappa:E3,kappav:y3,Kcedil:M3,kcedil:T3,Kcy:A3,kcy:w3,Kfr:C3,kfr:R3,kgreen:L3,KHcy:D3,khcy:P3,KJcy:U3,kjcy:I3,Kopf:F3,kopf:N3,Kscr:O3,kscr:k3,lAarr:B3,Lacute:z3,lacute:H3,laemptyv:G3,lagran:V3,Lambda:q3,lambda:W3,lang:X3,Lang:j3,langd:$3,langle:Y3,lap:K3,Laplacetrf:Z3,laquo:J3,larrb:Q3,larrbfs:eI,larr:tI,Larr:nI,lArr:iI,larrfs:rI,larrhk:sI,larrlp:oI,larrpl:aI,larrsim:cI,larrtl:lI,latail:uI,lAtail:fI,lat:hI,late:dI,lates:pI,lbarr:mI,lBarr:gI,lbbrk:_I,lbrace:vI,lbrack:xI,lbrke:bI,lbrksld:SI,lbrkslu:EI,Lcaron:yI,lcaron:MI,Lcedil:TI,lcedil:AI,lceil:wI,lcub:CI,Lcy:RI,lcy:LI,ldca:DI,ldquo:PI,ldquor:UI,ldrdhar:II,ldrushar:FI,ldsh:NI,le:OI,lE:kI,LeftAngleBracket:BI,LeftArrowBar:zI,leftarrow:HI,LeftArrow:GI,Leftarrow:VI,LeftArrowRightArrow:qI,leftarrowtail:WI,LeftCeiling:XI,LeftDoubleBracket:jI,LeftDownTeeVector:$I,LeftDownVectorBar:YI,LeftDownVector:KI,LeftFloor:ZI,leftharpoondown:JI,leftharpoonup:QI,leftleftarrows:eF,leftrightarrow:tF,LeftRightArrow:nF,Leftrightarrow:iF,leftrightarrows:rF,leftrightharpoons:sF,leftrightsquigarrow:oF,LeftRightVector:aF,LeftTeeArrow:cF,LeftTee:lF,LeftTeeVector:uF,leftthreetimes:fF,LeftTriangleBar:hF,LeftTriangle:dF,LeftTriangleEqual:pF,LeftUpDownVector:mF,LeftUpTeeVector:gF,LeftUpVectorBar:_F,LeftUpVector:vF,LeftVectorBar:xF,LeftVector:bF,lEg:SF,leg:EF,leq:yF,leqq:MF,leqslant:TF,lescc:AF,les:wF,lesdot:CF,lesdoto:RF,lesdotor:LF,lesg:DF,lesges:PF,lessapprox:UF,lessdot:IF,lesseqgtr:FF,lesseqqgtr:NF,LessEqualGreater:OF,LessFullEqual:kF,LessGreater:BF,lessgtr:zF,LessLess:HF,lesssim:GF,LessSlantEqual:VF,LessTilde:qF,lfisht:WF,lfloor:XF,Lfr:jF,lfr:$F,lg:YF,lgE:KF,lHar:ZF,lhard:JF,lharu:QF,lharul:eN,lhblk:tN,LJcy:nN,ljcy:iN,llarr:rN,ll:sN,Ll:oN,llcorner:aN,Lleftarrow:cN,llhard:lN,lltri:uN,Lmidot:fN,lmidot:hN,lmoustache:dN,lmoust:pN,lnap:mN,lnapprox:gN,lne:_N,lnE:vN,lneq:xN,lneqq:bN,lnsim:SN,loang:EN,loarr:yN,lobrk:MN,longleftarrow:TN,LongLeftArrow:AN,Longleftarrow:wN,longleftrightarrow:CN,LongLeftRightArrow:RN,Longleftrightarrow:LN,longmapsto:DN,longrightarrow:PN,LongRightArrow:UN,Longrightarrow:IN,looparrowleft:FN,looparrowright:NN,lopar:ON,Lopf:kN,lopf:BN,loplus:zN,lotimes:HN,lowast:GN,lowbar:VN,LowerLeftArrow:qN,LowerRightArrow:WN,loz:XN,lozenge:jN,lozf:$N,lpar:YN,lparlt:KN,lrarr:ZN,lrcorner:JN,lrhar:QN,lrhard:eO,lrm:tO,lrtri:nO,lsaquo:iO,lscr:rO,Lscr:sO,lsh:oO,Lsh:aO,lsim:cO,lsime:lO,lsimg:uO,lsqb:fO,lsquo:hO,lsquor:dO,Lstrok:pO,lstrok:mO,ltcc:gO,ltcir:_O,lt:vO,LT:xO,Lt:bO,ltdot:SO,lthree:EO,ltimes:yO,ltlarr:MO,ltquest:TO,ltri:AO,ltrie:wO,ltrif:CO,ltrPar:RO,lurdshar:LO,luruhar:DO,lvertneqq:PO,lvnE:UO,macr:IO,male:FO,malt:NO,maltese:OO,Map:"⤅",map:kO,mapsto:BO,mapstodown:zO,mapstoleft:HO,mapstoup:GO,marker:VO,mcomma:qO,Mcy:WO,mcy:XO,mdash:jO,mDDot:$O,measuredangle:YO,MediumSpace:KO,Mellintrf:ZO,Mfr:JO,mfr:QO,mho:ek,micro:tk,midast:nk,midcir:ik,mid:rk,middot:sk,minusb:ok,minus:ak,minusd:ck,minusdu:lk,MinusPlus:uk,mlcp:fk,mldr:hk,mnplus:dk,models:pk,Mopf:mk,mopf:gk,mp:_k,mscr:vk,Mscr:xk,mstpos:bk,Mu:Sk,mu:Ek,multimap:yk,mumap:Mk,nabla:Tk,Nacute:Ak,nacute:wk,nang:Ck,nap:Rk,napE:Lk,napid:Dk,napos:Pk,napprox:Uk,natural:Ik,naturals:Fk,natur:Nk,nbsp:Ok,nbump:kk,nbumpe:Bk,ncap:zk,Ncaron:Hk,ncaron:Gk,Ncedil:Vk,ncedil:qk,ncong:Wk,ncongdot:Xk,ncup:jk,Ncy:$k,ncy:Yk,ndash:Kk,nearhk:Zk,nearr:Jk,neArr:Qk,nearrow:eB,ne:tB,nedot:nB,NegativeMediumSpace:iB,NegativeThickSpace:rB,NegativeThinSpace:sB,NegativeVeryThinSpace:oB,nequiv:aB,nesear:cB,nesim:lB,NestedGreaterGreater:uB,NestedLessLess:fB,NewLine:hB,nexist:dB,nexists:pB,Nfr:mB,nfr:gB,ngE:_B,nge:vB,ngeq:xB,ngeqq:bB,ngeqslant:SB,nges:EB,nGg:yB,ngsim:MB,nGt:TB,ngt:AB,ngtr:wB,nGtv:CB,nharr:RB,nhArr:LB,nhpar:DB,ni:PB,nis:UB,nisd:IB,niv:FB,NJcy:NB,njcy:OB,nlarr:kB,nlArr:BB,nldr:zB,nlE:HB,nle:GB,nleftarrow:VB,nLeftarrow:qB,nleftrightarrow:WB,nLeftrightarrow:XB,nleq:jB,nleqq:$B,nleqslant:YB,nles:KB,nless:ZB,nLl:JB,nlsim:QB,nLt:ez,nlt:tz,nltri:nz,nltrie:iz,nLtv:rz,nmid:sz,NoBreak:oz,NonBreakingSpace:az,nopf:cz,Nopf:lz,Not:uz,not:fz,NotCongruent:hz,NotCupCap:dz,NotDoubleVerticalBar:pz,NotElement:mz,NotEqual:gz,NotEqualTilde:_z,NotExists:vz,NotGreater:xz,NotGreaterEqual:bz,NotGreaterFullEqual:Sz,NotGreaterGreater:Ez,NotGreaterLess:yz,NotGreaterSlantEqual:Mz,NotGreaterTilde:Tz,NotHumpDownHump:Az,NotHumpEqual:wz,notin:Cz,notindot:Rz,notinE:Lz,notinva:Dz,notinvb:Pz,notinvc:Uz,NotLeftTriangleBar:Iz,NotLeftTriangle:Fz,NotLeftTriangleEqual:Nz,NotLess:Oz,NotLessEqual:kz,NotLessGreater:Bz,NotLessLess:zz,NotLessSlantEqual:Hz,NotLessTilde:Gz,NotNestedGreaterGreater:Vz,NotNestedLessLess:qz,notni:Wz,notniva:Xz,notnivb:jz,notnivc:$z,NotPrecedes:Yz,NotPrecedesEqual:Kz,NotPrecedesSlantEqual:Zz,NotReverseElement:Jz,NotRightTriangleBar:Qz,NotRightTriangle:eH,NotRightTriangleEqual:tH,NotSquareSubset:nH,NotSquareSubsetEqual:iH,NotSquareSuperset:rH,NotSquareSupersetEqual:sH,NotSubset:oH,NotSubsetEqual:aH,NotSucceeds:cH,NotSucceedsEqual:lH,NotSucceedsSlantEqual:uH,NotSucceedsTilde:fH,NotSuperset:hH,NotSupersetEqual:dH,NotTilde:pH,NotTildeEqual:mH,NotTildeFullEqual:gH,NotTildeTilde:_H,NotVerticalBar:vH,nparallel:xH,npar:bH,nparsl:SH,npart:EH,npolint:yH,npr:MH,nprcue:TH,nprec:AH,npreceq:wH,npre:CH,nrarrc:RH,nrarr:LH,nrArr:DH,nrarrw:PH,nrightarrow:UH,nRightarrow:IH,nrtri:FH,nrtrie:NH,nsc:OH,nsccue:kH,nsce:BH,Nscr:zH,nscr:HH,nshortmid:GH,nshortparallel:VH,nsim:qH,nsime:WH,nsimeq:XH,nsmid:jH,nspar:$H,nsqsube:YH,nsqsupe:KH,nsub:ZH,nsubE:JH,nsube:QH,nsubset:eG,nsubseteq:tG,nsubseteqq:nG,nsucc:iG,nsucceq:rG,nsup:sG,nsupE:oG,nsupe:aG,nsupset:cG,nsupseteq:lG,nsupseteqq:uG,ntgl:fG,Ntilde:hG,ntilde:dG,ntlg:pG,ntriangleleft:mG,ntrianglelefteq:gG,ntriangleright:_G,ntrianglerighteq:vG,Nu:xG,nu:bG,num:SG,numero:EG,numsp:yG,nvap:MG,nvdash:TG,nvDash:AG,nVdash:wG,nVDash:CG,nvge:RG,nvgt:LG,nvHarr:DG,nvinfin:PG,nvlArr:UG,nvle:IG,nvlt:FG,nvltrie:NG,nvrArr:OG,nvrtrie:kG,nvsim:BG,nwarhk:zG,nwarr:HG,nwArr:GG,nwarrow:VG,nwnear:qG,Oacute:WG,oacute:XG,oast:jG,Ocirc:$G,ocirc:YG,ocir:KG,Ocy:ZG,ocy:JG,odash:QG,Odblac:eV,odblac:tV,odiv:nV,odot:iV,odsold:rV,OElig:sV,oelig:oV,ofcir:aV,Ofr:cV,ofr:lV,ogon:uV,Ograve:fV,ograve:hV,ogt:dV,ohbar:pV,ohm:mV,oint:gV,olarr:_V,olcir:vV,olcross:xV,oline:bV,olt:SV,Omacr:EV,omacr:yV,Omega:MV,omega:TV,Omicron:AV,omicron:wV,omid:CV,ominus:RV,Oopf:LV,oopf:DV,opar:PV,OpenCurlyDoubleQuote:UV,OpenCurlyQuote:IV,operp:FV,oplus:NV,orarr:OV,Or:kV,or:BV,ord:zV,order:HV,orderof:GV,ordf:VV,ordm:qV,origof:WV,oror:XV,orslope:jV,orv:$V,oS:YV,Oscr:KV,oscr:ZV,Oslash:JV,oslash:QV,osol:e4,Otilde:t4,otilde:n4,otimesas:i4,Otimes:r4,otimes:s4,Ouml:o4,ouml:a4,ovbar:c4,OverBar:l4,OverBrace:u4,OverBracket:f4,OverParenthesis:h4,para:d4,parallel:p4,par:m4,parsim:g4,parsl:_4,part:v4,PartialD:x4,Pcy:b4,pcy:S4,percnt:E4,period:y4,permil:M4,perp:T4,pertenk:A4,Pfr:w4,pfr:C4,Phi:R4,phi:L4,phiv:D4,phmmat:P4,phone:U4,Pi:I4,pi:F4,pitchfork:N4,piv:O4,planck:k4,planckh:B4,plankv:z4,plusacir:H4,plusb:G4,pluscir:V4,plus:q4,plusdo:W4,plusdu:X4,pluse:j4,PlusMinus:$4,plusmn:Y4,plussim:K4,plustwo:Z4,pm:J4,Poincareplane:Q4,pointint:eq,popf:tq,Popf:nq,pound:iq,prap:rq,Pr:sq,pr:oq,prcue:aq,precapprox:cq,prec:lq,preccurlyeq:uq,Precedes:fq,PrecedesEqual:hq,PrecedesSlantEqual:dq,PrecedesTilde:pq,preceq:mq,precnapprox:gq,precneqq:_q,precnsim:vq,pre:xq,prE:bq,precsim:Sq,prime:Eq,Prime:yq,primes:Mq,prnap:Tq,prnE:Aq,prnsim:wq,prod:Cq,Product:Rq,profalar:Lq,profline:Dq,profsurf:Pq,prop:Uq,Proportional:Iq,Proportion:Fq,propto:Nq,prsim:Oq,prurel:kq,Pscr:Bq,pscr:zq,Psi:Hq,psi:Gq,puncsp:Vq,Qfr:qq,qfr:Wq,qint:Xq,qopf:jq,Qopf:$q,qprime:Yq,Qscr:Kq,qscr:Zq,quaternions:Jq,quatint:Qq,quest:eW,questeq:tW,quot:nW,QUOT:iW,rAarr:rW,race:sW,Racute:oW,racute:aW,radic:cW,raemptyv:lW,rang:uW,Rang:fW,rangd:hW,range:dW,rangle:pW,raquo:mW,rarrap:gW,rarrb:_W,rarrbfs:vW,rarrc:xW,rarr:bW,Rarr:SW,rArr:EW,rarrfs:yW,rarrhk:MW,rarrlp:TW,rarrpl:AW,rarrsim:wW,Rarrtl:CW,rarrtl:RW,rarrw:LW,ratail:DW,rAtail:PW,ratio:UW,rationals:IW,rbarr:FW,rBarr:NW,RBarr:OW,rbbrk:kW,rbrace:BW,rbrack:zW,rbrke:HW,rbrksld:GW,rbrkslu:VW,Rcaron:qW,rcaron:WW,Rcedil:XW,rcedil:jW,rceil:$W,rcub:YW,Rcy:KW,rcy:ZW,rdca:JW,rdldhar:QW,rdquo:e5,rdquor:t5,rdsh:n5,real:i5,realine:r5,realpart:s5,reals:o5,Re:a5,rect:c5,reg:l5,REG:u5,ReverseElement:f5,ReverseEquilibrium:h5,ReverseUpEquilibrium:d5,rfisht:p5,rfloor:m5,rfr:g5,Rfr:_5,rHar:v5,rhard:x5,rharu:b5,rharul:S5,Rho:E5,rho:y5,rhov:M5,RightAngleBracket:T5,RightArrowBar:A5,rightarrow:w5,RightArrow:C5,Rightarrow:R5,RightArrowLeftArrow:L5,rightarrowtail:D5,RightCeiling:P5,RightDoubleBracket:U5,RightDownTeeVector:I5,RightDownVectorBar:F5,RightDownVector:N5,RightFloor:O5,rightharpoondown:k5,rightharpoonup:B5,rightleftarrows:z5,rightleftharpoons:H5,rightrightarrows:G5,rightsquigarrow:V5,RightTeeArrow:q5,RightTee:W5,RightTeeVector:X5,rightthreetimes:j5,RightTriangleBar:$5,RightTriangle:Y5,RightTriangleEqual:K5,RightUpDownVector:Z5,RightUpTeeVector:J5,RightUpVectorBar:Q5,RightUpVector:e8,RightVectorBar:t8,RightVector:n8,ring:i8,risingdotseq:r8,rlarr:s8,rlhar:o8,rlm:a8,rmoustache:c8,rmoust:l8,rnmid:u8,roang:f8,roarr:h8,robrk:d8,ropar:p8,ropf:m8,Ropf:g8,roplus:_8,rotimes:v8,RoundImplies:x8,rpar:b8,rpargt:S8,rppolint:E8,rrarr:y8,Rrightarrow:M8,rsaquo:T8,rscr:A8,Rscr:w8,rsh:C8,Rsh:R8,rsqb:L8,rsquo:D8,rsquor:P8,rthree:U8,rtimes:I8,rtri:F8,rtrie:N8,rtrif:O8,rtriltri:k8,RuleDelayed:B8,ruluhar:z8,rx:H8,Sacute:G8,sacute:V8,sbquo:q8,scap:W8,Scaron:X8,scaron:j8,Sc:$8,sc:Y8,sccue:K8,sce:Z8,scE:J8,Scedil:Q8,scedil:e6,Scirc:t6,scirc:n6,scnap:i6,scnE:r6,scnsim:s6,scpolint:o6,scsim:a6,Scy:c6,scy:l6,sdotb:u6,sdot:f6,sdote:h6,searhk:d6,searr:p6,seArr:m6,searrow:g6,sect:_6,semi:v6,seswar:x6,setminus:b6,setmn:S6,sext:E6,Sfr:y6,sfr:M6,sfrown:T6,sharp:A6,SHCHcy:w6,shchcy:C6,SHcy:R6,shcy:L6,ShortDownArrow:D6,ShortLeftArrow:P6,shortmid:U6,shortparallel:I6,ShortRightArrow:F6,ShortUpArrow:N6,shy:O6,Sigma:k6,sigma:B6,sigmaf:z6,sigmav:H6,sim:G6,simdot:V6,sime:q6,simeq:W6,simg:X6,simgE:j6,siml:$6,simlE:Y6,simne:K6,simplus:Z6,simrarr:J6,slarr:Q6,SmallCircle:e9,smallsetminus:t9,smashp:n9,smeparsl:i9,smid:r9,smile:s9,smt:o9,smte:a9,smtes:c9,SOFTcy:l9,softcy:u9,solbar:f9,solb:h9,sol:d9,Sopf:p9,sopf:m9,spades:g9,spadesuit:_9,spar:v9,sqcap:x9,sqcaps:b9,sqcup:S9,sqcups:E9,Sqrt:y9,sqsub:M9,sqsube:T9,sqsubset:A9,sqsubseteq:w9,sqsup:C9,sqsupe:R9,sqsupset:L9,sqsupseteq:D9,square:P9,Square:U9,SquareIntersection:I9,SquareSubset:F9,SquareSubsetEqual:N9,SquareSuperset:O9,SquareSupersetEqual:k9,SquareUnion:B9,squarf:z9,squ:H9,squf:G9,srarr:V9,Sscr:q9,sscr:W9,ssetmn:X9,ssmile:j9,sstarf:$9,Star:Y9,star:K9,starf:Z9,straightepsilon:J9,straightphi:Q9,strns:e7,sub:t7,Sub:n7,subdot:i7,subE:r7,sube:s7,subedot:o7,submult:a7,subnE:c7,subne:l7,subplus:u7,subrarr:f7,subset:h7,Subset:d7,subseteq:p7,subseteqq:m7,SubsetEqual:g7,subsetneq:_7,subsetneqq:v7,subsim:x7,subsub:b7,subsup:S7,succapprox:E7,succ:y7,succcurlyeq:M7,Succeeds:T7,SucceedsEqual:A7,SucceedsSlantEqual:w7,SucceedsTilde:C7,succeq:R7,succnapprox:L7,succneqq:D7,succnsim:P7,succsim:U7,SuchThat:I7,sum:F7,Sum:N7,sung:O7,sup1:k7,sup2:B7,sup3:z7,sup:H7,Sup:G7,supdot:V7,supdsub:q7,supE:W7,supe:X7,supedot:j7,Superset:$7,SupersetEqual:Y7,suphsol:K7,suphsub:Z7,suplarr:J7,supmult:Q7,supnE:eX,supne:tX,supplus:nX,supset:iX,Supset:rX,supseteq:sX,supseteqq:oX,supsetneq:aX,supsetneqq:cX,supsim:lX,supsub:uX,supsup:fX,swarhk:hX,swarr:dX,swArr:pX,swarrow:mX,swnwar:gX,szlig:_X,Tab:vX,target:xX,Tau:bX,tau:SX,tbrk:EX,Tcaron:yX,tcaron:MX,Tcedil:TX,tcedil:AX,Tcy:wX,tcy:CX,tdot:RX,telrec:LX,Tfr:DX,tfr:PX,there4:UX,therefore:IX,Therefore:FX,Theta:NX,theta:OX,thetasym:kX,thetav:BX,thickapprox:zX,thicksim:HX,ThickSpace:GX,ThinSpace:VX,thinsp:qX,thkap:WX,thksim:XX,THORN:jX,thorn:$X,tilde:YX,Tilde:KX,TildeEqual:ZX,TildeFullEqual:JX,TildeTilde:QX,timesbar:ej,timesb:tj,times:nj,timesd:ij,tint:rj,toea:sj,topbot:oj,topcir:aj,top:cj,Topf:lj,topf:uj,topfork:fj,tosa:hj,tprime:dj,trade:pj,TRADE:mj,triangle:gj,triangledown:_j,triangleleft:vj,trianglelefteq:xj,triangleq:bj,triangleright:Sj,trianglerighteq:Ej,tridot:yj,trie:Mj,triminus:Tj,TripleDot:Aj,triplus:wj,trisb:Cj,tritime:Rj,trpezium:Lj,Tscr:Dj,tscr:Pj,TScy:Uj,tscy:Ij,TSHcy:Fj,tshcy:Nj,Tstrok:Oj,tstrok:kj,twixt:Bj,twoheadleftarrow:zj,twoheadrightarrow:Hj,Uacute:Gj,uacute:Vj,uarr:qj,Uarr:Wj,uArr:Xj,Uarrocir:jj,Ubrcy:$j,ubrcy:Yj,Ubreve:Kj,ubreve:Zj,Ucirc:Jj,ucirc:Qj,Ucy:e$,ucy:t$,udarr:n$,Udblac:i$,udblac:r$,udhar:s$,ufisht:o$,Ufr:a$,ufr:c$,Ugrave:l$,ugrave:u$,uHar:f$,uharl:h$,uharr:d$,uhblk:p$,ulcorn:m$,ulcorner:g$,ulcrop:_$,ultri:v$,Umacr:x$,umacr:b$,uml:S$,UnderBar:E$,UnderBrace:y$,UnderBracket:M$,UnderParenthesis:T$,Union:A$,UnionPlus:w$,Uogon:C$,uogon:R$,Uopf:L$,uopf:D$,UpArrowBar:P$,uparrow:U$,UpArrow:I$,Uparrow:F$,UpArrowDownArrow:N$,updownarrow:O$,UpDownArrow:k$,Updownarrow:B$,UpEquilibrium:z$,upharpoonleft:H$,upharpoonright:G$,uplus:V$,UpperLeftArrow:q$,UpperRightArrow:W$,upsi:X$,Upsi:j$,upsih:$$,Upsilon:Y$,upsilon:K$,UpTeeArrow:Z$,UpTee:J$,upuparrows:Q$,urcorn:eY,urcorner:tY,urcrop:nY,Uring:iY,uring:rY,urtri:sY,Uscr:oY,uscr:aY,utdot:cY,Utilde:lY,utilde:uY,utri:fY,utrif:hY,uuarr:dY,Uuml:pY,uuml:mY,uwangle:gY,vangrt:_Y,varepsilon:vY,varkappa:xY,varnothing:bY,varphi:SY,varpi:EY,varpropto:yY,varr:MY,vArr:TY,varrho:AY,varsigma:wY,varsubsetneq:CY,varsubsetneqq:RY,varsupsetneq:LY,varsupsetneqq:DY,vartheta:PY,vartriangleleft:UY,vartriangleright:IY,vBar:FY,Vbar:NY,vBarv:OY,Vcy:kY,vcy:BY,vdash:zY,vDash:HY,Vdash:GY,VDash:VY,Vdashl:qY,veebar:WY,vee:XY,Vee:jY,veeeq:$Y,vellip:YY,verbar:KY,Verbar:ZY,vert:JY,Vert:QY,VerticalBar:eK,VerticalLine:tK,VerticalSeparator:nK,VerticalTilde:iK,VeryThinSpace:rK,Vfr:sK,vfr:oK,vltri:aK,vnsub:cK,vnsup:lK,Vopf:uK,vopf:fK,vprop:hK,vrtri:dK,Vscr:pK,vscr:mK,vsubnE:gK,vsubne:_K,vsupnE:vK,vsupne:xK,Vvdash:bK,vzigzag:SK,Wcirc:EK,wcirc:yK,wedbar:MK,wedge:TK,Wedge:AK,wedgeq:wK,weierp:CK,Wfr:RK,wfr:LK,Wopf:DK,wopf:PK,wp:UK,wr:IK,wreath:FK,Wscr:NK,wscr:OK,xcap:kK,xcirc:BK,xcup:zK,xdtri:HK,Xfr:GK,xfr:VK,xharr:qK,xhArr:WK,Xi:XK,xi:jK,xlarr:$K,xlArr:YK,xmap:KK,xnis:ZK,xodot:JK,Xopf:QK,xopf:eZ,xoplus:tZ,xotime:nZ,xrarr:iZ,xrArr:rZ,Xscr:sZ,xscr:oZ,xsqcup:aZ,xuplus:cZ,xutri:lZ,xvee:uZ,xwedge:fZ,Yacute:hZ,yacute:dZ,YAcy:pZ,yacy:mZ,Ycirc:gZ,ycirc:_Z,Ycy:vZ,ycy:xZ,yen:bZ,Yfr:SZ,yfr:EZ,YIcy:yZ,yicy:MZ,Yopf:TZ,yopf:AZ,Yscr:wZ,yscr:CZ,YUcy:RZ,yucy:LZ,yuml:DZ,Yuml:PZ,Zacute:UZ,zacute:IZ,Zcaron:FZ,zcaron:NZ,Zcy:OZ,zcy:kZ,Zdot:BZ,zdot:zZ,zeetrf:HZ,ZeroWidthSpace:GZ,Zeta:VZ,zeta:qZ,zfr:WZ,Zfr:XZ,ZHcy:jZ,zhcy:$Z,zigrarr:YZ,zopf:KZ,Zopf:ZZ,Zscr:JZ,zscr:QZ,zwj:eJ,zwnj:tJ};var wd=nJ,Pc=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,br={},Ju={};function iJ(n){var e,t,i=Ju[n];if(i)return i;for(i=Ju[n]=[],e=0;e<128;e++)t=String.fromCharCode(e),/^[0-9a-z]$/i.test(t)?i.push(t):i.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<n.length;e++)i[n.charCodeAt(e)]=n[e];return i}function Ao(n,e,t){var i,r,s,a,o,c="";for(typeof e!="string"&&(t=e,e=Ao.defaultChars),typeof t>"u"&&(t=!0),o=iJ(e),i=0,r=n.length;i<r;i++){if(s=n.charCodeAt(i),t&&s===37&&i+2<r&&/^[0-9a-f]{2}$/i.test(n.slice(i+1,i+3))){c+=n.slice(i,i+3),i+=2;continue}if(s<128){c+=o[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&i+1<r&&(a=n.charCodeAt(i+1),a>=56320&&a<=57343)){c+=encodeURIComponent(n[i]+n[i+1]),i++;continue}c+="%EF%BF%BD";continue}c+=encodeURIComponent(n[i])}return c}Ao.defaultChars=";/?:@&=+$,-_.!~*'()#";Ao.componentChars="-_.!~*'()";var rJ=Ao,Qu={};function sJ(n){var e,t,i=Qu[n];if(i)return i;for(i=Qu[n]=[],e=0;e<128;e++)t=String.fromCharCode(e),i.push(t);for(e=0;e<n.length;e++)t=n.charCodeAt(e),i[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return i}function wo(n,e){var t;return typeof e!="string"&&(e=wo.defaultChars),t=sJ(e),n.replace(/(%[a-f0-9]{2})+/gi,function(i){var r,s,a,o,c,l,u,f="";for(r=0,s=i.length;r<s;r+=3){if(a=parseInt(i.slice(r+1,r+3),16),a<128){f+=t[a];continue}if((a&224)===192&&r+3<s&&(o=parseInt(i.slice(r+4,r+6),16),(o&192)===128)){u=a<<6&1984|o&63,u<128?f+="��":f+=String.fromCharCode(u),r+=3;continue}if((a&240)===224&&r+6<s&&(o=parseInt(i.slice(r+4,r+6),16),c=parseInt(i.slice(r+7,r+9),16),(o&192)===128&&(c&192)===128)){u=a<<12&61440|o<<6&4032|c&63,u<2048||u>=55296&&u<=57343?f+="���":f+=String.fromCharCode(u),r+=6;continue}if((a&248)===240&&r+9<s&&(o=parseInt(i.slice(r+4,r+6),16),c=parseInt(i.slice(r+7,r+9),16),l=parseInt(i.slice(r+10,r+12),16),(o&192)===128&&(c&192)===128&&(l&192)===128)){u=a<<18&1835008|o<<12&258048|c<<6&4032|l&63,u<65536||u>1114111?f+="����":(u-=65536,f+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),r+=9;continue}f+="�"}return f})}wo.defaultChars=";/?:@&=+$,#";wo.componentChars="";var oJ=wo,aJ=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t};function so(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var cJ=/^([a-z0-9.+-]+:)/i,lJ=/:[0-9]*$/,uJ=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,fJ=["<",">",'"',"`"," ","\r",`
`,"	"],hJ=["{","}","|","\\","^","`"].concat(fJ),dJ=["'"].concat(hJ),ef=["%","/","?",";","#"].concat(dJ),tf=["/","?","#"],pJ=255,nf=/^[+a-z0-9A-Z_-]{0,63}$/,mJ=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,rf={javascript:!0,"javascript:":!0},sf={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function gJ(n,e){if(n&&n instanceof so)return n;var t=new so;return t.parse(n,e),t}so.prototype.parse=function(n,e){var t,i,r,s,a,o=n;if(o=o.trim(),!e&&n.split("#").length===1){var c=uJ.exec(o);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}var l=cJ.exec(o);if(l&&(l=l[0],r=l.toLowerCase(),this.protocol=l,o=o.substr(l.length)),(e||l||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(a=o.substr(0,2)==="//",a&&!(l&&rf[l])&&(o=o.substr(2),this.slashes=!0)),!rf[l]&&(a||l&&!sf[l])){var u=-1;for(t=0;t<tf.length;t++)s=o.indexOf(tf[t]),s!==-1&&(u===-1||s<u)&&(u=s);var f,h;for(u===-1?h=o.lastIndexOf("@"):h=o.lastIndexOf("@",u),h!==-1&&(f=o.slice(0,h),o=o.slice(h+1),this.auth=f),u=-1,t=0;t<ef.length;t++)s=o.indexOf(ef[t]),s!==-1&&(u===-1||s<u)&&(u=s);u===-1&&(u=o.length),o[u-1]===":"&&u--;var p=o.slice(0,u);o=o.slice(u),this.parseHost(p),this.hostname=this.hostname||"";var b=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!b){var x=this.hostname.split(/\./);for(t=0,i=x.length;t<i;t++){var m=x[t];if(m&&!m.match(nf)){for(var d="",M=0,E=m.length;M<E;M++)m.charCodeAt(M)>127?d+="x":d+=m[M];if(!d.match(nf)){var T=x.slice(0,t),C=x.slice(t+1),R=m.match(mJ);R&&(T.push(R[1]),C.unshift(R[2])),C.length&&(o=C.join(".")+o),this.hostname=T.join(".");break}}}}this.hostname.length>pJ&&(this.hostname=""),b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var L=o.indexOf("#");L!==-1&&(this.hash=o.substr(L),o=o.slice(0,L));var O=o.indexOf("?");return O!==-1&&(this.search=o.substr(O),o=o.slice(0,O)),o&&(this.pathname=o),sf[r]&&this.hostname&&!this.pathname&&(this.pathname=""),this};so.prototype.parseHost=function(n){var e=lJ.exec(n);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),n=n.substr(0,n.length-e.length)),n&&(this.hostname=n)};var _J=gJ;br.encode=rJ;br.decode=oJ;br.format=aJ;br.parse=_J;var bi={},Ra,of;function Cd(){return of||(of=1,Ra=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/),Ra}var La,af;function Rd(){return af||(af=1,La=/[\0-\x1F\x7F-\x9F]/),La}var Da,cf;function vJ(){return cf||(cf=1,Da=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/),Da}var Pa,lf;function Ld(){return lf||(lf=1,Pa=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/),Pa}var uf;function xJ(){return uf||(uf=1,bi.Any=Cd(),bi.Cc=Rd(),bi.Cf=vJ(),bi.P=Pc,bi.Z=Ld()),bi}(function(n){function e(A){return Object.prototype.toString.call(A)}function t(A){return e(A)==="[object String]"}var i=Object.prototype.hasOwnProperty;function r(A,B){return i.call(A,B)}function s(A){var B=Array.prototype.slice.call(arguments,1);return B.forEach(function(N){if(N){if(typeof N!="object")throw new TypeError(N+"must be object");Object.keys(N).forEach(function(X){A[X]=N[X]})}}),A}function a(A,B,N){return[].concat(A.slice(0,B),N,A.slice(B+1))}function o(A){return!(A>=55296&&A<=57343||A>=64976&&A<=65007||(A&65535)===65535||(A&65535)===65534||A>=0&&A<=8||A===11||A>=14&&A<=31||A>=127&&A<=159||A>1114111)}function c(A){if(A>65535){A-=65536;var B=55296+(A>>10),N=56320+(A&1023);return String.fromCharCode(B,N)}return String.fromCharCode(A)}var l=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,u=/&([a-z#][a-z0-9]{1,31});/gi,f=new RegExp(l.source+"|"+u.source,"gi"),h=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i,p=wd;function b(A,B){var N;return r(p,B)?p[B]:B.charCodeAt(0)===35&&h.test(B)&&(N=B[1].toLowerCase()==="x"?parseInt(B.slice(2),16):parseInt(B.slice(1),10),o(N))?c(N):A}function x(A){return A.indexOf("\\")<0?A:A.replace(l,"$1")}function m(A){return A.indexOf("\\")<0&&A.indexOf("&")<0?A:A.replace(f,function(B,N,X){return N||b(B,X)})}var d=/[&<>"]/,M=/[&<>"]/g,E={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function T(A){return E[A]}function C(A){return d.test(A)?A.replace(M,T):A}var R=/[.?*+^$[\]\\(){}|-]/g;function L(A){return A.replace(R,"\\$&")}function O(A){switch(A){case 9:case 32:return!0}return!1}function g(A){if(A>=8192&&A<=8202)return!0;switch(A){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var _=Pc;function D(A){return _.test(A)}function G(A){switch(A){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function q(A){return A=A.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(A=A.replace(/ẞ/g,"ß")),A.toLowerCase().toUpperCase()}n.lib={},n.lib.mdurl=br,n.lib.ucmicro=xJ(),n.assign=s,n.isString=t,n.has=r,n.unescapeMd=x,n.unescapeAll=m,n.isValidEntityCode=o,n.fromCodePoint=c,n.escapeHtml=C,n.arrayReplaceAt=a,n.isSpace=O,n.isWhiteSpace=g,n.isMdAsciiPunct=G,n.isPunctChar=D,n.escapeRE=L,n.normalizeReference=q})(Ke);var Co={},bJ=function(e,t,i){var r,s,a,o,c=-1,l=e.posMax,u=e.pos;for(e.pos=t+1,r=1;e.pos<l;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){s=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(i)return e.pos=u,-1}}return s&&(c=e.pos),e.pos=u,c},ff=Ke.unescapeAll,SJ=function(e,t,i){var r,s,a=t,o={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(a)===60){for(a++;a<i;){if(r=e.charCodeAt(a),r===10||r===60)return o;if(r===62)return o.pos=a+1,o.str=ff(e.slice(t+1,a)),o.ok=!0,o;if(r===92&&a+1<i){a+=2;continue}a++}return o}for(s=0;a<i&&(r=e.charCodeAt(a),!(r===32||r<32||r===127));){if(r===92&&a+1<i){if(e.charCodeAt(a+1)===32)break;a+=2;continue}if(r===40&&(s++,s>32))return o;if(r===41){if(s===0)break;s--}a++}return t===a||s!==0||(o.str=ff(e.slice(t,a)),o.pos=a,o.ok=!0),o},EJ=Ke.unescapeAll,yJ=function(e,t,i){var r,s,a=0,o=t,c={ok:!1,pos:0,lines:0,str:""};if(o>=i||(s=e.charCodeAt(o),s!==34&&s!==39&&s!==40))return c;for(o++,s===40&&(s=41);o<i;){if(r=e.charCodeAt(o),r===s)return c.pos=o+1,c.lines=a,c.str=EJ(e.slice(t+1,o)),c.ok=!0,c;if(r===40&&s===41)return c;r===10?a++:r===92&&o+1<i&&(o++,e.charCodeAt(o)===10&&a++),o++}return c};Co.parseLinkLabel=bJ;Co.parseLinkDestination=SJ;Co.parseLinkTitle=yJ;var MJ=Ke.assign,TJ=Ke.unescapeAll,Fi=Ke.escapeHtml,Sn={};Sn.code_inline=function(n,e,t,i,r){var s=n[e];return"<code"+r.renderAttrs(s)+">"+Fi(s.content)+"</code>"};Sn.code_block=function(n,e,t,i,r){var s=n[e];return"<pre"+r.renderAttrs(s)+"><code>"+Fi(n[e].content)+`</code></pre>
`};Sn.fence=function(n,e,t,i,r){var s=n[e],a=s.info?TJ(s.info).trim():"",o="",c="",l,u,f,h,p;return a&&(f=a.split(/(\s+)/g),o=f[0],c=f.slice(2).join("")),t.highlight?l=t.highlight(s.content,o,c)||Fi(s.content):l=Fi(s.content),l.indexOf("<pre")===0?l+`
`:a?(u=s.attrIndex("class"),h=s.attrs?s.attrs.slice():[],u<0?h.push(["class",t.langPrefix+o]):(h[u]=h[u].slice(),h[u][1]+=" "+t.langPrefix+o),p={attrs:h},"<pre><code"+r.renderAttrs(p)+">"+l+`</code></pre>
`):"<pre><code"+r.renderAttrs(s)+">"+l+`</code></pre>
`};Sn.image=function(n,e,t,i,r){var s=n[e];return s.attrs[s.attrIndex("alt")][1]=r.renderInlineAsText(s.children,t,i),r.renderToken(n,e,t)};Sn.hardbreak=function(n,e,t){return t.xhtmlOut?`<br />
`:`<br>
`};Sn.softbreak=function(n,e,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};Sn.text=function(n,e){return Fi(n[e].content)};Sn.html_block=function(n,e){return n[e].content};Sn.html_inline=function(n,e){return n[e].content};function Sr(){this.rules=MJ({},Sn)}Sr.prototype.renderAttrs=function(e){var t,i,r;if(!e.attrs)return"";for(r="",t=0,i=e.attrs.length;t<i;t++)r+=" "+Fi(e.attrs[t][0])+'="'+Fi(e.attrs[t][1])+'"';return r};Sr.prototype.renderToken=function(e,t,i){var r,s="",a=!1,o=e[t];return o.hidden?"":(o.block&&o.nesting!==-1&&t&&e[t-1].hidden&&(s+=`
`),s+=(o.nesting===-1?"</":"<")+o.tag,s+=this.renderAttrs(o),o.nesting===0&&i.xhtmlOut&&(s+=" /"),o.block&&(a=!0,o.nesting===1&&t+1<e.length&&(r=e[t+1],(r.type==="inline"||r.hidden||r.nesting===-1&&r.tag===o.tag)&&(a=!1))),s+=a?`>
`:">",s)};Sr.prototype.renderInline=function(n,e,t){for(var i,r="",s=this.rules,a=0,o=n.length;a<o;a++)i=n[a].type,typeof s[i]<"u"?r+=s[i](n,a,e,t,this):r+=this.renderToken(n,a,e);return r};Sr.prototype.renderInlineAsText=function(n,e,t){for(var i="",r=0,s=n.length;r<s;r++)n[r].type==="text"?i+=n[r].content:n[r].type==="image"?i+=this.renderInlineAsText(n[r].children,e,t):n[r].type==="softbreak"&&(i+=`
`);return i};Sr.prototype.render=function(n,e,t){var i,r,s,a="",o=this.rules;for(i=0,r=n.length;i<r;i++)s=n[i].type,s==="inline"?a+=this.renderInline(n[i].children,e,t):typeof o[s]<"u"?a+=o[s](n,i,e,t,this):a+=this.renderToken(n,i,e,t);return a};var AJ=Sr;function hn(){this.__rules__=[],this.__cache__=null}hn.prototype.__find__=function(n){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===n)return e;return-1};hn.prototype.__compile__=function(){var n=this,e=[""];n.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(i){e.indexOf(i)<0&&e.push(i)})}),n.__cache__={},e.forEach(function(t){n.__cache__[t]=[],n.__rules__.forEach(function(i){i.enabled&&(t&&i.alt.indexOf(t)<0||n.__cache__[t].push(i.fn))})})};hn.prototype.at=function(n,e,t){var i=this.__find__(n),r=t||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__[i].fn=e,this.__rules__[i].alt=r.alt||[],this.__cache__=null};hn.prototype.before=function(n,e,t,i){var r=this.__find__(n),s=i||{};if(r===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(r,0,{name:e,enabled:!0,fn:t,alt:s.alt||[]}),this.__cache__=null};hn.prototype.after=function(n,e,t,i){var r=this.__find__(n),s=i||{};if(r===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(r+1,0,{name:e,enabled:!0,fn:t,alt:s.alt||[]}),this.__cache__=null};hn.prototype.push=function(n,e,t){var i=t||{};this.__rules__.push({name:n,enabled:!0,fn:e,alt:i.alt||[]}),this.__cache__=null};hn.prototype.enable=function(n,e){Array.isArray(n)||(n=[n]);var t=[];return n.forEach(function(i){var r=this.__find__(i);if(r<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[r].enabled=!0,t.push(i)},this),this.__cache__=null,t};hn.prototype.enableOnly=function(n,e){Array.isArray(n)||(n=[n]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(n,e)};hn.prototype.disable=function(n,e){Array.isArray(n)||(n=[n]);var t=[];return n.forEach(function(i){var r=this.__find__(i);if(r<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[r].enabled=!1,t.push(i)},this),this.__cache__=null,t};hn.prototype.getRules=function(n){return this.__cache__===null&&this.__compile__(),this.__cache__[n]||[]};var Uc=hn,wJ=/\r\n?|\n/g,CJ=/\0/g,RJ=function(e){var t;t=e.src.replace(wJ,`
`),t=t.replace(CJ,"�"),e.src=t},LJ=function(e){var t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)},DJ=function(e){var t=e.tokens,i,r,s;for(r=0,s=t.length;r<s;r++)i=t[r],i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)},PJ=Ke.arrayReplaceAt;function UJ(n){return/^<a[>\s]/i.test(n)}function IJ(n){return/^<\/a\s*>/i.test(n)}var FJ=function(e){var t,i,r,s,a,o,c,l,u,f,h,p,b,x,m,d,M=e.tokens,E;if(e.md.options.linkify){for(i=0,r=M.length;i<r;i++)if(!(M[i].type!=="inline"||!e.md.linkify.pretest(M[i].content)))for(s=M[i].children,b=0,t=s.length-1;t>=0;t--){if(o=s[t],o.type==="link_close"){for(t--;s[t].level!==o.level&&s[t].type!=="link_open";)t--;continue}if(o.type==="html_inline"&&(UJ(o.content)&&b>0&&b--,IJ(o.content)&&b++),!(b>0)&&o.type==="text"&&e.md.linkify.test(o.content)){for(u=o.content,E=e.md.linkify.match(u),c=[],p=o.level,h=0,E.length>0&&E[0].index===0&&t>0&&s[t-1].type==="text_special"&&(E=E.slice(1)),l=0;l<E.length;l++)x=E[l].url,m=e.md.normalizeLink(x),e.md.validateLink(m)&&(d=E[l].text,E[l].schema?E[l].schema==="mailto:"&&!/^mailto:/i.test(d)?d=e.md.normalizeLinkText("mailto:"+d).replace(/^mailto:/,""):d=e.md.normalizeLinkText(d):d=e.md.normalizeLinkText("http://"+d).replace(/^http:\/\//,""),f=E[l].index,f>h&&(a=new e.Token("text","",0),a.content=u.slice(h,f),a.level=p,c.push(a)),a=new e.Token("link_open","a",1),a.attrs=[["href",m]],a.level=p++,a.markup="linkify",a.info="auto",c.push(a),a=new e.Token("text","",0),a.content=d,a.level=p,c.push(a),a=new e.Token("link_close","a",-1),a.level=--p,a.markup="linkify",a.info="auto",c.push(a),h=E[l].lastIndex);h<u.length&&(a=new e.Token("text","",0),a.content=u.slice(h),a.level=p,c.push(a)),M[i].children=s=PJ(s,t,c)}}}},Dd=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,NJ=/\((c|tm|r)\)/i,OJ=/\((c|tm|r)\)/ig,kJ={c:"©",r:"®",tm:"™"};function BJ(n,e){return kJ[e.toLowerCase()]}function zJ(n){var e,t,i=0;for(e=n.length-1;e>=0;e--)t=n[e],t.type==="text"&&!i&&(t.content=t.content.replace(OJ,BJ)),t.type==="link_open"&&t.info==="auto"&&i--,t.type==="link_close"&&t.info==="auto"&&i++}function HJ(n){var e,t,i=0;for(e=n.length-1;e>=0;e--)t=n[e],t.type==="text"&&!i&&Dd.test(t.content)&&(t.content=t.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),t.type==="link_open"&&t.info==="auto"&&i--,t.type==="link_close"&&t.info==="auto"&&i++}var GJ=function(e){var t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(NJ.test(e.tokens[t].content)&&zJ(e.tokens[t].children),Dd.test(e.tokens[t].content)&&HJ(e.tokens[t].children))},hf=Ke.isWhiteSpace,df=Ke.isPunctChar,pf=Ke.isMdAsciiPunct,VJ=/['"]/,mf=/['"]/g,gf="’";function Os(n,e,t){return n.slice(0,e)+t+n.slice(e+1)}function qJ(n,e){var t,i,r,s,a,o,c,l,u,f,h,p,b,x,m,d,M,E,T,C,R;for(T=[],t=0;t<n.length;t++){for(i=n[t],c=n[t].level,M=T.length-1;M>=0&&!(T[M].level<=c);M--);if(T.length=M+1,i.type==="text"){r=i.content,a=0,o=r.length;e:for(;a<o&&(mf.lastIndex=a,s=mf.exec(r),!!s);){if(m=d=!0,a=s.index+1,E=s[0]==="'",u=32,s.index-1>=0)u=r.charCodeAt(s.index-1);else for(M=t-1;M>=0&&!(n[M].type==="softbreak"||n[M].type==="hardbreak");M--)if(n[M].content){u=n[M].content.charCodeAt(n[M].content.length-1);break}if(f=32,a<o)f=r.charCodeAt(a);else for(M=t+1;M<n.length&&!(n[M].type==="softbreak"||n[M].type==="hardbreak");M++)if(n[M].content){f=n[M].content.charCodeAt(0);break}if(h=pf(u)||df(String.fromCharCode(u)),p=pf(f)||df(String.fromCharCode(f)),b=hf(u),x=hf(f),x?m=!1:p&&(b||h||(m=!1)),b?d=!1:h&&(x||p||(d=!1)),f===34&&s[0]==='"'&&u>=48&&u<=57&&(d=m=!1),m&&d&&(m=h,d=p),!m&&!d){E&&(i.content=Os(i.content,s.index,gf));continue}if(d){for(M=T.length-1;M>=0&&(l=T[M],!(T[M].level<c));M--)if(l.single===E&&T[M].level===c){l=T[M],E?(C=e.md.options.quotes[2],R=e.md.options.quotes[3]):(C=e.md.options.quotes[0],R=e.md.options.quotes[1]),i.content=Os(i.content,s.index,R),n[l.token].content=Os(n[l.token].content,l.pos,C),a+=R.length-1,l.token===t&&(a+=C.length-1),r=i.content,o=r.length,T.length=M;continue e}}m?T.push({token:t,pos:s.index,single:E,level:c}):d&&E&&(i.content=Os(i.content,s.index,gf))}}}}var WJ=function(e){var t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!VJ.test(e.tokens[t].content)||qJ(e.tokens[t].children,e)},XJ=function(e){var t,i,r,s,a,o,c=e.tokens;for(t=0,i=c.length;t<i;t++)if(c[t].type==="inline"){for(r=c[t].children,a=r.length,s=0;s<a;s++)r[s].type==="text_special"&&(r[s].type="text");for(s=o=0;s<a;s++)r[s].type==="text"&&s+1<a&&r[s+1].type==="text"?r[s+1].content=r[s].content+r[s+1].content:(s!==o&&(r[o]=r[s]),o++);s!==o&&(r.length=o)}};function Er(n,e,t){this.type=n,this.tag=e,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Er.prototype.attrIndex=function(e){var t,i,r;if(!this.attrs)return-1;for(t=this.attrs,i=0,r=t.length;i<r;i++)if(t[i][0]===e)return i;return-1};Er.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};Er.prototype.attrSet=function(e,t){var i=this.attrIndex(e),r=[e,t];i<0?this.attrPush(r):this.attrs[i]=r};Er.prototype.attrGet=function(e){var t=this.attrIndex(e),i=null;return t>=0&&(i=this.attrs[t][1]),i};Er.prototype.attrJoin=function(e,t){var i=this.attrIndex(e);i<0?this.attrPush([e,t]):this.attrs[i][1]=this.attrs[i][1]+" "+t};var Ic=Er,jJ=Ic;function Pd(n,e,t){this.src=n,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=e}Pd.prototype.Token=jJ;var $J=Pd,YJ=Uc,Ua=[["normalize",RJ],["block",LJ],["inline",DJ],["linkify",FJ],["replacements",GJ],["smartquotes",WJ],["text_join",XJ]];function Fc(){this.ruler=new YJ;for(var n=0;n<Ua.length;n++)this.ruler.push(Ua[n][0],Ua[n][1])}Fc.prototype.process=function(n){var e,t,i;for(i=this.ruler.getRules(""),e=0,t=i.length;e<t;e++)i[e](n)};Fc.prototype.State=$J;var KJ=Fc,Ia=Ke.isSpace;function Fa(n,e){var t=n.bMarks[e]+n.tShift[e],i=n.eMarks[e];return n.src.slice(t,i)}function _f(n){var e=[],t=0,i=n.length,r,s=!1,a=0,o="";for(r=n.charCodeAt(t);t<i;)r===124&&(s?(o+=n.substring(a,t-1),a=t):(e.push(o+n.substring(a,t)),o="",a=t+1)),s=r===92,t++,r=n.charCodeAt(t);return e.push(o+n.substring(a)),e}var ZJ=function(e,t,i,r){var s,a,o,c,l,u,f,h,p,b,x,m,d,M,E,T,C,R;if(t+2>i||(u=t+1,e.sCount[u]<e.blkIndent)||e.sCount[u]-e.blkIndent>=4||(o=e.bMarks[u]+e.tShift[u],o>=e.eMarks[u])||(C=e.src.charCodeAt(o++),C!==124&&C!==45&&C!==58)||o>=e.eMarks[u]||(R=e.src.charCodeAt(o++),R!==124&&R!==45&&R!==58&&!Ia(R))||C===45&&Ia(R))return!1;for(;o<e.eMarks[u];){if(s=e.src.charCodeAt(o),s!==124&&s!==45&&s!==58&&!Ia(s))return!1;o++}for(a=Fa(e,t+1),f=a.split("|"),b=[],c=0;c<f.length;c++){if(x=f[c].trim(),!x){if(c===0||c===f.length-1)continue;return!1}if(!/^:?-+:?$/.test(x))return!1;x.charCodeAt(x.length-1)===58?b.push(x.charCodeAt(0)===58?"center":"right"):x.charCodeAt(0)===58?b.push("left"):b.push("")}if(a=Fa(e,t).trim(),a.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4||(f=_f(a),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),h=f.length,h===0||h!==b.length))return!1;if(r)return!0;for(M=e.parentType,e.parentType="table",T=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),p.map=m=[t,0],p=e.push("thead_open","thead",1),p.map=[t,t+1],p=e.push("tr_open","tr",1),p.map=[t,t+1],c=0;c<f.length;c++)p=e.push("th_open","th",1),b[c]&&(p.attrs=[["style","text-align:"+b[c]]]),p=e.push("inline","",0),p.content=f[c].trim(),p.children=[],p=e.push("th_close","th",-1);for(p=e.push("tr_close","tr",-1),p=e.push("thead_close","thead",-1),u=t+2;u<i&&!(e.sCount[u]<e.blkIndent);u++){for(E=!1,c=0,l=T.length;c<l;c++)if(T[c](e,u,i,!0)){E=!0;break}if(E||(a=Fa(e,u).trim(),!a)||e.sCount[u]-e.blkIndent>=4)break;for(f=_f(a),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),u===t+2&&(p=e.push("tbody_open","tbody",1),p.map=d=[t+2,0]),p=e.push("tr_open","tr",1),p.map=[u,u+1],c=0;c<h;c++)p=e.push("td_open","td",1),b[c]&&(p.attrs=[["style","text-align:"+b[c]]]),p=e.push("inline","",0),p.content=f[c]?f[c].trim():"",p.children=[],p=e.push("td_close","td",-1);p=e.push("tr_close","tr",-1)}return d&&(p=e.push("tbody_close","tbody",-1),d[1]=u),p=e.push("table_close","table",-1),m[1]=u,e.parentType=M,e.line=u,!0},JJ=function(e,t,i){var r,s,a;if(e.sCount[t]-e.blkIndent<4)return!1;for(s=r=t+1;r<i;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,s=r;continue}break}return e.line=s,a=e.push("code_block","code",0),a.content=e.getLines(t,s,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0},QJ=function(e,t,i,r){var s,a,o,c,l,u,f,h=!1,p=e.bMarks[t]+e.tShift[t],b=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||p+3>b||(s=e.src.charCodeAt(p),s!==126&&s!==96)||(l=p,p=e.skipChars(p,s),a=p-l,a<3)||(f=e.src.slice(l,p),o=e.src.slice(p,b),s===96&&o.indexOf(String.fromCharCode(s))>=0))return!1;if(r)return!0;for(c=t;c++,!(c>=i||(p=l=e.bMarks[c]+e.tShift[c],b=e.eMarks[c],p<b&&e.sCount[c]<e.blkIndent));)if(e.src.charCodeAt(p)===s&&!(e.sCount[c]-e.blkIndent>=4)&&(p=e.skipChars(p,s),!(p-l<a)&&(p=e.skipSpaces(p),!(p<b)))){h=!0;break}return a=e.sCount[t],e.line=c+(h?1:0),u=e.push("fence","code",0),u.info=o,u.content=e.getLines(t+1,c,a,!0),u.markup=f,u.map=[t,e.line],!0},eQ=Ke.isSpace,tQ=function(e,t,i,r){var s,a,o,c,l,u,f,h,p,b,x,m,d,M,E,T,C,R,L,O,g=e.lineMax,_=e.bMarks[t]+e.tShift[t],D=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(_)!==62)return!1;if(r)return!0;for(b=[],x=[],M=[],E=[],R=e.md.block.ruler.getRules("blockquote"),d=e.parentType,e.parentType="blockquote",h=t;h<i&&(O=e.sCount[h]<e.blkIndent,_=e.bMarks[h]+e.tShift[h],D=e.eMarks[h],!(_>=D));h++){if(e.src.charCodeAt(_++)===62&&!O){for(c=e.sCount[h]+1,e.src.charCodeAt(_)===32?(_++,c++,s=!1,T=!0):e.src.charCodeAt(_)===9?(T=!0,(e.bsCount[h]+c)%4===3?(_++,c++,s=!1):s=!0):T=!1,p=c,b.push(e.bMarks[h]),e.bMarks[h]=_;_<D&&(a=e.src.charCodeAt(_),eQ(a));){a===9?p+=4-(p+e.bsCount[h]+(s?1:0))%4:p++;_++}u=_>=D,x.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(T?1:0),M.push(e.sCount[h]),e.sCount[h]=p-c,E.push(e.tShift[h]),e.tShift[h]=_-e.bMarks[h];continue}if(u)break;for(C=!1,o=0,l=R.length;o<l;o++)if(R[o](e,h,i,!0)){C=!0;break}if(C){e.lineMax=h,e.blkIndent!==0&&(b.push(e.bMarks[h]),x.push(e.bsCount[h]),E.push(e.tShift[h]),M.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}b.push(e.bMarks[h]),x.push(e.bsCount[h]),E.push(e.tShift[h]),M.push(e.sCount[h]),e.sCount[h]=-1}for(m=e.blkIndent,e.blkIndent=0,L=e.push("blockquote_open","blockquote",1),L.markup=">",L.map=f=[t,0],e.md.block.tokenize(e,t,h),L=e.push("blockquote_close","blockquote",-1),L.markup=">",e.lineMax=g,e.parentType=d,f[1]=e.line,o=0;o<E.length;o++)e.bMarks[o+t]=b[o],e.tShift[o+t]=E[o],e.sCount[o+t]=M[o],e.bsCount[o+t]=x[o];return e.blkIndent=m,!0},nQ=Ke.isSpace,iQ=function(e,t,i,r){var s,a,o,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(s=e.src.charCodeAt(l++),s!==42&&s!==45&&s!==95))return!1;for(a=1;l<u;){if(o=e.src.charCodeAt(l++),o!==s&&!nQ(o))return!1;o===s&&a++}return a<3?!1:(r||(e.line=t+1,c=e.push("hr","hr",0),c.map=[t,e.line],c.markup=Array(a+1).join(String.fromCharCode(s))),!0)},Ud=Ke.isSpace;function vf(n,e){var t,i,r,s;return i=n.bMarks[e]+n.tShift[e],r=n.eMarks[e],t=n.src.charCodeAt(i++),t!==42&&t!==45&&t!==43||i<r&&(s=n.src.charCodeAt(i),!Ud(s))?-1:i}function xf(n,e){var t,i=n.bMarks[e]+n.tShift[e],r=i,s=n.eMarks[e];if(r+1>=s||(t=n.src.charCodeAt(r++),t<48||t>57))return-1;for(;;){if(r>=s)return-1;if(t=n.src.charCodeAt(r++),t>=48&&t<=57){if(r-i>=10)return-1;continue}if(t===41||t===46)break;return-1}return r<s&&(t=n.src.charCodeAt(r),!Ud(t))?-1:r}function rQ(n,e){var t,i,r=n.level+2;for(t=e+2,i=n.tokens.length-2;t<i;t++)n.tokens[t].level===r&&n.tokens[t].type==="paragraph_open"&&(n.tokens[t+2].hidden=!0,n.tokens[t].hidden=!0,t+=2)}var sQ=function(e,t,i,r){var s,a,o,c,l,u,f,h,p,b,x,m,d,M,E,T,C,R,L,O,g,_,D,G,q,A,B,N=t,X=!1,Y=!0;if(e.sCount[N]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[N]-e.listIndent>=4&&e.sCount[N]<e.blkIndent)return!1;if(r&&e.parentType==="paragraph"&&e.sCount[N]>=e.blkIndent&&(X=!0),(_=xf(e,N))>=0){if(f=!0,G=e.bMarks[N]+e.tShift[N],d=Number(e.src.slice(G,_-1)),X&&d!==1)return!1}else if((_=vf(e,N))>=0)f=!1;else return!1;if(X&&e.skipSpaces(_)>=e.eMarks[N])return!1;if(r)return!0;for(m=e.src.charCodeAt(_-1),x=e.tokens.length,f?(B=e.push("ordered_list_open","ol",1),d!==1&&(B.attrs=[["start",d]])):B=e.push("bullet_list_open","ul",1),B.map=b=[N,0],B.markup=String.fromCharCode(m),D=!1,A=e.md.block.ruler.getRules("list"),C=e.parentType,e.parentType="list";N<i;){for(g=_,M=e.eMarks[N],u=E=e.sCount[N]+_-(e.bMarks[N]+e.tShift[N]);g<M;){if(s=e.src.charCodeAt(g),s===9)E+=4-(E+e.bsCount[N])%4;else if(s===32)E++;else break;g++}if(a=g,a>=M?l=1:l=E-u,l>4&&(l=1),c=u+l,B=e.push("list_item_open","li",1),B.markup=String.fromCharCode(m),B.map=h=[N,0],f&&(B.info=e.src.slice(G,_-1)),O=e.tight,L=e.tShift[N],R=e.sCount[N],T=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=c,e.tight=!0,e.tShift[N]=a-e.bMarks[N],e.sCount[N]=E,a>=M&&e.isEmpty(N+1)?e.line=Math.min(e.line+2,i):e.md.block.tokenize(e,N,i,!0),(!e.tight||D)&&(Y=!1),D=e.line-N>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=T,e.tShift[N]=L,e.sCount[N]=R,e.tight=O,B=e.push("list_item_close","li",-1),B.markup=String.fromCharCode(m),N=e.line,h[1]=N,N>=i||e.sCount[N]<e.blkIndent||e.sCount[N]-e.blkIndent>=4)break;for(q=!1,o=0,p=A.length;o<p;o++)if(A[o](e,N,i,!0)){q=!0;break}if(q)break;if(f){if(_=xf(e,N),_<0)break;G=e.bMarks[N]+e.tShift[N]}else if(_=vf(e,N),_<0)break;if(m!==e.src.charCodeAt(_-1))break}return f?B=e.push("ordered_list_close","ol",-1):B=e.push("bullet_list_close","ul",-1),B.markup=String.fromCharCode(m),b[1]=N,e.line=N,e.parentType=C,Y&&rQ(e,x),!0},oQ=Ke.normalizeReference,ks=Ke.isSpace,aQ=function(e,t,i,r){var s,a,o,c,l,u,f,h,p,b,x,m,d,M,E,T,C=0,R=e.bMarks[t]+e.tShift[t],L=e.eMarks[t],O=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(R)!==91)return!1;for(;++R<L;)if(e.src.charCodeAt(R)===93&&e.src.charCodeAt(R-1)!==92){if(R+1===L||e.src.charCodeAt(R+1)!==58)return!1;break}for(c=e.lineMax,E=e.md.block.ruler.getRules("reference"),b=e.parentType,e.parentType="reference";O<c&&!e.isEmpty(O);O++)if(!(e.sCount[O]-e.blkIndent>3)&&!(e.sCount[O]<0)){for(M=!1,u=0,f=E.length;u<f;u++)if(E[u](e,O,c,!0)){M=!0;break}if(M)break}for(d=e.getLines(t,O,e.blkIndent,!1).trim(),L=d.length,R=1;R<L;R++){if(s=d.charCodeAt(R),s===91)return!1;if(s===93){p=R;break}else s===10?C++:s===92&&(R++,R<L&&d.charCodeAt(R)===10&&C++)}if(p<0||d.charCodeAt(p+1)!==58)return!1;for(R=p+2;R<L;R++)if(s=d.charCodeAt(R),s===10)C++;else if(!ks(s))break;if(x=e.md.helpers.parseLinkDestination(d,R,L),!x.ok||(l=e.md.normalizeLink(x.str),!e.md.validateLink(l)))return!1;for(R=x.pos,C+=x.lines,a=R,o=C,m=R;R<L;R++)if(s=d.charCodeAt(R),s===10)C++;else if(!ks(s))break;for(x=e.md.helpers.parseLinkTitle(d,R,L),R<L&&m!==R&&x.ok?(T=x.str,R=x.pos,C+=x.lines):(T="",R=a,C=o);R<L&&(s=d.charCodeAt(R),!!ks(s));)R++;if(R<L&&d.charCodeAt(R)!==10&&T)for(T="",R=a,C=o;R<L&&(s=d.charCodeAt(R),!!ks(s));)R++;return R<L&&d.charCodeAt(R)!==10||(h=oQ(d.slice(1,p)),!h)?!1:(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[h]>"u"&&(e.env.references[h]={title:T,href:l}),e.parentType=b,e.line=t+C+1),!0)},cQ=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ro={},lQ="[a-zA-Z_:][a-zA-Z0-9:._-]*",uQ="[^\"'=<>`\\x00-\\x20]+",fQ="'[^']*'",hQ='"[^"]*"',dQ="(?:"+uQ+"|"+fQ+"|"+hQ+")",pQ="(?:\\s+"+lQ+"(?:\\s*=\\s*"+dQ+")?)",Id="<[A-Za-z][A-Za-z0-9\\-]*"+pQ+"*\\s*\\/?>",Fd="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",mQ="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",gQ="<[?][\\s\\S]*?[?]>",_Q="<![A-Z]+\\s+[^>]*>",vQ="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",xQ=new RegExp("^(?:"+Id+"|"+Fd+"|"+mQ+"|"+gQ+"|"+_Q+"|"+vQ+")"),bQ=new RegExp("^(?:"+Id+"|"+Fd+")");Ro.HTML_TAG_RE=xQ;Ro.HTML_OPEN_CLOSE_TAG_RE=bQ;var SQ=cQ,EQ=Ro.HTML_OPEN_CLOSE_TAG_RE,Qi=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+SQ.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(EQ.source+"\\s*$"),/^$/,!1]],yQ=function(e,t,i,r){var s,a,o,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(l)!==60)return!1;for(c=e.src.slice(l,u),s=0;s<Qi.length&&!Qi[s][0].test(c);s++);if(s===Qi.length)return!1;if(r)return Qi[s][2];if(a=t+1,!Qi[s][1].test(c)){for(;a<i&&!(e.sCount[a]<e.blkIndent);a++)if(l=e.bMarks[a]+e.tShift[a],u=e.eMarks[a],c=e.src.slice(l,u),Qi[s][1].test(c)){c.length!==0&&a++;break}}return e.line=a,o=e.push("html_block","",0),o.map=[t,a],o.content=e.getLines(t,a,e.blkIndent,!0),!0},bf=Ke.isSpace,MQ=function(e,t,i,r){var s,a,o,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(s=e.src.charCodeAt(l),s!==35||l>=u))return!1;for(a=1,s=e.src.charCodeAt(++l);s===35&&l<u&&a<=6;)a++,s=e.src.charCodeAt(++l);return a>6||l<u&&!bf(s)?!1:(r||(u=e.skipSpacesBack(u,l),o=e.skipCharsBack(u,35,l),o>l&&bf(e.src.charCodeAt(o-1))&&(u=o),e.line=t+1,c=e.push("heading_open","h"+String(a),1),c.markup="########".slice(0,a),c.map=[t,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[t,e.line],c.children=[],c=e.push("heading_close","h"+String(a),-1),c.markup="########".slice(0,a)),!0)},TQ=function(e,t,i){var r,s,a,o,c,l,u,f,h,p=t+1,b,x=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;for(b=e.parentType,e.parentType="paragraph";p<i&&!e.isEmpty(p);p++)if(!(e.sCount[p]-e.blkIndent>3)){if(e.sCount[p]>=e.blkIndent&&(l=e.bMarks[p]+e.tShift[p],u=e.eMarks[p],l<u&&(h=e.src.charCodeAt(l),(h===45||h===61)&&(l=e.skipChars(l,h),l=e.skipSpaces(l),l>=u)))){f=h===61?1:2;break}if(!(e.sCount[p]<0)){for(s=!1,a=0,o=x.length;a<o;a++)if(x[a](e,p,i,!0)){s=!0;break}if(s)break}}return f?(r=e.getLines(t,p,e.blkIndent,!1).trim(),e.line=p+1,c=e.push("heading_open","h"+String(f),1),c.markup=String.fromCharCode(h),c.map=[t,e.line],c=e.push("inline","",0),c.content=r,c.map=[t,e.line-1],c.children=[],c=e.push("heading_close","h"+String(f),-1),c.markup=String.fromCharCode(h),e.parentType=b,!0):!1},AQ=function(e,t,i){var r,s,a,o,c,l,u=t+1,f=e.md.block.ruler.getRules("paragraph");for(l=e.parentType,e.parentType="paragraph";u<i&&!e.isEmpty(u);u++)if(!(e.sCount[u]-e.blkIndent>3)&&!(e.sCount[u]<0)){for(s=!1,a=0,o=f.length;a<o;a++)if(f[a](e,u,i,!0)){s=!0;break}if(s)break}return r=e.getLines(t,u,e.blkIndent,!1).trim(),e.line=u,c=e.push("paragraph_open","p",1),c.map=[t,e.line],c=e.push("inline","",0),c.content=r,c.map=[t,e.line],c.children=[],c=e.push("paragraph_close","p",-1),e.parentType=l,!0},Nd=Ic,Lo=Ke.isSpace;function En(n,e,t,i){var r,s,a,o,c,l,u,f;for(this.src=n,this.md=e,this.env=t,this.tokens=i,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",s=this.src,f=!1,a=o=l=u=0,c=s.length;o<c;o++){if(r=s.charCodeAt(o),!f)if(Lo(r)){l++,r===9?u+=4-u%4:u++;continue}else f=!0;(r===10||o===c-1)&&(r!==10&&o++,this.bMarks.push(a),this.eMarks.push(o),this.tShift.push(l),this.sCount.push(u),this.bsCount.push(0),f=!1,l=0,u=0,a=o+1)}this.bMarks.push(s.length),this.eMarks.push(s.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}En.prototype.push=function(n,e,t){var i=new Nd(n,e,t);return i.block=!0,t<0&&this.level--,i.level=this.level,t>0&&this.level++,this.tokens.push(i),i};En.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};En.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};En.prototype.skipSpaces=function(e){for(var t,i=this.src.length;e<i&&(t=this.src.charCodeAt(e),!!Lo(t));e++);return e};En.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!Lo(this.src.charCodeAt(--e)))return e+1;return e};En.prototype.skipChars=function(e,t){for(var i=this.src.length;e<i&&this.src.charCodeAt(e)===t;e++);return e};En.prototype.skipCharsBack=function(e,t,i){if(e<=i)return e;for(;e>i;)if(t!==this.src.charCodeAt(--e))return e+1;return e};En.prototype.getLines=function(e,t,i,r){var s,a,o,c,l,u,f,h=e;if(e>=t)return"";for(u=new Array(t-e),s=0;h<t;h++,s++){for(a=0,f=c=this.bMarks[h],h+1<t||r?l=this.eMarks[h]+1:l=this.eMarks[h];c<l&&a<i;){if(o=this.src.charCodeAt(c),Lo(o))o===9?a+=4-(a+this.bsCount[h])%4:a++;else if(c-f<this.tShift[h])a++;else break;c++}a>i?u[s]=new Array(a-i+1).join(" ")+this.src.slice(c,l):u[s]=this.src.slice(c,l)}return u.join("")};En.prototype.Token=Nd;var wQ=En,CQ=Uc,Bs=[["table",ZJ,["paragraph","reference"]],["code",JJ],["fence",QJ,["paragraph","reference","blockquote","list"]],["blockquote",tQ,["paragraph","reference","blockquote","list"]],["hr",iQ,["paragraph","reference","blockquote","list"]],["list",sQ,["paragraph","reference","blockquote"]],["reference",aQ],["html_block",yQ,["paragraph","reference","blockquote"]],["heading",MQ,["paragraph","reference","blockquote"]],["lheading",TQ],["paragraph",AQ]];function Do(){this.ruler=new CQ;for(var n=0;n<Bs.length;n++)this.ruler.push(Bs[n][0],Bs[n][1],{alt:(Bs[n][2]||[]).slice()})}Do.prototype.tokenize=function(n,e,t){for(var i,r,s,a=this.ruler.getRules(""),o=a.length,c=e,l=!1,u=n.md.options.maxNesting;c<t&&(n.line=c=n.skipEmptyLines(c),!(c>=t||n.sCount[c]<n.blkIndent));){if(n.level>=u){n.line=t;break}for(s=n.line,r=0;r<o;r++)if(i=a[r](n,c,t,!1),i){if(s>=n.line)throw new Error("block rule didn't increment state.line");break}if(!i)throw new Error("none of the block rules matched");n.tight=!l,n.isEmpty(n.line-1)&&(l=!0),c=n.line,c<t&&n.isEmpty(c)&&(l=!0,c++,n.line=c)}};Do.prototype.parse=function(n,e,t,i){var r;n&&(r=new this.State(n,e,t,i),this.tokenize(r,r.line,r.lineMax))};Do.prototype.State=wQ;var RQ=Do;function LQ(n){switch(n){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}var DQ=function(e,t){for(var i=e.pos;i<e.posMax&&!LQ(e.src.charCodeAt(i));)i++;return i===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,i)),e.pos=i,!0)},PQ=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i,UQ=function(e,t){var i,r,s,a,o,c,l,u;return!e.md.options.linkify||e.linkLevel>0||(i=e.pos,r=e.posMax,i+3>r)||e.src.charCodeAt(i)!==58||e.src.charCodeAt(i+1)!==47||e.src.charCodeAt(i+2)!==47||(s=e.pending.match(PQ),!s)||(a=s[1],o=e.md.linkify.matchAtStart(e.src.slice(i-a.length)),!o)||(c=o.url,c.length<=a.length)||(c=c.replace(/\*+$/,""),l=e.md.normalizeLink(c),!e.md.validateLink(l))?!1:(t||(e.pending=e.pending.slice(0,-a.length),u=e.push("link_open","a",1),u.attrs=[["href",l]],u.markup="linkify",u.info="auto",u=e.push("text","",0),u.content=e.md.normalizeLinkText(c),u=e.push("link_close","a",-1),u.markup="linkify",u.info="auto"),e.pos+=c.length-a.length,!0)},IQ=Ke.isSpace,FQ=function(e,t){var i,r,s,a=e.pos;if(e.src.charCodeAt(a)!==10)return!1;if(i=e.pending.length-1,r=e.posMax,!t)if(i>=0&&e.pending.charCodeAt(i)===32)if(i>=1&&e.pending.charCodeAt(i-1)===32){for(s=i-1;s>=1&&e.pending.charCodeAt(s-1)===32;)s--;e.pending=e.pending.slice(0,s),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(a++;a<r&&IQ(e.src.charCodeAt(a));)a++;return e.pos=a,!0},NQ=Ke.isSpace,Nc=[];for(var Sf=0;Sf<256;Sf++)Nc.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){Nc[n.charCodeAt(0)]=1});var OQ=function(e,t){var i,r,s,a,o,c=e.pos,l=e.posMax;if(e.src.charCodeAt(c)!==92||(c++,c>=l))return!1;if(i=e.src.charCodeAt(c),i===10){for(t||e.push("hardbreak","br",0),c++;c<l&&(i=e.src.charCodeAt(c),!!NQ(i));)c++;return e.pos=c,!0}return a=e.src[c],i>=55296&&i<=56319&&c+1<l&&(r=e.src.charCodeAt(c+1),r>=56320&&r<=57343&&(a+=e.src[c+1],c++)),s="\\"+a,t||(o=e.push("text_special","",0),i<256&&Nc[i]!==0?o.content=a:o.content=s,o.markup=s,o.info="escape"),e.pos=c+1,!0},kQ=function(e,t){var i,r,s,a,o,c,l,u,f=e.pos,h=e.src.charCodeAt(f);if(h!==96)return!1;for(i=f,f++,r=e.posMax;f<r&&e.src.charCodeAt(f)===96;)f++;if(s=e.src.slice(i,f),l=s.length,e.backticksScanned&&(e.backticks[l]||0)<=i)return t||(e.pending+=s),e.pos+=l,!0;for(c=f;(o=e.src.indexOf("`",c))!==-1;){for(c=o+1;c<r&&e.src.charCodeAt(c)===96;)c++;if(u=c-o,u===l)return t||(a=e.push("code_inline","code",0),a.markup=s,a.content=e.src.slice(f,o).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=c,!0;e.backticks[u]=o}return e.backticksScanned=!0,t||(e.pending+=s),e.pos+=l,!0},Po={};Po.tokenize=function(e,t){var i,r,s,a,o,c=e.pos,l=e.src.charCodeAt(c);if(t||l!==126||(r=e.scanDelims(e.pos,!0),a=r.length,o=String.fromCharCode(l),a<2))return!1;for(a%2&&(s=e.push("text","",0),s.content=o,a--),i=0;i<a;i+=2)s=e.push("text","",0),s.content=o+o,e.delimiters.push({marker:l,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0};function Ef(n,e){var t,i,r,s,a,o=[],c=e.length;for(t=0;t<c;t++)r=e[t],r.marker===126&&r.end!==-1&&(s=e[r.end],a=n.tokens[r.token],a.type="s_open",a.tag="s",a.nesting=1,a.markup="~~",a.content="",a=n.tokens[s.token],a.type="s_close",a.tag="s",a.nesting=-1,a.markup="~~",a.content="",n.tokens[s.token-1].type==="text"&&n.tokens[s.token-1].content==="~"&&o.push(s.token-1));for(;o.length;){for(t=o.pop(),i=t+1;i<n.tokens.length&&n.tokens[i].type==="s_close";)i++;i--,t!==i&&(a=n.tokens[i],n.tokens[i]=n.tokens[t],n.tokens[t]=a)}}Po.postProcess=function(e){var t,i=e.tokens_meta,r=e.tokens_meta.length;for(Ef(e,e.delimiters),t=0;t<r;t++)i[t]&&i[t].delimiters&&Ef(e,i[t].delimiters)};var Uo={};Uo.tokenize=function(e,t){var i,r,s,a=e.pos,o=e.src.charCodeAt(a);if(t||o!==95&&o!==42)return!1;for(r=e.scanDelims(e.pos,o===42),i=0;i<r.length;i++)s=e.push("text","",0),s.content=String.fromCharCode(o),e.delimiters.push({marker:o,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0};function yf(n,e){var t,i,r,s,a,o,c=e.length;for(t=c-1;t>=0;t--)i=e[t],!(i.marker!==95&&i.marker!==42)&&i.end!==-1&&(r=e[i.end],o=t>0&&e[t-1].end===i.end+1&&e[t-1].marker===i.marker&&e[t-1].token===i.token-1&&e[i.end+1].token===r.token+1,a=String.fromCharCode(i.marker),s=n.tokens[i.token],s.type=o?"strong_open":"em_open",s.tag=o?"strong":"em",s.nesting=1,s.markup=o?a+a:a,s.content="",s=n.tokens[r.token],s.type=o?"strong_close":"em_close",s.tag=o?"strong":"em",s.nesting=-1,s.markup=o?a+a:a,s.content="",o&&(n.tokens[e[t-1].token].content="",n.tokens[e[i.end+1].token].content="",t--))}Uo.postProcess=function(e){var t,i=e.tokens_meta,r=e.tokens_meta.length;for(yf(e,e.delimiters),t=0;t<r;t++)i[t]&&i[t].delimiters&&yf(e,i[t].delimiters)};var BQ=Ke.normalizeReference,Na=Ke.isSpace,zQ=function(e,t){var i,r,s,a,o,c,l,u,f,h="",p="",b=e.pos,x=e.posMax,m=e.pos,d=!0;if(e.src.charCodeAt(e.pos)!==91||(o=e.pos+1,a=e.md.helpers.parseLinkLabel(e,e.pos,!0),a<0))return!1;if(c=a+1,c<x&&e.src.charCodeAt(c)===40){for(d=!1,c++;c<x&&(r=e.src.charCodeAt(c),!(!Na(r)&&r!==10));c++);if(c>=x)return!1;if(m=c,l=e.md.helpers.parseLinkDestination(e.src,c,e.posMax),l.ok){for(h=e.md.normalizeLink(l.str),e.md.validateLink(h)?c=l.pos:h="",m=c;c<x&&(r=e.src.charCodeAt(c),!(!Na(r)&&r!==10));c++);if(l=e.md.helpers.parseLinkTitle(e.src,c,e.posMax),c<x&&m!==c&&l.ok)for(p=l.str,c=l.pos;c<x&&(r=e.src.charCodeAt(c),!(!Na(r)&&r!==10));c++);}(c>=x||e.src.charCodeAt(c)!==41)&&(d=!0),c++}if(d){if(typeof e.env.references>"u")return!1;if(c<x&&e.src.charCodeAt(c)===91?(m=c+1,c=e.md.helpers.parseLinkLabel(e,c),c>=0?s=e.src.slice(m,c++):c=a+1):c=a+1,s||(s=e.src.slice(o,a)),u=e.env.references[BQ(s)],!u)return e.pos=b,!1;h=u.href,p=u.title}return t||(e.pos=o,e.posMax=a,f=e.push("link_open","a",1),f.attrs=i=[["href",h]],p&&i.push(["title",p]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,f=e.push("link_close","a",-1)),e.pos=c,e.posMax=x,!0},HQ=Ke.normalizeReference,Oa=Ke.isSpace,GQ=function(e,t){var i,r,s,a,o,c,l,u,f,h,p,b,x,m="",d=e.pos,M=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(c=e.pos+2,o=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),o<0))return!1;if(l=o+1,l<M&&e.src.charCodeAt(l)===40){for(l++;l<M&&(r=e.src.charCodeAt(l),!(!Oa(r)&&r!==10));l++);if(l>=M)return!1;for(x=l,f=e.md.helpers.parseLinkDestination(e.src,l,e.posMax),f.ok&&(m=e.md.normalizeLink(f.str),e.md.validateLink(m)?l=f.pos:m=""),x=l;l<M&&(r=e.src.charCodeAt(l),!(!Oa(r)&&r!==10));l++);if(f=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<M&&x!==l&&f.ok)for(h=f.str,l=f.pos;l<M&&(r=e.src.charCodeAt(l),!(!Oa(r)&&r!==10));l++);else h="";if(l>=M||e.src.charCodeAt(l)!==41)return e.pos=d,!1;l++}else{if(typeof e.env.references>"u")return!1;if(l<M&&e.src.charCodeAt(l)===91?(x=l+1,l=e.md.helpers.parseLinkLabel(e,l),l>=0?a=e.src.slice(x,l++):l=o+1):l=o+1,a||(a=e.src.slice(c,o)),u=e.env.references[HQ(a)],!u)return e.pos=d,!1;m=u.href,h=u.title}return t||(s=e.src.slice(c,o),e.md.inline.parse(s,e.md,e.env,b=[]),p=e.push("image","img",0),p.attrs=i=[["src",m],["alt",""]],p.children=b,p.content=s,h&&i.push(["title",h])),e.pos=l,e.posMax=M,!0},VQ=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,qQ=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,WQ=function(e,t){var i,r,s,a,o,c,l=e.pos;if(e.src.charCodeAt(l)!==60)return!1;for(o=e.pos,c=e.posMax;;){if(++l>=c||(a=e.src.charCodeAt(l),a===60))return!1;if(a===62)break}return i=e.src.slice(o+1,l),qQ.test(i)?(r=e.md.normalizeLink(i),e.md.validateLink(r)?(t||(s=e.push("link_open","a",1),s.attrs=[["href",r]],s.markup="autolink",s.info="auto",s=e.push("text","",0),s.content=e.md.normalizeLinkText(i),s=e.push("link_close","a",-1),s.markup="autolink",s.info="auto"),e.pos+=i.length+2,!0):!1):VQ.test(i)?(r=e.md.normalizeLink("mailto:"+i),e.md.validateLink(r)?(t||(s=e.push("link_open","a",1),s.attrs=[["href",r]],s.markup="autolink",s.info="auto",s=e.push("text","",0),s.content=e.md.normalizeLinkText(i),s=e.push("link_close","a",-1),s.markup="autolink",s.info="auto"),e.pos+=i.length+2,!0):!1):!1},XQ=Ro.HTML_TAG_RE;function jQ(n){return/^<a[>\s]/i.test(n)}function $Q(n){return/^<\/a\s*>/i.test(n)}function YQ(n){var e=n|32;return e>=97&&e<=122}var KQ=function(e,t){var i,r,s,a,o=e.pos;return!e.md.options.html||(s=e.posMax,e.src.charCodeAt(o)!==60||o+2>=s)||(i=e.src.charCodeAt(o+1),i!==33&&i!==63&&i!==47&&!YQ(i))||(r=e.src.slice(o).match(XQ),!r)?!1:(t||(a=e.push("html_inline","",0),a.content=r[0],jQ(a.content)&&e.linkLevel++,$Q(a.content)&&e.linkLevel--),e.pos+=r[0].length,!0)},Mf=wd,ZQ=Ke.has,JQ=Ke.isValidEntityCode,Tf=Ke.fromCodePoint,QQ=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,eee=/^&([a-z][a-z0-9]{1,31});/i,tee=function(e,t){var i,r,s,a,o=e.pos,c=e.posMax;if(e.src.charCodeAt(o)!==38||o+1>=c)return!1;if(i=e.src.charCodeAt(o+1),i===35){if(s=e.src.slice(o).match(QQ),s)return t||(r=s[1][0].toLowerCase()==="x"?parseInt(s[1].slice(1),16):parseInt(s[1],10),a=e.push("text_special","",0),a.content=JQ(r)?Tf(r):Tf(65533),a.markup=s[0],a.info="entity"),e.pos+=s[0].length,!0}else if(s=e.src.slice(o).match(eee),s&&ZQ(Mf,s[1]))return t||(a=e.push("text_special","",0),a.content=Mf[s[1]],a.markup=s[0],a.info="entity"),e.pos+=s[0].length,!0;return!1};function Af(n){var e,t,i,r,s,a,o,c,l={},u=n.length;if(u){var f=0,h=-2,p=[];for(e=0;e<u;e++)if(i=n[e],p.push(0),(n[f].marker!==i.marker||h!==i.token-1)&&(f=e),h=i.token,i.length=i.length||0,!!i.close){for(l.hasOwnProperty(i.marker)||(l[i.marker]=[-1,-1,-1,-1,-1,-1]),s=l[i.marker][(i.open?3:0)+i.length%3],t=f-p[f]-1,a=t;t>s;t-=p[t]+1)if(r=n[t],r.marker===i.marker&&r.open&&r.end<0&&(o=!1,(r.close||i.open)&&(r.length+i.length)%3===0&&(r.length%3!==0||i.length%3!==0)&&(o=!0),!o)){c=t>0&&!n[t-1].open?p[t-1]+1:0,p[e]=e-t+c,p[t]=c,i.open=!1,r.end=e,r.close=!1,a=-1,h=-2;break}a!==-1&&(l[i.marker][(i.open?3:0)+(i.length||0)%3]=a)}}}var nee=function(e){var t,i=e.tokens_meta,r=e.tokens_meta.length;for(Af(e.delimiters),t=0;t<r;t++)i[t]&&i[t].delimiters&&Af(i[t].delimiters)},iee=function(e){var t,i,r=0,s=e.tokens,a=e.tokens.length;for(t=i=0;t<a;t++)s[t].nesting<0&&r--,s[t].level=r,s[t].nesting>0&&r++,s[t].type==="text"&&t+1<a&&s[t+1].type==="text"?s[t+1].content=s[t].content+s[t+1].content:(t!==i&&(s[i]=s[t]),i++);t!==i&&(s.length=i)},Oc=Ic,wf=Ke.isWhiteSpace,Cf=Ke.isPunctChar,Rf=Ke.isMdAsciiPunct;function as(n,e,t,i){this.src=n,this.env=t,this.md=e,this.tokens=i,this.tokens_meta=Array(i.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}as.prototype.pushPending=function(){var n=new Oc("text","",0);return n.content=this.pending,n.level=this.pendingLevel,this.tokens.push(n),this.pending="",n};as.prototype.push=function(n,e,t){this.pending&&this.pushPending();var i=new Oc(n,e,t),r=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),i.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(i),this.tokens_meta.push(r),i};as.prototype.scanDelims=function(n,e){var t=n,i,r,s,a,o,c,l,u,f,h=!0,p=!0,b=this.posMax,x=this.src.charCodeAt(n);for(i=n>0?this.src.charCodeAt(n-1):32;t<b&&this.src.charCodeAt(t)===x;)t++;return s=t-n,r=t<b?this.src.charCodeAt(t):32,l=Rf(i)||Cf(String.fromCharCode(i)),f=Rf(r)||Cf(String.fromCharCode(r)),c=wf(i),u=wf(r),u?h=!1:f&&(c||l||(h=!1)),c?p=!1:l&&(u||f||(p=!1)),e?(a=h,o=p):(a=h&&(!p||l),o=p&&(!h||f)),{can_open:a,can_close:o,length:s}};as.prototype.Token=Oc;var ree=as,Lf=Uc,ka=[["text",DQ],["linkify",UQ],["newline",FQ],["escape",OQ],["backticks",kQ],["strikethrough",Po.tokenize],["emphasis",Uo.tokenize],["link",zQ],["image",GQ],["autolink",WQ],["html_inline",KQ],["entity",tee]],Ba=[["balance_pairs",nee],["strikethrough",Po.postProcess],["emphasis",Uo.postProcess],["fragments_join",iee]];function cs(){var n;for(this.ruler=new Lf,n=0;n<ka.length;n++)this.ruler.push(ka[n][0],ka[n][1]);for(this.ruler2=new Lf,n=0;n<Ba.length;n++)this.ruler2.push(Ba[n][0],Ba[n][1])}cs.prototype.skipToken=function(n){var e,t,i=n.pos,r=this.ruler.getRules(""),s=r.length,a=n.md.options.maxNesting,o=n.cache;if(typeof o[i]<"u"){n.pos=o[i];return}if(n.level<a){for(t=0;t<s;t++)if(n.level++,e=r[t](n,!0),n.level--,e){if(i>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}else n.pos=n.posMax;e||n.pos++,o[i]=n.pos};cs.prototype.tokenize=function(n){for(var e,t,i,r=this.ruler.getRules(""),s=r.length,a=n.posMax,o=n.md.options.maxNesting;n.pos<a;){if(i=n.pos,n.level<o){for(t=0;t<s;t++)if(e=r[t](n,!1),e){if(i>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}if(e){if(n.pos>=a)break;continue}n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()};cs.prototype.parse=function(n,e,t,i){var r,s,a,o=new this.State(n,e,t,i);for(this.tokenize(o),s=this.ruler2.getRules(""),a=s.length,r=0;r<a;r++)s[r](o)};cs.prototype.State=ree;var see=cs,za,Df;function oee(){return Df||(Df=1,za=function(n){var e={};n=n||{},e.src_Any=Cd().source,e.src_Cc=Rd().source,e.src_Z=Ld().source,e.src_P=Pc.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var t="[><｜]";return e.src_pseudo_letter="(?:(?!"+t+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+t+"|"+e.src_ZPCc+")(?!"+(n["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(n["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}),za}function lc(n){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(t){t&&Object.keys(t).forEach(function(i){n[i]=t[i]})}),n}function Io(n){return Object.prototype.toString.call(n)}function aee(n){return Io(n)==="[object String]"}function cee(n){return Io(n)==="[object Object]"}function lee(n){return Io(n)==="[object RegExp]"}function Pf(n){return Io(n)==="[object Function]"}function uee(n){return n.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var Od={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function fee(n){return Object.keys(n||{}).reduce(function(e,t){return e||Od.hasOwnProperty(t)},!1)}var hee={"http:":{validate:function(n,e,t){var i=n.slice(e);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(i)?i.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(n,e,t){var i=n.slice(e);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(i)?e>=3&&n[e-3]===":"||e>=3&&n[e-3]==="/"?0:i.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(n,e,t){var i=n.slice(e);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(i)?i.match(t.re.mailto)[0].length:0}}},dee="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",pee="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function mee(n){n.__index__=-1,n.__text_cache__=""}function gee(n){return function(e,t){var i=e.slice(t);return n.test(i)?i.match(n)[0].length:0}}function Uf(){return function(n,e){e.normalize(n)}}function oo(n){var e=n.re=oee()(n.__opts__),t=n.__tlds__.slice();n.onCompile(),n.__tlds_replaced__||t.push(dee),t.push(e.src_xn),e.src_tlds=t.join("|");function i(o){return o.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(i(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(i(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(i(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(i(e.tpl_host_fuzzy_test),"i");var r=[];n.__compiled__={};function s(o,c){throw new Error('(LinkifyIt) Invalid schema "'+o+'": '+c)}Object.keys(n.__schemas__).forEach(function(o){var c=n.__schemas__[o];if(c!==null){var l={validate:null,link:null};if(n.__compiled__[o]=l,cee(c)){lee(c.validate)?l.validate=gee(c.validate):Pf(c.validate)?l.validate=c.validate:s(o,c),Pf(c.normalize)?l.normalize=c.normalize:c.normalize?s(o,c):l.normalize=Uf();return}if(aee(c)){r.push(o);return}s(o,c)}}),r.forEach(function(o){n.__compiled__[n.__schemas__[o]]&&(n.__compiled__[o].validate=n.__compiled__[n.__schemas__[o]].validate,n.__compiled__[o].normalize=n.__compiled__[n.__schemas__[o]].normalize)}),n.__compiled__[""]={validate:null,normalize:Uf()};var a=Object.keys(n.__compiled__).filter(function(o){return o.length>0&&n.__compiled__[o]}).map(uee).join("|");n.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+a+")","i"),n.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+a+")","ig"),n.re.schema_at_start=RegExp("^"+n.re.schema_search.source,"i"),n.re.pretest=RegExp("("+n.re.schema_test.source+")|("+n.re.host_fuzzy_test.source+")|@","i"),mee(n)}function _ee(n,e){var t=n.__index__,i=n.__last_index__,r=n.__text_cache__.slice(t,i);this.schema=n.__schema__.toLowerCase(),this.index=t+e,this.lastIndex=i+e,this.raw=r,this.text=r,this.url=r}function uc(n,e){var t=new _ee(n,e);return n.__compiled__[t.schema].normalize(t,n),t}function jt(n,e){if(!(this instanceof jt))return new jt(n,e);e||fee(n)&&(e=n,n={}),this.__opts__=lc({},Od,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=lc({},hee,n),this.__compiled__={},this.__tlds__=pee,this.__tlds_replaced__=!1,this.re={},oo(this)}jt.prototype.add=function(e,t){return this.__schemas__[e]=t,oo(this),this};jt.prototype.set=function(e){return this.__opts__=lc(this.__opts__,e),this};jt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var t,i,r,s,a,o,c,l,u;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(t=c.exec(e))!==null;)if(s=this.testSchemaAt(e,t[2],c.lastIndex),s){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+s;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=e.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(i=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=i.index+i[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__="",this.__index__=a,this.__last_index__=i.index+i[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=e.indexOf("@"),u>=0&&(r=e.match(this.re.email_fuzzy))!==null&&(a=r.index+r[1].length,o=r.index+r[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&o>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=a,this.__last_index__=o))),this.__index__>=0};jt.prototype.pretest=function(e){return this.re.pretest.test(e)};jt.prototype.testSchemaAt=function(e,t,i){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,i,this):0};jt.prototype.match=function(e){var t=0,i=[];this.__index__>=0&&this.__text_cache__===e&&(i.push(uc(this,t)),t=this.__last_index__);for(var r=t?e.slice(t):e;this.test(r);)i.push(uc(this,t)),r=r.slice(this.__last_index__),t+=this.__last_index__;return i.length?i:null};jt.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;var t=this.re.schema_at_start.exec(e);if(!t)return null;var i=this.testSchemaAt(e,t[2],t[0].length);return i?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i,uc(this,0)):null};jt.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(i,r,s){return i!==s[r-1]}).reverse(),oo(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,oo(this),this)};jt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};jt.prototype.onCompile=function(){};var vee=jt;const xee={},bee=Object.freeze(Object.defineProperty({__proto__:null,default:xee},Symbol.toStringTag,{value:"Module"})),See=kS(bee);var Eee={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},yee={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Mee={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Vr=Ke,Tee=Co,Aee=AJ,wee=KJ,Cee=RQ,Ree=see,Lee=vee,Ai=br,kd=See,Dee={default:Eee,zero:yee,commonmark:Mee},Pee=/^(vbscript|javascript|file|data):/,Uee=/^data:image\/(gif|png|jpeg|webp);/;function Iee(n){var e=n.trim().toLowerCase();return Pee.test(e)?!!Uee.test(e):!0}var Bd=["http:","https:","mailto:"];function Fee(n){var e=Ai.parse(n,!0);if(e.hostname&&(!e.protocol||Bd.indexOf(e.protocol)>=0))try{e.hostname=kd.toASCII(e.hostname)}catch{}return Ai.encode(Ai.format(e))}function Nee(n){var e=Ai.parse(n,!0);if(e.hostname&&(!e.protocol||Bd.indexOf(e.protocol)>=0))try{e.hostname=kd.toUnicode(e.hostname)}catch{}return Ai.decode(Ai.format(e),Ai.decode.defaultChars+"%")}function tn(n,e){if(!(this instanceof tn))return new tn(n,e);e||Vr.isString(n)||(e=n||{},n="default"),this.inline=new Ree,this.block=new Cee,this.core=new wee,this.renderer=new Aee,this.linkify=new Lee,this.validateLink=Iee,this.normalizeLink=Fee,this.normalizeLinkText=Nee,this.utils=Vr,this.helpers=Vr.assign({},Tee),this.options={},this.configure(n),e&&this.set(e)}tn.prototype.set=function(n){return Vr.assign(this.options,n),this};tn.prototype.configure=function(n){var e=this,t;if(Vr.isString(n)&&(t=n,n=Dee[t],!n))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(!n)throw new Error("Wrong `markdown-it` preset, can't be empty");return n.options&&e.set(n.options),n.components&&Object.keys(n.components).forEach(function(i){n.components[i].rules&&e[i].ruler.enableOnly(n.components[i].rules),n.components[i].rules2&&e[i].ruler2.enableOnly(n.components[i].rules2)}),this};tn.prototype.enable=function(n,e){var t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(n,!0))},this),t=t.concat(this.inline.ruler2.enable(n,!0));var i=n.filter(function(r){return t.indexOf(r)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+i);return this};tn.prototype.disable=function(n,e){var t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(n,!0))},this),t=t.concat(this.inline.ruler2.disable(n,!0));var i=n.filter(function(r){return t.indexOf(r)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+i);return this};tn.prototype.use=function(n){var e=[this].concat(Array.prototype.slice.call(arguments,1));return n.apply(n,e),this};tn.prototype.parse=function(n,e){if(typeof n!="string")throw new Error("Input data should be a String");var t=new this.core.State(n,this,e);return this.core.process(t),t.tokens};tn.prototype.render=function(n,e){return e=e||{},this.renderer.render(this.parse(n,e),this.options,e)};tn.prototype.parseInline=function(n,e){var t=new this.core.State(n,this,e);return t.inlineMode=!0,this.core.process(t),t.tokens};tn.prototype.renderInline=function(n,e){return e=e||{},this.renderer.render(this.parseInline(n,e),this.options,e)};var Oee=tn,kee=Oee;const Bee=Ad(kee),zee=new Bee,Hee={name:"KnowledgeBase",data(){return{posts:[],active:null}},async created(){const n=Object.assign({"../content/Chapter 1 — The Photon (Electromagnetism).md":()=>Jn(()=>import("./Chapter 1 — The Photon (Electromagnetism)-C5tj4ozs.js"),[]).then(t=>t.default),"../content/Gallery.md":()=>Jn(()=>import("./Gallery-B-Pw5WJ0.js"),[]).then(t=>t.default),"../content/HRC Solution Architecture v0.1 — The Observer–Caretaker Protocol.md":()=>Jn(()=>import("./HRC Solution Architecture v0.1 — The Observer–Caretaker Protocol-D61WD0Dr.js"),[]).then(t=>t.default),"../content/README.md":()=>Jn(()=>import("./README-PM7JFUPB.js"),[]).then(t=>t.default),"../content/Recursive State Dynamics Integration  Navigation, RF Energy, and Autonomous Discovery.md":()=>Jn(()=>import("./Recursive State Dynamics Integration  Navigation_ RF Energy_ and Autonomous Discovery-DQIzphHR.js"),[]).then(t=>t.default),"../content/The Bridge — Business Plan v0.md":()=>Jn(()=>import("./The Bridge — Business Plan v0-Dp3RB1Kh.js"),[]).then(t=>t.default),"../content/blackcat.md":()=>Jn(()=>import("./blackcat-tyrm_zll.js"),[]).then(t=>t.default),"../content/gravitational-compass — Charter (DRAFT).md":()=>Jn(()=>import("./gravitational-compass — Charter (DRAFT)-D_5eaWnb.js"),[]).then(t=>t.default)}),e=await Promise.all(Object.entries(n).map(async([t,i])=>{const r=await i(),s=r.split(`
`)[0].replace(/^#\s+/,"")||t;return{path:t,raw:r,title:s,html:zee.render(r)}}));this.posts=e},methods:{open(n){this.active=n}}},Gee={key:0},Vee=["onClick"],qee={key:1},Wee=["innerHTML"];function Xee(n,e,t,i,r,s){return at(),ut("div",null,[e[0]||(e[0]=K("h2",null,"Knowledge Base",-1)),r.posts.length===0?(at(),ut("div",Gee,"No markdown content found in /src/content")):ri("",!0),K("ul",null,[(at(!0),ut(Kt,null,yc(r.posts,a=>(at(),ut("li",{key:a.path},[K("a",{href:"",onClick:Hr(o=>s.open(a),["prevent"])},Ye(a.title),9,Vee)]))),128))]),r.active?(at(),ut("article",qee,[K("h3",null,Ye(r.active.title),1),K("div",{innerHTML:r.active.html},null,8,Wee)])):ri("",!0)])}const jee=xr(Hee,[["render",Xee]]);var zd={exports:{}};/* @license
Papa Parse
v5.5.4
https://github.com/mholt/PapaParse
License: MIT
*/(function(n,e){((t,i)=>{n.exports=i()})(OS,function t(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},r,s=!i.document&&!!i.postMessage,a=i.IS_PAPA_WORKER||!1,o={},c=0,l={};function u(g){return g.charCodeAt(0)===65279?g.slice(1):g}function f(g){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(_){var D=R(_);D.chunkSize=parseInt(D.chunkSize),_.step||_.chunk||(D.chunkSize=null),this._handle=new m(D),(this._handle.streamer=this)._config=D}).call(this,g),this.parseChunk=function(_,D){var G=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<G){let A=this._config.newline;A||(q=this._config.quoteChar||'"',A=this._handle.guessLineEndings(_,q)),_=[..._.split(A).slice(G)].join(A)}this.isFirstChunk&&O(this._config.beforeFirstChunk)&&(q=this._config.beforeFirstChunk(_))!==void 0&&(_=q),this.isFirstChunk=!1,this._halted=!1;var G=this._partialLine+_,q=(this._partialLine="",this._handle.parse(G,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(_=q.meta.cursor,G=(this._finished||(this._partialLine=G.substring(_-this._baseIndex),this._baseIndex=_),q&&q.data&&(this._rowCount+=q.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)i.postMessage({results:q,workerId:l.WORKER_ID,finished:G});else if(O(this._config.chunk)&&!D){if(this._config.chunk(q,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=q=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(q.data),this._completeResults.errors=this._completeResults.errors.concat(q.errors),this._completeResults.meta=q.meta),this._completed||!G||!O(this._config.complete)||q&&q.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),G||q&&q.meta.paused||this._nextChunk(),q}this._halted=!0},this._sendError=function(_){O(this._config.error)?this._config.error(_):a&&this._config.error&&i.postMessage({workerId:l.WORKER_ID,error:_,finished:!1})}}function h(g){var _;(g=g||{}).chunkSize||(g.chunkSize=l.RemoteChunkSize),f.call(this,g),this._nextChunk=s?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(D){this._input=D,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(_=new XMLHttpRequest,this._config.withCredentials&&(_.withCredentials=this._config.withCredentials),s||(_.onload=L(this._chunkLoaded,this),_.onerror=L(this._chunkError,this)),_.open(this._config.downloadRequestBody?"POST":"GET",this._input,!s),this._config.downloadRequestHeaders){var D,G=this._config.downloadRequestHeaders;for(D in G)_.setRequestHeader(D,G[D])}var q;this._config.chunkSize&&(q=this._start+this._config.chunkSize-1,_.setRequestHeader("Range","bytes="+this._start+"-"+q));try{_.send(this._config.downloadRequestBody)}catch(A){this._chunkError(A.message)}s&&_.status===0&&this._chunkError()}},this._chunkLoaded=function(){_.readyState===4&&(_.status<200||400<=_.status?this._chunkError():(this._start+=this._config.chunkSize||_.responseText.length,this._finished=!this._config.chunkSize||this._start>=(D=>(D=D.getResponseHeader("Content-Range"))!==null?parseInt(D.substring(D.lastIndexOf("/")+1)):-1)(_),this.parseChunk(_.responseText)))},this._chunkError=function(D){D=_.statusText||D,this._sendError(new Error(D))}}function p(g){(g=g||{}).chunkSize||(g.chunkSize=l.LocalChunkSize),f.call(this,g);var _,D,G=typeof FileReader<"u";this.stream=function(q){this._input=q,D=q.slice||q.webkitSlice||q.mozSlice,G?((_=new FileReader).onload=L(this._chunkLoaded,this),_.onerror=L(this._chunkError,this)):_=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var q=this._input,A=(this._config.chunkSize&&(A=Math.min(this._start+this._config.chunkSize,this._input.size),q=D.call(q,this._start,A)),_.readAsText(q,this._config.encoding));G||this._chunkLoaded({target:{result:A}})},this._chunkLoaded=function(q){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(q.target.result)},this._chunkError=function(){this._sendError(_.error)}}function b(g){var _;f.call(this,g=g||{}),this.stream=function(D){return _=D,this._nextChunk()},this._nextChunk=function(){var D,G;if(!this._finished)return D=this._config.chunkSize,_=D?(G=_.substring(0,D),_.substring(D)):(G=_,""),this._finished=!_,this.parseChunk(G)}}function x(g){f.call(this,g=g||{});var _=[],D=!0,G=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(q){this._input=q,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){G&&_.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),_.length?this.parseChunk(_.shift()):D=!0},this._streamData=L(function(q){try{_.push(typeof q=="string"?q:q.toString(this._config.encoding)),D&&(D=!1,this._checkIsFinished(),this.parseChunk(_.shift()))}catch(A){this._streamError(A)}},this),this._streamError=L(function(q){this._streamCleanUp(),this._sendError(q)},this),this._streamEnd=L(function(){this._streamCleanUp(),G=!0,this._streamData("")},this),this._streamCleanUp=L(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function m(g){var _,D,G,q,A=Math.pow(2,53),B=-A,N=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,X=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Y=this,ie=0,j=0,k=!1,z=!1,ue=[],le={data:[],errors:[],meta:{}};function ve(Me){return g.skipEmptyLines==="greedy"?Me.join("").trim()==="":Me.length===1&&Me[0].length===0}function xe(){if(le&&G&&(Ae("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),G=!1),g.skipEmptyLines&&(le.data=le.data.filter(function(P){return!ve(P)})),ye()){let P=function(F,W){F=u(F),O(g.transformHeader)&&(F=g.transformHeader(F,W)),ue.push(F)};var v=P;if(le)if(Array.isArray(le.data[0])){for(var Me=0;ye()&&Me<le.data.length;Me++)le.data[Me].forEach(P);le.data.splice(0,1)}else le.data.forEach(P)}function Le(P,F){for(var W=g.header?{}:[],H=0;H<P.length;H++){var V=H,oe=P[H],oe=((Z,ne)=>(ee=>(g.dynamicTypingFunction&&g.dynamicTyping[ee]===void 0&&(g.dynamicTyping[ee]=g.dynamicTypingFunction(ee)),(g.dynamicTyping[ee]||g.dynamicTyping)===!0))(Z)?ne==="true"||ne==="TRUE"||ne!=="false"&&ne!=="FALSE"&&((ee=>{if(N.test(ee)&&(ee=parseFloat(ee),B<ee&&ee<A))return 1})(ne)?parseFloat(ne):X.test(ne)?new Date(ne):ne===""?null:ne):ne)(V=g.header?H>=ue.length?"__parsed_extra":ue[H]:V,oe=g.transform?g.transform(oe,V):oe);V==="__parsed_extra"?(W[V]=W[V]||[],W[V].push(oe)):W[V]=oe}return g.header&&(H>ue.length?Ae("FieldMismatch","TooManyFields","Too many fields: expected "+ue.length+" fields but parsed "+H,j+F):H<ue.length&&Ae("FieldMismatch","TooFewFields","Too few fields: expected "+ue.length+" fields but parsed "+H,j+F)),W}var Re;le&&(g.header||g.dynamicTyping||g.transform)&&(Re=1,!le.data.length||Array.isArray(le.data[0])?(le.data=le.data.map(Le),Re=le.data.length):le.data=Le(le.data,0),g.header&&le.meta&&(le.meta.fields=ue),j+=Re)}function ye(){return g.header&&ue.length===0}function Ae(Me,Le,Re,v){Me={type:Me,code:Le,message:Re},v!==void 0&&(Me.row=v),le.errors.push(Me)}O(g.step)&&(q=g.step,g.step=function(Me){le=Me,ye()?xe():(xe(),le.data.length!==0&&(ie+=Me.data.length,g.preview&&ie>g.preview?D.abort():(le.data=le.data[0],q(le,Y))))}),this.parse=function(Me,Le,Re){var v=g.quoteChar||'"',v=(g.newline||(g.newline=this.guessLineEndings(Me,v)),G=!1,g.delimiter?O(g.delimiter)&&(g.delimiter=g.delimiter(Me),le.meta.delimiter=g.delimiter):((v=((P,F,W,H,V)=>{var oe,Z,ne,ee;V=V||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var Se=0;Se<V.length;Se++){for(var y,S=V[Se],I=0,re=0,te=0,se=(ne=void 0,new M({comments:H,delimiter:S,newline:F,preview:10}).parse(P)),pe=0;pe<se.data.length;pe++)W&&ve(se.data[pe])?te++:(y=se.data[pe].length,re+=y,ne===void 0?ne=y:0<y&&(I+=Math.abs(y-ne),ne=y));0<se.data.length&&(re/=se.data.length-te),(Z===void 0||I<=Z)&&(ee===void 0||ee<re)&&1.99<re&&(Z=I,oe=S,ee=re)}return{successful:!!(g.delimiter=oe),bestDelimiter:oe}})(Me,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess)).successful?g.delimiter=v.bestDelimiter:(G=!0,g.delimiter=l.DefaultDelimiter),le.meta.delimiter=g.delimiter),R(g));return g.preview&&g.header&&v.preview++,_=Me,D=new M(v),le=D.parse(_,Le,Re),xe(),k?{meta:{paused:!0}}:le||{meta:{paused:!1}}},this.paused=function(){return k},this.pause=function(){k=!0,D.abort(),_=O(g.chunk)?"":_.substring(D.getCharIndex())},this.resume=function(){Y.streamer._halted?(k=!1,Y.streamer.parseChunk(_,!0)):setTimeout(Y.resume,3)},this.aborted=function(){return z},this.abort=function(){z=!0,D.abort(),le.meta.aborted=!0,O(g.complete)&&g.complete(le),_=""},this.guessLineEndings=function(P,v){P=P.substring(0,1048576);var v=new RegExp(d(v)+"([^]*?)"+d(v),"gm"),Re=(P=P.replace(v,"")).split("\r"),v=P.split(`
`),P=1<v.length&&v[0].length<Re[0].length;if(Re.length===1||P)return`
`;for(var F=0,W=0;W<Re.length;W++)Re[W][0]===`
`&&F++;return F>=Re.length/2?`\r
`:"\r"}}function d(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function M(g){var _=(g=g||{}).delimiter,D=g.newline,G=g.comments,q=g.step,A=g.preview,B=g.fastMode,N=null,X=!1,Y=g.quoteChar==null?'"':g.quoteChar,ie=Y;if(g.escapeChar!==void 0&&(ie=g.escapeChar),(typeof _!="string"||-1<l.BAD_DELIMITERS.indexOf(_))&&(_=","),G===_)throw new Error("Comment character same as delimiter");G===!0?G="#":(typeof G!="string"||-1<l.BAD_DELIMITERS.indexOf(G))&&(G=!1),D!==`
`&&D!=="\r"&&D!==`\r
`&&(D=`
`);var j=0,k=!1;this.parse=function(z,ue,le){if(typeof z!="string")throw new Error("Input must be a string");var ve=z.length,xe=_.length,ye=D.length,Ae=G.length,Me=O(q),Le=[],Re=[],v=[],P=j=0;if(!z)return I();if(B||B!==!1&&z.indexOf(Y)===-1){for(var F=z.split(D),W=0;W<F.length;W++){if(v=F[W],j+=v.length,W!==F.length-1)j+=D.length;else if(le)return I();if(!G||v.substring(0,Ae)!==G){if(Me){if(Le=[],ee(v.split(_)),re(),k)return I()}else ee(v.split(_));if(A&&A<=W)return Le=Le.slice(0,A),I(!0)}}return I()}for(var H=z.indexOf(_,j),V=z.indexOf(D,j),oe=new RegExp(d(ie)+d(Y),"g"),Z=z.indexOf(Y,j);;)if(z[j]===Y)for(Z=j,j++;;){if((Z=z.indexOf(Y,Z+1))===-1)return le||Re.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:Le.length,index:j}),y();if(Z===ve-1)return y(z.substring(j,Z).replace(oe,Y));if(Y===ie&&z[Z+1]===ie)Z++;else if(Y===ie||Z===0||z[Z-1]!==ie){H!==-1&&H<Z+1&&(H=z.indexOf(_,Z+1));var ne=Se((V=V!==-1&&V<Z+1?z.indexOf(D,Z+1):V)===-1?H:Math.min(H,V));if(z.substr(Z+1+ne,xe)===_){v.push(z.substring(j,Z).replace(oe,Y)),z[j=Z+1+ne+xe]!==Y&&(Z=z.indexOf(Y,j)),H=z.indexOf(_,j),V=z.indexOf(D,j);break}if(ne=Se(V),z.substring(Z+1+ne,Z+1+ne+ye)===D){if(v.push(z.substring(j,Z).replace(oe,Y)),S(Z+1+ne+ye),H=z.indexOf(_,j),Z=z.indexOf(Y,j),Me&&(re(),k))return I();if(A&&Le.length>=A)return I(!0);break}Re.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:Le.length,index:j}),Z++}}else if(G&&v.length===0&&z.substring(j,j+Ae)===G){if(V===-1)return I();j=V+ye,V=z.indexOf(D,j),H=z.indexOf(_,j)}else if(H!==-1&&(H<V||V===-1))v.push(z.substring(j,H)),j=H+xe,H=z.indexOf(_,j);else{if(V===-1)break;if(v.push(z.substring(j,V)),S(V+ye),Me&&(re(),k))return I();if(A&&Le.length>=A)return I(!0)}return y();function ee(te){Le.push(te),P=j}function Se(te){var se=0;return se=te!==-1&&(te=z.substring(Z+1,te))&&te.trim()===""?te.length:se}function y(te){return le||(te===void 0&&(te=z.substring(j)),v.push(te),j=ve,ee(v),Me&&re()),I()}function S(te){j=te,ee(v),v=[],V=z.indexOf(D,j)}function I(te){if(g.header&&!ue&&Le.length&&!X){var se=Le[0],pe=Object.create(null),fe=new Set(se);let ge=!1;for(let we=0;we<se.length;we++){let Fe=u(se[we]);if(pe[Fe=O(g.transformHeader)?g.transformHeader(Fe,we):Fe]){let de,Be=pe[Fe];for(;de=Fe+"_"+Be,Be++,fe.has(de););fe.add(de),se[we]=de,pe[Fe]++,ge=!0,(N=N===null?{}:N)[de]=Fe}else pe[Fe]=1,se[we]=Fe;fe.add(Fe)}ge&&console.warn("Duplicate headers found and renamed."),X=!0}return{data:Le,errors:Re,meta:{delimiter:_,linebreak:D,aborted:k,truncated:!!te,cursor:P+(ue||0),renamedHeaders:N}}}function re(){q(I()),Le=[],Re=[]}},this.abort=function(){k=!0},this.getCharIndex=function(){return j}}function E(g){var _=g.data,D=o[_.workerId],G=!1;if(_.error)D.userError(_.error,_.file);else if(_.results&&_.results.data){var q={abort:function(){G=!0,T(_.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:C,resume:C};if(O(D.userStep)){for(var A=0;A<_.results.data.length&&(D.userStep({data:_.results.data[A],errors:_.results.errors,meta:_.results.meta},q),!G);A++);delete _.results}else O(D.userChunk)&&(D.userChunk(_.results,q,_.file),delete _.results)}_.finished&&!G&&T(_.workerId,_.results)}function T(g,_){var D=o[g];O(D.userComplete)&&D.userComplete(_),D.terminate(),delete o[g]}function C(){throw new Error("Not implemented.")}function R(g){if(typeof g!="object"||g===null)return g;var _,D=Array.isArray(g)?[]:{};for(_ in g)D[_]=R(g[_]);return D}function L(g,_){return function(){g.apply(_,arguments)}}function O(g){return typeof g=="function"}return l.parse=function(g,_){var D=(_=_||{}).dynamicTyping||!1;if(O(D)&&(_.dynamicTypingFunction=D,D={}),_.dynamicTyping=D,_.transform=!!O(_.transform)&&_.transform,!_.worker||!l.WORKERS_SUPPORTED)return D=null,l.NODE_STREAM_INPUT,typeof g=="string"?(g=u(g),D=new(_.download?h:b)(_)):g.readable===!0&&O(g.read)&&O(g.on)?D=new x(_):(i.File&&g instanceof File||g instanceof Object)&&(D=new p(_)),D.stream(g);(D=(()=>{var G;return!!l.WORKERS_SUPPORTED&&(G=(()=>{var q=i.URL||i.webkitURL||null,A=t.toString();return l.BLOB_URL||(l.BLOB_URL=q.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",A,")();"],{type:"text/javascript"})))})(),(G=new i.Worker(G)).onmessage=E,G.id=c++,o[G.id]=G)})()).userStep=_.step,D.userChunk=_.chunk,D.userComplete=_.complete,D.userError=_.error,_.step=O(_.step),_.chunk=O(_.chunk),_.complete=O(_.complete),_.error=O(_.error),delete _.worker,D.postMessage({input:g,config:_,workerId:D.id})},l.unparse=function(g,_){var D=!1,G=!0,q=",",A=`\r
`,B='"',N=B+B,X=!1,Y=null,ie=!1,j=((()=>{if(typeof _=="object"){if(typeof _.delimiter!="string"||l.BAD_DELIMITERS.filter(function(ue){return _.delimiter.indexOf(ue)!==-1}).length||(q=_.delimiter),typeof _.quotes!="boolean"&&typeof _.quotes!="function"&&!Array.isArray(_.quotes)||(D=_.quotes),typeof _.skipEmptyLines!="boolean"&&typeof _.skipEmptyLines!="string"||(X=_.skipEmptyLines),typeof _.newline=="string"&&(A=_.newline),typeof _.quoteChar=="string"&&(B=_.quoteChar,N=B+B),typeof _.header=="boolean"&&(G=_.header),Array.isArray(_.columns)){if(_.columns.length===0)throw new Error("Option columns is empty");Y=_.columns}_.escapeChar!==void 0&&(N=_.escapeChar+B),_.escapeFormulae instanceof RegExp?ie=_.escapeFormulae:typeof _.escapeFormulae=="boolean"&&_.escapeFormulae&&(ie=/^[=+\-@\t\r].*$/)}})(),new RegExp(d(B),"g"));if(typeof g=="string"&&(g=JSON.parse(g)),Array.isArray(g)){if(!g.length||Array.isArray(g[0]))return k(null,g,X);if(typeof g[0]=="object")return k(Y||Object.keys(g[0]),g,X)}else if(typeof g=="object")return typeof g.data=="string"&&(g.data=JSON.parse(g.data)),Array.isArray(g.data)&&(g.fields||(g.fields=g.meta&&g.meta.fields||Y),g.fields||(g.fields=Array.isArray(g.data[0])?g.fields:typeof g.data[0]=="object"?Object.keys(g.data[0]):[]),Array.isArray(g.data[0])||typeof g.data[0]=="object"||(g.data=[g.data])),k(g.fields||[],g.data||[],X);throw new Error("Unable to serialize unrecognized input");function k(ue,le,ve){var xe="",ye=(typeof ue=="string"&&(ue=JSON.parse(ue)),typeof le=="string"&&(le=JSON.parse(le)),Array.isArray(ue)&&0<ue.length),Ae=!Array.isArray(le[0]);if(ye&&G){for(var Me=0;Me<ue.length;Me++)0<Me&&(xe+=q),xe+=z(ue[Me],Me);0<le.length&&(xe+=A)}for(var Le=0;Le<le.length;Le++){var Re=(ye?ue:le[Le]).length,v=!1,P=ye?Object.keys(le[Le]).length===0:le[Le].length===0;if(ve&&!ye&&(v=ve==="greedy"?le[Le].join("").trim()==="":le[Le].length===1&&le[Le][0].length===0),ve==="greedy"&&ye){for(var F=[],W=0;W<Re;W++){var H=Ae?ue[W]:W;F.push(le[Le][H])}v=F.join("").trim()===""}if(!v){for(var V=0;V<Re;V++){0<V&&!P&&(xe+=q);var oe=ye&&Ae?ue[V]:V;xe+=z(le[Le][oe],V)}Le<le.length-1&&(!ve||0<Re&&!P)&&(xe+=A)}}return xe}function z(ue,le){var ve,xe,ye;return ue==null?"":ue.constructor===Date?JSON.stringify(ue).slice(1,25):(ye=!1,ie&&typeof ue=="string"&&ie.test(ue)&&(ue="'"+ue,ye=!0),xe=(ve=ue.toString()).replace(j,N),(ye=ye||D===!0||typeof D=="function"&&D(ue,le)||Array.isArray(D)&&D[le]||((Ae,Me)=>{for(var Le=0;Le<Me.length;Le++)if(-1<Ae.indexOf(Me[Le]))return!0;return!1})(xe,l.BAD_DELIMITERS)||-1<xe.indexOf(q)||-1<ve.indexOf(B)||xe.charAt(0)===" "||xe.charAt(xe.length-1)===" ")?B+xe+B:xe)}},l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!s&&!!i.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=M,l.ParserHandle=m,l.NetworkStreamer=h,l.FileStreamer=p,l.StringStreamer=b,l.ReadableStreamStreamer=x,i.jQuery&&((r=i.jQuery).fn.parse=function(g){var _=g.config||{},D=[];return this.each(function(A){if(!(r(this).prop("tagName").toUpperCase()==="INPUT"&&r(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var B=0;B<this.files.length;B++)D.push({file:this.files[B],inputElem:this,instanceConfig:r.extend({},_)})}),G(),this;function G(){if(D.length===0)O(g.complete)&&g.complete();else{var A,B,N,X,Y=D[0];if(O(g.before)){var ie=g.before(Y.file,Y.inputElem);if(typeof ie=="object"){if(ie.action==="abort")return A="AbortError",B=Y.file,N=Y.inputElem,X=ie.reason,void(O(g.error)&&g.error({name:A},B,N,X));if(ie.action==="skip")return void q();typeof ie.config=="object"&&(Y.instanceConfig=r.extend(Y.instanceConfig,ie.config))}else if(ie==="skip")return void q()}var j=Y.instanceConfig.complete;Y.instanceConfig.complete=function(k){O(j)&&j(k,Y.file,Y.inputElem),q()},l.parse(Y.file,Y.instanceConfig)}}function q(){D.splice(0,1),G()}}),a&&(i.onmessage=function(g){g=g.data,l.WORKER_ID===void 0&&g&&(l.WORKER_ID=g.workerId),typeof g.input=="string"?i.postMessage({workerId:l.WORKER_ID,results:l.parse(g.input,g.config),finished:!0}):(i.File&&g.input instanceof File||g.input instanceof Object)&&(g=l.parse(g.input,g.config))&&i.postMessage({workerId:l.WORKER_ID,results:g,finished:!0})}),(h.prototype=Object.create(f.prototype)).constructor=h,(p.prototype=Object.create(f.prototype)).constructor=p,(b.prototype=Object.create(b.prototype)).constructor=b,(x.prototype=Object.create(f.prototype)).constructor=x,l})})(zd);var $ee=zd.exports;const Ha=Ad($ee),Ga="https://raw.githubusercontent.com/giomj/global_embodied_carbon_model/main",Un={async fetchEuropeExposure(){try{const n=`${Ga}/Europe/Replacement_Embodied_Carbon/Europe_exposure_summary.csv`,t=await(await fetch(n)).text();return Ha.parse(t,{header:!0,dynamicTyping:!0}).data.filter(r=>r.COUNTRY)}catch(n){return console.error("Error fetching Europe exposure data:",n),[]}},async fetchEcFactorsA1A3(){try{const n=`${Ga}/Europe/Replacement_Embodied_Carbon/embodied_carbon_factors/Europe_A1-A3_EC_factors.csv`,t=await(await fetch(n)).text();return Ha.parse(t,{header:!0}).data.filter(r=>r.ITEM)}catch(n){return console.error("Error fetching EC factors:",n),[]}},async fetchSeismicRisk(){try{const n=`${Ga}/Europe/Seismic_Embodied_Carbon/Europe_risk_summary.csv`,t=await(await fetch(n)).text();return Ha.parse(t,{header:!0,dynamicTyping:!0}).data.filter(r=>r.COUNTRY)}catch(n){return console.error("Error fetching seismic risk data:",n),[]}}},If={async getTopCountriesByCarbon(n=10){return(await Un.fetchEuropeExposure()).sort((t,i)=>parseFloat(i.TOTAL_REPL_EC_TON||0)-parseFloat(t.TOTAL_REPL_EC_TON||0)).slice(0,n)},async getAverageECPerBuilding(){return(await Un.fetchEuropeExposure()).map(e=>({country:e.COUNTRY,totalBuildings:e.BUILDINGS,totalEC:parseFloat(e.TOTAL_REPL_EC_TON||0),averagePerBuilding:parseFloat(e.TOTAL_REPL_EC_TON||0)/(e.BUILDINGS||1)}))},async getStructuralBreakdown(){return(await Un.fetchEuropeExposure()).map(e=>({country:e.COUNTRY,structural:parseFloat(e.EC_STRUCTURAL_TON||0),nonStructural:parseFloat(e.EC_NONSTRUCTURAL_TON||0),total:parseFloat(e.TOTAL_REPL_EC_TON||0),structuralPercent:(parseFloat(e.EC_STRUCTURAL_TON||0)/parseFloat(e.TOTAL_REPL_EC_TON||1)*100).toFixed(1)}))},async getEuropeStats(){const n=await Un.fetchEuropeExposure(),e=await Un.fetchSeismicRisk(),t=n.reduce((s,a)=>s+(a.BUILDINGS||0),0),i=n.reduce((s,a)=>s+parseFloat(a.TOTAL_REPL_EC_TON||0),0),r=e.reduce((s,a)=>s+parseFloat(a.AAEC_TOTAL_TON||0),0);return{countries:n.length,totalBuildings:t,totalReplacementEC:i.toFixed(0),totalAnnualAAEC:r.toFixed(0),averageECPerBuilding:(i/t).toFixed(2),riskLevel:r>1e5?"High":r>5e4?"Medium":"Low"}},async getCountryDetails(n){const e=await Un.fetchEuropeExposure(),t=await Un.fetchSeismicRisk(),i=e.find(s=>{var a;return((a=s.COUNTRY)==null?void 0:a.toUpperCase())===n.toUpperCase()}),r=t.find(s=>{var a;return((a=s.COUNTRY)==null?void 0:a.toUpperCase())===n.toUpperCase()});return i?{country:i.COUNTRY,buildings:i.BUILDINGS,totalArea:i.TOTAL_AREA_SQM,replacementCost:i.TOTAL_REPL_COST_USD,replacementEC:parseFloat(i.TOTAL_REPL_EC_TON||0),structuralEC:parseFloat(i.EC_STRUCTURAL_TON||0),nonStructuralEC:parseFloat(i.EC_NONSTRUCTURAL_TON||0),annualAAEC:r?parseFloat(r.AAEC_TOTAL_TON||0):0,averagePerBuilding:(parseFloat(i.TOTAL_REPL_EC_TON||0)/(i.BUILDINGS||1)).toFixed(2),areaPerBuilding:(i.TOTAL_AREA_SQM/(i.BUILDINGS||1)).toFixed(0)}:null}},Yee={name:"CarbonViewer",data(){return{tableData:[],stats:null,selectedCountry:null,loading:!0}},async created(){try{this.tableData=await Un.fetchEuropeExposure(),this.stats=await If.getEuropeStats(),this.loading=!1}catch(n){console.error("Error loading carbon data:",n),this.loading=!1}},methods:{async selectCountry(n){this.selectedCountry=await If.getCountryDetails(n.COUNTRY)}}},Kee={class:"carbon-viewer"},Zee={key:0,class:"stats-grid"},Jee={class:"stat-card"},Qee={class:"stat-value"},ete={class:"stat-card"},tte={class:"stat-value"},nte={class:"stat-card"},ite={class:"stat-value"},rte={class:"stat-card"},ste={class:"stat-value"},ote={class:"table-container"},ate={class:"carbon-table"},cte=["onClick"],lte={key:1,class:"country-detail"},ute={class:"detail-grid"},fte={class:"detail-item"},hte={class:"detail-value"},dte={class:"detail-item"},pte={class:"detail-value"},mte={class:"detail-item"},gte={class:"detail-value"},_te={class:"detail-item"},vte={class:"detail-value"},xte={class:"detail-item"},bte={class:"detail-value"},Ste={class:"detail-item"},Ete={class:"detail-value"};function yte(n,e,t,i,r,s){var a,o,c,l,u;return at(),ut("div",Kee,[e[11]||(e[11]=K("h3",null,"🌍 Europe Embodied Carbon Database",-1)),r.stats?(at(),ut("div",Zee,[K("div",Jee,[K("div",Qee,Ye(r.stats.countries),1),e[0]||(e[0]=K("div",{class:"stat-label"},"Countries",-1))]),K("div",ete,[K("div",tte,Ye((r.stats.totalBuildings/1e6).toFixed(1))+"M",1),e[1]||(e[1]=K("div",{class:"stat-label"},"Buildings",-1))]),K("div",nte,[K("div",ite,Ye((r.stats.totalReplacementEC/1e9).toFixed(2))+"B",1),e[2]||(e[2]=K("div",{class:"stat-label"},"Ton CO₂e (Replacement)",-1))]),K("div",rte,[K("div",ste,Ye((r.stats.totalAnnualAAEC/1e6).toFixed(1))+"M",1),e[3]||(e[3]=K("div",{class:"stat-label"},"Ton CO₂e/Year (Seismic)",-1))])])):ri("",!0),K("div",ote,[K("table",ate,[e[4]||(e[4]=K("thead",null,[K("tr",null,[K("th",null,"Country"),K("th",null,"Buildings"),K("th",null,"Total Area (km²)"),K("th",null,"Replacement EC (ton)"),K("th",null,"Structural EC (ton)"),K("th",null,"Non-Structural EC (ton)"),K("th",null,"Avg EC/Building (ton)")])],-1)),K("tbody",null,[(at(!0),ut(Kt,null,yc(r.tableData,f=>{var h;return at(),ut("tr",{key:f.COUNTRY,onClick:p=>s.selectCountry(f)},[K("td",null,Ye(f.COUNTRY),1),K("td",null,Ye((h=f.BUILDINGS)==null?void 0:h.toLocaleString()),1),K("td",null,Ye((f.TOTAL_AREA_SQM/1e6).toFixed(1)),1),K("td",null,Ye(parseFloat(f.TOTAL_REPL_EC_TON||0).toLocaleString("en-US",{maximumFractionDigits:0})),1),K("td",null,Ye(parseFloat(f.EC_STRUCTURAL_TON||0).toLocaleString("en-US",{maximumFractionDigits:0})),1),K("td",null,Ye(parseFloat(f.EC_NONSTRUCTURAL_TON||0).toLocaleString("en-US",{maximumFractionDigits:0})),1),K("td",null,Ye((parseFloat(f.TOTAL_REPL_EC_TON||0)/(f.BUILDINGS||1)).toFixed(1)),1)],8,cte)}),128))])])]),r.selectedCountry?(at(),ut("div",lte,[K("h4",null,"📊 "+Ye(r.selectedCountry.country)+" - Detailed Analysis",1),K("div",ute,[K("div",fte,[e[5]||(e[5]=K("span",{class:"detail-label"},"Total Buildings:",-1)),K("span",hte,Ye((a=r.selectedCountry.buildings)==null?void 0:a.toLocaleString()),1)]),K("div",dte,[e[6]||(e[6]=K("span",{class:"detail-label"},"Total Area:",-1)),K("span",pte,Ye((r.selectedCountry.totalArea/1e6).toFixed(1))+" km²",1)]),K("div",mte,[e[7]||(e[7]=K("span",{class:"detail-label"},"Replacement EC:",-1)),K("span",gte,Ye((o=r.selectedCountry.replacementEC)==null?void 0:o.toLocaleString("en-US",{maximumFractionDigits:0}))+" ton CO₂e",1)]),K("div",_te,[e[8]||(e[8]=K("span",{class:"detail-label"},"Structural EC:",-1)),K("span",vte,Ye((c=r.selectedCountry.structuralEC)==null?void 0:c.toLocaleString("en-US",{maximumFractionDigits:0}))+" ton CO₂e",1)]),K("div",xte,[e[9]||(e[9]=K("span",{class:"detail-label"},"Non-Structural EC:",-1)),K("span",bte,Ye((l=r.selectedCountry.nonStructuralEC)==null?void 0:l.toLocaleString("en-US",{maximumFractionDigits:0}))+" ton CO₂e",1)]),K("div",Ste,[e[10]||(e[10]=K("span",{class:"detail-label"},"Annual Seismic AAEC:",-1)),K("span",Ete,Ye((u=r.selectedCountry.annualAAEC)==null?void 0:u.toLocaleString("en-US",{maximumFractionDigits:0}))+" ton CO₂e/year",1)])])])):ri("",!0)])}const Mte=xr(Yee,[["render",yte],["__scopeId","data-v-89270685"]]),Tte={name:"CarbonSearch",data(){return{allData:[],searchResults:[],selectedResult:null,searchQuery:"",sortBy:"totalEC",sortOrder:"desc",minBuildings:0,maxBuildings:1/0}},computed:{structuralPercent(){return this.selectedResult?(parseFloat(this.selectedResult.EC_STRUCTURAL_TON||0)/parseFloat(this.selectedResult.TOTAL_REPL_EC_TON||1)*100).toFixed(1):0},nonStructuralPercent(){return this.selectedResult?(parseFloat(this.selectedResult.EC_NONSTRUCTURAL_TON||0)/parseFloat(this.selectedResult.TOTAL_REPL_EC_TON||1)*100).toFixed(1):0}},async created(){try{this.allData=await Un.fetchEuropeExposure(),this.searchResults=this.allData}catch(n){console.error("Error loading carbon data:",n)}},methods:{performSearch(){this.applyFilters()},applyFilters(){let n=this.allData;if(this.searchQuery){const e=this.searchQuery.toLowerCase();n=n.filter(t=>{var i,r,s;return((i=t.COUNTRY)==null?void 0:i.toLowerCase().includes(e))||((r=t.BUILDINGS)==null?void 0:r.toString().includes(e))||((s=t.TOTAL_REPL_EC_TON)==null?void 0:s.toString().includes(e))})}n=n.filter(e=>{const t=e.BUILDINGS||0;return t>=this.minBuildings&&t<=this.maxBuildings}),n.sort((e,t)=>{let i,r;switch(this.sortBy){case"country":i=e.COUNTRY||"",r=t.COUNTRY||"";break;case"buildings":i=e.BUILDINGS||0,r=t.BUILDINGS||0;break;case"totalEC":i=parseFloat(e.TOTAL_REPL_EC_TON||0),r=parseFloat(t.TOTAL_REPL_EC_TON||0);break;case"structuralEC":i=parseFloat(e.EC_STRUCTURAL_TON||0),r=parseFloat(t.EC_STRUCTURAL_TON||0);break;case"averageEC":i=parseFloat(e.TOTAL_REPL_EC_TON||0)/(e.BUILDINGS||1),r=parseFloat(t.TOTAL_REPL_EC_TON||0)/(t.BUILDINGS||1);break;default:i=e.COUNTRY||"",r=t.COUNTRY||""}return typeof i=="string"?this.sortOrder==="asc"?i.localeCompare(r):r.localeCompare(i):this.sortOrder==="asc"?i-r:r-i}),this.searchResults=n,this.selectedResult=null},selectResult(n){this.selectedResult=n}}},Ate={class:"carbon-search"},wte={class:"search-controls"},Cte={class:"search-box"},Rte={class:"filter-controls"},Lte={class:"filter-group"},Dte={class:"filter-group"},Pte={class:"filter-group"},Ute={class:"filter-group"},Ite={key:0,class:"results"},Fte={class:"results-summary"},Nte={class:"results-list"},Ote=["onClick"],kte={class:"result-header"},Bte={class:"result-ec"},zte={class:"result-stats"},Hte={class:"stat"},Gte={class:"value"},Vte={class:"stat"},qte={class:"value"},Wte={class:"stat"},Xte={class:"value"},jte={key:1,class:"no-results"},$te={key:2,class:"detailed-view"},Yte={class:"chart-container"},Kte={class:"chart"},Zte={class:"bar-chart"},Jte={class:"bar-group"},Qte={class:"bar-label"},ene={class:"bar-group"},tne={class:"bar-label"},nne={class:"metrics"},ine={class:"metric-item"},rne={class:"metric-value"},sne={class:"metric-item"},one={class:"metric-value"},ane={class:"metric-item"},cne={class:"metric-value"},lne={class:"metric-item"},une={class:"metric-value"};function fne(n,e,t,i,r,s){var a;return at(),ut("div",Ate,[e[29]||(e[29]=K("h3",null,"🔍 Carbon Data Search & Filter",-1)),K("div",wte,[K("div",Cte,[Tr(K("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.searchQuery=o),type:"text",placeholder:"Search countries, metrics...",onInput:e[1]||(e[1]=(...o)=>s.performSearch&&s.performSearch(...o))},null,544),[[Ko,r.searchQuery]])]),K("div",Rte,[K("div",Lte,[e[11]||(e[11]=K("label",null,"Sort By:",-1)),Tr(K("select",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.sortBy=o),onChange:e[3]||(e[3]=(...o)=>s.applyFilters&&s.applyFilters(...o))},[...e[10]||(e[10]=[Gh('<option value="country" data-v-cdc078ac>Country (A-Z)</option><option value="buildings" data-v-cdc078ac>Buildings</option><option value="totalEC" data-v-cdc078ac>Total Embodied Carbon</option><option value="structuralEC" data-v-cdc078ac>Structural EC</option><option value="averageEC" data-v-cdc078ac>Avg EC per Building</option>',5)])],544),[[El,r.sortBy]])]),K("div",Dte,[e[13]||(e[13]=K("label",null,"Order:",-1)),Tr(K("select",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.sortOrder=o),onChange:e[5]||(e[5]=(...o)=>s.applyFilters&&s.applyFilters(...o))},[...e[12]||(e[12]=[K("option",{value:"asc"},"Ascending",-1),K("option",{value:"desc"},"Descending",-1)])],544),[[El,r.sortOrder]])]),K("div",Pte,[e[14]||(e[14]=K("label",null,"Min Buildings:",-1)),Tr(K("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>r.minBuildings=o),type:"number",onInput:e[7]||(e[7]=(...o)=>s.applyFilters&&s.applyFilters(...o))},null,544),[[Ko,r.minBuildings,void 0,{number:!0}]])]),K("div",Ute,[e[15]||(e[15]=K("label",null,"Max Buildings:",-1)),Tr(K("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>r.maxBuildings=o),type:"number",onInput:e[9]||(e[9]=(...o)=>s.applyFilters&&s.applyFilters(...o))},null,544),[[Ko,r.maxBuildings,void 0,{number:!0}]])])])]),r.searchResults.length>0?(at(),ut("div",Ite,[K("div",Fte,[K("strong",null,Ye(r.searchResults.length)+" result(s)",1)]),K("div",Nte,[(at(!0),ut(Kt,null,yc(r.searchResults,o=>{var c;return at(),ut("div",{key:o.COUNTRY,class:"result-card",onClick:l=>s.selectResult(o)},[K("div",kte,[K("h4",null,Ye(o.COUNTRY),1),K("span",Bte,Ye(parseFloat(o.TOTAL_REPL_EC_TON||0).toLocaleString("en-US",{maximumFractionDigits:0}))+" ton CO₂e",1)]),K("div",zte,[K("div",Hte,[e[16]||(e[16]=K("span",{class:"label"},"Buildings:",-1)),K("span",Gte,Ye((c=o.BUILDINGS)==null?void 0:c.toLocaleString()),1)]),K("div",Vte,[e[17]||(e[17]=K("span",{class:"label"},"Avg EC/Bldg:",-1)),K("span",qte,Ye((parseFloat(o.TOTAL_REPL_EC_TON||0)/(o.BUILDINGS||1)).toFixed(1))+" ton",1)]),K("div",Wte,[e[18]||(e[18]=K("span",{class:"label"},"Structural:",-1)),K("span",Xte,Ye((parseFloat(o.EC_STRUCTURAL_TON||0)/parseFloat(o.TOTAL_REPL_EC_TON||1)*100).toFixed(1))+"%",1)])])],8,Ote)}),128))])])):(at(),ut("div",jte,[...e[19]||(e[19]=[K("p",null,"No results found. Try adjusting your search or filters.",-1)])])),r.selectedResult?(at(),ut("div",$te,[K("h4",null,"📈 "+Ye(r.selectedResult.COUNTRY)+" - Detailed Breakdown",1),K("div",Yte,[K("div",Kte,[e[24]||(e[24]=K("div",{class:"chart-title"},"Structural vs Non-Structural Carbon",-1)),K("div",Zte,[K("div",Jte,[K("div",{class:"bar",style:qr({height:s.structuralPercent+"%",backgroundColor:"#2c5aa0"})},null,4),K("div",Qte,[e[20]||(e[20]=ei("Structural",-1)),e[21]||(e[21]=K("br",null,null,-1)),ei(Ye(s.structuralPercent)+"%",1)])]),K("div",ene,[K("div",{class:"bar",style:qr({height:s.nonStructuralPercent+"%",backgroundColor:"#7fccb6"})},null,4),K("div",tne,[e[22]||(e[22]=ei("Non-Structural",-1)),e[23]||(e[23]=K("br",null,null,-1)),ei(Ye(s.nonStructuralPercent)+"%",1)])])])]),K("div",nne,[K("div",ine,[e[25]||(e[25]=K("span",{class:"metric-label"},"Total Embodied Carbon:",-1)),K("span",rne,Ye(parseFloat(r.selectedResult.TOTAL_REPL_EC_TON||0).toLocaleString("en-US",{maximumFractionDigits:0}))+" ton CO₂e",1)]),K("div",sne,[e[26]||(e[26]=K("span",{class:"metric-label"},"Total Buildings:",-1)),K("span",one,Ye((a=r.selectedResult.BUILDINGS)==null?void 0:a.toLocaleString()),1)]),K("div",ane,[e[27]||(e[27]=K("span",{class:"metric-label"},"Average per Building:",-1)),K("span",cne,Ye((parseFloat(r.selectedResult.TOTAL_REPL_EC_TON||0)/(r.selectedResult.BUILDINGS||1)).toFixed(1))+" ton CO₂e",1)]),K("div",lne,[e[28]||(e[28]=K("span",{class:"metric-label"},"Total Area:",-1)),K("span",une,Ye((r.selectedResult.TOTAL_AREA_SQM/1e6).toFixed(1))+" km²",1)])])])])):ri("",!0)])}const hne=xr(Tte,[["render",fne],["__scopeId","data-v-cdc078ac"]]),dne={name:"CarbonPage",components:{CarbonViewer:Mte,CarbonSearch:hne},data(){return{activeTab:"overview"}}},pne={class:"carbon-page"},mne={class:"tabs"},gne={key:0,class:"tab-content"},_ne={key:1,class:"tab-content"},vne={key:2,class:"tab-content about"};function xne(n,e,t,i,r,s){const a=Zc("CarbonViewer"),o=Zc("CarbonSearch");return at(),ut("div",pne,[e[4]||(e[4]=K("h2",null,"🌍 Global Embodied Carbon Model Integration",-1)),e[5]||(e[5]=K("div",{class:"intro"},[K("p",null,[ei(" This page integrates the "),K("strong",null,"Global Embodied Carbon Model"),ei(" with live data connectors. Data is fetched from: "),K("a",{href:"https://github.com/giomj/global_embodied_carbon_model",target:"_blank"},"github.com/giomj/global_embodied_carbon_model")]),K("p",null,[K("strong",null,"Data Source:"),ei(" Europe's embodied carbon associated with replacement and repair of residential, commercial, and industrial building stock. ")])],-1)),K("div",mne,[K("button",{class:sr({active:r.activeTab==="overview"}),onClick:e[0]||(e[0]=c=>r.activeTab="overview")}," 📊 Overview & Table ",2),K("button",{class:sr({active:r.activeTab==="search"}),onClick:e[1]||(e[1]=c=>r.activeTab="search")}," 🔍 Search & Filter ",2),K("button",{class:sr({active:r.activeTab==="about"}),onClick:e[2]||(e[2]=c=>r.activeTab="about")}," ℹ️ About Data ",2)]),r.activeTab==="overview"?(at(),ut("div",gne,[en(a)])):ri("",!0),r.activeTab==="search"?(at(),ut("div",_ne,[en(o)])):ri("",!0),r.activeTab==="about"?(at(),ut("div",vne,[...e[3]||(e[3]=[Gh('<h3 data-v-37b81933>About the Data</h3><section data-v-37b81933><h4 data-v-37b81933>🔗 Data Connectors</h4><ul data-v-37b81933><li data-v-37b81933><strong data-v-37b81933>Connector 1 - Data Loading:</strong> Fetches CSV data from GitHub repository using Papa Parse</li><li data-v-37b81933><strong data-v-37b81933>Connector 2 - API Layer:</strong> RESTful interface for aggregations and calculations</li><li data-v-37b81933><strong data-v-37b81933>Connector 3 - Data Tables:</strong> Interactive tabular viewer with sorting and details</li><li data-v-37b81933><strong data-v-37b81933>Connector 4 - Search/Filter:</strong> Full-text search with advanced filtering and visualization</li></ul></section><section data-v-37b81933><h4 data-v-37b81933>📊 Data Structure</h4><p data-v-37b81933><strong data-v-37b81933>Exposure Summary Fields:</strong></p><ul data-v-37b81933><li data-v-37b81933>COUNTRY - Country name</li><li data-v-37b81933>BUILDINGS - Total number of buildings</li><li data-v-37b81933>TOTAL_AREA_SQM - Total built area in square meters</li><li data-v-37b81933>TOTAL_REPL_COST_USD - Total replacement cost in USD</li><li data-v-37b81933>TOTAL_REPL_EC_TON - Total replacement embodied carbon in tons CO₂e</li><li data-v-37b81933>EC_STRUCTURAL_TON - Structural components embodied carbon</li><li data-v-37b81933>EC_NONSTRUCTURAL_TON - Non-structural components embodied carbon</li></ul></section><section data-v-37b81933><h4 data-v-37b81933>🧮 Calculation Methodology</h4><p data-v-37b81933><strong data-v-37b81933>Life Cycle Assessment (LCA) Modules:</strong></p><ul data-v-37b81933><li data-v-37b81933><strong data-v-37b81933>A1-A3:</strong> Production - Material manufacturing</li><li data-v-37b81933><strong data-v-37b81933>A4:</strong> Transport - 120 km average distance</li><li data-v-37b81933><strong data-v-37b81933>A5:</strong> Construction - On-site construction emissions</li><li data-v-37b81933><strong data-v-37b81933>C1-C4:</strong> End-of-Life - Demolition and waste management</li><li data-v-37b81933><strong data-v-37b81933>AAEC:</strong> Annual Average Loss Ratio × Replacement EC (Seismic)</li></ul></section><section data-v-37b81933><h4 data-v-37b81933>📍 Geographic Coverage</h4><p data-v-37b81933> This integration covers <strong data-v-37b81933>45+ European countries and territories</strong>, including: </p><div class="countries-grid" data-v-37b81933><span data-v-37b81933>Albania</span><span data-v-37b81933>Austria</span><span data-v-37b81933>Belgium</span><span data-v-37b81933>Bulgaria</span><span data-v-37b81933>Croatia</span><span data-v-37b81933>Czechia</span><span data-v-37b81933>Denmark</span><span data-v-37b81933>France</span><span data-v-37b81933>Germany</span><span data-v-37b81933>Greece</span><span data-v-37b81933>Hungary</span><span data-v-37b81933>Ireland</span><span data-v-37b81933>Italy</span><span data-v-37b81933>Poland</span><span data-v-37b81933>Portugal</span><span data-v-37b81933>Romania</span><span data-v-37b81933>Spain</span><span data-v-37b81933>Sweden</span><span data-v-37b81933>Switzerland</span><span data-v-37b81933>Turkey</span><span data-v-37b81933>United Kingdom</span><span data-v-37b81933>...and 24 more</span></div></section><section data-v-37b81933><h4 data-v-37b81933>🔐 License &amp; Attribution</h4><p data-v-37b81933><strong data-v-37b81933>License:</strong> CC BY-NC-SA 4.0 (Creative Commons Attribution-NonCommercial-ShareAlike) </p><p data-v-37b81933><strong data-v-37b81933>Source:</strong> Global Earthquake Model (GEM) Foundation </p><p data-v-37b81933><strong data-v-37b81933>Citation:</strong> Global Earthquake Model (GEM) Foundation. Global Seismic Embodied Carbon Model. Available at: https://github.com/gem/global_embodied_carbon_model </p><p data-v-37b81933><strong data-v-37b81933>Publication:</strong> Caruso et al. &quot;Unveiling the Environmental Impact of Earthquakes in Europe&quot; (2024) </p></section><section data-v-37b81933><h4 data-v-37b81933>🔧 Technical Implementation</h4><p data-v-37b81933><strong data-v-37b81933>Technologies Used:</strong></p><ul data-v-37b81933><li data-v-37b81933><strong data-v-37b81933>Vue.js 3:</strong> Reactive UI framework</li><li data-v-37b81933><strong data-v-37b81933>Papa Parse:</strong> CSV parsing library</li><li data-v-37b81933><strong data-v-37b81933>Fetch API:</strong> Data retrieval from GitHub</li><li data-v-37b81933><strong data-v-37b81933>CORS:</strong> Cross-origin requests via GitHub raw content</li></ul></section>',7)])])):ri("",!0)])}const bne=xr(dne,[["render",xne],["__scopeId","data-v-37b81933"]]),Sne={name:"App",components:{Landing:IS,KnowledgeBase:jee,Carbon:bne},computed:{currentView(){const n=location.hash.replace("#","")||"/";return n.startsWith("/kb")?"KnowledgeBase":n.startsWith("/carbon")?"Carbon":"Landing"}},methods:{goHome(){location.hash="#/",this.$forceUpdate()},goKB(){location.hash="#/kb",this.$forceUpdate()},goCarbon(){location.hash="#/carbon",this.$forceUpdate()}},mounted(){window.addEventListener("hashchange",()=>this.$forceUpdate())}},Ene={class:"app"};function yne(n,e,t,i,r,s){return at(),ut("div",Ene,[K("header",null,[K("div",{class:"brand",role:"button",tabindex:"0",onClick:e[0]||(e[0]=(...a)=>s.goHome&&s.goHome(...a)),onKeydown:e[1]||(e[1]=dg((...a)=>s.goHome&&s.goHome(...a),["enter"])),style:{display:"flex","align-items":"center",cursor:"pointer"}},[...e[6]||(e[6]=[K("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[K("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3",stroke:"#9bd","stroke-width":"1.5",fill:"none"}),K("path",{d:"M6 12h12M12 6v12",stroke:"#9bd","stroke-width":"1.2","stroke-linecap":"round"})],-1),K("span",{style:{"margin-left":"10px","font-weight":"600",color:"#fff"}},"Giomj",-1)])],32),K("nav",null,[K("a",{href:"#/",onClick:e[2]||(e[2]=Hr((...a)=>s.goHome&&s.goHome(...a),["prevent"])),style:{cursor:"pointer"}},"Landing"),K("a",{href:"#/kb",onClick:e[3]||(e[3]=Hr((...a)=>s.goKB&&s.goKB(...a),["prevent"])),style:{cursor:"pointer"}},"Knowledge Base"),K("a",{href:"#/carbon",onClick:e[4]||(e[4]=Hr((...a)=>s.goCarbon&&s.goCarbon(...a),["prevent"])),style:{cursor:"pointer"}},"Carbon Data"),K("button",{class:"icon-btn",onClick:e[5]||(e[5]=(...a)=>s.goKB&&s.goKB(...a)),style:{"margin-left":"12px",padding:"6px 8px","border-radius":"6px",border:"none",cursor:"pointer",background:"#123",color:"#9bd"}},"KB")])]),K("main",null,[(at(),Bh(Qp(s.currentView)))])])}const Mne=xr(Sne,[["render",yne]]);gg(Mne).mount("#app");
