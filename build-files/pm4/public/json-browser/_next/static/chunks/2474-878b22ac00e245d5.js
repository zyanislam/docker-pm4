"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2474],{9834:function(e,r,t){t.d(r,{A:function(){return O}});var n=t(7294),o=t(5920),l=t(8427),a=t(6768),i=t(6817),c=t(4258),s=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,v=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&m(e,t,r[t]);if(f)for(var t of f(r))h.call(r,t)&&m(e,t,r[t]);return e},b=(e,r)=>u(e,d(r));let g=["subtle","filled","outline","light","default","transparent","gradient"],w={xs:(0,a.h)(18),sm:(0,a.h)(22),md:(0,a.h)(28),lg:(0,a.h)(34),xl:(0,a.h)(44)};var E=(0,i.k)((e,{radius:r,color:t,gradient:n},{variant:o,size:l})=>({root:b(v({position:"relative",borderRadius:e.fn.radius(r),padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",height:(0,c.a)({size:l,sizes:w}),minHeight:(0,c.a)({size:l,sizes:w}),width:(0,c.a)({size:l,sizes:w}),minWidth:(0,c.a)({size:l,sizes:w})},function({variant:e,theme:r,color:t,gradient:n}){let o=r.fn.variant({color:t,variant:e,gradient:n});return"gradient"===e?{border:0,backgroundImage:o.background,color:o.color,"&:hover":r.fn.hover({backgroundSize:"200%"})}:g.includes(e)?v({border:`${(0,a.h)(1)} solid ${o.border}`,backgroundColor:o.background,color:o.color},r.fn.hover({backgroundColor:o.hover})):null}({variant:o,theme:e,color:t,gradient:n})),{"&:active":e.activeStyles,"& [data-action-icon-loader]":{maxWidth:"70%"},"&:disabled, &[data-disabled]":{color:e.colors.gray["dark"===e.colorScheme?6:4],cursor:"not-allowed",backgroundColor:"transparent"===o?void 0:e.fn.themeColor("gray","dark"===e.colorScheme?8:1),borderColor:"transparent"===o?void 0:e.fn.themeColor("gray","dark"===e.colorScheme?8:1),backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":b(v({content:'""'},e.fn.cover((0,a.h)(-1))),{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(r),cursor:"not-allowed"})}})})),y=t(966),S=t(4736),C=Object.defineProperty,P=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,R=(e,r,t)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,A=(e,r)=>{for(var t in r||(r={}))T.call(r,t)&&R(e,t,r[t]);if(P)for(var t of P(r))N.call(r,t)&&R(e,t,r[t]);return e},x=(e,r)=>{var t={};for(var n in e)T.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&P)for(var n of P(e))0>r.indexOf(n)&&N.call(e,n)&&(t[n]=e[n]);return t};let _={color:"gray",size:"md",variant:"subtle"},k=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("ActionIcon",_,e),{className:l,color:a,children:i,radius:c,size:s,variant:u,gradient:d,disabled:f,loaderProps:p,loading:h,unstyled:m,__staticSelector:v}=t,b=x(t,["className","color","children","radius","size","variant","gradient","disabled","loaderProps","loading","unstyled","__staticSelector"]),{classes:g,cx:w,theme:C}=E({radius:c,color:a,gradient:d},{name:["ActionIcon",v],unstyled:m,size:s,variant:u}),P=n.createElement(y.a,A({color:C.fn.variant({color:a,variant:u}).color,size:"100%","data-action-icon-loader":!0},p));return n.createElement(S.k,A({className:w(g.root,l),ref:r,disabled:f,"data-disabled":f||void 0,"data-loading":h||void 0,unstyled:m},b),h?P:i)});k.displayName="@mantine/core/ActionIcon";let O=(0,l.F)(k)},3723:function(e,r,t){t.d(r,{x:function(){return eb}});var n=t(7294),o=t(7462),l=t(3935);function a(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function i(...e){return(0,n.useCallback)(a(...e),e)}let c=(0,n.forwardRef)((e,r)=>{let{children:t,...l}=e,a=n.Children.toArray(t),i=a.find(d);if(i){let e=i.props.children,t=a.map(r=>r!==i?r:n.Children.count(e)>1?n.Children.only(null):(0,n.isValidElement)(e)?e.props.children:null);return(0,n.createElement)(s,(0,o.Z)({},l,{ref:r}),(0,n.isValidElement)(e)?(0,n.cloneElement)(e,void 0,t):null)}return(0,n.createElement)(s,(0,o.Z)({},l,{ref:r}),t)});c.displayName="Slot";let s=(0,n.forwardRef)((e,r)=>{let{children:t,...o}=e;return(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n],a=/^on[A-Z]/.test(n);a?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(o,t.props),ref:a(r,t.ref)}):n.Children.count(t)>1?n.Children.only(null):null});s.displayName="SlotClone";let u=({children:e})=>(0,n.createElement)(n.Fragment,null,e);function d(e){return(0,n.isValidElement)(e)&&e.type===u}let f=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,n.forwardRef)((e,t)=>{let{asChild:l,...a}=e,i=l?c:r;return(0,n.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,n.createElement)(i,(0,o.Z)({},a,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),p=(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{},h=e=>{let{present:r,children:t}=e,o=function(e){var r;let[t,o]=(0,n.useState)(),a=(0,n.useRef)({}),i=(0,n.useRef)(e),c=(0,n.useRef)("none"),s=e?"mounted":"unmounted",[u,d]=(r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,n.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},s));return(0,n.useEffect)(()=>{let e=m(a.current);c.current="mounted"===u?e:"none"},[u]),p(()=>{let r=a.current,t=i.current,n=t!==e;if(n){let n=c.current,o=m(r);e?d("MOUNT"):"none"===o||(null==r?void 0:r.display)==="none"?d("UNMOUNT"):t&&n!==o?d("ANIMATION_OUT"):d("UNMOUNT"),i.current=e}},[e,d]),p(()=>{if(t){let e=e=>{let r=m(a.current),n=r.includes(e.animationName);e.target===t&&n&&(0,l.flushSync)(()=>d("ANIMATION_END"))},r=e=>{e.target===t&&(c.current=m(a.current))};return t.addEventListener("animationstart",r),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",r),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:(0,n.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),o(e)},[])}}(r),a="function"==typeof t?t({present:o.isPresent}):n.Children.only(t),c=i(o.ref,a.ref),s="function"==typeof t;return s||o.isPresent?(0,n.cloneElement)(a,{ref:c}):null};function m(e){return(null==e?void 0:e.animationName)||"none"}function v(e){let r=(0,n.useRef)(e);return(0,n.useEffect)(()=>{r.current=e}),(0,n.useMemo)(()=>(...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)},[])}h.displayName="Presence";let b=(0,n.createContext)(void 0);function g(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(null==e||e(n),!1===t||!n.defaultPrevented)return null==r?void 0:r(n)}}let w="ScrollArea",[E,y]=function(e,r=[]){let t=[],o=()=>{let r=t.map(e=>(0,n.createContext)(e));return function(t){let o=(null==t?void 0:t[e])||r;return(0,n.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return o.scopeName=e,[function(r,o){let l=(0,n.createContext)(o),a=t.length;function i(r){let{scope:t,children:o,...i}=r,c=(null==t?void 0:t[e][a])||l,s=(0,n.useMemo)(()=>i,Object.values(i));return(0,n.createElement)(c.Provider,{value:s},o)}return t=[...t,o],i.displayName=r+"Provider",[i,function(t,i){let c=(null==i?void 0:i[e][a])||l,s=(0,n.useContext)(c);if(s)return s;if(void 0!==o)return o;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e),l=o[`__scope${n}`];return{...r,...l}},{});return(0,n.useMemo)(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(o,...r)]}(w),[S,C]=E(w),P=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,type:l="hover",dir:a,scrollHideDelay:c=600,...s}=e,[u,d]=(0,n.useState)(null),[p,h]=(0,n.useState)(null),[m,v]=(0,n.useState)(null),[g,w]=(0,n.useState)(null),[E,y]=(0,n.useState)(null),[C,P]=(0,n.useState)(0),[T,N]=(0,n.useState)(0),[R,A]=(0,n.useState)(!1),[x,_]=(0,n.useState)(!1),k=i(r,e=>d(e)),O=function(e){let r=(0,n.useContext)(b);return e||r||"ltr"}(a);return(0,n.createElement)(S,{scope:t,type:l,dir:O,scrollHideDelay:c,scrollArea:u,viewport:p,onViewportChange:h,content:m,onContentChange:v,scrollbarX:g,onScrollbarXChange:w,scrollbarXEnabled:R,onScrollbarXEnabledChange:A,scrollbarY:E,onScrollbarYChange:y,scrollbarYEnabled:x,onScrollbarYEnabledChange:_,onCornerWidthChange:P,onCornerHeightChange:N},(0,n.createElement)(f.div,(0,o.Z)({dir:O},s,{ref:k,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":T+"px",...e.style}})))}),T=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,children:l,...a}=e,c=C("ScrollAreaViewport",t),s=(0,n.useRef)(null),u=i(r,s,c.onViewportChange);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,n.createElement)(f.div,(0,o.Z)({"data-radix-scroll-area-viewport":""},a,{ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,n.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},l)))}),N="ScrollAreaScrollbar",R=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=C(N,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:c}=a,s="horizontal"===e.orientation;return(0,n.useEffect)(()=>(s?i(!0):c(!0),()=>{s?i(!1):c(!1)}),[s,i,c]),"hover"===a.type?(0,n.createElement)(A,(0,o.Z)({},l,{ref:r,forceMount:t})):"scroll"===a.type?(0,n.createElement)(x,(0,o.Z)({},l,{ref:r,forceMount:t})):"auto"===a.type?(0,n.createElement)(_,(0,o.Z)({},l,{ref:r,forceMount:t})):"always"===a.type?(0,n.createElement)(k,(0,o.Z)({},l,{ref:r})):null}),A=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=C(N,e.__scopeScrollArea),[i,c]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=a.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),c(!0)},n=()=>{r=window.setTimeout(()=>c(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",n)}}},[a.scrollArea,a.scrollHideDelay]),(0,n.createElement)(h,{present:t||i},(0,n.createElement)(_,(0,o.Z)({"data-state":i?"visible":"hidden"},l,{ref:r})))}),x=(0,n.forwardRef)((e,r)=>{var t;let{forceMount:l,...a}=e,i=C(N,e.__scopeScrollArea),c="horizontal"===e.orientation,s=q(()=>d("SCROLL_END"),100),[u,d]=(t={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,n.useReducer)((e,r)=>{let n=t[e][r];return null!=n?n:e},"hidden"));return(0,n.useEffect)(()=>{if("idle"===u){let e=window.setTimeout(()=>d("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,i.scrollHideDelay,d]),(0,n.useEffect)(()=>{let e=i.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],n=()=>{let n=e[r],o=t!==n;o&&(d("SCROLL"),s()),t=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[i.viewport,c,d,s]),(0,n.createElement)(h,{present:l||"hidden"!==u},(0,n.createElement)(k,(0,o.Z)({"data-state":"hidden"===u?"hidden":"visible"},a,{ref:r,onPointerEnter:g(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:g(e.onPointerLeave,()=>d("POINTER_LEAVE"))})))}),_=(0,n.forwardRef)((e,r)=>{let t=C(N,e.__scopeScrollArea),{forceMount:l,...a}=e,[i,c]=(0,n.useState)(!1),s="horizontal"===e.orientation,u=q(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;c(s?e:r)}},10);return G(t.viewport,u),G(t.content,u),(0,n.createElement)(h,{present:l||i},(0,n.createElement)(k,(0,o.Z)({"data-state":i?"visible":"hidden"},a,{ref:r})))}),k=(0,n.forwardRef)((e,r)=>{let{orientation:t="vertical",...l}=e,a=C(N,e.__scopeScrollArea),i=(0,n.useRef)(null),c=(0,n.useRef)(0),[s,u]=(0,n.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=Y(s.viewport,s.content),f={...l,sizes:s,onSizesChange:u,hasThumb:!!(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:e=>c.current=e};function p(e,r){return function(e,r,t,n="ltr"){let o=$(t),l=r||o/2,a=t.scrollbar.paddingStart+l,i=t.scrollbar.size-t.scrollbar.paddingEnd-(o-l),c=t.content-t.viewport,s=V([a,i],"ltr"===n?[0,c]:[-1*c,0]);return s(e)}(e,c.current,s,r)}return"horizontal"===t?(0,n.createElement)(O,(0,o.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollLeft,r=F(e,s,a.dir);i.current.style.transform=`translate3d(${r}px, 0, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=p(e,a.dir))}})):"vertical"===t?(0,n.createElement)(D,(0,o.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollTop,r=F(e,s);i.current.style.transform=`translate3d(0, ${r}px, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=p(e))}})):null}),O=(0,n.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...a}=e,c=C(N,e.__scopeScrollArea),[s,u]=(0,n.useState)(),d=(0,n.useRef)(null),f=i(r,d,c.onScrollbarXChange);return(0,n.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,n.createElement)(M,(0,o.Z)({"data-orientation":"horizontal"},a,{ref:f,sizes:t,style:{bottom:0,left:"rtl"===c.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===c.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":$(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(c.viewport){let n=c.viewport.scrollLeft+r.deltaX;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&c.viewport&&s&&l({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:X(s.paddingLeft),paddingEnd:X(s.paddingRight)}})}}))}),D=(0,n.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...a}=e,c=C(N,e.__scopeScrollArea),[s,u]=(0,n.useState)(),d=(0,n.useRef)(null),f=i(r,d,c.onScrollbarYChange);return(0,n.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,n.createElement)(M,(0,o.Z)({"data-orientation":"vertical"},a,{ref:f,sizes:t,style:{top:0,right:"ltr"===c.dir?0:void 0,left:"rtl"===c.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":$(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(c.viewport){let n=c.viewport.scrollTop+r.deltaY;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&c.viewport&&s&&l({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:X(s.paddingTop),paddingEnd:X(s.paddingBottom)}})}}))}),[L,z]=E(N),M=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,sizes:l,hasThumb:a,onThumbChange:c,onThumbPointerUp:s,onThumbPointerDown:u,onThumbPositionChange:d,onDragScroll:p,onWheelScroll:h,onResize:m,...b}=e,w=C(N,t),[E,y]=(0,n.useState)(null),S=i(r,e=>y(e)),P=(0,n.useRef)(null),T=(0,n.useRef)(""),R=w.viewport,A=l.content-l.viewport,x=v(h),_=v(d),k=q(m,10);function O(e){if(P.current){let r=e.clientX-P.current.left,t=e.clientY-P.current.top;p({x:r,y:t})}}return(0,n.useEffect)(()=>{let e=e=>{let r=e.target,t=null==E?void 0:E.contains(r);t&&x(e,A)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[R,E,A,x]),(0,n.useEffect)(_,[l,_]),G(E,k),G(w.content,k),(0,n.createElement)(L,{scope:t,scrollbar:E,hasThumb:a,onThumbChange:v(c),onThumbPointerUp:v(s),onThumbPositionChange:_,onThumbPointerDown:v(u)},(0,n.createElement)(f.div,(0,o.Z)({},b,{ref:S,style:{position:"absolute",...b.style},onPointerDown:g(e.onPointerDown,e=>{if(0===e.button){let r=e.target;r.setPointerCapture(e.pointerId),P.current=E.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",O(e)}}),onPointerMove:g(e.onPointerMove,O),onPointerUp:g(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=T.current,P.current=null})})))}),I="ScrollAreaThumb",H=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=z(I,e.__scopeScrollArea);return(0,n.createElement)(h,{present:t||a.hasThumb},(0,n.createElement)(U,(0,o.Z)({ref:r},l)))}),U=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,style:l,...a}=e,c=C(I,t),s=z(I,t),{onThumbPositionChange:u}=s,d=i(r,e=>s.onThumbChange(e)),p=(0,n.useRef)(),h=q(()=>{p.current&&(p.current(),p.current=void 0)},100);return(0,n.useEffect)(()=>{let e=c.viewport;if(e){let r=()=>{if(h(),!p.current){let r=B(e,u);p.current=r,u()}};return u(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[c.viewport,h,u]),(0,n.createElement)(f.div,(0,o.Z)({"data-state":s.hasThumb?"visible":"hidden"},a,{ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:g(e.onPointerDownCapture,e=>{let r=e.target,t=r.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;s.onThumbPointerDown({x:n,y:o})}),onPointerUp:g(e.onPointerUp,s.onThumbPointerUp)}))}),Z="ScrollAreaCorner",j=(0,n.forwardRef)((e,r)=>{let t=C(Z,e.__scopeScrollArea),l=!!(t.scrollbarX&&t.scrollbarY),a="scroll"!==t.type&&l;return a?(0,n.createElement)(W,(0,o.Z)({},e,{ref:r})):null}),W=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,...l}=e,a=C(Z,t),[i,c]=(0,n.useState)(0),[s,u]=(0,n.useState)(0);return G(a.scrollbarX,()=>{var e;let r=(null===(e=a.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;a.onCornerHeightChange(r),u(r)}),G(a.scrollbarY,()=>{var e;let r=(null===(e=a.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;a.onCornerWidthChange(r),c(r)}),i&&s?(0,n.createElement)(f.div,(0,o.Z)({},l,{ref:r,style:{width:i,height:s,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}})):null});function X(e){return e?parseInt(e,10):0}function Y(e,r){let t=e/r;return isNaN(t)?0:t}function $(e){let r=Y(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-t)*r;return Math.max(n,18)}function F(e,r,t="ltr"){let n=$(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-o,a=r.content-r.viewport,i="ltr"===t?[0,a]:[-1*a,0],c=function(e,[r,t]){return Math.min(t,Math.max(r,e))}(e,i),s=V([0,a],[0,l-n]);return s(c)}function V(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let n=(r[1]-r[0])/(e[1]-e[0]);return r[0]+n*(t-e[0])}}let B=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},a=t.left!==l.left,i=t.top!==l.top;(a||i)&&r(),t=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function q(e,r){let t=v(e),o=(0,n.useRef)(0);return(0,n.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,n.useCallback)(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(t,r)},[t,r])}function G(e,r){let t=v(r);p(()=>{let r=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}var J=t(5920),K=t(7818),Q=t(6817),ee=t(6768),er=t(8404),et=(0,Q.k)((e,{scrollbarSize:r,offsetScrollbars:t,scrollbarHovered:n,hidden:o})=>({root:{overflow:"hidden"},viewport:{width:"100%",height:"100%",paddingRight:t?(0,ee.h)(r):void 0,paddingBottom:t?(0,ee.h)(r):void 0},scrollbar:{display:o?"none":"flex",userSelect:"none",touchAction:"none",boxSizing:"border-box",padding:`calc(${(0,ee.h)(r)}  / 5)`,transition:"background-color 150ms ease, opacity 150ms ease","&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],[`& .${(0,er.A)("thumb")}`]:{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.white,.5):e.fn.rgba(e.black,.5)}},'&[data-orientation="vertical"]':{width:(0,ee.h)(r)},'&[data-orientation="horizontal"]':{flexDirection:"column",height:(0,ee.h)(r)},'&[data-state="hidden"]':{display:"none",opacity:0}},thumb:{ref:(0,er.A)("thumb"),flex:1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.white,.4):e.fn.rgba(e.black,.4),borderRadius:(0,ee.h)(r),position:"relative",transition:"background-color 150ms ease",display:o?"none":void 0,overflow:"hidden","&::before":{content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%",minWidth:(0,ee.h)(44),minHeight:(0,ee.h)(44)}},corner:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],transition:"opacity 150ms ease",opacity:n?1:0,display:o?"none":void 0}})),en=t(4523),eo=Object.defineProperty,el=Object.defineProperties,ea=Object.getOwnPropertyDescriptors,ei=Object.getOwnPropertySymbols,ec=Object.prototype.hasOwnProperty,es=Object.prototype.propertyIsEnumerable,eu=(e,r,t)=>r in e?eo(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ed=(e,r)=>{for(var t in r||(r={}))ec.call(r,t)&&eu(e,t,r[t]);if(ei)for(var t of ei(r))es.call(r,t)&&eu(e,t,r[t]);return e},ef=(e,r)=>el(e,ea(r)),ep=(e,r)=>{var t={};for(var n in e)ec.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&ei)for(var n of ei(e))0>r.indexOf(n)&&es.call(e,n)&&(t[n]=e[n]);return t};let eh={scrollbarSize:12,scrollHideDelay:1e3,type:"hover",offsetScrollbars:!1},em=(0,n.forwardRef)((e,r)=>{let t=(0,J.N4)("ScrollArea",eh,e),{children:o,className:l,classNames:a,styles:i,scrollbarSize:c,scrollHideDelay:s,type:u,dir:d,offsetScrollbars:f,viewportRef:p,onScrollPositionChange:h,unstyled:m,variant:v,viewportProps:b}=t,g=ep(t,["children","className","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","variant","viewportProps"]),[w,E]=(0,n.useState)(!1),y=(0,J.rZ)(),{classes:S,cx:C}=et({scrollbarSize:c,offsetScrollbars:f,scrollbarHovered:w,hidden:"never"===u},{name:"ScrollArea",classNames:a,styles:i,unstyled:m,variant:v});return n.createElement(P,{type:"never"===u?"always":u,scrollHideDelay:s,dir:d||y.dir,ref:r,asChild:!0},n.createElement(en.x,ed({className:C(S.root,l)},g),n.createElement(T,ef(ed({},b),{className:S.viewport,ref:p,onScroll:"function"==typeof h?({currentTarget:e})=>h({x:e.scrollLeft,y:e.scrollTop}):void 0}),o),n.createElement(R,{orientation:"horizontal",className:S.scrollbar,forceMount:!0,onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1)},n.createElement(H,{className:S.thumb})),n.createElement(R,{orientation:"vertical",className:S.scrollbar,forceMount:!0,onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1)},n.createElement(H,{className:S.thumb})),n.createElement(j,{className:S.corner})))}),ev=(0,n.forwardRef)((e,r)=>{let t=(0,J.N4)("ScrollAreaAutosize",eh,e),{children:o,classNames:l,styles:a,scrollbarSize:i,scrollHideDelay:c,type:s,dir:u,offsetScrollbars:d,viewportRef:f,onScrollPositionChange:p,unstyled:h,sx:m,variant:v,viewportProps:b}=t,g=ep(t,["children","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","sx","variant","viewportProps"]);return n.createElement(en.x,ef(ed({},g),{ref:r,sx:[{display:"flex"},...(0,K.R)(m)]}),n.createElement(en.x,{sx:{display:"flex",flexDirection:"column",flex:1}},n.createElement(em,{classNames:l,styles:a,scrollHideDelay:c,scrollbarSize:i,type:s,dir:u,offsetScrollbars:d,viewportRef:f,onScrollPositionChange:p,unstyled:h,variant:v,viewportProps:b},o)))});ev.displayName="@mantine/core/ScrollAreaAutosize",em.displayName="@mantine/core/ScrollArea",em.Autosize=ev;let eb=em},5851:function(e,r,t){t.d(r,{C:function(){return o}});var n=t(7294);function o({value:e,defaultValue:r,finalValue:t,onChange:o=()=>{}}){let[l,a]=(0,n.useState)(void 0!==r?r:t);return void 0!==e?[e,o,!0]:[l,e=>{a(e),null==o||o(e)},!1]}},8404:function(e,r,t){t.d(r,{A:function(){return n}});function n(e){return`___ref-${e||""}`}},8216:function(e,r,t){t.d(r,{R:function(){return o}});var n=t(7294);function o(e){let r=(0,n.createContext)(null);return[({children:e,value:t})=>n.createElement(r.Provider,{value:t},e),()=>{let t=(0,n.useContext)(r);if(null===t)throw Error(e);return t}]}},1151:function(e,r,t){t.d(r,{R:function(){return o}});var n=t(8523);function o({parentSelector:e,siblingSelector:r,onKeyDown:t,loop:o=!0,activateOnFocus:l=!1,dir:a="rtl",orientation:i}){return c=>{var s;null==t||t(c);let u=Array.from((null==(s=(0,n.p)(c.currentTarget,e))?void 0:s.querySelectorAll(r))||[]).filter(r=>{var t;return t=c.currentTarget,(0,n.p)(t,e)===(0,n.p)(r,e)}),d=u.findIndex(e=>c.currentTarget===e),f=function(e,r,t){for(let t=e+1;t<r.length;t+=1)if(!r[t].disabled)return t;if(t){for(let e=0;e<r.length;e+=1)if(!r[e].disabled)return e}return e}(d,u,o),p=function(e,r,t){for(let t=e-1;t>=0;t-=1)if(!r[t].disabled)return t;if(t){for(let e=r.length-1;e>-1;e-=1)if(!r[e].disabled)return e}return e}(d,u,o),h="rtl"===a?p:f,m="rtl"===a?f:p;switch(c.key){case"ArrowRight":"horizontal"===i&&(c.stopPropagation(),c.preventDefault(),u[h].focus(),l&&u[h].click());break;case"ArrowLeft":"horizontal"===i&&(c.stopPropagation(),c.preventDefault(),u[m].focus(),l&&u[m].click());break;case"ArrowUp":"vertical"===i&&(c.stopPropagation(),c.preventDefault(),u[p].focus(),l&&u[p].click());break;case"ArrowDown":"vertical"===i&&(c.stopPropagation(),c.preventDefault(),u[f].focus(),l&&u[f].click());break;case"Home":c.stopPropagation(),c.preventDefault(),u[0].disabled||u[0].focus();break;case"End":{c.stopPropagation(),c.preventDefault();let e=u.length-1;u[e].disabled||u[e].focus()}}}}},8523:function(e,r,t){t.d(r,{p:function(){return n}});function n(e,r){let t=e;for(;(t=t.parentElement)&&!t.matches(r););return t}}}]);
//# sourceMappingURL=2474-878b22ac00e245d5.js.map