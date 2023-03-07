"use strict";(self.webpackChunklanding_page=self.webpackChunklanding_page||[]).push([[691],{1231:function(e,t,r){r.r(t),r.d(t,{Head:function(){return Ce},default:function(){return je}});var s=r(7294);var a=e=>{let{headline:t,sentence:r,image:a}=e;return s.createElement("div",{className:"flex flex-col flex-1 min-w-[320px] mx-2 my-2 p-4 bg-white rounded-lg shadow-lg"},s.createElement("div",{className:"text-lg font-bold"},t),s.createElement("div",{className:"text-base mt-4"},r),s.createElement("div",{className:"flex justify-center items-end w-full h-full mt-4"},s.createElement("img",{src:a,className:"object-contain h-full w-full max-h-48 p-4 bg-gray-100"})))};var n=()=>s.createElement("div",{className:"flex flex-row justify-center items-center h-16 mx-2 mt-32"},s.createElement("div",{className:"text-base"},"本サービスはまだ製品化されていません。仕様が変更される場合や、リリースされない場合があります。")),i=e=>"checkbox"===e.type,l=e=>e instanceof Date,o=e=>null==e;const u=e=>"object"==typeof e;var c=e=>!o(e)&&!Array.isArray(e)&&u(e)&&!l(e),d=e=>c(e)&&e.target?i(e.target)?e.target.checked:e.target.value:e,f=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),m=e=>Array.isArray(e)?e.filter(Boolean):[],y=e=>void 0===e,h=(e,t,r)=>{if(!t||!c(e))return r;const s=m(t.split(/[,[\].]+?/)).reduce(((e,t)=>o(e)?e:e[t]),e);return y(s)||s===e?y(e[t])?r:e[t]:s};const g="blur",p="focusout",v="onBlur",b="onChange",x="onSubmit",w="onTouched",V="all",_="max",A="min",E="maxLength",F="minLength",k="pattern",S="required",D="validate";s.createContext(null);var N=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t._proxyFormState[a]!==V&&(t._proxyFormState[a]=!s||V),r&&(r[a]=!0),e[a]}});return a},O=e=>c(e)&&!Object.keys(e).length,j=(e,t,r,s)=>{r(e);const{name:a,...n}=e;return O(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find((e=>t[e]===(!s||V)))},C=e=>Array.isArray(e)?e:[e];function T(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var L=e=>"string"==typeof e,B=(e,t,r,s,a)=>L(e)?(s&&t.watch.add(e),h(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),h(r,e)))):(s&&(t.watchAll=!0),r),U="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function M(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(U&&(e instanceof Blob||e instanceof FileList)||!r&&!c(e))return e;if(t=r?[]:{},Array.isArray(e)||(e=>{const t=e.constructor&&e.constructor.prototype;return c(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)t[r]=M(e[r]);else t=e}return t}var q=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},P=e=>/^\w*$/.test(e),H=e=>m(e.replace(/["|']|\]/g,"").split(/\.|\[/));function I(e,t,r){let s=-1;const a=P(t)?[t]:H(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=c(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}const R=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=h(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else c(s)&&R(s,t)}}};var $=e=>({isOnSubmit:!e||e===x,isOnBlur:e===v,isOnChange:e===b,isOnAll:e===V,isOnTouch:e===w}),W=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),G=(e,t,r)=>{const s=m(h(e,r));return I(s,"root",t[r]),I(e,r,s),e},J=e=>"boolean"==typeof e,Y=e=>"file"===e.type,z=e=>"function"==typeof e,K=e=>{if(!U)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Q=e=>L(e)||s.isValidElement(e),X=e=>"radio"===e.type,Z=e=>e instanceof RegExp;const ee={value:!1,isValid:!1},te={value:!0,isValid:!0};var re=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!y(e[0].attributes.value)?y(e[0].value)||""===e[0].value?te:{value:e[0].value,isValid:!0}:te:ee}return ee};const se={isValid:!1,value:null};var ae=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),se):se;function ne(e,t,r="validate"){if(Q(e)||Array.isArray(e)&&e.every(Q)||J(e)&&!e)return{type:r,message:Q(e)?e:"",ref:t}}var ie=e=>c(e)&&!Z(e)?e:{value:e,message:""},le=async(e,t,r,s,a)=>{const{ref:n,refs:l,required:u,maxLength:d,minLength:f,min:m,max:g,pattern:p,validate:v,name:b,valueAsNumber:x,mount:w,disabled:V}=e._f,N=h(t,b);if(!w||V)return{};const j=l?l[0]:n,C=e=>{s&&j.reportValidity&&(j.setCustomValidity(J(e)?"":e||""),j.reportValidity())},T={},B=X(n),U=i(n),M=B||U,P=(x||Y(n))&&y(n.value)&&y(N)||K(n)&&""===n.value||""===N||Array.isArray(N)&&!N.length,H=q.bind(null,b,r,T),I=(e,t,r,s=E,a=F)=>{const i=e?t:r;T[b]={type:e?s:a,message:i,ref:n,...H(e?s:a,i)}};if(a?!Array.isArray(N)||!N.length:u&&(!M&&(P||o(N))||J(N)&&!N||U&&!re(l).isValid||B&&!ae(l).isValid)){const{value:e,message:t}=Q(u)?{value:!!u,message:u}:ie(u);if(e&&(T[b]={type:S,message:t,ref:j,...H(S,t)},!r))return C(t),T}if(!(P||o(m)&&o(g))){let e,t;const s=ie(g),a=ie(m);if(o(N)||isNaN(N)){const r=n.valueAsDate||new Date(N),i=e=>new Date((new Date).toDateString()+" "+e),l="time"==n.type,o="week"==n.type;L(s.value)&&N&&(e=l?i(N)>i(s.value):o?N>s.value:r>new Date(s.value)),L(a.value)&&N&&(t=l?i(N)<i(a.value):o?N<a.value:r<new Date(a.value))}else{const r=n.valueAsNumber||(N?+N:N);o(s.value)||(e=r>s.value),o(a.value)||(t=r<a.value)}if((e||t)&&(I(!!e,s.message,a.message,_,A),!r))return C(T[b].message),T}if((d||f)&&!P&&(L(N)||a&&Array.isArray(N))){const e=ie(d),t=ie(f),s=!o(e.value)&&N.length>e.value,a=!o(t.value)&&N.length<t.value;if((s||a)&&(I(s,e.message,t.message),!r))return C(T[b].message),T}if(p&&!P&&L(N)){const{value:e,message:t}=ie(p);if(Z(e)&&!N.match(e)&&(T[b]={type:k,message:t,ref:n,...H(k,t)},!r))return C(t),T}if(v)if(z(v)){const e=ne(await v(N,t),j);if(e&&(T[b]={...e,...H(D,e.message)},!r))return C(e.message),T}else if(c(v)){let e={};for(const s in v){if(!O(e)&&!r)break;const a=ne(await v[s](N,t),j,s);a&&(e={...a,...H(s,a.message)},C(a.message),r&&(T[b]=e))}if(!O(e)&&(T[b]={ref:j,...e},!r))return T}return C(!0),T};function oe(e,t){const r=Array.isArray(t)?t:P(t)?[t]:H(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=y(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,n=r[a];return s&&delete s[n],0!==a&&(c(s)&&O(s)||Array.isArray(s)&&function(e){for(const t in e)if(!y(e[t]))return!1;return!0}(s))&&oe(e,r.slice(0,-1)),e}function ue(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var ce=e=>o(e)||!u(e);function de(e,t){if(ce(e)||ce(t))return e===t;if(l(e)&&l(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(l(r)&&l(e)||c(r)&&c(e)||Array.isArray(r)&&Array.isArray(e)?!de(r,e):r!==e)return!1}}return!0}var fe=e=>"select-multiple"===e.type,me=e=>K(e)&&e.isConnected,ye=e=>{for(const t in e)if(z(e[t]))return!0;return!1};function he(e,t={}){const r=Array.isArray(e);if(c(e)||r)for(const s in e)Array.isArray(e[s])||c(e[s])&&!ye(e[s])?(t[s]=Array.isArray(e[s])?[]:{},he(e[s],t[s])):o(e[s])||(t[s]=!0);return t}function ge(e,t,r){const s=Array.isArray(e);if(c(e)||s)for(const a in e)Array.isArray(e[a])||c(e[a])&&!ye(e[a])?y(t)||ce(r[a])?r[a]=Array.isArray(e[a])?he(e[a],[]):{...he(e[a])}:ge(e[a],o(t)?{}:t[a],r[a]):de(e[a],t[a])?delete r[a]:r[a]=!0;return r}var pe=(e,t)=>ge(e,t,he(t)),ve=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>y(e)?e:t?""===e?NaN:e?+e:e:r&&L(e)?new Date(e):s?s(e):e;function be(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return Y(t)?t.files:X(t)?ae(e.refs).value:fe(t)?[...t.selectedOptions].map((({value:e})=>e)):i(t)?re(e.refs).value:ve(y(t.value)?e.ref.value:t.value,e)}var xe=e=>y(e)?e:Z(e)?e.source:c(e)?Z(e.value)?e.value.source:e.value:e;function we(e,t,r){const s=h(e,r);if(s||P(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=h(t,s),i=h(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}const Ve={mode:x,reValidateMode:b,shouldFocusError:!0};function _e(e={},t){let r={...Ve,...e};const s=e.resetOptions&&e.resetOptions.keepDirtyValues;let a,n={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},u={},v=c(r.defaultValues)&&M(r.defaultValues)||{},b=r.shouldUnregister?{}:M(v),x={action:!1,mount:!1,watch:!1},w={mount:new Set,unMount:new Set,array:new Set,watch:new Set},_=0;const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},E={watch:ue(),array:ue(),state:ue()},F=$(r.mode),k=$(r.reValidateMode),S=r.criteriaMode===V,D=async e=>{if(A.isValid||e){const e=r.resolver?O((await P()).errors):await H(u,!0);e!==n.isValid&&(n.isValid=e,E.state.next({isValid:e}))}},N=e=>A.isValidating&&E.state.next({isValidating:e}),j=(e,t,r,s)=>{const a=h(u,e);if(a){const n=h(b,e,y(r)?h(v,e):r);y(n)||s&&s.defaultChecked||t?I(b,e,t?n:be(a._f)):ee(e,n),x.mount&&D()}},T=(e,t,r,s,a)=>{let i=!1,l=!1;const o={name:e};if(!r||s){A.isDirty&&(l=n.isDirty,n.isDirty=o.isDirty=Q(),i=l!==o.isDirty);const r=de(h(v,e),t);l=h(n.dirtyFields,e),r?oe(n.dirtyFields,e):I(n.dirtyFields,e,!0),o.dirtyFields=n.dirtyFields,i=i||A.dirtyFields&&l!==!r}if(r){const t=h(n.touchedFields,e);t||(I(n.touchedFields,e,r),o.touchedFields=n.touchedFields,i=i||A.touchedFields&&t!==r)}return i&&a&&E.state.next(o),i?o:{}},q=(t,r,s,i)=>{const l=h(n.errors,t),o=A.isValid&&J(r)&&n.isValid!==r;var u;if(e.delayError&&s?(u=()=>((e,t)=>{I(n.errors,e,t),E.state.next({errors:n.errors})})(t,s),a=e=>{clearTimeout(_),_=window.setTimeout(u,e)},a(e.delayError)):(clearTimeout(_),a=null,s?I(n.errors,t,s):oe(n.errors,t)),(s?!de(l,s):l)||!O(i)||o){const e={...i,...o&&J(r)?{isValid:r}:{},errors:n.errors,name:t};n={...n,...e},E.state.next(e)}N(!1)},P=async e=>await r.resolver(b,r.context,((e,t,r,s)=>{const a={};for(const n of e){const e=h(t,n);e&&I(a,n,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||w.mount,u,r.criteriaMode,r.shouldUseNativeValidation)),H=async(e,t,s={valid:!0})=>{for(const a in e){const i=e[a];if(i){const{_f:e,...a}=i;if(e){const a=w.array.has(e.name),l=await le(i,b,S,r.shouldUseNativeValidation,a);if(l[e.name]&&(s.valid=!1,t))break;!t&&(h(l,e.name)?a?G(n.errors,l,e.name):I(n.errors,e.name,l[e.name]):oe(n.errors,e.name))}a&&await H(a,t,s)}}return s.valid},Q=(e,t)=>(e&&t&&I(b,e,t),!de(ne(),v)),Z=(e,t,r)=>B(e,w,{...x.mount?b:y(t)?v:L(e)?{[e]:t}:t},r,t),ee=(e,t,r={})=>{const s=h(u,e);let a=t;if(s){const r=s._f;r&&(!r.disabled&&I(b,e,ve(t,r)),a=K(r.ref)&&o(t)?"":t,fe(r.ref)?[...r.ref.options].forEach((e=>e.selected=a.includes(e.value))):r.refs?i(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find((t=>t===e.value)):a===e.value))):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach((e=>e.checked=e.value===a)):Y(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||E.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&T(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ae(e)},te=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,i=h(u,n);!w.array.has(e)&&ce(a)&&(!i||i._f)||l(a)?ee(n,a,r):te(n,a,r)}},re=(e,r,s={})=>{const a=h(u,e),i=w.array.has(e),l=M(r);I(b,e,l),i?(E.array.next({name:e,values:b}),(A.isDirty||A.dirtyFields)&&s.shouldDirty&&(n.dirtyFields=pe(v,b),E.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:Q(e,l)}))):!a||a._f||o(l)?ee(e,l,s):te(e,l,s),W(e,w)&&E.state.next({}),E.watch.next({name:e}),!x.mount&&t()},se=async e=>{const t=e.target;let s=t.name;const i=h(u,s);if(i){let o,c;const f=t.type?be(i._f):d(e),m=e.type===g||e.type===p,y=!((l=i._f).mount&&(l.required||l.min||l.max||l.maxLength||l.minLength||l.pattern||l.validate)||r.resolver||h(n.errors,s)||i._f.deps)||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(m,h(n.touchedFields,s),n.isSubmitted,k,F),v=W(s,w,m);I(b,s,f),m?(i._f.onBlur&&i._f.onBlur(e),a&&a(0)):i._f.onChange&&i._f.onChange(e);const x=T(s,f,m,!1),V=!O(x)||v;if(!m&&E.watch.next({name:s,type:e.type}),y)return A.isValid&&D(),V&&E.state.next({name:s,...v?{}:x});if(!m&&v&&E.state.next({}),N(!0),r.resolver){const{errors:e}=await P([s]),t=we(n.errors,u,s),r=we(e,u,t.name||s);o=r.error,s=r.name,c=O(e)}else o=(await le(i,b,S,r.shouldUseNativeValidation))[s],o?c=!1:A.isValid&&(c=await H(u,!0));i._f.deps&&ae(i._f.deps),q(s,c,o,x)}var l},ae=async(e,t={})=>{let s,a;const i=C(e);if(N(!0),r.resolver){const t=await(async e=>{const{errors:t}=await P();if(e)for(const r of e){const e=h(t,r);e?I(n.errors,r,e):oe(n.errors,r)}else n.errors=t;return t})(y(e)?e:i);s=O(t),a=e?!i.some((e=>h(t,e))):s}else e?(a=(await Promise.all(i.map((async e=>{const t=h(u,e);return await H(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||n.isValid)&&D()):a=s=await H(u);return E.state.next({...!L(e)||A.isValid&&s!==n.isValid?{}:{name:e},...r.resolver||!e?{isValid:s}:{},errors:n.errors,isValidating:!1}),t.shouldFocus&&!a&&R(u,(e=>e&&h(n.errors,e)),e?i:w.mount),a},ne=e=>{const t={...v,...x.mount?b:{}};return y(e)?t:L(e)?h(t,e):e.map((e=>h(t,e)))},ie=(e,t)=>({invalid:!!h((t||n).errors,e),isDirty:!!h((t||n).dirtyFields,e),isTouched:!!h((t||n).touchedFields,e),error:h((t||n).errors,e)}),ye=(e,t={})=>{for(const s of e?C(e):w.mount)w.mount.delete(s),w.array.delete(s),h(u,s)&&(t.keepValue||(oe(u,s),oe(b,s)),!t.keepError&&oe(n.errors,s),!t.keepDirty&&oe(n.dirtyFields,s),!t.keepTouched&&oe(n.touchedFields,s),!r.shouldUnregister&&!t.keepDefaultValue&&oe(v,s));E.watch.next({}),E.state.next({...n,...t.keepDirty?{isDirty:Q()}:{}}),!t.keepIsValid&&D()},he=(e,t={})=>{let s=h(u,e);const a=J(t.disabled);return I(u,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),w.mount.add(e),s?a&&I(b,e,t.disabled?void 0:h(b,e,be(s._f))):j(e,!0,t.value),{...a?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:xe(t.min),max:xe(t.max),minLength:xe(t.minLength),maxLength:xe(t.maxLength),pattern:xe(t.pattern)}:{},name:e,onChange:se,onBlur:se,ref:a=>{if(a){he(e,t),s=h(u,e);const r=y(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,n=(e=>X(e)||i(e))(r),l=s._f.refs||[];if(n?l.find((e=>e===r)):r===s._f.ref)return;I(u,e,{_f:{...s._f,...n?{refs:[...l.filter(me),r,...Array.isArray(h(v,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),j(e,!1,void 0,r)}else s=h(u,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!f(w.array,e)||!x.action)&&w.unMount.add(e)}}},ge=()=>r.shouldFocusError&&R(u,(e=>e&&h(n.errors,e)),w.mount),_e=(r,a={})=>{const i=r||v,l=M(i),o=r&&!O(r)?l:v;if(a.keepDefaultValues||(v=i),!a.keepValues){if(a.keepDirtyValues||s)for(const e of w.mount)h(n.dirtyFields,e)?I(o,e,h(b,e)):re(e,h(o,e));else{if(U&&y(r))for(const e of w.mount){const t=h(u,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(K(e)){const t=e.closest("form");if(t){t.reset();break}}}}u={}}b=e.shouldUnregister?a.keepDefaultValues?M(v):{}:l,E.array.next({values:o}),E.watch.next({values:o})}w={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!x.mount&&t(),x.mount=!A.isValid||!!a.keepIsValid,x.watch=!!e.shouldUnregister,E.state.next({submitCount:a.keepSubmitCount?n.submitCount:0,isDirty:a.keepDirty||a.keepDirtyValues?n.isDirty:!(!a.keepDefaultValues||de(r,v)),isSubmitted:!!a.keepIsSubmitted&&n.isSubmitted,dirtyFields:a.keepDirty||a.keepDirtyValues?n.dirtyFields:a.keepDefaultValues&&r?pe(v,r):{},touchedFields:a.keepTouched?n.touchedFields:{},errors:a.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Ae=(e,t)=>_e(z(e)?e(b):e,t);return z(r.defaultValues)&&r.defaultValues().then((e=>{Ae(e,r.resetOptions),E.state.next({isLoading:!1})})),{control:{register:he,unregister:ye,getFieldState:ie,_executeSchema:P,_focusError:ge,_getWatch:Z,_getDirty:Q,_updateValid:D,_removeUnmounted:()=>{for(const e of w.unMount){const t=h(u,e);t&&(t._f.refs?t._f.refs.every((e=>!me(e))):!me(t._f.ref))&&ye(e)}w.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,i=!0)=>{if(s&&r){if(x.action=!0,i&&Array.isArray(h(u,e))){const t=r(h(u,e),s.argA,s.argB);a&&I(u,e,t)}if(i&&Array.isArray(h(n.errors,e))){const t=r(h(n.errors,e),s.argA,s.argB);a&&I(n.errors,e,t),((e,t)=>{!m(h(e,t)).length&&oe(e,t)})(n.errors,e)}if(A.touchedFields&&i&&Array.isArray(h(n.touchedFields,e))){const t=r(h(n.touchedFields,e),s.argA,s.argB);a&&I(n.touchedFields,e,t)}A.dirtyFields&&(n.dirtyFields=pe(v,b)),E.state.next({name:e,isDirty:Q(e,t),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else I(b,e,t)},_getFieldArray:t=>m(h(x.mount?b:v,t,e.shouldUnregister?h(v,t,[]):[])),_reset:_e,_updateFormState:e=>{n={...n,...e}},_subjects:E,_proxyFormState:A,get _fields(){return u},get _formValues(){return b},get _stateFlags(){return x},set _stateFlags(e){x=e},get _defaultValues(){return v},get _names(){return w},set _names(e){w=e},get _formState(){return n},set _formState(e){n=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:ae,register:he,handleSubmit:(e,t)=>async s=>{s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist());let a=M(b);if(E.state.next({isSubmitting:!0}),r.resolver){const{errors:e,values:t}=await P();n.errors=e,a=t}else await H(u);O(n.errors)?(E.state.next({errors:{}}),await e(a,s)):(t&&await t({...n.errors},s),ge()),E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(n.errors),submitCount:n.submitCount+1,errors:n.errors})},watch:(e,t)=>z(e)?E.watch.subscribe({next:r=>e(Z(void 0,t),r)}):Z(e,t,!0),setValue:re,getValues:ne,reset:Ae,resetField:(e,t={})=>{h(u,e)&&(y(t.defaultValue)?re(e,h(v,e)):(re(e,t.defaultValue),I(v,e,t.defaultValue)),t.keepTouched||oe(n.touchedFields,e),t.keepDirty||(oe(n.dirtyFields,e),n.isDirty=t.defaultValue?Q(e,h(v,e)):Q()),t.keepError||(oe(n.errors,e),A.isValid&&D()),E.state.next({...n}))},clearErrors:e=>{e?C(e).forEach((e=>oe(n.errors,e))):n.errors={},E.state.next({errors:n.errors})},unregister:ye,setError:(e,t,r)=>{const s=(h(u,e,{_f:{}})._f||{}).ref;I(n.errors,e,{...t,ref:s}),E.state.next({name:e,errors:n.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},setFocus:(e,t={})=>{const r=h(u,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ie}}const Ae={}.GATSBY_HUBSPOT_URL||"";var Ee=()=>{const[e,t]=s.useState(""),{register:r,handleSubmit:a}=function(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:z(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={..._e(e,(()=>a((e=>({...e}))))),formState:r});const n=t.current.control;return n._options=e,T({subject:n._subjects.state,next:e=>{j(e,n._proxyFormState,n._updateFormState,!0)&&a({...n._formState})}}),s.useEffect((()=>{n._stateFlags.mount||(n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()})),s.useEffect((()=>{e.values&&!de(e.values,n._defaultValues)&&n._reset(e.values,n._options.resetOptions)}),[e.values,n]),s.useEffect((()=>{r.submitCount&&n._focusError()}),[n,r.submitCount]),t.current.formState=N(r,n),t.current}();return s.createElement("div",{id:"form",className:"flex flex-col justify-center items-center mx-2 mt-32 p-8 bg-white rounded-lg shadow-lg"},s.createElement("div",{className:"text-lg font-bold"},"メールアドレスを登録"),s.createElement("div",{className:"text-base mt-4"},"メールアドレスをご登録頂いた方に、最新情報をお届けします。"),e?s.createElement("div",{className:"flex flex-col justify-center items-center"},s.createElement("div",{className:"mt-4 px-4 py-2 border border-transparent text-base text-pink-400  font-bold"},e),s.createElement("button",{onClick:()=>t(""),className:"mt-4 px-8 py-2 text-lg text-white font-bold rounded-full bg-pink-500 hover:bg-pink-400"},"もう一度登録する")):s.createElement("form",{className:"flex flex-col justify-center items-center w-full",onSubmit:a((async e=>{fetch(Ae,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fields:[{name:"email",value:e.email}]})}).then((e=>{if(!e.ok)throw new Error;t("登録ありがとうございました。")})).catch((()=>{t("登録に失敗しました。")}))}))},s.createElement("input",Object.assign({className:"max-w-[384px] w-full mt-4 px-4 py-2 border text-base",type:"email"},r("email"),{placeholder:"メールアドレス入力",required:!0})),s.createElement("button",{id:"ctaButtonSubmit",type:"submit",className:"mt-4 px-8 py-2 text-lg text-white font-bold rounded-full bg-pink-500 hover:bg-pink-400"},"無料先行登録")))};var Fe=e=>{let{title:t}=e;return s.createElement("div",{className:"flex flex-row items-center h-16 mx-2"},s.createElement("div",{className:"text-2xl font-bold"},t))};var ke=e=>{let{headline:t,sentence:r,image:a}=e;return s.createElement("div",{className:"flex flex-row flex-wrap mt-12"},s.createElement("div",{className:"flex flex-col flex-1 min-w-[320px]  mx-2 my-2"},s.createElement("div",{className:"text-5xl font-bold"},t),s.createElement("div",{className:"text-lg mt-8"},r),s.createElement("div",{className:"flex justify-center items-center w-full h-full"},s.createElement("button",{id:"ctaButtonScroll",onClick:()=>{const e=document.getElementById("form");e&&e.scrollIntoView({behavior:"smooth"})},className:"my-8 px-8 py-2 text-lg text-white font-bold rounded-full bg-pink-500 hover:bg-pink-400"},"無料先行登録"))),s.createElement("div",{className:"flex flex-col flex-1 justify-center items-center min-w-[320px] mx-2 my-2"},s.createElement("img",{src:a,className:"object-contain h-full w-full max-h-64 p-4 bg-gray-100"})))},Se=r.p+"static/hero-6dca591e3658782c0d3e8dfc96c41b6e.png",De=r.p+"static/feature1-6dca591e3658782c0d3e8dfc96c41b6e.png",Ne=r.p+"static/feature2-6dca591e3658782c0d3e8dfc96c41b6e.png",Oe=r.p+"static/feature3-6dca591e3658782c0d3e8dfc96c41b6e.png";var je=()=>s.createElement("div",{className:"flex justify-center mx-2 bg-gray-50"},s.createElement("div",{className:"flex flex-col w-full max-w-7xl"},s.createElement("header",null,s.createElement(Fe,{title:"タイトル"})),s.createElement("main",null,s.createElement(ke,{headline:"キャッチコピー",sentence:"ここにはリード文が入ります。",image:Se}),s.createElement("div",{className:"flex flex-row flex-wrap mt-32"},s.createElement(a,{headline:"機能1",sentence:"ここには機能1の説明文が入ります。",image:De}),s.createElement(a,{headline:"機能2",sentence:"ここには機能2の説明文が入ります。",image:Ne}),s.createElement(a,{headline:"機能3",sentence:"ここには機能3の説明文が入ります。",image:Oe})),s.createElement(Ee,null)),s.createElement("footer",null,s.createElement(n,null))));const Ce=()=>s.createElement("title",null,"Landing Page")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b4bf7298d21c1d52663b.js.map