function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequirebbb8;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequirebbb8=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.524594f7.js","eyyUD":"icons.c14567a0.svg"}'));var a={},c=function(e){return e&&e.Math==Math&&e};a=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof t&&t)||function(){return this}()||Function("return this")();var s,u;s=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,f,p,d={};p=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h=Function.prototype,v=h.call,g=p&&h.bind.bind(v,v);d=p?g:function(e){return function(){return v.apply(e,arguments)}};var y,m={},b="object"==typeof document&&document.all,_=(y={all:b,IS_HTMLDDA:void 0===b&&void 0!==b}).all;m=y.IS_HTMLDDA?function(e){return"function"==typeof e||e===_}:function(e){return"function"==typeof e};var w,k,E,S={};E=function(e){return null==e};var O=TypeError;k=function(e){if(E(e))throw O("Can't call method on "+e);return e};var j=Object;w=function(e){return j(k(e))};var L=d({}.hasOwnProperty);S=Object.hasOwn||function(e,t){return L(w(e),t)};var T,x=Function.prototype,$=s&&Object.getOwnPropertyDescriptor,P=S(x,"name"),M={EXISTS:P,PROPER:P&&"something"===function(){}.name,CONFIGURABLE:P&&(!s||s&&$(x,"name").configurable)}.CONFIGURABLE,I={},A={},H=Object.defineProperty;T=function(e,t){try{H(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t};var F="__core-js_shared__",N=a[F]||T(F,{});A=N;var q=d(Function.toString);m(A.inspectSource)||(A.inspectSource=function(e){return q(e)}),I=A.inspectSource;var C,R,D=a.WeakMap;R=m(D)&&/native code/.test(String(D));var G={},U=y.all;G=y.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:m(e)||e===U}:function(e){return"object"==typeof e?null!==e:m(e)};var B,z,W,J={},V=a.document,Y=G(V)&&G(V.createElement);W=function(e){return Y?V.createElement(e):{}},z=!s&&!u((function(){return 7!=Object.defineProperty(W("div"),"a",{get:function(){return 7}}).a}));var Q;Q=s&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(e){if(G(e))return e;throw Z(X(e)+" is not an object")};var ee,te,ne={},re=Function.prototype.call;ne=p?re.bind(re):function(){return re.apply(re,arguments)};var ie,oe={};ie=function(e,t){return arguments.length<2?(n=a[e],m(n)?n:void 0):a[e]&&a[e][t];var n};var ae={};ae=d({}.isPrototypeOf);var ce,se,ue,le={};le="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var fe,pe,de=a.process,he=a.Deno,ve=de&&de.versions||he&&he.version,ge=ve&&ve.v8;ge&&(pe=(fe=ge.split("."))[0]>0&&fe[0]<4?1:+(fe[0]+fe[1])),!pe&&le&&(!(fe=le.match(/Edge\/(\d+)/))||fe[1]>=74)&&(fe=le.match(/Chrome\/(\d+)/))&&(pe=+fe[1]),ue=pe,ce=(se=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ue&&ue<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ye=Object;oe=ce?function(e){return"symbol"==typeof e}:function(e){var t=ie("Symbol");return m(t)&&ae(t.prototype,ye(e))};var me,be,_e,we=String;_e=function(e){try{return we(e)}catch(e){return"Object"}};var ke=TypeError;be=function(e){if(m(e))return e;throw ke(_e(e)+" is not a function")},me=function(e,t){var n=e[t];return E(n)?void 0:be(n)};var Ee,Se=TypeError;Ee=function(e,t){var n,r;if("string"===t&&m(n=e.toString)&&!G(r=ne(n,e)))return r;if(m(n=e.valueOf)&&!G(r=ne(n,e)))return r;if("string"!==t&&m(n=e.toString)&&!G(r=ne(n,e)))return r;throw Se("Can't convert object to primitive value")};var Oe;(Oe=function(e,t){return A[e]||(A[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",source:"https://github.com/zloirock/core-js"});var je,Le=0,Te=Math.random(),xe=d(1..toString);je=function(e){return"Symbol("+(void 0===e?"":e)+")_"+xe(++Le+Te,36)};var $e=a.Symbol,Pe=Oe("wks"),Me=ce?$e.for||$e:$e&&$e.withoutSetter||je,Ie=TypeError,Ae=function(e){return S(Pe,e)||(Pe[e]=se&&S($e,e)?$e[e]:Me("Symbol."+e)),Pe[e]}("toPrimitive");te=function(e,t){if(!G(e)||oe(e))return e;var n,r=me(e,Ae);if(r){if(void 0===t&&(t="default"),n=ne(r,e,t),!G(n)||oe(n))return n;throw Ie("Can't convert object to primitive value")}return void 0===t&&(t="number"),Ee(e,t)},ee=function(e){var t=te(e,"string");return oe(t)?t:t+""};var He=TypeError,Fe=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,qe="enumerable",Ce="configurable",Re="writable";B=s?Q?function(e,t,n){if(K(e),t=ee(t),K(n),"function"==typeof e&&"prototype"===t&&"value"in n&&Re in n&&!n[Re]){var r=Ne(e,t);r&&r[Re]&&(e[t]=n.value,n={configurable:Ce in n?n[Ce]:r[Ce],enumerable:qe in n?n[qe]:r[qe],writable:!1})}return Fe(e,t,n)}:Fe:function(e,t,n){if(K(e),t=ee(t),K(n),z)try{return Fe(e,t,n)}catch(e){}if("get"in n||"set"in n)throw He("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var De;De=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},J=s?function(e,t,n){return B(e,t,De(1,n))}:function(e,t,n){return e[t]=n,e};var Ge,Ue=Oe("keys");Ge=function(e){return Ue[e]||(Ue[e]=je(e))};var Be={};Be={};var ze,We,Je,Ve="Object already initialized",Ye=a.TypeError,Qe=a.WeakMap;if(R||A.state){var Ke=A.state||(A.state=new Qe);Ke.get=Ke.get,Ke.has=Ke.has,Ke.set=Ke.set,ze=function(e,t){if(Ke.has(e))throw Ye(Ve);return t.facade=e,Ke.set(e,t),t},We=function(e){return Ke.get(e)||{}},Je=function(e){return Ke.has(e)}}else{var Xe=Ge("state");Be[Xe]=!0,ze=function(e,t){if(S(e,Xe))throw Ye(Ve);return t.facade=e,J(e,Xe,t),t},We=function(e){return S(e,Xe)?e[Xe]:{}},Je=function(e){return S(e,Xe)}}var Ze=(C={set:ze,get:We,has:Je,enforce:function(e){return Je(e)?We(e):ze(e,{})},getterFor:function(e){return function(t){var n;if(!G(t)||(n=We(t)).type!==e)throw Ye("Incompatible receiver, "+e+" required");return n}}}).enforce,et=C.get,tt=String,nt=Object.defineProperty,rt=d("".slice),it=d("".replace),ot=d([].join),at=s&&!u((function(){return 8!==nt((function(){}),"length",{value:8}).length})),ct=String(String).split("String"),st=f=function(e,t,n){"Symbol("===rt(tt(t),0,7)&&(t="["+it(tt(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!S(e,"name")||M&&e.name!==t)&&(s?nt(e,"name",{value:t,configurable:!0}):e.name=t),at&&n&&S(n,"arity")&&e.length!==n.arity&&nt(e,"length",{value:n.arity});try{n&&S(n,"constructor")&&n.constructor?s&&nt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=Ze(e);return S(r,"source")||(r.source=ot(ct,"string"==typeof t?t:"")),e};Function.prototype.toString=st((function(){return m(this)&&et(this).source||I(this)}),"toString"),l=function(e,t,n){return n.get&&f(n.get,t,{getter:!0}),n.set&&f(n.set,t,{setter:!0}),B(e,t,n)};var ut;ut=function(){var e=K(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var lt=a.RegExp,ft=lt.prototype;s&&u((function(){var e=!0;try{lt(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(ft,"flags").get.call(t)!==r||n!==r}))&&l(ft,"flags",{configurable:!0,get:ut});var pt,dt,ht,vt={}.propertyIsEnumerable,gt=Object.getOwnPropertyDescriptor,yt=gt&&!vt.call({1:2},1);ht=yt?function(e){var t=gt(this,e);return!!t&&t.enumerable}:vt;var mt,bt,_t={},wt=d({}.toString),kt=d("".slice);bt=function(e){return kt(wt(e),8,-1)};var Et=Object,St=d("".split);_t=u((function(){return!Et("z").propertyIsEnumerable(0)}))?function(e){return"String"==bt(e)?St(e,""):Et(e)}:Et,mt=function(e){return _t(k(e))};var Ot,jt=Object.getOwnPropertyDescriptor,Lt=dt=s?jt:function(e,t){if(e=mt(e),t=ee(t),z)try{return jt(e,t)}catch(e){}if(S(e,t))return De(!ne(ht,e,t),e[t])};Ot=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(m(n)&&f(n,o,r),r.global)i?e[t]=n:T(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:B(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var Tt,xt,$t,Pt,Mt,It={},At={},Ht=Math.ceil,Ft=Math.floor;At=Math.trunc||function(e){var t=+e;return(t>0?Ft:Ht)(t)},Mt=function(e){var t=+e;return t!=t||0===t?0:At(t)};var Nt=Math.max,qt=Math.min;Pt=function(e,t){var n=Mt(e);return n<0?Nt(n+t,0):qt(n,t)};var Ct,Rt,Dt=Math.min;Rt=function(e){return e>0?Dt(Mt(e),9007199254740991):0},Ct=function(e){return Rt(e.length)};var Gt=function(e){return function(t,n,r){var i,o=mt(t),a=Ct(o),c=Pt(r,a);if(e&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===n)return e||c||0;return!e&&-1}},Ut={includes:Gt(!0),indexOf:Gt(!1)}.indexOf,Bt=d([].push);$t=function(e,t){var n,r=mt(e),i=0,o=[];for(n in r)!S(Be,n)&&S(r,n)&&Bt(o,n);for(;t.length>i;)S(r,n=t[i++])&&(~Ut(o,n)||Bt(o,n));return o};var zt,Wt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");xt=Object.getOwnPropertyNames||function(e){return $t(e,Wt)},zt=Object.getOwnPropertySymbols;var Jt=d([].concat);It=ie("Reflect","ownKeys")||function(e){var t=xt(K(e));return zt?Jt(t,zt(e)):t},Tt=function(e,t,n){for(var r=It(t),i=B,o=dt,a=0;a<r.length;a++){var c=r[a];S(e,c)||n&&S(n,c)||i(e,c,o(t,c))}};var Vt={},Yt=/#|\.prototype\./,Qt=function(e,t){var n=Xt[Kt(e)];return n==en||n!=Zt&&(m(t)?u(t):!!t)},Kt=Qt.normalize=function(e){return String(e).replace(Yt,".").toLowerCase()},Xt=Qt.data={},Zt=Qt.NATIVE="N",en=Qt.POLYFILL="P";Vt=Qt,pt=function(e,t){var n,r,i,o,c,s=e.target,u=e.global,l=e.stat;if(n=u?a:l?a[s]||T(s,{}):(a[s]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(c=Lt(n,r))&&c.value:n[r],!Vt(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Tt(o,i)}(e.sham||i&&i.sham)&&J(o,"sham",!0),Ot(n,r,o,e)}};var tn,nn={},rn=Function.prototype,on=rn.apply,an=rn.call;nn="object"==typeof Reflect&&Reflect.apply||(p?an.bind(on):function(){return an.apply(on,arguments)});var cn,sn,un=(sn=function(e){if("Function"===bt(e))return d(e)})(sn.bind);cn=function(e,t){return be(e),void 0===t?e:p?un(e,t):function(){return e.apply(t,arguments)}};var ln={};ln=ie("document","documentElement");var fn={};fn=d([].slice);var pn,dn=TypeError;pn=function(e,t){if(e<t)throw dn("Not enough arguments");return e};var hn;hn=/(?:ipad|iphone|ipod).*applewebkit/i.test(le);var vn,gn,yn,mn,bn=gn={};function _n(){throw new Error("setTimeout has not been defined")}function wn(){throw new Error("clearTimeout has not been defined")}function kn(e){if(yn===setTimeout)return setTimeout(e,0);if((yn===_n||!yn)&&setTimeout)return yn=setTimeout,setTimeout(e,0);try{return yn(e,0)}catch(t){try{return yn.call(null,e,0)}catch(t){return yn.call(this,e,0)}}}!function(){try{yn="function"==typeof setTimeout?setTimeout:_n}catch(e){yn=_n}try{mn="function"==typeof clearTimeout?clearTimeout:wn}catch(e){mn=wn}}();var En,Sn=[],On=!1,jn=-1;function Ln(){On&&En&&(On=!1,En.length?Sn=En.concat(Sn):jn=-1,Sn.length&&Tn())}function Tn(){if(!On){var e=kn(Ln);On=!0;for(var t=Sn.length;t;){for(En=Sn,Sn=[];++jn<t;)En&&En[jn].run();jn=-1,t=Sn.length}En=null,On=!1,function(e){if(mn===clearTimeout)return clearTimeout(e);if((mn===wn||!mn)&&clearTimeout)return mn=clearTimeout,clearTimeout(e);try{return mn(e)}catch(t){try{return mn.call(null,e)}catch(t){return mn.call(this,e)}}}(e)}}function xn(e,t){this.fun=e,this.array=t}function $n(){}bn.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Sn.push(new xn(e,t)),1!==Sn.length||On||kn(Tn)},xn.prototype.run=function(){this.fun.apply(null,this.array)},bn.title="browser",bn.browser=!0,bn.env={},bn.argv=[],bn.version="",bn.versions={},bn.on=$n,bn.addListener=$n,bn.once=$n,bn.off=$n,bn.removeListener=$n,bn.removeAllListeners=$n,bn.emit=$n,bn.prependListener=$n,bn.prependOnceListener=$n,bn.listeners=function(e){return[]},bn.binding=function(e){throw new Error("process.binding is not supported")},bn.cwd=function(){return"/"},bn.chdir=function(e){throw new Error("process.chdir is not supported")},bn.umask=function(){return 0},vn=void 0!==gn&&"process"==bt(gn);var Pn,Mn,In,An,Hn=a.setImmediate,Fn=a.clearImmediate,Nn=a.process,qn=a.Dispatch,Cn=a.Function,Rn=a.MessageChannel,Dn=a.String,Gn=0,Un={},Bn="onreadystatechange";u((function(){Pn=a.location}));var zn=function(e){if(S(Un,e)){var t=Un[e];delete Un[e],t()}},Wn=function(e){return function(){zn(e)}},Jn=function(e){zn(e.data)},Vn=function(e){a.postMessage(Dn(e),Pn.protocol+"//"+Pn.host)};Hn&&Fn||(Hn=function(e){pn(arguments.length,1);var t=m(e)?e:Cn(e),n=fn(arguments,1);return Un[++Gn]=function(){nn(t,void 0,n)},Mn(Gn),Gn},Fn=function(e){delete Un[e]},vn?Mn=function(e){Nn.nextTick(Wn(e))}:qn&&qn.now?Mn=function(e){qn.now(Wn(e))}:Rn&&!hn?(An=(In=new Rn).port2,In.port1.onmessage=Jn,Mn=cn(An.postMessage,An)):a.addEventListener&&m(a.postMessage)&&!a.importScripts&&Pn&&"file:"!==Pn.protocol&&!u(Vn)?(Mn=Vn,a.addEventListener("message",Jn,!1)):Mn=Bn in W("script")?function(e){ln.appendChild(W("script"))[Bn]=function(){ln.removeChild(this),zn(e)}}:function(e){setTimeout(Wn(e),0)});var Yn=(tn={set:Hn,clear:Fn}).clear;pt({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Yn},{clearImmediate:Yn});var Qn,Kn,Xn=tn.set;Kn="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var Zn,er=a.Function,tr=/MSIE .\./.test(le)||Kn&&((Zn=a.Bun.version.split(".")).length<3||0==Zn[0]&&(Zn[1]<3||3==Zn[1]&&0==Zn[2]));Qn=function(e,t){var n=t?2:1;return tr?function(r,i){var o=pn(arguments.length,1)>n,a=m(r)?r:er(r),c=o?fn(arguments,n):[],s=o?function(){nn(a,this,c)}:a;return t?e(s,i):e(s)}:e};var nr=a.setImmediate?Qn(Xn,!1):Xn;pt({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==nr},{setImmediate:nr});var rr=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),c=new $(r||[]);return i(a,"_invoke",{value:j(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",d="suspendedYield",h="executing",v="completed",g={};function y(){}function m(){}function b(){}var _={};u(_,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(P([])));k&&k!==n&&r.call(k,a)&&(_=k);var E=b.prototype=y.prototype=Object.create(_);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(i,o,a,c){var s=f(e[i],e,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function j(e,t,n){var r=p;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return M()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=f(e,t,n);if("normal"===s.type){if(r=n.done?v:d,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}function L(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=f(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:M}}function M(){return{value:t,done:!0}}return m.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:m,configurable:!0}),m.displayName=u(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(O.prototype),u(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new O(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(E),u(E,s,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=P,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return c.type="throw",c.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rr:Function("r","regeneratorRuntime = r")(rr)}const ir="https://forkify-api.herokuapp.com/api/v2/recipes/",or=async function(e){try{const n=await Promise.race([fetch(e),(t=10,new Promise((function(e,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]),r=await n.json();if(!n.ok)throw new Error(`${r.message} (${n.status})`);return r}catch(e){throw e}var t},ar={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},cr=async function(e){try{ar.search.query=e;const t=await or(`${ir}?search=${e}`);ar.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))),ar.search.page=1}catch(e){throw e}},sr=function(e=ar.search.page){ar.search.page=e;const t=(e-1)*ar.search.resultsPerPage,n=e*ar.search.resultsPerPage;return ar.search.results.slice(t,n)},ur=function(){localStorage.setItem("bookmarks",JSON.stringify(ar.bookmarks))};!function(){const e=localStorage.getItem("bookmarks");e&&(ar.bookmarks=JSON.parse(e))}();var lr;lr=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class fr{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){const e=`\n    <div class="spinner">\n            <svg>\n              <use href="${n(lr)}#icon-loader"></use>\n            </svg>\n          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){const t=`<div class="error">\n    <div>\n      <svg>\n        <use href="${n(lr)}#icon-alert-triangle"></use>\n      </svg>\n    </div>\n    <p>${e}</p>\n  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`<div class="recipe">\n    <div class="message">\n      <div>\n        <svg>\n          <use href="${n(lr)}#icon-smile"></use>\n        </svg>\n      </div>\n      <p>${e}</p>\n    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var pr=new class extends fr{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one! 😭";_message="Success! 😭";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return` <figure class="recipe__fig">\n    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${this._data.title}</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(lr)}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(lr)}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n          <svg>\n            <use href="${n(lr)}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n          <svg>\n            <use href="${n(lr)}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n\n    <button class="btn--round btn--bookmark">\n      <svg class="">\n        <use href="${n(lr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n    ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this._data.sorceUrl}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="${n(lr)}#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>`}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n    <svg class="recipe__icon">\n      <use href="${n(lr)}#icon-check"></use>\n    </svg>\n    <div class="recipe__quantity">${e.quantity?e.quantity.toString():""}</div>\n    <div class="recipe__description">\n      <span class="recipe__unit">${e.unit}</span>\n      ${e.description}\n    </div>\n  </li>\n    `}};var dr=new class{#e=document.querySelector(".search");getQuery(){const e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var hr=new class extends fr{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n    <li class="preview">\n            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n              <figure class="preview__fig">\n                <img src="${this._data.image}" alt="${this._data.title}" />\n              </figure>\n              <div class="preview__data">\n                <h4 class="preview__title">${this._data.title}</h4>\n                <p class="preview__publisher">${this._data.publisher}</p>\n              \n              </div>\n            </a>\n          </li>`}};var vr=new class extends fr{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again 😭";_message="Success!";_generateMarkup(){return this._data.map((e=>hr.render(e,!1))).join("")}};var gr=new class extends fr{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n      <button data-goto= "${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${n(lr)}#icon-arrow-right"></use>\n            </svg>\n          </button>`:e===t&&t>1?`\n      <button  data-goto= "${e-1}"class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(lr)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n          </button>\n          `:e<t?`\n      <button  data-goto= "${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(lr)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n          </button>\n      <button  data-goto= "${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${n(lr)}#icon-arrow-right"></use>\n            </svg>\n          </button>`:""}};var yr=new class extends fr{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks";_message="Success! 😭";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>hr.render(e,!1))).join("")}};!async function(){try{const e="pasta";vr.renderSpinner(),await cr(e),vr.render(sr()),gr.render(ar.search)}catch(e){console.log(e)}}();const mr=async function(){try{let e=window.location.hash.slice(1);if(!e)return;pr.renderSpinner(),vr.update(sr()),yr.update(ar.bookmarks),await async function(e){try{const t=await or(`${ir}${e}`),{recipe:n}=t.data;ar.recipe={id:n.id,title:n.title,publisher:n.publisher,sorceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},ar.bookmarks.some((t=>t.id===e))?ar.recipe.bookmarked=!0:ar.recipe.bookmarked=!1}catch(e){throw e}}(e),pr.render(ar.recipe)}catch(e){pr.renderError()}},br=async function(){try{const e=dr.getQuery();if(!e)return;vr.renderSpinner(),await cr(e),vr.render(sr()),gr.render(ar.search)}catch(e){console.log(e)}},_r=function(e){vr.render(sr(e)),gr.render(ar.search)},wr=function(e){!function(e){ar.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/ar.recipe.servings})),ar.recipe.servings=e}(e),pr.update(ar.recipe)},kr=function(){var e;ar.recipe.bookmarked?function(e){const t=ar.bookmarks.findIndex((t=>t.id===e));ar.bookmarks.splice(t,1),e===ar.recipe.id&&(ar.recipe.bookmarked=!1),ur()}(ar.recipe.id):(e=ar.recipe,ar.bookmarks.push(e),e.id===ar.recipe.id&&(ar.recipe.bookmarked=!0),ur()),pr.update(ar.recipe),yr.render(ar.bookmarks)},Er=function(){yr.render(ar.bookmarks)};yr.addHandlerRender(Er),pr.addHandlerRender(mr),pr.addHandlerUpdateServings(wr),pr.addHandlerAddBookmark(kr),dr.addHandlerSearch(br),gr.addHandlerClick(_r);
//# sourceMappingURL=index.524594f7.js.map