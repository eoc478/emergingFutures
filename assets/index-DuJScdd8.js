(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var If={exports:{}},bo={};var nx;function Gv(){if(nx)return bo;nx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return bo.Fragment=e,bo.jsx=i,bo.jsxs=i,bo}var ix;function Vv(){return ix||(ix=1,If.exports=Gv()),If.exports}var Hn=Vv(),Hf={exports:{}},ae={};var ax;function Xv(){if(ax)return ae;ax=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(L,at,Mt){this.props=L,this.context=at,this.refs=M,this.updater=Mt||A}_.prototype.isReactComponent={},_.prototype.setState=function(L,at){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,at,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=_.prototype;function U(L,at,Mt){this.props=L,this.context=at,this.refs=M,this.updater=Mt||A}var F=U.prototype=new O;F.constructor=U,R(F,_.prototype),F.isPureReactComponent=!0;var X=Array.isArray;function N(){}var B={H:null,A:null,T:null,S:null},nt=Object.prototype.hasOwnProperty;function D(L,at,Mt){var Et=Mt.ref;return{$$typeof:o,type:L,key:at,ref:Et!==void 0?Et:null,props:Mt}}function C(L,at){return D(L.type,at,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function tt(L){var at={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Mt){return at[Mt]})}var lt=/\/+/g;function mt(L,at){return typeof L=="object"&&L!==null&&L.key!=null?tt(""+L.key):at.toString(36)}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(at){L.status==="pending"&&(L.status="fulfilled",L.value=at)},function(at){L.status==="pending"&&(L.status="rejected",L.reason=at)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,at,Mt,Et,Ot){var et=typeof L;(et==="undefined"||et==="boolean")&&(L=null);var ct=!1;if(L===null)ct=!0;else switch(et){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(L.$$typeof){case o:case e:ct=!0;break;case v:return ct=L._init,P(ct(L._payload),at,Mt,Et,Ot)}}if(ct)return Ot=Ot(L),ct=Et===""?"."+mt(L,0):Et,X(Ot)?(Mt="",ct!=null&&(Mt=ct.replace(lt,"$&/")+"/"),P(Ot,at,Mt,"",function(Xt){return Xt})):Ot!=null&&(V(Ot)&&(Ot=C(Ot,Mt+(Ot.key==null||L&&L.key===Ot.key?"":(""+Ot.key).replace(lt,"$&/")+"/")+ct)),at.push(Ot)),1;ct=0;var Ct=Et===""?".":Et+":";if(X(L))for(var It=0;It<L.length;It++)Et=L[It],et=Ct+mt(Et,It),ct+=P(Et,at,Mt,et,Ot);else if(It=y(L),typeof It=="function")for(L=It.call(L),It=0;!(Et=L.next()).done;)Et=Et.value,et=Ct+mt(Et,It++),ct+=P(Et,at,Mt,et,Ot);else if(et==="object"){if(typeof L.then=="function")return P(ft(L),at,Mt,Et,Ot);throw at=String(L),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ct}function Z(L,at,Mt){if(L==null)return L;var Et=[],Ot=0;return P(L,Et,"","",function(et){return at.call(Mt,et,Ot++)}),Et}function Y(L){if(L._status===-1){var at=L._result;at=at(),at.then(function(Mt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Mt)},function(Mt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Mt)}),L._status===-1&&(L._status=0,L._result=at)}if(L._status===1)return L._result.default;throw L._result}var gt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},_t={map:Z,forEach:function(L,at,Mt){Z(L,function(){at.apply(this,arguments)},Mt)},count:function(L){var at=0;return Z(L,function(){at++}),at},toArray:function(L){return Z(L,function(at){return at})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ae.Activity=g,ae.Children=_t,ae.Component=_,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=U,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ae.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},ae.cache=function(L){return function(){return L.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(L,at,Mt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Et=R({},L.props),Ot=L.key;if(at!=null)for(et in at.key!==void 0&&(Ot=""+at.key),at)!nt.call(at,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&at.ref===void 0||(Et[et]=at[et]);var et=arguments.length-2;if(et===1)Et.children=Mt;else if(1<et){for(var ct=Array(et),Ct=0;Ct<et;Ct++)ct[Ct]=arguments[Ct+2];Et.children=ct}return D(L.type,Ot,Et)},ae.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ae.createElement=function(L,at,Mt){var Et,Ot={},et=null;if(at!=null)for(Et in at.key!==void 0&&(et=""+at.key),at)nt.call(at,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Ot[Et]=at[Et]);var ct=arguments.length-2;if(ct===1)Ot.children=Mt;else if(1<ct){for(var Ct=Array(ct),It=0;It<ct;It++)Ct[It]=arguments[It+2];Ot.children=Ct}if(L&&L.defaultProps)for(Et in ct=L.defaultProps,ct)Ot[Et]===void 0&&(Ot[Et]=ct[Et]);return D(L,et,Ot)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(L){return{$$typeof:p,render:L}},ae.isValidElement=V,ae.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Y}},ae.memo=function(L,at){return{$$typeof:h,type:L,compare:at===void 0?null:at}},ae.startTransition=function(L){var at=B.T,Mt={};B.T=Mt;try{var Et=L(),Ot=B.S;Ot!==null&&Ot(Mt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(N,gt)}catch(et){gt(et)}finally{at!==null&&Mt.types!==null&&(at.types=Mt.types),B.T=at}},ae.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ae.use=function(L){return B.H.use(L)},ae.useActionState=function(L,at,Mt){return B.H.useActionState(L,at,Mt)},ae.useCallback=function(L,at){return B.H.useCallback(L,at)},ae.useContext=function(L){return B.H.useContext(L)},ae.useDebugValue=function(){},ae.useDeferredValue=function(L,at){return B.H.useDeferredValue(L,at)},ae.useEffect=function(L,at){return B.H.useEffect(L,at)},ae.useEffectEvent=function(L){return B.H.useEffectEvent(L)},ae.useId=function(){return B.H.useId()},ae.useImperativeHandle=function(L,at,Mt){return B.H.useImperativeHandle(L,at,Mt)},ae.useInsertionEffect=function(L,at){return B.H.useInsertionEffect(L,at)},ae.useLayoutEffect=function(L,at){return B.H.useLayoutEffect(L,at)},ae.useMemo=function(L,at){return B.H.useMemo(L,at)},ae.useOptimistic=function(L,at){return B.H.useOptimistic(L,at)},ae.useReducer=function(L,at,Mt){return B.H.useReducer(L,at,Mt)},ae.useRef=function(L){return B.H.useRef(L)},ae.useState=function(L){return B.H.useState(L)},ae.useSyncExternalStore=function(L,at,Mt){return B.H.useSyncExternalStore(L,at,Mt)},ae.useTransition=function(){return B.H.useTransition()},ae.version="19.2.1",ae}var rx;function uh(){return rx||(rx=1,Hf.exports=Xv()),Hf.exports}var br=uh(),Gf={exports:{}},Eo={},Vf={exports:{}},Xf={};var sx;function kv(){return sx||(sx=1,(function(o){function e(P,Z){var Y=P.length;P.push(Z);t:for(;0<Y;){var gt=Y-1>>>1,_t=P[gt];if(0<l(_t,Z))P[gt]=Z,P[Y]=_t,Y=gt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Z=P[0],Y=P.pop();if(Y!==Z){P[0]=Y;t:for(var gt=0,_t=P.length,L=_t>>>1;gt<L;){var at=2*(gt+1)-1,Mt=P[at],Et=at+1,Ot=P[Et];if(0>l(Mt,Y))Et<_t&&0>l(Ot,Mt)?(P[gt]=Ot,P[Et]=Y,gt=Et):(P[gt]=Mt,P[at]=Y,gt=at);else if(Et<_t&&0>l(Ot,Y))P[gt]=Ot,P[Et]=Y,gt=Et;else break t}}return Z}function l(P,Z){var Y=P.sortIndex-Z.sortIndex;return Y!==0?Y:P.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,g=null,S=3,y=!1,A=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function F(P){for(var Z=i(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=P)r(h),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(h)}}function X(P){if(R=!1,F(P),!A)if(i(m)!==null)A=!0,N||(N=!0,tt());else{var Z=i(h);Z!==null&&ft(X,Z.startTime-P)}}var N=!1,B=-1,nt=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<nt)}function V(){if(M=!1,N){var P=o.unstable_now();D=P;var Z=!0;try{t:{A=!1,R&&(R=!1,O(B),B=-1),y=!0;var Y=S;try{e:{for(F(P),g=i(m);g!==null&&!(g.expirationTime>P&&C());){var gt=g.callback;if(typeof gt=="function"){g.callback=null,S=g.priorityLevel;var _t=gt(g.expirationTime<=P);if(P=o.unstable_now(),typeof _t=="function"){g.callback=_t,F(P),Z=!0;break e}g===i(m)&&r(m),F(P)}else r(m);g=i(m)}if(g!==null)Z=!0;else{var L=i(h);L!==null&&ft(X,L.startTime-P),Z=!1}}break t}finally{g=null,S=Y,y=!1}Z=void 0}}finally{Z?tt():N=!1}}}var tt;if(typeof U=="function")tt=function(){U(V)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,mt=lt.port2;lt.port1.onmessage=V,tt=function(){mt.postMessage(null)}}else tt=function(){_(V,0)};function ft(P,Z){B=_(function(){P(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):nt=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var Y=S;S=Z;try{return P()}finally{S=Y}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=S;S=P;try{return Z()}finally{S=Y}},o.unstable_scheduleCallback=function(P,Z,Y){var gt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?gt+Y:gt):Y=gt,P){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=Y+_t,P={id:v++,callback:Z,priorityLevel:P,startTime:Y,expirationTime:_t,sortIndex:-1},Y>gt?(P.sortIndex=Y,e(h,P),i(m)===null&&P===i(h)&&(R?(O(B),B=-1):R=!0,ft(X,Y-gt))):(P.sortIndex=_t,e(m,P),A||y||(A=!0,N||(N=!0,tt()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var Z=S;return function(){var Y=S;S=Z;try{return P.apply(this,arguments)}finally{S=Y}}}})(Xf)),Xf}var ox;function qv(){return ox||(ox=1,Vf.exports=kv()),Vf.exports}var kf={exports:{}},Rn={};var lx;function Wv(){if(lx)return Rn;lx=1;var o=uh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:h,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,v)},Rn.flushSync=function(m){var h=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=v,r.d.f()}},Rn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,g=p(v,h.crossOrigin),S=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Rn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Rn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,g=p(v,h.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Rn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,h){return m(h)},Rn.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.2.1",Rn}var cx;function Yv(){if(cx)return kf.exports;cx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),kf.exports=Wv(),kf.exports}var ux;function Zv(){if(ux)return Eo;ux=1;var o=qv(),e=uh(),i=Yv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,s=f;break}if(E===s){x=!0,s=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,s=c;break}if(E===s){x=!0,s=f,a=c;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case N:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case U:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case nt:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var ft=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},gt=[],_t=-1;function L(t){return{current:t}}function at(t){0>_t||(t.current=gt[_t],gt[_t]=null,_t--)}function Mt(t,n){_t++,gt[_t]=t.current,t.current=n}var Et=L(null),Ot=L(null),et=L(null),ct=L(null);function Ct(t,n){switch(Mt(et,n),Mt(Ot,t),Mt(Et,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Tm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Tm(n),t=Am(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(Et),Mt(Et,t)}function It(){at(Et),at(Ot),at(et)}function Xt(t){t.memoizedState!==null&&Mt(ct,t);var n=Et.current,a=Am(n,t.type);n!==a&&(Mt(Ot,t),Mt(Et,a))}function oe(t){Ot.current===t&&(at(Et),at(Ot)),ct.current===t&&(at(ct),vo._currentValue=Y)}var Je,fe;function Ee(t){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+t+fe}var I=!1;function de(t,n){if(!t||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(rt){var $=rt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(rt){$=rt}t.call(pt.prototype)}}else{try{throw Error()}catch(rt){$=rt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(rt){if(rt&&$&&typeof rt.stack=="string")return[rt.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var z=x.split(`
`),Q=E.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===Q.length)for(s=z.length-1,c=Q.length-1;1<=s&&0<=c&&z[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==Q[c]){var ut=`
`+z[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ee(a):""}function pe(t,n){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return de(t.type,!1);case 11:return de(t.type.render,!1);case 1:return de(t.type,!0);case 31:return Ee("Activity");default:return""}}function Ne(t){try{var n="",a=null;do n+=pe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ht=Object.prototype.hasOwnProperty,Ve=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,ie=o.unstable_shouldYield,w=o.unstable_requestPaint,b=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,ot=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Kt=o.log,kt=o.unstable_setDisableYieldValue,St=null,bt=null;function Wt(t){if(typeof Kt=="function"&&kt(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(St,t)}catch{}}var Gt=Math.clz32?Math.clz32:H,Nt=Math.log,ee=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Nt(t)/ee|0)|0}var Dt=256,At=262144,Rt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=yt(s):(x&=E,x!==0?c=yt(x):a||(a=E&~t,a!==0&&(c=yt(a))))):(E=s&~f,E!==0?c=yt(E):x!==0?c=yt(x):a||(a=s&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Pt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function An(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xn(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,Q=t.hiddenUpdates;for(a=x&~a;0<a;){var ut=31-Gt(a),pt=1<<ut;E[ut]=0,z[ut]=-1;var $=Q[ut];if($!==null)for(Q[ut]=null,ut=0;ut<$.length;ut++){var rt=$[ut];rt!==null&&(rt.lane&=-536870913)}a&=~pt}s!==0&&Vo(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Vo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Gt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Gt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Us(t,n){var a=n&-n;return a=(a&42)!==0?1:pi(a),(a&(t.suspendedLanes|n))!==0?0:a}function pi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ja(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ls(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:jm(t.type))}function Ns(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var kn=Math.random().toString(36).slice(2),an="__reactFiber$"+kn,un="__reactProps$"+kn,Li="__reactContainer$"+kn,Rr="__reactEvents$"+kn,Lc="__reactListeners$"+kn,Nc="__reactHandles$"+kn,Xo="__reactResources$"+kn,Ka="__reactMarker$"+kn;function Os(t){delete t[an],delete t[un],delete t[Rr],delete t[Lc],delete t[Nc]}function ha(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Li]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Nm(t);t!==null;){if(a=t[an])return a;t=Nm(t)}return n}t=a,a=t.parentNode}return null}function T(t){if(t=t[an]||t[Li]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function k(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function it(t){var n=t[Xo];return n||(n=t[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(t){t[Ka]=!0}var W=new Set,Tt={};function wt(t,n){zt(t,n),zt(t+"Capture",n)}function zt(t,n){for(Tt[t]=n,t=0;t<n.length;t++)W.add(n[t])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},te={};function Zt(t){return Ht.call(te,t)?!0:Ht.call(Jt,t)?!1:Bt.test(t)?te[t]=!0:(Jt[t]=!0,!1)}function le(t,n,a){if(Zt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function be(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ae(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Xe(t){if(!t._valueTracker){var n=Le(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Se(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Le(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function xn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pa=/[\n"\\]/g;function qe(t){return t.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ni(t,n,a,s,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ve(n)):t.value!==""+ve(n)&&(t.value=""+ve(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?gn(t,x,ve(n)):a!=null?gn(t,x,ve(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ve(E):t.removeAttribute("name")}function We(t,n,a,s,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xe(t);return}a=a!=null?""+ve(a):"",n=n!=null?""+ve(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Xe(t)}function gn(t,n,a){n==="number"&&xn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function fn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ve(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function _n(t,n,a){if(n!=null&&(n=""+ve(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ve(a):""}function Mn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ve(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Xe(t)}function bi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&yh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&yh(t,f,n[f])}function Oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return Fg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var zc=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,Dr=null;function Eh(t){var n=T(t);if(n&&(t=n.stateNode)){var a=t[un]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ni(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[un]||null;if(!c)throw Error(r(90));Ni(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Se(s)}break t;case"textarea":_n(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fn(t,!!a.multiple,n,!1)}}}var Bc=!1;function Th(t,n,a){if(Bc)return t(n,a);Bc=!0;try{var s=t(n);return s}finally{if(Bc=!1,(Cr!==null||Dr!==null)&&(Ul(),Cr&&(n=Cr,t=Dr,Dr=Cr=null,Eh(n),t)))for(n=0;n<t.length;n++)Eh(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[un]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if(Pi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Fc=!1}var ma=null,Ic=null,qo=null;function Ah(){if(qo)return qo;var t,n=Ic,a=n.length,s,c="value"in ma?ma.value:ma.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return qo=c.slice(t,1<s?1-s:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function Rh(){return!1}function Nn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:Rh,this.isPropagationStopped=Rh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Nn(Qa),Bs=g({},Qa,{view:0,detail:0}),Ig=Nn(Bs),Hc,Gc,Fs,jo=g({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Hc=t.screenX-Fs.screenX,Gc=t.screenY-Fs.screenY):Gc=Hc=0,Fs=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),Ch=Nn(jo),Hg=g({},jo,{dataTransfer:0}),Gg=Nn(Hg),Vg=g({},Bs,{relatedTarget:0}),Vc=Nn(Vg),Xg=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),kg=Nn(Xg),qg=g({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wg=Nn(qg),Yg=g({},Qa,{data:0}),Dh=Nn(Yg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qg(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kg[t])?!!n[t]:!1}function Xc(){return Qg}var Jg=g({},Bs,{key:function(t){if(t.key){var n=Zg[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$g=Nn(Jg),t_=g({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=Nn(t_),e_=g({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),n_=Nn(e_),i_=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),a_=Nn(i_),r_=g({},jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s_=Nn(r_),o_=g({},Qa,{newState:0,oldState:0}),l_=Nn(o_),c_=[9,13,27,32],kc=Pi&&"CompositionEvent"in window,Is=null;Pi&&"documentMode"in document&&(Is=document.documentMode);var u_=Pi&&"TextEvent"in window&&!Is,Uh=Pi&&(!kc||Is&&8<Is&&11>=Is),Lh=" ",Nh=!1;function Oh(t,n){switch(t){case"keyup":return c_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function f_(t,n){switch(t){case"compositionend":return zh(n);case"keypress":return n.which!==32?null:(Nh=!0,Lh);case"textInput":return t=n.data,t===Lh&&Nh?null:t;default:return null}}function d_(t,n){if(wr)return t==="compositionend"||!kc&&Oh(t,n)?(t=Ah(),qo=Ic=ma=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Uh&&n.locale!=="ko"?null:n.data;default:return null}}var h_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!h_[t.type]:n==="textarea"}function Bh(t,n,a,s){Cr?Dr?Dr.push(s):Dr=[s]:Cr=s,n=Fl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function p_(t){vm(t,0)}function Ko(t){var n=k(t);if(Se(n))return t}function Fh(t,n){if(t==="change")return n}var Ih=!1;if(Pi){var qc;if(Pi){var Wc="oninput"in document;if(!Wc){var Hh=document.createElement("div");Hh.setAttribute("oninput","return;"),Wc=typeof Hh.oninput=="function"}qc=Wc}else qc=!1;Ih=qc&&(!document.documentMode||9<document.documentMode)}function Gh(){Hs&&(Hs.detachEvent("onpropertychange",Vh),Gs=Hs=null)}function Vh(t){if(t.propertyName==="value"&&Ko(Gs)){var n=[];Bh(n,Gs,t,Pc(t)),Th(p_,n)}}function m_(t,n,a){t==="focusin"?(Gh(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",Vh)):t==="focusout"&&Gh()}function x_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ko(Gs)}function g_(t,n){if(t==="click")return Ko(n)}function __(t,n){if(t==="input"||t==="change")return Ko(n)}function v_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:v_;function Vs(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ht.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function Xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kh(t,n){var a=Xh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xh(a)}}function qh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?qh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Wh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=xn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=xn(t.document)}return n}function Yc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var S_=Pi&&"documentMode"in document&&11>=document.documentMode,Ur=null,Zc=null,Xs=null,jc=!1;function Yh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||Ur==null||Ur!==xn(s)||(s=Ur,"selectionStart"in s&&Yc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xs&&Vs(Xs,s)||(Xs=s,s=Fl(Zc,"onSelect"),0<s.length&&(n=new Zo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ur)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Lr={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Kc={},Zh={};Pi&&(Zh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function $a(t){if(Kc[t])return Kc[t];if(!Lr[t])return t;var n=Lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zh)return Kc[t]=n[a];return t}var jh=$a("animationend"),Kh=$a("animationiteration"),Qh=$a("animationstart"),M_=$a("transitionrun"),y_=$a("transitionstart"),b_=$a("transitioncancel"),Jh=$a("transitionend"),$h=new Map,Qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qc.push("scrollEnd");function mi(t,n){$h.set(t,n),wt(n,[t])}var Qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],Nr=0,Jc=0;function Jo(){for(var t=Nr,n=Jc=Nr=0;n<t;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&tp(a,c,f)}}function $o(t,n,a,s){ei[Nr++]=t,ei[Nr++]=n,ei[Nr++]=a,ei[Nr++]=s,Jc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function $c(t,n,a,s){return $o(t,n,a,s),tl(t)}function tr(t,n){return $o(t,null,null,n),tl(t)}function tp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Gt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function tl(t){if(50<fo)throw fo=0,cf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Or={};function E_(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,s){return new E_(t,n,a,s)}function tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ep(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function el(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")tu(t)&&(x=1);else if(typeof t=="string")x=Dv(t,a,Et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Wn(31,a,n,c),t.elementType=D,t.lanes=f,t;case R:return er(a.children,c,f,n);case M:x=8,c|=24;break;case _:return t=Wn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case X:return t=Wn(13,a,n,c),t.elementType=X,t.lanes=f,t;case N:return t=Wn(19,a,n,c),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:x=10;break t;case O:x=9;break t;case F:x=11;break t;case B:x=14;break t;case nt:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Wn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function er(t,n,a,s){return t=Wn(7,t,s,n),t.lanes=a,t}function eu(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function np(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function nu(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ip=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=ip.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ne(n)},ip.set(t,n),n)}return{value:t,source:n,stack:Ne(n)}}var zr=[],Pr=0,nl=null,ks=0,ii=[],ai=0,xa=null,Ei=1,Ti="";function Fi(t,n){zr[Pr++]=ks,zr[Pr++]=nl,nl=t,ks=n}function ap(t,n,a){ii[ai++]=Ei,ii[ai++]=Ti,ii[ai++]=xa,xa=t;var s=Ei;t=Ti;var c=32-Gt(s)-1;s&=~(1<<c),a+=1;var f=32-Gt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ei=1<<32-Gt(n)+c|a<<c|s,Ti=f+t}else Ei=1<<f|a<<c|s,Ti=t}function iu(t){t.return!==null&&(Fi(t,1),ap(t,1,0))}function au(t){for(;t===nl;)nl=zr[--Pr],zr[Pr]=null,ks=zr[--Pr],zr[Pr]=null;for(;t===xa;)xa=ii[--ai],ii[ai]=null,Ti=ii[--ai],ii[ai]=null,Ei=ii[--ai],ii[ai]=null}function rp(t,n){ii[ai++]=Ei,ii[ai++]=Ti,ii[ai++]=xa,Ei=n.id,Ti=n.overflow,xa=t}var yn=null,Ye=null,Me=!1,ga=null,ri=!1,ru=Error(r(519));function _a(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qs(ni(n,t)),ru}function sp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[an]=t,n[un]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)xe(po[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),We(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Mn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||bm(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||_a(t,!0)}function op(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:yn=yn.return}}function Br(t){if(t!==yn)return!1;if(!Me)return op(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ef(t.type,t.memoizedProps)),a=!a),a&&Ye&&_a(t),op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ye=Lm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ye=Lm(t)}else n===27?(n=Ye,La(t.type)?(t=Df,Df=null,Ye=t):Ye=n):Ye=yn?oi(t.stateNode.nextSibling):null;return!0}function nr(){Ye=yn=null,Me=!1}function su(){var t=ga;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),ga=null),t}function qs(t){ga===null?ga=[t]:ga.push(t)}var ou=L(null),ir=null,Ii=null;function va(t,n,a){Mt(ou,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=ou.current,at(ou)}function lu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function cu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),lu(f.return,a,t),s||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),lu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Fr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=c.type;qn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===ct.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(vo):t=[vo])}c=c.return}t!==null&&cu(n,t,a,s),n.flags|=262144}function il(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return lp(ir,t)}function al(t,n){return ir===null&&ar(t),lp(t,n)}function lp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(r(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return a}var T_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},A_=o.unstable_scheduleCallback,R_=o.unstable_NormalPriority,rn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new T_,data:new Map,refCount:0}}function Ws(t){t.refCount--,t.refCount===0&&A_(R_,function(){t.controller.abort()})}var Ys=null,fu=0,Ir=0,Hr=null;function C_(t,n){if(Ys===null){var a=Ys=[];fu=0,Ir=mf(),Hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return fu++,n.then(cp,cp),n}function cp(){if(--fu===0&&Ys!==null){Hr!==null&&(Hr.status="fulfilled");var t=Ys;Ys=null,Ir=0,Hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function D_(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var up=P.S;P.S=function(t,n){Y0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&C_(t,n),up!==null&&up(t,n)};var rr=L(null);function du(){var t=rr.current;return t!==null?t:ke.pooledCache}function rl(t,n){n===null?Mt(rr,rr.current):Mt(rr,n.pool)}function fp(){var t=du();return t===null?null:{parent:rn._currentValue,pool:t}}var Gr=Error(r(460)),hu=Error(r(474)),sl=Error(r(542)),ol={then:function(){}};function dp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mp(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mp(t),t}throw or=n,Gr}}function sr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(or=a,Gr):a}}var or=null;function pp(){if(or===null)throw Error(r(459));var t=or;return or=null,t}function mp(t){if(t===Gr||t===sl)throw Error(r(483))}var Vr=null,Zs=0;function ll(t){var n=Zs;return Zs+=1,Vr===null&&(Vr=[]),hp(Vr,t,n)}function js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function cl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function xp(t){function n(q,G){if(t){var j=q.deletions;j===null?(q.deletions=[G],q.flags|=16):j.push(G)}}function a(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function s(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=Bi(q,G),q.index=0,q.sibling=null,q}function f(q,G,j){return q.index=j,t?(j=q.alternate,j!==null?(j=j.index,j<G?(q.flags|=67108866,G):j):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function x(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,G,j,dt){return G===null||G.tag!==6?(G=eu(j,q.mode,dt),G.return=q,G):(G=c(G,j),G.return=q,G)}function z(q,G,j,dt){var jt=j.type;return jt===R?ut(q,G,j.props.children,dt,j.key):G!==null&&(G.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===nt&&sr(jt)===G.type)?(G=c(G,j.props),js(G,j),G.return=q,G):(G=el(j.type,j.key,j.props,null,q.mode,dt),js(G,j),G.return=q,G)}function Q(q,G,j,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==j.containerInfo||G.stateNode.implementation!==j.implementation?(G=nu(j,q.mode,dt),G.return=q,G):(G=c(G,j.children||[]),G.return=q,G)}function ut(q,G,j,dt,jt){return G===null||G.tag!==7?(G=er(j,q.mode,dt,jt),G.return=q,G):(G=c(G,j),G.return=q,G)}function pt(q,G,j){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=eu(""+G,q.mode,j),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return j=el(G.type,G.key,G.props,null,q.mode,j),js(j,G),j.return=q,j;case A:return G=nu(G,q.mode,j),G.return=q,G;case nt:return G=sr(G),pt(q,G,j)}if(ft(G)||tt(G))return G=er(G,q.mode,j,null),G.return=q,G;if(typeof G.then=="function")return pt(q,ll(G),j);if(G.$$typeof===U)return pt(q,al(q,G),j);cl(q,G)}return null}function $(q,G,j,dt){var jt=G!==null?G.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return jt!==null?null:E(q,G,""+j,dt);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return j.key===jt?z(q,G,j,dt):null;case A:return j.key===jt?Q(q,G,j,dt):null;case nt:return j=sr(j),$(q,G,j,dt)}if(ft(j)||tt(j))return jt!==null?null:ut(q,G,j,dt,null);if(typeof j.then=="function")return $(q,G,ll(j),dt);if(j.$$typeof===U)return $(q,G,al(q,j),dt);cl(q,j)}return null}function rt(q,G,j,dt,jt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return q=q.get(j)||null,E(G,q,""+dt,jt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case y:return q=q.get(dt.key===null?j:dt.key)||null,z(G,q,dt,jt);case A:return q=q.get(dt.key===null?j:dt.key)||null,Q(G,q,dt,jt);case nt:return dt=sr(dt),rt(q,G,j,dt,jt)}if(ft(dt)||tt(dt))return q=q.get(j)||null,ut(G,q,dt,jt,null);if(typeof dt.then=="function")return rt(q,G,j,ll(dt),jt);if(dt.$$typeof===U)return rt(q,G,j,al(G,dt),jt);cl(G,dt)}return null}function Ft(q,G,j,dt){for(var jt=null,Re=null,Vt=G,ce=G=0,_e=null;Vt!==null&&ce<j.length;ce++){Vt.index>ce?(_e=Vt,Vt=null):_e=Vt.sibling;var Ce=$(q,Vt,j[ce],dt);if(Ce===null){Vt===null&&(Vt=_e);break}t&&Vt&&Ce.alternate===null&&n(q,Vt),G=f(Ce,G,ce),Re===null?jt=Ce:Re.sibling=Ce,Re=Ce,Vt=_e}if(ce===j.length)return a(q,Vt),Me&&Fi(q,ce),jt;if(Vt===null){for(;ce<j.length;ce++)Vt=pt(q,j[ce],dt),Vt!==null&&(G=f(Vt,G,ce),Re===null?jt=Vt:Re.sibling=Vt,Re=Vt);return Me&&Fi(q,ce),jt}for(Vt=s(Vt);ce<j.length;ce++)_e=rt(Vt,q,ce,j[ce],dt),_e!==null&&(t&&_e.alternate!==null&&Vt.delete(_e.key===null?ce:_e.key),G=f(_e,G,ce),Re===null?jt=_e:Re.sibling=_e,Re=_e);return t&&Vt.forEach(function(Ba){return n(q,Ba)}),Me&&Fi(q,ce),jt}function $t(q,G,j,dt){if(j==null)throw Error(r(151));for(var jt=null,Re=null,Vt=G,ce=G=0,_e=null,Ce=j.next();Vt!==null&&!Ce.done;ce++,Ce=j.next()){Vt.index>ce?(_e=Vt,Vt=null):_e=Vt.sibling;var Ba=$(q,Vt,Ce.value,dt);if(Ba===null){Vt===null&&(Vt=_e);break}t&&Vt&&Ba.alternate===null&&n(q,Vt),G=f(Ba,G,ce),Re===null?jt=Ba:Re.sibling=Ba,Re=Ba,Vt=_e}if(Ce.done)return a(q,Vt),Me&&Fi(q,ce),jt;if(Vt===null){for(;!Ce.done;ce++,Ce=j.next())Ce=pt(q,Ce.value,dt),Ce!==null&&(G=f(Ce,G,ce),Re===null?jt=Ce:Re.sibling=Ce,Re=Ce);return Me&&Fi(q,ce),jt}for(Vt=s(Vt);!Ce.done;ce++,Ce=j.next())Ce=rt(Vt,q,ce,Ce.value,dt),Ce!==null&&(t&&Ce.alternate!==null&&Vt.delete(Ce.key===null?ce:Ce.key),G=f(Ce,G,ce),Re===null?jt=Ce:Re.sibling=Ce,Re=Ce);return t&&Vt.forEach(function(Hv){return n(q,Hv)}),Me&&Fi(q,ce),jt}function He(q,G,j,dt){if(typeof j=="object"&&j!==null&&j.type===R&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case y:t:{for(var jt=j.key;G!==null;){if(G.key===jt){if(jt=j.type,jt===R){if(G.tag===7){a(q,G.sibling),dt=c(G,j.props.children),dt.return=q,q=dt;break t}}else if(G.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===nt&&sr(jt)===G.type){a(q,G.sibling),dt=c(G,j.props),js(dt,j),dt.return=q,q=dt;break t}a(q,G);break}else n(q,G);G=G.sibling}j.type===R?(dt=er(j.props.children,q.mode,dt,j.key),dt.return=q,q=dt):(dt=el(j.type,j.key,j.props,null,q.mode,dt),js(dt,j),dt.return=q,q=dt)}return x(q);case A:t:{for(jt=j.key;G!==null;){if(G.key===jt)if(G.tag===4&&G.stateNode.containerInfo===j.containerInfo&&G.stateNode.implementation===j.implementation){a(q,G.sibling),dt=c(G,j.children||[]),dt.return=q,q=dt;break t}else{a(q,G);break}else n(q,G);G=G.sibling}dt=nu(j,q.mode,dt),dt.return=q,q=dt}return x(q);case nt:return j=sr(j),He(q,G,j,dt)}if(ft(j))return Ft(q,G,j,dt);if(tt(j)){if(jt=tt(j),typeof jt!="function")throw Error(r(150));return j=jt.call(j),$t(q,G,j,dt)}if(typeof j.then=="function")return He(q,G,ll(j),dt);if(j.$$typeof===U)return He(q,G,al(q,j),dt);cl(q,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,G!==null&&G.tag===6?(a(q,G.sibling),dt=c(G,j),dt.return=q,q=dt):(a(q,G),dt=eu(j,q.mode,dt),dt.return=q,q=dt),x(q)):a(q,G)}return function(q,G,j,dt){try{Zs=0;var jt=He(q,G,j,dt);return Vr=null,jt}catch(Vt){if(Vt===Gr||Vt===sl)throw Vt;var Re=Wn(29,Vt,null,q.mode);return Re.lanes=dt,Re.return=q,Re}finally{}}}var lr=xp(!0),gp=xp(!1),Sa=!1;function pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=tl(t),tp(t,null,a),n}return $o(t,s,n,a),tl(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ws(t,a)}}function xu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var gu=!1;function Qs(){if(gu){var t=Hr;if(t!==null)throw t}}function Js(t,n,a,s){gu=!1;var c=t.updateQueue;Sa=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,Q=z.next;z.next=null,x===null?f=Q:x.next=Q,x=z;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==x&&(E===null?ut.firstBaseUpdate=Q:E.next=Q,ut.lastBaseUpdate=z))}if(f!==null){var pt=c.baseState;x=0,ut=Q=z=null,E=f;do{var $=E.lane&-536870913,rt=$!==E.lane;if(rt?(ge&$)===$:(s&$)===$){$!==0&&$===Ir&&(gu=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,$t=E;$=n;var He=a;switch($t.tag){case 1:if(Ft=$t.payload,typeof Ft=="function"){pt=Ft.call(He,pt,$);break t}pt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=$t.payload,$=typeof Ft=="function"?Ft.call(He,pt,$):Ft,$==null)break t;pt=g({},pt,$);break t;case 2:Sa=!0}}$=E.callback,$!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[$]:rt.push($))}else rt={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(Q=ut=rt,z=pt):ut=ut.next=rt,x|=$;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ut===null&&(z=pt),c.baseState=z,c.firstBaseUpdate=Q,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ra|=x,t.lanes=x,t.memoizedState=pt}}function _p(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function vp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_p(a[t],n)}var Xr=L(null),ul=L(0);function Sp(t,n){t=ji,Mt(ul,t),Mt(Xr,n),ji=t|n.baseLanes}function _u(){Mt(ul,ji),Mt(Xr,Xr.current)}function vu(){ji=ul.current,at(Xr),at(ul)}var Yn=L(null),si=null;function ba(t){var n=t.alternate;Mt($e,$e.current&1),Mt(Yn,t),si===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(si=t)}function Su(t){Mt($e,$e.current),Mt(Yn,t),si===null&&(si=t)}function Mp(t){t.tag===22?(Mt($e,$e.current),Mt(Yn,t),si===null&&(si=t)):Ea()}function Ea(){Mt($e,$e.current),Mt(Yn,Yn.current)}function Zn(t){at(Yn),si===t&&(si=null),at($e)}var $e=L(0);function fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rf(a)||Cf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,re=null,Fe=null,sn=null,dl=!1,kr=!1,cr=!1,hl=0,$s=0,qr=null,w_=0;function Ke(){throw Error(r(321))}function Mu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function yu(t,n,a,s,c,f){return Gi=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?a0:Bu,cr=!1,f=a(s,c),cr=!1,kr&&(f=bp(n,a,s,c)),yp(t),f}function yp(t){P.H=no;var n=Fe!==null&&Fe.next!==null;if(Gi=0,sn=Fe=re=null,dl=!1,$s=0,qr=null,n)throw Error(r(300));t===null||on||(t=t.dependencies,t!==null&&il(t)&&(on=!0))}function bp(t,n,a,s){re=t;var c=0;do{if(kr&&(qr=null),$s=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,sn=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=r0,f=n(a,s)}while(kr);return f}function U_(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(re.flags|=1024),n}function bu(){var t=hl!==0;return hl=0,t}function Eu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Tu(t){if(dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}dl=!1}Gi=0,sn=Fe=re=null,kr=!1,$s=hl=0,qr=null}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?re.memoizedState=sn=t:sn=sn.next=t,sn}function tn(){if(Fe===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=sn===null?re.memoizedState:sn.next;if(n!==null)sn=n,Fe=t;else{if(t===null)throw re.alternate===null?Error(r(467)):Error(r(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},sn===null?re.memoizedState=sn=t:sn=sn.next=t}return sn}function pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,qr===null&&(qr=[]),t=hp(qr,t,n),n=re,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?a0:Bu),t}function ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===U)return bn(t)}throw Error(r(438,String(t)))}function Au(t){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=re.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=pl(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function xl(t){var n=tn();return Ru(n,Fe,t)}function Ru(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,z=null,Q=n,ut=!1;do{var pt=Q.lane&-536870913;if(pt!==Q.lane?(ge&pt)===pt:(Gi&pt)===pt){var $=Q.revertLane;if($===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pt===Ir&&(ut=!0);else if((Gi&$)===$){Q=Q.next,$===Ir&&(ut=!0);continue}else pt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(E=z=pt,x=f):z=z.next=pt,re.lanes|=$,Ra|=$;pt=Q.action,cr&&a(f,pt),f=Q.hasEagerState?Q.eagerState:a(f,pt)}else $={lane:pt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(E=z=$,x=f):z=z.next=$,re.lanes|=pt,Ra|=pt;Q=Q.next}while(Q!==null&&Q!==n);if(z===null?x=f:z.next=E,!qn(f,t.memoizedState)&&(on=!0,ut&&(a=Hr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Cu(t){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);qn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ep(t,n,a){var s=re,c=tn(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!qn((Fe||c).memoizedState,a);if(x&&(c.memoizedState=a,on=!0),c=c.queue,Uu(Rp.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||sn!==null&&sn.memoizedState.tag&1){if(s.flags|=2048,Wr(9,{destroy:void 0},Ap.bind(null,s,c,a,n),null),ke===null)throw Error(r(349));f||(Gi&127)!==0||Tp(s,n,a)}return a}function Tp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=pl(),re.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ap(t,n,a,s){n.value=a,n.getSnapshot=s,Cp(n)&&Dp(t)}function Rp(t,n,a){return a(function(){Cp(n)&&Dp(t)})}function Cp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Dp(t){var n=tr(t,2);n!==null&&Fn(n,t,2)}function Du(t){var n=wn();if(typeof t=="function"){var a=t;if(t=a(),cr){Wt(!0);try{a()}finally{Wt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function wp(t,n,a,s){return t.baseState=a,Ru(t,Fe,typeof s=="function"?s:Vi)}function L_(t,n,a,s,c){if(vl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Up(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Up(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var E=a(c,s),z=P.S;z!==null&&z(x,E),Lp(t,n,E)}catch(Q){wu(t,n,Q)}finally{f!==null&&x.types!==null&&(f.types=x.types),P.T=f}}else try{f=a(c,s),Lp(t,n,f)}catch(Q){wu(t,n,Q)}}function Lp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Np(t,n,s)},function(s){return wu(t,n,s)}):Np(t,n,a)}function Np(t,n,a){n.status="fulfilled",n.value=a,Op(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Up(t,a)))}function wu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Op(n),n=n.next;while(n!==s)}t.action=null}function Op(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function zp(t,n){return n}function Pp(t,n){if(Me){var a=ke.formState;if(a!==null){t:{var s=re;if(Me){if(Ye){e:{for(var c=Ye,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=oi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=oi(c.nextSibling),s=c.data==="F!";break t}}_a(s)}s=!1}s&&(n=a[0])}}return a=wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zp,lastRenderedState:n},a.queue=s,a=e0.bind(null,re,s),s.dispatch=a,s=Du(!1),f=Pu.bind(null,re,!1,s.queue),s=wn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=L_.bind(null,re,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Bp(t){var n=tn();return Fp(n,Fe,t)}function Fp(t,n,a){if(n=Ru(t,n,zp)[0],t=xl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(x){throw x===Gr?sl:x}else s=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Wr(9,{destroy:void 0},N_.bind(null,c,a),null)),[s,f,t]}function N_(t,n){t.action=n}function Ip(t){var n=tn(),a=Fe;if(a!==null)return Fp(n,a,t);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Wr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=re.updateQueue,n===null&&(n=pl(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Hp(){return tn().memoizedState}function gl(t,n,a,s){var c=wn();re.flags|=t,c.memoizedState=Wr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(t,n,a,s){var c=tn();s=s===void 0?null:s;var f=c.memoizedState.inst;Fe!==null&&s!==null&&Mu(s,Fe.memoizedState.deps)?c.memoizedState=Wr(n,f,a,s):(re.flags|=t,c.memoizedState=Wr(1|n,f,a,s))}function Gp(t,n){gl(8390656,8,t,n)}function Uu(t,n){_l(2048,8,t,n)}function O_(t){re.flags|=4;var n=re.updateQueue;if(n===null)n=pl(),re.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Vp(t){var n=tn().memoizedState;return O_({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xp(t,n){return _l(4,2,t,n)}function kp(t,n){return _l(4,4,t,n)}function qp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Wp(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,qp.bind(null,n,t),a)}function Lu(){}function Yp(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Mu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Zp(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Mu(n,s[1]))return s[0];if(s=t(),cr){Wt(!0);try{t()}finally{Wt(!1)}}return a.memoizedState=[s,n],s}function Nu(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=j0(),re.lanes|=t,Ra|=t,a)}function jp(t,n,a,s){return qn(a,n)?a:Xr.current!==null?(t=Nu(t,a,s),qn(t,n)||(on=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(ge&261930)===0?(on=!0,t.memoizedState=a):(t=j0(),re.lanes|=t,Ra|=t,n)}function Kp(t,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var x=P.T,E={};P.T=E,Pu(t,!1,n,a);try{var z=c(),Q=P.S;if(Q!==null&&Q(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=D_(z,s);eo(t,n,ut,Qn(t))}else eo(t,n,s,Qn(t))}catch(pt){eo(t,n,{then:function(){},status:"rejected",reason:pt},Qn())}finally{Z.p=f,x!==null&&E.types!==null&&(x.types=E.types),P.T=x}}function z_(){}function Ou(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Qp(t).queue;Kp(t,c,n,Y,a===null?z_:function(){return Jp(t),a(s)})}function Qp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Jp(t){var n=Qp(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},Qn())}function zu(){return bn(vo)}function $p(){return tn().memoizedState}function t0(){return tn().memoizedState}function P_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Ma(a);var s=ya(n,t,a);s!==null&&(Fn(s,n,a),Ks(s,n,a)),n={cache:uu()},t.payload=n;return}n=n.return}}function B_(t,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?n0(n,a):(a=$c(t,n,a,s),a!==null&&(Fn(a,t,s),i0(a,n,s)))}function e0(t,n,a){var s=Qn();eo(t,n,a,s)}function eo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))n0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,qn(E,x))return $o(t,n,c,0),ke===null&&Jo(),!1}catch{}finally{}if(a=$c(t,n,c,s),a!==null)return Fn(a,t,s),i0(a,n,s),!0}return!1}function Pu(t,n,a,s){if(s={lane:2,revertLane:mf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(r(479))}else n=$c(t,a,s,2),n!==null&&Fn(n,t,2)}function vl(t){var n=t.alternate;return t===re||n!==null&&n===re}function n0(t,n){kr=dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function i0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ws(t,a)}}var no={readContext:bn,use:ml,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};no.useEffectEvent=Ke;var a0={readContext:bn,use:ml,useCallback:function(t,n){return wn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:Gp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,qp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=wn();n=n===void 0?null:n;var s=t();if(cr){Wt(!0);try{t()}finally{Wt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=wn();if(a!==void 0){var c=a(n);if(cr){Wt(!0);try{a(n)}finally{Wt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=B_.bind(null,re,t),[s.memoizedState,t]},useRef:function(t){var n=wn();return t={current:t},n.memoizedState=t},useState:function(t){t=Du(t);var n=t.queue,a=e0.bind(null,re,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lu,useDeferredValue:function(t,n){var a=wn();return Nu(a,t,n)},useTransition:function(){var t=Du(!1);return t=Kp.bind(null,re,t.queue,!0,!1),wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=re,c=wn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(ge&127)!==0||Tp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Gp(Rp.bind(null,s,f,t),[t]),s.flags|=2048,Wr(9,{destroy:void 0},Ap.bind(null,s,f,a,n),null),a},useId:function(){var t=wn(),n=ke.identifierPrefix;if(Me){var a=Ti,s=Ei;a=(s&~(1<<32-Gt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=w_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:zu,useFormState:Pp,useActionState:Pp,useOptimistic:function(t){var n=wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pu.bind(null,re,!0,a),a.dispatch=n,[t,n]},useMemoCache:Au,useCacheRefresh:function(){return wn().memoizedState=P_.bind(null,re)},useEffectEvent:function(t){var n=wn(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Bu={readContext:bn,use:ml,useCallback:Yp,useContext:bn,useEffect:Uu,useImperativeHandle:Wp,useInsertionEffect:Xp,useLayoutEffect:kp,useMemo:Zp,useReducer:xl,useRef:Hp,useState:function(){return xl(Vi)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=tn();return jp(a,Fe.memoizedState,t,n)},useTransition:function(){var t=xl(Vi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Ep,useId:$p,useHostTransitionStatus:zu,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=tn();return wp(a,Fe,t,n)},useMemoCache:Au,useCacheRefresh:t0};Bu.useEffectEvent=Vp;var r0={readContext:bn,use:ml,useCallback:Yp,useContext:bn,useEffect:Uu,useImperativeHandle:Wp,useInsertionEffect:Xp,useLayoutEffect:kp,useMemo:Zp,useReducer:Cu,useRef:Hp,useState:function(){return Cu(Vi)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=tn();return Fe===null?Nu(a,t,n):jp(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Cu(Vi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Ep,useId:$p,useHostTransitionStatus:zu,useFormState:Ip,useActionState:Ip,useOptimistic:function(t,n){var a=tn();return Fe!==null?wp(a,Fe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Au,useCacheRefresh:t0};r0.useEffectEvent=Vp;function Fu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Iu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=Ma(s);c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Fn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=Ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Fn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=Ma(a);s.tag=2,n!=null&&(s.callback=n),n=ya(t,s,a),n!==null&&(Fn(n,t,a),Ks(n,t,a))}};function s0(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function o0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Iu.enqueueReplaceState(n,n.state,null)}function ur(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function l0(t){Qo(t)}function c0(t){console.error(t)}function u0(t){Qo(t)}function Sl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function f0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(t,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(t,n)},a}function d0(t){return t=Ma(t),t.tag=3,t}function h0(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){f0(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){f0(n,a,s),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function F_(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Fr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Ll():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),df(t,s,c)),!1;case 22:return a.flags|=65536,s===ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),df(t,s,c)),!1}throw Error(r(435,a.tag))}return df(t,s,c),Ll(),!1}if(Me)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ru&&(t=Error(r(422),{cause:s}),qs(ni(t,a)))):(s!==ru&&(n=Error(r(423),{cause:s}),qs(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ni(s,a),c=Hu(t.stateNode,s,c),xu(t,c),Qe!==4&&(Qe=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),uo===null?uo=[f]:uo.push(f),Qe!==4&&(Qe=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Hu(a.stateNode,s,t),xu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=d0(c),h0(c,t,a,s),xu(a,c),!1}a=a.return}while(a!==null);return!1}var Gu=Error(r(461)),on=!1;function En(t,n,a,s){n.child=t===null?gp(n,null,a,s):lr(n,t.child,a,s)}function p0(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return ar(n),s=yu(t,n,a,x,f,c),E=bu(),t!==null&&!on?(Eu(t,n,c),Xi(t,n,c)):(Me&&E&&iu(n),n.flags|=1,En(t,n,s,c),n.child)}function m0(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,x0(t,n,f,s,c)):(t=el(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ju(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(x,s)&&t.ref===n.ref)return Xi(t,n,c)}return n.flags|=1,t=Bi(f,s),t.ref=n.ref,t.return=n,n.child=t}function x0(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(on=!1,n.pendingProps=s=f,ju(t,c))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,Xi(t,n,c)}return Vu(t,n,a,s,c)}function g0(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return _0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&rl(n,f!==null?f.cachePool:null),f!==null?Sp(n,f):_u(),Mp(n);else return s=n.lanes=536870912,_0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(rl(n,f.cachePool),Sp(n,f),Ea(),n.memoizedState=null):(t!==null&&rl(n,null),_u(),Ea());return En(t,n,c,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _0(t,n,a,s,c){var f=du();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&rl(n,null),_u(),Mp(n),t!==null&&Fr(t,n,s,!0),n.childLanes=c,null}function Ml(t,n){return n=bl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function v0(t,n,a){return lr(n,t.child,null,a),t=Ml(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function I_(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=Ml(n,s),n.lanes=536870912,io(null,t);if(Su(n),(t=Ye)?(t=Um(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=np(t),a.return=n,n.child=a,yn=n,Ye=null)):t=null,t===null)throw _a(n);return n.lanes=536870912,null}return Ml(n,s)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Su(n),c)if(n.flags&256)n.flags&=-257,n=v0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(on||Fr(t,n,a,!1),c=(a&t.childLanes)!==0,on||c){if(s=ke,s!==null&&(x=Us(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,tr(t,x),Fn(s,t,x),Gu;Ll(),n=v0(t,n,a)}else t=f.treeContext,Ye=oi(x.nextSibling),yn=n,Me=!0,ga=null,ri=!1,t!==null&&rp(n,t),n=Ml(n,s),n.flags|=4096;return n}return t=Bi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Vu(t,n,a,s,c){return ar(n),a=yu(t,n,a,s,void 0,c),s=bu(),t!==null&&!on?(Eu(t,n,c),Xi(t,n,c)):(Me&&s&&iu(n),n.flags|=1,En(t,n,a,c),n.child)}function S0(t,n,a,s,c,f){return ar(n),n.updateQueue=null,a=bp(n,s,a,c),yp(t),s=bu(),t!==null&&!on?(Eu(t,n,f),Xi(t,n,f)):(Me&&s&&iu(n),n.flags|=1,En(t,n,a,f),n.child)}function M0(t,n,a,s,c){if(ar(n),n.stateNode===null){var f=Or,x=a.contextType;typeof x=="object"&&x!==null&&(f=bn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Iu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},pu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?bn(x):Or,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Fu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Iu.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=ur(a,E);f.props=z;var Q=f.context,ut=a.contextType;x=Or,typeof ut=="object"&&ut!==null&&(x=bn(ut));var pt=a.getDerivedStateFromProps;ut=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==x)&&o0(n,f,s,x),Sa=!1;var $=n.memoizedState;f.state=$,Js(n,s,f,c),Qs(),Q=n.memoizedState,E||$!==Q||Sa?(typeof pt=="function"&&(Fu(n,a,pt,s),Q=n.memoizedState),(z=Sa||s0(n,a,z,s,$,Q,x))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=x,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,mu(t,n),x=n.memoizedProps,ut=ur(a,x),f.props=ut,pt=n.pendingProps,$=f.context,Q=a.contextType,z=Or,typeof Q=="object"&&Q!==null&&(z=bn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==pt||$!==z)&&o0(n,f,s,z),Sa=!1,$=n.memoizedState,f.state=$,Js(n,s,f,c),Qs();var rt=n.memoizedState;x!==pt||$!==rt||Sa||t!==null&&t.dependencies!==null&&il(t.dependencies)?(typeof E=="function"&&(Fu(n,a,E,s),rt=n.memoizedState),(ut=Sa||s0(n,a,ut,s,$,rt,z)||t!==null&&t.dependencies!==null&&il(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=z,s=ut):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=lr(n,t.child,null,c),n.child=lr(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Xi(t,n,c),t}function y0(t,n,a,s){return nr(),n.flags|=256,En(t,n,a,s),n.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(t){return{baseLanes:t,cachePool:fp()}}function qu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function b0(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:($e.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?ba(n):Ea(),(t=Ye)?(t=Um(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=np(t),a.return=n,n.child=a,yn=n,Ye=null)):t=null,t===null)throw _a(n);return Cf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ea(),c=n.mode,E=bl({mode:"hidden",children:E},c),s=er(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=ku(a),s.childLanes=qu(t,x,a),n.memoizedState=Xu,io(null,s)):(ba(n),Wu(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(ba(n),n.flags&=-257,n=Yu(t,n,a)):n.memoizedState!==null?(Ea(),n.child=t.child,n.flags|=128,n=null):(Ea(),E=s.fallback,c=n.mode,s=bl({mode:"visible",children:s.children},c),E=er(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,lr(n,t.child,null,a),s=n.child,s.memoizedState=ku(a),s.childLanes=qu(t,x,a),n.memoizedState=Xu,n=io(null,s));else if(ba(n),Cf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var Q=x.dgst;x=Q,s=Error(r(419)),s.stack="",s.digest=x,qs({value:s,source:null,stack:null}),n=Yu(t,n,a)}else if(on||Fr(t,n,a,!1),x=(a&t.childLanes)!==0,on||x){if(x=ke,x!==null&&(s=Us(x,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,tr(t,s),Fn(x,t,s),Gu;Rf(E)||Ll(),n=Yu(t,n,a)}else Rf(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Ye=oi(E.nextSibling),yn=n,Me=!0,ga=null,ri=!1,t!==null&&rp(n,t),n=Wu(n,s.children),n.flags|=4096);return n}return c?(Ea(),E=s.fallback,c=n.mode,z=t.child,Q=z.sibling,s=Bi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,Q!==null?E=Bi(Q,E):(E=er(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=t.child.memoizedState,E===null?E=ku(a):(c=E.cachePool,c!==null?(z=rn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=fp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=qu(t,x,a),n.memoizedState=Xu,io(t.child,s)):(ba(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Wu(t,n){return n=bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function bl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function Yu(t,n,a){return lr(n,t.child,null,a),t=Wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function E0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),lu(t.return,n,a)}function Zu(t,n,a,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function T0(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=$e.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,Mt($e,x),En(t,n,s,a),s=Me?ks:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&E0(t,a,n);else if(t.tag===19)E0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&fl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Zu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&fl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Zu(n,!0,a,null,f,s);break;case"together":Zu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ju(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&il(t)))}function H_(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),va(n,rn,t.memoizedState.cache),nr();break;case 27:case 5:Xt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Su(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?b0(t,n,a):(ba(n),t=Xi(t,n,a),t!==null?t.sibling:null);ba(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Fr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return T0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt($e,$e.current),s)break;return null;case 22:return n.lanes=0,g0(t,n,a,n.pendingProps);case 24:va(n,rn,t.memoizedState.cache)}return Xi(t,n,a)}function A0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!ju(t,a)&&(n.flags&128)===0)return on=!1,H_(t,n,a);on=(t.flags&131072)!==0}else on=!1,Me&&(n.flags&1048576)!==0&&ap(n,ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=sr(n.elementType),n.type=t,typeof t=="function")tu(t)?(s=ur(t,s),n.tag=1,n=M0(null,n,t,s,a)):(n.tag=0,n=Vu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===F){n.tag=11,n=p0(null,n,t,s,a);break t}else if(c===B){n.tag=14,n=m0(null,n,t,s,a);break t}}throw n=mt(t)||t,Error(r(306,n,""))}}return n;case 0:return Vu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ur(s,n.pendingProps),M0(t,n,s,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,mu(t,n),Js(n,s,null,a);var x=n.memoizedState;if(s=x.cache,va(n,rn,s),s!==f.cache&&cu(n,[rn],a,!0),Qs(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=y0(t,n,s,a);break t}else if(s!==c){c=ni(Error(r(424)),n),qs(c),n=y0(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ye=oi(t.firstChild),yn=n,Me=!0,ga=null,ri=!0,a=gp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(nr(),s===c){n=Xi(t,n,a);break t}En(t,n,s,a)}n=n.child}return n;case 26:return yl(t,n),t===null?(a=Bm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,s=Il(et.current).createElement(a),s[an]=n,s[un]=t,Tn(s,a,t),J(s),n.stateNode=s):n.memoizedState=Bm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&Me&&(s=n.stateNode=Om(n.type,n.pendingProps,et.current),yn=n,ri=!0,c=Ye,La(n.type)?(Df=c,Ye=oi(s.firstChild)):Ye=c),En(t,n,n.pendingProps.children,a),yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=s=Ye)&&(s=xv(s,n.type,n.pendingProps,ri),s!==null?(n.stateNode=s,yn=n,Ye=oi(s.firstChild),ri=!1,c=!0):c=!1),c||_a(n)),Xt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,Ef(c,f)?s=null:x!==null&&Ef(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=yu(t,n,U_,null,null,a),vo._currentValue=c),yl(t,n),En(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=Ye)&&(a=gv(a,n.pendingProps,ri),a!==null?(n.stateNode=a,yn=n,Ye=null,t=!0):t=!1),t||_a(n)),null;case 13:return b0(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=lr(n,null,s,a):En(t,n,s,a),n.child;case 11:return p0(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,va(n,n.type,s.value),En(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ar(n),c=bn(c),s=s(c),n.flags|=1,En(t,n,s,a),n.child;case 14:return m0(t,n,n.type,n.pendingProps,a);case 15:return x0(t,n,n.type,n.pendingProps,a);case 19:return T0(t,n,a);case 31:return I_(t,n,a);case 22:return g0(t,n,a,n.pendingProps);case 24:return ar(n),s=bn(rn),t===null?(c=du(),c===null&&(c=ke,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},pu(n),va(n,rn,c)):((t.lanes&a)!==0&&(mu(t,n),Js(n,null,null,a),Qs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,rn,s)):(s=f.cache,va(n,rn,s),s!==c.cache&&cu(n,[rn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(t){t.flags|=4}function Ku(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if($0())t.flags|=8192;else throw or=ol,hu}else t.flags&=-16777217}function R0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vm(n))if($0())t.flags|=8192;else throw or=ol,hu}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Be():536870912,t.lanes|=n,Kr|=n)}function ao(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function G_(t,n,a){var s=n.pendingProps;switch(au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(rn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Br(n)?ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,su())),Ze(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ki(n),f!==null?(Ze(n),R0(n,f)):(Ze(n),Ku(n,c,null,s,a))):f?f!==t.memoizedState?(ki(n),Ze(n),R0(n,f)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ki(n),Ze(n),Ku(n,c,t,s,a)),null;case 27:if(oe(n),a=et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}t=Et.current,Br(n)?sp(n):(t=Om(c,s,a),n.stateNode=t,ki(n))}return Ze(n),null;case 5:if(oe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(f=Et.current,Br(n))sp(n);else{var x=Il(et.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[an]=n,f[un]=s;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Tn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ki(n)}}return Ze(n),Ku(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=et.current,Br(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=yn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||bm(t.nodeValue,a)),t||_a(n,!0)}else t=Il(t).createTextNode(s),t[an]=n,n.stateNode=t}return Ze(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Br(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[an]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else a=su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ze(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Br(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[an]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Ze(n),null);case 4:return It(),t===null&&vf(n.stateNode.containerInfo),Ze(n),null;case 10:return Hi(n.type),Ze(n),null;case 19:if(at($e),s=n.memoizedState,s===null)return Ze(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ao(s,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=fl(t),f!==null){for(n.flags|=128,ao(s,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ep(a,t),a=a.sibling;return Mt($e,$e.current&1|2),Me&&Fi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&b()>Dl&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304)}else{if(!c)if(t=fl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Me)return Ze(n),null}else 2*b()-s.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=b(),t.sibling=null,a=$e.current,Mt($e,c?a&1|2:a&1),Me&&Fi(n,s.treeForkCount),t):(Ze(n),null);case 22:case 23:return Zn(n),vu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&at(rr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(rn),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function V_(t,n){switch(au(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(rn),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return at($e),null;case 4:return It(),null;case 10:return Hi(n.type),null;case 22:case 23:return Zn(n),vu(),t!==null&&at(rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(rn),null;case 25:return null;default:return null}}function C0(t,n){switch(au(n),n.tag){case 3:Hi(rn),It();break;case 26:case 27:case 5:oe(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:at($e);break;case 10:Hi(n.type);break;case 22:case 23:Zn(n),vu(),t!==null&&at(rr);break;case 24:Hi(rn)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(E){ze(n,n.return,E)}}function Ta(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var z=a,Q=E;try{Q()}catch(ut){ze(c,z,ut)}}}s=s.next}while(s!==f)}}catch(ut){ze(n,n.return,ut)}}function D0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{vp(n,a)}catch(s){ze(t,t.return,s)}}}function w0(t,n,a){a.props=ur(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ze(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){ze(t,n,c)}}function Ai(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(t,n,c)}else a.current=null}function U0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){ze(t,t.return,c)}}function Qu(t,n,a){try{var s=t.stateNode;uv(s,t.type,a,n),s[un]=n}catch(c){ze(t,t.return,c)}}function L0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&La(t.type)||t.tag===4}function Ju(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&La(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(s!==4&&(s===27&&La(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for($u(t,n,a),t=t.sibling;t!==null;)$u(t,n,a),t=t.sibling}function Tl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&La(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tl(t,n,a),t=t.sibling;t!==null;)Tl(t,n,a),t=t.sibling}function N0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,s,a),n[an]=t,n[un]=a}catch(f){ze(t,t.return,f)}}var qi=!1,ln=!1,tf=!1,O0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function X_(t,n){if(t=t.containerInfo,yf=Wl,t=Wh(t),Yc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,z=-1,Q=0,ut=0,pt=t,$=null;e:for(;;){for(var rt;pt!==a||c!==0&&pt.nodeType!==3||(E=x+c),pt!==f||s!==0&&pt.nodeType!==3||(z=x+s),pt.nodeType===3&&(x+=pt.nodeValue.length),(rt=pt.firstChild)!==null;)$=pt,pt=rt;for(;;){if(pt===t)break e;if($===a&&++Q===c&&(E=x),$===f&&++ut===s&&(z=x),(rt=pt.nextSibling)!==null)break;pt=$,$=pt.parentNode}pt=rt}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(bf={focusedElem:t,selectionRange:a},Wl=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ft=ur(a.type,c);t=s.getSnapshotBeforeUpdate(Ft,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){ze(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Af(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Af(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function z0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),s&4&&ro(5,a);break;case 1:if(Yi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){ze(a,a.return,x)}else{var c=ur(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){ze(a,a.return,x)}}s&64&&D0(a),s&512&&so(a,a.return);break;case 3:if(Yi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{vp(t,n)}catch(x){ze(a,a.return,x)}}break;case 27:n===null&&s&4&&N0(a);case 26:case 5:Yi(t,a),n===null&&s&4&&U0(a),s&512&&so(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),s&4&&F0(t,a);break;case 13:Yi(t,a),s&4&&I0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=J_.bind(null,a),_v(t,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||ln,c=qi;var f=ln;qi=s,(ln=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):Yi(t,a),qi=c,ln=f}break;case 30:break;default:Yi(t,a)}}function P0(t){var n=t.alternate;n!==null&&(t.alternate=null,P0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Os(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,On=!1;function Wi(t,n,a){for(a=a.child;a!==null;)B0(t,n,a),a=a.sibling}function B0(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:ln||Ai(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ai(a,n);var s=je,c=On;La(a.type)&&(je=a.stateNode,On=!1),Wi(t,n,a),xo(a.stateNode),je=s,On=c;break;case 5:ln||Ai(a,n);case 6:if(s=je,c=On,je=null,Wi(t,n,a),je=s,On=c,je!==null)if(On)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:je!==null&&(On?(t=je,Dm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),as(t)):Dm(je,a.stateNode));break;case 4:s=je,c=On,je=a.stateNode.containerInfo,On=!0,Wi(t,n,a),je=s,On=c;break;case 0:case 11:case 14:case 15:Ta(2,a,n),ln||Ta(4,a,n),Wi(t,n,a);break;case 1:ln||(Ai(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&w0(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:ln=(s=ln)||a.memoizedState!==null,Wi(t,n,a),ln=s;break;default:Wi(t,n,a)}}function F0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{as(t)}catch(a){ze(n,n.return,a)}}}function I0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{as(t)}catch(a){ze(n,n.return,a)}}function k_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new O0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new O0),n;default:throw Error(r(435,t.tag))}}function Al(t,n){var a=k_(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=$_.bind(null,t,s);s.then(c,c)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(La(E.type)){je=E.stateNode,On=!1;break t}break;case 5:je=E.stateNode,On=!1;break t;case 3:case 4:je=E.stateNode.containerInfo,On=!0;break t}E=E.return}if(je===null)throw Error(r(160));B0(f,x,c),je=null,On=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)H0(n,t),n=n.sibling}var xi=null;function H0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),Pn(t),s&4&&(Ta(3,t,t.return),ro(3,t),Ta(5,t,t.return));break;case 1:zn(n,t),Pn(t),s&512&&(ln||a===null||Ai(a,a.return)),s&64&&qi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=xi;if(zn(n,t),Pn(t),s&512&&(ln||a===null||Ai(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ka]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[an]=t,J(f),s=f;break t;case"link":var x=Hm("link","href",c).get(s+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Hm("meta","content",c).get(s+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=t,J(f),s=f}t.stateNode=s}else Gm(c,t.type,t.stateNode);else t.stateNode=Im(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Gm(c,t.type,t.stateNode):Im(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Qu(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),Pn(t),s&512&&(ln||a===null||Ai(a,a.return)),a!==null&&s&4&&Qu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),Pn(t),s&512&&(ln||a===null||Ai(a,a.return)),t.flags&32){c=t.stateNode;try{bi(c,"")}catch(Ft){ze(t,t.return,Ft)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Qu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(tf=!0);break;case 6:if(zn(n,t),Pn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ft){ze(t,t.return,Ft)}}break;case 3:if(Vl=null,c=xi,xi=Hl(n.containerInfo),zn(n,t),xi=c,Pn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{as(n.containerInfo)}catch(Ft){ze(t,t.return,Ft)}tf&&(tf=!1,G0(t));break;case 4:s=xi,xi=Hl(t.stateNode.containerInfo),zn(n,t),Pn(t),xi=s;break;case 12:zn(n,t),Pn(t);break;case 31:zn(n,t),Pn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 13:zn(n,t),Pn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=b()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,Q=qi,ut=ln;if(qi=Q||c,ln=ut||z,zn(n,t),ln=ut,qi=Q,Pn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||qi||ln||fr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=z.stateNode;var pt=z.memoizedProps.style,$=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Ft){ze(z,z.return,Ft)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Ft){ze(z,z.return,Ft)}}}else if(n.tag===18){if(a===null){z=n;try{var rt=z.stateNode;c?wm(rt,!0):wm(z.stateNode,!1)}catch(Ft){ze(z,z.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Al(t,a))));break;case 19:zn(n,t),Pn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 30:break;case 21:break;default:zn(n,t),Pn(t)}}function Pn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(L0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Ju(t);Tl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(bi(x,""),a.flags&=-33);var E=Ju(t);Tl(t,E,x);break;case 3:case 4:var z=a.stateNode.containerInfo,Q=Ju(t);$u(t,Q,z);break;default:throw Error(r(161))}}catch(ut){ze(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function G0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;G0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)z0(t,n.alternate,n),n=n.sibling}function fr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),fr(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&w0(n,n.return,a),fr(n);break;case 27:xo(n.stateNode);case 26:case 5:Ai(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),ro(4,f);break;case 1:if(Zi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){ze(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)_p(z[c],E)}catch(Q){ze(s,s.return,Q)}}a&&x&64&&D0(f),so(f,f.return);break;case 27:N0(f);case 26:case 5:Zi(c,f,a),a&&s===null&&x&4&&U0(f),so(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&x&4&&F0(c,f);break;case 13:Zi(c,f,a),a&&x&4&&I0(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),so(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ws(a))}function nf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t))}function gi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)V0(t,n,a,s),n=n.sibling}function V0(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,s),c&2048&&ro(9,n);break;case 1:gi(t,n,a,s);break;case 3:gi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t)));break;case 12:if(c&2048){gi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){ze(n,n.return,z)}}else gi(t,n,a,s);break;case 31:gi(t,n,a,s);break;case 13:gi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?gi(t,n,a,s):oo(t,n):f._visibility&2?gi(t,n,a,s):(f._visibility|=2,Yr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ef(x,n);break;case 24:gi(t,n,a,s),c&2048&&nf(n.alternate,n);break;default:gi(t,n,a,s)}}function Yr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,E=a,z=s,Q=x.flags;switch(x.tag){case 0:case 11:case 15:Yr(f,x,E,z,c),ro(8,x);break;case 23:break;case 22:var ut=x.stateNode;x.memoizedState!==null?ut._visibility&2?Yr(f,x,E,z,c):oo(f,x):(ut._visibility|=2,Yr(f,x,E,z,c)),c&&Q&2048&&ef(x.alternate,x);break;case 24:Yr(f,x,E,z,c),c&&Q&2048&&nf(x.alternate,x);break;default:Yr(f,x,E,z,c)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&ef(s.alternate,s);break;case 24:oo(a,s),c&2048&&nf(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Zr(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)X0(t,n,a),t=t.sibling}function X0(t,n,a){switch(t.tag){case 26:Zr(t,n,a),t.flags&lo&&t.memoizedState!==null&&wv(a,xi,t.memoizedState,t.memoizedProps);break;case 5:Zr(t,n,a);break;case 3:case 4:var s=xi;xi=Hl(t.stateNode.containerInfo),Zr(t,n,a),xi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,Zr(t,n,a),lo=s):Zr(t,n,a));break;default:Zr(t,n,a)}}function k0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,W0(s,t)}k0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)q0(t),t=t.sibling}function q0(t){switch(t.tag){case 0:case 11:case 15:co(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:co(t);break;case 12:co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Rl(t)):co(t);break;default:co(t)}}function Rl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,W0(s,t)}k0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}t=t.sibling}}function W0(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vn=s;else t:for(a=t;vn!==null;){s=vn;var c=s.sibling,f=s.return;if(P0(s),s===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var q_={getCacheForType:function(t){var n=bn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(rn).controller.signal}},W_=typeof WeakMap=="function"?WeakMap:Map,we=0,ke=null,me=null,ge=0,Oe=0,jn=null,Aa=!1,jr=!1,af=!1,ji=0,Qe=0,Ra=0,dr=0,rf=0,Kn=0,Kr=0,uo=null,Bn=null,sf=!1,Cl=0,Y0=0,Dl=1/0,wl=null,Ca=null,dn=0,Da=null,Qr=null,Ki=0,of=0,lf=null,Z0=null,fo=0,cf=null;function Qn(){return(we&2)!==0&&ge!==0?ge&-ge:P.T!==null?mf():Ls()}function j0(){if(Kn===0)if((ge&536870912)===0||Me){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Fn(t,n,a){(t===ke&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Jr(t,0),wa(t,ge,Kn,!1)),An(t,a),((we&2)===0||t!==ke)&&(t===ke&&((we&2)===0&&(dr|=a),Qe===4&&wa(t,ge,Kn,!1)),Ri(t))}function K0(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Pt(t,n),c=s?j_(t,n):ff(t,n,!0),f=s;do{if(c===0){jr&&!s&&wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Y_(a)){c=ff(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=t;c=uo;var z=E.current.memoizedState.isDehydrated;if(z&&(Jr(E,x).flags|=256),x=ff(E,x,!1),x!==2){if(af&&!z){E.errorRecoveryDisabledLanes|=f,dr|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Jr(t,0),wa(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:wa(s,n,Kn,!Aa);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Cl+300-b(),10<c)){if(wa(s,n,Kn,!Aa),xt(s,0,!0)!==0)break t;Ki=n,s.timeoutHandle=Rm(Q0.bind(null,s,a,Bn,wl,sf,n,Kn,dr,Kr,Aa,f,"Throttled",-0,0),c);break t}Q0(s,a,Bn,wl,sf,n,Kn,dr,Kr,Aa,f,null,-0,0)}}break}while(!0);Ri(t)}function Q0(t,n,a,s,c,f,x,E,z,Q,ut,pt,$,rt){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},X0(n,f,pt);var Ft=(f&62914560)===f?Cl-b():(f&4194048)===f?Y0-b():0;if(Ft=Uv(pt,Ft),Ft!==null){Ki=f,t.cancelPendingCommit=Ft(rm.bind(null,t,n,f,a,s,c,x,E,z,ut,pt,null,$,rt)),wa(t,f,x,!Q);return}}rm(t,n,f,a,s,c,x,E,z)}function Y_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(t,n,a,s){n&=~rf,n&=~dr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Gt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Vo(t,a,n)}function Ul(){return(we&6)===0?(ho(0),!1):!0}function uf(){if(me!==null){if(Oe===0)var t=me.return;else t=me,Ii=ir=null,Tu(t),Vr=null,Zs=0,t=me;for(;t!==null;)C0(t.alternate,t),t=t.return;me=null}}function Jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,uf(),ke=t,me=a=Bi(t.current,null),ge=n,Oe=0,jn=null,Aa=!1,jr=Pt(t,n),af=!1,Kr=Kn=rf=dr=Ra=Qe=0,Bn=uo=null,sf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Gt(s),f=1<<c;n|=t[c],s&=~f}return ji=n,Jo(),a}function J0(t,n){re=null,P.H=no,n===Gr||n===sl?(n=pp(),Oe=3):n===hu?(n=pp(),Oe=4):Oe=n===Gu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,me===null&&(Qe=1,Sl(t,ni(n,t.current)))}function $0(){var t=Yn.current;return t===null?!0:(ge&4194048)===ge?si===null:(ge&62914560)===ge||(ge&536870912)!==0?t===si:!1}function tm(){var t=P.H;return P.H=no,t===null?no:t}function em(){var t=P.A;return P.A=q_,t}function Ll(){Qe=4,Aa||(ge&4194048)!==ge&&Yn.current!==null||(jr=!0),(Ra&134217727)===0&&(dr&134217727)===0||ke===null||wa(ke,ge,Kn,!1)}function ff(t,n,a){var s=we;we|=2;var c=tm(),f=em();(ke!==t||ge!==n)&&(wl=null,Jr(t,n)),n=!1;var x=Qe;t:do try{if(Oe!==0&&me!==null){var E=me,z=jn;switch(Oe){case 8:uf(),x=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var Q=Oe;if(Oe=0,jn=null,$r(t,E,z,Q),a&&jr){x=0;break t}break;default:Q=Oe,Oe=0,jn=null,$r(t,E,z,Q)}}Z_(),x=Qe;break}catch(ut){J0(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Ii=ir=null,we=s,P.H=c,P.A=f,me===null&&(ke=null,ge=0,Jo()),x}function Z_(){for(;me!==null;)nm(me)}function j_(t,n){var a=we;we|=2;var s=tm(),c=em();ke!==t||ge!==n?(wl=null,Dl=b()+500,Jr(t,n)):jr=Pt(t,n);t:do try{if(Oe!==0&&me!==null){n=me;var f=jn;e:switch(Oe){case 1:Oe=0,jn=null,$r(t,n,f,1);break;case 2:case 9:if(dp(f)){Oe=0,jn=null,im(n);break}n=function(){Oe!==2&&Oe!==9||ke!==t||(Oe=7),Ri(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:dp(f)?(Oe=0,jn=null,im(n)):(Oe=0,jn=null,$r(t,n,f,7));break;case 5:var x=null;switch(me.tag){case 26:x=me.memoizedState;case 5:case 27:var E=me;if(x?Vm(x):E.stateNode.complete){Oe=0,jn=null;var z=E.sibling;if(z!==null)me=z;else{var Q=E.return;Q!==null?(me=Q,Nl(Q)):me=null}break e}}Oe=0,jn=null,$r(t,n,f,5);break;case 6:Oe=0,jn=null,$r(t,n,f,6);break;case 8:uf(),Qe=6;break t;default:throw Error(r(462))}}K_();break}catch(ut){J0(t,ut)}while(!0);return Ii=ir=null,P.H=s,P.A=c,we=a,me!==null?0:(ke=null,ge=0,Jo(),Qe)}function K_(){for(;me!==null&&!ie();)nm(me)}function nm(t){var n=A0(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?Nl(t):me=n}function im(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=S0(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=S0(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Tu(n);default:C0(a,n),n=me=ep(n,ji),n=A0(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?Nl(t):me=n}function $r(t,n,a,s){Ii=ir=null,Tu(n),Vr=null,Zs=0;var c=n.return;try{if(F_(t,c,n,a,ge)){Qe=1,Sl(t,ni(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Qe=1,Sl(t,ni(a,t.current)),me=null;return}n.flags&32768?(Me||s===1?t=!0:jr||(ge&536870912)!==0?t=!1:(Aa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),am(n,t)):Nl(n)}function Nl(t){var n=t;do{if((n.flags&32768)!==0){am(n,Aa);return}t=n.return;var a=G_(n.alternate,n,ji);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Qe===0&&(Qe=5)}function am(t,n){do{var a=V_(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Qe=6,me=null}function rm(t,n,a,s,c,f,x,E,z){t.cancelPendingCommit=null;do Ol();while(dn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Jc,Xn(t,a,f,x,E,z),t===ke&&(me=ke=null,ge=0),Qr=n,Da=t,Ki=a,of=f,lf=c,Z0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,tv(ot,function(){return um(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=Z.p,Z.p=2,x=we,we|=4;try{X_(t,n,a)}finally{we=x,Z.p=c,P.T=s}}dn=1,sm(),om(),lm()}}function sm(){if(dn===1){dn=0;var t=Da,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var c=we;we|=4;try{H0(n,t);var f=bf,x=Wh(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&qh(E.ownerDocument.documentElement,E)){if(z!==null&&Yc(E)){var Q=z.start,ut=z.end;if(ut===void 0&&(ut=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ut,E.value.length);else{var pt=E.ownerDocument||document,$=pt&&pt.defaultView||window;if($.getSelection){var rt=$.getSelection(),Ft=E.textContent.length,$t=Math.min(z.start,Ft),He=z.end===void 0?$t:Math.min(z.end,Ft);!rt.extend&&$t>He&&(x=He,He=$t,$t=x);var q=kh(E,$t),G=kh(E,He);if(q&&G&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==G.node||rt.focusOffset!==G.offset)){var j=pt.createRange();j.setStart(q.node,q.offset),rt.removeAllRanges(),$t>He?(rt.addRange(j),rt.extend(G.node,G.offset)):(j.setEnd(G.node,G.offset),rt.addRange(j))}}}}for(pt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&pt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var dt=pt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Wl=!!yf,bf=yf=null}finally{we=c,Z.p=s,P.T=a}}t.current=n,dn=2}}function om(){if(dn===2){dn=0;var t=Da,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var c=we;we|=4;try{z0(t,n.alternate,n)}finally{we=c,Z.p=s,P.T=a}}dn=3}}function lm(){if(dn===4||dn===3){dn=0,w();var t=Da,n=Qr,a=Ki,s=Z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,Qr=Da=null,cm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ca=null),ja(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=Z.p,Z.p=2,P.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var E=s[x];f(E.value,{componentStack:E.stack})}}finally{P.T=n,Z.p=c}}(Ki&3)!==0&&Ol(),Ri(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===cf?fo++:(fo=0,cf=t):fo=0,ho(0)}}function cm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ws(n)))}function Ol(){return sm(),om(),lm(),um()}function um(){if(dn!==5)return!1;var t=Da,n=of;of=0;var a=ja(Ki),s=P.T,c=Z.p;try{Z.p=32>a?32:a,P.T=null,a=lf,lf=null;var f=Da,x=Ki;if(dn=0,Qr=Da=null,Ki=0,(we&6)!==0)throw Error(r(331));var E=we;if(we|=4,q0(f.current),V0(f,f.current,x,a),we=E,ho(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(St,f)}catch{}return!0}finally{Z.p=c,P.T=s,cm(t,n)}}function fm(t,n,a){n=ni(a,n),n=Hu(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(An(t,2),Ri(t))}function ze(t,n,a){if(t.tag===3)fm(t,t,a);else for(;n!==null;){if(n.tag===3){fm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ca===null||!Ca.has(s))){t=ni(a,t),a=d0(2),s=ya(n,a,2),s!==null&&(h0(a,s,n,t),An(s,2),Ri(s));break}}n=n.return}}function df(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new W_;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(af=!0,c.add(a),t=Q_.bind(null,t,n,a),n.then(t,t))}function Q_(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(ge&a)===a&&(Qe===4||Qe===3&&(ge&62914560)===ge&&300>b()-Cl?(we&2)===0&&Jr(t,0):rf|=a,Kr===ge&&(Kr=0)),Ri(t)}function dm(t,n){n===0&&(n=Be()),t=tr(t,n),t!==null&&(An(t,n),Ri(t))}function J_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),dm(t,a)}function $_(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),dm(t,a)}function tv(t,n){return Ve(t,n)}var zl=null,ts=null,hf=!1,Pl=!1,pf=!1,Ua=0;function Ri(t){t!==ts&&t.next===null&&(ts===null?zl=ts=t:ts=ts.next=t),Pl=!0,hf||(hf=!0,nv())}function ho(t,n){if(!pf&&Pl){pf=!0;do for(var a=!1,s=zl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Gt(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,xm(s,f))}else f=ge,f=xt(s,s===ke?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Pt(s,f)||(a=!0,xm(s,f));s=s.next}while(a);pf=!1}}function ev(){hm()}function hm(){Pl=hf=!1;var t=0;Ua!==0&&dv()&&(t=Ua);for(var n=b(),a=null,s=zl;s!==null;){var c=s.next,f=pm(s,n);f===0?(s.next=null,a===null?zl=c:a.next=c,c===null&&(ts=a)):(a=s,(t!==0||(f&3)!==0)&&(Pl=!0)),s=c}dn!==0&&dn!==5||ho(t),Ua!==0&&(Ua=0)}function pm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Gt(f),E=1<<x,z=c[x];z===-1?((E&a)===0||(E&s)!==0)&&(c[x]=ne(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=ke,a=ge,a=xt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Yt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Yt(s),ja(a)){case 2:case 8:a=vt;break;case 32:a=ot;break;case 268435456:a=Ut;break;default:a=ot}return s=mm.bind(null,t),a=Ve(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Yt(s),t.callbackPriority=2,t.callbackNode=null,2}function mm(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ol()&&t.callbackNode!==a)return null;var s=ge;return s=xt(t,t===ke?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(K0(t,s,n),pm(t,b()),t.callbackNode!=null&&t.callbackNode===a?mm.bind(null,t):null)}function xm(t,n){if(Ol())return null;K0(t,n,!0)}function nv(){pv(function(){(we&6)!==0?Ve(ht,ev):hm()})}function mf(){if(Ua===0){var t=Ir;t===0&&(t=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Ua=t}return Ua}function gm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function _m(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function iv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=gm((c[un]||null).action),x=s.submitter;x&&(n=(n=x[un]||null)?gm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Zo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ua!==0){var z=x?_m(c,x):new FormData(c);Ou(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=x?_m(c,x):new FormData(c),Ou(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var xf=0;xf<Qc.length;xf++){var gf=Qc[xf],av=gf.toLowerCase(),rv=gf[0].toUpperCase()+gf.slice(1);mi(av,"on"+rv)}mi(jh,"onAnimationEnd"),mi(Kh,"onAnimationIteration"),mi(Qh,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(M_,"onTransitionRun"),mi(y_,"onTransitionStart"),mi(b_,"onTransitionCancel"),mi(Jh,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function vm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],z=E.instance,Q=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){Qo(ut)}c.currentTarget=null,f=z}else for(x=0;x<s.length;x++){if(E=s[x],z=E.instance,Q=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){Qo(ut)}c.currentTarget=null,f=z}}}}function xe(t,n){var a=n[Rr];a===void 0&&(a=n[Rr]=new Set);var s=t+"__bubble";a.has(s)||(Sm(n,t,2,!1),a.add(s))}function _f(t,n,a){var s=0;n&&(s|=4),Sm(a,t,s,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function vf(t){if(!t[Bl]){t[Bl]=!0,W.forEach(function(a){a!=="selectionchange"&&(sv.has(a)||_f(a,!1,t),_f(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,_f("selectionchange",!1,n))}}function Sm(t,n,a,s){switch(jm(n)){case 2:var c=Ov;break;case 8:c=zv;break;default:c=Of}a=c.bind(null,n,a,t),c=void 0,!Fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Sf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=s.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=ha(E),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){s=f=x;continue t}E=E.parentNode}}s=s.return}Th(function(){var Q=f,ut=Pc(a),pt=[];t:{var $=$h.get(t);if($!==void 0){var rt=Zo,Ft=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":rt=$g;break;case"focusin":Ft="focus",rt=Vc;break;case"focusout":Ft="blur",rt=Vc;break;case"beforeblur":case"afterblur":rt=Vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=n_;break;case jh:case Kh:case Qh:rt=kg;break;case Jh:rt=a_;break;case"scroll":case"scrollend":rt=Ig;break;case"wheel":rt=s_;break;case"copy":case"cut":case"paste":rt=Wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=wh;break;case"toggle":case"beforetoggle":rt=l_}var $t=(n&4)!==0,He=!$t&&(t==="scroll"||t==="scrollend"),q=$t?$!==null?$+"Capture":null:$;$t=[];for(var G=Q,j;G!==null;){var dt=G;if(j=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||j===null||q===null||(dt=zs(G,q),dt!=null&&$t.push(mo(G,dt,j))),He)break;G=G.return}0<$t.length&&($=new rt($,Ft,null,a,ut),pt.push({event:$,listeners:$t}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",$&&a!==zc&&(Ft=a.relatedTarget||a.fromElement)&&(ha(Ft)||Ft[Li]))break t;if((rt||$)&&($=ut.window===ut?ut:($=ut.ownerDocument)?$.defaultView||$.parentWindow:window,rt?(Ft=a.relatedTarget||a.toElement,rt=Q,Ft=Ft?ha(Ft):null,Ft!==null&&(He=u(Ft),$t=Ft.tag,Ft!==He||$t!==5&&$t!==27&&$t!==6)&&(Ft=null)):(rt=null,Ft=Q),rt!==Ft)){if($t=Ch,dt="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&($t=wh,dt="onPointerLeave",q="onPointerEnter",G="pointer"),He=rt==null?$:k(rt),j=Ft==null?$:k(Ft),$=new $t(dt,G+"leave",rt,a,ut),$.target=He,$.relatedTarget=j,dt=null,ha(ut)===Q&&($t=new $t(q,G+"enter",Ft,a,ut),$t.target=j,$t.relatedTarget=He,dt=$t),He=dt,rt&&Ft)e:{for($t=ov,q=rt,G=Ft,j=0,dt=q;dt;dt=$t(dt))j++;dt=0;for(var jt=G;jt;jt=$t(jt))dt++;for(;0<j-dt;)q=$t(q),j--;for(;0<dt-j;)G=$t(G),dt--;for(;j--;){if(q===G||G!==null&&q===G.alternate){$t=q;break e}q=$t(q),G=$t(G)}$t=null}else $t=null;rt!==null&&Mm(pt,$,rt,$t,!1),Ft!==null&&He!==null&&Mm(pt,He,Ft,$t,!0)}}t:{if($=Q?k(Q):window,rt=$.nodeName&&$.nodeName.toLowerCase(),rt==="select"||rt==="input"&&$.type==="file")var Re=Fh;else if(Ph($))if(Ih)Re=__;else{Re=x_;var Vt=m_}else rt=$.nodeName,!rt||rt.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Oc(Q.elementType)&&(Re=Fh):Re=g_;if(Re&&(Re=Re(t,Q))){Bh(pt,Re,a,ut);break t}Vt&&Vt(t,$,Q),t==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&gn($,"number",$.value)}switch(Vt=Q?k(Q):window,t){case"focusin":(Ph(Vt)||Vt.contentEditable==="true")&&(Ur=Vt,Zc=Q,Xs=null);break;case"focusout":Xs=Zc=Ur=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Yh(pt,a,ut);break;case"selectionchange":if(S_)break;case"keydown":case"keyup":Yh(pt,a,ut)}var ce;if(kc)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else wr?Oh(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Uh&&a.locale!=="ko"&&(wr||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&wr&&(ce=Ah()):(ma=ut,Ic="value"in ma?ma.value:ma.textContent,wr=!0)),Vt=Fl(Q,_e),0<Vt.length&&(_e=new Dh(_e,t,null,a,ut),pt.push({event:_e,listeners:Vt}),ce?_e.data=ce:(ce=zh(a),ce!==null&&(_e.data=ce)))),(ce=u_?f_(t,a):d_(t,a))&&(_e=Fl(Q,"onBeforeInput"),0<_e.length&&(Vt=new Dh("onBeforeInput","beforeinput",null,a,ut),pt.push({event:Vt,listeners:_e}),Vt.data=ce)),iv(pt,t,Q,a,ut)}vm(pt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&s.unshift(mo(t,c,f)),c=zs(t,n),c!=null&&s.push(mo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function ov(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mm(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var E=a,z=E.alternate,Q=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||Q===null||(z=Q,c?(Q=zs(a,f),Q!=null&&x.unshift(mo(a,Q,z))):c||(Q=zs(a,f),Q!=null&&x.push(mo(a,Q,z)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var lv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function ym(t){return(typeof t=="string"?t:""+t).replace(lv,`
`).replace(cv,"")}function bm(t,n){return n=ym(n),ym(t)===n}function Ie(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||bi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&bi(t,""+s);break;case"className":be(t,"class",s);break;case"tabIndex":be(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":be(t,a,s);break;case"style":bh(t,s,f);break;case"data":if(n!=="object"){be(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=zi);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),le(t,"popover",s);break;case"xlinkActuate":Ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ae(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ae(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ae(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ae(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":le(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bg.get(a)||a,le(t,a,s))}}function Mf(t,n,a,s,c,f){switch(a){case"style":bh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?bi(t,s):(typeof s=="number"||typeof s=="bigint")&&bi(t,""+s);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[un]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):le(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,f,x,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),s&&Ie(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var E=f=x=c=null,z=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":x=ut;break;case"checked":z=ut;break;case"defaultChecked":Q=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ie(t,n,s,ut,a,null)}}We(t,f,E,z,Q,x,c,!1);return;case"select":xe("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:Ie(t,n,c,E,a,null)}n=f,a=x,t.multiple=!!s,n!=null?fn(t,!!s,n,!1):a!=null&&fn(t,!!s,a,!0);return;case"textarea":xe("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ie(t,n,x,E,a,null)}Mn(t,s,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ie(t,n,z,s,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)xe(po[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,Q,s,a,null)}return;default:if(Oc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&Mf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ie(t,n,E,s,a,null))}function uv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,z=null,Q=null,ut=null;for(rt in a){var pt=a[rt];if(a.hasOwnProperty(rt)&&pt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=pt;default:s.hasOwnProperty(rt)||Ie(t,n,rt,null,s,pt)}}for(var $ in s){var rt=s[$];if(pt=a[$],s.hasOwnProperty($)&&(rt!=null||pt!=null))switch($){case"type":f=rt;break;case"name":c=rt;break;case"checked":Q=rt;break;case"defaultChecked":ut=rt;break;case"value":x=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==pt&&Ie(t,n,$,rt,s,pt)}}Ni(t,x,E,z,Q,ut,f,c);return;case"select":rt=x=E=$=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":rt=z;default:s.hasOwnProperty(f)||Ie(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==z&&Ie(t,n,c,f,s,z)}n=E,a=x,s=rt,$!=null?fn(t,!!a,$,!1):!!s!=!!a&&(n!=null?fn(t,!!a,n,!0):fn(t,!!a,a?[]:"",!1));return;case"textarea":rt=$=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ie(t,n,E,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":$=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(t,n,x,c,s,f)}_n(t,$,rt);return;case"option":for(var Ft in a)if($=a[Ft],a.hasOwnProperty(Ft)&&$!=null&&!s.hasOwnProperty(Ft))switch(Ft){case"selected":t.selected=!1;break;default:Ie(t,n,Ft,null,s,$)}for(z in s)if($=s[z],rt=a[z],s.hasOwnProperty(z)&&$!==rt&&($!=null||rt!=null))switch(z){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Ie(t,n,z,$,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)$=a[$t],a.hasOwnProperty($t)&&$!=null&&!s.hasOwnProperty($t)&&Ie(t,n,$t,null,s,$);for(Q in s)if($=s[Q],rt=a[Q],s.hasOwnProperty(Q)&&$!==rt&&($!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Ie(t,n,Q,$,s,rt)}return;default:if(Oc(n)){for(var He in a)$=a[He],a.hasOwnProperty(He)&&$!==void 0&&!s.hasOwnProperty(He)&&Mf(t,n,He,void 0,s,$);for(ut in s)$=s[ut],rt=a[ut],!s.hasOwnProperty(ut)||$===rt||$===void 0&&rt===void 0||Mf(t,n,ut,$,s,rt);return}}for(var q in a)$=a[q],a.hasOwnProperty(q)&&$!=null&&!s.hasOwnProperty(q)&&Ie(t,n,q,null,s,$);for(pt in s)$=s[pt],rt=a[pt],!s.hasOwnProperty(pt)||$===rt||$==null&&rt==null||Ie(t,n,pt,$,s,rt)}function Em(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Em(x)){for(x=0,E=c.responseEnd,s+=1;s<a.length;s++){var z=a[s],Q=z.startTime;if(Q>E)break;var ut=z.transferSize,pt=z.initiatorType;ut&&Em(pt)&&(z=z.responseEnd,x+=ut*(z<E?1:(E-Q)/(z-Q)))}if(--s,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yf=null,bf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function Tm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Am(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ef(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Tf=null;function dv(){var t=window.event;return t&&t.type==="popstate"?t===Tf?!1:(Tf=t,!0):(Tf=null,!1)}var Rm=typeof setTimeout=="function"?setTimeout:void 0,hv=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(t){return Cm.resolve(null).then(t).catch(mv)}:Rm;function mv(t){setTimeout(function(){throw t})}function La(t){return t==="head"}function Dm(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),as(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")xo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,xo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[Ka]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&xo(t.ownerDocument.body);a=c}while(a);as(n)}function wm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Af(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Af(a),Os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xv(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ka])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function gv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function Um(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function Rf(t){return t.data==="$?"||t.data==="$~"}function Cf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _v(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Df=null;function Lm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Nm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Om(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Os(t)}var li=new Map,zm=new Set;function Hl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=Z.d;Z.d={f:vv,r:Sv,D:Mv,C:yv,L:bv,m:Ev,X:Av,S:Tv,M:Rv};function vv(){var t=Qi.f(),n=Ul();return t||n}function Sv(t){var n=T(t);n!==null&&n.tag===5&&n.type==="form"?Jp(n):Qi.r(t)}var es=typeof document>"u"?null:document;function Pm(t,n,a){var s=es;if(s&&typeof n=="string"&&n){var c=qe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),zm.has(c)||(zm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",t),J(n),s.head.appendChild(n)))}}function Mv(t){Qi.D(t),Pm("dns-prefetch",t,null)}function yv(t,n){Qi.C(t,n),Pm("preconnect",t,n)}function bv(t,n,a){Qi.L(t,n,a);var s=es;if(s&&t&&n){var c='link[rel="preload"][as="'+qe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+qe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+qe(a.imageSizes)+'"]')):c+='[href="'+qe(t)+'"]';var f=c;switch(n){case"style":f=ns(t);break;case"script":f=is(t)}li.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(go(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),Tn(n,"link",t),J(n),s.head.appendChild(n)))}}function Ev(t,n){Qi.m(t,n);var a=es;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+qe(s)+'"][href="'+qe(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(t)}if(!li.has(f)&&(t=g({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),Tn(s,"link",t),J(s),a.head.appendChild(s)}}}function Tv(t,n,a){Qi.S(t,n,a);var s=es;if(s&&t){var c=it(s).hoistableStyles,f=ns(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(go(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&wf(t,a);var z=x=s.createElement("link");J(z),Tn(z,"link",t),z._p=new Promise(function(Q,ut){z.onload=Q,z.onerror=ut}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Gl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function Av(t,n){Qi.X(t,n);var a=es;if(a&&t){var s=it(a).hoistableScripts,c=is(t),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(t=g({src:t,async:!0},n),(n=li.get(c))&&Uf(t,n),f=a.createElement("script"),J(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Rv(t,n){Qi.M(t,n);var a=es;if(a&&t){var s=it(a).hoistableScripts,c=is(t),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=li.get(c))&&Uf(t,n),f=a.createElement("script"),J(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Bm(t,n,a,s){var c=(c=et.current)?Hl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=it(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ns(a.href);var f=it(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(go(t)))&&!f._p&&(x.instance=f,x.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||Cv(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=it(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ns(t){return'href="'+qe(t)+'"'}function go(t){return'link[rel="stylesheet"]['+t+"]"}function Fm(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Cv(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),J(n),t.head.appendChild(n))}function is(t){return'[src="'+qe(t)+'"]'}function _o(t){return"script[async]"+t}function Im(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+qe(a.href)+'"]');if(s)return n.instance=s,J(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),J(s),Tn(s,"style",c),Gl(s,a.precedence,t),n.instance=s;case"stylesheet":c=ns(a.href);var f=t.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,J(f),f;s=Fm(a),(c=li.get(c))&&wf(s,c),f=(t.ownerDocument||t).createElement("link"),J(f);var x=f;return x._p=new Promise(function(E,z){x.onload=E,x.onerror=z}),Tn(f,"link",s),n.state.loading|=4,Gl(f,a.precedence,t),n.instance=f;case"script":return f=is(a.src),(c=t.querySelector(_o(f)))?(n.instance=c,J(c),c):(s=a,(c=li.get(f))&&(s=g({},a),Uf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),J(c),Tn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Gl(s,a.precedence,t));return n.instance}function Gl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Uf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Vl=null;function Hm(t,n,a){if(Vl===null){var s=new Map,c=Vl=new Map;c.set(a,s)}else c=Vl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ka]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=s.get(x);E?E.push(f):s.set(x,[f])}}return s}function Gm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Dv(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function wv(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ns(s.href),f=n.querySelector(go(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Xl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,J(f);return}f=n.ownerDocument||n,s=Fm(s),(c=li.get(c))&&wf(s,c),f=f.createElement("link"),J(f);var x=f;x._p=new Promise(function(E,z){x.onload=E,x.onerror=z}),Tn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Xl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Lf=0;function Uv(t,n){return t.stylesheets&&t.count===0&&ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Lf===0&&(Lf=62500*fv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Lf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(Lv,t),kl=null,Xl.call(t))}function Lv(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var s=a.get(null);else{a=new Map,kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Xl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var vo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Nv(t,n,a,s,c,f,x,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Xm(t,n,a,s,c,f,x,E,z,Q,ut,pt){return t=new Nv(t,n,a,x,z,Q,ut,pt,E),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=uu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},pu(f),t}function km(t){return t?(t=Or,t):Or}function qm(t,n,a,s,c,f){c=km(c),s.context===null?s.context=c:s.pendingContext=c,s=Ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ya(t,s,n),a!==null&&(Fn(a,t,n),Ks(a,t,n))}function Wm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Nf(t,n){Wm(t,n),(t=t.alternate)&&Wm(t,n)}function Ym(t){if(t.tag===13||t.tag===31){var n=tr(t,67108864);n!==null&&Fn(n,t,67108864),Nf(t,67108864)}}function Zm(t){if(t.tag===13||t.tag===31){var n=Qn();n=pi(n);var a=tr(t,n);a!==null&&Fn(a,t,n),Nf(t,n)}}var Wl=!0;function Ov(t,n,a,s){var c=P.T;P.T=null;var f=Z.p;try{Z.p=2,Of(t,n,a,s)}finally{Z.p=f,P.T=c}}function zv(t,n,a,s){var c=P.T;P.T=null;var f=Z.p;try{Z.p=8,Of(t,n,a,s)}finally{Z.p=f,P.T=c}}function Of(t,n,a,s){if(Wl){var c=zf(s);if(c===null)Sf(t,n,s,Yl,a),Km(t,s);else if(Bv(c,t,n,a,s))s.stopPropagation();else if(Km(t,s),n&4&&-1<Pv.indexOf(t)){for(;c!==null;){var f=T(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=yt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var z=1<<31-Gt(x);E.entanglements[1]|=z,x&=~z}Ri(f),(we&6)===0&&(Dl=b()+500,ho(0))}}break;case 31:case 13:E=tr(f,2),E!==null&&Fn(E,f,2),Ul(),Nf(f,2)}if(f=zf(s),f===null&&Sf(t,n,s,Yl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Sf(t,n,s,null,a)}}function zf(t){return t=Pc(t),Pf(t)}var Yl=null;function Pf(t){if(Yl=null,t=ha(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yl=t,null}function jm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case ht:return 2;case vt:return 8;case ot:case qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Bf=!1,Na=null,Oa=null,za=null,So=new Map,Mo=new Map,Pa=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Km(t,n){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function yo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=T(n),n!==null&&Ym(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Bv(t,n,a,s,c){switch(n){case"focusin":return Na=yo(Na,t,n,a,s,c),!0;case"dragenter":return Oa=yo(Oa,t,n,a,s,c),!0;case"mouseover":return za=yo(za,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,yo(So.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,yo(Mo.get(f)||null,t,n,a,s,c)),!0}return!1}function Qm(t){var n=ha(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){Zm(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){Zm(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=zf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);zc=s,a.target.dispatchEvent(s),zc=null}else return n=T(a),n!==null&&Ym(n),t.blockedOn=a,!1;n.shift()}return!0}function Jm(t,n,a){Zl(t)&&a.delete(n)}function Fv(){Bf=!1,Na!==null&&Zl(Na)&&(Na=null),Oa!==null&&Zl(Oa)&&(Oa=null),za!==null&&Zl(za)&&(za=null),So.forEach(Jm),Mo.forEach(Jm)}function jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Fv)))}var Kl=null;function $m(t){Kl!==t&&(Kl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Kl===t&&(Kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Pf(s||a)===null)continue;break}var f=T(a);f!==null&&(t.splice(n,3),n-=3,Ou(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function as(t){function n(z){return jl(z,t)}Na!==null&&jl(Na,t),Oa!==null&&jl(Oa,t),za!==null&&jl(za,t),So.forEach(n),Mo.forEach(n);for(var a=0;a<Pa.length;a++){var s=Pa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Qm(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[un]||null;if(typeof f=="function")x||$m(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[un]||null)E=x.formAction;else if(Pf(c)!==null)continue}else E=x.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),$m(a)}}}function tx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Ff(t){this._internalRoot=t}Ql.prototype.render=Ff.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();qm(a,s,t,n,null,null)},Ql.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;qm(t.current,2,null,t,null,null),Ul(),n[Li]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ls();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&Qm(t)}};var ex=e.version;if(ex!=="19.2.1")throw Error(r(527,ex,"19.2.1"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Iv={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{St=Jl.inject(Iv),bt=Jl}catch{}}return Eo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=l0,f=c0,x=u0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Xm(t,1,!1,null,null,a,s,null,c,f,x,tx),t[Li]=n.current,vf(t),new Ff(n)},Eo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=l0,x=c0,E=u0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Xm(t,1,!0,n,a??null,s,c,z,f,x,E,tx),n.context=km(null),a=n.current,s=Qn(),s=pi(s),c=Ma(s),c.callback=null,ya(a,c,s),a=s,n.current.lanes=a,An(n,a),Ri(n),t[Li]=n.current,vf(t),new Ql(n)},Eo.version="19.2.1",Eo}var fx;function jv(){if(fx)return Gf.exports;fx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gf.exports=Zv(),Gf.exports}var Kv=jv();function Qv({onStart:o}){return Hn.jsxs("div",{className:"container",children:[Hn.jsx("h1",{children:"ch//ce"}),Hn.jsx("p",{children:"blah blah blah"}),Hn.jsx("button",{className:"btn",onClick:o,children:"start"})]})}const fh="181",Jv=0,dx=1,$v=2,og=1,tS=2,aa=3,Ya=0,Gn=1,ra=2,la=0,vs=1,hx=2,px=3,mx=4,eS=5,Sr=100,nS=101,iS=102,aS=103,rS=104,sS=200,oS=201,lS=202,cS=203,Md=204,yd=205,uS=206,fS=207,dS=208,hS=209,pS=210,mS=211,xS=212,gS=213,_S=214,bd=0,Ed=1,Td=2,Ms=3,Ad=4,Rd=5,Cd=6,Dd=7,lg=0,vS=1,SS=2,Wa=0,MS=1,yS=2,bS=3,ES=4,TS=5,AS=6,RS=7,cg=300,ys=301,bs=302,wd=303,Ud=304,Cc=306,Ld=1e3,sa=1001,Nd=1002,ti=1003,CS=1004,$l=1005,hi=1006,qf=1007,yr=1008,ua=1009,ug=1010,fg=1011,No=1012,dh=1013,Tr=1014,oa=1015,As=1016,hh=1017,ph=1018,Oo=1020,dg=35902,hg=35899,pg=1021,mg=1022,yi=1023,zo=1026,Po=1027,xg=1028,mh=1029,xh=1030,gh=1031,_h=1033,Sc=33776,Mc=33777,yc=33778,bc=33779,Od=35840,zd=35841,Pd=35842,Bd=35843,Fd=36196,Id=37492,Hd=37496,Gd=37808,Vd=37809,Xd=37810,kd=37811,qd=37812,Wd=37813,Yd=37814,Zd=37815,jd=37816,Kd=37817,Qd=37818,Jd=37819,$d=37820,th=37821,eh=36492,nh=36494,ih=36495,ah=36283,rh=36284,sh=36285,oh=36286,DS=3200,wS=3201,gg=0,US=1,ka="",fi="srgb",Es="srgb-linear",Tc="linear",Ge="srgb",rs=7680,xx=519,LS=512,NS=513,OS=514,_g=515,zS=516,PS=517,BS=518,FS=519,gx=35044,_x="300 es",Di=2e3,Ac=2001;function vg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IS(){const o=Rc("canvas");return o.style.display="block",o}const vx={};function Sx(...o){const e="THREE."+o.shift();console.log(e,...o)}function se(...o){const e="THREE."+o.shift();console.warn(e,...o)}function en(...o){const e="THREE."+o.shift();console.error(e,...o)}function Bo(...o){const e=o.join(" ");e in vx||(vx[e]=!0,se(...o))}function HS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=Math.PI/180,lh=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function GS(o,e){return(o%e+e)%e}function Yf(o,e,i){return(1-i)*o+i*e}function To(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,i=0){Pe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Io{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,p){let m=r[l+0],h=r[l+1],v=r[l+2],g=r[l+3],S=u[d+0],y=u[d+1],A=u[d+2],R=u[d+3];if(p<=0){e[i+0]=m,e[i+1]=h,e[i+2]=v,e[i+3]=g;return}if(p>=1){e[i+0]=S,e[i+1]=y,e[i+2]=A,e[i+3]=R;return}if(g!==R||m!==S||h!==y||v!==A){let M=m*S+h*y+v*A+g*R;M<0&&(S=-S,y=-y,A=-A,R=-R,M=-M);let _=1-p;if(M<.9995){const O=Math.acos(M),U=Math.sin(O);_=Math.sin(_*O)/U,p=Math.sin(p*O)/U,m=m*_+S*p,h=h*_+y*p,v=v*_+A*p,g=g*_+R*p}else{m=m*_+S*p,h=h*_+y*p,v=v*_+A*p,g=g*_+R*p;const O=1/Math.sqrt(m*m+h*h+v*v+g*g);m*=O,h*=O,v*=O,g*=O}}e[i]=m,e[i+1]=h,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const p=r[l],m=r[l+1],h=r[l+2],v=r[l+3],g=u[d],S=u[d+1],y=u[d+2],A=u[d+3];return e[i]=p*A+v*g+m*y-h*S,e[i+1]=m*A+v*S+h*g-p*y,e[i+2]=h*A+v*y+p*S-m*g,e[i+3]=v*A-p*g-m*S-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),v=p(l/2),g=p(u/2),S=m(r/2),y=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*v*g+h*y*A,this._y=h*y*g-S*v*A,this._z=h*v*A+S*y*g,this._w=h*v*g-S*y*A;break;case"YXZ":this._x=S*v*g+h*y*A,this._y=h*y*g-S*v*A,this._z=h*v*A-S*y*g,this._w=h*v*g+S*y*A;break;case"ZXY":this._x=S*v*g-h*y*A,this._y=h*y*g+S*v*A,this._z=h*v*A+S*y*g,this._w=h*v*g-S*y*A;break;case"ZYX":this._x=S*v*g-h*y*A,this._y=h*y*g+S*v*A,this._z=h*v*A-S*y*g,this._w=h*v*g+S*y*A;break;case"YZX":this._x=S*v*g+h*y*A,this._y=h*y*g+S*v*A,this._z=h*v*A-S*y*g,this._w=h*v*g-S*y*A;break;case"XZY":this._x=S*v*g-h*y*A,this._y=h*y*g-S*v*A,this._z=h*v*A+S*y*g,this._w=h*v*g+S*y*A;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],g=i[10],S=r+p+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(v-m)*y,this._y=(u-h)*y,this._z=(d-l)*y}else if(r>p&&r>g){const y=2*Math.sqrt(1+r-p-g);this._w=(v-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+h)/y}else if(p>g){const y=2*Math.sqrt(1+p-r-g);this._w=(u-h)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+g-r-p);this._w=(d-l)/y,this._x=(u+h)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=r*v+d*p+l*h-u*m,this._y=l*v+d*m+u*p-r*h,this._z=u*v+d*h+r*m-l*p,this._w=d*v-r*p-l*m-u*h,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Mx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Mx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),v=2*(p*i-u*l),g=2*(u*r-d*i);return this.x=i+m*h+d*g-p*v,this.y=r+m*v+p*h-u*g,this.z=l+m*g+u*v-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zf.copy(this).projectOnVector(e),this.sub(Zf)}reflect(e){return this.sub(Zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new st,Mx=new Io;class ue{constructor(e,i,r,l,u,d,p,m,h){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,m,h)}set(e,i,r,l,u,d,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],v=r[4],g=r[7],S=r[2],y=r[5],A=r[8],R=l[0],M=l[3],_=l[6],O=l[1],U=l[4],F=l[7],X=l[2],N=l[5],B=l[8];return u[0]=d*R+p*O+m*X,u[3]=d*M+p*U+m*N,u[6]=d*_+p*F+m*B,u[1]=h*R+v*O+g*X,u[4]=h*M+v*U+g*N,u[7]=h*_+v*F+g*B,u[2]=S*R+y*O+A*X,u[5]=S*M+y*U+A*N,u[8]=S*_+y*F+A*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return i*d*v-i*p*h-r*u*v+r*p*m+l*u*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],g=v*d-p*h,S=p*m-v*u,y=h*u-d*m,A=i*g+r*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=g*R,e[1]=(l*h-v*r)*R,e[2]=(p*r-l*d)*R,e[3]=S*R,e[4]=(v*i-l*m)*R,e[5]=(l*u-p*i)*R,e[6]=y*R,e[7]=(r*m-h*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(jf.makeScale(e,i)),this}rotate(e){return this.premultiply(jf.makeRotation(-e)),this}translate(e,i){return this.premultiply(jf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jf=new ue,yx=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bx=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VS(){const o={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ge&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=Ss(l.r),l.g=Ss(l.g),l.b=Ss(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Tc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Es]:{primaries:e,whitePoint:r,transfer:Tc,toXYZ:yx,fromXYZ:bx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Ge,toXYZ:yx,fromXYZ:bx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const De=VS();function ca(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ss(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class XS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ss===void 0&&(ss=Rc("canvas")),ss.width=e.width,ss.height=e.height;const l=ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Rc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ca(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ca(i[r]/255)*255):i[r]=ca(i[r]);return{data:i,width:e.width,height:e.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kS=0;class vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(Kf(l[d].image)):u.push(Kf(l[d]))}else u=Kf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?XS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let qS=0;const Qf=new st;class Ln extends Rs{constructor(e=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,r=sa,l=sa,u=hi,d=yr,p=yi,m=ua,h=Ln.DEFAULT_ANISOTROPY,v=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Fo(),this.name="",this.source=new vh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qf).x}get height(){return this.source.getSize(Qf).y}get depth(){return this.source.getSize(Qf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case sa:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case sa:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=cg;Ln.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,h=m[0],v=m[4],g=m[8],S=m[1],y=m[5],A=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-R)<.01&&Math.abs(A-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+R)<.1&&Math.abs(A+M)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,F=(y+1)/2,X=(_+1)/2,N=(v+S)/4,B=(g+R)/4,nt=(A+M)/4;return U>F&&U>X?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=N/r,u=B/r):F>X?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=N/l,u=nt/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=B/u,l=nt/u),this.set(r,l,u,i),this}let O=Math.sqrt((M-A)*(M-A)+(g-R)*(g-R)+(S-v)*(S-v));return Math.abs(O)<.001&&(O=1),this.x=(M-A)/O,this.y=(g-R)/O,this.z=(S-v)/O,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WS extends Rs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Ln(l);this.textures=[];const d=r.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends WS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Sg extends Ln{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YS extends Ln{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(_i.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,_i):_i.fromBufferAttribute(u,d),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tc.copy(r.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),ec.subVectors(this.max,Ao),os.subVectors(e.a,Ao),ls.subVectors(e.b,Ao),cs.subVectors(e.c,Ao),Fa.subVectors(ls,os),Ia.subVectors(cs,ls),hr.subVectors(os,cs);let i=[0,-Fa.z,Fa.y,0,-Ia.z,Ia.y,0,-hr.z,hr.y,Fa.z,0,-Fa.x,Ia.z,0,-Ia.x,hr.z,0,-hr.x,-Fa.y,Fa.x,0,-Ia.y,Ia.x,0,-hr.y,hr.x,0];return!Jf(i,os,ls,cs,ec)||(i=[1,0,0,0,1,0,0,0,1],!Jf(i,os,ls,cs,ec))?!1:(nc.crossVectors(Fa,Ia),i=[nc.x,nc.y,nc.z],Jf(i,os,ls,cs,ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new st,new st,new st,new st,new st,new st,new st,new st],_i=new st,tc=new Ho,os=new st,ls=new st,cs=new st,Fa=new st,Ia=new st,hr=new st,Ao=new st,ec=new st,nc=new st,pr=new st;function Jf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){pr.fromArray(o,u);const p=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=e.dot(pr),h=i.dot(pr),v=r.dot(pr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const ZS=new Ho,Ro=new st,$f=new st;class Sh{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ZS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add($f)),this.expandByPoint(Ro.copy(e.center).sub($f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $i=new st,td=new st,ic=new st,Ha=new st,ed=new st,ac=new st,nd=new st;class jS{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){td.copy(e).add(i).multiplyScalar(.5),ic.copy(i).sub(e).normalize(),Ha.copy(this.origin).sub(td);const u=e.distanceTo(i)*.5,d=-this.direction.dot(ic),p=Ha.dot(this.direction),m=-Ha.dot(ic),h=Ha.lengthSq(),v=Math.abs(1-d*d);let g,S,y,A;if(v>0)if(g=d*m-p,S=d*p-m,A=u*v,g>=0)if(S>=-A)if(S<=A){const R=1/v;g*=R,S*=R,y=g*(g+d*S+2*p)+S*(d*g+S+2*m)+h}else S=u,g=Math.max(0,-(d*S+p)),y=-g*g+S*(S+2*m)+h;else S=-u,g=Math.max(0,-(d*S+p)),y=-g*g+S*(S+2*m)+h;else S<=-A?(g=Math.max(0,-(-d*u+p)),S=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+h):S<=A?(g=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+h):(g=Math.max(0,-(d*u+p)),S=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+h);else S=d>0?-u:u,g=Math.max(0,-(d*S+p)),y=-g*g+S*(S+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(td).addScaledVector(ic,S),y}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return h>=0?(r=(e.min.x-S.x)*h,l=(e.max.x-S.x)*h):(r=(e.max.x-S.x)*h,l=(e.min.x-S.x)*h),v>=0?(u=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(p=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(p=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,r,l,u){ed.subVectors(i,e),ac.subVectors(r,e),nd.crossVectors(ed,ac);let d=this.direction.dot(nd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Ha.subVectors(this.origin,e);const m=p*this.direction.dot(ac.crossVectors(Ha,ac));if(m<0)return null;const h=p*this.direction.dot(ed.cross(Ha));if(h<0||m+h>d)return null;const v=-p*Ha.dot(nd);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,i,r,l,u,d,p,m,h,v,g,S,y,A,R,M){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,m,h,v,g,S,y,A,R,M)}set(e,i,r,l,u,d,p,m,h,v,g,S,y,A,R,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=p,_[13]=m,_[2]=h,_[6]=v,_[10]=g,_[14]=S,_[3]=y,_[7]=A,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/us.setFromMatrixColumn(e,0).length(),u=1/us.setFromMatrixColumn(e,1).length(),d=1/us.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=d*v,y=d*g,A=p*v,R=p*g;i[0]=m*v,i[4]=-m*g,i[8]=h,i[1]=y+A*h,i[5]=S-R*h,i[9]=-p*m,i[2]=R-S*h,i[6]=A+y*h,i[10]=d*m}else if(e.order==="YXZ"){const S=m*v,y=m*g,A=h*v,R=h*g;i[0]=S+R*p,i[4]=A*p-y,i[8]=d*h,i[1]=d*g,i[5]=d*v,i[9]=-p,i[2]=y*p-A,i[6]=R+S*p,i[10]=d*m}else if(e.order==="ZXY"){const S=m*v,y=m*g,A=h*v,R=h*g;i[0]=S-R*p,i[4]=-d*g,i[8]=A+y*p,i[1]=y+A*p,i[5]=d*v,i[9]=R-S*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const S=d*v,y=d*g,A=p*v,R=p*g;i[0]=m*v,i[4]=A*h-y,i[8]=S*h+R,i[1]=m*g,i[5]=R*h+S,i[9]=y*h-A,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,y=d*h,A=p*m,R=p*h;i[0]=m*v,i[4]=R-S*g,i[8]=A*g+y,i[1]=g,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=y*g+A,i[10]=S-R*g}else if(e.order==="XZY"){const S=d*m,y=d*h,A=p*m,R=p*h;i[0]=m*v,i[4]=-g,i[8]=h*v,i[1]=S*g+R,i[5]=d*v,i[9]=y*g-A,i[2]=A*g-y,i[6]=p*v,i[10]=R*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KS,e,QS)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ga.crossVectors(r,Jn),Ga.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ga.crossVectors(r,Jn)),Ga.normalize(),rc.crossVectors(Jn,Ga),l[0]=Ga.x,l[4]=rc.x,l[8]=Jn.x,l[1]=Ga.y,l[5]=rc.y,l[9]=Jn.y,l[2]=Ga.z,l[6]=rc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],v=r[1],g=r[5],S=r[9],y=r[13],A=r[2],R=r[6],M=r[10],_=r[14],O=r[3],U=r[7],F=r[11],X=r[15],N=l[0],B=l[4],nt=l[8],D=l[12],C=l[1],V=l[5],tt=l[9],lt=l[13],mt=l[2],ft=l[6],P=l[10],Z=l[14],Y=l[3],gt=l[7],_t=l[11],L=l[15];return u[0]=d*N+p*C+m*mt+h*Y,u[4]=d*B+p*V+m*ft+h*gt,u[8]=d*nt+p*tt+m*P+h*_t,u[12]=d*D+p*lt+m*Z+h*L,u[1]=v*N+g*C+S*mt+y*Y,u[5]=v*B+g*V+S*ft+y*gt,u[9]=v*nt+g*tt+S*P+y*_t,u[13]=v*D+g*lt+S*Z+y*L,u[2]=A*N+R*C+M*mt+_*Y,u[6]=A*B+R*V+M*ft+_*gt,u[10]=A*nt+R*tt+M*P+_*_t,u[14]=A*D+R*lt+M*Z+_*L,u[3]=O*N+U*C+F*mt+X*Y,u[7]=O*B+U*V+F*ft+X*gt,u[11]=O*nt+U*tt+F*P+X*_t,u[15]=O*D+U*lt+F*Z+X*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],p=e[5],m=e[9],h=e[13],v=e[2],g=e[6],S=e[10],y=e[14],A=e[3],R=e[7],M=e[11],_=e[15];return A*(+u*m*g-l*h*g-u*p*S+r*h*S+l*p*y-r*m*y)+R*(+i*m*y-i*h*S+u*d*S-l*d*y+l*h*v-u*m*v)+M*(+i*h*g-i*p*y-u*d*g+r*d*y+u*p*v-r*h*v)+_*(-l*p*v-i*m*g+i*p*S+l*d*g-r*d*S+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],g=e[9],S=e[10],y=e[11],A=e[12],R=e[13],M=e[14],_=e[15],O=g*M*h-R*S*h+R*m*y-p*M*y-g*m*_+p*S*_,U=A*S*h-v*M*h-A*m*y+d*M*y+v*m*_-d*S*_,F=v*R*h-A*g*h+A*p*y-d*R*y-v*p*_+d*g*_,X=A*g*m-v*R*m-A*p*S+d*R*S+v*p*M-d*g*M,N=i*O+r*U+l*F+u*X;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=O*B,e[1]=(R*S*u-g*M*u-R*l*y+r*M*y+g*l*_-r*S*_)*B,e[2]=(p*M*u-R*m*u+R*l*h-r*M*h-p*l*_+r*m*_)*B,e[3]=(g*m*u-p*S*u-g*l*h+r*S*h+p*l*y-r*m*y)*B,e[4]=U*B,e[5]=(v*M*u-A*S*u+A*l*y-i*M*y-v*l*_+i*S*_)*B,e[6]=(A*m*u-d*M*u-A*l*h+i*M*h+d*l*_-i*m*_)*B,e[7]=(d*S*u-v*m*u+v*l*h-i*S*h-d*l*y+i*m*y)*B,e[8]=F*B,e[9]=(A*g*u-v*R*u-A*r*y+i*R*y+v*r*_-i*g*_)*B,e[10]=(d*R*u-A*p*u+A*r*h-i*R*h-d*r*_+i*p*_)*B,e[11]=(v*p*u-d*g*u-v*r*h+i*g*h+d*r*y-i*p*y)*B,e[12]=X*B,e[13]=(v*R*l-A*g*l+A*r*S-i*R*S-v*r*M+i*g*M)*B,e[14]=(A*p*l-d*R*l-A*r*m+i*R*m+d*r*M-i*p*M)*B,e[15]=(d*g*l-v*p*l+v*r*m-i*g*m-d*r*S+i*p*S)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,p=e.y,m=e.z,h=u*d,v=u*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+r,v*m-l*d,0,h*m-l*p,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,v=d+d,g=p+p,S=u*h,y=u*v,A=u*g,R=d*v,M=d*g,_=p*g,O=m*h,U=m*v,F=m*g,X=r.x,N=r.y,B=r.z;return l[0]=(1-(R+_))*X,l[1]=(y+F)*X,l[2]=(A-U)*X,l[3]=0,l[4]=(y-F)*N,l[5]=(1-(S+_))*N,l[6]=(M+O)*N,l[7]=0,l[8]=(A+U)*B,l[9]=(M-O)*B,l[10]=(1-(S+R))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),p=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],vi.copy(this);const h=1/u,v=1/d,g=1/p;return vi.elements[0]*=h,vi.elements[1]*=h,vi.elements[2]*=h,vi.elements[4]*=v,vi.elements[5]*=v,vi.elements[6]*=v,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,i.setFromRotationMatrix(vi),r.x=u,r.y=d,r.z=p,this}makePerspective(e,i,r,l,u,d,p=Di,m=!1){const h=this.elements,v=2*u/(i-e),g=2*u/(r-l),S=(i+e)/(i-e),y=(r+l)/(r-l);let A,R;if(m)A=u/(d-u),R=d*u/(d-u);else if(p===Di)A=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(p===Ac)A=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=S,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,u,d,p=Di,m=!1){const h=this.elements,v=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),y=-(r+l)/(r-l);let A,R;if(m)A=1/(d-u),R=d/(d-u);else if(p===Di)A=-2/(d-u),R=-(d+u)/(d-u);else if(p===Ac)A=-1/(d-u),R=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=S,h[1]=0,h[5]=g,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=A,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const us=new st,vi=new hn,KS=new st(0,0,0),QS=new st(1,1,1),Ga=new st,rc=new st,Jn=new st,Ex=new hn,Tx=new Io;class Ui{constructor(e=0,i=0,r=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Ex.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ex,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Tx.setFromEuler(this),this.setFromQuaternion(Tx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JS=0;const Ax=new st,fs=new Io,ta=new hn,sc=new st,Co=new st,$S=new st,tM=new Io,Rx=new st(1,0,0),Cx=new st(0,1,0),Dx=new st(0,0,1),wx={type:"added"},eM={type:"removed"},ds={type:"childadded",child:null},id={type:"childremoved",child:null};class Vn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new st,i=new Ui,r=new Io,l=new st(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new ue}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Rx,e)}rotateY(e){return this.rotateOnAxis(Cx,e)}rotateZ(e){return this.rotateOnAxis(Dx,e)}translateOnAxis(e,i){return Ax.copy(e).applyQuaternion(this.quaternion),this.position.add(Ax.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Rx,e)}translateY(e){return this.translateOnAxis(Cx,e)}translateZ(e){return this.translateOnAxis(Dx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?sc.copy(e):sc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Co,sc,this.up):ta.lookAt(sc,Co,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(ta),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(en("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wx),ds.child=e,this.dispatchEvent(ds),ds.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eM),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wx),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,$S),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,tM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const g=m[h];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),v=d(e.images),g=d(e.shapes),S=d(e.skeletons),y=d(e.animations),A=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Vn.DEFAULT_UP=new st(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new st,ea=new st,ad=new st,na=new st,hs=new st,ps=new st,Ux=new st,rd=new st,sd=new st,od=new st,ld=new nn,cd=new nn,ud=new nn;class Mi{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Si.subVectors(l,i),ea.subVectors(r,i),ad.subVectors(e,i);const d=Si.dot(Si),p=Si.dot(ea),m=Si.dot(ad),h=ea.dot(ea),v=ea.dot(ad),g=d*h-p*p;if(g===0)return u.set(0,0,0),null;const S=1/g,y=(h*m-p*v)*S,A=(d*v-p*m)*S;return u.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,r,l,u,d,p,m){return this.getBarycoord(e,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(d,na.y),m.addScaledVector(p,na.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,i),cd.fromBufferAttribute(e,r),ud.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(ld,u.x),d.addScaledVector(cd,u.y),d.addScaledVector(ud,u.z),d}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),ea.subVectors(e,i),Si.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),Si.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,p;hs.subVectors(l,r),ps.subVectors(u,r),rd.subVectors(e,r);const m=hs.dot(rd),h=ps.dot(rd);if(m<=0&&h<=0)return i.copy(r);sd.subVectors(e,l);const v=hs.dot(sd),g=ps.dot(sd);if(v>=0&&g<=v)return i.copy(l);const S=m*g-v*h;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(hs,d);od.subVectors(e,u);const y=hs.dot(od),A=ps.dot(od);if(A>=0&&y<=A)return i.copy(u);const R=y*h-m*A;if(R<=0&&h>=0&&A<=0)return p=h/(h-A),i.copy(r).addScaledVector(ps,p);const M=v*A-y*g;if(M<=0&&g-v>=0&&y-A>=0)return Ux.subVectors(u,l),p=(g-v)/(g-v+(y-A)),i.copy(l).addScaledVector(Ux,p);const _=1/(M+R+S);return d=R*_,p=S*_,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},oc={h:0,s:0,l:0};function fd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ue{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=De.workingColorSpace){if(e=GS(e,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=fd(d,u,e+1/3),this.g=fd(d,u,e),this.b=fd(d,u,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&se("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:se("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=yg[e.toLowerCase()];return r!==void 0?this.setHex(r,i):se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return De.workingToColorSpace(Dn.copy(this),e),Math.round(ye(Dn.r*255,0,255))*65536+Math.round(ye(Dn.g*255,0,255))*256+Math.round(ye(Dn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,d=Math.max(r,l,u),p=Math.min(r,l,u);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const g=d-p;switch(h=v<=.5?g/(d+p):g/(2-d-p),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=fi){De.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Va),this.setHSL(Va.h+e,Va.s+i,Va.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Va),e.getHSL(oc);const r=Yf(Va.h,oc.h,i),l=Yf(Va.s,oc.s,i),u=Yf(Va.l,oc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ue;Ue.NAMES=yg;let nM=0;class Go extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=vs,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=yd,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==Ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Md&&(r.blendSrc=this.blendSrc),this.blendDst!==yd&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bg extends Go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new st,lc=new Pe;let iM=0;class wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=gx,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(e),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gx&&(e.usage=this.usage),e}}class Eg extends wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Tg extends wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Er extends wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let aM=0;const ci=new hn,dd=new Vn,ms=new st,$n=new Ho,Do=new Ho,Sn=new st;class Za extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vg(e)?Tg:Eg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Er(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Do.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors($n.min,Do.min),$n.expandByPoint(Sn),Sn.addVectors($n.max,Do.max),$n.expandByPoint(Sn)):($n.expandByPoint(Do.min),$n.expandByPoint(Do.max))}$n.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Sn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)Sn.fromBufferAttribute(p,h),m&&(ms.fromBufferAttribute(e,h),Sn.add(ms)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let nt=0;nt<r.count;nt++)p[nt]=new st,m[nt]=new st;const h=new st,v=new st,g=new st,S=new Pe,y=new Pe,A=new Pe,R=new st,M=new st;function _(nt,D,C){h.fromBufferAttribute(r,nt),v.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),S.fromBufferAttribute(u,nt),y.fromBufferAttribute(u,D),A.fromBufferAttribute(u,C),v.sub(h),g.sub(h),y.sub(S),A.sub(S);const V=1/(y.x*A.y-A.x*y.y);isFinite(V)&&(R.copy(v).multiplyScalar(A.y).addScaledVector(g,-y.y).multiplyScalar(V),M.copy(g).multiplyScalar(y.x).addScaledVector(v,-A.x).multiplyScalar(V),p[nt].add(R),p[D].add(R),p[C].add(R),m[nt].add(M),m[D].add(M),m[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let nt=0,D=O.length;nt<D;++nt){const C=O[nt],V=C.start,tt=C.count;for(let lt=V,mt=V+tt;lt<mt;lt+=3)_(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const U=new st,F=new st,X=new st,N=new st;function B(nt){X.fromBufferAttribute(l,nt),N.copy(X);const D=p[nt];U.copy(D),U.sub(X.multiplyScalar(X.dot(D))).normalize(),F.crossVectors(N,D);const V=F.dot(m[nt])<0?-1:1;d.setXYZW(nt,U.x,U.y,U.z,V)}for(let nt=0,D=O.length;nt<D;++nt){const C=O[nt],V=C.start,tt=C.count;for(let lt=V,mt=V+tt;lt<mt;lt+=3)B(e.getX(lt+0)),B(e.getX(lt+1)),B(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new st,u=new st,d=new st,p=new st,m=new st,h=new st,v=new st,g=new st;if(e)for(let S=0,y=e.count;S<y;S+=3){const A=e.getX(S+0),R=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,M),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),h.fromBufferAttribute(r,M),p.add(v),m.add(v),h.add(v),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,h.x,h.y,h.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,g=p.normalized,S=new h.constructor(m.length*v);let y=0,A=0;for(let R=0,M=m.length;R<M;R++){p.isInterleavedBufferAttribute?y=m[R]*p.data.stride+p.offset:y=m[R]*v;for(let _=0;_<v;_++)S[A++]=h[y++]}return new wi(S,v,g)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Za,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let v=0,g=h.length;v<g;v++){const S=h[v],y=e(S,r);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let g=0,S=h.length;g<S;g++){const y=h[g];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const u=e.morphAttributes;for(const h in u){const v=[],g=u[h];for(let S=0,y=g.length;S<y;S++)v.push(g[S].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,v=d.length;h<v;h++){const g=d[h];this.addGroup(g.start,g.count,g.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lx=new hn,mr=new jS,cc=new Sh,Nx=new st,uc=new st,fc=new st,dc=new st,hd=new st,hc=new st,Ox=new st,pc=new st;class fa extends Vn{constructor(e=new Za,i=new bg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){hc.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const v=p[m],g=u[m];v!==0&&(hd.fromBufferAttribute(g,e),d?hc.addScaledVector(hd,v):hc.addScaledVector(hd.sub(i),v))}i.add(hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(u),mr.copy(e.ray).recast(e.near),!(cc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(cc,Nx)===null||mr.origin.distanceToSquared(Nx)>(e.far-e.near)**2))&&(Lx.copy(u).invert(),mr.copy(e.ray).applyMatrix4(Lx),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,mr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,S=u.groups,y=u.drawRange;if(p!==null)if(Array.isArray(d))for(let A=0,R=S.length;A<R;A++){const M=S[A],_=d[M.materialIndex],O=Math.max(M.start,y.start),U=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let F=O,X=U;F<X;F+=3){const N=p.getX(F),B=p.getX(F+1),nt=p.getX(F+2);l=mc(this,_,e,r,h,v,g,N,B,nt),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let M=A,_=R;M<_;M+=3){const O=p.getX(M),U=p.getX(M+1),F=p.getX(M+2);l=mc(this,d,e,r,h,v,g,O,U,F),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,R=S.length;A<R;A++){const M=S[A],_=d[M.materialIndex],O=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let F=O,X=U;F<X;F+=3){const N=F,B=F+1,nt=F+2;l=mc(this,_,e,r,h,v,g,N,B,nt),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=A,_=R;M<_;M+=3){const O=M,U=M+1,F=M+2;l=mc(this,d,e,r,h,v,g,O,U,F),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function rM(o,e,i,r,l,u,d,p){let m;if(e.side===Gn?m=r.intersectTriangle(d,u,l,!0,p):m=r.intersectTriangle(l,u,d,e.side===Ya,p),m===null)return null;pc.copy(p),pc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(pc);return h<i.near||h>i.far?null:{distance:h,point:pc.clone(),object:o}}function mc(o,e,i,r,l,u,d,p,m,h){o.getVertexPosition(p,uc),o.getVertexPosition(m,fc),o.getVertexPosition(h,dc);const v=rM(o,e,i,r,uc,fc,dc,Ox);if(v){const g=new st;Mi.getBarycoord(Ox,uc,fc,dc,g),l&&(v.uv=Mi.getInterpolatedAttribute(l,p,m,h,g,new Pe)),u&&(v.uv1=Mi.getInterpolatedAttribute(u,p,m,h,g,new Pe)),d&&(v.normal=Mi.getInterpolatedAttribute(d,p,m,h,g,new st),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:p,b:m,c:h,normal:new st,materialIndex:0};Mi.getNormal(uc,fc,dc,S.normal),v.face=S,v.barycoord=g}return v}class Cs extends Za{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],v=[],g=[];let S=0,y=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Er(h,3)),this.setAttribute("normal",new Er(v,3)),this.setAttribute("uv",new Er(g,2));function A(R,M,_,O,U,F,X,N,B,nt,D){const C=F/B,V=X/nt,tt=F/2,lt=X/2,mt=N/2,ft=B+1,P=nt+1;let Z=0,Y=0;const gt=new st;for(let _t=0;_t<P;_t++){const L=_t*V-lt;for(let at=0;at<ft;at++){const Mt=at*C-tt;gt[R]=Mt*O,gt[M]=L*U,gt[_]=mt,h.push(gt.x,gt.y,gt.z),gt[R]=0,gt[M]=0,gt[_]=N>0?1:-1,v.push(gt.x,gt.y,gt.z),g.push(at/B),g.push(1-_t/nt),Z+=1}}for(let _t=0;_t<nt;_t++)for(let L=0;L<B;L++){const at=S+L+ft*_t,Mt=S+L+ft*(_t+1),Et=S+(L+1)+ft*(_t+1),Ot=S+(L+1)+ft*_t;m.push(at,Mt,Ot),m.push(Mt,Et,Ot),Y+=6}p.addGroup(y,Y,D),y+=Y,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function sM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Ag(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const oM={clone:Ts,merge:Un};var lM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends Go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=sM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Rg extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new st,zx=new Pe,Px=new Pe;class di extends Rg{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(Wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z)}getViewSize(e,i){return this.getViewBounds(e,zx,Px),i.subVectors(Px,zx)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Wf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,gs=1;class uM extends Vn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(xs,gs,e,i);l.layers=this.layers,this.add(l);const u=new di(xs,gs,e,i);u.layers=this.layers,this.add(u);const d=new di(xs,gs,e,i);d.layers=this.layers,this.add(d);const p=new di(xs,gs,e,i);p.layers=this.layers,this.add(p);const m=new di(xs,gs,e,i);m.layers=this.layers,this.add(m);const h=new di(xs,gs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(e===Di)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ac)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,p),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,h),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,S,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Cg extends Ln{constructor(e=[],i=ys,r,l,u,d,p,m,h,v){super(e,i,r,l,u,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends Ar{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Cg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Cs(5,5,5),u=new da({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:la});u.uniforms.tEquirect.value=i;const d=new fa(l,u),p=i.minFilter;return i.minFilter===yr&&(i.minFilter=hi),new uM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class xc extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dM={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(h,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],S=v.position.distanceTo(g.position),y=.02,A=.005;h.inputState.pinching&&S>y+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&S<=y-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new xc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class hM extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class pM extends Ln{constructor(e=null,i=1,r=1,l,u,d,p,m,h=ti,v=ti,g,S){super(null,d,p,m,h,v,l,u,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const md=new st,mM=new st,xM=new ue;class vr{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=md.subVectors(r,i).cross(mM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(md),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||xM.getNormalMatrix(e),l=this.coplanarPoint(md).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Sh,gM=new Pe(.5,.5),gc=new st;class Dg{constructor(e=new vr,i=new vr,r=new vr,l=new vr,u=new vr,d=new vr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Di,r=!1){const l=this.planes,u=e.elements,d=u[0],p=u[1],m=u[2],h=u[3],v=u[4],g=u[5],S=u[6],y=u[7],A=u[8],R=u[9],M=u[10],_=u[11],O=u[12],U=u[13],F=u[14],X=u[15];if(l[0].setComponents(h-d,y-v,_-A,X-O).normalize(),l[1].setComponents(h+d,y+v,_+A,X+O).normalize(),l[2].setComponents(h+p,y+g,_+R,X+U).normalize(),l[3].setComponents(h-p,y-g,_-R,X-U).normalize(),r)l[4].setComponents(m,S,M,F).normalize(),l[5].setComponents(h-m,y-S,_-M,X-F).normalize();else if(l[4].setComponents(h-m,y-S,_-M,X-F).normalize(),i===Di)l[5].setComponents(h+m,y+S,_+M,X+F).normalize();else if(i===Ac)l[5].setComponents(m,S,M,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const i=gM.distanceTo(e.center);return xr.radius=.7071067811865476+i,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wg extends Ln{constructor(e,i,r=Tr,l,u,d,p=ti,m=ti,h,v=zo,g=1){if(v!==zo&&v!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,u,d,p,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ug extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dc extends Za{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,v=m+1,g=e/p,S=i/m,y=[],A=[],R=[],M=[];for(let _=0;_<v;_++){const O=_*S-d;for(let U=0;U<h;U++){const F=U*g-u;A.push(F,-O,0),R.push(0,0,1),M.push(U/p),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<p;O++){const U=O+h*_,F=O+h*(_+1),X=O+1+h*(_+1),N=O+1+h*_;y.push(U,F,N),y.push(F,X,N)}this.setIndex(y),this.setAttribute("position",new Er(A,3)),this.setAttribute("normal",new Er(R,3)),this.setAttribute("uv",new Er(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class _M extends Go{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gg,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vM extends Go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SM extends Go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class MM extends Vn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class yM extends Rg{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class bM extends MM{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class EM extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Bx(o,e,i,r){const l=TM(r);switch(i){case pg:return o*e;case xg:return o*e/l.components*l.byteLength;case mh:return o*e/l.components*l.byteLength;case xh:return o*e*2/l.components*l.byteLength;case gh:return o*e*2/l.components*l.byteLength;case mg:return o*e*3/l.components*l.byteLength;case yi:return o*e*4/l.components*l.byteLength;case _h:return o*e*4/l.components*l.byteLength;case Sc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yc:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zd:case Bd:return Math.max(o,16)*Math.max(e,8)/4;case Od:case Pd:return Math.max(o,8)*Math.max(e,8)/2;case Fd:case Id:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Hd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case eh:case nh:case ih:return Math.ceil(o/4)*Math.ceil(e/4)*16;case ah:case rh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case sh:case oh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function TM(o){switch(o){case ua:case ug:return{byteLength:1,components:1};case No:case fg:case As:return{byteLength:2,components:1};case hh:case ph:return{byteLength:2,components:4};case Tr:case dh:case oa:return{byteLength:4,components:1};case dg:case hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);function Lg(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function AM(o){const e=new WeakMap;function i(p,m){const h=p.array,v=p.usage,g=h.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,h,v),p.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:S,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:g}}function r(p,m,h){const v=m.array,g=m.updateRanges;if(o.bindBuffer(h,p),g.length===0)o.bufferSubData(h,0,v);else{g.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<g.length;y++){const A=g[S],R=g[y];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++S,g[S]=R)}g.length=S+1;for(let y=0,A=g.length;y<A;y++){const R=g[y];o.bufferSubData(h,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
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
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
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
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HM=`#ifdef USE_IRIDESCENCE
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
#endif`,GM=`#ifdef USE_BUMPMAP
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
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KM=`#define PI 3.141592653589793
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
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JM=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ry=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,py=`#ifdef USE_GRADIENTMAP
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
}`,my=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_y=`uniform bool receiveShadow;
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
#endif`,vy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,Sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ey=`PhysicalMaterial material;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ty=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,Ay=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ny=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Py=`#if defined( USE_POINTS_UV )
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
#endif`,By=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`#ifdef USE_MORPHTARGETS
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
#endif`,Xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jy=`#ifdef USE_NORMALMAP
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
#endif`,Ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fb=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`#include <common>
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
}`,Nb=`#if DEPTH_PACKING == 3200
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
}`,Ob=`#define DISTANCE
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
}`,zb=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`uniform float scale;
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
}`,Ib=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Vb=`#define LAMBERT
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
}`,Xb=`#define LAMBERT
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
}`,kb=`#define MATCAP
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
}`,qb=`#define MATCAP
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
}`,Wb=`#define NORMAL
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
}`,Yb=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zb=`#define PHONG
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
}`,jb=`#define PHONG
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
}`,Kb=`#define STANDARD
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
}`,Qb=`#define STANDARD
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Jb=`#define TOON
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
}`,$b=`#define TOON
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
}`,t3=`uniform float size;
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
}`,e3=`uniform vec3 diffuse;
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
}`,n3=`#include <common>
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
}`,i3=`uniform vec3 color;
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
}`,a3=`uniform float rotation;
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
}`,r3=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:RM,alphahash_pars_fragment:CM,alphamap_fragment:DM,alphamap_pars_fragment:wM,alphatest_fragment:UM,alphatest_pars_fragment:LM,aomap_fragment:NM,aomap_pars_fragment:OM,batching_pars_vertex:zM,batching_vertex:PM,begin_vertex:BM,beginnormal_vertex:FM,bsdfs:IM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:XM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:qM,color_fragment:WM,color_pars_fragment:YM,color_pars_vertex:ZM,color_vertex:jM,common:KM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:JM,displacementmap_pars_vertex:$M,displacementmap_vertex:ty,emissivemap_fragment:ey,emissivemap_pars_fragment:ny,colorspace_fragment:iy,colorspace_pars_fragment:ay,envmap_fragment:ry,envmap_common_pars_fragment:sy,envmap_pars_fragment:oy,envmap_pars_vertex:ly,envmap_physical_pars_fragment:vy,envmap_vertex:cy,fog_vertex:uy,fog_pars_vertex:fy,fog_fragment:dy,fog_pars_fragment:hy,gradientmap_pars_fragment:py,lightmap_pars_fragment:my,lights_lambert_fragment:xy,lights_lambert_pars_fragment:gy,lights_pars_begin:_y,lights_toon_fragment:Sy,lights_toon_pars_fragment:My,lights_phong_fragment:yy,lights_phong_pars_fragment:by,lights_physical_fragment:Ey,lights_physical_pars_fragment:Ty,lights_fragment_begin:Ay,lights_fragment_maps:Ry,lights_fragment_end:Cy,logdepthbuf_fragment:Dy,logdepthbuf_pars_fragment:wy,logdepthbuf_pars_vertex:Uy,logdepthbuf_vertex:Ly,map_fragment:Ny,map_pars_fragment:Oy,map_particle_fragment:zy,map_particle_pars_fragment:Py,metalnessmap_fragment:By,metalnessmap_pars_fragment:Fy,morphinstance_vertex:Iy,morphcolor_vertex:Hy,morphnormal_vertex:Gy,morphtarget_pars_vertex:Vy,morphtarget_vertex:Xy,normal_fragment_begin:ky,normal_fragment_maps:qy,normal_pars_fragment:Wy,normal_pars_vertex:Yy,normal_vertex:Zy,normalmap_pars_fragment:jy,clearcoat_normal_fragment_begin:Ky,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:Jy,iridescence_pars_fragment:$y,opaque_fragment:tb,packing:eb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:ab,dithering_pars_fragment:rb,roughnessmap_fragment:sb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:ub,shadowmask_pars_fragment:fb,skinbase_vertex:db,skinning_pars_vertex:hb,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:xb,specularmap_pars_fragment:gb,tonemapping_fragment:_b,tonemapping_pars_fragment:vb,transmission_fragment:Sb,transmission_pars_fragment:Mb,uv_pars_fragment:yb,uv_pars_vertex:bb,uv_vertex:Eb,worldpos_vertex:Tb,background_vert:Ab,background_frag:Rb,backgroundCube_vert:Cb,backgroundCube_frag:Db,cube_vert:wb,cube_frag:Ub,depth_vert:Lb,depth_frag:Nb,distanceRGBA_vert:Ob,distanceRGBA_frag:zb,equirect_vert:Pb,equirect_frag:Bb,linedashed_vert:Fb,linedashed_frag:Ib,meshbasic_vert:Hb,meshbasic_frag:Gb,meshlambert_vert:Vb,meshlambert_frag:Xb,meshmatcap_vert:kb,meshmatcap_frag:qb,meshnormal_vert:Wb,meshnormal_frag:Yb,meshphong_vert:Zb,meshphong_frag:jb,meshphysical_vert:Kb,meshphysical_frag:Qb,meshtoon_vert:Jb,meshtoon_frag:$b,points_vert:t3,points_frag:e3,shadow_vert:n3,shadow_frag:i3,sprite_vert:a3,sprite_frag:r3},Lt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ci={basic:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Un([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Un([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Un([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Un([Lt.common,Lt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Un([Lt.lights,Lt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ci.physical={uniforms:Un([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const _c={r:0,b:0,g:0},gr=new Ui,s3=new hn;function o3(o,e,i,r,l,u,d){const p=new Ue(0);let m=u===!0?0:1,h,v,g=null,S=0,y=null;function A(U){let F=U.isScene===!0?U.background:null;return F&&F.isTexture&&(F=(U.backgroundBlurriness>0?i:e).get(F)),F}function R(U){let F=!1;const X=A(U);X===null?_(p,m):X&&X.isColor&&(_(X,1),F=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,F){const X=A(F);X&&(X.isCubeTexture||X.mapping===Cc)?(v===void 0&&(v=new fa(new Cs(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:Ts(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(N,B,nt){this.matrixWorld.copyPosition(nt.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),gr.copy(F.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(s3.makeRotationFromEuler(gr)),v.material.toneMapped=De.getTransfer(X.colorSpace)!==Ge,(g!==X||S!==X.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,g=X,S=X.version,y=o.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(h===void 0&&(h=new fa(new Dc(2,2),new da({name:"BackgroundMaterial",uniforms:Ts(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(h)),h.material.uniforms.t2D.value=X,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=De.getTransfer(X.colorSpace)!==Ge,X.matrixAutoUpdate===!0&&X.updateMatrix(),h.material.uniforms.uvTransform.value.copy(X.matrix),(g!==X||S!==X.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,g=X,S=X.version,y=o.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function _(U,F){U.getRGB(_c,Ag(o)),r.buffers.color.setClear(_c.r,_c.g,_c.b,F,d)}function O(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return p},setClearColor:function(U,F=1){p.set(U),m=F,_(p,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(p,m)},render:R,addToRenderList:M,dispose:O}}function l3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function p(C,V,tt,lt,mt){let ft=!1;const P=g(lt,tt,V);u!==P&&(u=P,h(u.object)),ft=y(C,lt,tt,mt),ft&&A(C,lt,tt,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ft||d)&&(d=!1,F(C,V,tt,lt),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function m(){return o.createVertexArray()}function h(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function g(C,V,tt){const lt=tt.wireframe===!0;let mt=r[C.id];mt===void 0&&(mt={},r[C.id]=mt);let ft=mt[V.id];ft===void 0&&(ft={},mt[V.id]=ft);let P=ft[lt];return P===void 0&&(P=S(m()),ft[lt]=P),P}function S(C){const V=[],tt=[],lt=[];for(let mt=0;mt<i;mt++)V[mt]=0,tt[mt]=0,lt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:tt,attributeDivisors:lt,object:C,attributes:{},index:null}}function y(C,V,tt,lt){const mt=u.attributes,ft=V.attributes;let P=0;const Z=tt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const _t=mt[Y];let L=ft[Y];if(L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),_t===void 0||_t.attribute!==L||L&&_t.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==lt}function A(C,V,tt,lt){const mt={},ft=V.attributes;let P=0;const Z=tt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let _t=ft[Y];_t===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor));const L={};L.attribute=_t,_t&&_t.data&&(L.data=_t.data),mt[Y]=L,P++}u.attributes=mt,u.attributesNum=P,u.index=lt}function R(){const C=u.newAttributes;for(let V=0,tt=C.length;V<tt;V++)C[V]=0}function M(C){_(C,0)}function _(C,V){const tt=u.newAttributes,lt=u.enabledAttributes,mt=u.attributeDivisors;tt[C]=1,lt[C]===0&&(o.enableVertexAttribArray(C),lt[C]=1),mt[C]!==V&&(o.vertexAttribDivisor(C,V),mt[C]=V)}function O(){const C=u.newAttributes,V=u.enabledAttributes;for(let tt=0,lt=V.length;tt<lt;tt++)V[tt]!==C[tt]&&(o.disableVertexAttribArray(tt),V[tt]=0)}function U(C,V,tt,lt,mt,ft,P){P===!0?o.vertexAttribIPointer(C,V,tt,mt,ft):o.vertexAttribPointer(C,V,tt,lt,mt,ft)}function F(C,V,tt,lt){R();const mt=lt.attributes,ft=tt.getAttributes(),P=V.defaultAttributeValues;for(const Z in ft){const Y=ft[Z];if(Y.location>=0){let gt=mt[Z];if(gt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor)),gt!==void 0){const _t=gt.normalized,L=gt.itemSize,at=e.get(gt);if(at===void 0)continue;const Mt=at.buffer,Et=at.type,Ot=at.bytesPerElement,et=Et===o.INT||Et===o.UNSIGNED_INT||gt.gpuType===dh;if(gt.isInterleavedBufferAttribute){const ct=gt.data,Ct=ct.stride,It=gt.offset;if(ct.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)_(Y.location+Xt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)M(Y.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let Xt=0;Xt<Y.locationSize;Xt++)U(Y.location+Xt,L/Y.locationSize,Et,_t,Ct*Ot,(It+L/Y.locationSize*Xt)*Ot,et)}else{if(gt.isInstancedBufferAttribute){for(let ct=0;ct<Y.locationSize;ct++)_(Y.location+ct,gt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ct=0;ct<Y.locationSize;ct++)M(Y.location+ct);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let ct=0;ct<Y.locationSize;ct++)U(Y.location+ct,L/Y.locationSize,Et,_t,L*Ot,L/Y.locationSize*ct*Ot,et)}}else if(P!==void 0){const _t=P[Z];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(Y.location,_t);break;case 3:o.vertexAttrib3fv(Y.location,_t);break;case 4:o.vertexAttrib4fv(Y.location,_t);break;default:o.vertexAttrib1fv(Y.location,_t)}}}}O()}function X(){nt();for(const C in r){const V=r[C];for(const tt in V){const lt=V[tt];for(const mt in lt)v(lt[mt].object),delete lt[mt];delete V[tt]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const tt in V){const lt=V[tt];for(const mt in lt)v(lt[mt].object),delete lt[mt];delete V[tt]}delete r[C.id]}function B(C){for(const V in r){const tt=r[V];if(tt[C.id]===void 0)continue;const lt=tt[C.id];for(const mt in lt)v(lt[mt].object),delete lt[mt];delete tt[C.id]}}function nt(){D(),d=!0,u!==l&&(u=l,h(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:nt,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:M,disableUnusedAttributes:O}}function c3(o,e,i){let r;function l(h){r=h}function u(h,v){o.drawArrays(r,h,v),i.update(v,r,1)}function d(h,v,g){g!==0&&(o.drawArraysInstanced(r,h,v,g),i.update(v,r,g))}function p(h,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,v,0,g);let y=0;for(let A=0;A<g;A++)y+=v[A];i.update(y,r,1)}function m(h,v,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<h.length;A++)d(h[A],v[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,v,0,S,0,g);let A=0;for(let R=0;R<g;R++)A+=v[R]*S[R];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function u3(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==yi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const nt=B===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ua&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==oa&&!nt)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(se("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:F,vertexTextures:X,maxSamples:N}}function f3(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new vr,p=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||r!==0||l;return l=S,r=g.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,y){const A=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||A===null||A.length===0||u&&!M)u?v(null):h();else{const O=u?0:r,U=O*4;let F=_.clippingState||null;m.value=F,F=v(A,S,U,y);for(let X=0;X!==U;++X)F[X]=i[X];_.clippingState=F,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,S,y,A){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=m.value,A!==!0||M===null){const _=y+R*4,O=S.matrixWorldInverse;p.getNormalMatrix(O),(M===null||M.length<_)&&(M=new Float32Array(_));for(let U=0,F=y;U!==R;++U,F+=4)d.copy(g[U]).applyMatrix4(O,p),d.normal.toArray(M,F),M[F+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function d3(o){let e=new WeakMap;function i(d,p){return p===wd?d.mapping=ys:p===Ud&&(d.mapping=bs),d}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===wd||p===Ud)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const h=new fM(m.height);return h.fromEquirectangularTexture(o,d),e.set(d,h),d.addEventListener("dispose",l),i(h.texture,d.mapping)}else return null}}return d}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const qa=4,Fx=[.125,.215,.35,.446,.526,.582],Mr=20,h3=256,wo=new yM,Ix=new Ue;let xd=null,gd=0,_d=0,vd=!1;const p3=new st;class Hx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:p=p3}=u;xd=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xd,gd,_d),this._renderer.xr.enabled=vd,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ys||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xd=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:As,format:yi,colorSpace:Es,depthBuffer:!1},l=Gx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gx(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=m3(u)),this._blurMaterial=g3(u,e,i),this._ggxMaterial=x3(u,e,i)}return l}_compileMaterial(e){const i=new fa(new Za,e);this._renderer.compile(i,wo)}_sceneToCubeUV(e,i,r,l,u){const m=new di(90,1,i,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(Ix),g.toneMapping=Wa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fa(new Cs,new bg({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let _=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,_=!0):(M.color.copy(Ix),_=!0);for(let U=0;U<6;U++){const F=U%3;F===0?(m.up.set(0,h[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[U],u.y,u.z)):F===1?(m.up.set(0,0,h[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[U],u.z)):(m.up.set(0,h[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[U]));const X=this._cubeSize;_s(l,F*X,U>2?X:0,X,X),g.setRenderTarget(l),_&&g.render(R,m),g.render(e,m)}g.toneMapping=y,g.autoClear=S,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ys||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;_s(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,wo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(h*h-v*v),S=.05+h*.95,y=g*S,{_lodMax:A}=this,R=this._sizeLods[r],M=3*R*(r>A-qa?r-A+qa:0),_=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=A-i,_s(u,M,_,3*R,2*R),l.setRenderTarget(u),l.render(p,wo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,_s(e,M,_,3*R,2*R),l.setRenderTarget(e),l.render(p,wo)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&en("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=h;const S=h.uniforms,y=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Mr-1),R=u/A,M=isFinite(u)?1+Math.floor(v*R):Mr;M>Mr&&se(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Mr}`);const _=[];let O=0;for(let B=0;B<Mr;++B){const nt=B/R,D=Math.exp(-nt*nt/2);_.push(D),B===0?O+=D:B<M&&(O+=2*D)}for(let B=0;B<_.length;B++)_[B]=_[B]/O;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=d==="latitudinal",p&&(S.poleAxis.value=p);const{_lodMax:U}=this;S.dTheta.value=A,S.mipInt.value=U-r;const F=this._sizeLods[l],X=3*F*(l>U-qa?l-U+qa:0),N=4*(this._cubeSize-F);_s(i,X,N,3*F,2*F),m.setRenderTarget(i),m.render(g,wo)}}function m3(o){const e=[],i=[],r=[];let l=o;const u=o-qa+1+Fx.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-qa?m=Fx[d-o+qa-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,g=1+h,S=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,A=6,R=3,M=2,_=1,O=new Float32Array(R*A*y),U=new Float32Array(M*A*y),F=new Float32Array(_*A*y);for(let N=0;N<y;N++){const B=N%3*2/3-1,nt=N>2?0:-1,D=[B,nt,0,B+2/3,nt,0,B+2/3,nt+1,0,B,nt,0,B+2/3,nt+1,0,B,nt+1,0];O.set(D,R*A*N),U.set(S,M*A*N);const C=[N,N,N,N,N,N];F.set(C,_*A*N)}const X=new Za;X.setAttribute("position",new wi(O,R)),X.setAttribute("uv",new wi(U,M)),X.setAttribute("faceIndex",new wi(F,_)),r.push(new fa(X,null)),l>qa&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Gx(o,e,i){const r=new Ar(o,e,i);return r.texture.mapping=Cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _s(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function x3(o,e,i){return new da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function g3(o,e,i){const r=new Float32Array(Mr),l=new st(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wc(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function Vx(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function Xx(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function _3(o){let e=new WeakMap,i=null;function r(p){if(p&&p.isTexture){const m=p.mapping,h=m===wd||m===Ud,v=m===ys||m===bs;if(h||v){let g=e.get(p);const S=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==S)return i===null&&(i=new Hx(o)),g=h?i.fromEquirectangular(p,g):i.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,e.set(p,g),g.texture;if(g!==void 0)return g.texture;{const y=p.image;return h&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new Hx(o)),g=h?i.fromEquirectangular(p):i.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,e.set(p,g),p.addEventListener("dispose",u),g.texture):null}}}return p}function l(p){let m=0;const h=6;for(let v=0;v<h;v++)p[v]!==void 0&&m++;return m===h}function u(p){const m=p.target;m.removeEventListener("dispose",u);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function v3(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Bo("WebGLRenderer: "+r+" extension not supported."),l}}}function S3(o,e,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function p(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function h(g){const S=[],y=g.index,A=g.attributes.position;let R=0;if(y!==null){const O=y.array;R=y.version;for(let U=0,F=O.length;U<F;U+=3){const X=O[U+0],N=O[U+1],B=O[U+2];S.push(X,N,N,B,B,X)}}else if(A!==void 0){const O=A.array;R=A.version;for(let U=0,F=O.length/3-1;U<F;U+=3){const X=U+0,N=U+1,B=U+2;S.push(X,N,N,B,B,X)}}else return;const M=new(vg(S)?Tg:Eg)(S,1);M.version=R;const _=u.get(g);_&&e.remove(_),u.set(g,M)}function v(g){const S=u.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&h(g)}else h(g);return u.get(g)}return{get:p,update:m,getWireframeAttribute:v}}function M3(o,e,i){let r;function l(S){r=S}let u,d;function p(S){u=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(r,y,u,S*d),i.update(y,r,1)}function h(S,y,A){A!==0&&(o.drawElementsInstanced(r,y,u,S*d,A),i.update(y,r,A))}function v(S,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,A);let M=0;for(let _=0;_<A;_++)M+=y[_];i.update(M,r,1)}function g(S,y,A,R){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)h(S[_]/d,y[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,R,0,A);let _=0;for(let O=0;O<A;O++)_+=y[O]*R[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function y3(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:en("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function b3(o,e,i){const r=new WeakMap,l=new nn;function u(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,g=v!==void 0?v.length:0;let S=r.get(p);if(S===void 0||S.count!==g){let C=function(){nt.dispose(),r.delete(p),p.removeEventListener("dispose",C)};var y=C;S!==void 0&&S.texture.dispose();const A=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let F=0;A===!0&&(F=1),R===!0&&(F=2),M===!0&&(F=3);let X=p.attributes.position.count*F,N=1;X>e.maxTextureSize&&(N=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const B=new Float32Array(X*N*4*g),nt=new Sg(B,X,N,g);nt.type=oa,nt.needsUpdate=!0;const D=F*4;for(let V=0;V<g;V++){const tt=_[V],lt=O[V],mt=U[V],ft=X*N*4*V;for(let P=0;P<tt.count;P++){const Z=P*D;A===!0&&(l.fromBufferAttribute(tt,P),B[ft+Z+0]=l.x,B[ft+Z+1]=l.y,B[ft+Z+2]=l.z,B[ft+Z+3]=0),R===!0&&(l.fromBufferAttribute(lt,P),B[ft+Z+4]=l.x,B[ft+Z+5]=l.y,B[ft+Z+6]=l.z,B[ft+Z+7]=0),M===!0&&(l.fromBufferAttribute(mt,P),B[ft+Z+8]=l.x,B[ft+Z+9]=l.y,B[ft+Z+10]=l.z,B[ft+Z+11]=mt.itemSize===4?l.w:1)}}S={count:g,texture:nt,size:new Pe(X,N)},r.set(p,S),p.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<h.length;M++)A+=h[M];const R=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function E3(o,e,i,r){let l=new WeakMap;function u(m){const h=r.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==h&&(e.update(g),l.set(g,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==h&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,h))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==h&&(S.update(),l.set(S,h))}return g}function d(){l=new WeakMap}function p(m){const h=m.target;h.removeEventListener("dispose",p),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:u,dispose:d}}const Ng=new Ln,kx=new wg(1,1),Og=new Sg,zg=new YS,Pg=new Cg,qx=[],Wx=[],Yx=new Float32Array(16),Zx=new Float32Array(9),jx=new Float32Array(4);function Ds(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=qx[l];if(u===void 0&&(u=new Float32Array(l),qx[l]=u),e!==0){r.toArray(u,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(u,p)}return u}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Uc(o,e){let i=Wx[e];i===void 0&&(i=new Int32Array(e),Wx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function T3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function A3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function R3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function C3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function D3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;jx.set(r),o.uniformMatrix2fv(this.addr,!1,jx),mn(i,r)}}function w3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;Zx.set(r),o.uniformMatrix3fv(this.addr,!1,Zx),mn(i,r)}}function U3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;Yx.set(r),o.uniformMatrix4fv(this.addr,!1,Yx),mn(i,r)}}function L3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function N3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function O3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function z3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function P3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function B3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function F3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function I3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function H3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(kx.compareFunction=_g,u=kx):u=Ng,i.setTexture2D(e||u,l)}function G3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||zg,l)}function V3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Pg,l)}function X3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Og,l)}function k3(o){switch(o){case 5126:return T3;case 35664:return A3;case 35665:return R3;case 35666:return C3;case 35674:return D3;case 35675:return w3;case 35676:return U3;case 5124:case 35670:return L3;case 35667:case 35671:return N3;case 35668:case 35672:return O3;case 35669:case 35673:return z3;case 5125:return P3;case 36294:return B3;case 36295:return F3;case 36296:return I3;case 35678:case 36198:case 36298:case 36306:case 35682:return H3;case 35679:case 36299:case 36307:return G3;case 35680:case 36300:case 36308:case 36293:return V3;case 36289:case 36303:case 36311:case 36292:return X3}}function q3(o,e){o.uniform1fv(this.addr,e)}function W3(o,e){const i=Ds(e,this.size,2);o.uniform2fv(this.addr,i)}function Y3(o,e){const i=Ds(e,this.size,3);o.uniform3fv(this.addr,i)}function Z3(o,e){const i=Ds(e,this.size,4);o.uniform4fv(this.addr,i)}function j3(o,e){const i=Ds(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function K3(o,e){const i=Ds(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Q3(o,e){const i=Ds(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function J3(o,e){o.uniform1iv(this.addr,e)}function $3(o,e){o.uniform2iv(this.addr,e)}function t1(o,e){o.uniform3iv(this.addr,e)}function e1(o,e){o.uniform4iv(this.addr,e)}function n1(o,e){o.uniform1uiv(this.addr,e)}function i1(o,e){o.uniform2uiv(this.addr,e)}function a1(o,e){o.uniform3uiv(this.addr,e)}function r1(o,e){o.uniform4uiv(this.addr,e)}function s1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Ng,u[d])}function o1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||zg,u[d])}function l1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Pg,u[d])}function c1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Og,u[d])}function u1(o){switch(o){case 5126:return q3;case 35664:return W3;case 35665:return Y3;case 35666:return Z3;case 35674:return j3;case 35675:return K3;case 35676:return Q3;case 5124:case 35670:return J3;case 35667:case 35671:return $3;case 35668:case 35672:return t1;case 35669:case 35673:return e1;case 5125:return n1;case 36294:return i1;case 36295:return a1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}class f1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=k3(i.type)}}class d1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=u1(i.type)}}class h1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(e,i[p.id],r)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function Kx(o,e){o.seq.push(e),o.map[e.id]=e}function p1(o,e,i){const r=o.name,l=r.length;for(Sd.lastIndex=0;;){const u=Sd.exec(r),d=Sd.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){Kx(i,h===void 0?new f1(p,o,e):new d1(p,o,e));break}else{let g=i.map[p];g===void 0&&(g=new h1(p),Kx(i,g)),i=g}}}class Ec{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);p1(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Qx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const m1=37297;let x1=0;function g1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const Jx=new ue;function _1(o){De._getMatrix(Jx,De.workingColorSpace,o);const e=`mat3( ${Jx.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Tc:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function $x(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+g1(o.getShaderSource(e),p)}else return u}function v1(o,e){const i=_1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function S1(o,e){let i;switch(e){case MS:i="Linear";break;case yS:i="Reinhard";break;case bS:i="Cineon";break;case ES:i="ACESFilmic";break;case AS:i="AgX";break;case RS:i="Neutral";break;case TS:i="Custom";break;default:se("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new st;function M1(){De.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),e=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function b1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function E1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function Lo(o){return o!==""}function tg(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(o){return o.replace(T1,R1)}const A1=new Map;function R1(o,e){let i=he[e];if(i===void 0){const r=A1.get(e);if(r!==void 0)i=he[r],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ch(i)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ng(o){return o.replace(C1,D1)}function D1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ig(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===og?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===tS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function U1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ys:case bs:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function N1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case lg:e="ENVMAP_BLENDING_MULTIPLY";break;case vS:e="ENVMAP_BLENDING_MIX";break;case SS:e="ENVMAP_BLENDING_ADD";break}return e}function O1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function z1(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=w1(i),h=U1(i),v=L1(i),g=N1(i),S=O1(i),y=y1(i),A=b1(u),R=l.createProgram();let M,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(M=[ig(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[ig(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?he.tonemapping_pars_fragment:"",i.toneMapping!==Wa?S1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,v1("linearToOutputTexel",i.outputColorSpace),M1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),d=ch(d),d=tg(d,i),d=eg(d,i),p=ch(p),p=tg(p,i),p=eg(p,i),d=ng(d),p=ng(p),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===_x?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_x?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+M+d,F=O+_+p,X=Qx(l,l.VERTEX_SHADER,U),N=Qx(l,l.FRAGMENT_SHADER,F);l.attachShader(R,X),l.attachShader(R,N),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function B(V){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(R)||"",lt=l.getShaderInfoLog(X)||"",mt=l.getShaderInfoLog(N)||"",ft=tt.trim(),P=lt.trim(),Z=mt.trim();let Y=!0,gt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,X,N);else{const _t=$x(l,X,"vertex"),L=$x(l,N,"fragment");en("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ft+`
`+_t+`
`+L)}else ft!==""?se("WebGLProgram: Program Info Log:",ft):(P===""||Z==="")&&(gt=!1);gt&&(V.diagnostics={runnable:Y,programLog:ft,vertexShader:{log:P,prefix:M},fragmentShader:{log:Z,prefix:_}})}l.deleteShader(X),l.deleteShader(N),nt=new Ec(l,R),D=E1(l,R)}let nt;this.getUniforms=function(){return nt===void 0&&B(this),nt};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,m1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=x1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=X,this.fragmentShader=N,this}let P1=0;class B1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new F1(e),i.set(e,r)),r}}class F1{constructor(e){this.id=P1++,this.code=e,this.usedTimes=0}}function I1(o,e,i,r,l,u,d){const p=new Mg,m=new B1,h=new Set,v=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return h.add(D),D===0?"uv":`uv${D}`}function M(D,C,V,tt,lt){const mt=tt.fog,ft=lt.geometry,P=D.isMeshStandardMaterial?tt.environment:null,Z=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),Y=Z&&Z.mapping===Cc?Z.image.height:null,gt=A[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&se("WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const _t=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,L=_t!==void 0?_t.length:0;let at=0;ft.morphAttributes.position!==void 0&&(at=1),ft.morphAttributes.normal!==void 0&&(at=2),ft.morphAttributes.color!==void 0&&(at=3);let Mt,Et,Ot,et;if(gt){const Te=Ci[gt];Mt=Te.vertexShader,Et=Te.fragmentShader}else Mt=D.vertexShader,Et=D.fragmentShader,m.update(D),Ot=m.getVertexShaderID(D),et=m.getFragmentShaderID(D);const ct=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),It=lt.isInstancedMesh===!0,Xt=lt.isBatchedMesh===!0,oe=!!D.map,Je=!!D.matcap,fe=!!Z,Ee=!!D.aoMap,I=!!D.lightMap,de=!!D.bumpMap,pe=!!D.normalMap,Ne=!!D.displacementMap,Ht=!!D.emissiveMap,Ve=!!D.metalnessMap,Yt=!!D.roughnessMap,ie=D.anisotropy>0,w=D.clearcoat>0,b=D.dispersion>0,K=D.iridescence>0,ht=D.sheen>0,vt=D.transmission>0,ot=ie&&!!D.anisotropyMap,qt=w&&!!D.clearcoatMap,Ut=w&&!!D.clearcoatNormalMap,Kt=w&&!!D.clearcoatRoughnessMap,kt=K&&!!D.iridescenceMap,St=K&&!!D.iridescenceThicknessMap,bt=ht&&!!D.sheenColorMap,Wt=ht&&!!D.sheenRoughnessMap,Gt=!!D.specularMap,Nt=!!D.specularColorMap,ee=!!D.specularIntensityMap,H=vt&&!!D.transmissionMap,Dt=vt&&!!D.thicknessMap,At=!!D.gradientMap,Rt=!!D.alphaMap,yt=D.alphaTest>0,xt=!!D.alphaHash,Pt=!!D.extensions;let ne=Wa;D.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Be={shaderID:gt,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:Et,defines:D.defines,customVertexShaderID:Ot,customFragmentShaderID:et,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Xt,batchingColor:Xt&&lt._colorsTexture!==null,instancing:It,instancingColor:It&&lt.instanceColor!==null,instancingMorph:It&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Es,alphaToCoverage:!!D.alphaToCoverage,map:oe,matcap:Je,envMap:fe,envMapMode:fe&&Z.mapping,envMapCubeUVHeight:Y,aoMap:Ee,lightMap:I,bumpMap:de,normalMap:pe,displacementMap:S&&Ne,emissiveMap:Ht,normalMapObjectSpace:pe&&D.normalMapType===US,normalMapTangentSpace:pe&&D.normalMapType===gg,metalnessMap:Ve,roughnessMap:Yt,anisotropy:ie,anisotropyMap:ot,clearcoat:w,clearcoatMap:qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:K,iridescenceMap:kt,iridescenceThicknessMap:St,sheen:ht,sheenColorMap:bt,sheenRoughnessMap:Wt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:ee,transmission:vt,transmissionMap:H,thicknessMap:Dt,gradientMap:At,opaque:D.transparent===!1&&D.blending===vs&&D.alphaToCoverage===!1,alphaMap:Rt,alphaTest:yt,alphaHash:xt,combine:D.combine,mapUv:oe&&R(D.map.channel),aoMapUv:Ee&&R(D.aoMap.channel),lightMapUv:I&&R(D.lightMap.channel),bumpMapUv:de&&R(D.bumpMap.channel),normalMapUv:pe&&R(D.normalMap.channel),displacementMapUv:Ne&&R(D.displacementMap.channel),emissiveMapUv:Ht&&R(D.emissiveMap.channel),metalnessMapUv:Ve&&R(D.metalnessMap.channel),roughnessMapUv:Yt&&R(D.roughnessMap.channel),anisotropyMapUv:ot&&R(D.anisotropyMap.channel),clearcoatMapUv:qt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&R(D.sheenRoughnessMap.channel),specularMapUv:Gt&&R(D.specularMap.channel),specularColorMapUv:Nt&&R(D.specularColorMap.channel),specularIntensityMapUv:ee&&R(D.specularIntensityMap.channel),transmissionMapUv:H&&R(D.transmissionMap.channel),thicknessMapUv:Dt&&R(D.thicknessMap.channel),alphaMapUv:Rt&&R(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(pe||ie),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(oe||Rt),fog:!!mt,useFog:D.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ct,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:oe&&D.map.isVideoTexture===!0&&De.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ht&&D.emissiveMap.isVideoTexture===!0&&De.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Pt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&D.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Be.vertexUv1s=h.has(1),Be.vertexUv2s=h.has(2),Be.vertexUv3s=h.has(3),h.clear(),Be}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(O(C,D),U(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){p.disableAll(),C.supportsVertexTextures&&p.enable(0),C.instancing&&p.enable(1),C.instancingColor&&p.enable(2),C.instancingMorph&&p.enable(3),C.matcap&&p.enable(4),C.envMap&&p.enable(5),C.normalMapObjectSpace&&p.enable(6),C.normalMapTangentSpace&&p.enable(7),C.clearcoat&&p.enable(8),C.iridescence&&p.enable(9),C.alphaTest&&p.enable(10),C.vertexColors&&p.enable(11),C.vertexAlphas&&p.enable(12),C.vertexUv1s&&p.enable(13),C.vertexUv2s&&p.enable(14),C.vertexUv3s&&p.enable(15),C.vertexTangents&&p.enable(16),C.anisotropy&&p.enable(17),C.alphaHash&&p.enable(18),C.batching&&p.enable(19),C.dispersion&&p.enable(20),C.batchingColor&&p.enable(21),C.gradientMap&&p.enable(22),D.push(p.mask),p.disableAll(),C.fog&&p.enable(0),C.useFog&&p.enable(1),C.flatShading&&p.enable(2),C.logarithmicDepthBuffer&&p.enable(3),C.reversedDepthBuffer&&p.enable(4),C.skinning&&p.enable(5),C.morphTargets&&p.enable(6),C.morphNormals&&p.enable(7),C.morphColors&&p.enable(8),C.premultipliedAlpha&&p.enable(9),C.shadowMapEnabled&&p.enable(10),C.doubleSided&&p.enable(11),C.flipSided&&p.enable(12),C.useDepthPacking&&p.enable(13),C.dithering&&p.enable(14),C.transmission&&p.enable(15),C.sheen&&p.enable(16),C.opaque&&p.enable(17),C.pointsUvs&&p.enable(18),C.decodeVideoTexture&&p.enable(19),C.decodeVideoTextureEmissive&&p.enable(20),C.alphaToCoverage&&p.enable(21),D.push(p.mask)}function F(D){const C=A[D.type];let V;if(C){const tt=Ci[C];V=oM.clone(tt.uniforms)}else V=D.uniforms;return V}function X(D,C){let V;for(let tt=0,lt=v.length;tt<lt;tt++){const mt=v[tt];if(mt.cacheKey===C){V=mt,++V.usedTimes;break}}return V===void 0&&(V=new z1(o,C,D,u),v.push(V)),V}function N(D){if(--D.usedTimes===0){const C=v.indexOf(D);v[C]=v[v.length-1],v.pop(),D.destroy()}}function B(D){m.remove(D)}function nt(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:F,acquireProgram:X,releaseProgram:N,releaseShaderCache:B,programs:v,dispose:nt}}function H1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function r(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function G1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ag(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function rg(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(g,S,y,A,R,M){let _=o[e];return _===void 0?(_={id:g.id,object:g,geometry:S,material:y,groupOrder:A,renderOrder:g.renderOrder,z:R,group:M},o[e]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=y,_.groupOrder=A,_.renderOrder=g.renderOrder,_.z=R,_.group=M),e++,_}function p(g,S,y,A,R,M){const _=d(g,S,y,A,R,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(g,S,y,A,R,M){const _=d(g,S,y,A,R,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function h(g,S){i.length>1&&i.sort(g||G1),r.length>1&&r.sort(S||ag),l.length>1&&l.sort(S||ag)}function v(){for(let g=e,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:v,sort:h}}function V1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new rg,o.set(r,[d])):l>=u.length?(d=new rg,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function X1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new Ue};break;case"SpotLight":i={position:new st,direction:new st,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function k1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let q1=0;function W1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Y1(o){const e=new X1,i=k1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new st);const l=new st,u=new hn,d=new hn;function p(h){let v=0,g=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,A=0,R=0,M=0,_=0,O=0,U=0,F=0,X=0,N=0,B=0;h.sort(W1);for(let D=0,C=h.length;D<C;D++){const V=h[D],tt=V.color,lt=V.intensity,mt=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=tt.r*lt,g+=tt.g*lt,S+=tt.b*lt;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],lt);B++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=ft,r.directionalShadowMatrix[y]=V.shadow.matrix,O++}r.directional[y]=P,y++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(tt).multiplyScalar(lt),P.distance=mt,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[R]=P;const Z=V.shadow;if(V.map&&(r.spotLightMap[X]=V.map,X++,Z.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[R]=Z.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=ft,F++}R++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy(tt).multiplyScalar(lt),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=P,M++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const Z=V.shadow,Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=V.shadow.matrix,U++}r.point[A]=P,A++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(lt),P.groundColor.copy(V.groundColor).multiplyScalar(lt),r.hemi[_]=P,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=S;const nt=r.hash;(nt.directionalLength!==y||nt.pointLength!==A||nt.spotLength!==R||nt.rectAreaLength!==M||nt.hemiLength!==_||nt.numDirectionalShadows!==O||nt.numPointShadows!==U||nt.numSpotShadows!==F||nt.numSpotMaps!==X||nt.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=F+X-N,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,nt.directionalLength=y,nt.pointLength=A,nt.spotLength=R,nt.rectAreaLength=M,nt.hemiLength=_,nt.numDirectionalShadows=O,nt.numPointShadows=U,nt.numSpotShadows=F,nt.numSpotMaps=X,nt.numLightProbes=B,r.version=q1++)}function m(h,v){let g=0,S=0,y=0,A=0,R=0;const M=v.matrixWorldInverse;for(let _=0,O=h.length;_<O;_++){const U=h[_];if(U.isDirectionalLight){const F=r.directional[g];F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(M),g++}else if(U.isSpotLight){const F=r.spot[y];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(M),F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const F=r.rectArea[A];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(M),d.identity(),u.copy(U.matrixWorld),u.premultiply(M),d.extractRotation(u),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),A++}else if(U.isPointLight){const F=r.point[S];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(M),S++}else if(U.isHemisphereLight){const F=r.hemi[R];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(M),R++}}}return{setup:p,setupView:m,state:r}}function sg(o){const e=new Y1(o),i=[],r=[];function l(v){h.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function p(){e.setup(i)}function m(v){e.setupView(i,v)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:d}}function Z1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let p;return d===void 0?(p=new sg(o),e.set(l,[p])):u>=d.length?(p=new sg(o),d.push(p)):p=d[u],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const j1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
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
}`;function Q1(o,e,i){let r=new Dg;const l=new Pe,u=new Pe,d=new nn,p=new vM({depthPacking:wS}),m=new SM,h={},v=i.maxTextureSize,g={[Ya]:Gn,[Gn]:Ya,[ra]:ra},S=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:j1,fragmentShader:K1}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new Za;A.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new fa(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=og;let _=this.type;this.render=function(N,B,nt){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(la),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const lt=_!==aa&&this.type===aa,mt=_===aa&&this.type!==aa;for(let ft=0,P=N.length;ft<P;ft++){const Z=N[ft],Y=Z.shadow;if(Y===void 0){se("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const gt=Y.getFrameExtents();if(l.multiply(gt),u.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/gt.x),l.x=u.x*gt.x,Y.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/gt.y),l.y=u.y*gt.y,Y.mapSize.y=u.y)),Y.map===null||lt===!0||mt===!0){const L=this.type!==aa?{minFilter:ti,magFilter:ti}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ar(l.x,l.y,L),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const _t=Y.getViewportCount();for(let L=0;L<_t;L++){const at=Y.getViewport(L);d.set(u.x*at.x,u.y*at.y,u.x*at.z,u.y*at.w),tt.viewport(d),Y.updateMatrices(Z,L),r=Y.getFrustum(),F(B,nt,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&O(Y,nt),Y.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,V)};function O(N,B){const nt=e.update(R);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ar(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(B,null,nt,S,R,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(B,null,nt,y,R,null)}function U(N,B,nt,D){let C=null;const V=nt.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)C=V;else if(C=nt.isPointLight===!0?m:p,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const tt=C.uuid,lt=B.uuid;let mt=h[tt];mt===void 0&&(mt={},h[tt]=mt);let ft=mt[lt];ft===void 0&&(ft=C.clone(),mt[lt]=ft,B.addEventListener("dispose",X)),C=ft}if(C.visible=B.visible,C.wireframe=B.wireframe,D===aa?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:g[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,nt.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const tt=o.properties.get(C);tt.light=nt}return C}function F(N,B,nt,D,C){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===aa)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,N.matrixWorld);const lt=e.update(N),mt=N.material;if(Array.isArray(mt)){const ft=lt.groups;for(let P=0,Z=ft.length;P<Z;P++){const Y=ft[P],gt=mt[Y.materialIndex];if(gt&&gt.visible){const _t=U(N,gt,D,C);N.onBeforeShadow(o,N,B,nt,lt,_t,Y),o.renderBufferDirect(nt,null,lt,_t,N,Y),N.onAfterShadow(o,N,B,nt,lt,_t,Y)}}}else if(mt.visible){const ft=U(N,mt,D,C);N.onBeforeShadow(o,N,B,nt,lt,ft,null),o.renderBufferDirect(nt,null,lt,ft,N,null),N.onAfterShadow(o,N,B,nt,lt,ft,null)}}const tt=N.children;for(let lt=0,mt=tt.length;lt<mt;lt++)F(tt[lt],B,nt,D,C)}function X(N){N.target.removeEventListener("dispose",X);for(const nt in h){const D=h[nt],C=N.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const J1={[bd]:Ed,[Td]:Cd,[Ad]:Dd,[Ms]:Rd,[Ed]:bd,[Cd]:Td,[Dd]:Ad,[Rd]:Ms};function $1(o,e){function i(){let H=!1;const Dt=new nn;let At=null;const Rt=new nn(0,0,0,0);return{setMask:function(yt){At!==yt&&!H&&(o.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){H=yt},setClear:function(yt,xt,Pt,ne,Be){Be===!0&&(yt*=ne,xt*=ne,Pt*=ne),Dt.set(yt,xt,Pt,ne),Rt.equals(Dt)===!1&&(o.clearColor(yt,xt,Pt,ne),Rt.copy(Dt))},reset:function(){H=!1,At=null,Rt.set(-1,0,0,0)}}}function r(){let H=!1,Dt=!1,At=null,Rt=null,yt=null;return{setReversed:function(xt){if(Dt!==xt){const Pt=e.get("EXT_clip_control");xt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),Dt=xt;const ne=yt;yt=null,this.setClear(ne)}},getReversed:function(){return Dt},setTest:function(xt){xt?ct(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(xt){At!==xt&&!H&&(o.depthMask(xt),At=xt)},setFunc:function(xt){if(Dt&&(xt=J1[xt]),Rt!==xt){switch(xt){case bd:o.depthFunc(o.NEVER);break;case Ed:o.depthFunc(o.ALWAYS);break;case Td:o.depthFunc(o.LESS);break;case Ms:o.depthFunc(o.LEQUAL);break;case Ad:o.depthFunc(o.EQUAL);break;case Rd:o.depthFunc(o.GEQUAL);break;case Cd:o.depthFunc(o.GREATER);break;case Dd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=xt}},setLocked:function(xt){H=xt},setClear:function(xt){yt!==xt&&(Dt&&(xt=1-xt),o.clearDepth(xt),yt=xt)},reset:function(){H=!1,At=null,Rt=null,yt=null,Dt=!1}}}function l(){let H=!1,Dt=null,At=null,Rt=null,yt=null,xt=null,Pt=null,ne=null,Be=null;return{setTest:function(Te){H||(Te?ct(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Te){Dt!==Te&&!H&&(o.stencilMask(Te),Dt=Te)},setFunc:function(Te,An,Xn){(At!==Te||Rt!==An||yt!==Xn)&&(o.stencilFunc(Te,An,Xn),At=Te,Rt=An,yt=Xn)},setOp:function(Te,An,Xn){(xt!==Te||Pt!==An||ne!==Xn)&&(o.stencilOp(Te,An,Xn),xt=Te,Pt=An,ne=Xn)},setLocked:function(Te){H=Te},setClear:function(Te){Be!==Te&&(o.clearStencil(Te),Be=Te)},reset:function(){H=!1,Dt=null,At=null,Rt=null,yt=null,xt=null,Pt=null,ne=null,Be=null}}}const u=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let v={},g={},S=new WeakMap,y=[],A=null,R=!1,M=null,_=null,O=null,U=null,F=null,X=null,N=null,B=new Ue(0,0,0),nt=0,D=!1,C=null,V=null,tt=null,lt=null,mt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=Z>=2);let gt=null,_t={};const L=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),Mt=new nn().fromArray(L),Et=new nn().fromArray(at);function Ot(H,Dt,At,Rt){const yt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(H,xt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Pt=0;Pt<At;Pt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Rt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Dt+Pt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return xt}const et={};et[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),ct(o.DEPTH_TEST),d.setFunc(Ms),de(!1),pe(dx),ct(o.CULL_FACE),Ee(la);function ct(H){v[H]!==!0&&(o.enable(H),v[H]=!0)}function Ct(H){v[H]!==!1&&(o.disable(H),v[H]=!1)}function It(H,Dt){return g[H]!==Dt?(o.bindFramebuffer(H,Dt),g[H]=Dt,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Dt),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Xt(H,Dt){let At=y,Rt=!1;if(H){At=S.get(Dt),At===void 0&&(At=[],S.set(Dt,At));const yt=H.textures;if(At.length!==yt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Pt=yt.length;xt<Pt;xt++)At[xt]=o.COLOR_ATTACHMENT0+xt;At.length=yt.length,Rt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Rt=!0);Rt&&o.drawBuffers(At)}function oe(H){return A!==H?(o.useProgram(H),A=H,!0):!1}const Je={[Sr]:o.FUNC_ADD,[nS]:o.FUNC_SUBTRACT,[iS]:o.FUNC_REVERSE_SUBTRACT};Je[aS]=o.MIN,Je[rS]=o.MAX;const fe={[sS]:o.ZERO,[oS]:o.ONE,[lS]:o.SRC_COLOR,[Md]:o.SRC_ALPHA,[pS]:o.SRC_ALPHA_SATURATE,[dS]:o.DST_COLOR,[uS]:o.DST_ALPHA,[cS]:o.ONE_MINUS_SRC_COLOR,[yd]:o.ONE_MINUS_SRC_ALPHA,[hS]:o.ONE_MINUS_DST_COLOR,[fS]:o.ONE_MINUS_DST_ALPHA,[mS]:o.CONSTANT_COLOR,[xS]:o.ONE_MINUS_CONSTANT_COLOR,[gS]:o.CONSTANT_ALPHA,[_S]:o.ONE_MINUS_CONSTANT_ALPHA};function Ee(H,Dt,At,Rt,yt,xt,Pt,ne,Be,Te){if(H===la){R===!0&&(Ct(o.BLEND),R=!1);return}if(R===!1&&(ct(o.BLEND),R=!0),H!==eS){if(H!==M||Te!==D){if((_!==Sr||F!==Sr)&&(o.blendEquation(o.FUNC_ADD),_=Sr,F=Sr),Te)switch(H){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hx:o.blendFunc(o.ONE,o.ONE);break;case px:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:en("WebGLState: Invalid blending: ",H);break}else switch(H){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case px:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mx:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",H);break}O=null,U=null,X=null,N=null,B.set(0,0,0),nt=0,M=H,D=Te}return}yt=yt||Dt,xt=xt||At,Pt=Pt||Rt,(Dt!==_||yt!==F)&&(o.blendEquationSeparate(Je[Dt],Je[yt]),_=Dt,F=yt),(At!==O||Rt!==U||xt!==X||Pt!==N)&&(o.blendFuncSeparate(fe[At],fe[Rt],fe[xt],fe[Pt]),O=At,U=Rt,X=xt,N=Pt),(ne.equals(B)===!1||Be!==nt)&&(o.blendColor(ne.r,ne.g,ne.b,Be),B.copy(ne),nt=Be),M=H,D=!1}function I(H,Dt){H.side===ra?Ct(o.CULL_FACE):ct(o.CULL_FACE);let At=H.side===Gn;Dt&&(At=!At),de(At),H.blending===vs&&H.transparent===!1?Ee(la):Ee(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const Rt=H.stencilWrite;p.setTest(Rt),Rt&&(p.setMask(H.stencilWriteMask),p.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),p.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function de(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function pe(H){H!==Jv?(ct(o.CULL_FACE),H!==V&&(H===dx?o.cullFace(o.BACK):H===$v?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),V=H}function Ne(H){H!==tt&&(P&&o.lineWidth(H),tt=H)}function Ht(H,Dt,At){H?(ct(o.POLYGON_OFFSET_FILL),(lt!==Dt||mt!==At)&&(o.polygonOffset(Dt,At),lt=Dt,mt=At)):Ct(o.POLYGON_OFFSET_FILL)}function Ve(H){H?ct(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Yt(H){H===void 0&&(H=o.TEXTURE0+ft-1),gt!==H&&(o.activeTexture(H),gt=H)}function ie(H,Dt,At){At===void 0&&(gt===null?At=o.TEXTURE0+ft-1:At=gt);let Rt=_t[At];Rt===void 0&&(Rt={type:void 0,texture:void 0},_t[At]=Rt),(Rt.type!==H||Rt.texture!==Dt)&&(gt!==At&&(o.activeTexture(At),gt=At),o.bindTexture(H,Dt||et[H]),Rt.type=H,Rt.texture=Dt)}function w(){const H=_t[gt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ht(){try{o.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function vt(){try{o.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ut(){try{o.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Kt(){try{o.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function kt(){try{o.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function St(){try{o.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function bt(H){Mt.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),Mt.copy(H))}function Wt(H){Et.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Et.copy(H))}function Gt(H,Dt){let At=h.get(Dt);At===void 0&&(At=new WeakMap,h.set(Dt,At));let Rt=At.get(H);Rt===void 0&&(Rt=o.getUniformBlockIndex(Dt,H.name),At.set(H,Rt))}function Nt(H,Dt){const Rt=h.get(Dt).get(H);m.get(Dt)!==Rt&&(o.uniformBlockBinding(Dt,Rt,H.__bindingPointIndex),m.set(Dt,Rt))}function ee(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},gt=null,_t={},g={},S=new WeakMap,y=[],A=null,R=!1,M=null,_=null,O=null,U=null,F=null,X=null,N=null,B=new Ue(0,0,0),nt=0,D=!1,C=null,V=null,tt=null,lt=null,mt=null,Mt.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:ct,disable:Ct,bindFramebuffer:It,drawBuffers:Xt,useProgram:oe,setBlending:Ee,setMaterial:I,setFlipSided:de,setCullFace:pe,setLineWidth:Ne,setPolygonOffset:Ht,setScissorTest:Ve,activeTexture:Yt,bindTexture:ie,unbindTexture:w,compressedTexImage2D:b,compressedTexImage3D:K,texImage2D:kt,texImage3D:St,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Ut,texStorage3D:Kt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:qt,scissor:bt,viewport:Wt,reset:ee}}function tE(o,e,i,r,l,u,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pe,v=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,b){return y?new OffscreenCanvas(w,b):Rc("canvas")}function R(w,b,K){let ht=1;const vt=ie(w);if((vt.width>K||vt.height>K)&&(ht=K/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ot=Math.floor(ht*vt.width),qt=Math.floor(ht*vt.height);g===void 0&&(g=A(ot,qt));const Ut=b?A(ot,qt):g;return Ut.width=ot,Ut.height=qt,Ut.getContext("2d").drawImage(w,0,0,ot,qt),se("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ot+"x"+qt+")."),Ut}else return"data"in w&&se("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),w;return w}function M(w){return w.generateMipmaps}function _(w){o.generateMipmap(w)}function O(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(w,b,K,ht,vt=!1){if(w!==null){if(o[w]!==void 0)return o[w];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot=b;if(b===o.RED&&(K===o.FLOAT&&(ot=o.R32F),K===o.HALF_FLOAT&&(ot=o.R16F),K===o.UNSIGNED_BYTE&&(ot=o.R8)),b===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.R8UI),K===o.UNSIGNED_SHORT&&(ot=o.R16UI),K===o.UNSIGNED_INT&&(ot=o.R32UI),K===o.BYTE&&(ot=o.R8I),K===o.SHORT&&(ot=o.R16I),K===o.INT&&(ot=o.R32I)),b===o.RG&&(K===o.FLOAT&&(ot=o.RG32F),K===o.HALF_FLOAT&&(ot=o.RG16F),K===o.UNSIGNED_BYTE&&(ot=o.RG8)),b===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.RG8UI),K===o.UNSIGNED_SHORT&&(ot=o.RG16UI),K===o.UNSIGNED_INT&&(ot=o.RG32UI),K===o.BYTE&&(ot=o.RG8I),K===o.SHORT&&(ot=o.RG16I),K===o.INT&&(ot=o.RG32I)),b===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),K===o.UNSIGNED_INT&&(ot=o.RGB32UI),K===o.BYTE&&(ot=o.RGB8I),K===o.SHORT&&(ot=o.RGB16I),K===o.INT&&(ot=o.RGB32I)),b===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),K===o.UNSIGNED_INT&&(ot=o.RGBA32UI),K===o.BYTE&&(ot=o.RGBA8I),K===o.SHORT&&(ot=o.RGBA16I),K===o.INT&&(ot=o.RGBA32I)),b===o.RGB&&(K===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(ot=o.R11F_G11F_B10F)),b===o.RGBA){const qt=vt?Tc:De.getTransfer(ht);K===o.FLOAT&&(ot=o.RGBA32F),K===o.HALF_FLOAT&&(ot=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ot=qt===Ge?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function F(w,b){let K;return w?b===null||b===Tr||b===Oo?K=o.DEPTH24_STENCIL8:b===oa?K=o.DEPTH32F_STENCIL8:b===No&&(K=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Tr||b===Oo?K=o.DEPTH_COMPONENT24:b===oa?K=o.DEPTH_COMPONENT32F:b===No&&(K=o.DEPTH_COMPONENT16),K}function X(w,b){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==ti&&w.minFilter!==hi?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function N(w){const b=w.target;b.removeEventListener("dispose",N),nt(b),b.isVideoTexture&&v.delete(b)}function B(w){const b=w.target;b.removeEventListener("dispose",B),C(b)}function nt(w){const b=r.get(w);if(b.__webglInit===void 0)return;const K=w.source,ht=S.get(K);if(ht){const vt=ht[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(w),Object.keys(ht).length===0&&S.delete(K)}r.remove(w)}function D(w){const b=r.get(w);o.deleteTexture(b.__webglTexture);const K=w.source,ht=S.get(K);delete ht[b.__cacheKey],d.memory.textures--}function C(w){const b=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let vt=0;vt<b.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(b.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)o.deleteFramebuffer(b.__webglFramebuffer[ht]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=w.textures;for(let ht=0,vt=K.length;ht<vt;ht++){const ot=r.get(K[ht]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),d.memory.textures--),r.remove(K[ht])}r.remove(w)}let V=0;function tt(){V=0}function lt(){const w=V;return w>=l.maxTextures&&se("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),V+=1,w}function mt(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function ft(w,b){const K=r.get(w);if(w.isVideoTexture&&Ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&K.__version!==w.version){const ht=w.image;if(ht===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{et(K,w,b);return}}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+b)}function P(w,b){const K=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){et(K,w,b);return}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+b)}function Z(w,b){const K=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){et(K,w,b);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+b)}function Y(w,b){const K=r.get(w);if(w.version>0&&K.__version!==w.version){ct(K,w,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+b)}const gt={[Ld]:o.REPEAT,[sa]:o.CLAMP_TO_EDGE,[Nd]:o.MIRRORED_REPEAT},_t={[ti]:o.NEAREST,[CS]:o.NEAREST_MIPMAP_NEAREST,[$l]:o.NEAREST_MIPMAP_LINEAR,[hi]:o.LINEAR,[qf]:o.LINEAR_MIPMAP_NEAREST,[yr]:o.LINEAR_MIPMAP_LINEAR},L={[LS]:o.NEVER,[FS]:o.ALWAYS,[NS]:o.LESS,[_g]:o.LEQUAL,[OS]:o.EQUAL,[BS]:o.GEQUAL,[zS]:o.GREATER,[PS]:o.NOTEQUAL};function at(w,b){if(b.type===oa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===hi||b.magFilter===qf||b.magFilter===$l||b.magFilter===yr||b.minFilter===hi||b.minFilter===qf||b.minFilter===$l||b.minFilter===yr)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,gt[b.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,gt[b.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,gt[b.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,_t[b.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ti||b.minFilter!==$l&&b.minFilter!==yr||b.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Mt(w,b){let K=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",N));const ht=b.source;let vt=S.get(ht);vt===void 0&&(vt={},S.set(ht,vt));const ot=mt(b);if(ot!==w.__cacheKey){vt[ot]===void 0&&(vt[ot]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,K=!0),vt[ot].usedTimes++;const qt=vt[w.__cacheKey];qt!==void 0&&(vt[w.__cacheKey].usedTimes--,qt.usedTimes===0&&D(b)),w.__cacheKey=ot,w.__webglTexture=vt[ot].texture}return K}function Et(w,b,K){return Math.floor(Math.floor(w/K)/b)}function Ot(w,b,K,ht){const ot=w.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,K,ht,b.data);else{ot.sort((St,bt)=>St.start-bt.start);let qt=0;for(let St=1;St<ot.length;St++){const bt=ot[qt],Wt=ot[St],Gt=bt.start+bt.count,Nt=Et(Wt.start,b.width,4),ee=Et(bt.start,b.width,4);Wt.start<=Gt+1&&Nt===ee&&Et(Wt.start+Wt.count-1,b.width,4)===Nt?bt.count=Math.max(bt.count,Wt.start+Wt.count-bt.start):(++qt,ot[qt]=Wt)}ot.length=qt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let St=0,bt=ot.length;St<bt;St++){const Wt=ot[St],Gt=Math.floor(Wt.start/4),Nt=Math.ceil(Wt.count/4),ee=Gt%b.width,H=Math.floor(Gt/b.width),Dt=Nt,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ee),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),i.texSubImage2D(o.TEXTURE_2D,0,ee,H,Dt,At,K,ht,b.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function et(w,b,K){let ht=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=Mt(w,b),ot=b.source;i.bindTexture(ht,w.__webglTexture,o.TEXTURE0+K);const qt=r.get(ot);if(ot.version!==qt.__version||vt===!0){i.activeTexture(o.TEXTURE0+K);const Ut=De.getPrimaries(De.workingColorSpace),Kt=b.colorSpace===ka?null:De.getPrimaries(b.colorSpace),kt=b.colorSpace===ka||Ut===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let St=R(b.image,!1,l.maxTextureSize);St=Yt(b,St);const bt=u.convert(b.format,b.colorSpace),Wt=u.convert(b.type);let Gt=U(b.internalFormat,bt,Wt,b.colorSpace,b.isVideoTexture);at(ht,b);let Nt;const ee=b.mipmaps,H=b.isVideoTexture!==!0,Dt=qt.__version===void 0||vt===!0,At=ot.dataReady,Rt=X(b,St);if(b.isDepthTexture)Gt=F(b.format===Po,b.type),Dt&&(H?i.texStorage2D(o.TEXTURE_2D,1,Gt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Gt,St.width,St.height,0,bt,Wt,null));else if(b.isDataTexture)if(ee.length>0){H&&Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,ee[0].width,ee[0].height);for(let yt=0,xt=ee.length;yt<xt;yt++)Nt=ee[yt],H?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,bt,Wt,Nt.data):i.texImage2D(o.TEXTURE_2D,yt,Gt,Nt.width,Nt.height,0,bt,Wt,Nt.data);b.generateMipmaps=!1}else H?(Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,St.width,St.height),At&&Ot(b,St,bt,Wt)):i.texImage2D(o.TEXTURE_2D,0,Gt,St.width,St.height,0,bt,Wt,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Gt,ee[0].width,ee[0].height,St.depth);for(let yt=0,xt=ee.length;yt<xt;yt++)if(Nt=ee[yt],b.format!==yi)if(bt!==null)if(H){if(At)if(b.layerUpdates.size>0){const Pt=Bx(Nt.width,Nt.height,b.format,b.type);for(const ne of b.layerUpdates){const Be=Nt.data.subarray(ne*Pt/Nt.data.BYTES_PER_ELEMENT,(ne+1)*Pt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ne,Nt.width,Nt.height,1,bt,Be)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Nt.width,Nt.height,St.depth,bt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Gt,Nt.width,Nt.height,St.depth,0,Nt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Nt.width,Nt.height,St.depth,bt,Wt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Gt,Nt.width,Nt.height,St.depth,0,bt,Wt,Nt.data)}else{H&&Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,ee[0].width,ee[0].height);for(let yt=0,xt=ee.length;yt<xt;yt++)Nt=ee[yt],b.format!==yi?bt!==null?H?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,bt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Gt,Nt.width,Nt.height,0,Nt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,bt,Wt,Nt.data):i.texImage2D(o.TEXTURE_2D,yt,Gt,Nt.width,Nt.height,0,bt,Wt,Nt.data)}else if(b.isDataArrayTexture)if(H){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Gt,St.width,St.height,St.depth),At)if(b.layerUpdates.size>0){const yt=Bx(St.width,St.height,b.format,b.type);for(const xt of b.layerUpdates){const Pt=St.data.subarray(xt*yt/St.data.BYTES_PER_ELEMENT,(xt+1)*yt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,bt,Wt,Pt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,bt,Wt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,St.width,St.height,St.depth,0,bt,Wt,St.data);else if(b.isData3DTexture)H?(Dt&&i.texStorage3D(o.TEXTURE_3D,Rt,Gt,St.width,St.height,St.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,bt,Wt,St.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,St.width,St.height,St.depth,0,bt,Wt,St.data);else if(b.isFramebufferTexture){if(Dt)if(H)i.texStorage2D(o.TEXTURE_2D,Rt,Gt,St.width,St.height);else{let yt=St.width,xt=St.height;for(let Pt=0;Pt<Rt;Pt++)i.texImage2D(o.TEXTURE_2D,Pt,Gt,yt,xt,0,bt,Wt,null),yt>>=1,xt>>=1}}else if(ee.length>0){if(H&&Dt){const yt=ie(ee[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Gt,yt.width,yt.height)}for(let yt=0,xt=ee.length;yt<xt;yt++)Nt=ee[yt],H?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,bt,Wt,Nt):i.texImage2D(o.TEXTURE_2D,yt,Gt,bt,Wt,Nt);b.generateMipmaps=!1}else if(H){if(Dt){const yt=ie(St);i.texStorage2D(o.TEXTURE_2D,Rt,Gt,yt.width,yt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Wt,St)}else i.texImage2D(o.TEXTURE_2D,0,Gt,bt,Wt,St);M(b)&&_(ht),qt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function ct(w,b,K){if(b.image.length!==6)return;const ht=Mt(w,b),vt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+K);const ot=r.get(vt);if(vt.version!==ot.__version||ht===!0){i.activeTexture(o.TEXTURE0+K);const qt=De.getPrimaries(De.workingColorSpace),Ut=b.colorSpace===ka?null:De.getPrimaries(b.colorSpace),Kt=b.colorSpace===ka||qt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const kt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let xt=0;xt<6;xt++)!kt&&!St?bt[xt]=R(b.image[xt],!0,l.maxCubemapSize):bt[xt]=St?b.image[xt].image:b.image[xt],bt[xt]=Yt(b,bt[xt]);const Wt=bt[0],Gt=u.convert(b.format,b.colorSpace),Nt=u.convert(b.type),ee=U(b.internalFormat,Gt,Nt,b.colorSpace),H=b.isVideoTexture!==!0,Dt=ot.__version===void 0||ht===!0,At=vt.dataReady;let Rt=X(b,Wt);at(o.TEXTURE_CUBE_MAP,b);let yt;if(kt){H&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ee,Wt.width,Wt.height);for(let xt=0;xt<6;xt++){yt=bt[xt].mipmaps;for(let Pt=0;Pt<yt.length;Pt++){const ne=yt[Pt];b.format!==yi?Gt!==null?H?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,0,0,ne.width,ne.height,Gt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,ee,ne.width,ne.height,0,ne.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,0,0,ne.width,ne.height,Gt,Nt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,ee,ne.width,ne.height,0,Gt,Nt,ne.data)}}}else{if(yt=b.mipmaps,H&&Dt){yt.length>0&&Rt++;const xt=ie(bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ee,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,bt[xt].width,bt[xt].height,Gt,Nt,bt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ee,bt[xt].width,bt[xt].height,0,Gt,Nt,bt[xt].data);for(let Pt=0;Pt<yt.length;Pt++){const Be=yt[Pt].image[xt].image;H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,0,0,Be.width,Be.height,Gt,Nt,Be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,ee,Be.width,Be.height,0,Gt,Nt,Be.data)}}else{H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Gt,Nt,bt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ee,Gt,Nt,bt[xt]);for(let Pt=0;Pt<yt.length;Pt++){const ne=yt[Pt];H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,0,0,Gt,Nt,ne.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,ee,Gt,Nt,ne.image[xt])}}}M(b)&&_(o.TEXTURE_CUBE_MAP),ot.__version=vt.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ct(w,b,K,ht,vt,ot){const qt=u.convert(K.format,K.colorSpace),Ut=u.convert(K.type),Kt=U(K.internalFormat,qt,Ut,K.colorSpace),kt=r.get(b),St=r.get(K);if(St.__renderTarget=b,!kt.__hasExternalTextures){const bt=Math.max(1,b.width>>ot),Wt=Math.max(1,b.height>>ot);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ot,Kt,bt,Wt,b.depth,0,qt,Ut,null):i.texImage2D(vt,ot,Kt,bt,Wt,0,qt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),Ht(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,St.__webglTexture,0,Ne(b)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,St.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(w,b,K){if(o.bindRenderbuffer(o.RENDERBUFFER,w),b.depthBuffer){const ht=b.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,ot=F(b.stencilBuffer,vt),qt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Ne(b);Ht(b)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ot,b.width,b.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ot,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ot,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,w)}else{const ht=b.textures;for(let vt=0;vt<ht.length;vt++){const ot=ht[vt],qt=u.convert(ot.format,ot.colorSpace),Ut=u.convert(ot.type),Kt=U(ot.internalFormat,qt,Ut,ot.colorSpace),kt=Ne(b);K&&Ht(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Kt,b.width,b.height):Ht(b)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,Kt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(b.depthTexture);ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const vt=ht.__webglTexture,ot=Ne(b);if(b.depthTexture.format===zo)Ht(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(b.depthTexture.format===Po)Ht(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function oe(w){const b=r.get(w),K=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const ht=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=ht}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const ht=w.texture.mipmaps;ht&&ht.length>0?Xt(b.__webglFramebuffer[0],w):Xt(b.__webglFramebuffer,w)}else if(K){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=o.createRenderbuffer(),It(b.__webglDepthbuffer[ht],w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ot)}}else{const ht=w.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),It(b.__webglDepthbuffer,w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(w,b,K){const ht=r.get(w);b!==void 0&&Ct(ht.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&oe(w)}function fe(w){const b=w.texture,K=r.get(w),ht=r.get(b);w.addEventListener("dispose",B);const vt=w.textures,ot=w.isWebGLCubeRenderTarget===!0,qt=vt.length>1;if(qt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=b.version,d.memory.textures++),ot){K.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Ut]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)K.__webglFramebuffer[Ut][Kt]=o.createFramebuffer()}else K.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)K.__webglFramebuffer[Ut]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ut=0,Kt=vt.length;Ut<Kt;Ut++){const kt=r.get(vt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&Ht(w)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Kt=vt[Ut];K.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Ut]);const kt=u.convert(Kt.format,Kt.colorSpace),St=u.convert(Kt.type),bt=U(Kt.internalFormat,kt,St,Kt.colorSpace,w.isXRRenderTarget===!0),Wt=Ne(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,bt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,K.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),It(K.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),at(o.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(K.__webglFramebuffer[Ut][Kt],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Kt);else Ct(K.__webglFramebuffer[Ut],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(b)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ut=0,Kt=vt.length;Ut<Kt;Ut++){const kt=vt[Ut],St=r.get(kt);let bt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(bt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,St.__webglTexture),at(bt,kt),Ct(K.__webglFramebuffer,w,kt,o.COLOR_ATTACHMENT0+Ut,bt,0),M(kt)&&_(bt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ut=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ht.__webglTexture),at(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(K.__webglFramebuffer[Kt],w,b,o.COLOR_ATTACHMENT0,Ut,Kt);else Ct(K.__webglFramebuffer,w,b,o.COLOR_ATTACHMENT0,Ut,0);M(b)&&_(Ut),i.unbindTexture()}w.depthBuffer&&oe(w)}function Ee(w){const b=w.textures;for(let K=0,ht=b.length;K<ht;K++){const vt=b[K];if(M(vt)){const ot=O(w),qt=r.get(vt).__webglTexture;i.bindTexture(ot,qt),_(ot),i.unbindTexture()}}}const I=[],de=[];function pe(w){if(w.samples>0){if(Ht(w)===!1){const b=w.textures,K=w.width,ht=w.height;let vt=o.COLOR_BUFFER_BIT;const ot=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(w),Ut=b.length>1;if(Ut)for(let kt=0;kt<b.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Kt=w.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let kt=0;kt<b.length;kt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[kt]);const St=r.get(b[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,K,ht,0,0,K,ht,vt,o.NEAREST),m===!0&&(I.length=0,de.length=0,I.push(o.COLOR_ATTACHMENT0+kt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(I.push(ot),de.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,de)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<b.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[kt]);const St=r.get(b[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const b=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ne(w){return Math.min(l.maxSamples,w.samples)}function Ht(w){const b=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ve(w){const b=d.render.frame;v.get(w)!==b&&(v.set(w,b),w.update())}function Yt(w,b){const K=w.colorSpace,ht=w.format,vt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||K!==Es&&K!==ka&&(De.getTransfer(K)===Ge?(ht!==yi||vt!==ua)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",K)),b}function ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=lt,this.resetTextureUnits=tt,this.setTexture2D=ft,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Je,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ht}function eE(o,e){function i(r,l=ka){let u;const d=De.getTransfer(l);if(r===ua)return o.UNSIGNED_BYTE;if(r===hh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ph)return o.UNSIGNED_SHORT_5_5_5_1;if(r===dg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===hg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ug)return o.BYTE;if(r===fg)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===dh)return o.INT;if(r===Tr)return o.UNSIGNED_INT;if(r===oa)return o.FLOAT;if(r===As)return o.HALF_FLOAT;if(r===pg)return o.ALPHA;if(r===mg)return o.RGB;if(r===yi)return o.RGBA;if(r===zo)return o.DEPTH_COMPONENT;if(r===Po)return o.DEPTH_STENCIL;if(r===xg)return o.RED;if(r===mh)return o.RED_INTEGER;if(r===xh)return o.RG;if(r===gh)return o.RG_INTEGER;if(r===_h)return o.RGBA_INTEGER;if(r===Sc||r===Mc||r===yc||r===bc)if(d===Ge)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===zd||r===Pd||r===Bd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Od)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fd||r===Id||r===Hd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Fd||r===Id)return d===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Hd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gd||r===Vd||r===Xd||r===kd||r===qd||r===Wd||r===Yd||r===Zd||r===jd||r===Kd||r===Qd||r===Jd||r===$d||r===th)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Gd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===th)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===eh||r===nh||r===ih)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===eh)return d===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ih)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ah||r===rh||r===sh||r===oh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===ah)return u.COMPRESSED_RED_RGTC1_EXT;if(r===rh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const nE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iE=`
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

}`;class aE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Ug(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new da({vertexShader:nE,fragmentShader:iE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fa(new Dc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rE extends Rs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,v=null,g=null,S=null,y=null,A=null;const R=typeof XRWebGLBinding<"u",M=new aE,_={},O=i.getContextAttributes();let U=null,F=null;const X=[],N=[],B=new Pe;let nt=null;const D=new di;D.viewport=new nn;const C=new di;C.viewport=new nn;const V=[D,C],tt=new EM;let lt=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=X[et];return ct===void 0&&(ct=new pd,X[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=X[et];return ct===void 0&&(ct=new pd,X[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=X[et];return ct===void 0&&(ct=new pd,X[et]=ct),ct.getHandSpace()};function ft(et){const ct=N.indexOf(et.inputSource);if(ct===-1)return;const Ct=X[ct];Ct!==void 0&&(Ct.update(et.inputSource,et.frame,h||d),Ct.dispatchEvent({type:et.type,data:et.inputSource}))}function P(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Z);for(let et=0;et<X.length;et++){const ct=N[et];ct!==null&&(N[et]=null,X[et].disconnect(ct))}lt=null,mt=null,M.reset();for(const et in _)delete _[et];e.setRenderTarget(U),y=null,S=null,g=null,l=null,F=null,Ot.stop(),r.isPresenting=!1,e.setPixelRatio(nt),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,r.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){p=et,r.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(et){h=et},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Z),O.xrCompatible!==!0&&await i.makeXRCompatible(),nt=e.getPixelRatio(),e.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,It=null,Xt=null;O.depth&&(Xt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=O.stencil?Po:zo,It=O.stencil?Oo:Tr);const oe={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),F=new Ar(S.textureWidth,S.textureHeight,{format:yi,type:ua,depthTexture:new wg(S.textureWidth,S.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ct={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Ar(y.framebufferWidth,y.framebufferHeight,{format:yi,type:ua,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Ot.setContext(l),Ot.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(et){for(let ct=0;ct<et.removed.length;ct++){const Ct=et.removed[ct],It=N.indexOf(Ct);It>=0&&(N[It]=null,X[It].disconnect(Ct))}for(let ct=0;ct<et.added.length;ct++){const Ct=et.added[ct];let It=N.indexOf(Ct);if(It===-1){for(let oe=0;oe<X.length;oe++)if(oe>=N.length){N.push(Ct),It=oe;break}else if(N[oe]===null){N[oe]=Ct,It=oe;break}if(It===-1)break}const Xt=X[It];Xt&&Xt.connect(Ct)}}const Y=new st,gt=new st;function _t(et,ct,Ct){Y.setFromMatrixPosition(ct.matrixWorld),gt.setFromMatrixPosition(Ct.matrixWorld);const It=Y.distanceTo(gt),Xt=ct.projectionMatrix.elements,oe=Ct.projectionMatrix.elements,Je=Xt[14]/(Xt[10]-1),fe=Xt[14]/(Xt[10]+1),Ee=(Xt[9]+1)/Xt[5],I=(Xt[9]-1)/Xt[5],de=(Xt[8]-1)/Xt[0],pe=(oe[8]+1)/oe[0],Ne=Je*de,Ht=Je*pe,Ve=It/(-de+pe),Yt=Ve*-de;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Yt),et.translateZ(Ve),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Xt[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const ie=Je+Ve,w=fe+Ve,b=Ne-Yt,K=Ht+(It-Yt),ht=Ee*fe/w*ie,vt=I*fe/w*ie;et.projectionMatrix.makePerspective(b,K,ht,vt,ie,w),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function L(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ct=et.near,Ct=et.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(Ct=M.depthFar)),tt.near=C.near=D.near=ct,tt.far=C.far=D.far=Ct,(lt!==tt.near||mt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),lt=tt.near,mt=tt.far),tt.layers.mask=et.layers.mask|6,D.layers.mask=tt.layers.mask&3,C.layers.mask=tt.layers.mask&5;const It=et.parent,Xt=tt.cameras;L(tt,It);for(let oe=0;oe<Xt.length;oe++)L(Xt[oe],It);Xt.length===2?_t(tt,D,C):tt.projectionMatrix.copy(D.projectionMatrix),at(et,tt,It)};function at(et,ct,Ct){Ct===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(Ct.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=lh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(et){m=et,S!==null&&(S.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(tt)},this.getCameraTexture=function(et){return _[et]};let Mt=null;function Et(et,ct){if(v=ct.getViewerPose(h||d),A=ct,v!==null){const Ct=v.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let It=!1;Ct.length!==tt.cameras.length&&(tt.cameras.length=0,It=!0);for(let fe=0;fe<Ct.length;fe++){const Ee=Ct[fe];let I=null;if(y!==null)I=y.getViewport(Ee);else{const pe=g.getViewSubImage(S,Ee);I=pe.viewport,fe===0&&(e.setRenderTargetTextures(F,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(F))}let de=V[fe];de===void 0&&(de=new di,de.layers.enable(fe),de.viewport=new nn,V[fe]=de),de.matrix.fromArray(Ee.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Ee.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(I.x,I.y,I.width,I.height),fe===0&&(tt.matrix.copy(de.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),It===!0&&tt.cameras.push(de)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const fe=g.getDepthInformation(Ct[0]);fe&&fe.isValid&&fe.texture&&M.init(fe,l.renderState)}if(Xt&&Xt.includes("camera-access")&&R){e.state.unbindTexture(),g=r.getBinding();for(let fe=0;fe<Ct.length;fe++){const Ee=Ct[fe].camera;if(Ee){let I=_[Ee];I||(I=new Ug,_[Ee]=I);const de=g.getCameraImage(Ee);I.sourceTexture=de}}}}for(let Ct=0;Ct<X.length;Ct++){const It=N[Ct],Xt=X[Ct];It!==null&&Xt!==void 0&&Xt.update(It,ct,h||d)}Mt&&Mt(et,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),A=null}const Ot=new Lg;Ot.setAnimationLoop(Et),this.setAnimationLoop=function(et){Mt=et},this.dispose=function(){}}}const _r=new Ui,sE=new hn;function oE(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Ag(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,O,U,F){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),g(M,_)):_.isMeshPhongMaterial?(u(M,_),v(M,_)):_.isMeshStandardMaterial?(u(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,F)):_.isMeshMatcapMaterial?(u(M,_),A(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),R(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&p(M,_)):_.isPointsMaterial?m(M,_,O,U):_.isSpriteMaterial?h(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Gn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Gn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const O=e.get(_),U=O.envMap,F=O.envMapRotation;U&&(M.envMap.value=U,_r.copy(F),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),M.envMapRotation.value.setFromMatrix4(sE.makeRotationFromEuler(_r)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function p(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,O,U){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*O,M.scale.value=U*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,O){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const O=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function lE(o,e,i,r){let l={},u={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const F=U.program;r.uniformBlockBinding(O,F)}function h(O,U){let F=l[O.id];F===void 0&&(A(O),F=v(O),l[O.id]=F,O.addEventListener("dispose",M));const X=U.program;r.updateUBOMapping(O,X);const N=e.render.frame;u[O.id]!==N&&(S(O),u[O.id]=N)}function v(O){const U=g();O.__bindingPointIndex=U;const F=o.createBuffer(),X=O.__size,N=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,X,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,F),F}function g(){for(let O=0;O<p;O++)if(d.indexOf(O)===-1)return d.push(O),O;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const U=l[O.id],F=O.uniforms,X=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let N=0,B=F.length;N<B;N++){const nt=Array.isArray(F[N])?F[N]:[F[N]];for(let D=0,C=nt.length;D<C;D++){const V=nt[D];if(y(V,N,D,X)===!0){const tt=V.__offset,lt=Array.isArray(V.value)?V.value:[V.value];let mt=0;for(let ft=0;ft<lt.length;ft++){const P=lt[ft],Z=R(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,tt+mt,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,mt),mt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(O,U,F,X){const N=O.value,B=U+"_"+F;if(X[B]===void 0)return typeof N=="number"||typeof N=="boolean"?X[B]=N:X[B]=N.clone(),!0;{const nt=X[B];if(typeof N=="number"||typeof N=="boolean"){if(nt!==N)return X[B]=N,!0}else if(nt.equals(N)===!1)return nt.copy(N),!0}return!1}function A(O){const U=O.uniforms;let F=0;const X=16;for(let B=0,nt=U.length;B<nt;B++){const D=Array.isArray(U[B])?U[B]:[U[B]];for(let C=0,V=D.length;C<V;C++){const tt=D[C],lt=Array.isArray(tt.value)?tt.value:[tt.value];for(let mt=0,ft=lt.length;mt<ft;mt++){const P=lt[mt],Z=R(P),Y=F%X,gt=Y%Z.boundary,_t=Y+gt;F+=gt,_t!==0&&X-_t<Z.storage&&(F+=X-_t),tt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=F,F+=Z.storage}}}const N=F%X;return N>0&&(F+=X-N),O.__size=F,O.__cache={},this}function R(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",O),U}function M(O){const U=O.target;U.removeEventListener("dispose",M);const F=d.indexOf(U.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:m,update:h,dispose:_}}const cE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ia=null;function uE(){return ia===null&&(ia=new pM(cE,32,32,xh,As),ia.minFilter=hi,ia.magFilter=hi,ia.wrapS=sa,ia.wrapT=sa,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class fE{constructor(e={}){const{canvas:i=IS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const A=new Set([_h,gh,mh]),R=new Set([ua,Tr,No,Oo,hh,ph]),M=new Uint32Array(4),_=new Int32Array(4);let O=null,U=null;const F=[],X=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let B=!1;this._outputColorSpace=fi;let nt=0,D=0,C=null,V=-1,tt=null;const lt=new nn,mt=new nn;let ft=null;const P=new Ue(0);let Z=0,Y=i.width,gt=i.height,_t=1,L=null,at=null;const Mt=new nn(0,0,Y,gt),Et=new nn(0,0,Y,gt);let Ot=!1;const et=new Dg;let ct=!1,Ct=!1;const It=new hn,Xt=new st,oe=new nn,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Ee(){return C===null?_t:1}let I=r;function de(T,k){return i.getContext(T,k)}try{const T={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fh}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",xt,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),I===null){const k="webgl2";if(I=de(k,T),I===null)throw de(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let pe,Ne,Ht,Ve,Yt,ie,w,b,K,ht,vt,ot,qt,Ut,Kt,kt,St,bt,Wt,Gt,Nt,ee,H,Dt;function At(){pe=new v3(I),pe.init(),ee=new eE(I,pe),Ne=new u3(I,pe,e,ee),Ht=new $1(I,pe),Ne.reversedDepthBuffer&&S&&Ht.buffers.depth.setReversed(!0),Ve=new y3(I),Yt=new H1,ie=new tE(I,pe,Ht,Yt,Ne,ee,Ve),w=new d3(N),b=new _3(N),K=new AM(I),H=new l3(I,K),ht=new S3(I,K,Ve,H),vt=new E3(I,ht,K,Ve),Wt=new b3(I,Ne,ie),kt=new f3(Yt),ot=new I1(N,w,b,pe,Ne,H,kt),qt=new oE(N,Yt),Ut=new V1,Kt=new Z1(pe),bt=new o3(N,w,b,Ht,vt,y,m),St=new Q1(N,vt,Ne),Dt=new lE(I,Ve,Ne,Ht),Gt=new c3(I,pe,Ve),Nt=new M3(I,pe,Ve),Ve.programs=ot.programs,N.capabilities=Ne,N.extensions=pe,N.properties=Yt,N.renderLists=Ut,N.shadowMap=St,N.state=Ht,N.info=Ve}At();const Rt=new rE(N,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(T){T!==void 0&&(_t=T,this.setSize(Y,gt,!1))},this.getSize=function(T){return T.set(Y,gt)},this.setSize=function(T,k,it=!0){if(Rt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,gt=k,i.width=Math.floor(T*_t),i.height=Math.floor(k*_t),it===!0&&(i.style.width=T+"px",i.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(Y*_t,gt*_t).floor()},this.setDrawingBufferSize=function(T,k,it){Y=T,gt=k,_t=it,i.width=Math.floor(T*it),i.height=Math.floor(k*it),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(lt)},this.getViewport=function(T){return T.copy(Mt)},this.setViewport=function(T,k,it,J){T.isVector4?Mt.set(T.x,T.y,T.z,T.w):Mt.set(T,k,it,J),Ht.viewport(lt.copy(Mt).multiplyScalar(_t).round())},this.getScissor=function(T){return T.copy(Et)},this.setScissor=function(T,k,it,J){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,k,it,J),Ht.scissor(mt.copy(Et).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(T){Ht.setScissorTest(Ot=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,it=!0){let J=0;if(T){let W=!1;if(C!==null){const Tt=C.texture.format;W=A.has(Tt)}if(W){const Tt=C.texture.type,wt=R.has(Tt),zt=bt.getClearColor(),Bt=bt.getClearAlpha(),Jt=zt.r,te=zt.g,Zt=zt.b;wt?(M[0]=Jt,M[1]=te,M[2]=Zt,M[3]=Bt,I.clearBufferuiv(I.COLOR,0,M)):(_[0]=Jt,_[1]=te,_[2]=Zt,_[3]=Bt,I.clearBufferiv(I.COLOR,0,_))}else J|=I.COLOR_BUFFER_BIT}k&&(J|=I.DEPTH_BUFFER_BIT),it&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",xt,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),bt.dispose(),Ut.dispose(),Kt.dispose(),Yt.dispose(),w.dispose(),b.dispose(),vt.dispose(),H.dispose(),Dt.dispose(),ot.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",ws),Rt.removeEventListener("sessionend",Us),pi.stop()};function yt(T){T.preventDefault(),Sx("WebGLRenderer: Context Lost."),B=!0}function xt(){Sx("WebGLRenderer: Context Restored."),B=!1;const T=Ve.autoReset,k=St.enabled,it=St.autoUpdate,J=St.needsUpdate,W=St.type;At(),Ve.autoReset=T,St.enabled=k,St.autoUpdate=it,St.needsUpdate=J,St.type=W}function Pt(T){en("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ne(T){const k=T.target;k.removeEventListener("dispose",ne),Be(k)}function Be(T){Te(T),Yt.remove(T)}function Te(T){const k=Yt.get(T).programs;k!==void 0&&(k.forEach(function(it){ot.releaseProgram(it)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,it,J,W,Tt){k===null&&(k=Je);const wt=W.isMesh&&W.matrixWorld.determinant()<0,zt=Lc(T,k,it,J,W);Ht.setMaterial(J,wt);let Bt=it.index,Jt=1;if(J.wireframe===!0){if(Bt=ht.getWireframeAttribute(it),Bt===void 0)return;Jt=2}const te=it.drawRange,Zt=it.attributes.position;let le=te.start*Jt,be=(te.start+te.count)*Jt;Tt!==null&&(le=Math.max(le,Tt.start*Jt),be=Math.min(be,(Tt.start+Tt.count)*Jt)),Bt!==null?(le=Math.max(le,0),be=Math.min(be,Bt.count)):Zt!=null&&(le=Math.max(le,0),be=Math.min(be,Zt.count));const Ae=be-le;if(Ae<0||Ae===1/0)return;H.setup(W,J,zt,it,Bt);let ve,Le=Gt;if(Bt!==null&&(ve=K.get(Bt),Le=Nt,Le.setIndex(ve)),W.isMesh)J.wireframe===!0?(Ht.setLineWidth(J.wireframeLinewidth*Ee()),Le.setMode(I.LINES)):Le.setMode(I.TRIANGLES);else if(W.isLine){let Qt=J.linewidth;Qt===void 0&&(Qt=1),Ht.setLineWidth(Qt*Ee()),W.isLineSegments?Le.setMode(I.LINES):W.isLineLoop?Le.setMode(I.LINE_LOOP):Le.setMode(I.LINE_STRIP)}else W.isPoints?Le.setMode(I.POINTS):W.isSprite&&Le.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Bo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))Le.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Qt=W._multiDrawStarts,Xe=W._multiDrawCounts,Se=W._multiDrawCount,xn=Bt?K.get(Bt).bytesPerElement:1,pa=Yt.get(J).currentProgram.getUniforms();for(let qe=0;qe<Se;qe++)pa.setValue(I,"_gl_DrawID",qe),Le.render(Qt[qe]/xn,Xe[qe])}else if(W.isInstancedMesh)Le.renderInstances(le,Ae,W.count);else if(it.isInstancedBufferGeometry){const Qt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Xe=Math.min(it.instanceCount,Qt);Le.renderInstances(le,Ae,Xe)}else Le.render(le,Ae)};function An(T,k,it){T.transparent===!0&&T.side===ra&&T.forceSinglePass===!1?(T.side=Gn,T.needsUpdate=!0,un(T,k,it),T.side=Ya,T.needsUpdate=!0,un(T,k,it),T.side=ra):un(T,k,it)}this.compile=function(T,k,it=null){it===null&&(it=T),U=Kt.get(it),U.init(k),X.push(U),it.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(U.pushLight(W),W.castShadow&&U.pushShadow(W))}),T!==it&&T.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(U.pushLight(W),W.castShadow&&U.pushShadow(W))}),U.setupLights();const J=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Tt=W.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const zt=Tt[wt];An(zt,it,W),J.add(zt)}else An(Tt,it,W),J.add(Tt)}),U=X.pop(),J},this.compileAsync=function(T,k,it=null){const J=this.compile(T,k,it);return new Promise(W=>{function Tt(){if(J.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&J.delete(wt)}),J.size===0){W(T);return}setTimeout(Tt,10)}pe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Xn=null;function Vo(T){Xn&&Xn(T)}function ws(){pi.stop()}function Us(){pi.start()}const pi=new Lg;pi.setAnimationLoop(Vo),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(T){Xn=T,Rt.setAnimationLoop(T),T===null?pi.stop():pi.start()},Rt.addEventListener("sessionstart",ws),Rt.addEventListener("sessionend",Us),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(k),k=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,k,C),U=Kt.get(T,X.length),U.init(k),X.push(U),It.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),et.setFromProjectionMatrix(It,Di,k.reversedDepth),Ct=this.localClippingEnabled,ct=kt.init(this.clippingPlanes,Ct),O=Ut.get(T,F.length),O.init(),F.push(O),Rt.enabled===!0&&Rt.isPresenting===!0){const Tt=N.xr.getDepthSensingMesh();Tt!==null&&ja(Tt,k,-1/0,N.sortObjects)}ja(T,k,0,N.sortObjects),O.finish(),N.sortObjects===!0&&O.sort(L,at),fe=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,fe&&bt.addToRenderList(O,T),this.info.render.frame++,ct===!0&&kt.beginShadows();const it=U.state.shadowsArray;St.render(it,T,k),ct===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=O.opaque,W=O.transmissive;if(U.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(W.length>0)for(let wt=0,zt=Tt.length;wt<zt;wt++){const Bt=Tt[wt];Ns(J,W,T,Bt)}fe&&bt.render(T);for(let wt=0,zt=Tt.length;wt<zt;wt++){const Bt=Tt[wt];Ls(O,T,Bt,Bt.viewport)}}else W.length>0&&Ns(J,W,T,k),fe&&bt.render(T),Ls(O,T,k);C!==null&&D===0&&(ie.updateMultisampleRenderTarget(C),ie.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(N,T,k),H.resetDefaultState(),V=-1,tt=null,X.pop(),X.length>0?(U=X[X.length-1],ct===!0&&kt.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?O=F[F.length-1]:O=null};function ja(T,k,it,J){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)it=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||et.intersectsSprite(T)){J&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(It);const wt=vt.update(T),zt=T.material;zt.visible&&O.push(T,wt,zt,it,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||et.intersectsObject(T))){const wt=vt.update(T),zt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),oe.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),oe.copy(wt.boundingSphere.center)),oe.applyMatrix4(T.matrixWorld).applyMatrix4(It)),Array.isArray(zt)){const Bt=wt.groups;for(let Jt=0,te=Bt.length;Jt<te;Jt++){const Zt=Bt[Jt],le=zt[Zt.materialIndex];le&&le.visible&&O.push(T,wt,le,it,oe.z,Zt)}}else zt.visible&&O.push(T,wt,zt,it,oe.z,null)}}const Tt=T.children;for(let wt=0,zt=Tt.length;wt<zt;wt++)ja(Tt[wt],k,it,J)}function Ls(T,k,it,J){const{opaque:W,transmissive:Tt,transparent:wt}=T;U.setupLightsView(it),ct===!0&&kt.setGlobalState(N.clippingPlanes,it),J&&Ht.viewport(lt.copy(J)),W.length>0&&kn(W,k,it),Tt.length>0&&kn(Tt,k,it),wt.length>0&&kn(wt,k,it),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Ns(T,k,it,J){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[J.id]===void 0&&(U.state.transmissionRenderTarget[J.id]=new Ar(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?As:ua,minFilter:yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Tt=U.state.transmissionRenderTarget[J.id],wt=J.viewport||lt;Tt.setSize(wt.z*N.transmissionResolutionScale,wt.w*N.transmissionResolutionScale);const zt=N.getRenderTarget(),Bt=N.getActiveCubeFace(),Jt=N.getActiveMipmapLevel();N.setRenderTarget(Tt),N.getClearColor(P),Z=N.getClearAlpha(),Z<1&&N.setClearColor(16777215,.5),N.clear(),fe&&bt.render(it);const te=N.toneMapping;N.toneMapping=Wa;const Zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),U.setupLightsView(J),ct===!0&&kt.setGlobalState(N.clippingPlanes,J),kn(T,it,J),ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let be=0,Ae=k.length;be<Ae;be++){const ve=k[be],{object:Le,geometry:Qt,material:Xe,group:Se}=ve;if(Xe.side===ra&&Le.layers.test(J.layers)){const xn=Xe.side;Xe.side=Gn,Xe.needsUpdate=!0,an(Le,it,J,Qt,Xe,Se),Xe.side=xn,Xe.needsUpdate=!0,le=!0}}le===!0&&(ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt))}N.setRenderTarget(zt,Bt,Jt),N.setClearColor(P,Z),Zt!==void 0&&(J.viewport=Zt),N.toneMapping=te}function kn(T,k,it){const J=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Tt=T.length;W<Tt;W++){const wt=T[W],{object:zt,geometry:Bt,group:Jt}=wt;let te=wt.material;te.allowOverride===!0&&J!==null&&(te=J),zt.layers.test(it.layers)&&an(zt,k,it,Bt,te,Jt)}}function an(T,k,it,J,W,Tt){T.onBeforeRender(N,k,it,J,W,Tt),T.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(N,k,it,J,T,Tt),W.transparent===!0&&W.side===ra&&W.forceSinglePass===!1?(W.side=Gn,W.needsUpdate=!0,N.renderBufferDirect(it,k,J,W,T,Tt),W.side=Ya,W.needsUpdate=!0,N.renderBufferDirect(it,k,J,W,T,Tt),W.side=ra):N.renderBufferDirect(it,k,J,W,T,Tt),T.onAfterRender(N,k,it,J,W,Tt)}function un(T,k,it){k.isScene!==!0&&(k=Je);const J=Yt.get(T),W=U.state.lights,Tt=U.state.shadowsArray,wt=W.state.version,zt=ot.getParameters(T,W.state,Tt,k,it),Bt=ot.getProgramCacheKey(zt);let Jt=J.programs;J.environment=T.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(T.isMeshStandardMaterial?b:w).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Jt===void 0&&(T.addEventListener("dispose",ne),Jt=new Map,J.programs=Jt);let te=Jt.get(Bt);if(te!==void 0){if(J.currentProgram===te&&J.lightsStateVersion===wt)return Rr(T,zt),te}else zt.uniforms=ot.getUniforms(T),T.onBeforeCompile(zt,N),te=ot.acquireProgram(zt,Bt),Jt.set(Bt,te),J.uniforms=zt.uniforms;const Zt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Zt.clippingPlanes=kt.uniform),Rr(T,zt),J.needsLights=Xo(T),J.lightsStateVersion=wt,J.needsLights&&(Zt.ambientLightColor.value=W.state.ambient,Zt.lightProbe.value=W.state.probe,Zt.directionalLights.value=W.state.directional,Zt.directionalLightShadows.value=W.state.directionalShadow,Zt.spotLights.value=W.state.spot,Zt.spotLightShadows.value=W.state.spotShadow,Zt.rectAreaLights.value=W.state.rectArea,Zt.ltc_1.value=W.state.rectAreaLTC1,Zt.ltc_2.value=W.state.rectAreaLTC2,Zt.pointLights.value=W.state.point,Zt.pointLightShadows.value=W.state.pointShadow,Zt.hemisphereLights.value=W.state.hemi,Zt.directionalShadowMap.value=W.state.directionalShadowMap,Zt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Zt.spotShadowMap.value=W.state.spotShadowMap,Zt.spotLightMatrix.value=W.state.spotLightMatrix,Zt.spotLightMap.value=W.state.spotLightMap,Zt.pointShadowMap.value=W.state.pointShadowMap,Zt.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=te,J.uniformsList=null,te}function Li(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Ec.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Rr(T,k){const it=Yt.get(T);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function Lc(T,k,it,J,W){k.isScene!==!0&&(k=Je),ie.resetTextureUnits();const Tt=k.fog,wt=J.isMeshStandardMaterial?k.environment:null,zt=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Es,Bt=(J.isMeshStandardMaterial?b:w).get(J.envMap||wt),Jt=J.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,te=!!it.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Zt=!!it.morphAttributes.position,le=!!it.morphAttributes.normal,be=!!it.morphAttributes.color;let Ae=Wa;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ae=N.toneMapping);const ve=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Le=ve!==void 0?ve.length:0,Qt=Yt.get(J),Xe=U.state.lights;if(ct===!0&&(Ct===!0||T!==tt)){const _n=T===tt&&J.id===V;kt.setState(J,T,_n)}let Se=!1;J.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Xe.state.version||Qt.outputColorSpace!==zt||W.isBatchedMesh&&Qt.batching===!1||!W.isBatchedMesh&&Qt.batching===!0||W.isBatchedMesh&&Qt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Qt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Qt.instancing===!1||!W.isInstancedMesh&&Qt.instancing===!0||W.isSkinnedMesh&&Qt.skinning===!1||!W.isSkinnedMesh&&Qt.skinning===!0||W.isInstancedMesh&&Qt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Qt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Qt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Qt.instancingMorph===!1&&W.morphTexture!==null||Qt.envMap!==Bt||J.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==kt.numPlanes||Qt.numIntersection!==kt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==te||Qt.morphTargets!==Zt||Qt.morphNormals!==le||Qt.morphColors!==be||Qt.toneMapping!==Ae||Qt.morphTargetsCount!==Le)&&(Se=!0):(Se=!0,Qt.__version=J.version);let xn=Qt.currentProgram;Se===!0&&(xn=un(J,k,W));let pa=!1,qe=!1,Ni=!1;const We=xn.getUniforms(),gn=Qt.uniforms;if(Ht.useProgram(xn.program)&&(pa=!0,qe=!0,Ni=!0),J.id!==V&&(V=J.id,qe=!0),pa||tt!==T){Ht.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),We.setValue(I,"projectionMatrix",T.projectionMatrix),We.setValue(I,"viewMatrix",T.matrixWorldInverse);const Mn=We.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,Xt.setFromMatrixPosition(T.matrixWorld)),Ne.logarithmicDepthBuffer&&We.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&We.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),tt!==T&&(tt=T,qe=!0,Ni=!0)}if(W.isSkinnedMesh){We.setOptional(I,W,"bindMatrix"),We.setOptional(I,W,"bindMatrixInverse");const _n=W.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),We.setValue(I,"boneTexture",_n.boneTexture,ie))}W.isBatchedMesh&&(We.setOptional(I,W,"batchingTexture"),We.setValue(I,"batchingTexture",W._matricesTexture,ie),We.setOptional(I,W,"batchingIdTexture"),We.setValue(I,"batchingIdTexture",W._indirectTexture,ie),We.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&We.setValue(I,"batchingColorTexture",W._colorsTexture,ie));const fn=it.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Wt.update(W,it,xn),(qe||Qt.receiveShadow!==W.receiveShadow)&&(Qt.receiveShadow=W.receiveShadow,We.setValue(I,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(gn.envMap.value=Bt,gn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(gn.envMapIntensity.value=k.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=uE()),qe&&(We.setValue(I,"toneMappingExposure",N.toneMappingExposure),Qt.needsLights&&Nc(gn,Ni),Tt&&J.fog===!0&&qt.refreshFogUniforms(gn,Tt),qt.refreshMaterialUniforms(gn,J,_t,gt,U.state.transmissionRenderTarget[T.id]),Ec.upload(I,Li(Qt),gn,ie)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ec.upload(I,Li(Qt),gn,ie),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&We.setValue(I,"center",W.center),We.setValue(I,"modelViewMatrix",W.modelViewMatrix),We.setValue(I,"normalMatrix",W.normalMatrix),We.setValue(I,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const _n=J.uniformsGroups;for(let Mn=0,bi=_n.length;Mn<bi;Mn++){const Oi=_n[Mn];Dt.update(Oi,xn),Dt.bind(Oi,xn)}}return xn}function Nc(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Xo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,k,it){const J=Yt.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Yt.get(T.texture).__webglTexture=k,Yt.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:it,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const it=Yt.get(T);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0};const Ka=I.createFramebuffer();this.setRenderTarget=function(T,k=0,it=0){C=T,nt=k,D=it;let J=!0,W=null,Tt=!1,wt=!1;if(T){const Bt=Yt.get(T);if(Bt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(Bt.__webglFramebuffer===void 0)ie.setupRenderTarget(T);else if(Bt.__hasExternalTextures)ie.rebindTextures(T,Yt.get(T.texture).__webglTexture,Yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Zt=T.depthTexture;if(Bt.__boundDepthTexture!==Zt){if(Zt!==null&&Yt.has(Zt)&&(T.width!==Zt.image.width||T.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(T)}}const Jt=T.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(wt=!0);const te=Yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(te[k])?W=te[k][it]:W=te[k],Tt=!0):T.samples>0&&ie.useMultisampledRTT(T)===!1?W=Yt.get(T).__webglMultisampledFramebuffer:Array.isArray(te)?W=te[it]:W=te,lt.copy(T.viewport),mt.copy(T.scissor),ft=T.scissorTest}else lt.copy(Mt).multiplyScalar(_t).floor(),mt.copy(Et).multiplyScalar(_t).floor(),ft=Ot;if(it!==0&&(W=Ka),Ht.bindFramebuffer(I.FRAMEBUFFER,W)&&J&&Ht.drawBuffers(T,W),Ht.viewport(lt),Ht.scissor(mt),Ht.setScissorTest(ft),Tt){const Bt=Yt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,it)}else if(wt){const Bt=k;for(let Jt=0;Jt<T.textures.length;Jt++){const te=Yt.get(T.textures[Jt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Jt,te.__webglTexture,it,Bt)}}else if(T!==null&&it!==0){const Bt=Yt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,it)}V=-1},this.readRenderTargetPixels=function(T,k,it,J,W,Tt,wt,zt=0){if(!(T&&T.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt){Ht.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const Jt=T.textures[zt],te=Jt.format,Zt=Jt.type;if(!Ne.textureFormatReadable(te)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Zt)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-J&&it>=0&&it<=T.height-W&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+zt),I.readPixels(k,it,J,W,ee.convert(te),ee.convert(Zt),Tt))}finally{const Jt=C!==null?Yt.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(I.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(T,k,it,J,W,Tt,wt,zt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt)if(k>=0&&k<=T.width-J&&it>=0&&it<=T.height-W){Ht.bindFramebuffer(I.FRAMEBUFFER,Bt);const Jt=T.textures[zt],te=Jt.format,Zt=Jt.type;if(!Ne.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+zt),I.readPixels(k,it,J,W,ee.convert(te),ee.convert(Zt),0);const be=C!==null?Yt.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(I.FRAMEBUFFER,be);const Ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await HS(I,Ae,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(le),I.deleteSync(Ae),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,it=0){const J=Math.pow(2,-it),W=Math.floor(T.image.width*J),Tt=Math.floor(T.image.height*J),wt=k!==null?k.x:0,zt=k!==null?k.y:0;ie.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,it,0,0,wt,zt,W,Tt),Ht.unbindTexture()};const Os=I.createFramebuffer(),ha=I.createFramebuffer();this.copyTextureToTexture=function(T,k,it=null,J=null,W=0,Tt=null){Tt===null&&(W!==0?(Bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=W,W=0):Tt=0);let wt,zt,Bt,Jt,te,Zt,le,be,Ae;const ve=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(it!==null)wt=it.max.x-it.min.x,zt=it.max.y-it.min.y,Bt=it.isBox3?it.max.z-it.min.z:1,Jt=it.min.x,te=it.min.y,Zt=it.isBox3?it.min.z:0;else{const fn=Math.pow(2,-W);wt=Math.floor(ve.width*fn),zt=Math.floor(ve.height*fn),T.isDataArrayTexture?Bt=ve.depth:T.isData3DTexture?Bt=Math.floor(ve.depth*fn):Bt=1,Jt=0,te=0,Zt=0}J!==null?(le=J.x,be=J.y,Ae=J.z):(le=0,be=0,Ae=0);const Le=ee.convert(k.format),Qt=ee.convert(k.type);let Xe;k.isData3DTexture?(ie.setTexture3D(k,0),Xe=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ie.setTexture2DArray(k,0),Xe=I.TEXTURE_2D_ARRAY):(ie.setTexture2D(k,0),Xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Se=I.getParameter(I.UNPACK_ROW_LENGTH),xn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),pa=I.getParameter(I.UNPACK_SKIP_PIXELS),qe=I.getParameter(I.UNPACK_SKIP_ROWS),Ni=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,te),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);const We=T.isDataArrayTexture||T.isData3DTexture,gn=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const fn=Yt.get(T),_n=Yt.get(k),Mn=Yt.get(fn.__renderTarget),bi=Yt.get(_n.__renderTarget);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Oi=0;Oi<Bt;Oi++)We&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.get(T).__webglTexture,W,Zt+Oi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.get(k).__webglTexture,Tt,Ae+Oi)),I.blitFramebuffer(Jt,te,wt,zt,le,be,wt,zt,I.DEPTH_BUFFER_BIT,I.NEAREST);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Yt.has(T)){const fn=Yt.get(T),_n=Yt.get(k);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,Os),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,ha);for(let Mn=0;Mn<Bt;Mn++)We?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,W,Zt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,W),gn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_n.__webglTexture,Tt,Ae+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_n.__webglTexture,Tt),W!==0?I.blitFramebuffer(Jt,te,wt,zt,le,be,wt,zt,I.COLOR_BUFFER_BIT,I.NEAREST):gn?I.copyTexSubImage3D(Xe,Tt,le,be,Ae+Mn,Jt,te,wt,zt):I.copyTexSubImage2D(Xe,Tt,le,be,Jt,te,wt,zt);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else gn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Xe,Tt,le,be,Ae,wt,zt,Bt,Le,Qt,ve.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Xe,Tt,le,be,Ae,wt,zt,Bt,Le,ve.data):I.texSubImage3D(Xe,Tt,le,be,Ae,wt,zt,Bt,Le,Qt,ve):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,le,be,wt,zt,Le,Qt,ve.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,le,be,ve.width,ve.height,Le,ve.data):I.texSubImage2D(I.TEXTURE_2D,Tt,le,be,wt,zt,Le,Qt,ve);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pa),I.pixelStorei(I.UNPACK_SKIP_ROWS,qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ni),Tt===0&&k.generateMipmaps&&I.generateMipmap(Xe),Ht.unbindTexture()},this.initRenderTarget=function(T){Yt.get(T).__webglFramebuffer===void 0&&ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ie.setTextureCube(T,0):T.isData3DTexture?ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ie.setTexture2DArray(T,0):ie.setTexture2D(T,0),Ht.unbindTexture()},this.resetState=function(){nt=0,D=0,C=null,Ht.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const Uo=new st;function ui(o,e,i,r,l,u){const d=2*Math.PI*l/4,p=Math.max(u-2*l,0),m=Math.PI/4;Uo.copy(e),Uo[r]=0,Uo.normalize();const h=.5*d/(d+p),v=1-Uo.angleTo(o)/m;return Math.sign(Uo[i])===1?v*h:p/(d+p)+h+h*(1-v)}class Mh extends Cs{constructor(e=1,i=1,r=1,l=2,u=.1){const d=l*2+1;if(u=Math.min(e/2,i/2,r/2,u),super(1,1,1,d,d,d),this.type="RoundedBoxGeometry",this.parameters={width:e,height:i,depth:r,segments:l,radius:u},d===1)return;const p=this.toNonIndexed();this.index=null,this.attributes.position=p.attributes.position,this.attributes.normal=p.attributes.normal,this.attributes.uv=p.attributes.uv;const m=new st,h=new st,v=new st(e,i,r).divideScalar(2).subScalar(u),g=this.attributes.position.array,S=this.attributes.normal.array,y=this.attributes.uv.array,A=g.length/6,R=new st,M=.5/d;for(let _=0,O=0;_<g.length;_+=3,O+=2)switch(m.fromArray(g,_),h.copy(m),h.x-=Math.sign(h.x)*M,h.y-=Math.sign(h.y)*M,h.z-=Math.sign(h.z)*M,h.normalize(),g[_+0]=v.x*Math.sign(m.x)+h.x*u,g[_+1]=v.y*Math.sign(m.y)+h.y*u,g[_+2]=v.z*Math.sign(m.z)+h.z*u,S[_+0]=h.x,S[_+1]=h.y,S[_+2]=h.z,Math.floor(_/A)){case 0:R.set(1,0,0),y[O+0]=ui(R,h,"z","y",u,r),y[O+1]=1-ui(R,h,"y","z",u,i);break;case 1:R.set(-1,0,0),y[O+0]=1-ui(R,h,"z","y",u,r),y[O+1]=1-ui(R,h,"y","z",u,i);break;case 2:R.set(0,1,0),y[O+0]=1-ui(R,h,"x","z",u,e),y[O+1]=ui(R,h,"z","x",u,r);break;case 3:R.set(0,-1,0),y[O+0]=1-ui(R,h,"x","z",u,e),y[O+1]=1-ui(R,h,"z","x",u,r);break;case 4:R.set(0,0,1),y[O+0]=1-ui(R,h,"x","y",u,e),y[O+1]=1-ui(R,h,"y","x",u,i);break;case 5:R.set(0,0,-1),y[O+0]=ui(R,h,"x","y",u,e),y[O+1]=1-ui(R,h,"y","x",u,i);break}}static fromJSON(e){return new Mh(e.width,e.height,e.depth,e.segments,e.radius)}}function dE({tier:o}){const e=br.useRef(null);return br.useEffect(()=>{const i=e.current,r=new hM,l=new di(50,window.innerWidth/window.innerHeight,1,1e3);l.position.z=80;const u=new fE({antialias:!0});u.setSize(window.innerWidth,window.innerHeight),i.appendChild(u.domElement);const d=new bM(16777215,.5);d.castShadow=!0,r.add(d);const p=new Mh(20,30,.5,2,5),m=new _M({color:65280}),h=new fa(p,m);r.add(h);const v=()=>{h.rotation.y+=.01,u.render(r,l),requestAnimationFrame(v)};v();const g=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g),i.removeChild(u.domElement),p.dispose(),m.dispose(),u.dispose()}},[o]),Hn.jsx("div",{ref:e,style:{width:"100vw",height:"100vh"}})}function hE(){const[o,e]=br.useState([{id:1,tier:0}]),i=br.useRef(null),r=l=>l<10?0:l<20?1:l<30?2:l<40?3:l<50?4:Math.floor(l/10);return br.useEffect(()=>{const l=new IntersectionObserver(d=>{d.forEach(p=>{p.isIntersecting&&e(m=>{const h=m.length+1;return[...m,{id:h,tier:r(h-1)}]})})},{root:i.current,threshold:.5}),u=document.getElementById(`packet-${o.length-1}`);return u&&l.observe(u),()=>l.disconnect()},[o]),Hn.jsx("div",{ref:i,style:{height:"100vh",overflowY:"scroll",scrollSnapType:"y mandatory"},children:o.map((l,u)=>Hn.jsx("div",{id:`packet-${u}`,style:{height:"100vh",scrollSnapAlign:"start",borderBottom:"1px solid #222"},children:Hn.jsx(dE,{tier:l.tier})},l.id))})}function pE(){const[o,e]=br.useState(!1),i=()=>{e(!0)};return Hn.jsx(Hn.Fragment,{children:o?Hn.jsx(hE,{}):Hn.jsx(Qv,{onStart:i})})}Kv.createRoot(document.getElementById("root")).render(Hn.jsx(br.StrictMode,{children:Hn.jsx(pE,{})}));
