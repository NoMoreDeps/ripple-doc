"use strict";(self.webpackChunkripple=self.webpackChunkripple||[]).push([[7140],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),l=a(7294),r=a(6010),o=a(2466),i=a(6550),s=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,p]=b({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,r]),tabValues:r}}var g=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},l.createElement(k,(0,n.Z)({},e,t)),l.createElement(f,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return l.createElement(v,(0,n.Z)({key:String(t)},e))}},7263:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(4866),r=a(5162),o=a(7693);function i(e){return n.createElement(l.Z,null,e.items.map(((t,a)=>{let{label:l,code:i,language:s,ms:p,maxHeight:u}=t;return n.createElement(r.Z,{value:`v-${a}`,label:l},n.createElement("div",{style:{maxHeight:u||"",overflowY:"auto",border:"0px solid red"}},n.createElement(o.Z,{metastring:`{${p}}`,language:s,showLineNumbers:e.lineNumbers},`${atob(i)}`)))})))}},4591:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),r=a(7263);const o={sidebar_position:2},i="Ripple Lake",s={unversionedId:"Ripple123/Ripple-Lake",id:"Ripple123/Ripple-Lake",title:"Ripple Lake",description:"To be able to use a ripple inside your component, you need to declare it in a ripple Lake.",source:"@site/docs/Ripple123/02-Ripple-Lake.mdx",sourceDirName:"Ripple123",slug:"/Ripple123/Ripple-Lake",permalink:"/docs/Ripple123/Ripple-Lake",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Concept",permalink:"/docs/Ripple123/Concept"},next:{title:"Deep dive into ripples",permalink:"/docs/Ripple123/Deep-Dive"}},p={},u=[{value:"Lake as repository",id:"lake-as-repository",level:3},{value:"Using inside components",id:"using-inside-components",level:3}],c={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ripple-lake"},"Ripple Lake"),(0,l.kt)("p",null,"To be able to use a ",(0,l.kt)("inlineCode",{parentName:"p"},"ripple")," inside your component, you need to declare it in a ",(0,l.kt)("inlineCode",{parentName:"p"},"ripple")," Lake.\nYou can create as many lakes as you want. Start by creating a new file in your project, for example ",(0,l.kt)("inlineCode",{parentName:"p"},"ripple-lake.ts"),";"),(0,l.kt)(r.Z,{lineNumbers:!0,items:[{label:"ripple-lake.ts",language:"tsx",ms:"1",code:"aW1wb3J0IHsgY3JlYXRlUmlwcGxlcyB9IGZyb20gIkBtLWMyL3JpcHBsZSI7"}],mdxType:"Code"}),(0,l.kt)("p",null,"To initialize a Lake just call the ",(0,l.kt)("inlineCode",{parentName:"p"},"createRipples")," and add all the ripples you want to use:"),(0,l.kt)(r.Z,{lineNumbers:!0,items:[{label:"Lake definition",language:"tsx",ms:"12-15,18,20",code:"Ly8gUmlwcGxlIGRlZmluaXRpb24KY29uc3QgZ2xvYmFsUmlwcGxlID0gewogIHZhbHVlMTogInZhbHVlMSIKfTsKCi8vIE90aGVyIHJpcHBsZSBkZWZpbml0aW9uCmNvbnN0IHJpcHBsZTEgPSB7CiAgdmFsdWUxOiAidmFsdWUxIgp9OwoKLy8gTGFrZSBkZWZpbml0aW9uCmNvbnN0IFtob29rcywgc2VydmljZXNdID0gY3JlYXRlUmlwcGxlcyh7CiAgZ2xvYmFsUmlwcGxlLAogIHJpcHBsZTEKfSk7CgovLyBFeHBvcnQgdGhlIGhvb2tzCmV4cG9ydCBjb25zdCByaXBwbGVIb29rcyAgICA9IGhvb2tzOwovLyBFeHBvcnQgdGhlIHNlcnZpY2VzCmV4cG9ydCBjb25zdCByaXBwbGVTZXJ2aWNlcyA9IHNlcnZpY2VzOw=="}],mdxType:"Code"}),(0,l.kt)("h3",{id:"lake-as-repository"},"Lake as repository"),(0,l.kt)("p",null,"A lake is a conceptual word to define a repository of data, I like to call it lake as all the ripples belongs to it.\nThen you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"rippleHooks")," in your components, and ",(0,l.kt)("inlineCode",{parentName:"p"},"rippleServices")," from outside the components:"),(0,l.kt)("p",null,"The method ",(0,l.kt)("inlineCode",{parentName:"p"},"createRipples")," returns an array of two elements, the first one is the ",(0,l.kt)("inlineCode",{parentName:"p"},"hooks")," and the second one is the ",(0,l.kt)("inlineCode",{parentName:"p"},"external updaters"),".\nHooks is an object that will contain as many hooks as ripples you have declared."),(0,l.kt)("p",null,"Updaters is an object that will contain as many updaters as ripples you have declared.\nThe updaters are functions that will allow you to update the ripples from anywhere in your code."),(0,l.kt)("p",null,"Thanks to typescript advance types, the hooks will be typed with the ripple type automatically.\nFor example here ",(0,l.kt)("inlineCode",{parentName:"p"},"Hooks")," will have this type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'type THookUpdateAction = void | "restore" | "reset" | "replace";\ntype TRipple = ReturnType<typeof useGlobalRipple>\n{\n  useGlobalRipple: () => [\n    ripple: { value1: string },\n    setRipple: <T extends TRipple>(action: THookUpdateAction, replacedValue ?: T) => void) => void\n  ];\n  useRipple1: () =>  [\n    ripple: { value1: string },\n    setRipple: <T extends TRipple>(action: THookUpdateAction, replacedValue ?: T) => void) => void\n  ];;\n}\n')),(0,l.kt)("p",null,"and the ",(0,l.kt)("inlineCode",{parentName:"p"},"services")," will have this type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'type TAction<T> = void | "restore" | "reset" | T;\n{\n  setGlobalRipple: <T extends typeof globalRipple>(void | (ripple: T) => TAction<T>) => T;\n  setRipple1:  <T extends typeof ripple1>(void | (ripple: T) => TAction<T>) => T;\n}\n')),(0,l.kt)("h3",{id:"using-inside-components"},"Using inside components"),(0,l.kt)(r.Z,{lineNumbers:!0,items:[{label:"component-one.ts",language:"tsx",ms:"5,7",code:"aW1wb3J0IHsgcmlwcGxlSG9va3MgfSBmcm9tICIuL3JpcHBsZS1sYWtlIjsKY29uc3QgeyB1c2VHbG9iYWxSaXBwbGUgfSA9IHJpcHBsZUhvb2tzOwoKY29uc3QgQ29tcG9uZW50T25lID0gKCkgPT4gewogIGNvbnN0IFtnbG9iYWxSaXBwbGUsIHNldEdsb2JhbFJpcHBsZSA9IHVzZUdsb2JhbFJpcHBsZSgpOwoKICByZXR1cm4gPGRpdj57Z2xvYmFsUmlwcGxlLnZhbHVlMX08L2Rpdj47Cn07"}],mdxType:"Code"}),(0,l.kt)("p",null,"You can also destructure the hooks directly in the component declaration:"),(0,l.kt)(r.Z,{lineNumbers:!0,items:[{label:"component-one.ts",language:"tsx",ms:"5,6,8",code:"aW1wb3J0IHsgcmlwcGxlSG9va3MgfSBmcm9tICIuL3JpcHBsZS1sYWtlIjsKY29uc3QgeyB1c2VHbG9iYWxSaXBwbGUgfSA9IHJpcHBsZUhvb2tzOwoKY29uc3QgQ29tcG9uZW50T25lID0gKCkgPT4gewogIGNvbnN0IFtnbG9iYWxSaXBwbGUsIHNldEdsb2JhbFJpcHBsZSA9IHVzZUdsb2JhbFJpcHBsZSgpOwogIGNvbnN0IHsgdmFsdWUxIH0gPSBnbG9iYWxSaXBwbGU7CgogIHJldHVybiA8ZGl2Pnt2YWx1ZTF9PC9kaXY+Owp9Ow=="}],mdxType:"Code"}),(0,l.kt)("p",null,"Now each time you update the ",(0,l.kt)("inlineCode",{parentName:"p"},"globalRipple")," from any component or anywhere outside React, all the components that use it will be updated.\nThis simplify the refresh of the data without the need to register for any update. Only the visible components that use the hook will be updated."))}m.isMDXComponent=!0}}]);