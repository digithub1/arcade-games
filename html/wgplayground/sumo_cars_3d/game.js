
/* ===== Original inline script 0 (module) ===== */
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function yM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ah={exports:{}},Qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function MM(){if(ux)return Qo;ux=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Qo.Fragment=e,Qo.jsx=n,Qo.jsxs=n,Qo}var fx;function SM(){return fx||(fx=1,Ah.exports=MM()),Ah.exports}var R=SM(),wh={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function bM(){if(hx)return pt;hx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function E(T){return T===null||typeof T!="object"?null:(T=x&&T[x]||T["@@iterator"],typeof T=="function"?T:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,M={};function _(T,X,ce){this.props=T,this.context=X,this.refs=M,this.updater=ce||A}_.prototype.isReactComponent={},_.prototype.setState=function(T,X){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,X,"setState")},_.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function I(){}I.prototype=_.prototype;function z(T,X,ce){this.props=T,this.context=X,this.refs=M,this.updater=ce||A}var w=z.prototype=new I;w.constructor=z,L(w,_.prototype),w.isPureReactComponent=!0;var P=Array.isArray;function U(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(T,X,ce){var ye=ce.ref;return{$$typeof:r,type:T,key:X,ref:ye!==void 0?ye:null,props:ce}}function B(T,X){return D(T.type,X,T.props)}function H(T){return typeof T=="object"&&T!==null&&T.$$typeof===r}function W(T){var X={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ce){return X[ce]})}var ne=/\/+/g;function le(T,X){return typeof T=="object"&&T!==null&&T.key!=null?W(""+T.key):X.toString(36)}function K(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(U,U):(T.status="pending",T.then(function(X){T.status==="pending"&&(T.status="fulfilled",T.value=X)},function(X){T.status==="pending"&&(T.status="rejected",T.reason=X)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function G(T,X,ce,ye,oe){var q=typeof T;(q==="undefined"||q==="boolean")&&(T=null);var se=!1;if(T===null)se=!0;else switch(q){case"bigint":case"string":case"number":se=!0;break;case"object":switch(T.$$typeof){case r:case e:se=!0;break;case g:return se=T._init,G(se(T._payload),X,ce,ye,oe)}}if(se)return oe=oe(T),se=ye===""?"."+le(T,0):ye,P(oe)?(ce="",se!=null&&(ce=se.replace(ne,"$&/")+"/"),G(oe,X,ce,"",function(Oe){return Oe})):oe!=null&&(H(oe)&&(oe=B(oe,ce+(oe.key==null||T&&T.key===oe.key?"":(""+oe.key).replace(ne,"$&/")+"/")+se)),X.push(oe)),1;se=0;var re=ye===""?".":ye+":";if(P(T))for(var Ae=0;Ae<T.length;Ae++)ye=T[Ae],q=re+le(ye,Ae),se+=G(ye,X,ce,q,oe);else if(Ae=E(T),typeof Ae=="function")for(T=Ae.call(T),Ae=0;!(ye=T.next()).done;)ye=ye.value,q=re+le(ye,Ae++),se+=G(ye,X,ce,q,oe);else if(q==="object"){if(typeof T.then=="function")return G(K(T),X,ce,ye,oe);throw X=String(T),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return se}function k(T,X,ce){if(T==null)return T;var ye=[],oe=0;return G(T,ye,"","",function(q){return X.call(ce,q,oe++)}),ye}function ie(T){if(T._status===-1){var X=T._result;X=X(),X.then(function(ce){(T._status===0||T._status===-1)&&(T._status=1,T._result=ce)},function(ce){(T._status===0||T._status===-1)&&(T._status=2,T._result=ce)}),T._status===-1&&(T._status=0,T._result=X)}if(T._status===1)return T._result.default;throw T._result}var _e=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},V={map:k,forEach:function(T,X,ce){k(T,function(){X.apply(this,arguments)},ce)},count:function(T){var X=0;return k(T,function(){X++}),X},toArray:function(T){return k(T,function(X){return X})||[]},only:function(T){if(!H(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return pt.Activity=v,pt.Children=V,pt.Component=_,pt.Fragment=n,pt.Profiler=l,pt.PureComponent=z,pt.StrictMode=a,pt.Suspense=p,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,pt.__COMPILER_RUNTIME={__proto__:null,c:function(T){return O.H.useMemoCache(T)}},pt.cache=function(T){return function(){return T.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(T,X,ce){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ye=L({},T.props),oe=T.key;if(X!=null)for(q in X.key!==void 0&&(oe=""+X.key),X)!b.call(X,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&X.ref===void 0||(ye[q]=X[q]);var q=arguments.length-2;if(q===1)ye.children=ce;else if(1<q){for(var se=Array(q),re=0;re<q;re++)se[re]=arguments[re+2];ye.children=se}return D(T.type,oe,ye)},pt.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:c,_context:T},T},pt.createElement=function(T,X,ce){var ye,oe={},q=null;if(X!=null)for(ye in X.key!==void 0&&(q=""+X.key),X)b.call(X,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(oe[ye]=X[ye]);var se=arguments.length-2;if(se===1)oe.children=ce;else if(1<se){for(var re=Array(se),Ae=0;Ae<se;Ae++)re[Ae]=arguments[Ae+2];oe.children=re}if(T&&T.defaultProps)for(ye in se=T.defaultProps,se)oe[ye]===void 0&&(oe[ye]=se[ye]);return D(T,q,oe)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(T){return{$$typeof:d,render:T}},pt.isValidElement=H,pt.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:ie}},pt.memo=function(T,X){return{$$typeof:m,type:T,compare:X===void 0?null:X}},pt.startTransition=function(T){var X=O.T,ce={};O.T=ce;try{var ye=T(),oe=O.S;oe!==null&&oe(ce,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(U,_e)}catch(q){_e(q)}finally{X!==null&&ce.types!==null&&(X.types=ce.types),O.T=X}},pt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},pt.use=function(T){return O.H.use(T)},pt.useActionState=function(T,X,ce){return O.H.useActionState(T,X,ce)},pt.useCallback=function(T,X){return O.H.useCallback(T,X)},pt.useContext=function(T){return O.H.useContext(T)},pt.useDebugValue=function(){},pt.useDeferredValue=function(T,X){return O.H.useDeferredValue(T,X)},pt.useEffect=function(T,X){return O.H.useEffect(T,X)},pt.useEffectEvent=function(T){return O.H.useEffectEvent(T)},pt.useId=function(){return O.H.useId()},pt.useImperativeHandle=function(T,X,ce){return O.H.useImperativeHandle(T,X,ce)},pt.useInsertionEffect=function(T,X){return O.H.useInsertionEffect(T,X)},pt.useLayoutEffect=function(T,X){return O.H.useLayoutEffect(T,X)},pt.useMemo=function(T,X){return O.H.useMemo(T,X)},pt.useOptimistic=function(T,X){return O.H.useOptimistic(T,X)},pt.useReducer=function(T,X,ce){return O.H.useReducer(T,X,ce)},pt.useRef=function(T){return O.H.useRef(T)},pt.useState=function(T){return O.H.useState(T)},pt.useSyncExternalStore=function(T,X,ce){return O.H.useSyncExternalStore(T,X,ce)},pt.useTransition=function(){return O.H.useTransition()},pt.version="19.2.8",pt}var dx;function ap(){return dx||(dx=1,wh.exports=bM()),wh.exports}var it=ap();const EM=yM(it);var Rh={exports:{}},Jo={},Ch={exports:{}},Nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function TM(){return px||(px=1,(function(r){function e(G,k){var ie=G.length;G.push(k);e:for(;0<ie;){var _e=ie-1>>>1,V=G[_e];if(0<l(V,k))G[_e]=k,G[ie]=V,ie=_e;else break e}}function n(G){return G.length===0?null:G[0]}function a(G){if(G.length===0)return null;var k=G[0],ie=G.pop();if(ie!==k){G[0]=ie;e:for(var _e=0,V=G.length,T=V>>>1;_e<T;){var X=2*(_e+1)-1,ce=G[X],ye=X+1,oe=G[ye];if(0>l(ce,ie))ye<V&&0>l(oe,ce)?(G[_e]=oe,G[ye]=ie,_e=ye):(G[_e]=ce,G[X]=ie,_e=X);else if(ye<V&&0>l(oe,ie))G[_e]=oe,G[ye]=ie,_e=ye;else break e}}return k}function l(G,k){var ie=G.sortIndex-k.sortIndex;return ie!==0?ie:G.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,v=null,x=3,E=!1,A=!1,L=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function w(G){for(var k=n(m);k!==null;){if(k.callback===null)a(m);else if(k.startTime<=G)a(m),k.sortIndex=k.expirationTime,e(p,k);else break;k=n(m)}}function P(G){if(L=!1,w(G),!A)if(n(p)!==null)A=!0,U||(U=!0,W());else{var k=n(m);k!==null&&K(P,k.startTime-G)}}var U=!1,O=-1,b=5,D=-1;function B(){return M?!0:!(r.unstable_now()-D<b)}function H(){if(M=!1,U){var G=r.unstable_now();D=G;var k=!0;try{e:{A=!1,L&&(L=!1,I(O),O=-1),E=!0;var ie=x;try{t:{for(w(G),v=n(p);v!==null&&!(v.expirationTime>G&&B());){var _e=v.callback;if(typeof _e=="function"){v.callback=null,x=v.priorityLevel;var V=_e(v.expirationTime<=G);if(G=r.unstable_now(),typeof V=="function"){v.callback=V,w(G),k=!0;break t}v===n(p)&&a(p),w(G)}else a(p);v=n(p)}if(v!==null)k=!0;else{var T=n(m);T!==null&&K(P,T.startTime-G),k=!1}}break e}finally{v=null,x=ie,E=!1}k=void 0}}finally{k?W():U=!1}}}var W;if(typeof z=="function")W=function(){z(H)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,le=ne.port2;ne.port1.onmessage=H,W=function(){le.postMessage(null)}}else W=function(){_(H,0)};function K(G,k){O=_(function(){G(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(G){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var ie=x;x=k;try{return G()}finally{x=ie}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(G,k){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ie=x;x=G;try{return k()}finally{x=ie}},r.unstable_scheduleCallback=function(G,k,ie){var _e=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?_e+ie:_e):ie=_e,G){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=ie+V,G={id:g++,callback:k,priorityLevel:G,startTime:ie,expirationTime:V,sortIndex:-1},ie>_e?(G.sortIndex=ie,e(m,G),n(p)===null&&G===n(m)&&(L?(I(O),O=-1):L=!0,K(P,ie-_e))):(G.sortIndex=V,e(p,G),A||E||(A=!0,U||(U=!0,W()))),G},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(G){var k=x;return function(){var ie=x;x=k;try{return G.apply(this,arguments)}finally{x=ie}}}})(Nh)),Nh}var mx;function AM(){return mx||(mx=1,Ch.exports=TM()),Ch.exports}var Dh={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function wM(){if(gx)return Fn;gx=1;var r=ap();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Fn.flushSync=function(p){var m=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=m,a.p=g,a.d.f()}},Fn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Fn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Fn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:E}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Fn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Fn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Fn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Fn.requestFormReset=function(p){a.d.r(p)},Fn.unstable_batchedUpdates=function(p,m){return p(m)},Fn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fn.version="19.2.8",Fn}var xx;function RM(){if(xx)return Dh.exports;xx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Dh.exports=wM(),Dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx;function CM(){if(vx)return Jo;vx=1;var r=AM(),e=ap(),n=RM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,o=i;;){var u=s.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===s)return p(u),t;if(h===o)return p(u),i;h=h.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=h;else{for(var y=!1,N=u.child;N;){if(N===s){y=!0,s=u,o=h;break}if(N===o){y=!0,o=u,s=h;break}N=N.sibling}if(!y){for(N=h.child;N;){if(N===s){y=!0,s=h,o=u;break}if(N===o){y=!0,o=h,s=u;break}N=N.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Symbol.for("react.client.reference");function le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ne?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case U:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case w:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:le(t.type)||"Memo";case b:i=t._payload,t=t._init;try{return le(t(i))}catch{}}return null}var K=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},_e=[],V=-1;function T(t){return{current:t}}function X(t){0>V||(t.current=_e[V],_e[V]=null,V--)}function ce(t,i){V++,_e[V]=t.current,t.current=i}var ye=T(null),oe=T(null),q=T(null),se=T(null);function re(t,i){switch(ce(q,i),ce(oe,t),ce(ye,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Lg(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Lg(i),t=Og(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(ye),ce(ye,t)}function Ae(){X(ye),X(oe),X(q)}function Oe(t){t.memoizedState!==null&&ce(se,t);var i=ye.current,s=Og(i,t.type);i!==s&&(ce(oe,t),ce(ye,s))}function Ce(t){oe.current===t&&(X(ye),X(oe)),se.current===t&&(X(se),Yo._currentValue=ie)}var Qe,je;function Pe(t){if(Qe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Qe=i&&i[1]||"",je=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+t+je}var tt=!1;function at(t,i){if(!t||tt)return"";tt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(xe){var ge=xe}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(xe){ge=xe}t.call(Te.prototype)}}else{try{throw Error()}catch(xe){ge=xe}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(xe){if(xe&&ge&&typeof xe.stack=="string")return[xe.stack,ge.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],N=h[1];if(y&&N){var Y=y.split(`
`),he=N.split(`
`);for(u=o=0;o<Y.length&&!Y[o].includes("DetermineComponentFrameRoot");)o++;for(;u<he.length&&!he[u].includes("DetermineComponentFrameRoot");)u++;if(o===Y.length||u===he.length)for(o=Y.length-1,u=he.length-1;1<=o&&0<=u&&Y[o]!==he[u];)u--;for(;1<=o&&0<=u;o--,u--)if(Y[o]!==he[u]){if(o!==1||u!==1)do if(o--,u--,0>u||Y[o]!==he[u]){var Se=`
`+Y[o].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=o&&0<=u);break}}}finally{tt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Pe(s):""}function yt(t,i){switch(t.tag){case 26:case 27:case 5:return Pe(t.type);case 16:return Pe("Lazy");case 13:return t.child!==i&&i!==null?Pe("Suspense Fallback"):Pe("Suspense");case 19:return Pe("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return Pe("Activity");default:return""}}function Mt(t){try{var i="",s=null;do i+=yt(t,s),s=t,t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var St=Object.prototype.hasOwnProperty,wt=r.unstable_scheduleCallback,Rt=r.unstable_cancelCallback,Gt=r.unstable_shouldYield,$=r.unstable_requestPaint,Ct=r.unstable_now,Nt=r.unstable_getCurrentPriorityLevel,F=r.unstable_ImmediatePriority,S=r.unstable_UserBlockingPriority,j=r.unstable_NormalPriority,Q=r.unstable_LowPriority,ue=r.unstable_IdlePriority,Re=r.log,Ue=r.unstable_setDisableYieldValue,ve=null,Me=null;function De(t){if(typeof Re=="function"&&Ue(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(ve,t)}catch{}}var ke=Math.clz32?Math.clz32:nt,Fe=Math.log,ze=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(Fe(t)/ze|0)|0}var st=256,ft=262144,J=4194304;function Ne(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,i,s){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var N=o&134217727;return N!==0?(o=N&~h,o!==0?u=Ne(o):(y&=N,y!==0?u=Ne(y):s||(s=N&~t,s!==0&&(u=Ne(s))))):(N=o&~h,N!==0?u=Ne(N):y!==0?u=Ne(y):s||(s=o&~t,s!==0&&(u=Ne(s)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:u}function Ie(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ve(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function we(){var t=J;return J<<=1,(J&62914560)===0&&(J=4194304),t}function Je(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function qe(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sn(t,i,s,o,u,h){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var N=t.entanglements,Y=t.expirationTimes,he=t.hiddenUpdates;for(s=y&~s;0<s;){var Se=31-ke(s),Te=1<<Se;N[Se]=0,Y[Se]=-1;var ge=he[Se];if(ge!==null)for(he[Se]=null,Se=0;Se<ge.length;Se++){var xe=ge[Se];xe!==null&&(xe.lane&=-536870913)}s&=~Te}o!==0&&kt(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~i))}function kt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-ke(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function ni(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var o=31-ke(s),u=1<<o;u&i|t[o]&i&&(t[o]|=i),s&=~u}}function ii(t,i){var s=i&-i;return s=(s&42)!==0?1:ro(s),(s&(t.suspendedLanes|i))!==0?0:s}function ro(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function oo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function lo(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:ix(t.type))}function Js(t,i){var s=k.p;try{return k.p=t,i()}finally{k.p=s}}var ki=Math.random().toString(36).slice(2),gn="__reactFiber$"+ki,Dn="__reactProps$"+ki,jn="__reactContainer$"+ki,vs="__reactEvents$"+ki,_l="__reactListeners$"+ki,yl="__reactHandles$"+ki,_s="__reactResources$"+ki,Pa="__reactMarker$"+ki;function Ia(t){delete t[gn],delete t[Dn],delete t[vs],delete t[_l],delete t[yl]}function aa(t){var i=t[gn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[jn]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Hg(t);t!==null;){if(s=t[gn])return s;t=Hg(t)}return i}t=s,s=t.parentNode}return null}function sa(t){if(t=t[gn]||t[jn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function ys(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function za(t){var i=t[_s];return i||(i=t[_s]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function xn(t){t[Pa]=!0}var Ml=new Set,C={};function ee(t,i){me(t,i),me(t+"Capture",i)}function me(t,i){for(C[t]=i,t=0;t<i.length;t++)Ml.add(i[t])}var de=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pe={},Ge={};function We(t){return St.call(Ge,t)?!0:St.call(pe,t)?!1:de.test(t)?Ge[t]=!0:(pe[t]=!0,!1)}function Be(t,i,s){if(We(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ze(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ye(t,i,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+o)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t,i,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(y){s=""+y,h.call(this,y)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function It(t){if(!t._valueTracker){var i=gt(t)?"checked":"value";t._valueTracker=et(t,i,""+t[i])}}function rn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return t&&(o=gt(t)?t.checked?"true":"false":t.value),t=o,t!==s?(i.setValue(t),!0):!1}function en(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xt=/[\n"\\]/g;function Wt(t){return t.replace(Xt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xe(t,i,s,o,u,h,y,N){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+rt(i)):t.value!==""+rt(i)&&(t.value=""+rt(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?bt(t,y,rt(i)):s!=null?bt(t,y,rt(s)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+rt(N):t.removeAttribute("name")}function Bn(t,i,s,o,u,h,y,N){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){It(t);return}s=s!=null?""+rt(s):"",i=i!=null?""+rt(i):s,N||i===t.value||(t.value=i),t.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=N?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),It(t)}function bt(t,i,s){i==="number"&&en(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function bn(t,i,s,o){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&o&&(t[s].defaultSelected=!0)}else{for(s=""+rt(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function ai(t,i,s){if(i!=null&&(i=""+rt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+rt(s):""}function Di(t,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(K(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=rt(i),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),It(t)}function si(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var qt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(t,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,s):typeof s!="number"||s===0||qt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Ui(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&on(t,u,o)}else for(var h in i)i.hasOwnProperty(h)&&on(t,h,i[h])}function Ht(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ba=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ms(t){return Ba.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ra(){}var Su=null;function bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $s=null,er=null;function Up(t){var i=sa(t);if(i&&(t=i.stateNode)){var s=t[Dn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Xe(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Wt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==t&&o.form===t.form){var u=o[Dn]||null;if(!u)throw Error(a(90));Xe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===t.form&&rn(o)}break e;case"textarea":ai(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&bn(t,!!s.multiple,i,!1)}}}var Eu=!1;function Lp(t,i,s){if(Eu)return t(i,s);Eu=!0;try{var o=t(i);return o}finally{if(Eu=!1,($s!==null||er!==null)&&(lc(),$s&&(i=$s,t=er,er=$s=null,Up(i),t)))for(i=0;i<t.length;i++)Up(t[i])}}function co(t,i){var s=t.stateNode;if(s===null)return null;var o=s[Dn]||null;if(o===null)return null;s=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(oa)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Tu=!1}var Fa=null,Au=null,Sl=null;function Op(){if(Sl)return Sl;var t,i=Au,s=i.length,o,u="value"in Fa?Fa.value:Fa.textContent,h=u.length;for(t=0;t<s&&i[t]===u[t];t++);var y=s-t;for(o=1;o<=y&&i[s-o]===u[h-o];o++);return Sl=u.slice(t,1<o?1-o:void 0)}function bl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Pp(){return!1}function Zn(t){function i(s,o,u,h,y){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?El:Pp,this.isPropagationStopped=Pp,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),i}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Zn(Ss),fo=v({},Ss,{view:0,detail:0}),v_=Zn(fo),wu,Ru,ho,Al=v({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(wu=t.screenX-ho.screenX,Ru=t.screenY-ho.screenY):Ru=wu=0,ho=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),Ip=Zn(Al),__=v({},Al,{dataTransfer:0}),y_=Zn(__),M_=v({},fo,{relatedTarget:0}),Cu=Zn(M_),S_=v({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),b_=Zn(S_),E_=v({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T_=Zn(E_),A_=v({},Ss,{data:0}),zp=Zn(A_),w_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=C_[t])?!!i[t]:!1}function Nu(){return N_}var D_=v({},fo,{key:function(t){if(t.key){var i=w_[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U_=Zn(D_),L_=v({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Zn(L_),O_=v({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),P_=Zn(O_),I_=v({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),z_=Zn(I_),B_=v({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),F_=Zn(B_),G_=v({},Ss,{newState:0,oldState:0}),H_=Zn(G_),V_=[9,13,27,32],Du=oa&&"CompositionEvent"in window,po=null;oa&&"documentMode"in document&&(po=document.documentMode);var k_=oa&&"TextEvent"in window&&!po,Fp=oa&&(!Du||po&&8<po&&11>=po),Gp=" ",Hp=!1;function Vp(t,i){switch(t){case"keyup":return V_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tr=!1;function X_(t,i){switch(t){case"compositionend":return kp(i);case"keypress":return i.which!==32?null:(Hp=!0,Gp);case"textInput":return t=i.data,t===Gp&&Hp?null:t;default:return null}}function W_(t,i){if(tr)return t==="compositionend"||!Du&&Vp(t,i)?(t=Op(),Sl=Au=Fa=null,tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fp&&i.locale!=="ko"?null:i.data;default:return null}}var q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!q_[t.type]:i==="textarea"}function Wp(t,i,s,o){$s?er?er.push(o):er=[o]:$s=o,i=mc(i,"onChange"),0<i.length&&(s=new Tl("onChange","change",null,s,o),t.push({event:s,listeners:i}))}var mo=null,go=null;function Y_(t){wg(t,0)}function wl(t){var i=ys(t);if(rn(i))return t}function qp(t,i){if(t==="change")return i}var Yp=!1;if(oa){var Uu;if(oa){var Lu="oninput"in document;if(!Lu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Lu=typeof jp.oninput=="function"}Uu=Lu}else Uu=!1;Yp=Uu&&(!document.documentMode||9<document.documentMode)}function Zp(){mo&&(mo.detachEvent("onpropertychange",Kp),go=mo=null)}function Kp(t){if(t.propertyName==="value"&&wl(go)){var i=[];Wp(i,go,t,bu(t)),Lp(Y_,i)}}function j_(t,i,s){t==="focusin"?(Zp(),mo=i,go=s,mo.attachEvent("onpropertychange",Kp)):t==="focusout"&&Zp()}function Z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(go)}function K_(t,i){if(t==="click")return wl(i)}function Q_(t,i){if(t==="input"||t==="change")return wl(i)}function J_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ri=typeof Object.is=="function"?Object.is:J_;function xo(t,i){if(ri(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!St.call(i,u)||!ri(t[u],i[u]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,i){var s=Qp(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=i&&o>=i)return{node:s,offset:i-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Qp(s)}}function $p(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?$p(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function em(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=en(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=en(t.document)}return i}function Ou(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var $_=oa&&"documentMode"in document&&11>=document.documentMode,nr=null,Pu=null,vo=null,Iu=!1;function tm(t,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Iu||nr==null||nr!==en(o)||(o=nr,"selectionStart"in o&&Ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vo&&xo(vo,o)||(vo=o,o=mc(Pu,"onSelect"),0<o.length&&(i=new Tl("onSelect","select",null,i,s),t.push({event:i,listeners:o}),i.target=nr)))}function bs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ir={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},zu={},nm={};oa&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Es(t){if(zu[t])return zu[t];if(!ir[t])return t;var i=ir[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in nm)return zu[t]=i[s];return t}var im=Es("animationend"),am=Es("animationiteration"),sm=Es("animationstart"),ey=Es("transitionrun"),ty=Es("transitionstart"),ny=Es("transitioncancel"),rm=Es("transitionend"),om=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function Li(t,i){om.set(t,i),ee(i,[t])}var Rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xi=[],ar=0,Fu=0;function Cl(){for(var t=ar,i=Fu=ar=0;i<t;){var s=xi[i];xi[i++]=null;var o=xi[i];xi[i++]=null;var u=xi[i];xi[i++]=null;var h=xi[i];if(xi[i++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&lm(s,u,h)}}function Nl(t,i,s,o){xi[ar++]=t,xi[ar++]=i,xi[ar++]=s,xi[ar++]=o,Fu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Gu(t,i,s,o){return Nl(t,i,s,o),Dl(t)}function Ts(t,i){return Nl(t,null,null,i),Dl(t)}function lm(t,i,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var u=!1,h=t.return;h!==null;)h.childLanes|=s,o=h.alternate,o!==null&&(o.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&i!==null&&(u=31-ke(s),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[i]:o.push(i),i.lane=s|536870912),h):null}function Dl(t){if(50<Go)throw Go=0,Kf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var sr={};function iy(t,i,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,i,s,o){return new iy(t,i,s,o)}function Hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,i){var s=t.alternate;return s===null?(s=oi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function cm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ul(t,i,s,o,u,h){var y=0;if(o=t,typeof t=="function")Hu(t)&&(y=1);else if(typeof t=="string")y=lM(t,s,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=oi(31,s,i,u),t.elementType=D,t.lanes=h,t;case L:return As(s.children,u,h,i);case M:y=8,u|=24;break;case _:return t=oi(12,s,i,u|2),t.elementType=_,t.lanes=h,t;case P:return t=oi(13,s,i,u),t.elementType=P,t.lanes=h,t;case U:return t=oi(19,s,i,u),t.elementType=U,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:y=10;break e;case I:y=9;break e;case w:y=11;break e;case O:y=14;break e;case b:y=16,o=null;break e}y=29,s=Error(a(130,t===null?"null":typeof t,"")),o=null}return i=oi(y,s,i,u),i.elementType=t,i.type=o,i.lanes=h,i}function As(t,i,s,o){return t=oi(7,t,o,i),t.lanes=s,t}function Vu(t,i,s){return t=oi(6,t,null,i),t.lanes=s,t}function um(t){var i=oi(18,null,null,0);return i.stateNode=t,i}function ku(t,i,s){return i=oi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var fm=new WeakMap;function vi(t,i){if(typeof t=="object"&&t!==null){var s=fm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Mt(i)},fm.set(t,i),i)}return{value:t,source:i,stack:Mt(i)}}var rr=[],or=0,Ll=null,_o=0,_i=[],yi=0,Ga=null,Wi=1,qi="";function ca(t,i){rr[or++]=_o,rr[or++]=Ll,Ll=t,_o=i}function hm(t,i,s){_i[yi++]=Wi,_i[yi++]=qi,_i[yi++]=Ga,Ga=t;var o=Wi;t=qi;var u=32-ke(o)-1;o&=~(1<<u),s+=1;var h=32-ke(i)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Wi=1<<32-ke(i)+u|s<<u|o,qi=h+t}else Wi=1<<h|s<<u|o,qi=t}function Xu(t){t.return!==null&&(ca(t,1),hm(t,1,0))}function Wu(t){for(;t===Ll;)Ll=rr[--or],rr[or]=null,_o=rr[--or],rr[or]=null;for(;t===Ga;)Ga=_i[--yi],_i[yi]=null,qi=_i[--yi],_i[yi]=null,Wi=_i[--yi],_i[yi]=null}function dm(t,i){_i[yi++]=Wi,_i[yi++]=qi,_i[yi++]=Ga,Wi=i.id,qi=i.overflow,Ga=t}var Un=null,nn=null,Lt=!1,Ha=null,Mi=!1,qu=Error(a(519));function Va(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(vi(i,t)),qu}function pm(t){var i=t.stateNode,s=t.type,o=t.memoizedProps;switch(i[gn]=t,i[Dn]=o,s){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(s=0;s<Vo.length;s++)Tt(Vo[s],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":Tt("invalid",i),Bn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Tt("invalid",i);break;case"textarea":Tt("invalid",i),Di(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||Dg(i.textContent,s)?(o.popover!=null&&(Tt("beforetoggle",i),Tt("toggle",i)),o.onScroll!=null&&Tt("scroll",i),o.onScrollEnd!=null&&Tt("scrollend",i),o.onClick!=null&&(i.onclick=ra),i=!0):i=!1,i||Va(t,!0)}function mm(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Un=Un.return}}function lr(t){if(t!==Un)return!1;if(!Lt)return mm(t),Lt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||fh(t.type,t.memoizedProps)),s=!s),s&&nn&&Va(t),mm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));nn=Gg(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));nn=Gg(t)}else i===27?(i=nn,ns(t.type)?(t=gh,gh=null,nn=t):nn=i):nn=Un?bi(t.stateNode.nextSibling):null;return!0}function ws(){nn=Un=null,Lt=!1}function Yu(){var t=Ha;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),Ha=null),t}function yo(t){Ha===null?Ha=[t]:Ha.push(t)}var ju=T(null),Rs=null,ua=null;function ka(t,i,s){ce(ju,i._currentValue),i._currentValue=s}function fa(t){t._currentValue=ju.current,X(ju)}function Zu(t,i,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===s)break;t=t.return}}function Ku(t,i,s,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;e:for(;h!==null;){var N=h;h=u;for(var Y=0;Y<i.length;Y++)if(N.context===i[Y]){h.lanes|=s,N=h.alternate,N!==null&&(N.lanes|=s),Zu(h.return,s,t),o||(y=null);break e}h=N.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(a(341));y.lanes|=s,h=y.alternate,h!==null&&(h.lanes|=s),Zu(y,s,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function cr(t,i,s,o){t=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var N=u.type;ri(u.pendingProps.value,y.value)||(t!==null?t.push(N):t=[N])}}else if(u===se.current){if(y=u.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Yo):t=[Yo])}u=u.return}t!==null&&Ku(i,t,s,o),i.flags|=262144}function Ol(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cs(t){Rs=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return gm(Rs,t)}function Pl(t,i){return Rs===null&&Cs(t),gm(t,i)}function gm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ua===null){if(t===null)throw Error(a(308));ua=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ua=ua.next=i;return s}var ay=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},sy=r.unstable_scheduleCallback,ry=r.unstable_NormalPriority,vn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new ay,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&sy(ry,function(){t.controller.abort()})}var So=null,Ju=0,ur=0,fr=null;function oy(t,i){if(So===null){var s=So=[];Ju=0,ur=nh(),fr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Ju++,i.then(xm,xm),i}function xm(){if(--Ju===0&&So!==null){fr!==null&&(fr.status="fulfilled");var t=So;So=null,ur=0,fr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function ly(t,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var vm=G.S;G.S=function(t,i){tg=Ct(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&oy(t,i),vm!==null&&vm(t,i)};var Ns=T(null);function $u(){var t=Ns.current;return t!==null?t:tn.pooledCache}function Il(t,i){i===null?ce(Ns,Ns.current):ce(Ns,i.pool)}function _m(){var t=$u();return t===null?null:{parent:vn._currentValue,pool:t}}var hr=Error(a(460)),ef=Error(a(474)),zl=Error(a(542)),Bl={then:function(){}};function ym(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ra,ra),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,bm(t),t;default:if(typeof i.status=="string")i.then(ra,ra);else{if(t=tn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,bm(t),t}throw Us=i,hr}}function Ds(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Us=s,hr):s}}var Us=null;function Sm(){if(Us===null)throw Error(a(459));var t=Us;return Us=null,t}function bm(t){if(t===hr||t===zl)throw Error(a(483))}var dr=null,bo=0;function Fl(t){var i=bo;return bo+=1,dr===null&&(dr=[]),Mm(dr,t,i)}function Eo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Gl(t,i){throw i.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Em(t){function i(ae,Z){if(t){var fe=ae.deletions;fe===null?(ae.deletions=[Z],ae.flags|=16):fe.push(Z)}}function s(ae,Z){if(!t)return null;for(;Z!==null;)i(ae,Z),Z=Z.sibling;return null}function o(ae){for(var Z=new Map;ae!==null;)ae.key!==null?Z.set(ae.key,ae):Z.set(ae.index,ae),ae=ae.sibling;return Z}function u(ae,Z){return ae=la(ae,Z),ae.index=0,ae.sibling=null,ae}function h(ae,Z,fe){return ae.index=fe,t?(fe=ae.alternate,fe!==null?(fe=fe.index,fe<Z?(ae.flags|=67108866,Z):fe):(ae.flags|=67108866,Z)):(ae.flags|=1048576,Z)}function y(ae){return t&&ae.alternate===null&&(ae.flags|=67108866),ae}function N(ae,Z,fe,Ee){return Z===null||Z.tag!==6?(Z=Vu(fe,ae.mode,Ee),Z.return=ae,Z):(Z=u(Z,fe),Z.return=ae,Z)}function Y(ae,Z,fe,Ee){var ot=fe.type;return ot===L?Se(ae,Z,fe.props.children,Ee,fe.key):Z!==null&&(Z.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===b&&Ds(ot)===Z.type)?(Z=u(Z,fe.props),Eo(Z,fe),Z.return=ae,Z):(Z=Ul(fe.type,fe.key,fe.props,null,ae.mode,Ee),Eo(Z,fe),Z.return=ae,Z)}function he(ae,Z,fe,Ee){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==fe.containerInfo||Z.stateNode.implementation!==fe.implementation?(Z=ku(fe,ae.mode,Ee),Z.return=ae,Z):(Z=u(Z,fe.children||[]),Z.return=ae,Z)}function Se(ae,Z,fe,Ee,ot){return Z===null||Z.tag!==7?(Z=As(fe,ae.mode,Ee,ot),Z.return=ae,Z):(Z=u(Z,fe),Z.return=ae,Z)}function Te(ae,Z,fe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Vu(""+Z,ae.mode,fe),Z.return=ae,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case E:return fe=Ul(Z.type,Z.key,Z.props,null,ae.mode,fe),Eo(fe,Z),fe.return=ae,fe;case A:return Z=ku(Z,ae.mode,fe),Z.return=ae,Z;case b:return Z=Ds(Z),Te(ae,Z,fe)}if(K(Z)||W(Z))return Z=As(Z,ae.mode,fe,null),Z.return=ae,Z;if(typeof Z.then=="function")return Te(ae,Fl(Z),fe);if(Z.$$typeof===z)return Te(ae,Pl(ae,Z),fe);Gl(ae,Z)}return null}function ge(ae,Z,fe,Ee){var ot=Z!==null?Z.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return ot!==null?null:N(ae,Z,""+fe,Ee);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case E:return fe.key===ot?Y(ae,Z,fe,Ee):null;case A:return fe.key===ot?he(ae,Z,fe,Ee):null;case b:return fe=Ds(fe),ge(ae,Z,fe,Ee)}if(K(fe)||W(fe))return ot!==null?null:Se(ae,Z,fe,Ee,null);if(typeof fe.then=="function")return ge(ae,Z,Fl(fe),Ee);if(fe.$$typeof===z)return ge(ae,Z,Pl(ae,fe),Ee);Gl(ae,fe)}return null}function xe(ae,Z,fe,Ee,ot){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return ae=ae.get(fe)||null,N(Z,ae,""+Ee,ot);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case E:return ae=ae.get(Ee.key===null?fe:Ee.key)||null,Y(Z,ae,Ee,ot);case A:return ae=ae.get(Ee.key===null?fe:Ee.key)||null,he(Z,ae,Ee,ot);case b:return Ee=Ds(Ee),xe(ae,Z,fe,Ee,ot)}if(K(Ee)||W(Ee))return ae=ae.get(fe)||null,Se(Z,ae,Ee,ot,null);if(typeof Ee.then=="function")return xe(ae,Z,fe,Fl(Ee),ot);if(Ee.$$typeof===z)return xe(ae,Z,fe,Pl(Z,Ee),ot);Gl(Z,Ee)}return null}function Ke(ae,Z,fe,Ee){for(var ot=null,zt=null,$e=Z,vt=Z=0,Ut=null;$e!==null&&vt<fe.length;vt++){$e.index>vt?(Ut=$e,$e=null):Ut=$e.sibling;var Bt=ge(ae,$e,fe[vt],Ee);if(Bt===null){$e===null&&($e=Ut);break}t&&$e&&Bt.alternate===null&&i(ae,$e),Z=h(Bt,Z,vt),zt===null?ot=Bt:zt.sibling=Bt,zt=Bt,$e=Ut}if(vt===fe.length)return s(ae,$e),Lt&&ca(ae,vt),ot;if($e===null){for(;vt<fe.length;vt++)$e=Te(ae,fe[vt],Ee),$e!==null&&(Z=h($e,Z,vt),zt===null?ot=$e:zt.sibling=$e,zt=$e);return Lt&&ca(ae,vt),ot}for($e=o($e);vt<fe.length;vt++)Ut=xe($e,ae,vt,fe[vt],Ee),Ut!==null&&(t&&Ut.alternate!==null&&$e.delete(Ut.key===null?vt:Ut.key),Z=h(Ut,Z,vt),zt===null?ot=Ut:zt.sibling=Ut,zt=Ut);return t&&$e.forEach(function(os){return i(ae,os)}),Lt&&ca(ae,vt),ot}function lt(ae,Z,fe,Ee){if(fe==null)throw Error(a(151));for(var ot=null,zt=null,$e=Z,vt=Z=0,Ut=null,Bt=fe.next();$e!==null&&!Bt.done;vt++,Bt=fe.next()){$e.index>vt?(Ut=$e,$e=null):Ut=$e.sibling;var os=ge(ae,$e,Bt.value,Ee);if(os===null){$e===null&&($e=Ut);break}t&&$e&&os.alternate===null&&i(ae,$e),Z=h(os,Z,vt),zt===null?ot=os:zt.sibling=os,zt=os,$e=Ut}if(Bt.done)return s(ae,$e),Lt&&ca(ae,vt),ot;if($e===null){for(;!Bt.done;vt++,Bt=fe.next())Bt=Te(ae,Bt.value,Ee),Bt!==null&&(Z=h(Bt,Z,vt),zt===null?ot=Bt:zt.sibling=Bt,zt=Bt);return Lt&&ca(ae,vt),ot}for($e=o($e);!Bt.done;vt++,Bt=fe.next())Bt=xe($e,ae,vt,Bt.value,Ee),Bt!==null&&(t&&Bt.alternate!==null&&$e.delete(Bt.key===null?vt:Bt.key),Z=h(Bt,Z,vt),zt===null?ot=Bt:zt.sibling=Bt,zt=Bt);return t&&$e.forEach(function(_M){return i(ae,_M)}),Lt&&ca(ae,vt),ot}function $t(ae,Z,fe,Ee){if(typeof fe=="object"&&fe!==null&&fe.type===L&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case E:e:{for(var ot=fe.key;Z!==null;){if(Z.key===ot){if(ot=fe.type,ot===L){if(Z.tag===7){s(ae,Z.sibling),Ee=u(Z,fe.props.children),Ee.return=ae,ae=Ee;break e}}else if(Z.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===b&&Ds(ot)===Z.type){s(ae,Z.sibling),Ee=u(Z,fe.props),Eo(Ee,fe),Ee.return=ae,ae=Ee;break e}s(ae,Z);break}else i(ae,Z);Z=Z.sibling}fe.type===L?(Ee=As(fe.props.children,ae.mode,Ee,fe.key),Ee.return=ae,ae=Ee):(Ee=Ul(fe.type,fe.key,fe.props,null,ae.mode,Ee),Eo(Ee,fe),Ee.return=ae,ae=Ee)}return y(ae);case A:e:{for(ot=fe.key;Z!==null;){if(Z.key===ot)if(Z.tag===4&&Z.stateNode.containerInfo===fe.containerInfo&&Z.stateNode.implementation===fe.implementation){s(ae,Z.sibling),Ee=u(Z,fe.children||[]),Ee.return=ae,ae=Ee;break e}else{s(ae,Z);break}else i(ae,Z);Z=Z.sibling}Ee=ku(fe,ae.mode,Ee),Ee.return=ae,ae=Ee}return y(ae);case b:return fe=Ds(fe),$t(ae,Z,fe,Ee)}if(K(fe))return Ke(ae,Z,fe,Ee);if(W(fe)){if(ot=W(fe),typeof ot!="function")throw Error(a(150));return fe=ot.call(fe),lt(ae,Z,fe,Ee)}if(typeof fe.then=="function")return $t(ae,Z,Fl(fe),Ee);if(fe.$$typeof===z)return $t(ae,Z,Pl(ae,fe),Ee);Gl(ae,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint"?(fe=""+fe,Z!==null&&Z.tag===6?(s(ae,Z.sibling),Ee=u(Z,fe),Ee.return=ae,ae=Ee):(s(ae,Z),Ee=Vu(fe,ae.mode,Ee),Ee.return=ae,ae=Ee),y(ae)):s(ae,Z)}return function(ae,Z,fe,Ee){try{bo=0;var ot=$t(ae,Z,fe,Ee);return dr=null,ot}catch($e){if($e===hr||$e===zl)throw $e;var zt=oi(29,$e,null,ae.mode);return zt.lanes=Ee,zt.return=ae,zt}finally{}}}var Ls=Em(!0),Tm=Em(!1),Xa=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function qa(t,i,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Dl(t),lm(t,null,s),i}return Nl(t,o,i,s),Dl(t)}function To(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ni(t,s)}}function af(t,i){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,s=s.next}while(s!==null);h===null?u=h=i:h=h.next=i}else u=h=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var sf=!1;function Ao(){if(sf){var t=fr;if(t!==null)throw t}}function wo(t,i,s,o){sf=!1;var u=t.updateQueue;Xa=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var Y=N,he=Y.next;Y.next=null,y===null?h=he:y.next=he,y=Y;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,N=Se.lastBaseUpdate,N!==y&&(N===null?Se.firstBaseUpdate=he:N.next=he,Se.lastBaseUpdate=Y))}if(h!==null){var Te=u.baseState;y=0,Se=he=Y=null,N=h;do{var ge=N.lane&-536870913,xe=ge!==N.lane;if(xe?(Dt&ge)===ge:(o&ge)===ge){ge!==0&&ge===ur&&(sf=!0),Se!==null&&(Se=Se.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Ke=t,lt=N;ge=i;var $t=s;switch(lt.tag){case 1:if(Ke=lt.payload,typeof Ke=="function"){Te=Ke.call($t,Te,ge);break e}Te=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=lt.payload,ge=typeof Ke=="function"?Ke.call($t,Te,ge):Ke,ge==null)break e;Te=v({},Te,ge);break e;case 2:Xa=!0}}ge=N.callback,ge!==null&&(t.flags|=64,xe&&(t.flags|=8192),xe=u.callbacks,xe===null?u.callbacks=[ge]:xe.push(ge))}else xe={lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Se===null?(he=Se=xe,Y=Te):Se=Se.next=xe,y|=ge;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;xe=N,N=xe.next,xe.next=null,u.lastBaseUpdate=xe,u.shared.pending=null}}while(!0);Se===null&&(Y=Te),u.baseState=Y,u.firstBaseUpdate=he,u.lastBaseUpdate=Se,h===null&&(u.shared.lanes=0),Qa|=y,t.lanes=y,t.memoizedState=Te}}function Am(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function wm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Am(s[t],i)}var pr=T(null),Hl=T(0);function Rm(t,i){t=ya,ce(Hl,t),ce(pr,i),ya=t|i.baseLanes}function rf(){ce(Hl,ya),ce(pr,pr.current)}function of(){ya=Hl.current,X(pr),X(Hl)}var li=T(null),Si=null;function Ya(t){var i=t.alternate;ce(pn,pn.current&1),ce(li,t),Si===null&&(i===null||pr.current!==null||i.memoizedState!==null)&&(Si=t)}function lf(t){ce(pn,pn.current),ce(li,t),Si===null&&(Si=t)}function Cm(t){t.tag===22?(ce(pn,pn.current),ce(li,t),Si===null&&(Si=t)):ja()}function ja(){ce(pn,pn.current),ce(li,li.current)}function ci(t){X(li),Si===t&&(Si=null),X(pn)}var pn=T(0);function Vl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||ph(s)||mh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ha=0,xt=null,Qt=null,_n=null,kl=!1,mr=!1,Os=!1,Xl=0,Ro=0,gr=null,cy=0;function hn(){throw Error(a(321))}function cf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ri(t[s],i[s]))return!1;return!0}function uf(t,i,s,o,u,h){return ha=h,xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=t===null||t.memoizedState===null?h0:Tf,Os=!1,h=s(o,u),Os=!1,mr&&(h=Dm(i,s,o,u)),Nm(t),h}function Nm(t){G.H=Do;var i=Qt!==null&&Qt.next!==null;if(ha=0,_n=Qt=xt=null,kl=!1,Ro=0,gr=null,i)throw Error(a(300));t===null||yn||(t=t.dependencies,t!==null&&Ol(t)&&(yn=!0))}function Dm(t,i,s,o){xt=t;var u=0;do{if(mr&&(gr=null),Ro=0,mr=!1,25<=u)throw Error(a(301));if(u+=1,_n=Qt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}G.H=d0,h=i(s,o)}while(mr);return h}function uy(){var t=G.H,i=t.useState()[0];return i=typeof i.then=="function"?Co(i):i,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(xt.flags|=1024),i}function ff(){var t=Xl!==0;return Xl=0,t}function hf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function df(t){if(kl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}kl=!1}ha=0,_n=Qt=xt=null,mr=!1,Ro=Xl=0,gr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?xt.memoizedState=_n=t:_n=_n.next=t,_n}function mn(){if(Qt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=_n===null?xt.memoizedState:_n.next;if(i!==null)_n=i,Qt=t;else{if(t===null)throw xt.alternate===null?Error(a(467)):Error(a(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},_n===null?xt.memoizedState=_n=t:_n=_n.next=t}return _n}function Wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var i=Ro;return Ro+=1,gr===null&&(gr=[]),t=Mm(gr,t,i),i=xt,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?h0:Tf),t}function ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===z)return Ln(t)}throw Error(a(438,String(t)))}function pf(t){var i=null,s=xt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=xt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Wl(),xt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),o=0;o<t;o++)s[o]=B;return i.index++,s}function da(t,i){return typeof i=="function"?i(t):i}function Yl(t){var i=mn();return mf(i,Qt,t)}function mf(t,i,s){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}i.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{i=u.next;var N=y=null,Y=null,he=i,Se=!1;do{var Te=he.lane&-536870913;if(Te!==he.lane?(Dt&Te)===Te:(ha&Te)===Te){var ge=he.revertLane;if(ge===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),Te===ur&&(Se=!0);else if((ha&ge)===ge){he=he.next,ge===ur&&(Se=!0);continue}else Te={lane:0,revertLane:he.revertLane,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},Y===null?(N=Y=Te,y=h):Y=Y.next=Te,xt.lanes|=ge,Qa|=ge;Te=he.action,Os&&s(h,Te),h=he.hasEagerState?he.eagerState:s(h,Te)}else ge={lane:Te,revertLane:he.revertLane,gesture:he.gesture,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},Y===null?(N=Y=ge,y=h):Y=Y.next=ge,xt.lanes|=Te,Qa|=Te;he=he.next}while(he!==null&&he!==i);if(Y===null?y=h:Y.next=N,!ri(h,t.memoizedState)&&(yn=!0,Se&&(s=fr,s!==null)))throw s;t.memoizedState=h,t.baseState=y,t.baseQueue=Y,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function gf(t){var i=mn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var o=s.dispatch,u=s.pending,h=i.memoizedState;if(u!==null){s.pending=null;var y=u=u.next;do h=t(h,y.action),y=y.next;while(y!==u);ri(h,i.memoizedState)||(yn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,o]}function Um(t,i,s){var o=xt,u=mn(),h=Lt;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!ri((Qt||u).memoizedState,s);if(y&&(u.memoizedState=s,yn=!0),u=u.queue,_f(Pm.bind(null,o,u,t),[t]),u.getSnapshot!==i||y||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,xr(9,{destroy:void 0},Om.bind(null,o,u,s,i),null),tn===null)throw Error(a(349));h||(ha&127)!==0||Lm(o,i,s)}return s}function Lm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=xt.updateQueue,i===null?(i=Wl(),xt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Om(t,i,s,o){i.value=s,i.getSnapshot=o,Im(i)&&zm(t)}function Pm(t,i,s){return s(function(){Im(i)&&zm(t)})}function Im(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ri(t,s)}catch{return!0}}function zm(t){var i=Ts(t,2);i!==null&&ei(i,t,2)}function xf(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Os){De(!0);try{s()}finally{De(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},i}function Bm(t,i,s,o){return t.baseState=s,mf(t,Qt,typeof o=="function"?o:da)}function fy(t,i,s,o,u){if(Kl(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};G.T!==null?s(!0):h.isTransition=!1,o(h),s=i.pending,s===null?(h.next=i.pending=h,Fm(i,h)):(h.next=s.next,i.pending=s.next=h)}}function Fm(t,i){var s=i.action,o=i.payload,u=t.state;if(i.isTransition){var h=G.T,y={};G.T=y;try{var N=s(u,o),Y=G.S;Y!==null&&Y(y,N),Gm(t,i,N)}catch(he){vf(t,i,he)}finally{h!==null&&y.types!==null&&(h.types=y.types),G.T=h}}else try{h=s(u,o),Gm(t,i,h)}catch(he){vf(t,i,he)}}function Gm(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Hm(t,i,o)},function(o){return vf(t,i,o)}):Hm(t,i,s)}function Hm(t,i,s){i.status="fulfilled",i.value=s,Vm(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Fm(t,s)))}function vf(t,i,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Vm(i),i=i.next;while(i!==o)}t.action=null}function Vm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function km(t,i){return i}function Xm(t,i){if(Lt){var s=tn.formState;if(s!==null){e:{var o=xt;if(Lt){if(nn){t:{for(var u=nn,h=Mi;u.nodeType!==8;){if(!h){u=null;break t}if(u=bi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){nn=bi(u.nextSibling),o=u.data==="F!";break e}}Va(o)}o=!1}o&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:km,lastRenderedState:i},s.queue=o,s=c0.bind(null,xt,o),o.dispatch=s,o=xf(!1),h=Ef.bind(null,xt,!1,o.queue),o=kn(),u={state:i,dispatch:null,action:t,pending:null},o.queue=u,s=fy.bind(null,xt,u,h,s),u.dispatch=s,o.memoizedState=t,[i,s,!1]}function Wm(t){var i=mn();return qm(i,Qt,t)}function qm(t,i,s){if(i=mf(t,i,km)[0],t=Yl(da)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Co(i)}catch(y){throw y===hr?zl:y}else o=i;i=mn();var u=i.queue,h=u.dispatch;return s!==i.memoizedState&&(xt.flags|=2048,xr(9,{destroy:void 0},hy.bind(null,u,s),null)),[o,h,t]}function hy(t,i){t.action=i}function Ym(t){var i=mn(),s=Qt;if(s!==null)return qm(i,s,t);mn(),i=i.memoizedState,s=mn();var o=s.queue.dispatch;return s.memoizedState=t,[i,o,!1]}function xr(t,i,s,o){return t={tag:t,create:s,deps:o,inst:i,next:null},i=xt.updateQueue,i===null&&(i=Wl(),xt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,i.lastEffect=t),t}function jm(){return mn().memoizedState}function jl(t,i,s,o){var u=kn();xt.flags|=t,u.memoizedState=xr(1|i,{destroy:void 0},s,o===void 0?null:o)}function Zl(t,i,s,o){var u=mn();o=o===void 0?null:o;var h=u.memoizedState.inst;Qt!==null&&o!==null&&cf(o,Qt.memoizedState.deps)?u.memoizedState=xr(i,h,s,o):(xt.flags|=t,u.memoizedState=xr(1|i,h,s,o))}function Zm(t,i){jl(8390656,8,t,i)}function _f(t,i){Zl(2048,8,t,i)}function dy(t){xt.flags|=4;var i=xt.updateQueue;if(i===null)i=Wl(),xt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Km(t){var i=mn().memoizedState;return dy({ref:i,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Qm(t,i){return Zl(4,2,t,i)}function Jm(t,i){return Zl(4,4,t,i)}function $m(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function e0(t,i,s){s=s!=null?s.concat([t]):null,Zl(4,4,$m.bind(null,i,t),s)}function yf(){}function t0(t,i){var s=mn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&cf(i,o[1])?o[0]:(s.memoizedState=[t,i],t)}function n0(t,i){var s=mn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&cf(i,o[1]))return o[0];if(o=t(),Os){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[o,i],o}function Mf(t,i,s){return s===void 0||(ha&1073741824)!==0&&(Dt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=ig(),xt.lanes|=t,Qa|=t,s)}function i0(t,i,s,o){return ri(s,i)?s:pr.current!==null?(t=Mf(t,s,o),ri(t,i)||(yn=!0),t):(ha&42)===0||(ha&1073741824)!==0&&(Dt&261930)===0?(yn=!0,t.memoizedState=s):(t=ig(),xt.lanes|=t,Qa|=t,i)}function a0(t,i,s,o,u){var h=k.p;k.p=h!==0&&8>h?h:8;var y=G.T,N={};G.T=N,Ef(t,!1,i,s);try{var Y=u(),he=G.S;if(he!==null&&he(N,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var Se=ly(Y,o);No(t,i,Se,hi(t))}else No(t,i,o,hi(t))}catch(Te){No(t,i,{then:function(){},status:"rejected",reason:Te},hi())}finally{k.p=h,y!==null&&N.types!==null&&(y.types=N.types),G.T=y}}function py(){}function Sf(t,i,s,o){if(t.tag!==5)throw Error(a(476));var u=s0(t).queue;a0(t,u,i,ie,s===null?py:function(){return r0(t),s(o)})}function s0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:ie},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function r0(t){var i=s0(t);i.next===null&&(i=t.alternate.memoizedState),No(t,i.next.queue,{},hi())}function bf(){return Ln(Yo)}function o0(){return mn().memoizedState}function l0(){return mn().memoizedState}function my(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=hi();t=Wa(s);var o=qa(i,t,s);o!==null&&(ei(o,i,s),To(o,i,s)),i={cache:Qu()},t.payload=i;return}i=i.return}}function gy(t,i,s){var o=hi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Kl(t)?u0(i,s):(s=Gu(t,i,s,o),s!==null&&(ei(s,t,o),f0(s,i,o)))}function c0(t,i,s){var o=hi();No(t,i,s,o)}function No(t,i,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Kl(t))u0(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var y=i.lastRenderedState,N=h(y,s);if(u.hasEagerState=!0,u.eagerState=N,ri(N,y))return Nl(t,i,u,0),tn===null&&Cl(),!1}catch{}finally{}if(s=Gu(t,i,u,o),s!==null)return ei(s,t,o),f0(s,i,o),!0}return!1}function Ef(t,i,s,o){if(o={lane:2,revertLane:nh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Kl(t)){if(i)throw Error(a(479))}else i=Gu(t,s,o,2),i!==null&&ei(i,t,2)}function Kl(t){var i=t.alternate;return t===xt||i!==null&&i===xt}function u0(t,i){mr=kl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function f0(t,i,s){if((s&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ni(t,s)}}var Do={readContext:Ln,use:ql,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn};Do.useEffectEvent=hn;var h0={readContext:Ln,use:ql,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:Zm,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,jl(4194308,4,$m.bind(null,i,t),s)},useLayoutEffect:function(t,i){return jl(4194308,4,t,i)},useInsertionEffect:function(t,i){jl(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var o=t();if(Os){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[o,i],o},useReducer:function(t,i,s){var o=kn();if(s!==void 0){var u=s(i);if(Os){De(!0);try{s(i)}finally{De(!1)}}}else u=i;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=gy.bind(null,xt,t),[o.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=xf(t);var i=t.queue,s=c0.bind(null,xt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:yf,useDeferredValue:function(t,i){var s=kn();return Mf(s,t,i)},useTransition:function(){var t=xf(!1);return t=a0.bind(null,xt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var o=xt,u=kn();if(Lt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),tn===null)throw Error(a(349));(Dt&127)!==0||Lm(o,i,s)}u.memoizedState=s;var h={value:s,getSnapshot:i};return u.queue=h,Zm(Pm.bind(null,o,h,t),[t]),o.flags|=2048,xr(9,{destroy:void 0},Om.bind(null,o,h,s,i),null),s},useId:function(){var t=kn(),i=tn.identifierPrefix;if(Lt){var s=qi,o=Wi;s=(o&~(1<<32-ke(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Xl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=cy++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:bf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Ef.bind(null,xt,!0,s),s.dispatch=i,[t,i]},useMemoCache:pf,useCacheRefresh:function(){return kn().memoizedState=my.bind(null,xt)},useEffectEvent:function(t){var i=kn(),s={impl:t};return i.memoizedState=s,function(){if((Ft&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Tf={readContext:Ln,use:ql,useCallback:t0,useContext:Ln,useEffect:_f,useImperativeHandle:e0,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:n0,useReducer:Yl,useRef:jm,useState:function(){return Yl(da)},useDebugValue:yf,useDeferredValue:function(t,i){var s=mn();return i0(s,Qt.memoizedState,t,i)},useTransition:function(){var t=Yl(da)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:Um,useId:o0,useHostTransitionStatus:bf,useFormState:Wm,useActionState:Wm,useOptimistic:function(t,i){var s=mn();return Bm(s,Qt,t,i)},useMemoCache:pf,useCacheRefresh:l0};Tf.useEffectEvent=Km;var d0={readContext:Ln,use:ql,useCallback:t0,useContext:Ln,useEffect:_f,useImperativeHandle:e0,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:n0,useReducer:gf,useRef:jm,useState:function(){return gf(da)},useDebugValue:yf,useDeferredValue:function(t,i){var s=mn();return Qt===null?Mf(s,t,i):i0(s,Qt.memoizedState,t,i)},useTransition:function(){var t=gf(da)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:Um,useId:o0,useHostTransitionStatus:bf,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,i){var s=mn();return Qt!==null?Bm(s,Qt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:pf,useCacheRefresh:l0};d0.useEffectEvent=Km;function Af(t,i,s,o){i=t.memoizedState,s=s(o,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var wf={enqueueSetState:function(t,i,s){t=t._reactInternals;var o=hi(),u=Wa(o);u.payload=i,s!=null&&(u.callback=s),i=qa(t,u,o),i!==null&&(ei(i,t,o),To(i,t,o))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var o=hi(),u=Wa(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=qa(t,u,o),i!==null&&(ei(i,t,o),To(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hi(),o=Wa(s);o.tag=2,i!=null&&(o.callback=i),i=qa(t,o,s),i!==null&&(ei(i,t,s),To(i,t,s))}};function p0(t,i,s,o,u,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,y):i.prototype&&i.prototype.isPureReactComponent?!xo(s,o)||!xo(u,h):!0}function m0(t,i,s,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==t&&wf.enqueueReplaceState(i,i.state,null)}function Ps(t,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function g0(t){Rl(t)}function x0(t){console.error(t)}function v0(t){Rl(t)}function Ql(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function _0(t,i,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Rf(t,i,s){return s=Wa(s),s.tag=3,s.payload={element:null},s.callback=function(){Ql(t,i)},s}function y0(t){return t=Wa(t),t.tag=3,t}function M0(t,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){_0(i,s,o)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){_0(i,s,o),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function xy(t,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&cr(i,s,u,!0),s=li.current,s!==null){switch(s.tag){case 31:case 13:return Si===null?cc():s.alternate===null&&dn===0&&(dn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===Bl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),$f(t,o,u)),!1;case 22:return s.flags|=65536,o===Bl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),$f(t,o,u)),!1}throw Error(a(435,s.tag))}return $f(t,o,u),cc(),!1}if(Lt)return i=li.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==qu&&(t=Error(a(422),{cause:o}),yo(vi(t,s)))):(o!==qu&&(i=Error(a(423),{cause:o}),yo(vi(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=vi(o,s),u=Rf(t.stateNode,o,u),af(t,u),dn!==4&&(dn=2)),!1;var h=Error(a(520),{cause:o});if(h=vi(h,s),Fo===null?Fo=[h]:Fo.push(h),dn!==4&&(dn=2),i===null)return!0;o=vi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=Rf(s.stateNode,o,t),af(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ja===null||!Ja.has(h))))return s.flags|=65536,u&=-u,s.lanes|=u,u=y0(u),M0(u,t,s,o),af(s,u),!1}s=s.return}while(s!==null);return!1}var Cf=Error(a(461)),yn=!1;function On(t,i,s,o){i.child=t===null?Tm(i,null,s,o):Ls(i,t.child,s,o)}function S0(t,i,s,o,u){s=s.render;var h=i.ref;if("ref"in o){var y={};for(var N in o)N!=="ref"&&(y[N]=o[N])}else y=o;return Cs(i),o=uf(t,i,s,y,h,u),N=ff(),t!==null&&!yn?(hf(t,i,u),pa(t,i,u)):(Lt&&N&&Xu(i),i.flags|=1,On(t,i,o,u),i.child)}function b0(t,i,s,o,u){if(t===null){var h=s.type;return typeof h=="function"&&!Hu(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,E0(t,i,h,o,u)):(t=Ul(s.type,null,o,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!zf(t,u)){var y=h.memoizedProps;if(s=s.compare,s=s!==null?s:xo,s(y,o)&&t.ref===i.ref)return pa(t,i,u)}return i.flags|=1,t=la(h,o),t.ref=i.ref,t.return=i,i.child=t}function E0(t,i,s,o,u){if(t!==null){var h=t.memoizedProps;if(xo(h,o)&&t.ref===i.ref)if(yn=!1,i.pendingProps=o=h,zf(t,u))(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,pa(t,i,u)}return Nf(t,i,s,o,u)}function T0(t,i,s,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(o=i.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,i.child=null;return A0(t,i,h,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Il(i,h!==null?h.cachePool:null),h!==null?Rm(i,h):rf(),Cm(i);else return o=i.lanes=536870912,A0(t,i,h!==null?h.baseLanes|s:s,s,o)}else h!==null?(Il(i,h.cachePool),Rm(i,h),ja(),i.memoizedState=null):(t!==null&&Il(i,null),rf(),ja());return On(t,i,u,s),i.child}function Uo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function A0(t,i,s,o,u){var h=$u();return h=h===null?null:{parent:vn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&Il(i,null),rf(),Cm(i),t!==null&&cr(t,i,o,!0),i.childLanes=u,null}function Jl(t,i){return i=ec({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function w0(t,i,s){return Ls(i,t.child,null,s),t=Jl(i,i.pendingProps),t.flags|=2,ci(i),i.memoizedState=null,t}function vy(t,i,s){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Lt){if(o.mode==="hidden")return t=Jl(i,o),i.lanes=536870912,Uo(null,t);if(lf(i),(t=nn)?(t=Fg(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},s=um(t),s.return=i,i.child=s,Un=i,nn=null)):t=null,t===null)throw Va(i);return i.lanes=536870912,null}return Jl(i,o)}var h=t.memoizedState;if(h!==null){var y=h.dehydrated;if(lf(i),u)if(i.flags&256)i.flags&=-257,i=w0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(yn||cr(t,i,s,!1),u=(s&t.childLanes)!==0,yn||u){if(o=tn,o!==null&&(y=ii(o,s),y!==0&&y!==h.retryLane))throw h.retryLane=y,Ts(t,y),ei(o,t,y),Cf;cc(),i=w0(t,i,s)}else t=h.treeContext,nn=bi(y.nextSibling),Un=i,Lt=!0,Ha=null,Mi=!1,t!==null&&dm(i,t),i=Jl(i,o),i.flags|=4096;return i}return t=la(t.child,{mode:o.mode,children:o.children}),t.ref=i.ref,i.child=t,t.return=i,t}function $l(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Nf(t,i,s,o,u){return Cs(i),s=uf(t,i,s,o,void 0,u),o=ff(),t!==null&&!yn?(hf(t,i,u),pa(t,i,u)):(Lt&&o&&Xu(i),i.flags|=1,On(t,i,s,u),i.child)}function R0(t,i,s,o,u,h){return Cs(i),i.updateQueue=null,s=Dm(i,o,s,u),Nm(t),o=ff(),t!==null&&!yn?(hf(t,i,h),pa(t,i,h)):(Lt&&o&&Xu(i),i.flags|=1,On(t,i,s,h),i.child)}function C0(t,i,s,o,u){if(Cs(i),i.stateNode===null){var h=sr,y=s.contextType;typeof y=="object"&&y!==null&&(h=Ln(y)),h=new s(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=wf,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},tf(i),y=s.contextType,h.context=typeof y=="object"&&y!==null?Ln(y):sr,h.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Af(i,s,y,o),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&wf.enqueueReplaceState(h,h.state,null),wo(i,o,h,u),Ao(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){h=i.stateNode;var N=i.memoizedProps,Y=Ps(s,N);h.props=Y;var he=h.context,Se=s.contextType;y=sr,typeof Se=="object"&&Se!==null&&(y=Ln(Se));var Te=s.getDerivedStateFromProps;Se=typeof Te=="function"||typeof h.getSnapshotBeforeUpdate=="function",N=i.pendingProps!==N,Se||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(N||he!==y)&&m0(i,h,o,y),Xa=!1;var ge=i.memoizedState;h.state=ge,wo(i,o,h,u),Ao(),he=i.memoizedState,N||ge!==he||Xa?(typeof Te=="function"&&(Af(i,s,Te,o),he=i.memoizedState),(Y=Xa||p0(i,s,Y,o,ge,he,y))?(Se||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=he),h.props=o,h.state=he,h.context=y,o=Y):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,nf(t,i),y=i.memoizedProps,Se=Ps(s,y),h.props=Se,Te=i.pendingProps,ge=h.context,he=s.contextType,Y=sr,typeof he=="object"&&he!==null&&(Y=Ln(he)),N=s.getDerivedStateFromProps,(he=typeof N=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==Te||ge!==Y)&&m0(i,h,o,Y),Xa=!1,ge=i.memoizedState,h.state=ge,wo(i,o,h,u),Ao();var xe=i.memoizedState;y!==Te||ge!==xe||Xa||t!==null&&t.dependencies!==null&&Ol(t.dependencies)?(typeof N=="function"&&(Af(i,s,N,o),xe=i.memoizedState),(Se=Xa||p0(i,s,Se,o,ge,xe,Y)||t!==null&&t.dependencies!==null&&Ol(t.dependencies))?(he||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,xe,Y),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,xe,Y)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=xe),h.props=o,h.state=xe,h.context=Y,o=Se):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),o=!1)}return h=o,$l(t,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&o?(i.child=Ls(i,t.child,null,u),i.child=Ls(i,null,s,u)):On(t,i,s,u),i.memoizedState=h.state,t=i.child):t=pa(t,i,u),t}function N0(t,i,s,o){return ws(),i.flags|=256,On(t,i,s,o),i.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:_m()}}function Lf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=fi),t}function D0(t,i,s){var o=i.pendingProps,u=!1,h=(i.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),y&&(u=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(Lt){if(u?Ya(i):ja(),(t=nn)?(t=Fg(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},s=um(t),s.return=i,i.child=s,Un=i,nn=null)):t=null,t===null)throw Va(i);return mh(t)?i.lanes=32:i.lanes=536870912,null}var N=o.children;return o=o.fallback,u?(ja(),u=i.mode,N=ec({mode:"hidden",children:N},u),o=As(o,u,s,null),N.return=i,o.return=i,N.sibling=o,i.child=N,o=i.child,o.memoizedState=Uf(s),o.childLanes=Lf(t,y,s),i.memoizedState=Df,Uo(null,o)):(Ya(i),Of(i,N))}var Y=t.memoizedState;if(Y!==null&&(N=Y.dehydrated,N!==null)){if(h)i.flags&256?(Ya(i),i.flags&=-257,i=Pf(t,i,s)):i.memoizedState!==null?(ja(),i.child=t.child,i.flags|=128,i=null):(ja(),N=o.fallback,u=i.mode,o=ec({mode:"visible",children:o.children},u),N=As(N,u,s,null),N.flags|=2,o.return=i,N.return=i,o.sibling=N,i.child=o,Ls(i,t.child,null,s),o=i.child,o.memoizedState=Uf(s),o.childLanes=Lf(t,y,s),i.memoizedState=Df,i=Uo(null,o));else if(Ya(i),mh(N)){if(y=N.nextSibling&&N.nextSibling.dataset,y)var he=y.dgst;y=he,o=Error(a(419)),o.stack="",o.digest=y,yo({value:o,source:null,stack:null}),i=Pf(t,i,s)}else if(yn||cr(t,i,s,!1),y=(s&t.childLanes)!==0,yn||y){if(y=tn,y!==null&&(o=ii(y,s),o!==0&&o!==Y.retryLane))throw Y.retryLane=o,Ts(t,o),ei(y,t,o),Cf;ph(N)||cc(),i=Pf(t,i,s)}else ph(N)?(i.flags|=192,i.child=t.child,i=null):(t=Y.treeContext,nn=bi(N.nextSibling),Un=i,Lt=!0,Ha=null,Mi=!1,t!==null&&dm(i,t),i=Of(i,o.children),i.flags|=4096);return i}return u?(ja(),N=o.fallback,u=i.mode,Y=t.child,he=Y.sibling,o=la(Y,{mode:"hidden",children:o.children}),o.subtreeFlags=Y.subtreeFlags&65011712,he!==null?N=la(he,N):(N=As(N,u,s,null),N.flags|=2),N.return=i,o.return=i,o.sibling=N,i.child=o,Uo(null,o),o=i.child,N=t.child.memoizedState,N===null?N=Uf(s):(u=N.cachePool,u!==null?(Y=vn._currentValue,u=u.parent!==Y?{parent:Y,pool:Y}:u):u=_m(),N={baseLanes:N.baseLanes|s,cachePool:u}),o.memoizedState=N,o.childLanes=Lf(t,y,s),i.memoizedState=Df,Uo(t.child,o)):(Ya(i),s=t.child,t=s.sibling,s=la(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function Of(t,i){return i=ec({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function ec(t,i){return t=oi(22,t,null,i),t.lanes=0,t}function Pf(t,i,s){return Ls(i,t.child,null,s),t=Of(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function U0(t,i,s){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),Zu(t.return,i,s)}function If(t,i,s,o,u,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:h}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=s,y.tailMode=u,y.treeForkCount=h)}function L0(t,i,s){var o=i.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=pn.current,N=(y&2)!==0;if(N?(y=y&1|2,i.flags|=128):y&=1,ce(pn,y),On(t,i,o,s),o=Lt?_o:0,!N&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U0(t,s,i);else if(t.tag===19)U0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&Vl(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),If(i,!1,u,s,h,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Vl(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}If(i,!0,s,null,h,o);break;case"together":If(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function pa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Qa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(cr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=la(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=la(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function zf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ol(t)))}function _y(t,i,s){switch(i.tag){case 3:re(i,i.stateNode.containerInfo),ka(i,vn,t.memoizedState.cache),ws();break;case 27:case 5:Oe(i);break;case 4:re(i,i.stateNode.containerInfo);break;case 10:ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,lf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ya(i),i.flags|=128,null):(s&i.child.childLanes)!==0?D0(t,i,s):(Ya(i),t=pa(t,i,s),t!==null?t.sibling:null);Ya(i);break;case 19:var u=(t.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(cr(t,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return L0(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ce(pn,pn.current),o)break;return null;case 22:return i.lanes=0,T0(t,i,s,i.pendingProps);case 24:ka(i,vn,t.memoizedState.cache)}return pa(t,i,s)}function O0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)yn=!0;else{if(!zf(t,s)&&(i.flags&128)===0)return yn=!1,_y(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,Lt&&(i.flags&1048576)!==0&&hm(i,_o,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(t=Ds(i.elementType),i.type=t,typeof t=="function")Hu(t)?(o=Ps(t,o),i.tag=1,i=C0(null,i,t,o,s)):(i.tag=0,i=Nf(null,i,t,o,s));else{if(t!=null){var u=t.$$typeof;if(u===w){i.tag=11,i=S0(null,i,t,o,s);break e}else if(u===O){i.tag=14,i=b0(null,i,t,o,s);break e}}throw i=le(t)||t,Error(a(306,i,""))}}return i;case 0:return Nf(t,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=Ps(o,i.pendingProps),C0(t,i,o,u,s);case 3:e:{if(re(i,i.stateNode.containerInfo),t===null)throw Error(a(387));o=i.pendingProps;var h=i.memoizedState;u=h.element,nf(t,i),wo(i,o,null,s);var y=i.memoizedState;if(o=y.cache,ka(i,vn,o),o!==h.cache&&Ku(i,[vn],s,!0),Ao(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=N0(t,i,o,s);break e}else if(o!==u){u=vi(Error(a(424)),i),yo(u),i=N0(t,i,o,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(nn=bi(t.firstChild),Un=i,Lt=!0,Ha=null,Mi=!0,s=Tm(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ws(),o===u){i=pa(t,i,s);break e}On(t,i,o,s)}i=i.child}return i;case 26:return $l(t,i),t===null?(s=Wg(i.type,null,i.pendingProps,null))?i.memoizedState=s:Lt||(s=i.type,t=i.pendingProps,o=gc(q.current).createElement(s),o[gn]=i,o[Dn]=t,Pn(o,s,t),xn(o),i.stateNode=o):i.memoizedState=Wg(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Oe(i),t===null&&Lt&&(o=i.stateNode=Vg(i.type,i.pendingProps,q.current),Un=i,Mi=!0,u=nn,ns(i.type)?(gh=u,nn=bi(o.firstChild)):nn=u),On(t,i,i.pendingProps.children,s),$l(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Lt&&((u=o=nn)&&(o=Zy(o,i.type,i.pendingProps,Mi),o!==null?(i.stateNode=o,Un=i,nn=bi(o.firstChild),Mi=!1,u=!0):u=!1),u||Va(i)),Oe(i),u=i.type,h=i.pendingProps,y=t!==null?t.memoizedProps:null,o=h.children,fh(u,h)?o=null:y!==null&&fh(u,y)&&(i.flags|=32),i.memoizedState!==null&&(u=uf(t,i,uy,null,null,s),Yo._currentValue=u),$l(t,i),On(t,i,o,s),i.child;case 6:return t===null&&Lt&&((t=s=nn)&&(s=Ky(s,i.pendingProps,Mi),s!==null?(i.stateNode=s,Un=i,nn=null,t=!0):t=!1),t||Va(i)),null;case 13:return D0(t,i,s);case 4:return re(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=Ls(i,null,o,s):On(t,i,o,s),i.child;case 11:return S0(t,i,i.type,i.pendingProps,s);case 7:return On(t,i,i.pendingProps,s),i.child;case 8:return On(t,i,i.pendingProps.children,s),i.child;case 12:return On(t,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,ka(i,i.type,o.value),On(t,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Cs(i),u=Ln(u),o=o(u),i.flags|=1,On(t,i,o,s),i.child;case 14:return b0(t,i,i.type,i.pendingProps,s);case 15:return E0(t,i,i.type,i.pendingProps,s);case 19:return L0(t,i,s);case 31:return vy(t,i,s);case 22:return T0(t,i,s,i.pendingProps);case 24:return Cs(i),o=Ln(vn),t===null?(u=$u(),u===null&&(u=tn,h=Qu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=s),u=h),i.memoizedState={parent:o,cache:u},tf(i),ka(i,vn,u)):((t.lanes&s)!==0&&(nf(t,i),wo(i,null,null,s),Ao()),u=t.memoizedState,h=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),ka(i,vn,o)):(o=h.cache,ka(i,vn,o),o!==u.cache&&Ku(i,[vn],s,!0))),On(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ma(t){t.flags|=4}function Bf(t,i,s,o,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(og())t.flags|=8192;else throw Us=Bl,ef}else t.flags&=-16777217}function P0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Kg(i))if(og())t.flags|=8192;else throw Us=Bl,ef}function tc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?we():536870912,t.lanes|=i,Mr|=i)}function Lo(t,i){if(!Lt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function an(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=s,i}function yy(t,i,s){var o=i.pendingProps;switch(Wu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return an(i),null;case 3:return s=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),fa(vn),Ae(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(lr(i)?ma(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Yu())),an(i),null;case 26:var u=i.type,h=i.memoizedState;return t===null?(ma(i),h!==null?(an(i),P0(i,h)):(an(i),Bf(i,u,null,o,s))):h?h!==t.memoizedState?(ma(i),an(i),P0(i,h)):(an(i),i.flags&=-16777217):(t=t.memoizedProps,t!==o&&ma(i),an(i),Bf(i,u,t,o,s)),null;case 27:if(Ce(i),s=q.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&ma(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return an(i),null}t=ye.current,lr(i)?pm(i):(t=Vg(u,o,s),i.stateNode=t,ma(i))}return an(i),null;case 5:if(Ce(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&ma(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return an(i),null}if(h=ye.current,lr(i))pm(i);else{var y=gc(q.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[gn]=i,h[Dn]=o;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=h;e:switch(Pn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ma(i)}}return an(i),Bf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&ma(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(t=q.current,lr(i)){if(t=i.stateNode,s=i.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[gn]=i,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Dg(t.nodeValue,s)),t||Va(i,!0)}else t=gc(t).createTextNode(o),t[gn]=i,i.stateNode=t}return an(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(o=lr(i),s!==null){if(t===null){if(!o)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[gn]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),t=!1}else s=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ci(i),i):(ci(i),null);if((i.flags&128)!==0)throw Error(a(558))}return an(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=lr(i),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[gn]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),u=!1}else u=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ci(i),i):(ci(i),null)}return ci(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),tc(i,i.updateQueue),an(i),null);case 4:return Ae(),t===null&&rh(i.stateNode.containerInfo),an(i),null;case 10:return fa(i.type),an(i),null;case 19:if(X(pn),o=i.memoizedState,o===null)return an(i),null;if(u=(i.flags&128)!==0,h=o.rendering,h===null)if(u)Lo(o,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Vl(t),h!==null){for(i.flags|=128,Lo(o,!1),t=h.updateQueue,i.updateQueue=t,tc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)cm(s,t),s=s.sibling;return ce(pn,pn.current&1|2),Lt&&ca(i,o.treeForkCount),i.child}t=t.sibling}o.tail!==null&&Ct()>rc&&(i.flags|=128,u=!0,Lo(o,!1),i.lanes=4194304)}else{if(!u)if(t=Vl(h),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,tc(i,t),Lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Lt)return an(i),null}else 2*Ct()-o.renderingStartTime>rc&&s!==536870912&&(i.flags|=128,u=!0,Lo(o,!1),i.lanes=4194304);o.isBackwards?(h.sibling=i.child,i.child=h):(t=o.last,t!==null?t.sibling=h:i.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ct(),t.sibling=null,s=pn.current,ce(pn,u?s&1|2:s&1),Lt&&ca(i,o.treeForkCount),t):(an(i),null);case 22:case 23:return ci(i),of(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),s=i.updateQueue,s!==null&&tc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),t!==null&&X(Ns),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),fa(vn),an(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function My(t,i){switch(Wu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return fa(vn),Ae(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ce(i),null;case 31:if(i.memoizedState!==null){if(ci(i),i.alternate===null)throw Error(a(340));ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ci(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return X(pn),null;case 4:return Ae(),null;case 10:return fa(i.type),null;case 22:case 23:return ci(i),of(),t!==null&&X(Ns),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return fa(vn),null;case 25:return null;default:return null}}function I0(t,i){switch(Wu(i),i.tag){case 3:fa(vn),Ae();break;case 26:case 27:case 5:Ce(i);break;case 4:Ae();break;case 31:i.memoizedState!==null&&ci(i);break;case 13:ci(i);break;case 19:X(pn);break;case 10:fa(i.type);break;case 22:case 23:ci(i),of(),t!==null&&X(Ns);break;case 24:fa(vn)}}function Oo(t,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){o=void 0;var h=s.create,y=s.inst;o=h(),y.destroy=o}s=s.next}while(s!==u)}}catch(N){jt(i,i.return,N)}}function Za(t,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var y=o.inst,N=y.destroy;if(N!==void 0){y.destroy=void 0,u=i;var Y=s,he=N;try{he()}catch(Se){jt(u,Y,Se)}}}o=o.next}while(o!==h)}}catch(Se){jt(i,i.return,Se)}}function z0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{wm(i,s)}catch(o){jt(t,t.return,o)}}}function B0(t,i,s){s.props=Ps(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){jt(t,i,o)}}function Po(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){jt(t,i,u)}}function Yi(t,i){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){jt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){jt(t,i,u)}else s.current=null}function F0(t){var i=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){jt(t,t.return,u)}}function Ff(t,i,s){try{var o=t.stateNode;ky(o,t.type,s,i),o[Dn]=i}catch(u){jt(t,t.return,u)}}function G0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ns(t.type)||t.tag===4}function Gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ns(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hf(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ra));else if(o!==4&&(o===27&&ns(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Hf(t,i,s),t=t.sibling;t!==null;)Hf(t,i,s),t=t.sibling}function nc(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(o!==4&&(o===27&&ns(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(nc(t,i,s),t=t.sibling;t!==null;)nc(t,i,s),t=t.sibling}function H0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Pn(i,o,s),i[gn]=t,i[Dn]=s}catch(h){jt(t,t.return,h)}}var ga=!1,Mn=!1,Vf=!1,V0=typeof WeakSet=="function"?WeakSet:Set,wn=null;function Sy(t,i){if(t=t.containerInfo,ch=bc,t=em(t),Ou(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var y=0,N=-1,Y=-1,he=0,Se=0,Te=t,ge=null;t:for(;;){for(var xe;Te!==s||u!==0&&Te.nodeType!==3||(N=y+u),Te!==h||o!==0&&Te.nodeType!==3||(Y=y+o),Te.nodeType===3&&(y+=Te.nodeValue.length),(xe=Te.firstChild)!==null;)ge=Te,Te=xe;for(;;){if(Te===t)break t;if(ge===s&&++he===u&&(N=y),ge===h&&++Se===o&&(Y=y),(xe=Te.nextSibling)!==null)break;Te=ge,ge=Te.parentNode}Te=xe}s=N===-1||Y===-1?null:{start:N,end:Y}}else s=null}s=s||{start:0,end:0}}else s=null;for(uh={focusedElem:t,selectionRange:s},bc=!1,wn=i;wn!==null;)if(i=wn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,wn=t;else for(;wn!==null;){switch(i=wn,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,u=h.memoizedProps,h=h.memoizedState,o=s.stateNode;try{var Ke=Ps(s.type,u);t=o.getSnapshotBeforeUpdate(Ke,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(lt){jt(s,s.return,lt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)dh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":dh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,wn=t;break}wn=i.return}}function k0(t,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:va(t,s),o&4&&Oo(5,s);break;case 1:if(va(t,s),o&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){jt(s,s.return,y)}else{var u=Ps(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){jt(s,s.return,y)}}o&64&&z0(s),o&512&&Po(s,s.return);break;case 3:if(va(t,s),o&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{wm(t,i)}catch(y){jt(s,s.return,y)}}break;case 27:i===null&&o&4&&H0(s);case 26:case 5:va(t,s),i===null&&o&4&&F0(s),o&512&&Po(s,s.return);break;case 12:va(t,s);break;case 31:va(t,s),o&4&&q0(t,s);break;case 13:va(t,s),o&4&&Y0(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Dy.bind(null,s),Qy(t,s))));break;case 22:if(o=s.memoizedState!==null||ga,!o){i=i!==null&&i.memoizedState!==null||Mn,u=ga;var h=Mn;ga=o,(Mn=i)&&!h?_a(t,s,(s.subtreeFlags&8772)!==0):va(t,s),ga=u,Mn=h}break;case 30:break;default:va(t,s)}}function X0(t){var i=t.alternate;i!==null&&(t.alternate=null,X0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ia(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,Kn=!1;function xa(t,i,s){for(s=s.child;s!==null;)W0(t,i,s),s=s.sibling}function W0(t,i,s){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(ve,s)}catch{}switch(s.tag){case 26:Mn||Yi(s,i),xa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Mn||Yi(s,i);var o=ln,u=Kn;ns(s.type)&&(ln=s.stateNode,Kn=!1),xa(t,i,s),Xo(s.stateNode),ln=o,Kn=u;break;case 5:Mn||Yi(s,i);case 6:if(o=ln,u=Kn,ln=null,xa(t,i,s),ln=o,Kn=u,ln!==null)if(Kn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(s.stateNode)}catch(h){jt(s,i,h)}else try{ln.removeChild(s.stateNode)}catch(h){jt(s,i,h)}break;case 18:ln!==null&&(Kn?(t=ln,zg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Cr(t)):zg(ln,s.stateNode));break;case 4:o=ln,u=Kn,ln=s.stateNode.containerInfo,Kn=!0,xa(t,i,s),ln=o,Kn=u;break;case 0:case 11:case 14:case 15:Za(2,s,i),Mn||Za(4,s,i),xa(t,i,s);break;case 1:Mn||(Yi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&B0(s,i,o)),xa(t,i,s);break;case 21:xa(t,i,s);break;case 22:Mn=(o=Mn)||s.memoizedState!==null,xa(t,i,s),Mn=o;break;default:xa(t,i,s)}}function q0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Cr(t)}catch(s){jt(i,i.return,s)}}}function Y0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Cr(t)}catch(s){jt(i,i.return,s)}}function by(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new V0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new V0),i;default:throw Error(a(435,t.tag))}}function ic(t,i){var s=by(t);i.forEach(function(o){if(!s.has(o)){s.add(o);var u=Uy.bind(null,t,o);o.then(u,u)}})}function Qn(t,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],h=t,y=i,N=y;e:for(;N!==null;){switch(N.tag){case 27:if(ns(N.type)){ln=N.stateNode,Kn=!1;break e}break;case 5:ln=N.stateNode,Kn=!1;break e;case 3:case 4:ln=N.stateNode.containerInfo,Kn=!0;break e}N=N.return}if(ln===null)throw Error(a(160));W0(h,y,u),ln=null,Kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)j0(i,t),i=i.sibling}var Oi=null;function j0(t,i){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(i,t),Jn(t),o&4&&(Za(3,t,t.return),Oo(3,t),Za(5,t,t.return));break;case 1:Qn(i,t),Jn(t),o&512&&(Mn||s===null||Yi(s,s.return)),o&64&&ga&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Oi;if(Qn(i,t),Jn(t),o&512&&(Mn||s===null||Yi(s,s.return)),o&4){var h=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Pa]||h[gn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Pn(h,o,s),h[gn]=t,xn(h),o=h;break e;case"link":var y=jg("link","href",u).get(o+(s.href||""));if(y){for(var N=0;N<y.length;N++)if(h=y[N],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(N,1);break t}}h=u.createElement(o),Pn(h,o,s),u.head.appendChild(h);break;case"meta":if(y=jg("meta","content",u).get(o+(s.content||""))){for(N=0;N<y.length;N++)if(h=y[N],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(N,1);break t}}h=u.createElement(o),Pn(h,o,s),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[gn]=t,xn(h),o=h}t.stateNode=o}else Zg(u,t.type,t.stateNode);else t.stateNode=Yg(u,o,t.memoizedProps);else h!==o?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,o===null?Zg(u,t.type,t.stateNode):Yg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ff(t,t.memoizedProps,s.memoizedProps)}break;case 27:Qn(i,t),Jn(t),o&512&&(Mn||s===null||Yi(s,s.return)),s!==null&&o&4&&Ff(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Qn(i,t),Jn(t),o&512&&(Mn||s===null||Yi(s,s.return)),t.flags&32){u=t.stateNode;try{si(u,"")}catch(Ke){jt(t,t.return,Ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Ff(t,u,s!==null?s.memoizedProps:u)),o&1024&&(Vf=!0);break;case 6:if(Qn(i,t),Jn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(Ke){jt(t,t.return,Ke)}}break;case 3:if(_c=null,u=Oi,Oi=xc(i.containerInfo),Qn(i,t),Oi=u,Jn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Cr(i.containerInfo)}catch(Ke){jt(t,t.return,Ke)}Vf&&(Vf=!1,Z0(t));break;case 4:o=Oi,Oi=xc(t.stateNode.containerInfo),Qn(i,t),Jn(t),Oi=o;break;case 12:Qn(i,t),Jn(t);break;case 31:Qn(i,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ic(t,o)));break;case 13:Qn(i,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(sc=Ct()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ic(t,o)));break;case 22:u=t.memoizedState!==null;var Y=s!==null&&s.memoizedState!==null,he=ga,Se=Mn;if(ga=he||u,Mn=Se||Y,Qn(i,t),Mn=Se,ga=he,Jn(t),o&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||Y||ga||Mn||Is(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){Y=s=i;try{if(h=Y.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{N=Y.stateNode;var Te=Y.memoizedProps.style,ge=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;N.style.display=ge==null||typeof ge=="boolean"?"":(""+ge).trim()}}catch(Ke){jt(Y,Y.return,Ke)}}}else if(i.tag===6){if(s===null){Y=i;try{Y.stateNode.nodeValue=u?"":Y.memoizedProps}catch(Ke){jt(Y,Y.return,Ke)}}}else if(i.tag===18){if(s===null){Y=i;try{var xe=Y.stateNode;u?Bg(xe,!0):Bg(Y.stateNode,!1)}catch(Ke){jt(Y,Y.return,Ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,ic(t,s))));break;case 19:Qn(i,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ic(t,o)));break;case 30:break;case 21:break;default:Qn(i,t),Jn(t)}}function Jn(t){var i=t.flags;if(i&2){try{for(var s,o=t.return;o!==null;){if(G0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,h=Gf(t);nc(t,h,u);break;case 5:var y=s.stateNode;s.flags&32&&(si(y,""),s.flags&=-33);var N=Gf(t);nc(t,N,y);break;case 3:case 4:var Y=s.stateNode.containerInfo,he=Gf(t);Hf(t,he,Y);break;default:throw Error(a(161))}}catch(Se){jt(t,t.return,Se)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Z0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Z0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function va(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)k0(t,i.alternate,i),i=i.sibling}function Is(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Za(4,i,i.return),Is(i);break;case 1:Yi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&B0(i,i.return,s),Is(i);break;case 27:Xo(i.stateNode);case 26:case 5:Yi(i,i.return),Is(i);break;case 22:i.memoizedState===null&&Is(i);break;case 30:Is(i);break;default:Is(i)}t=t.sibling}}function _a(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=t,h=i,y=h.flags;switch(h.tag){case 0:case 11:case 15:_a(u,h,s),Oo(4,h);break;case 1:if(_a(u,h,s),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(he){jt(o,o.return,he)}if(o=h,u=o.updateQueue,u!==null){var N=o.stateNode;try{var Y=u.shared.hiddenCallbacks;if(Y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Y.length;u++)Am(Y[u],N)}catch(he){jt(o,o.return,he)}}s&&y&64&&z0(h),Po(h,h.return);break;case 27:H0(h);case 26:case 5:_a(u,h,s),s&&o===null&&y&4&&F0(h),Po(h,h.return);break;case 12:_a(u,h,s);break;case 31:_a(u,h,s),s&&y&4&&q0(u,h);break;case 13:_a(u,h,s),s&&y&4&&Y0(u,h);break;case 22:h.memoizedState===null&&_a(u,h,s),Po(h,h.return);break;case 30:break;default:_a(u,h,s)}i=i.sibling}}function kf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Mo(s))}function Xf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Mo(t))}function Pi(t,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)K0(t,i,s,o),i=i.sibling}function K0(t,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,o),u&2048&&Oo(9,i);break;case 1:Pi(t,i,s,o);break;case 3:Pi(t,i,s,o),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Mo(t)));break;case 12:if(u&2048){Pi(t,i,s,o),t=i.stateNode;try{var h=i.memoizedProps,y=h.id,N=h.onPostCommit;typeof N=="function"&&N(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Y){jt(i,i.return,Y)}}else Pi(t,i,s,o);break;case 31:Pi(t,i,s,o);break;case 13:Pi(t,i,s,o);break;case 23:break;case 22:h=i.stateNode,y=i.alternate,i.memoizedState!==null?h._visibility&2?Pi(t,i,s,o):Io(t,i):h._visibility&2?Pi(t,i,s,o):(h._visibility|=2,vr(t,i,s,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&kf(y,i);break;case 24:Pi(t,i,s,o),u&2048&&Xf(i.alternate,i);break;default:Pi(t,i,s,o)}}function vr(t,i,s,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,y=i,N=s,Y=o,he=y.flags;switch(y.tag){case 0:case 11:case 15:vr(h,y,N,Y,u),Oo(8,y);break;case 23:break;case 22:var Se=y.stateNode;y.memoizedState!==null?Se._visibility&2?vr(h,y,N,Y,u):Io(h,y):(Se._visibility|=2,vr(h,y,N,Y,u)),u&&he&2048&&kf(y.alternate,y);break;case 24:vr(h,y,N,Y,u),u&&he&2048&&Xf(y.alternate,y);break;default:vr(h,y,N,Y,u)}i=i.sibling}}function Io(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,o=i,u=o.flags;switch(o.tag){case 22:Io(s,o),u&2048&&kf(o.alternate,o);break;case 24:Io(s,o),u&2048&&Xf(o.alternate,o);break;default:Io(s,o)}i=i.sibling}}var zo=8192;function _r(t,i,s){if(t.subtreeFlags&zo)for(t=t.child;t!==null;)Q0(t,i,s),t=t.sibling}function Q0(t,i,s){switch(t.tag){case 26:_r(t,i,s),t.flags&zo&&t.memoizedState!==null&&cM(s,Oi,t.memoizedState,t.memoizedProps);break;case 5:_r(t,i,s);break;case 3:case 4:var o=Oi;Oi=xc(t.stateNode.containerInfo),_r(t,i,s),Oi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=zo,zo=16777216,_r(t,i,s),zo=o):_r(t,i,s));break;default:_r(t,i,s)}}function J0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Bo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];wn=o,eg(o,t)}J0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$0(t),t=t.sibling}function $0(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&Za(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ac(t)):Bo(t);break;default:Bo(t)}}function ac(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];wn=o,eg(o,t)}J0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Za(8,i,i.return),ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ac(i));break;default:ac(i)}t=t.sibling}}function eg(t,i){for(;wn!==null;){var s=wn;switch(s.tag){case 0:case 11:case 15:Za(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Mo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,wn=o;else e:for(s=t;wn!==null;){o=wn;var u=o.sibling,h=o.return;if(X0(o),o===s){wn=null;break e}if(u!==null){u.return=h,wn=u;break e}wn=h}}}var Ey={getCacheForType:function(t){var i=Ln(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Ln(vn).controller.signal}},Ty=typeof WeakMap=="function"?WeakMap:Map,Ft=0,tn=null,Et=null,Dt=0,Yt=0,ui=null,Ka=!1,yr=!1,Wf=!1,ya=0,dn=0,Qa=0,zs=0,qf=0,fi=0,Mr=0,Fo=null,$n=null,Yf=!1,sc=0,tg=0,rc=1/0,oc=null,Ja=null,En=0,$a=null,Sr=null,Ma=0,jf=0,Zf=null,ng=null,Go=0,Kf=null;function hi(){return(Ft&2)!==0&&Dt!==0?Dt&-Dt:G.T!==null?nh():lo()}function ig(){if(fi===0)if((Dt&536870912)===0||Lt){var t=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),fi=t}else fi=536870912;return t=li.current,t!==null&&(t.flags|=32),fi}function ei(t,i,s){(t===tn&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(br(t,0),es(t,Dt,fi,!1)),qe(t,s),((Ft&2)===0||t!==tn)&&(t===tn&&((Ft&2)===0&&(zs|=s),dn===4&&es(t,Dt,fi,!1)),ji(t))}function ag(t,i,s){if((Ft&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ie(t,i),u=o?Ry(t,i):Jf(t,i,!0),h=o;do{if(u===0){yr&&!o&&es(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!Ay(s)){u=Jf(t,i,!1),h=!1;continue}if(u===2){if(h=i,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var N=t;u=Fo;var Y=N.current.memoizedState.isDehydrated;if(Y&&(br(N,y).flags|=256),y=Jf(N,y,!1),y!==2){if(Wf&&!Y){N.errorRecoveryDisabledLanes|=h,zs|=h,u=4;break e}h=$n,$n=u,h!==null&&($n===null?$n=h:$n.push.apply($n,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){br(t,0),es(t,i,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:es(o,i,fi,!Ka);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=sc+300-Ct(),10<u)){if(es(o,i,fi,!Ka),be(o,0,!0)!==0)break e;Ma=i,o.timeoutHandle=Pg(sg.bind(null,o,s,$n,oc,Yf,i,fi,zs,Mr,Ka,h,"Throttled",-0,0),u);break e}sg(o,s,$n,oc,Yf,i,fi,zs,Mr,Ka,h,null,-0,0)}}break}while(!0);ji(t)}function sg(t,i,s,o,u,h,y,N,Y,he,Se,Te,ge,xe){if(t.timeoutHandle=-1,Te=i.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},Q0(i,h,Te);var Ke=(h&62914560)===h?sc-Ct():(h&4194048)===h?tg-Ct():0;if(Ke=uM(Te,Ke),Ke!==null){Ma=h,t.cancelPendingCommit=Ke(dg.bind(null,t,i,h,s,o,u,y,N,Y,Se,Te,null,ge,xe)),es(t,h,y,!he);return}}dg(t,i,h,s,o,u,y,N,Y)}function Ay(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],h=u.getSnapshot;u=u.value;try{if(!ri(h(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function es(t,i,s,o){i&=~qf,i&=~zs,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var u=i;0<u;){var h=31-ke(u),y=1<<h;o[h]=-1,u&=~y}s!==0&&kt(t,s,i)}function lc(){return(Ft&6)===0?(Ho(0),!1):!0}function Qf(){if(Et!==null){if(Yt===0)var t=Et.return;else t=Et,ua=Rs=null,df(t),dr=null,bo=0,t=Et;for(;t!==null;)I0(t.alternate,t),t=t.return;Et=null}}function br(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,qy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ma=0,Qf(),tn=t,Et=s=la(t.current,null),Dt=i,Yt=0,ui=null,Ka=!1,yr=Ie(t,i),Wf=!1,Mr=fi=qf=zs=Qa=dn=0,$n=Fo=null,Yf=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var u=31-ke(o),h=1<<u;i|=t[u],o&=~h}return ya=i,Cl(),s}function rg(t,i){xt=null,G.H=Do,i===hr||i===zl?(i=Sm(),Yt=3):i===ef?(i=Sm(),Yt=4):Yt=i===Cf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ui=i,Et===null&&(dn=1,Ql(t,vi(i,t.current)))}function og(){var t=li.current;return t===null?!0:(Dt&4194048)===Dt?Si===null:(Dt&62914560)===Dt||(Dt&536870912)!==0?t===Si:!1}function lg(){var t=G.H;return G.H=Do,t===null?Do:t}function cg(){var t=G.A;return G.A=Ey,t}function cc(){dn=4,Ka||(Dt&4194048)!==Dt&&li.current!==null||(yr=!0),(Qa&134217727)===0&&(zs&134217727)===0||tn===null||es(tn,Dt,fi,!1)}function Jf(t,i,s){var o=Ft;Ft|=2;var u=lg(),h=cg();(tn!==t||Dt!==i)&&(oc=null,br(t,i)),i=!1;var y=dn;e:do try{if(Yt!==0&&Et!==null){var N=Et,Y=ui;switch(Yt){case 8:Qf(),y=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(i=!0);var he=Yt;if(Yt=0,ui=null,Er(t,N,Y,he),s&&yr){y=0;break e}break;default:he=Yt,Yt=0,ui=null,Er(t,N,Y,he)}}wy(),y=dn;break}catch(Se){rg(t,Se)}while(!0);return i&&t.shellSuspendCounter++,ua=Rs=null,Ft=o,G.H=u,G.A=h,Et===null&&(tn=null,Dt=0,Cl()),y}function wy(){for(;Et!==null;)ug(Et)}function Ry(t,i){var s=Ft;Ft|=2;var o=lg(),u=cg();tn!==t||Dt!==i?(oc=null,rc=Ct()+500,br(t,i)):yr=Ie(t,i);e:do try{if(Yt!==0&&Et!==null){i=Et;var h=ui;t:switch(Yt){case 1:Yt=0,ui=null,Er(t,i,h,1);break;case 2:case 9:if(ym(h)){Yt=0,ui=null,fg(i);break}i=function(){Yt!==2&&Yt!==9||tn!==t||(Yt=7),ji(t)},h.then(i,i);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:ym(h)?(Yt=0,ui=null,fg(i)):(Yt=0,ui=null,Er(t,i,h,7));break;case 5:var y=null;switch(Et.tag){case 26:y=Et.memoizedState;case 5:case 27:var N=Et;if(y?Kg(y):N.stateNode.complete){Yt=0,ui=null;var Y=N.sibling;if(Y!==null)Et=Y;else{var he=N.return;he!==null?(Et=he,uc(he)):Et=null}break t}}Yt=0,ui=null,Er(t,i,h,5);break;case 6:Yt=0,ui=null,Er(t,i,h,6);break;case 8:Qf(),dn=6;break e;default:throw Error(a(462))}}Cy();break}catch(Se){rg(t,Se)}while(!0);return ua=Rs=null,G.H=o,G.A=u,Ft=s,Et!==null?0:(tn=null,Dt=0,Cl(),dn)}function Cy(){for(;Et!==null&&!Gt();)ug(Et)}function ug(t){var i=O0(t.alternate,t,ya);t.memoizedProps=t.pendingProps,i===null?uc(t):Et=i}function fg(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=R0(s,i,i.pendingProps,i.type,void 0,Dt);break;case 11:i=R0(s,i,i.pendingProps,i.type.render,i.ref,Dt);break;case 5:df(i);default:I0(s,i),i=Et=cm(i,ya),i=O0(s,i,ya)}t.memoizedProps=t.pendingProps,i===null?uc(t):Et=i}function Er(t,i,s,o){ua=Rs=null,df(i),dr=null,bo=0;var u=i.return;try{if(xy(t,u,i,s,Dt)){dn=1,Ql(t,vi(s,t.current)),Et=null;return}}catch(h){if(u!==null)throw Et=u,h;dn=1,Ql(t,vi(s,t.current)),Et=null;return}i.flags&32768?(Lt||o===1?t=!0:yr||(Dt&536870912)!==0?t=!1:(Ka=t=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),hg(i,t)):uc(i)}function uc(t){var i=t;do{if((i.flags&32768)!==0){hg(i,Ka);return}t=i.return;var s=yy(i.alternate,i,ya);if(s!==null){Et=s;return}if(i=i.sibling,i!==null){Et=i;return}Et=i=t}while(i!==null);dn===0&&(dn=5)}function hg(t,i){do{var s=My(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);dn=6,Et=null}function dg(t,i,s,o,u,h,y,N,Y){t.cancelPendingCommit=null;do fc();while(En!==0);if((Ft&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=Fu,sn(t,s,h,y,N,Y),t===tn&&(Et=tn=null,Dt=0),Sr=i,$a=t,Ma=s,jf=h,Zf=u,ng=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ly(j,function(){return vg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=G.T,G.T=null,u=k.p,k.p=2,y=Ft,Ft|=4;try{Sy(t,i,s)}finally{Ft=y,k.p=u,G.T=o}}En=1,pg(),mg(),gg()}}function pg(){if(En===1){En=0;var t=$a,i=Sr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=G.T,G.T=null;var o=k.p;k.p=2;var u=Ft;Ft|=4;try{j0(i,t);var h=uh,y=em(t.containerInfo),N=h.focusedElem,Y=h.selectionRange;if(y!==N&&N&&N.ownerDocument&&$p(N.ownerDocument.documentElement,N)){if(Y!==null&&Ou(N)){var he=Y.start,Se=Y.end;if(Se===void 0&&(Se=he),"selectionStart"in N)N.selectionStart=he,N.selectionEnd=Math.min(Se,N.value.length);else{var Te=N.ownerDocument||document,ge=Te&&Te.defaultView||window;if(ge.getSelection){var xe=ge.getSelection(),Ke=N.textContent.length,lt=Math.min(Y.start,Ke),$t=Y.end===void 0?lt:Math.min(Y.end,Ke);!xe.extend&&lt>$t&&(y=$t,$t=lt,lt=y);var ae=Jp(N,lt),Z=Jp(N,$t);if(ae&&Z&&(xe.rangeCount!==1||xe.anchorNode!==ae.node||xe.anchorOffset!==ae.offset||xe.focusNode!==Z.node||xe.focusOffset!==Z.offset)){var fe=Te.createRange();fe.setStart(ae.node,ae.offset),xe.removeAllRanges(),lt>$t?(xe.addRange(fe),xe.extend(Z.node,Z.offset)):(fe.setEnd(Z.node,Z.offset),xe.addRange(fe))}}}}for(Te=[],xe=N;xe=xe.parentNode;)xe.nodeType===1&&Te.push({element:xe,left:xe.scrollLeft,top:xe.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Te.length;N++){var Ee=Te[N];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}bc=!!ch,uh=ch=null}finally{Ft=u,k.p=o,G.T=s}}t.current=i,En=2}}function mg(){if(En===2){En=0;var t=$a,i=Sr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=G.T,G.T=null;var o=k.p;k.p=2;var u=Ft;Ft|=4;try{k0(t,i.alternate,i)}finally{Ft=u,k.p=o,G.T=s}}En=3}}function gg(){if(En===4||En===3){En=0,$();var t=$a,i=Sr,s=Ma,o=ng;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,Sr=$a=null,xg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ja=null),oo(s),i=i.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(ve,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=G.T,u=k.p,k.p=2,G.T=null;try{for(var h=t.onRecoverableError,y=0;y<o.length;y++){var N=o[y];h(N.value,{componentStack:N.stack})}}finally{G.T=i,k.p=u}}(Ma&3)!==0&&fc(),ji(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Kf?Go++:(Go=0,Kf=t):Go=0,Ho(0)}}function xg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Mo(i)))}function fc(){return pg(),mg(),gg(),vg()}function vg(){if(En!==5)return!1;var t=$a,i=jf;jf=0;var s=oo(Ma),o=G.T,u=k.p;try{k.p=32>s?32:s,G.T=null,s=Zf,Zf=null;var h=$a,y=Ma;if(En=0,Sr=$a=null,Ma=0,(Ft&6)!==0)throw Error(a(331));var N=Ft;if(Ft|=4,$0(h.current),K0(h,h.current,y,s),Ft=N,Ho(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(ve,h)}catch{}return!0}finally{k.p=u,G.T=o,xg(t,i)}}function _g(t,i,s){i=vi(s,i),i=Rf(t.stateNode,i,2),t=qa(t,i,2),t!==null&&(qe(t,2),ji(t))}function jt(t,i,s){if(t.tag===3)_g(t,t,s);else for(;i!==null;){if(i.tag===3){_g(i,t,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ja===null||!Ja.has(o))){t=vi(s,t),s=y0(2),o=qa(i,s,2),o!==null&&(M0(s,o,i,t),qe(o,2),ji(o));break}}i=i.return}}function $f(t,i,s){var o=t.pingCache;if(o===null){o=t.pingCache=new Ty;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(Wf=!0,u.add(s),t=Ny.bind(null,t,i,s),i.then(t,t))}function Ny(t,i,s){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,tn===t&&(Dt&s)===s&&(dn===4||dn===3&&(Dt&62914560)===Dt&&300>Ct()-sc?(Ft&2)===0&&br(t,0):qf|=s,Mr===Dt&&(Mr=0)),ji(t)}function yg(t,i){i===0&&(i=we()),t=Ts(t,i),t!==null&&(qe(t,i),ji(t))}function Dy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),yg(t,s)}function Uy(t,i){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),yg(t,s)}function Ly(t,i){return wt(t,i)}var hc=null,Tr=null,eh=!1,dc=!1,th=!1,ts=0;function ji(t){t!==Tr&&t.next===null&&(Tr===null?hc=Tr=t:Tr=Tr.next=t),dc=!0,eh||(eh=!0,Py())}function Ho(t,i){if(!th&&dc){th=!0;do for(var s=!1,o=hc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,N=o.pingedLanes;h=(1<<31-ke(42|t)+1)-1,h&=u&~(y&~N),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,Eg(o,h))}else h=Dt,h=be(o,o===tn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ie(o,h)||(s=!0,Eg(o,h));o=o.next}while(s);th=!1}}function Oy(){Mg()}function Mg(){dc=eh=!1;var t=0;ts!==0&&Wy()&&(t=ts);for(var i=Ct(),s=null,o=hc;o!==null;){var u=o.next,h=Sg(o,i);h===0?(o.next=null,s===null?hc=u:s.next=u,u===null&&(Tr=s)):(s=o,(t!==0||(h&3)!==0)&&(dc=!0)),o=u}En!==0&&En!==5||Ho(t),ts!==0&&(ts=0)}function Sg(t,i){for(var s=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-ke(h),N=1<<y,Y=u[y];Y===-1?((N&s)===0||(N&o)!==0)&&(u[y]=Ve(N,i)):Y<=i&&(t.expiredLanes|=N),h&=~N}if(i=tn,s=Dt,s=be(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===i&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Rt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(o!==null&&Rt(o),oo(s)){case 2:case 8:s=S;break;case 32:s=j;break;case 268435456:s=ue;break;default:s=j}return o=bg.bind(null,t),s=wt(s,o),t.callbackPriority=i,t.callbackNode=s,i}return o!==null&&o!==null&&Rt(o),t.callbackPriority=2,t.callbackNode=null,2}function bg(t,i){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(fc()&&t.callbackNode!==s)return null;var o=Dt;return o=be(t,t===tn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(ag(t,o,i),Sg(t,Ct()),t.callbackNode!=null&&t.callbackNode===s?bg.bind(null,t):null)}function Eg(t,i){if(fc())return null;ag(t,i,!0)}function Py(){Yy(function(){(Ft&6)!==0?wt(F,Oy):Mg()})}function nh(){if(ts===0){var t=ur;t===0&&(t=st,st<<=1,(st&261888)===0&&(st=256)),ts=t}return ts}function Tg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ms(""+t)}function Ag(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Iy(t,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var h=Tg((u[Dn]||null).action),y=o.submitter;y&&(i=(i=y[Dn]||null)?Tg(i.formAction):y.getAttribute("formAction"),i!==null&&(h=i,y=null));var N=new Tl("action","action",null,o,u);t.push({event:N,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ts!==0){var Y=y?Ag(u,y):new FormData(u);Sf(s,{pending:!0,data:Y,method:u.method,action:h},null,Y)}}else typeof h=="function"&&(N.preventDefault(),Y=y?Ag(u,y):new FormData(u),Sf(s,{pending:!0,data:Y,method:u.method,action:h},h,Y))},currentTarget:u}]})}}for(var ih=0;ih<Bu.length;ih++){var ah=Bu[ih],zy=ah.toLowerCase(),By=ah[0].toUpperCase()+ah.slice(1);Li(zy,"on"+By)}Li(im,"onAnimationEnd"),Li(am,"onAnimationIteration"),Li(sm,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(ey,"onTransitionRun"),Li(ty,"onTransitionStart"),Li(ny,"onTransitionCancel"),Li(rm,"onTransitionEnd"),me("onMouseEnter",["mouseout","mouseover"]),me("onMouseLeave",["mouseout","mouseover"]),me("onPointerEnter",["pointerout","pointerover"]),me("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function wg(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],u=o.event;o=o.listeners;e:{var h=void 0;if(i)for(var y=o.length-1;0<=y;y--){var N=o[y],Y=N.instance,he=N.currentTarget;if(N=N.listener,Y!==h&&u.isPropagationStopped())break e;h=N,u.currentTarget=he;try{h(u)}catch(Se){Rl(Se)}u.currentTarget=null,h=Y}else for(y=0;y<o.length;y++){if(N=o[y],Y=N.instance,he=N.currentTarget,N=N.listener,Y!==h&&u.isPropagationStopped())break e;h=N,u.currentTarget=he;try{h(u)}catch(Se){Rl(Se)}u.currentTarget=null,h=Y}}}}function Tt(t,i){var s=i[vs];s===void 0&&(s=i[vs]=new Set);var o=t+"__bubble";s.has(o)||(Rg(i,t,2,!1),s.add(o))}function sh(t,i,s){var o=0;i&&(o|=4),Rg(s,t,o,i)}var pc="_reactListening"+Math.random().toString(36).slice(2);function rh(t){if(!t[pc]){t[pc]=!0,Ml.forEach(function(s){s!=="selectionchange"&&(Fy.has(s)||sh(s,!1,t),sh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pc]||(i[pc]=!0,sh("selectionchange",!1,i))}}function Rg(t,i,s,o){switch(ix(i)){case 2:var u=dM;break;case 8:u=pM;break;default:u=Mh}s=u.bind(null,i,s,t),u=void 0,!Tu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function oh(t,i,s,o,u){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var N=o.stateNode.containerInfo;if(N===u)break;if(y===4)for(y=o.return;y!==null;){var Y=y.tag;if((Y===3||Y===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;N!==null;){if(y=aa(N),y===null)return;if(Y=y.tag,Y===5||Y===6||Y===26||Y===27){o=h=y;continue e}N=N.parentNode}}o=o.return}Lp(function(){var he=h,Se=bu(s),Te=[];e:{var ge=om.get(t);if(ge!==void 0){var xe=Tl,Ke=t;switch(t){case"keypress":if(bl(s)===0)break e;case"keydown":case"keyup":xe=U_;break;case"focusin":Ke="focus",xe=Cu;break;case"focusout":Ke="blur",xe=Cu;break;case"beforeblur":case"afterblur":xe=Cu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=P_;break;case im:case am:case sm:xe=b_;break;case rm:xe=z_;break;case"scroll":case"scrollend":xe=v_;break;case"wheel":xe=F_;break;case"copy":case"cut":case"paste":xe=T_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=Bp;break;case"toggle":case"beforetoggle":xe=H_}var lt=(i&4)!==0,$t=!lt&&(t==="scroll"||t==="scrollend"),ae=lt?ge!==null?ge+"Capture":null:ge;lt=[];for(var Z=he,fe;Z!==null;){var Ee=Z;if(fe=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||fe===null||ae===null||(Ee=co(Z,ae),Ee!=null&&lt.push(ko(Z,Ee,fe))),$t)break;Z=Z.return}0<lt.length&&(ge=new xe(ge,Ke,null,s,Se),Te.push({event:ge,listeners:lt}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",xe=t==="mouseout"||t==="pointerout",ge&&s!==Su&&(Ke=s.relatedTarget||s.fromElement)&&(aa(Ke)||Ke[jn]))break e;if((xe||ge)&&(ge=Se.window===Se?Se:(ge=Se.ownerDocument)?ge.defaultView||ge.parentWindow:window,xe?(Ke=s.relatedTarget||s.toElement,xe=he,Ke=Ke?aa(Ke):null,Ke!==null&&($t=c(Ke),lt=Ke.tag,Ke!==$t||lt!==5&&lt!==27&&lt!==6)&&(Ke=null)):(xe=null,Ke=he),xe!==Ke)){if(lt=Ip,Ee="onMouseLeave",ae="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(lt=Bp,Ee="onPointerLeave",ae="onPointerEnter",Z="pointer"),$t=xe==null?ge:ys(xe),fe=Ke==null?ge:ys(Ke),ge=new lt(Ee,Z+"leave",xe,s,Se),ge.target=$t,ge.relatedTarget=fe,Ee=null,aa(Se)===he&&(lt=new lt(ae,Z+"enter",Ke,s,Se),lt.target=fe,lt.relatedTarget=$t,Ee=lt),$t=Ee,xe&&Ke)t:{for(lt=Gy,ae=xe,Z=Ke,fe=0,Ee=ae;Ee;Ee=lt(Ee))fe++;Ee=0;for(var ot=Z;ot;ot=lt(ot))Ee++;for(;0<fe-Ee;)ae=lt(ae),fe--;for(;0<Ee-fe;)Z=lt(Z),Ee--;for(;fe--;){if(ae===Z||Z!==null&&ae===Z.alternate){lt=ae;break t}ae=lt(ae),Z=lt(Z)}lt=null}else lt=null;xe!==null&&Cg(Te,ge,xe,lt,!1),Ke!==null&&$t!==null&&Cg(Te,$t,Ke,lt,!0)}}e:{if(ge=he?ys(he):window,xe=ge.nodeName&&ge.nodeName.toLowerCase(),xe==="select"||xe==="input"&&ge.type==="file")var zt=qp;else if(Xp(ge))if(Yp)zt=Q_;else{zt=Z_;var $e=j_}else xe=ge.nodeName,!xe||xe.toLowerCase()!=="input"||ge.type!=="checkbox"&&ge.type!=="radio"?he&&Ht(he.elementType)&&(zt=qp):zt=K_;if(zt&&(zt=zt(t,he))){Wp(Te,zt,s,Se);break e}$e&&$e(t,ge,he),t==="focusout"&&he&&ge.type==="number"&&he.memoizedProps.value!=null&&bt(ge,"number",ge.value)}switch($e=he?ys(he):window,t){case"focusin":(Xp($e)||$e.contentEditable==="true")&&(nr=$e,Pu=he,vo=null);break;case"focusout":vo=Pu=nr=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,tm(Te,s,Se);break;case"selectionchange":if($_)break;case"keydown":case"keyup":tm(Te,s,Se)}var vt;if(Du)e:{switch(t){case"compositionstart":var Ut="onCompositionStart";break e;case"compositionend":Ut="onCompositionEnd";break e;case"compositionupdate":Ut="onCompositionUpdate";break e}Ut=void 0}else tr?Vp(t,s)&&(Ut="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ut="onCompositionStart");Ut&&(Fp&&s.locale!=="ko"&&(tr||Ut!=="onCompositionStart"?Ut==="onCompositionEnd"&&tr&&(vt=Op()):(Fa=Se,Au="value"in Fa?Fa.value:Fa.textContent,tr=!0)),$e=mc(he,Ut),0<$e.length&&(Ut=new zp(Ut,t,null,s,Se),Te.push({event:Ut,listeners:$e}),vt?Ut.data=vt:(vt=kp(s),vt!==null&&(Ut.data=vt)))),(vt=k_?X_(t,s):W_(t,s))&&(Ut=mc(he,"onBeforeInput"),0<Ut.length&&($e=new zp("onBeforeInput","beforeinput",null,s,Se),Te.push({event:$e,listeners:Ut}),$e.data=vt)),Iy(Te,t,he,s,Se)}wg(Te,i)})}function ko(t,i,s){return{instance:t,listener:i,currentTarget:s}}function mc(t,i){for(var s=i+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=co(t,s),u!=null&&o.unshift(ko(t,u,h)),u=co(t,i),u!=null&&o.push(ko(t,u,h))),t.tag===3)return o;t=t.return}return[]}function Gy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Cg(t,i,s,o,u){for(var h=i._reactName,y=[];s!==null&&s!==o;){var N=s,Y=N.alternate,he=N.stateNode;if(N=N.tag,Y!==null&&Y===o)break;N!==5&&N!==26&&N!==27||he===null||(Y=he,u?(he=co(s,h),he!=null&&y.unshift(ko(s,he,Y))):u||(he=co(s,h),he!=null&&y.push(ko(s,he,Y)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var Hy=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function Ng(t){return(typeof t=="string"?t:""+t).replace(Hy,`
`).replace(Vy,"")}function Dg(t,i){return i=Ng(i),Ng(t)===i}function Jt(t,i,s,o,u,h){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||si(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&si(t,""+o);break;case"className":Ze(t,"class",o);break;case"tabIndex":Ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,s,o);break;case"style":Ui(t,o,h);break;case"data":if(i!=="object"){Ze(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Ms(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Jt(t,i,"name",u.name,u,null),Jt(t,i,"formEncType",u.formEncType,u,null),Jt(t,i,"formMethod",u.formMethod,u,null),Jt(t,i,"formTarget",u.formTarget,u,null)):(Jt(t,i,"encType",u.encType,u,null),Jt(t,i,"method",u.method,u,null),Jt(t,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=Ms(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=ra);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=Ms(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Xi.get(s)||s,Be(t,s,o))}}function lh(t,i,s,o,u,h){switch(s){case"style":Ui(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof o=="string"?si(t,o):(typeof o=="number"||typeof o=="bigint")&&si(t,""+o);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),h=t[Dn]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,o,u);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Be(t,s,o)}}}function Pn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var o=!1,u=!1,h;for(h in s)if(s.hasOwnProperty(h)){var y=s[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(t,i,h,y,s,null)}}u&&Jt(t,i,"srcSet",s.srcSet,s,null),o&&Jt(t,i,"src",s.src,s,null);return;case"input":Tt("invalid",t);var N=h=y=u=null,Y=null,he=null;for(o in s)if(s.hasOwnProperty(o)){var Se=s[o];if(Se!=null)switch(o){case"name":u=Se;break;case"type":y=Se;break;case"checked":Y=Se;break;case"defaultChecked":he=Se;break;case"value":h=Se;break;case"defaultValue":N=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,i));break;default:Jt(t,i,o,Se,s,null)}}Bn(t,h,N,Y,he,y,u,!1);return;case"select":Tt("invalid",t),o=y=h=null;for(u in s)if(s.hasOwnProperty(u)&&(N=s[u],N!=null))switch(u){case"value":h=N;break;case"defaultValue":y=N;break;case"multiple":o=N;default:Jt(t,i,u,N,s,null)}i=h,s=y,t.multiple=!!o,i!=null?bn(t,!!o,i,!1):s!=null&&bn(t,!!o,s,!0);return;case"textarea":Tt("invalid",t),h=u=o=null;for(y in s)if(s.hasOwnProperty(y)&&(N=s[y],N!=null))switch(y){case"value":o=N;break;case"defaultValue":u=N;break;case"children":h=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(91));break;default:Jt(t,i,y,N,s,null)}Di(t,o,u,h);return;case"option":for(Y in s)if(s.hasOwnProperty(Y)&&(o=s[Y],o!=null))switch(Y){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Jt(t,i,Y,o,s,null)}return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(o=0;o<Vo.length;o++)Tt(Vo[o],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(he in s)if(s.hasOwnProperty(he)&&(o=s[he],o!=null))switch(he){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(t,i,he,o,s,null)}return;default:if(Ht(i)){for(Se in s)s.hasOwnProperty(Se)&&(o=s[Se],o!==void 0&&lh(t,i,Se,o,s,void 0));return}}for(N in s)s.hasOwnProperty(N)&&(o=s[N],o!=null&&Jt(t,i,N,o,s,null))}function ky(t,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,N=null,Y=null,he=null,Se=null;for(xe in s){var Te=s[xe];if(s.hasOwnProperty(xe)&&Te!=null)switch(xe){case"checked":break;case"value":break;case"defaultValue":Y=Te;default:o.hasOwnProperty(xe)||Jt(t,i,xe,null,o,Te)}}for(var ge in o){var xe=o[ge];if(Te=s[ge],o.hasOwnProperty(ge)&&(xe!=null||Te!=null))switch(ge){case"type":h=xe;break;case"name":u=xe;break;case"checked":he=xe;break;case"defaultChecked":Se=xe;break;case"value":y=xe;break;case"defaultValue":N=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,i));break;default:xe!==Te&&Jt(t,i,ge,xe,o,Te)}}Xe(t,y,N,Y,he,Se,h,u);return;case"select":xe=y=N=ge=null;for(h in s)if(Y=s[h],s.hasOwnProperty(h)&&Y!=null)switch(h){case"value":break;case"multiple":xe=Y;default:o.hasOwnProperty(h)||Jt(t,i,h,null,o,Y)}for(u in o)if(h=o[u],Y=s[u],o.hasOwnProperty(u)&&(h!=null||Y!=null))switch(u){case"value":ge=h;break;case"defaultValue":N=h;break;case"multiple":y=h;default:h!==Y&&Jt(t,i,u,h,o,Y)}i=N,s=y,o=xe,ge!=null?bn(t,!!s,ge,!1):!!o!=!!s&&(i!=null?bn(t,!!s,i,!0):bn(t,!!s,s?[]:"",!1));return;case"textarea":xe=ge=null;for(N in s)if(u=s[N],s.hasOwnProperty(N)&&u!=null&&!o.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Jt(t,i,N,null,o,u)}for(y in o)if(u=o[y],h=s[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":ge=u;break;case"defaultValue":xe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&Jt(t,i,y,u,o,h)}ai(t,ge,xe);return;case"option":for(var Ke in s)if(ge=s[Ke],s.hasOwnProperty(Ke)&&ge!=null&&!o.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Jt(t,i,Ke,null,o,ge)}for(Y in o)if(ge=o[Y],xe=s[Y],o.hasOwnProperty(Y)&&ge!==xe&&(ge!=null||xe!=null))switch(Y){case"selected":t.selected=ge&&typeof ge!="function"&&typeof ge!="symbol";break;default:Jt(t,i,Y,ge,o,xe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in s)ge=s[lt],s.hasOwnProperty(lt)&&ge!=null&&!o.hasOwnProperty(lt)&&Jt(t,i,lt,null,o,ge);for(he in o)if(ge=o[he],xe=s[he],o.hasOwnProperty(he)&&ge!==xe&&(ge!=null||xe!=null))switch(he){case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:Jt(t,i,he,ge,o,xe)}return;default:if(Ht(i)){for(var $t in s)ge=s[$t],s.hasOwnProperty($t)&&ge!==void 0&&!o.hasOwnProperty($t)&&lh(t,i,$t,void 0,o,ge);for(Se in o)ge=o[Se],xe=s[Se],!o.hasOwnProperty(Se)||ge===xe||ge===void 0&&xe===void 0||lh(t,i,Se,ge,o,xe);return}}for(var ae in s)ge=s[ae],s.hasOwnProperty(ae)&&ge!=null&&!o.hasOwnProperty(ae)&&Jt(t,i,ae,null,o,ge);for(Te in o)ge=o[Te],xe=s[Te],!o.hasOwnProperty(Te)||ge===xe||ge==null&&xe==null||Jt(t,i,Te,ge,o,xe)}function Ug(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],h=u.transferSize,y=u.initiatorType,N=u.duration;if(h&&N&&Ug(y)){for(y=0,N=u.responseEnd,o+=1;o<s.length;o++){var Y=s[o],he=Y.startTime;if(he>N)break;var Se=Y.transferSize,Te=Y.initiatorType;Se&&Ug(Te)&&(Y=Y.responseEnd,y+=Se*(Y<N?1:(N-he)/(Y-he)))}if(--o,i+=8*(h+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ch=null,uh=null;function gc(t){return t.nodeType===9?t:t.ownerDocument}function Lg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Og(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function fh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var hh=null;function Wy(){var t=window.event;return t&&t.type==="popstate"?t===hh?!1:(hh=t,!0):(hh=null,!1)}var Pg=typeof setTimeout=="function"?setTimeout:void 0,qy=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,Yy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(t){return Ig.resolve(null).then(t).catch(jy)}:Pg;function jy(t){setTimeout(function(){throw t})}function ns(t){return t==="head"}function zg(t,i){var s=i,o=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(u),Cr(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")Xo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Xo(s);for(var h=s.firstChild;h;){var y=h.nextSibling,N=h.nodeName;h[Pa]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=y}}else s==="body"&&Xo(t.ownerDocument.body);s=u}while(s);Cr(i)}function Bg(t,i){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function dh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":dh(s),Ia(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Zy(t,i,s,o){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Pa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function Ky(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=bi(t.nextSibling),t===null))return null;return t}function Fg(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=bi(t.nextSibling),t===null))return null;return t}function ph(t){return t.data==="$?"||t.data==="$~"}function mh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qy(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function bi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var gh=null;function Gg(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return bi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Hg(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function Vg(t,i,s){switch(i=gc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Xo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ia(t)}var Ei=new Map,kg=new Set;function xc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Sa=k.d;k.d={f:Jy,r:$y,D:eM,C:tM,L:nM,m:iM,X:sM,S:aM,M:rM};function Jy(){var t=Sa.f(),i=lc();return t||i}function $y(t){var i=sa(t);i!==null&&i.tag===5&&i.type==="form"?r0(i):Sa.r(t)}var Ar=typeof document>"u"?null:document;function Xg(t,i,s){var o=Ar;if(o&&typeof i=="string"&&i){var u=Wt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),kg.has(u)||(kg.add(u),t={rel:t,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Pn(i,"link",t),xn(i),o.head.appendChild(i)))}}function eM(t){Sa.D(t),Xg("dns-prefetch",t,null)}function tM(t,i){Sa.C(t,i),Xg("preconnect",t,i)}function nM(t,i,s){Sa.L(t,i,s);var o=Ar;if(o&&t&&i){var u='link[rel="preload"][as="'+Wt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Wt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Wt(s.imageSizes)+'"]')):u+='[href="'+Wt(t)+'"]';var h=u;switch(i){case"style":h=wr(t);break;case"script":h=Rr(t)}Ei.has(h)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ei.set(h,t),o.querySelector(u)!==null||i==="style"&&o.querySelector(Wo(h))||i==="script"&&o.querySelector(qo(h))||(i=o.createElement("link"),Pn(i,"link",t),xn(i),o.head.appendChild(i)))}}function iM(t,i){Sa.m(t,i);var s=Ar;if(s&&t){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Wt(o)+'"][href="'+Wt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Rr(t)}if(!Ei.has(h)&&(t=v({rel:"modulepreload",href:t},i),Ei.set(h,t),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(qo(h)))return}o=s.createElement("link"),Pn(o,"link",t),xn(o),s.head.appendChild(o)}}}function aM(t,i,s){Sa.S(t,i,s);var o=Ar;if(o&&t){var u=za(o).hoistableStyles,h=wr(t);i=i||"default";var y=u.get(h);if(!y){var N={loading:0,preload:null};if(y=o.querySelector(Wo(h)))N.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ei.get(h))&&xh(t,s);var Y=y=o.createElement("link");xn(Y),Pn(Y,"link",t),Y._p=new Promise(function(he,Se){Y.onload=he,Y.onerror=Se}),Y.addEventListener("load",function(){N.loading|=1}),Y.addEventListener("error",function(){N.loading|=2}),N.loading|=4,vc(y,i,o)}y={type:"stylesheet",instance:y,count:1,state:N},u.set(h,y)}}}function sM(t,i){Sa.X(t,i);var s=Ar;if(s&&t){var o=za(s).hoistableScripts,u=Rr(t),h=o.get(u);h||(h=s.querySelector(qo(u)),h||(t=v({src:t,async:!0},i),(i=Ei.get(u))&&vh(t,i),h=s.createElement("script"),xn(h),Pn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function rM(t,i){Sa.M(t,i);var s=Ar;if(s&&t){var o=za(s).hoistableScripts,u=Rr(t),h=o.get(u);h||(h=s.querySelector(qo(u)),h||(t=v({src:t,async:!0,type:"module"},i),(i=Ei.get(u))&&vh(t,i),h=s.createElement("script"),xn(h),Pn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Wg(t,i,s,o){var u=(u=q.current)?xc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=wr(s.href),s=za(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=wr(s.href);var h=za(u).hoistableStyles,y=h.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=u.querySelector(Wo(t)))&&!h._p&&(y.instance=h,y.state.loading=5),Ei.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ei.set(t,s),h||oM(u,t,s,y.state))),i&&o===null)throw Error(a(528,""));return y}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Rr(s),s=za(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function wr(t){return'href="'+Wt(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function qg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function oM(t,i,s,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Pn(i,"link",s),xn(i),t.head.appendChild(i))}function Rr(t){return'[src="'+Wt(t)+'"]'}function qo(t){return"script[async]"+t}function Yg(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+Wt(s.href)+'"]');if(o)return i.instance=o,xn(o),o;var u=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),xn(o),Pn(o,"style",u),vc(o,s.precedence,t),i.instance=o;case"stylesheet":u=wr(s.href);var h=t.querySelector(Wo(u));if(h)return i.state.loading|=4,i.instance=h,xn(h),h;o=qg(s),(u=Ei.get(u))&&xh(o,u),h=(t.ownerDocument||t).createElement("link"),xn(h);var y=h;return y._p=new Promise(function(N,Y){y.onload=N,y.onerror=Y}),Pn(h,"link",o),i.state.loading|=4,vc(h,s.precedence,t),i.instance=h;case"script":return h=Rr(s.src),(u=t.querySelector(qo(h)))?(i.instance=u,xn(u),u):(o=s,(u=Ei.get(h))&&(o=v({},s),vh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),xn(u),Pn(u,"link",o),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,vc(o,s.precedence,t));return i.instance}function vc(t,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var N=o[y];if(N.dataset.precedence===i)h=N;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function xh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function vh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var _c=null;function jg(t,i,s){if(_c===null){var o=new Map,u=_c=new Map;u.set(s,o)}else u=_c,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var h=s[u];if(!(h[Pa]||h[gn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(i)||"";y=t+y;var N=o.get(y);N?N.push(h):o.set(y,[h])}}return o}function Zg(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function lM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Kg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cM(t,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=wr(o.href),h=i.querySelector(Wo(u));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=yc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,xn(h);return}h=i.ownerDocument||i,o=qg(o),(u=Ei.get(u))&&xh(o,u),h=h.createElement("link"),xn(h);var y=h;y._p=new Promise(function(N,Y){y.onload=N,y.onerror=Y}),Pn(h,"link",o),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=yc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var _h=0;function uM(t,i){return t.stylesheets&&t.count===0&&Sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&_h===0&&(_h=62500*Xy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>_h?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function yc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mc=null;function Sc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mc=new Map,i.forEach(fM,t),Mc=null,yc.call(t))}function fM(t,i){if(!(i.state.loading&4)){var s=Mc.get(t);if(s)var o=s.get(null);else{s=new Map,Mc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),o=y)}o&&s.set(null,o)}u=i.instance,y=u.getAttribute("data-precedence"),h=s.get(y)||o,h===o&&s.set(null,u),s.set(y,u),this.count++,o=yc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var Yo={$$typeof:z,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function hM(t,i,s,o,u,h,y,N,Y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function Qg(t,i,s,o,u,h,y,N,Y,he,Se,Te){return t=new hM(t,i,s,y,Y,he,Se,Te,N),i=1,h===!0&&(i|=24),h=oi(3,null,null,i),t.current=h,h.stateNode=t,i=Qu(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:s,cache:i},tf(h),t}function Jg(t){return t?(t=sr,t):sr}function $g(t,i,s,o,u,h){u=Jg(u),o.context===null?o.context=u:o.pendingContext=u,o=Wa(i),o.payload={element:s},h=h===void 0?null:h,h!==null&&(o.callback=h),s=qa(t,o,i),s!==null&&(ei(s,t,i),To(s,t,i))}function ex(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function yh(t,i){ex(t,i),(t=t.alternate)&&ex(t,i)}function tx(t){if(t.tag===13||t.tag===31){var i=Ts(t,67108864);i!==null&&ei(i,t,67108864),yh(t,67108864)}}function nx(t){if(t.tag===13||t.tag===31){var i=hi();i=ro(i);var s=Ts(t,i);s!==null&&ei(s,t,i),yh(t,i)}}var bc=!0;function dM(t,i,s,o){var u=G.T;G.T=null;var h=k.p;try{k.p=2,Mh(t,i,s,o)}finally{k.p=h,G.T=u}}function pM(t,i,s,o){var u=G.T;G.T=null;var h=k.p;try{k.p=8,Mh(t,i,s,o)}finally{k.p=h,G.T=u}}function Mh(t,i,s,o){if(bc){var u=Sh(o);if(u===null)oh(t,i,o,Ec,s),ax(t,o);else if(gM(u,t,i,s,o))o.stopPropagation();else if(ax(t,o),i&4&&-1<mM.indexOf(t)){for(;u!==null;){var h=sa(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Ne(h.pendingLanes);if(y!==0){var N=h;for(N.pendingLanes|=2,N.entangledLanes|=2;y;){var Y=1<<31-ke(y);N.entanglements[1]|=Y,y&=~Y}ji(h),(Ft&6)===0&&(rc=Ct()+500,Ho(0))}}break;case 31:case 13:N=Ts(h,2),N!==null&&ei(N,h,2),lc(),yh(h,2)}if(h=Sh(o),h===null&&oh(t,i,o,Ec,s),h===u)break;u=h}u!==null&&o.stopPropagation()}else oh(t,i,o,null,s)}}function Sh(t){return t=bu(t),bh(t)}var Ec=null;function bh(t){if(Ec=null,t=aa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ec=t,null}function ix(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case F:return 2;case S:return 8;case j:case Q:return 32;case ue:return 268435456;default:return 32}default:return 32}}var Eh=!1,is=null,as=null,ss=null,jo=new Map,Zo=new Map,rs=[],mM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ax(t,i){switch(t){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(i.pointerId)}}function Ko(t,i,s,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},i!==null&&(i=sa(i),i!==null&&tx(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function gM(t,i,s,o,u){switch(i){case"focusin":return is=Ko(is,t,i,s,o,u),!0;case"dragenter":return as=Ko(as,t,i,s,o,u),!0;case"mouseover":return ss=Ko(ss,t,i,s,o,u),!0;case"pointerover":var h=u.pointerId;return jo.set(h,Ko(jo.get(h)||null,t,i,s,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Zo.set(h,Ko(Zo.get(h)||null,t,i,s,o,u)),!0}return!1}function sx(t){var i=aa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,Js(t.priority,function(){nx(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Js(t.priority,function(){nx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Sh(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);Su=o,s.target.dispatchEvent(o),Su=null}else return i=sa(s),i!==null&&tx(i),t.blockedOn=s,!1;i.shift()}return!0}function rx(t,i,s){Tc(t)&&s.delete(i)}function xM(){Eh=!1,is!==null&&Tc(is)&&(is=null),as!==null&&Tc(as)&&(as=null),ss!==null&&Tc(ss)&&(ss=null),jo.forEach(rx),Zo.forEach(rx)}function Ac(t,i){t.blockedOn===i&&(t.blockedOn=null,Eh||(Eh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xM)))}var wc=null;function ox(t){wc!==t&&(wc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wc===t&&(wc=null);for(var i=0;i<t.length;i+=3){var s=t[i],o=t[i+1],u=t[i+2];if(typeof o!="function"){if(bh(o||s)===null)continue;break}var h=sa(s);h!==null&&(t.splice(i,3),i-=3,Sf(h,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Cr(t){function i(Y){return Ac(Y,t)}is!==null&&Ac(is,t),as!==null&&Ac(as,t),ss!==null&&Ac(ss,t),jo.forEach(i),Zo.forEach(i);for(var s=0;s<rs.length;s++){var o=rs[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<rs.length&&(s=rs[0],s.blockedOn===null);)sx(s),s.blockedOn===null&&rs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],h=s[o+1],y=u[Dn]||null;if(typeof h=="function")y||ox(s);else if(y){var N=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[Dn]||null)N=y.formAction;else if(bh(u)!==null)continue}else N=y.action;typeof N=="function"?s[o+1]=N:(s.splice(o,3),o-=3),ox(s)}}}function lx(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Th(t){this._internalRoot=t}Rc.prototype.render=Th.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=hi();$g(s,o,t,i,null,null)},Rc.prototype.unmount=Th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;$g(t.current,2,null,t,null,null),lc(),i[jn]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var i=lo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<rs.length&&i!==0&&i<rs[s].priority;s++);rs.splice(s,0,t),s===0&&sx(t)}};var cx=e.version;if(cx!=="19.2.8")throw Error(a(527,cx,"19.2.8"));k.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var vM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{ve=Cc.inject(vM),Me=Cc}catch{}}return Jo.createRoot=function(t,i){if(!l(t))throw Error(a(299));var s=!1,o="",u=g0,h=x0,y=v0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=Qg(t,1,!1,null,null,s,o,null,u,h,y,lx),t[jn]=i.current,rh(t),new Th(i)},Jo.hydrateRoot=function(t,i,s){if(!l(t))throw Error(a(299));var o=!1,u="",h=g0,y=x0,N=v0,Y=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(N=s.onRecoverableError),s.formState!==void 0&&(Y=s.formState)),i=Qg(t,1,!0,i,s??null,o,u,Y,h,y,N,lx),i.context=Jg(null),s=i.current,o=hi(),o=ro(o),u=Wa(o),u.callback=null,qa(s,u,o),s=o,i.current.lanes=s,qe(i,s),ji(i),t[jn]=i.current,rh(t),new Rc(i)},Jo.version="19.2.8",Jo}var _x;function NM(){if(_x)return Rh.exports;_x=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Rh.exports=CM(),Rh.exports}var DM=NM();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sp="185",UM=0,yx=1,LM=2,tu=1,Av=2,ll=3,gs=0,ti=1,Ri=2,Na=0,jr=1,Mx=2,Sx=3,bx=4,OM=5,ks=100,PM=101,IM=102,zM=103,BM=104,FM=200,GM=201,HM=202,VM=203,dd=204,pd=205,kM=206,XM=207,WM=208,qM=209,YM=210,jM=211,ZM=212,KM=213,QM=214,md=0,gd=1,xd=2,Qr=3,vd=4,_d=5,yd=6,Md=7,wv=0,JM=1,$M=2,ea=0,Rv=1,Cv=2,Nv=3,Dv=4,Uv=5,Lv=6,Ov=7,Pv=300,Zs=301,Jr=302,Uh=303,Lh=304,xu=306,Sd=1e3,Ca=1001,bd=1002,In=1003,eS=1004,Nc=1005,Nn=1006,Oh=1007,qs=1008,mi=1009,Iv=1010,zv=1011,hl=1012,rp=1013,na=1014,Ji=1015,La=1016,op=1017,lp=1018,dl=1020,Bv=35902,Fv=35899,Gv=1021,Hv=1022,Gi=1023,Oa=1026,Ys=1027,Vv=1028,cp=1029,Ks=1030,up=1031,fp=1033,nu=33776,iu=33777,au=33778,su=33779,Ed=35840,Td=35841,Ad=35842,wd=35843,Rd=36196,Cd=37492,Nd=37496,Dd=37488,Ud=37489,ou=37490,Ld=37491,Od=37808,Pd=37809,Id=37810,zd=37811,Bd=37812,Fd=37813,Gd=37814,Hd=37815,Vd=37816,kd=37817,Xd=37818,Wd=37819,qd=37820,Yd=37821,jd=36492,Zd=36494,Kd=36495,Qd=36283,Jd=36284,lu=36285,$d=36286,tS=3200,ep=0,nS=1,ps="",Ai="srgb",cu="srgb-linear",uu="linear",Zt="srgb",Nr=7680,Ex=519,iS=512,aS=513,sS=514,hp=515,rS=516,oS=517,dp=518,lS=519,tp=35044,Tx="300 es",$i=2e3,pl=2001;function cS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uS(){const r=fu("canvas");return r.style.display="block",r}const Ax={};function hu(...r){const e="THREE."+r.shift();console.log(e,...r)}function kv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ut(...r){r=kv(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function Pt(...r){r=kv(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function Zr(...r){const e=r.join(" ");e in Ax||(Ax[e]=!0,ut(...r))}function fS(r,e,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const hS={[md]:gd,[xd]:yd,[vd]:Md,[Qr]:_d,[gd]:md,[yd]:xd,[Md]:vd,[_d]:Qr};class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wx=1234567;const ul=Math.PI/180,ml=180/Math.PI;function Da(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[a&255]+Gn[a>>8&255]+Gn[a>>16&255]+Gn[a>>24&255]).toLowerCase()}function At(r,e,n){return Math.max(e,Math.min(n,r))}function pp(r,e){return(r%e+e)%e}function dS(r,e,n,a,l){return a+(r-e)*(l-a)/(n-e)}function pS(r,e,n){return r!==e?(n-r)/(e-r):0}function fl(r,e,n){return(1-n)*r+n*e}function mS(r,e,n,a){return fl(r,e,1-Math.exp(-n*a))}function gS(r,e=1){return e-Math.abs(pp(r,e*2)-e)}function xS(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function vS(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function _S(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yS(r,e){return r+Math.random()*(e-r)}function MS(r){return r*(.5-Math.random())}function SS(r){r!==void 0&&(wx=r);let e=wx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bS(r){return r*ul}function ES(r){return r*ml}function TS(r){return(r&r-1)===0&&r!==0}function AS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function RS(r,e,n,a,l){const c=Math.cos,f=Math.sin,d=c(n/2),p=f(n/2),m=c((e+a)/2),g=f((e+a)/2),v=c((e-a)/2),x=f((e-a)/2),E=c((a-e)/2),A=f((a-e)/2);switch(l){case"XYX":r.set(d*g,p*v,p*x,d*m);break;case"YZY":r.set(p*x,d*g,p*v,d*m);break;case"ZXZ":r.set(p*v,p*x,d*g,d*m);break;case"XZX":r.set(d*g,p*A,p*E,d*m);break;case"YXY":r.set(p*E,d*g,p*A,d*m);break;case"ZYZ":r.set(p*A,p*E,d*g,d*m);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Fi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ba={DEG2RAD:ul,RAD2DEG:ml,generateUUID:Da,clamp:At,euclideanModulo:pp,mapLinear:dS,inverseLerp:pS,lerp:fl,damp:mS,pingpong:gS,smoothstep:xS,smootherstep:vS,randInt:_S,randFloat:yS,randFloatSpread:MS,seededRandom:SS,degToRad:bS,radToDeg:ES,isPowerOfTwo:TS,ceilPowerOfTwo:AS,floorPowerOfTwo:wS,setQuaternionFromProperEuler:RS,normalize:Kt,denormalize:Fi},wp=class wp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wp.prototype.isVector2=!0;let dt=wp;class no{constructor(e=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=l}static slerpFlat(e,n,a,l,c,f,d){let p=a[l+0],m=a[l+1],g=a[l+2],v=a[l+3],x=c[f+0],E=c[f+1],A=c[f+2],L=c[f+3];if(v!==L||p!==x||m!==E||g!==A){let M=p*x+m*E+g*A+v*L;M<0&&(x=-x,E=-E,A=-A,L=-L,M=-M);let _=1-d;if(M<.9995){const I=Math.acos(M),z=Math.sin(I);_=Math.sin(_*I)/z,d=Math.sin(d*I)/z,p=p*_+x*d,m=m*_+E*d,g=g*_+A*d,v=v*_+L*d}else{p=p*_+x*d,m=m*_+E*d,g=g*_+A*d,v=v*_+L*d;const I=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=I,m*=I,g*=I,v*=I}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,l,c,f){const d=a[l],p=a[l+1],m=a[l+2],g=a[l+3],v=c[f],x=c[f+1],E=c[f+2],A=c[f+3];return e[n]=d*A+g*v+p*E-m*x,e[n+1]=p*A+g*x+m*v-d*E,e[n+2]=m*A+g*E+d*x-p*v,e[n+3]=g*A-d*v-p*x-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,l){return this._x=e,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(a/2),g=d(l/2),v=d(c/2),x=p(a/2),E=p(l/2),A=p(c/2);switch(f){case"XYZ":this._x=x*g*v+m*E*A,this._y=m*E*v-x*g*A,this._z=m*g*A+x*E*v,this._w=m*g*v-x*E*A;break;case"YXZ":this._x=x*g*v+m*E*A,this._y=m*E*v-x*g*A,this._z=m*g*A-x*E*v,this._w=m*g*v+x*E*A;break;case"ZXY":this._x=x*g*v-m*E*A,this._y=m*E*v+x*g*A,this._z=m*g*A+x*E*v,this._w=m*g*v-x*E*A;break;case"ZYX":this._x=x*g*v-m*E*A,this._y=m*E*v+x*g*A,this._z=m*g*A-x*E*v,this._w=m*g*v+x*E*A;break;case"YZX":this._x=x*g*v+m*E*A,this._y=m*E*v+x*g*A,this._z=m*g*A-x*E*v,this._w=m*g*v-x*E*A;break;case"XZY":this._x=x*g*v-m*E*A,this._y=m*E*v-x*g*A,this._z=m*g*A+x*E*v,this._w=m*g*v+x*E*A;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],l=n[4],c=n[8],f=n[1],d=n[5],p=n[9],m=n[2],g=n[6],v=n[10],x=a+d+v;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(g-p)*E,this._y=(c-m)*E,this._z=(f-l)*E}else if(a>d&&a>v){const E=2*Math.sqrt(1+a-d-v);this._w=(g-p)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+m)/E}else if(d>v){const E=2*Math.sqrt(1+d-a-v);this._w=(c-m)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(p+g)/E}else{const E=2*Math.sqrt(1+v-a-d);this._w=(f-l)/E,this._x=(c+m)/E,this._y=(p+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,l=e._y,c=e._z,f=e._w,d=n._x,p=n._y,m=n._z,g=n._w;return this._x=a*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-a*m,this._z=c*g+f*m+a*p-l*d,this._w=f*g-a*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,n){let a=e._x,l=e._y,c=e._z,f=e._w,d=this.dot(e);d<0&&(a=-a,l=-l,c=-c,f=-f,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),g=Math.sin(m);p=Math.sin(p*m)/g,n=Math.sin(n*m)/g,this._x=this._x*p+a*n,this._y=this._y*p+l*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+l*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rp=class Rp{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const n=this.x,a=this.y,l=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*l-d*a),g=2*(d*n-c*l),v=2*(c*a-f*n);return this.x=n+p*m+f*v-d*g,this.y=a+p*g+d*m-c*v,this.z=l+p*v+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,l=e.y,c=e.z,f=n.x,d=n.y,p=n.z;return this.x=l*p-c*d,this.y=c*f-a*p,this.z=a*d-l*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Ph.copy(this).projectOnVector(e),this.sub(Ph)}reflect(e){return this.sub(Ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return n*n+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const l=Math.sin(n)*e;return this.x=l*Math.sin(a),this.y=Math.cos(n)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rp.prototype.isVector3=!0;let te=Rp;const Ph=new te,Rx=new no,Cp=class Cp{constructor(e,n,a,l,c,f,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,l,c,f,d,p,m)}set(e,n,a,l,c,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,l=n.elements,c=this.elements,f=a[0],d=a[3],p=a[6],m=a[1],g=a[4],v=a[7],x=a[2],E=a[5],A=a[8],L=l[0],M=l[3],_=l[6],I=l[1],z=l[4],w=l[7],P=l[2],U=l[5],O=l[8];return c[0]=f*L+d*I+p*P,c[3]=f*M+d*z+p*U,c[6]=f*_+d*w+p*O,c[1]=m*L+g*I+v*P,c[4]=m*M+g*z+v*U,c[7]=m*_+g*w+v*O,c[2]=x*L+E*I+A*P,c[5]=x*M+E*z+A*U,c[8]=x*_+E*w+A*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return n*f*g-n*d*m-a*c*g+a*d*p+l*c*m-l*f*p}invert(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*f-d*m,x=d*p-g*c,E=m*c-f*p,A=n*v+a*x+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=v*L,e[1]=(l*m-g*a)*L,e[2]=(d*a-l*f)*L,e[3]=x*L,e[4]=(g*n-l*p)*L,e[5]=(l*c-d*n)*L,e[6]=E*L,e[7]=(a*p-m*n)*L,e[8]=(f*n-a*c)*L,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*f+m*d)+f+e,-l*m,l*p,-l*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return Zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ih.makeScale(e,n)),this}rotate(e){return Zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ih.makeRotation(-e)),this}translate(e,n){return Zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ih.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cp.prototype.isMatrix3=!0;let mt=Cp;const Ih=new mt,Cx=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nx=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CS(){const r={enabled:!0,workingColorSpace:cu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Zt&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Zt&&(l.r=Kr(l.r),l.g=Kr(l.g),l.b=Kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ps?uu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[cu]:{primaries:e,whitePoint:a,transfer:uu,toXYZ:Cx,fromXYZ:Nx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:a,transfer:Zt,toXYZ:Cx,fromXYZ:Nx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),r}const Ot=CS();function Ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class NS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Dr===void 0&&(Dr=fu("canvas")),Dr.width=e.width,Dr.height=e.height;const l=Dr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=Dr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fu("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ua(c[f]/255)*255;return a.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ua(n[a]/255)*255):n[a]=Ua(n[a]);return{data:n,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DS=0;class mp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(zh(l[f].image)):c.push(zh(l[f]))}else c=zh(l);a.url=c}return n||(e.images[this.uuid]=a),a}}function zh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?NS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let US=0;const Bh=new te;class Vn extends Qs{constructor(e=Vn.DEFAULT_IMAGE,n=Vn.DEFAULT_MAPPING,a=Ca,l=Ca,c=Nn,f=qs,d=Gi,p=mi,m=Vn.DEFAULT_ANISOTROPY,g=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Da(),this.name="",this.source=new mp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bh).x}get height(){return this.source.getSize(Bh).y}get depth(){return this.source.getSize(Bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ut(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case Ca:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case Ca:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Pv;Vn.DEFAULT_ANISOTROPY=1;const Np=class Np{constructor(e=0,n=0,a=0,l=1){this.x=e,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,l){return this.x=e,this.y=n,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,l,c;const p=e.elements,m=p[0],g=p[4],v=p[8],x=p[1],E=p[5],A=p[9],L=p[2],M=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-L)<.01&&Math.abs(A-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+L)<.1&&Math.abs(A+M)<.1&&Math.abs(m+E+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const z=(m+1)/2,w=(E+1)/2,P=(_+1)/2,U=(g+x)/4,O=(v+L)/4,b=(A+M)/4;return z>w&&z>P?z<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(z),l=U/a,c=O/a):w>P?w<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),a=U/l,c=b/l):P<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),a=O/c,l=b/c),this.set(a,l,c,n),this}let I=Math.sqrt((M-A)*(M-A)+(v-L)*(v-L)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(M-A)/I,this.y=(v-L)/I,this.z=(x-g)/I,this.w=Math.acos((m+E+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this.w=At(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this.w=At(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Np.prototype.isVector4=!0;let un=Np;class LS extends Qs{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new un(0,0,e,n),this.scissorTest=!1,this.viewport=new un(0,0,e,n),this.textures=[];const l={width:e,height:n,depth:a.depth},c=new Vn(l),f=a.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new mp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ta extends LS{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Xv extends Vn{constructor(e=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OS extends Vn{constructor(e=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gu=class gu{constructor(e,n,a,l,c,f,d,p,m,g,v,x,E,A,L,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,l,c,f,d,p,m,g,v,x,E,A,L,M)}set(e,n,a,l,c,f,d,p,m,g,v,x,E,A,L,M){const _=this.elements;return _[0]=e,_[4]=n,_[8]=a,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=E,_[7]=A,_[11]=L,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gu().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,l=1/Ur.setFromMatrixColumn(e,0).length(),c=1/Ur.setFromMatrixColumn(e,1).length(),f=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),d=Math.sin(a),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=f*g,E=f*v,A=d*g,L=d*v;n[0]=p*g,n[4]=-p*v,n[8]=m,n[1]=E+A*m,n[5]=x-L*m,n[9]=-d*p,n[2]=L-x*m,n[6]=A+E*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*g,E=p*v,A=m*g,L=m*v;n[0]=x+L*d,n[4]=A*d-E,n[8]=f*m,n[1]=f*v,n[5]=f*g,n[9]=-d,n[2]=E*d-A,n[6]=L+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*g,E=p*v,A=m*g,L=m*v;n[0]=x-L*d,n[4]=-f*v,n[8]=A+E*d,n[1]=E+A*d,n[5]=f*g,n[9]=L-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*g,E=f*v,A=d*g,L=d*v;n[0]=p*g,n[4]=A*m-E,n[8]=x*m+L,n[1]=p*v,n[5]=L*m+x,n[9]=E*m-A,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,E=f*m,A=d*p,L=d*m;n[0]=p*g,n[4]=L-x*v,n[8]=A*v+E,n[1]=v,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=E*v+A,n[10]=x-L*v}else if(e.order==="XZY"){const x=f*p,E=f*m,A=d*p,L=d*m;n[0]=p*g,n[4]=-v,n[8]=m*g,n[1]=x*v+L,n[5]=f*g,n[9]=E*v-A,n[2]=A*v-E,n[6]=d*g,n[10]=L*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PS,e,IS)}lookAt(e,n,a){const l=this.elements;return di.subVectors(e,n),di.lengthSq()===0&&(di.z=1),di.normalize(),ls.crossVectors(a,di),ls.lengthSq()===0&&(Math.abs(a.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ls.crossVectors(a,di)),ls.normalize(),Dc.crossVectors(di,ls),l[0]=ls.x,l[4]=Dc.x,l[8]=di.x,l[1]=ls.y,l[5]=Dc.y,l[9]=di.y,l[2]=ls.z,l[6]=Dc.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,l=n.elements,c=this.elements,f=a[0],d=a[4],p=a[8],m=a[12],g=a[1],v=a[5],x=a[9],E=a[13],A=a[2],L=a[6],M=a[10],_=a[14],I=a[3],z=a[7],w=a[11],P=a[15],U=l[0],O=l[4],b=l[8],D=l[12],B=l[1],H=l[5],W=l[9],ne=l[13],le=l[2],K=l[6],G=l[10],k=l[14],ie=l[3],_e=l[7],V=l[11],T=l[15];return c[0]=f*U+d*B+p*le+m*ie,c[4]=f*O+d*H+p*K+m*_e,c[8]=f*b+d*W+p*G+m*V,c[12]=f*D+d*ne+p*k+m*T,c[1]=g*U+v*B+x*le+E*ie,c[5]=g*O+v*H+x*K+E*_e,c[9]=g*b+v*W+x*G+E*V,c[13]=g*D+v*ne+x*k+E*T,c[2]=A*U+L*B+M*le+_*ie,c[6]=A*O+L*H+M*K+_*_e,c[10]=A*b+L*W+M*G+_*V,c[14]=A*D+L*ne+M*k+_*T,c[3]=I*U+z*B+w*le+P*ie,c[7]=I*O+z*H+w*K+P*_e,c[11]=I*b+z*W+w*G+P*V,c[15]=I*D+z*ne+w*k+P*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],l=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],x=e[10],E=e[14],A=e[3],L=e[7],M=e[11],_=e[15],I=p*E-m*x,z=d*E-m*v,w=d*x-p*v,P=f*E-m*g,U=f*x-p*g,O=f*v-d*g;return n*(L*I-M*z+_*w)-a*(A*I-M*P+_*U)+l*(A*z-L*P+_*O)-c*(A*w-L*U+M*O)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],l=e[8],c=e[1],f=e[5],d=e[9],p=e[2],m=e[6],g=e[10];return n*(f*g-d*m)-a*(c*g-d*p)+l*(c*m-f*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],x=e[10],E=e[11],A=e[12],L=e[13],M=e[14],_=e[15],I=n*d-a*f,z=n*p-l*f,w=n*m-c*f,P=a*p-l*d,U=a*m-c*d,O=l*m-c*p,b=g*L-v*A,D=g*M-x*A,B=g*_-E*A,H=v*M-x*L,W=v*_-E*L,ne=x*_-E*M,le=I*ne-z*W+w*H+P*B-U*D+O*b;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/le;return e[0]=(d*ne-p*W+m*H)*K,e[1]=(l*W-a*ne-c*H)*K,e[2]=(L*O-M*U+_*P)*K,e[3]=(x*U-v*O-E*P)*K,e[4]=(p*B-f*ne-m*D)*K,e[5]=(n*ne-l*B+c*D)*K,e[6]=(M*w-A*O-_*z)*K,e[7]=(g*O-x*w+E*z)*K,e[8]=(f*W-d*B+m*b)*K,e[9]=(a*B-n*W-c*b)*K,e[10]=(A*U-L*w+_*I)*K,e[11]=(v*w-g*U-E*I)*K,e[12]=(d*D-f*H-p*b)*K,e[13]=(n*H-a*D+l*b)*K,e[14]=(L*z-A*P-M*I)*K,e[15]=(g*P-v*z+x*I)*K,this}scale(e){const n=this.elements,a=e.x,l=e.y,c=e.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,f=e.x,d=e.y,p=e.z,m=c*f,g=c*d;return this.set(m*f+a,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+a,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,n,l,1,0,0,0,0,1),this}compose(e,n,a){const l=this.elements,c=n._x,f=n._y,d=n._z,p=n._w,m=c+c,g=f+f,v=d+d,x=c*m,E=c*g,A=c*v,L=f*g,M=f*v,_=d*v,I=p*m,z=p*g,w=p*v,P=a.x,U=a.y,O=a.z;return l[0]=(1-(L+_))*P,l[1]=(E+w)*P,l[2]=(A-z)*P,l[3]=0,l[4]=(E-w)*U,l[5]=(1-(x+_))*U,l[6]=(M+I)*U,l[7]=0,l[8]=(A+z)*O,l[9]=(M-I)*O,l[10]=(1-(x+L))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let f=Ur.set(l[0],l[1],l[2]).length();const d=Ur.set(l[4],l[5],l[6]).length(),p=Ur.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ii.copy(this);const m=1/f,g=1/d,v=1/p;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,n.setFromRotationMatrix(Ii),a.x=f,a.y=d,a.z=p,this}makePerspective(e,n,a,l,c,f,d=$i,p=!1){const m=this.elements,g=2*c/(n-e),v=2*c/(a-l),x=(n+e)/(n-e),E=(a+l)/(a-l);let A,L;if(p)A=c/(f-c),L=f*c/(f-c);else if(d===$i)A=-(f+c)/(f-c),L=-2*f*c/(f-c);else if(d===pl)A=-f/(f-c),L=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=v,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=L,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,a,l,c,f,d=$i,p=!1){const m=this.elements,g=2/(n-e),v=2/(a-l),x=-(n+e)/(n-e),E=-(a+l)/(a-l);let A,L;if(p)A=1/(f-c),L=f/(f-c);else if(d===$i)A=-2/(f-c),L=-(f+c)/(f-c);else if(d===pl)A=-1/(f-c),L=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=v,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=A,m[14]=L,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};gu.prototype.isMatrix4=!0;let fn=gu;const Ur=new te,Ii=new fn,PS=new te(0,0,0),IS=new te(1,1,1),ls=new te,Dc=new te,di=new te,Dx=new fn,Ux=new no;class xs{constructor(e=0,n=0,a=0,l=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,l=this._order){return this._x=e,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],x=l[6],E=l[10];switch(n){case"XYZ":this._y=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Dx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dx,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ux.setFromEuler(this),this.setFromQuaternion(Ux,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class Wv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zS=0;const Lx=new te,Lr=new no,Ea=new fn,Uc=new te,$o=new te,BS=new te,FS=new no,Ox=new te(1,0,0),Px=new te(0,1,0),Ix=new te(0,0,1),zx={type:"added"},GS={type:"removed"},Or={type:"childadded",child:null},Fh={type:"childremoved",child:null};class zn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new te,n=new xs,a=new no,l=new te(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new mt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Ox,e)}rotateY(e){return this.rotateOnAxis(Px,e)}rotateZ(e){return this.rotateOnAxis(Ix,e)}translateOnAxis(e,n){return Lx.copy(e).applyQuaternion(this.quaternion),this.position.add(Lx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ox,e)}translateY(e){return this.translateOnAxis(Px,e)}translateZ(e){return this.translateOnAxis(Ix,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Uc.copy(e):Uc.set(e,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt($o,Uc,this.up):Ea.lookAt(Uc,$o,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Lr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zx),Or.child=e,this.dispatchEvent(Or),Or.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GS),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zx),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,BS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,FS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*l,c[13]+=a-c[1]*n-c[5]*a-c[9]*l,c[14]+=l-c[2]*n-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),E=f(e.animations),A=f(e.nodes);d.length>0&&(a.geometries=d),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),x.length>0&&(a.skeletons=x),E.length>0&&(a.animations=E),A.length>0&&(a.nodes=A)}return a.object=l,a;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}zn.DEFAULT_UP=new te(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gi extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HS={type:"move"};class Gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const L of e.hand.values()){const M=n.getJointPose(L,a),_=this._getHandJoint(m,L);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),E=.02,A=.005;m.inputState.pinching&&x>E+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=E-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(l=n.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(HS)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new gi;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Hh(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class ct{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,n),this}setRGB(e,n,a,l=Ot.workingColorSpace){return this.r=e,this.g=n,this.b=a,Ot.colorSpaceToWorking(this,l),this}setHSL(e,n,a,l=Ot.workingColorSpace){if(e=pp(e,1),n=At(n,0,1),a=At(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=Hh(f,c,e+1/3),this.g=Hh(f,c,e),this.b=Hh(f,c,e-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(e,n=Ai){function a(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ai){const a=qv[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return Ot.workingToColorSpace(Hn.copy(this),e),Math.round(At(Hn.r*255,0,255))*65536+Math.round(At(Hn.g*255,0,255))*256+Math.round(At(Hn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ot.workingColorSpace){Ot.workingToColorSpace(Hn.copy(this),n);const a=Hn.r,l=Hn.g,c=Hn.b,f=Math.max(a,l,c),d=Math.min(a,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=g<=.5?v/(f+d):v/(2-f-d),f){case a:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-a)/v+2;break;case c:p=(a-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Ot.workingColorSpace){return Ot.workingToColorSpace(Hn.copy(this),n),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ai){Ot.workingToColorSpace(Hn.copy(this),e);const n=Hn.r,a=Hn.g,l=Hn.b;return e!==Ai?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,n,a){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+n,cs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(cs),e.getHSL(Lc);const a=fl(cs.h,Lc.h,n),l=fl(cs.s,Lc.s,n),c=fl(cs.l,Lc.l,n);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new ct;ct.NAMES=qv;class Xs{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(e),this.density=n}clone(){return new Xs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class VS extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zi=new te,Ta=new te,Vh=new te,Aa=new te,Pr=new te,Ir=new te,Bx=new te,kh=new te,Xh=new te,Wh=new te,qh=new un,Yh=new un,jh=new un;class Ci{constructor(e=new te,n=new te,a=new te){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,l){l.subVectors(a,n),zi.subVectors(e,n),l.cross(zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,a,l,c){zi.subVectors(l,n),Ta.subVectors(a,n),Vh.subVectors(e,n);const f=zi.dot(zi),d=zi.dot(Ta),p=zi.dot(Vh),m=Ta.dot(Ta),g=Ta.dot(Vh),v=f*m-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,E=(m*p-d*g)*x,A=(f*g-d*p)*x;return c.set(1-E-A,A,E)}static containsPoint(e,n,a,l){return this.getBarycoord(e,n,a,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(e,n,a,l,c,f,d,p){return this.getBarycoord(e,n,a,l,Aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Aa.x),p.addScaledVector(f,Aa.y),p.addScaledVector(d,Aa.z),p)}static getInterpolatedAttribute(e,n,a,l,c,f){return qh.setScalar(0),Yh.setScalar(0),jh.setScalar(0),qh.fromBufferAttribute(e,n),Yh.fromBufferAttribute(e,a),jh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(qh,c.x),f.addScaledVector(Yh,c.y),f.addScaledVector(jh,c.z),f}static isFrontFacing(e,n,a,l){return zi.subVectors(a,n),Ta.subVectors(e,n),zi.cross(Ta).dot(l)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,l){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,a,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),zi.cross(Ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,n,a,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,l=this.b,c=this.c;let f,d;Pr.subVectors(l,a),Ir.subVectors(c,a),kh.subVectors(e,a);const p=Pr.dot(kh),m=Ir.dot(kh);if(p<=0&&m<=0)return n.copy(a);Xh.subVectors(e,l);const g=Pr.dot(Xh),v=Ir.dot(Xh);if(g>=0&&v<=g)return n.copy(l);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(a).addScaledVector(Pr,f);Wh.subVectors(e,c);const E=Pr.dot(Wh),A=Ir.dot(Wh);if(A>=0&&E<=A)return n.copy(c);const L=E*m-p*A;if(L<=0&&m>=0&&A<=0)return d=m/(m-A),n.copy(a).addScaledVector(Ir,d);const M=g*A-E*v;if(M<=0&&v-g>=0&&E-A>=0)return Bx.subVectors(c,l),d=(v-g)/(v-g+(E-A)),n.copy(l).addScaledVector(Bx,d);const _=1/(M+L+x);return f=L*_,d=x*_,n.copy(a).addScaledVector(Pr,f).addScaledVector(Ir,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xl{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Bi):Bi.fromBufferAttribute(c,f),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Oc.copy(a.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Pc.subVectors(this.max,el),zr.subVectors(e.a,el),Br.subVectors(e.b,el),Fr.subVectors(e.c,el),us.subVectors(Br,zr),fs.subVectors(Fr,Br),Bs.subVectors(zr,Fr);let n=[0,-us.z,us.y,0,-fs.z,fs.y,0,-Bs.z,Bs.y,us.z,0,-us.x,fs.z,0,-fs.x,Bs.z,0,-Bs.x,-us.y,us.x,0,-fs.y,fs.x,0,-Bs.y,Bs.x,0];return!Zh(n,zr,Br,Fr,Pc)||(n=[1,0,0,0,1,0,0,0,1],!Zh(n,zr,Br,Fr,Pc))?!1:(Ic.crossVectors(us,fs),n=[Ic.x,Ic.y,Ic.z],Zh(n,zr,Br,Fr,Pc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new te,new te,new te,new te,new te,new te,new te,new te],Bi=new te,Oc=new xl,zr=new te,Br=new te,Fr=new te,us=new te,fs=new te,Bs=new te,el=new te,Pc=new te,Ic=new te,Fs=new te;function Zh(r,e,n,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){Fs.fromArray(r,c);const d=l.x*Math.abs(Fs.x)+l.y*Math.abs(Fs.y)+l.z*Math.abs(Fs.z),p=e.dot(Fs),m=n.dot(Fs),g=a.dot(Fs);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const Sn=new te,zc=new dt;let kS=0;class Hi extends Qs{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=tp,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)zc.fromBufferAttribute(this,n),zc.applyMatrix3(e),this.setXY(n,zc.x,zc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Fi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Kt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),a=Kt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,l){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),a=Kt(a,this.array),l=Kt(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,n,a,l,c){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),a=Kt(a,this.array),l=Kt(l,this.array),c=Kt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Yv extends Hi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class jv extends Hi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class cn extends Hi{constructor(e,n,a){super(new Float32Array(e),n,a)}}const XS=new xl,tl=new te,Kh=new te;class gp{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):XS.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const n=tl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(tl,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(Kh)),this.expandByPoint(tl.copy(e.center).sub(Kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let WS=0;const Ti=new fn,Qh=new zn,Gr=new te,pi=new xl,nl=new xl,Rn=new te;class Yn extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cS(e)?jv:Yv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new mt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,n,a){return Ti.makeTranslation(e,n,a),this.applyMatrix4(Ti),this}scale(e,n,a){return Ti.makeScale(e,n,a),this.applyMatrix4(Ti),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new cn(a,3))}else{const a=Math.min(e.length,n.count);for(let l=0;l<a;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const a=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(pi.min,nl.min),pi.expandByPoint(Rn),Rn.addVectors(pi.max,nl.max),pi.expandByPoint(Rn)):(pi.expandByPoint(nl.min),pi.expandByPoint(nl.max))}pi.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)Rn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(Rn));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Rn.fromBufferAttribute(d,m),p&&(Gr.fromBufferAttribute(e,m),Rn.add(Gr)),l=Math.max(l,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==a.count)&&(f=new Hi(new Float32Array(4*a.count),4),this.setAttribute("tangent",f));const d=[],p=[];for(let b=0;b<a.count;b++)d[b]=new te,p[b]=new te;const m=new te,g=new te,v=new te,x=new dt,E=new dt,A=new dt,L=new te,M=new te;function _(b,D,B){m.fromBufferAttribute(a,b),g.fromBufferAttribute(a,D),v.fromBufferAttribute(a,B),x.fromBufferAttribute(c,b),E.fromBufferAttribute(c,D),A.fromBufferAttribute(c,B),g.sub(m),v.sub(m),E.sub(x),A.sub(x);const H=1/(E.x*A.y-A.x*E.y);isFinite(H)&&(L.copy(g).multiplyScalar(A.y).addScaledVector(v,-E.y).multiplyScalar(H),M.copy(v).multiplyScalar(E.x).addScaledVector(g,-A.x).multiplyScalar(H),d[b].add(L),d[D].add(L),d[B].add(L),p[b].add(M),p[D].add(M),p[B].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let b=0,D=I.length;b<D;++b){const B=I[b],H=B.start,W=B.count;for(let ne=H,le=H+W;ne<le;ne+=3)_(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const z=new te,w=new te,P=new te,U=new te;function O(b){P.fromBufferAttribute(l,b),U.copy(P);const D=d[b];z.copy(D),z.sub(P.multiplyScalar(P.dot(D))).normalize(),w.crossVectors(U,D);const H=w.dot(p[b])<0?-1:1;f.setXYZW(b,z.x,z.y,z.z,H)}for(let b=0,D=I.length;b<D;++b){const B=I[b],H=B.start,W=B.count;for(let ne=H,le=H+W;ne<le;ne+=3)O(e.getX(ne+0)),O(e.getX(ne+1)),O(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Hi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,E=a.count;x<E;x++)a.setXYZ(x,0,0,0);const l=new te,c=new te,f=new te,d=new te,p=new te,m=new te,g=new te,v=new te;if(e)for(let x=0,E=e.count;x<E;x+=3){const A=e.getX(x+0),L=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,L),f.fromBufferAttribute(n,M),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(a,A),p.fromBufferAttribute(a,L),m.fromBufferAttribute(a,M),d.add(g),p.add(g),m.add(g),a.setXYZ(A,d.x,d.y,d.z),a.setXYZ(L,p.x,p.y,p.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,E=n.count;x<E;x+=3)l.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Rn.fromBufferAttribute(e,n),Rn.normalize(),e.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(p.length*g);let E=0,A=0;for(let L=0,M=p.length;L<M;L++){d.isInterleavedBufferAttribute?E=p[L]*d.data.stride+d.offset:E=p[L]*g;for(let _=0;_<g;_++)x[A++]=m[E++]}return new Hi(x,g,v)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yn,a=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,a);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],E=e(x,a);p.push(E)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const E=m[v];g.push(E.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],v=c[m];for(let x=0,E=v.length;x<E;x++)g.push(v[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qS{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=tp,this.updateRanges=[],this.version=0,this.uuid=Da()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=n.array[a+l];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Da()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Da()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new te;class du{constructor(e,n,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Xn.fromBufferAttribute(this,n),Xn.applyMatrix4(e),this.setXYZ(n,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Xn.fromBufferAttribute(this,n),Xn.applyNormalMatrix(e),this.setXYZ(n,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Xn.fromBufferAttribute(this,n),Xn.transformDirection(e),this.setXYZ(n,Xn.x,Xn.y,Xn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Fi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Kt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Fi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Fi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Fi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Fi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Kt(n,this.array),a=Kt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(n=Kt(n,this.array),a=Kt(a,this.array),l=Kt(l,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=l,this}setXYZW(e,n,a,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Kt(n,this.array),a=Kt(a,this.array),l=Kt(l,this.array),c=Kt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){hu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return new Hi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new du(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){hu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let YS=0;class io extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=jr,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=pd,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ex,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ut(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector2&&a&&a.isVector2||l&&l.isEuler&&a&&a.isEuler||l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(a.blending=this.blending),this.side!==gs&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==dd&&(a.blendSrc=this.blendSrc),this.blendDst!==pd&&(a.blendDst=this.blendDst),this.blendEquation!==ks&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ex&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(n){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new dt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zv extends io{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hr;const il=new te,Vr=new te,kr=new te,Xr=new dt,al=new dt,Kv=new fn,Bc=new te,sl=new te,Fc=new te,Fx=new dt,Jh=new dt,Gx=new dt;class jS extends zn{constructor(e=new Zv){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new Yn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new qS(n,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new du(a,3,0,!1)),Hr.setAttribute("uv",new du(a,2,3,!1))}this.geometry=Hr,this.material=e,this.center=new dt(.5,.5),this.count=1}raycast(e,n){e.camera===null&&Pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vr.setFromMatrixScale(this.matrixWorld),Kv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-kr.z);const a=this.material.rotation;let l,c;a!==0&&(c=Math.cos(a),l=Math.sin(a));const f=this.center;Gc(Bc.set(-.5,-.5,0),kr,f,Vr,l,c),Gc(sl.set(.5,-.5,0),kr,f,Vr,l,c),Gc(Fc.set(.5,.5,0),kr,f,Vr,l,c),Fx.set(0,0),Jh.set(1,0),Gx.set(1,1);let d=e.ray.intersectTriangle(Bc,sl,Fc,!1,il);if(d===null&&(Gc(sl.set(-.5,.5,0),kr,f,Vr,l,c),Jh.set(0,1),d=e.ray.intersectTriangle(Bc,Fc,sl,!1,il),d===null))return;const p=e.ray.origin.distanceTo(il);p<e.near||p>e.far||n.push({distance:p,point:il.clone(),uv:Ci.getInterpolation(il,Bc,sl,Fc,Fx,Jh,Gx,new dt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Gc(r,e,n,a,l,c){Xr.subVectors(r,n).addScalar(.5).multiply(a),l!==void 0?(al.x=c*Xr.x-l*Xr.y,al.y=l*Xr.x+c*Xr.y):al.copy(Xr),r.copy(e),r.x+=al.x,r.y+=al.y,r.applyMatrix4(Kv)}const Ra=new te,$h=new te,Hc=new te,hs=new te,ed=new te,Vc=new te,td=new te;class ZS{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ra)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ra.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ra.copy(this.origin).addScaledVector(this.direction,n),Ra.distanceToSquared(e))}distanceSqToSegment(e,n,a,l){$h.copy(e).add(n).multiplyScalar(.5),Hc.copy(n).sub(e).normalize(),hs.copy(this.origin).sub($h);const c=e.distanceTo(n)*.5,f=-this.direction.dot(Hc),d=hs.dot(this.direction),p=-hs.dot(Hc),m=hs.lengthSq(),g=Math.abs(1-f*f);let v,x,E,A;if(g>0)if(v=f*p-d,x=f*d-p,A=c*g,v>=0)if(x>=-A)if(x<=A){const L=1/g;v*=L,x*=L,E=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=c,v=Math.max(0,-(f*x+d)),E=-v*v+x*(x+2*p)+m;else x=-c,v=Math.max(0,-(f*x+d)),E=-v*v+x*(x+2*p)+m;else x<=-A?(v=Math.max(0,-(-f*c+d)),x=v>0?-c:Math.min(Math.max(-c,-p),c),E=-v*v+x*(x+2*p)+m):x<=A?(v=0,x=Math.min(Math.max(-c,-p),c),E=x*(x+2*p)+m):(v=Math.max(0,-(f*c+d)),x=v>0?c:Math.min(Math.max(-c,-p),c),E=-v*v+x*(x+2*p)+m);else x=f>0?-c:c,v=Math.max(0,-(f*x+d)),E=-v*v+x*(x+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy($h).addScaledVector(Hc,x),E}intersectSphere(e,n){Ra.subVectors(e.center,this.origin);const a=Ra.dot(this.direction),l=Ra.dot(Ra)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=a-f,p=a+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(a=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(a=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),a>p||d>l)||((d>a||a!==a)&&(a=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(e){return this.intersectBox(e,Ra)!==null}intersectTriangle(e,n,a,l,c){ed.subVectors(n,e),Vc.subVectors(a,e),td.crossVectors(ed,Vc);let f=this.direction.dot(td),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;hs.subVectors(this.origin,e);const p=d*this.direction.dot(Vc.crossVectors(hs,Vc));if(p<0)return null;const m=d*this.direction.dot(ed.cross(hs));if(m<0||p+m>f)return null;const g=-d*hs.dot(td);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vi extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hx=new fn,Gs=new ZS,kc=new gp,Vx=new te,Xc=new te,Wc=new te,qc=new te,nd=new te,Yc=new te,kx=new te,jc=new te;class ht extends zn{constructor(e=new Yn,n=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Yc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],v=c[p];g!==0&&(nd.fromBufferAttribute(v,e),f?Yc.addScaledVector(nd,g):Yc.addScaledVector(nd.sub(n),g))}n.add(Yc)}return n}raycast(e,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),kc.copy(a.boundingSphere),kc.applyMatrix4(c),Gs.copy(e.ray).recast(e.near),!(kc.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(kc,Vx)===null||Gs.origin.distanceToSquared(Vx)>(e.far-e.near)**2))&&(Hx.copy(c).invert(),Gs.copy(e.ray).applyMatrix4(Hx),!(a.boundingBox!==null&&Gs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Gs)))}_computeIntersections(e,n,a){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(f))for(let A=0,L=x.length;A<L;A++){const M=x[A],_=f[M.materialIndex],I=Math.max(M.start,E.start),z=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let w=I,P=z;w<P;w+=3){const U=d.getX(w),O=d.getX(w+1),b=d.getX(w+2);l=Zc(this,_,e,a,m,g,v,U,O,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const A=Math.max(0,E.start),L=Math.min(d.count,E.start+E.count);for(let M=A,_=L;M<_;M+=3){const I=d.getX(M),z=d.getX(M+1),w=d.getX(M+2);l=Zc(this,f,e,a,m,g,v,I,z,w),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let A=0,L=x.length;A<L;A++){const M=x[A],_=f[M.materialIndex],I=Math.max(M.start,E.start),z=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let w=I,P=z;w<P;w+=3){const U=w,O=w+1,b=w+2;l=Zc(this,_,e,a,m,g,v,U,O,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const A=Math.max(0,E.start),L=Math.min(p.count,E.start+E.count);for(let M=A,_=L;M<_;M+=3){const I=M,z=M+1,w=M+2;l=Zc(this,f,e,a,m,g,v,I,z,w),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function KS(r,e,n,a,l,c,f,d){let p;if(e.side===ti?p=a.intersectTriangle(f,c,l,!0,d):p=a.intersectTriangle(l,c,f,e.side===gs,d),p===null)return null;jc.copy(d),jc.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(jc);return m<n.near||m>n.far?null:{distance:m,point:jc.clone(),object:r}}function Zc(r,e,n,a,l,c,f,d,p,m){r.getVertexPosition(d,Xc),r.getVertexPosition(p,Wc),r.getVertexPosition(m,qc);const g=KS(r,e,n,a,Xc,Wc,qc,kx);if(g){const v=new te;Ci.getBarycoord(kx,Xc,Wc,qc,v),l&&(g.uv=Ci.getInterpolatedAttribute(l,d,p,m,v,new dt)),c&&(g.uv1=Ci.getInterpolatedAttribute(c,d,p,m,v,new dt)),f&&(g.normal=Ci.getInterpolatedAttribute(f,d,p,m,v,new te),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new te,materialIndex:0};Ci.getNormal(Xc,Wc,qc,x.normal),g.face=x,g.barycoord=v}return g}class QS extends Vn{constructor(e=null,n=1,a=1,l,c,f,d,p,m=In,g=In,v,x){super(null,f,d,p,m,g,l,c,v,x),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const id=new te,JS=new te,$S=new mt;class Vs{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,l){return this.normal.set(e,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const l=id.subVectors(a,n).cross(JS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const l=e.delta(id),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(f<0||f>1)?null:n.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||$S.getNormalMatrix(e),l=this.coplanarPoint(id).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new gp,e1=new dt(.5,.5),Kc=new te;class xp{constructor(e=new Vs,n=new Vs,a=new Vs,l=new Vs,c=new Vs,f=new Vs){this.planes=[e,n,a,l,c,f]}set(e,n,a,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=$i,a=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],p=c[2],m=c[3],g=c[4],v=c[5],x=c[6],E=c[7],A=c[8],L=c[9],M=c[10],_=c[11],I=c[12],z=c[13],w=c[14],P=c[15];if(l[0].setComponents(m-f,E-g,_-A,P-I).normalize(),l[1].setComponents(m+f,E+g,_+A,P+I).normalize(),l[2].setComponents(m+d,E+v,_+L,P+z).normalize(),l[3].setComponents(m-d,E-v,_-L,P-z).normalize(),a)l[4].setComponents(p,x,M,w).normalize(),l[5].setComponents(m-p,E-x,_-M,P-w).normalize();else if(l[4].setComponents(m-p,E-x,_-M,P-w).normalize(),n===$i)l[5].setComponents(m+p,E+x,_+M,P+w).normalize();else if(n===pl)l[5].setComponents(p,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){Hs.center.set(0,0,0);const n=e1.distanceTo(e.center);return Hs.radius=.7071067811865476+n,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const n=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(Kc.x=l.normal.x>0?e.max.x:e.min.x,Kc.y=l.normal.y>0?e.max.y:e.min.y,Kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qv extends Vn{constructor(e=[],n=Zs,a,l,c,f,d,p,m,g){super(e,n,a,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vp extends Vn{constructor(e,n,a,l,c,f,d,p,m){super(e,n,a,l,c,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $r extends Vn{constructor(e,n,a=na,l,c,f,d=In,p=In,m,g=Oa,v=1){if(g!==Oa&&g!==Ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:v};super(x,l,c,f,d,p,g,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class t1 extends $r{constructor(e,n=na,a=Zs,l,c,f=In,d=In,p,m=Oa){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,n,a,l,c,f,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jv extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qn extends Yn{constructor(e=1,n=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],v=[];let x=0,E=0;A("z","y","x",-1,-1,a,n,e,f,c,0),A("z","y","x",1,-1,a,n,-e,f,c,1),A("x","z","y",1,1,e,a,n,l,f,2),A("x","z","y",1,-1,e,a,-n,l,f,3),A("x","y","z",1,-1,e,n,a,l,c,4),A("x","y","z",-1,-1,e,n,-a,l,c,5),this.setIndex(p),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(v,2));function A(L,M,_,I,z,w,P,U,O,b,D){const B=w/O,H=P/b,W=w/2,ne=P/2,le=U/2,K=O+1,G=b+1;let k=0,ie=0;const _e=new te;for(let V=0;V<G;V++){const T=V*H-ne;for(let X=0;X<K;X++){const ce=X*B-W;_e[L]=ce*I,_e[M]=T*z,_e[_]=le,m.push(_e.x,_e.y,_e.z),_e[L]=0,_e[M]=0,_e[_]=U>0?1:-1,g.push(_e.x,_e.y,_e.z),v.push(X/O),v.push(1-V/b),k+=1}}for(let V=0;V<b;V++)for(let T=0;T<O;T++){const X=x+T+K*V,ce=x+T+K*(V+1),ye=x+(T+1)+K*(V+1),oe=x+(T+1)+K*V;p.push(X,ce,oe),p.push(ce,ye,oe),ie+=6}d.addGroup(E,ie,D),E+=ie,x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _p extends Yn{constructor(e=1,n=32,a=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:a,thetaLength:l},n=Math.max(3,n);const c=[],f=[],d=[],p=[],m=new te,g=new dt;f.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let v=0,x=3;v<=n;v++,x+=3){const E=a+v/n*l;m.x=e*Math.cos(E),m.y=e*Math.sin(E),f.push(m.x,m.y,m.z),d.push(0,0,1),g.x=(f[x]/e+1)/2,g.y=(f[x+1]/e+1)/2,p.push(g.x,g.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new cn(f,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _p(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ni extends Yn{constructor(e=1,n=1,a=1,l=32,c=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:a,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],x=[],E=[];let A=0;const L=[],M=a/2;let _=0;I(),f===!1&&(e>0&&z(!0),n>0&&z(!1)),this.setIndex(g),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(x,3)),this.setAttribute("uv",new cn(E,2));function I(){const w=new te,P=new te;let U=0;const O=(n-e)/a;for(let b=0;b<=c;b++){const D=[],B=b/c,H=B*(n-e)+e;for(let W=0;W<=l;W++){const ne=W/l,le=ne*p+d,K=Math.sin(le),G=Math.cos(le);P.x=H*K,P.y=-B*a+M,P.z=H*G,v.push(P.x,P.y,P.z),w.set(K,O,G).normalize(),x.push(w.x,w.y,w.z),E.push(ne,1-B),D.push(A++)}L.push(D)}for(let b=0;b<l;b++)for(let D=0;D<c;D++){const B=L[D][b],H=L[D+1][b],W=L[D+1][b+1],ne=L[D][b+1];(e>0||D!==0)&&(g.push(B,H,ne),U+=3),(n>0||D!==c-1)&&(g.push(H,W,ne),U+=3)}m.addGroup(_,U,0),_+=U}function z(w){const P=A,U=new dt,O=new te;let b=0;const D=w===!0?e:n,B=w===!0?1:-1;for(let W=1;W<=l;W++)v.push(0,M*B,0),x.push(0,B,0),E.push(.5,.5),A++;const H=A;for(let W=0;W<=l;W++){const le=W/l*p+d,K=Math.cos(le),G=Math.sin(le);O.x=D*G,O.y=M*B,O.z=D*K,v.push(O.x,O.y,O.z),x.push(0,B,0),U.x=K*.5+.5,U.y=G*.5*B+.5,E.push(U.x,U.y),A++}for(let W=0;W<l;W++){const ne=P+W,le=H+W;w===!0?g.push(le,le+1,ne):g.push(le+1,le,ne),b+=3}m.addGroup(_,b,w===!0?1:2),_+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class eo extends Ni{constructor(e=1,n=1,a=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,e,n,a,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(e){return new eo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vu extends Yn{constructor(e=[],n=[],a=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:a,detail:l};const c=[],f=[];d(l),m(a),g(),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(c.slice(),3)),this.setAttribute("uv",new cn(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(I){const z=new te,w=new te,P=new te;for(let U=0;U<n.length;U+=3)E(n[U+0],z),E(n[U+1],w),E(n[U+2],P),p(z,w,P,I)}function p(I,z,w,P){const U=P+1,O=[];for(let b=0;b<=U;b++){O[b]=[];const D=I.clone().lerp(w,b/U),B=z.clone().lerp(w,b/U),H=U-b;for(let W=0;W<=H;W++)W===0&&b===U?O[b][W]=D:O[b][W]=D.clone().lerp(B,W/H)}for(let b=0;b<U;b++)for(let D=0;D<2*(U-b)-1;D++){const B=Math.floor(D/2);D%2===0?(x(O[b][B+1]),x(O[b+1][B]),x(O[b][B])):(x(O[b][B+1]),x(O[b+1][B+1]),x(O[b+1][B]))}}function m(I){const z=new te;for(let w=0;w<c.length;w+=3)z.x=c[w+0],z.y=c[w+1],z.z=c[w+2],z.normalize().multiplyScalar(I),c[w+0]=z.x,c[w+1]=z.y,c[w+2]=z.z}function g(){const I=new te;for(let z=0;z<c.length;z+=3){I.x=c[z+0],I.y=c[z+1],I.z=c[z+2];const w=M(I)/2/Math.PI+.5,P=_(I)/Math.PI+.5;f.push(w,1-P)}A(),v()}function v(){for(let I=0;I<f.length;I+=6){const z=f[I+0],w=f[I+2],P=f[I+4],U=Math.max(z,w,P),O=Math.min(z,w,P);U>.9&&O<.1&&(z<.2&&(f[I+0]+=1),w<.2&&(f[I+2]+=1),P<.2&&(f[I+4]+=1))}}function x(I){c.push(I.x,I.y,I.z)}function E(I,z){const w=I*3;z.x=e[w+0],z.y=e[w+1],z.z=e[w+2]}function A(){const I=new te,z=new te,w=new te,P=new te,U=new dt,O=new dt,b=new dt;for(let D=0,B=0;D<c.length;D+=9,B+=6){I.set(c[D+0],c[D+1],c[D+2]),z.set(c[D+3],c[D+4],c[D+5]),w.set(c[D+6],c[D+7],c[D+8]),U.set(f[B+0],f[B+1]),O.set(f[B+2],f[B+3]),b.set(f[B+4],f[B+5]),P.copy(I).add(z).add(w).divideScalar(3);const H=M(P);L(U,B+0,I,H),L(O,B+2,z,H),L(b,B+4,w,H)}}function L(I,z,w,P){P<0&&I.x===1&&(f[z]=I.x-1),w.x===0&&w.z===0&&(f[z]=P/2/Math.PI+.5)}function M(I){return Math.atan2(I.z,-I.x)}function _(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.vertices,e.indices,e.radius,e.detail)}}class vl extends vu{constructor(e=1,n=0){const a=(1+Math.sqrt(5))/2,l=1/a,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-a,0,-l,a,0,l,-a,0,l,a,-l,-a,0,-l,a,0,l,-a,0,l,a,0,-a,0,-l,a,0,-l,-a,0,l,a,0,l],f=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,f,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new vl(e.radius,e.detail)}}class yp extends vu{constructor(e=1,n=0){const a=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(a,l,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new yp(e.radius,e.detail)}}class ao extends Yn{constructor(e=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:l};const c=e/2,f=n/2,d=Math.floor(a),p=Math.floor(l),m=d+1,g=p+1,v=e/d,x=n/p,E=[],A=[],L=[],M=[];for(let _=0;_<g;_++){const I=_*x-f;for(let z=0;z<m;z++){const w=z*v-c;A.push(w,-I,0),L.push(0,0,1),M.push(z/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let I=0;I<d;I++){const z=I+m*_,w=I+m*(_+1),P=I+1+m*(_+1),U=I+1+m*_;E.push(z,w,U),E.push(w,P,U)}this.setIndex(E),this.setAttribute("position",new cn(A,3)),this.setAttribute("normal",new cn(L,3)),this.setAttribute("uv",new cn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mp extends Yn{constructor(e=1,n=32,a=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(f+d,Math.PI);let m=0;const g=[],v=new te,x=new te,E=[],A=[],L=[],M=[];for(let _=0;_<=a;_++){const I=[],z=_/a,w=f+z*d,P=e*Math.cos(w),U=Math.sqrt(e*e-P*P);let O=0;_===0&&f===0?O=.5/n:_===a&&p===Math.PI&&(O=-.5/n);for(let b=0;b<=n;b++){const D=b/n,B=l+D*c;v.x=-U*Math.cos(B),v.y=P,v.z=U*Math.sin(B),A.push(v.x,v.y,v.z),x.copy(v).normalize(),L.push(x.x,x.y,x.z),M.push(D+O,1-z),I.push(m++)}g.push(I)}for(let _=0;_<a;_++)for(let I=0;I<n;I++){const z=g[_][I+1],w=g[_][I],P=g[_+1][I],U=g[_+1][I+1];(_!==0||f>0)&&E.push(z,w,U),(_!==a-1||p<Math.PI)&&E.push(w,P,U)}this.setIndex(E),this.setAttribute("position",new cn(A,3)),this.setAttribute("normal",new cn(L,3)),this.setAttribute("uv",new cn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class js extends Yn{constructor(e=1,n=.4,a=12,l=48,c=Math.PI*2,f=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:a,tubularSegments:l,arc:c,thetaStart:f,thetaLength:d},a=Math.floor(a),l=Math.floor(l);const p=[],m=[],g=[],v=[],x=new te,E=new te,A=new te;for(let L=0;L<=a;L++){const M=f+L/a*d;for(let _=0;_<=l;_++){const I=_/l*c;E.x=(e+n*Math.cos(M))*Math.cos(I),E.y=(e+n*Math.cos(M))*Math.sin(I),E.z=n*Math.sin(M),m.push(E.x,E.y,E.z),x.x=e*Math.cos(I),x.y=e*Math.sin(I),A.subVectors(E,x).normalize(),g.push(A.x,A.y,A.z),v.push(_/l),v.push(L/a)}}for(let L=1;L<=a;L++)for(let M=1;M<=l;M++){const _=(l+1)*L+M-1,I=(l+1)*(L-1)+M-1,z=(l+1)*(L-1)+M,w=(l+1)*L+M;p.push(_,I,w),p.push(I,z,w)}this.setIndex(p),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function to(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const l=r[n][a];if(Xx(l))l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=l.clone();else if(Array.isArray(l))if(Xx(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();e[n][a]=c}else e[n][a]=l.slice();else e[n][a]=l}}return e}function Wn(r){const e={};for(let n=0;n<r.length;n++){const a=to(r[n]);for(const l in a)e[l]=a[l]}return e}function Xx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function n1(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function $v(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const i1={clone:to,merge:Wn};var a1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a1,this.fragmentShader=s1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=n1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const l=e.uniforms[a];switch(this.uniforms[a]={},l.type){case"t":this.uniforms[a].value=n[l.value]||null;break;case"c":this.uniforms[a].value=new ct().setHex(l.value);break;case"v2":this.uniforms[a].value=new dt().fromArray(l.value);break;case"v3":this.uniforms[a].value=new te().fromArray(l.value);break;case"v4":this.uniforms[a].value=new un().fromArray(l.value);break;case"m3":this.uniforms[a].value=new mt().fromArray(l.value);break;case"m4":this.uniforms[a].value=new fn().fromArray(l.value);break;default:this.uniforms[a].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class r1 extends ia{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cn extends io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o1 extends Cn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class l1 extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c1 extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class e_ extends zn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ad=new fn,Wx=new te,qx=new te;class u1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xp,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Wx.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wx),qx.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(qx),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===pl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qc=new te,Jc=new no,Zi=new te;class t_ extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qc,Jc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,Jc,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(Qc,Jc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,Jc,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new te,Yx=new dt,jx=new dt;class wi extends t_{constructor(e=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,n){return this.getViewBounds(e,Yx,jx),n.subVectors(jx,Yx)}setViewOffset(e,n,a,l,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ul*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*a/m,l*=f.width/p,a*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Sp extends t_{constructor(e=-1,n=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,d=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class f1 extends u1{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zx extends e_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new f1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class h1 extends e_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Wr=-90,qr=1;class d1 extends zn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(Wr,qr,e,n);l.layers=this.layers,this.add(l);const c=new wi(Wr,qr,e,n);c.layers=this.layers,this.add(c);const f=new wi(Wr,qr,e,n);f.layers=this.layers,this.add(f);const d=new wi(Wr,qr,e,n);d.layers=this.layers,this.add(d);const p=new wi(Wr,qr,e,n);p.layers=this.layers,this.add(p);const m=new wi(Wr,qr,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,l,c,f,d,p]=n;for(const m of n)this.remove(m);if(e===$i)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===pl)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const L=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(a,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(a,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),a.texture.generateMipmaps=L,e.setRenderTarget(a,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(v,x,E),e.xr.enabled=A,a.texture.needsPMREMUpdate=!0}}class p1 extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dp=class Dp{constructor(e,n,a,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,l){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=l,this}};Dp.prototype.isMatrix2=!0;let Kx=Dp;function Qx(r,e,n,a){const l=m1(a);switch(n){case Gv:return r*e;case Vv:return r*e/l.components*l.byteLength;case cp:return r*e/l.components*l.byteLength;case Ks:return r*e*2/l.components*l.byteLength;case up:return r*e*2/l.components*l.byteLength;case Hv:return r*e*3/l.components*l.byteLength;case Gi:return r*e*4/l.components*l.byteLength;case fp:return r*e*4/l.components*l.byteLength;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case au:case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Td:case wd:return Math.max(r,16)*Math.max(e,8)/4;case Ed:case Ad:return Math.max(r,8)*Math.max(e,8)/2;case Rd:case Cd:case Dd:case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nd:case ou:case Ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Id:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case jd:case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qd:case Jd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case lu:case $d:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function m1(r){switch(r){case mi:case Iv:return{byteLength:1,components:1};case hl:case zv:case La:return{byteLength:2,components:1};case op:case lp:return{byteLength:2,components:4};case na:case rp:case Ji:return{byteLength:4,components:1};case Bv:case Fv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function n_(){let r=null,e=!1,n=null,a=null;function l(c,f){n(c,f),a=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function g1(r){const e=new WeakMap;function n(d,p){const m=d.array,g=d.usage,v=m.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,m,g),d.onUploadCallback();let E;if(m instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=r.SHORT;else if(m instanceof Uint32Array)E=r.UNSIGNED_INT;else if(m instanceof Int32Array)E=r.INT;else if(m instanceof Int8Array)E=r.BYTE;else if(m instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function a(d,p,m){const g=p.array,v=p.updateRanges;if(r.bindBuffer(m,d),v.length===0)r.bufferSubData(m,0,g);else{v.sort((E,A)=>E.start-A.start);let x=0;for(let E=1;E<v.length;E++){const A=v[x],L=v[E];L.start<=A.start+A.count+1?A.count=Math.max(A.count,L.start+L.count-A.start):(++x,v[x]=L)}v.length=x+1;for(let E=0,A=v.length;E<A;E++){const L=v[E];r.bufferSubData(m,L.start*g.BYTES_PER_ELEMENT,g,L.start,L.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v1=`#ifdef USE_ALPHAHASH
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
#endif`,_1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,A1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N1=`#ifdef USE_IRIDESCENCE
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
#endif`,D1=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,G1=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,H1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,V1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",j1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,cb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_b=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wb=`#if defined( USE_POINTS_UV )
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
#endif`,Rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gb=`#ifdef USE_NORMALMAP
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
#endif`,Hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$b=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,nE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rE=`#ifdef USE_SKINNING
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
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
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
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,EE=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,UE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,LE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,OE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,PE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,IE=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,BE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,GE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,HE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,VE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,XE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,WE=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,qE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,jE=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,ZE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,KE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,_t={alphahash_fragment:x1,alphahash_pars_fragment:v1,alphamap_fragment:_1,alphamap_pars_fragment:y1,alphatest_fragment:M1,alphatest_pars_fragment:S1,aomap_fragment:b1,aomap_pars_fragment:E1,batching_pars_vertex:T1,batching_vertex:A1,begin_vertex:w1,beginnormal_vertex:R1,bsdfs:C1,iridescence_fragment:N1,bumpmap_pars_fragment:D1,clipping_planes_fragment:U1,clipping_planes_pars_fragment:L1,clipping_planes_pars_vertex:O1,clipping_planes_vertex:P1,color_fragment:I1,color_pars_fragment:z1,color_pars_vertex:B1,color_vertex:F1,common:G1,cube_uv_reflection_fragment:H1,defaultnormal_vertex:V1,displacementmap_pars_vertex:k1,displacementmap_vertex:X1,emissivemap_fragment:W1,emissivemap_pars_fragment:q1,colorspace_fragment:Y1,colorspace_pars_fragment:j1,envmap_fragment:Z1,envmap_common_pars_fragment:K1,envmap_pars_fragment:Q1,envmap_pars_vertex:J1,envmap_physical_pars_fragment:cb,envmap_vertex:$1,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:ab,lightmap_pars_fragment:sb,lights_lambert_fragment:rb,lights_lambert_pars_fragment:ob,lights_pars_begin:lb,lights_toon_fragment:ub,lights_toon_pars_fragment:fb,lights_phong_fragment:hb,lights_phong_pars_fragment:db,lights_physical_fragment:pb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:xb,lights_fragment_end:vb,lightprobes_pars_fragment:_b,logdepthbuf_fragment:yb,logdepthbuf_pars_fragment:Mb,logdepthbuf_pars_vertex:Sb,logdepthbuf_vertex:bb,map_fragment:Eb,map_pars_fragment:Tb,map_particle_fragment:Ab,map_particle_pars_fragment:wb,metalnessmap_fragment:Rb,metalnessmap_pars_fragment:Cb,morphinstance_vertex:Nb,morphcolor_vertex:Db,morphnormal_vertex:Ub,morphtarget_pars_vertex:Lb,morphtarget_vertex:Ob,normal_fragment_begin:Pb,normal_fragment_maps:Ib,normal_pars_fragment:zb,normal_pars_vertex:Bb,normal_vertex:Fb,normalmap_pars_fragment:Gb,clearcoat_normal_fragment_begin:Hb,clearcoat_normal_fragment_maps:Vb,clearcoat_pars_fragment:kb,iridescence_pars_fragment:Xb,opaque_fragment:Wb,packing:qb,premultiplied_alpha_fragment:Yb,project_vertex:jb,dithering_fragment:Zb,dithering_pars_fragment:Kb,roughnessmap_fragment:Qb,roughnessmap_pars_fragment:Jb,shadowmap_pars_fragment:$b,shadowmap_pars_vertex:eE,shadowmap_vertex:tE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:aE,skinning_vertex:sE,skinnormal_vertex:rE,specularmap_fragment:oE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:fE,transmission_pars_fragment:hE,uv_pars_fragment:dE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:gE,background_vert:xE,background_frag:vE,backgroundCube_vert:_E,backgroundCube_frag:yE,cube_vert:ME,cube_frag:SE,depth_vert:bE,depth_frag:EE,distance_vert:TE,distance_frag:AE,equirect_vert:wE,equirect_frag:RE,linedashed_vert:CE,linedashed_frag:NE,meshbasic_vert:DE,meshbasic_frag:UE,meshlambert_vert:LE,meshlambert_frag:OE,meshmatcap_vert:PE,meshmatcap_frag:IE,meshnormal_vert:zE,meshnormal_frag:BE,meshphong_vert:FE,meshphong_frag:GE,meshphysical_vert:HE,meshphysical_frag:VE,meshtoon_vert:kE,meshtoon_frag:XE,points_vert:WE,points_frag:qE,shadow_vert:YE,shadow_frag:jE,sprite_vert:ZE,sprite_frag:KE},He={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Qi={basic:{uniforms:Wn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Wn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Wn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Wn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Wn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new ct(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Wn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Wn([He.points,He.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Wn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Wn([He.common,He.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Wn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Wn([He.sprite,He.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Wn([He.common,He.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Wn([He.lights,He.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Qi.physical={uniforms:Wn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const $c={r:0,b:0,g:0},QE=new fn,i_=new mt;i_.set(-1,0,0,0,1,0,0,0,1);function JE(r,e,n,a,l,c){const f=new ct(0);let d=l===!0?0:1,p,m,g=null,v=0,x=null;function E(I){let z=I.isScene===!0?I.background:null;if(z&&z.isTexture){const w=I.backgroundBlurriness>0;z=e.get(z,w)}return z}function A(I){let z=!1;const w=E(I);w===null?M(f,d):w&&w.isColor&&(M(w,1),z=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||z)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function L(I,z){const w=E(z);w&&(w.isCubeTexture||w.mapping===xu)?(m===void 0&&(m=new ht(new qn(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:to(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=w,m.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(QE.makeRotationFromEuler(z.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(i_),m.material.toneMapped=Ot.getTransfer(w.colorSpace)!==Zt,(g!==w||v!==w.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=w,v=w.version,x=r.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new ht(new ao(2,2),new ia({name:"BackgroundMaterial",uniforms:to(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(w.colorSpace)!==Zt,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,g=w,v=w.version,x=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function M(I,z){I.getRGB($c,$v(r)),n.buffers.color.setClear($c.r,$c.g,$c.b,z,c)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,z=1){f.set(I),d=z,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,M(f,d)},render:A,addToRenderList:L,dispose:_}}function $E(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=x(null);let c=l,f=!1;function d(H,W,ne,le,K){let G=!1;const k=v(H,le,ne,W);c!==k&&(c=k,m(c.object)),G=E(H,le,ne,K),G&&A(H,le,ne,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(G||f)&&(f=!1,w(H,W,ne,le),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function p(){return r.createVertexArray()}function m(H){return r.bindVertexArray(H)}function g(H){return r.deleteVertexArray(H)}function v(H,W,ne,le){const K=le.wireframe===!0;let G=a[W.id];G===void 0&&(G={},a[W.id]=G);const k=H.isInstancedMesh===!0?H.id:0;let ie=G[k];ie===void 0&&(ie={},G[k]=ie);let _e=ie[ne.id];_e===void 0&&(_e={},ie[ne.id]=_e);let V=_e[K];return V===void 0&&(V=x(p()),_e[K]=V),V}function x(H){const W=[],ne=[],le=[];for(let K=0;K<n;K++)W[K]=0,ne[K]=0,le[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ne,attributeDivisors:le,object:H,attributes:{},index:null}}function E(H,W,ne,le){const K=c.attributes,G=W.attributes;let k=0;const ie=ne.getAttributes();for(const _e in ie)if(ie[_e].location>=0){const T=K[_e];let X=G[_e];if(X===void 0&&(_e==="instanceMatrix"&&H.instanceMatrix&&(X=H.instanceMatrix),_e==="instanceColor"&&H.instanceColor&&(X=H.instanceColor)),T===void 0||T.attribute!==X||X&&T.data!==X.data)return!0;k++}return c.attributesNum!==k||c.index!==le}function A(H,W,ne,le){const K={},G=W.attributes;let k=0;const ie=ne.getAttributes();for(const _e in ie)if(ie[_e].location>=0){let T=G[_e];T===void 0&&(_e==="instanceMatrix"&&H.instanceMatrix&&(T=H.instanceMatrix),_e==="instanceColor"&&H.instanceColor&&(T=H.instanceColor));const X={};X.attribute=T,T&&T.data&&(X.data=T.data),K[_e]=X,k++}c.attributes=K,c.attributesNum=k,c.index=le}function L(){const H=c.newAttributes;for(let W=0,ne=H.length;W<ne;W++)H[W]=0}function M(H){_(H,0)}function _(H,W){const ne=c.newAttributes,le=c.enabledAttributes,K=c.attributeDivisors;ne[H]=1,le[H]===0&&(r.enableVertexAttribArray(H),le[H]=1),K[H]!==W&&(r.vertexAttribDivisor(H,W),K[H]=W)}function I(){const H=c.newAttributes,W=c.enabledAttributes;for(let ne=0,le=W.length;ne<le;ne++)W[ne]!==H[ne]&&(r.disableVertexAttribArray(ne),W[ne]=0)}function z(H,W,ne,le,K,G,k){k===!0?r.vertexAttribIPointer(H,W,ne,K,G):r.vertexAttribPointer(H,W,ne,le,K,G)}function w(H,W,ne,le){L();const K=le.attributes,G=ne.getAttributes(),k=W.defaultAttributeValues;for(const ie in G){const _e=G[ie];if(_e.location>=0){let V=K[ie];if(V===void 0&&(ie==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),ie==="instanceColor"&&H.instanceColor&&(V=H.instanceColor)),V!==void 0){const T=V.normalized,X=V.itemSize,ce=e.get(V);if(ce===void 0)continue;const ye=ce.buffer,oe=ce.type,q=ce.bytesPerElement,se=oe===r.INT||oe===r.UNSIGNED_INT||V.gpuType===rp;if(V.isInterleavedBufferAttribute){const re=V.data,Ae=re.stride,Oe=V.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<_e.locationSize;Ce++)_(_e.location+Ce,re.meshPerAttribute);H.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<_e.locationSize;Ce++)M(_e.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Ce=0;Ce<_e.locationSize;Ce++)z(_e.location+Ce,X/_e.locationSize,oe,T,Ae*q,(Oe+X/_e.locationSize*Ce)*q,se)}else{if(V.isInstancedBufferAttribute){for(let re=0;re<_e.locationSize;re++)_(_e.location+re,V.meshPerAttribute);H.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let re=0;re<_e.locationSize;re++)M(_e.location+re);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let re=0;re<_e.locationSize;re++)z(_e.location+re,X/_e.locationSize,oe,T,X*q,X/_e.locationSize*re*q,se)}}else if(k!==void 0){const T=k[ie];if(T!==void 0)switch(T.length){case 2:r.vertexAttrib2fv(_e.location,T);break;case 3:r.vertexAttrib3fv(_e.location,T);break;case 4:r.vertexAttrib4fv(_e.location,T);break;default:r.vertexAttrib1fv(_e.location,T)}}}}I()}function P(){D();for(const H in a){const W=a[H];for(const ne in W){const le=W[ne];for(const K in le){const G=le[K];for(const k in G)g(G[k].object),delete G[k];delete le[K]}}delete a[H]}}function U(H){if(a[H.id]===void 0)return;const W=a[H.id];for(const ne in W){const le=W[ne];for(const K in le){const G=le[K];for(const k in G)g(G[k].object),delete G[k];delete le[K]}}delete a[H.id]}function O(H){for(const W in a){const ne=a[W];for(const le in ne){const K=ne[le];if(K[H.id]===void 0)continue;const G=K[H.id];for(const k in G)g(G[k].object),delete G[k];delete K[H.id]}}}function b(H){for(const W in a){const ne=a[W],le=H.isInstancedMesh===!0?H.id:0,K=ne[le];if(K!==void 0){for(const G in K){const k=K[G];for(const ie in k)g(k[ie].object),delete k[ie];delete K[G]}delete ne[le],Object.keys(ne).length===0&&delete a[W]}}}function D(){B(),f=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:L,enableAttribute:M,disableUnusedAttributes:I}}function eT(r,e,n){let a;function l(p){a=p}function c(p,m){r.drawArrays(a,p,m),n.update(m,a,1)}function f(p,m,g){g!==0&&(r.drawArraysInstanced(a,p,m,g),n.update(m,a,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,m,0,g);let x=0;for(let E=0;E<g;E++)x+=m[E];n.update(x,a,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function tT(r,e,n,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Gi&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const b=O===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==mi&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ji&&!b)}function p(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(ut("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&x===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),z=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:A,maxTextureSize:L,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:w,maxSamples:P,samples:U}}function nT(r){const e=this;let n=null,a=0,l=!1,c=!1;const f=new Vs,d=new mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const E=v.length!==0||x||a!==0||l;return l=x,a=v.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,E){const A=v.clippingPlanes,L=v.clipIntersection,M=v.clipShadows,_=r.get(v);if(!l||A===null||A.length===0||c&&!M)c?g(null):m();else{const I=c?0:a,z=I*4;let w=_.clippingState||null;p.value=w,w=g(A,x,z,E);for(let P=0;P!==z;++P)w[P]=n[P];_.clippingState=w,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,x,E,A){const L=v!==null?v.length:0;let M=null;if(L!==0){if(M=p.value,A!==!0||M===null){const _=E+L*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<_)&&(M=new Float32Array(_));for(let z=0,w=E;z!==L;++z,w+=4)f.copy(v[z]).applyMatrix4(I,d),f.normal.toArray(M,w),M[w+3]=f.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,M}}const ms=4,Jx=[.125,.215,.35,.446,.526,.582],Ws=20,iT=256,rl=new Sp,$x=new ct;let sd=null,rd=0,od=0,ld=!1;const aT=new te;class ev{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,l=100,c={}){const{size:f=256,position:d=aT}=c;sd=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,l,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,rd,od),this._renderer.xr.enabled=ld,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zs||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:La,format:Gi,colorSpace:cu,depthBuffer:!1},l=tv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sT(c)),this._blurMaterial=oT(c,e,n),this._ggxMaterial=rT(c,e,n)}return l}_compileMaterial(e){const n=new ht(new Yn,e);this._renderer.compile(n,rl)}_sceneToCubeUV(e,n,a,l,c){const p=new wi(90,1,n,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,E=v.toneMapping;v.getClearColor($x),v.toneMapping=ea,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new qn,new Vi({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,M=L.material;let _=!1;const I=e.background;I?I.isColor&&(M.color.copy(I),e.background=null,_=!0):(M.color.copy($x),_=!0);for(let z=0;z<6;z++){const w=z%3;w===0?(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[z],c.y,c.z)):w===1?(p.up.set(0,0,m[z]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[z],c.z)):(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[z]));const P=this._cubeSize;Yr(l,w*P,z>2?P:0,P,P),v.setRenderTarget(l),_&&v.render(L,p),v.render(e,p)}v.toneMapping=E,v.autoClear=x,e.background=I}_textureToCubeUV(e,n){const a=this._renderer,l=e.mapping===Zs||e.mapping===Jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Yr(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(f,rl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[a];d.material=f;const p=f.uniforms,m=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(m*m-g*g),x=0+m*1.25,E=v*x,{_lodMax:A}=this,L=this._sizeLods[a],M=3*L*(a>A-ms?a-A+ms:0),_=4*(this._cubeSize-L);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=A-n,Yr(c,M,_,3*L,2*L),l.setRenderTarget(c),l.render(d,rl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=A-a,Yr(e,M,_,3*L,2*L),l.setRenderTarget(e),l.render(d,rl)}_blur(e,n,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,n,a,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=m;const x=m.uniforms,E=this._sizeLods[a]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Ws-1),L=c/A,M=isFinite(c)?1+Math.floor(g*L):Ws;M>Ws&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ws}`);const _=[];let I=0;for(let O=0;O<Ws;++O){const b=O/L,D=Math.exp(-b*b/2);_.push(D),O===0?I+=D:O<M&&(I+=2*D)}for(let O=0;O<_.length;O++)_[O]=_[O]/I;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:z}=this;x.dTheta.value=A,x.mipInt.value=z-a;const w=this._sizeLods[l],P=3*w*(l>z-ms?l-z+ms:0),U=4*(this._cubeSize-w);Yr(n,P,U,3*w,2*w),p.setRenderTarget(n),p.render(v,rl)}}function sT(r){const e=[],n=[],a=[];let l=r;const c=r-ms+1+Jx.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);e.push(d);let p=1/d;f>r-ms?p=Jx[f-r+ms-1]:f===0&&(p=0),n.push(p);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,A=6,L=3,M=2,_=1,I=new Float32Array(L*A*E),z=new Float32Array(M*A*E),w=new Float32Array(_*A*E);for(let U=0;U<E;U++){const O=U%3*2/3-1,b=U>2?0:-1,D=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];I.set(D,L*A*U),z.set(x,M*A*U);const B=[U,U,U,U,U,U];w.set(B,_*A*U)}const P=new Yn;P.setAttribute("position",new Hi(I,L)),P.setAttribute("uv",new Hi(z,M)),P.setAttribute("faceIndex",new Hi(w,_)),a.push(new ht(P,null)),l>ms&&l--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function tv(r,e,n){const a=new ta(r,e,n);return a.texture.mapping=xu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Yr(r,e,n,a,l){r.viewport.set(e,n,a,l),r.scissor.set(e,n,a,l)}function rT(r,e,n){return new ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_u(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function oT(r,e,n){const a=new Float32Array(Ws),l=new te(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_u(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function nv(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function iv(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}class a_ extends ta{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new Qv(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qn(5,5,5),c=new ia({name:"CubemapFromEquirect",uniforms:to(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Na});c.uniforms.tEquirect.value=n;const f=new ht(l,c),d=n.minFilter;return n.minFilter===qs&&(n.minFilter=Nn),new d1(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,a,l);e.setRenderTarget(c)}}function lT(r){let e=new WeakMap,n=new WeakMap,a=null;function l(x,E=!1){return x==null?null:E?f(x):c(x)}function c(x){if(x&&x.isTexture){const E=x.mapping;if(E===Uh||E===Lh)if(e.has(x)){const A=e.get(x).texture;return d(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const L=new a_(A.height);return L.fromEquirectangularTexture(r,x),e.set(x,L),x.addEventListener("dispose",m),d(L.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const E=x.mapping,A=E===Uh||E===Lh,L=E===Zs||E===Jr;if(A||L){let M=n.get(x);const _=M!==void 0?M.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return a===null&&(a=new ev(r)),M=A?a.fromEquirectangular(x,M):a.fromCubemap(x,M),M.texture.pmremVersion=x.pmremVersion,n.set(x,M),M.texture;if(M!==void 0)return M.texture;{const I=x.image;return A&&I&&I.height>0||L&&I&&p(I)?(a===null&&(a=new ev(r)),M=A?a.fromEquirectangular(x):a.fromCubemap(x),M.texture.pmremVersion=x.pmremVersion,n.set(x,M),x.addEventListener("dispose",g),M.texture):null}}}return x}function d(x,E){return E===Uh?x.mapping=Zs:E===Lh&&(x.mapping=Jr),x}function p(x){let E=0;const A=6;for(let L=0;L<A;L++)x[L]!==void 0&&E++;return E===A}function m(x){const E=x.target;E.removeEventListener("dispose",m);const A=e.get(E);A!==void 0&&(e.delete(E),A.dispose())}function g(x){const E=x.target;E.removeEventListener("dispose",g);const A=n.get(E);A!==void 0&&(n.delete(E),A.dispose())}function v(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:v}}function cT(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const l=r.getExtension(a);return e[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&Zr("WebGLRenderer: "+a+" extension not supported."),l}}}function uT(r,e,n,a){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",f),delete l[x.id];const E=c.get(x);E&&(e.remove(E),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const E in x)e.update(x[E],r.ARRAY_BUFFER)}function m(v){const x=[],E=v.index,A=v.attributes.position;let L=0;if(A===void 0)return;if(E!==null){const I=E.array;L=E.version;for(let z=0,w=I.length;z<w;z+=3){const P=I[z+0],U=I[z+1],O=I[z+2];x.push(P,U,U,O,O,P)}}else{const I=A.array;L=A.version;for(let z=0,w=I.length/3-1;z<w;z+=3){const P=z+0,U=z+1,O=z+2;x.push(P,U,U,O,O,P)}}const M=new(A.count>=65535?jv:Yv)(x,1);M.version=L;const _=c.get(v);_&&e.remove(_),c.set(v,M)}function g(v){const x=c.get(v);if(x){const E=v.index;E!==null&&x.version<E.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function fT(r,e,n){let a;function l(v){a=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function p(v,x){r.drawElements(a,x,c,v*f),n.update(x,a,1)}function m(v,x,E){E!==0&&(r.drawElementsInstanced(a,x,c,v*f,E),n.update(x,a,E))}function g(v,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,v,0,E);let L=0;for(let M=0;M<E;M++)L+=x[M];n.update(L,a,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function hT(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,d){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:Pt("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:a}}function dT(r,e,n){const a=new WeakMap,l=new un;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=a.get(d);if(x===void 0||x.count!==v){let B=function(){b.dispose(),a.delete(d),d.removeEventListener("dispose",B)};var E=B;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,L=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let w=0;A===!0&&(w=1),L===!0&&(w=2),M===!0&&(w=3);let P=d.attributes.position.count*w,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const O=new Float32Array(P*U*4*v),b=new Xv(O,P,U,v);b.type=Ji,b.needsUpdate=!0;const D=w*4;for(let H=0;H<v;H++){const W=_[H],ne=I[H],le=z[H],K=P*U*4*H;for(let G=0;G<W.count;G++){const k=G*D;A===!0&&(l.fromBufferAttribute(W,G),O[K+k+0]=l.x,O[K+k+1]=l.y,O[K+k+2]=l.z,O[K+k+3]=0),L===!0&&(l.fromBufferAttribute(ne,G),O[K+k+4]=l.x,O[K+k+5]=l.y,O[K+k+6]=l.z,O[K+k+7]=0),M===!0&&(l.fromBufferAttribute(le,G),O[K+k+8]=l.x,O[K+k+9]=l.y,O[K+k+10]=l.z,O[K+k+11]=le.itemSize===4?l.w:1)}}x={count:v,texture:b,size:new dt(P,U)},a.set(d,x),d.addEventListener("dispose",B)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let A=0;for(let M=0;M<m.length;M++)A+=m[M];const L=d.morphTargetsRelative?1:1-A;p.getUniforms().setValue(r,"morphTargetBaseInfluence",L),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function pT(r,e,n,a,l){let c=new WeakMap;function f(m){const g=l.render.frame,v=m.geometry,x=e.get(m,v);if(c.get(x)!==g&&(e.update(x),c.set(x,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==g&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),c.set(m,g))),m.isSkinnedMesh){const E=m.skeleton;c.get(E)!==g&&(E.update(),c.set(E,g))}return x}function d(){c=new WeakMap}function p(m){const g=m.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:f,dispose:d}}const mT={[Rv]:"LINEAR_TONE_MAPPING",[Cv]:"REINHARD_TONE_MAPPING",[Nv]:"CINEON_TONE_MAPPING",[Dv]:"ACES_FILMIC_TONE_MAPPING",[Lv]:"AGX_TONE_MAPPING",[Ov]:"NEUTRAL_TONE_MAPPING",[Uv]:"CUSTOM_TONE_MAPPING"};function gT(r,e,n,a,l,c){const f=new ta(e,n,{type:r,depthBuffer:l,stencilBuffer:c,samples:a?4:0,depthTexture:l?new $r(e,n):void 0}),d=new ta(e,n,{type:La,depthBuffer:!1,stencilBuffer:!1}),p=new Yn;p.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new cn([0,2,0,0,2,0],2));const m=new r1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new ht(p,m),v=new Sp(-1,1,1,-1,0,1);let x=null,E=null,A=!1,L,M=null,_=[],I=!1;this.setSize=function(z,w){f.setSize(z,w),d.setSize(z,w);for(let P=0;P<_.length;P++){const U=_[P];U.setSize&&U.setSize(z,w)}},this.setEffects=function(z){_=z,I=_.length>0&&_[0].isRenderPass===!0;const w=f.width,P=f.height;for(let U=0;U<_.length;U++){const O=_[U];O.setSize&&O.setSize(w,P)}},this.begin=function(z,w){if(A||z.toneMapping===ea&&_.length===0)return!1;if(M=w,w!==null){const P=w.width,U=w.height;(f.width!==P||f.height!==U)&&this.setSize(P,U)}return I===!1&&z.setRenderTarget(f),L=z.toneMapping,z.toneMapping=ea,!0},this.hasRenderPass=function(){return I},this.end=function(z,w){z.toneMapping=L,A=!0;let P=f,U=d;for(let O=0;O<_.length;O++){const b=_[O];if(b.enabled!==!1&&(b.render(z,U,P,w),b.needsSwap!==!1)){const D=P;P=U,U=D}}if(x!==z.outputColorSpace||E!==z.toneMapping){x=z.outputColorSpace,E=z.toneMapping,m.defines={},Ot.getTransfer(x)===Zt&&(m.defines.SRGB_TRANSFER="");const O=mT[E];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,z.setRenderTarget(M),z.render(g,v),M=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),d.dispose(),p.dispose(),m.dispose()}}const s_=new Vn,np=new $r(1,1),r_=new Xv,o_=new OS,l_=new Qv,av=[],sv=[],rv=new Float32Array(16),ov=new Float32Array(9),lv=new Float32Array(4);function so(r,e,n){const a=r[0];if(a<=0||a>0)return r;const l=e*n;let c=av[l];if(c===void 0&&(c=new Float32Array(l),av[l]=c),e!==0){a.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,r[f].toArray(c,d)}return c}function Tn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function An(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function yu(r,e){let n=sv[e];n===void 0&&(n=new Int32Array(e),sv[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function xT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function vT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;r.uniform2fv(this.addr,e),An(n,e)}}function _T(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tn(n,e))return;r.uniform3fv(this.addr,e),An(n,e)}}function yT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;r.uniform4fv(this.addr,e),An(n,e)}}function MT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Tn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,a))return;lv.set(a),r.uniformMatrix2fv(this.addr,!1,lv),An(n,a)}}function ST(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Tn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,a))return;ov.set(a),r.uniformMatrix3fv(this.addr,!1,ov),An(n,a)}}function bT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Tn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,a))return;rv.set(a),r.uniformMatrix4fv(this.addr,!1,rv),An(n,a)}}function ET(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function TT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;r.uniform2iv(this.addr,e),An(n,e)}}function AT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;r.uniform3iv(this.addr,e),An(n,e)}}function wT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;r.uniform4iv(this.addr,e),An(n,e)}}function RT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function CT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;r.uniform2uiv(this.addr,e),An(n,e)}}function NT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;r.uniform3uiv(this.addr,e),An(n,e)}}function DT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;r.uniform4uiv(this.addr,e),An(n,e)}}function UT(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(np.compareFunction=n.isReversedDepthBuffer()?dp:hp,c=np):c=s_,n.setTexture2D(e||c,l)}function LT(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(e||o_,l)}function OT(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(e||l_,l)}function PT(r,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(e||r_,l)}function IT(r){switch(r){case 5126:return xT;case 35664:return vT;case 35665:return _T;case 35666:return yT;case 35674:return MT;case 35675:return ST;case 35676:return bT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return wT;case 5125:return RT;case 36294:return CT;case 36295:return NT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}function zT(r,e){r.uniform1fv(this.addr,e)}function BT(r,e){const n=so(e,this.size,2);r.uniform2fv(this.addr,n)}function FT(r,e){const n=so(e,this.size,3);r.uniform3fv(this.addr,n)}function GT(r,e){const n=so(e,this.size,4);r.uniform4fv(this.addr,n)}function HT(r,e){const n=so(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function VT(r,e){const n=so(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function kT(r,e){const n=so(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function XT(r,e){r.uniform1iv(this.addr,e)}function WT(r,e){r.uniform2iv(this.addr,e)}function qT(r,e){r.uniform3iv(this.addr,e)}function YT(r,e){r.uniform4iv(this.addr,e)}function jT(r,e){r.uniform1uiv(this.addr,e)}function ZT(r,e){r.uniform2uiv(this.addr,e)}function KT(r,e){r.uniform3uiv(this.addr,e)}function QT(r,e){r.uniform4uiv(this.addr,e)}function JT(r,e,n){const a=this.cache,l=e.length,c=yu(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=np:f=s_;for(let d=0;d!==l;++d)n.setTexture2D(e[d]||f,c[d])}function $T(r,e,n){const a=this.cache,l=e.length,c=yu(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)n.setTexture3D(e[f]||o_,c[f])}function eA(r,e,n){const a=this.cache,l=e.length,c=yu(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)n.setTextureCube(e[f]||l_,c[f])}function tA(r,e,n){const a=this.cache,l=e.length,c=yu(n,l);Tn(a,c)||(r.uniform1iv(this.addr,c),An(a,c));for(let f=0;f!==l;++f)n.setTexture2DArray(e[f]||r_,c[f])}function nA(r){switch(r){case 5126:return zT;case 35664:return BT;case 35665:return FT;case 35666:return GT;case 35674:return HT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return XT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return jT;case 36294:return ZT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return tA}}class iA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=IT(n.type)}}class aA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nA(n.type)}}class sA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,n[d.id],a)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function cv(r,e){r.seq.push(e),r.map[e.id]=e}function rA(r,e,n){const a=r.name,l=a.length;for(cd.lastIndex=0;;){const c=cd.exec(a),f=cd.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){cv(n,m===void 0?new iA(d,r,e):new aA(d,r,e));break}else{let v=n.map[d];v===void 0&&(v=new sA(d),cv(n,v)),n=v}}}class ru{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const d=e.getActiveUniform(n,f),p=e.getUniformLocation(n,d.name);rA(d,p,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(e,a,l)}setOptional(e,n,a){const l=n[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,n,a,l){for(let c=0,f=n.length;c!==f;++c){const d=n[c],p=a[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,n){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in n&&a.push(f)}return a}}function uv(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const oA=37297;let lA=0;function cA(r,e){const n=r.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=l;f<c;f++){const d=f+1;a.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return a.join(`
`)}const fv=new mt;function uA(r){Ot._getMatrix(fv,Ot.workingColorSpace,r);const e=`mat3( ${fv.elements.map(n=>n.toFixed(4))} )`;switch(Ot.getTransfer(r)){case uu:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function hv(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+cA(r.getShaderSource(e),d)}else return c}function fA(r,e){const n=uA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const hA={[Rv]:"Linear",[Cv]:"Reinhard",[Nv]:"Cineon",[Dv]:"ACESFilmic",[Lv]:"AgX",[Ov]:"Neutral",[Uv]:"Custom"};function dA(r,e){const n=hA[e];return n===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const eu=new te;function pA(){Ot.getLuminanceCoefficients(eu);const r=eu.x.toFixed(4),e=eu.y.toFixed(4),n=eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function gA(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function xA(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(e,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:d}}return n}function cl(r){return r!==""}function dv(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(r){return r.replace(vA,yA)}const _A=new Map;function yA(r,e){let n=_t[e];if(n===void 0){const a=_A.get(e);if(a!==void 0)n=_t[a],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ip(n)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(r){return r.replace(MA,SA)}function SA(r,e,n,a){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function gv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const bA={[tu]:"SHADOWMAP_TYPE_PCF",[ll]:"SHADOWMAP_TYPE_VSM"};function EA(r){return bA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TA={[Zs]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function AA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":TA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const wA={[Jr]:"ENVMAP_MODE_REFRACTION"};function RA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":wA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CA={[wv]:"ENVMAP_BLENDING_MULTIPLY",[JM]:"ENVMAP_BLENDING_MIX",[$M]:"ENVMAP_BLENDING_ADD"};function NA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":CA[r.combine]||"ENVMAP_BLENDING_NONE"}function DA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function UA(r,e,n,a){const l=r.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=EA(n),m=AA(n),g=RA(n),v=NA(n),x=DA(n),E=mA(n),A=gA(c),L=l.createProgram();let M,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(cl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(cl).join(`
`),_.length>0&&(_+=`
`)):(M=[gv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),_=[gv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ea?"#define TONE_MAPPING":"",n.toneMapping!==ea?_t.tonemapping_pars_fragment:"",n.toneMapping!==ea?dA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,fA("linearToOutputTexel",n.outputColorSpace),pA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cl).join(`
`)),f=ip(f),f=dv(f,n),f=pv(f,n),d=ip(d),d=dv(d,n),d=pv(d,n),f=mv(f),d=mv(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===Tx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const z=I+M+f,w=I+_+d,P=uv(l,l.VERTEX_SHADER,z),U=uv(l,l.FRAGMENT_SHADER,w);l.attachShader(L,P),l.attachShader(L,U),n.index0AttributeName!==void 0?l.bindAttribLocation(L,0,n.index0AttributeName):n.hasPositionAttribute===!0&&l.bindAttribLocation(L,0,"position"),l.linkProgram(L);function O(H){if(r.debug.checkShaderErrors){const W=l.getProgramInfoLog(L)||"",ne=l.getShaderInfoLog(P)||"",le=l.getShaderInfoLog(U)||"",K=W.trim(),G=ne.trim(),k=le.trim();let ie=!0,_e=!0;if(l.getProgramParameter(L,l.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,L,P,U);else{const V=hv(l,P,"vertex"),T=hv(l,U,"fragment");Pt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(L,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+K+`
`+V+`
`+T)}else K!==""?ut("WebGLProgram: Program Info Log:",K):(G===""||k==="")&&(_e=!1);_e&&(H.diagnostics={runnable:ie,programLog:K,vertexShader:{log:G,prefix:M},fragmentShader:{log:k,prefix:_}})}l.deleteShader(P),l.deleteShader(U),b=new ru(l,L),D=xA(l,L)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=l.getProgramParameter(L,oA)),B},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(L),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lA++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=P,this.fragmentShader=U,this}let LA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const l=this._getShaderCacheForMaterial(e);return l.has(n)===!1&&(l.add(n),n.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new PA(e),n.set(e,a)),a}}class PA{constructor(e){this.id=LA++,this.code=e,this.usedTimes=0}}function IA(r){return r===Ks||r===ou||r===lu}function zA(r,e,n,a,l,c){const f=new Wv,d=new OA,p=new Set,m=[],g=new Map,v=a.logarithmicDepthBuffer;let x=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return p.add(b),b===0?"uv":`uv${b}`}function L(b,D,B,H,W,ne){const le=H.fog,K=W.geometry,G=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,k=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ie=e.get(b.envMap||G,k),_e=ie&&ie.mapping===xu?ie.image.height:null,V=E[b.type];b.precision!==null&&(x=a.getMaxPrecision(b.precision),x!==b.precision&&ut("WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const T=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,X=T!==void 0?T.length:0;let ce=0;K.morphAttributes.position!==void 0&&(ce=1),K.morphAttributes.normal!==void 0&&(ce=2),K.morphAttributes.color!==void 0&&(ce=3);let ye,oe,q,se;if(V){const qe=Qi[V];ye=qe.vertexShader,oe=qe.fragmentShader}else{ye=b.vertexShader,oe=b.fragmentShader;const qe=d.getVertexShaderStage(b),sn=d.getFragmentShaderStage(b);d.update(b,qe,sn),q=qe.id,se=sn.id}const re=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Oe=W.isInstancedMesh===!0,Ce=W.isBatchedMesh===!0,Qe=!!b.map,je=!!b.matcap,Pe=!!ie,tt=!!b.aoMap,at=!!b.lightMap,yt=!!b.bumpMap&&b.wireframe===!1,Mt=!!b.normalMap,St=!!b.displacementMap,wt=!!b.emissiveMap,Rt=!!b.metalnessMap,Gt=!!b.roughnessMap,$=b.anisotropy>0,Ct=b.clearcoat>0,Nt=b.dispersion>0,F=b.iridescence>0,S=b.sheen>0,j=b.transmission>0,Q=$&&!!b.anisotropyMap,ue=Ct&&!!b.clearcoatMap,Re=Ct&&!!b.clearcoatNormalMap,Ue=Ct&&!!b.clearcoatRoughnessMap,ve=F&&!!b.iridescenceMap,Me=F&&!!b.iridescenceThicknessMap,De=S&&!!b.sheenColorMap,ke=S&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,ze=!!b.specularColorMap,nt=!!b.specularIntensityMap,st=j&&!!b.transmissionMap,ft=j&&!!b.thicknessMap,J=!!b.gradientMap,Ne=!!b.alphaMap,be=b.alphaTest>0,Ie=!!b.alphaHash,Ve=!!b.extensions;let we=ea;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(we=r.toneMapping);const Je={shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:ye,fragmentShader:oe,defines:b.defines,customVertexShaderID:q,customFragmentShaderID:se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Ce,batchingColor:Ce&&W._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&W.instanceColor!==null,instancingMorph:Oe&&W.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Qe,matcap:je,envMap:Pe,envMapMode:Pe&&ie.mapping,envMapCubeUVHeight:_e,aoMap:tt,lightMap:at,bumpMap:yt,normalMap:Mt,displacementMap:St,emissiveMap:wt,normalMapObjectSpace:Mt&&b.normalMapType===nS,normalMapTangentSpace:Mt&&b.normalMapType===ep,packedNormalMap:Mt&&b.normalMapType===ep&&IA(b.normalMap.format),metalnessMap:Rt,roughnessMap:Gt,anisotropy:$,anisotropyMap:Q,clearcoat:Ct,clearcoatMap:ue,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ue,dispersion:Nt,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:Me,sheen:S,sheenColorMap:De,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:ze,specularIntensityMap:nt,transmission:j,transmissionMap:st,thicknessMap:ft,gradientMap:J,opaque:b.transparent===!1&&b.blending===jr&&b.alphaToCoverage===!1,alphaMap:Ne,alphaTest:be,alphaHash:Ie,combine:b.combine,mapUv:Qe&&A(b.map.channel),aoMapUv:tt&&A(b.aoMap.channel),lightMapUv:at&&A(b.lightMap.channel),bumpMapUv:yt&&A(b.bumpMap.channel),normalMapUv:Mt&&A(b.normalMap.channel),displacementMapUv:St&&A(b.displacementMap.channel),emissiveMapUv:wt&&A(b.emissiveMap.channel),metalnessMapUv:Rt&&A(b.metalnessMap.channel),roughnessMapUv:Gt&&A(b.roughnessMap.channel),anisotropyMapUv:Q&&A(b.anisotropyMap.channel),clearcoatMapUv:ue&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Re&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(b.sheenRoughnessMap.channel),specularMapUv:Fe&&A(b.specularMap.channel),specularColorMapUv:ze&&A(b.specularColorMap.channel),specularIntensityMapUv:nt&&A(b.specularIntensityMap.channel),transmissionMapUv:st&&A(b.transmissionMap.channel),thicknessMapUv:ft&&A(b.thicknessMap.channel),alphaMapUv:Ne&&A(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Mt||$),vertexNormals:!!K.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!K.attributes.uv&&(Qe||Ne),fog:!!le,useFog:b.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||K.attributes.normal===void 0&&Mt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ae,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ce,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,decodeVideoTexture:Qe&&b.map.isVideoTexture===!0&&Ot.getTransfer(b.map.colorSpace)===Zt,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(b.emissiveMap.colorSpace)===Zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ri,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Je.vertexUv1s=p.has(1),Je.vertexUv2s=p.has(2),Je.vertexUv3s=p.has(3),p.clear(),Je}function M(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)D.push(B),D.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(_(D,b),I(D,b),D.push(r.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function _(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function I(b,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),D.packedNormalMap&&f.enable(22),D.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),D.numLightProbeGrids>0&&f.enable(22),D.hasPositionAttribute&&f.enable(23),b.push(f.mask)}function z(b){const D=E[b.type];let B;if(D){const H=Qi[D];B=i1.clone(H.uniforms)}else B=b.uniforms;return B}function w(b,D){let B=g.get(D);return B!==void 0?++B.usedTimes:(B=new UA(r,D,b,l),m.push(B),g.set(D,B)),B}function P(b){if(--b.usedTimes===0){const D=m.indexOf(b);m[D]=m[m.length-1],m.pop(),g.delete(b.cacheKey),b.destroy()}}function U(b){d.remove(b)}function O(){d.dispose()}return{getParameters:L,getProgramCacheKey:M,getUniforms:z,acquireProgram:w,releaseProgram:P,releaseShaderCache:U,programs:m,dispose:O}}function BA(){let r=new WeakMap;function e(f){return r.has(f)}function n(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function a(f){r.delete(f)}function l(f,d,p){r.get(f)[d]=p}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:l,dispose:c}}function FA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function xv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vv(){const r=[];let e=0;const n=[],a=[],l=[];function c(){e=0,n.length=0,a.length=0,l.length=0}function f(x){let E=0;return x.isInstancedMesh&&(E+=2),x.isSkinnedMesh&&(E+=1),E}function d(x,E,A,L,M,_){let I=r[e];return I===void 0?(I={id:x.id,object:x,geometry:E,material:A,materialVariant:f(x),groupOrder:L,renderOrder:x.renderOrder,z:M,group:_},r[e]=I):(I.id=x.id,I.object=x,I.geometry=E,I.material=A,I.materialVariant=f(x),I.groupOrder=L,I.renderOrder=x.renderOrder,I.z=M,I.group=_),e++,I}function p(x,E,A,L,M,_){const I=d(x,E,A,L,M,_);A.transmission>0?a.push(I):A.transparent===!0?l.push(I):n.push(I)}function m(x,E,A,L,M,_){const I=d(x,E,A,L,M,_);A.transmission>0?a.unshift(I):A.transparent===!0?l.unshift(I):n.unshift(I)}function g(x,E,A){n.length>1&&n.sort(x||FA),a.length>1&&a.sort(E||xv),l.length>1&&l.sort(E||xv),A&&(n.reverse(),a.reverse(),l.reverse())}function v(){for(let x=e,E=r.length;x<E;x++){const A=r[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:p,unshift:m,finish:v,sort:g}}function GA(){let r=new WeakMap;function e(a,l){const c=r.get(a);let f;return c===void 0?(f=new vv,r.set(a,[f])):l>=c.length?(f=new vv,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:e,dispose:n}}function HA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new ct};break;case"SpotLight":n={position:new te,direction:new te,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=n,n}}}function VA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let kA=0;function XA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function WA(r){const e=new HA,n=VA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new te);const l=new te,c=new fn,f=new fn;function d(m){let g=0,v=0,x=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let E=0,A=0,L=0,M=0,_=0,I=0,z=0,w=0,P=0,U=0,O=0;m.sort(XA);for(let D=0,B=m.length;D<B;D++){const H=m[D],W=H.color,ne=H.intensity,le=H.distance;let K=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ks?K=H.shadow.map.texture:K=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=W.r*ne,v+=W.g*ne,x+=W.b*ne;else if(H.isLightProbe){for(let G=0;G<9;G++)a.probe[G].addScaledVector(H.sh.coefficients[G],ne);O++}else if(H.isDirectionalLight){const G=e.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const k=H.shadow,ie=n.get(H);ie.shadowIntensity=k.intensity,ie.shadowBias=k.bias,ie.shadowNormalBias=k.normalBias,ie.shadowRadius=k.radius,ie.shadowMapSize=k.mapSize,a.directionalShadow[E]=ie,a.directionalShadowMap[E]=K,a.directionalShadowMatrix[E]=H.shadow.matrix,I++}a.directional[E]=G,E++}else if(H.isSpotLight){const G=e.get(H);G.position.setFromMatrixPosition(H.matrixWorld),G.color.copy(W).multiplyScalar(ne),G.distance=le,G.coneCos=Math.cos(H.angle),G.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),G.decay=H.decay,a.spot[L]=G;const k=H.shadow;if(H.map&&(a.spotLightMap[P]=H.map,P++,k.updateMatrices(H),H.castShadow&&U++),a.spotLightMatrix[L]=k.matrix,H.castShadow){const ie=n.get(H);ie.shadowIntensity=k.intensity,ie.shadowBias=k.bias,ie.shadowNormalBias=k.normalBias,ie.shadowRadius=k.radius,ie.shadowMapSize=k.mapSize,a.spotShadow[L]=ie,a.spotShadowMap[L]=K,w++}L++}else if(H.isRectAreaLight){const G=e.get(H);G.color.copy(W).multiplyScalar(ne),G.halfWidth.set(H.width*.5,0,0),G.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=G,M++}else if(H.isPointLight){const G=e.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),G.distance=H.distance,G.decay=H.decay,H.castShadow){const k=H.shadow,ie=n.get(H);ie.shadowIntensity=k.intensity,ie.shadowBias=k.bias,ie.shadowNormalBias=k.normalBias,ie.shadowRadius=k.radius,ie.shadowMapSize=k.mapSize,ie.shadowCameraNear=k.camera.near,ie.shadowCameraFar=k.camera.far,a.pointShadow[A]=ie,a.pointShadowMap[A]=K,a.pointShadowMatrix[A]=H.shadow.matrix,z++}a.point[A]=G,A++}else if(H.isHemisphereLight){const G=e.get(H);G.skyColor.copy(H.color).multiplyScalar(ne),G.groundColor.copy(H.groundColor).multiplyScalar(ne),a.hemi[_]=G,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=x;const b=a.hash;(b.directionalLength!==E||b.pointLength!==A||b.spotLength!==L||b.rectAreaLength!==M||b.hemiLength!==_||b.numDirectionalShadows!==I||b.numPointShadows!==z||b.numSpotShadows!==w||b.numSpotMaps!==P||b.numLightProbes!==O)&&(a.directional.length=E,a.spot.length=L,a.rectArea.length=M,a.point.length=A,a.hemi.length=_,a.directionalShadow.length=I,a.directionalShadowMap.length=I,a.pointShadow.length=z,a.pointShadowMap.length=z,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=I,a.pointShadowMatrix.length=z,a.spotLightMatrix.length=w+P-U,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=O,b.directionalLength=E,b.pointLength=A,b.spotLength=L,b.rectAreaLength=M,b.hemiLength=_,b.numDirectionalShadows=I,b.numPointShadows=z,b.numSpotShadows=w,b.numSpotMaps=P,b.numLightProbes=O,a.version=kA++)}function p(m,g){let v=0,x=0,E=0,A=0,L=0;const M=g.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const z=m[_];if(z.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(z.isSpotLight){const w=a.spot[E];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),E++}else if(z.isRectAreaLight){const w=a.rectArea[A];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(z.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(z.width*.5,0,0),w.halfHeight.set(0,z.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),A++}else if(z.isPointLight){const w=a.point[x];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(M),x++}else if(z.isHemisphereLight){const w=a.hemi[L];w.direction.setFromMatrixPosition(z.matrixWorld),w.direction.transformDirection(M),L++}}}return{setup:d,setupView:p,state:a}}function _v(r){const e=new WA(r),n=[],a=[],l=[];function c(x){v.camera=x,n.length=0,a.length=0,l.length=0}function f(x){n.push(x)}function d(x){a.push(x)}function p(x){l.push(x)}function m(){e.setup(n)}function g(x){e.setupView(n,x)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:m,setupLightsView:g,pushLight:f,pushShadow:d,pushLightProbeGrid:p}}function qA(r){let e=new WeakMap;function n(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new _v(r),e.set(l,[d])):c>=f.length?(d=new _v(r),f.push(d)):d=f[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZA=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],KA=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],yv=new fn,ol=new te,ud=new te;function QA(r,e,n){let a=new xp;const l=new dt,c=new dt,f=new un,d=new l1,p=new c1,m={},g=n.maxTextureSize,v={[gs]:ti,[ti]:gs,[Ri]:Ri},x=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:YA,fragmentShader:jA}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const A=new Yn;A.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new ht(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let _=this.type;this.render=function(U,O,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===Av&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tu);const D=r.getRenderTarget(),B=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Na),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ne=_!==this.type;ne&&O.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(K=>K.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,K=U.length;le<K;le++){const G=U[le],k=G.shadow;if(k===void 0){ut("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const ie=k.getFrameExtents();l.multiply(ie),c.copy(k.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ie.x),l.x=c.x*ie.x,k.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ie.y),l.y=c.y*ie.y,k.mapSize.y=c.y));const _e=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=_e,k.map===null||ne===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ll){if(G.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ta(l.x,l.y,{format:Ks,type:La,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new $r(l.x,l.y,Ji),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=Oa,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=In,k.map.depthTexture.magFilter=In}else G.isPointLight?(k.map=new a_(l.x),k.map.depthTexture=new t1(l.x,na)):(k.map=new ta(l.x,l.y),k.map.depthTexture=new $r(l.x,l.y,na)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=Oa,this.type===tu?(k.map.depthTexture.compareFunction=_e?dp:hp,k.map.depthTexture.minFilter=Nn,k.map.depthTexture.magFilter=Nn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=In,k.map.depthTexture.magFilter=In);k.camera.updateProjectionMatrix()}const V=k.map.isWebGLCubeRenderTarget?6:1;for(let T=0;T<V;T++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,T),r.clear();else{T===0&&(r.setRenderTarget(k.map),r.clear());const X=k.getViewport(T);f.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),W.viewport(f)}if(G.isPointLight){const X=k.camera,ce=k.matrix,ye=G.distance||X.far;ye!==X.far&&(X.far=ye,X.updateProjectionMatrix()),ol.setFromMatrixPosition(G.matrixWorld),X.position.copy(ol),ud.copy(X.position),ud.add(ZA[T]),X.up.copy(KA[T]),X.lookAt(ud),X.updateMatrixWorld(),ce.makeTranslation(-ol.x,-ol.y,-ol.z),yv.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),k._frustum.setFromProjectionMatrix(yv,X.coordinateSystem,X.reversedDepth)}else k.updateMatrices(G);a=k.getFrustum(),w(O,b,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===ll&&I(k,b),k.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(D,B,H)};function I(U,O){const b=e.update(L);x.defines.VSM_SAMPLES!==U.blurSamples&&(x.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ta(l.x,l.y,{format:Ks,type:La})),x.uniforms.shadow_pass.value=U.map.depthTexture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(O,null,b,x,L,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value=U.mapSize,E.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(O,null,b,E,L,null)}function z(U,O,b,D){let B=null;const H=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(H!==void 0)B=H;else if(B=b.isPointLight===!0?p:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const W=B.uuid,ne=O.uuid;let le=m[W];le===void 0&&(le={},m[W]=le);let K=le[ne];K===void 0&&(K=B.clone(),le[ne]=K,O.addEventListener("dispose",P)),B=K}if(B.visible=O.visible,B.wireframe=O.wireframe,D===ll?B.side=O.shadowSide!==null?O.shadowSide:O.side:B.side=O.shadowSide!==null?O.shadowSide:v[O.side],B.alphaMap=O.alphaMap,B.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,B.map=O.map,B.clipShadows=O.clipShadows,B.clippingPlanes=O.clippingPlanes,B.clipIntersection=O.clipIntersection,B.displacementMap=O.displacementMap,B.displacementScale=O.displacementScale,B.displacementBias=O.displacementBias,B.wireframeLinewidth=O.wireframeLinewidth,B.linewidth=O.linewidth,b.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const W=r.properties.get(B);W.light=b}return B}function w(U,O,b,D,B){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&B===ll)&&(!U.frustumCulled||a.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const ne=e.update(U),le=U.material;if(Array.isArray(le)){const K=ne.groups;for(let G=0,k=K.length;G<k;G++){const ie=K[G],_e=le[ie.materialIndex];if(_e&&_e.visible){const V=z(U,_e,D,B);U.onBeforeShadow(r,U,O,b,ne,V,ie),r.renderBufferDirect(b,null,ne,V,U,ie),U.onAfterShadow(r,U,O,b,ne,V,ie)}}}else if(le.visible){const K=z(U,le,D,B);U.onBeforeShadow(r,U,O,b,ne,K,null),r.renderBufferDirect(b,null,ne,K,U,null),U.onAfterShadow(r,U,O,b,ne,K,null)}}const W=U.children;for(let ne=0,le=W.length;ne<le;ne++)w(W[ne],O,b,D,B)}function P(U){U.target.removeEventListener("dispose",P);for(const b in m){const D=m[b],B=U.target.uuid;B in D&&(D[B].dispose(),delete D[B])}}}function JA(r,e){function n(){let J=!1;const Ne=new un;let be=null;const Ie=new un(0,0,0,0);return{setMask:function(Ve){be!==Ve&&!J&&(r.colorMask(Ve,Ve,Ve,Ve),be=Ve)},setLocked:function(Ve){J=Ve},setClear:function(Ve,we,Je,qe,sn){sn===!0&&(Ve*=qe,we*=qe,Je*=qe),Ne.set(Ve,we,Je,qe),Ie.equals(Ne)===!1&&(r.clearColor(Ve,we,Je,qe),Ie.copy(Ne))},reset:function(){J=!1,be=null,Ie.set(-1,0,0,0)}}}function a(){let J=!1,Ne=!1,be=null,Ie=null,Ve=null;return{setReversed:function(we){if(Ne!==we){const Je=e.get("EXT_clip_control");we?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ne=we;const qe=Ve;Ve=null,this.setClear(qe)}},getReversed:function(){return Ne},setTest:function(we){we?re(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(we){be!==we&&!J&&(r.depthMask(we),be=we)},setFunc:function(we){if(Ne&&(we=hS[we]),Ie!==we){switch(we){case md:r.depthFunc(r.NEVER);break;case gd:r.depthFunc(r.ALWAYS);break;case xd:r.depthFunc(r.LESS);break;case Qr:r.depthFunc(r.LEQUAL);break;case vd:r.depthFunc(r.EQUAL);break;case _d:r.depthFunc(r.GEQUAL);break;case yd:r.depthFunc(r.GREATER);break;case Md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=we}},setLocked:function(we){J=we},setClear:function(we){Ve!==we&&(Ve=we,Ne&&(we=1-we),r.clearDepth(we))},reset:function(){J=!1,be=null,Ie=null,Ve=null,Ne=!1}}}function l(){let J=!1,Ne=null,be=null,Ie=null,Ve=null,we=null,Je=null,qe=null,sn=null;return{setTest:function(kt){J||(kt?re(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(kt){Ne!==kt&&!J&&(r.stencilMask(kt),Ne=kt)},setFunc:function(kt,ni,ii){(be!==kt||Ie!==ni||Ve!==ii)&&(r.stencilFunc(kt,ni,ii),be=kt,Ie=ni,Ve=ii)},setOp:function(kt,ni,ii){(we!==kt||Je!==ni||qe!==ii)&&(r.stencilOp(kt,ni,ii),we=kt,Je=ni,qe=ii)},setLocked:function(kt){J=kt},setClear:function(kt){sn!==kt&&(r.clearStencil(kt),sn=kt)},reset:function(){J=!1,Ne=null,be=null,Ie=null,Ve=null,we=null,Je=null,qe=null,sn=null}}}const c=new n,f=new a,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},x={},E=new WeakMap,A=[],L=null,M=!1,_=null,I=null,z=null,w=null,P=null,U=null,O=null,b=new ct(0,0,0),D=0,B=!1,H=null,W=null,ne=null,le=null,K=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ie=0;const _e=r.getParameter(r.VERSION);_e.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(_e)[1]),k=ie>=1):_e.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),k=ie>=2);let V=null,T={};const X=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),ye=new un().fromArray(X),oe=new un().fromArray(ce);function q(J,Ne,be,Ie){const Ve=new Uint8Array(4),we=r.createTexture();r.bindTexture(J,we),r.texParameteri(J,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(J,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<be;Je++)J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Ve):r.texImage2D(Ne+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ve);return we}const se={};se[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),re(r.DEPTH_TEST),f.setFunc(Qr),yt(!1),Mt(yx),re(r.CULL_FACE),tt(Na);function re(J){g[J]!==!0&&(r.enable(J),g[J]=!0)}function Ae(J){g[J]!==!1&&(r.disable(J),g[J]=!1)}function Oe(J,Ne){return x[J]!==Ne?(r.bindFramebuffer(J,Ne),x[J]=Ne,J===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ne),J===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ce(J,Ne){let be=A,Ie=!1;if(J){be=E.get(Ne),be===void 0&&(be=[],E.set(Ne,be));const Ve=J.textures;if(be.length!==Ve.length||be[0]!==r.COLOR_ATTACHMENT0){for(let we=0,Je=Ve.length;we<Je;we++)be[we]=r.COLOR_ATTACHMENT0+we;be.length=Ve.length,Ie=!0}}else be[0]!==r.BACK&&(be[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(be)}function Qe(J){return L!==J?(r.useProgram(J),L=J,!0):!1}const je={[ks]:r.FUNC_ADD,[PM]:r.FUNC_SUBTRACT,[IM]:r.FUNC_REVERSE_SUBTRACT};je[zM]=r.MIN,je[BM]=r.MAX;const Pe={[FM]:r.ZERO,[GM]:r.ONE,[HM]:r.SRC_COLOR,[dd]:r.SRC_ALPHA,[YM]:r.SRC_ALPHA_SATURATE,[WM]:r.DST_COLOR,[kM]:r.DST_ALPHA,[VM]:r.ONE_MINUS_SRC_COLOR,[pd]:r.ONE_MINUS_SRC_ALPHA,[qM]:r.ONE_MINUS_DST_COLOR,[XM]:r.ONE_MINUS_DST_ALPHA,[jM]:r.CONSTANT_COLOR,[ZM]:r.ONE_MINUS_CONSTANT_COLOR,[KM]:r.CONSTANT_ALPHA,[QM]:r.ONE_MINUS_CONSTANT_ALPHA};function tt(J,Ne,be,Ie,Ve,we,Je,qe,sn,kt){if(J===Na){M===!0&&(Ae(r.BLEND),M=!1);return}if(M===!1&&(re(r.BLEND),M=!0),J!==OM){if(J!==_||kt!==B){if((I!==ks||P!==ks)&&(r.blendEquation(r.FUNC_ADD),I=ks,P=ks),kt)switch(J){case jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mx:r.blendFunc(r.ONE,r.ONE);break;case Sx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pt("WebGLState: Invalid blending: ",J);break}else switch(J){case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Sx:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bx:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",J);break}z=null,w=null,U=null,O=null,b.set(0,0,0),D=0,_=J,B=kt}return}Ve=Ve||Ne,we=we||be,Je=Je||Ie,(Ne!==I||Ve!==P)&&(r.blendEquationSeparate(je[Ne],je[Ve]),I=Ne,P=Ve),(be!==z||Ie!==w||we!==U||Je!==O)&&(r.blendFuncSeparate(Pe[be],Pe[Ie],Pe[we],Pe[Je]),z=be,w=Ie,U=we,O=Je),(qe.equals(b)===!1||sn!==D)&&(r.blendColor(qe.r,qe.g,qe.b,sn),b.copy(qe),D=sn),_=J,B=!1}function at(J,Ne){J.side===Ri?Ae(r.CULL_FACE):re(r.CULL_FACE);let be=J.side===ti;Ne&&(be=!be),yt(be),J.blending===jr&&J.transparent===!1?tt(Na):tt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),f.setFunc(J.depthFunc),f.setTest(J.depthTest),f.setMask(J.depthWrite),c.setMask(J.colorWrite);const Ie=J.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(J.stencilWriteMask),d.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),d.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),wt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function yt(J){H!==J&&(J?r.frontFace(r.CW):r.frontFace(r.CCW),H=J)}function Mt(J){J!==UM?(re(r.CULL_FACE),J!==W&&(J===yx?r.cullFace(r.BACK):J===LM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),W=J}function St(J){J!==ne&&(k&&r.lineWidth(J),ne=J)}function wt(J,Ne,be){J?(re(r.POLYGON_OFFSET_FILL),(le!==Ne||K!==be)&&(le=Ne,K=be,f.getReversed()&&(Ne=-Ne),r.polygonOffset(Ne,be))):Ae(r.POLYGON_OFFSET_FILL)}function Rt(J){J?re(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function Gt(J){J===void 0&&(J=r.TEXTURE0+G-1),V!==J&&(r.activeTexture(J),V=J)}function $(J,Ne,be){be===void 0&&(V===null?be=r.TEXTURE0+G-1:be=V);let Ie=T[be];Ie===void 0&&(Ie={type:void 0,texture:void 0},T[be]=Ie),(Ie.type!==J||Ie.texture!==Ne)&&(V!==be&&(r.activeTexture(be),V=be),r.bindTexture(J,Ne||se[J]),Ie.type=J,Ie.texture=Ne)}function Ct(){const J=T[V];J!==void 0&&J.type!==void 0&&(r.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function Nt(){try{r.compressedTexImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function S(){try{r.texSubImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function j(){try{r.texSubImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function ue(){try{r.compressedTexSubImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Re(){try{r.texStorage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Ue(){try{r.texStorage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function ve(){try{r.texImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Me(){try{r.texImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function De(J){return v[J]!==void 0?v[J]:r.getParameter(J)}function ke(J,Ne){v[J]!==Ne&&(r.pixelStorei(J,Ne),v[J]=Ne)}function Fe(J){ye.equals(J)===!1&&(r.scissor(J.x,J.y,J.z,J.w),ye.copy(J))}function ze(J){oe.equals(J)===!1&&(r.viewport(J.x,J.y,J.z,J.w),oe.copy(J))}function nt(J,Ne){let be=m.get(Ne);be===void 0&&(be=new WeakMap,m.set(Ne,be));let Ie=be.get(J);Ie===void 0&&(Ie=r.getUniformBlockIndex(Ne,J.name),be.set(J,Ie))}function st(J,Ne){const Ie=m.get(Ne).get(J);p.get(Ne)!==Ie&&(r.uniformBlockBinding(Ne,Ie,J.__bindingPointIndex),p.set(Ne,Ie))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},v={},V=null,T={},x={},E=new WeakMap,A=[],L=null,M=!1,_=null,I=null,z=null,w=null,P=null,U=null,O=null,b=new ct(0,0,0),D=0,B=!1,H=null,W=null,ne=null,le=null,K=null,ye.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:re,disable:Ae,bindFramebuffer:Oe,drawBuffers:Ce,useProgram:Qe,setBlending:tt,setMaterial:at,setFlipSided:yt,setCullFace:Mt,setLineWidth:St,setPolygonOffset:wt,setScissorTest:Rt,activeTexture:Gt,bindTexture:$,unbindTexture:Ct,compressedTexImage2D:Nt,compressedTexImage3D:F,texImage2D:ve,texImage3D:Me,pixelStorei:ke,getParameter:De,updateUBOMapping:nt,uniformBlockBinding:st,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:S,texSubImage3D:j,compressedTexSubImage2D:Q,compressedTexSubImage3D:ue,scissor:Fe,viewport:ze,reset:ft}}function $A(r,e,n,a,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new dt,g=new WeakMap,v=new Set;let x;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(F,S){return A?new OffscreenCanvas(F,S):fu("canvas")}function M(F,S,j){let Q=1;const ue=Nt(F);if((ue.width>j||ue.height>j)&&(Q=j/Math.max(ue.width,ue.height)),Q<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Re=Math.floor(Q*ue.width),Ue=Math.floor(Q*ue.height);x===void 0&&(x=L(Re,Ue));const ve=S?L(Re,Ue):x;return ve.width=Re,ve.height=Ue,ve.getContext("2d").drawImage(F,0,0,Re,Ue),ut("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Re+"x"+Ue+")."),ve}else return"data"in F&&ut("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),F;return F}function _(F){return F.generateMipmaps}function I(F){r.generateMipmap(F)}function z(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(F,S,j,Q,ue,Re=!1){if(F!==null){if(r[F]!==void 0)return r[F];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ue;Q&&(Ue=e.get("EXT_texture_norm16"),Ue||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=S;if(S===r.RED&&(j===r.FLOAT&&(ve=r.R32F),j===r.HALF_FLOAT&&(ve=r.R16F),j===r.UNSIGNED_BYTE&&(ve=r.R8),j===r.UNSIGNED_SHORT&&Ue&&(ve=Ue.R16_EXT),j===r.SHORT&&Ue&&(ve=Ue.R16_SNORM_EXT)),S===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ve=r.R8UI),j===r.UNSIGNED_SHORT&&(ve=r.R16UI),j===r.UNSIGNED_INT&&(ve=r.R32UI),j===r.BYTE&&(ve=r.R8I),j===r.SHORT&&(ve=r.R16I),j===r.INT&&(ve=r.R32I)),S===r.RG&&(j===r.FLOAT&&(ve=r.RG32F),j===r.HALF_FLOAT&&(ve=r.RG16F),j===r.UNSIGNED_BYTE&&(ve=r.RG8),j===r.UNSIGNED_SHORT&&Ue&&(ve=Ue.RG16_EXT),j===r.SHORT&&Ue&&(ve=Ue.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ve=r.RG8UI),j===r.UNSIGNED_SHORT&&(ve=r.RG16UI),j===r.UNSIGNED_INT&&(ve=r.RG32UI),j===r.BYTE&&(ve=r.RG8I),j===r.SHORT&&(ve=r.RG16I),j===r.INT&&(ve=r.RG32I)),S===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ve=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ve=r.RGB16UI),j===r.UNSIGNED_INT&&(ve=r.RGB32UI),j===r.BYTE&&(ve=r.RGB8I),j===r.SHORT&&(ve=r.RGB16I),j===r.INT&&(ve=r.RGB32I)),S===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ve=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ve=r.RGBA16UI),j===r.UNSIGNED_INT&&(ve=r.RGBA32UI),j===r.BYTE&&(ve=r.RGBA8I),j===r.SHORT&&(ve=r.RGBA16I),j===r.INT&&(ve=r.RGBA32I)),S===r.RGB&&(j===r.UNSIGNED_SHORT&&Ue&&(ve=Ue.RGB16_EXT),j===r.SHORT&&Ue&&(ve=Ue.RGB16_SNORM_EXT),j===r.UNSIGNED_INT_5_9_9_9_REV&&(ve=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(ve=r.R11F_G11F_B10F)),S===r.RGBA){const Me=Re?uu:Ot.getTransfer(ue);j===r.FLOAT&&(ve=r.RGBA32F),j===r.HALF_FLOAT&&(ve=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ve=Me===Zt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT&&Ue&&(ve=Ue.RGBA16_EXT),j===r.SHORT&&Ue&&(ve=Ue.RGBA16_SNORM_EXT),j===r.UNSIGNED_SHORT_4_4_4_4&&(ve=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ve=r.RGB5_A1)}return(ve===r.R16F||ve===r.R32F||ve===r.RG16F||ve===r.RG32F||ve===r.RGBA16F||ve===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function P(F,S){let j;return F?S===null||S===na||S===dl?j=r.DEPTH24_STENCIL8:S===Ji?j=r.DEPTH32F_STENCIL8:S===hl&&(j=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===na||S===dl?j=r.DEPTH_COMPONENT24:S===Ji?j=r.DEPTH_COMPONENT32F:S===hl&&(j=r.DEPTH_COMPONENT16),j}function U(F,S){return _(F)===!0||F.isFramebufferTexture&&F.minFilter!==In&&F.minFilter!==Nn?Math.log2(Math.max(S.width,S.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?S.mipmaps.length:1}function O(F){const S=F.target;S.removeEventListener("dispose",O),D(S),S.isVideoTexture&&g.delete(S),S.isHTMLTexture&&v.delete(S)}function b(F){const S=F.target;S.removeEventListener("dispose",b),H(S)}function D(F){const S=a.get(F);if(S.__webglInit===void 0)return;const j=F.source,Q=E.get(j);if(Q){const ue=Q[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&B(F),Object.keys(Q).length===0&&E.delete(j)}a.remove(F)}function B(F){const S=a.get(F);r.deleteTexture(S.__webglTexture);const j=F.source,Q=E.get(j);delete Q[S.__cacheKey],f.memory.textures--}function H(F){const S=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ue=0;ue<S.__webglFramebuffer[Q].length;ue++)r.deleteFramebuffer(S.__webglFramebuffer[Q][ue]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const j=F.textures;for(let Q=0,ue=j.length;Q<ue;Q++){const Re=a.get(j[Q]);Re.__webglTexture&&(r.deleteTexture(Re.__webglTexture),f.memory.textures--),a.remove(j[Q])}a.remove(F)}let W=0;function ne(){W=0}function le(){return W}function K(F){W=F}function G(){const F=W;return F>=l.maxTextures&&ut("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),W+=1,F}function k(F){const S=[];return S.push(F.wrapS),S.push(F.wrapT),S.push(F.wrapR||0),S.push(F.magFilter),S.push(F.minFilter),S.push(F.anisotropy),S.push(F.internalFormat),S.push(F.format),S.push(F.type),S.push(F.generateMipmaps),S.push(F.premultiplyAlpha),S.push(F.flipY),S.push(F.unpackAlignment),S.push(F.colorSpace),S.join()}function ie(F,S){const j=a.get(F);if(F.isVideoTexture&&$(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&j.__version!==F.version){const Q=F.image;if(Q===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(j,F,S);return}}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+S)}function _e(F,S){const j=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){Ae(j,F,S);return}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+S)}function V(F,S){const j=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){Ae(j,F,S);return}n.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+S)}function T(F,S){const j=a.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&j.__version!==F.version){Oe(j,F,S);return}n.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+S)}const X={[Sd]:r.REPEAT,[Ca]:r.CLAMP_TO_EDGE,[bd]:r.MIRRORED_REPEAT},ce={[In]:r.NEAREST,[eS]:r.NEAREST_MIPMAP_NEAREST,[Nc]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[Oh]:r.LINEAR_MIPMAP_NEAREST,[qs]:r.LINEAR_MIPMAP_LINEAR},ye={[iS]:r.NEVER,[lS]:r.ALWAYS,[aS]:r.LESS,[hp]:r.LEQUAL,[sS]:r.EQUAL,[dp]:r.GEQUAL,[rS]:r.GREATER,[oS]:r.NOTEQUAL};function oe(F,S){if(S.type===Ji&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Nn||S.magFilter===Oh||S.magFilter===Nc||S.magFilter===qs||S.minFilter===Nn||S.minFilter===Oh||S.minFilter===Nc||S.minFilter===qs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,X[S.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,X[S.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,X[S.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,ce[S.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===In||S.minFilter!==Nc&&S.minFilter!==qs||S.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||a.get(S).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),a.get(S).__currentAnisotropy=S.anisotropy}}}function q(F,S){let j=!1;F.__webglInit===void 0&&(F.__webglInit=!0,S.addEventListener("dispose",O));const Q=S.source;let ue=E.get(Q);ue===void 0&&(ue={},E.set(Q,ue));const Re=k(S);if(Re!==F.__cacheKey){ue[Re]===void 0&&(ue[Re]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),ue[Re].usedTimes++;const Ue=ue[F.__cacheKey];Ue!==void 0&&(ue[F.__cacheKey].usedTimes--,Ue.usedTimes===0&&B(S)),F.__cacheKey=Re,F.__webglTexture=ue[Re].texture}return j}function se(F,S,j){return Math.floor(Math.floor(F/j)/S)}function re(F,S,j,Q){const Re=F.updateRanges;if(Re.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,j,Q,S.data);else{Re.sort((ke,Fe)=>ke.start-Fe.start);let Ue=0;for(let ke=1;ke<Re.length;ke++){const Fe=Re[Ue],ze=Re[ke],nt=Fe.start+Fe.count,st=se(ze.start,S.width,4),ft=se(Fe.start,S.width,4);ze.start<=nt+1&&st===ft&&se(ze.start+ze.count-1,S.width,4)===st?Fe.count=Math.max(Fe.count,ze.start+ze.count-Fe.start):(++Ue,Re[Ue]=ze)}Re.length=Ue+1;const ve=n.getParameter(r.UNPACK_ROW_LENGTH),Me=n.getParameter(r.UNPACK_SKIP_PIXELS),De=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ke=0,Fe=Re.length;ke<Fe;ke++){const ze=Re[ke],nt=Math.floor(ze.start/4),st=Math.ceil(ze.count/4),ft=nt%S.width,J=Math.floor(nt/S.width),Ne=st,be=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),n.pixelStorei(r.UNPACK_SKIP_ROWS,J),n.texSubImage2D(r.TEXTURE_2D,0,ft,J,Ne,be,j,Q,S.data)}F.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ve),n.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Ae(F,S,j){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const ue=q(F,S),Re=S.source;n.bindTexture(Q,F.__webglTexture,r.TEXTURE0+j);const Ue=a.get(Re);if(Re.version!==Ue.__version||ue===!0){if(n.activeTexture(r.TEXTURE0+j),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const be=Ot.getPrimaries(Ot.workingColorSpace),Ie=S.colorSpace===ps?null:Ot.getPrimaries(S.colorSpace),Ve=S.colorSpace===ps||be===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}n.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let Me=M(S.image,!1,l.maxTextureSize);Me=Ct(S,Me);const De=c.convert(S.format,S.colorSpace),ke=c.convert(S.type);let Fe=w(S.internalFormat,De,ke,S.normalized,S.colorSpace,S.isVideoTexture);oe(Q,S);let ze;const nt=S.mipmaps,st=S.isVideoTexture!==!0,ft=Ue.__version===void 0||ue===!0,J=Re.dataReady,Ne=U(S,Me);if(S.isDepthTexture)Fe=P(S.format===Ys,S.type),ft&&(st?n.texStorage2D(r.TEXTURE_2D,1,Fe,Me.width,Me.height):n.texImage2D(r.TEXTURE_2D,0,Fe,Me.width,Me.height,0,De,ke,null));else if(S.isDataTexture)if(nt.length>0){st&&ft&&n.texStorage2D(r.TEXTURE_2D,Ne,Fe,nt[0].width,nt[0].height);for(let be=0,Ie=nt.length;be<Ie;be++)ze=nt[be],st?J&&n.texSubImage2D(r.TEXTURE_2D,be,0,0,ze.width,ze.height,De,ke,ze.data):n.texImage2D(r.TEXTURE_2D,be,Fe,ze.width,ze.height,0,De,ke,ze.data);S.generateMipmaps=!1}else st?(ft&&n.texStorage2D(r.TEXTURE_2D,Ne,Fe,Me.width,Me.height),J&&re(S,Me,De,ke)):n.texImage2D(r.TEXTURE_2D,0,Fe,Me.width,Me.height,0,De,ke,Me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){st&&ft&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Fe,nt[0].width,nt[0].height,Me.depth);for(let be=0,Ie=nt.length;be<Ie;be++)if(ze=nt[be],S.format!==Gi)if(De!==null)if(st){if(J)if(S.layerUpdates.size>0){const Ve=Qx(ze.width,ze.height,S.format,S.type);for(const we of S.layerUpdates){const Je=ze.data.subarray(we*Ve/ze.data.BYTES_PER_ELEMENT,(we+1)*Ve/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,we,ze.width,ze.height,1,De,Je)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,ze.width,ze.height,Me.depth,De,ze.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,be,Fe,ze.width,ze.height,Me.depth,0,ze.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?J&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,ze.width,ze.height,Me.depth,De,ke,ze.data):n.texImage3D(r.TEXTURE_2D_ARRAY,be,Fe,ze.width,ze.height,Me.depth,0,De,ke,ze.data)}else{st&&ft&&n.texStorage2D(r.TEXTURE_2D,Ne,Fe,nt[0].width,nt[0].height);for(let be=0,Ie=nt.length;be<Ie;be++)ze=nt[be],S.format!==Gi?De!==null?st?J&&n.compressedTexSubImage2D(r.TEXTURE_2D,be,0,0,ze.width,ze.height,De,ze.data):n.compressedTexImage2D(r.TEXTURE_2D,be,Fe,ze.width,ze.height,0,ze.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?J&&n.texSubImage2D(r.TEXTURE_2D,be,0,0,ze.width,ze.height,De,ke,ze.data):n.texImage2D(r.TEXTURE_2D,be,Fe,ze.width,ze.height,0,De,ke,ze.data)}else if(S.isDataArrayTexture)if(st){if(ft&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Fe,Me.width,Me.height,Me.depth),J)if(S.layerUpdates.size>0){const be=Qx(Me.width,Me.height,S.format,S.type);for(const Ie of S.layerUpdates){const Ve=Me.data.subarray(Ie*be/Me.data.BYTES_PER_ELEMENT,(Ie+1)*be/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ie,Me.width,Me.height,1,De,ke,Ve)}S.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,ke,Me.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,Me.width,Me.height,Me.depth,0,De,ke,Me.data);else if(S.isData3DTexture)st?(ft&&n.texStorage3D(r.TEXTURE_3D,Ne,Fe,Me.width,Me.height,Me.depth),J&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,ke,Me.data)):n.texImage3D(r.TEXTURE_3D,0,Fe,Me.width,Me.height,Me.depth,0,De,ke,Me.data);else if(S.isFramebufferTexture){if(ft)if(st)n.texStorage2D(r.TEXTURE_2D,Ne,Fe,Me.width,Me.height);else{let be=Me.width,Ie=Me.height;for(let Ve=0;Ve<Ne;Ve++)n.texImage2D(r.TEXTURE_2D,Ve,Fe,be,Ie,0,De,ke,null),be>>=1,Ie>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const be=r.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),Me.parentNode!==be){be.appendChild(Me),v.add(S),be.onpaint=Ie=>{const Ve=Ie.changedElements;for(const we of v)Ve.includes(we.image)&&(we.needsUpdate=!0)},be.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Me);else{const Ve=r.RGBA,we=r.RGBA,Je=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ve,we,Je,Me)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(st&&ft){const be=Nt(nt[0]);n.texStorage2D(r.TEXTURE_2D,Ne,Fe,be.width,be.height)}for(let be=0,Ie=nt.length;be<Ie;be++)ze=nt[be],st?J&&n.texSubImage2D(r.TEXTURE_2D,be,0,0,De,ke,ze):n.texImage2D(r.TEXTURE_2D,be,Fe,De,ke,ze);S.generateMipmaps=!1}else if(st){if(ft){const be=Nt(Me);n.texStorage2D(r.TEXTURE_2D,Ne,Fe,be.width,be.height)}J&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,De,ke,Me)}else n.texImage2D(r.TEXTURE_2D,0,Fe,De,ke,Me);_(S)&&I(Q),Ue.__version=Re.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function Oe(F,S,j){if(S.image.length!==6)return;const Q=q(F,S),ue=S.source;n.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+j);const Re=a.get(ue);if(ue.version!==Re.__version||Q===!0){n.activeTexture(r.TEXTURE0+j);const Ue=Ot.getPrimaries(Ot.workingColorSpace),ve=S.colorSpace===ps?null:Ot.getPrimaries(S.colorSpace),Me=S.colorSpace===ps||Ue===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const De=S.isCompressedTexture||S.image[0].isCompressedTexture,ke=S.image[0]&&S.image[0].isDataTexture,Fe=[];for(let we=0;we<6;we++)!De&&!ke?Fe[we]=M(S.image[we],!0,l.maxCubemapSize):Fe[we]=ke?S.image[we].image:S.image[we],Fe[we]=Ct(S,Fe[we]);const ze=Fe[0],nt=c.convert(S.format,S.colorSpace),st=c.convert(S.type),ft=w(S.internalFormat,nt,st,S.normalized,S.colorSpace),J=S.isVideoTexture!==!0,Ne=Re.__version===void 0||Q===!0,be=ue.dataReady;let Ie=U(S,ze);oe(r.TEXTURE_CUBE_MAP,S);let Ve;if(De){J&&Ne&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ft,ze.width,ze.height);for(let we=0;we<6;we++){Ve=Fe[we].mipmaps;for(let Je=0;Je<Ve.length;Je++){const qe=Ve[Je];S.format!==Gi?nt!==null?J?be&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Je,0,0,qe.width,qe.height,nt,qe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Je,ft,qe.width,qe.height,0,qe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?be&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Je,0,0,qe.width,qe.height,nt,st,qe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Je,ft,qe.width,qe.height,0,nt,st,qe.data)}}}else{if(Ve=S.mipmaps,J&&Ne){Ve.length>0&&Ie++;const we=Nt(Fe[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ft,we.width,we.height)}for(let we=0;we<6;we++)if(ke){J?be&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Fe[we].width,Fe[we].height,nt,st,Fe[we].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ft,Fe[we].width,Fe[we].height,0,nt,st,Fe[we].data);for(let Je=0;Je<Ve.length;Je++){const sn=Ve[Je].image[we].image;J?be&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Je+1,0,0,sn.width,sn.height,nt,st,sn.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Je+1,ft,sn.width,sn.height,0,nt,st,sn.data)}}else{J?be&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,nt,st,Fe[we]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ft,nt,st,Fe[we]);for(let Je=0;Je<Ve.length;Je++){const qe=Ve[Je];J?be&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Je+1,0,0,nt,st,qe.image[we]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Je+1,ft,nt,st,qe.image[we])}}}_(S)&&I(r.TEXTURE_CUBE_MAP),Re.__version=ue.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function Ce(F,S,j,Q,ue,Re){const Ue=c.convert(j.format,j.colorSpace),ve=c.convert(j.type),Me=w(j.internalFormat,Ue,ve,j.normalized,j.colorSpace),De=a.get(S),ke=a.get(j);if(ke.__renderTarget=S,!De.__hasExternalTextures){const Fe=Math.max(1,S.width>>Re),ze=Math.max(1,S.height>>Re);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?n.texImage3D(ue,Re,Me,Fe,ze,S.depth,0,Ue,ve,null):n.texImage2D(ue,Re,Me,Fe,ze,0,Ue,ve,null)}n.bindFramebuffer(r.FRAMEBUFFER,F),Gt(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,ue,ke.__webglTexture,0,Rt(S)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,ue,ke.__webglTexture,Re),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(F,S,j){if(r.bindRenderbuffer(r.RENDERBUFFER,F),S.depthBuffer){const Q=S.depthTexture,ue=Q&&Q.isDepthTexture?Q.type:null,Re=P(S.stencilBuffer,ue),Ue=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Gt(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt(S),Re,S.width,S.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt(S),Re,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Re,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,F)}else{const Q=S.textures;for(let ue=0;ue<Q.length;ue++){const Re=Q[ue],Ue=c.convert(Re.format,Re.colorSpace),ve=c.convert(Re.type),Me=w(Re.internalFormat,Ue,ve,Re.normalized,Re.colorSpace);Gt(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt(S),Me,S.width,S.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt(S),Me,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Me,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function je(F,S,j){const Q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,F),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=a.get(S.depthTexture);if(ue.__renderTarget=S,(!ue.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,S.depthTexture.addEventListener("dispose",O)),ue.__webglTexture===void 0){ue.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,ue.__webglTexture),oe(r.TEXTURE_CUBE_MAP,S.depthTexture);const De=c.convert(S.depthTexture.format),ke=c.convert(S.depthTexture.type);let Fe;S.depthTexture.format===Oa?Fe=r.DEPTH_COMPONENT24:S.depthTexture.format===Ys&&(Fe=r.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Fe,S.width,S.height,0,De,ke,null)}}else ie(S.depthTexture,0);const Re=ue.__webglTexture,Ue=Rt(S),ve=Q?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,Me=S.depthTexture.format===Ys?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Oa)Gt(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ve,Re,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ve,Re,0);else if(S.depthTexture.format===Ys)Gt(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ve,Re,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ve,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pe(F){const S=a.get(F),j=F.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==F.depthTexture){const Q=F.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const ue=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ue)};Q.addEventListener("dispose",ue),S.__depthDisposeCallback=ue}S.__boundDepthTexture=Q}if(F.depthTexture&&!S.__autoAllocateDepthBuffer)if(j)for(let Q=0;Q<6;Q++)je(S.__webglFramebuffer[Q],F,Q);else{const Q=F.texture.mipmaps;Q&&Q.length>0?je(S.__webglFramebuffer[0],F,0):je(S.__webglFramebuffer,F,0)}else if(j){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),Qe(S.__webglDepthbuffer[Q],F,!1);else{const ue=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,Re)}}else{const Q=F.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Qe(S.__webglDepthbuffer,F,!1);else{const ue=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,Re)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function tt(F,S,j){const Q=a.get(F);S!==void 0&&Ce(Q.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&Pe(F)}function at(F){const S=F.texture,j=a.get(F),Q=a.get(S);F.addEventListener("dispose",b);const ue=F.textures,Re=F.isWebGLCubeRenderTarget===!0,Ue=ue.length>1;if(Ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,f.memory.textures++),Re){j.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[ve]=[];for(let Me=0;Me<S.mipmaps.length;Me++)j.__webglFramebuffer[ve][Me]=r.createFramebuffer()}else j.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)j.__webglFramebuffer[ve]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let ve=0,Me=ue.length;ve<Me;ve++){const De=a.get(ue[ve]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),f.memory.textures++)}if(F.samples>0&&Gt(F)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ve=0;ve<ue.length;ve++){const Me=ue[ve];j.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[ve]);const De=c.convert(Me.format,Me.colorSpace),ke=c.convert(Me.type),Fe=w(Me.internalFormat,De,ke,Me.normalized,Me.colorSpace,F.isXRRenderTarget===!0),ze=Rt(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,Fe,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,j.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Qe(j.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Re){n.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),oe(r.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)Ce(j.__webglFramebuffer[ve][Me],F,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Me);else Ce(j.__webglFramebuffer[ve],F,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);_(S)&&I(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let ve=0,Me=ue.length;ve<Me;ve++){const De=ue[ve],ke=a.get(De);let Fe=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Fe=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Fe,ke.__webglTexture),oe(Fe,De),Ce(j.__webglFramebuffer,F,De,r.COLOR_ATTACHMENT0+ve,Fe,0),_(De)&&I(Fe)}n.unbindTexture()}else{let ve=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ve=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ve,Q.__webglTexture),oe(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)Ce(j.__webglFramebuffer[Me],F,S,r.COLOR_ATTACHMENT0,ve,Me);else Ce(j.__webglFramebuffer,F,S,r.COLOR_ATTACHMENT0,ve,0);_(S)&&I(ve),n.unbindTexture()}F.depthBuffer&&Pe(F)}function yt(F){const S=F.textures;for(let j=0,Q=S.length;j<Q;j++){const ue=S[j];if(_(ue)){const Re=z(F),Ue=a.get(ue).__webglTexture;n.bindTexture(Re,Ue),I(Re),n.unbindTexture()}}}const Mt=[],St=[];function wt(F){if(F.samples>0){if(Gt(F)===!1){const S=F.textures,j=F.width,Q=F.height;let ue=r.COLOR_BUFFER_BIT;const Re=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=a.get(F),ve=S.length>1;if(ve)for(let De=0;De<S.length;De++)n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Me=F.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let De=0;De<S.length;De++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const ke=a.get(S[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ke,0)}r.blitFramebuffer(0,0,j,Q,0,0,j,Q,ue,r.NEAREST),p===!0&&(Mt.length=0,St.length=0,Mt.push(r.COLOR_ATTACHMENT0+De),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Mt.push(Re),St.push(Re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,St)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Mt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let De=0;De<S.length;De++){n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const ke=a.get(S[De]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,ke,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const S=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Rt(F){return Math.min(l.maxSamples,F.samples)}function Gt(F){const S=a.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function $(F){const S=f.render.frame;g.get(F)!==S&&(g.set(F,S),F.update())}function Ct(F,S){const j=F.colorSpace,Q=F.format,ue=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||j!==cu&&j!==ps&&(Ot.getTransfer(j)===Zt?(Q!==Gi||ue!==mi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",j)),S}function Nt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=G,this.resetTextureUnits=ne,this.getTextureUnits=le,this.setTextureUnits=K,this.setTexture2D=ie,this.setTexture2DArray=_e,this.setTexture3D=V,this.setTextureCube=T,this.rebindTextures=tt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function e2(r,e){function n(a,l=ps){let c;const f=Ot.getTransfer(l);if(a===mi)return r.UNSIGNED_BYTE;if(a===op)return r.UNSIGNED_SHORT_4_4_4_4;if(a===lp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Bv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Fv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Iv)return r.BYTE;if(a===zv)return r.SHORT;if(a===hl)return r.UNSIGNED_SHORT;if(a===rp)return r.INT;if(a===na)return r.UNSIGNED_INT;if(a===Ji)return r.FLOAT;if(a===La)return r.HALF_FLOAT;if(a===Gv)return r.ALPHA;if(a===Hv)return r.RGB;if(a===Gi)return r.RGBA;if(a===Oa)return r.DEPTH_COMPONENT;if(a===Ys)return r.DEPTH_STENCIL;if(a===Vv)return r.RED;if(a===cp)return r.RED_INTEGER;if(a===Ks)return r.RG;if(a===up)return r.RG_INTEGER;if(a===fp)return r.RGBA_INTEGER;if(a===nu||a===iu||a===au||a===su)if(f===Zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ed||a===Td||a===Ad||a===wd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Td)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ad)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===wd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Rd||a===Cd||a===Nd||a===Dd||a===Ud||a===ou||a===Ld)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Rd||a===Cd)return f===Zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Nd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Dd)return c.COMPRESSED_R11_EAC;if(a===Ud)return c.COMPRESSED_SIGNED_R11_EAC;if(a===ou)return c.COMPRESSED_RG11_EAC;if(a===Ld)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Od||a===Pd||a===Id||a===zd||a===Bd||a===Fd||a===Gd||a===Hd||a===Vd||a===kd||a===Xd||a===Wd||a===qd||a===Yd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Od)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Pd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Id)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===zd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Bd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Fd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Gd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Hd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Vd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===kd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Xd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Wd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===qd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Yd)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===jd||a===Zd||a===Kd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===jd)return f===Zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Qd||a===Jd||a===lu||a===$d)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Qd)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===lu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===dl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Jv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ia({vertexShader:t2,fragmentShader:n2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ht(new ao(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a2 extends Qs{constructor(e,n){super();const a=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,v=null,x=null,E=null,A=null;const L=typeof XRWebGLBinding<"u",M=new i2,_={},I=n.getContextAttributes();let z=null,w=null;const P=[],U=[],O=new dt;let b=null;const D=new wi;D.viewport=new un;const B=new wi;B.viewport=new un;const H=[D,B],W=new p1;let ne=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=P[q];return se===void 0&&(se=new Gh,P[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=P[q];return se===void 0&&(se=new Gh,P[q]=se),se.getGripSpace()},this.getHand=function(q){let se=P[q];return se===void 0&&(se=new Gh,P[q]=se),se.getHandSpace()};function K(q){const se=U.indexOf(q.inputSource);if(se===-1)return;const re=P[se];re!==void 0&&(re.update(q.inputSource,q.frame,m||f),re.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",G),l.removeEventListener("inputsourceschange",k);for(let q=0;q<P.length;q++){const se=U[q];se!==null&&(U[q]=null,P[q].disconnect(se))}ne=null,le=null,M.reset();for(const q in _)delete _[q];e.setRenderTarget(z),E=null,x=null,v=null,l=null,w=null,oe.stop(),a.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,a.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,a.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return v===null&&L&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",G),l.addEventListener("inputsourceschange",k),I.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ae=null,Oe=null;I.depth&&(Oe=I.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=I.stencil?Ys:Oa,Ae=I.stencil?dl:na);const Ce={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(Ce),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),w=new ta(x.textureWidth,x.textureHeight,{format:Gi,type:mi,depthTexture:new $r(x.textureWidth,x.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const re={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,n,re),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new ta(E.framebufferWidth,E.framebufferHeight,{format:Gi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),oe.setContext(l),oe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function k(q){for(let se=0;se<q.removed.length;se++){const re=q.removed[se],Ae=U.indexOf(re);Ae>=0&&(U[Ae]=null,P[Ae].disconnect(re))}for(let se=0;se<q.added.length;se++){const re=q.added[se];let Ae=U.indexOf(re);if(Ae===-1){for(let Ce=0;Ce<P.length;Ce++)if(Ce>=U.length){U.push(re),Ae=Ce;break}else if(U[Ce]===null){U[Ce]=re,Ae=Ce;break}if(Ae===-1)break}const Oe=P[Ae];Oe&&Oe.connect(re)}}const ie=new te,_e=new te;function V(q,se,re){ie.setFromMatrixPosition(se.matrixWorld),_e.setFromMatrixPosition(re.matrixWorld);const Ae=ie.distanceTo(_e),Oe=se.projectionMatrix.elements,Ce=re.projectionMatrix.elements,Qe=Oe[14]/(Oe[10]-1),je=Oe[14]/(Oe[10]+1),Pe=(Oe[9]+1)/Oe[5],tt=(Oe[9]-1)/Oe[5],at=(Oe[8]-1)/Oe[0],yt=(Ce[8]+1)/Ce[0],Mt=Qe*at,St=Qe*yt,wt=Ae/(-at+yt),Rt=wt*-at;if(se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Rt),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Oe[10]===-1)q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Gt=Qe+wt,$=je+wt,Ct=Mt-Rt,Nt=St+(Ae-Rt),F=Pe*je/$*Gt,S=tt*je/$*Gt;q.projectionMatrix.makePerspective(Ct,Nt,F,S,Gt,$),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function T(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let se=q.near,re=q.far;M.texture!==null&&(M.depthNear>0&&(se=M.depthNear),M.depthFar>0&&(re=M.depthFar)),W.near=B.near=D.near=se,W.far=B.far=D.far=re,(ne!==W.near||le!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),ne=W.near,le=W.far),W.layers.mask=q.layers.mask|6,D.layers.mask=W.layers.mask&-5,B.layers.mask=W.layers.mask&-3;const Ae=q.parent,Oe=W.cameras;T(W,Ae);for(let Ce=0;Ce<Oe.length;Ce++)T(Oe[Ce],Ae);Oe.length===2?V(W,D,B):W.projectionMatrix.copy(D.projectionMatrix),X(q,W,Ae)};function X(q,se,re){re===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ml*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(q){p=q,x!==null&&(x.fixedFoveation=q),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(W)},this.getCameraTexture=function(q){return _[q]};let ce=null;function ye(q,se){if(g=se.getViewerPose(m||f),A=se,g!==null){const re=g.views;E!==null&&(e.setRenderTargetFramebuffer(w,E.framebuffer),e.setRenderTarget(w));let Ae=!1;re.length!==W.cameras.length&&(W.cameras.length=0,Ae=!0);for(let je=0;je<re.length;je++){const Pe=re[je];let tt=null;if(E!==null)tt=E.getViewport(Pe);else{const yt=v.getViewSubImage(x,Pe);tt=yt.viewport,je===0&&(e.setRenderTargetTextures(w,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(w))}let at=H[je];at===void 0&&(at=new wi,at.layers.enable(je),at.viewport=new un,H[je]=at),at.matrix.fromArray(Pe.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Pe.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(tt.x,tt.y,tt.width,tt.height),je===0&&(W.matrix.copy(at.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ae===!0&&W.cameras.push(at)}const Oe=l.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&L){v=a.getBinding();const je=v.getDepthInformation(re[0]);je&&je.isValid&&je.texture&&M.init(je,l.renderState)}if(Oe&&Oe.includes("camera-access")&&L){e.state.unbindTexture(),v=a.getBinding();for(let je=0;je<re.length;je++){const Pe=re[je].camera;if(Pe){let tt=_[Pe];tt||(tt=new Jv,_[Pe]=tt);const at=v.getCameraImage(Pe);tt.sourceTexture=at}}}}for(let re=0;re<P.length;re++){const Ae=U[re],Oe=P[re];Ae!==null&&Oe!==void 0&&Oe.update(Ae,se,m||f)}ce&&ce(q,se),se.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:se}),A=null}const oe=new n_;oe.setAnimationLoop(ye),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}}const s2=new fn,c_=new mt;c_.set(-1,0,0,0,1,0,0,0,1);function r2(r,e){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function a(M,_){_.color.getRGB(M.fogColor.value,$v(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,I,z,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?c(M,_):_.isMeshLambertMaterial?(c(M,_),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&E(M,_,w)):_.isMeshMatcapMaterial?(c(M,_),A(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),L(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,I,z):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===ti&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===ti&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const I=e.get(_),z=I.envMap,w=I.envMapRotation;z&&(M.envMap.value=z,M.envMapRotation.value.setFromMatrix4(s2.makeRotationFromEuler(w)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(c_),M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,I,z){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*I,M.scale.value=z*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function E(M,_,I){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ti&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function L(M,_){const I=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function o2(r,e,n,a){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,P){const U=P.program;a.uniformBlockBinding(w,U)}function m(w,P){let U=l[w.id];U===void 0&&(M(w),U=g(w),l[w.id]=U,w.addEventListener("dispose",I));const O=P.program;a.updateUBOMapping(w,O);const b=e.render.frame;c[w.id]!==b&&(x(w),c[w.id]=b)}function g(w){const P=v();w.__bindingPointIndex=P;const U=r.createBuffer(),O=w.__size,b=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,O,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,U),U}function v(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const P=l[w.id],U=w.uniforms,O=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let b=0,D=U.length;b<D;b++){const B=U[b];if(Array.isArray(B))for(let H=0,W=B.length;H<W;H++)E(B[H],b,H,O);else E(B,b,0,O)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(w,P,U,O){if(L(w,P,U,O)===!0){const b=w.__offset,D=w.value;if(Array.isArray(D)){let B=0;for(let H=0;H<D.length;H++){const W=D[H],ne=_(W);A(W,w.__data,B),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(B+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(D,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,w.__data)}}function A(w,P,U){typeof w=="number"||typeof w=="boolean"?P[0]=w:w.isMatrix3?(P[0]=w.elements[0],P[1]=w.elements[1],P[2]=w.elements[2],P[3]=0,P[4]=w.elements[3],P[5]=w.elements[4],P[6]=w.elements[5],P[7]=0,P[8]=w.elements[6],P[9]=w.elements[7],P[10]=w.elements[8],P[11]=0):ArrayBuffer.isView(w)?P.set(new w.constructor(w.buffer,w.byteOffset,P.length)):w.toArray(P,U)}function L(w,P,U,O){const b=w.value,D=P+"_"+U;if(O[D]===void 0)return typeof b=="number"||typeof b=="boolean"?O[D]=b:ArrayBuffer.isView(b)?O[D]=b.slice():O[D]=b.clone(),!0;{const B=O[D];if(typeof b=="number"||typeof b=="boolean"){if(B!==b)return O[D]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(B.equals(b)===!1)return B.copy(b),!0}}return!1}function M(w){const P=w.uniforms;let U=0;const O=16;for(let D=0,B=P.length;D<B;D++){const H=Array.isArray(P[D])?P[D]:[P[D]];for(let W=0,ne=H.length;W<ne;W++){const le=H[W],K=Array.isArray(le.value)?le.value:[le.value];for(let G=0,k=K.length;G<k;G++){const ie=K[G],_e=_(ie),V=U%O,T=V%_e.boundary,X=V+T;U+=T,X!==0&&O-X<_e.storage&&(U+=O-X),le.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=U,U+=_e.storage}}}const b=U%O;return b>0&&(U+=O-b),w.__size=U,w.__cache={},this}function _(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",w),P}function I(w){const P=w.target;P.removeEventListener("dispose",I);const U=f.indexOf(P.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function z(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:p,update:m,dispose:z}}const l2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function c2(){return Ki===null&&(Ki=new QS(l2,16,16,Ks,La),Ki.name="DFG_LUT",Ki.minFilter=Nn,Ki.magFilter=Nn,Ki.wrapS=Ca,Ki.wrapT=Ca,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class u2{constructor(e={}){const{canvas:n=uS(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:E=mi}=e;this.isWebGLRenderer=!0;let A;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=a.getContextAttributes().alpha}else A=f;const L=E,M=new Set([fp,up,cp]),_=new Set([mi,na,hl,dl,op,lp]),I=new Uint32Array(4),z=new Int32Array(4),w=new te;let P=null,U=null;const O=[],b=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let H=!1,W=null,ne=null,le=null,K=null;this._outputColorSpace=Ai;let G=0,k=0,ie=null,_e=-1,V=null;const T=new un,X=new un;let ce=null;const ye=new ct(0);let oe=0,q=n.width,se=n.height,re=1,Ae=null,Oe=null;const Ce=new un(0,0,q,se),Qe=new un(0,0,q,se);let je=!1;const Pe=new xp;let tt=!1,at=!1;const yt=new fn,Mt=new te,St=new un,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Gt(){return ie===null?re:1}let $=a;function Ct(C,ee){return n.getContext(C,ee)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sp}`),n.addEventListener("webglcontextlost",sn,!1),n.addEventListener("webglcontextrestored",kt,!1),n.addEventListener("webglcontextcreationerror",ni,!1),$===null){const ee="webgl2";if($=Ct(ee,C),$===null)throw Ct(ee)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Pt("WebGLRenderer: "+C.message),C}let Nt,F,S,j,Q,ue,Re,Ue,ve,Me,De,ke,Fe,ze,nt,st,ft,J,Ne,be,Ie,Ve,we;function Je(){Nt=new cT($),Nt.init(),Ie=new e2($,Nt),F=new tT($,Nt,e,Ie),S=new JA($,Nt),F.reversedDepthBuffer&&x&&S.buffers.depth.setReversed(!0),ne=$.createFramebuffer(),le=$.createFramebuffer(),K=$.createFramebuffer(),j=new hT($),Q=new BA,ue=new $A($,Nt,S,Q,F,Ie,j),Re=new lT(B),Ue=new g1($),Ve=new $E($,Ue),ve=new uT($,Ue,j,Ve),Me=new pT($,ve,Ue,Ve,j),J=new dT($,F,ue),nt=new nT(Q),De=new zA(B,Re,Nt,F,Ve,nt),ke=new r2(B,Q),Fe=new GA,ze=new qA(Nt),ft=new JE(B,Re,S,Me,A,p),st=new QA(B,Me,F),we=new o2($,j,F,S),Ne=new eT($,Nt,j),be=new fT($,Nt,j),j.programs=De.programs,B.capabilities=F,B.extensions=Nt,B.properties=Q,B.renderLists=Fe,B.shadowMap=st,B.state=S,B.info=j}Je(),L!==mi&&(D=new gT(L,n.width,n.height,d,l,c));const qe=new a2(B,$);this.xr=qe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const C=Nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(C){C!==void 0&&(re=C,this.setSize(q,se,!1))},this.getSize=function(C){return C.set(q,se)},this.setSize=function(C,ee,me=!0){if(qe.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,se=ee,n.width=Math.floor(C*re),n.height=Math.floor(ee*re),me===!0&&(n.style.width=C+"px",n.style.height=ee+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,C,ee)},this.getDrawingBufferSize=function(C){return C.set(q*re,se*re).floor()},this.setDrawingBufferSize=function(C,ee,me){q=C,se=ee,re=me,n.width=Math.floor(C*me),n.height=Math.floor(ee*me),this.setViewport(0,0,C,ee)},this.setEffects=function(C){if(L===mi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let ee=0;ee<C.length;ee++)if(C[ee].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(Ce)},this.setViewport=function(C,ee,me,de){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,ee,me,de),S.viewport(T.copy(Ce).multiplyScalar(re).round())},this.getScissor=function(C){return C.copy(Qe)},this.setScissor=function(C,ee,me,de){C.isVector4?Qe.set(C.x,C.y,C.z,C.w):Qe.set(C,ee,me,de),S.scissor(X.copy(Qe).multiplyScalar(re).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(C){S.setScissorTest(je=C)},this.setOpaqueSort=function(C){Ae=C},this.setTransparentSort=function(C){Oe=C},this.getClearColor=function(C){return C.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(C=!0,ee=!0,me=!0){let de=0;if(C){let pe=!1;if(ie!==null){const Ge=ie.texture.format;pe=M.has(Ge)}if(pe){const Ge=ie.texture.type,We=_.has(Ge),Be=ft.getClearColor(),Ze=ft.getClearAlpha(),Ye=Be.r,rt=Be.g,gt=Be.b;We?(I[0]=Ye,I[1]=rt,I[2]=gt,I[3]=Ze,$.clearBufferuiv($.COLOR,0,I)):(z[0]=Ye,z[1]=rt,z[2]=gt,z[3]=Ze,$.clearBufferiv($.COLOR,0,z))}else de|=$.COLOR_BUFFER_BIT}ee&&(de|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(de|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),de!==0&&$.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),W=C},this.dispose=function(){n.removeEventListener("webglcontextlost",sn,!1),n.removeEventListener("webglcontextrestored",kt,!1),n.removeEventListener("webglcontextcreationerror",ni,!1),ft.dispose(),Fe.dispose(),ze.dispose(),Q.dispose(),Re.dispose(),Me.dispose(),Ve.dispose(),we.dispose(),De.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",gn),qe.removeEventListener("sessionend",Dn),jn.stop()};function sn(C){C.preventDefault(),hu("WebGLRenderer: Context Lost."),H=!0}function kt(){hu("WebGLRenderer: Context Restored."),H=!1;const C=j.autoReset,ee=st.enabled,me=st.autoUpdate,de=st.needsUpdate,pe=st.type;Je(),j.autoReset=C,st.enabled=ee,st.autoUpdate=me,st.needsUpdate=de,st.type=pe}function ni(C){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ii(C){const ee=C.target;ee.removeEventListener("dispose",ii),ro(ee)}function ro(C){oo(C),Q.remove(C)}function oo(C){const ee=Q.get(C).programs;ee!==void 0&&(ee.forEach(function(me){De.releaseProgram(me)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,ee,me,de,pe,Ge){ee===null&&(ee=wt);const We=pe.isMesh&&pe.matrixWorld.determinantAffine()<0,Be=za(C,ee,me,de,pe);S.setMaterial(de,We);let Ze=me.index,Ye=1;if(de.wireframe===!0){if(Ze=ve.getWireframeAttribute(me),Ze===void 0)return;Ye=2}const rt=me.drawRange,gt=me.attributes.position;let et=rt.start*Ye,It=(rt.start+rt.count)*Ye;Ge!==null&&(et=Math.max(et,Ge.start*Ye),It=Math.min(It,(Ge.start+Ge.count)*Ye)),Ze!==null?(et=Math.max(et,0),It=Math.min(It,Ze.count)):gt!=null&&(et=Math.max(et,0),It=Math.min(It,gt.count));const rn=It-et;if(rn<0||rn===1/0)return;Ve.setup(pe,de,Be,me,Ze);let en,Xt=Ne;if(Ze!==null&&(en=Ue.get(Ze),Xt=be,Xt.setIndex(en)),pe.isMesh)de.wireframe===!0?(S.setLineWidth(de.wireframeLinewidth*Gt()),Xt.setMode($.LINES)):Xt.setMode($.TRIANGLES);else if(pe.isLine){let Wt=de.linewidth;Wt===void 0&&(Wt=1),S.setLineWidth(Wt*Gt()),pe.isLineSegments?Xt.setMode($.LINES):pe.isLineLoop?Xt.setMode($.LINE_LOOP):Xt.setMode($.LINE_STRIP)}else pe.isPoints?Xt.setMode($.POINTS):pe.isSprite&&Xt.setMode($.TRIANGLES);if(pe.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const Wt=pe._multiDrawStarts,Xe=pe._multiDrawCounts,Bn=pe._multiDrawCount,bt=Ze?Ue.get(Ze).bytesPerElement:1,bn=Q.get(de).currentProgram.getUniforms();for(let ai=0;ai<Bn;ai++)bn.setValue($,"_gl_DrawID",ai),Xt.render(Wt[ai]/bt,Xe[ai])}else if(pe.isInstancedMesh)Xt.renderInstances(et,rn,pe.count);else if(me.isInstancedBufferGeometry){const Wt=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Xe=Math.min(me.instanceCount,Wt);Xt.renderInstances(et,rn,Xe)}else Xt.render(et,rn)};function lo(C,ee,me){C.transparent===!0&&C.side===Ri&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Ia(C,ee,me),C.side=gs,C.needsUpdate=!0,Ia(C,ee,me),C.side=Ri):Ia(C,ee,me)}this.compile=function(C,ee,me=null){me===null&&(me=C),U=ze.get(me),U.init(ee),b.push(U),me.traverseVisible(function(pe){pe.isLight&&pe.layers.test(ee.layers)&&(U.pushLight(pe),pe.castShadow&&U.pushShadow(pe))}),C!==me&&C.traverseVisible(function(pe){pe.isLight&&pe.layers.test(ee.layers)&&(U.pushLight(pe),pe.castShadow&&U.pushShadow(pe))}),U.setupLights();const de=new Set;return C.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const Ge=pe.material;if(Ge)if(Array.isArray(Ge))for(let We=0;We<Ge.length;We++){const Be=Ge[We];lo(Be,me,pe),de.add(Be)}else lo(Ge,me,pe),de.add(Ge)}),U=b.pop(),de},this.compileAsync=function(C,ee,me=null){const de=this.compile(C,ee,me);return new Promise(pe=>{function Ge(){if(de.forEach(function(We){Q.get(We).currentProgram.isReady()&&de.delete(We)}),de.size===0){pe(C);return}setTimeout(Ge,10)}Nt.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Js=null;function ki(C){Js&&Js(C)}function gn(){jn.stop()}function Dn(){jn.start()}const jn=new n_;jn.setAnimationLoop(ki),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(C){Js=C,qe.setAnimationLoop(C),C===null?jn.stop():jn.start()},qe.addEventListener("sessionstart",gn),qe.addEventListener("sessionend",Dn),this.render=function(C,ee){if(ee!==void 0&&ee.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;W!==null&&W.renderStart(C,ee);const me=qe.enabled===!0&&qe.isPresenting===!0,de=D!==null&&(ie===null||me)&&D.begin(B,ie);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(ee),ee=qe.getCamera()),C.isScene===!0&&C.onBeforeRender(B,C,ee,ie),U=ze.get(C,b.length),U.init(ee),U.state.textureUnits=ue.getTextureUnits(),b.push(U),yt.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Pe.setFromProjectionMatrix(yt,$i,ee.reversedDepth),at=this.localClippingEnabled,tt=nt.init(this.clippingPlanes,at),P=Fe.get(C,O.length),P.init(),O.push(P),qe.enabled===!0&&qe.isPresenting===!0){const We=B.xr.getDepthSensingMesh();We!==null&&vs(We,ee,-1/0,B.sortObjects)}vs(C,ee,0,B.sortObjects),P.finish(),B.sortObjects===!0&&P.sort(Ae,Oe,ee.reversedDepth),Rt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Rt&&ft.addToRenderList(P,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&nt.beginShadows();const pe=U.state.shadowsArray;if(st.render(pe,C,ee),tt===!0&&nt.endShadows(),(de&&D.hasRenderPass())===!1){const We=P.opaque,Be=P.transmissive;if(U.setupLights(),ee.isArrayCamera){const Ze=ee.cameras;if(Be.length>0)for(let Ye=0,rt=Ze.length;Ye<rt;Ye++){const gt=Ze[Ye];yl(We,Be,C,gt)}Rt&&ft.render(C);for(let Ye=0,rt=Ze.length;Ye<rt;Ye++){const gt=Ze[Ye];_l(P,C,gt,gt.viewport)}}else Be.length>0&&yl(We,Be,C,ee),Rt&&ft.render(C),_l(P,C,ee)}ie!==null&&k===0&&(ue.updateMultisampleRenderTarget(ie),ue.updateRenderTargetMipmap(ie)),de&&D.end(B),C.isScene===!0&&C.onAfterRender(B,C,ee),Ve.resetDefaultState(),_e=-1,V=null,b.pop(),b.length>0?(U=b[b.length-1],ue.setTextureUnits(U.state.textureUnits),tt===!0&&nt.setGlobalState(B.clippingPlanes,U.state.camera)):U=null,O.pop(),O.length>0?P=O[O.length-1]:P=null,W!==null&&W.renderEnd()};function vs(C,ee,me,de){if(C.visible===!1)return;if(C.layers.test(ee.layers)){if(C.isGroup)me=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ee);else if(C.isLightProbeGrid)U.pushLightProbeGrid(C);else if(C.isLight)U.pushLight(C),C.castShadow&&U.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Pe.intersectsSprite(C)){de&&St.setFromMatrixPosition(C.matrixWorld).applyMatrix4(yt);const We=Me.update(C),Be=C.material;Be.visible&&P.push(C,We,Be,me,St.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Pe.intersectsObject(C))){const We=Me.update(C),Be=C.material;if(de&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),St.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),St.copy(We.boundingSphere.center)),St.applyMatrix4(C.matrixWorld).applyMatrix4(yt)),Array.isArray(Be)){const Ze=We.groups;for(let Ye=0,rt=Ze.length;Ye<rt;Ye++){const gt=Ze[Ye],et=Be[gt.materialIndex];et&&et.visible&&P.push(C,We,et,me,St.z,gt)}}else Be.visible&&P.push(C,We,Be,me,St.z,null)}}const Ge=C.children;for(let We=0,Be=Ge.length;We<Be;We++)vs(Ge[We],ee,me,de)}function _l(C,ee,me,de){const{opaque:pe,transmissive:Ge,transparent:We}=C;U.setupLightsView(me),tt===!0&&nt.setGlobalState(B.clippingPlanes,me),de&&S.viewport(T.copy(de)),pe.length>0&&_s(pe,ee,me),Ge.length>0&&_s(Ge,ee,me),We.length>0&&_s(We,ee,me),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function yl(C,ee,me,de){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[de.id]===void 0){const et=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[de.id]=new ta(1,1,{generateMipmaps:!0,type:et?La:mi,minFilter:qs,samples:Math.max(4,F.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Ge=U.state.transmissionRenderTarget[de.id],We=de.viewport||T;Ge.setSize(We.z*B.transmissionResolutionScale,We.w*B.transmissionResolutionScale);const Be=B.getRenderTarget(),Ze=B.getActiveCubeFace(),Ye=B.getActiveMipmapLevel();B.setRenderTarget(Ge),B.getClearColor(ye),oe=B.getClearAlpha(),oe<1&&B.setClearColor(16777215,.5),B.clear(),Rt&&ft.render(me);const rt=B.toneMapping;B.toneMapping=ea;const gt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),U.setupLightsView(de),tt===!0&&nt.setGlobalState(B.clippingPlanes,de),_s(C,me,de),ue.updateMultisampleRenderTarget(Ge),ue.updateRenderTargetMipmap(Ge),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let It=0,rn=ee.length;It<rn;It++){const en=ee[It],{object:Xt,geometry:Wt,material:Xe,group:Bn}=en;if(Xe.side===Ri&&Xt.layers.test(de.layers)){const bt=Xe.side;Xe.side=ti,Xe.needsUpdate=!0,Pa(Xt,me,de,Wt,Xe,Bn),Xe.side=bt,Xe.needsUpdate=!0,et=!0}}et===!0&&(ue.updateMultisampleRenderTarget(Ge),ue.updateRenderTargetMipmap(Ge))}B.setRenderTarget(Be,Ze,Ye),B.setClearColor(ye,oe),gt!==void 0&&(de.viewport=gt),B.toneMapping=rt}function _s(C,ee,me){const de=ee.isScene===!0?ee.overrideMaterial:null;for(let pe=0,Ge=C.length;pe<Ge;pe++){const We=C[pe],{object:Be,geometry:Ze,group:Ye}=We;let rt=We.material;rt.allowOverride===!0&&de!==null&&(rt=de),Be.layers.test(me.layers)&&Pa(Be,ee,me,Ze,rt,Ye)}}function Pa(C,ee,me,de,pe,Ge){C.onBeforeRender(B,ee,me,de,pe,Ge),C.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),pe.onBeforeRender(B,ee,me,de,C,Ge),pe.transparent===!0&&pe.side===Ri&&pe.forceSinglePass===!1?(pe.side=ti,pe.needsUpdate=!0,B.renderBufferDirect(me,ee,de,pe,C,Ge),pe.side=gs,pe.needsUpdate=!0,B.renderBufferDirect(me,ee,de,pe,C,Ge),pe.side=Ri):B.renderBufferDirect(me,ee,de,pe,C,Ge),C.onAfterRender(B,ee,me,de,pe,Ge)}function Ia(C,ee,me){ee.isScene!==!0&&(ee=wt);const de=Q.get(C),pe=U.state.lights,Ge=U.state.shadowsArray,We=pe.state.version,Be=De.getParameters(C,pe.state,Ge,ee,me,U.state.lightProbeGridArray),Ze=De.getProgramCacheKey(Be);let Ye=de.programs;de.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?ee.environment:null,de.fog=ee.fog;const rt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;de.envMap=Re.get(C.envMap||de.environment,rt),de.envMapRotation=de.environment!==null&&C.envMap===null?ee.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",ii),Ye=new Map,de.programs=Ye);let gt=Ye.get(Ze);if(gt!==void 0){if(de.currentProgram===gt&&de.lightsStateVersion===We)return sa(C,Be),gt}else Be.uniforms=De.getUniforms(C),W!==null&&C.isNodeMaterial&&W.build(C,me,Be),C.onBeforeCompile(Be,B),gt=De.acquireProgram(Be,Ze),Ye.set(Ze,gt),de.uniforms=Be.uniforms;const et=de.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=nt.uniform),sa(C,Be),de.needsLights=Ml(C),de.lightsStateVersion=We,de.needsLights&&(et.ambientLightColor.value=pe.state.ambient,et.lightProbe.value=pe.state.probe,et.directionalLights.value=pe.state.directional,et.directionalLightShadows.value=pe.state.directionalShadow,et.spotLights.value=pe.state.spot,et.spotLightShadows.value=pe.state.spotShadow,et.rectAreaLights.value=pe.state.rectArea,et.ltc_1.value=pe.state.rectAreaLTC1,et.ltc_2.value=pe.state.rectAreaLTC2,et.pointLights.value=pe.state.point,et.pointLightShadows.value=pe.state.pointShadow,et.hemisphereLights.value=pe.state.hemi,et.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,et.spotLightMatrix.value=pe.state.spotLightMatrix,et.spotLightMap.value=pe.state.spotLightMap,et.pointShadowMatrix.value=pe.state.pointShadowMatrix),de.lightProbeGrid=U.state.lightProbeGridArray.length>0,de.currentProgram=gt,de.uniformsList=null,gt}function aa(C){if(C.uniformsList===null){const ee=C.currentProgram.getUniforms();C.uniformsList=ru.seqWithValue(ee.seq,C.uniforms)}return C.uniformsList}function sa(C,ee){const me=Q.get(C);me.outputColorSpace=ee.outputColorSpace,me.batching=ee.batching,me.batchingColor=ee.batchingColor,me.instancing=ee.instancing,me.instancingColor=ee.instancingColor,me.instancingMorph=ee.instancingMorph,me.skinning=ee.skinning,me.morphTargets=ee.morphTargets,me.morphNormals=ee.morphNormals,me.morphColors=ee.morphColors,me.morphTargetsCount=ee.morphTargetsCount,me.numClippingPlanes=ee.numClippingPlanes,me.numIntersection=ee.numClipIntersection,me.vertexAlphas=ee.vertexAlphas,me.vertexTangents=ee.vertexTangents,me.toneMapping=ee.toneMapping}function ys(C,ee){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;w.setFromMatrixPosition(ee.matrixWorld);for(let me=0,de=C.length;me<de;me++){const pe=C[me];if(pe.texture!==null&&pe.boundingBox.containsPoint(w))return pe}return null}function za(C,ee,me,de,pe){ee.isScene!==!0&&(ee=wt),ue.resetTextureUnits();const Ge=ee.fog,We=de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial?ee.environment:null,Be=ie===null?B.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ot.workingColorSpace,Ze=de.isMeshStandardMaterial||de.isMeshLambertMaterial&&!de.envMap||de.isMeshPhongMaterial&&!de.envMap,Ye=Re.get(de.envMap||We,Ze),rt=de.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,gt=!!me.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),et=!!me.morphAttributes.position,It=!!me.morphAttributes.normal,rn=!!me.morphAttributes.color;let en=ea;de.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(en=B.toneMapping);const Xt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Wt=Xt!==void 0?Xt.length:0,Xe=Q.get(de),Bn=U.state.lights;if(tt===!0&&(at===!0||C!==V)){const Ht=C===V&&de.id===_e;nt.setState(de,C,Ht)}let bt=!1;de.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Bn.state.version||Xe.outputColorSpace!==Be||pe.isBatchedMesh&&Xe.batching===!1||!pe.isBatchedMesh&&Xe.batching===!0||pe.isBatchedMesh&&Xe.batchingColor===!0&&pe.colorTexture===null||pe.isBatchedMesh&&Xe.batchingColor===!1&&pe.colorTexture!==null||pe.isInstancedMesh&&Xe.instancing===!1||!pe.isInstancedMesh&&Xe.instancing===!0||pe.isSkinnedMesh&&Xe.skinning===!1||!pe.isSkinnedMesh&&Xe.skinning===!0||pe.isInstancedMesh&&Xe.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&Xe.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&Xe.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&Xe.instancingMorph===!1&&pe.morphTexture!==null||Xe.envMap!==Ye||de.fog===!0&&Xe.fog!==Ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==nt.numPlanes||Xe.numIntersection!==nt.numIntersection)||Xe.vertexAlphas!==rt||Xe.vertexTangents!==gt||Xe.morphTargets!==et||Xe.morphNormals!==It||Xe.morphColors!==rn||Xe.toneMapping!==en||Xe.morphTargetsCount!==Wt||!!Xe.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Xe.__version=de.version);let bn=Xe.currentProgram;bt===!0&&(bn=Ia(de,ee,pe),W&&de.isNodeMaterial&&W.onUpdateProgram(de,bn,Xe));let ai=!1,Di=!1,si=!1;const qt=bn.getUniforms(),on=Xe.uniforms;if(S.useProgram(bn.program)&&(ai=!0,Di=!0,si=!0),de.id!==_e&&(_e=de.id,Di=!0),Xe.needsLights){const Ht=ys(U.state.lightProbeGridArray,pe);Xe.lightProbeGrid!==Ht&&(Xe.lightProbeGrid=Ht,Di=!0)}if(ai||V!==C){S.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),qt.setValue($,"projectionMatrix",C.projectionMatrix),qt.setValue($,"viewMatrix",C.matrixWorldInverse);const Xi=qt.map.cameraPosition;Xi!==void 0&&Xi.setValue($,Mt.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&qt.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&qt.setValue($,"isOrthographic",C.isOrthographicCamera===!0),V!==C&&(V=C,Di=!0,si=!0)}if(Xe.needsLights&&(Bn.state.directionalShadowMap.length>0&&qt.setValue($,"directionalShadowMap",Bn.state.directionalShadowMap,ue),Bn.state.spotShadowMap.length>0&&qt.setValue($,"spotShadowMap",Bn.state.spotShadowMap,ue),Bn.state.pointShadowMap.length>0&&qt.setValue($,"pointShadowMap",Bn.state.pointShadowMap,ue)),pe.isSkinnedMesh){qt.setOptional($,pe,"bindMatrix"),qt.setOptional($,pe,"bindMatrixInverse");const Ht=pe.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),qt.setValue($,"boneTexture",Ht.boneTexture,ue))}pe.isBatchedMesh&&(qt.setOptional($,pe,"batchingTexture"),qt.setValue($,"batchingTexture",pe._matricesTexture,ue),qt.setOptional($,pe,"batchingIdTexture"),qt.setValue($,"batchingIdTexture",pe._indirectTexture,ue),qt.setOptional($,pe,"batchingColorTexture"),pe._colorsTexture!==null&&qt.setValue($,"batchingColorTexture",pe._colorsTexture,ue));const Ui=me.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&J.update(pe,me,bn),(Di||Xe.receiveShadow!==pe.receiveShadow)&&(Xe.receiveShadow=pe.receiveShadow,qt.setValue($,"receiveShadow",pe.receiveShadow)),(de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial)&&de.envMap===null&&ee.environment!==null&&(on.envMapIntensity.value=ee.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=c2()),Di){if(qt.setValue($,"toneMappingExposure",B.toneMappingExposure),Xe.needsLights&&xn(on,si),Ge&&de.fog===!0&&ke.refreshFogUniforms(on,Ge),ke.refreshMaterialUniforms(on,de,re,se,U.state.transmissionRenderTarget[C.id]),Xe.needsLights&&Xe.lightProbeGrid){const Ht=Xe.lightProbeGrid;on.probesSH.value=Ht.texture,on.probesMin.value.copy(Ht.boundingBox.min),on.probesMax.value.copy(Ht.boundingBox.max),on.probesResolution.value.copy(Ht.resolution)}ru.upload($,aa(Xe),on,ue)}if(de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(ru.upload($,aa(Xe),on,ue),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&qt.setValue($,"center",pe.center),qt.setValue($,"modelViewMatrix",pe.modelViewMatrix),qt.setValue($,"normalMatrix",pe.normalMatrix),qt.setValue($,"modelMatrix",pe.matrixWorld),de.uniformsGroups!==void 0){const Ht=de.uniformsGroups;for(let Xi=0,Ba=Ht.length;Xi<Ba;Xi++){const Ms=Ht[Xi];we.update(Ms,bn),we.bind(Ms,bn)}}return bn}function xn(C,ee){C.ambientLightColor.needsUpdate=ee,C.lightProbe.needsUpdate=ee,C.directionalLights.needsUpdate=ee,C.directionalLightShadows.needsUpdate=ee,C.pointLights.needsUpdate=ee,C.pointLightShadows.needsUpdate=ee,C.spotLights.needsUpdate=ee,C.spotLightShadows.needsUpdate=ee,C.rectAreaLights.needsUpdate=ee,C.hemisphereLights.needsUpdate=ee}function Ml(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(C,ee,me){const de=Q.get(C);de.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),Q.get(C.texture).__webglTexture=ee,Q.get(C.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:me,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ee){const me=Q.get(C);me.__webglFramebuffer=ee,me.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(C,ee=0,me=0){ie=C,G=ee,k=me;let de=null,pe=!1,Ge=!1;if(C){const Be=Q.get(C);if(Be.__useDefaultFramebuffer!==void 0){S.bindFramebuffer($.FRAMEBUFFER,Be.__webglFramebuffer),T.copy(C.viewport),X.copy(C.scissor),ce=C.scissorTest,S.viewport(T),S.scissor(X),S.setScissorTest(ce),_e=-1;return}else if(Be.__webglFramebuffer===void 0)ue.setupRenderTarget(C);else if(Be.__hasExternalTextures)ue.rebindTextures(C,Q.get(C.texture).__webglTexture,Q.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const rt=C.depthTexture;if(Be.__boundDepthTexture!==rt){if(rt!==null&&Q.has(rt)&&(C.width!==rt.image.width||C.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ge=!0);const Ye=Q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[ee])?de=Ye[ee][me]:de=Ye[ee],pe=!0):C.samples>0&&ue.useMultisampledRTT(C)===!1?de=Q.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?de=Ye[me]:de=Ye,T.copy(C.viewport),X.copy(C.scissor),ce=C.scissorTest}else T.copy(Ce).multiplyScalar(re).floor(),X.copy(Qe).multiplyScalar(re).floor(),ce=je;if(me!==0&&(de=ne),S.bindFramebuffer($.FRAMEBUFFER,de)&&S.drawBuffers(C,de),S.viewport(T),S.scissor(X),S.setScissorTest(ce),pe){const Be=Q.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Be.__webglTexture,me)}else if(Ge){const Be=ee;for(let Ze=0;Ze<C.textures.length;Ze++){const Ye=Q.get(C.textures[Ze]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ze,Ye.__webglTexture,me,Be)}}else if(C!==null&&me!==0){const Be=Q.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Be.__webglTexture,me)}_e=-1},this.readRenderTargetPixels=function(C,ee,me,de,pe,Ge,We,Be=0){if(!(C&&C.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze){S.bindFramebuffer($.FRAMEBUFFER,Ze);try{const Ye=C.textures[Be],rt=Ye.format,gt=Ye.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Be),!F.textureFormatReadable(rt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(gt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=C.width-de&&me>=0&&me<=C.height-pe&&$.readPixels(ee,me,de,pe,Ie.convert(rt),Ie.convert(gt),Ge)}finally{const Ye=ie!==null?Q.get(ie).__webglFramebuffer:null;S.bindFramebuffer($.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,ee,me,de,pe,Ge,We,Be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze)if(ee>=0&&ee<=C.width-de&&me>=0&&me<=C.height-pe){S.bindFramebuffer($.FRAMEBUFFER,Ze);const Ye=C.textures[Be],rt=Ye.format,gt=Ye.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Be),!F.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,et),$.bufferData($.PIXEL_PACK_BUFFER,Ge.byteLength,$.STREAM_READ),$.readPixels(ee,me,de,pe,Ie.convert(rt),Ie.convert(gt),0);const It=ie!==null?Q.get(ie).__webglFramebuffer:null;S.bindFramebuffer($.FRAMEBUFFER,It);const rn=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await fS($,rn,4),$.bindBuffer($.PIXEL_PACK_BUFFER,et),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ge),$.deleteBuffer(et),$.deleteSync(rn),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ee=null,me=0){const de=Math.pow(2,-me),pe=Math.floor(C.image.width*de),Ge=Math.floor(C.image.height*de),We=ee!==null?ee.x:0,Be=ee!==null?ee.y:0;ue.setTexture2D(C,0),$.copyTexSubImage2D($.TEXTURE_2D,me,0,0,We,Be,pe,Ge),S.unbindTexture()},this.copyTextureToTexture=function(C,ee,me=null,de=null,pe=0,Ge=0){let We,Be,Ze,Ye,rt,gt,et,It,rn;const en=C.isCompressedTexture?C.mipmaps[Ge]:C.image;if(me!==null)We=me.max.x-me.min.x,Be=me.max.y-me.min.y,Ze=me.isBox3?me.max.z-me.min.z:1,Ye=me.min.x,rt=me.min.y,gt=me.isBox3?me.min.z:0;else{const on=Math.pow(2,-pe);We=Math.floor(en.width*on),Be=Math.floor(en.height*on),C.isDataArrayTexture?Ze=en.depth:C.isData3DTexture?Ze=Math.floor(en.depth*on):Ze=1,Ye=0,rt=0,gt=0}de!==null?(et=de.x,It=de.y,rn=de.z):(et=0,It=0,rn=0);const Xt=Ie.convert(ee.format),Wt=Ie.convert(ee.type);let Xe;ee.isData3DTexture?(ue.setTexture3D(ee,0),Xe=$.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(ue.setTexture2DArray(ee,0),Xe=$.TEXTURE_2D_ARRAY):(ue.setTexture2D(ee,0),Xe=$.TEXTURE_2D),S.activeTexture($.TEXTURE0),S.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ee.flipY),S.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),S.pixelStorei($.UNPACK_ALIGNMENT,ee.unpackAlignment);const Bn=S.getParameter($.UNPACK_ROW_LENGTH),bt=S.getParameter($.UNPACK_IMAGE_HEIGHT),bn=S.getParameter($.UNPACK_SKIP_PIXELS),ai=S.getParameter($.UNPACK_SKIP_ROWS),Di=S.getParameter($.UNPACK_SKIP_IMAGES);S.pixelStorei($.UNPACK_ROW_LENGTH,en.width),S.pixelStorei($.UNPACK_IMAGE_HEIGHT,en.height),S.pixelStorei($.UNPACK_SKIP_PIXELS,Ye),S.pixelStorei($.UNPACK_SKIP_ROWS,rt),S.pixelStorei($.UNPACK_SKIP_IMAGES,gt);const si=C.isDataArrayTexture||C.isData3DTexture,qt=ee.isDataArrayTexture||ee.isData3DTexture;if(C.isDepthTexture){const on=Q.get(C),Ui=Q.get(ee),Ht=Q.get(on.__renderTarget),Xi=Q.get(Ui.__renderTarget);S.bindFramebuffer($.READ_FRAMEBUFFER,Ht.__webglFramebuffer),S.bindFramebuffer($.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Ba=0;Ba<Ze;Ba++)si&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Q.get(C).__webglTexture,pe,gt+Ba),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Q.get(ee).__webglTexture,Ge,rn+Ba)),$.blitFramebuffer(Ye,rt,We,Be,et,It,We,Be,$.DEPTH_BUFFER_BIT,$.NEAREST);S.bindFramebuffer($.READ_FRAMEBUFFER,null),S.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(pe!==0||C.isRenderTargetTexture||Q.has(C)){const on=Q.get(C),Ui=Q.get(ee);S.bindFramebuffer($.READ_FRAMEBUFFER,le),S.bindFramebuffer($.DRAW_FRAMEBUFFER,K);for(let Ht=0;Ht<Ze;Ht++)si?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,on.__webglTexture,pe,gt+Ht):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,on.__webglTexture,pe),qt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ui.__webglTexture,Ge,rn+Ht):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ui.__webglTexture,Ge),pe!==0?$.blitFramebuffer(Ye,rt,We,Be,et,It,We,Be,$.COLOR_BUFFER_BIT,$.NEAREST):qt?$.copyTexSubImage3D(Xe,Ge,et,It,rn+Ht,Ye,rt,We,Be):$.copyTexSubImage2D(Xe,Ge,et,It,Ye,rt,We,Be);S.bindFramebuffer($.READ_FRAMEBUFFER,null),S.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else qt?C.isDataTexture||C.isData3DTexture?$.texSubImage3D(Xe,Ge,et,It,rn,We,Be,Ze,Xt,Wt,en.data):ee.isCompressedArrayTexture?$.compressedTexSubImage3D(Xe,Ge,et,It,rn,We,Be,Ze,Xt,en.data):$.texSubImage3D(Xe,Ge,et,It,rn,We,Be,Ze,Xt,Wt,en):C.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ge,et,It,We,Be,Xt,Wt,en.data):C.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ge,et,It,en.width,en.height,Xt,en.data):$.texSubImage2D($.TEXTURE_2D,Ge,et,It,We,Be,Xt,Wt,en);S.pixelStorei($.UNPACK_ROW_LENGTH,Bn),S.pixelStorei($.UNPACK_IMAGE_HEIGHT,bt),S.pixelStorei($.UNPACK_SKIP_PIXELS,bn),S.pixelStorei($.UNPACK_SKIP_ROWS,ai),S.pixelStorei($.UNPACK_SKIP_IMAGES,Di),Ge===0&&ee.generateMipmaps&&$.generateMipmap(Xe),S.unbindTexture()},this.initRenderTarget=function(C){Q.get(C).__webglFramebuffer===void 0&&ue.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ue.setTextureCube(C,0):C.isData3DTexture?ue.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ue.setTexture2DArray(C,0):ue.setTexture2D(C,0),S.unbindTexture()},this.resetState=function(){G=0,k=0,ie=null,S.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ot._getUnpackColorSpace()}}var bp={};(function r(e,n,a,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),f=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var V=new OffscreenCanvas(1,1),T=V.getContext("2d");T.fillRect(0,0,1,1);var X=V.transferToImageBitmap();T.createPattern(X,"no-repeat")}catch{return!1}return!0})();function p(){}function m(V){var T=n.exports.Promise,X=T!==void 0?T:e.Promise;return typeof X=="function"?new X(V):(V(p,p),null)}var g=(function(V,T){return{transform:function(X){if(V)return X;if(T.has(X))return T.get(X);var ce=new OffscreenCanvas(X.width,X.height),ye=ce.getContext("2d");return ye.drawImage(X,0,0),T.set(X,ce),ce},clear:function(){T.clear()}}})(d,new Map),v=(function(){var V=Math.floor(16.666666666666668),T,X,ce={},ye=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(T=function(oe){var q=Math.random();return ce[q]=requestAnimationFrame(function se(re){ye===re||ye+V-1<re?(ye=re,delete ce[q],oe()):ce[q]=requestAnimationFrame(se)}),q},X=function(oe){ce[oe]&&cancelAnimationFrame(ce[oe])}):(T=function(oe){return setTimeout(oe,V)},X=function(oe){return clearTimeout(oe)}),{frame:T,cancel:X}})(),x=(function(){var V,T,X={};function ce(ye){function oe(q,se){ye.postMessage({options:q||{},callback:se})}ye.init=function(se){var re=se.transferControlToOffscreen();ye.postMessage({canvas:re},[re])},ye.fire=function(se,re,Ae){if(T)return oe(se,null),T;var Oe=Math.random().toString(36).slice(2);return T=m(function(Ce){function Qe(je){je.data.callback===Oe&&(delete X[Oe],ye.removeEventListener("message",Qe),T=null,g.clear(),Ae(),Ce())}ye.addEventListener("message",Qe),oe(se,Oe),X[Oe]=Qe.bind(null,{data:{callback:Oe}})}),T},ye.reset=function(){ye.postMessage({reset:!0});for(var se in X)X[se](),delete X[se]}}return function(){if(V)return V;if(!a&&c){var ye=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{V=new Worker(URL.createObjectURL(new Blob([ye])))}catch(oe){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",oe),null}ce(V)}return V}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function A(V,T){return T?T(V):V}function L(V){return V!=null}function M(V,T,X){return A(V&&L(V[T])?V[T]:E[T],X)}function _(V){return V<0?0:Math.floor(V)}function I(V,T){return Math.floor(Math.random()*(T-V))+V}function z(V){return parseInt(V,16)}function w(V){return V.map(P)}function P(V){var T=String(V).replace(/[^0-9a-f]/gi,"");return T.length<6&&(T=T[0]+T[0]+T[1]+T[1]+T[2]+T[2]),{r:z(T.substring(0,2)),g:z(T.substring(2,4)),b:z(T.substring(4,6))}}function U(V){var T=M(V,"origin",Object);return T.x=M(T,"x",Number),T.y=M(T,"y",Number),T}function O(V){V.width=document.documentElement.clientWidth,V.height=document.documentElement.clientHeight}function b(V){var T=V.getBoundingClientRect();V.width=T.width,V.height=T.height}function D(V){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=V,T}function B(V,T,X,ce,ye,oe,q,se,re){V.save(),V.translate(T,X),V.rotate(oe),V.scale(ce,ye),V.arc(0,0,1,q,se,re),V.restore()}function H(V){var T=V.angle*(Math.PI/180),X=V.spread*(Math.PI/180);return{x:V.x,y:V.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:V.startVelocity*.5+Math.random()*V.startVelocity,angle2D:-T+(.5*X-Math.random()*X),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:V.color,shape:V.shape,tick:0,totalTicks:V.ticks,decay:V.decay,drift:V.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:V.gravity*3,ovalScalar:.6,scalar:V.scalar,flat:V.flat}}function W(V,T){T.x+=Math.cos(T.angle2D)*T.velocity+T.drift,T.y+=Math.sin(T.angle2D)*T.velocity+T.gravity,T.velocity*=T.decay,T.flat?(T.wobble=0,T.wobbleX=T.x+10*T.scalar,T.wobbleY=T.y+10*T.scalar,T.tiltSin=0,T.tiltCos=0,T.random=1):(T.wobble+=T.wobbleSpeed,T.wobbleX=T.x+10*T.scalar*Math.cos(T.wobble),T.wobbleY=T.y+10*T.scalar*Math.sin(T.wobble),T.tiltAngle+=.1,T.tiltSin=Math.sin(T.tiltAngle),T.tiltCos=Math.cos(T.tiltAngle),T.random=Math.random()+2);var X=T.tick++/T.totalTicks,ce=T.x+T.random*T.tiltCos,ye=T.y+T.random*T.tiltSin,oe=T.wobbleX+T.random*T.tiltCos,q=T.wobbleY+T.random*T.tiltSin;if(V.fillStyle="rgba("+T.color.r+", "+T.color.g+", "+T.color.b+", "+(1-X)+")",V.beginPath(),f&&T.shape.type==="path"&&typeof T.shape.path=="string"&&Array.isArray(T.shape.matrix))V.fill(k(T.shape.path,T.shape.matrix,T.x,T.y,Math.abs(oe-ce)*.1,Math.abs(q-ye)*.1,Math.PI/10*T.wobble));else if(T.shape.type==="bitmap"){var se=Math.PI/10*T.wobble,re=Math.abs(oe-ce)*.1,Ae=Math.abs(q-ye)*.1,Oe=T.shape.bitmap.width*T.scalar,Ce=T.shape.bitmap.height*T.scalar,Qe=new DOMMatrix([Math.cos(se)*re,Math.sin(se)*re,-Math.sin(se)*Ae,Math.cos(se)*Ae,T.x,T.y]);Qe.multiplySelf(new DOMMatrix(T.shape.matrix));var je=V.createPattern(g.transform(T.shape.bitmap),"no-repeat");je.setTransform(Qe),V.globalAlpha=1-X,V.fillStyle=je,V.fillRect(T.x-Oe/2,T.y-Ce/2,Oe,Ce),V.globalAlpha=1}else if(T.shape==="circle")V.ellipse?V.ellipse(T.x,T.y,Math.abs(oe-ce)*T.ovalScalar,Math.abs(q-ye)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI):B(V,T.x,T.y,Math.abs(oe-ce)*T.ovalScalar,Math.abs(q-ye)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI);else if(T.shape==="star")for(var Pe=Math.PI/2*3,tt=4*T.scalar,at=8*T.scalar,yt=T.x,Mt=T.y,St=5,wt=Math.PI/St;St--;)yt=T.x+Math.cos(Pe)*at,Mt=T.y+Math.sin(Pe)*at,V.lineTo(yt,Mt),Pe+=wt,yt=T.x+Math.cos(Pe)*tt,Mt=T.y+Math.sin(Pe)*tt,V.lineTo(yt,Mt),Pe+=wt;else V.moveTo(Math.floor(T.x),Math.floor(T.y)),V.lineTo(Math.floor(T.wobbleX),Math.floor(ye)),V.lineTo(Math.floor(oe),Math.floor(q)),V.lineTo(Math.floor(ce),Math.floor(T.wobbleY));return V.closePath(),V.fill(),T.tick<T.totalTicks}function ne(V,T,X,ce,ye){var oe=T.slice(),q=V.getContext("2d"),se,re,Ae=m(function(Oe){function Ce(){se=re=null,q.clearRect(0,0,ce.width,ce.height),g.clear(),ye(),Oe()}function Qe(){a&&!(ce.width===l.width&&ce.height===l.height)&&(ce.width=V.width=l.width,ce.height=V.height=l.height),!ce.width&&!ce.height&&(X(V),ce.width=V.width,ce.height=V.height),q.clearRect(0,0,ce.width,ce.height),oe=oe.filter(function(je){return W(q,je)}),oe.length?se=v.frame(Qe):Ce()}se=v.frame(Qe),re=Ce});return{addFettis:function(Oe){return oe=oe.concat(Oe),Ae},canvas:V,promise:Ae,reset:function(){se&&v.cancel(se),re&&re()}}}function le(V,T){var X=!V,ce=!!M(T||{},"resize"),ye=!1,oe=M(T,"disableForReducedMotion",Boolean),q=c&&!!M(T||{},"useWorker"),se=q?x():null,re=X?O:b,Ae=V&&se?!!V.__confetti_initialized:!1,Oe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ce;function Qe(Pe,tt,at){for(var yt=M(Pe,"particleCount",_),Mt=M(Pe,"angle",Number),St=M(Pe,"spread",Number),wt=M(Pe,"startVelocity",Number),Rt=M(Pe,"decay",Number),Gt=M(Pe,"gravity",Number),$=M(Pe,"drift",Number),Ct=M(Pe,"colors",w),Nt=M(Pe,"ticks",Number),F=M(Pe,"shapes"),S=M(Pe,"scalar"),j=!!M(Pe,"flat"),Q=U(Pe),ue=yt,Re=[],Ue=V.width*Q.x,ve=V.height*Q.y;ue--;)Re.push(H({x:Ue,y:ve,angle:Mt,spread:St,startVelocity:wt,color:Ct[ue%Ct.length],shape:F[I(0,F.length)],ticks:Nt,decay:Rt,gravity:Gt,drift:$,scalar:S,flat:j}));return Ce?Ce.addFettis(Re):(Ce=ne(V,Re,re,tt,at),Ce.promise)}function je(Pe){var tt=oe||M(Pe,"disableForReducedMotion",Boolean),at=M(Pe,"zIndex",Number);if(tt&&Oe)return m(function(wt){wt()});X&&Ce?V=Ce.canvas:X&&!V&&(V=D(at),document.body.appendChild(V)),ce&&!Ae&&re(V);var yt={width:V.width,height:V.height};se&&!Ae&&se.init(V),Ae=!0,se&&(V.__confetti_initialized=!0);function Mt(){if(se){var wt={getBoundingClientRect:function(){if(!X)return V.getBoundingClientRect()}};re(wt),se.postMessage({resize:{width:wt.width,height:wt.height}});return}yt.width=yt.height=null}function St(){Ce=null,ce&&(ye=!1,e.removeEventListener("resize",Mt)),X&&V&&(document.body.contains(V)&&document.body.removeChild(V),V=null,Ae=!1)}return ce&&!ye&&(ye=!0,e.addEventListener("resize",Mt,!1)),se?se.fire(Pe,yt,St):Qe(Pe,yt,St)}return je.reset=function(){se&&se.reset(),Ce&&Ce.reset()},je}var K;function G(){return K||(K=le(null,{useWorker:!0,resize:!0})),K}function k(V,T,X,ce,ye,oe,q){var se=new Path2D(V),re=new Path2D;re.addPath(se,new DOMMatrix(T));var Ae=new Path2D;return Ae.addPath(re,new DOMMatrix([Math.cos(q)*ye,Math.sin(q)*ye,-Math.sin(q)*oe,Math.cos(q)*oe,X,ce])),Ae}function ie(V){if(!f)throw new Error("path confetti are not supported in this browser");var T,X;typeof V=="string"?T=V:(T=V.path,X=V.matrix);var ce=new Path2D(T),ye=document.createElement("canvas"),oe=ye.getContext("2d");if(!X){for(var q=1e3,se=q,re=q,Ae=0,Oe=0,Ce,Qe,je=0;je<q;je+=2)for(var Pe=0;Pe<q;Pe+=2)oe.isPointInPath(ce,je,Pe,"nonzero")&&(se=Math.min(se,je),re=Math.min(re,Pe),Ae=Math.max(Ae,je),Oe=Math.max(Oe,Pe));Ce=Ae-se,Qe=Oe-re;var tt=10,at=Math.min(tt/Ce,tt/Qe);X=[at,0,0,at,-Math.round(Ce/2+se)*at,-Math.round(Qe/2+re)*at]}return{type:"path",path:T,matrix:X}}function _e(V){var T,X=1,ce="#000000",ye='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof V=="string"?T=V:(T=V.text,X="scalar"in V?V.scalar:X,ye="fontFamily"in V?V.fontFamily:ye,ce="color"in V?V.color:ce);var oe=10*X,q=""+oe+"px "+ye,se=new OffscreenCanvas(oe,oe),re=se.getContext("2d");re.font=q;var Ae=re.measureText(T),Oe=Math.ceil(Ae.actualBoundingBoxRight+Ae.actualBoundingBoxLeft),Ce=Math.ceil(Ae.actualBoundingBoxAscent+Ae.actualBoundingBoxDescent),Qe=2,je=Ae.actualBoundingBoxLeft+Qe,Pe=Ae.actualBoundingBoxAscent+Qe;Oe+=Qe+Qe,Ce+=Qe+Qe,se=new OffscreenCanvas(Oe,Ce),re=se.getContext("2d"),re.font=q,re.fillStyle=ce,re.fillText(T,je,Pe);var tt=1/X;return{type:"bitmap",bitmap:se.transferToImageBitmap(),matrix:[tt,0,0,tt,-Oe*tt/2,-Ce*tt/2]}}n.exports=function(){return G().apply(this,arguments)},n.exports.reset=function(){G().reset()},n.exports.create=le,n.exports.shapeFromPath=ie,n.exports.shapeFromText=_e})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),bp,!1);const f2=bp.exports;bp.exports.create;function h2(r,e,n,a){return new qn(r,e,n,2,2,2)}function d2(){const r=document.createElement("canvas");r.width=256,r.height=128;const e=r.getContext("2d");e.fillStyle="#f59e0b",e.strokeStyle="#ffffff",e.lineWidth=8;const n=20,a=14,l=216,c=90,f=45;e.beginPath(),e.moveTo(n+f,a),e.arcTo(n+l,a,n+l,a+c,f),e.arcTo(n+l,a+c,n,a+c,f),e.arcTo(n,a+c,n,a,f),e.arcTo(n,a,n+l,a,f),e.closePath(),e.fill(),e.stroke(),e.fillStyle="#1e1b4b",e.font="900 60px Fredoka, Impact, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("YOU",128,60);const d=new vp(r);return d.needsUpdate=!0,d}function fd(r,e="brawler",n=!1){const a=new gi,l=[],c=[],f=[],d=[],p=new ct(r),m=new ct("#1e293b"),g=new ct("#0f172a"),v=new ct("#e2e8f0"),x=new ct("#38bdf8"),E=new ct("#334155"),A=new Cn({color:p,roughness:.35,metalness:.25}),L=new Cn({color:m,roughness:.5,metalness:.4}),M=new o1({color:x,roughness:.1,metalness:.1,transmission:.4,transparent:!0,opacity:.85}),_=new Cn({color:g,roughness:.8,metalness:.1}),I=new Cn({color:v,roughness:.3,metalness:.7}),z=new Cn({color:E,roughness:.4,metalness:.6}),w=new qn(2.1,.45,3.4),P=new ht(w,L);P.position.y=.45,P.castShadow=!0,P.receiveShadow=!0,a.add(P);let U=2.2,O=.85,b=3.2;e==="brawler"?(U=2.4,O=.95,b=3.3):e==="truck"?(U=2.3,O=1.1,b=3.4):e==="sport"&&(U=2.1,O=.75,b=3.3);const D=h2(U,O,b),B=new ht(D,A);B.position.y=.85,B.castShadow=!0,B.receiveShadow=!0,a.add(B);let H=1.7,W=.75,ne=1.8,le=-.2;e==="sport"?(H=1.6,W=.6,ne=1.9,le=-.3):e==="truck"&&(H=1.8,W=.85,ne=1.4,le=.3);const K=new qn(H,W,ne),G=new ht(K,M);G.position.set(0,1.5,le),G.castShadow=!0,a.add(G);const k=new qn(H+.08,.12,ne+.08),ie=new ht(k,A);ie.position.set(0,1.5+W/2+.06,le),ie.castShadow=!0,a.add(ie);const _e=U+.3,V=new qn(_e,.45,.4),T=new ht(V,z);if(T.position.set(0,.6,b/2+.15),T.castShadow=!0,a.add(T),e==="brawler"){const S=new Ni(.12,.12,_e,12),j=new ht(S,z);j.rotation.z=Math.PI/2,j.position.set(0,.9,b/2+.2),a.add(j)}const X=new qn(U+.15,.35,.3),ce=new ht(X,z);ce.position.set(0,.6,-b/2-.12),ce.castShadow=!0,a.add(ce);const ye=new Ni(.2,.2,.1,16),oe=new Cn({color:16776171,emissive:16772565,emissiveIntensity:.9,roughness:.2}),q=new ht(ye,oe);q.rotation.x=Math.PI/2,q.position.set(-.75,.9,b/2+.02),a.add(q),f.push(q);const se=new ht(ye,oe);se.rotation.x=Math.PI/2,se.position.set(.75,.9,b/2+.02),a.add(se),f.push(se);const re=new eo(1.6,6.5,16,1,!0);re.rotateX(-Math.PI/2),re.translate(0,0,3.25);const Ae=new Vi({color:16772565,transparent:!0,opacity:.12,depthWrite:!1,side:Ri}),Oe=new ht(re,Ae);Oe.position.set(-.75,.6,b/2),a.add(Oe);const Ce=new ht(re,Ae);Ce.position.set(.75,.6,b/2),a.add(Ce);const Qe=new Cn({color:15680580,emissive:14427686,emissiveIntensity:.8,roughness:.3}),je=new qn(.4,.18,.1),Pe=new ht(je,Qe);Pe.position.set(-.8,.85,-b/2-.02),a.add(Pe),d.push(Pe);const tt=new ht(je,Qe);if(tt.position.set(.8,.85,-b/2-.02),a.add(tt),d.push(tt),e==="sport"||e==="brawler"){const S=new qn(2,.12,.5),j=new ht(S,L);j.position.set(0,1.7,-b/2+.15),j.castShadow=!0,a.add(j);const Q=new qn(.1,.45,.1),ue=new ht(Q,L);ue.position.set(-.7,1.45,-b/2+.15),a.add(ue);const Re=new ht(Q,L);Re.position.set(.7,1.45,-b/2+.15),a.add(Re)}else if(e==="classic"){const S=new qn(.7,.3,.9),j=new ht(S,L);j.position.set(0,1.35,.9),j.castShadow=!0,a.add(j)}const at=new Ni(.12,.14,.4,12),yt=new Cn({color:4674921,metalness:.8,roughness:.3}),Mt=new ht(at,yt);Mt.rotation.x=Math.PI/2,Mt.position.set(-.5,.45,-b/2-.25),a.add(Mt);const St=new ht(at,yt);St.rotation.x=Math.PI/2,St.position.set(.5,.45,-b/2-.25),a.add(St);const wt=[new te(-.5,.45,-b/2-.45),new te(.5,.45,-b/2-.45)],Rt=e==="truck"?.6:.52,Gt=.42,$=new Ni(Rt,Rt,Gt,24);$.rotateZ(Math.PI/2);const Ct=new Ni(Rt*.55,Rt*.55,Gt+.02,12);Ct.rotateZ(Math.PI/2),[{x:-U/2-.16,z:1.1,isFront:!0},{x:U/2+.16,z:1.1,isFront:!0},{x:-U/2-.16,z:-1.1,isFront:!1},{x:U/2+.16,z:-1.1,isFront:!1}].forEach(S=>{const j=new ht($,_),Q=new ht(Ct,I);j.add(Q),j.position.set(S.x,Rt,S.z),j.castShadow=!0,a.add(j),l.push(j),S.isFront&&c.push(j)});let F;if(n){F=new gi;const S=d2(),j=new ao(2.2,1.1),Q=new Vi({map:S,transparent:!0,depthWrite:!1,side:Ri}),ue=new ht(j,Q);ue.position.y=.5,F.add(ue);const Re=new eo(.32,.55,16);Re.rotateX(Math.PI);const Ue=new Cn({color:16096779,emissive:14251782,emissiveIntensity:.6,roughness:.2}),ve=new ht(Re,Ue);ve.position.y=-.15,F.add(ve),F.position.set(0,3.2,0),a.add(F)}return{group:a,wheels:l,frontWheels:c,bodyMesh:B,badgeMesh:F,headlights:f,taillights:d,exhaustPoints:wt}}function p2(r="classic"){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d"),a=512;let l="#3b82f6",c="#1d4ed8",f="#f59e0b",d="#eab308",p="#1e1b4b";r==="cyber"?(l="#0f172a",c="#1e1b4b",f="#06b6d4",d="#ec4899",p="#3b0764"):r==="desert"?(l="#d97706",c="#b45309",f="#fef08a",d="#78350f",p="#fde68a"):r==="lava"&&(l="#18181b",c="#27272a",f="#ef4444",d="#f97316",p="#450a0a"),n.fillStyle=l,n.beginPath(),n.arc(a,a,510,0,Math.PI*2),n.fill(),n.strokeStyle=c,n.lineWidth=28,n.beginPath(),n.arc(a,a,440,0,Math.PI*2),n.stroke();const m=64;for(let v=0;v<m;v++){const x=v/m*Math.PI*2,E=(v+1)/m*Math.PI*2;n.fillStyle=v%2===0?d:p,n.beginPath(),n.arc(a,a,506,x,E),n.arc(a,a,460,E,x,!0),n.closePath(),n.fill()}n.strokeStyle="rgba(255, 255, 255, 0.15)",n.lineWidth=4;for(let v=0;v<16;v++){const x=v/16*Math.PI*2;n.beginPath(),n.moveTo(a+Math.cos(x)*140,a+Math.sin(x)*140),n.lineTo(a+Math.cos(x)*450,a+Math.sin(x)*450),n.stroke()}n.fillStyle=c,n.beginPath(),n.arc(a,a,190,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=12,n.beginPath(),n.arc(a,a,190,0,Math.PI*2),n.stroke(),n.fillStyle=f,n.beginPath(),n.arc(a,a,120,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.font="900 90px Fredoka, Impact, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("SUMO",a,a-15),n.font="800 42px Fredoka, sans-serif",n.fillText("CARS",a,a+45);const g=new vp(e);return g.anisotropy=8,g.needsUpdate=!0,g}function m2(r,e,n,a){const l=new gi,c=new Cn({color:16777215,roughness:.9,metalness:.05,flatShading:!0}),f=new vl(1,1);return[{x:0,y:0,z:0,s:2.2},{x:1.8,y:-.2,z:.2,s:1.6},{x:-1.7,y:-.3,z:-.2,s:1.7},{x:.7,y:.8,z:-.3,s:1.5},{x:-.6,y:.6,z:.4,s:1.4}].forEach(p=>{const m=new ht(f,c);m.position.set(p.x,p.y,p.z),m.scale.setScalar(p.s),l.add(m)}),l.position.set(r,e,n),l.scale.setScalar(a),l}function g2(r="classic"){const e=new gi,n=new gi,a=22,l=18.5,c=23.5,f=4.5,d=p2(r),p=new Ni(a,a,.4,64),m=new Cn({map:d,roughness:.4,metalness:.1}),g=new ht(p,m);g.position.y=0,g.receiveShadow=!0,e.add(g);const v=new js(a,.42,16,64);v.rotateX(Math.PI/2);const x=new Cn({color:r==="cyber"?440020:16096779,roughness:.3,metalness:.5,emissive:r==="cyber"?561586:14251782,emissiveIntensity:.35}),E=new ht(v,x);E.position.y=.22,e.add(E);const A=new Ni(a*.98,a*.85,f,48),L=new Cn({color:1976635,roughness:.7,metalness:.3,flatShading:!0}),M=new ht(A,L);M.position.y=-f/2-.2,e.add(M);const _=new js(a*.99,.2,12,64);_.rotateX(Math.PI/2);const I=new Vi({color:r==="cyber"?15485081:3718648}),z=new ht(_,I);z.position.y=-.3,e.add(z);const w=new js(a,.28,12,64);w.rotateX(Math.PI/2);const P=new Vi({color:15680580,transparent:!0,opacity:0}),U=new ht(w,P);U.position.y=.24,e.add(U);const O=[],b=[{x:-65,y:-25,z:-50,scale:9},{x:75,y:-30,z:-40,scale:11},{x:-45,y:-35,z:65,scale:8},{x:55,y:-28,z:60,scale:10}],D=new Cn({color:r==="lava"?2565930:1409085,roughness:.8,metalness:.1,flatShading:!0}),B=new Cn({color:r==="desert"?11817737:4674921,roughness:.9,metalness:.1,flatShading:!0});return b.forEach(ne=>{const le=new gi,K=new ht(new Ni(ne.scale*1.2,ne.scale*.8,ne.scale*.4,8),D);le.add(K);const G=new ht(new eo(ne.scale*.9,ne.scale*1.8,8),B);G.rotation.x=Math.PI,G.position.y=-ne.scale*.9,le.add(G),le.position.set(ne.x,ne.y,ne.z),n.add(le)}),[{x:-40,y:-18,z:-30,s:3.2},{x:45,y:-22,z:-25,s:4},{x:-35,y:-16,z:35,s:3.5},{x:30,y:-20,z:45,s:3.8},{x:0,y:-28,z:-60,s:5},{x:-60,y:-24,z:0,s:4.5},{x:55,y:-26,z:15,s:4.2}].forEach(ne=>{const le=m2(ne.x,ne.y,ne.z,ne.s);n.add(le),O.push(le)}),{arenaGroup:e,environmentGroup:n,arenaRadius:a,warningRadius:l,eliminationRadius:c,clouds:O,theme:r,curbMesh:E,hazardRing:U,deckMesh:g,setShrinkRadius:(ne,le)=>{const K=ne/a;E.scale.set(K,1,K),U.scale.set(K,1,K),le?P.opacity=.5+Math.sin(performance.now()*.015)*.45:P.opacity=0}}}class x2{constructor(){this.pool=[],this.poolSize=240,this.group=new gi;const e=new vl(.25,0);this.sparkMaterial=new Vi({color:16498468,transparent:!0});for(let n=0;n<this.poolSize;n++){const a=new ht(e,this.sparkMaterial.clone());a.visible=!1,this.group.add(a),this.pool.push({mesh:a,vx:0,vy:0,vz:0,life:0,maxLife:1,startScale:1,color:new ct(16777215),active:!1})}}spawnParticle(e,n,a,l,c,f,d,p,m=.5){const g=this.pool.find(v=>!v.active);g&&(g.active=!0,g.life=0,g.maxLife=m,g.startScale=d,g.vx=l,g.vy=c,g.vz=f,g.mesh.position.set(e,n,a),g.mesh.scale.setScalar(d),g.mesh.visible=!0,g.mesh.material.color.setHex(p),g.mesh.material.opacity=1)}emitImpactBurst(e,n,a,l=1){const c=Math.min(24,Math.floor(10*l)),f=[16707722,16347926,16777215,14870768];for(let d=0;d<c;d++){const p=Math.random()*Math.PI*2,m=(2+Math.random()*6)*Math.min(l,1.8),g=Math.cos(p)*m,v=Math.sin(p)*m,x=1.5+Math.random()*4*l,E=.5+Math.random()*.7*l,A=f[Math.floor(Math.random()*f.length)];this.spawnParticle(e,n,a,g,x,v,E,A,.4+Math.random()*.3)}}emitBoostFlame(e,n,a,l,c){const f=(Math.random()-.5)*.5,d=l+Math.PI+f,p=6+Math.random()*4,m=Math.sin(d)*p,g=Math.cos(d)*p,v=(Math.random()-.2)*2,x=[15680580,16347926,16436245,3718648],E=x[Math.floor(Math.random()*x.length)];this.spawnParticle(e,n,a,m,v,g,.6+Math.random()*.4,E,.25)}emitTireSmoke(e,n,a){if(Math.random()>.4)return;const l=(Math.random()-.5)*1.5,c=(Math.random()-.5)*1.5,f=.5+Math.random()*.8;this.spawnParticle(e,n+.1,a,l,f,c,.45,14870768,.35)}emitFallingPanicTrail(e,n,a,l){const c=[3718648,16436245,16777215,l||15680580];for(let f=0;f<3;f++){const d=(Math.random()-.5)*4,p=(Math.random()-.5)*4,m=Math.random()*3+1,g=c[Math.floor(Math.random()*c.length)];this.spawnParticle(e,n+.4,a,d,m,p,.55,g,.45)}}emitComicSplashDown(e,n,a){const l=[16707722,16347926,15680580,3718648,16777215];for(let c=0;c<28;c++){const f=Math.random()*Math.PI*2,d=4+Math.random()*8,p=Math.cos(f)*d,m=Math.sin(f)*d,g=5+Math.random()*8,v=l[Math.floor(Math.random()*l.length)];this.spawnParticle(e,n,a,p,g,m,.8+Math.random()*.5,v,.7)}}emitEliminationPoof(e,n,a){for(let l=0;l<16;l++){const c=Math.random()*Math.PI*2,f=1.5+Math.random()*3.5,d=Math.cos(c)*f,p=Math.sin(c)*f,m=2+Math.random()*4;this.spawnParticle(e,n,a,d,m,p,.7,9741240,.6)}}update(e){for(let n=0;n<this.pool.length;n++){const a=this.pool[n];if(!a.active)continue;if(a.life+=e,a.life>=a.maxLife){a.active=!1,a.mesh.visible=!1;continue}const l=a.life/a.maxLife;a.mesh.position.x+=a.vx*e,a.mesh.position.y+=a.vy*e,a.mesh.position.z+=a.vz*e,a.vy-=9.8*e;const c=a.startScale*(1-l*.6);a.mesh.scale.setScalar(Math.max(.01,c));const f=a.mesh.material;f.opacity=1-l}}clear(){for(let e=0;e<this.pool.length;e++)this.pool[e].active=!1,this.pool[e].mesh.visible=!1}}class v2{constructor(e){this.config=e}updateArenaRadii(e,n,a){this.config.arenaRadius=e,this.config.warningRadius=n,this.config.eliminationRadius=a}updateCarMotion(e,n,a,l,c,f=!1){if(!e.isAlive){e.x+=e.vx*n,e.z+=e.vz*n,e.y+=e.vy*n,e.vy-=28*n,e.angle+=e.angularVelocity*n,e.meshGroup&&(e.meshGroup.position.set(e.x,e.y,e.z),e.meshGroup.rotation.y=e.angle,e.meshGroup.rotation.x+=2.5*n,e.meshGroup.rotation.z+=3*n);return}if(f&&Math.hypot(e.vx,e.vz)>4.5)e.isDrifting=!0,e.driftTime+=n,e.driftTime>.75&&(e.driftBoostReady=!0);else{if(e.isDrifting&&e.driftBoostReady){e.boost=Math.min(100,e.boost+35);const P=Math.sin(e.angle),U=Math.cos(e.angle);e.vx+=P*7,e.vz+=U*7}e.isDrifting=!1,e.driftTime=0,e.driftBoostReady=!1}const d=e.activePowerUp==="NITRO";(c||d)&&(e.boost>10||d)&&e.boostCooldown<=0?(e.isBoosting=!0,d||(e.boost=Math.max(0,e.boost-42*n),e.boost<=0&&(e.isBoosting=!1,e.boostCooldown=1.2))):(e.isBoosting=!1,e.boostCooldown>0&&(e.boostCooldown-=n),e.boost=Math.min(100,e.boost+26*n));let p=e.maxSpeed,m=e.accel;e.isBoosting&&(p*=d?1.9:1.65,m*=d?2.5:2.1);const g=Math.sin(e.angle),v=Math.cos(e.angle),x=e.vx*g+e.vz*v;if(a!==0){const U=a*p-x,O=m*n,b=Math.sign(U)*Math.min(Math.abs(U),O);e.vx+=g*b,e.vz+=v*b}else{const P=e.isDrifting?.94:.88;e.vx*=Math.pow(P,n*60),e.vz*=Math.pow(P,n*60)}const E=Math.min(1,Math.hypot(e.vx,e.vz)/4);if(l!==0&&E>.05){const P=e.isPlayer?1.1:.95,U=e.isDrifting?1.45:1,O=e.handling*l*P*U*(x>=-.5?1:-1);e.angularVelocity=O*E}else e.angularVelocity*=.75;e.angle+=e.angularVelocity*n;const A=Math.cos(e.angle),L=-Math.sin(e.angle),M=e.vx*A+e.vz*L;let _=.88;e.isDrifting?_=.55:e.isBoosting&&(_=.78),e.vx-=A*M*(1-Math.pow(_,n*60)),e.vz-=L*M*(1-Math.pow(_,n*60));const I=p*2,z=Math.hypot(e.vx,e.vz);z>I&&(e.vx=e.vx/z*I,e.vz=e.vz/z*I),isFinite(e.vx)||(e.vx=0),isFinite(e.vz)||(e.vz=0),e.x+=e.vx*n,e.z+=e.vz*n,isFinite(e.x)||(e.x=0),isFinite(e.z)||(e.z=0),e.speed=z;const w=Math.hypot(e.x,e.z);if(e.isAlive&&w<=this.config.warningRadius)e.y=0,e.vy=0;else if(e.isAlive&&w<=this.config.arenaRadius){const P=(w-this.config.warningRadius)/Math.max(.1,this.config.arenaRadius-this.config.warningRadius);e.y=Math.sin(P*Math.PI)*.28,e.vy=0}else e.isAlive=!1,e.vy=(e.vy||0)-26*n,e.y+=e.vy*n,isFinite(e.y)||(e.y=-30),isFinite(e.vy)||(e.vy=-10);if(e.meshGroup){if(e.meshGroup.position.set(e.x,e.y,e.z),e.isAlive){e.meshGroup.rotation.y=e.angle;const P=x*n/.5;if(e.wheels&&e.wheels.forEach(b=>{b.rotation.x+=P}),e.frontWheels){const b=l*.45;e.frontWheels.forEach(D=>{D.rotation.y=b})}const U=-l*Math.min(.14,E*.14);e.meshGroup.rotation.z=U;const O=a*m/500;e.meshGroup.rotation.x=-O}else if(e.tumbleSpeedX||(e.tumbleSpeedX=(Math.random()*5+4)*(Math.random()>.5?1:-1)),e.tumbleSpeedZ||(e.tumbleSpeedZ=(Math.random()*6+5)*(Math.random()>.5?1:-1)),e.tumbleAngleX=(e.tumbleAngleX||0)+e.tumbleSpeedX*n,e.tumbleAngleZ=(e.tumbleAngleZ||0)+e.tumbleSpeedZ*n,e.angle+=e.angularVelocity*n,e.meshGroup.rotation.x=e.tumbleAngleX,e.meshGroup.rotation.y=e.angle,e.meshGroup.rotation.z=e.tumbleAngleZ,e.wheels){const P=35*n;e.wheels.forEach(U=>{U.rotation.x+=P})}}}resolveCarCollisions(e,n){const a=[];for(let c=0;c<e.length;c++){const f=e[c];if(f.isAlive)for(let d=c+1;d<e.length;d++){const p=e[d];if(!p.isAlive)continue;const m=p.x-f.x,g=p.z-f.z,v=Math.hypot(m,g),x=1.4*2;if(v<x&&v>.001){const E=m/v,A=g/v,L=x-v,M=f.mass&&isFinite(f.mass)?f.mass:f.baseMass||1.1,_=p.mass&&isFinite(p.mass)?p.mass:p.baseMass||1.1,I=Math.max(.1,M+_);let z=_/I,w=M/I;f.activePowerUp==="TITAN"?(z=.05,w=.95):p.activePowerUp==="TITAN"&&(z=.95,w=.05),f.x-=E*L*z,f.z-=A*L*z,p.x+=E*L*w,p.z+=A*L*w;const P=p.vx-f.vx,U=p.vz-f.vz,O=P*E+U*A;if(O<0){const b=1/M,D=1/_;let B=-1.88*O/(b+D);const H=Math.hypot(f.vx,f.vz),W=Math.hypot(p.vx,p.vz),ne=Math.sin(f.angle),le=Math.cos(f.angle),K=ne*E+le*A,G=Math.sin(p.angle),k=Math.cos(p.angle),ie=-(G*E+k*A);K>.3&&H>W*.8?p.lastHitById=f.id:ie>.3&&W>H*.8&&(f.lastHitById=p.id);let _e=1;(f.isBoosting||p.isBoosting)&&(_e=1.65),(f.activePowerUp==="MEGARAM"||p.activePowerUp==="MEGARAM")&&(_e*=3),(f.activePowerUp==="TITAN"||p.activePowerUp==="TITAN")&&(_e*=1.8),B=Math.max(B,7)*_e,f.activePowerUp!=="TITAN"&&(f.vx-=E*B/f.mass,f.vz-=A*B/f.mass),p.activePowerUp!=="TITAN"&&(p.vx+=E*B/p.mass,p.vz+=A*B/p.mass),f.angularVelocity+=(Math.random()-.5)*4,p.angularVelocity+=(Math.random()-.5)*4;const V=Math.abs(O)+Math.abs(H-W);a.push({carA:f,carB:p,relativeSpeed:V,contactPoint:{x:(f.x+p.x)/2,y:(f.y+p.y)/2+.5,z:(f.z+p.z)/2}})}}}}return a}}class _2{constructor(e="normal"){this.targetMap=new Map,this.retargetTimers=new Map,this.difficultyMultiplier=1,this.setDifficulty(e)}setDifficulty(e){e==="easy"?this.difficultyMultiplier=.75:e==="normal"?this.difficultyMultiplier=1:this.difficultyMultiplier=1.25}getCommand(e,n,a,l,c,f=[]){if(!e.isAlive)return{throttle:0,steer:0,boost:!1,drift:!1};const d=Math.hypot(e.x,e.z);if(d>l-1.5){let b=Math.atan2(-e.x,-e.z)-e.angle;for(;b>Math.PI;)b-=Math.PI*2;for(;b<-Math.PI;)b+=Math.PI*2;const D=Math.max(-1,Math.min(1,b*2.8)),B=d>l&&Math.abs(b)<.6;return{throttle:1,steer:D,boost:B&&e.boost>25,drift:Math.abs(b)>1.2}}if(!e.activePowerUp&&f.length>0){let O=null,b=14;for(const D of f){if(!D.active)continue;const B=Math.hypot(D.x-e.x,D.z-e.z);B<b&&(b=B,O=D)}if(O){let B=Math.atan2(O.x-e.x,O.z-e.z)-e.angle;for(;B>Math.PI;)B-=Math.PI*2;for(;B<-Math.PI;)B+=Math.PI*2;return{throttle:1,steer:Math.max(-1,Math.min(1,B*2.2)),boost:Math.abs(B)<.3&&b>5&&e.boost>40,drift:Math.abs(B)>1.1}}}const p=(this.retargetTimers.get(e.id)||0)-c,m=this.targetMap.get(e.id);let g=n.find(O=>O.id===m&&O.isAlive&&O.id!==e.id);if(p<=0||!g){let O=null,b=-1/0;for(const D of n){if(!D.isAlive||D.id===e.id)continue;const B=Math.hypot(D.x-e.x,D.z-e.z),H=Math.hypot(D.x,D.z);let W=100-B;e.personality==="aggressive"?D.isPlayer&&(W+=30):e.personality==="hunter"?H>13&&(W+=40):e.personality==="defensive"?(D.activePowerUp==="TITAN"&&(W-=80),B>15&&(W-=50)):e.personality==="chaotic"&&(W+=(Math.random()-.5)*60),D.activePowerUp==="TITAN"&&!e.activePowerUp&&(W-=50),W>b&&(b=W,O=D)}g=O||void 0,this.targetMap.set(e.id,g?g.id:""),this.retargetTimers.set(e.id,1.5+Math.random()*2)}if(!g){let b=Math.atan2(-e.x,-e.z)-e.angle;for(;b>Math.PI;)b-=Math.PI*2;for(;b<-Math.PI;)b+=Math.PI*2;return{throttle:d>6?.8:.2,steer:Math.max(-1,Math.min(1,b)),boost:!1,drift:!1}}const v=Math.hypot(g.x-e.x,g.z-e.z),x=Math.min(v*.15,1.8)*this.difficultyMultiplier,E=g.x+g.vx*x,A=g.z+g.vz*x;let M=Math.atan2(E-e.x,A-e.z)-e.angle;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;const _=Math.max(-1,Math.min(1,M*2.2*this.difficultyMultiplier));let I=1,z=!1;const w=Math.abs(M)<.35,P=v>3.5&&v<16;w&&P&&(e.boost>35||e.activePowerUp==="NITRO")&&(Math.hypot(e.x+Math.sin(e.angle)*12,e.z+Math.cos(e.angle)*12)<l||e.personality==="aggressive")&&(z=!0);const U=Math.abs(M)>1.2&&e.speed>7;return e.personality==="defensive"&&g.activePowerUp==="TITAN"&&v<6&&(I=-.5),{throttle:I,steer:_,boost:z,drift:U}}clear(){this.targetMap.clear(),this.retargetTimers.clear()}}class y2{constructor(){this.ctx=null,this.soundEnabled=!0,this.musicEnabled=!0,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.engineSubOsc=null,this.engineLeadOsc=null,this.engineFilter=null,this.engineGain=null,this.engineRunning=!1,this.musicInterval=null,this.musicStep=0,this.currentTrack="none",this.lastHitTime=0,this.lastDriftTime=0,this.unlocked=!1,this.noiseBuffer=null;try{const e=localStorage.getItem("sumocars_sound"),n=localStorage.getItem("sumocars_music");if(e!==null)this.soundEnabled=e==="true";else{const a=localStorage.getItem("sumocars_settings");if(a){const l=JSON.parse(a);typeof l.soundEnabled=="boolean"&&(this.soundEnabled=l.soundEnabled)}}if(n!==null)this.musicEnabled=n==="true";else{const a=localStorage.getItem("sumocars_settings");if(a){const l=JSON.parse(a);typeof l.musicEnabled=="boolean"&&(this.musicEnabled=l.musicEnabled)}}}catch{this.soundEnabled=!0,this.musicEnabled=!0}typeof window<"u"&&this.setupGlobalUnlock()}initCtx(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;if(e)try{this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=1,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.soundEnabled?1:0,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicEnabled?.42:0,this.musicGain.connect(this.masterGain);const n=Math.floor(this.ctx.sampleRate*.25);this.noiseBuffer=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const a=this.noiseBuffer.getChannelData(0);for(let l=0;l<n;l++)a[l]=Math.random()*2-1;this.ctx.addEventListener("statechange",()=>{var l;((l=this.ctx)==null?void 0:l.state)==="running"&&(this.unlocked=!0)})}catch(n){console.warn("Web Audio initialization error:",n)}}return this.ctx}setupGlobalUnlock(){const e=()=>{this.unlockAudio()};window.addEventListener("pointerdown",e,{passive:!0}),window.addEventListener("mousedown",e,{passive:!0}),window.addEventListener("keydown",e,{passive:!0}),window.addEventListener("touchstart",e,{passive:!0}),window.addEventListener("touchend",e,{passive:!0}),window.addEventListener("click",e,{passive:!0})}unlockAudio(){const e=this.initCtx();if(!e)return!1;try{const n=e.createBuffer(1,1,22050),a=e.createBufferSource();a.buffer=n,a.connect(e.destination),a.start(0)}catch{}return e.state==="suspended"?e.resume().then(()=>{this.unlocked=!0}).catch(()=>{}):e.state==="running"&&(this.unlocked=!0),this.unlocked}isAudioUnlocked(){return this.unlocked||this.ctx!==null&&this.ctx.state==="running"}setSoundEnabled(e){this.soundEnabled=e;try{localStorage.setItem("sumocars_sound",String(e))}catch{}this.sfxGain&&(this.sfxGain.gain.value=e?1:0,this.ctx&&this.sfxGain.gain.setValueAtTime(e?1:0,this.ctx.currentTime)),!e&&this.engineGain&&this.ctx&&this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime)}setMusicEnabled(e){this.musicEnabled=e;try{localStorage.setItem("sumocars_music",String(e))}catch{}this.musicGain&&(this.musicGain.gain.value=e?.42:0,this.ctx&&this.musicGain.gain.setValueAtTime(e?.42:0,this.ctx.currentTime)),e&&!this.musicInterval?this.currentTrack==="battle"?this.playBattleMusic():this.currentTrack==="menu"&&this.playMenuMusic():!e&&this.musicInterval&&this.stopMusic(!1)}isSoundOn(){return this.soundEnabled}isMusicOn(){return this.musicEnabled}playClick(){if(this.soundEnabled&&(this.unlockAudio(),!(!this.ctx||!this.sfxGain)))try{const e=this.ctx.currentTime+.005,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(1040,e+.06),a.gain.setValueAtTime(.35,e),a.gain.exponentialRampToValueAtTime(.001,e+.06),n.connect(a),a.connect(this.sfxGain),n.start(e),n.stop(e+.07)}catch{}}playCountdown(e=!1){if(this.soundEnabled&&(this.unlockAudio(),!(!this.ctx||!this.sfxGain)))try{const n=this.ctx.currentTime+.005,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=e?"sawtooth":"sine";const c=e?980:540;a.frequency.setValueAtTime(c,n),e&&a.frequency.exponentialRampToValueAtTime(1320,n+.28),l.gain.setValueAtTime(e?.65:.45,n),l.gain.exponentialRampToValueAtTime(.001,n+(e?.38:.22)),a.connect(l),l.connect(this.sfxGain),a.start(n),a.stop(n+(e?.4:.24))}catch{}}playHit(e=.5){if(!this.soundEnabled)return;const n=performance.now();if(!(n-this.lastHitTime<50)&&(this.lastHitTime=n,this.unlockAudio(),!(!this.ctx||!this.sfxGain)))try{const a=Math.min(2,Math.max(.35,e)),l=this.ctx.currentTime+.005,c=this.ctx.createOscillator(),f=this.ctx.createGain();if(c.type="triangle",c.frequency.setValueAtTime(190*a,l),c.frequency.exponentialRampToValueAtTime(34,l+.22),f.gain.setValueAtTime(.85*Math.min(a,1.4),l),f.gain.exponentialRampToValueAtTime(.001,l+.24),c.connect(f),f.connect(this.sfxGain),c.start(l),c.stop(l+.25),this.noiseBuffer){const d=this.ctx.createBufferSource();d.buffer=this.noiseBuffer;const p=this.ctx.createBiquadFilter();p.type="bandpass",p.frequency.setValueAtTime(1400*a,l),p.Q.setValueAtTime(1.8,l);const m=this.ctx.createGain();m.gain.setValueAtTime(.55*a,l),m.gain.exponentialRampToValueAtTime(.001,l+.14),d.connect(p),p.connect(m),m.connect(this.sfxGain),d.start(l),d.stop(l+.15)}}catch{}}playBoost(){if(this.soundEnabled&&(this.unlockAudio(),!(!this.ctx||!this.sfxGain)))try{const e=this.ctx.currentTime+.005,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(190,e),n.frequency.exponentialRampToValueAtTime(680,e+.38),a.gain.setValueAtTime(.55,e),a.gain.exponentialRampToValueAtTime(.001,e+.42),n.connect(a),a.connect(this.sfxGain),n.start(e),n.stop(e+.44)}catch{}}playFallingSlideWhistle(){if(this.soundEnabled)try{if(this.unlockAudio(),!this.ctx||!this.sfxGain)return;const e=this.ctx.currentTime+.005,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(920,e),n.frequency.exponentialRampToValueAtTime(65,e+1.45);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.frequency.setValueAtTime(18,e),c.gain.setValueAtTime(36,e),l.connect(n.frequency),a.gain.setValueAtTime(.5,e),a.gain.exponentialRampToValueAtTime(.001,e+1.5),n.connect(a),a.connect(this.sfxGain),l.start(e),n.start(e),l.stop(e+1.52),n.stop(e+1.52)}catch{}}playCartoonYell(e,n=!1){if(this.soundEnabled)try{if(this.unlockAudio(),this.ctx&&this.sfxGain){const a=this.ctx.currentTime+.005,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sawtooth";const f=n?620:440+Math.random()*220;l.frequency.setValueAtTime(f,a),l.frequency.exponentialRampToValueAtTime(110,a+1.25);const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(1450,a),d.frequency.exponentialRampToValueAtTime(460,a+1.25),d.Q.setValueAtTime(3.8,a),c.gain.setValueAtTime(.48,a),c.gain.exponentialRampToValueAtTime(.001,a+1.3),l.connect(d),d.connect(c),c.connect(this.sfxGain),l.start(a),l.stop(a+1.32)}}catch{}}playComedicSplat(){if(this.soundEnabled)try{if(this.unlockAudio(),!this.ctx||!this.sfxGain)return;const e=this.ctx.currentTime+.005,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(210,e),n.frequency.exponentialRampToValueAtTime(32,e+.35),a.gain.setValueAtTime(.75,e),a.gain.exponentialRampToValueAtTime(.001,e+.38),n.connect(a),a.connect(this.sfxGain),n.start(e),n.stop(e+.4);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(130,e+.05),l.frequency.exponentialRampToValueAtTime(560,e+.26),c.gain.setValueAtTime(.45,e+.05),c.gain.exponentialRampToValueAtTime(.001,e+.3),l.connect(c),c.connect(this.sfxGain),l.start(e+.05),l.stop(e+.32)}catch{}}playElimination(){this.playComedicSplat()}playPowerupSpawn(){if(this.soundEnabled&&(this.unlockAudio(),!(!this.ctx||!this.sfxGain)))try{const e=this.ctx.currentTime+.005,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(330,e),n.frequency.exponentialRampToValueAtTime(950,e+.22),a.gain.setValueAtTime(.35,e),a.gain.exponentialRampToValueAtTime(.001,e+.24),n.connect(a),a.connect(this.sfxGain),n.start(e),n.stop(e+.25)}catch{}}playPowerupCollect(){if(!this.soundEnabled||(this.unlockAudio(),!this.ctx||!this.sfxGain))return;[523.25,659.25,783.99,1046.5].forEach((n,a)=>{setTimeout(()=>{if(!(!this.ctx||!this.sfxGain))try{const l=this.ctx.currentTime+.005,c=this.ctx.createOscillator(),f=this.ctx.createGain();c.type="triangle",c.frequency.setValueAtTime(n,l),f.gain.setValueAtTime(.45,l),f.gain.exponentialRampToValueAtTime(.001,l+.2),c.connect(f),f.connect(this.sfxGain),c.start(l),c.stop(l+.22)}catch{}},a*45)})}playShockwave(){if(this.soundEnabled&&(this.unlockAudio(),!(!this.ctx||!this.sfxGain)))try{const e=this.ctx.currentTime+.005,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(160,e),n.frequency.exponentialRampToValueAtTime(28,e+.45),a.gain.setValueAtTime(.9,e),a.gain.exponentialRampToValueAtTime(.001,e+.5),n.connect(a),a.connect(this.sfxGain),n.start(e),n.stop(e+.52)}catch{}}playDriftScreech(){if(this.soundEnabled)try{const e=performance.now();if(e-this.lastDriftTime<100||(this.lastDriftTime=e,this.unlockAudio(),!this.ctx||!this.sfxGain))return;const n=this.ctx.currentTime+.005,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(360+Math.random()*80,n),a.frequency.linearRampToValueAtTime(480+Math.random()*60,n+.08),l.gain.setValueAtTime(.18,n),l.gain.exponentialRampToValueAtTime(.001,n+.1),a.connect(l),l.connect(this.sfxGain),a.start(n),a.stop(n+.11)}catch{}}playSirenWarning(){if(this.soundEnabled&&(this.unlockAudio(),!(!this.ctx||!this.sfxGain)))try{const e=this.ctx.currentTime+.005,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(440,e),n.frequency.linearRampToValueAtTime(880,e+.18),n.frequency.linearRampToValueAtTime(440,e+.36),a.gain.setValueAtTime(.4,e),a.gain.exponentialRampToValueAtTime(.001,e+.4),n.connect(a),a.connect(this.sfxGain),n.start(e),n.stop(e+.42)}catch{}}playComboCheer(e){if(this.soundEnabled&&(this.unlockAudio(),!(!this.ctx||!this.sfxGain)))try{const n=440+Math.min(e,5)*80,a=this.ctx.currentTime+.005,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="square",l.frequency.setValueAtTime(n,a),l.frequency.exponentialRampToValueAtTime(n*1.5,a+.18),c.gain.setValueAtTime(.45,a),c.gain.exponentialRampToValueAtTime(.001,a+.2),l.connect(c),c.connect(this.sfxGain),l.start(a),l.stop(a+.22)}catch{}}playVictory(){if(!this.soundEnabled||(this.unlockAudio(),!this.ctx||!this.sfxGain))return;const e=[523.25,659.25,783.99,1046.5,1318.5];e.forEach((n,a)=>{setTimeout(()=>{if(!(!this.ctx||!this.sfxGain))try{const l=this.ctx.currentTime+.005,c=this.ctx.createOscillator(),f=this.ctx.createGain();c.type="triangle",c.frequency.setValueAtTime(n,l),f.gain.setValueAtTime(.55,l),f.gain.exponentialRampToValueAtTime(.001,l+(a===e.length-1?.8:.28)),c.connect(f),f.connect(this.sfxGain),c.start(l),c.stop(l+(a===e.length-1?.85:.3))}catch{}},a*130)})}playDefeat(){if(!this.soundEnabled||(this.unlockAudio(),!this.ctx||!this.sfxGain))return;[440,415.3,392,329.63].forEach((n,a)=>{setTimeout(()=>{if(!(!this.ctx||!this.sfxGain))try{const l=this.ctx.currentTime+.005,c=this.ctx.createOscillator(),f=this.ctx.createGain();c.type="sawtooth",c.frequency.setValueAtTime(n,l),f.gain.setValueAtTime(.4,l),f.gain.exponentialRampToValueAtTime(.001,l+.4),c.connect(f),f.connect(this.sfxGain),c.start(l),c.stop(l+.42)}catch{}},a*160)})}updateEngineHum(e,n){if(!this.soundEnabled){this.stopEngineHum();return}if(this.unlockAudio(),!(!this.ctx||!this.sfxGain||this.ctx.state!=="running")){if(!this.engineSubOsc||!this.engineLeadOsc||!this.engineGain)try{const a=this.ctx.currentTime+.005;this.engineSubOsc=this.ctx.createOscillator(),this.engineLeadOsc=this.ctx.createOscillator(),this.engineFilter=this.ctx.createBiquadFilter(),this.engineGain=this.ctx.createGain(),this.engineSubOsc.type="triangle",this.engineSubOsc.frequency.setValueAtTime(60,a),this.engineLeadOsc.type="sawtooth",this.engineLeadOsc.frequency.setValueAtTime(120,a),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(340,a),this.engineFilter.Q.setValueAtTime(2,a),this.engineGain.gain.setValueAtTime(.001,a),this.engineSubOsc.connect(this.engineGain),this.engineLeadOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.sfxGain),this.engineSubOsc.start(a),this.engineLeadOsc.start(a),this.engineRunning=!0}catch{}if(this.engineSubOsc&&this.engineLeadOsc&&this.engineFilter&&this.engineGain)try{const a=this.ctx.currentTime+.01,l=n?170:60+e*95,c=n?340:120+e*190,f=n?1100:320+e*520,d=n?.26:.12+e*.14;this.engineSubOsc.frequency.setTargetAtTime(l,a,.05),this.engineLeadOsc.frequency.setTargetAtTime(c,a,.05),this.engineFilter.frequency.setTargetAtTime(f,a,.05),this.engineGain.gain.setTargetAtTime(d,a,.05),this.engineRunning=!0}catch{}}}stopEngineHum(){if(this.engineGain&&this.ctx&&this.engineRunning)try{const e=this.ctx.currentTime+.005;this.engineGain.gain.setTargetAtTime(.001,e,.05),this.engineRunning=!1}catch{}}triggerKick(e){if(!(!this.ctx||!this.musicGain))try{const n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(150,e),n.frequency.exponentialRampToValueAtTime(36,e+.12),a.gain.setValueAtTime(.5,e),a.gain.exponentialRampToValueAtTime(.001,e+.14),n.connect(a),a.connect(this.musicGain),n.start(e),n.stop(e+.15)}catch{}}triggerSnare(e){if(!(!this.ctx||!this.musicGain))try{const n=this.ctx.createOscillator(),a=this.ctx.createGain();if(n.type="triangle",n.frequency.setValueAtTime(240,e),n.frequency.exponentialRampToValueAtTime(90,e+.08),a.gain.setValueAtTime(.28,e),a.gain.exponentialRampToValueAtTime(.001,e+.1),n.connect(a),a.connect(this.musicGain),n.start(e),n.stop(e+.11),this.noiseBuffer){const l=this.ctx.createBufferSource();l.buffer=this.noiseBuffer;const c=this.ctx.createBiquadFilter();c.type="highpass",c.frequency.setValueAtTime(1e3,e);const f=this.ctx.createGain();f.gain.setValueAtTime(.32,e),f.gain.exponentialRampToValueAtTime(.001,e+.09),l.connect(c),c.connect(f),f.connect(this.musicGain),l.start(e),l.stop(e+.1)}}catch{}}triggerHiHat(e,n=!1){if(!(!this.ctx||!this.musicGain||!this.noiseBuffer))try{const a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const l=this.ctx.createBiquadFilter();l.type="highpass",l.frequency.setValueAtTime(5200,e);const c=this.ctx.createGain();c.gain.setValueAtTime(n?.2:.1,e),c.gain.exponentialRampToValueAtTime(.001,e+(n?.06:.035)),a.connect(l),l.connect(c),c.connect(this.musicGain),a.start(e),a.stop(e+(n?.07:.04))}catch{}}playMenuMusic(){if(this.currentTrack="menu",!this.musicEnabled)return;this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null);const e=this.initCtx();e&&e.state==="suspended"&&e.resume().catch(()=>{});const n=[130.81,0,130.81,164.81,174.61,0,174.61,196,110,0,110,130.81,146.83,0,164.81,196],a=[523.25,0,659.25,0,698.46,783.99,659.25,523.25,440,0,523.25,659.25,587.33,523.25,493.88,523.25];this.musicStep=0,this.musicInterval=window.setInterval(()=>{if(!this.musicEnabled||!this.ctx||!this.musicGain||this.ctx.state!=="running")return;const l=this.ctx.currentTime+.015,c=this.musicStep%16;this.musicStep++;try{c%4===0?this.triggerKick(l):c%4===2&&this.triggerSnare(l),this.triggerHiHat(l,c%2===0);const f=n[c];if(f>0){const p=this.ctx.createOscillator(),m=this.ctx.createGain();p.type="triangle",p.frequency.setValueAtTime(f,l),m.gain.setValueAtTime(.24,l),m.gain.exponentialRampToValueAtTime(.001,l+.2),p.connect(m),m.connect(this.musicGain),p.start(l),p.stop(l+.22)}const d=a[c];if(d>0){const p=this.ctx.createOscillator(),m=this.ctx.createGain();p.type="sine",p.frequency.setValueAtTime(d,l),m.gain.setValueAtTime(.16,l),m.gain.exponentialRampToValueAtTime(.001,l+.18),p.connect(m),m.connect(this.musicGain),p.start(l),p.stop(l+.2)}}catch{}},130)}playBattleMusic(){if(this.currentTrack="battle",!this.musicEnabled)return;this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null);const e=this.initCtx();e&&e.state==="suspended"&&e.resume().catch(()=>{});const n=[130.81,130.81,155.56,130.81,174.61,174.61,196,174.61,116.54,116.54,130.81,116.54,146.83,164.81,174.61,196],a=[523.25,0,622.25,698.46,783.99,698.46,622.25,523.25,466.16,0,523.25,622.25,698.46,783.99,880,1046.5];this.musicStep=0,this.musicInterval=window.setInterval(()=>{if(!this.musicEnabled||!this.ctx||!this.musicGain||this.ctx.state!=="running")return;const l=this.ctx.currentTime+.015,c=this.musicStep%16;this.musicStep++;try{(c===0||c===6||c===8||c===14)&&this.triggerKick(l),(c===4||c===12)&&this.triggerSnare(l),this.triggerHiHat(l,c%2===0);const f=n[c];if(f>0){const p=this.ctx.createOscillator(),m=this.ctx.createGain();p.type="sawtooth",p.frequency.setValueAtTime(f,l);const g=this.ctx.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(460,l),g.frequency.exponentialRampToValueAtTime(180,l+.09),m.gain.setValueAtTime(.3,l),m.gain.exponentialRampToValueAtTime(.001,l+.1),p.connect(g),g.connect(m),m.connect(this.musicGain),p.start(l),p.stop(l+.11)}const d=a[c];if(d>0&&(c%2===0||c===3||c===7||c===15)){const p=this.ctx.createOscillator(),m=this.ctx.createGain();p.type="square",p.frequency.setValueAtTime(d,l);const g=this.ctx.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(2200,l),m.gain.setValueAtTime(.18,l),m.gain.exponentialRampToValueAtTime(.001,l+.12),p.connect(g),g.connect(m),m.connect(this.musicGain),p.start(l),p.stop(l+.13)}}catch{}},108)}pauseMusic(){this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null)}resumeMusic(){this.currentTrack==="battle"?this.playBattleMusic():this.currentTrack==="menu"&&this.playMenuMusic()}stopMusic(e=!0){this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null),e&&(this.currentTrack="none")}playTestSound(){this.unlockAudio(),this.playClick(),setTimeout(()=>{this.playBoost()},120),setTimeout(()=>{this.playPowerupCollect()},320)}cleanUp(){this.stopMusic(!0),this.stopEngineHum()}}const Le=new y2;class M2{constructor(e,n){this.powerups=[],this.nextSpawnTimer=4,this.maxConcurrentPowerUps=2,this.scene=e,this.particles=n,this.beaconMaterial=new Vi({color:16777215,transparent:!0,opacity:.15,side:Ri})}createPowerUpMesh(e){const n=new gi;let a=440020,l=561586;e==="TITAN"?(a=16096779,l=14251782):e==="SHOCKWAVE"?(a=14239471,l=10624175):e==="MEGARAM"&&(a=15680580,l=12131356);const c=e==="TITAN"?new vl(.85,0):e==="SHOCKWAVE"?new js(.75,.28,12,24):e==="MEGARAM"?new eo(.75,1.4,6):new yp(.85,0),f=new Cn({color:a,emissive:l,emissiveIntensity:.8,roughness:.2,metalness:.5}),d=new ht(c,f);d.name="crystal",d.castShadow=!0,n.add(d);const p=new js(1.2,.08,8,32),m=new Vi({color:a,transparent:!0,opacity:.7}),g=new ht(p,m);g.name="ring",g.rotation.x=Math.PI/2,n.add(g);const v=new Ni(.35,.8,16,12,1,!0);v.translate(0,8,0);const x=this.beaconMaterial.clone();x.color.setHex(a);const E=new ht(v,x);E.name="beacon",n.add(E);const A=new _p(1.1,24);A.rotateX(-Math.PI/2);const L=new Vi({color:a,transparent:!0,opacity:.35}),M=new ht(A,L);return M.position.y=.05,M.name="disc",n.add(M),n}spawn(e=20){if(this.powerups.length>=this.maxConcurrentPowerUps)return null;const n=["NITRO","TITAN","SHOCKWAVE","MEGARAM"],a=n[Math.floor(Math.random()*n.length)],l=4+Math.random()*Math.max(6,e-6),c=Math.random()*Math.PI*2,f=Math.sin(c)*l,d=Math.cos(c)*l,p=1.2,m=this.createPowerUpMesh(a);m.position.set(f,p,d),this.scene.add(m);const g={id:"pow_"+Math.random().toString(36).substring(2,9),type:a,x:f,z:d,y:p,mesh:m,active:!0,spawnTime:performance.now()};return this.powerups.push(g),Le.playPowerupSpawn(),this.particles.emitImpactBurst(f,p,d,.6),g}update(e,n,a,l,c){this.nextSpawnTimer-=e,this.nextSpawnTimer<=0&&(this.spawn(a),this.nextSpawnTimer=9+Math.random()*6);const f=performance.now()*.001;for(let d=this.powerups.length-1;d>=0;d--){const p=this.powerups[d];if(!p.active)continue;if(p.mesh){const g=p.mesh.getObjectByName("crystal"),v=p.mesh.getObjectByName("ring"),x=p.mesh.getObjectByName("beacon");g&&(g.rotation.y+=2.2*e,g.rotation.x+=1.1*e,g.position.y=.9+Math.sin(f*3.5+d)*.25),v&&(v.rotation.z+=1.8*e,v.position.y=.9+Math.sin(f*3.5+d)*.25),x&&(x.material.opacity=.12+Math.sin(f*4+d)*.06)}const m=2.2;for(const g of n){if(!g.isAlive)continue;if(Math.hypot(g.x-p.x,g.z-p.z)<m){this.applyPowerUp(g,p.type,c),g.isPlayer?(Le.playPowerupCollect(),l==null||l(p.type)):Le.playPowerupCollect(),this.particles.emitImpactBurst(p.x,p.y+.5,p.z,1.4),this.scene.remove(p.mesh),this.powerups.splice(d,1);break}}}for(const d of n)if(d.activePowerUp){if(d.powerUpTimer-=e,d.activePowerUp==="NITRO"&&d.isAlive&&(d.boost=100,this.particles.emitBoostFlame(d.x,d.y+.3,d.z,d.angle,d.speed)),d.activePowerUp==="TITAN"&&d.shieldMesh){d.shieldMesh.rotation.y+=3*e;const p=1+Math.sin(f*12)*.08;d.shieldMesh.scale.set(p,p,p)}d.powerUpTimer<=0&&this.removePowerUp(d)}}applyPowerUp(e,n,a){if(e)if((!e.baseMass||isNaN(e.baseMass))&&(e.baseMass=e.mass&&!isNaN(e.mass)?e.mass:1.1),this.removePowerUp(e),e.activePowerUp=n,n==="NITRO")e.powerUpTimer=6.5,e.boost=100,e.maxSpeed=Math.min(22,e.maxSpeed*1.35),e.accel=Math.min(36,e.accel*1.5);else if(n==="TITAN"){if(e.powerUpTimer=7.5,e.mass=(e.baseMass||1.1)*2.8,e.meshGroup){const l=new Mp(2.4,16,16),c=new Cn({color:16096779,emissive:14251782,emissiveIntensity:.8,transparent:!0,opacity:.45,wireframe:!0}),f=new ht(l,c);f.position.y=1,e.meshGroup.add(f),e.shieldMesh=f}}else n==="SHOCKWAVE"?(e.powerUpTimer=0,e.activePowerUp=null,Le.playShockwave(),a==null||a(e.x,e.z,e)):n==="MEGARAM"&&(e.powerUpTimer=8)}removePowerUp(e){if(e){if(e.activePowerUp==="TITAN"){if(e.mass=e.baseMass&&!isNaN(e.baseMass)?e.baseMass:1.1,e.shieldMesh&&e.meshGroup){try{e.meshGroup.remove(e.shieldMesh),e.shieldMesh.geometry&&e.shieldMesh.geometry.dispose(),e.shieldMesh.material&&e.shieldMesh.material.dispose()}catch{}e.shieldMesh=void 0}}else e.activePowerUp==="NITRO"&&(e.maxSpeed=e.isPlayer?14.5:13.5,e.accel=e.isPlayer?24:22);e.activePowerUp=null,e.powerUpTimer=0}}clear(){for(const e of this.powerups)e.mesh&&this.scene.remove(e.mesh);this.powerups=[],this.nextSpawnTimer=4}}class S2{constructor(e){this.pool=[],this.poolSize=80,this.lastEmitTimes=new Map,this.group=new gi,e.add(this.group);const n=new ao(.35,1.2);n.rotateX(-Math.PI/2);const a=new Vi({color:593174,transparent:!0,opacity:.35,depthWrite:!1});for(let l=0;l<this.poolSize;l++){const c=new ht(n,a.clone());c.position.y=.015,c.visible=!1,this.group.add(c),this.pool.push({mesh:c,active:!1,life:0,maxLife:3.5})}}dropSkid(e,n,a,l,c=.35){const f=performance.now(),d=this.lastEmitTimes.get(e)||0;if(f-d<55)return;this.lastEmitTimes.set(e,f);const p=-.85,m=.85,g=Math.cos(l),v=Math.sin(l);[p,m].forEach(x=>{const E=this.pool.find(M=>!M.active);if(!E)return;const A=n+g*x,L=a-v*x;E.active=!0,E.life=0,E.mesh.position.set(A,.015,L),E.mesh.rotation.y=l,E.mesh.visible=!0,E.mesh.material.opacity=c})}update(e){for(const n of this.pool)if(n.active)if(n.life+=e,n.life>=n.maxLife)n.active=!1,n.mesh.visible=!1;else{const a=1-n.life/n.maxLife;n.mesh.material.opacity=a*.35}}clear(){for(const e of this.pool)e.active=!1,e.mesh.visible=!1;this.lastEmitTimes.clear()}}const Mv=["NOOOOOOOOO!","NOT LIKE THIIIS!","MOMMYYYYYY!","TELL MY MECHANIC I LOVED HIM!","MY BRAND NEW TIRES!","I CAN'T SWIIIIIM!","SEE YA IN SCRAP HEAVEN!","MY SUSPENSIOOON!","CURSE YOU SUMO CAAAARS!","I REGRET NOTHIIING!","WHO PUT ICE ON THE EDGGGE?!","AIAIAIAIIIIII!","MY BEAUTIFUL SPOILER!","MEDIIIIIIC!","SAVE YOURSELVES!","I'LL BE BAAAAACK!"];class b2{constructor(e){this.activeBubbles=new Map,this.scene=e}showSpeechBubble(e,n,a,l,c){this.removeBubble(e);const f=document.createElement("canvas");f.width=512,f.height=256;const d=f.getContext("2d");if(!d)return;const p=16,m=f.width-p*2,g=f.height-70,v=32;d.save(),d.shadowColor="rgba(0, 0, 0, 0.6)",d.shadowBlur=18,d.shadowOffsetX=6,d.shadowOffsetY=8,d.beginPath(),d.moveTo(p+v,p),d.lineTo(p+m-v,p),d.quadraticCurveTo(p+m,p,p+m,p+v),d.lineTo(p+m,p+g-v),d.quadraticCurveTo(p+m,p+g,p+m-v,p+g);const x=p+m/2;d.lineTo(x+25,p+g),d.lineTo(x,f.height-15),d.lineTo(x-20,p+g),d.lineTo(p+v,p+g),d.quadraticCurveTo(p,p+g,p,p+g-v),d.lineTo(p,p+v),d.quadraticCurveTo(p,p,p+v,p),d.closePath();const E=d.createLinearGradient(0,0,0,f.height);E.addColorStop(0,"#fef08a"),E.addColorStop(1,"#fde047"),d.fillStyle=E,d.fill(),d.shadowColor="transparent",d.lineWidth=10,d.strokeStyle="#0f172a",d.stroke(),d.lineWidth=3,d.strokeStyle="#ffffff",d.stroke(),d.fillStyle="#0f172a",d.font='900 38px "Fredoka", "Outfit", Impact, sans-serif',d.textAlign="center",d.textBaseline="middle";const A=c.split(" ");if(A.length>3&&c.length>16){const w=Math.ceil(A.length/2),P=A.slice(0,w).join(" "),U=A.slice(w).join(" ");d.fillText(P,p+m/2,p+g/2-24),d.fillText(U,p+m/2,p+g/2+26)}else d.fillText(c,p+m/2,p+g/2);d.restore();const L=new vp(f);L.minFilter=Nn,L.magFilter=Nn;const M=new Zv({map:L,transparent:!0,depthTest:!1}),_=new jS(M),I=f.width/f.height,z=3.6;_.scale.set(z*I,z,1),_.position.set(n,a+4.2,l),this.scene.add(_),this.activeBubbles.set(e,{id:e,sprite:_,texture:L,elapsed:0,maxDuration:2.8,initialScale:z})}update(e,n){for(const[a,l]of this.activeBubbles.entries()){l.elapsed+=e;const c=Math.min(1,l.elapsed*6),f=l.initialScale*(1+Math.sin(c*Math.PI)*.25),d=2,p=(Math.random()-.5)*.15,m=(Math.random()-.5)*.15,g=n.get(a);if(g&&l.sprite.position.set(g.x+p,g.y+4+m,g.z),l.elapsed>l.maxDuration-.6){const v=(l.maxDuration-l.elapsed)/.6;l.sprite.material.opacity=Math.max(0,v)}l.sprite.scale.set(f*d,f,1),l.elapsed>=l.maxDuration&&this.removeBubble(a)}}removeBubble(e){const n=this.activeBubbles.get(e);n&&(this.scene.remove(n.sprite),n.texture.dispose(),n.sprite.material.dispose(),this.activeBubbles.delete(e))}clear(){for(const e of Array.from(this.activeBubbles.keys()))this.removeBubble(e)}}class E2{constructor(e,n={}){this.animFrameId=null,this.lastTime=0,this.arena=null,this.gameState="MENU",this.cars=[],this.playerCar=null,this.matchStartTime=0,this.countdownTimer=0,this.cameraShakeIntensity=0,this.cameraAngle=0,this.currentArenaRadius=22,this.isShrinkingRing=!1,this.shrinkAlertGiven=!1,this.slowMoTimer=0,this.playerCombo=0,this.maxPlayerCombo=0,this.lastKOTime=0,this.lastRadarDispatch=0,this.lastHudDispatch=0,this.lastSpeedVal=-1,this.lastBoostVal=-1,this.lastBoostingVal=!1,this.lastDriftVal=!1,this.lastDriftBoostVal=!1,this.lastPowerUpType=null,this.lastPowerUpSec=-1,this.keys={},this.virtualThrottle=0,this.virtualSteer=0,this.virtualBoost=!1,this.virtualDrift=!1,this.customization={color:"#3b82f6",style:"brawler",spoiler:!0,roofLight:!1,name:"Player"},this.settings={soundEnabled:!0,musicEnabled:!0,cameraShake:!0,difficulty:"normal",arenaTheme:"classic",controls:"wasd"},this.container=e,this.callbacks=n,this.scene=new VS,this.scene.background=new ct(988970),this.scene.fog=new Xs(988970,.008);const a=e.clientWidth||window.innerWidth,l=e.clientHeight||window.innerHeight;this.camera=new wi(50,a/l,.1,400),this.camera.position.set(0,18,-32),this.renderer=new u2({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(a,l),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Av,e.appendChild(this.renderer.domElement),this.setupLighting(),this.particles=new x2,this.scene.add(this.particles.group),this.physics=new v2({arenaRadius:22,warningRadius:18.5,eliminationRadius:23.5}),this.ai=new _2(this.settings.difficulty),this.powerups=new M2(this.scene,this.particles),this.skidmarks=new S2(this.scene),this.speechBubbles=new b2(this.scene),this.rebuildArena(this.settings.arenaTheme),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this),this.handleResize=this.handleResize.bind(this),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("resize",this.handleResize),this.startLoop(),this.startMenuDemo()}setupLighting(){const e=new h1(16777215,.65);this.scene.add(e);const n=new Zx(16775917,1.4);n.position.set(30,45,-25),n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=10,n.shadow.camera.far=120,n.shadow.camera.left=-30,n.shadow.camera.right=30,n.shadow.camera.top=30,n.shadow.camera.bottom=-30,n.shadow.bias=-5e-4,this.scene.add(n);const a=new Zx(3718648,.5);a.position.set(-30,20,30),this.scene.add(a)}rebuildArena(e="classic"){this.arena&&(this.scene.remove(this.arena.arenaGroup),this.scene.remove(this.arena.environmentGroup)),this.arena=g2(e),this.scene.add(this.arena.arenaGroup),this.scene.add(this.arena.environmentGroup),e==="cyber"?(this.scene.background=new ct(132631),this.scene.fog=new Xs(132631,.01)):e==="desert"?(this.scene.background=new ct(4528643),this.scene.fog=new Xs(4528643,.008)):e==="lava"?(this.scene.background=new ct(1579035),this.scene.fog=new Xs(1579035,.012)):(this.scene.background=new ct(988970),this.scene.fog=new Xs(988970,.008))}startMenuDemo(){this.setGameState("MENU"),this.clearCars(),Le.stopEngineHum(),Le.playMenuMusic();const e=["#ef4444","#eab308","#22c55e","#a855f7","#3b82f6"],n=e.length;for(let a=0;a<n;a++){const l=a/n*Math.PI*2,c=12,f=Math.sin(l)*c,d=Math.cos(l)*c,p=["brawler","sport","classic","truck"],m=p[a%p.length],g=fd(e[a],m,!1);this.scene.add(g.group),this.cars.push({id:`demo-${a}`,name:`Bot ${a+1}`,isPlayer:!1,color:e[a],personality:"chaotic",style:m,x:f,z:d,y:0,vx:0,vz:0,vy:0,angle:l+Math.PI/2,angularVelocity:0,speed:0,mass:1,baseMass:1,maxSpeed:8,accel:14,handling:2.2,boost:100,isBoosting:!1,boostCooldown:0,isDrifting:!1,driftTime:0,driftBoostReady:!1,activePowerUp:null,powerUpTimer:0,isAlive:!0,isEliminated:!1,fallTimer:0,eliminationRank:0,knockouts:0,stuckTimer:0,meshGroup:g.group,wheels:g.wheels,bodyMesh:g.bodyMesh,frontWheels:g.frontWheels})}}startMatch(e,n){var g,v,x,E,A,L,M,_,I,z;e&&(this.customization=e),n&&(this.settings=n,this.ai.setDifficulty(n.difficulty),n.arenaTheme!==((g=this.arena)==null?void 0:g.theme)&&this.rebuildArena(n.arenaTheme)),this.clearCars(),this.particles.clear(),this.powerups.clear(),this.skidmarks.clear(),Le.stopEngineHum(),Le.stopMusic(!1),this.currentArenaRadius=22,this.isShrinkingRing=!1,this.shrinkAlertGiven=!1,this.playerCombo=0,this.maxPlayerCombo=0,this.lastKOTime=0,this.slowMoTimer=0,this.physics.updateArenaRadii(22,18.5,23.5),(v=this.arena)==null||v.setShrinkRadius(22,!1),(E=(x=this.callbacks).onComboUpdate)==null||E.call(x,0,""),(L=(A=this.callbacks).onRingWarning)==null||L.call(A,!1,22);const a=[{color:"#ef4444",style:"brawler",personality:"aggressive",name:"Red Crusher"},{color:"#eab308",style:"sport",personality:"hunter",name:"Yellow Blitz"},{color:"#22c55e",style:"truck",personality:"defensive",name:"Green Tank"},{color:"#a855f7",style:"classic",personality:"chaotic",name:"Purple Chaos"},{color:"#f97316",style:"brawler",personality:"aggressive",name:"Orange Ram"}],l=1+a.length,c=14,f=0,d=Math.sin(f)*c,p=Math.cos(f)*c,m=fd(this.customization.color,this.customization.style,!0);this.scene.add(m.group),this.playerCar={id:"player",name:this.customization.name||"YOU",isPlayer:!0,color:this.customization.color,personality:"player",style:this.customization.style,x:d,z:p,y:0,vx:0,vz:0,vy:0,angle:Math.PI,angularVelocity:0,speed:0,mass:1.1,baseMass:1.1,maxSpeed:14.5,accel:24,handling:2.8,boost:100,isBoosting:!1,boostCooldown:0,isDrifting:!1,driftTime:0,driftBoostReady:!1,activePowerUp:null,powerUpTimer:0,isAlive:!0,isEliminated:!1,fallTimer:0,eliminationRank:0,knockouts:0,stuckTimer:0,hasStartedFalling:!1,meshGroup:m.group,wheels:m.wheels,bodyMesh:m.bodyMesh,badgeMesh:m.badgeMesh,frontWheels:m.frontWheels},this.cars.push(this.playerCar),a.forEach((w,P)=>{const U=(P+1)/l*Math.PI*2,O=Math.sin(U)*c,b=Math.cos(U)*c,D=fd(w.color,w.style,!1);this.scene.add(D.group);const B={id:`ai-${P}`,name:w.name,isPlayer:!1,color:w.color,personality:w.personality,style:w.style,x:O,z:b,y:0,vx:0,vz:0,vy:0,angle:U+Math.PI,angularVelocity:0,speed:0,mass:w.style==="brawler"||w.style==="truck"?1.25:.95,baseMass:w.style==="brawler"||w.style==="truck"?1.25:.95,maxSpeed:w.style==="sport"?14.8:13.5,accel:22,handling:2.6,boost:100,isBoosting:!1,boostCooldown:0,isDrifting:!1,driftTime:0,driftBoostReady:!1,activePowerUp:null,powerUpTimer:0,isAlive:!0,isEliminated:!1,fallTimer:0,eliminationRank:0,knockouts:0,stuckTimer:0,hasStartedFalling:!1,meshGroup:D.group,wheels:D.wheels,bodyMesh:D.bodyMesh,frontWheels:D.frontWheels};this.cars.push(B)}),this.setGameState("COUNTDOWN"),this.countdownTimer=3.8,(_=(M=this.callbacks).onCarsLeftUpdate)==null||_.call(M,this.cars.length),(z=(I=this.callbacks).onCountdownUpdate)==null||z.call(I,"3"),Le.playCountdown(!1)}setGameState(e){var n,a;this.gameState=e,(a=(n=this.callbacks).onGameStateChange)==null||a.call(n,e),e==="PLAYING"&&(this.matchStartTime=performance.now())}getGameState(){return this.gameState}pauseGame(){this.gameState==="PLAYING"&&(this.setGameState("PAUSED"),Le.stopEngineHum(),Le.pauseMusic())}resumeGame(){this.gameState==="PAUSED"&&(this.setGameState("PLAYING"),Le.resumeMusic())}clearCars(){this.speechBubbles.clear(),this.cars.forEach(e=>{e.meshGroup&&this.scene.remove(e.meshGroup)}),this.cars=[],this.playerCar=null,this.ai.clear()}handleKeyDown(e){this.keys[e.code]=!0,e.code==="Escape"||e.code==="KeyP"?this.gameState==="PLAYING"?this.pauseGame():this.gameState==="PAUSED"&&this.resumeGame():e.code==="KeyR"&&(this.gameState==="PLAYING"||this.gameState==="VICTORY"||this.gameState==="DEFEAT")&&this.startMatch()}handleKeyUp(e){this.keys[e.code]=!1}setVirtualInput(e,n,a){this.virtualThrottle=e,this.virtualSteer=n,this.virtualBoost=a}setVirtualDrift(e){this.virtualDrift=e}getPlayerInput(){let e=0,n=0,a=!1,l=!1;return(this.keys.KeyW||this.keys.ArrowUp)&&(e+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(e-=.8),(this.keys.KeyA||this.keys.ArrowLeft)&&(n+=1),(this.keys.KeyD||this.keys.ArrowRight)&&(n-=1),this.keys.Space&&(a=!0),(this.keys.ShiftLeft||this.keys.ShiftRight||this.keys.KeyE)&&(l=!0),Math.abs(this.virtualThrottle)>.01&&(e=this.virtualThrottle),Math.abs(this.virtualSteer)>.01&&(n=this.virtualSteer),this.virtualBoost&&(a=!0),this.virtualDrift&&(l=!0),{throttle:Math.max(-1,Math.min(1,e)),steer:Math.max(-1,Math.min(1,n)),boost:a,drift:l}}startLoop(){this.lastTime=performance.now();const e=n=>{const a=Math.min((n-this.lastTime)/1e3,.06);this.lastTime=n,this.update(a),this.render(),this.animFrameId=requestAnimationFrame(e)};this.animFrameId=requestAnimationFrame(e)}update(e){var a,l,c,f,d,p,m,g,v,x,E,A,L,M,_,I,z,w,P,U,O,b,D,B,H,W,ne,le,K,G,k,ie,_e;let n=e;if(this.slowMoTimer>0&&(this.slowMoTimer-=e,n*=.22),this.gameState==="COUNTDOWN"){this.countdownTimer-=n,this.countdownTimer>2.8?(l=(a=this.callbacks).onCountdownUpdate)==null||l.call(a,"3"):this.countdownTimer>1.8?(this.countdownTimer+n>2.8&&Le.playCountdown(!1),(f=(c=this.callbacks).onCountdownUpdate)==null||f.call(c,"2")):this.countdownTimer>.8?(this.countdownTimer+n>1.8&&Le.playCountdown(!1),(p=(d=this.callbacks).onCountdownUpdate)==null||p.call(d,"1")):this.countdownTimer>0?(this.countdownTimer+n>.8&&Le.playCountdown(!0),(g=(m=this.callbacks).onCountdownUpdate)==null||g.call(m,"GO!")):(this.setGameState("PLAYING"),(x=(v=this.callbacks).onCountdownUpdate)==null||x.call(v,""),Le.playBattleMusic()),this.updateCarsIdle(),this.updateCameraBehindPlayer(n);return}if(this.gameState==="MENU"){this.cameraAngle+=.25*n;const V=34;this.camera.position.x=Math.sin(this.cameraAngle)*V,this.camera.position.z=Math.cos(this.cameraAngle)*V,this.camera.position.y=18,this.camera.lookAt(0,2,0);for(const T of this.cars)this.physics.updateCarMotion(T,n,.65,.18,!1);this.physics.resolveCarCollisions(this.cars,n),this.particles.update(n);return}if(this.gameState==="PLAYING"||this.gameState==="VICTORY"||this.gameState==="DEFEAT"){const V=(performance.now()-this.matchStartTime)/1e3,T=this.cars.filter(oe=>oe.isAlive);if(this.gameState==="PLAYING"&&(V>24||T.length<=3)){this.isShrinkingRing=!0,this.shrinkAlertGiven||(this.shrinkAlertGiven=!0,Le.playSirenWarning(),(A=(E=this.callbacks).onArcadeMessage)==null||A.call(E,"⚡ ARENA SHRINKING!"),this.triggerCameraShake(.5));const oe=13.5;this.currentArenaRadius>oe&&(this.currentArenaRadius=Math.max(oe,this.currentArenaRadius-n*.38),this.physics.updateArenaRadii(this.currentArenaRadius,this.currentArenaRadius*.84,this.currentArenaRadius*1.08),(L=this.arena)==null||L.setShrinkRadius(this.currentArenaRadius,!0)),(_=(M=this.callbacks).onRingWarning)==null||_.call(M,!0,this.currentArenaRadius)}else(z=(I=this.callbacks).onRingWarning)==null||z.call(I,!1,this.currentArenaRadius);if(this.powerups.update(n,this.cars,this.currentArenaRadius,oe=>{var se,re;const q={NITRO:"🔥 HYPER NITRO ACTIVATED!",TITAN:"🛡️ TITAN FORCEFIELD ACTIVATED!",SHOCKWAVE:"💥 SONIC SHOCKWAVE DETONATED!",MEGARAM:"⚡ MEGARAM SMASH ACTIVATED!"};(re=(se=this.callbacks).onArcadeMessage)==null||re.call(se,q[oe]||"✨ POWER-UP READY!"),this.triggerCameraShake(.4)},(oe,q,se)=>{this.triggerCameraShake(.85),this.particles.emitImpactBurst(oe,1,q,2.5);for(const re of this.cars){if(re.id===se.id||!re.isAlive)continue;const Ae=Math.hypot(re.x-oe,re.z-q);if(Ae<18){const Oe=Ae>.1?(re.x-oe)/Ae:Math.random()-.5,Ce=Ae>.1?(re.z-q)/Ae:Math.random()-.5,Qe=(18-Ae)*2.2;re.vx+=Oe*Qe,re.vz+=Ce*Qe,re.vy=3.5,re.angularVelocity=(Math.random()-.5)*6,re.lastHitById=se.id}}}),this.playerCar&&this.playerCar.isAlive){const oe=this.gameState==="PLAYING"?this.getPlayerInput():{throttle:0,steer:0,boost:!1,drift:!1},q=this.playerCar.isBoosting;this.physics.updateCarMotion(this.playerCar,n,oe.throttle,oe.steer,oe.boost,oe.drift),oe.boost&&!q&&this.playerCar.isBoosting&&(Le.playBoost(),this.triggerCameraShake(.35)),this.playerCar.isDrifting?(this.skidmarks.dropSkid("player",this.playerCar.x,this.playerCar.z,this.playerCar.angle,.45),this.particles.emitTireSmoke(this.playerCar.x,this.playerCar.y,this.playerCar.z),Le.playDriftScreech()):oe.throttle<-.2&&this.playerCar.speed>7&&this.skidmarks.dropSkid("player",this.playerCar.x,this.playerCar.z,this.playerCar.angle,.3),this.playerCar.isBoosting&&this.particles.emitBoostFlame(this.playerCar.x,this.playerCar.y+.4,this.playerCar.z,this.playerCar.angle,this.playerCar.speed),Le.updateEngineHum(this.playerCar.speed/this.playerCar.maxSpeed,this.playerCar.isBoosting);const se=performance.now();if(se-this.lastHudDispatch>50){this.lastHudDispatch=se;const re=Math.round(this.playerCar.boost);(re!==this.lastBoostVal||this.playerCar.isBoosting!==this.lastBoostingVal)&&(this.lastBoostVal=re,this.lastBoostingVal=this.playerCar.isBoosting,(P=(w=this.callbacks).onBoostUpdate)==null||P.call(w,re,this.playerCar.isBoosting));const Ae=Math.round(this.playerCar.speed*8);Math.abs(Ae-this.lastSpeedVal)>=1&&(this.lastSpeedVal=Ae,(O=(U=this.callbacks).onSpeedUpdate)==null||O.call(U,Ae));const Oe=Math.ceil(this.playerCar.powerUpTimer||0),Ce=this.playerCar.activePowerUp||null;(Oe!==this.lastPowerUpSec||Ce!==this.lastPowerUpType)&&(this.lastPowerUpSec=Oe,this.lastPowerUpType=Ce,(D=(b=this.callbacks).onPowerUpUpdate)==null||D.call(b,Ce,Oe));const Qe=!!this.playerCar.isDrifting,je=!!this.playerCar.driftBoostReady;(Qe!==this.lastDriftVal||je!==this.lastDriftBoostVal)&&(this.lastDriftVal=Qe,this.lastDriftBoostVal=je,(H=(B=this.callbacks).onDriftUpdate)==null||H.call(B,Qe,je))}this.playerCar.badgeMesh&&(this.playerCar.badgeMesh.rotation.y=-this.playerCar.angle,this.playerCar.badgeMesh.position.y=3.2+Math.sin(performance.now()*.005)*.2)}else Le.stopEngineHum(),(ne=(W=this.callbacks).onPowerUpUpdate)==null||ne.call(W,null,0),(K=(le=this.callbacks).onDriftUpdate)==null||K.call(le,!1,!1),this.playerCar&&!this.playerCar.isAlive&&!this.playerCar.isEliminated&&this.physics.updateCarMotion(this.playerCar,n,0,0,!1,!1);for(const oe of this.cars)if(!oe.isPlayer)if(oe.isAlive){const q=this.ai.getCommand(oe,this.cars,this.currentArenaRadius,this.currentArenaRadius*.84,n,this.powerups.powerups);this.physics.updateCarMotion(oe,n,q.throttle,q.steer,q.boost,q.drift),oe.isDrifting&&this.skidmarks.dropSkid(oe.id,oe.x,oe.z,oe.angle,.35),oe.isBoosting&&this.particles.emitBoostFlame(oe.x,oe.y+.4,oe.z,oe.angle,oe.speed)}else this.physics.updateCarMotion(oe,n,0,0,!1);this.skidmarks.update(n);const X=this.physics.resolveCarCollisions(this.cars,n);for(const oe of X){const q=oe.relativeSpeed/10;this.particles.emitImpactBurst(oe.contactPoint.x,oe.contactPoint.y,oe.contactPoint.z,q),Le.playHit(q),(oe.carA.isPlayer||oe.carB.isPlayer)&&(this.triggerCameraShake(Math.min(.8,q*.45)),q>1.3&&((k=(G=this.callbacks).onArcadeMessage)==null||k.call(G,"💥 SMASH!"),q>1.8&&(this.slowMoTimer=.08)))}this.checkEliminations(),this.particles.update(n);const ce=new Map;for(const oe of this.cars)ce.set(oe.id,{x:oe.x,y:oe.y,z:oe.z});this.speechBubbles.update(n,ce);const ye=performance.now();if(this.playerCar&&ye-this.lastRadarDispatch>66){this.lastRadarDispatch=ye;const oe={arenaRadius:this.currentArenaRadius,player:{x:this.playerCar.x,z:this.playerCar.z,angle:this.playerCar.angle},opponents:this.cars.filter(q=>!q.isPlayer&&q.isAlive).map(q=>({id:q.id,x:q.x,z:q.z,color:q.color,isAlive:q.isAlive})),powerups:this.powerups.powerups.map(q=>({x:q.x,z:q.z,type:q.type}))};(_e=(ie=this.callbacks).onRadarUpdate)==null||_e.call(ie,oe)}this.updateCamera(n)}}updateCarsIdle(){for(const e of this.cars)e.meshGroup&&(e.meshGroup.position.set(e.x,e.y,e.z),e.meshGroup.rotation.y=e.angle)}checkEliminations(){var a,l,c,f,d,p,m,g,v,x,E,A,L,M,_,I,z,w,P,U,O,b,D;const n=this.cars.filter(B=>B.isAlive).length;for(const B of this.cars)if(!B.isAlive&&!B.isEliminated){if(B.fallTimer+=.016,!B.hasStartedFalling){B.hasStartedFalling=!0;const H=Mv[Math.floor(Math.random()*Mv.length)];B.screamLine=H,Le.playFallingSlideWhistle(),Le.playCartoonYell(H,B.isPlayer),this.speechBubbles.showSpeechBubble(B.id,B.x,B.y,B.z,H);const W=this.cars.filter(ne=>ne.isAlive).length;if((l=(a=this.callbacks).onCarsLeftUpdate)==null||l.call(a,W),B.isPlayer)this.slowMoTimer=.4,this.triggerCameraShake(.85),(f=(c=this.callbacks).onArcadeMessage)==null||f.call(c,`😱 YOU FLEW OFF! "${H}"`);else if(B.lastHitById==="player"){const ne=performance.now();ne-this.lastKOTime<8500?this.playerCombo++:this.playerCombo=1,this.lastKOTime=ne,this.maxPlayerCombo=Math.max(this.maxPlayerCombo,this.playerCombo),this.playerCar&&this.playerCar.knockouts++,this.slowMoTimer=.22,this.triggerCameraShake(.8),Le.playComboCheer(this.playerCombo);let le="🥊 KNOCKOUT!",K=40;this.playerCombo===2?(le="🔥 DOUBLE KO!",K=80):this.playerCombo===3?(le="⚡ TRIPLE SMASH!",K=140):this.playerCombo>=4&&(le=`👑 ${this.playerCombo}X SUMO GOD!`,K=220),(p=(d=this.callbacks).onComboUpdate)==null||p.call(d,this.playerCombo,le),(g=(m=this.callbacks).onArcadeMessage)==null||g.call(m,`${le} "${H}" (+${K}G)`),(x=(v=this.callbacks).onCoinsEarned)==null||x.call(v,K)}else W===1&&((E=this.playerCar)!=null&&E.isAlive)?(L=(A=this.callbacks).onArcadeMessage)==null||L.call(A,`⚔️ FINAL SHOWDOWN! "${H}"`):W===2?(_=(M=this.callbacks).onArcadeMessage)==null||_.call(M,`⚡ LAST 2 CARS! "${H}"`):(z=(I=this.callbacks).onArcadeMessage)==null||z.call(I,`👋 ${B.name} plunged! "${H}"`)}if(B.y>-22&&B.fallTimer<1.9){const H=B.color?parseInt(B.color.replace("#",""),16):void 0;this.particles.emitFallingPanicTrail(B.x,B.y,B.z,H)}if((B.fallTimer>1.9||B.y<-22)&&(B.isEliminated=!0,this.particles.emitComicSplashDown(B.x,B.y,B.z),Le.playComedicSplat(),this.speechBubbles.removeBubble(B.id),B.meshGroup&&this.scene.remove(B.meshGroup),B.isPlayer&&this.gameState==="PLAYING")){this.setGameState("DEFEAT"),Le.stopMusic(!1),Le.playDefeat(),(P=(w=this.callbacks).onArcadeMessage)==null||P.call(w,"💀 ELIMINATED!");const H=(performance.now()-this.matchStartTime)/1e3;setTimeout(()=>{var W,ne,le;(le=(ne=this.callbacks).onMatchEnd)==null||le.call(ne,{won:!1,rank:n+1,knockouts:((W=this.playerCar)==null?void 0:W.knockouts)||0,coinsEarned:25,matchDuration:Math.round(H),maxCombo:this.maxPlayerCombo})},1200)}}if(this.playerCar&&this.playerCar.isAlive&&n===1&&this.gameState==="PLAYING"){this.setGameState("VICTORY"),Le.stopMusic(!1),Le.playVictory(),(O=(U=this.callbacks).onArcadeMessage)==null||O.call(U,"🏆 SUMO CHAMPION!");try{f2({particleCount:120,spread:80,origin:{y:.6}})}catch{}const B=(performance.now()-this.matchStartTime)/1e3,H=150;(D=(b=this.callbacks).onCoinsEarned)==null||D.call(b,H),setTimeout(()=>{var W,ne;(ne=(W=this.callbacks).onMatchEnd)==null||ne.call(W,{won:!0,rank:1,knockouts:5,coinsEarned:H,matchDuration:Math.round(B),maxCombo:Math.max(1,this.maxPlayerCombo)})},2e3)}}updateCameraBehindPlayer(e){if(!this.playerCar)return;const n=this.playerCar.x-Math.sin(this.playerCar.angle)*16,a=this.playerCar.z-Math.cos(this.playerCar.angle)*16,l=9.5;this.camera.position.x=ba.lerp(this.camera.position.x,n,e*4),this.camera.position.y=ba.lerp(this.camera.position.y,l,e*4),this.camera.position.z=ba.lerp(this.camera.position.z,a,e*4),this.camera.lookAt(this.playerCar.x,this.playerCar.y+1.2,this.playerCar.z)}updateCamera(e){if(this.gameState==="VICTORY"&&this.playerCar){this.cameraAngle+=.8*e;const v=14;this.camera.position.x=this.playerCar.x+Math.sin(this.cameraAngle)*v,this.camera.position.z=this.playerCar.z+Math.cos(this.cameraAngle)*v,this.camera.position.y=this.playerCar.y+6.5,this.camera.lookAt(this.playerCar.x,this.playerCar.y+1.5,this.playerCar.z);return}if(!this.playerCar)return;if(!this.playerCar.isAlive){const v=Math.max(3.5,this.playerCar.y+6),x=18,E=this.playerCar.x-Math.sin(this.playerCar.angle)*x,A=this.playerCar.z-Math.cos(this.playerCar.angle)*x;this.camera.position.x=ba.lerp(this.camera.position.x,E,e*3),this.camera.position.y=ba.lerp(this.camera.position.y,v,e*3.5),this.camera.position.z=ba.lerp(this.camera.position.z,A,e*3),this.camera.lookAt(this.playerCar.x,this.playerCar.y+.5,this.playerCar.z);return}const n=Math.min(1,this.playerCar.speed/this.playerCar.maxSpeed),a=this.playerCar.isBoosting?3.5:0,l=15+n*4+a,c=8.8+n*1.5,f=this.playerCar.x-Math.sin(this.playerCar.angle)*l,d=this.playerCar.z-Math.cos(this.playerCar.angle)*l,p=this.playerCar.y+c,m=e*6.5;if(this.camera.position.x=ba.lerp(this.camera.position.x,f,m),this.camera.position.y=ba.lerp(this.camera.position.y,p,m),this.camera.position.z=ba.lerp(this.camera.position.z,d,m),this.cameraShakeIntensity>.01&&this.settings.cameraShake){const v=(Math.random()-.5)*this.cameraShakeIntensity*1.2,x=(Math.random()-.5)*this.cameraShakeIntensity*.8,E=(Math.random()-.5)*this.cameraShakeIntensity*1.2;this.camera.position.add(new te(v,x,E)),this.cameraShakeIntensity=Math.max(0,this.cameraShakeIntensity-e*2.5)}const g=new te(this.playerCar.x+Math.sin(this.playerCar.angle)*3,this.playerCar.y+1.2,this.playerCar.z+Math.cos(this.playerCar.angle)*3);this.camera.lookAt(g)}triggerCameraShake(e){this.settings.cameraShake&&(this.cameraShakeIntensity=Math.min(1.2,this.cameraShakeIntensity+e))}render(){try{this.renderer.render(this.scene,this.camera)}catch{}}handleResize(){if(!this.container)return;const e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}dispose(){this.animFrameId&&cancelAnimationFrame(this.animFrameId),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("resize",this.handleResize),Le.cleanUp(),this.speechBubbles.clear(),this.renderer.dispose(),this.container&&this.renderer.domElement&&this.container.removeChild(this.renderer.domElement)}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),Sv=r=>{const e=A2(r);return e.charAt(0).toUpperCase()+e.slice(1)},u_=(...r)=>r.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),w2=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var R2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=it.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:l="",children:c,iconNode:f,...d},p)=>it.createElement("svg",{ref:p,...R2,width:e,height:e,stroke:r,strokeWidth:a?Number(n)*24/Number(e):n,className:u_("lucide",l),...!c&&!w2(d)&&{"aria-hidden":"true"},...d},[...f.map(([m,g])=>it.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(r,e)=>{const n=it.forwardRef(({className:a,...l},c)=>it.createElement(C2,{ref:c,iconNode:e,className:u_(`lucide-${T2(Sv(r))}`,`lucide-${r}`,a),...l}));return n.displayName=Sv(r),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],D2=Vt("activity",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],L2=Vt("arrow-right",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],P2=Vt("check",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],z2=Vt("circle-question-mark",I2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],F2=Vt("clock",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],f_=Vt("coins",G2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],V2=Vt("compass",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],X2=Vt("crosshair",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],gl=Vt("flame",W2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Y2=Vt("gamepad-2",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Z2=Vt("gauge",j2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],Q2=Vt("hammer",K2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],h_=Vt("house",J2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],d_=Vt("music",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],tw=Vt("pause",ew);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],p_=Vt("play",nw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],pu=Vt("rotate-ccw",iw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],bv=Vt("settings",aw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],m_=Vt("shield-alert",sw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Mu=Vt("shield",rw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],lw=Vt("skull",ow);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],uw=Vt("smartphone",cw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],g_=Vt("sparkles",fw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],dw=Vt("triangle-alert",hw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],x_=Vt("trophy",pw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],mu=Vt("volume-2",mw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ep=Vt("volume-x",gw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],vw=Vt("wrench",xw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Tp=Vt("x",_w);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ap=Vt("zap",yw),Mw=({data:r})=>{const e=it.useRef(null);return it.useEffect(()=>{const n=e.current;if(!n||!r||!r.player)return;const a=n.getContext("2d");if(a)try{const l=n.width,c=l/2,d=(c-6)/24;a.clearRect(0,0,l,l),a.beginPath(),a.arc(c,c,c-2,0,Math.PI*2),a.fillStyle="rgba(15, 23, 42, 0.85)",a.fill(),a.lineWidth=1.5,a.strokeStyle="rgba(56, 189, 248, 0.35)",a.stroke();const p=Math.max(8,(r.arenaRadius||22)*d);if(a.beginPath(),a.arc(c,c,p,0,Math.PI*2),a.lineWidth=2,a.strokeStyle=(r.arenaRadius||22)<18?"#ef4444":"#38bdf8",a.stroke(),a.beginPath(),a.arc(c,c,p*.5,0,Math.PI*2),a.lineWidth=1,a.strokeStyle="rgba(255, 255, 255, 0.12)",a.stroke(),Array.isArray(r.powerups)&&r.powerups.forEach(m=>{if(!m||!isFinite(m.x)||!isFinite(m.z))return;const g=c+m.x*d,v=c+m.z*d;let x="#06b6d4";m.type==="TITAN"?x="#f59e0b":m.type==="SHOCKWAVE"?x="#d946ef":m.type==="MEGARAM"&&(x="#ef4444"),a.save(),a.translate(g,v),a.fillStyle=x,a.shadowColor=x,a.shadowBlur=6,a.beginPath(),a.moveTo(0,-3.5),a.lineTo(3.5,0),a.lineTo(0,3.5),a.lineTo(-3.5,0),a.closePath(),a.fill(),a.restore()}),Array.isArray(r.opponents)&&r.opponents.forEach(m=>{if(!m||!m.isAlive||!isFinite(m.x)||!isFinite(m.z))return;const g=c+m.x*d,v=c+m.z*d;a.beginPath(),a.arc(g,v,3.5,0,Math.PI*2),a.fillStyle=m.color||"#ef4444",a.fill(),a.lineWidth=1,a.strokeStyle="#ffffff",a.stroke()}),isFinite(r.player.x)&&isFinite(r.player.z)){const m=c+r.player.x*d,g=c+r.player.z*d;a.save(),a.translate(m,g),a.rotate(-(r.player.angle||0)+Math.PI),a.beginPath(),a.moveTo(0,-5.5),a.lineTo(4,4.5),a.lineTo(0,2.5),a.lineTo(-4,4.5),a.closePath(),a.fillStyle="#38bdf8",a.shadowColor="#0284c7",a.shadowBlur=5,a.fill(),a.lineWidth=1,a.strokeStyle="#ffffff",a.stroke(),a.restore()}}catch{}},[r]),R.jsxs("div",{className:"relative flex flex-col items-center bg-slate-900/90 backdrop-blur-md p-2 rounded-2xl border border-slate-700/80 shadow-2xl",children:[R.jsxs("div",{className:"text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"}),"Radar"]}),R.jsx("canvas",{ref:e,width:100,height:100,className:"w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-full"})]})},Sw=({carsLeft:r,countdownText:e,boostPercent:n,isBoosting:a,speed:l,arcadeMessage:c,activePowerUp:f,powerUpTimeLeft:d,radarData:p,comboCount:m,comboText:g,isShrinkingRing:v,arenaRadius:x,isDrifting:E,driftBoostReady:A,onPause:L,onVirtualInput:M,onVirtualDrift:_})=>{const[I,z]=it.useState(0),[w,P]=it.useState(0),[U,O]=it.useState(!1),[b,D]=it.useState(!1),[B,H]=it.useState(Le.isSoundOn()),[W,ne]=it.useState(Le.isMusicOn()),[le,K]=it.useState(()=>typeof window<"u"?"ontouchstart"in window||navigator.maxTouchPoints>0:!1),G=()=>{Le.unlockAudio();const ie=!B;Le.setSoundEnabled(ie),H(ie),ie&&Le.playClick()},k=()=>{Le.unlockAudio();const ie=!W;Le.setMusicEnabled(ie),ne(ie),ie&&Le.playClick()};return it.useEffect(()=>{M(I,w,U)},[I,w,U,M]),it.useEffect(()=>{_(b)},[b,_]),R.jsxs("div",{id:"game-hud",className:"absolute inset-0 pointer-events-none flex flex-col justify-between p-3 sm:p-5 overflow-hidden",children:[R.jsxs("div",{className:"flex items-start justify-between w-full gap-2",children:[R.jsxs("div",{className:"flex flex-col gap-2 pointer-events-auto",children:[R.jsxs("div",{className:"flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-3 sm:px-4 py-2 rounded-2xl border-2 border-blue-500/40 shadow-lg",children:[R.jsx("div",{className:"w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-sm shadow-inner",children:"YOU"}),R.jsxs("div",{children:[R.jsx("div",{className:"text-[10px] text-blue-300 font-bold uppercase tracking-wider",children:"Speed"}),R.jsxs("div",{className:"text-lg sm:text-xl font-black text-white tabular-nums tracking-wide",children:[l," ",R.jsx("span",{className:"text-[10px] text-slate-400 font-semibold",children:"KM/H"})]})]})]}),f&&R.jsxs("div",{className:"flex items-center gap-2.5 px-3 py-1.5 rounded-xl backdrop-blur-md border animate-bounce shadow-xl bg-slate-900/95 border-amber-400 text-amber-300",children:[f==="NITRO"&&R.jsx(gl,{className:"w-5 h-5 text-cyan-400"}),f==="TITAN"&&R.jsx(Mu,{className:"w-5 h-5 text-amber-400"}),f==="MEGARAM"&&R.jsx(X2,{className:"w-5 h-5 text-red-500"}),R.jsxs("div",{children:[R.jsxs("div",{className:"text-[10px] font-black uppercase tracking-wider text-slate-300",children:[f," ACTIVE"]}),R.jsxs("div",{className:"text-xs font-black text-white tabular-nums",children:[d.toFixed(1),"s"]})]})]}),E&&R.jsx("div",{className:`px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg border ${A?"bg-amber-500 text-slate-950 border-yellow-300 animate-pulse":"bg-slate-900/90 text-cyan-300 border-cyan-500/50"}`,children:A?"🔥 DRIFT BOOST READY!":"DRIFTING..."})]}),R.jsxs("div",{className:"flex flex-col items-center gap-1.5",children:[R.jsxs("div",{className:"bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-2xl border-2 border-amber-500/50 shadow-xl flex items-center gap-2 sm:gap-3",children:[R.jsx(m_,{className:"w-4 h-4 sm:w-5 sm:h-5 text-amber-400 animate-pulse"}),R.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest",children:"Cars Left:"}),R.jsx("span",{className:"text-xl sm:text-2xl font-black text-amber-400 tabular-nums",children:r})]}),v&&R.jsxs("div",{className:"bg-red-950/90 border border-red-500/80 text-red-300 px-3 py-1 rounded-full text-[11px] font-black tracking-wider shadow-lg flex items-center gap-1.5 animate-pulse",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-ping"}),"ARENA COLLAPSE (",Math.round(x),"m)"]})]}),R.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 pointer-events-auto",children:[R.jsxs("div",{className:"bg-slate-900/90 backdrop-blur-md px-3 sm:px-4 py-2 rounded-2xl border-2 border-amber-500/40 shadow-lg flex flex-col items-end min-w-[110px] sm:min-w-[150px]",children:[R.jsxs("div",{className:"flex items-center justify-between w-full mb-1",children:[R.jsxs("span",{className:"text-[11px] font-black text-amber-400 flex items-center gap-1",children:[R.jsx(gl,{className:`w-3.5 h-3.5 ${a?"text-red-500 animate-bounce":"text-amber-400"}`}),"BOOST"]}),R.jsxs("span",{className:"text-[11px] font-bold text-slate-300 tabular-nums",children:[Math.round(n),"%"]})]}),R.jsx("div",{className:"w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-700",children:R.jsx("div",{className:`h-full rounded-full transition-all duration-75 ${a?"bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 animate-pulse":n>30?"bg-gradient-to-r from-amber-400 to-yellow-300":"bg-red-500/70"}`,style:{width:`${n}%`}})})]}),R.jsxs("div",{className:"flex items-center gap-1",children:[R.jsx("button",{id:"hud-touch-toggle",onClick:()=>K(!le),title:"Toggle On-Screen Touch Controls","aria-label":"Toggle Touch Controls",className:`p-2 rounded-xl border backdrop-blur-md transition-transform active:scale-95 cursor-pointer shadow-md ${le?"bg-amber-500/30 text-amber-300 border-amber-400":"bg-slate-900/80 text-slate-400 border-slate-700"}`,children:R.jsx(uw,{className:"w-4 h-4"})}),R.jsx("button",{id:"hud-sound-toggle",onClick:G,"aria-label":"Toggle Sound",className:"p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-transform active:scale-95 cursor-pointer shadow-md",children:B?R.jsx(mu,{className:"w-4 h-4 text-amber-400"}):R.jsx(Ep,{className:"w-4 h-4 text-slate-500"})}),R.jsx("button",{id:"hud-music-toggle",onClick:k,"aria-label":"Toggle Music",className:"p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-transform active:scale-95 cursor-pointer shadow-md",children:R.jsx(d_,{className:`w-4 h-4 ${W?"text-cyan-400":"text-slate-500"}`})}),R.jsx("button",{id:"hud-pause-btn",onClick:L,"aria-label":"Pause Game",className:"p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-transform active:scale-95 cursor-pointer shadow-md",children:R.jsx(tw,{className:"w-4 h-4"})})]})]})]}),m>1&&R.jsx("div",{className:"absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none",children:R.jsxs("div",{className:"bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 text-white px-5 py-1.5 rounded-full font-black text-base sm:text-lg tracking-wider shadow-2xl flex items-center gap-2 border border-yellow-300 animate-pop-in",children:[R.jsx(g_,{className:"w-5 h-5 text-yellow-200"}),R.jsx("span",{children:g||`${m}X COMBO!`})]})}),e&&R.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:R.jsx("div",{className:`font-black text-6xl sm:text-8xl md:text-9xl tracking-wider text-arcade-shadow animate-pop-in ${e==="GO!"?"text-emerald-400 text-glow-yellow scale-110":"text-amber-400 text-glow-yellow"}`,children:e},e)}),c&&!e&&R.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none",children:R.jsx("div",{className:"bg-slate-950/90 border-2 border-amber-400 text-amber-300 px-6 py-2.5 rounded-2xl text-xl sm:text-2xl font-black tracking-wider shadow-2xl text-center animate-pop-in",children:c},c)}),R.jsxs("div",{className:"flex items-end justify-between w-full",children:[R.jsxs("div",{className:"flex items-end gap-3 pointer-events-auto",children:[R.jsx(Mw,{data:p}),R.jsxs("div",{className:"hidden lg:flex flex-col gap-1 bg-slate-950/80 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 text-[11px] font-semibold text-slate-400 shadow-md",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:"text-white bg-slate-800 px-1.5 py-0.5 rounded font-mono",children:"WASD / ARROWS"}),R.jsx("span",{children:"Drive"})]}),R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:"text-white bg-slate-800 px-1.5 py-0.5 rounded font-mono",children:"SPACE"}),R.jsx("span",{children:"Boost"}),R.jsx("span",{className:"text-slate-600",children:"|"}),R.jsx("span",{className:"text-white bg-slate-800 px-1.5 py-0.5 rounded font-mono",children:"SHIFT"}),R.jsx("span",{children:"Drift"})]})]})]}),(le||window.innerWidth<1024)&&R.jsxs("div",{className:"flex items-end justify-between w-full pointer-events-auto pl-3",children:[R.jsxs("div",{className:"flex gap-2",children:[R.jsx("button",{id:"touch-steer-left",onTouchStart:()=>P(1),onTouchEnd:()=>P(0),onTouchCancel:()=>P(0),onMouseDown:()=>P(1),onMouseUp:()=>P(0),onMouseLeave:()=>P(0),"aria-label":"Steer Left",className:"w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/90 border-2 border-slate-700 text-white font-black text-2xl flex items-center justify-center active:bg-blue-600 active:border-blue-400 shadow-xl select-none touch-none cursor-pointer",children:"◀"}),R.jsx("button",{id:"touch-steer-right",onTouchStart:()=>P(-1),onTouchEnd:()=>P(0),onTouchCancel:()=>P(0),onMouseDown:()=>P(-1),onMouseUp:()=>P(0),onMouseLeave:()=>P(0),"aria-label":"Steer Right",className:"w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/90 border-2 border-slate-700 text-white font-black text-2xl flex items-center justify-center active:bg-blue-600 active:border-blue-400 shadow-xl select-none touch-none cursor-pointer",children:"▶"})]}),R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("button",{id:"touch-drift-btn",onTouchStart:()=>D(!0),onTouchEnd:()=>D(!1),onTouchCancel:()=>D(!1),onMouseDown:()=>D(!0),onMouseUp:()=>D(!1),onMouseLeave:()=>D(!1),"aria-label":"Drift",className:"w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-cyan-700/90 border-2 border-cyan-400 text-white font-black text-xs flex items-center justify-center active:bg-cyan-500 shadow-xl select-none touch-none cursor-pointer",children:"DRIFT"}),R.jsx("button",{id:"touch-boost-btn",onTouchStart:()=>O(!0),onTouchEnd:()=>O(!1),onTouchCancel:()=>O(!1),onMouseDown:()=>O(!0),onMouseUp:()=>O(!1),onMouseLeave:()=>O(!1),"aria-label":"Nitrous Boost",className:"w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-600/90 border-2 border-amber-400 text-white font-black flex items-center justify-center active:bg-amber-500 shadow-xl select-none touch-none cursor-pointer",children:R.jsx(Ap,{className:"w-7 h-7 fill-white"})}),R.jsx("button",{id:"touch-reverse-btn",onTouchStart:()=>z(-1),onTouchEnd:()=>z(0),onTouchCancel:()=>z(0),onMouseDown:()=>z(-1),onMouseUp:()=>z(0),onMouseLeave:()=>z(0),"aria-label":"Reverse",className:"w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/90 border-2 border-slate-700 text-white font-black text-xl flex items-center justify-center active:bg-red-600 select-none touch-none shadow-xl cursor-pointer",children:"▼"}),R.jsx("button",{id:"touch-drive-btn",onTouchStart:()=>z(1),onTouchEnd:()=>z(0),onTouchCancel:()=>z(0),onMouseDown:()=>z(1),onMouseUp:()=>z(0),onMouseLeave:()=>z(0),"aria-label":"Drive Forward",className:"w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-emerald-600/90 border-2 border-emerald-400 text-white font-black text-2xl flex items-center justify-center active:bg-emerald-500 select-none touch-none shadow-xl cursor-pointer",children:"▲"})]})]})]})]})},bw=({coins:r,onPlay:e,onOpenGarage:n,onOpenHowToPlay:a,onOpenSettings:l})=>{const[c,f]=it.useState(()=>Le.isSoundOn());it.useEffect(()=>{f(Le.isSoundOn())},[]);const d=m=>{Le.unlockAudio(),Le.playClick(),m()},p=()=>{const m=!c;Le.unlockAudio(),Le.setSoundEnabled(m),Le.setMusicEnabled(m),f(m),m&&(Le.playClick(),Le.playMenuMusic())};return R.jsxs("div",{id:"main-menu-overlay",className:"absolute inset-0 flex flex-col justify-between p-6 sm:p-10 pointer-events-none z-10",children:[R.jsxs("div",{className:"flex items-center justify-between w-full pointer-events-auto",children:[R.jsxs("div",{className:"flex items-center gap-2 bg-slate-900/85 backdrop-blur-md px-4 py-2 rounded-2xl border border-amber-500/30 shadow-lg",children:[R.jsx(f_,{className:"w-5 h-5 text-amber-400 animate-spin-slow"}),R.jsx("span",{className:"text-sm font-bold text-slate-300",children:"COINS:"}),R.jsx("span",{className:"text-lg font-black text-amber-400 tabular-nums",children:r})]}),R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsxs("button",{id:"menu-sound-toggle-btn",onClick:p,className:`px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl backdrop-blur-md border transition-all active:scale-95 shadow-lg cursor-pointer flex items-center gap-2 font-black text-xs ${c?"bg-emerald-950/80 border-emerald-500/60 text-emerald-300 hover:bg-emerald-900/80":"bg-rose-950/80 border-rose-500/60 text-rose-300 hover:bg-rose-900/80"}`,title:c?"Audio is ON (click to mute)":"Audio is MUTED (click to enable)",children:[c?R.jsx(mu,{className:"w-4 h-4 text-emerald-400 animate-pulse"}):R.jsx(Ep,{className:"w-4 h-4 text-rose-400"}),R.jsx("span",{className:"uppercase tracking-wider",children:c?"SFX ON":"MUTED"})]}),R.jsxs("button",{id:"menu-settings-top-btn",onClick:()=>d(l),className:"p-3 rounded-2xl bg-slate-900/85 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-all active:scale-95 shadow-lg cursor-pointer flex items-center gap-2",children:[R.jsx(bv,{className:"w-5 h-5 text-slate-400"}),R.jsx("span",{className:"hidden sm:inline text-xs font-bold uppercase tracking-wider",children:"Settings"})]})]})]}),R.jsxs("div",{className:"flex flex-col items-center justify-center my-auto pointer-events-auto text-center",children:[R.jsxs("div",{className:"inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 backdrop-blur-md",children:[R.jsx(gl,{className:"w-4 h-4 text-amber-400"})," 3D ARCADE DEMOLITION DERBY"]}),R.jsxs("h1",{className:"text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white text-arcade-shadow animate-title-float",children:["SUMO ",R.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500",children:"CARS"})," ",R.jsx("span",{className:"text-cyan-400",children:"3D"})]}),R.jsx("p",{className:"mt-3 text-sm sm:text-base md:text-lg font-semibold text-slate-300 max-w-md drop-shadow-md",children:"Drive. Ram your opponents. Knock them out of the ring. Be the last car standing!"}),R.jsx("div",{className:"mt-8 flex flex-col items-center gap-4 w-full max-w-xs",children:R.jsxs("button",{id:"menu-play-button",onClick:()=>d(e),className:"w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-white font-black text-2xl tracking-wider uppercase shadow-2xl shadow-orange-500/30 border-2 border-amber-300 transition-all duration-150 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-3 animate-arcade-pulse",children:[R.jsx(p_,{className:"w-7 h-7 fill-white"}),"PLAY NOW"]})})]}),R.jsxs("div",{className:"flex items-center justify-center gap-3 sm:gap-4 pointer-events-auto flex-wrap pb-2",children:[R.jsxs("button",{id:"menu-garage-button",onClick:()=>d(n),className:"px-5 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border-2 border-slate-700/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 text-sm font-bold shadow-xl",children:[R.jsx(vw,{className:"w-4 h-4 text-cyan-400"}),"GARAGE"]}),R.jsxs("button",{id:"menu-how-to-play-button",onClick:()=>d(a),className:"px-5 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border-2 border-slate-700/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 text-sm font-bold shadow-xl",children:[R.jsx(z2,{className:"w-4 h-4 text-emerald-400"}),"HOW TO PLAY"]}),R.jsxs("button",{id:"menu-settings-button",onClick:()=>d(l),className:"px-5 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border-2 border-slate-700/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 text-sm font-bold shadow-xl",children:[R.jsx(bv,{className:"w-4 h-4 text-amber-400"}),"SETTINGS"]})]})]})},Ew=[{name:"Neon Blue",hex:"#3b82f6"},{name:"Cherry Red",hex:"#ef4444"},{name:"Electric Yellow",hex:"#eab308"},{name:"Lime Green",hex:"#22c55e"},{name:"Royal Purple",hex:"#a855f7"},{name:"Tangerine Orange",hex:"#f97316"},{name:"Hot Pink",hex:"#ec4899"},{name:"Snow White",hex:"#f8fafc"}],hd=[{id:"brawler",name:"Brawler Rhino",desc:"Heavy reinforced bullbar with spikes. Heavyweight ramming champion.",mass:90,speed:75,accel:70,ram:95},{id:"sport",name:"Velocity GT",desc:"Aerodynamic tuned chassis with rear wing spoiler. Nimble and fast.",mass:65,speed:95,accel:90,ram:70},{id:"classic",name:"Muscle Classic",desc:"Retro muscle powerhouse with hood intake scoop. Well-rounded bruiser.",mass:80,speed:80,accel:85,ram:85},{id:"truck",name:"Monster Truck",desc:"Lifted 4x4 with oversized tires. Maximum knockback resistance.",mass:98,speed:70,accel:65,ram:98}],Tw=({customization:r,onSave:e,onClose:n})=>{const[a,l]=it.useState(r.color),[c,f]=it.useState(r.style),[d,p]=it.useState(r.name||"YOU"),m=hd.find(v=>v.id===c)||hd[0],g=()=>{Le.playClick(),e({color:a,style:c,spoiler:c==="sport"||c==="brawler",roofLight:!1,name:d.trim()||"YOU"}),n()};return R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-pop-in",children:R.jsxs("div",{className:"bg-slate-900 border-2 border-slate-700 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]",children:[R.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-slate-800",children:[R.jsxs("div",{children:[R.jsxs("h2",{className:"text-2xl sm:text-3xl font-black text-white tracking-wide",children:["CAR ",R.jsx("span",{className:"text-amber-400",children:"GARAGE"})]}),R.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Customize your toy car's color, chassis style, and stats"})]}),R.jsx("button",{onClick:()=>{Le.playClick(),n()},className:"p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer",children:R.jsx(Tp,{className:"w-5 h-5"})})]}),R.jsxs("div",{className:"p-6 overflow-y-auto space-y-6",children:[R.jsxs("div",{children:[R.jsx("label",{className:"text-xs font-black text-slate-300 uppercase tracking-widest block mb-2",children:"Driver Tag"}),R.jsx("input",{type:"text",maxLength:12,value:d,onChange:v=>p(v.target.value),placeholder:"Driver Name",className:"w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold focus:outline-none focus:border-amber-400"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-xs font-black text-slate-300 uppercase tracking-widest block mb-3",children:"Paint Color"}),R.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-8 gap-3",children:Ew.map(v=>R.jsx("button",{onClick:()=>{Le.playClick(),l(v.hex)},className:`h-12 rounded-2xl transition-all cursor-pointer flex items-center justify-center border-2 ${a===v.hex?"scale-110 border-white shadow-xl shadow-white/20":"border-slate-700/60 hover:scale-105"}`,style:{backgroundColor:v.hex},title:v.name,children:a===v.hex&&R.jsx(P2,{className:`w-6 h-6 ${v.hex==="#f8fafc"?"text-slate-900":"text-white"} font-black stroke-[3]`})},v.hex))})]}),R.jsxs("div",{children:[R.jsx("label",{className:"text-xs font-black text-slate-300 uppercase tracking-widest block mb-3",children:"Vehicle Chassis"}),R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:hd.map(v=>R.jsxs("button",{onClick:()=>{Le.playClick(),f(v.id)},className:`p-4 rounded-2xl text-left border-2 transition-all cursor-pointer ${c===v.id?"bg-amber-500/15 border-amber-400 shadow-lg":"bg-slate-800/60 border-slate-700 hover:border-slate-600"}`,children:[R.jsxs("div",{className:"flex items-center justify-between mb-1",children:[R.jsx("span",{className:"font-extrabold text-white text-base",children:v.name}),c===v.id&&R.jsx("span",{className:"text-xs bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-full uppercase",children:"Active"})]}),R.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:v.desc})]},v.id))})]}),R.jsxs("div",{className:"bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-3",children:[R.jsx("div",{className:"text-xs font-black text-amber-400 uppercase tracking-widest mb-1",children:"Vehicle Performance"}),R.jsxs("div",{children:[R.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-300 mb-1",children:[R.jsxs("span",{className:"flex items-center gap-1.5",children:[R.jsx(Mu,{className:"w-3.5 h-3.5 text-blue-400"})," Mass / Defense"]}),R.jsxs("span",{className:"text-blue-400",children:[m.mass,"%"]})]}),R.jsx("div",{className:"w-full h-2.5 bg-slate-800 rounded-full overflow-hidden",children:R.jsx("div",{className:"h-full bg-blue-500 rounded-full transition-all duration-300",style:{width:`${m.mass}%`}})})]}),R.jsxs("div",{children:[R.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-300 mb-1",children:[R.jsxs("span",{className:"flex items-center gap-1.5",children:[R.jsx(Z2,{className:"w-3.5 h-3.5 text-emerald-400"})," Top Speed"]}),R.jsxs("span",{className:"text-emerald-400",children:[m.speed,"%"]})]}),R.jsx("div",{className:"w-full h-2.5 bg-slate-800 rounded-full overflow-hidden",children:R.jsx("div",{className:"h-full bg-emerald-500 rounded-full transition-all duration-300",style:{width:`${m.speed}%`}})})]}),R.jsxs("div",{children:[R.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-300 mb-1",children:[R.jsxs("span",{className:"flex items-center gap-1.5",children:[R.jsx(Q2,{className:"w-3.5 h-3.5 text-orange-400"})," Ramming Power"]}),R.jsxs("span",{className:"text-orange-400",children:[m.ram,"%"]})]}),R.jsx("div",{className:"w-full h-2.5 bg-slate-800 rounded-full overflow-hidden",children:R.jsx("div",{className:"h-full bg-orange-500 rounded-full transition-all duration-300",style:{width:`${m.ram}%`}})})]})]})]}),R.jsxs("div",{className:"p-6 border-t border-slate-800 flex items-center justify-end gap-3 bg-slate-900",children:[R.jsx("button",{onClick:()=>{Le.playClick(),n()},className:"px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition-all cursor-pointer",children:"Cancel"}),R.jsx("button",{id:"garage-save-btn",onClick:g,className:"px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black tracking-wide shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer",children:"SAVE & EQUIP"})]})]})})},Aw=({onClose:r,onPlay:e})=>R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-pop-in",children:R.jsxs("div",{className:"bg-slate-900 border-2 border-slate-700 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col",children:[R.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-slate-800",children:[R.jsxs("h2",{className:"text-2xl sm:text-3xl font-black text-white tracking-wide",children:["HOW TO ",R.jsx("span",{className:"text-amber-400",children:"PLAY"})]}),R.jsx("button",{onClick:()=>{Le.playClick(),r()},className:"p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer",children:R.jsx(Tp,{className:"w-5 h-5"})})]}),R.jsxs("div",{className:"p-6 space-y-4 overflow-y-auto max-h-[70vh]",children:[R.jsxs("div",{className:"flex items-start gap-4 p-4 bg-slate-950/60 rounded-2xl border border-slate-800",children:[R.jsx("div",{className:"p-3 rounded-2xl bg-blue-500/20 text-blue-400 shrink-0",children:R.jsx(Y2,{className:"w-6 h-6"})}),R.jsxs("div",{children:[R.jsx("div",{className:"text-base font-extrabold text-white",children:"Drive & Steer"}),R.jsxs("p",{className:"text-xs text-slate-300 mt-0.5 leading-relaxed",children:["Use ",R.jsx("strong",{className:"text-blue-300",children:"W, A, S, D"}),", ",R.jsx("strong",{className:"text-blue-300",children:"Arrow Keys"}),", or the on-screen buttons on mobile to accelerate, reverse, and steer your vehicle with responsive arcade control."]})]})]}),R.jsxs("div",{className:"flex items-start gap-4 p-4 bg-slate-950/60 rounded-2xl border border-slate-800",children:[R.jsx("div",{className:"p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 shrink-0",children:R.jsx(g_,{className:"w-6 h-6"})}),R.jsxs("div",{children:[R.jsx("div",{className:"text-base font-extrabold text-white",children:"Power Drift & Mini-Boost"}),R.jsxs("p",{className:"text-xs text-slate-300 mt-0.5 leading-relaxed",children:["Hold ",R.jsx("strong",{className:"text-cyan-400",children:"SHIFT"}),", ",R.jsx("strong",{className:"text-cyan-400",children:"E"}),", or the ",R.jsx("strong",{className:"text-cyan-400",children:"DRIFT"})," button while turning to enter a high-speed drift leaving smoking tire tracks. Hold the drift to charge up a free ",R.jsx("strong",{className:"text-amber-400",children:"Mini-Boost"})," upon release!"]})]})]}),R.jsxs("div",{className:"flex items-start gap-4 p-4 bg-slate-950/60 rounded-2xl border border-slate-800",children:[R.jsx("div",{className:"p-3 rounded-2xl bg-amber-500/20 text-amber-400 shrink-0",children:R.jsx(Ap,{className:"w-6 h-6"})}),R.jsxs("div",{children:[R.jsx("div",{className:"text-base font-extrabold text-white",children:"Nitrous Boost"}),R.jsxs("p",{className:"text-xs text-slate-300 mt-0.5 leading-relaxed",children:["Press ",R.jsx("strong",{className:"text-amber-400",children:"SPACEBAR"})," or the ",R.jsx("strong",{className:"text-amber-400",children:"BOOST"})," icon to activate your rocket booster. Ramming opponents during boost deals massive impulse and sends them flying!"]})]})]}),R.jsxs("div",{className:"flex items-start gap-4 p-4 bg-slate-950/60 rounded-2xl border border-slate-800",children:[R.jsx("div",{className:"p-3 rounded-2xl bg-purple-500/20 text-purple-400 shrink-0",children:R.jsx(Mu,{className:"w-6 h-6"})}),R.jsxs("div",{children:[R.jsx("div",{className:"text-base font-extrabold text-white",children:"Battle Power-Ups & Radar"}),R.jsxs("p",{className:"text-xs text-slate-300 mt-0.5 leading-relaxed",children:["Collect floating neon orbs on the arena! Use your ",R.jsx("strong",{className:"text-sky-400",children:"Radar Minimap"})," to track:",R.jsx("br",{}),"🔹 ",R.jsx("strong",{className:"text-cyan-400",children:"Hyper Nitro"})," (unlimited turbo)",R.jsx("br",{}),"🔹 ",R.jsx("strong",{className:"text-amber-400",children:"Titan Forcefield"})," (100% knockback invulnerability)",R.jsx("br",{}),"🔹 ",R.jsx("strong",{className:"text-fuchsia-400",children:"Sonic Shockwave"})," (pushes all cars away)",R.jsx("br",{}),"🔹 ",R.jsx("strong",{className:"text-red-400",children:"MegaRam"})," (3x collision power!)"]})]})]}),R.jsxs("div",{className:"flex items-start gap-4 p-4 bg-slate-950/60 rounded-2xl border border-slate-800",children:[R.jsx("div",{className:"p-3 rounded-2xl bg-red-500/20 text-red-400 shrink-0",children:R.jsx(gl,{className:"w-6 h-6"})}),R.jsxs("div",{children:[R.jsx("div",{className:"text-base font-extrabold text-white",children:"Ram Enemies & Chain Combos"}),R.jsxs("p",{className:"text-xs text-slate-300 mt-0.5 leading-relaxed",children:["T-bone and shove opposing cars towards the arena border. Knock out cars in rapid succession to unleash ",R.jsx("strong",{className:"text-yellow-400",children:"Double/Triple KO Combos"})," and rack up gold coins!"]})]})]}),R.jsxs("div",{className:"flex items-start gap-4 p-4 bg-slate-950/60 rounded-2xl border border-slate-800",children:[R.jsx("div",{className:"p-3 rounded-2xl bg-orange-500/20 text-orange-400 shrink-0",children:R.jsx(m_,{className:"w-6 h-6"})}),R.jsxs("div",{children:[R.jsx("div",{className:"text-base font-extrabold text-white",children:"Hazard Ring & Sudden Death Collapse"}),R.jsxs("p",{className:"text-xs text-slate-300 mt-0.5 leading-relaxed",children:["The yellow striped rim is the danger zone. After 24 seconds or when only 3 cars remain, ",R.jsx("strong",{className:"text-red-400",children:"Sudden Death"})," collapses the arena into a smaller ring!"]})]})]}),R.jsxs("div",{className:"flex items-start gap-4 p-4 bg-slate-950/60 rounded-2xl border border-slate-800",children:[R.jsx("div",{className:"p-3 rounded-2xl bg-yellow-500/20 text-yellow-400 shrink-0",children:R.jsx(x_,{className:"w-6 h-6"})}),R.jsxs("div",{children:[R.jsx("div",{className:"text-base font-extrabold text-white",children:"Last Car Standing Wins!"}),R.jsx("p",{className:"text-xs text-slate-300 mt-0.5 leading-relaxed",children:"Eliminate all 5 opponents to claim the Sumo Championship trophy and earn bonus coins."})]})]})]}),R.jsxs("div",{className:"p-6 border-t border-slate-800 flex items-center justify-end gap-3 bg-slate-900",children:[R.jsx("button",{onClick:()=>{Le.playClick(),r()},className:"px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition-all cursor-pointer",children:"Close"}),R.jsx("button",{id:"how-to-play-start-btn",onClick:()=>{Le.playClick(),r(),e()},className:"px-8 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black tracking-wide shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer",children:"PLAY NOW"})]})]})}),ww=({settings:r,onSave:e,onClose:n})=>{const[a,l]=it.useState({...r}),c=()=>{const p=!a.soundEnabled;Le.setSoundEnabled(p),l(m=>({...m,soundEnabled:p}))},f=()=>{const p=!a.musicEnabled;Le.setMusicEnabled(p),l(m=>({...m,musicEnabled:p}))},d=()=>{Le.playClick(),e(a),n()};return R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-pop-in",children:R.jsxs("div",{className:"bg-slate-900 border-2 border-slate-700 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col",children:[R.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-slate-800",children:[R.jsxs("h2",{className:"text-2xl font-black text-white tracking-wide",children:["GAME ",R.jsx("span",{className:"text-amber-400",children:"SETTINGS"})]}),R.jsx("button",{onClick:()=>{Le.playClick(),n()},className:"p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer",children:R.jsx(Tp,{className:"w-5 h-5"})})]}),R.jsxs("div",{className:"p-6 space-y-5 overflow-y-auto max-h-[75vh]",children:[R.jsxs("div",{className:"space-y-3",children:[R.jsx("label",{className:"text-xs font-black text-slate-400 uppercase tracking-widest block",children:"Audio"}),R.jsxs("div",{className:"flex items-center justify-between p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[a.soundEnabled?R.jsx(mu,{className:"w-5 h-5 text-amber-400"}):R.jsx(Ep,{className:"w-5 h-5 text-slate-500"}),R.jsxs("div",{children:[R.jsx("div",{className:"text-sm font-bold text-white",children:"Sound Effects"}),R.jsx("div",{className:"text-xs text-slate-400",children:"Collisions, boosts, revs, eliminations"})]})]}),R.jsx("button",{onClick:c,className:`w-14 h-8 rounded-full transition-colors relative cursor-pointer ${a.soundEnabled?"bg-amber-500":"bg-slate-800"}`,children:R.jsx("div",{className:`w-6 h-6 rounded-full bg-white transition-transform transform absolute top-1 ${a.soundEnabled?"translate-x-7":"translate-x-1"}`})})]}),R.jsxs("div",{className:"flex items-center justify-between p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx(d_,{className:`w-5 h-5 ${a.musicEnabled?"text-cyan-400":"text-slate-500"}`}),R.jsxs("div",{children:[R.jsx("div",{className:"text-sm font-bold text-white",children:"Arcade Music"}),R.jsx("div",{className:"text-xs text-slate-400",children:"Upbeat chiptune arcade synth soundtrack"})]})]}),R.jsx("button",{onClick:f,className:`w-14 h-8 rounded-full transition-colors relative cursor-pointer ${a.musicEnabled?"bg-cyan-500":"bg-slate-800"}`,children:R.jsx("div",{className:`w-6 h-6 rounded-full bg-white transition-transform transform absolute top-1 ${a.musicEnabled?"translate-x-7":"translate-x-1"}`})})]}),R.jsxs("button",{type:"button",id:"test-sound-btn",onClick:()=>{Le.unlockAudio(),Le.playTestSound()},className:"w-full py-2.5 px-4 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shadow-sm",children:[R.jsx(mu,{className:"w-4 h-4 text-amber-400"}),"Test Audio & SFX Output (Click to Verify)"]})]}),R.jsxs("div",{className:"space-y-3",children:[R.jsx("label",{className:"text-xs font-black text-slate-400 uppercase tracking-widest block",children:"Simulation & Camera"}),R.jsxs("div",{className:"flex items-center justify-between p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx(D2,{className:"w-5 h-5 text-red-400"}),R.jsxs("div",{children:[R.jsx("div",{className:"text-sm font-bold text-white",children:"Camera Shake"}),R.jsx("div",{className:"text-xs text-slate-400",children:"Impact recoil vibration effects"})]})]}),R.jsx("button",{onClick:()=>l(p=>({...p,cameraShake:!p.cameraShake})),className:`w-14 h-8 rounded-full transition-colors relative cursor-pointer ${a.cameraShake?"bg-red-500":"bg-slate-800"}`,children:R.jsx("div",{className:`w-6 h-6 rounded-full bg-white transition-transform transform absolute top-1 ${a.cameraShake?"translate-x-7":"translate-x-1"}`})})]}),R.jsxs("div",{className:"p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-2",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx(Mu,{className:"w-4 h-4 text-emerald-400"}),R.jsx("span",{className:"text-sm font-bold text-white",children:"AI Difficulty"})]}),R.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","normal","hard"].map(p=>R.jsx("button",{onClick:()=>{Le.playClick(),l(m=>({...m,difficulty:p}))},className:`py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${a.difficulty===p?"bg-amber-500 text-slate-950 shadow-md":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:p},p))})]}),R.jsxs("div",{className:"p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-2",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx(V2,{className:"w-4 h-4 text-cyan-400"}),R.jsx("span",{className:"text-sm font-bold text-white",children:"Arena Environment"})]}),R.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"classic",label:"Classic Stadium"},{id:"cyber",label:"Cyber Neon"},{id:"desert",label:"Desert Canyon"},{id:"lava",label:"Lava Rim"}].map(p=>R.jsx("button",{onClick:()=>{Le.playClick(),l(m=>({...m,arenaTheme:p.id}))},className:`py-2 px-3 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${a.arenaTheme===p.id?"bg-cyan-500 text-slate-950 font-black shadow-md":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:p.label},p.id))})]})]})]}),R.jsxs("div",{className:"p-6 border-t border-slate-800 flex items-center justify-end gap-3 bg-slate-900",children:[R.jsx("button",{onClick:()=>{Le.playClick(),n()},className:"px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition-all cursor-pointer",children:"Cancel"}),R.jsx("button",{id:"settings-save-btn",onClick:d,className:"px-8 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black tracking-wide shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer",children:"APPLY"})]})]})})},Rw=({onResume:r,onRestart:e,onMainMenu:n})=>R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-pop-in",children:R.jsxs("div",{className:"bg-slate-900 border-2 border-slate-700 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl p-6 text-center space-y-6",children:[R.jsxs("h2",{className:"text-3xl sm:text-4xl font-black text-white tracking-wider",children:["GAME ",R.jsx("span",{className:"text-amber-400",children:"PAUSED"})]}),R.jsxs("div",{className:"space-y-3",children:[R.jsxs("button",{id:"pause-resume-btn",onClick:()=>{Le.playClick(),r()},className:"w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-lg flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102 active:scale-98 cursor-pointer",children:[R.jsx(p_,{className:"w-5 h-5 fill-white"}),"RESUME"]}),R.jsxs("button",{id:"pause-restart-btn",onClick:()=>{Le.playClick(),e()},className:"w-full py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base flex items-center justify-center gap-2 border border-slate-700 transition-transform hover:scale-102 active:scale-98 cursor-pointer",children:[R.jsx(pu,{className:"w-5 h-5 text-amber-400"}),"RESTART MATCH"]}),R.jsxs("button",{id:"pause-menu-btn",onClick:()=>{Le.playClick(),n()},className:"w-full py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-base flex items-center justify-center gap-2 border border-slate-700 transition-transform hover:scale-102 active:scale-98 cursor-pointer",children:[R.jsx(h_,{className:"w-5 h-5 text-cyan-400"}),"MAIN MENU"]})]})]})}),Cw=({result:r,onNextRound:e,onReplay:n,onMainMenu:a})=>{const l=r.won;return R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-pop-in",children:R.jsxs("div",{className:"bg-slate-900 border-2 border-slate-700 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl p-6 sm:p-8 text-center space-y-6",children:[R.jsxs("div",{className:"flex flex-col items-center",children:[l?R.jsx("div",{className:"w-20 h-20 rounded-3xl bg-amber-500/20 border-2 border-amber-400 text-amber-400 flex items-center justify-center mb-3 shadow-xl animate-bounce",children:R.jsx(x_,{className:"w-10 h-10 fill-amber-400 text-amber-400"})}):R.jsx("div",{className:"w-20 h-20 rounded-3xl bg-red-500/20 border-2 border-red-500 text-red-400 flex items-center justify-center mb-3 shadow-xl",children:R.jsx(lw,{className:"w-10 h-10"})}),R.jsx("div",{className:`text-xs font-black uppercase tracking-widest ${l?"text-amber-400":"text-red-400"}`,children:l?"WINNER!":"OOF!"}),R.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight mt-1 text-arcade-shadow",children:l?"SUMO CHAMPION!":"YOU'RE OUT!"}),R.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:l?"You shoved every single opponent off the arena!":"You were knocked over the edge. Better luck next round!"})]}),R.jsxs("div",{className:"grid grid-cols-4 gap-2 p-3 sm:p-4 bg-slate-950/70 rounded-2xl border border-slate-800",children:[R.jsxs("div",{children:[R.jsxs("div",{className:"text-[10px] sm:text-xs text-slate-400 font-bold flex items-center justify-center gap-1",children:[R.jsx(f_,{className:"w-3 h-3 text-amber-400"})," COINS"]}),R.jsxs("div",{className:"text-sm sm:text-base font-black text-amber-400 mt-0.5 tabular-nums",children:["+",r.coinsEarned]})]}),R.jsxs("div",{children:[R.jsxs("div",{className:"text-[10px] sm:text-xs text-slate-400 font-bold flex items-center justify-center gap-1",children:[R.jsx(gl,{className:"w-3 h-3 text-orange-400"})," KOS"]}),R.jsx("div",{className:"text-sm sm:text-base font-black text-orange-400 mt-0.5 tabular-nums",children:r.knockouts})]}),R.jsxs("div",{children:[R.jsxs("div",{className:"text-[10px] sm:text-xs text-slate-400 font-bold flex items-center justify-center gap-1",children:[R.jsx(Ap,{className:"w-3 h-3 text-yellow-300"})," COMBO"]}),R.jsxs("div",{className:"text-sm sm:text-base font-black text-yellow-300 mt-0.5 tabular-nums",children:[r.maxCombo||1,"x"]})]}),R.jsxs("div",{children:[R.jsxs("div",{className:"text-[10px] sm:text-xs text-slate-400 font-bold flex items-center justify-center gap-1",children:[R.jsx(F2,{className:"w-3 h-3 text-cyan-400"})," TIME"]}),R.jsxs("div",{className:"text-sm sm:text-base font-black text-cyan-400 mt-0.5 tabular-nums",children:[r.matchDuration,"s"]})]})]}),R.jsxs("div",{className:"space-y-3 pt-2",children:[l?R.jsxs("button",{id:"gameover-next-round-btn",onClick:()=>{Le.playClick(),e()},className:"w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-slate-950 font-black text-lg flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-transform hover:scale-102 active:scale-98 cursor-pointer",children:["NEXT ROUND",R.jsx(L2,{className:"w-5 h-5 stroke-[3]"})]}):R.jsxs("button",{id:"gameover-retry-btn",onClick:()=>{Le.playClick(),n()},className:"w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black text-lg flex items-center justify-center gap-2 shadow-xl transition-transform hover:scale-102 active:scale-98 cursor-pointer",children:[R.jsx(pu,{className:"w-5 h-5 stroke-[2.5]"}),"RETRY MATCH"]}),R.jsxs("div",{className:"flex gap-3",children:[R.jsxs("button",{id:"gameover-replay-btn",onClick:()=>{Le.playClick(),n()},className:"flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer",children:[R.jsx(pu,{className:"w-4 h-4 text-amber-400"}),"Replay"]}),R.jsxs("button",{id:"gameover-menu-btn",onClick:()=>{Le.playClick(),a()},className:"flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer",children:[R.jsx(h_,{className:"w-4 h-4 text-cyan-400"}),"Main Menu"]})]})]})]})})};class Nw extends EM.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),window.location.reload()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Uncaught error caught by ErrorBoundary:",e,n)}render(){return this.state.hasError?R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 text-white",children:R.jsxs("div",{className:"max-w-md w-full bg-slate-900 border-2 border-red-500/40 rounded-3xl p-6 sm:p-8 text-center shadow-2xl backdrop-blur-xl",children:[R.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-400 border border-red-500/30",children:R.jsx(dw,{className:"w-9 h-9"})}),R.jsx("h2",{className:"text-2xl font-black tracking-tight mb-2",children:"Engine Stalled!"}),R.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"A temporary graphical glitch was intercepted. Click below to reboot the match smoothly without losing your unlocked garage cars or coins!"}),R.jsxs("button",{onClick:this.handleReset,className:"w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transition-all transform active:scale-95 cursor-pointer",children:[R.jsx(pu,{className:"w-5 h-5"}),"Reboot Engine"]})]})}):this.props.children}}const Ev={color:"#3b82f6",style:"brawler",spoiler:!0,roofLight:!1,name:"Player"},Tv={soundEnabled:!0,musicEnabled:!0,cameraShake:!0,difficulty:"normal",arenaTheme:"classic",controls:"wasd"};function Dw(){const r=it.useRef(null),e=it.useRef(null),[n,a]=it.useState("MENU"),[l,c]=it.useState(6),[f,d]=it.useState(""),[p,m]=it.useState(100),[g,v]=it.useState(!1),[x,E]=it.useState(0),[A,L]=it.useState(""),[M,_]=it.useState(null),[I,z]=it.useState(null),[w,P]=it.useState(0),[U,O]=it.useState(null),[b,D]=it.useState(0),[B,H]=it.useState(""),[W,ne]=it.useState(!1),[le,K]=it.useState(22),[G,k]=it.useState(!1),[ie,_e]=it.useState(!1),[V,T]=it.useState(!1),[X,ce]=it.useState(!1),[ye,oe]=it.useState(!1),[q,se]=it.useState(!1),[re,Ae]=it.useState(1),[Oe,Ce]=it.useState(()=>{try{const S=localStorage.getItem("sumocars_coins");return S?parseInt(S,10):100}catch{return 100}}),[Qe,je]=it.useState(()=>{try{const S=localStorage.getItem("sumocars_customization");return S?JSON.parse(S):Ev}catch{return Ev}}),[Pe,tt]=it.useState(()=>{try{const S=localStorage.getItem("sumocars_settings");return S?JSON.parse(S):Tv}catch{return Tv}});it.useEffect(()=>{if(!A)return;const S=setTimeout(()=>{L("")},1800);return()=>clearTimeout(S)},[A]);const at=S=>{Ce(j=>{const Q=Math.max(0,j+S);try{localStorage.setItem("sumocars_coins",String(Q))}catch{}return Q})},yt=S=>{je(S);try{localStorage.setItem("sumocars_customization",JSON.stringify(S))}catch{}},Mt=S=>{tt(S),Le.setSoundEnabled(S.soundEnabled),Le.setMusicEnabled(S.musicEnabled);try{localStorage.setItem("sumocars_settings",JSON.stringify(S))}catch{}};it.useEffect(()=>{Le.setSoundEnabled(Pe.soundEnabled),Le.setMusicEnabled(Pe.musicEnabled)},[]),it.useEffect(()=>{if(!r.current)return;const S=new E2(r.current,{onGameStateChange:Q=>a(Q),onCountdownUpdate:Q=>d(Q),onCarsLeftUpdate:Q=>c(Q),onBoostUpdate:(Q,ue)=>{m(Q),v(ue)},onSpeedUpdate:Q=>E(Q),onArcadeMessage:Q=>L(Q),onPowerUpUpdate:(Q,ue)=>{z(Q),P(ue)},onRadarUpdate:Q=>O(Q),onComboUpdate:(Q,ue)=>{D(Q),H(ue)},onRingWarning:(Q,ue)=>{ne(Q),K(ue)},onDriftUpdate:(Q,ue)=>{k(Q),_e(ue)},onMatchEnd:Q=>{_(Q),at(Q.coinsEarned)},onCoinsEarned:Q=>at(Q)});e.current=S;const j=Q=>{Q.code==="F3"&&(Q.preventDefault(),se(ue=>!ue))};return window.addEventListener("keydown",j),()=>{window.removeEventListener("keydown",j),S.dispose(),e.current=null}},[]);const St=()=>{var S;Le.unlockAudio(),Le.playClick(),_(null),(S=e.current)==null||S.startMatch(Qe,Pe)},wt=()=>{var Re;Le.unlockAudio(),Le.playClick();const S=re+1;Ae(S);const j=["classic","cyber","desert","lava"],Q=j[(S-1)%j.length],ue={...Pe,arenaTheme:Q,difficulty:S>2?"hard":Pe.difficulty};tt(ue),_(null),(Re=e.current)==null||Re.startMatch(Qe,ue)},Rt=()=>{var S;Le.unlockAudio(),Le.playClick(),_(null),(S=e.current)==null||S.startMatch(Qe,Pe)},Gt=()=>{var S;Le.unlockAudio(),Le.playClick(),_(null),(S=e.current)==null||S.startMenuDemo()},$=()=>{var S;(S=e.current)==null||S.pauseGame()},Ct=()=>{var S;(S=e.current)==null||S.resumeGame()},Nt=it.useCallback((S,j,Q)=>{var ue;(ue=e.current)==null||ue.setVirtualInput(S,j,Q)},[]),F=it.useCallback(S=>{var j;(j=e.current)==null||j.setVirtualDrift(S)},[]);return R.jsx(Nw,{children:R.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-slate-950 select-none",children:[R.jsx("div",{ref:r,className:"absolute inset-0 w-full h-full"}),n==="MENU"&&R.jsx(bw,{coins:Oe,onPlay:St,onOpenGarage:()=>T(!0),onOpenHowToPlay:()=>ce(!0),onOpenSettings:()=>oe(!0)}),(n==="COUNTDOWN"||n==="PLAYING"||n==="PAUSED")&&R.jsx(Sw,{carsLeft:l,countdownText:f,boostPercent:p,isBoosting:g,speed:x,arcadeMessage:A,activePowerUp:I,powerUpTimeLeft:w,radarData:U,comboCount:b,comboText:B,isShrinkingRing:W,arenaRadius:le,isDrifting:G,driftBoostReady:ie,onPause:$,onVirtualInput:Nt,onVirtualDrift:F}),n==="PAUSED"&&R.jsx(Rw,{onResume:Ct,onRestart:St,onMainMenu:Gt}),M&&R.jsx(Cw,{result:M,onNextRound:wt,onReplay:Rt,onMainMenu:Gt}),V&&R.jsx(Tw,{customization:Qe,coins:Oe,onSave:yt,onClose:()=>T(!1)}),X&&R.jsx(Aw,{onClose:()=>ce(!1),onPlay:St}),ye&&R.jsx(ww,{settings:Pe,onSave:Mt,onClose:()=>oe(!1)}),q&&R.jsxs("div",{className:"absolute bottom-4 left-4 p-3 bg-black/80 backdrop-blur-md rounded-xl text-xs font-mono text-emerald-400 border border-emerald-500/40 pointer-events-none z-50",children:[R.jsxs("div",{children:["STATE: ",n]}),R.jsxs("div",{children:["CARS LEFT: ",l]}),R.jsxs("div",{children:["ROUND: ",re]}),R.jsxs("div",{children:["THEME: ",Pe.arenaTheme]}),R.jsxs("div",{children:["DIFFICULTY: ",Pe.difficulty]}),R.jsxs("div",{children:["SPEED: ",x," KM/H"]})]})]})})}DM.createRoot(document.getElementById("root")).render(R.jsx(it.StrictMode,{children:R.jsx(Dw,{})}));

/* ===== Original inline script 1 (wg-mobile-controls-v2-script) ===== */

(function(){
  function boot(){
    if(document.getElementById('wg-mobile-drive-cluster')) return;

    var root=document.body;
    var wrap=document.createElement('div');
    wrap.id='wg-mobile-drive-cluster';
    wrap.innerHTML=
      '<div id="wg-mobile-label">MOBILE CONTROLS</div>'+
      '<div id="wg-joystick" aria-label="Directional controls"><button id="wg-up" class="wg-dir" aria-label="Up">▲</button><button id="wg-left" class="wg-dir" aria-label="Left">◀</button><button id="wg-down" class="wg-dir" aria-label="Down">▼</button><button id="wg-right" class="wg-dir" aria-label="Right">▶</button></div>'+
      '<div id="wg-throttle">'+
        '<button id="wg-gas" class="wg-pedal" aria-label="Accelerate">▲</button>'+
        '<button id="wg-brake" class="wg-pedal" aria-label="Decelerate / Reverse">▼</button>'+
      '</div>';
    root.appendChild(wrap);

    function el(id){return document.getElementById(id);}
    function mouse(id,type){
      var b=el(id); if(!b) return;
      b.dispatchEvent(new MouseEvent(type,{bubbles:true,cancelable:true,view:window,buttons:type==='mousedown'?1:0}));
    }

    var joy=el('wg-joystick');

    // Four-button mobile steering: Up=accelerate, Down=reverse/brake,
    // Left=steer left, Right=steer right.
    function holdDir(btnId,targetId){
      var b=el(btnId), down=false;
      if(!b) return;
      function on(e){if(e)e.preventDefault();if(down)return;down=true;mouse(targetId,'mousedown');}
      function off(e){if(e)e.preventDefault();if(!down)return;down=false;mouse(targetId,'mouseup');}
      b.addEventListener('touchstart',on,{passive:false});
      b.addEventListener('touchend',off,{passive:false});
      b.addEventListener('touchcancel',off,{passive:false});
      b.addEventListener('mousedown',on);
      b.addEventListener('mouseup',off);
      b.addEventListener('mouseleave',off);
    }
    holdDir('wg-up','touch-drive-btn');
    holdDir('wg-down','touch-reverse-btn');
    holdDir('wg-left','touch-steer-left');
    holdDir('wg-right','touch-steer-right');

    function hold(btnId,targetId){
      var b=el(btnId), down=false;
      function on(){if(down)return;down=true;mouse(targetId,'mousedown');}
      function off(){if(!down)return;down=false;mouse(targetId,'mouseup');}
      b.addEventListener('touchstart',function(e){e.preventDefault();on();},{passive:false});
      b.addEventListener('touchend',function(e){e.preventDefault();off();},{passive:false});
      b.addEventListener('touchcancel',off,{passive:false});
      b.addEventListener('mousedown',on);
      b.addEventListener('mouseup',off);
      b.addEventListener('mouseleave',off);
    }

    // Keep the controls above browser/system gesture areas.
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
  setTimeout(boot,1000);
})();


/* ===== Original inline script 2 (wg-remove-up-down-final) ===== */

(function(){
  function clean(){
    ['wg-up','wg-down'].forEach(function(id){
      var b=document.getElementById(id);
      if(b){b.style.display='none';b.style.visibility='hidden';b.style.pointerEvents='none';}
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',clean);
  else clean();
  setTimeout(clean,300);
  setTimeout(clean,1000);
  setTimeout(clean,2000);
})();


/* ===== Original inline script 3 (wg-phone-controls-final-fix-script) ===== */

(function(){
  function wire(){
    var gas=document.getElementById('wg-gas'), brake=document.getElementById('wg-brake');
    function fire(id,type){
      var b=document.getElementById(id); if(!b) return;
      b.dispatchEvent(new MouseEvent(type,{bubbles:true,cancelable:true,view:window,buttons:type==='mousedown'?1:0}));
    }
    function bind(btn,target){
      if(!btn || btn.dataset.wgBound==='1') return;
      btn.dataset.wgBound='1'; var down=false;
      function on(e){if(e)e.preventDefault();if(down)return;down=true;fire(target,'mousedown');}
      function off(e){if(e)e.preventDefault();if(!down)return;down=false;fire(target,'mouseup');}
      btn.addEventListener('touchstart',on,{passive:false});
      btn.addEventListener('touchend',off,{passive:false});
      btn.addEventListener('touchcancel',off,{passive:false});
      btn.addEventListener('mousedown',on);
      btn.addEventListener('mouseup',off);
      btn.addEventListener('mouseleave',off);
    }
    bind(gas,'touch-drive-btn');
    bind(brake,'touch-reverse-btn');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',wire);
  else wire();
  setTimeout(wire,500);
  setTimeout(wire,1500);
})();


/* ===== Original inline script 4 (wg-final-exact-four-cleanup) ===== */

(function(){
  function clean(){
    /* Remove the two unwanted D-pad directions completely. */
    ['wg-up','wg-down'].forEach(function(id){
      var b=document.getElementById(id);
      if(b) b.remove();
    });
    /* Remove the old React/mobile standalone driving controls. */
    ['touch-steer-left','touch-steer-right','touch-drive-btn','touch-reverse-btn'].forEach(function(id){
      var b=document.getElementById(id);
      if(b) b.remove();
    });
    var wrap=document.getElementById('wg-mobile-drive-cluster');
    if(wrap){
      var joy=document.getElementById('wg-joystick');
      if(joy){
        Array.prototype.slice.call(joy.querySelectorAll('button')).forEach(function(b){
          if(b.id!=='wg-left' && b.id!=='wg-right') b.remove();
        });
      }
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',clean);
  else clean();
  setTimeout(clean,100);
  setTimeout(clean,500);
  setTimeout(clean,1500);
  setTimeout(clean,3000);
})();


/* ===== Original inline script 5 (wg-absolute-final-phone-controls-script) ===== */

(function(){
  function install(){
    if(!document.body) return;

    // Delete every previous steering D-pad/control element that can create duplicates.
    ['wg-up','wg-down'].forEach(function(id){
      var x=document.getElementById(id); if(x) x.remove();
    });
    var oldJoy=document.getElementById('wg-joystick');
    if(oldJoy) oldJoy.remove();
    ['touch-steer-left','touch-steer-right','touch-drive-btn','touch-reverse-btn'].forEach(function(id){
      var x=document.getElementById(id); if(x) x.remove();
    });

    // Remove any prior copy of our independent steering pair.
    var old=document.getElementById('wg-final-steering-pair');
    if(old) old.remove();

    var pair=document.createElement('div');
    pair.id='wg-final-steering-pair';
    pair.innerHTML='<button type="button" id="wg-final-left" aria-label="Steer left">◀</button>'+
                   '<button type="button" id="wg-final-right" aria-label="Steer right">▶</button>';
    document.body.appendChild(pair);

    function key(type, code){
      try{
        window.dispatchEvent(new KeyboardEvent(type,{bubbles:true,cancelable:true,code:code,key:code==='ArrowLeft'?'ArrowLeft':'ArrowRight',keyCode:code==='ArrowLeft'?37:39,which:code==='ArrowLeft'?37:39}));
      }catch(e){}
    }
    function bind(id,code){
      var b=document.getElementById(id); if(!b || b.dataset.wgFinalBound==='1') return;
      b.dataset.wgFinalBound='1';
      var held=false;
      function down(e){if(e)e.preventDefault();if(held)return;held=true;key('keydown',code);}
      function up(e){if(e)e.preventDefault();if(!held)return;held=false;key('keyup',code);}
      b.addEventListener('touchstart',down,{passive:false});
      b.addEventListener('touchend',up,{passive:false});
      b.addEventListener('touchcancel',up,{passive:false});
      b.addEventListener('mousedown',down);
      b.addEventListener('mouseup',up);
      b.addEventListener('mouseleave',up);
    }
    bind('wg-final-left','ArrowLeft');
    bind('wg-final-right','ArrowRight');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install);
  else install();
  setTimeout(install,250);
  setTimeout(install,1000);
  setTimeout(install,2500);
}
)();


/* ===== Original inline script 6 (wg-final-clean-mobile-controls-script) ===== */

(function(){
  function install(){
    if(!document.body) return;
    var old=document.getElementById('wg-clean-mobile-controls');
    if(old) old.remove();
    var root=document.createElement('div');
    root.id='wg-clean-mobile-controls';
    root.innerHTML=
      '<button type="button" id="wg-clean-left" class="wg-clean-btn" aria-label="Steer left">◀</button>'+
      '<button type="button" id="wg-clean-right" class="wg-clean-btn" aria-label="Steer right">▶</button>'+
      '<button type="button" id="wg-clean-gas" class="wg-clean-btn" aria-label="Accelerate">▲</button>'+
      '<button type="button" id="wg-clean-brake" class="wg-clean-btn" aria-label="Decelerate / Reverse">▼</button>'+
      '<button type="button" id="wg-clean-pause" aria-label="Pause game">Ⅱ</button>';
    document.body.appendChild(root);

    function send(code,type){
      try{window.dispatchEvent(new KeyboardEvent(type,{bubbles:true,cancelable:true,code:code,key:code.replace('Arrow',''),keyCode:({ArrowLeft:37,ArrowRight:39,ArrowUp:38,ArrowDown:40,KeyP:80})[code]||0,which:({ArrowLeft:37,ArrowRight:39,ArrowUp:38,ArrowDown:40,KeyP:80})[code]||0}));}catch(e){}
    }
    function hold(id,code){
      var b=document.getElementById(id),held=false;if(!b)return;
      function down(e){e.preventDefault();if(held)return;held=true;send(code,'keydown');}
      function up(e){e.preventDefault();if(!held)return;held=false;send(code,'keyup');}
      b.addEventListener('touchstart',down,{passive:false});b.addEventListener('touchend',up,{passive:false});b.addEventListener('touchcancel',up,{passive:false});
      b.addEventListener('mousedown',down);b.addEventListener('mouseup',up);b.addEventListener('mouseleave',up);
    }
    hold('wg-clean-left','ArrowLeft');
    hold('wg-clean-right','ArrowRight');
    hold('wg-clean-gas','ArrowUp');
    hold('wg-clean-brake','ArrowDown');
    var pause=document.getElementById('wg-clean-pause');
    if(pause) pause.addEventListener('click',function(e){e.preventDefault();send('KeyP','keydown');send('KeyP','keyup');});

    /* Remove stray legacy mobile buttons from the DOM, leaving only our five controls. */
    ['wg-up','wg-down','touch-steer-left','touch-steer-right','touch-drive-btn','touch-reverse-btn'].forEach(function(id){var x=document.getElementById(id);if(x)x.remove();});
    var clusters=['wg-mobile-drive-cluster','wg-final-steering-pair','wg-mobile-controls-v2','wg-final-steering-only-mobile','wg-final-direction-controls'];
    clusters.forEach(function(id){var x=document.getElementById(id);if(x)x.style.setProperty('display','none','important');});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
  setTimeout(install,300);setTimeout(install,1000);setTimeout(install,2500);
})();

