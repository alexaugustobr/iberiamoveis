(self.AMP=self.AMP||[]).push({n:"amp-iframe",v:"1910302211460",f:(function(AMP,_){
var h,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var t;a:{var ba={a:!0},u={};try{u.__proto__=ba;t=u.a;break a}catch(a){}t=!1}n=t?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var v=n;function w(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var x=self.AMP_CONFIG||{},da={thirdParty:x.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:x.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof x.thirdPartyFrameRegex?new RegExp(x.thirdPartyFrameRegex):x.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:x.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:x.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:x.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var y=self.__AMP_LOG;function z(){if(!y.user)throw Error("failed to call initLogConstructor");return y.user}function A(){if(y.dev)return y.dev;throw Error("failed to call initLogConstructor");}function B(a,b,c,d,e){z().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function C(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function D(a){return a||{}};function E(){var a=100;this.fa=a;this.N=this.Y=0;this.G=Object.create(null)}E.prototype.has=function(a){return!!this.G[a]};E.prototype.get=function(a){var b=this.G[a];if(b)return b.access=++this.N,b.payload};E.prototype.put=function(a,b){this.has(a)||this.Y++;this.G[a]={payload:b,access:this.N};if(!(this.Y<=this.fa)){A().warn("lru-cache","Trimming LRU cache");a=this.G;var c=this.N+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.Y--)}};function F(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};D({c:!0,v:!0,a:!0,ad:!0,action:!0});var G,H;
function ea(a){var b;G||(G=self.document.createElement("a"),H=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new E));var c=b?null:H,d=G;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a};function I(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,fa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var g;g=ca.exec(e);)f=w(g[1],g[1]),g=g[2]?w(g[2].replace(/\+/g," "),g[2]):"",a[f]=g;for(e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}}var m=
c;return!!m[b]}function fa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){A().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function J(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d,f=I(d,"ampdoc-fie");e&&!f?b=K(c,b)?L(c,b):null:(a=M(a),a=ha(a),b=K(a,b)?L(a,b):null);return b}function N(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return L(a,b)}function ia(a,b){var c=M(a);c=ha(c);return L(c,b)}function M(a){return a.nodeType?N((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function ha(a){a=M(a);return a.isSingleDoc()?a.win:a}
function L(a,b){K(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function K(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ja(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function ka(a){return a.closest?a.closest(".i-amphtml-overlay"):ja(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,".i-amphtml-overlay"):!1})};function O(a,b){var c,d=this;this.da=N(a,"timer");this.ja=b;this.ga=c||0;this.F=-1;this.V=0;this.W=!1;this.ea=function(){d.F=-1;d.V=0;d.W=!0;d.ja();d.W=!1}}O.prototype.isPending=function(){return-1!=this.F};O.prototype.schedule=function(a){var b=a||this.ga;this.W&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.V?(this.cancel(),this.V=c,this.F=this.da.delay(this.ea,b),!0):!1};O.prototype.cancel=function(){this.isPending()&&(this.da.cancel(this.F),this.F=-1)};function la(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};function ma(a){if(!na(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return A().error("MESSAGING","Failed to parse message: "+a,c),null}}function na(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function oa(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)};var P,pa="Webkit webkit Moz moz ms O o".split(" ");function qa(a,b){var c;var d=a.style;P||(P=C());var e=P.zIndex;if(!e){e="zIndex";if(void 0===d.zIndex){var f;b:{for(f=0;f<pa.length;f++){var g=pa[f]+"ZIndex";if(void 0!==d[g]){f=g;break b}}f=""}void 0!==d[f]&&(e=f)}P.zIndex=e}d=e;d&&(a.style[d]=c?b+c:b)}function ra(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function sa(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function ta(a,b,c){var d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=sa(a,d,!0);for(d=0;d<a.length;d++){var e=a[d];if(e.frame===b){var f=e;break}}f||(f={frame:b,events:Object.create(null)},a.push(f));return f.events}
function ua(a){for(var b=D({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function va(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=wa(b.data);if(c&&c.sentinel){var e=b.source;var f=sa(a,c.sentinel);if(f){for(var g,m=0;m<f.length;m++){var q=f[m],k=q.frame.contentWindow;if(k){var l;if(!(l=e==k))b:{for(l=e;l&&l!=l.parent;l=l.parent)if(l==k){l=!0;break b}l=!1}if(l){g=q;break}}else setTimeout(ua,0,f)}e=g?g.events:null}else e=f;var p=e;if(p){var r=p[c.type];if(r)for(r=r.slice(),e=0;e<r.length;e++)(0,r[e])(c,b.source,b.origin,b)}}}};a.addEventListener("message",
b)}}function Q(a,b,c,d,e,f){function g(b,d,g,m){if("amp"==b.sentinel){if(d!=a.contentWindow)return;var k="null"==g&&f;if(q!=g&&!k)return}if(e||d==a.contentWindow)"unlisten"==b.sentinel?l():c(b,d,g,m)}var m=a.ownerDocument.defaultView;va(m);d=ta(m,a,d);var q=ea(a.src).origin,k=d[b]||(d[b]=[]),l;k.push(g);return l=function(){if(g){var a=k.indexOf(g);-1<a&&k.splice(a,1);c=k=g=null}}}
function xa(a,b,c,d,e){if(a.contentWindow)for(d.type=c,d.sentinel=e?a.getAttribute("data-amp-3p-sentinel"):"amp",a=d,e&&(a="amp-"+JSON.stringify(d)),d=0;d<b.length;d++)e=b[d],e.win.postMessage(a,e.origin)}function wa(a){"string"==typeof a&&(a="{"==a.charAt(0)?la(a,function(a){A().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:na(a)?ma(a):null);return a}
function R(a,b,c){var d=this;this.h=a;this.R=b;this.B=[];this.la=Q(this.h,"send-intersections",function(a,b,g){d.B.some(function(a){return a.win==b})||d.B.push({win:b,origin:g});c(a,b,g)},this.R,this.R)}R.prototype.send=function(a,b){oa(this.B,function(a){return!a.win.parent});xa(this.h,this.B,a,b,this.R)};R.prototype.destroy=function(){this.la();this.B.length=0};var S=[[300,250],[320,50],[300,50],[320,100]];
function ya(a){var b=(a.getAttribute("allow")||"").trim();a.setAttribute("allow","execution-while-not-rendered 'none';"+b)};function T(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function za(a){for(var b=-Infinity,c=Infinity,d=-Infinity,e=Infinity,f=0;f<arguments.length;f++){var g=arguments[f];if(g&&(b=Math.max(b,g.left),c=Math.min(c,g.left+g.width),d=Math.max(d,g.top),e=Math.min(e,g.top+g.height),c<b||e<d))return null}return Infinity==c?null:T(b,d,c-b,e-d)}function U(a,b,c){return 0==b&&0==c||0==a.width&&0==a.height?a:T(a.left+b,a.top+c,a.width,a.height)};var Aa=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],Ba=Date.now();function V(a,b){var c,d=this;this.O=a;this.o=null;this.T=this.X=!1;this.L=null;this.M=a.getViewport();this.Z=new R(b,c||!1,function(){Ca(d)});this.o=new Da(function(a){for(var b=0;b<a.length;b++)delete a[b].target;d.Z.send("intersection",D({changes:a}))});this.o.tick(this.M.getRect());this.fire=function(){d.X&&d.T&&d.o.tick(d.M.getRect())}}
function Ca(a){a.X=!0;a.o.observe(a.O.element);a.O.getVsync().measure(function(){a.T=a.O.isInViewport();a.fire()});var b=a.M.onScroll(a.fire),c=a.M.onChanged(a.fire);a.L=function(){b();c()}}V.prototype.onViewportCallback=function(a){this.T=a};V.prototype.destroy=function(){this.X=!1;this.o.disconnect();this.o=null;this.L&&(this.L(),this.L=null);this.Z.destroy();this.Z=null};
function Da(a){var b={threshold:Aa};this.aa=a;var c=b&&b.threshold;c=c?Array.isArray(c)?c:[c]:[0];for(a=0;a<c.length;a++){var d=c[a];"number"===typeof d&&isFinite(d)}this.ka=c.sort();this.U=null;this.ca=void 0;this.j=[];this.w=this.C=null}h=Da.prototype;h.disconnect=function(){this.j.length=0;Ea(this)};
h.observe=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b].element===a){A().warn("INTERSECTION-OBSERVER","should observe same element once");return}var c={element:a,currentThresholdSlot:0};this.U&&(b=Fa(this,c,this.U,this.ca))&&this.aa([b]);b=M(a);if(b.win.MutationObserver&&!this.C){this.w=new O(b.win,this.ia.bind(this,a));var d=J(a,"hidden-observer");this.C=d.add(this.ha.bind(this))}this.j.push(c)};
h.unobserve=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b].element===a){this.j.splice(b,1);0>=this.j.length&&Ea(this);return}A().warn("INTERSECTION-OBSERVER","unobserve non-observed element")};h.tick=function(a,b){b&&(a=U(a,-b.left,-b.top),b=U(b,-b.left,-b.top));this.U=a;this.ca=b;for(var c=[],d=0;d<this.j.length;d++){var e=Fa(this,this.j[d],a,b);e&&c.push(e)}c.length&&this.aa(c)};
function Fa(a,b,c,d){var e=b.element,f=e.getLayoutBox(),g=e.getOwner(),m=g&&g.getLayoutBox(),q=za(f,m,c,d)||T(0,0,0,0),k=q;g=f;k=k.width*k.height;g=g.width*g.height;g=0===g?0:k/g;a=a.ka;k=0;var l=a.length;if(0==g)a=0;else{for(var p=(k+l)/2|0;k<p;)g<a[p]?l=p:k=p,p=(k+l)/2|0;a=l}var r=a;if(r==b.currentThresholdSlot)return null;b.currentThresholdSlot=r;c=d?null:c;d=q;a=f;if(k=c)d=U(d,-c.left,-c.top),a=U(a,-c.left,-c.top),k=U(k,-c.left,-c.top);var Ga={time:"undefined"!==typeof performance&&performance.now?
performance.now():Date.now()-Ba,rootBounds:k,boundingClientRect:a,intersectionRect:d,intersectionRatio:g,target:e};return Ga}h.ha=function(){this.w.isPending()||this.w.schedule(16)};h.ia=function(a){var b=this,c=ia(a,"viewport"),d=ia(a,"resources");d.onNextPass(function(){b.tick(c.getRect())})};function Ea(a){a.C&&a.C();a.C=null;a.w&&a.w.cancel();a.w=null};var Ha={"AMP-FX-FLYING-CARPET":!0,"AMP-LIGHTBOX":!0,"AMP-STICKY-AD":!0,"AMP-LIGHTBOX-GALLERY":!0};var Ia="allowfullscreen allowpaymentrequest allowtransparency allow frameborder referrerpolicy scrolling tabindex".split(" "),Ja=0,Ka=0;function W(a){a=AMP.BaseElement.call(this,a)||this;a.K=null;a.I=!1;a.S=!1;a.D=!1;a.ba=!1;a.P=null;a.h=null;a.J=!1;a.l=null;a.A="";a.iframeSrc=null;a.H=null;a.m=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;
if(v)v(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var La=Object.getOwnPropertyDescriptor(X,Y);La&&Object.defineProperty(W,Y,La)}else W[Y]=X[Y];W.na=X.prototype;h=W.prototype;h.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
function Ma(a,b,c){var d=window.location.href;c=void 0===c?"":c;a=a.element;var e=J(a,"url"),f=e.parse(b),g=f.hostname,m=f.protocol;f=f.origin;B(e.isSecure(b)||"data:"==m,"Invalid <amp-iframe> src. Must start with https://. Found %s",a);var q=e.parse(d);B(!Na(c,"allow-same-origin")||f!=q.origin&&"data:"!=m,"Origin of <amp-iframe> must not be equal to container %sif allow-same-origin is set. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",a);B(!(F(g,
"."+da.thirdPartyFrameHost)||F(g,".ampproject.org")),"amp-iframe does not allow embedding of frames from ampproject.*: %s",b);return b}
function Oa(a){var b=a.element.getLayoutBox(),c=Math.min(600,.75*a.getViewport().getSize().height);B(b.top>=c,"<amp-iframe> elements must be positioned outside the first 75% of the viewport or 600px from the top (whichever is smaller): %s  Current position %s. Min: %sPositioning rules don't apply for iframes that use `placeholder`.See https://github.com/ampproject/amphtml/blob/master/extensions/amp-iframe/amp-iframe.md#iframe-with-placeholder for details.",a.element,b.top,c)}
function Na(a,b){var c=new RegExp("\\s"+b+"\\s","i");return c.test(" "+a+" ")}function Pa(a,b){if(b){a=J(a.element,"url").parse(b);var c=a.hash;"data:"==a.protocol||c&&"#"!=c||(a=b.indexOf("#"),b=(-1==a?b:b.substring(0,a))+"#amp=1");return b}}
h.firstAttachedCallback=function(){this.A=this.element.getAttribute("sandbox");var a;if(!(a=Pa(this,this.element.getAttribute("src"))))if(a=this.element.getAttribute("srcdoc")){B(!(" "+this.A+" ").match(/\s+allow-same-origin\s+/i),"allow-same-origin is not allowed with the srcdoc attribute %s.",this.element);if("undefined"!==typeof TextEncoder)var b=(new TextEncoder("utf-8")).encode(a);else{a=unescape(encodeURIComponent(a));b=new Uint8Array(a.length);for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);
b[c]=d}}a=btoa;c=Array(b.length);for(d=0;d<b.length;d++)c[d]=String.fromCharCode(b[d]);b=c.join("");a="data:text/html;charset=utf-8;base64,"+a(b)}else a=void 0;var e=a;this.iframeSrc=Ma(this,e,this.A)};h.preconnectCallback=function(a){this.iframeSrc&&this.preconnect.url(this.iframeSrc,a)};
h.buildCallback=function(){this.K=this.getPlaceholder();this.I=!!this.K;(this.J=this.element.hasAttribute("resizable"))&&this.element.setAttribute("scrolling","no");this.element.hasAttribute("frameborder")||this.element.setAttribute("frameborder","0");var a=this.element;if("no"!=a.getAttribute("scrolling")){var b=a.ownerDocument.createElement("i-amphtml-scroll-container");a.appendChild(b);a=b}this.H=a;Qa(this)};
h.onLayoutMeasure=function(){Ra(this);var a=this.element;a:{var b=a.getLayoutBox();var c=b.height;b=b.width;for(var d=0;d<S.length;d++){var e=S[d][0],f=S[d][1];if(!(f>c||e>b)&&20>=c-f&&20>=b-e){c=!0;break a}}c=!1}this.S=c;c=this.element;b=c.getLayoutBox();this.D=10<b.width||10<b.height?!1:!ka(c);if(c=this.S){c=this.win;b=!1;d=0;do Ha[a.tagName]?(d++,b=!1):(e=(c.getComputedStyle(a)||C()).position,"fixed"!=e&&"sticky"!=e||(b=!0)),a=a.parentElement;while(a&&"BODY"!=a.tagName);c=!(!b&&1>=d)}this.ba=c;
this.l&&this.l.fire()};function Ra(a){if(a.h){var b=a.getViewport().getLayoutRect(a.h),c=a.getLayoutBox();a.P=U(b,-c.left,-c.top)}}h.getIntersectionElementLayoutBox=function(){if(!this.h)return AMP.BaseElement.prototype.getIntersectionElementLayoutBox.call(this);var a=this.getLayoutBox();this.P||Ra(this);return U(this.P,a.left,a.top)};
h.layoutCallback=function(){var a=this;B(!this.ba,"amp-iframe is not used for displaying fixed ad. Please use amp-sticky-ad and amp-ad instead.");this.I||Oa(this);this.J&&B(this.getOverflowElement(),"Overflow element must be defined for resizable frames: %s",this.element);if(!this.iframeSrc)return Promise.resolve();if(this.D&&(Ka++,1<Ka))return console.error("Only 1 analytics/tracking iframe allowed per page. Please use amp-analytics instead or file a GitHub issue for your use case: https://github.com/ampproject/amphtml/issues/new"),
Promise.resolve();var b=this.element.ownerDocument.createElement("iframe");this.h=b;this.applyFillContent(b);b.name="amp_iframe"+Ja++;this.I&&qa(b,-1);this.propagateAttributes(Ia,b);var c=b.getAttribute("allow")||"";c=c.replace("autoplay","autoplay-disabled");b.setAttribute("allow",c);Sa(b,this.A);I(this.win,"pausable-iframe")&&ya(this.h);b.src=this.iframeSrc;this.D||(this.l=new V(this,b));b.onload=function(){b.readyState="complete";a.$();a.D&&(a.iframeSrc=null,N(a.win,"timer").promise(5E3).then(function(){b.parentElement&&
b.parentElement.removeChild(b);a.element.setAttribute("amp-removed","");a.h=null}))};Q(b,"embed-size",function(b){Ta(a,b.height,b.width)},void 0,void 0,!0);this.I&&Q(b,"embed-ready",this.$.bind(this));this.H.appendChild(b);return this.loadPromise(b).then(function(){a.H!=a.element&&N(a.win,"timer").delay(function(){a.mutateElement(function(){a.H.classList.add("amp-active")})},1E3)})};h.unlayoutOnPause=function(){return!Z(this)};h.pauseCallback=function(){Z(this)&&ra(this.h,!1)};
h.resumeCallback=function(){Z(this)&&ra(this.h,!0)};function Z(a){var b;if(b=I(a.win,"pausable-iframe")&&!!a.h)a=a.h,b=!!a.featurePolicy&&-1!=a.featurePolicy.features().indexOf("execution-while-not-rendered")&&!a.featurePolicy.allowsFeature("execution-while-not-rendered");return b}h.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.K&&this.togglePlaceholder(!0);this.h=null;this.l&&(this.l.destroy(),this.l=null)}return!0};h.viewportCallback=function(a){if(this.l)this.l.onViewportCallback(a)};
h.getLayoutPriority=function(){return this.S?2:this.D?1:AMP.BaseElement.prototype.getLayoutPriority.call(this)};h.mutatedAttributesCallback=function(a){var b=a.src;void 0!==b&&(this.iframeSrc=Pa(this,b),this.h&&(this.h.src=Ma(this,this.iframeSrc,this.A)))};h.$=function(){var a=this;this.K&&this.getVsync().mutate(function(){a.h&&(qa(a.h,0),a.togglePlaceholder(!1))})};h.firstLayoutCompleted=function(){};
h.throwIfCannotNavigate=function(){if(!Na(this.A,"allow-top-navigation"))throw z().createError('"AMP.navigateTo" is only allowed on <amp-iframe> when its "sandbox" attribute contains "allow-top-navigation".');};
function Ta(a,b,c){if(a.J)if(100>b)a.user().error("amp-iframe","Ignoring embed-size request because the resize height is less than 100px. If you are using amp-iframe to display ads, consider using amp-ad instead.",a.element);else{var d,e;b=parseInt(b,10);isNaN(b)||(d=Math.max(b+(a.element.offsetHeight-a.h.offsetHeight),b));c=parseInt(c,10);isNaN(c)||(e=Math.max(c+(a.element.offsetWidth-a.h.offsetWidth),c));void 0!==d||void 0!==e?a.attemptChangeSize(d,e).then(function(){void 0!==d&&a.element.setAttribute("height",
d);void 0!==e&&a.element.setAttribute("width",e)},function(){}):a.user().error("amp-iframe","Ignoring embed-size request because no width or height value is provided",a.element)}else a.user().error("amp-iframe","Ignoring embed-size request because this iframe is not resizable",a.element)}
function Qa(a){if(I(a.win,"iframe-messaging")){var b=a.element,c=b.getAttribute("src");c&&(a.m=J(b,"url").parse(c).origin);a.registerAction("postMessage",function(b){a.m?a.h.contentWindow.postMessage(b.args,a.m):z().error("amp-iframe",'"postMessage" action is only allowed with "src"attribute with an origin.')},100);if(a.m){var d=10,e=0,f=function(b){if(b.source===a.h.contentWindow)if(b.origin!==a.m)z().error("amp-iframe",'"message" received from unexpected origin: '+b.origin+". Only allowed from: "+
a.m);else{if(a.getAmpDoc().getRootNode().activeElement!==a.h)var c=!1;else c=a.win.document.createElement("audio"),c.play(),c=c.paused?!1:!0;if(c){var g=b.data;try{var k=JSON.parse(JSON.stringify(g))}catch(r){z().error("amp-iframe",'Data from "message" event must be JSON.');return}var l=a.win;b=D({data:k});c={detail:b};Object.assign(c,void 0);"function"==typeof l.CustomEvent?b=new l.CustomEvent("amp-iframe:message",c):(l=l.document.createEvent("CustomEvent"),l.initCustomEvent("amp-iframe:message",
!!c.bubbles,!!c.cancelable,b),b=l);var p=J(a.element,"action");p.trigger(a.element,"message",b,100)}else e++,z().error("amp-iframe",'"message" event may only be triggered from a user gesture.'),e>=d&&(z().error("amp-iframe",'Too many non-gesture-triggered "message" events; detaching event listener.'),a.win.removeEventListener("message",f))}};a.win.addEventListener("message",f)}}}h.ma=function(a){this.m=a};function Sa(a,b){var c=b||"";a.setAttribute("sandbox",c)}
(function(a){a.registerElement("amp-iframe",W)})(self.AMP);
})});

//# sourceMappingURL=amp-iframe-0.1.js.map
