{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.jV(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.h4"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.h4"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.h4(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={fQ:function fQ(){},
j7:function(a,b,c,d){P.fS(b,"start")
return new H.eb(a,b,c,[d])},
iR:function(){return new P.b1("Too few elements")},
d8:function d8(){},
aB:function aB(){},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cb:function cb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aC:function aC(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
d9:function d9(a){this.$ti=a},
aQ:function aQ(){},
ar:function(a){var u,t=H.jX(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
jH:function(a){return v.types[H.P(a)]},
jM:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.u(a).$ic7},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.cQ(a)
if(typeof u!=="string")throw H.f(H.bR(a))
return u},
aV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
j3:function(a,b){var u,t
if(typeof a!=="string")H.H(H.bR(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.a(u,3)
t=H.Q(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
j2:function(a){var u,t
if(typeof a!=="string")H.H(H.bR(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.iF(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
ch:function(a){return H.j_(a)+H.fg(H.aL(a),0,null)},
j_:function(a){var u,t,s,r,q,p,o,n=J.u(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.a_||!!n.$ib2){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ar(t.length>1&&C.e.al(t,0)===36?C.e.cP(t,1):t)},
j0:function(){return Date.now()},
j1:function(){var u,t
if($.dM!=null)return
$.dM=1000
$.dN=H.jm()
if(typeof window=="undefined")return
u=window
if(u==null)return
t=u.performance
if(t==null)return
if(typeof t.now!="function")return
$.dM=1e6
$.dN=new H.dL(t)},
a_:function(a){throw H.f(H.bR(a))},
a:function(a,b){if(a==null)J.aM(a)
throw H.f(H.ba(a,b))},
ba:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=H.P(J.aM(a))
if(!(b<0)){if(typeof u!=="number")return H.a_(u)
t=b>=u}else t=!0
if(t)return P.dl(b,a,s,null,u)
return P.ck(b,s)},
bR:function(a){return new P.aj(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.cg()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ii})
u.name=""}else u.toString=H.ii
return u},
ii:function(){return J.cQ(this.dartException)},
H:function(a){throw H.f(a)},
a4:function(a){throw H.f(P.aN(a))},
af:function(a){var u,t,s,r,q,p
a=H.jU(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.l([],[P.w])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ee(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ef:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
hE:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
hz:function(a,b){return new H.dI(a,b==null?null:b.method)},
fR:function(a,b){var u=b==null,t=u?null:b.method
return new H.dr(a,t,u?null:b.receiver)},
as:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.fF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.e1(t,16)&8191)===10)switch(s){case 438:return f.$1(H.fR(H.b(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.hz(H.b(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ip()
q=$.iq()
p=$.ir()
o=$.is()
n=$.iv()
m=$.iw()
l=$.iu()
$.it()
k=$.iy()
j=$.ix()
i=r.G(u)
if(i!=null)return f.$1(H.fR(H.Q(u),i))
else{i=q.G(u)
if(i!=null){i.method="call"
return f.$1(H.fR(H.Q(u),i))}else{i=p.G(u)
if(i==null){i=o.G(u)
if(i==null){i=n.G(u)
if(i==null){i=m.G(u)
if(i==null){i=l.G(u)
if(i==null){i=o.G(u)
if(i==null){i=k.G(u)
if(i==null){i=j.G(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.hz(H.Q(u),i))}}return f.$1(new H.eh(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cw()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cw()
return a},
bT:function(a){var u
if(a==null)return new H.cH(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.cH(a)},
jF:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.q(0,a[u],a[t])}return b},
jL:function(a,b,c,d,e,f){H.k(a,"$ifN")
switch(H.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.eE("Unsupported number of arguments for wrapped closure"))},
aK:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jL)
a.$identity=u
return u},
iN:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.e6().constructor.prototype):Object.create(new H.bf(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a6
if(typeof t!=="number")return t.H()
$.a6=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.hm(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.iJ(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.hm(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
iJ:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.jH,a)
if(typeof a=="function")if(b)return a
else{u=c?H.hj:H.fK
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
iK:function(a,b,c,d){var u=H.fK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
hm:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.iM(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.iK(t,!r,u,b)
if(t===0){r=$.a6
if(typeof r!=="number")return r.H()
$.a6=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bg
return new Function(r+H.b(q==null?$.bg=H.d_("self"):q)+";return "+p+"."+H.b(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a6
if(typeof r!=="number")return r.H()
$.a6=r+1
o+=r
r="return function("+o+"){return this."
q=$.bg
return new Function(r+H.b(q==null?$.bg=H.d_("self"):q)+"."+H.b(u)+"("+o+");}")()},
iL:function(a,b,c,d){var u=H.fK,t=H.hj
switch(b?-1:a){case 0:throw H.f(H.j5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
iM:function(a,b){var u,t,s,r,q,p,o,n=$.bg
if(n==null)n=$.bg=H.d_("self")
u=$.hi
if(u==null)u=$.hi=H.d_("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.iL(s,!q,t,b)
if(s===1){n="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+");"
u=$.a6
if(typeof u!=="number")return u.H()
$.a6=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+", "+o+");"
u=$.a6
if(typeof u!=="number")return u.H()
$.a6=u+1
return new Function(n+u+"}")()},
h4:function(a,b,c,d,e,f,g){return H.iN(a,b,c,d,!!e,!!f,g)},
fK:function(a){return a.a},
hj:function(a){return a.c},
d_:function(a){var u,t,s,r=new H.bf("self","target","receiver","name"),q=J.hp(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
M:function(a){if(a==null)H.jv("boolean expression must not be null")
return a},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.a2(a,"String"))},
jC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.a2(a,"double"))},
fE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.a2(a,"num"))},
jA:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.a2(a,"bool"))},
P:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.a2(a,"int"))},
h8:function(a,b){throw H.f(H.a2(a,H.ar(H.Q(b).substring(2))))},
jT:function(a,b){throw H.f(H.hl(a,H.ar(H.Q(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.h8(a,b)},
ap:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else u=!0
if(u)return a
H.jT(a,b)},
kx:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.u(a)[b])return a
H.h8(a,b)},
kt:function(a){if(a==null)return a
if(!!J.u(a).$iq)return a
throw H.f(H.a2(a,"List<dynamic>"))},
jN:function(a,b){var u
if(a==null)return a
u=J.u(a)
if(!!u.$iq)return a
if(u[b])return a
H.h8(a,b)},
i3:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.P(u)]
else return a.$S()}return},
bb:function(a,b){var u
if(typeof a=="function")return!0
u=H.i3(J.u(a))
if(u==null)return!1
return H.hR(u,null,b,null)},
e:function(a,b){var u,t
if(a==null)return a
if($.h0)return a
$.h0=!0
try{if(H.bb(a,b))return a
u=H.bc(b)
t=H.a2(a,u)
throw H.f(t)}finally{$.h0=!1}},
cM:function(a,b){if(a!=null&&!H.h3(a,b))H.H(H.a2(a,H.bc(b)))
return a},
a2:function(a,b){return new H.cz("TypeError: "+P.bX(a)+": type '"+H.b(H.hX(a))+"' is not a subtype of type '"+b+"'")},
hl:function(a,b){return new H.d1("CastError: "+P.bX(a)+": type '"+H.b(H.hX(a))+"' is not a subtype of type '"+b+"'")},
hX:function(a){var u,t=J.u(a)
if(!!t.$ibi){u=H.i3(t)
if(u!=null)return H.bc(u)
return"Closure"}return H.ch(a)},
jv:function(a){throw H.f(new H.em(a))},
jV:function(a){throw H.f(new P.d4(a))},
j5:function(a){return new H.dZ(a)},
i6:function(a){return v.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
aL:function(a){if(a==null)return
return a.$ti},
kr:function(a,b,c){return H.bd(a["$a"+H.b(c)],H.aL(b))},
bS:function(a,b,c,d){var u=H.bd(a["$a"+H.b(c)],H.aL(b))
return u==null?null:u[d]},
h5:function(a,b,c){var u=H.bd(a["$a"+H.b(b)],H.aL(a))
return u==null?null:u[c]},
c:function(a,b){var u=H.aL(a)
return u==null?null:u[b]},
bc:function(a){return H.aJ(a,null)},
aJ:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ar(a[0].name)+H.fg(a,1,b)
if(typeof a=="function")return H.ar(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.P(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.a(b,t)
return H.b(b[t])}if('func' in a)return H.jk(a,b)
if('futureOr' in a)return"FutureOr<"+H.aJ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jk:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.l([],[P.w])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.j(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.a(a0,m)
p=C.e.H(p,a0[m])
l=u[q]
if(l!=null&&l!==P.n)p+=" extends "+H.aJ(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aJ(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aJ(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aJ(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.jE(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.Q(n[g])
i=i+h+H.aJ(d[c],a0)+(" "+H.b(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
fg:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bB("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aJ(p,c)}return"<"+u.h(0)+">"},
bd:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ai:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.aL(a)
t=J.u(a)
if(t[b]==null)return!1
return H.i_(H.bd(t[d],u),null,c,null)},
ha:function(a,b,c,d){if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.f(H.hl(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ar(b.substring(2))+H.fg(c,0,null),v.mangledGlobalNames)))},
m:function(a,b,c,d){if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.f(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ar(b.substring(2))+H.fg(c,0,null),v.mangledGlobalNames)))},
ju:function(a,b,c,d,e){if(!H.T(a,null,b,null))H.jW("TypeError: "+H.b(c)+H.bc(a)+H.b(d)+H.bc(b)+H.b(e))},
jW:function(a){throw H.f(new H.cz(H.Q(a)))},
i_:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.T(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.T(a[t],b,c[t],d))return!1
return!0},
ko:function(a,b,c){return a.apply(b,H.bd(J.u(b)["$a"+H.b(c)],H.aL(b)))},
ia:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="n"||a.name==="v"||a===-1||a===-2||H.ia(u)}return!1},
h3:function(a,b){var u,t
if(a==null)return b==null||b.name==="n"||b.name==="v"||b===-1||b===-2||H.ia(b)
if(b==null||b===-1||b.name==="n"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.h3(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bb(a,b)}u=J.u(a).constructor
t=H.aL(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.T(u,null,b,null)},
j:function(a,b){if(a!=null&&!H.h3(a,b))throw H.f(H.a2(a,H.bc(b)))
return a},
T:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="n"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="n"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.T(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.T(b[H.P(a)],b,c,d)
if(typeof c==="number")return!1
if(a.name==="v")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.T("type" in a?a.type:l,b,s,d)
else if(H.T(a,b,s,d))return!0
else{if(!('$i'+"a9" in t.prototype))return!1
r=t.prototype["$a"+"a9"]
q=H.bd(r,u?a.slice(1):l)
return H.T(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.hR(a,b,c,d)
if('func' in a)return c.name==="fN"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.i_(H.bd(m,u),b,p,d)},
hR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.T(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.T(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.T(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.T(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.jR(h,b,g,d)},
jR:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.T(c[s],d,a[s],b))return!1}return!0},
kp:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jO:function(a){var u,t,s,r,q=H.Q($.i8.$1(a)),p=$.fl[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.fv[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.Q($.hZ.$2(a,q))
if(q!=null){p=$.fl[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.fv[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.fD(u)
$.fl[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.fv[q]=u
return u}if(s==="-"){r=H.fD(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ic(a,u)
if(s==="*")throw H.f(P.hF(q))
if(v.leafTags[q]===true){r=H.fD(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ic(a,u)},
ic:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.h7(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
fD:function(a){return J.h7(a,!1,null,!!a.$ic7)},
jP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.fD(u)
else return J.h7(u,c,null,null)},
jJ:function(){if(!0===$.h6)return
$.h6=!0
H.jK()},
jK:function(){var u,t,s,r,q,p,o,n
$.fl=Object.create(null)
$.fv=Object.create(null)
H.jI()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.id.$1(q)
if(p!=null){o=H.jP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
jI:function(){var u,t,s,r,q,p,o=C.O()
o=H.b9(C.P,H.b9(C.Q,H.b9(C.r,H.b9(C.r,H.b9(C.R,H.b9(C.S,H.b9(C.T(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.i8=new H.fs(r)
$.hZ=new H.ft(q)
$.id=new H.fu(p)},
b9:function(a,b){return a(b)||b},
iV:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(P.fM("Illegal RegExp pattern ("+String(p)+")",a))},
jU:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dL:function dL(a){this.a=a},
ee:function ee(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dI:function dI(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a){this.a=a},
fF:function fF(a){this.a=a},
cH:function cH(a){this.a=a
this.b=null},
bi:function bi(){},
ec:function ec(){},
e6:function e6(){},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function cz(a){this.a=a},
d1:function d1(a){this.a=a},
dZ:function dZ(a){this.a=a},
em:function em(a){this.a=a},
bC:function bC(a){this.a=a
this.d=this.b=null},
c9:function c9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dB:function dB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fs:function fs(a){this.a=a},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
dq:function dq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f3:function f3(a){this.b=a},
hL:function(a,b,c){},
hx:function(a,b,c){var u
H.hL(a,b,c)
u=new Float32Array(a,b,c)
return u},
hy:function(a,b,c){var u
H.hL(a,b,c)
u=new Int16Array(a,b,c)
return u},
fe:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.ba(b,a))},
cf:function cf(){},
ce:function ce(){},
bu:function bu(){},
bv:function bv(){},
cc:function cc(){},
cd:function cd(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
jE:function(a){return J.iS(a?Object.keys(a):[],null)},
jX:function(a){return v.mangledGlobalNames[a]},
jS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
h7:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fo:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.h6==null){H.jJ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.hF("Return interceptor for "+H.b(u(a,q))))}s=a.constructor
r=s==null?null:s[$.hb()]
if(r!=null)return r
r=H.jO(a)
if(r!=null)return r
if(typeof a=="function")return C.a0
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.hb(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
iS:function(a,b){return J.hp(H.l(a,[b]))},
hp:function(a){a.fixed$length=Array
return a},
hq:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
iT:function(a,b){var u,t
for(u=a.length;b<u;){t=C.e.al(a,b)
if(t!==32&&t!==13&&!J.hq(t))break;++b}return b},
iU:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.e.cb(a,u)
if(t!==32&&t!==13&&!J.hq(t))break}return b},
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c5.prototype
return J.c4.prototype}if(typeof a=="string")return J.aT.prototype
if(a==null)return J.c6.prototype
if(typeof a=="boolean")return J.dp.prototype
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.n)return a
return J.fo(a)},
fn:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.n)return a
return J.fo(a)},
i4:function(a){if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.n)return a
return J.fo(a)},
i5:function(a){if(typeof a=="number")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b2.prototype
return a},
jG:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b2.prototype
return a},
cN:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.n)return a
return J.fo(a)},
cO:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).A(a,b)},
fH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jM(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fn(a).p(a,b)},
iB:function(a,b,c,d){return J.cN(a).d4(a,b,c,d)},
iC:function(a,b,c,d){return J.cN(a).dV(a,b,c,d)},
hf:function(a,b){return J.i4(a).E(a,b)},
at:function(a){return J.u(a).gl(a)},
fI:function(a){return J.i4(a).gF(a)},
aM:function(a){return J.fn(a).gk(a)},
hg:function(a){return J.cN(a).gcz(a)},
cP:function(a){return J.cN(a).gaE(a)},
iD:function(a){return J.cN(a).gcJ(a)},
fJ:function(a){return J.i5(a).eP(a)},
cQ:function(a){return J.u(a).h(a)},
iE:function(a,b){return J.i5(a).eQ(a,b)},
iF:function(a){return J.jG(a).eS(a)},
z:function z(){},
dp:function dp(){},
c6:function c6(){},
c8:function c8(){},
dK:function dK(){},
b2:function b2(){},
aA:function aA(){},
az:function az(a){this.$ti=a},
fP:function fP(a){this.$ti=a},
cT:function cT(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bq:function bq(){},
c5:function c5(){},
c4:function c4(){},
aT:function aT(){}},P={
jb:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.jw()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.aK(new P.eq(s),1)).observe(u,{childList:true})
return new P.ep(s,u,t)}else if(self.setImmediate!=null)return P.jx()
return P.jy()},
jc:function(a){self.scheduleImmediate(H.aK(new P.er(H.e(a,{func:1,ret:-1})),0))},
jd:function(a){self.setImmediate(H.aK(new P.es(H.e(a,{func:1,ret:-1})),0))},
je:function(a){H.e(a,{func:1,ret:-1})
P.jh(0,a)},
hD:function(a,b){var u=C.c.ad(a.a,1000)
return P.ji(u<0?0:u,b)},
jh:function(a,b){var u=new P.cI(!0)
u.d0(a,b)
return u},
ji:function(a,b){var u=new P.cI(!1)
u.d1(a,b)
return u},
hH:function(a,b){var u,t,s
b.a=1
try{a.cM(new P.eJ(b),new P.eK(b),P.v)}catch(s){u=H.as(s)
t=H.bT(s)
P.ig(new P.eL(b,u,t))}},
eI:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iO")
if(u>=4){t=b.ao()
b.a=a.a
b.c=a.c
P.b5(b,t)}else{t=H.k(b.c,"$iah")
b.a=2
b.c=a
a.bZ(t)}},
b5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iN")
P.cL(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.b5(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.k(q,"$iN")
P.cL(i,i,g.b,q.a,q.b)
return}l=$.x
if(l!==n)$.x=n
else l=i
g=b.c
if((g&15)===8)new P.eQ(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.eP(u,b,q).$0()}else if((g&2)!==0)new P.eO(h,u,b).$0()
if(l!=null)$.x=l
g=u.b
if(!!J.u(g).$ia9){if(g.a>=4){k=H.k(o.c,"$iah")
o.c=null
b=o.ap(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.eI(g,o)
return}}j=b.b
k=H.k(j.c,"$iah")
j.c=null
b=j.ap(k)
g=u.a
p=u.b
if(!g){H.j(p,H.c(j,0))
j.a=4
j.c=p}else{H.k(p,"$iN")
j.a=8
j.c=p}h.a=j
g=j}},
jp:function(a,b){if(H.bb(a,{func:1,args:[P.n,P.E]}))return b.cC(a,null,P.n,P.E)
if(H.bb(a,{func:1,args:[P.n]}))return H.e(a,{func:1,ret:null,args:[P.n]})
throw H.f(P.hh(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jn:function(){var u,t
for(;u=$.b8,u!=null;){$.bQ=null
t=u.b
$.b8=t
if(t==null)$.bP=null
u.a.$0()}},
jt:function(){$.h1=!0
try{P.jn()}finally{$.bQ=null
$.h1=!1
if($.b8!=null)$.hc().$1(P.i1())}},
hW:function(a){var u=new P.cA(a)
if($.b8==null){$.b8=$.bP=u
if(!$.h1)$.hc().$1(P.i1())}else $.bP=$.bP.b=u},
js:function(a){var u,t,s=$.b8
if(s==null){P.hW(a)
$.bQ=$.bP
return}u=new P.cA(a)
t=$.bQ
if(t==null){u.b=s
$.b8=$.bQ=u}else{u.b=t.b
$.bQ=t.b=u
if(u.b==null)$.bP=u}},
ig:function(a){var u=null,t=$.x
if(C.d===t){P.aI(u,u,C.d,a)
return}P.aI(u,u,t,H.e(t.c8(a),{func:1,ret:-1}))},
bA:function(a){return new P.en(null,null,[a])},
jr:function(a){return},
hS:function(a,b){P.cL(null,null,$.x,a,b)},
jo:function(){},
j8:function(a,b){var u=$.x
if(u===C.d)return P.hD(a,H.e(b,{func:1,ret:-1,args:[P.ae]}))
return P.hD(a,H.e(u.c9(b,P.ae),{func:1,ret:-1,args:[P.ae]}))},
cL:function(a,b,c,d,e){var u={}
u.a=d
P.js(new P.fh(u,e))},
hU:function(a,b,c,d,e){var u,t=$.x
if(t===c)return d.$0()
$.x=c
u=t
try{t=d.$0()
return t}finally{$.x=u}},
hV:function(a,b,c,d,e,f,g){var u,t=$.x
if(t===c)return d.$1(e)
$.x=c
u=t
try{t=d.$1(e)
return t}finally{$.x=u}},
jq:function(a,b,c,d,e,f,g,h,i){var u,t=$.x
if(t===c)return d.$2(e,f)
$.x=c
u=t
try{t=d.$2(e,f)
return t}finally{$.x=u}},
aI:function(a,b,c,d){var u
H.e(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.c8(d):c.ec(d,-1)
P.hW(d)},
eq:function eq(a){this.a=a},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
es:function es(a){this.a=a},
cI:function cI(a){this.a=a
this.b=null
this.c=0},
fc:function fc(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
et:function et(a,b){this.a=a
this.$ti=b},
S:function S(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
eu:function eu(){},
en:function en(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
ew:function ew(){},
eo:function eo(a,b){this.a=a
this.$ti=b},
ah:function ah(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
O:function O(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eF:function eF(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
eJ:function eJ(a){this.a=a},
eK:function eK(a){this.a=a},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eR:function eR(a){this.a=a},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a){this.a=a
this.b=null},
e8:function e8(){},
e9:function e9(a,b){this.a=a
this.b=b},
ea:function ea(a,b){this.a=a
this.b=b},
ad:function ad(){},
cB:function cB(){},
ex:function ex(){},
ev:function ev(){},
fa:function fa(){},
eA:function eA(){},
ez:function ez(a,b){this.b=a
this.a=null
this.$ti=b},
bN:function bN(){},
f4:function f4(a,b){this.a=a
this.b=b},
bO:function bO(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
ae:function ae(){},
N:function N(a,b){this.a=a
this.b=b},
fd:function fd(){},
fh:function fh(a,b){this.a=a
this.b=b},
f5:function f5(){},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a,b){this.a=a
this.b=b},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function(a,b,c){return H.m(H.jF(a,new H.c9([b,c])),"$iht",[b,c],"$aht")},
ac:function(a,b){return new H.c9([a,b])},
iY:function(a){return new P.f0([a])},
fX:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
iQ:function(a,b,c){var u,t
if(P.h2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.l([],[P.w])
C.a.j($.U,a)
try{P.jl(a,u)}finally{if(0>=$.U.length)return H.a($.U,-1)
$.U.pop()}t=P.hC(b,H.jN(u,"$it"),", ")+c
return t.charCodeAt(0)==0?t:t},
fO:function(a,b,c){var u,t
if(P.h2(a))return b+"..."+c
u=new P.bB(b)
C.a.j($.U,a)
try{t=u
t.a=P.hC(t.a,a,", ")}finally{if(0>=$.U.length)return H.a($.U,-1)
$.U.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
h2:function(a){var u,t
for(u=$.U.length,t=0;t<u;++t)if(a===$.U[t])return!0
return!1},
jl:function(a,b){var u,t,s,r,q,p,o,n=a.gF(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.b(n.gu())
C.a.j(b,u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.a(b,-1)
t=b.pop()
if(0>=b.length)return H.a(b,-1)
s=b.pop()}else{r=n.gu();++l
if(!n.t()){if(l<=4){C.a.j(b,H.b(r))
return}t=H.b(r)
if(0>=b.length)return H.a(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gu();++l
for(;n.t();r=q,q=p){p=n.gu();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.a(b,-1)
m-=b.pop().length+2;--l}C.a.j(b,"...")
return}}s=H.b(r)
t=H.b(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.j(b,o)
C.a.j(b,s)
C.a.j(b,t)},
hv:function(a){var u,t={}
if(P.h2(a))return"{...}"
u=new P.bB("")
try{C.a.j($.U,a)
u.a+="{"
t.a=!0
a.N(0,new P.dE(t,u))
u.a+="}"}finally{if(0>=$.U.length)return H.a($.U,-1)
$.U.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
f0:function f0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bI:function bI(a){this.a=a
this.b=null},
f1:function f1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
R:function R(){},
dD:function dD(){},
dE:function dE(a,b){this.a=a
this.b=b},
dF:function dF(){},
f9:function f9(){},
i9:function(a){var u=H.j3(a,null)
if(u!=null)return u
throw H.f(P.fM(a,null))},
jD:function(a){var u=H.j2(a)
if(u!=null)return u
throw H.f(P.fM("Invalid double",a))},
iO:function(a){if(a instanceof H.bi)return a.h(0)
return"Instance of '"+H.b(H.ch(a))+"'"},
iZ:function(a,b,c){var u,t=H.l([],[c])
for(u=a.gF(a);u.t();)C.a.j(t,H.j(u.gu(),c))
return t},
fU:function(a){return new H.dq(a,H.iV(a,!1,!0,!1,!1,!1))},
hC:function(a,b,c){var u=J.fI(b)
if(!u.t())return a
if(c.length===0){do a+=H.b(u.gu())
while(u.t())}else{a+=H.b(u.gu())
for(;u.t();)a=a+c+H.b(u.gu())}return a},
ho:function(){return new P.ak()},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cQ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iO(a)},
be:function(a){return new P.aj(!1,null,null,a)},
hh:function(a,b,c){return new P.aj(!0,a,b,c)},
ck:function(a,b){return new P.cj(null,null,!0,a,b,"Value not in range")},
aW:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
hB:function(a,b,c){if(0>a||a>c)throw H.f(P.aW(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aW(b,a,c,"end",null))
return b}return c},
fS:function(a,b){if(typeof a!=="number")return a.bz()
if(a<0)throw H.f(P.aW(a,0,null,b,null))},
dl:function(a,b,c,d,e){var u=H.P(e==null?J.aM(b):e)
return new P.dk(u,!0,a,c,"Index out of range")},
F:function(a){return new P.ei(a)},
hF:function(a){return new P.eg(a)},
bz:function(a){return new P.b1(a)},
aN:function(a){return new P.d2(a)},
fM:function(a,b){return new P.de(a,b)},
L:function L(){},
a3:function a3(){},
bl:function bl(a){this.a=a},
d6:function d6(){},
d7:function d7(){},
ak:function ak(){},
cU:function cU(){},
cg:function cg(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dk:function dk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ei:function ei(a){this.a=a},
eg:function eg(a){this.a=a},
b1:function b1(a){this.a=a},
d2:function d2(a){this.a=a},
dJ:function dJ(){},
cw:function cw(){},
d4:function d4(a){this.a=a},
eE:function eE(a){this.a=a},
de:function de(a,b){this.a=a
this.b=b},
p:function p(){},
t:function t(){},
q:function q(){},
v:function v(){},
o:function o(){},
n:function n(){},
E:function E(){},
e7:function e7(){this.b=this.a=0},
w:function w(){},
bB:function bB(a){this.a=a},
jB:function(a){var u={}
a.N(0,new P.fk(u))
return u},
fk:function fk(a){this.a=a},
bw:function bw(){},
cu:function cu(){},
ej:function ej(){},
hI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eZ:function eZ(){},
a0:function a0(a,b,c){this.a=a
this.b=b
this.$ti=c},
h:function h(){},
bU:function bU(){},
a7:function a7(){},
ci:function ci(){},
aE:function aE(){},
cy:function cy(){},
bD:function bD(){}},W={
jY:function(){return window},
iI:function(a,b){var u=document.createElement("canvas")
u.width=b
u.height=a
return u},
hn:function(a){H.k(a,"$ial")
return"wheel"},
iP:function(){var u=document.createElement("img")
return u},
j9:function(a){return new TouchEvent(a)},
ja:function(){var u
try{W.j9("touches")
return!0}catch(u){H.as(u)}return!1},
f_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hJ:function(a,b,c,d){var u=W.f_(W.f_(W.f_(W.f_(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
y:function(a,b,c,d,e){var u=W.hY(new W.eD(c),W.d),t=u!=null
if(t&&!0){H.e(u,{func:1,args:[W.d]})
if(t)J.iB(a,b,u,!1)}return new W.eC(a,b,u,!1,[e])},
fY:function(a){var u
if("postMessage" in a){u=W.jf(a)
return u}else return H.k(a,"$ial")},
jf:function(a){if(a===window)return H.k(a,"$ihG")
else return new W.ey()},
hY:function(a,b){var u=$.x
if(u===C.d)return a
return u.c9(a,b)},
ie:function(a){return document.querySelector(a)},
i:function i(){},
cR:function cR(){},
cS:function cS(){},
av:function av(){},
bV:function bV(){},
aw:function aw(){},
bj:function bj(){},
d3:function d3(){},
d5:function d5(){},
bW:function bW(){},
bm:function bm(){},
d:function d(){},
al:function al(){},
dd:function dd(){},
aa:function aa(){},
ab:function ab(){},
V:function V(){},
bt:function bt(){},
B:function B(){},
X:function X(){},
e_:function e_(){},
a1:function a1(){},
am:function am(){},
ed:function ed(){},
aF:function aF(){},
ek:function ek(){},
ag:function ag(){},
bE:function bE(){},
cD:function cD(){},
eB:function eB(){},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eC:function eC(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
eD:function eD(a){this.a=a},
aS:function aS(){},
dc:function dc(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ey:function ey(){},
cC:function cC(){},
cJ:function cJ(){},
cK:function cK(){}},K={
hs:function(){var u=new K.ds(P.bA(P.o))
u.b=u.a=new K.el()
return u},
el:function el(){this.b=this.a=null},
ds:function ds(a){var _=this
_.b=_.a=null
_.c=0
_.d=a}},A={
iH:function(a){var u,t,s,r,q,p=$.ij(),o=A.iG(a,p.d),n=o.b,m=o.c
p.toString
u=W.iP()
t=W.aa
s=new P.O($.x,[t])
r=new N.c3(u,new P.eo(s,[t]),n)
t=W.d
q={func:1,ret:-1,args:[t]}
r.d=W.y(u,"load",H.e(r.gdL(),q),!1,t)
r.e=W.y(u,"error",H.e(r.gdJ(),q),!1,t)
u.src=n
return s.br(new A.cY(m),A.a5)},
iG:function(a,b){var u=new A.cV()
u.cU(a,b)
return u},
j6:function(a){var u="middleClick",t="rightClick",s=P.o,r=T.J(),q=T.J(),p=T.J(),o=H.l([],[A.aG]),n=H.l([new A.b6("mouseDown","mouseUp","click","doubleClick"),new A.b6("middleMouseDown","middleMouseUp",u,u),new A.b6("rightMouseDown","rightMouseUp",t,t)],[A.b6]),m=K.hs(),l=H.l([],[A.W]),k=$.a8
$.a8=k+1
k=new A.D(new U.K(0,0,0,0,[s]),r,q,p,new R.b_("render",!1),C.k,C.n,C.o,C.i,new U.A(0,0,[s]),o,P.ac(P.p,A.b7),n,m,l,k,H.l([],[A.au]),T.J())
k.cW(a,null,null,null)
return k},
a5:function a5(a){this.c=a},
cY:function cY(a){this.a=a},
cV:function cV(){this.c=this.b=this.a=null},
cW:function cW(a){this.a=a},
cX:function cX(a){this.d=a},
au:function au(){},
W:function W(){},
bk:function bk(){},
dn:function dn(){},
dR:function dR(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=0
_.a=!1},
dS:function dS(a){this.a=a},
dT:function dT(a,b){this.a=a
this.b=b},
cv:function cv(a,b,c,d){var _=this
_.n=null
_.K=a
_.b=b
_.d=_.c=0
_.ch=1
_.cx=!0
_.dy=c
_.fy=null
_.go=d
_.id=!0
_.a=null},
by:function by(a){this.b=a},
b0:function b0(a){this.b=a},
Y:function Y(a){this.b=a},
D:function D(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.S=_.bg=_.a2=_.n=null
_.bh=_.ax=_.cs=_.cr=0
_.ay=1
_.ev=!1
_.bl=_.bk=_.bj=_.bi=0
_.ew=a
_.az=b
_.ct=c
_.cg=d
_.eq=e
_.R=null
_.bc=f
_.au=g
_.ci=h
_.cj=i
_.ck="default"
_.cl=j
_.bd=null
_.cm=k
_.cn=l
_.er=m
_.es=n
_.be=4294967295
_.I=_.eu=!0
_.J=_.a0=!1
_.K=o
_.b=p
_.d=_.c=0
_.ch=1
_.cx=!0
_.dy=q
_.fy=null
_.go=r
_.id=!0
_.a=null},
e5:function e5(a){this.a=a},
e2:function e2(a){this.a=a},
e3:function e3(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
cx:function cx(a,b,c,d,e,f){var _=this
_.k4=a
_.r1=b
_.r2=c
_.ry=_.rx=0
_.b=d
_.d=_.c=0
_.ch=1
_.cx=!0
_.dy=e
_.fy=null
_.go=f
_.id=!0
_.a=null},
e1:function e1(){},
b6:function b6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.x=_.r=0},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG:function aG(){}},U={
jg:function(a){var u=new U.ao(H.l([],[U.Z]))
u.cZ(a)
return u},
eY:function(a,b,c,d){var u=new U.eX(b,c,d,H.l([],[U.bH]))
u.d_(a,b,c,d)
return u},
bZ:function bZ(){this.a=null},
c_:function c_(){this.a=null},
df:function df(){},
dg:function dg(a){this.c=a
this.a=null},
c0:function c0(a,b){this.b=a
this.c=b
this.a=null},
c1:function c1(a,b){this.b=a
this.c=b
this.a=null},
dh:function dh(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.a=null},
di:function di(){},
c2:function c2(a,b,c,d){var _=this
_.f=a
_.b=b
_.c=c
_.d=d
_.a=null},
bo:function bo(a,b){this.a=a
this.b=b
this.c=null},
aR:function aR(){},
dj:function dj(){},
bs:function bs(a){this.b=a},
bh:function bh(a){this.b=a},
cF:function cF(a,b){this.b=a
this.c=b
this.a=null},
cG:function cG(){},
eS:function eS(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.a=e},
eT:function eT(a,b){this.b=a
this.c=b},
eU:function eU(a,b){this.b=a
this.a=b},
eV:function eV(a,b,c){var _=this
_.b=!1
_.c=a
_.d=b
_.a=c},
eW:function eW(a,b){this.b=a
this.a=b},
aH:function aH(){},
bG:function bG(){},
ao:function ao(a){this.b=null
this.a=a},
Z:function Z(a,b,c,d,e,f,g){var _=this
_.z=null
_.Q=!1
_.a=a
_.b=b
_.d=_.c=0
_.e=c
_.f=d
_.r=e
_.x=f
_.y=g},
eX:function eX(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
bH:function bH(a,b,c,d,e,f,g,h){var _=this
_.z=a
_.ch=_.Q=-1
_.a=b
_.b=c
_.d=_.c=0
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h},
A:function A(a,b,c){this.a=a
this.b=b
this.$ti=c},
K:function K(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iW:function(a,b,c,d,e,f,g){var u=H.l([],[A.W]),t=$.a8
$.a8=t+1
t=new U.ca(a,f,b,e,d,g,u,t,H.l([],[A.au]),T.J())
t.cV(a,b,c,d,e,f,g)
return t},
r:function r(a,b,c,d,e,f){var _=this
_.I=a
_.a0=b
_.n=_.J=null
_.K=c
_.b=d
_.d=_.c=0
_.ch=1
_.cx=!0
_.dy=e
_.fy=null
_.go=f
_.id=!0
_.a=null},
ca:function ca(a,b,c,d,e,f,g,h,i,j){var _=this
_.I=null
_.a0=a
_.J=b
_.bf=c
_.co=d
_.a1=null
_.cp=e
_.ag=null
_.cq=f
_.n=_.aw=_.av=null
_.K=g
_.b=h
_.d=_.c=0
_.ch=1
_.cx=!0
_.dy=i
_.fy=null
_.go=j
_.id=!0
_.a=null},
dv:function dv(a,b){this.a=a
this.b=b},
dt:function dt(a){this.a=a},
dA:function dA(a){this.a=a},
dw:function dw(){},
dy:function dy(a){this.a=a},
dx:function dx(){},
dz:function dz(){},
du:function du(){}},L={
hP:function(){var u,t
if($.h_===-1){u=window
t=H.e(new L.ff(),{func:1,ret:-1,args:[P.o]})
C.M.dn(u)
$.h_=C.M.dX(u,W.hY(t,P.o))}},
j4:function(a){var u=T.J(),t=new T.aU(new Float32Array(16))
t.a7()
t=new L.bF(C.f,u,t,null)
u=new L.dX(a,t)
u.e=t
return u},
fV:function(a,b,c,d,e){var u,t,s,r,q,p=new Int16Array(6),o=new Float32Array(16),n=new L.ct(a,b,c,d,e,p,o),m=d===0
if(m||d===2){u=0-c.a
t=u/e
o[12]=t
o[0]=t
t=0-c.b
s=t/e
o[5]=s
o[1]=s
u=(u+b.c)/e
o[4]=u
o[8]=u
t=(t+b.d)/e
o[13]=t
o[9]=t}else if(d===1||d===3){u=0-c.a
t=u/e
o[12]=t
o[0]=t
t=0-c.b
s=t/e
o[5]=s
o[1]=s
u=(u+b.d)/e
o[4]=u
o[8]=u
t=(t+b.c)/e
o[13]=t
o[9]=t}else H.H(P.ho())
if(m){m=b.a
u=a.a
t=m/u
o[14]=t
o[2]=t
t=b.b
s=a.b
r=t/s
o[7]=r
o[3]=r
r=H.c(b,0)
u=H.j(m+b.c,r)/u
o[6]=u
o[10]=u
s=H.j(t+b.d,r)/s
o[15]=s
o[11]=s}else if(d===1){m=b.a
u=H.c(b,0)
t=H.j(m+b.c,u)
s=a.a
t/=s
o[6]=t
o[2]=t
t=b.b
r=a.b
q=t/r
o[15]=q
o[3]=q
s=m/s
o[14]=s
o[10]=s
r=H.j(t+b.d,u)/r
o[7]=r
o[11]=r}else if(d===2){m=b.a
u=H.c(b,0)
t=H.j(m+b.c,u)
s=a.a
t/=s
o[14]=t
o[2]=t
t=b.b
u=H.j(t+b.d,u)
r=a.b
u/=r
o[7]=u
o[3]=u
s=m/s
o[6]=s
o[10]=s
r=t/r
o[15]=r
o[11]=r}else if(d===3){m=b.a
u=a.a
t=m/u
o[6]=t
o[2]=t
t=b.b
s=H.c(b,0)
r=H.j(t+b.d,s)
q=a.b
r/=q
o[15]=r
o[3]=r
u=H.j(m+b.c,s)/u
o[14]=u
o[10]=u
q=t/q
o[7]=q
o[11]=q}else H.H(P.ho())
p[0]=0
p[1]=1
p[2]=2
p[3]=0
p[4]=2
p[5]=3
n.y=o
n.x=p
return n},
cZ:function cZ(){},
aX:function aX(a){var _=this
_.a=a
_.d=_.c=0
_.e=-1
_.x=_.r=_.f=null},
aY:function aY(a){var _=this
_.a=a
_.d=_.c=0
_.e=-1
_.x=_.r=_.f=null},
co:function co(a){this.b=a},
aZ:function aZ(){},
dO:function dO(){},
cm:function cm(a,b,c,d,e,f,g){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=1
_.a=e
_.b=f
_.c=g},
cn:function cn(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=a
_.e=null
_.f=b
_.r=c
_.Q=_.z=_.y=_.x=null
_.cx=0
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h
_.fx=i
_.fy=j
_.go=k
_.a=l
_.b=m
_.c=n},
dQ:function dQ(){},
cp:function cp(){},
ff:function ff(){},
cq:function cq(){},
f2:function f2(){},
bx:function bx(){},
dU:function dU(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
dV:function dV(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
dW:function dW(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
bF:function bF(a,b,c,d){var _=this
_.a=1
_.b=a
_.c=b
_.d=c
_.e=d
_.f=null},
dX:function dX(a,b){this.c=a
this.d=b
this.e=null},
aD:function aD(){this.c=this.b=this.a=0},
cr:function cr(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=a
_.x=null
_.y=-1
_.z=!1
_.ch=_.Q=null},
cs:function cs(a){this.a=a},
ct:function ct(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=null
_.z=!1},
dY:function dY(){}},T={dC:function dC(a){this.a=a},
J:function(){var u=new Float32Array(6)
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0
return new T.dG(u)},
dG:function dG(a){this.a=a},
aU:function aU(a){this.a=a}},R={
fZ:function(a,b,c){var u,t,s,r=b.length
for(u={func:1,ret:-1,args:[c]},t=0;t<r;++t){if(t<0||t>=b.length)return H.a(b,t)
s=b[t]
if(!s.c){a.r=a.f=!1
a.d=s.e.a
H.e(s.f,u).$1(H.j(a,c))}else{C.a.bo(b,t);--r;--t}}},
d0:function d0(){},
aO:function aO(a,b){var _=this
_.a=a
_.b=b
_.d=null
_.r=_.f=!1},
aP:function aP(a,b){var _=this
_.a=a
_.b=b
_.d=null
_.r=_.f=!1},
b_:function b_(a,b){var _=this
_.a=a
_.b=b
_.d=null
_.r=_.f=!1},
I:function I(a,b){var _=this
_.a=a
_.b=b
_.d=null
_.r=_.f=!1},
bY:function bY(){},
bn:function bn(a){this.b=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.c=b
_.d=0
_.$ti=c},
C:function C(a,b,c,d,e){var _=this
_.a=a
_.c=!1
_.d=b
_.e=c
_.f=d
_.$ti=e},
bp:function bp(a){this.b=a},
dm:function dm(){},
G:function G(a,b,c,d,e){var _=this
_.k3=a
_.z=b
_.Q=c
_.a=d
_.b=e
_.d=null
_.r=_.f=!1},
an:function an(a,b,c,d){var _=this
_.z=a
_.Q=b
_.a=c
_.b=d
_.d=null
_.r=_.f=!1}},N={c3:function c3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null}},Q={dH:function dH(){},
jj:function(){var u,t
try{u=W.ja()
return u}catch(t){H.as(t)
return!1}}},F={
ib:function(){var u,t,s=K.hs(),r=H.l([],[A.D])
s=new A.dR(s,r,new R.aO("enterFrame",!1),new R.aP("exitFrame",!1))
s.a=!0
L.hP()
C.a.j($.hO,s.gdH())
u=$.fG()
t=u.bg
if(t!=null)if(C.a.aH(t.c,u))u.bg=null
u.bg=s
C.a.j(r,u)
s=document
r=J.cP(s.querySelector("#playButton"))
u=H.c(r,0)
W.y(r.a,r.b,H.e(new F.fw(),{func:1,ret:-1,args:[u]}),!1,u)
u=J.cP(s.querySelector("#clearButton"))
r=H.c(u,0)
W.y(u.a,u.b,H.e(new F.fx(),{func:1,ret:-1,args:[r]}),!1,r)
r=J.cP(s.querySelector("#gridCheckbox"))
u=H.c(r,0)
W.y(r.a,r.b,H.e(new F.fy(),{func:1,ret:-1,args:[u]}),!1,u)
u=J.cP(s.querySelector("#wrapCheckbox"))
r=H.c(u,0)
W.y(u.a,u.b,H.e(new F.fz(),{func:1,ret:-1,args:[r]}),!1,r)
r=J.hg(s.querySelector("#speedSlider"))
u=H.c(r,0)
W.y(r.a,r.b,H.e(new F.fA(),{func:1,ret:-1,args:[u]}),!1,u)
s=J.hg(s.querySelector("#cellSlider"))
u=H.c(s,0)
W.y(s.a,s.b,H.e(new F.fB(),{func:1,ret:-1,args:[u]}),!1,u)
u=$.he()
u.toString
s=W.V
W.y(u,"keyup",H.e(new F.fC(),{func:1,ret:-1,args:[s]}),!1,s)
F.h9()},
i7:function(){var u,t,s,r,q=new F.fp(),p=$.he(),o=p.value,n=P.fU("^B([0-8]+)/S([0-8]+)$").cu(o)
if(n!=null){u=n.b
if(1>=u.length)return H.a(u,1)
if(H.M(q.$1(u[1]))){if(2>=u.length)return H.a(u,2)
q=!H.M(q.$1(u[2]))}else q=!0}else q=!0
if(q){p.id="invalid"
return}p.id="rulesInput"
q=n.b
if(1>=q.length)return H.a(q,1)
p=[P.w]
u=H.l(q[1].split(""),p)
t=P.p
s=H.c(u,0)
r=new H.aC(u,H.e(new F.fq(),{func:1,ret:t,args:[s]}),[s,t]).cN(0)
if(2>=q.length)return H.a(q,2)
p=H.l(q[2].split(""),p)
q=H.c(p,0)
return[r,new H.aC(p,H.e(new F.fr(),{func:1,ret:t,args:[q]}),[q,t]).cN(0)]},
h9:function(){var u,t,s,r,q,p,o,n,m,l=$.aq
if(l!=null){l=l.ag
if(l!=null&&l.b!=null)l.M()
$.fG().cD($.aq)}l=document
u=J.fJ(H.ap(l.querySelector("#speedSlider"),"$ifT").valueAsNumber)
t=H.ap(l.querySelector("#wrapCheckbox"),"$iab").checked
s=Math.pow(2,J.fJ(H.ap(l.querySelector("#cellSlider"),"$ifT").valueAsNumber))
r=H.ap(l.querySelector("#gridCheckbox"),"$iab").checked
q=F.i7()
p=$.fG()
o=C.c.ak(p.ax,s)
n=[P.p]
m=H.m(q[0],"$ie0",n,"$ae0")
n=H.m(q[1],"$ie0",n,"$ae0")
$.aq=U.iW(m,H.P(s),r,o,u,n,t)
l.querySelector("#playButton").textContent="Play!"
p.b6($.aq)},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){}},O={
br:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hr:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)}},V={
fj:function(a){return"rgba("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+","+H.b((a>>>24&255)/255)+")"},
jQ:function(a,b){if(typeof b!=="number")return H.a_(b)
if(a<=b)return a
else return b},
fi:function(a,b,c){if(a<=b)return b
else if(a>=c)return c
else return a},
fm:function(a){if(typeof a==="number"&&Math.floor(a)===a)return a
else throw H.f(P.be("The supplied value ("+H.b(a)+") is not an int."))},
i2:function(a){return a},
ih:function(a,b){return a-0.0001<b&&a+0.0001>b}}
var w=[C,H,J,P,W,K,A,U,L,T,R,N,Q,F,O,V]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fQ.prototype={}
J.z.prototype={
A:function(a,b){return a===b},
gl:function(a){return H.aV(a)},
h:function(a){return"Instance of '"+H.b(H.ch(a))+"'"}}
J.dp.prototype={
h:function(a){return String(a)},
gl:function(a){return a?519018:218159},
$iL:1}
J.c6.prototype={
A:function(a,b){return null==b},
h:function(a){return"null"},
gl:function(a){return 0},
$iv:1}
J.c8.prototype={
gl:function(a){return 0},
h:function(a){return String(a)}}
J.dK.prototype={}
J.b2.prototype={}
J.aA.prototype={
h:function(a){var u=a[$.ik()]
if(u==null)return this.cS(a)
return"JavaScript function for "+H.b(J.cQ(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ifN:1}
J.az.prototype={
j:function(a,b){H.j(b,H.c(a,0))
if(!!a.fixed$length)H.H(P.F("add"))
a.push(b)},
bo:function(a,b){if(!!a.fixed$length)H.H(P.F("removeAt"))
if(b<0||b>=a.length)throw H.f(P.ck(b,null))
return a.splice(b,1)[0]},
aH:function(a,b){var u
if(!!a.fixed$length)H.H(P.F("remove"))
for(u=0;u<a.length;++u)if(J.cO(a[u],b)){a.splice(u,1)
return!0}return!1},
eb:function(a,b){var u,t
H.m(b,"$it",[H.c(a,0)],"$at")
if(!!a.fixed$length)H.H(P.F("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.a4)(b),++t)a.push(b[t])},
N:function(a,b){var u,t
H.e(b,{func:1,ret:-1,args:[H.c(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.aN(a))}},
cv:function(a,b,c,d){var u,t,s
H.j(b,d)
H.e(c,{func:1,ret:d,args:[d,H.c(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.f(P.aN(a))}return t},
E:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
eC:function(a,b){var u
if(0>=a.length)return-1
for(u=0;u<a.length;++u)if(J.cO(a[u],b))return u
return-1},
h:function(a){return P.fO(a,"[","]")},
gF:function(a){return new J.cT(a,a.length,[H.c(a,0)])},
gl:function(a){return H.aV(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.H(P.F("set length"))
if(b<0)throw H.f(P.aW(b,0,null,"newLength",null))
a.length=b},
p:function(a,b){if(b>=a.length||b<0)throw H.f(H.ba(a,b))
return a[b]},
q:function(a,b,c){H.j(c,H.c(a,0))
if(!!a.immutable$list)H.H(P.F("indexed set"))
if(b>=a.length||b<0)throw H.f(H.ba(a,b))
a[b]=c},
$it:1,
$iq:1}
J.fP.prototype={}
J.cT.prototype={
gu:function(){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.a4(s))
u=t.c
if(u>=r){t.sbG(null)
return!1}t.sbG(s[u]);++t.c
return!0},
sbG:function(a){this.d=H.j(a,H.c(this,0))},
$iay:1}
J.bq.prototype={
eP:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.F(""+a+".toInt()"))},
ed:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.f(P.F(""+a+".ceil()"))},
ey:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.F(""+a+".floor()"))},
w:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.F(""+a+".round()"))},
eQ:function(a,b){var u,t
if(b<0||b>20)throw H.f(P.aW(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
P:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ak:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c1(a,b)},
ad:function(a,b){return(a|0)===a?a/b|0:this.c1(a,b)},
c1:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.F("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+H.b(b)))},
e1:function(a,b){var u
if(a>0)u=this.e0(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
e0:function(a,b){return b>31?0:a>>>b},
$ia3:1,
$io:1}
J.c5.prototype={$ip:1}
J.c4.prototype={}
J.aT.prototype={
cb:function(a,b){if(b<0)throw H.f(H.ba(a,b))
if(b>=a.length)H.H(H.ba(a,b))
return a.charCodeAt(b)},
al:function(a,b){if(b>=a.length)throw H.f(H.ba(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.f(P.hh(b,null,null))
return a+b},
bD:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.ck(b,null))
if(b>c)throw H.f(P.ck(b,null))
if(c>a.length)throw H.f(P.ck(c,null))
return a.substring(b,c)},
cP:function(a,b){return this.bD(a,b,null)},
eS:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.al(r,0)===133){u=J.iT(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.cb(r,t)===133?J.iU(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
aM:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.U)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aF:function(a,b){var u=b-a.length
if(u<=0)return a
return this.aM(" ",u)+a},
h:function(a){return a},
gl:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ihA:1,
$iw:1}
H.d8.prototype={}
H.aB.prototype={
gF:function(a){var u=this
return new H.cb(u,u.gk(u),[H.h5(u,"aB",0)])},
bt:function(a,b){var u,t=this,s=H.l([],[H.h5(t,"aB",0)])
C.a.sk(s,t.gk(t))
for(u=0;u<t.gk(t);++u)C.a.q(s,u,t.E(0,u))
return s},
bs:function(a){return this.bt(a,!0)},
cN:function(a){var u,t=this,s=P.iY(H.h5(t,"aB",0))
for(u=0;u<t.gk(t);++u)s.j(0,t.E(0,u))
return s}}
H.eb.prototype={
gdm:function(){var u=J.aM(this.a)
return u},
ge2:function(){var u=J.aM(this.a),t=this.b
if(t>u)return u
return t},
gk:function(a){var u=J.aM(this.a),t=this.b
if(t>=u)return 0
return u-t},
E:function(a,b){var u,t=this,s=t.ge2()+b
if(b>=0){u=t.gdm()
if(typeof u!=="number")return H.a_(u)
u=s>=u}else u=!0
if(u)throw H.f(P.dl(b,t,"index",null,null))
return J.hf(t.a,s)},
bt:function(a,b){var u,t,s,r=this,q=r.b,p=r.a,o=J.fn(p),n=o.gk(p),m=n-q
if(m<0)m=0
u=new Array(m)
u.fixed$length=Array
t=H.l(u,r.$ti)
for(s=0;s<m;++s){C.a.q(t,s,o.E(p,q+s))
if(o.gk(p)<n)throw H.f(P.aN(r))}return t}}
H.cb.prototype={
gu:function(){return this.d},
t:function(){var u,t=this,s=t.a,r=J.fn(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.aN(s))
u=t.c
if(u>=q){t.sa9(null)
return!1}t.sa9(r.E(s,u));++t.c
return!0},
sa9:function(a){this.d=H.j(a,H.c(this,0))},
$iay:1}
H.aC.prototype={
gk:function(a){return J.aM(this.a)},
E:function(a,b){return this.b.$1(J.hf(this.a,b))},
$aaB:function(a,b){return[b]},
$at:function(a,b){return[b]}}
H.da.prototype={
gF:function(a){return new H.db(J.fI(this.a),this.b,C.N,this.$ti)},
$at:function(a,b){return[b]}}
H.db.prototype={
gu:function(){return this.d},
t:function(){var u,t,s=this
if(s.c==null)return!1
for(u=s.a,t=s.b;!s.c.t();){s.sa9(null)
if(u.t()){s.sbS(null)
s.sbS(J.fI(t.$1(u.gu())))}else return!1}s.sa9(s.c.gu())
return!0},
sbS:function(a){this.c=H.m(a,"$iay",[H.c(this,1)],"$aay")},
sa9:function(a){this.d=H.j(a,H.c(this,1))},
$iay:1,
$aay:function(a,b){return[b]}}
H.d9.prototype={
t:function(){return!1},
gu:function(){return},
$iay:1}
H.aQ.prototype={}
H.dL.prototype={
$0:function(){return C.b.ey(1000*this.a.now())},
$S:13}
H.ee.prototype={
G:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.dI.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.dr.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.b(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.b(t.a)+")"
return s+r+"' on '"+u+"' ("+H.b(t.a)+")"}}
H.eh.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.fF.prototype={
$1:function(a){if(!!J.u(a).$iak)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.cH.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iE:1}
H.bi.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.ar(t==null?"unknown":t)+"'"},
$ifN:1,
geV:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ec.prototype={}
H.e6.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ar(u)+"'"}}
H.bf.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bf))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gl:function(a){var u,t=this.c
if(t==null)u=H.aV(this.a)
else u=typeof t!=="object"?J.at(t):H.aV(t)
return(u^H.aV(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.ch(u))+"'")}}
H.cz.prototype={
h:function(a){return this.a}}
H.d1.prototype={
h:function(a){return this.a}}
H.dZ.prototype={
h:function(a){return"RuntimeError: "+H.b(this.a)}}
H.em.prototype={
h:function(a){return"Assertion failed: "+P.bX(this.a)}}
H.bC.prototype={
gaq:function(){var u=this.b
return u==null?this.b=H.bc(this.a):u},
h:function(a){return this.gaq()},
gl:function(a){var u=this.d
return u==null?this.d=C.e.gl(this.gaq()):u},
A:function(a,b){if(b==null)return!1
return b instanceof H.bC&&this.gaq()===b.gaq()}}
H.c9.prototype={
gk:function(a){return this.a},
cd:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.bP(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.bP(t,a)}else return s.eE(a)},
eE:function(a){var u=this.d
if(u==null)return!1
return this.aA(this.an(u,J.at(a)&0x3ffffff),a)>=0},
p:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.ab(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.ab(r,b)
s=t==null?null:t.b
return s}else return q.eF(b)},
eF:function(a){var u,t,s=this.d
if(s==null)return
u=this.an(s,J.at(a)&0x3ffffff)
t=this.aA(u,a)
if(t<0)return
return u[t].b},
q:function(a,b,c){var u,t,s,r,q,p,o=this
H.j(b,H.c(o,0))
H.j(c,H.c(o,1))
if(typeof b==="string"){u=o.b
o.bH(u==null?o.b=o.aY():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bH(t==null?o.c=o.aY():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aY()
r=J.at(b)&0x3ffffff
q=o.an(s,r)
if(q==null)o.b3(s,r,[o.aZ(b,c)])
else{p=o.aA(q,b)
if(p>=0)q[p].b=c
else q.push(o.aZ(b,c))}}},
eM:function(a,b){var u,t=this
H.j(a,H.c(t,0))
H.e(b,{func:1,ret:H.c(t,1)})
if(t.cd(a))return t.p(0,a)
u=b.$0()
t.q(0,a,u)
return u},
aH:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dW(this.c,b)
else return this.eG(b)},
eG:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=J.at(a)&0x3ffffff
t=q.an(p,u)
s=q.aA(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.c2(r)
if(t.length===0)q.aU(p,u)
return r.b},
at:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.aX()}},
N:function(a,b){var u,t,s=this
H.e(b,{func:1,ret:-1,args:[H.c(s,0),H.c(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.aN(s))
u=u.c}},
bH:function(a,b,c){var u,t=this
H.j(b,H.c(t,0))
H.j(c,H.c(t,1))
u=t.ab(a,b)
if(u==null)t.b3(a,b,t.aZ(b,c))
else u.b=c},
dW:function(a,b){var u
if(a==null)return
u=this.ab(a,b)
if(u==null)return
this.c2(u)
this.aU(a,b)
return u.b},
aX:function(){this.r=this.r+1&67108863},
aZ:function(a,b){var u,t=this,s=new H.dB(H.j(a,H.c(t,0)),H.j(b,H.c(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aX()
return s},
c2:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aX()},
aA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.cO(a[t].a,b))return t
return-1},
h:function(a){return P.hv(this)},
ab:function(a,b){return a[b]},
an:function(a,b){return a[b]},
b3:function(a,b,c){a[b]=c},
aU:function(a,b){delete a[b]},
bP:function(a,b){return this.ab(a,b)!=null},
aY:function(){var u="<non-identifier-key>",t=Object.create(null)
this.b3(t,u,t)
this.aU(t,u)
return t},
$iht:1}
H.dB.prototype={}
H.fs.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.ft.prototype={
$2:function(a,b){return this.a(a,b)},
$S:26}
H.fu.prototype={
$1:function(a){return this.a(H.Q(a))},
$S:43}
H.dq.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
cu:function(a){var u
if(typeof a!=="string")H.H(H.bR(a))
u=this.b.exec(a)
if(u==null)return
return new H.f3(u)},
$ihA:1}
H.f3.prototype={
gep:function(){var u=this.b
return u.index+u[0].length}}
H.cf.prototype={
dv:function(a,b,c,d){var u=P.aW(b,0,c,d,null)
throw H.f(u)},
bK:function(a,b,c,d){if(b>>>0!==b||b>c)this.dv(a,b,c,d)},
$ikk:1}
H.ce.prototype={
gk:function(a){return a.length},
c0:function(a,b,c,d,e){var u,t,s=a.length
this.bK(a,b,s,"start")
this.bK(a,c,s,"end")
if(b>c)throw H.f(P.aW(b,0,c,null,null))
u=c-b
t=d.length
if(t-e<u)throw H.f(P.bz("Not enough elements"))
if(e!==0||t!==u)d=d.subarray(e,e+u)
a.set(d,b)},
$ic7:1,
$ac7:function(){}}
H.bu.prototype={
p:function(a,b){H.fe(b,a,a.length)
return a[b]},
q:function(a,b,c){H.jC(c)
H.fe(b,a,a.length)
a[b]=c},
Z:function(a,b,c,d){H.m(d,"$it",[P.a3],"$at")
if(!!J.u(d).$ibu){this.c0(a,b,c,d,0)
return}this.bE(a,b,c,d,0)},
$aaQ:function(){return[P.a3]},
$aR:function(){return[P.a3]},
$it:1,
$at:function(){return[P.a3]},
$iq:1,
$aq:function(){return[P.a3]}}
H.bv.prototype={
q:function(a,b,c){H.P(c)
H.fe(b,a,a.length)
a[b]=c},
Z:function(a,b,c,d){H.m(d,"$it",[P.p],"$at")
if(!!J.u(d).$ibv){this.c0(a,b,c,d,0)
return}this.bE(a,b,c,d,0)},
$aaQ:function(){return[P.p]},
$aR:function(){return[P.p]},
$it:1,
$at:function(){return[P.p]},
$iq:1,
$aq:function(){return[P.p]}}
H.cc.prototype={$ik2:1}
H.cd.prototype={
p:function(a,b){H.fe(b,a,a.length)
return a[b]},
$ik3:1}
H.bJ.prototype={}
H.bK.prototype={}
H.bL.prototype={}
H.bM.prototype={}
P.eq.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.ep.prototype={
$1:function(a){var u,t
this.a.a=H.e(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.er.prototype={
$0:function(){this.a.$0()},
$S:0}
P.es.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cI.prototype={
d0:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aK(new P.fc(this,b),0),a)
else throw H.f(P.F("`setTimeout()` not found."))},
d1:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aK(new P.fb(this,a,Date.now(),b),0),a)
else throw H.f(P.F("Periodic timer."))},
M:function(){if(self.setTimeout!=null){var u=this.b
if(u==null)return
if(this.a)self.clearTimeout(u)
else self.clearInterval(u)
this.b=null}else throw H.f(P.F("Canceling a timer."))},
$iae:1}
P.fc.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:1}
P.fb.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ak(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.et.prototype={}
P.S.prototype={
b0:function(){},
b1:function(){},
sb_:function(a){this.dy=H.m(a,"$iS",this.$ti,"$aS")},
sc_:function(a){this.fr=H.m(a,"$iS",this.$ti,"$aS")}}
P.eu.prototype={
gdz:function(){return this.c<4},
d7:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.c(p,0)
H.e(a,{func:1,ret:-1,args:[o]})
H.e(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.i0()
o=new P.cE($.x,c,p.$ti)
o.dY()
return o}u=$.x
t=d?1:0
s=p.$ti
r=new P.S(p,u,t,s)
r.cX(a,b,c,d,o)
r.sc_(r)
r.sb_(r)
H.m(r,"$iS",s,"$aS")
r.dx=p.c&1
q=p.e
p.sdw(r)
r.sb_(null)
r.sc_(q)
if(q==null)p.sdr(r)
else q.sb_(r)
if(p.d==p.e)P.jr(p.a)
return r},
d3:function(){if((this.c&4)!==0)return new P.b1("Cannot add new events after calling close")
return new P.b1("Cannot add new events while doing an addStream")},
j:function(a,b){var u=this
H.j(b,H.c(u,0))
if(!u.gdz())throw H.f(u.d3())
u.b2(b)},
sdr:function(a){this.d=H.m(a,"$iS",this.$ti,"$aS")},
sdw:function(a){this.e=H.m(a,"$iS",this.$ti,"$aS")},
$ik9:1,
$ikn:1,
$ib4:1}
P.en.prototype={
b2:function(a){var u,t
H.j(a,H.c(this,0))
for(u=this.d,t=this.$ti;u!=null;u=u.dy)u.d6(new P.ez(a,t))}}
P.ew.prototype={$ik0:1}
P.eo.prototype={
eg:function(a,b){var u
H.cM(b,{futureOr:1,type:H.c(this,0)})
u=this.a
if(u.a!==0)throw H.f(P.bz("Future already completed"))
u.d8(b)}}
P.ah.prototype={
eI:function(a){if((this.c&15)!==6)return!0
return this.b.b.bq(H.e(this.d,{func:1,ret:P.L,args:[P.n]}),a.a,P.L,P.n)},
ez:function(a){var u=this.e,t=P.n,s={futureOr:1,type:H.c(this,1)},r=this.b.b
if(H.bb(u,{func:1,args:[P.n,P.E]}))return H.cM(r.eN(u,a.a,a.b,null,t,P.E),s)
else return H.cM(r.bq(H.e(u,{func:1,args:[P.n]}),a.a,null,t),s)}}
P.O.prototype={
gdt:function(){return this.a===8},
cM:function(a,b,c){var u,t,s,r=H.c(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.x
if(u!==C.d){H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.jp(b,u)}t=new P.O($.x,[c])
s=b==null?1:3
this.bI(new P.ah(t,s,a,b,[r,c]))
return t},
br:function(a,b){return this.cM(a,null,b)},
bI:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iah")
t.c=a}else{if(s===2){u=H.k(t.c,"$iO")
s=u.a
if(s<4){u.bI(a)
return}t.a=s
t.c=u.c}P.aI(null,null,t.b,H.e(new P.eF(t,a),{func:1,ret:-1}))}},
bZ:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iah")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iO")
u=q.a
if(u<4){q.bZ(a)
return}p.a=u
p.c=q.c}o.a=p.ap(a)
P.aI(null,null,p.b,H.e(new P.eN(o,p),{func:1,ret:-1}))}},
ao:function(){var u=H.k(this.c,"$iah")
this.c=null
return this.ap(u)},
ap:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bN:function(a){var u,t,s=this,r=H.c(s,0)
H.cM(a,{futureOr:1,type:r})
u=s.$ti
if(H.ai(a,"$ia9",u,"$aa9"))if(H.ai(a,"$iO",u,null))P.eI(a,s)
else P.hH(a,s)
else{t=s.ao()
H.j(a,r)
s.a=4
s.c=a
P.b5(s,t)}},
aa:function(a,b){var u,t=this
H.k(b,"$iE")
u=t.ao()
t.a=8
t.c=new P.N(a,b)
P.b5(t,u)},
dh:function(a){return this.aa(a,null)},
d8:function(a){var u=this
H.cM(a,{futureOr:1,type:H.c(u,0)})
if(H.ai(a,"$ia9",u.$ti,"$aa9")){u.de(a)
return}u.a=1
P.aI(null,null,u.b,H.e(new P.eH(u,a),{func:1,ret:-1}))},
de:function(a){var u=this,t=u.$ti
H.m(a,"$ia9",t,"$aa9")
if(H.ai(a,"$iO",t,null)){if(a.gdt()){u.a=1
P.aI(null,null,u.b,H.e(new P.eM(u,a),{func:1,ret:-1}))}else P.eI(a,u)
return}P.hH(a,u)},
d9:function(a,b){this.a=1
P.aI(null,null,this.b,H.e(new P.eG(this,a,b),{func:1,ret:-1}))},
$ia9:1}
P.eF.prototype={
$0:function(){P.b5(this.a,this.b)},
$S:0}
P.eN.prototype={
$0:function(){P.b5(this.b,this.a.a)},
$S:0}
P.eJ.prototype={
$1:function(a){var u=this.a
u.a=0
u.bN(a)},
$S:6}
P.eK.prototype={
$2:function(a,b){H.k(b,"$iE")
this.a.aa(a,b)},
$1:function(a){return this.$2(a,null)},
$S:23}
P.eL.prototype={
$0:function(){this.a.aa(this.b,this.c)},
$S:0}
P.eH.prototype={
$0:function(){var u=this.a,t=H.j(this.b,H.c(u,0)),s=u.ao()
u.a=4
u.c=t
P.b5(u,s)},
$S:0}
P.eM.prototype={
$0:function(){P.eI(this.b,this.a)},
$S:0}
P.eG.prototype={
$0:function(){this.a.aa(this.b,this.c)},
$S:0}
P.eQ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cG(H.e(s.d,{func:1}),null)}catch(r){u=H.as(r)
t=H.bT(r)
if(o.d){s=H.k(o.a.a.c,"$iN").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iN")
else q.b=new P.N(u,t)
q.a=!0
return}if(!!J.u(n).$ia9){if(n instanceof P.O&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iN")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.br(new P.eR(p),null)
s.a=!1}},
$S:1}
P.eR.prototype={
$1:function(a){return this.a},
$S:18}
P.eP.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.c(s,0)
q=H.j(n.c,r)
p=H.c(s,1)
n.a.b=s.b.b.bq(H.e(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.as(o)
t=H.bT(o)
s=n.a
s.b=new P.N(u,t)
s.a=!0}},
$S:1}
P.eO.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iN")
r=m.c
if(H.M(r.eI(u))&&r.e!=null){q=m.b
q.b=r.ez(u)
q.a=!1}}catch(p){t=H.as(p)
s=H.bT(p)
r=H.k(m.a.a.c,"$iN")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.N(t,s)
n.a=!0}},
$S:1}
P.cA.prototype={}
P.e8.prototype={
gk:function(a){var u={},t=new P.O($.x,[P.p])
u.a=0
this.aB(new P.e9(u,this),!0,new P.ea(u,t),t.gdg())
return t}}
P.e9.prototype={
$1:function(a){H.j(a,H.c(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.v,args:[H.c(this.b,0)]}}}
P.ea.prototype={
$0:function(){this.b.bN(this.a.a)},
$S:0}
P.ad.prototype={}
P.cB.prototype={
gl:function(a){return(H.aV(this.a)^892482866)>>>0},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cB&&b.a===this.a}}
P.ex.prototype={
b0:function(){H.m(this,"$iad",[H.c(this.x,0)],"$aad")},
b1:function(){H.m(this,"$iad",[H.c(this.x,0)],"$aad")}}
P.ev.prototype={
cX:function(a,b,c,d,e){var u,t,s=this,r=H.c(s,0)
H.e(a,{func:1,ret:-1,args:[r]})
s.sdF(H.e(a,{func:1,ret:null,args:[r]}))
u=b==null?P.jz():b
if(H.bb(u,{func:1,ret:-1,args:[P.n,P.E]}))s.d.cC(u,null,P.n,P.E)
else if(H.bb(u,{func:1,ret:-1,args:[P.n]}))H.e(u,{func:1,ret:null,args:[P.n]})
else H.H(P.be("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.e(c,{func:1,ret:-1})
t=c==null?P.i0():c
s.sdG(H.e(t,{func:1,ret:-1}))},
b0:function(){},
b1:function(){},
d6:function(a){var u=this,t=u.$ti,s=H.m(u.r,"$ibO",t,"$abO")
if(s==null){s=new P.bO(t)
u.sbY(s)}t=s.c
if(t==null)s.b=s.c=a
else s.c=t.a=a
t=u.e
if((t&64)===0){t|=64
u.e=t
if(t<128)u.r.bA(u)}},
b2:function(a){var u,t=this,s=H.c(t,0)
H.j(a,s)
u=t.e
t.e=u|32
t.d.cI(t.a,a,s)
t.e&=4294967263
t.df((u&4)!==0)},
df:function(a){var u,t,s=this,r=s.e
if((r&64)!==0&&s.r.c==null){r=s.e=r&4294967231
if((r&4)!==0)if(r<128){u=s.r
u=u==null||u.c==null}else u=!1
else u=!1
if(u){r&=4294967291
s.e=r}}for(;!0;a=t){if((r&8)!==0){s.sbY(null)
return}t=(r&4)!==0
if(a===t)break
s.e=r^32
if(t)s.b0()
else s.b1()
r=s.e&=4294967263}if((r&64)!==0&&r<128)s.r.bA(s)},
sdF:function(a){this.a=H.e(a,{func:1,ret:-1,args:[H.c(this,0)]})},
sdG:function(a){H.e(a,{func:1,ret:-1})},
sbY:function(a){this.r=H.m(a,"$ibN",this.$ti,"$abN")},
$iad:1,
$ib4:1}
P.fa.prototype={
aB:function(a,b,c,d){H.e(a,{func:1,ret:-1,args:[H.c(this,0)]})
H.e(c,{func:1,ret:-1})
return this.a.d7(H.e(a,{func:1,ret:-1,args:[H.c(this,0)]}),d,c,!0===b)},
eH:function(a){return this.aB(a,null,null,null)}}
P.eA.prototype={}
P.ez.prototype={}
P.bN.prototype={
bA:function(a){var u,t=this
H.m(a,"$ib4",t.$ti,"$ab4")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.ig(new P.f4(t,a))
t.a=1}}
P.f4.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.m(this.b,"$ib4",[H.c(r,0)],"$ab4")
t=r.b
s=t.a
r.b=s
if(s==null)r.c=null
H.m(u,"$ib4",[H.c(t,0)],"$ab4").b2(t.b)},
$S:0}
P.bO.prototype={}
P.cE.prototype={
dY:function(){var u=this
if((u.b&2)!==0)return
P.aI(null,null,u.a,H.e(u.gdZ(),{func:1,ret:-1}))
u.b|=2},
e_:function(){var u=this,t=u.b&=4294967293
if(t>=4)return
u.b=t|1
u.a.cH(u.c)},
$iad:1}
P.ae.prototype={}
P.N.prototype={
h:function(a){return H.b(this.a)},
$iak:1}
P.fd.prototype={$ikl:1}
P.fh.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cg():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u},
$S:0}
P.f5.prototype={
cH:function(a){var u,t,s,r=null
H.e(a,{func:1,ret:-1})
try{if(C.d===$.x){a.$0()
return}P.hU(r,r,this,a,-1)}catch(s){u=H.as(s)
t=H.bT(s)
P.cL(r,r,this,u,H.k(t,"$iE"))}},
cI:function(a,b,c){var u,t,s,r=null
H.e(a,{func:1,ret:-1,args:[c]})
H.j(b,c)
try{if(C.d===$.x){a.$1(b)
return}P.hV(r,r,this,a,b,-1,c)}catch(s){u=H.as(s)
t=H.bT(s)
P.cL(r,r,this,u,H.k(t,"$iE"))}},
ec:function(a,b){return new P.f7(this,H.e(a,{func:1,ret:b}),b)},
c8:function(a){return new P.f6(this,H.e(a,{func:1,ret:-1}))},
c9:function(a,b){return new P.f8(this,H.e(a,{func:1,ret:-1,args:[b]}),b)},
cG:function(a,b){H.e(a,{func:1,ret:b})
if($.x===C.d)return a.$0()
return P.hU(null,null,this,a,b)},
bq:function(a,b,c,d){H.e(a,{func:1,ret:c,args:[d]})
H.j(b,d)
if($.x===C.d)return a.$1(b)
return P.hV(null,null,this,a,b,c,d)},
eN:function(a,b,c,d,e,f){H.e(a,{func:1,ret:d,args:[e,f]})
H.j(b,e)
H.j(c,f)
if($.x===C.d)return a.$2(b,c)
return P.jq(null,null,this,a,b,c,d,e,f)},
cC:function(a,b,c,d){return H.e(a,{func:1,ret:b,args:[c,d]})}}
P.f7.prototype={
$0:function(){return this.a.cG(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.f6.prototype={
$0:function(){return this.a.cH(this.b)},
$S:1}
P.f8.prototype={
$1:function(a){var u=this.c
return this.a.cI(this.b,H.j(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.f0.prototype={
gF:function(a){var u=this,t=new P.f1(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
cc:function(a,b){var u
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null)return!1
return H.k(u[b],"$ibI")!=null}else return this.di(b)},
di:function(a){var u=this.d
if(u==null)return!1
return this.bV(u[this.bO(a)],a)>=0},
j:function(a,b){var u,t,s=this
H.j(b,H.c(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bL(u==null?s.b=P.fX():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bL(t==null?s.c=P.fX():t,b)}else return s.d2(b)},
d2:function(a){var u,t,s,r=this
H.j(a,H.c(r,0))
u=r.d
if(u==null)u=r.d=P.fX()
t=r.bO(a)
s=u[t]
if(s==null)u[t]=[r.aT(a)]
else{if(r.bV(s,a)>=0)return!1
s.push(r.aT(a))}return!0},
bL:function(a,b){H.j(b,H.c(this,0))
if(H.k(a[b],"$ibI")!=null)return!1
a[b]=this.aT(b)
return!0},
aT:function(a){var u=this,t=new P.bI(H.j(a,H.c(u,0)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.b=t;++u.a
u.r=1073741823&u.r+1
return t},
bO:function(a){return J.at(a)&1073741823},
bV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.cO(a[t].a,b))return t
return-1}}
P.bI.prototype={}
P.f1.prototype={
gu:function(){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aN(t))
else{t=u.c
if(t==null){u.sbM(null)
return!1}else{u.sbM(H.j(t.a,H.c(u,0)))
u.c=u.c.b
return!0}}},
sbM:function(a){this.d=H.j(a,H.c(this,0))},
$iay:1}
P.R.prototype={
gF:function(a){return new H.cb(a,this.gk(a),[H.bS(this,a,"R",0)])},
E:function(a,b){return this.p(a,b)},
bC:function(a,b,c,d,e){var u,t,s,r,q=this,p=H.bS(q,a,"R",0)
H.m(d,"$it",[p],"$at")
P.hB(b,c,q.gk(a))
u=c-b
if(u===0)return
P.fS(e,"skipCount")
if(H.ai(d,"$iq",[p],"$aq")){t=e
s=d}else{s=H.j7(d,e,null,H.bS(J.u(d),d,"R",0)).bt(0,!1)
t=0}if(t+u>s.length)throw H.f(H.iR())
if(t<b)for(r=u-1;r>=0;--r){p=t+r
if(p>=s.length)return H.a(s,p)
q.q(a,b+r,s[p])}else for(r=0;r<u;++r){p=t+r
if(p>=s.length)return H.a(s,p)
q.q(a,b+r,s[p])}},
Z:function(a,b,c,d){return this.bC(a,b,c,d,0)},
bB:function(a,b,c){H.m(c,"$it",[H.bS(this,a,"R",0)],"$at")
this.Z(a,b,b+c.length,c)},
h:function(a){return P.fO(a,"[","]")}}
P.dD.prototype={}
P.dE.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.b(a)
t.a=u+": "
t.a+=H.b(b)},
$S:11}
P.dF.prototype={
gk:function(a){return this.a},
h:function(a){return P.hv(this)},
$ihu:1}
P.f9.prototype={
h:function(a){return P.fO(this,"{","}")},
$it:1,
$ie0:1}
P.L.prototype={}
P.a3.prototype={}
P.bl.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.bl&&this.a===b.a},
gl:function(a){return C.c.gl(this.a)},
h:function(a){var u,t,s,r=new P.d7(),q=this.a
if(q<0)return"-"+new P.bl(0-q).h(0)
u=r.$1(C.c.ad(q,6e7)%60)
t=r.$1(C.c.ad(q,1e6)%60)
s=new P.d6().$1(q%1e6)
return""+C.c.ad(q,36e8)+":"+H.b(u)+":"+H.b(t)+"."+H.b(s)}}
P.d6.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.d7.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.ak.prototype={}
P.cU.prototype={
h:function(a){return"Assertion failed"}}
P.cg.prototype={
h:function(a){return"Throw of null."}}
P.aj.prototype={
gaW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaV:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.b(p)
t=q.gaW()+o+u
if(!q.a)return t
s=q.gaV()
r=P.bX(q.b)
return t+s+": "+r}}
P.cj.prototype={
gaW:function(){return"RangeError"},
gaV:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.b(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.b(s)
else if(t>s)u=": Not in range "+H.b(s)+".."+H.b(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.b(s)}return u}}
P.dk.prototype={
gaW:function(){return"RangeError"},
gaV:function(){var u,t=H.P(this.b)
if(typeof t!=="number")return t.bz()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.b(u)},
gk:function(a){return this.f}}
P.ei.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.eg.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.b1.prototype={
h:function(a){return"Bad state: "+H.b(this.a)}}
P.d2.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bX(u)+"."}}
P.dJ.prototype={
h:function(a){return"Out of Memory"},
$iak:1}
P.cw.prototype={
h:function(a){return"Stack Overflow"},
$iak:1}
P.d4.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eE.prototype={
h:function(a){return"Exception: "+this.a}}
P.de.prototype={
h:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.b(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.e.bD(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.p.prototype={}
P.t.prototype={
gk:function(a){var u,t=this.gF(this)
for(u=0;t.t();)++u
return u},
E:function(a,b){var u,t,s
P.fS(b,"index")
for(u=this.gF(this),t=0;u.t();){s=u.gu()
if(b===t)return s;++t}throw H.f(P.dl(b,this,"index",null,t))},
h:function(a){return P.iQ(this,"(",")")}}
P.q.prototype={$it:1}
P.v.prototype={
gl:function(a){return P.n.prototype.gl.call(this,this)},
h:function(a){return"null"}}
P.o.prototype={}
P.n.prototype={constructor:P.n,$in:1,
A:function(a,b){return this===b},
gl:function(a){return H.aV(this)},
h:function(a){return"Instance of '"+H.b(H.ch(this))+"'"},
toString:function(){return this.h(this)}}
P.E.prototype={}
P.e7.prototype={
geo:function(){var u,t,s=this.b
if(s==null)s=H.P($.dN.$0())
u=this.a
if(typeof s!=="number")return s.aQ()
t=s-u
if($.fW===1000)return t
return C.c.ad(t,1000)}}
P.w.prototype={$ihA:1}
P.bB.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.i.prototype={}
W.cR.prototype={
h:function(a){return String(a)}}
W.cS.prototype={
h:function(a){return String(a)}}
W.av.prototype={
by:function(a,b,c){var u=a.getContext(b,P.jB(c))
return u},
$iav:1,
$ihk:1}
W.bV.prototype={$ibV:1}
W.aw.prototype={
gk:function(a){return a.length}}
W.bj.prototype={
gk:function(a){return a.length}}
W.d3.prototype={}
W.d5.prototype={
h:function(a){return String(a)}}
W.bW.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
A:function(a,b){var u
if(b==null)return!1
u=J.u(b)
return!!u.$icl&&a.left===u.ga4(b)&&a.top===u.ga6(b)&&a.width===u.gW(b)&&a.height===u.gU(b)},
gl:function(a){return W.hJ(C.b.gl(a.left),C.b.gl(a.top),C.b.gl(a.width),C.b.gl(a.height))},
gU:function(a){return a.height},
ga4:function(a){return a.left},
ga6:function(a){return a.top},
gW:function(a){return a.width},
$icl:1,
$acl:function(){return[P.o]}}
W.bm.prototype={
h:function(a){return a.localName},
gcz:function(a){return new W.b3(a,"change",!1,[W.d])},
gaE:function(a){return new W.b3(a,"click",!1,[W.B])},
$ibm:1}
W.d.prototype={
gcJ:function(a){return W.fY(a.target)},
$id:1}
W.al.prototype={
d4:function(a,b,c,d){return a.addEventListener(b,H.aK(H.e(c,{func:1,args:[W.d]}),1),!1)},
dV:function(a,b,c,d){return a.removeEventListener(b,H.aK(H.e(c,{func:1,args:[W.d]}),1),!1)},
$ial:1}
W.dd.prototype={
gk:function(a){return a.length}}
W.aa.prototype={$iaa:1,$ihk:1}
W.ab.prototype={$iab:1,$ifT:1}
W.V.prototype={$iV:1}
W.bt.prototype={}
W.B.prototype={$iB:1}
W.X.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.cR(a):u}}
W.e_.prototype={
gk:function(a){return a.length}}
W.a1.prototype={$ia1:1}
W.am.prototype={$iam:1}
W.ed.prototype={
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.dl(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.k(c,"$ia1")
throw H.f(P.F("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$ic7:1,
$ac7:function(){return[W.a1]},
$aR:function(){return[W.a1]},
$it:1,
$at:function(){return[W.a1]},
$iq:1,
$aq:function(){return[W.a1]},
$aaS:function(){return[W.a1]}}
W.aF.prototype={}
W.ek.prototype={$ihk:1}
W.ag.prototype={
gek:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.F("deltaY is not supported"))},
gej:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.F("deltaX is not supported"))},
$iag:1}
W.bE.prototype={
dX:function(a,b){return a.requestAnimationFrame(H.aK(H.e(b,{func:1,ret:-1,args:[P.o]}),1))},
dn:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ihG:1}
W.cD.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
A:function(a,b){var u
if(b==null)return!1
u=J.u(b)
return!!u.$icl&&a.left===u.ga4(b)&&a.top===u.ga6(b)&&a.width===u.gW(b)&&a.height===u.gU(b)},
gl:function(a){return W.hJ(C.b.gl(a.left),C.b.gl(a.top),C.b.gl(a.width),C.b.gl(a.height))},
gU:function(a){return a.height},
gW:function(a){return a.width}}
W.eB.prototype={
aB:function(a,b,c,d){var u=H.c(this,0)
H.e(a,{func:1,ret:-1,args:[u]})
H.e(c,{func:1,ret:-1})
return W.y(this.a,this.b,a,!1,u)}}
W.b3.prototype={}
W.eC.prototype={
M:function(){var u,t,s=this,r=s.b
if(r==null)return
u=s.d
t=u!=null
if(t){H.e(u,{func:1,args:[W.d]})
if(t)J.iC(r,s.c,u,!1)}s.b=null
s.sdu(null)
return},
sdu:function(a){this.d=H.e(a,{func:1,args:[W.d]})}}
W.eD.prototype={
$1:function(a){return this.a.$1(H.k(a,"$id"))},
$S:15}
W.aS.prototype={
gF:function(a){return new W.dc(a,a.length,[H.bS(this,a,"aS",0)])},
Z:function(a,b,c,d){H.m(d,"$it",[H.bS(this,a,"aS",0)],"$at")
throw H.f(P.F("Cannot setRange on immutable List."))}}
W.dc.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.a(s,t)
u.sbR(s[t])
u.c=t
return!0}u.sbR(null)
u.c=s
return!1},
gu:function(){return this.d},
sbR:function(a){this.d=H.j(a,H.c(this,0))},
$iay:1}
W.ey.prototype={$ial:1,$ihG:1}
W.cC.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
P.fk.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.bw.prototype={$ibw:1}
P.cu.prototype={}
P.ej.prototype={
gcJ:function(a){return a.target}}
P.eZ.prototype={
eJ:function(){return Math.random()<0.5}}
P.a0.prototype={
h:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
A:function(a,b){if(b==null)return!1
return!!J.u(b).$ia0&&this.a==b.gX(b)&&this.b==b.gY(b)},
gl:function(a){var u,t=J.at(this.a),s=J.at(this.b)
s=P.hI(P.hI(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
gX:function(a){return this.a},
gY:function(a){return this.b}}
P.h.prototype={
gcz:function(a){return new W.b3(a,"change",!1,[W.d])},
gaE:function(a){return new W.b3(a,"click",!1,[W.B])}}
P.bU.prototype={$ibU:1}
P.a7.prototype={$ia7:1}
P.ci.prototype={$ici:1}
P.aE.prototype={
cL:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.u(g)
if(!!u.$iaa&&h==null&&t&&!0){this.e4(a,b,c,d,e,f,g)
return}if(!!u.$iav&&h==null&&t&&!0){this.e5(a,b,c,d,e,f,g)
return}throw H.f(P.be("Incorrect number or type of arguments"))},
cK:function(a,b,c,d,e,f,g){return this.cL(a,b,c,d,e,f,g,null,null,null)},
e4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
e5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
$iaE:1}
P.cy.prototype={$icy:1}
P.bD.prototype={$ibD:1}
K.el.prototype={}
K.ds.prototype={
as:function(a){var u,t,s,r=this,q=r.c+=a
r.d.j(0,q)
u=r.a
t=r.b
for(;u!==t;){s=u.b
u.a=s.geZ()
u.b=s.gf_()}return!0},
$ijZ:1}
A.a5.prototype={}
A.cY.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iaa")
u=new L.cr(C.a5)
t=u.a=V.fm(a.width)
s=u.b=V.fm(a.height)
u.c=a
r=[P.p]
r=L.fV(u,new U.K(0,0,t,s,r),new U.K(0,0,t,s,r),0,1)
return new A.a5(L.fV(r.a,r.b,r.c,r.d,this.a))},
$S:14}
A.cV.prototype={
cU:function(a,b){var u,t,s,r,q,p,o,n,m,l=this
l.b=l.a=a
l.c=1
u=P.fU("@(\\d+(.\\d+)?)x").cu(l.a)
if(u!=null){t=u.b
if(2>=t.length)return H.a(t,2)
s=t[2]
if(s==null)s="."
r=P.jD(t[1])
q=C.a.cv(b,0,new A.cW($.hd()),P.o)
p=J.iE(q,s.length-1)
t=t.index+1
s=u.gep()
o=P.hB(t,s-1,a.length)
n=a.substring(0,t)
m=a.substring(o)
l.b=n+p+m
if(typeof r!=="number")return H.a_(r)
l.c=q/r}}}
A.cW.prototype={
$2:function(a,b){var u
H.fE(a)
H.fE(b)
u=this.a
if(typeof a!=="number")return a.aQ()
if(typeof u!=="number")return H.a_(u)
if(typeof b!=="number")return b.aQ()
if(Math.abs(a-u)<Math.abs(b-u)&&a>0)u=a
else u=b
return u},
$S:22}
A.cX.prototype={}
A.au.prototype={}
A.W.prototype={
sb7:function(a,b){if(b<=0)b=0
this.ch=b>=1?1:b},
gV:function(){var u,t
for(u=this;t=u.fy,t!=null;u=t);return u},
gbv:function(){var u=this
if(u.id){u.id=!1
u.go.aj(1,0,0,1,u.c-0,u.d-0)}return u.go},
D:function(a,b){var u,t=[P.o]
H.m(a,"$iA",t,"$aA")
H.m(b,"$iA",t,"$aA")
u=!!b.$iA?b:new U.A(0,0,t)
u.sX(0,a.a)
u.sY(0,a.b)
this.bW(u)
return u},
bW:function(a){var u,t,s,r,q,p=[P.o]
H.m(a,"$iA",p,"$aA")
u=this.fy
if(u!=null)u.bW(a)
t=!!a.$iA?a:new U.A(0,0,p)
s=a.a
r=a.b
q=this.gbv()
p=q.a
t.sX(0,(p[3]*(s-p[4])-p[2]*(r-p[5]))/q.gcf())
t.sY(0,(p[0]*(r-p[5])-p[1]*(s-p[4]))/q.gcf())},
m:function(a,b){var u,t,s,r,q=this,p=H.l([],[R.bY])
for(u=q.fy;u!=null;u=u.fy)C.a.j(p,u)
t=p.length-1
while(!0){if(!(t>=0&&b.gca()))break
if(t<0||t>=p.length)return H.a(p,t)
p[t].bb(b,q,C.v);--t}q.bb(b,q,C.X)
s=b.b
t=0
while(!0){r=p.length
if(!(t<r&&s))break
if(t>=r)return H.a(p,t)
p[t].bb(b,q,C.Y);++t}},
sbX:function(a){this.fy=H.m(a,"$ifL",[A.W],"$afL")},
$ik7:1}
A.bk.prototype={
b6:function(a){var u,t,s=this
if(a===s)throw H.f(P.be("An object cannot be added as a child of itself."))
else{u=a.fy
if(u===s)s.d5(a)
else{if(u!=null)u.cD(a)
s.e6(a)
C.a.j(s.K,a)
a.sbX(s)
a.m(0,new R.I("added",!0))
t=s.gV()
if((t instanceof A.D?t:null)!=null)s.bT(a,"addedToStage")}}},
cD:function(a){var u,t,s,r=this
if(a.fy!==r)throw H.f(P.be("The supplied DisplayObject must be a child of the caller."))
else{u=r.K
t=C.a.eC(u,a)
a.m(0,new R.I("removed",!0))
s=r.gV()
if((s instanceof A.D?s:null)!=null)r.bT(a,"removedFromStage")
a.sbX(null)
C.a.bo(u,t)}},
a3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
for(u=this.K,t=u.length-1,s=null;t>=0;--t){if(t>=u.length)return H.a(u,t)
r=u[t]
q=r.gbv()
if(r.cx&&!0){p=q.a
o=a-p[4]
n=b-p[5]
m=p[3]
l=p[2]
k=p[0]
p=p[1]
j=k*m-p*l
i=r.a3((m*o-l*n)/j,(k*n-p*o)/j)
if(i==null)continue
return i}}return s},
aI:function(a){var u,t,s
for(u=this.K,t=0;t<u.length;++t){s=u[t]
if(s.cx&&!0)a.bp(s)}},
e6:function(a){var u
for(u=this;u!=null;u=u.fy)if(u===a)throw H.f(P.be("An object cannot be added as a child to one of it's children (or children's children, etc.)."))},
d5:function(a){var u,t,s,r=this.K
for(u=r.length-1,t=a;u>=0;--u,t=s){if(u>=r.length)return H.a(r,u)
s=r[u]
C.a.q(r,u,t)
if(a===s)break}},
bT:function(a,b){var u=!1,t=this
while(!0){if(!(t!=null&&!u))break
if(t.bn(b,!0))u=!0
t=t.fy}this.bU(a,new R.I(b,!1),u)},
bU:function(a,b,c){var u,t,s=!c
if(!s||a.eA(b.a))a.m(0,b)
if(!!a.$ibk){c=!s||a.bn(b.a,!0)
u=a.K
for(t=0;t<u.length;++t)this.bU(u[t],b,c)}},
$ifL:1,
$afL:function(){return[A.W]}}
A.dn.prototype={}
A.dR.prototype={
as:function(a){var u,t=this
t.f+=a
R.fZ(t.d,$.hM,R.aO)
t.b.as(a)
u=t.c
C.a.N(u,new A.dS(a))
C.a.N(u,new A.dT(t,a))
R.fZ(t.e,$.hN,R.aP)}}
A.dS.prototype={
$1:function(a){H.k(a,"$iD").es.as(this.a)
return!0},
$S:16}
A.dT.prototype={
$1:function(a){var u,t,s,r,q,p
H.k(a,"$iD")
u=this.a.f
t=a.au
if(t!==C.n)t=t===C.K
else t=!0
if(t){s=new P.e7()
if($.fW==null){H.j1()
$.fW=$.dM}t=H.P($.dN.$0())
if(typeof t!=="number")return t.aQ()
s.a=t-0
s.b=null
a.c3()
R.fZ(a.eq,$.hT,R.b_)
a.a2.aL(0)
t=a.a2
r=t.a
r.c=r.b=r.a=0
t.b9(0,a.be)
a.R.cF(0,a.ct)
V.i2(u)
V.i2(this.b)
a.R.bp(a)
a.R.c.C(0)
u=a.ev=!1
q=a.a2.a
p=s.geo()
a.bj=a.bj*0.75+q.a*0.25
a.bk=a.bk*0.75+q.b*0.25
a.bl=a.bl*0.75+q.c*0.25
a.bi=a.bi*0.95+p*0.05
t=a.S
if(t.cx){t.toString
u=!0}if(u){C.a.sk(t.r2,0)
t.ry=t.rx=0
a.S.aG(0,"FRAMETIME"+C.e.aF(C.c.h(C.b.w(a.bi)),6))
a.S.aG(0,"DRAWCALLS"+C.e.aF(C.c.h(C.b.w(a.bj)),6))
a.S.aG(0,"VERTICES"+C.e.aF(C.c.h(C.b.w(a.bk)),7))
a.S.aG(0,"INDICES"+C.e.aF(C.c.h(C.b.w(a.bl)),8))
a.R.cF(0,a.cg)
a.R.bp(a.S)
a.R.c.C(0)}}if(a.au===C.K)a.au=C.a6
return},
$S:17}
A.cv.prototype={
a3:function(a,b){var u=this.n,t=this.aR(a,b)
if(t==null&&u!=null)t=u.O(a,b)?this:null
return t},
aI:function(a){var u,t,s,r=this.n
if(r!=null){u=a.c
if(u instanceof L.cm){t=r.am(!1)
s=u.e
u.aP(0,a.e.c)
s.globalAlpha=u.x=a.e.a
s.beginPath()
r.ar(new U.eT(u,s),t)}else{t=r.am(!0)
r.ar(new U.eW(a,new U.ao(H.l([],[U.Z]))),t)}}this.cQ(a)}}
A.by.prototype={
h:function(a){return this.b}}
A.b0.prototype={
h:function(a){return this.b}}
A.Y.prototype={
h:function(a){return this.b}}
A.D.prototype={
cW:function(a,b,c,d){var u,t,s,r=this,q=a.tabIndex
if(typeof q!=="number")return q.eX()
if(q<=0)a.tabIndex=1
q=a.style
if(q.outline==="")q.outline="none"
c=$.io()
d=a.width
b=a.height
c.toString
r.be=4294967295
r.I=r.eu=!0
r.J=r.a0=!1
r.n=a
r.cj=C.i
r.ci=C.o
r.au=C.n
r.bc=C.k
r.cr=V.fm(d)
r.cs=V.fm(b)
r.ay=V.jQ(5,$.hd())
q=r.dk(a,c)
r.a2=q
r.R=L.j4(q)
q=H.l([],[L.ct])
u=T.J()
t=H.l([],[P.w])
s=$.a8
$.a8=s+1
s=new A.cx(q,u,t,s,H.l([],[A.au]),T.J())
A.iH("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC").br(s.gda(),-1)
s.cx=!1
r.S=s
H.jS("StageXL render engine : "+r.a2.gcE().h(0))
q=W.V
u=H.e(r.gdN(),{func:1,ret:-1,args:[q]})
W.y(a,"keydown",u,!1,q)
W.y(a,"keyup",u,!1,q)
W.y(a,"keypress",u,!1,q)
q=r.bc
if(q===C.k||q===C.w){q=W.B
u=H.e(r.gdP(),{func:1,ret:-1,args:[q]})
W.y(a,"mousedown",u,!1,q)
W.y(a,"mouseup",u,!1,q)
W.y(a,"mousemove",u,!1,q)
W.y(a,"mouseout",u,!1,q)
W.y(a,"contextmenu",u,!1,q)
W.hn(a)
q=W.ag
W.y(a,H.Q(W.hn(a)),H.e(r.gdR(),{func:1,ret:-1,args:[q]}),!1,q)}q=r.bc
if((q===C.Z||q===C.w)&&H.M($.iz())){q=W.am
u=H.e(r.gdT(),{func:1,ret:-1,args:[q]})
W.y(a,"touchstart",u,!1,q)
W.y(a,"touchend",u,!1,q)
W.y(a,"touchmove",u,!1,q)
W.y(a,"touchenter",u,!1,q)
W.y(a,"touchleave",u,!1,q)
W.y(a,"touchcancel",u,!1,q)}$.im().eH(new A.e5(r))
r.b5()
r.c3()
r.a2.b9(0,r.be)},
a3:function(a,b){var u=this.aR(a,b)
return u==null?this:u},
dk:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
try{u=new T.aU(new Float32Array(16))
u.a7()
t=H.l([],[L.f2])
s=P.w
r=P.p
q=P.bD
p=new Int16Array(0)
p=new L.dU(P.ac(s,r),P.ac(s,q),new L.aX(p),new L.aY(new Float32Array(0)),new L.aD())
o=new Int16Array(0)
n=new Float32Array(0)
m=new Int16Array(0)
l=new Float32Array(0)
k=new Int16Array(16384)
j=new Float32Array(32768)
i=new Array(8)
i.fixed$length=Array
h=L.aZ
h=new L.cn(a,u,t,p,new L.dV(P.ac(s,r),P.ac(s,q),new L.aX(o),new L.aY(n),new L.aD()),new L.dW(P.ac(s,r),P.ac(s,q),new L.aX(m),new L.aY(l),new L.aD()),new L.aX(k),new L.aY(j),H.l(i,[L.cr]),H.l([],[L.cp]),P.ac(s,L.bx),new L.aD(),P.bA(h),P.bA(h))
i=P.a7
j={func:1,ret:-1,args:[i]}
W.y(a,"webglcontextlost",H.e(h.gdB(),j),!1,i)
W.y(a,"webglcontextrestored",H.e(h.gdD(),j),!1,i)
b=P.iX(["alpha",!1,"depth",!1,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],s,null)
g=C.t.by(a,"webgl",b)
g=H.k(g==null?C.t.by(a,"experimental-webgl",b):g,"$iaE")
if(!J.u(g).$iaE)H.H(P.bz("Failed to get WebGL context."))
h.e=g
g.enable(3042)
h.e.disable(2960)
h.e.disable(2929)
h.e.disable(2884)
h.e.pixelStorei(37441,1)
h.e.blendFunc(1,771)
h.x=p
p.ae(h)
h.cx=$.dP=$.dP+1
h.aL(0)
return h}catch(f){H.as(f)
u=T.J()
t=L.aZ
t=new L.cm(a,a.getContext("2d"),u,C.f,new L.aD(),P.bA(t),P.bA(t))
t.aL(0)
return t}},
c3:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.cr,h=j.cs,g=j.n.getBoundingClientRect(),f=j.n,e=f.clientLeft,d=C.b.w(g.left)
if(typeof e!=="number")return e.H()
u=f.clientTop
t=C.b.w(g.top)
if(typeof u!=="number")return u.H()
s=f.clientWidth
r=f.clientHeight
if(s===0||r===0)return
if(typeof s!=="number")return s.bx()
q=s/i
if(typeof r!=="number")return r.bx()
p=r/h
switch(j.ci){case C.a7:o=p
n=q
break
case C.a8:o=q>p?q:p
n=o
break
case C.a9:n=1
o=1
break
case C.o:o=q<p?q:p
n=o
break
default:n=1
o=1}f=j.cj
switch(f){case C.F:case C.H:case C.C:m=0
break
case C.D:case C.i:case C.I:m=(s-i*n)/2
break
case C.E:case C.G:case C.J:m=s-i*n
break
default:m=0}switch(f){case C.C:case C.D:case C.E:l=0
break
case C.F:case C.i:case C.G:l=(r-h*o)/2
break
case C.H:case C.I:case C.J:l=r-h*o
break
default:l=0}f=j.ew
f.sa4(0,-m/n)
f.sa6(0,-l/o)
f.sW(0,s/n)
f.sU(0,r/o)
f=j.ct
f.aj(n,0,0,o,m,l)
k=j.ay
f.aN(0,k,k)
k=j.az
k.aj(1,0,0,1,-(e+d)-m,-(u+t)-l)
k.aN(0,1/n,1/o)
k=j.cg
k.cw()
t=j.ay
k.aN(0,t,t)
if(j.ax!==s||j.bh!==r){j.ax=s
j.bh=r
f=j.n
e=j.ay
if(typeof e!=="number")return H.a_(e)
f.width=C.b.w(s*e)
f.height=C.b.w(r*e)
if(f.clientWidth!==s||f.clientHeight!==r){f=f.style
e=""+s+"px"
f.width=e
f=j.n.style
e=""+r+"px"
f.height=e}j.m(0,new R.I("resize",!1))}},
b5:function(){var u,t,s,r,q,p,o,n=this,m="default",l=n.bd
if(l!=null&&!0)l.toString
if(n.ck!=="default"){n.ck=m
u=n.n.style
if($.hw.cd(m)){t=$.hw.p(0,m)
s=C.x.gf0(t)
r=t.geB()
q=r.gX(r)
r=t.geB()
p=r.gY(r)
o="url('"+H.b(s)+"') "+H.b(q)+" "+H.b(p)+", default"}else o=m
u.cursor=o}},
dQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
H.k(a,"$iB")
a.preventDefault()
u=Date.now()
t=a.button
s=P.o
r=b.az.bu(new P.a0(a.clientX,a.clientY,[s]))
q=new U.A(0,0,[s])
if(typeof t!=="number")return t.bz()
if(t<0||t>2)return
if(a.type==="mousemove"&&b.cl.A(0,r))return
s=b.er
if(t<0||t>=3)return H.a(s,t)
p=s[t]
b.sdA(r)
C.a.N(b.cm,new A.e2(r))
if(a.type!=="mouseout")o=b.a3(r.a,r.b)
else{b.m(0,new R.I("mouseLeave",!1))
o=null}n=b.bd
if(n!=o){s=[A.W]
m=H.l([],s)
l=H.l([],s)
for(k=n;k!=null;k=k.fy)C.a.j(m,k)
for(k=o;k!=null;k=k.fy)C.a.j(l,k)
for(s=m.length,j=l.length,i=0;!0;++i){if(i===s)break
if(i===j)break
h=s-i-1
if(h<0)return H.a(m,h)
g=m[h]
h=j-i-1
if(h<0)return H.a(l,h)
if(g!==l[h])break}if(n!=null){n.D(r,q)
s=r.a
j=r.b
n.m(0,new R.G(p.f,s,j,"mouseOut",!0))}for(f=0;f<m.length-i;++f){e=m[f]
e.D(r,q)
s=r.a
j=r.b
e.m(0,new R.G(p.f,s,j,"rollOut",!1))}for(f=l.length-i-1;f>=0;--f){if(f>=l.length)return H.a(l,f)
e=l[f]
e.D(r,q)
s=r.a
j=r.b
e.m(0,new R.G(p.f,s,j,"rollOver",!1))}if(o!=null){o.D(r,q)
s=r.a
j=r.b
o.m(0,new R.G(p.f,s,j,"mouseOver",!0))}b.bd=o}b.b5()
if(a.type==="mousedown"){b.n.focus()
d=p.a
if(o!=p.e||u>p.r+500)p.x=0
p.f=!0
p.e=o
p.r=u;++p.x}else d=null
if(a.type==="mouseup"){d=p.b
p.f=!1
c=p.e==o
c}else c=!1
u=a.type
if(u==="mousemove")d="mouseMove"
if(u==="contextmenu")d="contextMenu"
if(d!=null&&o!=null){o.D(r,q)
u=r.a
s=r.b
o.m(0,new R.G(p.f,u,s,d,!0))
if(c){u=r.a
s=r.b
o.m(0,new R.G(p.f,u,s,p.c,!0))}}},
dS:function(a){var u,t,s,r
H.k(a,"$iag")
u=P.o
t=this.az.bu(new P.a0(a.clientX,a.clientY,[u]))
s=this.a3(t.a,t.b)
s.D(t,new U.A(0,0,[u]))
u=t.a
r=t.b;(a&&C.L).gej(a)
C.L.gek(a)
s.m(0,new R.G(!1,u,r,"mouseWheel",!0))},
dU:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
H.k(b4,"$iam")
b4.preventDefault()
u=b4.type
for(t=b4.changedTouches,s=t.length,r=u==="touchmove",q=u==="touchcancel",p=u==="touchend",o=u==="touchstart",n=b3.cn,m=b3.cm,l=P.o,k=[l],j=b3.az,l=[l],i=[A.W],h=0;h<t.length;t.length===s||(0,H.a4)(t),++h){g=t[h]
f=g.identifier
e=j.bu(new P.a0(C.b.w(g.clientX),C.b.w(g.clientY),k))
d=new U.A(0,0,l)
c=b3.aR(e.a,e.b)
if(c==null)c=b3
b=n.eM(f,new A.e3(b3,c))
a=b.a
b.b
C.a.N(m,new A.e4(a,e))
a0=b.d
if(a0!==c){a1=H.l([],i)
a2=H.l([],i)
for(a3=a0;a3!=null;a3=a3.fy)C.a.j(a1,a3)
for(a3=c;a3!=null;a3=a3.fy)C.a.j(a2,a3)
for(a4=a1.length,a5=a2.length,a6=0;!0;++a6){if(a6===a4)break
if(a6===a5)break
a7=a4-a6-1
if(a7<0)return H.a(a1,a7)
a8=a1[a7]
a7=a5-a6-1
if(a7<0)return H.a(a2,a7)
if(a8!==a2[a7])break}if(a0!=null){a0.D(e,d)
a0.m(0,new R.an(e.a,e.b,"touchOut",!0))}for(a9=0;a9<a1.length-a6;++a9){b0=a1[a9]
b0.D(e,d)
b0.m(0,new R.an(e.a,e.b,"touchRollOut",!1))}for(a9=a2.length-a6-1;a9>=0;--a9){if(a9>=a2.length)return H.a(a2,a9)
b0=a2[a9]
b0.D(e,d)
b0.m(0,new R.an(e.a,e.b,"touchRollOver",!1))}c.D(e,d)
c.m(0,new R.an(e.a,e.b,"touchOver",!0))
b.d=c}if(o){b3.n.focus()
n.q(0,f,b)
b1="touchBegin"}else b1=null
if(p){n.aH(0,f)
b2=b.c===c
b1="touchEnd"}else b2=!1
if(q){n.aH(0,f)
b1="touchCancel"}if(r)b1="touchMove"
if(b1!=null&&!0){c.D(e,d)
c.m(0,new R.an(e.a,e.b,b1,!0))
if(b2)c.m(0,new R.an(e.a,e.b,"touchTap",!0))}}},
dO:function(a){H.k(a,"$iV")
return},
sdA:function(a){this.cl=H.m(a,"$iA",[P.o],"$aA")}}
A.e5.prototype={
$1:function(a){H.Q(a)
return this.a.b5()},
$S:44}
A.e2.prototype={
$1:function(a){return H.k(a,"$iaG").eT(0,this.a)},
$S:10}
A.e3.prototype={
$0:function(){var u=this.b,t=this.a.cn.a,s=$.hK
$.hK=s+1
return new A.b7(s,t===0,u,u)},
$S:24}
A.e4.prototype={
$1:function(a){return H.k(a,"$iaG").eT(this.a,this.b)},
$S:10}
A.cx.prototype={
aG:function(a,b){var u,t,s=this
C.a.j(s.r2,b)
u=b.length
t=s.rx
s.rx=u>t?u:t;++s.ry},
aI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.m(0,new R.I("Update",!1))
for(u=i.k4,t=a.c,s=i.r1,r=i.r2,q=0;q<i.ry;++q)for(p=q*14,o=0;o<i.rx;++o){if(q>=r.length)return H.a(r,q)
n=r[q]
m=o<n.length?C.e.al(n,o)-32:0
if(m<0||m>=64)m=0
s.aj(1,0,0,1,o*7,p)
l=a.e
k=l.f
if(k==null){n=T.J()
j=new T.aU(new Float32Array(16))
j.a7()
k=l.f=new L.bF(C.f,n,j,l)}k.c.ce(s,l.c)
k.b=C.f
k.a=l.a
a.e=k
if(m<0||m>=u.length)return H.a(u,m)
t.aJ(a,u[m])
a.e=a.e.e}},
dc:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=H.k(b3,"$ia5").c,b2=b1.a
b2.sex(C.a4)
for(u=[P.p],t=this.k4,s=[P.o],r=b1.e,q=0*r,p=b1.d,o=b1.b,n=H.c(o,0),b1=b1.c,m=0;m<64;++m){l=m*7
k=H.m(new U.K(l,0,7,14,u),"$iK",s,"$aK")
j=C.b.w(l*r)
i=C.b.w(q)
k=H.c(k,0)
l=C.b.w(H.j(l+7,k)*r)-j
k=C.b.w(H.j(14,k)*r)-i
h=o.a
g=o.b
f=H.j(h+o.c,n)
e=H.j(g+o.d,n)
d=b1.a
c=b1.b
b=C.c.P(p,4)
a=j+l
a0=i+k
if(p===0){a1=h+d
a2=a1+j
a3=g+c
a4=a3+i
a5=a1+a
a6=a3+a0}else if(p===1){a1=f-c
a2=a1-a0
a3=g+d
a4=a3+j
a5=a1-i
a6=a3+a}else if(p===2){a1=f-d
a2=a1-a
a3=e-c
a4=a3-a0
a5=a1-j
a6=a3-i}else if(p===3){a1=h+c
a2=a1+i
a3=e-d
a4=a3-a
a5=a1+a0
a6=a3-j}else{a2=0
a4=0
a5=0
a6=0}a7=V.fi(a2,h,f)
a8=V.fi(a4,g,e)
a=V.fi(a5,h,f)
a0=V.fi(a6,g,e)
if(b===0){a9=a2-a7
b0=a4-a8}else if(b===1){a9=a4-a8
b0=a-a5}else if(b===2){a9=a-a5
b0=a6-a0}else if(b===3){a9=a0-a6
b0=a7-a2}else{a9=0
b0=0}C.a.j(t,L.fV(b2,new U.K(a7,a8,a-a7,a0-a8,u),new U.K(a9,b0,l,k,u),b,r))}}}
A.e1.prototype={}
A.b6.prototype={}
A.b7.prototype={}
A.aG.prototype={}
U.bZ.prototype={
L:function(a){a.c7(0)}}
U.c_.prototype={
L:function(a){a.ba(0)}}
U.df.prototype={}
U.dg.prototype={
L:function(a){a.ah(this.c)}}
U.c0.prototype={
L:function(a){a.ai(0,this.b,this.c)}}
U.c1.prototype={
L:function(a){a.a5(0,this.b,this.c)}}
U.dh.prototype={
L:function(a){var u,t=this,s=t.b,r=t.c
a.a5(0,s,r)
u=s+t.d
a.ai(0,u,r)
r+=t.e
a.ai(0,u,r)
a.ai(0,s,r)
a.ba(0)}}
U.di.prototype={}
U.c2.prototype={
L:function(a){var u=this
a.a8(u.f,u.b,u.c,u.d)}}
U.bo.prototype={
gb8:function(){var u,t,s,r=this,q=17976931348623157e292,p=-17976931348623157e292
if(r.c==null){u=r.am(!0)
t=new U.eS(q,q,p,p,new U.ao(H.l([],[U.Z])))
r.ar(t,u)
r.sB(t.gb8())}s=r.c
return new U.K(s.a,s.b,s.c,s.d,[H.c(s,0)])},
O:function(a,b){var u,t
if(this.gb8().eh(0,a,b)){u=this.am(!0)
t=new U.eV(a,b,new U.ao(H.l([],[U.Z])))
this.ar(t,u)
return t.b}else return!1},
am:function(a){var u,t,s,r,q=this
if(a&&q.b.length===0){u=new U.eU(q.b,new U.ao(H.l([],[U.Z])))
for(t=q.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.a4)(t),++r)t[r].L(u)}return a?q.b:q.a},
ar:function(a,b){var u
H.m(b,"$iq",[U.aR],"$aq")
for(u=0;u<b.length;++u)b[u].L(a)},
sB:function(a){this.c=H.m(a,"$iK",[P.o],"$aK")}}
U.aR.prototype={}
U.dj.prototype={}
U.bs.prototype={
h:function(a){return this.b}}
U.bh.prototype={
h:function(a){return this.b}}
U.cF.prototype={
L:function(a){if(!!a.$icG)a.aC(this)}}
U.cG.prototype={
c7:function(a){this.a=new U.ao(H.l([],[U.Z]))},
ba:function(a){var u=this.a,t=u.b
if(t!=null){t.Q=!0
u.b=null}},
a5:function(a,b,c){this.a.a5(0,b,c)},
ai:function(a,b,c){var u=this.a,t=u.b
if(t==null)u.a5(0,b,c)
else t.i(b,c)}}
U.eS.prototype={
gb8:function(){var u=this,t=u.b,s=u.d,r=t<s&&u.c<u.e,q=[P.o]
if(r){r=u.c
return new U.K(t,r,s-t,u.e-r,q)}else return new U.K(0,0,0,0,q)},
ah:function(a){this.b4(this.a)},
a8:function(a,b,c,d){this.b4(U.eY(this.a,b,c,d))},
aC:function(a){this.b4(a.b)},
b4:function(a){var u,t,s,r,q,p,o=this
for(u=H.m(a,"$iaH",[U.bG],"$aaH").a,t=u.length,s=0;s<t;++s){r=u[s]
q=o.b
p=r.e
o.b=q>p?p:q
q=o.c
p=r.f
o.c=q>p?p:q
q=o.d
p=r.r
o.d=q<p?p:q
q=o.e
p=r.x
o.e=q<p?p:q}}}
U.eT.prototype={
c7:function(a){this.c.beginPath()},
ba:function(a){this.c.closePath()},
a5:function(a,b,c){this.c.moveTo(b,c)},
ai:function(a,b,c){this.c.lineTo(b,c)},
ah:function(a){var u=this.c
u.fillStyle=V.fj(a)
u.fill()},
a8:function(a,b,c,d){var u,t,s=this.c
s.strokeStyle=V.fj(a)
s.lineWidth=b
u=c===C.h?"miter":"round"
s.lineJoin=c===C.m?"bevel":u
t=d===C.j?"butt":"round"
s.lineCap=d===C.u?"square":t
s.stroke()}}
U.eU.prototype={
ah:function(a){C.a.j(this.b,new U.cF(U.jg(this.a),a))},
a8:function(a,b,c,d){C.a.j(this.b,new U.cF(U.eY(this.a,b,c,d),a))},
aC:function(a){C.a.j(this.b,a)}}
U.eV.prototype={
ah:function(a){var u=this,t=u.a
u.b=u.b||t.O(u.c,u.d)},
a8:function(a,b,c,d){var u=this,t=U.eY(u.a,b,c,d)
u.b=u.b||t.O(u.c,u.d)},
aC:function(a){var u=this
u.b=u.b||a.b.O(u.c,u.d)}}
U.eW.prototype={
ah:function(a){this.a.T(this.b,a)},
a8:function(a,b,c,d){U.eY(this.a,b,c,d).T(this.b,a)},
aC:function(a){a.b.T(this.b,a.c)}}
U.aH.prototype={}
U.bG.prototype={
cY:function(a){var u=this,t=a.c
u.c=t
u.d=a.d
u.e=a.e
u.f=a.f
u.r=a.r
u.x=a.x
C.y.Z(u.a,0,t*2,a.a)
C.z.Z(u.b,0,u.d,a.b)},
i:function(a,b){var u,t,s,r=this,q=r.c*2,p=r.a,o=p.length
if(q+2>o){u=o<16?16:o
if(u>256)u=256
t=new Float32Array(o+u)
r.a=t
C.y.bB(t,0,p)}p=r.e
r.e=p>a?a:p
p=r.f
r.f=p>b?b:p
p=r.r
r.r=p<a?a:p
p=r.x
r.x=p<b?b:p
p=r.a
t=p.length
if(q>=t)return H.a(p,q)
p[q]=a
s=q+1
if(s>=t)return H.a(p,s)
p[s]=b
return r.c++},
v:function(a,b,c){var u,t,s,r=this,q=r.d,p=r.b,o=p.length
if(q+3>o){u=o<32?32:o
if(u>256)u=256
t=new Int16Array(o+u)
r.b=t
C.z.bB(t,0,p)}p=r.b
t=p.length
if(q>=t)return H.a(p,q)
p[q]=a
s=q+1
if(s>=t)return H.a(p,s)
p[s]=b
s=q+2
if(s>=t)return H.a(p,s)
p[s]=c
r.d+=3},
T:function(a,b){var u,t=this,s=t.b.buffer,r=t.d
s.toString
u=H.hy(s,0,r)
r=t.a.buffer
s=t.c
r.toString
a.c.aK(a,u,H.hx(r,0,s*2),b)}}
U.ao.prototype={
cZ:function(a){var u,t,s,r,q,p,o,n,m=17976931348623157e292,l=-17976931348623157e292
for(u=a.a,t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.a4)(u),++r){q=u[r]
if(q.d===0)q.aS()
p=T.J()
o=q.c
o=new Float32Array(o*2)
n=q.d
p=new U.Z(o,new Int16Array(n),m,m,l,l,p)
p.cY(q)
o=q.z
p.z=typeof o!=="boolean"?q.z=q.bJ()>=0:o
p.Q=q.Q
C.a.j(s,p)}},
a5:function(a,b,c){var u=17976931348623157e292,t=-17976931348623157e292,s=T.J(),r=new Float32Array(16)
s=new U.Z(r,new Int16Array(32),u,u,t,t,s)
this.b=s
s.i(b,c)
C.a.j(this.a,this.b)},
T:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.a4)(u),++s){r=u[s]
if(r.d===0)r.aS()
r.T(a,b)}},
O:function(a,b){var u,t,s,r,q
for(u=this.a,t=u.length,s=0,r=0;r<u.length;u.length===t||(0,H.a4)(u),++r){q=u[r]
if(!(a>=q.e&&a<=q.r&&b>=q.f&&b<=q.x))continue
if(q.d===0)q.aS()
s+=q.eU(a,b)}return s!==0},
$aaH:function(){return[U.Z]}}
U.Z.prototype={
gef:function(){var u=this.z
return typeof u!=="boolean"?this.z=this.bJ()>=0:u},
i:function(a,b){var u,t,s=this,r=s.a,q=s.c,p=q*2
if(p!==0){u=p-2
t=r.length
if(u<0||u>=t)return H.a(r,u)
if(V.ih(r[u],a)){u=p-1
if(u<0||u>=t)return H.a(r,u)
u=!V.ih(r[u],b)}else u=!0}else u=!0
if(u){s.d=0
s.z=null
return s.cT(a,b)}else return q-1},
eU:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this
if(k.e>a||k.r<a)return 0
if(k.f>b||k.x<b)return 0
u=k.c
if(u<3)return 0
t=k.a
s=(u-1)*2
r=t.length
if(s<0||s>=r)return H.a(t,s)
q=t[s];++s
if(s>=r)return H.a(t,s)
p=t[s]
for(o=0,n=0;n<u;++n,p=l,q=m){s=n*2
if(s>=r)return H.a(t,s)
m=t[s];++s
if(s>=r)return H.a(t,s)
l=t[s]
if(p<=b){if(l>b&&(m-q)*(b-p)-(a-q)*(l-p)>0)++o}else if(l<=b&&(m-q)*(b-p)-(a-q)*(l-p)<0)--o}return o},
aS:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
b4.d=0
u=b4.a
t=b4.c
if(t<3)return
s=H.l([],[P.p])
r=b4.gef()
for(q=0;q<t;++q)C.a.j(s,q)
for(p=u.length,o=0;n=s.length,n>3;){m=s[C.c.P(o,n)]
l=o+1
k=s[l%n]
j=s[(o+2)%n]
i=m*2
if(i>=p)return H.a(u,i)
h=u[i];++i
if(i>=p)return H.a(u,i)
g=u[i]
i=k*2
if(i>=p)return H.a(u,i)
f=u[i];++i
if(i>=p)return H.a(u,i)
e=u[i]
i=j*2
if(i>=p)return H.a(u,i)
d=u[i];++i
if(i>=p)return H.a(u,i)
c=d-h
b=u[i]-g
a=f-h
a0=e-g
a1=b*a-c*a0
a2=H.M(r)?a1>=0:a1<=0
i=a1*a
a3=a1*a0
a4=a1*b
a5=a1*c
a6=a1*a1
a7=0
a8=0
a9=0
while(!0){if(!(a9<n&&a2))break
if(a9>=n)return H.a(s,a9)
b0=s[a9]
if(b0!==m&&b0!==k&&b0!==j){b1=b0*2
if(b1>=p)return H.a(u,b1)
b2=u[b1]-h;++b1
if(b1>=p)return H.a(u,b1)
b3=u[b1]-g
a7=i*b3-a3*b2
if(a7>=0){a8=a4*b2-a5*b3
if(a8>=0)a2=a7+a8<a6?!1:a2}}++a9}if(a2){b4.v(m,k,j)
C.a.bo(s,l%s.length)
o=0}else{if(o>3*n)break
o=l}}if(0>=n)return H.a(s,0)
p=s[0]
if(1>=n)return H.a(s,1)
i=s[1]
if(2>=n)return H.a(s,2)
b4.v(p,i,s[2])},
bJ:function(){var u,t,s,r,q,p,o,n,m=this.a,l=this.c
if(l<3)return 0
u=(l-1)*2
t=m.length
if(u<0||u>=t)return H.a(m,u)
s=m[u];++u
if(u>=t)return H.a(m,u)
r=m[u]
for(q=0,p=0;p<l;++p,r=n,s=o){u=p*2
if(u>=t)return H.a(m,u)
o=m[u];++u
if(u>=t)return H.a(m,u)
n=m[u]
q+=(s-o)*(r+n)}return q/2}}
U.eX.prototype={
d_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=17976931348623157e292,l=-17976931348623157e292
for(u=a.a,t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.a4)(u),++r){q=u[r]
p=q.c
o=T.J()
n=new Float32Array(p*4)
p=new U.bH(this,n,new Int16Array(p*6),m,m,l,l,o)
p.dd(q)
C.a.j(s,p)}},
T:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.a4)(u),++s)u[s].T(a,b)},
O:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.a4)(u),++s){r=u[s]
if(!(a>=r.e&&a<=r.r&&b>=r.f&&b<=r.x))continue
if(r.O(a,b))return!0}return!1},
$aaH:function(){return[U.bH]}}
U.bH.prototype={
O:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(u=this.d-2,t=this.a,s=t.length,r=this.b,q=r.length,p=0;p<u;p+=3){if(p>=q)return H.a(r,p)
o=r[p]*2
n=p+1
if(n>=q)return H.a(r,n)
m=r[n]*2
n=p+2
if(n>=q)return H.a(r,n)
l=r[n]*2
if(o<0||o>=s)return H.a(t,o)
k=t[o]-a
if(m<0||m>=s)return H.a(t,m)
j=t[m]-a
if(l<0||l>=s)return H.a(t,l)
i=t[l]-a
if(k>0&&j>0&&i>0)continue
if(k<0&&j<0&&i<0)continue
n=o+1
if(n>=s)return H.a(t,n)
h=t[n]-b
n=m+1
if(n>=s)return H.a(t,n)
g=t[n]-b
n=l+1
if(n>=s)return H.a(t,n)
f=t[n]-b
if(h>0&&g>0&&f>0)continue
if(h<0&&g<0&&f<0)continue
e=k*g-j*h
d=j*f-i*g
c=i*h-k*f
if(e>=0&&d>=0&&c>=0)return!0
if(e<=0&&d<=0&&c<=0)return!0}return!1},
dd:function(d6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=c9.z,d1=d0.c,d2=d0.d,d3=d6.a,d4=d6.c,d5=d6.Q
if(d5&&d4>=2){u=d3.length
if(0>=u)return H.a(d3,0)
t=d3[0]
if(1>=u)return H.a(d3,1)
s=d3[1]
r=d4*2
q=r-2
if(q<0||q>=u)return H.a(d3,q)
p=d3[q];--r
if(r<0||r>=u)return H.a(d3,r)
o=d3[r]
if(t===p&&s===o)--d4}if(d4<=1)return
for(u=d4-1,r=d3.length,d0=0.5*d0.b,q=!d5,n=d1!==C.h,m=d2===C.W,l=d2===C.u,k=0,j=0,i=0,h=0,g=0,f=-2;f<=d4;f=e,g=a4,h=a3,i=a2,j=a,k=c){e=f+1
d=C.c.P(e,d4)*2
if(d<0||d>=r)return H.a(d3,d)
c=d3[d]
b=d+1
if(b>=r)return H.a(d3,b)
a=d3[b]
a0=c-k
a1=j-a
a2=Math.sqrt(a0*a0+a1*a1)/d0
a3=a1/a2
a4=a0/a2
if(f===0&&q)if(l){c9.Q=c9.i(k+a3-a4,j+a4+a3)
c9.ch=c9.i(k-a3-a4,j-a4+a3)}else{b=k+a3
a5=j+a4
a6=k-a3
a7=j-a4
if(m){c9.Q=c9.i(b,a5)
b=c9.i(a6,a7)
c9.ch=b
c9.a_(k,j,-a3,-a4,a3,a4,c9.Q,b,!0)}else{c9.Q=c9.i(b,a5)
c9.ch=c9.i(a6,a7)}}else if(f===u&&q){a8=c9.Q
a9=c9.ch
if(l){c9.Q=c9.i(k+h+g,j+g-h)
c9.ch=c9.i(k-h+g,j-g-h)}else{b=k+h
a5=j+g
a6=k-h
a7=j-g
if(m){c9.Q=c9.i(b,a5)
b=c9.i(a6,a7)
c9.ch=b
c9.a_(k,j,h,g,-h,-g,b,c9.Q,!0)}else{c9.Q=c9.i(b,a5)
c9.ch=c9.i(a6,a7)}}c9.v(a8,a9,c9.Q)
c9.v(a9,c9.Q,c9.ch)}else{if(f>=0)b=f<d4||d5
else b=!1
if(b){b0=(a3*(h-a3)+a4*(g-a4))/(a3*g-a4*h)
b1=Math.abs(b0)
if(isNaN(b0)){b0=0
b1=0}b2=n&&b1<0.1?C.h:d1
if(b2===C.h&&b1>10)b2=C.m
b3=h-b0*g
b4=g+b0*h
b5=b1>i||b1>a2
a9=c9.Q
b=b0>=0
a8=b?a9:c9.ch
b6=b?c9.ch:a9
if(b2===C.h){if(!b5){b7=c9.ch
b8=c9.Q=c9.i(k+b3,j+b4)
b9=c9.ch=c9.i(k-b3,j-b4)}else{a5=k-a3
a6=j-a4
a7=k+a3
c0=j+a4
if(b){b7=c9.i(k+h,j+g)
b8=c9.i(k-b3,j-b4)
b9=c9.i(a5,a6)
c9.ch=b9
c9.Q=c9.i(a7,c0)
c9.v(a8,b7,b8)}else{b7=c9.i(k-h,j-g)
b8=c9.i(k+b3,j+b4)
b9=c9.i(a7,c0)
c9.Q=b9
c9.ch=c9.i(a5,a6)
c9.v(a8,b7,b8)}}c9.v(a8,b6,b8)
c9.v(b7,b8,b9)}else if(b2===C.m){a5=!b5
if(a5&&b){b7=c9.Q=c9.i(k+b3,j+b4)
b8=c9.i(k-h,j-g)
b9=c9.ch=c9.i(k-a3,j-a4)}else if(a5){b7=c9.i(k-b3,j-b4)
c9.ch=b7
b8=c9.i(k+h,j+g)
b9=c9.i(k+a3,j+a4)
c9.Q=b9}else{a5=k+h
a6=j+g
a7=k-h
c0=j-g
c1=k-a3
c2=j-a4
c3=k+a3
c4=j+a4
if(b){b7=c9.i(a5,a6)
b8=c9.i(a7,c0)
b9=c9.i(c1,c2)
c9.ch=b9
c9.Q=c9.i(c3,c4)}else{b7=c9.i(a7,c0)
b8=c9.i(a5,a6)
b9=c9.i(c3,c4)
c9.Q=b9
c9.ch=c9.i(c1,c2)}}c9.v(a8,b6,b7)
c9.v(b6,b7,b8)
c9.v(b7,b8,b9)}else if(b2===C.a1){a5=!b5
if(a5&&b){b7=c9.Q=c9.i(k+b3,j+b4)
b8=c9.i(k-h,j-g)
c9.ch=c9.a_(k,j,-h,-g,-a3,-a4,b7,b8,!1)}else if(a5){b7=c9.ch=c9.i(k-b3,j-b4)
b8=c9.i(k+h,j+g)
c9.Q=c9.a_(k,j,h,g,a3,a4,b7,b8,!0)}else{a5=k-h
a6=j-g
a7=k+h
c0=j+g
if(b){b7=c9.i(a7,c0)
b8=c9.i(a5,a6)
c9.Q=c9.i(k+a3,j+a4)
c9.ch=c9.a_(k,j,-h,-g,-a3,-a4,b7,b8,!1)}else{b7=c9.i(a5,a6)
b8=c9.i(a7,c0)
c9.ch=c9.i(k-a3,j-a4)
c9.Q=c9.a_(k,j,h,g,a3,a4,b7,b8,!0)}}c9.v(a8,b6,b7)
c9.v(b6,b7,b8)}if(a9<0){b=c9.a
a5=c9.Q*2
a6=b.length
if(a5<0||a5>=a6)return H.a(b,a5)
c5=b[a5];++a5
if(a5>=a6)return H.a(b,a5)
c6=b[a5]
a5=c9.ch*2
if(a5<0||a5>=a6)return H.a(b,a5)
c7=b[a5];++a5
if(a5>=a6)return H.a(b,a5)
c8=b[a5]
c9.d=c9.c=0
c9.Q=c9.i(c5,c6)
c9.ch=c9.i(c7,c8)}}}}},
a_:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=Math.atan2(d,c),g=Math.atan2(a1,a0),f=C.b.P(h,6.283185307179586),e=C.b.P(g,6.283185307179586)-f
if(a4&&g>h){if(e>=0)e-=6.283185307179586}else if(a4)e=C.l.P(e,6.283185307179586)-6.283185307179586
else if(g<h){if(e<=0)e+=6.283185307179586}else e=C.l.P(e,6.283185307179586)
u=C.l.ed(Math.abs(10*e/3.141592653589793))
t=e/u
s=Math.cos(t)
r=Math.sin(t)
q=a-a*s+b*r
p=b-a*r-b*s
o=a+c
n=b+d
for(m=a3,l=0;l<u;++l,n=j,o=k,m=i){k=o*s-n*r+q
j=o*r+n*s+p
i=this.i(k,j)
this.v(a2,m,i)}return m}}
L.cZ.prototype={}
L.aX.prototype={}
L.aY.prototype={
af:function(a,b,c,d){if(a==null)return
this.r.vertexAttribPointer(a,b,5126,!1,c,d)}}
L.co.prototype={
h:function(a){return this.b}}
L.aZ.prototype={}
L.dO.prototype={}
L.cm.prototype={
gcE:function(){return C.a3},
aL:function(a){var u,t=this
t.aP(0,t.f)
t.r=C.f
u=t.e
u.globalCompositeOperation="source-over"
u.globalAlpha=t.x=1},
b9:function(a,b){var u,t,s,r=this
r.aP(0,r.f)
r.r=C.f
u=r.e
u.globalCompositeOperation="source-over"
u.globalAlpha=r.x=1
t=b>>>24&255
if(t<255){s=r.d
u.clearRect(0,0,s.width,s.height)}if(t>0){u.fillStyle=V.fj(b)
s=r.d
u.fillRect(0,0,s.width,s.height)}},
C:function(a){},
aJ:function(a,b){var u,t,s,r,q,p=this,o=p.e,n=b.a.c,m=b.d,l=b.b,k=b.r,j=a.e,i=j.c,h=j.a,g=j.b
if(p.x!==h)o.globalAlpha=p.x=h
if(p.r!==g){p.r=g
o.globalCompositeOperation="source-over"}if(m===0){j=i.a
o.setTransform(j[0],j[1],j[2],j[3],j[4],j[5])
j=l.a
u=l.b
t=l.c
s=l.d
r=k[0]
q=k[1]
o.drawImage(n,j,u,t,s,r,q,k[8]-r,k[9]-q)}else if(m===1){j=i.a
o.setTransform(-j[2],-j[3],j[0],j[1],j[4],j[5])
o.drawImage(n,l.a,l.b,l.c,l.d,0-k[13],k[12],k[9]-k[1],k[8]-k[0])}else if(m===2){j=i.a
o.setTransform(-j[0],-j[1],-j[2],-j[3],j[4],j[5])
j=l.a
u=l.b
t=l.c
s=l.d
r=k[8]
q=k[9]
o.drawImage(n,j,u,t,s,0-r,0-q,r-k[0],q-k[1])}else if(m===3){j=i.a
o.setTransform(j[2],j[3],-j[0],-j[1],j[4],j[5])
o.drawImage(n,l.a,l.b,l.c,l.d,k[5],0-k[4],k[9]-k[1],k[8]-k[0])}},
aK:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.e,g=a.e,f=g.c,e=g.a,d=g.b
if(i.x!==e)h.globalAlpha=i.x=e
if(i.r!==d){i.r=d
h.globalCompositeOperation="source-over"}g=f.a
h.setTransform(g[0],g[1],g[2],g[3],g[4],g[5])
h.beginPath()
for(g=b.length-2,u=c.length,t=0;t<g;t+=3){s=b[t]<<1>>>0
r=b[t+1]<<1>>>0
q=b[t+2]<<1>>>0
if(s>=u)return H.a(c,s)
p=c[s]
o=s+1
if(o>=u)return H.a(c,o)
n=c[o]
if(r>=u)return H.a(c,r)
m=c[r]
o=r+1
if(o>=u)return H.a(c,o)
l=c[o]
if(q>=u)return H.a(c,q)
k=c[q]
o=q+1
if(o>=u)return H.a(c,o)
j=c[o]
h.moveTo(p,n)
h.lineTo(m,l)
h.lineTo(k,j)}h.fillStyle=V.fj(a0)
h.fill()},
aP:function(a,b){var u=b.a
this.e.setTransform(u[0],u[1],u[2],u[3],u[4],u[5])}}
L.cn.prototype={
gcE:function(){return C.a2},
aL:function(a){var u=this,t=u.d,s=t.width,r=t.height
u.y=null
u.e.bindFramebuffer(36160,null)
u.e.viewport(0,0,s,r)
t=u.f
t.a7()
if(typeof s!=="number")return H.a_(s)
if(typeof r!=="number")return H.a_(r)
t.cO(0,2/s,-2/r,1)
t.eR(0,-1,1,0)
u.x.scB(t)},
b9:function(a,b){var u,t=this
C.a.sk(t.ds(),0)
t.e8(null)
t.e9(0)
u=(b>>>24&255)/255
t.e.colorMask(!0,!0,!0,!0)
t.e.clearColor((b>>>16&255)/255*u,(b>>>8&255)/255*u,(b&255)/255*u,u)
t.e.clear(17408)},
C:function(a){this.x.C(0)},
aJ:function(a,b){var u=this,t=u.cy
u.c5(t)
u.c4(a.e.b)
u.c6(b.a)
t.aJ(a,b)},
aK:function(a,b,c,d){var u=this.dx
this.c5(u)
this.c4(a.e.b)
u.aK(a,b,c,d)},
c5:function(a){var u=this,t=u.x
if(a!==t){t.C(0)
u.x=a
a.ae(u)
u.x.scB(u.f)}},
c4:function(a){var u=this
if(a!==u.Q){u.x.C(0)
u.Q=a
u.e.blendFunc(1,771)}},
c6:function(a){var u,t,s,r=this,q=3553,p=6408,o=r.fx
if(a!==o[0]){r.x.C(0)
C.a.q(o,0,a)
o=a.y
u=r.cx
if(o!==u){a.x=r
a.y=u
o=r.e
a.Q=o
a.ch=o.createTexture()
a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)
o=H.M(a.Q.isEnabled(3089))
if(o)a.Q.disable(3089)
u=a.c
t=a.Q
s=t&&C.B
if(u!=null){s.cK(t,q,0,p,p,5121,u)
a.z=a.Q.getError()===1281}else s.cL(t,q,0,p,a.a,a.b,0,p,5121,null)
if(a.z){u=a.a
u=W.iI(a.b,u)
a.d=u
u.getContext("2d").drawImage(a.c,0,0)
u=a.Q;(u&&C.B).cK(u,q,0,p,p,5121,a.d)}if(o)a.Q.enable(3089)
a.Q.texParameteri(q,10242,33071)
a.Q.texParameteri(q,10243,33071)
a.Q.texParameteri(q,10241,a.e.a)
a.Q.texParameteri(q,10240,a.e.a)}else{a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)}}},
ds:function(){var u=this.y
return u instanceof L.cp?u.r:this.r},
e9:function(a){var u=this.e
if(a===0)u.disable(2960)
else{u.enable(2960)
this.e.stencilFunc(514,a,255)}},
e8:function(a){this.e.disable(3089)},
dC:function(a){H.k(a,"$ia7").preventDefault()
this.b.j(0,new L.aZ())},
dE:function(a){H.k(a,"$ia7")
this.cx=$.dP=$.dP+1
this.c.j(0,new L.aZ())}}
L.dQ.prototype={}
L.cp.prototype={}
L.ff.prototype={
$1:function(a){var u,t,s,r,q
H.fE(a)
if(typeof a!=="number")return a.bx()
u=a/1000
t=u-$.hQ
$.hQ=u
$.h_=-1
L.hP()
s=$.hO
s=H.l(s.slice(0),[H.c(s,0)])
r=s.length
q=0
for(;q<s.length;s.length===r||(0,H.a4)(s),++q)s[q].$1(t)},
$S:27}
L.cq.prototype={
dI:function(a){var u
H.fE(a)
if(this.a){if(typeof a!=="number")return a.eW()
u=a>=0}else u=!1
if(u)if(typeof a==="number")this.as(a)}}
L.f2.prototype={}
L.bx.prototype={
scB:function(a){var u=this.e.p(0,"uProjectionMatrix")
this.b.uniformMatrix4fv(u,!1,a.a)},
ae:function(a){var u,t,s=this,r=s.a,q=a.cx
if(r!==q){s.a=q
r=s.b=a.e
u=s.x=a.a
t=s.f=a.dy
s.r=a.fr
if(t.e!==q){t.e=q
t.x=u
t.r=r
r=r.createBuffer()
t.f=r
t.r.bindBuffer(34963,r)
t.r.bufferData(34963,t.a,35048)}t.r.bindBuffer(34963,t.f)
r=s.r
q=r.e
t=a.cx
if(q!==t){r.e=t
r.x=u
q=a.e
r.r=q
q=q.createBuffer()
r.f=q
r.r.bindBuffer(34962,q)
r.r.bufferData(34962,r.a,35048)}r.r.bindBuffer(34962,r.f)
r=s.dj(s.b)
s.c=r
s.e7(s.b,r)
s.ea(s.b,s.c)}s.b.useProgram(s.c)},
C:function(a){var u,t,s,r=this,q=r.f,p=q.c
if(p>0&&r.r.c>0){u=q.a.buffer
u.toString
t=H.hy(u,0,p)
q.r.bufferSubData(34963,0,t)
u=q.x
u.c=u.c+q.d
q=r.f
q.d=q.c=0
q=r.r
u=q.a.buffer
s=q.c
u.toString
t=H.hx(u,0,s)
q.r.bufferSubData(34962,0,t)
s=q.x
s.b=s.b+q.d
q=r.r
q.d=q.c=0
r.b.drawElements(4,p,5123,0);++r.x.a}},
dj:function(a){var u=this,t=a.createProgram(),s=u.bQ(a,u.gbw(),35633),r=u.bQ(a,u.gbm(),35632)
a.attachShader(t,s)
a.attachShader(t,r)
a.linkProgram(t)
if(a.getProgramParameter(t,35714)===!0)return t
throw H.f(P.bz(H.M(a.isContextLost())?"ContextLost":a.getProgramInfoLog(t)))},
bQ:function(a,b,c){var u=a.createShader(c)
a.shaderSource(u,b)
a.compileShader(u)
if(a.getShaderParameter(u,35713)===!0)return u
throw H.f(P.bz(H.M(a.isContextLost())?"ContextLost":a.getShaderInfoLog(u)))},
e7:function(a,b){var u,t,s,r,q=this.d
q.at(0)
u=H.P(a.getProgramParameter(b,35721))
if(typeof u!=="number")return H.a_(u)
t=0
for(;t<u;++t){s=a.getActiveAttrib(b,t)
r=a.getAttribLocation(b,s.name)
a.enableVertexAttribArray(r)
q.q(0,s.name,r)}},
ea:function(a,b){var u,t,s,r,q=this.e
q.at(0)
u=H.P(a.getProgramParameter(b,35718))
if(typeof u!=="number")return H.a_(u)
t=0
for(;t<u;++t){s=a.getActiveUniform(b,t)
r=a.getUniformLocation(b,s.name)
q.q(0,s.name,r)}}}
L.dU.prototype={
gbw:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute float aVertexAlpha;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vAlpha = aVertexAlpha;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbm:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vAlpha;\n    }\n    "},
ae:function(a){var u,t=this
t.bF(a)
t.b.uniform1i(t.e.p(0,"uSampler"),0)
u=t.d
t.r.af(u.p(0,"aVertexPosition"),2,20,0)
t.r.af(u.p(0,"aVertexTextCoord"),2,20,8)
t.r.af(u.p(0,"aVertexAlpha"),1,20,16)},
aJ:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=a3.e,a0=a.a,a1=a.c,a2=a4.r
a=b.f
u=a.a
t=u.length
if(a.c+6>=t)b.C(0)
a=b.r
s=a.a
r=s.length
if(a.c+20>=r)b.C(0)
a=b.f
q=a.c
p=b.r
o=p.c
n=p.d
if(q>=t)return H.a(u,q)
u[q]=n
m=q+1
if(m>=t)return H.a(u,m)
u[m]=n+1
m=q+2
l=n+2
if(m>=t)return H.a(u,m)
u[m]=l
m=q+3
if(m>=t)return H.a(u,m)
u[m]=n
m=q+4
if(m>=t)return H.a(u,m)
u[m]=l
l=q+5
if(l>=t)return H.a(u,l)
u[l]=n+3
a.c=q+6
a.d+=6
a=a2[0]
l=a1.a
t=l[0]
m=l[4]
k=a*t+m
j=a2[8]
i=j*t+m
m=l[1]
t=l[5]
h=a*m+t
g=j*m+t
t=a2[1]
m=l[2]
f=t*m
j=a2[9]
e=j*m
l=l[3]
d=t*l
c=j*l
if(o>=r)return H.a(s,o)
s[o]=k+f
l=o+1
if(l>=r)return H.a(s,l)
s[l]=h+d
l=o+2
j=a2[2]
if(l>=r)return H.a(s,l)
s[l]=j
j=o+3
l=a2[3]
if(j>=r)return H.a(s,j)
s[j]=l
l=o+4
if(l>=r)return H.a(s,l)
s[l]=a0
l=o+5
if(l>=r)return H.a(s,l)
s[l]=i+f
l=o+6
if(l>=r)return H.a(s,l)
s[l]=g+d
l=o+7
j=a2[6]
if(l>=r)return H.a(s,l)
s[l]=j
j=o+8
l=a2[7]
if(j>=r)return H.a(s,j)
s[j]=l
l=o+9
if(l>=r)return H.a(s,l)
s[l]=a0
l=o+10
if(l>=r)return H.a(s,l)
s[l]=i+e
l=o+11
if(l>=r)return H.a(s,l)
s[l]=g+c
l=o+12
j=a2[10]
if(l>=r)return H.a(s,l)
s[l]=j
j=o+13
l=a2[11]
if(j>=r)return H.a(s,j)
s[j]=l
l=o+14
if(l>=r)return H.a(s,l)
s[l]=a0
l=o+15
if(l>=r)return H.a(s,l)
s[l]=k+e
l=o+16
if(l>=r)return H.a(s,l)
s[l]=h+c
l=o+17
j=a2[14]
if(l>=r)return H.a(s,l)
s[l]=j
j=o+18
l=a2[15]
if(j>=r)return H.a(s,j)
s[j]=l
l=o+19
if(l>=r)return H.a(s,l)
s[l]=a0
p.c=o+20
p.d=n+4}}
L.dV.prototype={
gbw:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute vec4 aVertexColor;\n    varying vec2 vTextCoord;\n    varying vec4 vColor;\n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbm:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying vec4 vColor;\n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vColor;\n    }\n    "}}
L.dW.prototype={
gbw:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec4 aVertexColor;\n    varying vec4 vColor;\n\n    void main() {\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbm:function(){return"\n    precision mediump float;\n    varying vec4 vColor;\n\n    void main() {\n      gl_FragColor = vColor;\n    }\n    "},
ae:function(a){var u,t=this
t.bF(a)
u=t.d
t.r.af(u.p(0,"aVertexPosition"),2,24,0)
t.r.af(u.p(0,"aVertexColor"),4,24,8)},
aK:function(b0,b1,b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=b0.e,a7=a6.c,a8=a6.a,a9=b1.length
a6=b2.length
u=a6>>>1
t=a5.f
s=t.a
r=s.length
if(t.c+a9>=r)a5.C(0)
t=a5.r
q=t.a
p=u*6
o=q.length
if(t.c+p>=o)a5.C(0)
t=a5.f
n=t.c
m=a5.r
l=m.c
k=m.d
for(j=0;j<a9;++j){m=n+j
i=b1[j]
if(m>=r)return H.a(s,m)
s[m]=k+i}t.c=n+a9
a5.f.d+=a9
t=a7.a
h=t[0]
g=t[1]
f=t[2]
e=t[3]
d=t[4]
c=t[5]
b=0.00392156862745098*(b3>>>24&255)*a8
a=0.00392156862745098*(b3>>>16&255)*b
a0=0.00392156862745098*(b3>>>8&255)*b
a1=0.00392156862745098*(b3&255)*b
for(j=0,a2=0;j<u;++j,a2+=2){if(a2>=a6)return H.a(b2,a2)
a3=b2[a2]
t=a2+1
if(t>=a6)return H.a(b2,t)
a4=b2[t]
if(l>=o)return H.a(q,l)
q[l]=d+h*a3+f*a4
t=l+1
if(t>=o)return H.a(q,t)
q[t]=c+g*a3+e*a4
t=l+2
if(t>=o)return H.a(q,t)
q[t]=a
t=l+3
if(t>=o)return H.a(q,t)
q[t]=a0
t=l+4
if(t>=o)return H.a(q,t)
q[t]=a1
t=l+5
if(t>=o)return H.a(q,t)
q[t]=b
l+=6}a6=a5.r
a6.c+=p
a6.d+=u}}
L.bF.prototype={
geK:function(){var u,t=this.f
if(t==null){t=T.J()
u=new T.aU(new Float32Array(16))
u.a7()
u=this.f=new L.bF(C.f,t,u,this)
t=u}return t}}
L.dX.prototype={
cF:function(a,b){var u,t=this.d
this.e=t
t=t.c
t.cw()
u=this.e
u.a=1
u.b=C.f
t.ei(b)},
bp:function(a){var u,t=this,s=a.gbv(),r=a.ch,q=t.e,p=q.geK()
p.c.ce(s,q.c)
u=q.b
p.b=u
p.a=r*q.a
t.e=p
a.aI(t)
t.e=q}}
L.aD.prototype={
h:function(a){return"RenderStatistics: "+this.a+" draws, "+this.b+" verices, "+this.c+" indices"}}
L.cr.prototype={
sex:function(a){var u,t=this
if(t.e===a)return
t.e=a
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.c6(t)
t.Q.texParameteri(3553,10241,t.e.a)
t.Q.texParameteri(3553,10240,t.e.a)}}
L.cs.prototype={}
L.ct.prototype={}
L.dY.prototype={}
T.dC.prototype={
h:function(a){var u="LoadError: "+this.a
return u}}
R.d0.prototype={
gca:function(){return!1}}
R.aO.prototype={}
R.aP.prototype={}
R.b_.prototype={}
R.I.prototype={
gca:function(){return!0}}
R.bY.prototype={
aD:function(a,b,c){var u,t,s,r
H.ju(c,R.I,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'on'.")
u=this.a
if(u==null){u=P.ac(P.w,[R.ax,R.I])
this.sdq(u)}t=[c]
s=H.m(u.p(0,b),"$iax",t,"$aax")
if(s==null){r=new Array(0)
r.fixed$length=Array
s=new R.ax(this,H.l(r,[[R.C,c]]),t)
u.q(0,b,s)}return s},
bn:function(a,b){var u,t,s=this.a
if(s==null)return!1
u=s.p(0,a)
if(u==null)return!1
t=u.d
return b?t>0:u.c.length>t},
eA:function(a){return this.bn(a,!1)},
bb:function(a,b,c){var u,t
a.r=a.f=!1
u=this.a
if(u==null)return
t=u.p(0,a.a)
if(t==null)return
t.dl(a,b,c)},
sdq:function(a){this.a=H.m(a,"$ihu",[P.w,[R.ax,R.I]],"$ahu")}}
R.bn.prototype={
h:function(a){return this.b}}
R.ax.prototype={
aB:function(a,b,c,d){H.e(a,{func:1,ret:-1,args:[H.c(this,0)]})
H.e(c,{func:1,ret:-1})
return this.ac(a,!1,0)},
ac:function(a,b,c){var u,t,s,r,q,p,o=this,n=H.c(o,0),m=new R.C(c,!1,o,H.e(a,{func:1,ret:-1,args:[n]}),o.$ti),l=o.c,k=l.length,j=new Array(k+1)
j.fixed$length=Array
u=H.l(j,[[R.C,n]])
t=u.length-1
for(s=0,r=0;s<k;++s,r=p){q=l[s]
if(s===r&&q.a<c){p=r+1
t=r
r=p}p=r+1
C.a.q(u,r,q)}C.a.q(u,t,m)
o.se3(u)
n=[R.aO]
if(H.ai(m,"$iC",n,null))C.a.j($.hM,H.ha(m,"$iC",n,"$aC"))
else{n=[R.aP]
if(H.ai(m,"$iC",n,null))C.a.j($.hN,H.ha(m,"$iC",n,"$aC"))
else{n=[R.b_]
if(H.ai(m,"$iC",n,null))C.a.j($.hT,H.ha(m,"$iC",n,"$aC"))}}return m},
dl:function(a,b,c){var u,t,s,r,q,p,o=H.c(this,0)
H.j(a,o)
u=this.c
t=c===C.v
for(s=u.length,o={func:1,ret:-1,args:[o]},r=0;r<s;++r){q=u[r]
if(!q.c){q.d
p=t}else p=!0
if(p)continue
a.d=b
H.e(q.f,o).$1(a)}},
se3:function(a){this.c=H.m(a,"$iq",[[R.C,H.c(this,0)]],"$aq")}}
R.C.prototype={}
R.bp.prototype={
h:function(a){return this.b}}
R.dm.prototype={}
R.G.prototype={}
R.an.prototype={}
T.dG.prototype={
h:function(a){var u=this.a
return"Matrix [a="+H.b(u[0])+", b="+H.b(u[1])+", c="+H.b(u[2])+", d="+H.b(u[3])+", tx="+H.b(u[4])+", ty="+H.b(u[5])+"]"},
gcf:function(){var u=this.a
return u[0]*u[3]-u[1]*u[2]},
bu:function(a){var u,t,s,r,q,p,o,n=P.o
H.m(a,"$ia0",[n],"$aa0")
u=a.a
u.toString
t=a.b
t.toString
s=this.a
r=s[0]
if(typeof u!=="number")return u.aM()
q=s[2]
if(typeof t!=="number")return t.aM()
p=u*r+t*q+s[4]
o=u*s[1]+t*s[3]+s[5]
if(!!C.x.$iA){null.eY(p,o)
return}else return new U.A(p,o,[n])},
cw:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0},
aN:function(a,b,c){var u=this.a,t=u[0]
if(typeof b!=="number")return H.a_(b)
u[0]=t*b
t=u[1]
if(typeof c!=="number")return H.a_(c)
u[1]=t*c
u[2]=u[2]*b
u[3]=u[3]*c
u[4]=u[4]*b
u[5]=u[5]*c},
aj:function(a,b,c,d,e,f){var u=this.a
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f},
ei:function(a){var u=this.a,t=a.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
u[4]=t[4]
u[5]=t[5]},
ce:function(a,b){var u,t,s,r,q,p,o=a.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5]
o=b.a
u=o[0]
t=o[1]
s=o[2]
r=o[3]
q=o[4]
p=o[5]
o=this.a
o[0]=n*u+m*s
o[1]=n*t+m*r
o[2]=l*u+k*s
o[3]=l*t+k*r
o[4]=j*u+i*s+q
o[5]=j*t+i*r+p}}
T.aU.prototype={
a7:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=0
u[4]=0
u[5]=1
u[6]=0
u[7]=0
u[8]=0
u[9]=0
u[10]=1
u[11]=0
u[12]=0
u[13]=0
u[14]=0
u[15]=1},
cO:function(a,b,c,d){var u=this.a
u[0]=u[0]*b
u[1]=u[1]*b
u[2]=u[2]*b
u[3]=u[3]*b
u[4]=u[4]*c
u[5]=u[5]*c
u[6]=u[6]*c
u[7]=u[7]*c
u[8]=u[8]*d
u[9]=u[9]*d
u[10]=u[10]*d
u[11]=u[11]*d},
eR:function(a,b,c,d){var u=this.a
u[3]=u[3]+b
u[7]=u[7]+c
u[11]=u[11]+d}}
U.A.prototype={
h:function(a){return"Point<"+new H.bC(H.c(this,0)).h(0)+"> [x="+H.b(this.a)+", y="+H.b(this.b)+"]"},
A:function(a,b){if(b==null)return!1
return!!J.u(b).$ia0&&this.a===b.gX(b)&&this.b===b.gY(b)},
gl:function(a){var u=C.b.gl(this.a),t=C.b.gl(this.b)
return O.hr(O.br(O.br(0,u),t))},
sX:function(a,b){this.a=H.j(b,H.c(this,0))},
sY:function(a,b){this.b=H.j(b,H.c(this,0))},
$ia0:1,
gX:function(a){return this.a},
gY:function(a){return this.b}}
U.K.prototype={
h:function(a){var u=this
return"Rectangle<"+new H.bC(H.c(u,0)).h(0)+"> [left="+H.b(u.a)+", top="+H.b(u.b)+", width="+H.b(u.c)+", height="+H.b(u.d)+"]"},
A:function(a,b){var u,t=this
if(b==null)return!1
u=J.u(b)
return!!u.$icl&&t.a===u.ga4(b)&&t.b===u.ga6(b)&&t.c===u.gW(b)&&t.d===u.gU(b)},
gl:function(a){var u=this,t=C.b.gl(u.a),s=C.b.gl(u.b),r=C.b.gl(u.c),q=C.b.gl(u.d)
return O.hr(O.br(O.br(O.br(O.br(0,t),s),r),q))},
eh:function(a,b,c){var u,t,s=this,r=s.a
if(r<=b){u=s.b
if(u<=c){t=H.c(s,0)
r=H.j(r+s.c,t)>b&&H.j(u+s.d,t)>c}else r=!1}else r=!1
return r},
sa4:function(a,b){this.a=H.j(b,H.c(this,0))},
sa6:function(a,b){this.b=H.j(b,H.c(this,0))},
sW:function(a,b){this.c=H.j(b,H.c(this,0))},
sU:function(a,b){this.d=H.j(b,H.c(this,0))},
$icl:1,
ga4:function(a){return this.a},
ga6:function(a){return this.b},
gW:function(a){return this.c},
gU:function(a){return this.d}}
N.c3.prototype={
dM:function(a){var u=this
u.d.M()
u.e.M()
u.b.eg(0,u.a)},
dK:function(a){var u,t,s=this
s.d.M()
s.e.M()
u="Failed to load "+H.b(s.a.src)+"."
t=s.b.a
if(t.a!==0)H.H(P.bz("Future already completed"))
t.d9(new T.dC(u),null)}}
Q.dH.prototype={}
U.r.prototype={
aO:function(a){this.J=a
this.sb7(0,H.M(a)?1:0)}}
U.ca.prototype={
cV:function(a,b,c,d,e,f,g){var u=this.aD(0,"addedToStage",R.I)
u.ac(H.e(new U.dv(this,c),{func:1,ret:-1,args:[H.c(u,0)]}),!1,0)},
cA:function(a){var u=this,t=u.ag
if(t!=null&&t.b!=null)t.M()
u.ag=P.j8(new P.bl(1000*u.co),new U.dA(u))},
eL:function(a,b){var u,t,s,r=this
H.k(b,"$iG")
if(!b.k3)return
u=r.bf
t=C.b.ak(b.z,u)
s=C.b.ak(b.Q,u)
if((r.av!==t||r.aw!==s)&&b.d instanceof U.r){u=H.ap(b.d,"$ir")
u.aO(!H.M(u.J))
r.av=t
r.aw=s}},
eO:function(){var u,t,s,r,q=this.I,p=P.L
q.toString
u=H.c(q,0)
t=new H.aC(q,H.e(this.gel(),{func:1,ret:p,args:[u]}),[u,p]).bs(0)
for(s=0;q=this.I,s<q.length;++s){q=q[s]
if(s>=t.length)return H.a(t,s)
p=t[s]
q.toString
H.jA(p)
q.J=p
r=H.M(p)?1:0
if(r<=0)r=0
q.ch=r>=1?1:r}},
em:function(a){var u,t
H.k(a,"$ir")
u=this.cq
a.toString
u=H.M(u)?a.a0:a.I
t=C.a.cv(u,0,new U.dw(),P.p)
return H.M(a.J)?this.J.cc(0,t):this.a0.cc(0,t)},
eD:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.cp,a3=new Array(a2)
a3.fixed$length=Array
u=[P.q,U.r]
t=H.c(a3,0)
s=new H.aC(a3,H.e(new U.dy(a1),{func:1,ret:u,args:[t]}),[t,u]).bs(0)
for(r=a2-1,a3=a1.bf,u=[U.aR],q=0;q<a2;q=o)for(p=q-1,o=q+1,t=q*a3,n=0;n<a2;n=e){if(n>=s.length)return H.a(s,n)
m=J.fH(s[n],q)
l=m.n
if(l==null)l=m.n=new U.bo(H.l([],u),H.l([],u))
k=new U.dh(0,0,a3,a3)
k.a=l
j=l.a
C.a.j(j,k)
i=l.b
C.a.sk(i,0)
l.sB(null)
k=new U.dg(4294967040)
k.a=l
C.a.j(j,k)
C.a.sk(i,0)
l.sB(null)
m.c=n*a3
m.id=!0
m.d=t
a1.b6(m)
h=m.I
g=m.a0
for(f=n-1,e=n+1;f<=e;++f)for(l=f===n,j=f===a2,i=f===-1,d=f>=0,c=f<a2,b=p;b<=o;++b)if(!l||b!==q)if(d&&c&&b>=0&&b<a2){if(f<0||f>=s.length)return H.a(s,f)
C.a.j(h,J.fH(s[f],b))}else{a=i?r:f
if(j)a=0
a0=b===-1?r:b
if(b===a2)a0=0
if(a<0||a>=s.length)return H.a(s,a)
C.a.j(g,J.fH(s[a],a0))}C.a.eb(g,h)}a2=U.r
a3=H.c(s,0)
a1.see(0,P.iZ(new H.da(s,H.e(new U.dz(),{func:1,ret:[P.t,a2],args:[a3]}),[a3,a2]),!0,a2))},
en:function(){var u,t,s,r,q,p,o,n,m,l=this,k=null,j=4278190080,i=H.l([],[A.W]),h=$.a8
$.a8=h+1
l.a1=new A.cv(i,h,H.l([],[A.au]),T.J())
u=l.gV()
t=(u instanceof A.D?u:k).ax
u=l.gV()
s=(u instanceof A.D?u:k).bh
for(i=l.bf,h=[U.aR],r=0;r<t;r+=i){q=l.a1
p=q.n
q=p==null?q.n=new U.bo(H.l([],h),H.l([],h)):p
o=new U.bZ()
o.a=q
p=q.a
C.a.j(p,o)
n=q.b
C.a.sk(n,0)
q.sB(k)
o=new U.c1(r,0)
o.a=q
C.a.j(p,o)
C.a.sk(n,0)
q.sB(k)
o=new U.c0(r,s)
o.a=q
C.a.j(p,o)
C.a.sk(n,0)
q.sB(k)
o=new U.c_()
o.a=q
C.a.j(p,o)
C.a.sk(n,0)
q.sB(k)
o=new U.c2(j,0.25,C.h,C.j)
o.a=q
C.a.j(p,o)
C.a.sk(n,0)
q.sB(k)}for(m=0;m<s;m+=i){q=l.a1
p=q.n
q=p==null?q.n=new U.bo(H.l([],h),H.l([],h)):p
o=new U.bZ()
o.a=q
p=q.a
C.a.j(p,o)
n=q.b
C.a.sk(n,0)
q.sB(k)
o=new U.c1(0,m)
o.a=q
C.a.j(p,o)
C.a.sk(n,0)
q.sB(k)
o=new U.c0(t,m)
o.a=q
C.a.j(p,o)
C.a.sk(n,0)
q.sB(k)
o=new U.c_()
o.a=q
C.a.j(p,o)
C.a.sk(n,0)
q.sB(k)
o=new U.c2(j,0.25,C.h,C.j)
o.a=q
C.a.j(p,o)
C.a.sk(n,0)
q.sB(k)}l.b6(l.a1)},
at:function(a){var u=this.I;(u&&C.a).N(u,new U.du())
this.av=this.aw=-1},
see:function(a,b){this.I=H.m(b,"$iq",[U.r],"$aq")}}
U.dv.prototype={
$1:function(a){var u,t,s,r,q=this.a
q.eD()
q.en()
u=q.a1
u.sb7(0,H.M(this.b)?1:0)
t=q.gV()
u=t instanceof A.D?t:null
s=R.G
u=u.aD(0,"mouseMove",s)
r=H.e(q.gaE(q),{func:1,ret:-1,args:[H.c(u,0)]})
u.ac(r,!1,0)
t=q.gV()
u=(t instanceof A.D?t:null).aD(0,"mouseDown",s)
u.ac(H.e(r,{func:1,ret:-1,args:[H.c(u,0)]}),!1,0)
t=q.gV()
u=(t instanceof A.D?t:null).aD(0,"mouseUp",s)
u.ac(H.e(new U.dt(q),{func:1,ret:-1,args:[H.c(u,0)]}),!1,0)},
$S:32}
U.dt.prototype={
$1:function(a){var u
H.k(a,"$iG")
u=this.a
return u.av=u.aw=-1},
$S:33}
U.dA.prototype={
$1:function(a){H.k(a,"$iae")
return this.a.eO()},
$S:34}
U.dw.prototype={
$2:function(a,b){var u
H.P(a)
if(H.M(H.k(b,"$ir").J)){if(typeof a!=="number")return a.H()
u=a+1}else u=a
return u},
$S:35}
U.dy.prototype={
$1:function(a){var u,t,s=new Array(this.a.cp)
s.fixed$length=Array
u=U.r
t=H.c(s,0)
return new H.aC(s,H.e(new U.dx(),{func:1,ret:u,args:[t]}),[t,u]).bs(0)},
$S:36}
U.dx.prototype={
$1:function(a){var u,t,s=[U.r],r=H.l([],s)
s=H.l([],s)
u=H.l([],[A.W])
t=$.a8
$.a8=t+1
t=new U.r(r,s,u,t,H.l([],[A.au]),T.J())
t.aO($.iA().eJ())
return t},
$S:37}
U.dz.prototype={
$1:function(a){return H.m(a,"$iq",[U.r],"$aq")},
$S:38}
U.du.prototype={
$1:function(a){return H.k(a,"$ir").aO(!1)},
$S:39}
F.fw.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iB")
u=$.aq
t=u.ag
s=t!=null
r=!(s&&t.b!=null)
if(r)u.cA(0)
else if(s&&t.b!=null)t.M()
u=document.querySelector("#playButton")
u.textContent=r?"Pause!":"Play!"
return},
$S:3}
F.fx.prototype={
$1:function(a){H.k(a,"$iB")
return $.aq.at(0)},
$S:3}
F.fy.prototype={
$1:function(a){var u,t
H.k(a,"$iB")
u=$.aq
t=H.ap(W.fY(a.target),"$iab").checked
u=u.a1
u.sb7(0,H.M(t)?1:0)
return},
$S:3}
F.fz.prototype={
$1:function(a){H.k(a,"$iB")
return $.aq.cq=H.ap(W.fY(a.target),"$iab").checked},
$S:40}
F.fA.prototype={
$1:function(a){var u,t=$.aq
t.co=J.fJ(H.ap(J.iD(a),"$ifT").valueAsNumber)
u=t.ag
if(u!=null&&u.b!=null)t.cA(0)
return},
$S:2}
F.fB.prototype={
$1:function(a){return F.h9()},
$S:2}
F.fC.prototype={
$1:function(a){H.k(a,"$iV")
if(F.i7()!=null)F.h9()},
$S:41}
F.fp.prototype={
$1:function(a){var u=P.fU("^(?:(.)(?!.*\\1))*$")
if(typeof a!=="string")H.H(H.bR(a))
return u.b.test(a)},
$S:42}
F.fq.prototype={
$1:function(a){return P.i9(H.Q(a))},
$S:5}
F.fr.prototype={
$1:function(a){return P.i9(H.Q(a))},
$S:5};(function aliases(){var u=J.z.prototype
u.cR=u.h
u=J.c8.prototype
u.cS=u.h
u=P.R.prototype
u.bE=u.bC
u=A.bk.prototype
u.aR=u.a3
u.cQ=u.aI
u=U.bG.prototype
u.cT=u.i
u=L.bx.prototype
u.bF=u.ae})();(function installTearOffs(){var u=hunkHelpers._static_0,t=hunkHelpers._static_1,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_1i
u(H,"jm","j0",13)
t(P,"jw","jc",4)
t(P,"jx","jd",4)
t(P,"jy","je",4)
u(P,"i1","jt",1)
s(P,"jz",1,null,["$2","$1"],["hS",function(a){return P.hS(a,null)}],9,0)
u(P,"i0","jo",1)
r(P.O.prototype,"gdg",0,1,null,["$2","$1"],["aa","dh"],9,0)
q(P.cE.prototype,"gdZ","e_",1)
var n
p(n=A.D.prototype,"gdP","dQ",3)
p(n,"gdR","dS",19)
p(n,"gdT","dU",20)
p(n,"gdN","dO",21)
p(A.cx.prototype,"gda","dc",25)
p(n=L.cn.prototype,"gdB","dC",8)
p(n,"gdD","dE",8)
p(L.cq.prototype,"gdH","dI",28)
p(n=N.c3.prototype,"gdL","dM",2)
p(n,"gdJ","dK",2)
o(n=U.ca.prototype,"gaE","eL",30)
p(n,"gel","em",31)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.n,null)
s(P.n,[H.fQ,J.z,J.cT,P.t,H.cb,H.db,H.d9,H.aQ,H.bi,H.ee,P.ak,H.cH,H.bC,P.dF,H.dB,H.dq,H.f3,P.cI,P.e8,P.ev,P.eu,P.ew,P.ah,P.O,P.cA,P.ad,P.eA,P.bN,P.cE,P.ae,P.N,P.fd,P.f9,P.bI,P.f1,P.R,P.L,P.o,P.bl,P.dJ,P.cw,P.eE,P.de,P.q,P.v,P.E,P.e7,P.w,P.bB,W.d3,W.aS,W.dc,W.ey,P.eZ,P.a0,K.el,K.ds,A.a5,A.cV,A.cX,L.dQ,R.bY,L.cq,A.by,A.b0,A.Y,A.e1,A.b6,A.b7,A.aG,U.aR,U.bo,U.dj,U.bs,U.bh,U.aH,U.bG,L.cZ,L.aX,L.aY,L.co,L.aZ,L.dO,L.cp,L.f2,L.bx,L.bF,L.dX,L.aD,L.cr,L.cs,L.ct,L.dY,R.I,R.bn,R.bp,T.dG,T.aU,U.A,U.K,N.c3,Q.dH])
s(J.z,[J.dp,J.c6,J.c8,J.az,J.bq,J.aT,H.cf,W.al,W.bV,W.cC,W.d5,W.bW,W.d,W.a1,W.cJ,P.bU,P.ci,P.aE,P.cy,P.bD])
s(J.c8,[J.dK,J.b2,J.aA])
t(J.fP,J.az)
s(J.bq,[J.c5,J.c4])
s(P.t,[H.d8,H.da])
t(H.aB,H.d8)
s(H.aB,[H.eb,H.aC])
s(H.bi,[H.dL,H.fF,H.ec,H.fs,H.ft,H.fu,P.eq,P.ep,P.er,P.es,P.fc,P.fb,P.eF,P.eN,P.eJ,P.eK,P.eL,P.eH,P.eM,P.eG,P.eQ,P.eR,P.eP,P.eO,P.e9,P.ea,P.f4,P.fh,P.f7,P.f6,P.f8,P.dE,P.d6,P.d7,W.eD,P.fk,A.cY,A.cW,A.dS,A.dT,A.e5,A.e2,A.e3,A.e4,L.ff,U.dv,U.dt,U.dA,U.dw,U.dy,U.dx,U.dz,U.du,F.fw,F.fx,F.fy,F.fz,F.fA,F.fB,F.fC,F.fp,F.fq,F.fr])
s(P.ak,[H.dI,H.dr,H.eh,H.cz,H.d1,H.dZ,P.cU,P.cg,P.aj,P.ei,P.eg,P.b1,P.d2,P.d4,T.dC])
s(H.ec,[H.e6,H.bf])
t(H.em,P.cU)
t(P.dD,P.dF)
t(H.c9,P.dD)
t(H.ce,H.cf)
s(H.ce,[H.bJ,H.bL])
t(H.bK,H.bJ)
t(H.bu,H.bK)
t(H.bM,H.bL)
t(H.bv,H.bM)
t(H.cc,H.bu)
t(H.cd,H.bv)
s(P.e8,[P.fa,W.eB,R.ax])
t(P.cB,P.fa)
t(P.et,P.cB)
t(P.ex,P.ev)
t(P.S,P.ex)
t(P.en,P.eu)
t(P.eo,P.ew)
t(P.ez,P.eA)
t(P.bO,P.bN)
t(P.f5,P.fd)
t(P.f0,P.f9)
s(P.o,[P.a3,P.p])
s(P.aj,[P.cj,P.dk])
s(W.al,[W.X,W.bE,P.cu])
s(W.X,[W.bm,W.aw])
s(W.bm,[W.i,P.h])
s(W.i,[W.cR,W.cS,W.av,W.dd,W.aa,W.ab,W.bt,W.e_])
t(W.bj,W.cC)
s(W.d,[W.aF,P.ej,P.a7])
s(W.aF,[W.V,W.B,W.am])
t(W.cK,W.cJ)
t(W.ed,W.cK)
t(W.ek,W.bt)
t(W.ag,W.B)
t(W.cD,W.bW)
t(W.b3,W.eB)
s(P.ad,[W.eC,R.C])
t(P.bw,P.cu)
t(A.au,L.dQ)
t(A.W,R.bY)
s(A.W,[A.dn,A.cx])
t(A.bk,A.dn)
t(A.dR,L.cq)
s(A.bk,[A.cv,A.D])
s(U.aR,[U.bZ,U.c_,U.df,U.c0,U.c1,U.dh,U.di,U.cF])
t(U.dg,U.df)
t(U.c2,U.di)
s(U.dj,[U.cG,U.eT])
s(U.cG,[U.eS,U.eU,U.eV,U.eW])
s(U.aH,[U.ao,U.eX])
s(U.bG,[U.Z,U.bH])
s(L.dO,[L.cm,L.cn])
s(L.bx,[L.dU,L.dV,L.dW])
s(R.I,[R.d0,R.dm])
s(R.d0,[R.aO,R.aP,R.b_])
s(R.dm,[R.G,R.an])
s(A.cv,[U.r,U.ca])
u(H.bJ,P.R)
u(H.bK,H.aQ)
u(H.bL,P.R)
u(H.bM,H.aQ)
u(W.cC,W.d3)
u(W.cJ,P.R)
u(W.cK,W.aS)})()
var v={mangledGlobalNames:{p:"int",a3:"double",o:"num",w:"String",L:"bool",v:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.v},{func:1,ret:-1},{func:1,ret:-1,args:[W.d]},{func:1,ret:-1,args:[W.B]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.p,args:[P.w]},{func:1,ret:P.v,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.a7]},{func:1,ret:-1,args:[P.n],opt:[P.E]},{func:1,ret:-1,args:[A.aG]},{func:1,ret:P.v,args:[,,]},{func:1,ret:P.w,args:[P.p]},{func:1,ret:P.p},{func:1,ret:A.a5,args:[W.aa]},{func:1,args:[W.d]},{func:1,ret:P.L,args:[A.D]},{func:1,ret:-1,args:[A.D]},{func:1,ret:[P.O,,],args:[,]},{func:1,ret:-1,args:[W.ag]},{func:1,ret:-1,args:[W.am]},{func:1,ret:-1,args:[W.V]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.v,args:[,],opt:[P.E]},{func:1,ret:A.b7},{func:1,ret:-1,args:[A.a5]},{func:1,args:[,P.w]},{func:1,ret:P.v,args:[P.o]},{func:1,ret:-1,args:[P.o]},{func:1,ret:P.v,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[R.G]},{func:1,ret:P.L,args:[U.r]},{func:1,ret:P.v,args:[R.I]},{func:1,ret:P.p,args:[R.G]},{func:1,ret:-1,args:[P.ae]},{func:1,ret:P.p,args:[P.p,U.r]},{func:1,ret:[P.q,U.r],args:[,]},{func:1,ret:U.r,args:[,]},{func:1,ret:[P.q,U.r],args:[[P.q,U.r]]},{func:1,ret:-1,args:[U.r]},{func:1,ret:P.L,args:[W.B]},{func:1,ret:P.v,args:[W.V]},{func:1,ret:P.L,args:[P.w]},{func:1,args:[P.w]},{func:1,ret:-1,args:[P.w]}],interceptorsByTag:null,leafTags:null};(function constants(){C.t=W.av.prototype
C.a_=J.z.prototype
C.a=J.az.prototype
C.l=J.c4.prototype
C.c=J.c5.prototype
C.x=J.c6.prototype
C.b=J.bq.prototype
C.e=J.aT.prototype
C.a0=J.aA.prototype
C.y=H.cc.prototype
C.z=H.cd.prototype
C.A=J.dK.prototype
C.B=P.aE.prototype
C.p=J.b2.prototype
C.L=W.ag.prototype
C.M=W.bE.prototype
C.f=new L.cZ()
C.N=new H.d9([P.v])
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.O=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.T=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.S=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.R=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.r=function(hooks) { return hooks; }

C.U=new P.dJ()
C.aa=new L.dY()
C.V=new P.eZ()
C.d=new P.f5()
C.j=new U.bh("CapsStyle.NONE")
C.W=new U.bh("CapsStyle.ROUND")
C.u=new U.bh("CapsStyle.SQUARE")
C.v=new R.bn("EventPhase.CAPTURING_PHASE")
C.X=new R.bn("EventPhase.AT_TARGET")
C.Y=new R.bn("EventPhase.BUBBLING_PHASE")
C.k=new R.bp("InputEventMode.MouseOnly")
C.Z=new R.bp("InputEventMode.TouchOnly")
C.w=new R.bp("InputEventMode.MouseAndTouch")
C.h=new U.bs("JointStyle.MITER")
C.a1=new U.bs("JointStyle.ROUND")
C.m=new U.bs("JointStyle.BEVEL")
C.a2=new L.co("RenderEngine.WebGL")
C.a3=new L.co("RenderEngine.Canvas2D")
C.a4=new L.cs(9728)
C.a5=new L.cs(9729)
C.C=new A.Y("StageAlign.TOP_LEFT")
C.D=new A.Y("StageAlign.TOP")
C.E=new A.Y("StageAlign.TOP_RIGHT")
C.F=new A.Y("StageAlign.LEFT")
C.i=new A.Y("StageAlign.NONE")
C.G=new A.Y("StageAlign.RIGHT")
C.H=new A.Y("StageAlign.BOTTOM_LEFT")
C.I=new A.Y("StageAlign.BOTTOM")
C.J=new A.Y("StageAlign.BOTTOM_RIGHT")
C.n=new A.by("StageRenderMode.AUTO")
C.K=new A.by("StageRenderMode.ONCE")
C.a6=new A.by("StageRenderMode.STOP")
C.a7=new A.b0("StageScaleMode.EXACT_FIT")
C.a8=new A.b0("StageScaleMode.NO_BORDER")
C.a9=new A.b0("StageScaleMode.NO_SCALE")
C.o=new A.b0("StageScaleMode.SHOW_ALL")})();(function staticFields(){$.dM=null
$.dN=null
$.a6=0
$.bg=null
$.hi=null
$.h0=!1
$.i8=null
$.hZ=null
$.id=null
$.fl=null
$.fv=null
$.h6=null
$.b8=null
$.bP=null
$.bQ=null
$.h1=!1
$.x=C.d
$.U=[]
$.fW=null
$.a8=0
$.hK=1
$.dP=0
$.hO=[]
$.hQ=17976931348623157e292
$.h_=-1
$.hM=H.l([],[[R.C,R.aO]])
$.hN=H.l([],[[R.C,R.aP]])
$.hT=H.l([],[[R.C,R.b_]])
$.hw=P.ac(P.w,Q.dH)
$.aq=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"k1","ik",function(){return H.i6("_$dart_dartClosure")})
u($,"k4","hb",function(){return H.i6("_$dart_js")})
u($,"ka","ip",function(){return H.af(H.ef({
toString:function(){return"$receiver$"}}))})
u($,"kb","iq",function(){return H.af(H.ef({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"kc","ir",function(){return H.af(H.ef(null))})
u($,"kd","is",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kg","iv",function(){return H.af(H.ef(void 0))})
u($,"kh","iw",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kf","iu",function(){return H.af(H.hE(null))})
u($,"ke","it",function(){return H.af(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"kj","iy",function(){return H.af(H.hE(void 0))})
u($,"ki","ix",function(){return H.af(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"km","hc",function(){return P.jb()})
u($,"k_","ij",function(){return new A.cX(H.l([1,2],[P.a3]))})
u($,"k8","io",function(){return new A.e1()})
u($,"kq","hd",function(){var t=W.jY().devicePixelRatio
return typeof t!=="number"?1:t})
u($,"ks","iz",function(){return Q.jj()})
u($,"k5","il",function(){return P.bA(P.w)})
u($,"k6","im",function(){var t=$.il()
t.toString
return new P.et(t,[H.c(t,0)])})
u($,"ku","iA",function(){return C.V})
u($,"kw","fG",function(){return A.j6(H.k(W.ie("#stage"),"$iav"))})
u($,"kv","he",function(){return H.ap(W.ie("#rulesInput"),"$iab")})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.z,CanvasGradient:J.z,CanvasPattern:J.z,DOMError:J.z,MediaError:J.z,Navigator:J.z,NavigatorConcurrentHardware:J.z,NavigatorUserMediaError:J.z,OverconstrainedError:J.z,PositionError:J.z,WebGLActiveInfo:J.z,WebGLFramebuffer:J.z,WebGLRenderbuffer:J.z,WebGL2RenderingContext:J.z,WebGLShader:J.z,SQLError:J.z,ArrayBufferView:H.cf,Float32Array:H.cc,Int16Array:H.cd,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLBodyElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLDivElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTableElement:W.i,HTMLTableRowElement:W.i,HTMLTableSectionElement:W.i,HTMLTemplateElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,HTMLAnchorElement:W.cR,HTMLAreaElement:W.cS,HTMLCanvasElement:W.av,CanvasRenderingContext2D:W.bV,CDATASection:W.aw,CharacterData:W.aw,Comment:W.aw,ProcessingInstruction:W.aw,Text:W.aw,CSSStyleDeclaration:W.bj,MSStyleCSSProperties:W.bj,CSS2Properties:W.bj,DOMException:W.d5,DOMRectReadOnly:W.bW,Element:W.bm,AbortPaymentEvent:W.d,AnimationEvent:W.d,AnimationPlaybackEvent:W.d,ApplicationCacheErrorEvent:W.d,BackgroundFetchClickEvent:W.d,BackgroundFetchEvent:W.d,BackgroundFetchFailEvent:W.d,BackgroundFetchedEvent:W.d,BeforeInstallPromptEvent:W.d,BeforeUnloadEvent:W.d,BlobEvent:W.d,CanMakePaymentEvent:W.d,ClipboardEvent:W.d,CloseEvent:W.d,CustomEvent:W.d,DeviceMotionEvent:W.d,DeviceOrientationEvent:W.d,ErrorEvent:W.d,ExtendableEvent:W.d,ExtendableMessageEvent:W.d,FetchEvent:W.d,FontFaceSetLoadEvent:W.d,ForeignFetchEvent:W.d,GamepadEvent:W.d,HashChangeEvent:W.d,InstallEvent:W.d,MediaEncryptedEvent:W.d,MediaKeyMessageEvent:W.d,MediaQueryListEvent:W.d,MediaStreamEvent:W.d,MediaStreamTrackEvent:W.d,MessageEvent:W.d,MIDIConnectionEvent:W.d,MIDIMessageEvent:W.d,MutationEvent:W.d,NotificationEvent:W.d,PageTransitionEvent:W.d,PaymentRequestEvent:W.d,PaymentRequestUpdateEvent:W.d,PopStateEvent:W.d,PresentationConnectionAvailableEvent:W.d,PresentationConnectionCloseEvent:W.d,ProgressEvent:W.d,PromiseRejectionEvent:W.d,PushEvent:W.d,RTCDataChannelEvent:W.d,RTCDTMFToneChangeEvent:W.d,RTCPeerConnectionIceEvent:W.d,RTCTrackEvent:W.d,SecurityPolicyViolationEvent:W.d,SensorErrorEvent:W.d,SpeechRecognitionError:W.d,SpeechRecognitionEvent:W.d,SpeechSynthesisEvent:W.d,StorageEvent:W.d,SyncEvent:W.d,TrackEvent:W.d,TransitionEvent:W.d,WebKitTransitionEvent:W.d,VRDeviceEvent:W.d,VRDisplayEvent:W.d,VRSessionEvent:W.d,MojoInterfaceRequestEvent:W.d,ResourceProgressEvent:W.d,USBConnectionEvent:W.d,AudioProcessingEvent:W.d,OfflineAudioCompletionEvent:W.d,Event:W.d,InputEvent:W.d,EventTarget:W.al,HTMLFormElement:W.dd,HTMLImageElement:W.aa,HTMLInputElement:W.ab,KeyboardEvent:W.V,HTMLAudioElement:W.bt,HTMLMediaElement:W.bt,PointerEvent:W.B,MouseEvent:W.B,DragEvent:W.B,Document:W.X,DocumentFragment:W.X,HTMLDocument:W.X,ShadowRoot:W.X,XMLDocument:W.X,Attr:W.X,DocumentType:W.X,Node:W.X,HTMLSelectElement:W.e_,Touch:W.a1,TouchEvent:W.am,TouchList:W.ed,CompositionEvent:W.aF,FocusEvent:W.aF,TextEvent:W.aF,UIEvent:W.aF,HTMLVideoElement:W.ek,WheelEvent:W.ag,Window:W.bE,DOMWindow:W.bE,ClientRect:W.cD,DOMRect:W.cD,IDBOpenDBRequest:P.bw,IDBVersionChangeRequest:P.bw,IDBRequest:P.cu,IDBVersionChangeEvent:P.ej,SVGAElement:P.h,SVGAnimateElement:P.h,SVGAnimateMotionElement:P.h,SVGAnimateTransformElement:P.h,SVGAnimationElement:P.h,SVGCircleElement:P.h,SVGClipPathElement:P.h,SVGDefsElement:P.h,SVGDescElement:P.h,SVGDiscardElement:P.h,SVGEllipseElement:P.h,SVGFEBlendElement:P.h,SVGFEColorMatrixElement:P.h,SVGFEComponentTransferElement:P.h,SVGFECompositeElement:P.h,SVGFEConvolveMatrixElement:P.h,SVGFEDiffuseLightingElement:P.h,SVGFEDisplacementMapElement:P.h,SVGFEDistantLightElement:P.h,SVGFEFloodElement:P.h,SVGFEFuncAElement:P.h,SVGFEFuncBElement:P.h,SVGFEFuncGElement:P.h,SVGFEFuncRElement:P.h,SVGFEGaussianBlurElement:P.h,SVGFEImageElement:P.h,SVGFEMergeElement:P.h,SVGFEMergeNodeElement:P.h,SVGFEMorphologyElement:P.h,SVGFEOffsetElement:P.h,SVGFEPointLightElement:P.h,SVGFESpecularLightingElement:P.h,SVGFESpotLightElement:P.h,SVGFETileElement:P.h,SVGFETurbulenceElement:P.h,SVGFilterElement:P.h,SVGForeignObjectElement:P.h,SVGGElement:P.h,SVGGeometryElement:P.h,SVGGraphicsElement:P.h,SVGImageElement:P.h,SVGLineElement:P.h,SVGLinearGradientElement:P.h,SVGMarkerElement:P.h,SVGMaskElement:P.h,SVGMetadataElement:P.h,SVGPathElement:P.h,SVGPatternElement:P.h,SVGPolygonElement:P.h,SVGPolylineElement:P.h,SVGRadialGradientElement:P.h,SVGRectElement:P.h,SVGScriptElement:P.h,SVGSetElement:P.h,SVGStopElement:P.h,SVGStyleElement:P.h,SVGElement:P.h,SVGSVGElement:P.h,SVGSwitchElement:P.h,SVGSymbolElement:P.h,SVGTSpanElement:P.h,SVGTextContentElement:P.h,SVGTextElement:P.h,SVGTextPathElement:P.h,SVGTextPositioningElement:P.h,SVGTitleElement:P.h,SVGUseElement:P.h,SVGViewElement:P.h,SVGGradientElement:P.h,SVGComponentTransferFunctionElement:P.h,SVGFEDropShadowElement:P.h,SVGMPathElement:P.h,WebGLBuffer:P.bU,WebGLContextEvent:P.a7,WebGLProgram:P.ci,WebGLRenderingContext:P.aE,WebGLTexture:P.cy,WebGLUniformLocation:P.bD})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLFramebuffer:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:false,IDBVersionChangeEvent:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true})
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.ib,[])
else F.ib([])})})()
//# sourceMappingURL=main.js.map
