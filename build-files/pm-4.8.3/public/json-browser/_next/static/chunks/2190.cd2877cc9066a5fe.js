"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2190],{2190:function(e,n,t){t.r(n),t.d(n,{JsonEditor:function(){return p},default:function(){return w}});var s=t(2729),o=t(5893),a=t(7294),i=t(5437),r=t(3764),l=t(1322),u=t(6598),c=t(6415);function d(){let e=(0,s._)(["\n  display: grid;\n  height: calc(100vh - 63px);\n  grid-template-columns: 100%;\n  grid-template-rows: minmax(0, 1fr);\n"]);return d=function(){return e},e}r._m.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs"}});let f={formatOnPaste:!0,formatOnType:!0,minimap:{enabled:!1}},g=i.ZP.div.withConfig({componentId:"sc-f2c16ee7-0"})(d()),h=()=>{let e=(0,r.Ik)(),n=(0,u.Z)(e=>e.contents),t=(0,u.Z)(e=>e.setContents),s=(0,u.Z)(e=>e.setError),i=(0,u.Z)(e=>e.jsonSchema),d=(0,u.Z)(e=>e.getHasChanges),h=(0,c.Z)(e=>e.lightmode?"light":"vs-dark"),m=(0,u.Z)(e=>e.format);return a.useEffect(()=>{null==e||e.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!0,...i&&{schemas:[{fileMatch:["*"],schema:i}]}})},[i,null==e?void 0:e.languages.json.jsonDefaults]),a.useEffect(()=>{let e=e=>{if(d()){let n="Unsaved changes, if you leave before saving  your changes will be lost";return(e||window.event).returnValue=n,n}};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[d]),(0,o.jsx)(g,{children:(0,o.jsx)(r.ZP,{height:"100%",language:m,theme:h,value:n,options:f,onValidate:e=>{var n;return s(null===(n=e[0])||void 0===n?void 0:n.message)},onChange:e=>t({contents:e,skipUpdate:!0}),loading:(0,o.jsx)(l.g,{message:"Loading Editor..."})})})};function m(){let e=(0,s._)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  user-select: none;\n"]);return m=function(){return e},e}let v=i.ZP.div.withConfig({componentId:"sc-a4064993-0"})(m()),p=()=>(0,o.jsx)(v,{children:(0,o.jsx)(h,{})});var w=p}}]);
//# sourceMappingURL=2190.cd2877cc9066a5fe.js.map