const __vite__fileDeps=["./index-qQtDM4ux.js","./index-FrIFnopS.js","./index-7VCsvXxJ.js","./iframe-D9PohAss.js","./index-DGmgdvwj.js","./index-DXimoRZY.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as d}from"./iframe-D9PohAss.js";import{r as h,R as o,d as u,C as E,A as R,H as x,D as y}from"./index-7VCsvXxJ.js";import"../sb-preview/runtime.js";import"./index-DGmgdvwj.js";import"./index-DXimoRZY.js";import"./index-DrFu-skq.js";var i={},m=h;i.createRoot=m.createRoot,i.hydrateRoot=m.hydrateRoot;var n=new Map,D=({callback:e,children:t})=>{let r=u.useRef();return u.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},v=async(e,t,r)=>{let s=await _(t,r);return new Promise(a=>{s.render(o.createElement(D,{callback:()=>a(null)},e))})},w=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},_=async(e,t)=>{let r=n.get(e);return r||(r=i.createRoot(e,t),n.set(e,r)),r},f={code:E,a:R,...x},g=class extends u.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},O=class{constructor(){this.render=async(e,t,r)=>{let s={...f,...t==null?void 0:t.components},a=y;return new Promise((p,l)=>{d(async()=>{const{MDXProvider:c}=await import("./index-qQtDM4ux.js");return{MDXProvider:c}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({MDXProvider:c})=>v(o.createElement(g,{showException:l,key:Math.random()},o.createElement(c,{components:s},o.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>p())})},this.unmount=e=>{w(e)}}};export{O as DocsRenderer,f as defaultComponents};
