(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ja(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const tt={},Ji=[],mn=()=>{},gf=()=>!1,Xs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),js=n=>n.startsWith("onUpdate:"),Mt=Object.assign,$a=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},bd=Object.prototype.hasOwnProperty,$e=(n,e)=>bd.call(n,e),Fe=Array.isArray,Qi=n=>Hr(n)==="[object Map]",_f=n=>Hr(n)==="[object Set]",Lc=n=>Hr(n)==="[object Date]",ke=n=>typeof n=="function",st=n=>typeof n=="string",gn=n=>typeof n=="symbol",Qe=n=>n!==null&&typeof n=="object",vf=n=>(Qe(n)||ke(n))&&ke(n.then)&&ke(n.catch),xf=Object.prototype.toString,Hr=n=>xf.call(n),yd=n=>Hr(n).slice(8,-1),Sf=n=>Hr(n)==="[object Object]",Ya=n=>st(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ar=ja(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$s=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Md=/-\w/g,Pt=$s(n=>n.replace(Md,e=>e.slice(1).toUpperCase())),Td=/\B([A-Z])/g,oi=$s(n=>n.replace(Td,"-$1").toLowerCase()),Ys=$s(n=>n.charAt(0).toUpperCase()+n.slice(1)),Eo=$s(n=>n?`on${Ys(n)}`:""),Ln=(n,e)=>!Object.is(n,e),bo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ef=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ad=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Dc;const Ks=()=>Dc||(Dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ka(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=st(i)?Ld(i):Ka(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(st(n)||Qe(n))return n}const wd=/;(?![^(]*\))/g,Cd=/:([^]+)/,Rd=/\/\*[^]*?\*\//g;function Ld(n){const e={};return n.replace(Rd,"").split(wd).forEach(t=>{if(t){const i=t.split(Cd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Za(n){let e="";if(st(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Za(n[t]);i&&(e+=i+" ")}else if(Qe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pd=ja(Dd);function bf(n){return!!n||n===""}function Ud(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ja(n[i],e[i]);return t}function Ja(n,e){if(n===e)return!0;let t=Lc(n),i=Lc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=gn(n),i=gn(e),t||i)return n===e;if(t=Fe(n),i=Fe(e),t||i)return t&&i?Ud(n,e):!1;if(t=Qe(n),i=Qe(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(o&&!c||!o&&c||!Ja(n[a],e[a]))return!1}}return String(n)===String(e)}const yf=n=>!!(n&&n.__v_isRef===!0),Ma=n=>st(n)?n:n==null?"":Fe(n)||Qe(n)&&(n.toString===xf||!ke(n.toString))?yf(n)?Ma(n.value):JSON.stringify(n,Mf,2):String(n),Mf=(n,e)=>yf(e)?Mf(n,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[yo(i,s)+" =>"]=r,t),{})}:_f(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>yo(t))}:gn(e)?yo(e):Qe(e)&&!Fe(e)&&!Sf(e)?String(e):e,yo=(n,e="")=>{var t;return gn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class Id{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&_t&&(_t.active?(this.parent=_t,this.index=(_t.scopes||(_t.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=_t;try{return _t=this,e()}finally{_t=t}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){if(this._on>0&&--this._on===0){if(_t===this)_t=this.prevScope;else{let e=_t;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fd(){return _t}let et;const Mo=new WeakSet;class Tf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&(_t.active?_t.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Mo.has(this)&&(Mo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pc(this),Cf(this);const e=et,t=nn;et=this,nn=!0;try{return this.fn()}finally{Rf(this),et=e,nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)tc(e);this.deps=this.depsTail=void 0,Pc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Mo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ta(this)&&this.run()}get dirty(){return Ta(this)}}let Af=0,wr,Cr;function wf(n,e=!1){if(n.flags|=8,e){n.next=Cr,Cr=n;return}n.next=wr,wr=n}function Qa(){Af++}function ec(){if(--Af>0)return;if(Cr){let e=Cr;for(Cr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;wr;){let e=wr;for(wr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Cf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Rf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),tc(i),Nd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ta(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Lf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ir)||(n.globalVersion=Ir,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ta(n))))return;n.flags|=2;const e=n.dep,t=et,i=nn;et=n,nn=!0;try{Cf(n);const r=n.fn(n._value);(e.version===0||Ln(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{et=t,nn=i,Rf(n),n.flags&=-3}}function tc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)tc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Nd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let nn=!0;const Df=[];function On(){Df.push(nn),nn=!1}function kn(){const n=Df.pop();nn=n===void 0?!0:n}function Pc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=et;et=void 0;try{e()}finally{et=t}}}let Ir=0;class Od{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!et||!nn||et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==et)t=this.activeLink=new Od(et,this),et.deps?(t.prevDep=et.depsTail,et.depsTail.nextDep=t,et.depsTail=t):et.deps=et.depsTail=t,Uf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=et.depsTail,t.nextDep=void 0,et.depsTail.nextDep=t,et.depsTail=t,et.deps===t&&(et.deps=i)}return t}trigger(e){this.version++,Ir++,this.notify(e)}notify(e){Qa();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ec()}}}function Uf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Uf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Aa=new WeakMap,bi=Symbol(""),wa=Symbol(""),Fr=Symbol("");function bt(n,e,t){if(nn&&et){let i=Aa.get(n);i||Aa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Pf),r.map=i,r.key=t),r.track()}}function Dn(n,e,t,i,r,s){const a=Aa.get(n);if(!a){Ir++;return}const o=c=>{c&&c.trigger()};if(Qa(),e==="clear")a.forEach(o);else{const c=Fe(n),l=c&&Ya(t);if(c&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Fr||!gn(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),l&&o(a.get(Fr)),e){case"add":c?l&&o(a.get("length")):(o(a.get(bi)),Qi(n)&&o(a.get(wa)));break;case"delete":c||(o(a.get(bi)),Qi(n)&&o(a.get(wa)));break;case"set":Qi(n)&&o(a.get(bi));break}}ec()}function Di(n){const e=Ke(n);return e===n?e:(bt(e,"iterate",Fr),rn(n)?e:e.map(Bn))}function Zs(n){return bt(n=Ke(n),"iterate",Fr),n}function fn(n,e){return ii(n)?rr(yi(n)?Bn(e):e):Bn(e)}const kd={__proto__:null,[Symbol.iterator](){return To(this,Symbol.iterator,n=>fn(this,n))},concat(...n){return Di(this).concat(...n.map(e=>Fe(e)?Di(e):e))},entries(){return To(this,"entries",n=>(n[1]=fn(this,n[1]),n))},every(n,e){return Sn(this,"every",n,e,void 0,arguments)},filter(n,e){return Sn(this,"filter",n,e,t=>t.map(i=>fn(this,i)),arguments)},find(n,e){return Sn(this,"find",n,e,t=>fn(this,t),arguments)},findIndex(n,e){return Sn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Sn(this,"findLast",n,e,t=>fn(this,t),arguments)},findLastIndex(n,e){return Sn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Sn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ao(this,"includes",n)},indexOf(...n){return Ao(this,"indexOf",n)},join(n){return Di(this).join(n)},lastIndexOf(...n){return Ao(this,"lastIndexOf",n)},map(n,e){return Sn(this,"map",n,e,void 0,arguments)},pop(){return gr(this,"pop")},push(...n){return gr(this,"push",n)},reduce(n,...e){return Uc(this,"reduce",n,e)},reduceRight(n,...e){return Uc(this,"reduceRight",n,e)},shift(){return gr(this,"shift")},some(n,e){return Sn(this,"some",n,e,void 0,arguments)},splice(...n){return gr(this,"splice",n)},toReversed(){return Di(this).toReversed()},toSorted(n){return Di(this).toSorted(n)},toSpliced(...n){return Di(this).toSpliced(...n)},unshift(...n){return gr(this,"unshift",n)},values(){return To(this,"values",n=>fn(this,n))}};function To(n,e,t){const i=Zs(n),r=i[e]();return i!==n&&!rn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Bd=Array.prototype;function Sn(n,e,t,i,r,s){const a=Zs(n),o=a!==n&&!rn(n),c=a[e];if(c!==Bd[e]){const f=c.apply(n,s);return o?Bn(f):f}let l=t;a!==n&&(o?l=function(f,h){return t.call(this,fn(n,f),h,n)}:t.length>2&&(l=function(f,h){return t.call(this,f,h,n)}));const u=c.call(a,l,i);return o&&r?r(u):u}function Uc(n,e,t,i){const r=Zs(n),s=r!==n&&!rn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(l,u,f){return o&&(o=!1,l=fn(n,l)),t.call(this,l,fn(n,u),f,n)}):t.length>3&&(a=function(l,u,f){return t.call(this,l,u,f,n)}));const c=r[e](a,...i);return o?fn(n,c):c}function Ao(n,e,t){const i=Ke(n);bt(i,"iterate",Fr);const r=i[e](...t);return(r===-1||r===!1)&&sc(t[0])?(t[0]=Ke(t[0]),i[e](...t)):r}function gr(n,e,t=[]){On(),Qa();const i=Ke(n)[e].apply(n,t);return ec(),kn(),i}const zd=ja("__proto__,__v_isRef,__isVue"),If=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(gn));function Hd(n){gn(n)||(n=String(n));const e=Ke(this);return bt(e,"has",n),e.hasOwnProperty(n)}class Ff{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Zd:Bf:s?kf:Of).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Fe(e);if(!r){let c;if(a&&(c=kd[t]))return c;if(t==="hasOwnProperty")return Hd}const o=Reflect.get(e,t,Ut(e)?e:i);if((gn(t)?If.has(t):zd(t))||(r||bt(e,"get",t),s))return o;if(Ut(o)){const c=a&&Ya(t)?o:o.value;return r&&Qe(c)?Ra(c):c}return Qe(o)?r?Ra(o):ic(o):o}}class Nf extends Ff{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Fe(e)&&Ya(t);if(!this._isShallow){const l=ii(s);if(!rn(i)&&!ii(i)&&(s=Ke(s),i=Ke(i)),!a&&Ut(s)&&!Ut(i))return l||(s.value=i),!0}const o=a?Number(t)<e.length:$e(e,t),c=Reflect.set(e,t,i,Ut(e)?e:r);return e===Ke(r)&&c&&(o?Ln(i,s)&&Dn(e,"set",t,i):Dn(e,"add",t,i)),c}deleteProperty(e,t){const i=$e(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Dn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!gn(t)||!If.has(t))&&bt(e,"has",t),i}ownKeys(e){return bt(e,"iterate",Fe(e)?"length":bi),Reflect.ownKeys(e)}}class Vd extends Ff{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Gd=new Nf,Wd=new Vd,qd=new Nf(!0);const Ca=n=>n,Qr=n=>Reflect.getPrototypeOf(n);function Xd(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),a=Qi(s),o=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,l=r[n](...i),u=t?Ca:e?rr:Bn;return!e&&bt(s,"iterate",c?wa:bi),Mt(Object.create(l),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function es(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function jd(n,e){const t={get(r){const s=this.__v_raw,a=Ke(s),o=Ke(r);n||(Ln(r,o)&&bt(a,"get",r),bt(a,"get",o));const{has:c}=Qr(a),l=e?Ca:n?rr:Bn;if(c.call(a,r))return l(s.get(r));if(c.call(a,o))return l(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&bt(Ke(r),"iterate",bi),r.size},has(r){const s=this.__v_raw,a=Ke(s),o=Ke(r);return n||(Ln(r,o)&&bt(a,"has",r),bt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,c=Ke(o),l=e?Ca:n?rr:Bn;return!n&&bt(c,"iterate",bi),o.forEach((u,f)=>r.call(s,l(u),l(f),a))}};return Mt(t,n?{add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear")}:{add(r){const s=Ke(this),a=Qr(s),o=Ke(r),c=!e&&!rn(r)&&!ii(r)?o:r;return a.has.call(s,c)||Ln(r,c)&&a.has.call(s,r)||Ln(o,c)&&a.has.call(s,o)||(s.add(c),Dn(s,"add",c,c)),this},set(r,s){!e&&!rn(s)&&!ii(s)&&(s=Ke(s));const a=Ke(this),{has:o,get:c}=Qr(a);let l=o.call(a,r);l||(r=Ke(r),l=o.call(a,r));const u=c.call(a,r);return a.set(r,s),l?Ln(s,u)&&Dn(a,"set",r,s):Dn(a,"add",r,s),this},delete(r){const s=Ke(this),{has:a,get:o}=Qr(s);let c=a.call(s,r);c||(r=Ke(r),c=a.call(s,r)),o&&o.call(s,r);const l=s.delete(r);return c&&Dn(s,"delete",r,void 0),l},clear(){const r=Ke(this),s=r.size!==0,a=r.clear();return s&&Dn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Xd(r,n,e)}),t}function nc(n,e){const t=jd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get($e(t,r)&&r in i?t:i,r,s)}const $d={get:nc(!1,!1)},Yd={get:nc(!1,!0)},Kd={get:nc(!0,!1)};const Of=new WeakMap,kf=new WeakMap,Bf=new WeakMap,Zd=new WeakMap;function Jd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ic(n){return ii(n)?n:rc(n,!1,Gd,$d,Of)}function Qd(n){return rc(n,!1,qd,Yd,kf)}function Ra(n){return rc(n,!0,Wd,Kd,Bf)}function rc(n,e,t,i,r){if(!Qe(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=Jd(yd(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function yi(n){return ii(n)?yi(n.__v_raw):!!(n&&n.__v_isReactive)}function ii(n){return!!(n&&n.__v_isReadonly)}function rn(n){return!!(n&&n.__v_isShallow)}function sc(n){return n?!!n.__v_raw:!1}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function ep(n){return!$e(n,"__v_skip")&&Object.isExtensible(n)&&Ef(n,"__v_skip",!0),n}const Bn=n=>Qe(n)?ic(n):n,rr=n=>Qe(n)?Ra(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function tp(n){return Ut(n)?n.value:n}const np={get:(n,e,t)=>e==="__v_raw"?n:tp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ut(r)&&!Ut(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function zf(n){return yi(n)?n:new Proxy(n,np)}class ip{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Pf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ir-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&et!==this)return wf(this,!0),!0}get value(){const e=this.dep.track();return Lf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rp(n,e,t=!1){let i,r;return ke(n)?i=n:(i=n.get,r=n.set),new ip(i,r,t)}const ts={},Ds=new WeakMap;let gi;function sp(n,e=!1,t=gi){if(t){let i=Ds.get(t);i||Ds.set(t,i=[]),i.push(n)}}function op(n,e,t=tt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:c}=t,l=b=>r?b:rn(b)||r===!1||r===0?Kn(b,1):Kn(b);let u,f,h,p,v=!1,g=!1;if(Ut(n)?(f=()=>n.value,v=rn(n)):yi(n)?(f=()=>l(n),v=!0):Fe(n)?(g=!0,v=n.some(b=>yi(b)||rn(b)),f=()=>n.map(b=>{if(Ut(b))return b.value;if(yi(b))return l(b);if(ke(b))return c?c(b,2):b()})):ke(n)?e?f=c?()=>c(n,2):n:f=()=>{if(h){On();try{h()}finally{kn()}}const b=gi;gi=u;try{return c?c(n,3,[p]):n(p)}finally{gi=b}}:f=mn,e&&r){const b=f,A=r===!0?1/0:r;f=()=>Kn(b(),A)}const m=Fd(),d=()=>{u.stop(),m&&m.active&&$a(m.effects,u)};if(s&&e){const b=e;e=(...A)=>{const C=b(...A);return d(),C}}let y=g?new Array(n.length).fill(ts):ts;const S=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const A=u.run();if(b||r||v||(g?A.some((C,R)=>Ln(C,y[R])):Ln(A,y))){h&&h();const C=gi;gi=u;try{const R=[A,y===ts?void 0:g&&y[0]===ts?[]:y,p];y=A,c?c(e,3,R):e(...R)}finally{gi=C}}}else u.run()};return o&&o(S),u=new Tf(f),u.scheduler=a?()=>a(S,!1):S,p=b=>sp(b,!1,u),h=u.onStop=()=>{const b=Ds.get(u);if(b){if(c)c(b,4);else for(const A of b)A();Ds.delete(u)}},e?i?S(!0):y=u.run():a?a(S.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Kn(n,e=1/0,t){if(e<=0||!Qe(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ut(n))Kn(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)Kn(n[i],e,t);else if(_f(n)||Qi(n))n.forEach(i=>{Kn(i,e,t)});else if(Sf(n)){for(const i in n)Kn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Kn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vr(n,e,t,i){try{return i?n(...i):n()}catch(r){Js(r,e,t)}}function on(n,e,t,i){if(ke(n)){const r=Vr(n,e,t,i);return r&&vf(r)&&r.catch(s=>{Js(s,e,t)}),r}if(Fe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(on(n[s],e,t,i));return r}}function Js(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||tt;if(e){let o=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,c,l)===!1)return}o=o.parent}if(s){On(),Vr(s,null,10,[n,c,l]),kn();return}}ap(n,t,r,i,a)}function ap(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Dt=[];let un=-1;const er=[];let Yn=null,Yi=0;const Hf=Promise.resolve();let Ps=null;function cp(n){const e=Ps||Hf;return n?e.then(this?n.bind(this):n):e}function lp(n){let e=un+1,t=Dt.length;for(;e<t;){const i=e+t>>>1,r=Dt[i],s=Nr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function oc(n){if(!(n.flags&1)){const e=Nr(n),t=Dt[Dt.length-1];!t||!(n.flags&2)&&e>=Nr(t)?Dt.push(n):Dt.splice(lp(e),0,n),n.flags|=1,Vf()}}function Vf(){Ps||(Ps=Hf.then(Wf))}function up(n){Fe(n)?er.push(...n):Yn&&n.id===-1?Yn.splice(Yi+1,0,n):n.flags&1||(er.push(n),n.flags|=1),Vf()}function Ic(n,e,t=un+1){for(;t<Dt.length;t++){const i=Dt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Dt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gf(n){if(er.length){const e=[...new Set(er)].sort((t,i)=>Nr(t)-Nr(i));if(er.length=0,Yn){Yn.push(...e);return}for(Yn=e,Yi=0;Yi<Yn.length;Yi++){const t=Yn[Yi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Yn=null,Yi=0}}const Nr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wf(n){try{for(un=0;un<Dt.length;un++){const e=Dt[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<Dt.length;un++){const e=Dt[un];e&&(e.flags&=-2)}un=-1,Dt.length=0,Gf(),Ps=null,(Dt.length||er.length)&&Wf()}}let tn=null,qf=null;function Us(n){const e=tn;return tn=n,qf=n&&n.type.__scopeId||null,e}function fp(n,e=tn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Xc(-1);const s=Us(e),a=Mi.length;let o;try{o=n(...r)}finally{for(let c=Mi.length;c>a;c--)gh();Us(s),i._d&&Xc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function li(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let c=o.dir[i];c&&(On(),on(c,t,8,[n.el,o,n,e]),kn())}}function hp(n,e){if(yt){let t=yt.provides;const i=yt.parent&&yt.parent.provides;i===t&&(t=yt.provides=Object.create(i)),t[n]=e}}function Cs(n,e,t=!1){const i=dm();if(i||tr){let r=tr?tr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const dp=Symbol.for("v-scx"),pp=()=>Cs(dp);function wo(n,e,t){return Xf(n,e,t)}function Xf(n,e,t=tt){const{immediate:i,deep:r,flush:s,once:a}=t,o=Mt({},t),c=e&&i||!e&&s!=="post";let l;if(kr){if(s==="sync"){const p=pp();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!c){const p=()=>{};return p.stop=mn,p.resume=mn,p.pause=mn,p}}const u=yt;o.call=(p,v,g)=>on(p,u,v,g);let f=!1;s==="post"?o.scheduler=p=>{Ft(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,v)=>{v?p():oc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=op(n,e,o);return kr&&(l?l.push(h):c&&h()),h}function mp(n,e,t){const i=this.proxy,r=st(n)?n.includes(".")?jf(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const a=Gr(this),o=Xf(r,s.bind(i),t);return a(),o}function jf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const gp=Symbol("_vte"),_p=n=>n.__isTeleport,Co=Symbol("_leaveCb");function ac(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ac(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function $f(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Is=new WeakMap;function Rr(n,e,t,i,r=!1){if(Fe(n)){n.forEach((g,m)=>Rr(g,e&&(Fe(e)?e[m]:e),t,i,r));return}if(Lr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Rr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?uc(i.component):i.el,a=r?null:s,{i:o,r:c}=n,l=e&&e.r,u=o.refs===tt?o.refs={}:o.refs,f=o.setupState,h=Ke(f),p=f===tt?gf:g=>Fc(u,g)?!1:$e(h,g),v=(g,m)=>!(m&&Fc(u,m));if(l!=null&&l!==c){if(Nc(e),st(l))u[l]=null,p(l)&&(f[l]=null);else if(Ut(l)){const g=e;v(l,g.k)&&(l.value=null),g.k&&(u[g.k]=null)}}if(ke(c))Vr(c,o,12,[a,u]);else{const g=st(c),m=Ut(c);if(g||m){const d=()=>{if(n.f){const y=g?p(c)?f[c]:u[c]:v()||!n.k?c.value:u[n.k];if(r)Fe(y)&&$a(y,s);else if(Fe(y))y.includes(s)||y.push(s);else if(g)u[c]=[s],p(c)&&(f[c]=u[c]);else{const S=[s];v(c,n.k)&&(c.value=S),n.k&&(u[n.k]=S)}}else g?(u[c]=a,p(c)&&(f[c]=a)):m&&(v(c,n.k)&&(c.value=a),n.k&&(u[n.k]=a))};if(a){const y=()=>{d(),Is.delete(n)};y.id=-1,Is.set(n,y),Ft(y,t)}else Nc(n),d()}}}function Nc(n){const e=Is.get(n);e&&(e.flags|=8,Is.delete(n))}Ks().requestIdleCallback;Ks().cancelIdleCallback;const Lr=n=>!!n.type.__asyncLoader,Yf=n=>n.type.__isKeepAlive;function vp(n,e){Kf(n,"a",e)}function xp(n,e){Kf(n,"da",e)}function Kf(n,e,t=yt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Qs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Yf(r.parent.vnode)&&Sp(i,e,t,r),r=r.parent}}function Sp(n,e,t,i){const r=Qs(e,n,i,!0);Zf(()=>{$a(i[e],r)},t)}function Qs(n,e,t=yt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{On();const o=Gr(t),c=on(e,t,n,a);return o(),kn(),c});return i?r.unshift(s):r.push(s),s}}const Hn=n=>(e,t=yt)=>{(!kr||n==="sp")&&Qs(n,(...i)=>e(...i),t)},Ep=Hn("bm"),bp=Hn("m"),yp=Hn("bu"),Mp=Hn("u"),Tp=Hn("bum"),Zf=Hn("um"),Ap=Hn("sp"),wp=Hn("rtg"),Cp=Hn("rtc");function Rp(n,e=yt){Qs("ec",n,e)}const Lp="components",Jf=Symbol.for("v-ndc");function Dp(n){return st(n)?Pp(Lp,n,!1)||n:n||Jf}function Pp(n,e,t=!0,i=!1){const r=tn||yt;if(r){const s=r.type;{const o=vm(s,!1);if(o&&(o===e||o===Pt(e)||o===Ys(Pt(e))))return s}const a=Oc(r[n]||s[n],e)||Oc(r.appContext[n],e);return!a&&i?s:a}}function Oc(n,e){return n&&(n[e]||n[Pt(e)]||n[Ys(Pt(e))])}function Up(n,e,t,i){let r;const s=t,a=Fe(n);if(a||st(n)){const o=a&&yi(n);let c=!1,l=!1;o&&(c=!rn(n),l=ii(n),n=Zs(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(c?l?rr(Bn(n[u])):Bn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(Qe(n))if(n[Symbol.iterator])r=Array.from(n,(o,c)=>e(o,c,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];r[c]=e(n[u],u,c,s)}}else r=[];return r}const La=n=>n?Eh(n)?uc(n):La(n.parent):null,Dr=Mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>La(n.parent),$root:n=>La(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>eh(n),$forceUpdate:n=>n.f||(n.f=()=>{oc(n.update)}),$nextTick:n=>n.n||(n.n=cp.bind(n.proxy)),$watch:n=>mp.bind(n)}),Ro=(n,e)=>n!==tt&&!n.__isScriptSetup&&$e(n,e),Ip={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:c}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ro(i,e))return a[e]=1,i[e];if(r!==tt&&$e(r,e))return a[e]=2,r[e];if($e(s,e))return a[e]=3,s[e];if(t!==tt&&$e(t,e))return a[e]=4,t[e];Da&&(a[e]=0)}}const l=Dr[e];let u,f;if(l)return e==="$attrs"&&bt(n.attrs,"get",""),l(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==tt&&$e(t,e))return a[e]=4,t[e];if(f=c.config.globalProperties,$e(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ro(r,e)?(r[e]=t,!0):i!==tt&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let c;return!!(t[o]||n!==tt&&o[0]!=="$"&&$e(n,o)||Ro(e,o)||$e(s,o)||$e(i,o)||$e(Dr,o)||$e(r.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kc(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Da=!0;function Fp(n){const e=eh(n),t=n.proxy,i=n.ctx;Da=!1,e.beforeCreate&&Bc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:g,deactivated:m,beforeDestroy:d,beforeUnmount:y,destroyed:S,unmounted:b,render:A,renderTracked:C,renderTriggered:R,errorCaptured:O,serverPrefetch:M,expose:w,inheritAttrs:X,components:ne,directives:ae,filters:L}=e;if(l&&Np(l,i,null),a)for(const V in a){const ee=a[V];ke(ee)&&(i[V]=ee.bind(t))}if(r){const V=r.call(t,t);Qe(V)&&(n.data=ic(V))}if(Da=!0,s)for(const V in s){const ee=s[V],se=ke(ee)?ee.bind(t,t):ke(ee.get)?ee.get.bind(t,t):mn,oe=!ke(ee)&&ke(ee.set)?ee.set.bind(t):mn,N=Sm({get:se,set:oe});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>N.value,set:W=>N.value=W})}if(o)for(const V in o)Qf(o[V],i,t,V);if(c){const V=ke(c)?c.call(t):c;Reflect.ownKeys(V).forEach(ee=>{hp(ee,V[ee])})}u&&Bc(u,n,"c");function I(V,ee){Fe(ee)?ee.forEach(se=>V(se.bind(t))):ee&&V(ee.bind(t))}if(I(Ep,f),I(bp,h),I(yp,p),I(Mp,v),I(vp,g),I(xp,m),I(Rp,O),I(Cp,C),I(wp,R),I(Tp,y),I(Zf,b),I(Ap,M),Fe(w))if(w.length){const V=n.exposed||(n.exposed={});w.forEach(ee=>{Object.defineProperty(V,ee,{get:()=>t[ee],set:se=>t[ee]=se,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===mn&&(n.render=A),X!=null&&(n.inheritAttrs=X),ne&&(n.components=ne),ae&&(n.directives=ae),M&&$f(n)}function Np(n,e,t=mn){Fe(n)&&(n=Pa(n));for(const i in n){const r=n[i];let s;Qe(r)?"default"in r?s=Cs(r.from||i,r.default,!0):s=Cs(r.from||i):s=Cs(r),Ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Bc(n,e,t){on(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qf(n,e,t,i){let r=i.includes(".")?jf(t,i):()=>t[i];if(st(n)){const s=e[n];ke(s)&&wo(r,s)}else if(ke(n))wo(r,n.bind(t));else if(Qe(n))if(Fe(n))n.forEach(s=>Qf(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&wo(r,s,n)}}function eh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let c;return o?c=o:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>Fs(c,l,a,!0)),Fs(c,e,a)),Qe(e)&&s.set(e,c),c}function Fs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Fs(n,s,t,!0),r&&r.forEach(a=>Fs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Op[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Op={data:zc,props:Hc,emits:Hc,methods:yr,computed:yr,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:yr,directives:yr,watch:Bp,provide:zc,inject:kp};function zc(n,e){return e?n?function(){return Mt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function kp(n,e){return yr(Pa(n),Pa(e))}function Pa(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ct(n,e){return n?[...new Set([].concat(n,e))]:e}function yr(n,e){return n?Mt(Object.create(null),n,e):e}function Hc(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Mt(Object.create(null),kc(n),kc(e??{})):e}function Bp(n,e){if(!n)return e;if(!e)return n;const t=Mt(Object.create(null),n);for(const i in e)t[i]=Ct(n[i],e[i]);return t}function th(){return{app:null,config:{isNativeTag:gf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zp=0;function Hp(n,e){return function(i,r=null){ke(i)||(i=Mt({},i)),r!=null&&!Qe(r)&&(r=null);const s=th(),a=new WeakSet,o=[];let c=!1;const l=s.app={_uid:zp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Em,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ke(u.install)?(a.add(u),u.install(l,...f)):ke(u)&&(a.add(u),u(l,...f))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,f){return f?(s.components[u]=f,l):s.components[u]},directive(u,f){return f?(s.directives[u]=f,l):s.directives[u]},mount(u,f,h){if(!c){const p=l._ceVNode||Fn(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),c=!0,l._container=u,u.__vue_app__=l,uc(p.component)}},onUnmount(u){o.push(u)},unmount(){c&&(on(o,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,f){return s.provides[u]=f,l},runWithContext(u){const f=tr;tr=l;try{return u()}finally{tr=f}}};return l}}let tr=null;const Vp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Pt(e)}Modifiers`]||n[`${oi(e)}Modifiers`];function Gp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||tt;let r=t;const s=e.startsWith("update:"),a=s&&Vp(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>st(u)?u.trim():u)),a.number&&(r=t.map(Ad)));let o,c=i[o=Eo(e)]||i[o=Eo(Pt(e))];!c&&s&&(c=i[o=Eo(oi(e))]),c&&on(c,n,6,r);const l=i[o+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,on(l,n,6,r)}}const Wp=new WeakMap;function nh(n,e,t=!1){const i=t?Wp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ke(n)){const c=l=>{const u=nh(l,e,!0);u&&(o=!0,Mt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!o?(Qe(n)&&i.set(n,null),null):(Fe(s)?s.forEach(c=>a[c]=null):Mt(a,s),Qe(n)&&i.set(n,a),a)}function eo(n,e){return!n||!Xs(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,oi(e))||$e(n,e))}function Vc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:c,render:l,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:g}=n,m=Us(n);let d,y;try{if(t.shapeFlag&4){const b=r||i,A=b;d=dn(l.call(A,b,u,f,p,h,v)),y=o}else{const b=e;d=dn(b.length>1?b(f,{attrs:o,slots:a,emit:c}):b(f,null)),y=e.props?o:qp(o)}}catch(b){Mi.length=0,Js(b,n,1),d=Fn(ri)}let S=d;if(y&&g!==!1){const b=Object.keys(y),{shapeFlag:A}=S;b.length&&A&7&&(s&&b.some(js)&&(y=Xp(y,s)),S=sr(S,y,!1,!0))}return t.dirs&&(S=sr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&ac(S,t.transition),d=S,Us(m),d}const qp=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xs(t))&&((e||(e={}))[t]=n[t]);return e},Xp=(n,e)=>{const t={};for(const i in n)(!js(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function jp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Gc(i,a,l):!!a;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(ih(a,i,h)&&!eo(l,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Gc(i,a,l):!0:!!a;return!1}function Gc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(ih(e,n,s)&&!eo(t,s))return!0}return!1}function ih(n,e,t){const i=n[t],r=e[t];return t==="style"&&Qe(i)&&Qe(r)?!Ja(i,r):i!==r}function $p({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const rh={},sh=()=>Object.create(rh),oh=n=>Object.getPrototypeOf(n)===rh;function Yp(n,e,t,i=!1){const r={},s=sh();n.propsDefaults=Object.create(null),ah(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Qd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Kp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ke(r),[c]=n.propsOptions;let l=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(eo(n.emitsOptions,h))continue;const p=e[h];if(c)if($e(s,h))p!==s[h]&&(s[h]=p,l=!0);else{const v=Pt(h);r[v]=Ua(c,o,v,p,n,!1)}else p!==s[h]&&(s[h]=p,l=!0)}}}else{ah(n,e,r,s)&&(l=!0);let u;for(const f in o)(!e||!$e(e,f)&&((u=oi(f))===f||!$e(e,u)))&&(c?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ua(c,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!$e(e,f))&&(delete s[f],l=!0)}l&&Dn(n.attrs,"set","")}function ah(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let c in e){if(Ar(c))continue;const l=e[c];let u;r&&$e(r,u=Pt(c))?!s||!s.includes(u)?t[u]=l:(o||(o={}))[u]=l:eo(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,a=!0)}if(s){const c=Ke(t),l=o||tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ua(r,c,f,l[f],n,!$e(l,f))}}return a}function Ua(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=$e(a,"default");if(o&&i===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ke(c)){const{propsDefaults:l}=r;if(t in l)i=l[t];else{const u=Gr(r);i=l[t]=c.call(null,e),u()}}else i=c;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===oi(t))&&(i=!0))}return i}const Zp=new WeakMap;function ch(n,e,t=!1){const i=t?Zp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let c=!1;if(!ke(n)){const u=f=>{c=!0;const[h,p]=ch(f,e,!0);Mt(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return Qe(n)&&i.set(n,Ji),Ji;if(Fe(s))for(let u=0;u<s.length;u++){const f=Pt(s[u]);Wc(f)&&(a[f]=tt)}else if(s)for(const u in s){const f=Pt(u);if(Wc(f)){const h=s[u],p=a[f]=Fe(h)||ke(h)?{type:h}:Mt({},h),v=p.type;let g=!1,m=!0;if(Fe(v))for(let d=0;d<v.length;++d){const y=v[d],S=ke(y)&&y.name;if(S==="Boolean"){g=!0;break}else S==="String"&&(m=!1)}else g=ke(v)&&v.name==="Boolean";p[0]=g,p[1]=m,(g||$e(p,"default"))&&o.push(f)}}const l=[a,o];return Qe(n)&&i.set(n,l),l}function Wc(n){return n[0]!=="$"&&!Ar(n)}const cc=n=>n==="_"||n==="_ctx"||n==="$stable",lc=n=>Fe(n)?n.map(dn):[dn(n)],Jp=(n,e,t)=>{if(e._n)return e;const i=fp((...r)=>lc(e(...r)),t);return i._c=!1,i},lh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(cc(r))continue;const s=n[r];if(ke(s))e[r]=Jp(r,s,i);else if(s!=null){const a=lc(s);e[r]=()=>a}}},uh=(n,e)=>{const t=lc(e);n.slots.default=()=>t},fh=(n,e,t)=>{for(const i in e)(t||!cc(i))&&(n[i]=e[i])},Qp=(n,e,t)=>{const i=n.slots=sh();if(n.vnode.shapeFlag&32){const r=e._;r?(fh(i,e,t),t&&Ef(i,"_",r,!0)):lh(e,i)}else e&&uh(n,e)},em=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=tt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:fh(r,e,t):(s=!e.$stable,lh(e,r)),a=e}else e&&(uh(n,e),a={default:1});if(s)for(const o in r)!cc(o)&&a[o]==null&&delete r[o]},Ft=sm;function tm(n){return nm(n)}function nm(n,e){const t=Ks();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=mn,insertStaticContent:v}=n,g=(_,P,F,q=null,G=null,j=null,ie=void 0,J=null,re=!!P.dynamicChildren)=>{if(_===P)return;_&&!_r(_,P)&&(q=De(_),W(_,G,j,!0),_=null),P.patchFlag===-2&&(re=!1,P.dynamicChildren=null);const{type:K,ref:xe,shapeFlag:E}=P;switch(K){case to:m(_,P,F,q);break;case ri:d(_,P,F,q);break;case Do:_==null&&y(P,F,q,ie);break;case hn:ne(_,P,F,q,G,j,ie,J,re);break;default:E&1?A(_,P,F,q,G,j,ie,J,re):E&6?ae(_,P,F,q,G,j,ie,J,re):(E&64||E&128)&&K.process(_,P,F,q,G,j,ie,J,re,ct)}xe!=null&&G?Rr(xe,_&&_.ref,j,P||_,!P):xe==null&&_&&_.ref!=null&&Rr(_.ref,null,j,_,!0)},m=(_,P,F,q)=>{if(_==null)i(P.el=o(P.children),F,q);else{const G=P.el=_.el;P.children!==_.children&&l(G,P.children)}},d=(_,P,F,q)=>{_==null?i(P.el=c(P.children||""),F,q):P.el=_.el},y=(_,P,F,q)=>{[_.el,_.anchor]=v(_.children,P,F,q,_.el,_.anchor)},S=({el:_,anchor:P},F,q)=>{let G;for(;_&&_!==P;)G=h(_),i(_,F,q),_=G;i(P,F,q)},b=({el:_,anchor:P})=>{let F;for(;_&&_!==P;)F=h(_),r(_),_=F;r(P)},A=(_,P,F,q,G,j,ie,J,re)=>{if(P.type==="svg"?ie="svg":P.type==="math"&&(ie="mathml"),_==null)C(P,F,q,G,j,ie,J,re);else{const K=_.el&&_.el._isVueCE?_.el:null;try{K&&K._beginPatch(),M(_,P,G,j,ie,J,re)}finally{K&&K._endPatch()}}},C=(_,P,F,q,G,j,ie,J)=>{let re,K;const{props:xe,shapeFlag:E,transition:x,dirs:U}=_;if(re=_.el=a(_.type,j,xe&&xe.is,xe),E&8?u(re,_.children):E&16&&O(_.children,re,null,q,G,Lo(_,j),ie,J),U&&li(_,null,q,"created"),R(re,_,_.scopeId,ie,q),xe){for(const Z in xe)Z!=="value"&&!Ar(Z)&&s(re,Z,null,xe[Z],j,q);"value"in xe&&s(re,"value",null,xe.value,j),(K=xe.onVnodeBeforeMount)&&ln(K,q,_)}U&&li(_,null,q,"beforeMount");const Q=im(G,x);Q&&x.beforeEnter(re),i(re,P,F),((K=xe&&xe.onVnodeMounted)||Q||U)&&Ft(()=>{try{K&&ln(K,q,_),Q&&x.enter(re),U&&li(_,null,q,"mounted")}finally{}},G)},R=(_,P,F,q,G)=>{if(F&&p(_,F),q)for(let j=0;j<q.length;j++)p(_,q[j]);if(G){let j=G.subTree;if(P===j||mh(j.type)&&(j.ssContent===P||j.ssFallback===P)){const ie=G.vnode;R(_,ie,ie.scopeId,ie.slotScopeIds,G.parent)}}},O=(_,P,F,q,G,j,ie,J,re=0)=>{for(let K=re;K<_.length;K++){const xe=_[K]=J?Rn(_[K]):dn(_[K]);g(null,xe,P,F,q,G,j,ie,J)}},M=(_,P,F,q,G,j,ie)=>{const J=P.el=_.el;let{patchFlag:re,dynamicChildren:K,dirs:xe}=P;re|=_.patchFlag&16;const E=_.props||tt,x=P.props||tt;let U;if(F&&ui(F,!1),(U=x.onVnodeBeforeUpdate)&&ln(U,F,P,_),xe&&li(P,_,F,"beforeUpdate"),F&&ui(F,!0),K&&(!_.dynamicChildren||_.dynamicChildren.length!==K.length)&&(re=0,ie=!1,K=null),(E.innerHTML&&x.innerHTML==null||E.textContent&&x.textContent==null)&&u(J,""),K?w(_.dynamicChildren,K,J,F,q,Lo(P,G),j):ie||ee(_,P,J,null,F,q,Lo(P,G),j,!1),re>0){if(re&16)X(J,E,x,F,G);else if(re&2&&E.class!==x.class&&s(J,"class",null,x.class,G),re&4&&s(J,"style",E.style,x.style,G),re&8){const Q=P.dynamicProps;for(let Z=0;Z<Q.length;Z++){const te=Q[Z],me=E[te],ce=x[te];(ce!==me||te==="value")&&s(J,te,me,ce,G,F)}}re&1&&_.children!==P.children&&u(J,P.children)}else!ie&&K==null&&X(J,E,x,F,G);((U=x.onVnodeUpdated)||xe)&&Ft(()=>{U&&ln(U,F,P,_),xe&&li(P,_,F,"updated")},q)},w=(_,P,F,q,G,j,ie)=>{for(let J=0;J<P.length;J++){const re=_[J],K=P[J],xe=re.el&&(re.type===hn||!_r(re,K)||re.shapeFlag&198)?f(re.el):F;g(re,K,xe,null,q,G,j,ie,!0)}},X=(_,P,F,q,G)=>{if(P!==F){if(P!==tt)for(const j in P)!Ar(j)&&!(j in F)&&s(_,j,P[j],null,G,q);for(const j in F){if(Ar(j))continue;const ie=F[j],J=P[j];ie!==J&&j!=="value"&&s(_,j,J,ie,G,q)}"value"in F&&s(_,"value",P.value,F.value,G)}},ne=(_,P,F,q,G,j,ie,J,re)=>{const K=P.el=_?_.el:o(""),xe=P.anchor=_?_.anchor:o("");let{patchFlag:E,dynamicChildren:x,slotScopeIds:U}=P;U&&(J=J?J.concat(U):U),_==null?(i(K,F,q),i(xe,F,q),O(P.children||[],F,xe,G,j,ie,J,re)):E>0&&E&64&&x&&_.dynamicChildren&&_.dynamicChildren.length===x.length?(w(_.dynamicChildren,x,F,G,j,ie,J),(P.key!=null||G&&P===G.subTree)&&hh(_,P,!0)):ee(_,P,F,xe,G,j,ie,J,re)},ae=(_,P,F,q,G,j,ie,J,re)=>{P.slotScopeIds=J,_==null?P.shapeFlag&512?G.ctx.activate(P,F,q,ie,re):L(P,F,q,G,j,ie,re):k(_,P,re)},L=(_,P,F,q,G,j,ie)=>{const J=_.component=hm(_,q,G);if(Yf(_)&&(J.ctx.renderer=ct),pm(J,!1,ie),J.asyncDep){if(G&&G.registerDep(J,I,ie),!_.el){const re=J.subTree=Fn(ri);d(null,re,P,F),_.placeholder=re.el}}else I(J,_,P,F,G,j,ie)},k=(_,P,F)=>{const q=P.component=_.component;if(jp(_,P,F))if(q.asyncDep&&!q.asyncResolved){V(q,P,F);return}else q.next=P,q.update();else P.el=_.el,q.vnode=P},I=(_,P,F,q,G,j,ie)=>{const J=()=>{if(_.isMounted){let{next:E,bu:x,u:U,parent:Q,vnode:Z}=_;{const ye=dh(_);if(ye){E&&(E.el=Z.el,V(_,E,ie)),ye.asyncDep.then(()=>{Ft(()=>{_.isUnmounted||K()},G)});return}}let te=E,me;ui(_,!1),E?(E.el=Z.el,V(_,E,ie)):E=Z,x&&bo(x),(me=E.props&&E.props.onVnodeBeforeUpdate)&&ln(me,Q,E,Z),ui(_,!0);const ce=Vc(_),de=_.subTree;_.subTree=ce,g(de,ce,f(de.el),De(de),_,G,j),E.el=ce.el,te===null&&$p(_,ce.el),U&&Ft(U,G),(me=E.props&&E.props.onVnodeUpdated)&&Ft(()=>ln(me,Q,E,Z),G)}else{let E;const{el:x,props:U}=P,{bm:Q,m:Z,parent:te,root:me,type:ce}=_,de=Lr(P);ui(_,!1),Q&&bo(Q),!de&&(E=U&&U.onVnodeBeforeMount)&&ln(E,te,P),ui(_,!0);{me.ce&&me.ce._hasShadowRoot()&&me.ce._injectChildStyle(ce,_.parent?_.parent.type:void 0);const ye=_.subTree=Vc(_);g(null,ye,F,q,_,G,j),P.el=ye.el}if(Z&&Ft(Z,G),!de&&(E=U&&U.onVnodeMounted)){const ye=P;Ft(()=>ln(E,te,ye),G)}(P.shapeFlag&256||te&&Lr(te.vnode)&&te.vnode.shapeFlag&256)&&_.a&&Ft(_.a,G),_.isMounted=!0,P=F=q=null}};_.scope.on();const re=_.effect=new Tf(J);_.scope.off();const K=_.update=re.run.bind(re),xe=_.job=re.runIfDirty.bind(re);xe.i=_,xe.id=_.uid,re.scheduler=()=>oc(xe),ui(_,!0),K()},V=(_,P,F)=>{P.component=_;const q=_.vnode.props;_.vnode=P,_.next=null,Kp(_,P.props,q,F),em(_,P.children,F),On(),Ic(_),kn()},ee=(_,P,F,q,G,j,ie,J,re=!1)=>{const K=_&&_.children,xe=_?_.shapeFlag:0,E=P.children,{patchFlag:x,shapeFlag:U}=P;if(x>0){if(x&128){oe(K,E,F,q,G,j,ie,J,re);return}else if(x&256){se(K,E,F,q,G,j,ie,J,re);return}}U&8?(xe&16&&Te(K,G,j),E!==K&&u(F,E)):xe&16?U&16?oe(K,E,F,q,G,j,ie,J,re):Te(K,G,j,!0):(xe&8&&u(F,""),U&16&&O(E,F,q,G,j,ie,J,re))},se=(_,P,F,q,G,j,ie,J,re)=>{_=_||Ji,P=P||Ji;const K=_.length,xe=P.length,E=Math.min(K,xe);let x;for(x=0;x<E;x++){const U=P[x]=re?Rn(P[x]):dn(P[x]);g(_[x],U,F,null,G,j,ie,J,re)}K>xe?Te(_,G,j,!0,!1,E):O(P,F,q,G,j,ie,J,re,E)},oe=(_,P,F,q,G,j,ie,J,re)=>{let K=0;const xe=P.length;let E=_.length-1,x=xe-1;for(;K<=E&&K<=x;){const U=_[K],Q=P[K]=re?Rn(P[K]):dn(P[K]);if(_r(U,Q))g(U,Q,F,null,G,j,ie,J,re);else break;K++}for(;K<=E&&K<=x;){const U=_[E],Q=P[x]=re?Rn(P[x]):dn(P[x]);if(_r(U,Q))g(U,Q,F,null,G,j,ie,J,re);else break;E--,x--}if(K>E){if(K<=x){const U=x+1,Q=U<xe?P[U].el:q;for(;K<=x;)g(null,P[K]=re?Rn(P[K]):dn(P[K]),F,Q,G,j,ie,J,re),K++}}else if(K>x)for(;K<=E;)W(_[K],G,j,!0),K++;else{const U=K,Q=K,Z=new Map;for(K=Q;K<=x;K++){const Ne=P[K]=re?Rn(P[K]):dn(P[K]);Ne.key!=null&&Z.set(Ne.key,K)}let te,me=0;const ce=x-Q+1;let de=!1,ye=0;const Ge=new Array(ce);for(K=0;K<ce;K++)Ge[K]=0;for(K=U;K<=E;K++){const Ne=_[K];if(me>=ce){W(Ne,G,j,!0);continue}let Ae;if(Ne.key!=null)Ae=Z.get(Ne.key);else for(te=Q;te<=x;te++)if(Ge[te-Q]===0&&_r(Ne,P[te])){Ae=te;break}Ae===void 0?W(Ne,G,j,!0):(Ge[Ae-Q]=K+1,Ae>=ye?ye=Ae:de=!0,g(Ne,P[Ae],F,null,G,j,ie,J,re),me++)}const ue=de?rm(Ge):Ji;for(te=ue.length-1,K=ce-1;K>=0;K--){const Ne=Q+K,Ae=P[Ne],Le=P[Ne+1],we=Ne+1<xe?Le.el||ph(Le):q;Ge[K]===0?g(null,Ae,F,we,G,j,ie,J,re):de&&(te<0||K!==ue[te]?N(Ae,F,we,2):te--)}}},N=(_,P,F,q,G=null)=>{const{el:j,type:ie,transition:J,children:re,shapeFlag:K}=_;if(K&6){N(_.component.subTree,P,F,q);return}if(K&128){_.suspense.move(P,F,q);return}if(K&64){ie.move(_,P,F,ct);return}if(ie===hn){i(j,P,F);for(let E=0;E<re.length;E++)N(re[E],P,F,q);i(_.anchor,P,F);return}if(ie===Do){S(_,P,F);return}if(q!==2&&K&1&&J)if(q===0)J.persisted&&!j[Co]?i(j,P,F):(J.beforeEnter(j),i(j,P,F),Ft(()=>J.enter(j),G));else{const{leave:E,delayLeave:x,afterLeave:U}=J,Q=()=>{_.ctx.isUnmounted?r(j):i(j,P,F)},Z=()=>{const te=j._isLeaving||!!j[Co];j._isLeaving&&j[Co](!0),J.persisted&&!te?Q():E(j,()=>{Q(),U&&U()})};x?x(j,Q,Z):Z()}else i(j,P,F)},W=(_,P,F,q=!1,G=!1)=>{const{type:j,props:ie,ref:J,children:re,dynamicChildren:K,shapeFlag:xe,patchFlag:E,dirs:x,cacheIndex:U,memo:Q}=_;if(E===-2&&(G=!1),J!=null&&(On(),Rr(J,null,F,_,!0),kn()),U!=null&&(P.renderCache[U]=void 0),xe&256){P.ctx.deactivate(_);return}const Z=xe&1&&x,te=!Lr(_);let me;if(te&&(me=ie&&ie.onVnodeBeforeUnmount)&&ln(me,P,_),xe&6)Ee(_.component,F,q);else{if(xe&128){_.suspense.unmount(F,q);return}Z&&li(_,null,P,"beforeUnmount"),xe&64?_.type.remove(_,P,F,ct,q):K&&!K.hasOnce&&(j!==hn||E>0&&E&64)?Te(K,P,F,!1,!0):(j===hn&&E&384||!G&&xe&16)&&Te(re,P,F),q&&ge(_)}const ce=Q!=null&&U==null;(te&&(me=ie&&ie.onVnodeUnmounted)||Z||ce)&&Ft(()=>{me&&ln(me,P,_),Z&&li(_,null,P,"unmounted"),ce&&(_.el=null)},F)},ge=_=>{const{type:P,el:F,anchor:q,transition:G}=_;if(P===hn){ve(F,q);return}if(P===Do){b(_);return}const j=()=>{r(F),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(_.shapeFlag&1&&G&&!G.persisted){const{leave:ie,delayLeave:J}=G,re=()=>ie(F,j);J?J(_.el,j,re):re()}else j()},ve=(_,P)=>{let F;for(;_!==P;)F=h(_),r(_),_=F;r(P)},Ee=(_,P,F)=>{const{bum:q,scope:G,job:j,subTree:ie,um:J,m:re,a:K}=_;qc(re),qc(K),q&&bo(q),G.stop(),j&&(j.flags|=8,W(ie,_,P,F)),J&&Ft(J,P),Ft(()=>{_.isUnmounted=!0},P)},Te=(_,P,F,q=!1,G=!1,j=0)=>{for(let ie=j;ie<_.length;ie++)W(_[ie],P,F,q,G)},De=_=>{if(_.shapeFlag&6)return De(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const P=h(_.anchor||_.el),F=P&&P[gp];return F?h(F):P};let Ce=!1;const Xe=(_,P,F)=>{let q;_==null?P._vnode&&(W(P._vnode,null,null,!0),q=P._vnode.component):g(P._vnode||null,_,P,null,null,null,F),P._vnode=_,Ce||(Ce=!0,Ic(q),Gf(),Ce=!1)},ct={p:g,um:W,m:N,r:ge,mt:L,mc:O,pc:ee,pbc:w,n:De,o:n};return{render:Xe,hydrate:void 0,createApp:Hp(Xe)}}function Lo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ui({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function im(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function hh(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Rn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&hh(a,o)),o.type===to&&(o.patchFlag===-1&&(o=r[s]=Rn(o)),o.el=a.el),o.type===ri&&!o.el&&(o.el=a.el)}}function rm(n){const e=n.slice(),t=[0];let i,r,s,a,o;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<l?s=o+1:a=o;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function dh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dh(e)}function qc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function ph(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?ph(e.subTree):null}const mh=n=>n.__isSuspense;function sm(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):up(n)}const hn=Symbol.for("v-fgt"),to=Symbol.for("v-txt"),ri=Symbol.for("v-cmt"),Do=Symbol.for("v-stc"),Mi=[];let Ht=null;function Pn(n=!1){Mi.push(Ht=n?null:[])}function gh(){Mi.pop(),Ht=Mi[Mi.length-1]||null}let Or=1;function Xc(n,e=!1){Or+=n,n<0&&Ht&&e&&(Ht.hasOnce=!0)}function _h(n){return n.dynamicChildren=Or>0?Ht||Ji:null,gh(),Or>0&&Ht&&Ht.push(n),n}function xi(n,e,t,i,r,s){return _h(rt(n,e,t,i,r,s,!0))}function vh(n,e,t,i,r){return _h(Fn(n,e,t,i,r,!0))}function xh(n){return n?n.__v_isVNode===!0:!1}function _r(n,e){return n.type===e.type&&n.key===e.key}const Sh=({key:n})=>n??null,Rs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?st(n)||Ut(n)||ke(n)?{i:tn,r:n,k:e,f:!!t}:n:null);function rt(n,e=null,t=null,i=0,r=null,s=n===hn?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Sh(e),ref:e&&Rs(e),scopeId:qf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tn};return o?(Ns(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=st(t)?8:16),Or>0&&!a&&Ht&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ht.push(c),c}const Fn=om;function om(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Jf)&&(n=ri),xh(n)){const o=sr(n,e,!0);return t&&Ns(o,t),Or>0&&!s&&Ht&&(o.shapeFlag&6?Ht[Ht.indexOf(n)]=o:Ht.push(o)),o.patchFlag=-2,o}if(xm(n)&&(n=n.__vccOpts),e){e=am(e);let{class:o,style:c}=e;o&&!st(o)&&(e.class=Za(o)),Qe(c)&&(sc(c)&&!Fe(c)&&(c=Mt({},c)),e.style=Ka(c))}const a=st(n)?1:mh(n)?128:_p(n)?64:Qe(n)?4:ke(n)?2:0;return rt(n,e,t,i,r,a,s,!0)}function am(n){return n?sc(n)||oh(n)?Mt({},n):n:null}function sr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:c}=n,l=e?lm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Sh(l),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Rs(e)):[s,Rs(e)]:Rs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==hn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&sr(n.ssContent),ssFallback:n.ssFallback&&sr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&ac(u,c.clone(u)),u}function cm(n=" ",e=0){return Fn(to,null,n,e)}function jc(n="",e=!1){return e?(Pn(),vh(ri,null,n)):Fn(ri,null,n)}function dn(n){return n==null||typeof n=="boolean"?Fn(ri):Fe(n)?Fn(hn,null,n.slice()):xh(n)?Rn(n):Fn(to,null,String(n))}function Rn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:sr(n)}function Ns(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ns(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!oh(e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ke(e)){if(i&65){Ns(n,{default:e});return}e={default:e,_ctx:tn},t=32}else e=String(e),i&64?(t=16,e=[cm(e)]):t=8;n.children=e,n.shapeFlag|=t}function lm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Za([e.class,i.class]));else if(r==="style")e.style=Ka([e.style,i.style]);else if(Xs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Fe(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!js(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function ln(n,e,t,i=null){on(n,e,7,[t,i])}const um=th();let fm=0;function hm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||um,s={uid:fm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ch(i,r),emitsOptions:nh(i,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gp.bind(null,s),n.ce&&n.ce(s),s}let yt=null;const dm=()=>yt||tn;let Os,Ia;{const n=Ks(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Os=e("__VUE_INSTANCE_SETTERS__",t=>yt=t),Ia=e("__VUE_SSR_SETTERS__",t=>kr=t)}const Gr=n=>{const e=yt;return Os(n),n.scope.on(),()=>{n.scope.off(),Os(e)}},$c=()=>{yt&&yt.scope.off(),Os(null)};function Eh(n){return n.vnode.shapeFlag&4}let kr=!1;function pm(n,e=!1,t=!1){e&&Ia(e);const{props:i,children:r}=n.vnode,s=Eh(n);Yp(n,i,s,e),Qp(n,r,t||e);const a=s?mm(n,e):void 0;return e&&Ia(!1),a}function mm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ip);const{setup:i}=t;if(i){On();const r=n.setupContext=i.length>1?_m(n):null,s=Gr(n),a=Vr(i,n,0,[n.props,r]),o=vf(a);if(kn(),s(),(o||n.sp)&&!Lr(n)&&$f(n),o){if(a.then($c,$c),e)return a.then(c=>{Yc(n,c)}).catch(c=>{Js(c,n,0)});n.asyncDep=a}else Yc(n,a)}else bh(n)}function Yc(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Qe(e)&&(n.setupState=zf(e)),bh(n)}function bh(n,e,t){const i=n.type;n.render||(n.render=i.render||mn);{const r=Gr(n);On();try{Fp(n)}finally{kn(),r()}}}const gm={get(n,e){return bt(n,"get",""),n[e]}};function _m(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,gm),slots:n.slots,emit:n.emit,expose:e}}function uc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(zf(ep(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Dr)return Dr[t](n)},has(e,t){return t in e||t in Dr}})):n.proxy}function vm(n,e=!0){return ke(n)?n.displayName||n.name:n.name||e&&n.__name}function xm(n){return ke(n)&&"__vccOpts"in n}const Sm=(n,e)=>rp(n,e,kr),Em="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fa;const Kc=typeof window<"u"&&window.trustedTypes;if(Kc)try{Fa=Kc.createPolicy("vue",{createHTML:n=>n})}catch{}const yh=Fa?n=>Fa.createHTML(n):n=>n,bm="http://www.w3.org/2000/svg",ym="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,Zc=Cn&&Cn.createElement("template"),Mm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Cn.createElementNS(bm,n):e==="mathml"?Cn.createElementNS(ym,n):t?Cn.createElement(n,{is:t}):Cn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Cn.createTextNode(n),createComment:n=>Cn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Cn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Zc.innerHTML=yh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Zc.content;if(i==="svg"||i==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Tm=Symbol("_vtc");function Am(n,e,t){const i=n[Tm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Jc=Symbol("_vod"),wm=Symbol("_vsh"),Cm=Symbol(""),Rm=/(?:^|;)\s*display\s*:/;function Lm(n,e,t){const i=n.style,r=st(t);let s=!1;if(t&&!r){if(e)if(st(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Mr(i,o,"")}else for(const a in e)t[a]==null&&Mr(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?Pm(n,a,!st(e)&&e?e[a]:void 0,o)||Mr(i,a,o):Mr(i,a,"")}}else if(r){if(e!==t){const a=i[Cm];a&&(t+=";"+a),i.cssText=t,s=Rm.test(t)}}else e&&n.removeAttribute("style");Jc in n&&(n[Jc]=s?i.display:"",n[wm]&&(i.display="none"))}const Qc=/\s*!important$/;function Mr(n,e,t){if(Fe(t))t.forEach(i=>Mr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Dm(n,e);Qc.test(t)?n.setProperty(oi(i),t.replace(Qc,""),"important"):n[i]=t}}const el=["Webkit","Moz","ms"],Po={};function Dm(n,e){const t=Po[e];if(t)return t;let i=Pt(e);if(i!=="filter"&&i in n)return Po[e]=i;i=Ys(i);for(let r=0;r<el.length;r++){const s=el[r]+i;if(s in n)return Po[e]=s}return e}function Pm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&st(i)&&t===i}const tl="http://www.w3.org/1999/xlink";function nl(n,e,t,i,r,s=Pd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(tl,e.slice(6,e.length)):n.setAttributeNS(tl,e,t):t==null||s&&!bf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":gn(t)?String(t):t)}function il(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?yh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(o!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=bf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Um(n,e,t,i){n.addEventListener(e,t,i)}function Im(n,e,t,i){n.removeEventListener(e,t,i)}const rl=Symbol("_vei");function Fm(n,e,t,i,r=null){const s=n[rl]||(n[rl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,c]=km(e);if(i){const l=s[e]=Hm(i,r);Um(n,o,l,c)}else a&&(Im(n,o,a,c),s[e]=void 0)}}const Nm=/(Once|Passive|Capture)$/,Om=/^on:?(?:Once|Passive|Capture)$/;function km(n){let e,t;for(;(t=n.match(Nm))&&!Om.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):oi(n.slice(2)),e]}let Uo=0;const Bm=Promise.resolve(),zm=()=>Uo||(Bm.then(()=>Uo=0),Uo=Date.now());function Hm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Fe(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let c=0;c<a.length&&!i._stopped;c++){const l=a[c];l&&on(l,e,5,o)}}else on(r,e,5,[i])};return t.value=n,t.attached=zm(),t}const sl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Vm=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Am(n,i,a):e==="style"?Lm(n,t,i):Xs(e)?js(e)||Fm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gm(n,e,i,a))?(il(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&nl(n,e,i,a,s,e!=="value")):n._isVueCE&&(Wm(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!st(i)))?il(n,Pt(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),nl(n,e,i,a))};function Gm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&sl(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return sl(e)&&st(t)?!1:e in n}function Wm(n,e){const t=n._def.props;if(!t)return!1;const i=Pt(e);return Array.isArray(t)?t.some(r=>Pt(r)===i):Object.keys(t).some(r=>Pt(r)===i)}const qm=["ctrl","shift","alt","meta"],Xm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>qm.some(t=>n[`${t}Key`]&&!e.includes(t))},ks=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=Xm[e[a]];if(o&&o(r,e))return}return n(r,...s)})},jm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$m=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=oi(r.key);if(e.some(a=>a===s||jm[a]===s))return n(r)})},Ym=Mt({patchProp:Vm},Mm);let ol;function Km(){return ol||(ol=tm(Ym))}const Zm=(...n)=>{const e=Km().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Qm(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Jm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Jm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Qm(n){return st(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="157",eg=0,al=1,tg=2,Mh=1,ng=2,wn=3,si=0,Ot=1,Un=2,ei=0,nr=1,cl=2,ll=3,ul=4,ig=5,Ki=100,rg=101,sg=102,fl=103,hl=104,og=200,ag=201,cg=202,lg=203,Th=204,Ah=205,ug=206,fg=207,hg=208,dg=209,pg=210,mg=0,gg=1,_g=2,Na=3,vg=4,xg=5,Sg=6,Eg=7,wh=0,bg=1,yg=2,ti=0,Mg=1,Tg=2,Ag=3,wg=4,Cg=5,Ch=300,or=301,ar=302,Oa=303,ka=304,no=306,Ba=1e3,Qt=1001,za=1002,Lt=1003,dl=1004,Io=1005,Xt=1006,Rg=1007,Br=1008,ni=1009,Lg=1010,Dg=1011,hc=1012,Rh=1013,Zn=1014,Jn=1015,zr=1016,Lh=1017,Dh=1018,Ti=1020,Pg=1021,en=1023,Ug=1024,Ig=1025,Ai=1026,cr=1027,Fg=1028,Ph=1029,Ng=1030,Uh=1031,Ih=1033,Fo=33776,No=33777,Oo=33778,ko=33779,pl=35840,ml=35841,gl=35842,_l=35843,Og=36196,vl=37492,xl=37496,Sl=37808,El=37809,bl=37810,yl=37811,Ml=37812,Tl=37813,Al=37814,wl=37815,Cl=37816,Rl=37817,Ll=37818,Dl=37819,Pl=37820,Ul=37821,Bo=36492,Il=36494,Fl=36495,kg=36283,Nl=36284,Ol=36285,kl=36286,Fh=3e3,wi=3001,Bg=3200,zg=3201,Hg=0,Vg=1,$t="",vt="srgb",zn="srgb-linear",dc="display-p3",io="display-p3-linear",Bs="linear",it="srgb",zs="rec709",Hs="p3",zo=7680,Gg=519,Wg=512,qg=513,Xg=514,jg=515,$g=516,Yg=517,Kg=518,Zg=519,Bl=35044,zl="300 es",Ha=1035,In=2e3,Vs=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ho=Math.PI/180,Va=180/Math.PI;function Wr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function Jg(n,e){return(n%e+e)%e}function Vo(n,e,t){return(1-t)*n+t*e}function Hl(n){return(n&n-1)===0&&n!==0}function Ga(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,a,o,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],g=r[0],m=r[3],d=r[6],y=r[1],S=r[4],b=r[7],A=r[2],C=r[5],R=r[8];return s[0]=a*g+o*y+c*A,s[3]=a*m+o*S+c*C,s[6]=a*d+o*b+c*R,s[1]=l*g+u*y+f*A,s[4]=l*m+u*S+f*C,s[7]=l*d+u*b+f*R,s[2]=h*g+p*y+v*A,s[5]=h*m+p*S+v*C,s[8]=h*d+p*b+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,p=l*s-a*c,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*l-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=h*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(i*c-l*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Ve;function Nh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qg(){const n=Gs("canvas");return n.style.display="block",n}const Vl={};function Pr(n){n in Vl||(Vl[n]=!0,console.warn(n))}const Gl=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[zn]:{transfer:Bs,primaries:zs,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:it,primaries:zs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[io]:{transfer:Bs,primaries:Hs,toReference:n=>n.applyMatrix3(Wl),fromReference:n=>n.applyMatrix3(Gl)},[dc]:{transfer:it,primaries:Hs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Wl),fromReference:n=>n.applyMatrix3(Gl).convertLinearToSRGB()}},e_=new Set([zn,io]),Ze={enabled:!0,_workingColorSpace:zn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!e_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ns[e].toReference,r=ns[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ns[n].primaries},getTransfer:function(n){return n===$t?Bs:ns[n].transfer}};function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class Oh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=Gs("canvas")),Pi.width=e.width,Pi.height=e.height;const i=Pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ir(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ir(t[i]/255)*255):t[i]=ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t_=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Wr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qo(r[a].image)):s.push(qo(r[a]))}else s=qo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n_=0;class Vt extends ur{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Qt,r=Qt,s=Xt,a=Br,o=en,c=ni,l=Vt.DEFAULT_ANISOTROPY,u=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Wr(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===wi?vt:$t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?wi:Fh}set encoding(e){Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wi?vt:$t}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Ch;Vt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],v=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,b=(p+1)/2,A=(d+1)/2,C=(u+h)/4,R=(f+g)/4,O=(v+m)/4;return S>b&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=R/i):b>A?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=C/r,s=O/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=O/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-g)/y,this.z=(h-u)/y,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i_ extends ur{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wi?vt:$t),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends i_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bh extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class r_ extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(f!==g||c!==h||l!==p||u!==v){let m=1-o;const d=c*h+l*p+u*v+f*g,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const A=Math.sqrt(S),C=Math.atan2(A,d*y);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}const b=o*y;if(c=c*m+h*b,l=l*m+p*b,u=u*m+v*b,f=f*m+g*b,m===1-o){const A=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=A,l*=A,u*=A,f*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*f+c*p-l*h,e[t+1]=c*v+u*h+l*f-o*p,e[t+2]=l*v+u*p+o*h-c*f,e[t+3]=u*v-o*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),h=c(i/2),p=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*p*v,this._y=l*p*f-h*u*v,this._z=l*u*v+h*p*f,this._w=l*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+l*p*v,this._y=l*p*f-h*u*v,this._z=l*u*v-h*p*f,this._w=l*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-l*p*v,this._y=l*p*f+h*u*v,this._z=l*u*v+h*p*f,this._w=l*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-l*p*v,this._y=l*p*f+h*u*v,this._z=l*u*v-h*p*f,this._w=l*u*f+h*p*v;break;case"YZX":this._x=h*u*f+l*p*v,this._y=l*p*f+h*u*v,this._z=l*u*v-h*p*f,this._w=l*u*f-h*p*v;break;case"XZY":this._x=h*u*f-l*p*v,this._y=l*p*f-h*u*v,this._z=l*u*v+h*p*f,this._w=l*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*r-o*i,u=c*i+o*t-s*r,f=c*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=l*c+h*-s+u*-o-f*-a,this.y=u*c+h*-a+f*-s-l*-o,this.z=f*c+h*-o+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new H,ql=new qr;class Xr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ui.copy(e.boundingBox),Ui.applyMatrix4(e.matrixWorld),this.union(Ui);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)bn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(bn)}else r.boundingBox===null&&r.computeBoundingBox(),Ui.copy(r.boundingBox),Ui.applyMatrix4(e.matrixWorld),this.union(Ui)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),is.subVectors(this.max,xr),Ii.subVectors(e.a,xr),Fi.subVectors(e.b,xr),Ni.subVectors(e.c,xr),Gn.subVectors(Fi,Ii),Wn.subVectors(Ni,Fi),fi.subVectors(Ii,Ni);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-fi.z,fi.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,fi.z,0,-fi.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-fi.y,fi.x,0];return!jo(t,Ii,Fi,Ni,is)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Ii,Fi,Ni,is))?!1:(rs.crossVectors(Gn,Wn),t=[rs.x,rs.y,rs.z],jo(t,Ii,Fi,Ni,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new H,new H,new H,new H,new H,new H,new H,new H],bn=new H,Ui=new Xr,Ii=new H,Fi=new H,Ni=new H,Gn=new H,Wn=new H,fi=new H,xr=new H,is=new H,rs=new H,hi=new H;function jo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){hi.fromArray(n,s);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const s_=new Xr,Sr=new H,$o=new H;class ro{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):s_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add($o)),this.expandByPoint(Sr.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new H,Yo=new H,ss=new H,qn=new H,Ko=new H,os=new H,Zo=new H;class zh{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yo.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Yo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ss),o=qn.dot(this.direction),c=-qn.dot(ss),l=qn.lengthSq(),u=Math.abs(1-a*a);let f,h,p,v;if(u>0)if(f=a*c-o,h=a*o-c,v=s*u,f>=0)if(h>=-v)if(h<=v){const g=1/u;f*=g,h*=g,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=v?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Yo).addScaledVector(ss,h),p}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){Ko.subVectors(t,e),os.subVectors(i,e),Zo.crossVectors(Ko,os);let a=this.direction.dot(Zo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const c=o*this.direction.dot(os.crossVectors(qn,os));if(c<0)return null;const l=o*this.direction.dot(Ko.cross(qn));if(l<0||c+l>a)return null;const u=-o*qn.dot(Zo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,a,o,c,l,u,f,h,p,v,g,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,h,p,v,g,m)}set(e,t,i,r,s,a,o,c,l,u,f,h,p,v,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Oi.setFromMatrixColumn(e,0).length(),s=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,v=o*u,g=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+v*l,t[5]=h-g*l,t[9]=-o*c,t[2]=g-h*l,t[6]=v+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*f,v=l*u,g=l*f;t[0]=h+g*o,t[4]=v*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=g+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*f,v=l*u,g=l*f;t[0]=h-g*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*f,v=o*u,g=o*f;t[0]=c*u,t[4]=v*l-p,t[8]=h*l+g,t[1]=c*f,t[5]=g*l+h,t[9]=p*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,v=o*c,g=o*l;t[0]=c*u,t[4]=g-h*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+v,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*c,p=a*l,v=o*c,g=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+g,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o_,e,a_)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Xn.crossVectors(i,Bt),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Xn.crossVectors(i,Bt)),Xn.normalize(),as.crossVectors(Bt,Xn),r[0]=Xn.x,r[4]=as.x,r[8]=Bt.x,r[1]=Xn.y,r[5]=as.y,r[9]=Bt.y,r[2]=Xn.z,r[6]=as.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],g=i[6],m=i[10],d=i[14],y=i[3],S=i[7],b=i[11],A=i[15],C=r[0],R=r[4],O=r[8],M=r[12],w=r[1],X=r[5],ne=r[9],ae=r[13],L=r[2],k=r[6],I=r[10],V=r[14],ee=r[3],se=r[7],oe=r[11],N=r[15];return s[0]=a*C+o*w+c*L+l*ee,s[4]=a*R+o*X+c*k+l*se,s[8]=a*O+o*ne+c*I+l*oe,s[12]=a*M+o*ae+c*V+l*N,s[1]=u*C+f*w+h*L+p*ee,s[5]=u*R+f*X+h*k+p*se,s[9]=u*O+f*ne+h*I+p*oe,s[13]=u*M+f*ae+h*V+p*N,s[2]=v*C+g*w+m*L+d*ee,s[6]=v*R+g*X+m*k+d*se,s[10]=v*O+g*ne+m*I+d*oe,s[14]=v*M+g*ae+m*V+d*N,s[3]=y*C+S*w+b*L+A*ee,s[7]=y*R+S*X+b*k+A*se,s[11]=y*O+S*ne+b*I+A*oe,s[15]=y*M+S*ae+b*V+A*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],g=e[7],m=e[11],d=e[15];return v*(+s*c*f-r*l*f-s*o*h+i*l*h+r*o*p-i*c*p)+g*(+t*c*p-t*l*h+s*a*h-r*a*p+r*l*u-s*c*u)+m*(+t*l*f-t*o*p-s*a*f+i*a*p+s*o*u-i*l*u)+d*(-r*o*u-t*c*f+t*o*h+r*a*f-i*a*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],g=e[13],m=e[14],d=e[15],y=f*m*l-g*h*l+g*c*p-o*m*p-f*c*d+o*h*d,S=v*h*l-u*m*l-v*c*p+a*m*p+u*c*d-a*h*d,b=u*g*l-v*f*l+v*o*p-a*g*p-u*o*d+a*f*d,A=v*f*c-u*g*c-v*o*h+a*g*h+u*o*m-a*f*m,C=t*y+i*S+r*b+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=y*R,e[1]=(g*h*s-f*m*s-g*r*p+i*m*p+f*r*d-i*h*d)*R,e[2]=(o*m*s-g*c*s+g*r*l-i*m*l-o*r*d+i*c*d)*R,e[3]=(f*c*s-o*h*s-f*r*l+i*h*l+o*r*p-i*c*p)*R,e[4]=S*R,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*d+t*h*d)*R,e[6]=(v*c*s-a*m*s-v*r*l+t*m*l+a*r*d-t*c*d)*R,e[7]=(a*h*s-u*c*s+u*r*l-t*h*l-a*r*p+t*c*p)*R,e[8]=b*R,e[9]=(v*f*s-u*g*s-v*i*p+t*g*p+u*i*d-t*f*d)*R,e[10]=(a*g*s-v*o*s+v*i*l-t*g*l-a*i*d+t*o*d)*R,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*p-t*o*p)*R,e[12]=A*R,e[13]=(u*g*r-v*f*r+v*i*h-t*g*h-u*i*m+t*f*m)*R,e[14]=(v*o*r-a*g*r-v*i*c+t*g*c+a*i*m-t*o*m)*R,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*h+t*o*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,p=s*u,v=s*f,g=a*u,m=a*f,d=o*f,y=c*l,S=c*u,b=c*f,A=i.x,C=i.y,R=i.z;return r[0]=(1-(g+d))*A,r[1]=(p+b)*A,r[2]=(v-S)*A,r[3]=0,r[4]=(p-b)*C,r[5]=(1-(h+d))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(v+S)*R,r[9]=(m-y)*R,r[10]=(1-(h+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Oi.set(r[0],r[1],r[2]).length();const a=Oi.set(r[4],r[5],r[6]).length(),o=Oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const l=1/s,u=1/a,f=1/o;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,t.setFromRotationMatrix(Kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=In){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(o===In)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Vs)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=In){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*l,p=(i+r)*u;let v,g;if(o===In)v=(a+s)*f,g=-2*f;else if(o===Vs)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Oi=new H,Kt=new ht,o_=new H(0,0,0),a_=new H(1,1,1),Xn=new H,as=new H,Bt=new H,Xl=new ht,jl=new qr;class so{constructor(e=0,t=0,i=0,r=so.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}so.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c_=0;const $l=new H,ki=new qr,Mn=new ht,cs=new H,Er=new H,l_=new H,u_=new qr,Yl=new H(1,0,0),Kl=new H(0,1,0),Zl=new H(0,0,1),f_={type:"added"},h_={type:"removed"};class xt extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new H,t=new so,i=new qr,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ve}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cs.copy(e):cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Er,cs,this.up):Mn.lookAt(cs,Er,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Mn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,u_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new H(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new H,Tn=new H,Jo=new H,An=new H,Bi=new H,zi=new H,Jl=new H,Qo=new H,ea=new H,ta=new H;let ls=!1;class Jt{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zt.subVectors(e,t),r.cross(Zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zt.subVectors(r,t),Tn.subVectors(i,t),Jo.subVectors(e,t);const a=Zt.dot(Zt),o=Zt.dot(Tn),c=Zt.dot(Jo),l=Tn.dot(Tn),u=Tn.dot(Jo),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(l*c-o*u)*h,v=(a*u-o*c)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,i,r,s,a,o,c){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),this.getInterpolation(e,t,i,r,s,a,o,c)}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,An),c.setScalar(0),c.addScaledVector(s,An.x),c.addScaledVector(a,An.y),c.addScaledVector(o,An.z),c}static isFrontFacing(e,t,i,r){return Zt.subVectors(i,t),Tn.subVectors(e,t),Zt.cross(Tn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),Zt.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Bi.subVectors(r,i),zi.subVectors(s,i),Qo.subVectors(e,i);const c=Bi.dot(Qo),l=zi.dot(Qo);if(c<=0&&l<=0)return t.copy(i);ea.subVectors(e,r);const u=Bi.dot(ea),f=zi.dot(ea);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Bi,a);ta.subVectors(e,s);const p=Bi.dot(ta),v=zi.dot(ta);if(v>=0&&p<=v)return t.copy(s);const g=p*l-c*v;if(g<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(zi,o);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return Jl.subVectors(s,r),o=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(Jl,o);const d=1/(m+g+h);return a=g*d,o=h*d,t.copy(i).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let d_=0;class jr extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=nr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Ah,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},us={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Jg(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=na(a,s,e+1/3),this.g=na(a,s,e),this.b=na(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=Vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Ze.fromWorkingColorSpace(Et.copy(this),e),Math.round(Nt(Et.r*255,0,255))*65536+Math.round(Nt(Et.g*255,0,255))*256+Math.round(Nt(Et.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=vt){Ze.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(us);const i=Vo(jn.h,us.h,t),r=Vo(jn.s,us.s,t),s=Vo(jn.l,us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Je;Je.NAMES=Vh;class Gh extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new H,fs=new Ye;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bl,this.updateRange={offset:0,count:-1},this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Wh extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qh extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let p_=0;const qt=new ht,ia=new xt,Hi=new H,zt=new Xr,br=new Xr,mt=new H;class Vn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nh(e)?qh:Wh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];br.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(zt.min,br.min),zt.expandByPoint(mt),mt.addVectors(zt.max,br.max),zt.expandByPoint(mt)):(zt.expandByPoint(br.min),zt.expandByPoint(br.max))}zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)mt.fromBufferAttribute(o,l),c&&(Hi.fromBufferAttribute(e,l),mt.add(Hi)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<o;w++)l[w]=new H,u[w]=new H;const f=new H,h=new H,p=new H,v=new Ye,g=new Ye,m=new Ye,d=new H,y=new H;function S(w,X,ne){f.fromArray(r,w*3),h.fromArray(r,X*3),p.fromArray(r,ne*3),v.fromArray(a,w*2),g.fromArray(a,X*2),m.fromArray(a,ne*2),h.sub(f),p.sub(f),g.sub(v),m.sub(v);const ae=1/(g.x*m.y-m.x*g.y);isFinite(ae)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(ae),y.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(ae),l[w].add(d),l[X].add(d),l[ne].add(d),u[w].add(y),u[X].add(y),u[ne].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,X=b.length;w<X;++w){const ne=b[w],ae=ne.start,L=ne.count;for(let k=ae,I=ae+L;k<I;k+=3)S(i[k+0],i[k+1],i[k+2])}const A=new H,C=new H,R=new H,O=new H;function M(w){R.fromArray(s,w*3),O.copy(R);const X=l[w];A.copy(X),A.sub(R.multiplyScalar(R.dot(X))).normalize(),C.crossVectors(O,X);const ae=C.dot(u[w])<0?-1:1;c[w*4]=A.x,c[w*4+1]=A.y,c[w*4+2]=A.z,c[w*4+3]=ae}for(let w=0,X=b.length;w<X;++w){const ne=b[w],ae=ne.start,L=ne.count;for(let k=ae,I=ae+L;k<I;k+=3)M(i[k+0]),M(i[k+1]),M(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*u;for(let d=0;d<u;d++)h[v++]=l[p++]}return new sn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new ht,di=new zh,hs=new ro,eu=new H,Vi=new H,Gi=new H,Wi=new H,ra=new H,ds=new H,ps=new Ye,ms=new Ye,gs=new Ye,tu=new H,nu=new H,iu=new H,_s=new H,vs=new H;class Qn extends xt{constructor(e=new Vn,t=new Gh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ds.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(ra.fromBufferAttribute(f,e),a?ds.addScaledVector(ra,u):ds.addScaledVector(ra.sub(t),u))}t.add(ds)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(hs.containsPoint(di.origin)===!1&&(di.intersectSphere(hs,eu)===null||di.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Ql.copy(s).invert(),di.copy(e.ray).applyMatrix4(Ql),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=h.length;v<g;v++){const m=h[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,A=S;b<A;b+=3){const C=o.getX(b),R=o.getX(b+1),O=o.getX(b+2);r=xs(this,d,e,i,l,u,f,C,R,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const y=o.getX(m),S=o.getX(m+1),b=o.getX(m+2);r=xs(this,a,e,i,l,u,f,y,S,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=h.length;v<g;v++){const m=h[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,A=S;b<A;b+=3){const C=b,R=b+1,O=b+2;r=xs(this,d,e,i,l,u,f,C,R,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const y=m,S=m+1,b=m+2;r=xs(this,a,e,i,l,u,f,y,S,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function m_(n,e,t,i,r,s,a,o){let c;if(e.side===Ot?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===si,o),c===null)return null;vs.copy(o),vs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(vs);return l<t.near||l>t.far?null:{distance:l,point:vs.clone(),object:n}}function xs(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Vi),n.getVertexPosition(c,Gi),n.getVertexPosition(l,Wi);const u=m_(n,e,t,i,Vi,Gi,Wi,_s);if(u){r&&(ps.fromBufferAttribute(r,o),ms.fromBufferAttribute(r,c),gs.fromBufferAttribute(r,l),u.uv=Jt.getInterpolation(_s,Vi,Gi,Wi,ps,ms,gs,new Ye)),s&&(ps.fromBufferAttribute(s,o),ms.fromBufferAttribute(s,c),gs.fromBufferAttribute(s,l),u.uv1=Jt.getInterpolation(_s,Vi,Gi,Wi,ps,ms,gs,new Ye),u.uv2=u.uv1),a&&(tu.fromBufferAttribute(a,o),nu.fromBufferAttribute(a,c),iu.fromBufferAttribute(a,l),u.normal=Jt.getInterpolation(_s,Vi,Gi,Wi,tu,nu,iu,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new H,materialIndex:0};Jt.getNormal(Vi,Gi,Wi,f.normal),u.face=f}return u}class $r extends Vn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Nn(l,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(f,2));function v(g,m,d,y,S,b,A,C,R,O,M){const w=b/R,X=A/O,ne=b/2,ae=A/2,L=C/2,k=R+1,I=O+1;let V=0,ee=0;const se=new H;for(let oe=0;oe<I;oe++){const N=oe*X-ae;for(let W=0;W<k;W++){const ge=W*w-ne;se[g]=ge*y,se[m]=N*S,se[d]=L,l.push(se.x,se.y,se.z),se[g]=0,se[m]=0,se[d]=C>0?1:-1,u.push(se.x,se.y,se.z),f.push(W/R),f.push(1-oe/O),V+=1}}for(let oe=0;oe<O;oe++)for(let N=0;N<R;N++){const W=h+N+k*oe,ge=h+N+k*(oe+1),ve=h+(N+1)+k*(oe+1),Ee=h+(N+1)+k*oe;c.push(W,ge,Ee),c.push(ge,ve,Ee),ee+=6}o.addGroup(p,ee,M),p+=ee,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=lr(n[t]);for(const r in i)e[r]=i[r]}return e}function g_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xh(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const __={clone:lr,merge:Rt};var v_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v_,this.fragmentShader=x_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=g_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jh extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=In}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jt extends jh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ho*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Xi=1;class S_ extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(qi,Xi,e,t);r.layers=this.layers,this.add(r);const s=new jt(qi,Xi,e,t);s.layers=this.layers,this.add(s);const a=new jt(qi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new jt(qi,Xi,e,t);o.layers=this.layers,this.add(o);const c=new jt(qi,Xi,e,t);c.layers=this.layers,this.add(c);const l=new jt(qi,Xi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class $h extends Vt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E_ extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wi?vt:$t),this.texture=new $h(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $r(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:ei});s.uniforms.tEquirect.value=t;const a=new Qn(r,s),o=t.minFilter;return t.minFilter===Br&&(t.minFilter=Xt),new S_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const sa=new H,b_=new H,y_=new Ve;class _i{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sa.subVectors(i,t).cross(b_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||y_.getNormalMatrix(e),r=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new ro,Ss=new H;class pc{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],g=r[10],m=r[11],d=r[12],y=r[13],S=r[14],b=r[15];if(i[0].setComponents(c-s,h-l,m-p,b-d).normalize(),i[1].setComponents(c+s,h+l,m+p,b+d).normalize(),i[2].setComponents(c+a,h+u,m+v,b+y).normalize(),i[3].setComponents(c-a,h-u,m-v,b-y).normalize(),i[4].setComponents(c-o,h-f,m-g,b-S).normalize(),t===In)i[5].setComponents(c+o,h+f,m+g,b+S).normalize();else if(t===Vs)i[5].setComponents(o,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ss.x=r.normal.x>0?e.max.x:e.min.x,Ss.y=r.normal.y>0?e.max.y:e.min.y,Ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function M_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,h=l.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),l.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,l),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:a,remove:o,update:c}}class mc extends Vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=t/c,p=[],v=[],g=[],m=[];for(let d=0;d<u;d++){const y=d*h-a;for(let S=0;S<l;S++){const b=S*f-s;v.push(b,-y,0),g.push(0,0,1),m.push(S/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){const S=y+l*d,b=y+l*(d+1),A=y+1+l*(d+1),C=y+1+l*d;p.push(S,b,C),p.push(b,A,C)}this.setIndex(p),this.setAttribute("position",new Nn(v,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}var T_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A_=`#ifdef USE_ALPHAHASH
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
#endif`,w_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,L_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N_=`#ifdef USE_IRIDESCENCE
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
#endif`,O_=`#ifdef USE_BUMPMAP
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$_=`vec3 transformedNormal = objectNormal;
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
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",ev=`
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
}`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
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
}`,fv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mv=`uniform bool receiveShadow;
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
#endif`,gv=`#ifdef USE_ENVMAP
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
#endif`,_v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
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
#endif`,bv=`struct PhysicalMaterial {
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
}`,yv=`
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Av=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uv=`#if defined( USE_POINTS_UV )
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
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
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
#endif`,Bv=`#ifdef USE_MORPHTARGETS
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
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qv=`#ifdef USE_NORMALMAP
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
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a0=`float getShadowMask() {
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
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,D0=`#define DISTANCE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
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
}`,F0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,O0=`uniform vec3 diffuse;
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
}`,k0=`#define LAMBERT
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
}`,B0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,H0=`#define MATCAP
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
}`,V0=`#define NORMAL
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
}`,G0=`#define NORMAL
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
}`,W0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,$0=`#define TOON
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
}`,Y0=`#define TOON
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
}`,K0=`uniform float size;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,Q0=`uniform vec3 color;
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
}`,ex=`uniform float rotation;
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
}`,tx=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:T_,alphahash_pars_fragment:A_,alphamap_fragment:w_,alphamap_pars_fragment:C_,alphatest_fragment:R_,alphatest_pars_fragment:L_,aomap_fragment:D_,aomap_pars_fragment:P_,begin_vertex:U_,beginnormal_vertex:I_,bsdfs:F_,iridescence_fragment:N_,bumpmap_pars_fragment:O_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:z_,clipping_planes_vertex:H_,color_fragment:V_,color_pars_fragment:G_,color_pars_vertex:W_,color_vertex:q_,common:X_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:$_,displacementmap_pars_vertex:Y_,displacementmap_vertex:K_,emissivemap_fragment:Z_,emissivemap_pars_fragment:J_,colorspace_fragment:Q_,colorspace_pars_fragment:ev,envmap_fragment:tv,envmap_common_pars_fragment:nv,envmap_pars_fragment:iv,envmap_pars_vertex:rv,envmap_physical_pars_fragment:gv,envmap_vertex:sv,fog_vertex:ov,fog_pars_vertex:av,fog_fragment:cv,fog_pars_fragment:lv,gradientmap_pars_fragment:uv,lightmap_fragment:fv,lightmap_pars_fragment:hv,lights_lambert_fragment:dv,lights_lambert_pars_fragment:pv,lights_pars_begin:mv,lights_toon_fragment:_v,lights_toon_pars_fragment:vv,lights_phong_fragment:xv,lights_phong_pars_fragment:Sv,lights_physical_fragment:Ev,lights_physical_pars_fragment:bv,lights_fragment_begin:yv,lights_fragment_maps:Mv,lights_fragment_end:Tv,logdepthbuf_fragment:Av,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Cv,logdepthbuf_vertex:Rv,map_fragment:Lv,map_pars_fragment:Dv,map_particle_fragment:Pv,map_particle_pars_fragment:Uv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Fv,morphcolor_vertex:Nv,morphnormal_vertex:Ov,morphtarget_pars_vertex:kv,morphtarget_vertex:Bv,normal_fragment_begin:zv,normal_fragment_maps:Hv,normal_pars_fragment:Vv,normal_pars_vertex:Gv,normal_vertex:Wv,normalmap_pars_fragment:qv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:Yv,opaque_fragment:Kv,packing:Zv,premultiplied_alpha_fragment:Jv,project_vertex:Qv,dithering_fragment:e0,dithering_pars_fragment:t0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:s0,shadowmap_vertex:o0,shadowmask_pars_fragment:a0,skinbase_vertex:c0,skinning_pars_vertex:l0,skinning_vertex:u0,skinnormal_vertex:f0,specularmap_fragment:h0,specularmap_pars_fragment:d0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:_0,uv_pars_fragment:v0,uv_pars_vertex:x0,uv_vertex:S0,worldpos_vertex:E0,background_vert:b0,background_frag:y0,backgroundCube_vert:M0,backgroundCube_frag:T0,cube_vert:A0,cube_frag:w0,depth_vert:C0,depth_frag:R0,distanceRGBA_vert:L0,distanceRGBA_frag:D0,equirect_vert:P0,equirect_frag:U0,linedashed_vert:I0,linedashed_frag:F0,meshbasic_vert:N0,meshbasic_frag:O0,meshlambert_vert:k0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:H0,meshnormal_vert:V0,meshnormal_frag:G0,meshphong_vert:W0,meshphong_frag:q0,meshphysical_vert:X0,meshphysical_frag:j0,meshtoon_vert:$0,meshtoon_frag:Y0,points_vert:K0,points_frag:Z0,shadow_vert:J0,shadow_frag:Q0,sprite_vert:ex,sprite_frag:tx},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},pn={basic:{uniforms:Rt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Rt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Rt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Rt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Rt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Rt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Rt([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Rt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Rt([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Rt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Rt([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Rt([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Rt([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};pn.physical={uniforms:Rt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Es={r:0,b:0,g:0};function nx(n,e,t,i,r,s,a){const o=new Je(0);let c=s===!0?0:1,l,u,f=null,h=0,p=null;function v(m,d){let y=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=(d.backgroundBlurriness>0?t:e).get(S)),S===null?g(o,c):S&&S.isColor&&(g(S,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===no)?(u===void 0&&(u=new Qn(new $r(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:lr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==it,(f!==S||h!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Qn(new mc(2,2),new Ri({name:"BackgroundMaterial",uniforms:lr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){m.getRGB(Es,Xh(n)),i.buffers.color.setClear(Es.r,Es.g,Es.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:v}}function ix(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null);let l=c,u=!1;function f(L,k,I,V,ee){let se=!1;if(a){const oe=g(V,I,k);l!==oe&&(l=oe,p(l.object)),se=d(L,V,I,ee),se&&y(L,V,I,ee)}else{const oe=k.wireframe===!0;(l.geometry!==V.id||l.program!==I.id||l.wireframe!==oe)&&(l.geometry=V.id,l.program=I.id,l.wireframe=oe,se=!0)}ee!==null&&t.update(ee,n.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,O(L,k,I,V),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,k,I){const V=I.wireframe===!0;let ee=o[L.id];ee===void 0&&(ee={},o[L.id]=ee);let se=ee[k.id];se===void 0&&(se={},ee[k.id]=se);let oe=se[V];return oe===void 0&&(oe=m(h()),se[V]=oe),oe}function m(L){const k=[],I=[],V=[];for(let ee=0;ee<r;ee++)k[ee]=0,I[ee]=0,V[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:I,attributeDivisors:V,object:L,attributes:{},index:null}}function d(L,k,I,V){const ee=l.attributes,se=k.attributes;let oe=0;const N=I.getAttributes();for(const W in N)if(N[W].location>=0){const ve=ee[W];let Ee=se[W];if(Ee===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(Ee=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(Ee=L.instanceColor)),ve===void 0||ve.attribute!==Ee||Ee&&ve.data!==Ee.data)return!0;oe++}return l.attributesNum!==oe||l.index!==V}function y(L,k,I,V){const ee={},se=k.attributes;let oe=0;const N=I.getAttributes();for(const W in N)if(N[W].location>=0){let ve=se[W];ve===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor));const Ee={};Ee.attribute=ve,ve&&ve.data&&(Ee.data=ve.data),ee[W]=Ee,oe++}l.attributes=ee,l.attributesNum=oe,l.index=V}function S(){const L=l.newAttributes;for(let k=0,I=L.length;k<I;k++)L[k]=0}function b(L){A(L,0)}function A(L,k){const I=l.newAttributes,V=l.enabledAttributes,ee=l.attributeDivisors;I[L]=1,V[L]===0&&(n.enableVertexAttribArray(L),V[L]=1),ee[L]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),ee[L]=k)}function C(){const L=l.newAttributes,k=l.enabledAttributes;for(let I=0,V=k.length;I<V;I++)k[I]!==L[I]&&(n.disableVertexAttribArray(I),k[I]=0)}function R(L,k,I,V,ee,se,oe){oe===!0?n.vertexAttribIPointer(L,k,I,ee,se):n.vertexAttribPointer(L,k,I,V,ee,se)}function O(L,k,I,V){if(i.isWebGL2===!1&&(L.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const ee=V.attributes,se=I.getAttributes(),oe=k.defaultAttributeValues;for(const N in se){const W=se[N];if(W.location>=0){let ge=ee[N];if(ge===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor)),ge!==void 0){const ve=ge.normalized,Ee=ge.itemSize,Te=t.get(ge);if(Te===void 0)continue;const De=Te.buffer,Ce=Te.type,Xe=Te.bytesPerElement,ct=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||ge.gpuType===Rh);if(ge.isInterleavedBufferAttribute){const He=ge.data,_=He.stride,P=ge.offset;if(He.isInstancedInterleavedBuffer){for(let F=0;F<W.locationSize;F++)A(W.location+F,He.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let F=0;F<W.locationSize;F++)b(W.location+F);n.bindBuffer(n.ARRAY_BUFFER,De);for(let F=0;F<W.locationSize;F++)R(W.location+F,Ee/W.locationSize,Ce,ve,_*Xe,(P+Ee/W.locationSize*F)*Xe,ct)}else{if(ge.isInstancedBufferAttribute){for(let He=0;He<W.locationSize;He++)A(W.location+He,ge.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let He=0;He<W.locationSize;He++)b(W.location+He);n.bindBuffer(n.ARRAY_BUFFER,De);for(let He=0;He<W.locationSize;He++)R(W.location+He,Ee/W.locationSize,Ce,ve,Ee*Xe,Ee/W.locationSize*He*Xe,ct)}}else if(oe!==void 0){const ve=oe[N];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(W.location,ve);break;case 3:n.vertexAttrib3fv(W.location,ve);break;case 4:n.vertexAttrib4fv(W.location,ve);break;default:n.vertexAttrib1fv(W.location,ve)}}}}C()}function M(){ne();for(const L in o){const k=o[L];for(const I in k){const V=k[I];for(const ee in V)v(V[ee].object),delete V[ee];delete k[I]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const k=o[L.id];for(const I in k){const V=k[I];for(const ee in V)v(V[ee].object),delete V[ee];delete k[I]}delete o[L.id]}function X(L){for(const k in o){const I=o[k];if(I[L.id]===void 0)continue;const V=I[L.id];for(const ee in V)v(V[ee].object),delete V[ee];delete I[L.id]}}function ne(){ae(),u=!0,l!==c&&(l=c,p(l.object))}function ae(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:ae,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:X,initAttributes:S,enableAttribute:b,disableUnusedAttributes:C}}function rx(n,e,t,i){const r=i.isWebGL2;let s;function a(l){s=l}function o(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,l,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function sx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,b=a||e.has("OES_texture_float"),A=S&&b,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:A,maxSamples:C}}function ox(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new _i,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):l();else{const y=s?0:i,S=y*4;let b=d.clippingState||null;c.value=b,b=u(v,h,S,p);for(let A=0;A!==S;++A)b[A]=t[A];d.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const d=p+g*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,b=p;S!==g;++S,b+=4)a.copy(f[S]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function ax(n){let e=new WeakMap;function t(a,o){return o===Oa?a.mapping=or:o===ka&&(a.mapping=ar),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Oa||o===ka)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new E_(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Kh extends jh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,ru=[.125,.215,.35,.446,.526,.582],Si=20,oa=new Kh,su=new Je;let aa=null;const vi=(1+Math.sqrt(5))/2,ji=1/vi,ou=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,vi,ji),new H(0,vi,-ji),new H(ji,0,vi),new H(-ji,0,vi),new H(vi,ji,0),new H(-vi,ji,0)];class au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){aa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa),e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:zr,format:en,colorSpace:zn,depthBuffer:!1},r=cu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cx(s)),this._blurMaterial=lx(s,e,t)}return r}_compileMaterial(e){const t=new Qn(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,i,r){const o=new jt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(su),u.toneMapping=ti,u.autoClear=!1;const p=new Gh({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),v=new Qn(new $r,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(su),g=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):y===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const S=this._cubeSize;bs(r,y*S,d>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===or||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;bs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ou[(r-1)%ou.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qn(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Si-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):Si;m>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const d=[];let y=0;for(let R=0;R<Si;++R){const O=R/g,M=Math.exp(-O*O/2);d.push(M),R===0?y+=M:R<m&&(y+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-i;const b=this._sizeLods[r],A=3*b*(r>S-Zi?r-S+Zi:0),C=4*(this._cubeSize-b);bs(t,A,C,3*b,2*b),c.setRenderTarget(t),c.render(f,oa)}}function cx(n){const e=[],t=[],i=[];let r=n;const s=n-Zi+1+ru.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Zi?c=ru[a-n+Zi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,g=3,m=2,d=1,y=new Float32Array(g*v*p),S=new Float32Array(m*v*p),b=new Float32Array(d*v*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,O=C>2?0:-1,M=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];y.set(M,g*v*C),S.set(h,m*v*C);const w=[C,C,C,C,C,C];b.set(w,d*v*C)}const A=new Vn;A.setAttribute("position",new sn(y,g)),A.setAttribute("uv",new sn(S,m)),A.setAttribute("faceIndex",new sn(b,d)),e.push(A),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cu(n,e,t){const i=new Ci(n,e,t);return i.texture.mapping=no,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lx(n,e,t){const i=new Float32Array(Si),r=new H(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function lu(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function uu(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function ux(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Oa||c===ka,u=c===or||c===ar;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new au(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new au(n));const h=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function fx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const g=h.morphAttributes[v];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const g=p[v];for(let m=0,d=g.length;m<d;m++)e.update(g[m],n.ARRAY_BUFFER)}}function l(f){const h=[],p=f.index,v=f.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let S=0,b=y.length;S<b;S+=3){const A=y[S+0],C=y[S+1],R=y[S+2];h.push(A,C,C,R,R,A)}}else if(v!==void 0){const y=v.array;g=v.version;for(let S=0,b=y.length/3-1;S<b;S+=3){const A=S+0,C=S+1,R=S+2;h.push(A,C,C,R,R,A)}}else return;const m=new(Nh(h)?qh:Wh)(h,1);m.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function dx(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,c;function l(h){o=h.type,c=h.bytesPerElement}function u(h,p){n.drawElements(s,p,o,h*c),t.update(p,s,1)}function f(h,p,v){if(v===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,o,h*c,v),t.update(p,s,v)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f}function px(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mx(n,e){return n[0]-e[0]}function gx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _x(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new gt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let k=function(){ae.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const S=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let M=0;S===!0&&(M=1),b===!0&&(M=2),A===!0&&(M=3);let w=u.attributes.position.count*M,X=1;w>e.maxTextureSize&&(X=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const ne=new Float32Array(w*X*4*g),ae=new Bh(ne,w,X,g);ae.type=Jn,ae.needsUpdate=!0;const L=M*4;for(let I=0;I<g;I++){const V=C[I],ee=R[I],se=O[I],oe=w*X*4*I;for(let N=0;N<V.count;N++){const W=N*L;S===!0&&(a.fromBufferAttribute(V,N),ne[oe+W+0]=a.x,ne[oe+W+1]=a.y,ne[oe+W+2]=a.z,ne[oe+W+3]=0),b===!0&&(a.fromBufferAttribute(ee,N),ne[oe+W+4]=a.x,ne[oe+W+5]=a.y,ne[oe+W+6]=a.z,ne[oe+W+7]=0),A===!0&&(a.fromBufferAttribute(se,N),ne[oe+W+8]=a.x,ne[oe+W+9]=a.y,ne[oe+W+10]=a.z,ne[oe+W+11]=se.itemSize===4?a.w:1)}}m={count:g,texture:ae,size:new Ye(w,X)},s.set(u,m),u.addEventListener("dispose",k)}let d=0;for(let S=0;S<h.length;S++)d+=h[S];const y=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==v){g=[];for(let b=0;b<v;b++)g[b]=[b,0];i[u.id]=g}for(let b=0;b<v;b++){const A=g[b];A[0]=b,A[1]=h[b]}g.sort(gx);for(let b=0;b<8;b++)b<v&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(mx);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const A=o[b],C=A[0],R=A[1];C!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+b)!==m[C]&&u.setAttribute("morphTarget"+b,m[C]),d&&u.getAttribute("morphNormal"+b)!==d[C]&&u.setAttribute("morphNormal"+b,d[C]),r[b]=R,y+=R):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),d&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const S=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function vx(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Zh=new Vt,Jh=new Bh,Qh=new r_,ed=new $h,fu=[],hu=[],du=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=fu[r];if(s===void 0&&(s=new Float32Array(r),fu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function oo(n,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;mu.set(i),n.uniformMatrix2fv(this.addr,!1,mu),pt(t,i)}}function Mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;pu.set(i),n.uniformMatrix3fv(this.addr,!1,pu),pt(t,i)}}function Tx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;du.set(i),n.uniformMatrix4fv(this.addr,!1,du),pt(t,i)}}function Ax(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function Lx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function Ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Zh,r)}function Fx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qh,r)}function Nx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ed,r)}function Ox(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jh,r)}function kx(n){switch(n){case 5126:return xx;case 35664:return Sx;case 35665:return Ex;case 35666:return bx;case 35674:return yx;case 35675:return Mx;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return wx;case 35668:case 35672:return Cx;case 35669:case 35673:return Rx;case 5125:return Lx;case 36294:return Dx;case 36295:return Px;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ox}}function Bx(n,e){n.uniform1fv(this.addr,e)}function zx(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function Hx(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function Vx(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function Gx(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Wx(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qx(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xx(n,e){n.uniform1iv(this.addr,e)}function jx(n,e){n.uniform2iv(this.addr,e)}function $x(n,e){n.uniform3iv(this.addr,e)}function Yx(n,e){n.uniform4iv(this.addr,e)}function Kx(n,e){n.uniform1uiv(this.addr,e)}function Zx(n,e){n.uniform2uiv(this.addr,e)}function Jx(n,e){n.uniform3uiv(this.addr,e)}function Qx(n,e){n.uniform4uiv(this.addr,e)}function eS(n,e,t){const i=this.cache,r=e.length,s=oo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Zh,s[a])}function tS(n,e,t){const i=this.cache,r=e.length,s=oo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Qh,s[a])}function nS(n,e,t){const i=this.cache,r=e.length,s=oo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ed,s[a])}function iS(n,e,t){const i=this.cache,r=e.length,s=oo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Jh,s[a])}function rS(n){switch(n){case 5126:return Bx;case 35664:return zx;case 35665:return Hx;case 35666:return Vx;case 35674:return Gx;case 35675:return Wx;case 35676:return qx;case 5124:case 35670:return Xx;case 35667:case 35671:return jx;case 35668:case 35672:return $x;case 35669:case 35673:return Yx;case 5125:return Kx;case 36294:return Zx;case 36295:return Jx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}class sS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=kx(t.type)}}class oS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=rS(t.type)}}class aS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function gu(n,e){n.seq.push(e),n.map[e.id]=e}function cS(n,e,t){const i=n.name,r=i.length;for(ca.lastIndex=0;;){const s=ca.exec(i),a=ca.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){gu(t,l===void 0?new sS(o,n,e):new oS(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new aS(o),gu(t,f)),t=f}}}class Ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);cS(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function _u(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let lS=0;function uS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function fS(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Hs&&t===zs?i="LinearDisplayP3ToLinearSRGB":e===zs&&t===Hs&&(i="LinearSRGBToLinearDisplayP3"),n){case zn:case io:return[i,"LinearTransferOETF"];case vt:case dc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function vu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+uS(n.getShaderSource(e),a)}else return r}function hS(n,e){const t=fS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dS(n,e){let t;switch(e){case Mg:t="Linear";break;case Tg:t="Reinhard";break;case Ag:t="OptimizedCineon";break;case wg:t="ACESFilmic";break;case Cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function mS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Tr(n){return n!==""}function xu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _S=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(_S,xS)}const vS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xS(n,e){let t=ze[e];if(t===void 0){const i=vS.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const SS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(n){return n.replace(SS,ES)}function ES(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function yS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case no:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function TS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wh:e="ENVMAP_BLENDING_MULTIPLY";break;case bg:e="ENVMAP_BLENDING_MIX";break;case yg:e="ENVMAP_BLENDING_ADD";break}return e}function AS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=bS(t),l=yS(t),u=MS(t),f=TS(t),h=AS(t),p=t.isWebGL2?"":pS(t),v=mS(s),g=r.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Tr).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Tr).join(`
`),d.length>0&&(d+=`
`)):(m=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),d=[p,bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?ze.tonemapping_pars_fragment:"",t.toneMapping!==ti?dS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,hS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=Wa(a),a=xu(a,t),a=Su(a,t),o=Wa(o),o=xu(o,t),o=Su(o,t),a=Eu(a),o=Eu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=y+m+a,b=y+d+o,A=_u(r,r.VERTEX_SHADER,S),C=_u(r,r.FRAGMENT_SHADER,b);if(r.attachShader(g,A),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),w=r.getShaderInfoLog(A).trim(),X=r.getShaderInfoLog(C).trim();let ne=!0,ae=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,A,C);else{const L=vu(r,A,"vertex"),k=vu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+L+`
`+k)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||X==="")&&(ae=!1);ae&&(this.diagnostics={runnable:ne,programLog:M,vertexShader:{log:w,prefix:m},fragmentShader:{log:X,prefix:d}})}r.deleteShader(A),r.deleteShader(C);let R;this.getUniforms=function(){return R===void 0&&(R=new Ls(r,g)),R};let O;return this.getAttributes=function(){return O===void 0&&(O=gS(r,g)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}let CS=0;class RS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new LS(e),t.set(e,i)),i}}class LS{constructor(e){this.id=CS++,this.code=e,this.usedTimes=0}}function DS(n,e,t,i,r,s,a){const o=new Hh,c=new RS,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,w,X,ne,ae){const L=ne.fog,k=ae.geometry,I=M.isMeshStandardMaterial?ne.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||I),ee=V&&V.mapping===no?V.image.height:null,se=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,N=oe!==void 0?oe.length:0;let W=0;k.morphAttributes.position!==void 0&&(W=1),k.morphAttributes.normal!==void 0&&(W=2),k.morphAttributes.color!==void 0&&(W=3);let ge,ve,Ee,Te;if(se){const nt=pn[se];ge=nt.vertexShader,ve=nt.fragmentShader}else ge=M.vertexShader,ve=M.fragmentShader,c.update(M),Ee=c.getVertexShaderID(M),Te=c.getFragmentShaderID(M);const De=n.getRenderTarget(),Ce=ae.isInstancedMesh===!0,Xe=!!M.map,ct=!!M.matcap,He=!!V,_=!!M.aoMap,P=!!M.lightMap,F=!!M.bumpMap,q=!!M.normalMap,G=!!M.displacementMap,j=!!M.emissiveMap,ie=!!M.metalnessMap,J=!!M.roughnessMap,re=M.anisotropy>0,K=M.clearcoat>0,xe=M.iridescence>0,E=M.sheen>0,x=M.transmission>0,U=re&&!!M.anisotropyMap,Q=K&&!!M.clearcoatMap,Z=K&&!!M.clearcoatNormalMap,te=K&&!!M.clearcoatRoughnessMap,me=xe&&!!M.iridescenceMap,ce=xe&&!!M.iridescenceThicknessMap,de=E&&!!M.sheenColorMap,ye=E&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,ue=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Ae=x&&!!M.transmissionMap,Le=x&&!!M.thicknessMap,we=!!M.gradientMap,D=!!M.alphaMap,he=M.alphaTest>0,fe=!!M.alphaHash,Se=!!M.extensions,_e=!!k.attributes.uv1,le=!!k.attributes.uv2,Me=!!k.attributes.uv3;let Oe=ti;return M.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Oe=n.toneMapping),{isWebGL2:u,shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:ve,defines:M.defines,customVertexShaderID:Ee,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Ce,instancingColor:Ce&&ae.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:De===null?n.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:zn,map:Xe,matcap:ct,envMap:He,envMapMode:He&&V.mapping,envMapCubeUVHeight:ee,aoMap:_,lightMap:P,bumpMap:F,normalMap:q,displacementMap:h&&G,emissiveMap:j,normalMapObjectSpace:q&&M.normalMapType===Vg,normalMapTangentSpace:q&&M.normalMapType===Hg,metalnessMap:ie,roughnessMap:J,anisotropy:re,anisotropyMap:U,clearcoat:K,clearcoatMap:Q,clearcoatNormalMap:Z,clearcoatRoughnessMap:te,iridescence:xe,iridescenceMap:me,iridescenceThicknessMap:ce,sheen:E,sheenColorMap:de,sheenRoughnessMap:ye,specularMap:Ge,specularColorMap:ue,specularIntensityMap:Ne,transmission:x,transmissionMap:Ae,thicknessMap:Le,gradientMap:we,opaque:M.transparent===!1&&M.blending===nr,alphaMap:D,alphaTest:he,alphaHash:fe,combine:M.combine,mapUv:Xe&&g(M.map.channel),aoMapUv:_&&g(M.aoMap.channel),lightMapUv:P&&g(M.lightMap.channel),bumpMapUv:F&&g(M.bumpMap.channel),normalMapUv:q&&g(M.normalMap.channel),displacementMapUv:G&&g(M.displacementMap.channel),emissiveMapUv:j&&g(M.emissiveMap.channel),metalnessMapUv:ie&&g(M.metalnessMap.channel),roughnessMapUv:J&&g(M.roughnessMap.channel),anisotropyMapUv:U&&g(M.anisotropyMap.channel),clearcoatMapUv:Q&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Z&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(M.sheenRoughnessMap.channel),specularMapUv:Ge&&g(M.specularMap.channel),specularColorMapUv:ue&&g(M.specularColorMap.channel),specularIntensityMapUv:Ne&&g(M.specularIntensityMap.channel),transmissionMapUv:Ae&&g(M.transmissionMap.channel),thicknessMapUv:Le&&g(M.thicknessMap.channel),alphaMapUv:D&&g(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(q||re),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:le,vertexUv3s:Me,pointsUvs:ae.isPoints===!0&&!!k.attributes.uv&&(Xe||D),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ae.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:W,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Un,flipSided:M.side===Ot,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Se&&M.extensions.derivatives===!0,extensionFragDepth:Se&&M.extensions.fragDepth===!0,extensionDrawBuffers:Se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)w.push(X),w.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(y(w,M),S(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function S(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function b(M){const w=v[M.type];let X;if(w){const ne=pn[w];X=__.clone(ne.uniforms)}else X=M.uniforms;return X}function A(M,w){let X;for(let ne=0,ae=l.length;ne<ae;ne++){const L=l[ne];if(L.cacheKey===w){X=L,++X.usedTimes;break}}return X===void 0&&(X=new wS(n,w,M,s),l.push(X)),X}function C(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:A,releaseProgram:C,releaseShaderCache:R,programs:l,dispose:O}}function PS(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function US(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,v,g,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=g,d.group=m),e++,d}function o(f,h,p,v,g,m){const d=a(f,h,p,v,g,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(f,h,p,v,g,m){const d=a(f,h,p,v,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(f,h){t.length>1&&t.sort(f||US),i.length>1&&i.sort(h||yu),r.length>1&&r.sort(h||yu)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function IS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Mu,n.set(i,[a])):r>=s.length?(a=new Mu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function FS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Je};break;case"SpotLight":t={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function NS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OS=0;function kS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BS(n,e){const t=new FS,i=NS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,a=new ht,o=new ht;function c(u,f){let h=0,p=0,v=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let g=0,m=0,d=0,y=0,S=0,b=0,A=0,C=0,R=0,O=0,M=0;u.sort(kS);const w=f===!0?Math.PI:1;for(let ne=0,ae=u.length;ne<ae;ne++){const L=u[ne],k=L.color,I=L.intensity,V=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*I*w,p+=k.g*I*w,v+=k.b*I*w;else if(L.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(L.sh.coefficients[se],I);M++}else if(L.isDirectionalLight){const se=t.get(L);if(se.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const oe=L.shadow,N=i.get(L);N.shadowBias=oe.bias,N.shadowNormalBias=oe.normalBias,N.shadowRadius=oe.radius,N.shadowMapSize=oe.mapSize,r.directionalShadow[g]=N,r.directionalShadowMap[g]=ee,r.directionalShadowMatrix[g]=L.shadow.matrix,b++}r.directional[g]=se,g++}else if(L.isSpotLight){const se=t.get(L);se.position.setFromMatrixPosition(L.matrixWorld),se.color.copy(k).multiplyScalar(I*w),se.distance=V,se.coneCos=Math.cos(L.angle),se.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),se.decay=L.decay,r.spot[d]=se;const oe=L.shadow;if(L.map&&(r.spotLightMap[R]=L.map,R++,oe.updateMatrices(L),L.castShadow&&O++),r.spotLightMatrix[d]=oe.matrix,L.castShadow){const N=i.get(L);N.shadowBias=oe.bias,N.shadowNormalBias=oe.normalBias,N.shadowRadius=oe.radius,N.shadowMapSize=oe.mapSize,r.spotShadow[d]=N,r.spotShadowMap[d]=ee,C++}d++}else if(L.isRectAreaLight){const se=t.get(L);se.color.copy(k).multiplyScalar(I),se.halfWidth.set(L.width*.5,0,0),se.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=se,y++}else if(L.isPointLight){const se=t.get(L);if(se.color.copy(L.color).multiplyScalar(L.intensity*w),se.distance=L.distance,se.decay=L.decay,L.castShadow){const oe=L.shadow,N=i.get(L);N.shadowBias=oe.bias,N.shadowNormalBias=oe.normalBias,N.shadowRadius=oe.radius,N.shadowMapSize=oe.mapSize,N.shadowCameraNear=oe.camera.near,N.shadowCameraFar=oe.camera.far,r.pointShadow[m]=N,r.pointShadowMap[m]=ee,r.pointShadowMatrix[m]=L.shadow.matrix,A++}r.point[m]=se,m++}else if(L.isHemisphereLight){const se=t.get(L);se.skyColor.copy(L.color).multiplyScalar(I*w),se.groundColor.copy(L.groundColor).multiplyScalar(I*w),r.hemi[S]=se,S++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==g||X.pointLength!==m||X.spotLength!==d||X.rectAreaLength!==y||X.hemiLength!==S||X.numDirectionalShadows!==b||X.numPointShadows!==A||X.numSpotShadows!==C||X.numSpotMaps!==R||X.numLightProbes!==M)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=y,r.point.length=m,r.hemi.length=S,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=C+R-O,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=M,X.directionalLength=g,X.pointLength=m,X.spotLength=d,X.rectAreaLength=y,X.hemiLength=S,X.numDirectionalShadows=b,X.numPointShadows=A,X.numSpotShadows=C,X.numSpotMaps=R,X.numLightProbes=M,r.version=OS++)}function l(u,f){let h=0,p=0,v=0,g=0,m=0;const d=f.matrixWorldInverse;for(let y=0,S=u.length;y<S;y++){const b=u[y];if(b.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),h++}else if(b.isSpotLight){const A=r.spot[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),v++}else if(b.isRectAreaLight){const A=r.rectArea[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(d),o.identity(),a.copy(b.matrixWorld),a.premultiply(d),o.extractRotation(a),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:r}}function Tu(n,e){const t=new BS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function zS(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Tu(n,e),t.set(s,[c])):a>=o.length?(c=new Tu(n,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class HS extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VS extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WS=`uniform sampler2D shadow_pass;
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
}`;function qS(n,e,t){let i=new pc;const r=new Ye,s=new Ye,a=new gt,o=new HS({depthPacking:zg}),c=new VS,l={},u=t.maxTextureSize,f={[si]:Ot,[Ot]:si,[Un]:Un},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:GS,fragmentShader:WS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Vn;v.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Qn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let d=this.type;this.render=function(A,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const O=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),X=n.state;X.setBlending(ei),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ne=d!==wn&&this.type===wn,ae=d===wn&&this.type!==wn;for(let L=0,k=A.length;L<k;L++){const I=A[L],V=I.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ee=V.getFrameExtents();if(r.multiply(ee),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,V.mapSize.y=s.y)),V.map===null||ne===!0||ae===!0){const oe=this.type!==wn?{minFilter:Lt,magFilter:Lt}:{};V.map!==null&&V.map.dispose(),V.map=new Ci(r.x,r.y,oe),V.map.texture.name=I.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const se=V.getViewportCount();for(let oe=0;oe<se;oe++){const N=V.getViewport(oe);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),X.viewport(a),V.updateMatrices(I,oe),i=V.getFrustum(),b(C,R,V.camera,I,this.type)}V.isPointLightShadow!==!0&&this.type===wn&&y(V,R),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(O,M,w)};function y(A,C){const R=e.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ci(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,R,h,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,R,p,g,null)}function S(A,C,R,O){let M=null;const w=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)M=w;else if(M=R.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=M.uuid,ne=C.uuid;let ae=l[X];ae===void 0&&(ae={},l[X]=ae);let L=ae[ne];L===void 0&&(L=M.clone(),ae[ne]=L),M=L}if(M.visible=C.visible,M.wireframe=C.wireframe,O===wn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=n.properties.get(M);X.light=R}return M}function b(A,C,R,O,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===wn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const ne=e.update(A),ae=A.material;if(Array.isArray(ae)){const L=ne.groups;for(let k=0,I=L.length;k<I;k++){const V=L[k],ee=ae[V.materialIndex];if(ee&&ee.visible){const se=S(A,ee,O,M);n.renderBufferDirect(R,null,ne,se,A,V)}}}else if(ae.visible){const L=S(A,ae,O,M);n.renderBufferDirect(R,null,ne,L,A,null)}}const X=A.children;for(let ne=0,ae=X.length;ne<ae;ne++)b(X[ne],C,R,O,M)}}function XS(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const he=new gt;let fe=null;const Se=new gt(0,0,0,0);return{setMask:function(_e){fe!==_e&&!D&&(n.colorMask(_e,_e,_e,_e),fe=_e)},setLocked:function(_e){D=_e},setClear:function(_e,le,Me,Oe,Tt){Tt===!0&&(_e*=Oe,le*=Oe,Me*=Oe),he.set(_e,le,Me,Oe),Se.equals(he)===!1&&(n.clearColor(_e,le,Me,Oe),Se.copy(he))},reset:function(){D=!1,fe=null,Se.set(-1,0,0,0)}}}function s(){let D=!1,he=null,fe=null,Se=null;return{setTest:function(_e){_e?De(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(_e){he!==_e&&!D&&(n.depthMask(_e),he=_e)},setFunc:function(_e){if(fe!==_e){switch(_e){case mg:n.depthFunc(n.NEVER);break;case gg:n.depthFunc(n.ALWAYS);break;case _g:n.depthFunc(n.LESS);break;case Na:n.depthFunc(n.LEQUAL);break;case vg:n.depthFunc(n.EQUAL);break;case xg:n.depthFunc(n.GEQUAL);break;case Sg:n.depthFunc(n.GREATER);break;case Eg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=_e}},setLocked:function(_e){D=_e},setClear:function(_e){Se!==_e&&(n.clearDepth(_e),Se=_e)},reset:function(){D=!1,he=null,fe=null,Se=null}}}function a(){let D=!1,he=null,fe=null,Se=null,_e=null,le=null,Me=null,Oe=null,Tt=null;return{setTest:function(nt){D||(nt?De(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(nt){he!==nt&&!D&&(n.stencilMask(nt),he=nt)},setFunc:function(nt,cn,At){(fe!==nt||Se!==cn||_e!==At)&&(n.stencilFunc(nt,cn,At),fe=nt,Se=cn,_e=At)},setOp:function(nt,cn,At){(le!==nt||Me!==cn||Oe!==At)&&(n.stencilOp(nt,cn,At),le=nt,Me=cn,Oe=At)},setLocked:function(nt){D=nt},setClear:function(nt){Tt!==nt&&(n.clearStencil(nt),Tt=nt)},reset:function(){D=!1,he=null,fe=null,Se=null,_e=null,le=null,Me=null,Oe=null,Tt=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,g=[],m=null,d=!1,y=null,S=null,b=null,A=null,C=null,R=null,O=null,M=!1,w=null,X=null,ne=null,ae=null,L=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,V=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),I=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),I=V>=2);let se=null,oe={};const N=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),ge=new gt().fromArray(N),ve=new gt().fromArray(W);function Ee(D,he,fe,Se){const _e=new Uint8Array(4),le=n.createTexture();n.bindTexture(D,le),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<fe;Me++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(he+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return le}const Te={};Te[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(n.DEPTH_TEST),c.setFunc(Na),G(!1),j(al),De(n.CULL_FACE),F(ei);function De(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ce(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Xe(D,he){return p[D]!==he?(n.bindFramebuffer(D,he),p[D]=he,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=he),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function ct(D,he){let fe=g,Se=!1;if(D)if(fe=v.get(he),fe===void 0&&(fe=[],v.set(he,fe)),D.isWebGLMultipleRenderTargets){const _e=D.texture;if(fe.length!==_e.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Me=_e.length;le<Me;le++)fe[le]=n.COLOR_ATTACHMENT0+le;fe.length=_e.length,Se=!0}}else fe[0]!==n.COLOR_ATTACHMENT0&&(fe[0]=n.COLOR_ATTACHMENT0,Se=!0);else fe[0]!==n.BACK&&(fe[0]=n.BACK,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function He(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const _={[Ki]:n.FUNC_ADD,[rg]:n.FUNC_SUBTRACT,[sg]:n.FUNC_REVERSE_SUBTRACT};if(i)_[fl]=n.MIN,_[hl]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(_[fl]=D.MIN_EXT,_[hl]=D.MAX_EXT)}const P={[og]:n.ZERO,[ag]:n.ONE,[cg]:n.SRC_COLOR,[Th]:n.SRC_ALPHA,[pg]:n.SRC_ALPHA_SATURATE,[hg]:n.DST_COLOR,[ug]:n.DST_ALPHA,[lg]:n.ONE_MINUS_SRC_COLOR,[Ah]:n.ONE_MINUS_SRC_ALPHA,[dg]:n.ONE_MINUS_DST_COLOR,[fg]:n.ONE_MINUS_DST_ALPHA};function F(D,he,fe,Se,_e,le,Me,Oe){if(D===ei){d===!0&&(Ce(n.BLEND),d=!1);return}if(d===!1&&(De(n.BLEND),d=!0),D!==ig){if(D!==y||Oe!==M){if((S!==Ki||C!==Ki)&&(n.blendEquation(n.FUNC_ADD),S=Ki,C=Ki),Oe)switch(D){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFunc(n.ONE,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ul:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ul:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,A=null,R=null,O=null,y=D,M=Oe}return}_e=_e||he,le=le||fe,Me=Me||Se,(he!==S||_e!==C)&&(n.blendEquationSeparate(_[he],_[_e]),S=he,C=_e),(fe!==b||Se!==A||le!==R||Me!==O)&&(n.blendFuncSeparate(P[fe],P[Se],P[le],P[Me]),b=fe,A=Se,R=le,O=Me),y=D,M=!1}function q(D,he){D.side===Un?Ce(n.CULL_FACE):De(n.CULL_FACE);let fe=D.side===Ot;he&&(fe=!fe),G(fe),D.blending===nr&&D.transparent===!1?F(ei):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const Se=D.stencilWrite;l.setTest(Se),Se&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),J(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(D){w!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),w=D)}function j(D){D!==eg?(De(n.CULL_FACE),D!==X&&(D===al?n.cullFace(n.BACK):D===tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),X=D}function ie(D){D!==ne&&(I&&n.lineWidth(D),ne=D)}function J(D,he,fe){D?(De(n.POLYGON_OFFSET_FILL),(ae!==he||L!==fe)&&(n.polygonOffset(he,fe),ae=he,L=fe)):Ce(n.POLYGON_OFFSET_FILL)}function re(D){D?De(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function K(D){D===void 0&&(D=n.TEXTURE0+k-1),se!==D&&(n.activeTexture(D),se=D)}function xe(D,he,fe){fe===void 0&&(se===null?fe=n.TEXTURE0+k-1:fe=se);let Se=oe[fe];Se===void 0&&(Se={type:void 0,texture:void 0},oe[fe]=Se),(Se.type!==D||Se.texture!==he)&&(se!==fe&&(n.activeTexture(fe),se=fe),n.bindTexture(D,he||Te[D]),Se.type=D,Se.texture=he)}function E(){const D=oe[se];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(D){ge.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ge.copy(D))}function Ne(D){ve.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ve.copy(D))}function Ae(D,he){let fe=f.get(he);fe===void 0&&(fe=new WeakMap,f.set(he,fe));let Se=fe.get(D);Se===void 0&&(Se=n.getUniformBlockIndex(he,D.name),fe.set(D,Se))}function Le(D,he){const Se=f.get(he).get(D);u.get(he)!==Se&&(n.uniformBlockBinding(he,Se,D.__bindingPointIndex),u.set(he,Se))}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},se=null,oe={},p={},v=new WeakMap,g=[],m=null,d=!1,y=null,S=null,b=null,A=null,C=null,R=null,O=null,M=!1,w=null,X=null,ne=null,ae=null,L=null,ge.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:De,disable:Ce,bindFramebuffer:Xe,drawBuffers:ct,useProgram:He,setBlending:F,setMaterial:q,setFlipSided:G,setCullFace:j,setLineWidth:ie,setPolygonOffset:J,setScissorTest:re,activeTexture:K,bindTexture:xe,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:ye,texImage3D:Ge,updateUBOMapping:Ae,uniformBlockBinding:Le,texStorage2D:ce,texStorage3D:de,texSubImage2D:Q,texSubImage3D:Z,compressedTexSubImage2D:te,compressedTexSubImage3D:me,scissor:ue,viewport:Ne,reset:we}}function jS(n,e,t,i,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,x){return d?new OffscreenCanvas(E,x):Gs("canvas")}function S(E,x,U,Q){let Z=1;if((E.width>Q||E.height>Q)&&(Z=Q/Math.max(E.width,E.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const te=x?Ga:Math.floor,me=te(Z*E.width),ce=te(Z*E.height);g===void 0&&(g=y(me,ce));const de=U?y(me,ce):g;return de.width=me,de.height=ce,de.getContext("2d").drawImage(E,0,0,me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+me+"x"+ce+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return Hl(E.width)&&Hl(E.height)}function A(E){return o?!1:E.wrapS!==Qt||E.wrapT!==Qt||E.minFilter!==Lt&&E.minFilter!==Xt}function C(E,x){return E.generateMipmaps&&x&&E.minFilter!==Lt&&E.minFilter!==Xt}function R(E){n.generateMipmap(E)}function O(E,x,U,Q,Z=!1){if(o===!1)return x;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=x;if(x===n.RED&&(U===n.FLOAT&&(te=n.R32F),U===n.HALF_FLOAT&&(te=n.R16F),U===n.UNSIGNED_BYTE&&(te=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(te=n.R8UI),U===n.UNSIGNED_SHORT&&(te=n.R16UI),U===n.UNSIGNED_INT&&(te=n.R32UI),U===n.BYTE&&(te=n.R8I),U===n.SHORT&&(te=n.R16I),U===n.INT&&(te=n.R32I)),x===n.RG&&(U===n.FLOAT&&(te=n.RG32F),U===n.HALF_FLOAT&&(te=n.RG16F),U===n.UNSIGNED_BYTE&&(te=n.RG8)),x===n.RGBA){const me=Z?Bs:Ze.getTransfer(Q);U===n.FLOAT&&(te=n.RGBA32F),U===n.HALF_FLOAT&&(te=n.RGBA16F),U===n.UNSIGNED_BYTE&&(te=me===it?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(E,x,U){return C(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Lt&&E.minFilter!==Xt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){return E===Lt||E===dl||E===Io?n.NEAREST:n.LINEAR}function X(E){const x=E.target;x.removeEventListener("dispose",X),ae(x),x.isVideoTexture&&v.delete(x)}function ne(E){const x=E.target;x.removeEventListener("dispose",ne),k(x)}function ae(E){const x=i.get(E);if(x.__webglInit===void 0)return;const U=E.source,Q=m.get(U);if(Q){const Z=Q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(E),Object.keys(Q).length===0&&m.delete(U)}i.remove(E)}function L(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const U=E.source,Q=m.get(U);delete Q[x.__cacheKey],a.memory.textures--}function k(E){const x=E.texture,U=i.get(E),Q=i.get(x);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(U.__webglFramebuffer[Z]))for(let te=0;te<U.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(U.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(U.__webglFramebuffer[Z]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[Z])}else{if(Array.isArray(U.__webglFramebuffer))for(let Z=0;Z<U.__webglFramebuffer.length;Z++)n.deleteFramebuffer(U.__webglFramebuffer[Z]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Z=0;Z<U.__webglColorRenderbuffer.length;Z++)U.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[Z]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Z=0,te=x.length;Z<te;Z++){const me=i.get(x[Z]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(x[Z])}i.remove(x),i.remove(E)}let I=0;function V(){I=0}function ee(){const E=I;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),I+=1,E}function se(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function oe(E,x){const U=i.get(E);if(E.isVideoTexture&&K(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(U,E,x);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function N(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){Xe(U,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function W(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){Xe(U,E,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function ge(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){ct(U,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const ve={[Ba]:n.REPEAT,[Qt]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},Ee={[Lt]:n.NEAREST,[dl]:n.NEAREST_MIPMAP_NEAREST,[Io]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[Rg]:n.LINEAR_MIPMAP_NEAREST,[Br]:n.LINEAR_MIPMAP_LINEAR},Te={[Wg]:n.NEVER,[Zg]:n.ALWAYS,[qg]:n.LESS,[jg]:n.LEQUAL,[Xg]:n.EQUAL,[Kg]:n.GEQUAL,[$g]:n.GREATER,[Yg]:n.NOTEQUAL};function De(E,x,U){if(U?(n.texParameteri(E,n.TEXTURE_WRAP_S,ve[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ve[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ve[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Ee[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Ee[x.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Qt||x.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,w(x.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==Lt&&x.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Lt||x.minFilter!==Io&&x.minFilter!==Br||x.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===zr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Ce(E,x){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",X));const Q=x.source;let Z=m.get(Q);Z===void 0&&(Z={},m.set(Q,Z));const te=se(x);if(te!==E.__cacheKey){Z[te]===void 0&&(Z[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[te].usedTimes++;const me=Z[E.__cacheKey];me!==void 0&&(Z[E.__cacheKey].usedTimes--,me.usedTimes===0&&L(x)),E.__cacheKey=te,E.__webglTexture=Z[te].texture}return U}function Xe(E,x,U){let Q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=n.TEXTURE_3D);const Z=Ce(E,x),te=x.source;t.bindTexture(Q,E.__webglTexture,n.TEXTURE0+U);const me=i.get(te);if(te.version!==me.__version||Z===!0){t.activeTexture(n.TEXTURE0+U);const ce=Ze.getPrimaries(Ze.workingColorSpace),de=x.colorSpace===$t?null:Ze.getPrimaries(x.colorSpace),ye=x.colorSpace===$t||ce===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ge=A(x)&&b(x.image)===!1;let ue=S(x.image,Ge,!1,u);ue=xe(x,ue);const Ne=b(ue)||o,Ae=s.convert(x.format,x.colorSpace);let Le=s.convert(x.type),we=O(x.internalFormat,Ae,Le,x.colorSpace,x.isVideoTexture);De(Q,x,Ne);let D;const he=x.mipmaps,fe=o&&x.isVideoTexture!==!0,Se=me.__version===void 0||Z===!0,_e=M(x,ue,Ne);if(x.isDepthTexture)we=n.DEPTH_COMPONENT,o?x.type===Jn?we=n.DEPTH_COMPONENT32F:x.type===Zn?we=n.DEPTH_COMPONENT24:x.type===Ti?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:x.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ai&&we===n.DEPTH_COMPONENT&&x.type!==hc&&x.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Zn,Le=s.convert(x.type)),x.format===cr&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,x.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ti,Le=s.convert(x.type))),Se&&(fe?t.texStorage2D(n.TEXTURE_2D,1,we,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,we,ue.width,ue.height,0,Ae,Le,null));else if(x.isDataTexture)if(he.length>0&&Ne){fe&&Se&&t.texStorage2D(n.TEXTURE_2D,_e,we,he[0].width,he[0].height);for(let le=0,Me=he.length;le<Me;le++)D=he[le],fe?t.texSubImage2D(n.TEXTURE_2D,le,0,0,D.width,D.height,Ae,Le,D.data):t.texImage2D(n.TEXTURE_2D,le,we,D.width,D.height,0,Ae,Le,D.data);x.generateMipmaps=!1}else fe?(Se&&t.texStorage2D(n.TEXTURE_2D,_e,we,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Ae,Le,ue.data)):t.texImage2D(n.TEXTURE_2D,0,we,ue.width,ue.height,0,Ae,Le,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){fe&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,we,he[0].width,he[0].height,ue.depth);for(let le=0,Me=he.length;le<Me;le++)D=he[le],x.format!==en?Ae!==null?fe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,D.width,D.height,ue.depth,Ae,D.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,we,D.width,D.height,ue.depth,0,D.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,D.width,D.height,ue.depth,Ae,Le,D.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,we,D.width,D.height,ue.depth,0,Ae,Le,D.data)}else{fe&&Se&&t.texStorage2D(n.TEXTURE_2D,_e,we,he[0].width,he[0].height);for(let le=0,Me=he.length;le<Me;le++)D=he[le],x.format!==en?Ae!==null?fe?t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,D.width,D.height,Ae,D.data):t.compressedTexImage2D(n.TEXTURE_2D,le,we,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(n.TEXTURE_2D,le,0,0,D.width,D.height,Ae,Le,D.data):t.texImage2D(n.TEXTURE_2D,le,we,D.width,D.height,0,Ae,Le,D.data)}else if(x.isDataArrayTexture)fe?(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,we,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Le,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ue.width,ue.height,ue.depth,0,Ae,Le,ue.data);else if(x.isData3DTexture)fe?(Se&&t.texStorage3D(n.TEXTURE_3D,_e,we,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Le,ue.data)):t.texImage3D(n.TEXTURE_3D,0,we,ue.width,ue.height,ue.depth,0,Ae,Le,ue.data);else if(x.isFramebufferTexture){if(Se)if(fe)t.texStorage2D(n.TEXTURE_2D,_e,we,ue.width,ue.height);else{let le=ue.width,Me=ue.height;for(let Oe=0;Oe<_e;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,we,le,Me,0,Ae,Le,null),le>>=1,Me>>=1}}else if(he.length>0&&Ne){fe&&Se&&t.texStorage2D(n.TEXTURE_2D,_e,we,he[0].width,he[0].height);for(let le=0,Me=he.length;le<Me;le++)D=he[le],fe?t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ae,Le,D):t.texImage2D(n.TEXTURE_2D,le,we,Ae,Le,D);x.generateMipmaps=!1}else fe?(Se&&t.texStorage2D(n.TEXTURE_2D,_e,we,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Le,ue)):t.texImage2D(n.TEXTURE_2D,0,we,Ae,Le,ue);C(x,Ne)&&R(Q),me.__version=te.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ct(E,x,U){if(x.image.length!==6)return;const Q=Ce(E,x),Z=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const te=i.get(Z);if(Z.version!==te.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const me=Ze.getPrimaries(Ze.workingColorSpace),ce=x.colorSpace===$t?null:Ze.getPrimaries(x.colorSpace),de=x.colorSpace===$t||me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,Ge=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let le=0;le<6;le++)!ye&&!Ge?ue[le]=S(x.image[le],!1,!0,l):ue[le]=Ge?x.image[le].image:x.image[le],ue[le]=xe(x,ue[le]);const Ne=ue[0],Ae=b(Ne)||o,Le=s.convert(x.format,x.colorSpace),we=s.convert(x.type),D=O(x.internalFormat,Le,we,x.colorSpace),he=o&&x.isVideoTexture!==!0,fe=te.__version===void 0||Q===!0;let Se=M(x,Ne,Ae);De(n.TEXTURE_CUBE_MAP,x,Ae);let _e;if(ye){he&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,D,Ne.width,Ne.height);for(let le=0;le<6;le++){_e=ue[le].mipmaps;for(let Me=0;Me<_e.length;Me++){const Oe=_e[Me];x.format!==en?Le!==null?he?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,Oe.width,Oe.height,Le,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,D,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,Oe.width,Oe.height,Le,we,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,D,Oe.width,Oe.height,0,Le,we,Oe.data)}}}else{_e=x.mipmaps,he&&fe&&(_e.length>0&&Se++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,D,ue[0].width,ue[0].height));for(let le=0;le<6;le++)if(Ge){he?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ue[le].width,ue[le].height,Le,we,ue[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,D,ue[le].width,ue[le].height,0,Le,we,ue[le].data);for(let Me=0;Me<_e.length;Me++){const Tt=_e[Me].image[le].image;he?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,Tt.width,Tt.height,Le,we,Tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,D,Tt.width,Tt.height,0,Le,we,Tt.data)}}else{he?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le,we,ue[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,D,Le,we,ue[le]);for(let Me=0;Me<_e.length;Me++){const Oe=_e[Me];he?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,Le,we,Oe.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,D,Le,we,Oe.image[le])}}}C(x,Ae)&&R(n.TEXTURE_CUBE_MAP),te.__version=Z.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function He(E,x,U,Q,Z,te){const me=s.convert(U.format,U.colorSpace),ce=s.convert(U.type),de=O(U.internalFormat,me,ce,U.colorSpace);if(!i.get(x).__hasExternalTextures){const Ge=Math.max(1,x.width>>te),ue=Math.max(1,x.height>>te);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,te,de,Ge,ue,x.depth,0,me,ce,null):t.texImage2D(Z,te,de,Ge,ue,0,me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),re(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Z,i.get(U).__webglTexture,0,J(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,Z,i.get(U).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(E,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let Q=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||re(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Jn?Q=n.DEPTH_COMPONENT32F:Z.type===Zn&&(Q=n.DEPTH_COMPONENT24));const te=J(x);re(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,Q,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,Q,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const Q=J(x);U&&re(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<Q.length;Z++){const te=Q[Z],me=s.convert(te.format,te.colorSpace),ce=s.convert(te.type),de=O(te.internalFormat,me,ce,te.colorSpace),ye=J(x);U&&re(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,de,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,de,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,de,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function P(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),oe(x.depthTexture,0);const Q=i.get(x.depthTexture).__webglTexture,Z=J(x);if(x.depthTexture.format===Ai)re(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===cr)re(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function F(E){const x=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");P(x.__webglFramebuffer,E)}else if(U){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=n.createRenderbuffer(),_(x.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),_(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function q(E,x,U){const Q=i.get(E);x!==void 0&&He(Q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&F(E)}function G(E){const x=E.texture,U=i.get(E),Q=i.get(x);E.addEventListener("dispose",ne),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=x.version,a.memory.textures++);const Z=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,me=b(E)||o;if(Z){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let de=0;de<x.mipmaps.length;de++)U.__webglFramebuffer[ce][de]=n.createFramebuffer()}else U.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)U.__webglFramebuffer[ce]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const ce=E.texture;for(let de=0,ye=ce.length;de<ye;de++){const Ge=i.get(ce[de]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&re(E)===!1){const ce=te?x:[x];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const ye=ce[de];U.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[de]);const Ge=s.convert(ye.format,ye.colorSpace),ue=s.convert(ye.type),Ne=O(ye.internalFormat,Ge,ue,ye.colorSpace,E.isXRRenderTarget===!0),Ae=J(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Ne,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,U.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),_(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),De(n.TEXTURE_CUBE_MAP,x,me);for(let ce=0;ce<6;ce++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)He(U.__webglFramebuffer[ce][de],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else He(U.__webglFramebuffer[ce],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);C(x,me)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ce=E.texture;for(let de=0,ye=ce.length;de<ye;de++){const Ge=ce[de],ue=i.get(Ge);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),De(n.TEXTURE_2D,Ge,me),He(U.__webglFramebuffer,E,Ge,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),C(Ge,me)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,Q.__webglTexture),De(ce,x,me),o&&x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)He(U.__webglFramebuffer[de],E,x,n.COLOR_ATTACHMENT0,ce,de);else He(U.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,ce,0);C(x,me)&&R(ce),t.unbindTexture()}E.depthBuffer&&F(E)}function j(E){const x=b(E)||o,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,Z=U.length;Q<Z;Q++){const te=U[Q];if(C(te,x)){const me=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(te).__webglTexture;t.bindTexture(me,ce),R(me),t.unbindTexture()}}}function ie(E){if(o&&E.samples>0&&re(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,Q=E.height;let Z=n.COLOR_BUFFER_BIT;const te=[],me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(E),de=E.isWebGLMultipleRenderTargets===!0;if(de)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){te.push(n.COLOR_ATTACHMENT0+ye),E.depthBuffer&&te.push(me);const Ge=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ge===!1&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),de&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]),Ge===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),de){const ue=i.get(x[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,U,Q,0,0,U,Q,Z,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);const Ge=i.get(x[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function J(E){return Math.min(f,E.samples)}function re(E){const x=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function K(E){const x=a.render.frame;v.get(E)!==x&&(v.set(E,x),E.update())}function xe(E,x){const U=E.colorSpace,Q=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ha||U!==zn&&U!==$t&&(Ze.getTransfer(U)===it?o===!1?e.has("EXT_sRGB")===!0&&Q===en?(E.format=Ha,E.minFilter=Xt,E.generateMipmaps=!1):x=Oh.sRGBToLinear(x):(Q!==en||Z!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}this.allocateTextureUnit=ee,this.resetTextureUnits=V,this.setTexture2D=oe,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=ge,this.rebindTextures=q,this.setupRenderTarget=G,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=He,this.useMultisampledRTT=re}function $S(n,e,t){const i=t.isWebGL2;function r(s,a=$t){let o;const c=Ze.getTransfer(a);if(s===ni)return n.UNSIGNED_BYTE;if(s===Lh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Dh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Lg)return n.BYTE;if(s===Dg)return n.SHORT;if(s===hc)return n.UNSIGNED_SHORT;if(s===Rh)return n.INT;if(s===Zn)return n.UNSIGNED_INT;if(s===Jn)return n.FLOAT;if(s===zr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Pg)return n.ALPHA;if(s===en)return n.RGBA;if(s===Ug)return n.LUMINANCE;if(s===Ig)return n.LUMINANCE_ALPHA;if(s===Ai)return n.DEPTH_COMPONENT;if(s===cr)return n.DEPTH_STENCIL;if(s===Ha)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Fg)return n.RED;if(s===Ph)return n.RED_INTEGER;if(s===Ng)return n.RG;if(s===Uh)return n.RG_INTEGER;if(s===Ih)return n.RGBA_INTEGER;if(s===Fo||s===No||s===Oo||s===ko)if(c===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Fo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Fo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===No)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pl||s===ml||s===gl||s===_l)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ml)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_l)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Og)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vl||s===xl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===vl)return c===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===xl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sl||s===El||s===bl||s===yl||s===Ml||s===Tl||s===Al||s===wl||s===Cl||s===Rl||s===Ll||s===Dl||s===Pl||s===Ul)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Sl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===El)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ml)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Al)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ll)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ul)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bo||s===Il||s===Fl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Bo)return c===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Il)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kg||s===Nl||s===Ol||s===kl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Bo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Nl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ol)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ti?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class YS extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ys extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KS={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;l.inputState.pinching&&h>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(KS)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ZS extends Vt{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:Ai,u!==Ai&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ai&&(i=Zn),i===void 0&&u===cr&&(i=Ti),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class JS extends ur{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,v=null;const g=t.getContextAttributes();let m=null,d=null;const y=[],S=[],b=new jt;b.layers.enable(1),b.viewport=new gt;const A=new jt;A.layers.enable(2),A.viewport=new gt;const C=[b,A],R=new YS;R.layers.enable(1),R.layers.enable(2);let O=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let W=y[N];return W===void 0&&(W=new la,y[N]=W),W.getTargetRaySpace()},this.getControllerGrip=function(N){let W=y[N];return W===void 0&&(W=new la,y[N]=W),W.getGripSpace()},this.getHand=function(N){let W=y[N];return W===void 0&&(W=new la,y[N]=W),W.getHandSpace()};function w(N){const W=S.indexOf(N.inputSource);if(W===-1)return;const ge=y[W];ge!==void 0&&(ge.update(N.inputSource,N.frame,l||a),ge.dispatchEvent({type:N.type,data:N.inputSource}))}function X(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ne);for(let N=0;N<y.length;N++){const W=S[N];W!==null&&(S[N]=null,y[N].disconnect(W))}O=null,M=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,oe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:p}),d=new Ci(p.framebufferWidth,p.framebufferHeight,{format:en,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let W=null,ge=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=g.stencil?cr:Ai,ge=g.stencil?Ti:Zn);const Ee={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),d=new Ci(h.textureWidth,h.textureHeight,{format:en,type:ni,depthTexture:new ZS(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Te=e.properties.get(d);Te.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ne(N){for(let W=0;W<N.removed.length;W++){const ge=N.removed[W],ve=S.indexOf(ge);ve>=0&&(S[ve]=null,y[ve].disconnect(ge))}for(let W=0;W<N.added.length;W++){const ge=N.added[W];let ve=S.indexOf(ge);if(ve===-1){for(let Te=0;Te<y.length;Te++)if(Te>=S.length){S.push(ge),ve=Te;break}else if(S[Te]===null){S[Te]=ge,ve=Te;break}if(ve===-1)break}const Ee=y[ve];Ee&&Ee.connect(ge)}}const ae=new H,L=new H;function k(N,W,ge){ae.setFromMatrixPosition(W.matrixWorld),L.setFromMatrixPosition(ge.matrixWorld);const ve=ae.distanceTo(L),Ee=W.projectionMatrix.elements,Te=ge.projectionMatrix.elements,De=Ee[14]/(Ee[10]-1),Ce=Ee[14]/(Ee[10]+1),Xe=(Ee[9]+1)/Ee[5],ct=(Ee[9]-1)/Ee[5],He=(Ee[8]-1)/Ee[0],_=(Te[8]+1)/Te[0],P=De*He,F=De*_,q=ve/(-He+_),G=q*-He;W.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(G),N.translateZ(q),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const j=De+q,ie=Ce+q,J=P-G,re=F+(ve-G),K=Xe*Ce/ie*j,xe=ct*Ce/ie*j;N.projectionMatrix.makePerspective(J,re,K,xe,j,ie),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function I(N,W){W===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(W.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;R.near=A.near=b.near=N.near,R.far=A.far=b.far=N.far,(O!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,M=R.far);const W=N.parent,ge=R.cameras;I(R,W);for(let ve=0;ve<ge.length;ve++)I(ge[ve],W);ge.length===2?k(R,b,A):R.projectionMatrix.copy(b.projectionMatrix),V(N,R,W)};function V(N,W,ge){ge===null?N.matrix.copy(W.matrixWorld):(N.matrix.copy(ge.matrixWorld),N.matrix.invert(),N.matrix.multiply(W.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(W.projectionMatrix),N.projectionMatrixInverse.copy(W.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Va*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(N){c=N,h!==null&&(h.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let ee=null;function se(N,W){if(u=W.getViewerPose(l||a),v=W,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ve=!1;ge.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ee=0;Ee<ge.length;Ee++){const Te=ge[Ee];let De=null;if(p!==null)De=p.getViewport(Te);else{const Xe=f.getViewSubImage(h,Te);De=Xe.viewport,Ee===0&&(e.setRenderTargetTextures(d,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(d))}let Ce=C[Ee];Ce===void 0&&(Ce=new jt,Ce.layers.enable(Ee),Ce.viewport=new gt,C[Ee]=Ce),Ce.matrix.fromArray(Te.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Te.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(De.x,De.y,De.width,De.height),Ee===0&&(R.matrix.copy(Ce.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(Ce)}}for(let ge=0;ge<y.length;ge++){const ve=S[ge],Ee=y[ge];ve!==null&&Ee!==void 0&&Ee.update(ve,W,l||a)}ee&&ee(N,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),v=null}const oe=new Yh;oe.setAnimationLoop(se),this.setAnimationLoop=function(N){ee=N},this.dispose=function(){}}}function QS(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Xh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,S,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,y,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ot&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ot&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*S,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eE(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,S){const b=S.program;i.uniformBlockBinding(y,b)}function l(y,S){let b=r[y.id];b===void 0&&(v(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",m));const A=S.program;i.updateUBOMapping(y,A);const C=e.render.frame;s[y.id]!==C&&(h(y),s[y.id]=C)}function u(y){const S=f();y.__bindingPointIndex=S;const b=n.createBuffer(),A=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=r[y.id],b=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,R=b.length;C<R;C++){const O=b[C];if(p(O,C,A)===!0){const M=O.__offset,w=Array.isArray(O.value)?O.value:[O.value];let X=0;for(let ne=0;ne<w.length;ne++){const ae=w[ne],L=g(ae);typeof ae=="number"?(O.__data[0]=ae,n.bufferSubData(n.UNIFORM_BUFFER,M+X,O.__data)):ae.isMatrix3?(O.__data[0]=ae.elements[0],O.__data[1]=ae.elements[1],O.__data[2]=ae.elements[2],O.__data[3]=ae.elements[0],O.__data[4]=ae.elements[3],O.__data[5]=ae.elements[4],O.__data[6]=ae.elements[5],O.__data[7]=ae.elements[0],O.__data[8]=ae.elements[6],O.__data[9]=ae.elements[7],O.__data[10]=ae.elements[8],O.__data[11]=ae.elements[0]):(ae.toArray(O.__data,X),X+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,O.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,b){const A=y.value;if(b[S]===void 0){if(typeof A=="number")b[S]=A;else{const C=Array.isArray(A)?A:[A],R=[];for(let O=0;O<C.length;O++)R.push(C[O].clone());b[S]=R}return!0}else if(typeof A=="number"){if(b[S]!==A)return b[S]=A,!0}else{const C=Array.isArray(b[S])?b[S]:[b[S]],R=Array.isArray(A)?A:[A];for(let O=0;O<C.length;O++){const M=C[O];if(M.equals(R[O])===!1)return M.copy(R[O]),!0}}return!1}function v(y){const S=y.uniforms;let b=0;const A=16;let C=0;for(let R=0,O=S.length;R<O;R++){const M=S[R],w={boundary:0,storage:0},X=Array.isArray(M.value)?M.value:[M.value];for(let ne=0,ae=X.length;ne<ae;ne++){const L=X[ne],k=g(L);w.boundary+=k.boundary,w.storage+=k.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,R>0){C=b%A;const ne=A-C;C!==0&&ne-w.boundary<0&&(b+=A-C,M.__offset=b)}b+=w.storage}return C=b%A,C>0&&(b+=A-C),y.__size=b,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class td{constructor(e={}){const{canvas:t=Qg(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;const S=this;let b=!1,A=0,C=0,R=null,O=-1,M=null;const w=new gt,X=new gt;let ne=null;const ae=new Je(0);let L=0,k=t.width,I=t.height,V=1,ee=null,se=null;const oe=new gt(0,0,k,I),N=new gt(0,0,k,I);let W=!1;const ge=new pc;let ve=!1,Ee=!1,Te=null;const De=new ht,Ce=new Ye,Xe=new H,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return R===null?V:1}let _=i;function P(T,B){for(let $=0;$<T.length;$++){const z=T[$],Y=t.getContext(z,B);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fc}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",Se,!1),_===null){const B=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&B.shift(),_=P(B,T),_===null)throw P(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let F,q,G,j,ie,J,re,K,xe,E,x,U,Q,Z,te,me,ce,de,ye,Ge,ue,Ne,Ae,Le;function we(){F=new fx(_),q=new sx(_,F,e),F.init(q),Ne=new $S(_,F,q),G=new XS(_,F,q),j=new px(_),ie=new PS,J=new jS(_,F,G,ie,q,Ne,j),re=new ax(S),K=new ux(S),xe=new M_(_,q),Ae=new ix(_,F,xe,q),E=new hx(_,xe,j,Ae),x=new vx(_,E,xe,j),ye=new _x(_,q,J),me=new ox(ie),U=new DS(S,re,K,F,q,Ae,me),Q=new QS(S,ie),Z=new IS,te=new zS(F,q),de=new nx(S,re,K,G,x,h,c),ce=new qS(S,x,q),Le=new eE(_,j,q,G),Ge=new rx(_,F,j,q),ue=new dx(_,F,j,q),j.programs=U.programs,S.capabilities=q,S.extensions=F,S.properties=ie,S.renderLists=Z,S.shadowMap=ce,S.state=G,S.info=j}we();const D=new JS(S,_);this.xr=D,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const T=F.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=F.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(k,I,!1))},this.getSize=function(T){return T.set(k,I)},this.setSize=function(T,B,$=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,I=B,t.width=Math.floor(T*V),t.height=Math.floor(B*V),$===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(k*V,I*V).floor()},this.setDrawingBufferSize=function(T,B,$){k=T,I=B,V=$,t.width=Math.floor(T*$),t.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,B,$,z){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,B,$,z),G.viewport(w.copy(oe).multiplyScalar(V).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,B,$,z){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,B,$,z),G.scissor(X.copy(N).multiplyScalar(V).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(T){G.setScissorTest(W=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){se=T},this.getClearColor=function(T){return T.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(T=!0,B=!0,$=!0){let z=0;if(T){let Y=!1;if(R!==null){const be=R.texture.format;Y=be===Ih||be===Uh||be===Ph}if(Y){const be=R.texture.type,Re=be===ni||be===Zn||be===hc||be===Ti||be===Lh||be===Dh,Ue=de.getClearColor(),Ie=de.getClearAlpha(),We=Ue.r,Pe=Ue.g,Be=Ue.b;Re?(p[0]=We,p[1]=Pe,p[2]=Be,p[3]=Ie,_.clearBufferuiv(_.COLOR,0,p)):(v[0]=We,v[1]=Pe,v[2]=Be,v[3]=Ie,_.clearBufferiv(_.COLOR,0,v))}else z|=_.COLOR_BUFFER_BIT}B&&(z|=_.DEPTH_BUFFER_BIT),$&&(z|=_.STENCIL_BUFFER_BIT),_.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Z.dispose(),te.dispose(),ie.dispose(),re.dispose(),K.dispose(),x.dispose(),Ae.dispose(),Le.dispose(),U.dispose(),D.dispose(),D.removeEventListener("sessionstart",nt),D.removeEventListener("sessionend",cn),Te&&(Te.dispose(),Te=null),At.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=j.autoReset,B=ce.enabled,$=ce.autoUpdate,z=ce.needsUpdate,Y=ce.type;we(),j.autoReset=T,ce.enabled=B,ce.autoUpdate=$,ce.needsUpdate=z,ce.type=Y}function Se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _e(T){const B=T.target;B.removeEventListener("dispose",_e),le(B)}function le(T){Me(T),ie.remove(T)}function Me(T){const B=ie.get(T).programs;B!==void 0&&(B.forEach(function($){U.releaseProgram($)}),T.isShaderMaterial&&U.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,z,Y,be){B===null&&(B=ct);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,Ue=vd(T,B,$,z,Y);G.setMaterial(z,Re);let Ie=$.index,We=1;if(z.wireframe===!0){if(Ie=E.getWireframeAttribute($),Ie===void 0)return;We=2}const Pe=$.drawRange,Be=$.attributes.position;let ot=Pe.start*We,at=(Pe.start+Pe.count)*We;be!==null&&(ot=Math.max(ot,be.start*We),at=Math.min(at,(be.start+be.count)*We)),Ie!==null?(ot=Math.max(ot,0),at=Math.min(at,Ie.count)):Be!=null&&(ot=Math.max(ot,0),at=Math.min(at,Be.count));const Wt=at-ot;if(Wt<0||Wt===1/0)return;Ae.setup(Y,z,Ue,$,Ie);let xn,lt=Ge;if(Ie!==null&&(xn=xe.get(Ie),lt=ue,lt.setIndex(xn)),Y.isMesh)z.wireframe===!0?(G.setLineWidth(z.wireframeLinewidth*He()),lt.setMode(_.LINES)):lt.setMode(_.TRIANGLES);else if(Y.isLine){let qe=z.linewidth;qe===void 0&&(qe=1),G.setLineWidth(qe*He()),Y.isLineSegments?lt.setMode(_.LINES):Y.isLineLoop?lt.setMode(_.LINE_LOOP):lt.setMode(_.LINE_STRIP)}else Y.isPoints?lt.setMode(_.POINTS):Y.isSprite&&lt.setMode(_.TRIANGLES);if(Y.isInstancedMesh)lt.renderInstances(ot,Wt,Y.count);else if($.isInstancedBufferGeometry){const qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,_o=Math.min($.instanceCount,qe);lt.renderInstances(ot,Wt,_o)}else lt.render(ot,Wt)},this.compile=function(T,B){function $(z,Y,be){z.transparent===!0&&z.side===Un&&z.forceSinglePass===!1?(z.side=Ot,z.needsUpdate=!0,Jr(z,Y,be),z.side=si,z.needsUpdate=!0,Jr(z,Y,be),z.side=Un):Jr(z,Y,be)}m=te.get(T),m.init(),y.push(m),T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(S._useLegacyLights),T.traverse(function(z){const Y=z.material;if(Y)if(Array.isArray(Y))for(let be=0;be<Y.length;be++){const Re=Y[be];$(Re,T,z)}else $(Y,T,z)}),y.pop(),m=null};let Oe=null;function Tt(T){Oe&&Oe(T)}function nt(){At.stop()}function cn(){At.start()}const At=new Yh;At.setAnimationLoop(Tt),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(T){Oe=T,D.setAnimationLoop(T),T===null?At.stop():At.start()},D.addEventListener("sessionstart",nt),D.addEventListener("sessionend",cn),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(B),B=D.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,R),m=te.get(T,y.length),m.init(),y.push(m),De.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ge.setFromProjectionMatrix(De),Ee=this.localClippingEnabled,ve=me.init(this.clippingPlanes,Ee),g=Z.get(T,d.length),g.init(),d.push(g),Mc(T,B,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(ee,se),this.info.render.frame++,ve===!0&&me.beginShadows();const $=m.state.shadowsArray;if(ce.render($,T,B),ve===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(g,T),m.setupLights(S._useLegacyLights),B.isArrayCamera){const z=B.cameras;for(let Y=0,be=z.length;Y<be;Y++){const Re=z[Y];Tc(g,T,Re,Re.viewport)}}else Tc(g,T,B);R!==null&&(J.updateMultisampleRenderTarget(R),J.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(S,T,B),Ae.resetDefaultState(),O=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Mc(T,B,$,z){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ge.intersectsSprite(T)){z&&Xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(De);const Re=x.update(T),Ue=T.material;Ue.visible&&g.push(T,Re,Ue,$,Xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ge.intersectsObject(T))){const Re=x.update(T),Ue=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xe.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Xe.copy(Re.boundingSphere.center)),Xe.applyMatrix4(T.matrixWorld).applyMatrix4(De)),Array.isArray(Ue)){const Ie=Re.groups;for(let We=0,Pe=Ie.length;We<Pe;We++){const Be=Ie[We],ot=Ue[Be.materialIndex];ot&&ot.visible&&g.push(T,Re,ot,$,Xe.z,Be)}}else Ue.visible&&g.push(T,Re,Ue,$,Xe.z,null)}}const be=T.children;for(let Re=0,Ue=be.length;Re<Ue;Re++)Mc(be[Re],B,$,z)}function Tc(T,B,$,z){const Y=T.opaque,be=T.transmissive,Re=T.transparent;m.setupLightsView($),ve===!0&&me.setGlobalState(S.clippingPlanes,$),be.length>0&&_d(Y,be,B,$),z&&G.viewport(w.copy(z)),Y.length>0&&Zr(Y,B,$),be.length>0&&Zr(be,B,$),Re.length>0&&Zr(Re,B,$),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function _d(T,B,$,z){const Y=q.isWebGL2;Te===null&&(Te=new Ci(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")?zr:ni,minFilter:Br,samples:Y?4:0})),S.getDrawingBufferSize(Ce),Y?Te.setSize(Ce.x,Ce.y):Te.setSize(Ga(Ce.x),Ga(Ce.y));const be=S.getRenderTarget();S.setRenderTarget(Te),S.getClearColor(ae),L=S.getClearAlpha(),L<1&&S.setClearColor(16777215,.5),S.clear();const Re=S.toneMapping;S.toneMapping=ti,Zr(T,$,z),J.updateMultisampleRenderTarget(Te),J.updateRenderTargetMipmap(Te);let Ue=!1;for(let Ie=0,We=B.length;Ie<We;Ie++){const Pe=B[Ie],Be=Pe.object,ot=Pe.geometry,at=Pe.material,Wt=Pe.group;if(at.side===Un&&Be.layers.test(z.layers)){const xn=at.side;at.side=Ot,at.needsUpdate=!0,Ac(Be,$,z,ot,at,Wt),at.side=xn,at.needsUpdate=!0,Ue=!0}}Ue===!0&&(J.updateMultisampleRenderTarget(Te),J.updateRenderTargetMipmap(Te)),S.setRenderTarget(be),S.setClearColor(ae,L),S.toneMapping=Re}function Zr(T,B,$){const z=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,be=T.length;Y<be;Y++){const Re=T[Y],Ue=Re.object,Ie=Re.geometry,We=z===null?Re.material:z,Pe=Re.group;Ue.layers.test($.layers)&&Ac(Ue,B,$,Ie,We,Pe)}}function Ac(T,B,$,z,Y,be){T.onBeforeRender(S,B,$,z,Y,be),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(S,B,$,z,T,be),Y.transparent===!0&&Y.side===Un&&Y.forceSinglePass===!1?(Y.side=Ot,Y.needsUpdate=!0,S.renderBufferDirect($,B,z,Y,T,be),Y.side=si,Y.needsUpdate=!0,S.renderBufferDirect($,B,z,Y,T,be),Y.side=Un):S.renderBufferDirect($,B,z,Y,T,be),T.onAfterRender(S,B,$,z,Y,be)}function Jr(T,B,$){B.isScene!==!0&&(B=ct);const z=ie.get(T),Y=m.state.lights,be=m.state.shadowsArray,Re=Y.state.version,Ue=U.getParameters(T,Y.state,be,B,$),Ie=U.getProgramCacheKey(Ue);let We=z.programs;z.environment=T.isMeshStandardMaterial?B.environment:null,z.fog=B.fog,z.envMap=(T.isMeshStandardMaterial?K:re).get(T.envMap||z.environment),We===void 0&&(T.addEventListener("dispose",_e),We=new Map,z.programs=We);let Pe=We.get(Ie);if(Pe!==void 0){if(z.currentProgram===Pe&&z.lightsStateVersion===Re)return wc(T,Ue),Pe}else Ue.uniforms=U.getUniforms(T),T.onBuild($,Ue,S),T.onBeforeCompile(Ue,S),Pe=U.acquireProgram(Ue,Ie),We.set(Ie,Pe),z.uniforms=Ue.uniforms;const Be=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=me.uniform),wc(T,Ue),z.needsLights=Sd(T),z.lightsStateVersion=Re,z.needsLights&&(Be.ambientLightColor.value=Y.state.ambient,Be.lightProbe.value=Y.state.probe,Be.directionalLights.value=Y.state.directional,Be.directionalLightShadows.value=Y.state.directionalShadow,Be.spotLights.value=Y.state.spot,Be.spotLightShadows.value=Y.state.spotShadow,Be.rectAreaLights.value=Y.state.rectArea,Be.ltc_1.value=Y.state.rectAreaLTC1,Be.ltc_2.value=Y.state.rectAreaLTC2,Be.pointLights.value=Y.state.point,Be.pointLightShadows.value=Y.state.pointShadow,Be.hemisphereLights.value=Y.state.hemi,Be.directionalShadowMap.value=Y.state.directionalShadowMap,Be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Be.spotShadowMap.value=Y.state.spotShadowMap,Be.spotLightMatrix.value=Y.state.spotLightMatrix,Be.spotLightMap.value=Y.state.spotLightMap,Be.pointShadowMap.value=Y.state.pointShadowMap,Be.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ot=Pe.getUniforms(),at=Ls.seqWithValue(ot.seq,Be);return z.currentProgram=Pe,z.uniformsList=at,Pe}function wc(T,B){const $=ie.get(T);$.outputColorSpace=B.outputColorSpace,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function vd(T,B,$,z,Y){B.isScene!==!0&&(B=ct),J.resetTextureUnits();const be=B.fog,Re=z.isMeshStandardMaterial?B.environment:null,Ue=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zn,Ie=(z.isMeshStandardMaterial?K:re).get(z.envMap||Re),We=z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Pe=!!$.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Be=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,at=!!$.morphAttributes.color;let Wt=ti;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Wt=S.toneMapping);const xn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,lt=xn!==void 0?xn.length:0,qe=ie.get(z),_o=m.state.lights;if(ve===!0&&(Ee===!0||T!==M)){const kt=T===M&&z.id===O;me.setState(z,T,kt)}let ut=!1;z.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==_o.state.version||qe.outputColorSpace!==Ue||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||qe.envMap!==Ie||z.fog===!0&&qe.fog!==be||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==me.numPlanes||qe.numIntersection!==me.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==Pe||qe.morphTargets!==Be||qe.morphNormals!==ot||qe.morphColors!==at||qe.toneMapping!==Wt||q.isWebGL2===!0&&qe.morphTargetsCount!==lt)&&(ut=!0):(ut=!0,qe.__version=z.version);let ai=qe.currentProgram;ut===!0&&(ai=Jr(z,B,Y));let Cc=!1,mr=!1,vo=!1;const wt=ai.getUniforms(),ci=qe.uniforms;if(G.useProgram(ai.program)&&(Cc=!0,mr=!0,vo=!0),z.id!==O&&(O=z.id,mr=!0),Cc||M!==T){wt.setValue(_,"projectionMatrix",T.projectionMatrix),wt.setValue(_,"viewMatrix",T.matrixWorldInverse);const kt=wt.map.cameraPosition;kt!==void 0&&kt.setValue(_,Xe.setFromMatrixPosition(T.matrixWorld)),q.logarithmicDepthBuffer&&wt.setValue(_,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&wt.setValue(_,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,mr=!0,vo=!0)}if(Y.isSkinnedMesh){wt.setOptional(_,Y,"bindMatrix"),wt.setOptional(_,Y,"bindMatrixInverse");const kt=Y.skeleton;kt&&(q.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),wt.setValue(_,"boneTexture",kt.boneTexture,J),wt.setValue(_,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xo=$.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0&&q.isWebGL2===!0)&&ye.update(Y,$,ai),(mr||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,wt.setValue(_,"receiveShadow",Y.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ci.envMap.value=Ie,ci.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),mr&&(wt.setValue(_,"toneMappingExposure",S.toneMappingExposure),qe.needsLights&&xd(ci,vo),be&&z.fog===!0&&Q.refreshFogUniforms(ci,be),Q.refreshMaterialUniforms(ci,z,V,I,Te),Ls.upload(_,qe.uniformsList,ci,J)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ls.upload(_,qe.uniformsList,ci,J),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&wt.setValue(_,"center",Y.center),wt.setValue(_,"modelViewMatrix",Y.modelViewMatrix),wt.setValue(_,"normalMatrix",Y.normalMatrix),wt.setValue(_,"modelMatrix",Y.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const kt=z.uniformsGroups;for(let So=0,Ed=kt.length;So<Ed;So++)if(q.isWebGL2){const Rc=kt[So];Le.update(Rc,ai),Le.bind(Rc,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function xd(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Sd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,$){ie.get(T.texture).__webglTexture=B,ie.get(T.depthTexture).__webglTexture=$;const z=ie.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=$===void 0,z.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const $=ie.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){R=T,A=B,C=$;let z=!0,Y=null,be=!1,Re=!1;if(T){const Ie=ie.get(T);Ie.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(_.FRAMEBUFFER,null),z=!1):Ie.__webglFramebuffer===void 0?J.setupRenderTarget(T):Ie.__hasExternalTextures&&J.rebindTextures(T,ie.get(T.texture).__webglTexture,ie.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const Pe=ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[B])?Y=Pe[B][$]:Y=Pe[B],be=!0):q.isWebGL2&&T.samples>0&&J.useMultisampledRTT(T)===!1?Y=ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?Y=Pe[$]:Y=Pe,w.copy(T.viewport),X.copy(T.scissor),ne=T.scissorTest}else w.copy(oe).multiplyScalar(V).floor(),X.copy(N).multiplyScalar(V).floor(),ne=W;if(G.bindFramebuffer(_.FRAMEBUFFER,Y)&&q.drawBuffers&&z&&G.drawBuffers(T,Y),G.viewport(w),G.scissor(X),G.setScissorTest(ne),be){const Ie=ie.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ie.__webglTexture,$)}else if(Re){const Ie=ie.get(T.texture),We=B||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ie.__webglTexture,$||0,We)}O=-1},this.readRenderTargetPixels=function(T,B,$,z,Y,be,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){G.bindFramebuffer(_.FRAMEBUFFER,Ue);try{const Ie=T.texture,We=Ie.format,Pe=Ie.type;if(We!==en&&Ne.convert(We)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Pe===zr&&(F.has("EXT_color_buffer_half_float")||q.isWebGL2&&F.has("EXT_color_buffer_float"));if(Pe!==ni&&Ne.convert(Pe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Jn&&(q.isWebGL2||F.has("OES_texture_float")||F.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-z&&$>=0&&$<=T.height-Y&&_.readPixels(B,$,z,Y,Ne.convert(We),Ne.convert(Pe),be)}finally{const Ie=R!==null?ie.get(R).__webglFramebuffer:null;G.bindFramebuffer(_.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(T,B,$=0){const z=Math.pow(2,-$),Y=Math.floor(B.image.width*z),be=Math.floor(B.image.height*z);J.setTexture2D(B,0),_.copyTexSubImage2D(_.TEXTURE_2D,$,0,0,T.x,T.y,Y,be),G.unbindTexture()},this.copyTextureToTexture=function(T,B,$,z=0){const Y=B.image.width,be=B.image.height,Re=Ne.convert($.format),Ue=Ne.convert($.type);J.setTexture2D($,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,$.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,z,T.x,T.y,Y,be,Re,Ue,B.image.data):B.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,z,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Re,B.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,z,T.x,T.y,Re,Ue,B.image),z===0&&$.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$,z,Y=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=T.max.x-T.min.x+1,Re=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Ie=Ne.convert(z.format),We=Ne.convert(z.type);let Pe;if(z.isData3DTexture)J.setTexture3D(z,0),Pe=_.TEXTURE_3D;else if(z.isDataArrayTexture)J.setTexture2DArray(z,0),Pe=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,z.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,z.unpackAlignment);const Be=_.getParameter(_.UNPACK_ROW_LENGTH),ot=_.getParameter(_.UNPACK_IMAGE_HEIGHT),at=_.getParameter(_.UNPACK_SKIP_PIXELS),Wt=_.getParameter(_.UNPACK_SKIP_ROWS),xn=_.getParameter(_.UNPACK_SKIP_IMAGES),lt=$.isCompressedTexture?$.mipmaps[0]:$.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,lt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,lt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,T.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,T.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?_.texSubImage3D(Pe,Y,B.x,B.y,B.z,be,Re,Ue,Ie,We,lt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(Pe,Y,B.x,B.y,B.z,be,Re,Ue,Ie,lt.data)):_.texSubImage3D(Pe,Y,B.x,B.y,B.z,be,Re,Ue,Ie,We,lt),_.pixelStorei(_.UNPACK_ROW_LENGTH,Be),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ot),_.pixelStorei(_.UNPACK_SKIP_PIXELS,at),_.pixelStorei(_.UNPACK_SKIP_ROWS,Wt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,xn),Y===0&&z.generateMipmaps&&_.generateMipmap(Pe),G.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),G.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,G.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dc?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===io?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?wi:Fh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wi?vt:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tE extends td{}tE.prototype.isWebGL1Renderer=!0;class nE extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class nd extends jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Au=new H,wu=new H,Cu=new ht,ua=new zh,Ms=new ro;class iE extends xt{constructor(e=new Vn,t=new nd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Au.fromBufferAttribute(t,r-1),wu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Au.distanceTo(wu);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(r),Ms.radius+=s,e.ray.intersectsSphere(Ms)===!1)return;Cu.copy(r).invert(),ua.copy(e.ray).applyMatrix4(Cu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new H,u=new H,f=new H,h=new H,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const d=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let S=d,b=y-1;S<b;S+=p){const A=v.getX(S),C=v.getX(S+1);if(l.fromBufferAttribute(m,A),u.fromBufferAttribute(m,C),ua.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(h);O<e.near||O>e.far||t.push({distance:O,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let S=d,b=y-1;S<b;S+=p){if(l.fromBufferAttribute(m,S),u.fromBufferAttribute(m,S+1),ua.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ru=new H,Lu=new H;class rE extends iE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ru.fromBufferAttribute(t,r),Lu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ru.distanceTo(Lu);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class id extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fa=new ht,Du=new H,Pu=new H;class sE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pu),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oE extends sE{constructor(){super(new Kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aE extends id{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new oE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cE extends id{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const _c=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};function lE(){const n=[];for(let e=0;e<16;e++){const t=[e&1?1:-1,e&2?1:-1,e&4?1:-1,e&8?1:-1];n.push(t)}return n}function uE(){const n=[];for(let e=0;e<16;e++)for(let t=e+1;t<16;t++){let i=0;for(let r=0;r<4;r++)(e>>r&1)!==(t>>r&1)&&i++;i===1&&n.push([e,t])}return n}const fE={name:"Landing",methods:{enterKB(){location.hash="#/kb"}},mounted(){const n=this.$refs.canvas,e=n.parentElement.clientWidth,t=n.parentElement.clientHeight;n.width=e,n.height=t;const i=new td({canvas:n,antialias:!0,alpha:!0});i.setSize(e,t),i.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const r=new nE;r.background=new Je(462888);const s=new jt(45,e/t,.1,1e3);s.position.set(0,0,6);const a=new aE(16777215,.9);a.position.set(5,5,5),r.add(a),r.add(new cE(4210768,.6));const o=lE(),c=uE(),l=new Float32Array(c.length*2*3),u=new Vn;u.setAttribute("position",new sn(l,3));const f=new nd({color:10216447,linewidth:2}),h=new rE(u,f);r.add(h);let p=.2,v=.4,g=!1,m=0,d=0;n.addEventListener("pointerdown",R=>{g=!0,m=R.clientX,d=R.clientY}),window.addEventListener("pointerup",()=>g=!1),window.addEventListener("pointermove",R=>{if(!g)return;const O=(R.clientX-m)*.01,M=(R.clientY-d)*.01;p+=M,v+=O,m=R.clientX,d=R.clientY});const y=(R,O)=>{const[M,w,X,ne]=R,ae=Math.cos(O.aXY),L=Math.sin(O.aXY),k=Math.cos(O.aZW),I=Math.sin(O.aZW),V=M*ae-w*L,ee=M*L+w*ae,se=X*k-ne*I,oe=X*I+ne*k,N=3,W=N/(N-oe);return[V*W*.8,ee*W*.8,se*W*.8]},S=R=>{for(let O=0;O<c.length;O++){const[M,w]=c[O],X=y(o[M],R),ne=y(o[w],R);l[O*6+0]=X[0],l[O*6+1]=X[1],l[O*6+2]=X[2],l[O*6+3]=ne[0],l[O*6+4]=ne[1],l[O*6+5]=ne[2]}u.attributes.position.needsUpdate=!0};S({aXY:p,aZW:v});let b;const A=()=>{p+=.005,v+=.007,S({aXY:p,aZW:v}),h.rotation.y+=.005,i.render(r,s),b=requestAnimationFrame(A)};A(),this._teardown=()=>{cancelAnimationFrame(b),i.dispose()},this.resetView=()=>{p=.2,v=.4},n.addEventListener("click",()=>this.enterKB());const C=()=>{const R=n.parentElement.clientWidth,O=n.parentElement.clientHeight;n.width=R,n.height=O,i.setSize(R,O),s.aspect=R/O,s.updateProjectionMatrix()};window.addEventListener("resize",C),this._resize=C},beforeUnmount(){this._teardown&&this._teardown(),this._resize&&window.removeEventListener("resize",this._resize)}},hE={class:"landing"},dE={ref:"canvas"};function pE(n,e,t,i,r,s){return Pn(),xi("div",hE,[e[3]||(e[3]=rt("h2",null,"Landing",-1)),e[4]||(e[4]=rt("p",null,"Interactive 4D tesseract — click the shape to enter the knowledge base.",-1)),rt("div",{id:"viz",onClick:e[1]||(e[1]=(...a)=>s.enterKB&&s.enterKB(...a)),style:{position:"relative",width:"800px",height:"500px","border-radius":"10px",overflow:"hidden","box-shadow":"0 8px 30px rgba(2,6,23,0.4)"}},[rt("canvas",dE,null,512),rt("button",{onClick:e[0]||(e[0]=ks((...a)=>n.resetView&&n.resetView(...a),["stop"])),style:{position:"absolute",left:"12px",top:"12px","z-index":"10"}},"Reset view"),e[2]||(e[2]=rt("div",{style:{position:"absolute",right:"12px",top:"12px","z-index":"10",color:"#fff","font-size":"13px","text-shadow":"0 1px 3px rgba(0,0,0,0.6)"}},"Click shape to enter KB",-1))])])}const mE=_c(fE,[["render",pE],["__scopeId","data-v-f1749167"]]),gE="modulepreload",_E=function(n){return"/"+n},Uu={},$n=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=_E(c),c in Uu)return;Uu[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":gE,l||(f.as="script"),f.crossOrigin="",f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),l)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};function vE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function xE(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var je={};const SE="Á",EE="á",bE="Ă",yE="ă",ME="∾",TE="∿",AE="∾̳",wE="Â",CE="â",RE="´",LE="А",DE="а",PE="Æ",UE="æ",IE="⁡",FE="𝔄",NE="𝔞",OE="À",kE="à",BE="ℵ",zE="ℵ",HE="Α",VE="α",GE="Ā",WE="ā",qE="⨿",XE="&",jE="&",$E="⩕",YE="⩓",KE="∧",ZE="⩜",JE="⩘",QE="⩚",eb="∠",tb="⦤",nb="∠",ib="⦨",rb="⦩",sb="⦪",ob="⦫",ab="⦬",cb="⦭",lb="⦮",ub="⦯",fb="∡",hb="∟",db="⊾",pb="⦝",mb="∢",gb="Å",_b="⍼",vb="Ą",xb="ą",Sb="𝔸",Eb="𝕒",bb="⩯",yb="≈",Mb="⩰",Tb="≊",Ab="≋",wb="'",Cb="⁡",Rb="≈",Lb="≊",Db="Å",Pb="å",Ub="𝒜",Ib="𝒶",Fb="≔",Nb="*",Ob="≈",kb="≍",Bb="Ã",zb="ã",Hb="Ä",Vb="ä",Gb="∳",Wb="⨑",qb="≌",Xb="϶",jb="‵",$b="∽",Yb="⋍",Kb="∖",Zb="⫧",Jb="⊽",Qb="⌅",ey="⌆",ty="⌅",ny="⎵",iy="⎶",ry="≌",sy="Б",oy="б",ay="„",cy="∵",ly="∵",uy="∵",fy="⦰",hy="϶",dy="ℬ",py="ℬ",my="Β",gy="β",_y="ℶ",vy="≬",xy="𝔅",Sy="𝔟",Ey="⋂",by="◯",yy="⋃",My="⨀",Ty="⨁",Ay="⨂",wy="⨆",Cy="★",Ry="▽",Ly="△",Dy="⨄",Py="⋁",Uy="⋀",Iy="⤍",Fy="⧫",Ny="▪",Oy="▴",ky="▾",By="◂",zy="▸",Hy="␣",Vy="▒",Gy="░",Wy="▓",qy="█",Xy="=⃥",jy="≡⃥",$y="⫭",Yy="⌐",Ky="𝔹",Zy="𝕓",Jy="⊥",Qy="⊥",eM="⋈",tM="⧉",nM="┐",iM="╕",rM="╖",sM="╗",oM="┌",aM="╒",cM="╓",lM="╔",uM="─",fM="═",hM="┬",dM="╤",pM="╥",mM="╦",gM="┴",_M="╧",vM="╨",xM="╩",SM="⊟",EM="⊞",bM="⊠",yM="┘",MM="╛",TM="╜",AM="╝",wM="└",CM="╘",RM="╙",LM="╚",DM="│",PM="║",UM="┼",IM="╪",FM="╫",NM="╬",OM="┤",kM="╡",BM="╢",zM="╣",HM="├",VM="╞",GM="╟",WM="╠",qM="‵",XM="˘",jM="˘",$M="¦",YM="𝒷",KM="ℬ",ZM="⁏",JM="∽",QM="⋍",eT="⧅",tT="\\",nT="⟈",iT="•",rT="•",sT="≎",oT="⪮",aT="≏",cT="≎",lT="≏",uT="Ć",fT="ć",hT="⩄",dT="⩉",pT="⩋",mT="∩",gT="⋒",_T="⩇",vT="⩀",xT="ⅅ",ST="∩︀",ET="⁁",bT="ˇ",yT="ℭ",MT="⩍",TT="Č",AT="č",wT="Ç",CT="ç",RT="Ĉ",LT="ĉ",DT="∰",PT="⩌",UT="⩐",IT="Ċ",FT="ċ",NT="¸",OT="¸",kT="⦲",BT="¢",zT="·",HT="·",VT="𝔠",GT="ℭ",WT="Ч",qT="ч",XT="✓",jT="✓",$T="Χ",YT="χ",KT="ˆ",ZT="≗",JT="↺",QT="↻",eA="⊛",tA="⊚",nA="⊝",iA="⊙",rA="®",sA="Ⓢ",oA="⊖",aA="⊕",cA="⊗",lA="○",uA="⧃",fA="≗",hA="⨐",dA="⫯",pA="⧂",mA="∲",gA="”",_A="’",vA="♣",xA="♣",SA=":",EA="∷",bA="⩴",yA="≔",MA="≔",TA=",",AA="@",wA="∁",CA="∘",RA="∁",LA="ℂ",DA="≅",PA="⩭",UA="≡",IA="∮",FA="∯",NA="∮",OA="𝕔",kA="ℂ",BA="∐",zA="∐",HA="©",VA="©",GA="℗",WA="∳",qA="↵",XA="✗",jA="⨯",$A="𝒞",YA="𝒸",KA="⫏",ZA="⫑",JA="⫐",QA="⫒",ew="⋯",tw="⤸",nw="⤵",iw="⋞",rw="⋟",sw="↶",ow="⤽",aw="⩈",cw="⩆",lw="≍",uw="∪",fw="⋓",hw="⩊",dw="⊍",pw="⩅",mw="∪︀",gw="↷",_w="⤼",vw="⋞",xw="⋟",Sw="⋎",Ew="⋏",bw="¤",yw="↶",Mw="↷",Tw="⋎",Aw="⋏",ww="∲",Cw="∱",Rw="⌭",Lw="†",Dw="‡",Pw="ℸ",Uw="↓",Iw="↡",Fw="⇓",Nw="‐",Ow="⫤",kw="⊣",Bw="⤏",zw="˝",Hw="Ď",Vw="ď",Gw="Д",Ww="д",qw="‡",Xw="⇊",jw="ⅅ",$w="ⅆ",Yw="⤑",Kw="⩷",Zw="°",Jw="∇",Qw="Δ",eC="δ",tC="⦱",nC="⥿",iC="𝔇",rC="𝔡",sC="⥥",oC="⇃",aC="⇂",cC="´",lC="˙",uC="˝",fC="`",hC="˜",dC="⋄",pC="⋄",mC="⋄",gC="♦",_C="♦",vC="¨",xC="ⅆ",SC="ϝ",EC="⋲",bC="÷",yC="÷",MC="⋇",TC="⋇",AC="Ђ",wC="ђ",CC="⌞",RC="⌍",LC="$",DC="𝔻",PC="𝕕",UC="¨",IC="˙",FC="⃜",NC="≐",OC="≑",kC="≐",BC="∸",zC="∔",HC="⊡",VC="⌆",GC="∯",WC="¨",qC="⇓",XC="⇐",jC="⇔",$C="⫤",YC="⟸",KC="⟺",ZC="⟹",JC="⇒",QC="⊨",eR="⇑",tR="⇕",nR="∥",iR="⤓",rR="↓",sR="↓",oR="⇓",aR="⇵",cR="̑",lR="⇊",uR="⇃",fR="⇂",hR="⥐",dR="⥞",pR="⥖",mR="↽",gR="⥟",_R="⥗",vR="⇁",xR="↧",SR="⊤",ER="⤐",bR="⌟",yR="⌌",MR="𝒟",TR="𝒹",AR="Ѕ",wR="ѕ",CR="⧶",RR="Đ",LR="đ",DR="⋱",PR="▿",UR="▾",IR="⇵",FR="⥯",NR="⦦",OR="Џ",kR="џ",BR="⟿",zR="É",HR="é",VR="⩮",GR="Ě",WR="ě",qR="Ê",XR="ê",jR="≖",$R="≕",YR="Э",KR="э",ZR="⩷",JR="Ė",QR="ė",e1="≑",t1="ⅇ",n1="≒",i1="𝔈",r1="𝔢",s1="⪚",o1="È",a1="è",c1="⪖",l1="⪘",u1="⪙",f1="∈",h1="⏧",d1="ℓ",p1="⪕",m1="⪗",g1="Ē",_1="ē",v1="∅",x1="∅",S1="◻",E1="∅",b1="▫",y1=" ",M1=" ",T1=" ",A1="Ŋ",w1="ŋ",C1=" ",R1="Ę",L1="ę",D1="𝔼",P1="𝕖",U1="⋕",I1="⧣",F1="⩱",N1="ε",O1="Ε",k1="ε",B1="ϵ",z1="≖",H1="≕",V1="≂",G1="⪖",W1="⪕",q1="⩵",X1="=",j1="≂",$1="≟",Y1="⇌",K1="≡",Z1="⩸",J1="⧥",Q1="⥱",eL="≓",tL="ℯ",nL="ℰ",iL="≐",rL="⩳",sL="≂",oL="Η",aL="η",cL="Ð",lL="ð",uL="Ë",fL="ë",hL="€",dL="!",pL="∃",mL="∃",gL="ℰ",_L="ⅇ",vL="ⅇ",xL="≒",SL="Ф",EL="ф",bL="♀",yL="ﬃ",ML="ﬀ",TL="ﬄ",AL="𝔉",wL="𝔣",CL="ﬁ",RL="◼",LL="▪",DL="fj",PL="♭",UL="ﬂ",IL="▱",FL="ƒ",NL="𝔽",OL="𝕗",kL="∀",BL="∀",zL="⋔",HL="⫙",VL="ℱ",GL="⨍",WL="½",qL="⅓",XL="¼",jL="⅕",$L="⅙",YL="⅛",KL="⅔",ZL="⅖",JL="¾",QL="⅗",eD="⅜",tD="⅘",nD="⅚",iD="⅝",rD="⅞",sD="⁄",oD="⌢",aD="𝒻",cD="ℱ",lD="ǵ",uD="Γ",fD="γ",hD="Ϝ",dD="ϝ",pD="⪆",mD="Ğ",gD="ğ",_D="Ģ",vD="Ĝ",xD="ĝ",SD="Г",ED="г",bD="Ġ",yD="ġ",MD="≥",TD="≧",AD="⪌",wD="⋛",CD="≥",RD="≧",LD="⩾",DD="⪩",PD="⩾",UD="⪀",ID="⪂",FD="⪄",ND="⋛︀",OD="⪔",kD="𝔊",BD="𝔤",zD="≫",HD="⋙",VD="⋙",GD="ℷ",WD="Ѓ",qD="ѓ",XD="⪥",jD="≷",$D="⪒",YD="⪤",KD="⪊",ZD="⪊",JD="⪈",QD="≩",eP="⪈",tP="≩",nP="⋧",iP="𝔾",rP="𝕘",sP="`",oP="≥",aP="⋛",cP="≧",lP="⪢",uP="≷",fP="⩾",hP="≳",dP="𝒢",pP="ℊ",mP="≳",gP="⪎",_P="⪐",vP="⪧",xP="⩺",SP=">",EP=">",bP="≫",yP="⋗",MP="⦕",TP="⩼",AP="⪆",wP="⥸",CP="⋗",RP="⋛",LP="⪌",DP="≷",PP="≳",UP="≩︀",IP="≩︀",FP="ˇ",NP=" ",OP="½",kP="ℋ",BP="Ъ",zP="ъ",HP="⥈",VP="↔",GP="⇔",WP="↭",qP="^",XP="ℏ",jP="Ĥ",$P="ĥ",YP="♥",KP="♥",ZP="…",JP="⊹",QP="𝔥",e2="ℌ",t2="ℋ",n2="⤥",i2="⤦",r2="⇿",s2="∻",o2="↩",a2="↪",c2="𝕙",l2="ℍ",u2="―",f2="─",h2="𝒽",d2="ℋ",p2="ℏ",m2="Ħ",g2="ħ",_2="≎",v2="≏",x2="⁃",S2="‐",E2="Í",b2="í",y2="⁣",M2="Î",T2="î",A2="И",w2="и",C2="İ",R2="Е",L2="е",D2="¡",P2="⇔",U2="𝔦",I2="ℑ",F2="Ì",N2="ì",O2="ⅈ",k2="⨌",B2="∭",z2="⧜",H2="℩",V2="Ĳ",G2="ĳ",W2="Ī",q2="ī",X2="ℑ",j2="ⅈ",$2="ℐ",Y2="ℑ",K2="ı",Z2="ℑ",J2="⊷",Q2="Ƶ",eU="⇒",tU="℅",nU="∞",iU="⧝",rU="ı",sU="⊺",oU="∫",aU="∬",cU="ℤ",lU="∫",uU="⊺",fU="⋂",hU="⨗",dU="⨼",pU="⁣",mU="⁢",gU="Ё",_U="ё",vU="Į",xU="į",SU="𝕀",EU="𝕚",bU="Ι",yU="ι",MU="⨼",TU="¿",AU="𝒾",wU="ℐ",CU="∈",RU="⋵",LU="⋹",DU="⋴",PU="⋳",UU="∈",IU="⁢",FU="Ĩ",NU="ĩ",OU="І",kU="і",BU="Ï",zU="ï",HU="Ĵ",VU="ĵ",GU="Й",WU="й",qU="𝔍",XU="𝔧",jU="ȷ",$U="𝕁",YU="𝕛",KU="𝒥",ZU="𝒿",JU="Ј",QU="ј",eI="Є",tI="є",nI="Κ",iI="κ",rI="ϰ",sI="Ķ",oI="ķ",aI="К",cI="к",lI="𝔎",uI="𝔨",fI="ĸ",hI="Х",dI="х",pI="Ќ",mI="ќ",gI="𝕂",_I="𝕜",vI="𝒦",xI="𝓀",SI="⇚",EI="Ĺ",bI="ĺ",yI="⦴",MI="ℒ",TI="Λ",AI="λ",wI="⟨",CI="⟪",RI="⦑",LI="⟨",DI="⪅",PI="ℒ",UI="«",II="⇤",FI="⤟",NI="←",OI="↞",kI="⇐",BI="⤝",zI="↩",HI="↫",VI="⤹",GI="⥳",WI="↢",qI="⤙",XI="⤛",jI="⪫",$I="⪭",YI="⪭︀",KI="⤌",ZI="⤎",JI="❲",QI="{",eF="[",tF="⦋",nF="⦏",iF="⦍",rF="Ľ",sF="ľ",oF="Ļ",aF="ļ",cF="⌈",lF="{",uF="Л",fF="л",hF="⤶",dF="“",pF="„",mF="⥧",gF="⥋",_F="↲",vF="≤",xF="≦",SF="⟨",EF="⇤",bF="←",yF="←",MF="⇐",TF="⇆",AF="↢",wF="⌈",CF="⟦",RF="⥡",LF="⥙",DF="⇃",PF="⌊",UF="↽",IF="↼",FF="⇇",NF="↔",OF="↔",kF="⇔",BF="⇆",zF="⇋",HF="↭",VF="⥎",GF="↤",WF="⊣",qF="⥚",XF="⋋",jF="⧏",$F="⊲",YF="⊴",KF="⥑",ZF="⥠",JF="⥘",QF="↿",eN="⥒",tN="↼",nN="⪋",iN="⋚",rN="≤",sN="≦",oN="⩽",aN="⪨",cN="⩽",lN="⩿",uN="⪁",fN="⪃",hN="⋚︀",dN="⪓",pN="⪅",mN="⋖",gN="⋚",_N="⪋",vN="⋚",xN="≦",SN="≶",EN="≶",bN="⪡",yN="≲",MN="⩽",TN="≲",AN="⥼",wN="⌊",CN="𝔏",RN="𝔩",LN="≶",DN="⪑",PN="⥢",UN="↽",IN="↼",FN="⥪",NN="▄",ON="Љ",kN="љ",BN="⇇",zN="≪",HN="⋘",VN="⌞",GN="⇚",WN="⥫",qN="◺",XN="Ŀ",jN="ŀ",$N="⎰",YN="⎰",KN="⪉",ZN="⪉",JN="⪇",QN="≨",e3="⪇",t3="≨",n3="⋦",i3="⟬",r3="⇽",s3="⟦",o3="⟵",a3="⟵",c3="⟸",l3="⟷",u3="⟷",f3="⟺",h3="⟼",d3="⟶",p3="⟶",m3="⟹",g3="↫",_3="↬",v3="⦅",x3="𝕃",S3="𝕝",E3="⨭",b3="⨴",y3="∗",M3="_",T3="↙",A3="↘",w3="◊",C3="◊",R3="⧫",L3="(",D3="⦓",P3="⇆",U3="⌟",I3="⇋",F3="⥭",N3="‎",O3="⊿",k3="‹",B3="𝓁",z3="ℒ",H3="↰",V3="↰",G3="≲",W3="⪍",q3="⪏",X3="[",j3="‘",$3="‚",Y3="Ł",K3="ł",Z3="⪦",J3="⩹",Q3="<",eO="<",tO="≪",nO="⋖",iO="⋋",rO="⋉",sO="⥶",oO="⩻",aO="◃",cO="⊴",lO="◂",uO="⦖",fO="⥊",hO="⥦",dO="≨︀",pO="≨︀",mO="¯",gO="♂",_O="✠",vO="✠",xO="↦",SO="↦",EO="↧",bO="↤",yO="↥",MO="▮",TO="⨩",AO="М",wO="м",CO="—",RO="∺",LO="∡",DO=" ",PO="ℳ",UO="𝔐",IO="𝔪",FO="℧",NO="µ",OO="*",kO="⫰",BO="∣",zO="·",HO="⊟",VO="−",GO="∸",WO="⨪",qO="∓",XO="⫛",jO="…",$O="∓",YO="⊧",KO="𝕄",ZO="𝕞",JO="∓",QO="𝓂",ek="ℳ",tk="∾",nk="Μ",ik="μ",rk="⊸",sk="⊸",ok="∇",ak="Ń",ck="ń",lk="∠⃒",uk="≉",fk="⩰̸",hk="≋̸",dk="ŉ",pk="≉",mk="♮",gk="ℕ",_k="♮",vk=" ",xk="≎̸",Sk="≏̸",Ek="⩃",bk="Ň",yk="ň",Mk="Ņ",Tk="ņ",Ak="≇",wk="⩭̸",Ck="⩂",Rk="Н",Lk="н",Dk="–",Pk="⤤",Uk="↗",Ik="⇗",Fk="↗",Nk="≠",Ok="≐̸",kk="​",Bk="​",zk="​",Hk="​",Vk="≢",Gk="⤨",Wk="≂̸",qk="≫",Xk="≪",jk=`
`,$k="∄",Yk="∄",Kk="𝔑",Zk="𝔫",Jk="≧̸",Qk="≱",eB="≱",tB="≧̸",nB="⩾̸",iB="⩾̸",rB="⋙̸",sB="≵",oB="≫⃒",aB="≯",cB="≯",lB="≫̸",uB="↮",fB="⇎",hB="⫲",dB="∋",pB="⋼",mB="⋺",gB="∋",_B="Њ",vB="њ",xB="↚",SB="⇍",EB="‥",bB="≦̸",yB="≰",MB="↚",TB="⇍",AB="↮",wB="⇎",CB="≰",RB="≦̸",LB="⩽̸",DB="⩽̸",PB="≮",UB="⋘̸",IB="≴",FB="≪⃒",NB="≮",OB="⋪",kB="⋬",BB="≪̸",zB="∤",HB="⁠",VB=" ",GB="𝕟",WB="ℕ",qB="⫬",XB="¬",jB="≢",$B="≭",YB="∦",KB="∉",ZB="≠",JB="≂̸",QB="∄",ez="≯",tz="≱",nz="≧̸",iz="≫̸",rz="≹",sz="⩾̸",oz="≵",az="≎̸",cz="≏̸",lz="∉",uz="⋵̸",fz="⋹̸",hz="∉",dz="⋷",pz="⋶",mz="⧏̸",gz="⋪",_z="⋬",vz="≮",xz="≰",Sz="≸",Ez="≪̸",bz="⩽̸",yz="≴",Mz="⪢̸",Tz="⪡̸",Az="∌",wz="∌",Cz="⋾",Rz="⋽",Lz="⊀",Dz="⪯̸",Pz="⋠",Uz="∌",Iz="⧐̸",Fz="⋫",Nz="⋭",Oz="⊏̸",kz="⋢",Bz="⊐̸",zz="⋣",Hz="⊂⃒",Vz="⊈",Gz="⊁",Wz="⪰̸",qz="⋡",Xz="≿̸",jz="⊃⃒",$z="⊉",Yz="≁",Kz="≄",Zz="≇",Jz="≉",Qz="∤",eH="∦",tH="∦",nH="⫽⃥",iH="∂̸",rH="⨔",sH="⊀",oH="⋠",aH="⊀",cH="⪯̸",lH="⪯̸",uH="⤳̸",fH="↛",hH="⇏",dH="↝̸",pH="↛",mH="⇏",gH="⋫",_H="⋭",vH="⊁",xH="⋡",SH="⪰̸",EH="𝒩",bH="𝓃",yH="∤",MH="∦",TH="≁",AH="≄",wH="≄",CH="∤",RH="∦",LH="⋢",DH="⋣",PH="⊄",UH="⫅̸",IH="⊈",FH="⊂⃒",NH="⊈",OH="⫅̸",kH="⊁",BH="⪰̸",zH="⊅",HH="⫆̸",VH="⊉",GH="⊃⃒",WH="⊉",qH="⫆̸",XH="≹",jH="Ñ",$H="ñ",YH="≸",KH="⋪",ZH="⋬",JH="⋫",QH="⋭",eV="Ν",tV="ν",nV="#",iV="№",rV=" ",sV="≍⃒",oV="⊬",aV="⊭",cV="⊮",lV="⊯",uV="≥⃒",fV=">⃒",hV="⤄",dV="⧞",pV="⤂",mV="≤⃒",gV="<⃒",_V="⊴⃒",vV="⤃",xV="⊵⃒",SV="∼⃒",EV="⤣",bV="↖",yV="⇖",MV="↖",TV="⤧",AV="Ó",wV="ó",CV="⊛",RV="Ô",LV="ô",DV="⊚",PV="О",UV="о",IV="⊝",FV="Ő",NV="ő",OV="⨸",kV="⊙",BV="⦼",zV="Œ",HV="œ",VV="⦿",GV="𝔒",WV="𝔬",qV="˛",XV="Ò",jV="ò",$V="⧁",YV="⦵",KV="Ω",ZV="∮",JV="↺",QV="⦾",eG="⦻",tG="‾",nG="⧀",iG="Ō",rG="ō",sG="Ω",oG="ω",aG="Ο",cG="ο",lG="⦶",uG="⊖",fG="𝕆",hG="𝕠",dG="⦷",pG="“",mG="‘",gG="⦹",_G="⊕",vG="↻",xG="⩔",SG="∨",EG="⩝",bG="ℴ",yG="ℴ",MG="ª",TG="º",AG="⊶",wG="⩖",CG="⩗",RG="⩛",LG="Ⓢ",DG="𝒪",PG="ℴ",UG="Ø",IG="ø",FG="⊘",NG="Õ",OG="õ",kG="⨶",BG="⨷",zG="⊗",HG="Ö",VG="ö",GG="⌽",WG="‾",qG="⏞",XG="⎴",jG="⏜",$G="¶",YG="∥",KG="∥",ZG="⫳",JG="⫽",QG="∂",e4="∂",t4="П",n4="п",i4="%",r4=".",s4="‰",o4="⊥",a4="‱",c4="𝔓",l4="𝔭",u4="Φ",f4="φ",h4="ϕ",d4="ℳ",p4="☎",m4="Π",g4="π",_4="⋔",v4="ϖ",x4="ℏ",S4="ℎ",E4="ℏ",b4="⨣",y4="⊞",M4="⨢",T4="+",A4="∔",w4="⨥",C4="⩲",R4="±",L4="±",D4="⨦",P4="⨧",U4="±",I4="ℌ",F4="⨕",N4="𝕡",O4="ℙ",k4="£",B4="⪷",z4="⪻",H4="≺",V4="≼",G4="⪷",W4="≺",q4="≼",X4="≺",j4="⪯",$4="≼",Y4="≾",K4="⪯",Z4="⪹",J4="⪵",Q4="⋨",eW="⪯",tW="⪳",nW="≾",iW="′",rW="″",sW="ℙ",oW="⪹",aW="⪵",cW="⋨",lW="∏",uW="∏",fW="⌮",hW="⌒",dW="⌓",pW="∝",mW="∝",gW="∷",_W="∝",vW="≾",xW="⊰",SW="𝒫",EW="𝓅",bW="Ψ",yW="ψ",MW=" ",TW="𝔔",AW="𝔮",wW="⨌",CW="𝕢",RW="ℚ",LW="⁗",DW="𝒬",PW="𝓆",UW="ℍ",IW="⨖",FW="?",NW="≟",OW='"',kW='"',BW="⇛",zW="∽̱",HW="Ŕ",VW="ŕ",GW="√",WW="⦳",qW="⟩",XW="⟫",jW="⦒",$W="⦥",YW="⟩",KW="»",ZW="⥵",JW="⇥",QW="⤠",eq="⤳",tq="→",nq="↠",iq="⇒",rq="⤞",sq="↪",oq="↬",aq="⥅",cq="⥴",lq="⤖",uq="↣",fq="↝",hq="⤚",dq="⤜",pq="∶",mq="ℚ",gq="⤍",_q="⤏",vq="⤐",xq="❳",Sq="}",Eq="]",bq="⦌",yq="⦎",Mq="⦐",Tq="Ř",Aq="ř",wq="Ŗ",Cq="ŗ",Rq="⌉",Lq="}",Dq="Р",Pq="р",Uq="⤷",Iq="⥩",Fq="”",Nq="”",Oq="↳",kq="ℜ",Bq="ℛ",zq="ℜ",Hq="ℝ",Vq="ℜ",Gq="▭",Wq="®",qq="®",Xq="∋",jq="⇋",$q="⥯",Yq="⥽",Kq="⌋",Zq="𝔯",Jq="ℜ",Qq="⥤",e5="⇁",t5="⇀",n5="⥬",i5="Ρ",r5="ρ",s5="ϱ",o5="⟩",a5="⇥",c5="→",l5="→",u5="⇒",f5="⇄",h5="↣",d5="⌉",p5="⟧",m5="⥝",g5="⥕",_5="⇂",v5="⌋",x5="⇁",S5="⇀",E5="⇄",b5="⇌",y5="⇉",M5="↝",T5="↦",A5="⊢",w5="⥛",C5="⋌",R5="⧐",L5="⊳",D5="⊵",P5="⥏",U5="⥜",I5="⥔",F5="↾",N5="⥓",O5="⇀",k5="˚",B5="≓",z5="⇄",H5="⇌",V5="‏",G5="⎱",W5="⎱",q5="⫮",X5="⟭",j5="⇾",$5="⟧",Y5="⦆",K5="𝕣",Z5="ℝ",J5="⨮",Q5="⨵",e8="⥰",t8=")",n8="⦔",i8="⨒",r8="⇉",s8="⇛",o8="›",a8="𝓇",c8="ℛ",l8="↱",u8="↱",f8="]",h8="’",d8="’",p8="⋌",m8="⋊",g8="▹",_8="⊵",v8="▸",x8="⧎",S8="⧴",E8="⥨",b8="℞",y8="Ś",M8="ś",T8="‚",A8="⪸",w8="Š",C8="š",R8="⪼",L8="≻",D8="≽",P8="⪰",U8="⪴",I8="Ş",F8="ş",N8="Ŝ",O8="ŝ",k8="⪺",B8="⪶",z8="⋩",H8="⨓",V8="≿",G8="С",W8="с",q8="⊡",X8="⋅",j8="⩦",$8="⤥",Y8="↘",K8="⇘",Z8="↘",J8="§",Q8=";",e6="⤩",t6="∖",n6="∖",i6="✶",r6="𝔖",s6="𝔰",o6="⌢",a6="♯",c6="Щ",l6="щ",u6="Ш",f6="ш",h6="↓",d6="←",p6="∣",m6="∥",g6="→",_6="↑",v6="­",x6="Σ",S6="σ",E6="ς",b6="ς",y6="∼",M6="⩪",T6="≃",A6="≃",w6="⪞",C6="⪠",R6="⪝",L6="⪟",D6="≆",P6="⨤",U6="⥲",I6="←",F6="∘",N6="∖",O6="⨳",k6="⧤",B6="∣",z6="⌣",H6="⪪",V6="⪬",G6="⪬︀",W6="Ь",q6="ь",X6="⌿",j6="⧄",$6="/",Y6="𝕊",K6="𝕤",Z6="♠",J6="♠",Q6="∥",e9="⊓",t9="⊓︀",n9="⊔",i9="⊔︀",r9="√",s9="⊏",o9="⊑",a9="⊏",c9="⊑",l9="⊐",u9="⊒",f9="⊐",h9="⊒",d9="□",p9="□",m9="⊓",g9="⊏",_9="⊑",v9="⊐",x9="⊒",S9="⊔",E9="▪",b9="□",y9="▪",M9="→",T9="𝒮",A9="𝓈",w9="∖",C9="⌣",R9="⋆",L9="⋆",D9="☆",P9="★",U9="ϵ",I9="ϕ",F9="¯",N9="⊂",O9="⋐",k9="⪽",B9="⫅",z9="⊆",H9="⫃",V9="⫁",G9="⫋",W9="⊊",q9="⪿",X9="⥹",j9="⊂",$9="⋐",Y9="⊆",K9="⫅",Z9="⊆",J9="⊊",Q9="⫋",eX="⫇",tX="⫕",nX="⫓",iX="⪸",rX="≻",sX="≽",oX="≻",aX="⪰",cX="≽",lX="≿",uX="⪰",fX="⪺",hX="⪶",dX="⋩",pX="≿",mX="∋",gX="∑",_X="∑",vX="♪",xX="¹",SX="²",EX="³",bX="⊃",yX="⋑",MX="⪾",TX="⫘",AX="⫆",wX="⊇",CX="⫄",RX="⊃",LX="⊇",DX="⟉",PX="⫗",UX="⥻",IX="⫂",FX="⫌",NX="⊋",OX="⫀",kX="⊃",BX="⋑",zX="⊇",HX="⫆",VX="⊋",GX="⫌",WX="⫈",qX="⫔",XX="⫖",jX="⤦",$X="↙",YX="⇙",KX="↙",ZX="⤪",JX="ß",QX="	",e7="⌖",t7="Τ",n7="τ",i7="⎴",r7="Ť",s7="ť",o7="Ţ",a7="ţ",c7="Т",l7="т",u7="⃛",f7="⌕",h7="𝔗",d7="𝔱",p7="∴",m7="∴",g7="∴",_7="Θ",v7="θ",x7="ϑ",S7="ϑ",E7="≈",b7="∼",y7="  ",M7=" ",T7=" ",A7="≈",w7="∼",C7="Þ",R7="þ",L7="˜",D7="∼",P7="≃",U7="≅",I7="≈",F7="⨱",N7="⊠",O7="×",k7="⨰",B7="∭",z7="⤨",H7="⌶",V7="⫱",G7="⊤",W7="𝕋",q7="𝕥",X7="⫚",j7="⤩",$7="‴",Y7="™",K7="™",Z7="▵",J7="▿",Q7="◃",ej="⊴",tj="≜",nj="▹",ij="⊵",rj="◬",sj="≜",oj="⨺",aj="⃛",cj="⨹",lj="⧍",uj="⨻",fj="⏢",hj="𝒯",dj="𝓉",pj="Ц",mj="ц",gj="Ћ",_j="ћ",vj="Ŧ",xj="ŧ",Sj="≬",Ej="↞",bj="↠",yj="Ú",Mj="ú",Tj="↑",Aj="↟",wj="⇑",Cj="⥉",Rj="Ў",Lj="ў",Dj="Ŭ",Pj="ŭ",Uj="Û",Ij="û",Fj="У",Nj="у",Oj="⇅",kj="Ű",Bj="ű",zj="⥮",Hj="⥾",Vj="𝔘",Gj="𝔲",Wj="Ù",qj="ù",Xj="⥣",jj="↿",$j="↾",Yj="▀",Kj="⌜",Zj="⌜",Jj="⌏",Qj="◸",e$="Ū",t$="ū",n$="¨",i$="_",r$="⏟",s$="⎵",o$="⏝",a$="⋃",c$="⊎",l$="Ų",u$="ų",f$="𝕌",h$="𝕦",d$="⤒",p$="↑",m$="↑",g$="⇑",_$="⇅",v$="↕",x$="↕",S$="⇕",E$="⥮",b$="↿",y$="↾",M$="⊎",T$="↖",A$="↗",w$="υ",C$="ϒ",R$="ϒ",L$="Υ",D$="υ",P$="↥",U$="⊥",I$="⇈",F$="⌝",N$="⌝",O$="⌎",k$="Ů",B$="ů",z$="◹",H$="𝒰",V$="𝓊",G$="⋰",W$="Ũ",q$="ũ",X$="▵",j$="▴",$$="⇈",Y$="Ü",K$="ü",Z$="⦧",J$="⦜",Q$="ϵ",eY="ϰ",tY="∅",nY="ϕ",iY="ϖ",rY="∝",sY="↕",oY="⇕",aY="ϱ",cY="ς",lY="⊊︀",uY="⫋︀",fY="⊋︀",hY="⫌︀",dY="ϑ",pY="⊲",mY="⊳",gY="⫨",_Y="⫫",vY="⫩",xY="В",SY="в",EY="⊢",bY="⊨",yY="⊩",MY="⊫",TY="⫦",AY="⊻",wY="∨",CY="⋁",RY="≚",LY="⋮",DY="|",PY="‖",UY="|",IY="‖",FY="∣",NY="|",OY="❘",kY="≀",BY=" ",zY="𝔙",HY="𝔳",VY="⊲",GY="⊂⃒",WY="⊃⃒",qY="𝕍",XY="𝕧",jY="∝",$Y="⊳",YY="𝒱",KY="𝓋",ZY="⫋︀",JY="⊊︀",QY="⫌︀",eK="⊋︀",tK="⊪",nK="⦚",iK="Ŵ",rK="ŵ",sK="⩟",oK="∧",aK="⋀",cK="≙",lK="℘",uK="𝔚",fK="𝔴",hK="𝕎",dK="𝕨",pK="℘",mK="≀",gK="≀",_K="𝒲",vK="𝓌",xK="⋂",SK="◯",EK="⋃",bK="▽",yK="𝔛",MK="𝔵",TK="⟷",AK="⟺",wK="Ξ",CK="ξ",RK="⟵",LK="⟸",DK="⟼",PK="⋻",UK="⨀",IK="𝕏",FK="𝕩",NK="⨁",OK="⨂",kK="⟶",BK="⟹",zK="𝒳",HK="𝓍",VK="⨆",GK="⨄",WK="△",qK="⋁",XK="⋀",jK="Ý",$K="ý",YK="Я",KK="я",ZK="Ŷ",JK="ŷ",QK="Ы",eZ="ы",tZ="¥",nZ="𝔜",iZ="𝔶",rZ="Ї",sZ="ї",oZ="𝕐",aZ="𝕪",cZ="𝒴",lZ="𝓎",uZ="Ю",fZ="ю",hZ="ÿ",dZ="Ÿ",pZ="Ź",mZ="ź",gZ="Ž",_Z="ž",vZ="З",xZ="з",SZ="Ż",EZ="ż",bZ="ℨ",yZ="​",MZ="Ζ",TZ="ζ",AZ="𝔷",wZ="ℨ",CZ="Ж",RZ="ж",LZ="⇝",DZ="𝕫",PZ="ℤ",UZ="𝒵",IZ="𝓏",FZ="‍",NZ="‌",OZ={Aacute:SE,aacute:EE,Abreve:bE,abreve:yE,ac:ME,acd:TE,acE:AE,Acirc:wE,acirc:CE,acute:RE,Acy:LE,acy:DE,AElig:PE,aelig:UE,af:IE,Afr:FE,afr:NE,Agrave:OE,agrave:kE,alefsym:BE,aleph:zE,Alpha:HE,alpha:VE,Amacr:GE,amacr:WE,amalg:qE,amp:XE,AMP:jE,andand:$E,And:YE,and:KE,andd:ZE,andslope:JE,andv:QE,ang:eb,ange:tb,angle:nb,angmsdaa:ib,angmsdab:rb,angmsdac:sb,angmsdad:ob,angmsdae:ab,angmsdaf:cb,angmsdag:lb,angmsdah:ub,angmsd:fb,angrt:hb,angrtvb:db,angrtvbd:pb,angsph:mb,angst:gb,angzarr:_b,Aogon:vb,aogon:xb,Aopf:Sb,aopf:Eb,apacir:bb,ap:yb,apE:Mb,ape:Tb,apid:Ab,apos:wb,ApplyFunction:Cb,approx:Rb,approxeq:Lb,Aring:Db,aring:Pb,Ascr:Ub,ascr:Ib,Assign:Fb,ast:Nb,asymp:Ob,asympeq:kb,Atilde:Bb,atilde:zb,Auml:Hb,auml:Vb,awconint:Gb,awint:Wb,backcong:qb,backepsilon:Xb,backprime:jb,backsim:$b,backsimeq:Yb,Backslash:Kb,Barv:Zb,barvee:Jb,barwed:Qb,Barwed:ey,barwedge:ty,bbrk:ny,bbrktbrk:iy,bcong:ry,Bcy:sy,bcy:oy,bdquo:ay,becaus:cy,because:ly,Because:uy,bemptyv:fy,bepsi:hy,bernou:dy,Bernoullis:py,Beta:my,beta:gy,beth:_y,between:vy,Bfr:xy,bfr:Sy,bigcap:Ey,bigcirc:by,bigcup:yy,bigodot:My,bigoplus:Ty,bigotimes:Ay,bigsqcup:wy,bigstar:Cy,bigtriangledown:Ry,bigtriangleup:Ly,biguplus:Dy,bigvee:Py,bigwedge:Uy,bkarow:Iy,blacklozenge:Fy,blacksquare:Ny,blacktriangle:Oy,blacktriangledown:ky,blacktriangleleft:By,blacktriangleright:zy,blank:Hy,blk12:Vy,blk14:Gy,blk34:Wy,block:qy,bne:Xy,bnequiv:jy,bNot:$y,bnot:Yy,Bopf:Ky,bopf:Zy,bot:Jy,bottom:Qy,bowtie:eM,boxbox:tM,boxdl:nM,boxdL:iM,boxDl:rM,boxDL:sM,boxdr:oM,boxdR:aM,boxDr:cM,boxDR:lM,boxh:uM,boxH:fM,boxhd:hM,boxHd:dM,boxhD:pM,boxHD:mM,boxhu:gM,boxHu:_M,boxhU:vM,boxHU:xM,boxminus:SM,boxplus:EM,boxtimes:bM,boxul:yM,boxuL:MM,boxUl:TM,boxUL:AM,boxur:wM,boxuR:CM,boxUr:RM,boxUR:LM,boxv:DM,boxV:PM,boxvh:UM,boxvH:IM,boxVh:FM,boxVH:NM,boxvl:OM,boxvL:kM,boxVl:BM,boxVL:zM,boxvr:HM,boxvR:VM,boxVr:GM,boxVR:WM,bprime:qM,breve:XM,Breve:jM,brvbar:$M,bscr:YM,Bscr:KM,bsemi:ZM,bsim:JM,bsime:QM,bsolb:eT,bsol:tT,bsolhsub:nT,bull:iT,bullet:rT,bump:sT,bumpE:oT,bumpe:aT,Bumpeq:cT,bumpeq:lT,Cacute:uT,cacute:fT,capand:hT,capbrcup:dT,capcap:pT,cap:mT,Cap:gT,capcup:_T,capdot:vT,CapitalDifferentialD:xT,caps:ST,caret:ET,caron:bT,Cayleys:yT,ccaps:MT,Ccaron:TT,ccaron:AT,Ccedil:wT,ccedil:CT,Ccirc:RT,ccirc:LT,Cconint:DT,ccups:PT,ccupssm:UT,Cdot:IT,cdot:FT,cedil:NT,Cedilla:OT,cemptyv:kT,cent:BT,centerdot:zT,CenterDot:HT,cfr:VT,Cfr:GT,CHcy:WT,chcy:qT,check:XT,checkmark:jT,Chi:$T,chi:YT,circ:KT,circeq:ZT,circlearrowleft:JT,circlearrowright:QT,circledast:eA,circledcirc:tA,circleddash:nA,CircleDot:iA,circledR:rA,circledS:sA,CircleMinus:oA,CirclePlus:aA,CircleTimes:cA,cir:lA,cirE:uA,cire:fA,cirfnint:hA,cirmid:dA,cirscir:pA,ClockwiseContourIntegral:mA,CloseCurlyDoubleQuote:gA,CloseCurlyQuote:_A,clubs:vA,clubsuit:xA,colon:SA,Colon:EA,Colone:bA,colone:yA,coloneq:MA,comma:TA,commat:AA,comp:wA,compfn:CA,complement:RA,complexes:LA,cong:DA,congdot:PA,Congruent:UA,conint:IA,Conint:FA,ContourIntegral:NA,copf:OA,Copf:kA,coprod:BA,Coproduct:zA,copy:HA,COPY:VA,copysr:GA,CounterClockwiseContourIntegral:WA,crarr:qA,cross:XA,Cross:jA,Cscr:$A,cscr:YA,csub:KA,csube:ZA,csup:JA,csupe:QA,ctdot:ew,cudarrl:tw,cudarrr:nw,cuepr:iw,cuesc:rw,cularr:sw,cularrp:ow,cupbrcap:aw,cupcap:cw,CupCap:lw,cup:uw,Cup:fw,cupcup:hw,cupdot:dw,cupor:pw,cups:mw,curarr:gw,curarrm:_w,curlyeqprec:vw,curlyeqsucc:xw,curlyvee:Sw,curlywedge:Ew,curren:bw,curvearrowleft:yw,curvearrowright:Mw,cuvee:Tw,cuwed:Aw,cwconint:ww,cwint:Cw,cylcty:Rw,dagger:Lw,Dagger:Dw,daleth:Pw,darr:Uw,Darr:Iw,dArr:Fw,dash:Nw,Dashv:Ow,dashv:kw,dbkarow:Bw,dblac:zw,Dcaron:Hw,dcaron:Vw,Dcy:Gw,dcy:Ww,ddagger:qw,ddarr:Xw,DD:jw,dd:$w,DDotrahd:Yw,ddotseq:Kw,deg:Zw,Del:Jw,Delta:Qw,delta:eC,demptyv:tC,dfisht:nC,Dfr:iC,dfr:rC,dHar:sC,dharl:oC,dharr:aC,DiacriticalAcute:cC,DiacriticalDot:lC,DiacriticalDoubleAcute:uC,DiacriticalGrave:fC,DiacriticalTilde:hC,diam:dC,diamond:pC,Diamond:mC,diamondsuit:gC,diams:_C,die:vC,DifferentialD:xC,digamma:SC,disin:EC,div:bC,divide:yC,divideontimes:MC,divonx:TC,DJcy:AC,djcy:wC,dlcorn:CC,dlcrop:RC,dollar:LC,Dopf:DC,dopf:PC,Dot:UC,dot:IC,DotDot:FC,doteq:NC,doteqdot:OC,DotEqual:kC,dotminus:BC,dotplus:zC,dotsquare:HC,doublebarwedge:VC,DoubleContourIntegral:GC,DoubleDot:WC,DoubleDownArrow:qC,DoubleLeftArrow:XC,DoubleLeftRightArrow:jC,DoubleLeftTee:$C,DoubleLongLeftArrow:YC,DoubleLongLeftRightArrow:KC,DoubleLongRightArrow:ZC,DoubleRightArrow:JC,DoubleRightTee:QC,DoubleUpArrow:eR,DoubleUpDownArrow:tR,DoubleVerticalBar:nR,DownArrowBar:iR,downarrow:rR,DownArrow:sR,Downarrow:oR,DownArrowUpArrow:aR,DownBreve:cR,downdownarrows:lR,downharpoonleft:uR,downharpoonright:fR,DownLeftRightVector:hR,DownLeftTeeVector:dR,DownLeftVectorBar:pR,DownLeftVector:mR,DownRightTeeVector:gR,DownRightVectorBar:_R,DownRightVector:vR,DownTeeArrow:xR,DownTee:SR,drbkarow:ER,drcorn:bR,drcrop:yR,Dscr:MR,dscr:TR,DScy:AR,dscy:wR,dsol:CR,Dstrok:RR,dstrok:LR,dtdot:DR,dtri:PR,dtrif:UR,duarr:IR,duhar:FR,dwangle:NR,DZcy:OR,dzcy:kR,dzigrarr:BR,Eacute:zR,eacute:HR,easter:VR,Ecaron:GR,ecaron:WR,Ecirc:qR,ecirc:XR,ecir:jR,ecolon:$R,Ecy:YR,ecy:KR,eDDot:ZR,Edot:JR,edot:QR,eDot:e1,ee:t1,efDot:n1,Efr:i1,efr:r1,eg:s1,Egrave:o1,egrave:a1,egs:c1,egsdot:l1,el:u1,Element:f1,elinters:h1,ell:d1,els:p1,elsdot:m1,Emacr:g1,emacr:_1,empty:v1,emptyset:x1,EmptySmallSquare:S1,emptyv:E1,EmptyVerySmallSquare:b1,emsp13:y1,emsp14:M1,emsp:T1,ENG:A1,eng:w1,ensp:C1,Eogon:R1,eogon:L1,Eopf:D1,eopf:P1,epar:U1,eparsl:I1,eplus:F1,epsi:N1,Epsilon:O1,epsilon:k1,epsiv:B1,eqcirc:z1,eqcolon:H1,eqsim:V1,eqslantgtr:G1,eqslantless:W1,Equal:q1,equals:X1,EqualTilde:j1,equest:$1,Equilibrium:Y1,equiv:K1,equivDD:Z1,eqvparsl:J1,erarr:Q1,erDot:eL,escr:tL,Escr:nL,esdot:iL,Esim:rL,esim:sL,Eta:oL,eta:aL,ETH:cL,eth:lL,Euml:uL,euml:fL,euro:hL,excl:dL,exist:pL,Exists:mL,expectation:gL,exponentiale:_L,ExponentialE:vL,fallingdotseq:xL,Fcy:SL,fcy:EL,female:bL,ffilig:yL,fflig:ML,ffllig:TL,Ffr:AL,ffr:wL,filig:CL,FilledSmallSquare:RL,FilledVerySmallSquare:LL,fjlig:DL,flat:PL,fllig:UL,fltns:IL,fnof:FL,Fopf:NL,fopf:OL,forall:kL,ForAll:BL,fork:zL,forkv:HL,Fouriertrf:VL,fpartint:GL,frac12:WL,frac13:qL,frac14:XL,frac15:jL,frac16:$L,frac18:YL,frac23:KL,frac25:ZL,frac34:JL,frac35:QL,frac38:eD,frac45:tD,frac56:nD,frac58:iD,frac78:rD,frasl:sD,frown:oD,fscr:aD,Fscr:cD,gacute:lD,Gamma:uD,gamma:fD,Gammad:hD,gammad:dD,gap:pD,Gbreve:mD,gbreve:gD,Gcedil:_D,Gcirc:vD,gcirc:xD,Gcy:SD,gcy:ED,Gdot:bD,gdot:yD,ge:MD,gE:TD,gEl:AD,gel:wD,geq:CD,geqq:RD,geqslant:LD,gescc:DD,ges:PD,gesdot:UD,gesdoto:ID,gesdotol:FD,gesl:ND,gesles:OD,Gfr:kD,gfr:BD,gg:zD,Gg:HD,ggg:VD,gimel:GD,GJcy:WD,gjcy:qD,gla:XD,gl:jD,glE:$D,glj:YD,gnap:KD,gnapprox:ZD,gne:JD,gnE:QD,gneq:eP,gneqq:tP,gnsim:nP,Gopf:iP,gopf:rP,grave:sP,GreaterEqual:oP,GreaterEqualLess:aP,GreaterFullEqual:cP,GreaterGreater:lP,GreaterLess:uP,GreaterSlantEqual:fP,GreaterTilde:hP,Gscr:dP,gscr:pP,gsim:mP,gsime:gP,gsiml:_P,gtcc:vP,gtcir:xP,gt:SP,GT:EP,Gt:bP,gtdot:yP,gtlPar:MP,gtquest:TP,gtrapprox:AP,gtrarr:wP,gtrdot:CP,gtreqless:RP,gtreqqless:LP,gtrless:DP,gtrsim:PP,gvertneqq:UP,gvnE:IP,Hacek:FP,hairsp:NP,half:OP,hamilt:kP,HARDcy:BP,hardcy:zP,harrcir:HP,harr:VP,hArr:GP,harrw:WP,Hat:qP,hbar:XP,Hcirc:jP,hcirc:$P,hearts:YP,heartsuit:KP,hellip:ZP,hercon:JP,hfr:QP,Hfr:e2,HilbertSpace:t2,hksearow:n2,hkswarow:i2,hoarr:r2,homtht:s2,hookleftarrow:o2,hookrightarrow:a2,hopf:c2,Hopf:l2,horbar:u2,HorizontalLine:f2,hscr:h2,Hscr:d2,hslash:p2,Hstrok:m2,hstrok:g2,HumpDownHump:_2,HumpEqual:v2,hybull:x2,hyphen:S2,Iacute:E2,iacute:b2,ic:y2,Icirc:M2,icirc:T2,Icy:A2,icy:w2,Idot:C2,IEcy:R2,iecy:L2,iexcl:D2,iff:P2,ifr:U2,Ifr:I2,Igrave:F2,igrave:N2,ii:O2,iiiint:k2,iiint:B2,iinfin:z2,iiota:H2,IJlig:V2,ijlig:G2,Imacr:W2,imacr:q2,image:X2,ImaginaryI:j2,imagline:$2,imagpart:Y2,imath:K2,Im:Z2,imof:J2,imped:Q2,Implies:eU,incare:tU,in:"∈",infin:nU,infintie:iU,inodot:rU,intcal:sU,int:oU,Int:aU,integers:cU,Integral:lU,intercal:uU,Intersection:fU,intlarhk:hU,intprod:dU,InvisibleComma:pU,InvisibleTimes:mU,IOcy:gU,iocy:_U,Iogon:vU,iogon:xU,Iopf:SU,iopf:EU,Iota:bU,iota:yU,iprod:MU,iquest:TU,iscr:AU,Iscr:wU,isin:CU,isindot:RU,isinE:LU,isins:DU,isinsv:PU,isinv:UU,it:IU,Itilde:FU,itilde:NU,Iukcy:OU,iukcy:kU,Iuml:BU,iuml:zU,Jcirc:HU,jcirc:VU,Jcy:GU,jcy:WU,Jfr:qU,jfr:XU,jmath:jU,Jopf:$U,jopf:YU,Jscr:KU,jscr:ZU,Jsercy:JU,jsercy:QU,Jukcy:eI,jukcy:tI,Kappa:nI,kappa:iI,kappav:rI,Kcedil:sI,kcedil:oI,Kcy:aI,kcy:cI,Kfr:lI,kfr:uI,kgreen:fI,KHcy:hI,khcy:dI,KJcy:pI,kjcy:mI,Kopf:gI,kopf:_I,Kscr:vI,kscr:xI,lAarr:SI,Lacute:EI,lacute:bI,laemptyv:yI,lagran:MI,Lambda:TI,lambda:AI,lang:wI,Lang:CI,langd:RI,langle:LI,lap:DI,Laplacetrf:PI,laquo:UI,larrb:II,larrbfs:FI,larr:NI,Larr:OI,lArr:kI,larrfs:BI,larrhk:zI,larrlp:HI,larrpl:VI,larrsim:GI,larrtl:WI,latail:qI,lAtail:XI,lat:jI,late:$I,lates:YI,lbarr:KI,lBarr:ZI,lbbrk:JI,lbrace:QI,lbrack:eF,lbrke:tF,lbrksld:nF,lbrkslu:iF,Lcaron:rF,lcaron:sF,Lcedil:oF,lcedil:aF,lceil:cF,lcub:lF,Lcy:uF,lcy:fF,ldca:hF,ldquo:dF,ldquor:pF,ldrdhar:mF,ldrushar:gF,ldsh:_F,le:vF,lE:xF,LeftAngleBracket:SF,LeftArrowBar:EF,leftarrow:bF,LeftArrow:yF,Leftarrow:MF,LeftArrowRightArrow:TF,leftarrowtail:AF,LeftCeiling:wF,LeftDoubleBracket:CF,LeftDownTeeVector:RF,LeftDownVectorBar:LF,LeftDownVector:DF,LeftFloor:PF,leftharpoondown:UF,leftharpoonup:IF,leftleftarrows:FF,leftrightarrow:NF,LeftRightArrow:OF,Leftrightarrow:kF,leftrightarrows:BF,leftrightharpoons:zF,leftrightsquigarrow:HF,LeftRightVector:VF,LeftTeeArrow:GF,LeftTee:WF,LeftTeeVector:qF,leftthreetimes:XF,LeftTriangleBar:jF,LeftTriangle:$F,LeftTriangleEqual:YF,LeftUpDownVector:KF,LeftUpTeeVector:ZF,LeftUpVectorBar:JF,LeftUpVector:QF,LeftVectorBar:eN,LeftVector:tN,lEg:nN,leg:iN,leq:rN,leqq:sN,leqslant:oN,lescc:aN,les:cN,lesdot:lN,lesdoto:uN,lesdotor:fN,lesg:hN,lesges:dN,lessapprox:pN,lessdot:mN,lesseqgtr:gN,lesseqqgtr:_N,LessEqualGreater:vN,LessFullEqual:xN,LessGreater:SN,lessgtr:EN,LessLess:bN,lesssim:yN,LessSlantEqual:MN,LessTilde:TN,lfisht:AN,lfloor:wN,Lfr:CN,lfr:RN,lg:LN,lgE:DN,lHar:PN,lhard:UN,lharu:IN,lharul:FN,lhblk:NN,LJcy:ON,ljcy:kN,llarr:BN,ll:zN,Ll:HN,llcorner:VN,Lleftarrow:GN,llhard:WN,lltri:qN,Lmidot:XN,lmidot:jN,lmoustache:$N,lmoust:YN,lnap:KN,lnapprox:ZN,lne:JN,lnE:QN,lneq:e3,lneqq:t3,lnsim:n3,loang:i3,loarr:r3,lobrk:s3,longleftarrow:o3,LongLeftArrow:a3,Longleftarrow:c3,longleftrightarrow:l3,LongLeftRightArrow:u3,Longleftrightarrow:f3,longmapsto:h3,longrightarrow:d3,LongRightArrow:p3,Longrightarrow:m3,looparrowleft:g3,looparrowright:_3,lopar:v3,Lopf:x3,lopf:S3,loplus:E3,lotimes:b3,lowast:y3,lowbar:M3,LowerLeftArrow:T3,LowerRightArrow:A3,loz:w3,lozenge:C3,lozf:R3,lpar:L3,lparlt:D3,lrarr:P3,lrcorner:U3,lrhar:I3,lrhard:F3,lrm:N3,lrtri:O3,lsaquo:k3,lscr:B3,Lscr:z3,lsh:H3,Lsh:V3,lsim:G3,lsime:W3,lsimg:q3,lsqb:X3,lsquo:j3,lsquor:$3,Lstrok:Y3,lstrok:K3,ltcc:Z3,ltcir:J3,lt:Q3,LT:eO,Lt:tO,ltdot:nO,lthree:iO,ltimes:rO,ltlarr:sO,ltquest:oO,ltri:aO,ltrie:cO,ltrif:lO,ltrPar:uO,lurdshar:fO,luruhar:hO,lvertneqq:dO,lvnE:pO,macr:mO,male:gO,malt:_O,maltese:vO,Map:"⤅",map:xO,mapsto:SO,mapstodown:EO,mapstoleft:bO,mapstoup:yO,marker:MO,mcomma:TO,Mcy:AO,mcy:wO,mdash:CO,mDDot:RO,measuredangle:LO,MediumSpace:DO,Mellintrf:PO,Mfr:UO,mfr:IO,mho:FO,micro:NO,midast:OO,midcir:kO,mid:BO,middot:zO,minusb:HO,minus:VO,minusd:GO,minusdu:WO,MinusPlus:qO,mlcp:XO,mldr:jO,mnplus:$O,models:YO,Mopf:KO,mopf:ZO,mp:JO,mscr:QO,Mscr:ek,mstpos:tk,Mu:nk,mu:ik,multimap:rk,mumap:sk,nabla:ok,Nacute:ak,nacute:ck,nang:lk,nap:uk,napE:fk,napid:hk,napos:dk,napprox:pk,natural:mk,naturals:gk,natur:_k,nbsp:vk,nbump:xk,nbumpe:Sk,ncap:Ek,Ncaron:bk,ncaron:yk,Ncedil:Mk,ncedil:Tk,ncong:Ak,ncongdot:wk,ncup:Ck,Ncy:Rk,ncy:Lk,ndash:Dk,nearhk:Pk,nearr:Uk,neArr:Ik,nearrow:Fk,ne:Nk,nedot:Ok,NegativeMediumSpace:kk,NegativeThickSpace:Bk,NegativeThinSpace:zk,NegativeVeryThinSpace:Hk,nequiv:Vk,nesear:Gk,nesim:Wk,NestedGreaterGreater:qk,NestedLessLess:Xk,NewLine:jk,nexist:$k,nexists:Yk,Nfr:Kk,nfr:Zk,ngE:Jk,nge:Qk,ngeq:eB,ngeqq:tB,ngeqslant:nB,nges:iB,nGg:rB,ngsim:sB,nGt:oB,ngt:aB,ngtr:cB,nGtv:lB,nharr:uB,nhArr:fB,nhpar:hB,ni:dB,nis:pB,nisd:mB,niv:gB,NJcy:_B,njcy:vB,nlarr:xB,nlArr:SB,nldr:EB,nlE:bB,nle:yB,nleftarrow:MB,nLeftarrow:TB,nleftrightarrow:AB,nLeftrightarrow:wB,nleq:CB,nleqq:RB,nleqslant:LB,nles:DB,nless:PB,nLl:UB,nlsim:IB,nLt:FB,nlt:NB,nltri:OB,nltrie:kB,nLtv:BB,nmid:zB,NoBreak:HB,NonBreakingSpace:VB,nopf:GB,Nopf:WB,Not:qB,not:XB,NotCongruent:jB,NotCupCap:$B,NotDoubleVerticalBar:YB,NotElement:KB,NotEqual:ZB,NotEqualTilde:JB,NotExists:QB,NotGreater:ez,NotGreaterEqual:tz,NotGreaterFullEqual:nz,NotGreaterGreater:iz,NotGreaterLess:rz,NotGreaterSlantEqual:sz,NotGreaterTilde:oz,NotHumpDownHump:az,NotHumpEqual:cz,notin:lz,notindot:uz,notinE:fz,notinva:hz,notinvb:dz,notinvc:pz,NotLeftTriangleBar:mz,NotLeftTriangle:gz,NotLeftTriangleEqual:_z,NotLess:vz,NotLessEqual:xz,NotLessGreater:Sz,NotLessLess:Ez,NotLessSlantEqual:bz,NotLessTilde:yz,NotNestedGreaterGreater:Mz,NotNestedLessLess:Tz,notni:Az,notniva:wz,notnivb:Cz,notnivc:Rz,NotPrecedes:Lz,NotPrecedesEqual:Dz,NotPrecedesSlantEqual:Pz,NotReverseElement:Uz,NotRightTriangleBar:Iz,NotRightTriangle:Fz,NotRightTriangleEqual:Nz,NotSquareSubset:Oz,NotSquareSubsetEqual:kz,NotSquareSuperset:Bz,NotSquareSupersetEqual:zz,NotSubset:Hz,NotSubsetEqual:Vz,NotSucceeds:Gz,NotSucceedsEqual:Wz,NotSucceedsSlantEqual:qz,NotSucceedsTilde:Xz,NotSuperset:jz,NotSupersetEqual:$z,NotTilde:Yz,NotTildeEqual:Kz,NotTildeFullEqual:Zz,NotTildeTilde:Jz,NotVerticalBar:Qz,nparallel:eH,npar:tH,nparsl:nH,npart:iH,npolint:rH,npr:sH,nprcue:oH,nprec:aH,npreceq:cH,npre:lH,nrarrc:uH,nrarr:fH,nrArr:hH,nrarrw:dH,nrightarrow:pH,nRightarrow:mH,nrtri:gH,nrtrie:_H,nsc:vH,nsccue:xH,nsce:SH,Nscr:EH,nscr:bH,nshortmid:yH,nshortparallel:MH,nsim:TH,nsime:AH,nsimeq:wH,nsmid:CH,nspar:RH,nsqsube:LH,nsqsupe:DH,nsub:PH,nsubE:UH,nsube:IH,nsubset:FH,nsubseteq:NH,nsubseteqq:OH,nsucc:kH,nsucceq:BH,nsup:zH,nsupE:HH,nsupe:VH,nsupset:GH,nsupseteq:WH,nsupseteqq:qH,ntgl:XH,Ntilde:jH,ntilde:$H,ntlg:YH,ntriangleleft:KH,ntrianglelefteq:ZH,ntriangleright:JH,ntrianglerighteq:QH,Nu:eV,nu:tV,num:nV,numero:iV,numsp:rV,nvap:sV,nvdash:oV,nvDash:aV,nVdash:cV,nVDash:lV,nvge:uV,nvgt:fV,nvHarr:hV,nvinfin:dV,nvlArr:pV,nvle:mV,nvlt:gV,nvltrie:_V,nvrArr:vV,nvrtrie:xV,nvsim:SV,nwarhk:EV,nwarr:bV,nwArr:yV,nwarrow:MV,nwnear:TV,Oacute:AV,oacute:wV,oast:CV,Ocirc:RV,ocirc:LV,ocir:DV,Ocy:PV,ocy:UV,odash:IV,Odblac:FV,odblac:NV,odiv:OV,odot:kV,odsold:BV,OElig:zV,oelig:HV,ofcir:VV,Ofr:GV,ofr:WV,ogon:qV,Ograve:XV,ograve:jV,ogt:$V,ohbar:YV,ohm:KV,oint:ZV,olarr:JV,olcir:QV,olcross:eG,oline:tG,olt:nG,Omacr:iG,omacr:rG,Omega:sG,omega:oG,Omicron:aG,omicron:cG,omid:lG,ominus:uG,Oopf:fG,oopf:hG,opar:dG,OpenCurlyDoubleQuote:pG,OpenCurlyQuote:mG,operp:gG,oplus:_G,orarr:vG,Or:xG,or:SG,ord:EG,order:bG,orderof:yG,ordf:MG,ordm:TG,origof:AG,oror:wG,orslope:CG,orv:RG,oS:LG,Oscr:DG,oscr:PG,Oslash:UG,oslash:IG,osol:FG,Otilde:NG,otilde:OG,otimesas:kG,Otimes:BG,otimes:zG,Ouml:HG,ouml:VG,ovbar:GG,OverBar:WG,OverBrace:qG,OverBracket:XG,OverParenthesis:jG,para:$G,parallel:YG,par:KG,parsim:ZG,parsl:JG,part:QG,PartialD:e4,Pcy:t4,pcy:n4,percnt:i4,period:r4,permil:s4,perp:o4,pertenk:a4,Pfr:c4,pfr:l4,Phi:u4,phi:f4,phiv:h4,phmmat:d4,phone:p4,Pi:m4,pi:g4,pitchfork:_4,piv:v4,planck:x4,planckh:S4,plankv:E4,plusacir:b4,plusb:y4,pluscir:M4,plus:T4,plusdo:A4,plusdu:w4,pluse:C4,PlusMinus:R4,plusmn:L4,plussim:D4,plustwo:P4,pm:U4,Poincareplane:I4,pointint:F4,popf:N4,Popf:O4,pound:k4,prap:B4,Pr:z4,pr:H4,prcue:V4,precapprox:G4,prec:W4,preccurlyeq:q4,Precedes:X4,PrecedesEqual:j4,PrecedesSlantEqual:$4,PrecedesTilde:Y4,preceq:K4,precnapprox:Z4,precneqq:J4,precnsim:Q4,pre:eW,prE:tW,precsim:nW,prime:iW,Prime:rW,primes:sW,prnap:oW,prnE:aW,prnsim:cW,prod:lW,Product:uW,profalar:fW,profline:hW,profsurf:dW,prop:pW,Proportional:mW,Proportion:gW,propto:_W,prsim:vW,prurel:xW,Pscr:SW,pscr:EW,Psi:bW,psi:yW,puncsp:MW,Qfr:TW,qfr:AW,qint:wW,qopf:CW,Qopf:RW,qprime:LW,Qscr:DW,qscr:PW,quaternions:UW,quatint:IW,quest:FW,questeq:NW,quot:OW,QUOT:kW,rAarr:BW,race:zW,Racute:HW,racute:VW,radic:GW,raemptyv:WW,rang:qW,Rang:XW,rangd:jW,range:$W,rangle:YW,raquo:KW,rarrap:ZW,rarrb:JW,rarrbfs:QW,rarrc:eq,rarr:tq,Rarr:nq,rArr:iq,rarrfs:rq,rarrhk:sq,rarrlp:oq,rarrpl:aq,rarrsim:cq,Rarrtl:lq,rarrtl:uq,rarrw:fq,ratail:hq,rAtail:dq,ratio:pq,rationals:mq,rbarr:gq,rBarr:_q,RBarr:vq,rbbrk:xq,rbrace:Sq,rbrack:Eq,rbrke:bq,rbrksld:yq,rbrkslu:Mq,Rcaron:Tq,rcaron:Aq,Rcedil:wq,rcedil:Cq,rceil:Rq,rcub:Lq,Rcy:Dq,rcy:Pq,rdca:Uq,rdldhar:Iq,rdquo:Fq,rdquor:Nq,rdsh:Oq,real:kq,realine:Bq,realpart:zq,reals:Hq,Re:Vq,rect:Gq,reg:Wq,REG:qq,ReverseElement:Xq,ReverseEquilibrium:jq,ReverseUpEquilibrium:$q,rfisht:Yq,rfloor:Kq,rfr:Zq,Rfr:Jq,rHar:Qq,rhard:e5,rharu:t5,rharul:n5,Rho:i5,rho:r5,rhov:s5,RightAngleBracket:o5,RightArrowBar:a5,rightarrow:c5,RightArrow:l5,Rightarrow:u5,RightArrowLeftArrow:f5,rightarrowtail:h5,RightCeiling:d5,RightDoubleBracket:p5,RightDownTeeVector:m5,RightDownVectorBar:g5,RightDownVector:_5,RightFloor:v5,rightharpoondown:x5,rightharpoonup:S5,rightleftarrows:E5,rightleftharpoons:b5,rightrightarrows:y5,rightsquigarrow:M5,RightTeeArrow:T5,RightTee:A5,RightTeeVector:w5,rightthreetimes:C5,RightTriangleBar:R5,RightTriangle:L5,RightTriangleEqual:D5,RightUpDownVector:P5,RightUpTeeVector:U5,RightUpVectorBar:I5,RightUpVector:F5,RightVectorBar:N5,RightVector:O5,ring:k5,risingdotseq:B5,rlarr:z5,rlhar:H5,rlm:V5,rmoustache:G5,rmoust:W5,rnmid:q5,roang:X5,roarr:j5,robrk:$5,ropar:Y5,ropf:K5,Ropf:Z5,roplus:J5,rotimes:Q5,RoundImplies:e8,rpar:t8,rpargt:n8,rppolint:i8,rrarr:r8,Rrightarrow:s8,rsaquo:o8,rscr:a8,Rscr:c8,rsh:l8,Rsh:u8,rsqb:f8,rsquo:h8,rsquor:d8,rthree:p8,rtimes:m8,rtri:g8,rtrie:_8,rtrif:v8,rtriltri:x8,RuleDelayed:S8,ruluhar:E8,rx:b8,Sacute:y8,sacute:M8,sbquo:T8,scap:A8,Scaron:w8,scaron:C8,Sc:R8,sc:L8,sccue:D8,sce:P8,scE:U8,Scedil:I8,scedil:F8,Scirc:N8,scirc:O8,scnap:k8,scnE:B8,scnsim:z8,scpolint:H8,scsim:V8,Scy:G8,scy:W8,sdotb:q8,sdot:X8,sdote:j8,searhk:$8,searr:Y8,seArr:K8,searrow:Z8,sect:J8,semi:Q8,seswar:e6,setminus:t6,setmn:n6,sext:i6,Sfr:r6,sfr:s6,sfrown:o6,sharp:a6,SHCHcy:c6,shchcy:l6,SHcy:u6,shcy:f6,ShortDownArrow:h6,ShortLeftArrow:d6,shortmid:p6,shortparallel:m6,ShortRightArrow:g6,ShortUpArrow:_6,shy:v6,Sigma:x6,sigma:S6,sigmaf:E6,sigmav:b6,sim:y6,simdot:M6,sime:T6,simeq:A6,simg:w6,simgE:C6,siml:R6,simlE:L6,simne:D6,simplus:P6,simrarr:U6,slarr:I6,SmallCircle:F6,smallsetminus:N6,smashp:O6,smeparsl:k6,smid:B6,smile:z6,smt:H6,smte:V6,smtes:G6,SOFTcy:W6,softcy:q6,solbar:X6,solb:j6,sol:$6,Sopf:Y6,sopf:K6,spades:Z6,spadesuit:J6,spar:Q6,sqcap:e9,sqcaps:t9,sqcup:n9,sqcups:i9,Sqrt:r9,sqsub:s9,sqsube:o9,sqsubset:a9,sqsubseteq:c9,sqsup:l9,sqsupe:u9,sqsupset:f9,sqsupseteq:h9,square:d9,Square:p9,SquareIntersection:m9,SquareSubset:g9,SquareSubsetEqual:_9,SquareSuperset:v9,SquareSupersetEqual:x9,SquareUnion:S9,squarf:E9,squ:b9,squf:y9,srarr:M9,Sscr:T9,sscr:A9,ssetmn:w9,ssmile:C9,sstarf:R9,Star:L9,star:D9,starf:P9,straightepsilon:U9,straightphi:I9,strns:F9,sub:N9,Sub:O9,subdot:k9,subE:B9,sube:z9,subedot:H9,submult:V9,subnE:G9,subne:W9,subplus:q9,subrarr:X9,subset:j9,Subset:$9,subseteq:Y9,subseteqq:K9,SubsetEqual:Z9,subsetneq:J9,subsetneqq:Q9,subsim:eX,subsub:tX,subsup:nX,succapprox:iX,succ:rX,succcurlyeq:sX,Succeeds:oX,SucceedsEqual:aX,SucceedsSlantEqual:cX,SucceedsTilde:lX,succeq:uX,succnapprox:fX,succneqq:hX,succnsim:dX,succsim:pX,SuchThat:mX,sum:gX,Sum:_X,sung:vX,sup1:xX,sup2:SX,sup3:EX,sup:bX,Sup:yX,supdot:MX,supdsub:TX,supE:AX,supe:wX,supedot:CX,Superset:RX,SupersetEqual:LX,suphsol:DX,suphsub:PX,suplarr:UX,supmult:IX,supnE:FX,supne:NX,supplus:OX,supset:kX,Supset:BX,supseteq:zX,supseteqq:HX,supsetneq:VX,supsetneqq:GX,supsim:WX,supsub:qX,supsup:XX,swarhk:jX,swarr:$X,swArr:YX,swarrow:KX,swnwar:ZX,szlig:JX,Tab:QX,target:e7,Tau:t7,tau:n7,tbrk:i7,Tcaron:r7,tcaron:s7,Tcedil:o7,tcedil:a7,Tcy:c7,tcy:l7,tdot:u7,telrec:f7,Tfr:h7,tfr:d7,there4:p7,therefore:m7,Therefore:g7,Theta:_7,theta:v7,thetasym:x7,thetav:S7,thickapprox:E7,thicksim:b7,ThickSpace:y7,ThinSpace:M7,thinsp:T7,thkap:A7,thksim:w7,THORN:C7,thorn:R7,tilde:L7,Tilde:D7,TildeEqual:P7,TildeFullEqual:U7,TildeTilde:I7,timesbar:F7,timesb:N7,times:O7,timesd:k7,tint:B7,toea:z7,topbot:H7,topcir:V7,top:G7,Topf:W7,topf:q7,topfork:X7,tosa:j7,tprime:$7,trade:Y7,TRADE:K7,triangle:Z7,triangledown:J7,triangleleft:Q7,trianglelefteq:ej,triangleq:tj,triangleright:nj,trianglerighteq:ij,tridot:rj,trie:sj,triminus:oj,TripleDot:aj,triplus:cj,trisb:lj,tritime:uj,trpezium:fj,Tscr:hj,tscr:dj,TScy:pj,tscy:mj,TSHcy:gj,tshcy:_j,Tstrok:vj,tstrok:xj,twixt:Sj,twoheadleftarrow:Ej,twoheadrightarrow:bj,Uacute:yj,uacute:Mj,uarr:Tj,Uarr:Aj,uArr:wj,Uarrocir:Cj,Ubrcy:Rj,ubrcy:Lj,Ubreve:Dj,ubreve:Pj,Ucirc:Uj,ucirc:Ij,Ucy:Fj,ucy:Nj,udarr:Oj,Udblac:kj,udblac:Bj,udhar:zj,ufisht:Hj,Ufr:Vj,ufr:Gj,Ugrave:Wj,ugrave:qj,uHar:Xj,uharl:jj,uharr:$j,uhblk:Yj,ulcorn:Kj,ulcorner:Zj,ulcrop:Jj,ultri:Qj,Umacr:e$,umacr:t$,uml:n$,UnderBar:i$,UnderBrace:r$,UnderBracket:s$,UnderParenthesis:o$,Union:a$,UnionPlus:c$,Uogon:l$,uogon:u$,Uopf:f$,uopf:h$,UpArrowBar:d$,uparrow:p$,UpArrow:m$,Uparrow:g$,UpArrowDownArrow:_$,updownarrow:v$,UpDownArrow:x$,Updownarrow:S$,UpEquilibrium:E$,upharpoonleft:b$,upharpoonright:y$,uplus:M$,UpperLeftArrow:T$,UpperRightArrow:A$,upsi:w$,Upsi:C$,upsih:R$,Upsilon:L$,upsilon:D$,UpTeeArrow:P$,UpTee:U$,upuparrows:I$,urcorn:F$,urcorner:N$,urcrop:O$,Uring:k$,uring:B$,urtri:z$,Uscr:H$,uscr:V$,utdot:G$,Utilde:W$,utilde:q$,utri:X$,utrif:j$,uuarr:$$,Uuml:Y$,uuml:K$,uwangle:Z$,vangrt:J$,varepsilon:Q$,varkappa:eY,varnothing:tY,varphi:nY,varpi:iY,varpropto:rY,varr:sY,vArr:oY,varrho:aY,varsigma:cY,varsubsetneq:lY,varsubsetneqq:uY,varsupsetneq:fY,varsupsetneqq:hY,vartheta:dY,vartriangleleft:pY,vartriangleright:mY,vBar:gY,Vbar:_Y,vBarv:vY,Vcy:xY,vcy:SY,vdash:EY,vDash:bY,Vdash:yY,VDash:MY,Vdashl:TY,veebar:AY,vee:wY,Vee:CY,veeeq:RY,vellip:LY,verbar:DY,Verbar:PY,vert:UY,Vert:IY,VerticalBar:FY,VerticalLine:NY,VerticalSeparator:OY,VerticalTilde:kY,VeryThinSpace:BY,Vfr:zY,vfr:HY,vltri:VY,vnsub:GY,vnsup:WY,Vopf:qY,vopf:XY,vprop:jY,vrtri:$Y,Vscr:YY,vscr:KY,vsubnE:ZY,vsubne:JY,vsupnE:QY,vsupne:eK,Vvdash:tK,vzigzag:nK,Wcirc:iK,wcirc:rK,wedbar:sK,wedge:oK,Wedge:aK,wedgeq:cK,weierp:lK,Wfr:uK,wfr:fK,Wopf:hK,wopf:dK,wp:pK,wr:mK,wreath:gK,Wscr:_K,wscr:vK,xcap:xK,xcirc:SK,xcup:EK,xdtri:bK,Xfr:yK,xfr:MK,xharr:TK,xhArr:AK,Xi:wK,xi:CK,xlarr:RK,xlArr:LK,xmap:DK,xnis:PK,xodot:UK,Xopf:IK,xopf:FK,xoplus:NK,xotime:OK,xrarr:kK,xrArr:BK,Xscr:zK,xscr:HK,xsqcup:VK,xuplus:GK,xutri:WK,xvee:qK,xwedge:XK,Yacute:jK,yacute:$K,YAcy:YK,yacy:KK,Ycirc:ZK,ycirc:JK,Ycy:QK,ycy:eZ,yen:tZ,Yfr:nZ,yfr:iZ,YIcy:rZ,yicy:sZ,Yopf:oZ,yopf:aZ,Yscr:cZ,yscr:lZ,YUcy:uZ,yucy:fZ,yuml:hZ,Yuml:dZ,Zacute:pZ,zacute:mZ,Zcaron:gZ,zcaron:_Z,Zcy:vZ,zcy:xZ,Zdot:SZ,zdot:EZ,zeetrf:bZ,ZeroWidthSpace:yZ,Zeta:MZ,zeta:TZ,zfr:AZ,Zfr:wZ,ZHcy:CZ,zhcy:RZ,zigrarr:LZ,zopf:DZ,Zopf:PZ,Zscr:UZ,zscr:IZ,zwj:FZ,zwnj:NZ};var rd=OZ,vc=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,hr={},Iu={};function kZ(n){var e,t,i=Iu[n];if(i)return i;for(i=Iu[n]=[],e=0;e<128;e++)t=String.fromCharCode(e),/^[0-9a-z]$/i.test(t)?i.push(t):i.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<n.length;e++)i[n.charCodeAt(e)]=n[e];return i}function ao(n,e,t){var i,r,s,a,o,c="";for(typeof e!="string"&&(t=e,e=ao.defaultChars),typeof t>"u"&&(t=!0),o=kZ(e),i=0,r=n.length;i<r;i++){if(s=n.charCodeAt(i),t&&s===37&&i+2<r&&/^[0-9a-f]{2}$/i.test(n.slice(i+1,i+3))){c+=n.slice(i,i+3),i+=2;continue}if(s<128){c+=o[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&i+1<r&&(a=n.charCodeAt(i+1),a>=56320&&a<=57343)){c+=encodeURIComponent(n[i]+n[i+1]),i++;continue}c+="%EF%BF%BD";continue}c+=encodeURIComponent(n[i])}return c}ao.defaultChars=";/?:@&=+$,-_.!~*'()#";ao.componentChars="-_.!~*'()";var BZ=ao,Fu={};function zZ(n){var e,t,i=Fu[n];if(i)return i;for(i=Fu[n]=[],e=0;e<128;e++)t=String.fromCharCode(e),i.push(t);for(e=0;e<n.length;e++)t=n.charCodeAt(e),i[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return i}function co(n,e){var t;return typeof e!="string"&&(e=co.defaultChars),t=zZ(e),n.replace(/(%[a-f0-9]{2})+/gi,function(i){var r,s,a,o,c,l,u,f="";for(r=0,s=i.length;r<s;r+=3){if(a=parseInt(i.slice(r+1,r+3),16),a<128){f+=t[a];continue}if((a&224)===192&&r+3<s&&(o=parseInt(i.slice(r+4,r+6),16),(o&192)===128)){u=a<<6&1984|o&63,u<128?f+="��":f+=String.fromCharCode(u),r+=3;continue}if((a&240)===224&&r+6<s&&(o=parseInt(i.slice(r+4,r+6),16),c=parseInt(i.slice(r+7,r+9),16),(o&192)===128&&(c&192)===128)){u=a<<12&61440|o<<6&4032|c&63,u<2048||u>=55296&&u<=57343?f+="���":f+=String.fromCharCode(u),r+=6;continue}if((a&248)===240&&r+9<s&&(o=parseInt(i.slice(r+4,r+6),16),c=parseInt(i.slice(r+7,r+9),16),l=parseInt(i.slice(r+10,r+12),16),(o&192)===128&&(c&192)===128&&(l&192)===128)){u=a<<18&1835008|o<<12&258048|c<<6&4032|l&63,u<65536||u>1114111?f+="����":(u-=65536,f+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),r+=9;continue}f+="�"}return f})}co.defaultChars=";/?:@&=+$,#";co.componentChars="";var HZ=co,VZ=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t};function Ws(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var GZ=/^([a-z0-9.+-]+:)/i,WZ=/:[0-9]*$/,qZ=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,XZ=["<",">",'"',"`"," ","\r",`
`,"	"],jZ=["{","}","|","\\","^","`"].concat(XZ),$Z=["'"].concat(jZ),Nu=["%","/","?",";","#"].concat($Z),Ou=["/","?","#"],YZ=255,ku=/^[+a-z0-9A-Z_-]{0,63}$/,KZ=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Bu={javascript:!0,"javascript:":!0},zu={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function ZZ(n,e){if(n&&n instanceof Ws)return n;var t=new Ws;return t.parse(n,e),t}Ws.prototype.parse=function(n,e){var t,i,r,s,a,o=n;if(o=o.trim(),!e&&n.split("#").length===1){var c=qZ.exec(o);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}var l=GZ.exec(o);if(l&&(l=l[0],r=l.toLowerCase(),this.protocol=l,o=o.substr(l.length)),(e||l||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(a=o.substr(0,2)==="//",a&&!(l&&Bu[l])&&(o=o.substr(2),this.slashes=!0)),!Bu[l]&&(a||l&&!zu[l])){var u=-1;for(t=0;t<Ou.length;t++)s=o.indexOf(Ou[t]),s!==-1&&(u===-1||s<u)&&(u=s);var f,h;for(u===-1?h=o.lastIndexOf("@"):h=o.lastIndexOf("@",u),h!==-1&&(f=o.slice(0,h),o=o.slice(h+1),this.auth=f),u=-1,t=0;t<Nu.length;t++)s=o.indexOf(Nu[t]),s!==-1&&(u===-1||s<u)&&(u=s);u===-1&&(u=o.length),o[u-1]===":"&&u--;var p=o.slice(0,u);o=o.slice(u),this.parseHost(p),this.hostname=this.hostname||"";var v=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!v){var g=this.hostname.split(/\./);for(t=0,i=g.length;t<i;t++){var m=g[t];if(m&&!m.match(ku)){for(var d="",y=0,S=m.length;y<S;y++)m.charCodeAt(y)>127?d+="x":d+=m[y];if(!d.match(ku)){var b=g.slice(0,t),A=g.slice(t+1),C=m.match(KZ);C&&(b.push(C[1]),A.unshift(C[2])),A.length&&(o=A.join(".")+o),this.hostname=b.join(".");break}}}}this.hostname.length>YZ&&(this.hostname=""),v&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var R=o.indexOf("#");R!==-1&&(this.hash=o.substr(R),o=o.slice(0,R));var O=o.indexOf("?");return O!==-1&&(this.search=o.substr(O),o=o.slice(0,O)),o&&(this.pathname=o),zu[r]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Ws.prototype.parseHost=function(n){var e=WZ.exec(n);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),n=n.substr(0,n.length-e.length)),n&&(this.hostname=n)};var JZ=ZZ;hr.encode=BZ;hr.decode=HZ;hr.format=VZ;hr.parse=JZ;var mi={},ha,Hu;function sd(){return Hu||(Hu=1,ha=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/),ha}var da,Vu;function od(){return Vu||(Vu=1,da=/[\0-\x1F\x7F-\x9F]/),da}var pa,Gu;function QZ(){return Gu||(Gu=1,pa=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/),pa}var ma,Wu;function ad(){return Wu||(Wu=1,ma=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/),ma}var qu;function eJ(){return qu||(qu=1,mi.Any=sd(),mi.Cc=od(),mi.Cf=QZ(),mi.P=vc,mi.Z=ad()),mi}(function(n){function e(L){return Object.prototype.toString.call(L)}function t(L){return e(L)==="[object String]"}var i=Object.prototype.hasOwnProperty;function r(L,k){return i.call(L,k)}function s(L){var k=Array.prototype.slice.call(arguments,1);return k.forEach(function(I){if(I){if(typeof I!="object")throw new TypeError(I+"must be object");Object.keys(I).forEach(function(V){L[V]=I[V]})}}),L}function a(L,k,I){return[].concat(L.slice(0,k),I,L.slice(k+1))}function o(L){return!(L>=55296&&L<=57343||L>=64976&&L<=65007||(L&65535)===65535||(L&65535)===65534||L>=0&&L<=8||L===11||L>=14&&L<=31||L>=127&&L<=159||L>1114111)}function c(L){if(L>65535){L-=65536;var k=55296+(L>>10),I=56320+(L&1023);return String.fromCharCode(k,I)}return String.fromCharCode(L)}var l=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,u=/&([a-z#][a-z0-9]{1,31});/gi,f=new RegExp(l.source+"|"+u.source,"gi"),h=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i,p=rd;function v(L,k){var I;return r(p,k)?p[k]:k.charCodeAt(0)===35&&h.test(k)&&(I=k[1].toLowerCase()==="x"?parseInt(k.slice(2),16):parseInt(k.slice(1),10),o(I))?c(I):L}function g(L){return L.indexOf("\\")<0?L:L.replace(l,"$1")}function m(L){return L.indexOf("\\")<0&&L.indexOf("&")<0?L:L.replace(f,function(k,I,V){return I||v(k,V)})}var d=/[&<>"]/,y=/[&<>"]/g,S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function b(L){return S[L]}function A(L){return d.test(L)?L.replace(y,b):L}var C=/[.?*+^$[\]\\(){}|-]/g;function R(L){return L.replace(C,"\\$&")}function O(L){switch(L){case 9:case 32:return!0}return!1}function M(L){if(L>=8192&&L<=8202)return!0;switch(L){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var w=vc;function X(L){return w.test(L)}function ne(L){switch(L){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function ae(L){return L=L.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(L=L.replace(/ẞ/g,"ß")),L.toLowerCase().toUpperCase()}n.lib={},n.lib.mdurl=hr,n.lib.ucmicro=eJ(),n.assign=s,n.isString=t,n.has=r,n.unescapeMd=g,n.unescapeAll=m,n.isValidEntityCode=o,n.fromCodePoint=c,n.escapeHtml=A,n.arrayReplaceAt=a,n.isSpace=O,n.isWhiteSpace=M,n.isMdAsciiPunct=ne,n.isPunctChar=X,n.escapeRE=R,n.normalizeReference=ae})(je);var lo={},tJ=function(e,t,i){var r,s,a,o,c=-1,l=e.posMax,u=e.pos;for(e.pos=t+1,r=1;e.pos<l;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){s=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(i)return e.pos=u,-1}}return s&&(c=e.pos),e.pos=u,c},Xu=je.unescapeAll,nJ=function(e,t,i){var r,s,a=t,o={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(a)===60){for(a++;a<i;){if(r=e.charCodeAt(a),r===10||r===60)return o;if(r===62)return o.pos=a+1,o.str=Xu(e.slice(t+1,a)),o.ok=!0,o;if(r===92&&a+1<i){a+=2;continue}a++}return o}for(s=0;a<i&&(r=e.charCodeAt(a),!(r===32||r<32||r===127));){if(r===92&&a+1<i){if(e.charCodeAt(a+1)===32)break;a+=2;continue}if(r===40&&(s++,s>32))return o;if(r===41){if(s===0)break;s--}a++}return t===a||s!==0||(o.str=Xu(e.slice(t,a)),o.pos=a,o.ok=!0),o},iJ=je.unescapeAll,rJ=function(e,t,i){var r,s,a=0,o=t,c={ok:!1,pos:0,lines:0,str:""};if(o>=i||(s=e.charCodeAt(o),s!==34&&s!==39&&s!==40))return c;for(o++,s===40&&(s=41);o<i;){if(r=e.charCodeAt(o),r===s)return c.pos=o+1,c.lines=a,c.str=iJ(e.slice(t+1,o)),c.ok=!0,c;if(r===40&&s===41)return c;r===10?a++:r===92&&o+1<i&&(o++,e.charCodeAt(o)===10&&a++),o++}return c};lo.parseLinkLabel=tJ;lo.parseLinkDestination=nJ;lo.parseLinkTitle=rJ;var sJ=je.assign,oJ=je.unescapeAll,Li=je.escapeHtml,_n={};_n.code_inline=function(n,e,t,i,r){var s=n[e];return"<code"+r.renderAttrs(s)+">"+Li(s.content)+"</code>"};_n.code_block=function(n,e,t,i,r){var s=n[e];return"<pre"+r.renderAttrs(s)+"><code>"+Li(n[e].content)+`</code></pre>
`};_n.fence=function(n,e,t,i,r){var s=n[e],a=s.info?oJ(s.info).trim():"",o="",c="",l,u,f,h,p;return a&&(f=a.split(/(\s+)/g),o=f[0],c=f.slice(2).join("")),t.highlight?l=t.highlight(s.content,o,c)||Li(s.content):l=Li(s.content),l.indexOf("<pre")===0?l+`
`:a?(u=s.attrIndex("class"),h=s.attrs?s.attrs.slice():[],u<0?h.push(["class",t.langPrefix+o]):(h[u]=h[u].slice(),h[u][1]+=" "+t.langPrefix+o),p={attrs:h},"<pre><code"+r.renderAttrs(p)+">"+l+`</code></pre>
`):"<pre><code"+r.renderAttrs(s)+">"+l+`</code></pre>
`};_n.image=function(n,e,t,i,r){var s=n[e];return s.attrs[s.attrIndex("alt")][1]=r.renderInlineAsText(s.children,t,i),r.renderToken(n,e,t)};_n.hardbreak=function(n,e,t){return t.xhtmlOut?`<br />
`:`<br>
`};_n.softbreak=function(n,e,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};_n.text=function(n,e){return Li(n[e].content)};_n.html_block=function(n,e){return n[e].content};_n.html_inline=function(n,e){return n[e].content};function dr(){this.rules=sJ({},_n)}dr.prototype.renderAttrs=function(e){var t,i,r;if(!e.attrs)return"";for(r="",t=0,i=e.attrs.length;t<i;t++)r+=" "+Li(e.attrs[t][0])+'="'+Li(e.attrs[t][1])+'"';return r};dr.prototype.renderToken=function(e,t,i){var r,s="",a=!1,o=e[t];return o.hidden?"":(o.block&&o.nesting!==-1&&t&&e[t-1].hidden&&(s+=`
`),s+=(o.nesting===-1?"</":"<")+o.tag,s+=this.renderAttrs(o),o.nesting===0&&i.xhtmlOut&&(s+=" /"),o.block&&(a=!0,o.nesting===1&&t+1<e.length&&(r=e[t+1],(r.type==="inline"||r.hidden||r.nesting===-1&&r.tag===o.tag)&&(a=!1))),s+=a?`>
`:">",s)};dr.prototype.renderInline=function(n,e,t){for(var i,r="",s=this.rules,a=0,o=n.length;a<o;a++)i=n[a].type,typeof s[i]<"u"?r+=s[i](n,a,e,t,this):r+=this.renderToken(n,a,e);return r};dr.prototype.renderInlineAsText=function(n,e,t){for(var i="",r=0,s=n.length;r<s;r++)n[r].type==="text"?i+=n[r].content:n[r].type==="image"?i+=this.renderInlineAsText(n[r].children,e,t):n[r].type==="softbreak"&&(i+=`
`);return i};dr.prototype.render=function(n,e,t){var i,r,s,a="",o=this.rules;for(i=0,r=n.length;i<r;i++)s=n[i].type,s==="inline"?a+=this.renderInline(n[i].children,e,t):typeof o[s]<"u"?a+=o[s](n,i,e,t,this):a+=this.renderToken(n,i,e,t);return a};var aJ=dr;function an(){this.__rules__=[],this.__cache__=null}an.prototype.__find__=function(n){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===n)return e;return-1};an.prototype.__compile__=function(){var n=this,e=[""];n.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(i){e.indexOf(i)<0&&e.push(i)})}),n.__cache__={},e.forEach(function(t){n.__cache__[t]=[],n.__rules__.forEach(function(i){i.enabled&&(t&&i.alt.indexOf(t)<0||n.__cache__[t].push(i.fn))})})};an.prototype.at=function(n,e,t){var i=this.__find__(n),r=t||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__[i].fn=e,this.__rules__[i].alt=r.alt||[],this.__cache__=null};an.prototype.before=function(n,e,t,i){var r=this.__find__(n),s=i||{};if(r===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(r,0,{name:e,enabled:!0,fn:t,alt:s.alt||[]}),this.__cache__=null};an.prototype.after=function(n,e,t,i){var r=this.__find__(n),s=i||{};if(r===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(r+1,0,{name:e,enabled:!0,fn:t,alt:s.alt||[]}),this.__cache__=null};an.prototype.push=function(n,e,t){var i=t||{};this.__rules__.push({name:n,enabled:!0,fn:e,alt:i.alt||[]}),this.__cache__=null};an.prototype.enable=function(n,e){Array.isArray(n)||(n=[n]);var t=[];return n.forEach(function(i){var r=this.__find__(i);if(r<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[r].enabled=!0,t.push(i)},this),this.__cache__=null,t};an.prototype.enableOnly=function(n,e){Array.isArray(n)||(n=[n]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(n,e)};an.prototype.disable=function(n,e){Array.isArray(n)||(n=[n]);var t=[];return n.forEach(function(i){var r=this.__find__(i);if(r<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[r].enabled=!1,t.push(i)},this),this.__cache__=null,t};an.prototype.getRules=function(n){return this.__cache__===null&&this.__compile__(),this.__cache__[n]||[]};var xc=an,cJ=/\r\n?|\n/g,lJ=/\0/g,uJ=function(e){var t;t=e.src.replace(cJ,`
`),t=t.replace(lJ,"�"),e.src=t},fJ=function(e){var t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)},hJ=function(e){var t=e.tokens,i,r,s;for(r=0,s=t.length;r<s;r++)i=t[r],i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)},dJ=je.arrayReplaceAt;function pJ(n){return/^<a[>\s]/i.test(n)}function mJ(n){return/^<\/a\s*>/i.test(n)}var gJ=function(e){var t,i,r,s,a,o,c,l,u,f,h,p,v,g,m,d,y=e.tokens,S;if(e.md.options.linkify){for(i=0,r=y.length;i<r;i++)if(!(y[i].type!=="inline"||!e.md.linkify.pretest(y[i].content)))for(s=y[i].children,v=0,t=s.length-1;t>=0;t--){if(o=s[t],o.type==="link_close"){for(t--;s[t].level!==o.level&&s[t].type!=="link_open";)t--;continue}if(o.type==="html_inline"&&(pJ(o.content)&&v>0&&v--,mJ(o.content)&&v++),!(v>0)&&o.type==="text"&&e.md.linkify.test(o.content)){for(u=o.content,S=e.md.linkify.match(u),c=[],p=o.level,h=0,S.length>0&&S[0].index===0&&t>0&&s[t-1].type==="text_special"&&(S=S.slice(1)),l=0;l<S.length;l++)g=S[l].url,m=e.md.normalizeLink(g),e.md.validateLink(m)&&(d=S[l].text,S[l].schema?S[l].schema==="mailto:"&&!/^mailto:/i.test(d)?d=e.md.normalizeLinkText("mailto:"+d).replace(/^mailto:/,""):d=e.md.normalizeLinkText(d):d=e.md.normalizeLinkText("http://"+d).replace(/^http:\/\//,""),f=S[l].index,f>h&&(a=new e.Token("text","",0),a.content=u.slice(h,f),a.level=p,c.push(a)),a=new e.Token("link_open","a",1),a.attrs=[["href",m]],a.level=p++,a.markup="linkify",a.info="auto",c.push(a),a=new e.Token("text","",0),a.content=d,a.level=p,c.push(a),a=new e.Token("link_close","a",-1),a.level=--p,a.markup="linkify",a.info="auto",c.push(a),h=S[l].lastIndex);h<u.length&&(a=new e.Token("text","",0),a.content=u.slice(h),a.level=p,c.push(a)),y[i].children=s=dJ(s,t,c)}}}},cd=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,_J=/\((c|tm|r)\)/i,vJ=/\((c|tm|r)\)/ig,xJ={c:"©",r:"®",tm:"™"};function SJ(n,e){return xJ[e.toLowerCase()]}function EJ(n){var e,t,i=0;for(e=n.length-1;e>=0;e--)t=n[e],t.type==="text"&&!i&&(t.content=t.content.replace(vJ,SJ)),t.type==="link_open"&&t.info==="auto"&&i--,t.type==="link_close"&&t.info==="auto"&&i++}function bJ(n){var e,t,i=0;for(e=n.length-1;e>=0;e--)t=n[e],t.type==="text"&&!i&&cd.test(t.content)&&(t.content=t.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),t.type==="link_open"&&t.info==="auto"&&i--,t.type==="link_close"&&t.info==="auto"&&i++}var yJ=function(e){var t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(_J.test(e.tokens[t].content)&&EJ(e.tokens[t].children),cd.test(e.tokens[t].content)&&bJ(e.tokens[t].children))},ju=je.isWhiteSpace,$u=je.isPunctChar,Yu=je.isMdAsciiPunct,MJ=/['"]/,Ku=/['"]/g,Zu="’";function Ts(n,e,t){return n.slice(0,e)+t+n.slice(e+1)}function TJ(n,e){var t,i,r,s,a,o,c,l,u,f,h,p,v,g,m,d,y,S,b,A,C;for(b=[],t=0;t<n.length;t++){for(i=n[t],c=n[t].level,y=b.length-1;y>=0&&!(b[y].level<=c);y--);if(b.length=y+1,i.type==="text"){r=i.content,a=0,o=r.length;e:for(;a<o&&(Ku.lastIndex=a,s=Ku.exec(r),!!s);){if(m=d=!0,a=s.index+1,S=s[0]==="'",u=32,s.index-1>=0)u=r.charCodeAt(s.index-1);else for(y=t-1;y>=0&&!(n[y].type==="softbreak"||n[y].type==="hardbreak");y--)if(n[y].content){u=n[y].content.charCodeAt(n[y].content.length-1);break}if(f=32,a<o)f=r.charCodeAt(a);else for(y=t+1;y<n.length&&!(n[y].type==="softbreak"||n[y].type==="hardbreak");y++)if(n[y].content){f=n[y].content.charCodeAt(0);break}if(h=Yu(u)||$u(String.fromCharCode(u)),p=Yu(f)||$u(String.fromCharCode(f)),v=ju(u),g=ju(f),g?m=!1:p&&(v||h||(m=!1)),v?d=!1:h&&(g||p||(d=!1)),f===34&&s[0]==='"'&&u>=48&&u<=57&&(d=m=!1),m&&d&&(m=h,d=p),!m&&!d){S&&(i.content=Ts(i.content,s.index,Zu));continue}if(d){for(y=b.length-1;y>=0&&(l=b[y],!(b[y].level<c));y--)if(l.single===S&&b[y].level===c){l=b[y],S?(A=e.md.options.quotes[2],C=e.md.options.quotes[3]):(A=e.md.options.quotes[0],C=e.md.options.quotes[1]),i.content=Ts(i.content,s.index,C),n[l.token].content=Ts(n[l.token].content,l.pos,A),a+=C.length-1,l.token===t&&(a+=A.length-1),r=i.content,o=r.length,b.length=y;continue e}}m?b.push({token:t,pos:s.index,single:S,level:c}):d&&S&&(i.content=Ts(i.content,s.index,Zu))}}}}var AJ=function(e){var t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!MJ.test(e.tokens[t].content)||TJ(e.tokens[t].children,e)},wJ=function(e){var t,i,r,s,a,o,c=e.tokens;for(t=0,i=c.length;t<i;t++)if(c[t].type==="inline"){for(r=c[t].children,a=r.length,s=0;s<a;s++)r[s].type==="text_special"&&(r[s].type="text");for(s=o=0;s<a;s++)r[s].type==="text"&&s+1<a&&r[s+1].type==="text"?r[s+1].content=r[s].content+r[s+1].content:(s!==o&&(r[o]=r[s]),o++);s!==o&&(r.length=o)}};function pr(n,e,t){this.type=n,this.tag=e,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}pr.prototype.attrIndex=function(e){var t,i,r;if(!this.attrs)return-1;for(t=this.attrs,i=0,r=t.length;i<r;i++)if(t[i][0]===e)return i;return-1};pr.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};pr.prototype.attrSet=function(e,t){var i=this.attrIndex(e),r=[e,t];i<0?this.attrPush(r):this.attrs[i]=r};pr.prototype.attrGet=function(e){var t=this.attrIndex(e),i=null;return t>=0&&(i=this.attrs[t][1]),i};pr.prototype.attrJoin=function(e,t){var i=this.attrIndex(e);i<0?this.attrPush([e,t]):this.attrs[i][1]=this.attrs[i][1]+" "+t};var Sc=pr,CJ=Sc;function ld(n,e,t){this.src=n,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=e}ld.prototype.Token=CJ;var RJ=ld,LJ=xc,ga=[["normalize",uJ],["block",fJ],["inline",hJ],["linkify",gJ],["replacements",yJ],["smartquotes",AJ],["text_join",wJ]];function Ec(){this.ruler=new LJ;for(var n=0;n<ga.length;n++)this.ruler.push(ga[n][0],ga[n][1])}Ec.prototype.process=function(n){var e,t,i;for(i=this.ruler.getRules(""),e=0,t=i.length;e<t;e++)i[e](n)};Ec.prototype.State=RJ;var DJ=Ec,_a=je.isSpace;function va(n,e){var t=n.bMarks[e]+n.tShift[e],i=n.eMarks[e];return n.src.slice(t,i)}function Ju(n){var e=[],t=0,i=n.length,r,s=!1,a=0,o="";for(r=n.charCodeAt(t);t<i;)r===124&&(s?(o+=n.substring(a,t-1),a=t):(e.push(o+n.substring(a,t)),o="",a=t+1)),s=r===92,t++,r=n.charCodeAt(t);return e.push(o+n.substring(a)),e}var PJ=function(e,t,i,r){var s,a,o,c,l,u,f,h,p,v,g,m,d,y,S,b,A,C;if(t+2>i||(u=t+1,e.sCount[u]<e.blkIndent)||e.sCount[u]-e.blkIndent>=4||(o=e.bMarks[u]+e.tShift[u],o>=e.eMarks[u])||(A=e.src.charCodeAt(o++),A!==124&&A!==45&&A!==58)||o>=e.eMarks[u]||(C=e.src.charCodeAt(o++),C!==124&&C!==45&&C!==58&&!_a(C))||A===45&&_a(C))return!1;for(;o<e.eMarks[u];){if(s=e.src.charCodeAt(o),s!==124&&s!==45&&s!==58&&!_a(s))return!1;o++}for(a=va(e,t+1),f=a.split("|"),v=[],c=0;c<f.length;c++){if(g=f[c].trim(),!g){if(c===0||c===f.length-1)continue;return!1}if(!/^:?-+:?$/.test(g))return!1;g.charCodeAt(g.length-1)===58?v.push(g.charCodeAt(0)===58?"center":"right"):g.charCodeAt(0)===58?v.push("left"):v.push("")}if(a=va(e,t).trim(),a.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4||(f=Ju(a),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),h=f.length,h===0||h!==v.length))return!1;if(r)return!0;for(y=e.parentType,e.parentType="table",b=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),p.map=m=[t,0],p=e.push("thead_open","thead",1),p.map=[t,t+1],p=e.push("tr_open","tr",1),p.map=[t,t+1],c=0;c<f.length;c++)p=e.push("th_open","th",1),v[c]&&(p.attrs=[["style","text-align:"+v[c]]]),p=e.push("inline","",0),p.content=f[c].trim(),p.children=[],p=e.push("th_close","th",-1);for(p=e.push("tr_close","tr",-1),p=e.push("thead_close","thead",-1),u=t+2;u<i&&!(e.sCount[u]<e.blkIndent);u++){for(S=!1,c=0,l=b.length;c<l;c++)if(b[c](e,u,i,!0)){S=!0;break}if(S||(a=va(e,u).trim(),!a)||e.sCount[u]-e.blkIndent>=4)break;for(f=Ju(a),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),u===t+2&&(p=e.push("tbody_open","tbody",1),p.map=d=[t+2,0]),p=e.push("tr_open","tr",1),p.map=[u,u+1],c=0;c<h;c++)p=e.push("td_open","td",1),v[c]&&(p.attrs=[["style","text-align:"+v[c]]]),p=e.push("inline","",0),p.content=f[c]?f[c].trim():"",p.children=[],p=e.push("td_close","td",-1);p=e.push("tr_close","tr",-1)}return d&&(p=e.push("tbody_close","tbody",-1),d[1]=u),p=e.push("table_close","table",-1),m[1]=u,e.parentType=y,e.line=u,!0},UJ=function(e,t,i){var r,s,a;if(e.sCount[t]-e.blkIndent<4)return!1;for(s=r=t+1;r<i;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,s=r;continue}break}return e.line=s,a=e.push("code_block","code",0),a.content=e.getLines(t,s,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0},IJ=function(e,t,i,r){var s,a,o,c,l,u,f,h=!1,p=e.bMarks[t]+e.tShift[t],v=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||p+3>v||(s=e.src.charCodeAt(p),s!==126&&s!==96)||(l=p,p=e.skipChars(p,s),a=p-l,a<3)||(f=e.src.slice(l,p),o=e.src.slice(p,v),s===96&&o.indexOf(String.fromCharCode(s))>=0))return!1;if(r)return!0;for(c=t;c++,!(c>=i||(p=l=e.bMarks[c]+e.tShift[c],v=e.eMarks[c],p<v&&e.sCount[c]<e.blkIndent));)if(e.src.charCodeAt(p)===s&&!(e.sCount[c]-e.blkIndent>=4)&&(p=e.skipChars(p,s),!(p-l<a)&&(p=e.skipSpaces(p),!(p<v)))){h=!0;break}return a=e.sCount[t],e.line=c+(h?1:0),u=e.push("fence","code",0),u.info=o,u.content=e.getLines(t+1,c,a,!0),u.markup=f,u.map=[t,e.line],!0},FJ=je.isSpace,NJ=function(e,t,i,r){var s,a,o,c,l,u,f,h,p,v,g,m,d,y,S,b,A,C,R,O,M=e.lineMax,w=e.bMarks[t]+e.tShift[t],X=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(w)!==62)return!1;if(r)return!0;for(v=[],g=[],y=[],S=[],C=e.md.block.ruler.getRules("blockquote"),d=e.parentType,e.parentType="blockquote",h=t;h<i&&(O=e.sCount[h]<e.blkIndent,w=e.bMarks[h]+e.tShift[h],X=e.eMarks[h],!(w>=X));h++){if(e.src.charCodeAt(w++)===62&&!O){for(c=e.sCount[h]+1,e.src.charCodeAt(w)===32?(w++,c++,s=!1,b=!0):e.src.charCodeAt(w)===9?(b=!0,(e.bsCount[h]+c)%4===3?(w++,c++,s=!1):s=!0):b=!1,p=c,v.push(e.bMarks[h]),e.bMarks[h]=w;w<X&&(a=e.src.charCodeAt(w),FJ(a));){a===9?p+=4-(p+e.bsCount[h]+(s?1:0))%4:p++;w++}u=w>=X,g.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(b?1:0),y.push(e.sCount[h]),e.sCount[h]=p-c,S.push(e.tShift[h]),e.tShift[h]=w-e.bMarks[h];continue}if(u)break;for(A=!1,o=0,l=C.length;o<l;o++)if(C[o](e,h,i,!0)){A=!0;break}if(A){e.lineMax=h,e.blkIndent!==0&&(v.push(e.bMarks[h]),g.push(e.bsCount[h]),S.push(e.tShift[h]),y.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}v.push(e.bMarks[h]),g.push(e.bsCount[h]),S.push(e.tShift[h]),y.push(e.sCount[h]),e.sCount[h]=-1}for(m=e.blkIndent,e.blkIndent=0,R=e.push("blockquote_open","blockquote",1),R.markup=">",R.map=f=[t,0],e.md.block.tokenize(e,t,h),R=e.push("blockquote_close","blockquote",-1),R.markup=">",e.lineMax=M,e.parentType=d,f[1]=e.line,o=0;o<S.length;o++)e.bMarks[o+t]=v[o],e.tShift[o+t]=S[o],e.sCount[o+t]=y[o],e.bsCount[o+t]=g[o];return e.blkIndent=m,!0},OJ=je.isSpace,kJ=function(e,t,i,r){var s,a,o,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(s=e.src.charCodeAt(l++),s!==42&&s!==45&&s!==95))return!1;for(a=1;l<u;){if(o=e.src.charCodeAt(l++),o!==s&&!OJ(o))return!1;o===s&&a++}return a<3?!1:(r||(e.line=t+1,c=e.push("hr","hr",0),c.map=[t,e.line],c.markup=Array(a+1).join(String.fromCharCode(s))),!0)},ud=je.isSpace;function Qu(n,e){var t,i,r,s;return i=n.bMarks[e]+n.tShift[e],r=n.eMarks[e],t=n.src.charCodeAt(i++),t!==42&&t!==45&&t!==43||i<r&&(s=n.src.charCodeAt(i),!ud(s))?-1:i}function ef(n,e){var t,i=n.bMarks[e]+n.tShift[e],r=i,s=n.eMarks[e];if(r+1>=s||(t=n.src.charCodeAt(r++),t<48||t>57))return-1;for(;;){if(r>=s)return-1;if(t=n.src.charCodeAt(r++),t>=48&&t<=57){if(r-i>=10)return-1;continue}if(t===41||t===46)break;return-1}return r<s&&(t=n.src.charCodeAt(r),!ud(t))?-1:r}function BJ(n,e){var t,i,r=n.level+2;for(t=e+2,i=n.tokens.length-2;t<i;t++)n.tokens[t].level===r&&n.tokens[t].type==="paragraph_open"&&(n.tokens[t+2].hidden=!0,n.tokens[t].hidden=!0,t+=2)}var zJ=function(e,t,i,r){var s,a,o,c,l,u,f,h,p,v,g,m,d,y,S,b,A,C,R,O,M,w,X,ne,ae,L,k,I=t,V=!1,ee=!0;if(e.sCount[I]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[I]-e.listIndent>=4&&e.sCount[I]<e.blkIndent)return!1;if(r&&e.parentType==="paragraph"&&e.sCount[I]>=e.blkIndent&&(V=!0),(w=ef(e,I))>=0){if(f=!0,ne=e.bMarks[I]+e.tShift[I],d=Number(e.src.slice(ne,w-1)),V&&d!==1)return!1}else if((w=Qu(e,I))>=0)f=!1;else return!1;if(V&&e.skipSpaces(w)>=e.eMarks[I])return!1;if(r)return!0;for(m=e.src.charCodeAt(w-1),g=e.tokens.length,f?(k=e.push("ordered_list_open","ol",1),d!==1&&(k.attrs=[["start",d]])):k=e.push("bullet_list_open","ul",1),k.map=v=[I,0],k.markup=String.fromCharCode(m),X=!1,L=e.md.block.ruler.getRules("list"),A=e.parentType,e.parentType="list";I<i;){for(M=w,y=e.eMarks[I],u=S=e.sCount[I]+w-(e.bMarks[I]+e.tShift[I]);M<y;){if(s=e.src.charCodeAt(M),s===9)S+=4-(S+e.bsCount[I])%4;else if(s===32)S++;else break;M++}if(a=M,a>=y?l=1:l=S-u,l>4&&(l=1),c=u+l,k=e.push("list_item_open","li",1),k.markup=String.fromCharCode(m),k.map=h=[I,0],f&&(k.info=e.src.slice(ne,w-1)),O=e.tight,R=e.tShift[I],C=e.sCount[I],b=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=c,e.tight=!0,e.tShift[I]=a-e.bMarks[I],e.sCount[I]=S,a>=y&&e.isEmpty(I+1)?e.line=Math.min(e.line+2,i):e.md.block.tokenize(e,I,i,!0),(!e.tight||X)&&(ee=!1),X=e.line-I>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=b,e.tShift[I]=R,e.sCount[I]=C,e.tight=O,k=e.push("list_item_close","li",-1),k.markup=String.fromCharCode(m),I=e.line,h[1]=I,I>=i||e.sCount[I]<e.blkIndent||e.sCount[I]-e.blkIndent>=4)break;for(ae=!1,o=0,p=L.length;o<p;o++)if(L[o](e,I,i,!0)){ae=!0;break}if(ae)break;if(f){if(w=ef(e,I),w<0)break;ne=e.bMarks[I]+e.tShift[I]}else if(w=Qu(e,I),w<0)break;if(m!==e.src.charCodeAt(w-1))break}return f?k=e.push("ordered_list_close","ol",-1):k=e.push("bullet_list_close","ul",-1),k.markup=String.fromCharCode(m),v[1]=I,e.line=I,e.parentType=A,ee&&BJ(e,g),!0},HJ=je.normalizeReference,As=je.isSpace,VJ=function(e,t,i,r){var s,a,o,c,l,u,f,h,p,v,g,m,d,y,S,b,A=0,C=e.bMarks[t]+e.tShift[t],R=e.eMarks[t],O=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(C)!==91)return!1;for(;++C<R;)if(e.src.charCodeAt(C)===93&&e.src.charCodeAt(C-1)!==92){if(C+1===R||e.src.charCodeAt(C+1)!==58)return!1;break}for(c=e.lineMax,S=e.md.block.ruler.getRules("reference"),v=e.parentType,e.parentType="reference";O<c&&!e.isEmpty(O);O++)if(!(e.sCount[O]-e.blkIndent>3)&&!(e.sCount[O]<0)){for(y=!1,u=0,f=S.length;u<f;u++)if(S[u](e,O,c,!0)){y=!0;break}if(y)break}for(d=e.getLines(t,O,e.blkIndent,!1).trim(),R=d.length,C=1;C<R;C++){if(s=d.charCodeAt(C),s===91)return!1;if(s===93){p=C;break}else s===10?A++:s===92&&(C++,C<R&&d.charCodeAt(C)===10&&A++)}if(p<0||d.charCodeAt(p+1)!==58)return!1;for(C=p+2;C<R;C++)if(s=d.charCodeAt(C),s===10)A++;else if(!As(s))break;if(g=e.md.helpers.parseLinkDestination(d,C,R),!g.ok||(l=e.md.normalizeLink(g.str),!e.md.validateLink(l)))return!1;for(C=g.pos,A+=g.lines,a=C,o=A,m=C;C<R;C++)if(s=d.charCodeAt(C),s===10)A++;else if(!As(s))break;for(g=e.md.helpers.parseLinkTitle(d,C,R),C<R&&m!==C&&g.ok?(b=g.str,C=g.pos,A+=g.lines):(b="",C=a,A=o);C<R&&(s=d.charCodeAt(C),!!As(s));)C++;if(C<R&&d.charCodeAt(C)!==10&&b)for(b="",C=a,A=o;C<R&&(s=d.charCodeAt(C),!!As(s));)C++;return C<R&&d.charCodeAt(C)!==10||(h=HJ(d.slice(1,p)),!h)?!1:(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[h]>"u"&&(e.env.references[h]={title:b,href:l}),e.parentType=v,e.line=t+A+1),!0)},GJ=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],uo={},WJ="[a-zA-Z_:][a-zA-Z0-9:._-]*",qJ="[^\"'=<>`\\x00-\\x20]+",XJ="'[^']*'",jJ='"[^"]*"',$J="(?:"+qJ+"|"+XJ+"|"+jJ+")",YJ="(?:\\s+"+WJ+"(?:\\s*=\\s*"+$J+")?)",fd="<[A-Za-z][A-Za-z0-9\\-]*"+YJ+"*\\s*\\/?>",hd="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",KJ="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",ZJ="<[?][\\s\\S]*?[?]>",JJ="<![A-Z]+\\s+[^>]*>",QJ="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",eQ=new RegExp("^(?:"+fd+"|"+hd+"|"+KJ+"|"+ZJ+"|"+JJ+"|"+QJ+")"),tQ=new RegExp("^(?:"+fd+"|"+hd+")");uo.HTML_TAG_RE=eQ;uo.HTML_OPEN_CLOSE_TAG_RE=tQ;var nQ=GJ,iQ=uo.HTML_OPEN_CLOSE_TAG_RE,$i=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+nQ.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(iQ.source+"\\s*$"),/^$/,!1]],rQ=function(e,t,i,r){var s,a,o,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(l)!==60)return!1;for(c=e.src.slice(l,u),s=0;s<$i.length&&!$i[s][0].test(c);s++);if(s===$i.length)return!1;if(r)return $i[s][2];if(a=t+1,!$i[s][1].test(c)){for(;a<i&&!(e.sCount[a]<e.blkIndent);a++)if(l=e.bMarks[a]+e.tShift[a],u=e.eMarks[a],c=e.src.slice(l,u),$i[s][1].test(c)){c.length!==0&&a++;break}}return e.line=a,o=e.push("html_block","",0),o.map=[t,a],o.content=e.getLines(t,a,e.blkIndent,!0),!0},tf=je.isSpace,sQ=function(e,t,i,r){var s,a,o,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(s=e.src.charCodeAt(l),s!==35||l>=u))return!1;for(a=1,s=e.src.charCodeAt(++l);s===35&&l<u&&a<=6;)a++,s=e.src.charCodeAt(++l);return a>6||l<u&&!tf(s)?!1:(r||(u=e.skipSpacesBack(u,l),o=e.skipCharsBack(u,35,l),o>l&&tf(e.src.charCodeAt(o-1))&&(u=o),e.line=t+1,c=e.push("heading_open","h"+String(a),1),c.markup="########".slice(0,a),c.map=[t,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[t,e.line],c.children=[],c=e.push("heading_close","h"+String(a),-1),c.markup="########".slice(0,a)),!0)},oQ=function(e,t,i){var r,s,a,o,c,l,u,f,h,p=t+1,v,g=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;for(v=e.parentType,e.parentType="paragraph";p<i&&!e.isEmpty(p);p++)if(!(e.sCount[p]-e.blkIndent>3)){if(e.sCount[p]>=e.blkIndent&&(l=e.bMarks[p]+e.tShift[p],u=e.eMarks[p],l<u&&(h=e.src.charCodeAt(l),(h===45||h===61)&&(l=e.skipChars(l,h),l=e.skipSpaces(l),l>=u)))){f=h===61?1:2;break}if(!(e.sCount[p]<0)){for(s=!1,a=0,o=g.length;a<o;a++)if(g[a](e,p,i,!0)){s=!0;break}if(s)break}}return f?(r=e.getLines(t,p,e.blkIndent,!1).trim(),e.line=p+1,c=e.push("heading_open","h"+String(f),1),c.markup=String.fromCharCode(h),c.map=[t,e.line],c=e.push("inline","",0),c.content=r,c.map=[t,e.line-1],c.children=[],c=e.push("heading_close","h"+String(f),-1),c.markup=String.fromCharCode(h),e.parentType=v,!0):!1},aQ=function(e,t,i){var r,s,a,o,c,l,u=t+1,f=e.md.block.ruler.getRules("paragraph");for(l=e.parentType,e.parentType="paragraph";u<i&&!e.isEmpty(u);u++)if(!(e.sCount[u]-e.blkIndent>3)&&!(e.sCount[u]<0)){for(s=!1,a=0,o=f.length;a<o;a++)if(f[a](e,u,i,!0)){s=!0;break}if(s)break}return r=e.getLines(t,u,e.blkIndent,!1).trim(),e.line=u,c=e.push("paragraph_open","p",1),c.map=[t,e.line],c=e.push("inline","",0),c.content=r,c.map=[t,e.line],c.children=[],c=e.push("paragraph_close","p",-1),e.parentType=l,!0},dd=Sc,fo=je.isSpace;function vn(n,e,t,i){var r,s,a,o,c,l,u,f;for(this.src=n,this.md=e,this.env=t,this.tokens=i,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",s=this.src,f=!1,a=o=l=u=0,c=s.length;o<c;o++){if(r=s.charCodeAt(o),!f)if(fo(r)){l++,r===9?u+=4-u%4:u++;continue}else f=!0;(r===10||o===c-1)&&(r!==10&&o++,this.bMarks.push(a),this.eMarks.push(o),this.tShift.push(l),this.sCount.push(u),this.bsCount.push(0),f=!1,l=0,u=0,a=o+1)}this.bMarks.push(s.length),this.eMarks.push(s.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}vn.prototype.push=function(n,e,t){var i=new dd(n,e,t);return i.block=!0,t<0&&this.level--,i.level=this.level,t>0&&this.level++,this.tokens.push(i),i};vn.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};vn.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};vn.prototype.skipSpaces=function(e){for(var t,i=this.src.length;e<i&&(t=this.src.charCodeAt(e),!!fo(t));e++);return e};vn.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!fo(this.src.charCodeAt(--e)))return e+1;return e};vn.prototype.skipChars=function(e,t){for(var i=this.src.length;e<i&&this.src.charCodeAt(e)===t;e++);return e};vn.prototype.skipCharsBack=function(e,t,i){if(e<=i)return e;for(;e>i;)if(t!==this.src.charCodeAt(--e))return e+1;return e};vn.prototype.getLines=function(e,t,i,r){var s,a,o,c,l,u,f,h=e;if(e>=t)return"";for(u=new Array(t-e),s=0;h<t;h++,s++){for(a=0,f=c=this.bMarks[h],h+1<t||r?l=this.eMarks[h]+1:l=this.eMarks[h];c<l&&a<i;){if(o=this.src.charCodeAt(c),fo(o))o===9?a+=4-(a+this.bsCount[h])%4:a++;else if(c-f<this.tShift[h])a++;else break;c++}a>i?u[s]=new Array(a-i+1).join(" ")+this.src.slice(c,l):u[s]=this.src.slice(c,l)}return u.join("")};vn.prototype.Token=dd;var cQ=vn,lQ=xc,ws=[["table",PJ,["paragraph","reference"]],["code",UJ],["fence",IJ,["paragraph","reference","blockquote","list"]],["blockquote",NJ,["paragraph","reference","blockquote","list"]],["hr",kJ,["paragraph","reference","blockquote","list"]],["list",zJ,["paragraph","reference","blockquote"]],["reference",VJ],["html_block",rQ,["paragraph","reference","blockquote"]],["heading",sQ,["paragraph","reference","blockquote"]],["lheading",oQ],["paragraph",aQ]];function ho(){this.ruler=new lQ;for(var n=0;n<ws.length;n++)this.ruler.push(ws[n][0],ws[n][1],{alt:(ws[n][2]||[]).slice()})}ho.prototype.tokenize=function(n,e,t){for(var i,r,s,a=this.ruler.getRules(""),o=a.length,c=e,l=!1,u=n.md.options.maxNesting;c<t&&(n.line=c=n.skipEmptyLines(c),!(c>=t||n.sCount[c]<n.blkIndent));){if(n.level>=u){n.line=t;break}for(s=n.line,r=0;r<o;r++)if(i=a[r](n,c,t,!1),i){if(s>=n.line)throw new Error("block rule didn't increment state.line");break}if(!i)throw new Error("none of the block rules matched");n.tight=!l,n.isEmpty(n.line-1)&&(l=!0),c=n.line,c<t&&n.isEmpty(c)&&(l=!0,c++,n.line=c)}};ho.prototype.parse=function(n,e,t,i){var r;n&&(r=new this.State(n,e,t,i),this.tokenize(r,r.line,r.lineMax))};ho.prototype.State=cQ;var uQ=ho;function fQ(n){switch(n){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}var hQ=function(e,t){for(var i=e.pos;i<e.posMax&&!fQ(e.src.charCodeAt(i));)i++;return i===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,i)),e.pos=i,!0)},dQ=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i,pQ=function(e,t){var i,r,s,a,o,c,l,u;return!e.md.options.linkify||e.linkLevel>0||(i=e.pos,r=e.posMax,i+3>r)||e.src.charCodeAt(i)!==58||e.src.charCodeAt(i+1)!==47||e.src.charCodeAt(i+2)!==47||(s=e.pending.match(dQ),!s)||(a=s[1],o=e.md.linkify.matchAtStart(e.src.slice(i-a.length)),!o)||(c=o.url,c.length<=a.length)||(c=c.replace(/\*+$/,""),l=e.md.normalizeLink(c),!e.md.validateLink(l))?!1:(t||(e.pending=e.pending.slice(0,-a.length),u=e.push("link_open","a",1),u.attrs=[["href",l]],u.markup="linkify",u.info="auto",u=e.push("text","",0),u.content=e.md.normalizeLinkText(c),u=e.push("link_close","a",-1),u.markup="linkify",u.info="auto"),e.pos+=c.length-a.length,!0)},mQ=je.isSpace,gQ=function(e,t){var i,r,s,a=e.pos;if(e.src.charCodeAt(a)!==10)return!1;if(i=e.pending.length-1,r=e.posMax,!t)if(i>=0&&e.pending.charCodeAt(i)===32)if(i>=1&&e.pending.charCodeAt(i-1)===32){for(s=i-1;s>=1&&e.pending.charCodeAt(s-1)===32;)s--;e.pending=e.pending.slice(0,s),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(a++;a<r&&mQ(e.src.charCodeAt(a));)a++;return e.pos=a,!0},_Q=je.isSpace,bc=[];for(var nf=0;nf<256;nf++)bc.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){bc[n.charCodeAt(0)]=1});var vQ=function(e,t){var i,r,s,a,o,c=e.pos,l=e.posMax;if(e.src.charCodeAt(c)!==92||(c++,c>=l))return!1;if(i=e.src.charCodeAt(c),i===10){for(t||e.push("hardbreak","br",0),c++;c<l&&(i=e.src.charCodeAt(c),!!_Q(i));)c++;return e.pos=c,!0}return a=e.src[c],i>=55296&&i<=56319&&c+1<l&&(r=e.src.charCodeAt(c+1),r>=56320&&r<=57343&&(a+=e.src[c+1],c++)),s="\\"+a,t||(o=e.push("text_special","",0),i<256&&bc[i]!==0?o.content=a:o.content=s,o.markup=s,o.info="escape"),e.pos=c+1,!0},xQ=function(e,t){var i,r,s,a,o,c,l,u,f=e.pos,h=e.src.charCodeAt(f);if(h!==96)return!1;for(i=f,f++,r=e.posMax;f<r&&e.src.charCodeAt(f)===96;)f++;if(s=e.src.slice(i,f),l=s.length,e.backticksScanned&&(e.backticks[l]||0)<=i)return t||(e.pending+=s),e.pos+=l,!0;for(c=f;(o=e.src.indexOf("`",c))!==-1;){for(c=o+1;c<r&&e.src.charCodeAt(c)===96;)c++;if(u=c-o,u===l)return t||(a=e.push("code_inline","code",0),a.markup=s,a.content=e.src.slice(f,o).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=c,!0;e.backticks[u]=o}return e.backticksScanned=!0,t||(e.pending+=s),e.pos+=l,!0},po={};po.tokenize=function(e,t){var i,r,s,a,o,c=e.pos,l=e.src.charCodeAt(c);if(t||l!==126||(r=e.scanDelims(e.pos,!0),a=r.length,o=String.fromCharCode(l),a<2))return!1;for(a%2&&(s=e.push("text","",0),s.content=o,a--),i=0;i<a;i+=2)s=e.push("text","",0),s.content=o+o,e.delimiters.push({marker:l,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0};function rf(n,e){var t,i,r,s,a,o=[],c=e.length;for(t=0;t<c;t++)r=e[t],r.marker===126&&r.end!==-1&&(s=e[r.end],a=n.tokens[r.token],a.type="s_open",a.tag="s",a.nesting=1,a.markup="~~",a.content="",a=n.tokens[s.token],a.type="s_close",a.tag="s",a.nesting=-1,a.markup="~~",a.content="",n.tokens[s.token-1].type==="text"&&n.tokens[s.token-1].content==="~"&&o.push(s.token-1));for(;o.length;){for(t=o.pop(),i=t+1;i<n.tokens.length&&n.tokens[i].type==="s_close";)i++;i--,t!==i&&(a=n.tokens[i],n.tokens[i]=n.tokens[t],n.tokens[t]=a)}}po.postProcess=function(e){var t,i=e.tokens_meta,r=e.tokens_meta.length;for(rf(e,e.delimiters),t=0;t<r;t++)i[t]&&i[t].delimiters&&rf(e,i[t].delimiters)};var mo={};mo.tokenize=function(e,t){var i,r,s,a=e.pos,o=e.src.charCodeAt(a);if(t||o!==95&&o!==42)return!1;for(r=e.scanDelims(e.pos,o===42),i=0;i<r.length;i++)s=e.push("text","",0),s.content=String.fromCharCode(o),e.delimiters.push({marker:o,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0};function sf(n,e){var t,i,r,s,a,o,c=e.length;for(t=c-1;t>=0;t--)i=e[t],!(i.marker!==95&&i.marker!==42)&&i.end!==-1&&(r=e[i.end],o=t>0&&e[t-1].end===i.end+1&&e[t-1].marker===i.marker&&e[t-1].token===i.token-1&&e[i.end+1].token===r.token+1,a=String.fromCharCode(i.marker),s=n.tokens[i.token],s.type=o?"strong_open":"em_open",s.tag=o?"strong":"em",s.nesting=1,s.markup=o?a+a:a,s.content="",s=n.tokens[r.token],s.type=o?"strong_close":"em_close",s.tag=o?"strong":"em",s.nesting=-1,s.markup=o?a+a:a,s.content="",o&&(n.tokens[e[t-1].token].content="",n.tokens[e[i.end+1].token].content="",t--))}mo.postProcess=function(e){var t,i=e.tokens_meta,r=e.tokens_meta.length;for(sf(e,e.delimiters),t=0;t<r;t++)i[t]&&i[t].delimiters&&sf(e,i[t].delimiters)};var SQ=je.normalizeReference,xa=je.isSpace,EQ=function(e,t){var i,r,s,a,o,c,l,u,f,h="",p="",v=e.pos,g=e.posMax,m=e.pos,d=!0;if(e.src.charCodeAt(e.pos)!==91||(o=e.pos+1,a=e.md.helpers.parseLinkLabel(e,e.pos,!0),a<0))return!1;if(c=a+1,c<g&&e.src.charCodeAt(c)===40){for(d=!1,c++;c<g&&(r=e.src.charCodeAt(c),!(!xa(r)&&r!==10));c++);if(c>=g)return!1;if(m=c,l=e.md.helpers.parseLinkDestination(e.src,c,e.posMax),l.ok){for(h=e.md.normalizeLink(l.str),e.md.validateLink(h)?c=l.pos:h="",m=c;c<g&&(r=e.src.charCodeAt(c),!(!xa(r)&&r!==10));c++);if(l=e.md.helpers.parseLinkTitle(e.src,c,e.posMax),c<g&&m!==c&&l.ok)for(p=l.str,c=l.pos;c<g&&(r=e.src.charCodeAt(c),!(!xa(r)&&r!==10));c++);}(c>=g||e.src.charCodeAt(c)!==41)&&(d=!0),c++}if(d){if(typeof e.env.references>"u")return!1;if(c<g&&e.src.charCodeAt(c)===91?(m=c+1,c=e.md.helpers.parseLinkLabel(e,c),c>=0?s=e.src.slice(m,c++):c=a+1):c=a+1,s||(s=e.src.slice(o,a)),u=e.env.references[SQ(s)],!u)return e.pos=v,!1;h=u.href,p=u.title}return t||(e.pos=o,e.posMax=a,f=e.push("link_open","a",1),f.attrs=i=[["href",h]],p&&i.push(["title",p]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,f=e.push("link_close","a",-1)),e.pos=c,e.posMax=g,!0},bQ=je.normalizeReference,Sa=je.isSpace,yQ=function(e,t){var i,r,s,a,o,c,l,u,f,h,p,v,g,m="",d=e.pos,y=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(c=e.pos+2,o=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),o<0))return!1;if(l=o+1,l<y&&e.src.charCodeAt(l)===40){for(l++;l<y&&(r=e.src.charCodeAt(l),!(!Sa(r)&&r!==10));l++);if(l>=y)return!1;for(g=l,f=e.md.helpers.parseLinkDestination(e.src,l,e.posMax),f.ok&&(m=e.md.normalizeLink(f.str),e.md.validateLink(m)?l=f.pos:m=""),g=l;l<y&&(r=e.src.charCodeAt(l),!(!Sa(r)&&r!==10));l++);if(f=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<y&&g!==l&&f.ok)for(h=f.str,l=f.pos;l<y&&(r=e.src.charCodeAt(l),!(!Sa(r)&&r!==10));l++);else h="";if(l>=y||e.src.charCodeAt(l)!==41)return e.pos=d,!1;l++}else{if(typeof e.env.references>"u")return!1;if(l<y&&e.src.charCodeAt(l)===91?(g=l+1,l=e.md.helpers.parseLinkLabel(e,l),l>=0?a=e.src.slice(g,l++):l=o+1):l=o+1,a||(a=e.src.slice(c,o)),u=e.env.references[bQ(a)],!u)return e.pos=d,!1;m=u.href,h=u.title}return t||(s=e.src.slice(c,o),e.md.inline.parse(s,e.md,e.env,v=[]),p=e.push("image","img",0),p.attrs=i=[["src",m],["alt",""]],p.children=v,p.content=s,h&&i.push(["title",h])),e.pos=l,e.posMax=y,!0},MQ=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,TQ=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,AQ=function(e,t){var i,r,s,a,o,c,l=e.pos;if(e.src.charCodeAt(l)!==60)return!1;for(o=e.pos,c=e.posMax;;){if(++l>=c||(a=e.src.charCodeAt(l),a===60))return!1;if(a===62)break}return i=e.src.slice(o+1,l),TQ.test(i)?(r=e.md.normalizeLink(i),e.md.validateLink(r)?(t||(s=e.push("link_open","a",1),s.attrs=[["href",r]],s.markup="autolink",s.info="auto",s=e.push("text","",0),s.content=e.md.normalizeLinkText(i),s=e.push("link_close","a",-1),s.markup="autolink",s.info="auto"),e.pos+=i.length+2,!0):!1):MQ.test(i)?(r=e.md.normalizeLink("mailto:"+i),e.md.validateLink(r)?(t||(s=e.push("link_open","a",1),s.attrs=[["href",r]],s.markup="autolink",s.info="auto",s=e.push("text","",0),s.content=e.md.normalizeLinkText(i),s=e.push("link_close","a",-1),s.markup="autolink",s.info="auto"),e.pos+=i.length+2,!0):!1):!1},wQ=uo.HTML_TAG_RE;function CQ(n){return/^<a[>\s]/i.test(n)}function RQ(n){return/^<\/a\s*>/i.test(n)}function LQ(n){var e=n|32;return e>=97&&e<=122}var DQ=function(e,t){var i,r,s,a,o=e.pos;return!e.md.options.html||(s=e.posMax,e.src.charCodeAt(o)!==60||o+2>=s)||(i=e.src.charCodeAt(o+1),i!==33&&i!==63&&i!==47&&!LQ(i))||(r=e.src.slice(o).match(wQ),!r)?!1:(t||(a=e.push("html_inline","",0),a.content=r[0],CQ(a.content)&&e.linkLevel++,RQ(a.content)&&e.linkLevel--),e.pos+=r[0].length,!0)},of=rd,PQ=je.has,UQ=je.isValidEntityCode,af=je.fromCodePoint,IQ=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,FQ=/^&([a-z][a-z0-9]{1,31});/i,NQ=function(e,t){var i,r,s,a,o=e.pos,c=e.posMax;if(e.src.charCodeAt(o)!==38||o+1>=c)return!1;if(i=e.src.charCodeAt(o+1),i===35){if(s=e.src.slice(o).match(IQ),s)return t||(r=s[1][0].toLowerCase()==="x"?parseInt(s[1].slice(1),16):parseInt(s[1],10),a=e.push("text_special","",0),a.content=UQ(r)?af(r):af(65533),a.markup=s[0],a.info="entity"),e.pos+=s[0].length,!0}else if(s=e.src.slice(o).match(FQ),s&&PQ(of,s[1]))return t||(a=e.push("text_special","",0),a.content=of[s[1]],a.markup=s[0],a.info="entity"),e.pos+=s[0].length,!0;return!1};function cf(n){var e,t,i,r,s,a,o,c,l={},u=n.length;if(u){var f=0,h=-2,p=[];for(e=0;e<u;e++)if(i=n[e],p.push(0),(n[f].marker!==i.marker||h!==i.token-1)&&(f=e),h=i.token,i.length=i.length||0,!!i.close){for(l.hasOwnProperty(i.marker)||(l[i.marker]=[-1,-1,-1,-1,-1,-1]),s=l[i.marker][(i.open?3:0)+i.length%3],t=f-p[f]-1,a=t;t>s;t-=p[t]+1)if(r=n[t],r.marker===i.marker&&r.open&&r.end<0&&(o=!1,(r.close||i.open)&&(r.length+i.length)%3===0&&(r.length%3!==0||i.length%3!==0)&&(o=!0),!o)){c=t>0&&!n[t-1].open?p[t-1]+1:0,p[e]=e-t+c,p[t]=c,i.open=!1,r.end=e,r.close=!1,a=-1,h=-2;break}a!==-1&&(l[i.marker][(i.open?3:0)+(i.length||0)%3]=a)}}}var OQ=function(e){var t,i=e.tokens_meta,r=e.tokens_meta.length;for(cf(e.delimiters),t=0;t<r;t++)i[t]&&i[t].delimiters&&cf(i[t].delimiters)},kQ=function(e){var t,i,r=0,s=e.tokens,a=e.tokens.length;for(t=i=0;t<a;t++)s[t].nesting<0&&r--,s[t].level=r,s[t].nesting>0&&r++,s[t].type==="text"&&t+1<a&&s[t+1].type==="text"?s[t+1].content=s[t].content+s[t+1].content:(t!==i&&(s[i]=s[t]),i++);t!==i&&(s.length=i)},yc=Sc,lf=je.isWhiteSpace,uf=je.isPunctChar,ff=je.isMdAsciiPunct;function Yr(n,e,t,i){this.src=n,this.env=t,this.md=e,this.tokens=i,this.tokens_meta=Array(i.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Yr.prototype.pushPending=function(){var n=new yc("text","",0);return n.content=this.pending,n.level=this.pendingLevel,this.tokens.push(n),this.pending="",n};Yr.prototype.push=function(n,e,t){this.pending&&this.pushPending();var i=new yc(n,e,t),r=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),i.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(i),this.tokens_meta.push(r),i};Yr.prototype.scanDelims=function(n,e){var t=n,i,r,s,a,o,c,l,u,f,h=!0,p=!0,v=this.posMax,g=this.src.charCodeAt(n);for(i=n>0?this.src.charCodeAt(n-1):32;t<v&&this.src.charCodeAt(t)===g;)t++;return s=t-n,r=t<v?this.src.charCodeAt(t):32,l=ff(i)||uf(String.fromCharCode(i)),f=ff(r)||uf(String.fromCharCode(r)),c=lf(i),u=lf(r),u?h=!1:f&&(c||l||(h=!1)),c?p=!1:l&&(u||f||(p=!1)),e?(a=h,o=p):(a=h&&(!p||l),o=p&&(!h||f)),{can_open:a,can_close:o,length:s}};Yr.prototype.Token=yc;var BQ=Yr,hf=xc,Ea=[["text",hQ],["linkify",pQ],["newline",gQ],["escape",vQ],["backticks",xQ],["strikethrough",po.tokenize],["emphasis",mo.tokenize],["link",EQ],["image",yQ],["autolink",AQ],["html_inline",DQ],["entity",NQ]],ba=[["balance_pairs",OQ],["strikethrough",po.postProcess],["emphasis",mo.postProcess],["fragments_join",kQ]];function Kr(){var n;for(this.ruler=new hf,n=0;n<Ea.length;n++)this.ruler.push(Ea[n][0],Ea[n][1]);for(this.ruler2=new hf,n=0;n<ba.length;n++)this.ruler2.push(ba[n][0],ba[n][1])}Kr.prototype.skipToken=function(n){var e,t,i=n.pos,r=this.ruler.getRules(""),s=r.length,a=n.md.options.maxNesting,o=n.cache;if(typeof o[i]<"u"){n.pos=o[i];return}if(n.level<a){for(t=0;t<s;t++)if(n.level++,e=r[t](n,!0),n.level--,e){if(i>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}else n.pos=n.posMax;e||n.pos++,o[i]=n.pos};Kr.prototype.tokenize=function(n){for(var e,t,i,r=this.ruler.getRules(""),s=r.length,a=n.posMax,o=n.md.options.maxNesting;n.pos<a;){if(i=n.pos,n.level<o){for(t=0;t<s;t++)if(e=r[t](n,!1),e){if(i>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}if(e){if(n.pos>=a)break;continue}n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()};Kr.prototype.parse=function(n,e,t,i){var r,s,a,o=new this.State(n,e,t,i);for(this.tokenize(o),s=this.ruler2.getRules(""),a=s.length,r=0;r<a;r++)s[r](o)};Kr.prototype.State=BQ;var zQ=Kr,ya,df;function HQ(){return df||(df=1,ya=function(n){var e={};n=n||{},e.src_Any=sd().source,e.src_Cc=od().source,e.src_Z=ad().source,e.src_P=vc.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var t="[><｜]";return e.src_pseudo_letter="(?:(?!"+t+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+t+"|"+e.src_ZPCc+")(?!"+(n["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(n["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}),ya}function qa(n){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(t){t&&Object.keys(t).forEach(function(i){n[i]=t[i]})}),n}function go(n){return Object.prototype.toString.call(n)}function VQ(n){return go(n)==="[object String]"}function GQ(n){return go(n)==="[object Object]"}function WQ(n){return go(n)==="[object RegExp]"}function pf(n){return go(n)==="[object Function]"}function qQ(n){return n.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var pd={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function XQ(n){return Object.keys(n||{}).reduce(function(e,t){return e||pd.hasOwnProperty(t)},!1)}var jQ={"http:":{validate:function(n,e,t){var i=n.slice(e);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(i)?i.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(n,e,t){var i=n.slice(e);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(i)?e>=3&&n[e-3]===":"||e>=3&&n[e-3]==="/"?0:i.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(n,e,t){var i=n.slice(e);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(i)?i.match(t.re.mailto)[0].length:0}}},$Q="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",YQ="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function KQ(n){n.__index__=-1,n.__text_cache__=""}function ZQ(n){return function(e,t){var i=e.slice(t);return n.test(i)?i.match(n)[0].length:0}}function mf(){return function(n,e){e.normalize(n)}}function qs(n){var e=n.re=HQ()(n.__opts__),t=n.__tlds__.slice();n.onCompile(),n.__tlds_replaced__||t.push($Q),t.push(e.src_xn),e.src_tlds=t.join("|");function i(o){return o.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(i(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(i(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(i(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(i(e.tpl_host_fuzzy_test),"i");var r=[];n.__compiled__={};function s(o,c){throw new Error('(LinkifyIt) Invalid schema "'+o+'": '+c)}Object.keys(n.__schemas__).forEach(function(o){var c=n.__schemas__[o];if(c!==null){var l={validate:null,link:null};if(n.__compiled__[o]=l,GQ(c)){WQ(c.validate)?l.validate=ZQ(c.validate):pf(c.validate)?l.validate=c.validate:s(o,c),pf(c.normalize)?l.normalize=c.normalize:c.normalize?s(o,c):l.normalize=mf();return}if(VQ(c)){r.push(o);return}s(o,c)}}),r.forEach(function(o){n.__compiled__[n.__schemas__[o]]&&(n.__compiled__[o].validate=n.__compiled__[n.__schemas__[o]].validate,n.__compiled__[o].normalize=n.__compiled__[n.__schemas__[o]].normalize)}),n.__compiled__[""]={validate:null,normalize:mf()};var a=Object.keys(n.__compiled__).filter(function(o){return o.length>0&&n.__compiled__[o]}).map(qQ).join("|");n.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+a+")","i"),n.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+a+")","ig"),n.re.schema_at_start=RegExp("^"+n.re.schema_search.source,"i"),n.re.pretest=RegExp("("+n.re.schema_test.source+")|("+n.re.host_fuzzy_test.source+")|@","i"),KQ(n)}function JQ(n,e){var t=n.__index__,i=n.__last_index__,r=n.__text_cache__.slice(t,i);this.schema=n.__schema__.toLowerCase(),this.index=t+e,this.lastIndex=i+e,this.raw=r,this.text=r,this.url=r}function Xa(n,e){var t=new JQ(n,e);return n.__compiled__[t.schema].normalize(t,n),t}function Gt(n,e){if(!(this instanceof Gt))return new Gt(n,e);e||XQ(n)&&(e=n,n={}),this.__opts__=qa({},pd,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=qa({},jQ,n),this.__compiled__={},this.__tlds__=YQ,this.__tlds_replaced__=!1,this.re={},qs(this)}Gt.prototype.add=function(e,t){return this.__schemas__[e]=t,qs(this),this};Gt.prototype.set=function(e){return this.__opts__=qa(this.__opts__,e),this};Gt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var t,i,r,s,a,o,c,l,u;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(t=c.exec(e))!==null;)if(s=this.testSchemaAt(e,t[2],c.lastIndex),s){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+s;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=e.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(i=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=i.index+i[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__="",this.__index__=a,this.__last_index__=i.index+i[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=e.indexOf("@"),u>=0&&(r=e.match(this.re.email_fuzzy))!==null&&(a=r.index+r[1].length,o=r.index+r[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&o>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=a,this.__last_index__=o))),this.__index__>=0};Gt.prototype.pretest=function(e){return this.re.pretest.test(e)};Gt.prototype.testSchemaAt=function(e,t,i){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,i,this):0};Gt.prototype.match=function(e){var t=0,i=[];this.__index__>=0&&this.__text_cache__===e&&(i.push(Xa(this,t)),t=this.__last_index__);for(var r=t?e.slice(t):e;this.test(r);)i.push(Xa(this,t)),r=r.slice(this.__last_index__),t+=this.__last_index__;return i.length?i:null};Gt.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;var t=this.re.schema_at_start.exec(e);if(!t)return null;var i=this.testSchemaAt(e,t[2],t[0].length);return i?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i,Xa(this,0)):null};Gt.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(i,r,s){return i!==s[r-1]}).reverse(),qs(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,qs(this),this)};Gt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Gt.prototype.onCompile=function(){};var QQ=Gt;const eee={},tee=Object.freeze(Object.defineProperty({__proto__:null,default:eee},Symbol.toStringTag,{value:"Module"})),nee=xE(tee);var iee={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},ree={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},see={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Ur=je,oee=lo,aee=aJ,cee=DJ,lee=uQ,uee=zQ,fee=QQ,Ei=hr,md=nee,hee={default:iee,zero:ree,commonmark:see},dee=/^(vbscript|javascript|file|data):/,pee=/^data:image\/(gif|png|jpeg|webp);/;function mee(n){var e=n.trim().toLowerCase();return dee.test(e)?!!pee.test(e):!0}var gd=["http:","https:","mailto:"];function gee(n){var e=Ei.parse(n,!0);if(e.hostname&&(!e.protocol||gd.indexOf(e.protocol)>=0))try{e.hostname=md.toASCII(e.hostname)}catch{}return Ei.encode(Ei.format(e))}function _ee(n){var e=Ei.parse(n,!0);if(e.hostname&&(!e.protocol||gd.indexOf(e.protocol)>=0))try{e.hostname=md.toUnicode(e.hostname)}catch{}return Ei.decode(Ei.format(e),Ei.decode.defaultChars+"%")}function Yt(n,e){if(!(this instanceof Yt))return new Yt(n,e);e||Ur.isString(n)||(e=n||{},n="default"),this.inline=new uee,this.block=new lee,this.core=new cee,this.renderer=new aee,this.linkify=new fee,this.validateLink=mee,this.normalizeLink=gee,this.normalizeLinkText=_ee,this.utils=Ur,this.helpers=Ur.assign({},oee),this.options={},this.configure(n),e&&this.set(e)}Yt.prototype.set=function(n){return Ur.assign(this.options,n),this};Yt.prototype.configure=function(n){var e=this,t;if(Ur.isString(n)&&(t=n,n=hee[t],!n))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(!n)throw new Error("Wrong `markdown-it` preset, can't be empty");return n.options&&e.set(n.options),n.components&&Object.keys(n.components).forEach(function(i){n.components[i].rules&&e[i].ruler.enableOnly(n.components[i].rules),n.components[i].rules2&&e[i].ruler2.enableOnly(n.components[i].rules2)}),this};Yt.prototype.enable=function(n,e){var t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(n,!0))},this),t=t.concat(this.inline.ruler2.enable(n,!0));var i=n.filter(function(r){return t.indexOf(r)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+i);return this};Yt.prototype.disable=function(n,e){var t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(n,!0))},this),t=t.concat(this.inline.ruler2.disable(n,!0));var i=n.filter(function(r){return t.indexOf(r)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+i);return this};Yt.prototype.use=function(n){var e=[this].concat(Array.prototype.slice.call(arguments,1));return n.apply(n,e),this};Yt.prototype.parse=function(n,e){if(typeof n!="string")throw new Error("Input data should be a String");var t=new this.core.State(n,this,e);return this.core.process(t),t.tokens};Yt.prototype.render=function(n,e){return e=e||{},this.renderer.render(this.parse(n,e),this.options,e)};Yt.prototype.parseInline=function(n,e){var t=new this.core.State(n,this,e);return t.inlineMode=!0,this.core.process(t),t.tokens};Yt.prototype.renderInline=function(n,e){return e=e||{},this.renderer.render(this.parseInline(n,e),this.options,e)};var vee=Yt,xee=vee;const See=vE(xee),Eee=new See,bee={name:"KnowledgeBase",data(){return{posts:[],active:null}},async created(){const n=Object.assign({"../content/Chapter 1 — The Photon (Electromagnetism).md":()=>$n(()=>import("./Chapter 1 — The Photon (Electromagnetism)-C5tj4ozs.js"),[]).then(t=>t.default),"../content/Gallery.md":()=>$n(()=>import("./Gallery-B-Pw5WJ0.js"),[]).then(t=>t.default),"../content/HRC Solution Architecture v0.1 — The Observer–Caretaker Protocol.md":()=>$n(()=>import("./HRC Solution Architecture v0.1 — The Observer–Caretaker Protocol-D61WD0Dr.js"),[]).then(t=>t.default),"../content/README.md":()=>$n(()=>import("./README-PM7JFUPB.js"),[]).then(t=>t.default),"../content/Recursive State Dynamics Integration  Navigation, RF Energy, and Autonomous Discovery.md":()=>$n(()=>import("./Recursive State Dynamics Integration  Navigation_ RF Energy_ and Autonomous Discovery-DQIzphHR.js"),[]).then(t=>t.default),"../content/The Bridge — Business Plan v0.md":()=>$n(()=>import("./The Bridge — Business Plan v0-Dp3RB1Kh.js"),[]).then(t=>t.default),"../content/blackcat.md":()=>$n(()=>import("./blackcat-tyrm_zll.js"),[]).then(t=>t.default),"../content/gravitational-compass — Charter (DRAFT).md":()=>$n(()=>import("./gravitational-compass — Charter (DRAFT)-D_5eaWnb.js"),[]).then(t=>t.default)}),e=await Promise.all(Object.entries(n).map(async([t,i])=>{const r=await i(),s=r.split(`
`)[0].replace(/^#\s+/,"")||t;return{path:t,raw:r,title:s,html:Eee.render(r)}}));this.posts=e},methods:{open(n){this.active=n}}},yee={key:0},Mee=["onClick"],Tee={key:1},Aee=["innerHTML"];function wee(n,e,t,i,r,s){return Pn(),xi("div",null,[e[0]||(e[0]=rt("h2",null,"Knowledge Base",-1)),r.posts.length===0?(Pn(),xi("div",yee,"No markdown content found in /src/content")):jc("",!0),rt("ul",null,[(Pn(!0),xi(hn,null,Up(r.posts,a=>(Pn(),xi("li",{key:a.path},[rt("a",{href:"",onClick:ks(o=>s.open(a),["prevent"])},Ma(a.title),9,Mee)]))),128))]),r.active?(Pn(),xi("article",Tee,[rt("h3",null,Ma(r.active.title),1),rt("div",{innerHTML:r.active.html},null,8,Aee)])):jc("",!0)])}const Cee=_c(bee,[["render",wee]]),Ree={name:"App",components:{Landing:mE,KnowledgeBase:Cee},computed:{currentView(){return(location.hash.replace("#","")||"/").startsWith("/kb")?"KnowledgeBase":"Landing"}},methods:{goHome(){location.hash="#/",this.$forceUpdate()},goKB(){location.hash="#/kb",this.$forceUpdate()}},mounted(){window.addEventListener("hashchange",()=>this.$forceUpdate())}},Lee={class:"app"};function Dee(n,e,t,i,r,s){return Pn(),xi("div",Lee,[rt("header",null,[rt("div",{class:"brand",role:"button",tabindex:"0",onClick:e[0]||(e[0]=(...a)=>s.goHome&&s.goHome(...a)),onKeydown:e[1]||(e[1]=$m((...a)=>s.goHome&&s.goHome(...a),["enter"])),style:{display:"flex","align-items":"center",cursor:"pointer"}},[...e[5]||(e[5]=[rt("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[rt("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3",stroke:"#9bd","stroke-width":"1.5",fill:"none"}),rt("path",{d:"M6 12h12M12 6v12",stroke:"#9bd","stroke-width":"1.2","stroke-linecap":"round"})],-1),rt("span",{style:{"margin-left":"10px","font-weight":"600",color:"#fff"}},"Giomj",-1)])],32),rt("nav",null,[rt("a",{href:"#/",onClick:e[2]||(e[2]=ks((...a)=>s.goHome&&s.goHome(...a),["prevent"])),style:{cursor:"pointer"}},"Landing"),rt("a",{href:"#/kb",onClick:e[3]||(e[3]=ks((...a)=>s.goKB&&s.goKB(...a),["prevent"])),style:{cursor:"pointer"}},"Knowledge Base"),rt("button",{class:"icon-btn",onClick:e[4]||(e[4]=(...a)=>s.goKB&&s.goKB(...a)),style:{"margin-left":"12px",padding:"6px 8px","border-radius":"6px",border:"none",cursor:"pointer",background:"#123",color:"#9bd"}},"KB")])]),rt("main",null,[(Pn(),vh(Dp(s.currentView)))])])}const Pee=_c(Ree,[["render",Dee]]);Zm(Pee).mount("#app");
