(self.AMP=self.AMP||[]).push({n:"amp-image-lightbox",v:"1910302211460",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;n=ca.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=m;
function p(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.sb=b.prototype}function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var r=self.__AMP_LOG;function t(){if(r.dev)return r.dev;throw Error("failed to call initLogConstructor");}function u(a,b,c){if(!r.user)throw Error("failed to call initLogConstructor");return r.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var v;function fa(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function ha(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function ia(a){return a.closest?a.closest("figure"):ha(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"figure"):!1})};var w,ja="Webkit webkit Moz moz ms O o".split(" ");function ka(a,b,c){var d;var e=a.style;if(!fa(b,"--")){w||(w=Object.create(null));var f=w[b];if(!f){f=b;if(void 0===e[b]){var h=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var k=0;k<ja.length;k++){var l=ja[k]+h;if(void 0!==e[l]){h=l;break b}}h=""}void 0!==e[h]&&(f=h)}w[b]=f}b=f}b&&(a.style[b]=d?c+d:c)}function x(a,b){for(var c in b)ka(a,c,b[c])}
function la(a){var b=!0;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function y(a,b,c,d){var e=new ma(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function ma(a,b,c,d){var e=1,f=1;this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.x3=e;this.y3=f}g=ma.prototype;g.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
g.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=this.getPointX(c);var k=(this.getPointX(c+b)-f)/b;if(Math.abs(f-a)<b)return c;if(Math.abs(k)<b)break;else f<a?d=c:e=c,c-=(f-a)/k}for(h=0;Math.abs(f-a)>b&&8>h;h++)f<a?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=this.getPointX(c);return c};
g.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.lerp=function(a,b,c){return a+c*(b-a)};
var na=y(.25,.1,.25,1),oa=y(.42,0,1,1),pa=y(0,0,.58,1),qa=y(.42,0,.58,1),ra={linear:function(a){return a},ease:na,"ease-in":oa,"ease-out":pa,"ease-in-out":qa};function sa(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return y(b[0],b[1],b[2],b[3])}return null}return ra[a]}return a};function ta(a){var b=void 0===b?" ":b;return function(c,d){for(var e=[],f=0;f<a.length;f++){var h=(0,a[f])(c,d);"string"==typeof h&&e.push(h)}return e.join(b)}}function z(a,b){return function(c,d){for(var e in b){var f=e;"display"===f&&t().error("STYLE","`display` style detected. You must use toggle instead.");ka(a,f,b[e](c,d))}}}function A(a,b){return function(c){return a+(b-a)*c}}
function ua(a,b){return function(c){var d=a(c);"number"==typeof d&&(d+="px");if(!b)return"translate("+d+")";c=b(c);"number"==typeof c&&(c+="px");return"translate("+d+","+c+")"}}function va(a){return function(b){return"scale("+a(b)+")"}};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function B(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return wa(a,b)}function xa(a){var b=ya(a);b=ya(b);b=b.isSingleDoc()?b.win:b;return wa(b,"history")}function ya(a){return a.nodeType?B((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function wa(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function za(){}function C(a){var b;this.X=a;this.$=b||B(self,"vsync");this.Sa=null;this.H=[]}function Aa(a,b,c){var d=Ba;return(new C(a)).setCurve(d).add(0,b,1).start(c)}C.prototype.setCurve=function(a){a&&(this.Sa=sa(a));return this};C.prototype.add=function(a,b,c,d){this.H.push({delay:a,func:b,duration:c,curve:sa(d)});return this};C.prototype.start=function(a){var b=new D(this.$,this.X,this.H,this.Sa,a);return b};
function D(a,b,c,d,e){this.$=a;this.X=b;this.H=[];for(b=0;b<c.length;b++){var f=c[b];this.H.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.gb=e;this.ta=Date.now();this.Z=!0;this.Xa={};c=new ea;this.ka=c.promise;this.Ma=c.resolve;this.La=c.reject;this.Za=this.$.createAnimTask(this.X,{mutate:this.qb.bind(this)});this.$.canAnimate(this.X)?this.Za(this.Xa):(t().warn("Animation","cannot animate"),E(this,!1,0))}
D.prototype.then=function(a,b){return a||b?this.ka.then(a,b):this.ka};D.prototype.thenAlways=function(a){a=a||za;return this.then(a,a)};D.prototype.halt=function(a){E(this,!1,a||0)};function E(a,b,c){if(a.Z){a.Z=!1;if(0!=c){1<a.H.length&&a.H.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.H.length;c++)a.H[c].func(1,!0);else for(var d=a.H.length-1;0<=d;d--)a.H[d].func(0,!1)}catch(e){t().error("Animation","completion failed: "+e,e),b=!1}}b?a.Ma():a.La()}}
D.prototype.qb=function(){if(this.Z){for(var a=Date.now(),b=Math.min((a-this.ta)/this.gb,1),c=0;c<this.H.length;c++){var d=this.H[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.H.length;c++)if(d=this.H[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var f=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=f)try{f=d.curve(e)}catch(h){t().error("Animation","step curve failed: "+h,h);E(this,!1,0);break a}}else f=e=1;1==e&&(d.completed=!0);try{d.func(f,d.completed)}catch(h){t().error("Animation",
"step mutate failed: "+h,h),E(this,!1,0)}}1==b?E(this,!0,0):this.$.canAnimate(this.X)?this.Za(this.Xa):(t().warn("Animation","cancel animation"),E(this,!1,0))}};function F(){this.M=null}g=F.prototype;g.add=function(a){var b=this;this.M||(this.M=[]);this.M.push(a);return function(){b.remove(a)}};g.remove=function(a){this.M&&(a=this.M.indexOf(a),-1<a&&this.M.splice(a,1))};g.removeAll=function(){this.M&&(this.M.length=0)};g.fire=function(a){if(this.M)for(var b=this.M,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.M?this.M.length:0};function G(a,b){var c,d=this;this.$a=B(a,"timer");this.hb=b;this.fb=c||0;this.la=-1;this.Ja=0;this.Z=!1;this.cb=function(){d.ra()}}G.prototype.isPending=function(){return-1!=this.la};G.prototype.schedule=function(a){a=a||this.fb;this.Z&&10>a&&(a=10);var b=Date.now()+a;return!this.isPending()||-10>b-this.Ja?(this.cancel(),this.Ja=b,this.la=this.$a.delay(this.cb,a),!0):!1};G.prototype.ra=function(){this.la=-1;this.Ja=0;this.Z=!0;this.hb();this.Z=!1};
G.prototype.cancel=function(){this.isPending()&&(this.$a.cancel(this.la),this.la=-1)};function Ca(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1};function Da(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}
function Ea(a,b,c){this.U=a;this.A=[];this.ea=[];this.P=[];this.B=[];this.w=null;this.nb=b;this.ob=c;this.wa=!1;this.ra=new G(a.ownerDocument.defaultView,this.Ta.bind(this));this.Wa=new F;this.ja=Object.create(null);this.Ra=this.mb.bind(this);this.Pa=this.kb.bind(this);this.Qa=this.lb.bind(this);this.Oa=this.jb.bind(this);this.U.addEventListener("touchstart",this.Ra);this.U.addEventListener("touchend",this.Pa);this.U.addEventListener("touchmove",this.Qa);this.U.addEventListener("touchcancel",this.Oa);
this.Ka=!1}function Fa(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=a.__AMP_Gestures;d||(d=new Ea(a,b,c),a.__AMP_Gestures=d);return d}g=Ea.prototype;g.cleanup=function(){this.U.removeEventListener("touchstart",this.Ra);this.U.removeEventListener("touchend",this.Pa);this.U.removeEventListener("touchmove",this.Qa);this.U.removeEventListener("touchcancel",this.Oa);delete this.U.__AMP_Gestures;this.ra.cancel()};
g.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.ja[d];e||(this.A.push(c),e=new F,this.ja[d]=e);return e.add(b)};g.removeGesture=function(a){var b=(new a(this)).getType();if(a=this.ja[b]){a.removeAll();a=Ca(this.A,function(a){return a.getType()==b});if(0>a)return!1;this.A.splice(a,1);this.P.splice(a,1);this.B.splice(a,1);this.ea.splice(a,1);delete this.ja[b];return!0}return!1};g.onPointerDown=function(a){return this.Wa.add(a)};
g.mb=function(a){var b=Date.now();this.wa=!1;this.Wa.fire(a);for(var c=0;c<this.A.length;c++)if(!this.P[c]&&(this.B[c]&&this.B[c]<b&&H(this,c),this.A[c].onTouchStart(a))){var d=c;this.ea[d]=!0;this.B[d]=0}I(this,a)};g.lb=function(a){for(var b=Date.now(),c=0;c<this.A.length;c++)this.ea[c]&&(this.B[c]&&this.B[c]<b?H(this,c):this.A[c].onTouchMove(a)||H(this,c));I(this,a)};
g.kb=function(a){for(var b=Date.now(),c=0;c<this.A.length;c++)if(this.ea[c])if(this.B[c]&&this.B[c]<b)H(this,c);else{this.A[c].onTouchEnd(a);var d=!this.B[c],e=this.B[c]<b,f=this.w==this.A[c];f||!d&&!e||H(this,c)}I(this,a)};g.jb=function(a){for(var b=0;b<this.A.length;b++){var c=b;this.P[c]=0;H(this,c)}I(this,a)};
function I(a,b){var c=!!a.w||a.wa;a.wa=!1;if(!c)for(var d=Date.now(),e=0;e<a.A.length;e++)if(a.P[e]||a.B[e]&&a.B[e]>=d){c=!0;break}c?(b.stopPropagation(),a.nb||b.preventDefault()):a.ob&&b.stopPropagation();a.Ka&&(a.Ka=!1,a.Ta())}
g.Ta=function(){for(var a=Date.now(),b=-1,c=0;c<this.A.length;c++)if(!this.P[c])this.B[c]&&this.B[c]<a&&H(this,c);else if(-1==b||this.P[c]>this.P[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.A.length;c++)!this.P[c]&&this.ea[c]&&(d=Math.max(d,this.B[c]-a));if(2>d){a=b;c=this.A[a];for(var e=0;e<this.A.length;e++)if(e!=a){var f=e;this.P[f]=0;H(this,f)}this.P[a]=0;this.B[a]=0;this.w=c;c.acceptStart()}else this.ra.schedule(d)}};function H(a,b){a.ea[b]=!1;a.B[b]=0;a.P[b]||a.A[b].acceptCancel()}
function J(a,b){this.rb=a;this.pa=b}g=J.prototype;g.getType=function(){return this.rb};g.signalReady=function(a){var b=this.pa;if(b.w)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.A.length;d++)b.A[d]==this&&(b.P[d]=c+a,b.B[d]=0);b.Ka=!0}};g.signalPending=function(a){var b=this.pa;if(b.w)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.A.length;d++)b.A[d]==this&&(b.B[d]=c+a)};g.signalEnd=function(){var a=this.pa;a.w==this&&(a.w=null,a.wa=!0)};
g.signalEmit=function(a,b){var c=this.pa.ja[this.getType()];c&&c.fire(new Da(this.getType(),a,Date.now(),b))};g.acceptStart=function(){};g.acceptCancel=function(){};g.onTouchStart=function(){return!1};g.onTouchMove=function(){return!1};g.onTouchEnd=function(){};function Ga(){}var Ha=Math.round(-16.67/Math.log(.95));function K(a,b,c){1>b&&(b=1);var d=a/b,e=.5+Math.min(b/33.34,.5);return d*e+c*(1-e)}function Ia(a,b,c,d,e,f){return(new Ja(a,b,c,d,e,f)).start()}function Ja(a,b,c,d,e,f){this.$=B(self,"vsync");this.X=a;this.xa=f;this.h=b;this.j=c;this.Ca=d;this.Da=e;this.L=this.K=0;a=new ea;this.ka=a.promise;this.Ma=a.resolve;this.La=a.reject;this.ga=!1}g=Ja.prototype;
g.start=function(){this.ga=!0;if(.02>=Math.abs(this.Ca)&&.02>=Math.abs(this.Da))this.xa(this.h,this.j),this.ya(!0);else{this.K=this.Ca;this.L=this.Da;var a=this.pb.bind(this),b=this.ya.bind(this,!0);this.$.runAnimMutateSeries(this.X,a,5E3).then(b,b)}return this};g.halt=function(){this.ga&&this.ya(!1)};g.then=function(a,b){return a||b?this.ka.then(a,b):this.ka};g.thenAlways=function(a){a=a||Ga;return this.then(a,a)};
g.pb=function(a,b){if(!this.ga)return!1;this.h+=b*this.K;this.j+=b*this.L;if(!this.xa(this.h,this.j))return!1;var c=Math.exp(-a/Ha);this.K=this.Ca*c;this.L=this.Da*c;return.02<Math.abs(this.K)||.02<Math.abs(this.L)};g.ya=function(a){this.ga&&(this.ga=!1,this.xa(this.h,this.j),a?this.Ma():this.La())};function L(a){J.call(this,"tap",a);this.j=this.h=this.l=this.o=0;this.Ya=null}p(L,J);L.prototype.onTouchStart=function(a){var b=a.touches;this.Ya=a.target;return b&&1==b.length?(this.o=b[0].clientX,this.l=b[0].clientY,!0):!1};L.prototype.onTouchMove=function(a){return(a=a.changedTouches||a.touches)&&1==a.length&&(this.h=a[0].clientX,this.j=a[0].clientY,a=8<=Math.abs(this.j-this.l),8<=Math.abs(this.h-this.o)||a)?!1:!0};L.prototype.onTouchEnd=function(){this.signalReady(0)};
L.prototype.acceptStart=function(){this.signalEmit({clientX:this.h,clientY:this.j,target:this.Ya},null);this.signalEnd()};function M(a){J.call(this,"doubletap",a);this.R=this.j=this.h=this.l=this.o=0;this.Ua=null}p(M,J);g=M.prototype;g.onTouchStart=function(a){return 1<this.R?!1:(a=a.touches)&&1==a.length?(this.o=a[0].clientX,this.l=a[0].clientY,this.h=a[0].clientX,this.j=a[0].clientY,!0):!1};
g.onTouchMove=function(a){return(a=a.touches)&&1==a.length?(this.h=a[0].clientX,this.j=a[0].clientY,a=8<=Math.abs(this.j-this.l),8<=Math.abs(this.h-this.o)||a?(this.acceptCancel(),!1):!0):!1};g.onTouchEnd=function(a){this.R++;2>this.R?this.signalPending(200):(this.Ua=a,this.signalReady(0))};g.acceptStart=function(){this.R=0;this.signalEmit({clientX:this.h,clientY:this.j},this.Ua);this.signalEnd()};g.acceptCancel=function(){this.R=0};
function N(a,b,c,d){J.call(this,a,b);this.Va=c;this.ab=d;this.w=!1;this.L=this.K=this.W=this.S=this.ta=this.ba=this.aa=this.j=this.h=this.l=this.o=0}p(N,J);g=N.prototype;g.onTouchStart=function(a){a=a.touches;return this.w&&a&&1<a.length?!0:a&&1==a.length?(this.ta=Date.now(),this.o=a[0].clientX,this.l=a[0].clientY,!0):!1};
g.onTouchMove=function(a){var b=a.touches;if(b&&1<=b.length){var c=b[0];b=c.clientX;c=c.clientY;this.h=b;this.j=c;if(this.w)this.Y(!1,!1,a);else if(a=Math.abs(b-this.o),b=Math.abs(c-this.l),this.Va&&this.ab)(8<=a||8<=b)&&this.signalReady(-10);else if(this.Va)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.ab)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1;return!0}return!1};g.onTouchEnd=function(a){var b=a.touches;b&&0==b.length&&this.za(a)};
g.acceptStart=function(){this.w=!0;this.aa=this.o;this.ba=this.l;this.W=this.ta;this.o=this.h;this.l=this.j;this.Y(!0,!1,null)};g.acceptCancel=function(){this.w=!1};
g.Y=function(a,b,c){this.S=Date.now();var d=this.S-this.W;if(!b&&4<d||b&&16<d){var e=K(this.h-this.aa,d,this.K),f=K(this.j-this.ba,d,this.L);if(!b||32<d||0!=e||0!=f)this.K=1E-4<Math.abs(e)?e:0,this.L=1E-4<Math.abs(f)?f:0;this.aa=this.h;this.ba=this.j;this.W=this.S}this.signalEmit({first:a,last:b,time:this.S,deltaX:this.h-this.o,deltaY:this.j-this.l,startX:this.o,startY:this.l,lastX:this.h,lastY:this.j,velocityX:this.K,velocityY:this.L},c)};g.za=function(a){this.w&&(this.w=!1,this.Y(!1,!0,a),this.signalEnd())};
function O(a){N.call(this,"swipe-xy",a,!0,!0)}p(O,N);function P(a){J.call(this,"tapzoom",a);this.w=!1;this.L=this.K=this.W=this.S=this.ba=this.aa=this.R=this.j=this.h=this.l=this.o=0}p(P,J);g=P.prototype;g.onTouchStart=function(a){return this.w?!1:(a=a.touches)&&1==a.length?(this.o=a[0].clientX,this.l=a[0].clientY,!0):!1};
g.onTouchMove=function(a){var b=a.touches;if(b&&1==b.length){this.h=b[0].clientX;this.j=b[0].clientY;if(this.w)this.Y(!1,!1,a);else if(a=8<=Math.abs(this.j-this.l),8<=Math.abs(this.h-this.o)||a){if(0==this.R)return this.acceptCancel(),!1;this.signalReady(0)}return!0}return!1};g.onTouchEnd=function(a){this.w?this.za(a):(this.R++,1==this.R?this.signalPending(400):this.acceptCancel())};g.acceptStart=function(){this.R=0;this.w=!0;this.Y(!0,!1,null)};g.acceptCancel=function(){this.R=0;this.w=!1};
g.Y=function(a,b,c){this.S=Date.now();a?this.K=this.L=0:2<this.S-this.W&&(this.K=K(this.h-this.aa,this.S-this.W,this.K),this.L=K(this.j-this.ba,this.S-this.W,this.L));this.aa=this.h;this.ba=this.j;this.W=this.S;this.signalEmit({first:a,last:b,centerClientX:this.o,centerClientY:this.l,deltaX:this.h-this.o,deltaY:this.j-this.l,velocityX:this.K,velocityY:this.L},c)};g.za=function(a){this.w&&(this.w=!1,this.Y(!1,!0,a),this.signalEnd())};function Q(a,b,c){return Math.min(Math.max(a,b),c)}function Ka(a,b){return Math.sqrt(a*a+b*b)};function R(a){var b;(b=a.complete||"complete"==a.readyState)||(b=a,b=("AUDIO"===b.tagName||"VIDEO"===b.tagName)&&0<a.readyState);return!!(b||a.document&&"complete"==a.document.readyState)};function S(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function La(a){return S(Number(a.left),Number(a.top),Number(a.width),Number(a.height))};var Ma=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function Na(a){var b=a.getAttribute("srcset");if(b){a=[];for(var c;c=Ma.exec(b);){var d=c[1],e=void 0,f=void 0;if(c[2]){var h=c[3].toLowerCase();if("w"==h)e=parseInt(c[2],10);else if("x"==h)f=parseFloat(c[2]);else continue}else f=1;a.push({url:d,width:e,dpr:f})}return new T(a)}var k=u(a.getAttribute("src"),'Either non-empty "srcset" or "src" attribute must be specified: %s',a);return new T([{url:k,width:void 0,dpr:1}])}
function T(a){u(0<a.length,"Srcset must have at least one source");this.na=a;for(var b=!1,c=!1,d=0;d<a.length;d++){var e=a[d];b=b||!!e.width;c=c||!!e.dpr}u(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?Oa:Pa);this.bb=b}
T.prototype.select=function(a,b){if(this.bb){b*=a;a=this.na;for(var c=0,d=Infinity,e=Infinity,f=0;f<a.length;f++){var h=a[f].width,k=Math.abs(h-b);if(k<=1.1*d||1.2<b/e)c=f,d=k,e=h;else break}b=c}else{a=this.na;c=0;d=Infinity;for(e=0;e<a.length;e++)if(f=Math.abs(a[e].dpr-b),f<=d)c=e,d=f;else break;b=c}return this.na[b].url};T.prototype.getUrls=function(){return this.na.map(function(a){return a.url})};
T.prototype.stringify=function(a){for(var b=[],c=this.na,d=0;d<c.length;d++){var e=c[d],f=e.url;a&&(f=a(f));f=this.bb?f+(" "+e.width+"w"):f+(" "+e.dpr+"x");b.push(f)}return b.join(", ")};function Oa(a,b){u(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function Pa(a,b){u(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};var Qa={"amp-img":!0,"amp-anim":!0},Ra=["aria-label","aria-describedby","aria-labelledby"],Sa=y(.4,0,.2,1),U=y(.4,0,.2,1),Ba=y(.4,0,.2,1.4);
function Ta(a,b,c){this.Ba=a;this.win=b;this.ib=c;this.va=a.element.ownerDocument.createElement("div");this.va.classList.add("i-amphtml-image-lightbox-viewer");this.D=a.element.ownerDocument.createElement("img");this.D.classList.add("i-amphtml-image-lightbox-viewer-image");this.va.appendChild(this.D);this.sa=null;this.ca=this.da=0;this.C=S(0,0,0,0);this.N=S(0,0,0,0);this.Ga=this.qa=this.oa=this.m=1;this.ia=2;this.Fa=this.Ea=this.Ia=this.Ha=this.F=this.G=this.l=this.o=0;this.V=null;Ua(this)}g=Ta.prototype;
g.getElement=function(){return this.va};g.getImage=function(){return this.D};g.getViewerBox=function(){return this.C};g.getImageBox=function(){return this.N};g.getImageBoxWithOffset=function(){if(0==this.G&&0==this.F)var a=this.N;else{a=this.N;var b=this.G,c=this.F;a=0==b&&0==c||0==a.width&&0==a.height?a:S(a.left+b,a.top+c,a.width,a.height)}return a};
g.reset=function(){var a=this;this.D.setAttribute("src","");Ra.forEach(function(b){a.D.removeAttribute(b)});this.D.removeAttribute("aria-describedby");this.sa=null;this.N=S(0,0,0,0);this.ca=this.da=0;this.oa=this.m=this.qa=1;this.ia=2;this.Fa=this.Ea=this.Ia=this.Ha=this.F=this.G=this.l=this.o=0;this.V&&this.V.halt();this.V=null};function Va(a,b,c){c?(a.da=c.naturalWidth||b.offsetWidth,a.ca=c.naturalHeight||b.offsetHeight):(a.da=b.offsetWidth,a.ca=b.offsetHeight)}
g.init=function(a,b){var c=this;Va(this,a,b);this.sa=Na(a);a.getImpl().then(function(a){a.propagateAttributes(Ra,c.D)});b&&R(b)&&b.src&&this.D.setAttribute("src",b.src)};
g.measure=function(){this.C=La(this.va.getBoundingClientRect());var a=this.da/this.ca,b=Math.min(this.C.width/a,this.C.height),c=Math.min(this.C.height*a,this.C.width);16>=Math.abs(c-this.da)&&16>=Math.abs(b-this.ca)&&(c=this.da,b=this.ca);this.N=S(Math.round((this.C.width-c)/2),Math.round((this.C.height-b)/2),Math.round(c),Math.round(b));x(this.D,{top:this.N.top+"px",left:this.N.left+"px",width:this.N.width+"px",height:this.N.height+"px"});var d=this.C.width/this.C.height,e=Math.max(d/a,a/d);this.ia=
Math.max(2,e);this.oa=this.m=1;this.l=this.F=this.o=this.G=0;Wa(this,this.m);V(this);return Xa(this)};function Xa(a){if(!a.sa)return Promise.resolve();a.qa=Math.max(a.qa,a.m);var b=a.sa.select(a.N.width*a.qa,self.devicePixelRatio||1);return b==a.D.getAttribute("src")?Promise.resolve():B(a.win,"timer").promise(1).then(function(){a.D.setAttribute("src",b);return a.ib(a.D)})}
function Ua(a){var b=Fa(a.D);b.onGesture(L,function(){a.Ba.toggleViewMode()});b.onGesture(O,function(b){var c=b.data.deltaY,e=W(a,a.o+b.data.deltaX,!0);c=X(a,a.l+c,!0);Y(a,a.m,e,c,!1);b.data.last&&Ya(a,b.data.velocityX,b.data.velocityY)});b.onPointerDown(function(){a.V&&a.V.halt()});b.onGesture(M,function(b){var c=1==a.m?a.ia:a.Ga;Za(a,c,a.C.width/2-b.data.clientX,a.C.height/2-b.data.clientY,!0).then(function(){return $a(a,0,0,0,0,0,0)})});b.onGesture(P,function(b){ab(a,b.data.centerClientX,b.data.centerClientY,
b.data.deltaX,b.data.deltaY);b.data.last&&$a(a,b.data.centerClientX,b.data.centerClientY,b.data.deltaX,b.data.deltaY,b.data.velocityY,b.data.velocityY)})}function W(a,b,c){c=c&&1<a.m?.25*a.C.width:0;return Q(b,a.Ha-c,a.Ea+c)}function X(a,b,c){c=c?.25*a.C.height:0;return Q(b,a.Ia-c,a.Fa+c)}function Wa(a,b){var c=0,d=0,e=a.C.height-a.N.height*b;0<=e?d=c=0:(d=e/2,c=-d);var f=0,h=0;b=a.C.width-a.N.width*b;0<=b?h=f=0:(h=b/2,f=-h);a.Ha=h;a.Ia=d;a.Ea=f;a.Fa=c}
function V(a){var b=a.D;var c=a.G;var d=a.F;"number"==typeof c&&(c+="px");void 0===d?c="translate("+c+")":("number"==typeof d&&(d+="px"),c="translate("+c+", "+d+")");x(b,{transform:c+" scale("+(a.m+")")});1!=a.m&&a.Ba.toggleViewMode(!0)}function Ya(a,b,c){var d=a.F-a.l;1==a.m&&10<Math.abs(d)?a.Ba.close():(a.V=Ia(a.D,a.G,a.F,b,c,function(b,c){b=W(a,b,!0);c=X(a,c,!0);if(1>Math.abs(b-a.G)&&1>Math.abs(c-a.F))return!1;Y(a,a.m,b,c,!1);return!0}),a.V.thenAlways(function(){a.V=null;return bb(a)}))}
function ab(a,b,c,d,e){var f=Ka(d,e),h=Math.abs(e)>Math.abs(d)?Math.sign(e):Math.sign(-d);if(0!=h){var k=a.oa*(1+h*f/100),l=a.C.width/2-b,q=a.C.height/2-c;d=Math.min(l,f/100*l);e=Math.min(q,f/100*q);Za(a,k,d,e,!1)}}function Za(a,b,c,d,e){b=Q(b,a.Ga-.25,a.ia+.25);if(b!=a.m)return Wa(a,b),c=W(a,a.o+c*b,!1),d=X(a,a.l+d*b,!1),Y(a,b,c,d,e)}
function $a(a,b,c,d,e,f,h){d=0==f&&0==h?Promise.resolve():Ia(a.D,d,e,f,h,function(d,e){ab(a,b,c,d,e);return!0}).thenAlways();var k=a.m>a.oa;return d.then(function(){return bb(a)}).then(function(){k&&Xa(a)})}
function Y(a,b,c,d,e){var f=b-a.m,h=Ka(c-a.G,d-a.F),k=0;if(e){var l=250;k=Math.min(l,Math.max(l*h*.01,l*Math.abs(f)))}if(16<k&&e){var q=A(a.m,b),db=A(a.G,c),eb=A(a.F,d);e=Aa(a.D,function(b){a.m=q(b);a.G=db(b);a.F=eb(b);V(a)},k).thenAlways(function(){a.m=b;a.G=c;a.F=d;V(a)})}else a.m=b,a.G=c,a.F=d,V(a),e=e?Promise.resolve():void 0;return e}
function bb(a){var b=Q(a.m,a.Ga-0,a.ia+0);b!=a.m&&Wa(a,b);var c=W(a,a.G/a.m*b,!1),d=X(a,a.F/a.m*b,!1);return Y(a,b,c,d,!0).then(function(){a.oa=a.m;a.o=a.G;a.l=a.F})}function Z(a){var b=AMP.BaseElement.call(this,a)||this;b.Aa=-1;b.fa=!1;b.ha=!1;b.ma=null;b.I=null;b.ua=null;b.J=null;b.O=null;b.T=null;b.Na=b.eb.bind(b);b.registerDefaultAction(function(a){return cb(b,a)},"open");return b}p(Z,AMP.BaseElement);
function fb(a){if(!a.J){a.J=a.element.ownerDocument.createElement("div");a.J.classList.add("i-amphtml-image-lightbox-container");a.element.appendChild(a.J);a.O=new Ta(a,a.win,a.loadPromise.bind(a));a.J.appendChild(a.O.getElement());a.T=a.element.ownerDocument.createElement("div");a.T.setAttribute("id",a.element.getAttribute("id")+"-caption");a.T.classList.add("amp-image-lightbox-caption");a.T.classList.add("i-amphtml-image-lightbox-caption");a.J.appendChild(a.T);var b=a.element.ownerDocument.createElement("button"),
c=a.element.getAttribute("data-close-button-aria-label")||"Close the lightbox";b.textContent=c;b.classList.add("i-amphtml-screen-reader");b.tabIndex=-1;b.addEventListener("click",function(){a.close()});a.element.appendChild(b);var d=Fa(a.element);a.element.addEventListener("click",function(b){a.ha||a.O.getImage().contains(b.target)||a.close()});d.onGesture(L,function(){a.ha||a.close()});d.onGesture(O,function(){})}}
function cb(a,b){a.fa||(fb(a),b=b.caller,u(b&&Qa[b.tagName.toLowerCase()],"Unsupported element: %s",b.tagName),a.fa=!0,gb(a),hb(a,b),a.win.document.documentElement.addEventListener("keydown",a.Na),a.getViewport().enterLightboxMode(),ib(a),a.ua=a.getViewport().onChanged(function(){a.fa&&(fa(B(a.win,"platform").getIosVersionString(),"10.3")?B(a.win,"timer").delay(function(){a.O.measure()},500):a.O.measure())}),xa(a.getAmpDoc()).push(a.close.bind(a)).then(function(b){a.Aa=b}))}
Z.prototype.eb=function(a){"Escape"==a.key&&(a.preventDefault(),this.close())};Z.prototype.close=function(){if(this.fa&&(this.ha=this.fa=!1,jb(this),this.ua&&(this.ua(),this.ua=null),this.getViewport().leaveLightboxMode(),-1!=this.Aa&&xa(this.getAmpDoc()).pop(this.Aa),this.win.document.documentElement.removeEventListener("keydown",this.Na),this.ma))try{this.ma.focus()}catch(a){}};Z.prototype.toggleViewMode=function(a){void 0!==a?this.J.classList.toggle("i-amphtml-image-lightbox-view-mode",a):this.J.classList.toggle("i-amphtml-image-lightbox-view-mode")};
function hb(a,b){a.ma=b;/^[\w-]+$/.test("img");if(void 0!==v)var c=v;else{try{var d=b.ownerDocument,e=d.createElement("div"),f=d.createElement("div");e.appendChild(f);c=e.querySelector(":scope div")===f}catch(q){c=!1}c=v=c}c?c=b.querySelector("> img".replace(/^|,/g,"$&:scope ")):(b.classList.add("i-amphtml-scoped"),c="> img".replace(/^|,/g,"$&.i-amphtml-scoped "),c=b.querySelectorAll(c),b.classList.remove("i-amphtml-scoped"),c=void 0===c[0]?null:c[0]);a.I=c;a.O.init(a.ma,a.I);var h=null,k=ia(b);k&&
(/^[\w-]+$/.test("figcaption"),h=k.querySelector("figcaption"));if(!h){var l=b.getAttribute("aria-describedby");h=a.element.ownerDocument.getElementById(l)}if(h){d=h;b=a.T;c=b.ownerDocument.createDocumentFragment();for(d=d.firstChild;d;d=d.nextSibling)c.appendChild(d.cloneNode(!0));b.appendChild(c);a.O.getImage().setAttribute("aria-describedby",a.T.getAttribute("id"))}a.T.classList.toggle("i-amphtml-empty",!h)}
function gb(a){a.O.reset();for(var b=a.T;b.firstChild;)b.removeChild(b.firstChild);a.ma=null;a.I=null;a.toggleViewMode(!1)}
function ib(a){a.ha=!0;la(a.element);x(a.element,{opacity:0});a.O.measure();var b=new C(a.element);b.add(0,z(a.element,{opacity:A(0,1)}),.6,Sa);var c=null;if(a.I&&R(a.I)&&a.I.src){c=a.element.ownerDocument.createElement("div");c.classList.add("i-amphtml-image-lightbox-trans");a.getAmpDoc().getBody().appendChild(c);var d=La(a.I.getBoundingClientRect()),e=a.O.getImageBox(),f=a.I.cloneNode(!0);f.className="";x(f,{position:"absolute",top:d.top+"px",left:d.left+"px",width:d.width+"px",height:d.height+
"px",transformOrigin:"top left",willChange:"transform"});c.appendChild(f);a.I.classList.add("i-amphtml-ghost");var h=e.left-d.left,k=e.top-d.top,l=0!=d.width?e.width/d.width:1,q=Q(Math.abs(k)/250*.8,.2,.8);b.add(0,z(f,{transform:ta([ua(A(0,h),A(0,k)),va(A(1,l))])}),q,Sa);x(a.J,{opacity:0});b.add(.8,z(a.J,{opacity:A(0,1)}),.1,Sa);b.add(.9,z(c,{opacity:A(1,.01)}),.1,U)}b.start(500).thenAlways(function(){a.ha=!1;x(a.element,{opacity:""});x(a.J,{opacity:""});c&&a.getAmpDoc().getBody().removeChild(c)})}
function jb(a){var b=a.O.getImage(),c=a.O.getImageBoxWithOffset(),d=new C(a.element),e=500;d.add(0,z(a.element,{opacity:A(1,0)}),.9,U);var f=null;if(R(b)&&b.src&&a.I){f=a.element.ownerDocument.createElement("div");f.classList.add("i-amphtml-image-lightbox-trans");a.getAmpDoc().getBody().appendChild(f);var h=La(a.I.getBoundingClientRect()),k=b.cloneNode(!0);x(k,{position:"absolute",top:c.top+"px",left:c.left+"px",width:c.width+"px",height:c.height+"px",transform:"",transformOrigin:"top left",willChange:"transform"});
f.appendChild(k);d.add(0,z(a.J,{opacity:A(1,0)}),.1,U);b=h.top-c.top;var l=0!=c.width?h.width/c.width:1,q=z(k,{transform:ta([ua(A(0,h.left-c.left),A(0,b)),va(A(1,l))])});c=Q(Math.abs(b)/250*.8,.2,.8);d.add(Math.min(.8-c,.2),function(b,c){q(b);c&&a.I.classList.remove("i-amphtml-ghost")},c,U);d.add(.8,z(f,{opacity:A(1,.01)}),.2,U);e=Q(Math.abs(b)/250*e,300,e)}d.start(e).thenAlways(function(){a.I&&a.I.classList.remove("i-amphtml-ghost");a.collapse();x(a.element,{opacity:""});x(a.J,{opacity:""});f&&a.getAmpDoc().getBody().removeChild(f);
gb(a)})}(function(a){a.registerElement("amp-image-lightbox",Z,"amp-image-lightbox{position:fixed!important;top:0!important;left:0!important;bottom:0!important;right:0!important;margin:0!important;padding:0!important;overflow:hidden!important;transform:translateZ(0)!important;-ms-touch-action:none!important;touch-action:none!important;z-index:1000;background:rgba(0,0,0,0.95);color:#f2f2f2}.i-amphtml-image-lightbox-container{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-lightbox-trans{pointer-events:none!important;position:fixed;z-index:1001;top:0;left:0;bottom:0;right:0}.i-amphtml-image-lightbox-caption{position:absolute!important;z-index:2;bottom:0!important;left:0!important;right:0!important}.i-amphtml-image-lightbox-caption.i-amphtml-empty,.i-amphtml-image-lightbox-view-mode .i-amphtml-image-lightbox-caption{visibility:hidden}.amp-image-lightbox-caption{background:rgba(0,0,0,0.5);max-height:25%;padding:8px}.i-amphtml-image-lightbox-viewer{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-lightbox-viewer-image{position:absolute;z-index:1;display:block;transform-origin:50% 50%}\n/*# sourceURL=/extensions/amp-image-lightbox/0.1/amp-image-lightbox.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-image-lightbox-0.1.js.map
