import{j as e,r as n}from"./react-CCZ4VI8N.js";import{c as V}from"./react-dom-B1PdBMd8.js";import{L as x,B as _}from"./react-router-dom-D0MREyk-.js";import{a as p}from"./axios-B6xwUs71.js";import{P as U}from"./reactjs-popup-CjBY4_yL.js";import{r as M}from"./@material-tailwind-CwG3tc6j.js";import{F as G,a as K}from"./react-icons-DeI0bBnv.js";import{a as X,d as Z,e as N}from"./react-router-mZzaoKLi.js";import"./@emotion-DbSep2O-.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-B-RBrVrq.js";import"./classnames-BarBPuyi.js";import"./tailwind-merge-BXtt6hLZ.js";import"./prop-types-BKNjMPK8.js";import"./deepmerge-MrQlWjp6.js";import"./framer-motion-C7hpdiHZ.js";import"./tslib-Bng4S8pS.js";import"./hey-listen-KE_C_eS6.js";import"./style-value-types-Pspc_Zm6.js";import"./popmotion-BpL6IzX4.js";import"./framesync-BCkQ-MAm.js";import"./@motionone-Bf0-cPdO.js";import"./material-ripple-effects-BS6XNNYc.js";import"./@floating-ui-B7TgxVqg.js";import"./aria-hidden-DQ5UC2Eg.js";import"./tabbable-CjV0_wFH.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))g(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&g(a)}).observe(document,{childList:!0,subtree:!0});function l(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function g(o){if(o.ep)return;o.ep=!0;const i=l(o);fetch(o.href,i)}})();const z=({id:t,title:d,content:l,open:g,handleOpen:o})=>{const i=({id:a,open:m})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:`${a===m?"rotate-180":""} h-5 w-5 transition-transform`,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})});return e.jsxs(M.Accordion,{open:g===t,icon:e.jsx(i,{id:t,open:g}),children:[e.jsx(M.AccordionHeader,{onClick:()=>o(t),children:d}),e.jsx(M.AccordionBody,{children:l})]})};function ee(){const[t,d]=n.useState(0),[l,g]=n.useState([]),[o,i]=n.useState(""),[a,m]=n.useState(""),[k,E]=n.useState(""),[j,R]=n.useState(""),[S,C]=n.useState(""),[v,O]=n.useState(""),[L,F]=n.useState(""),[I,A]=n.useState(""),[f,w]=n.useState([{name:"",quantity:""}]),[s,u]=n.useState(""),[T,D]=n.useState([]);n.useEffect(()=>{p.get("http://localhost:4000/recipes").then(r=>{g(r.data)}).catch(r=>console.error("Error fetching recipes:",r))},[]);const B=(r,c,h)=>{const b=[...f];b[r][c]=h,w(b)},J=()=>{w([...f,{name:"",quantity:""}])},H=r=>{const c=f.filter((h,b)=>b!==r);w(c)},W=()=>{if(!o||!a||!k||!j||!S||!v||!L||!I||f.some(c=>!c.name||!c.quantity)){alert("Please fill out all fields correctly.");return}const r={name:o,category:a,instructions:k,prepTime:parseInt(j),cookTime:parseInt(S),servings:parseInt(v),author:L,imageUrl:I,ingredients:f};p.post("http://localhost:4000/recipes",r).then(c=>{g([c.data,...l]),D([c.data,...l]),Y(),d(0)}).catch(c=>console.error("Error adding recipe:",c))},Y=()=>{i(""),m(""),E(""),R(""),C(""),O(""),F(""),A(""),w([{name:"",quantity:""}])},y=(r,c,h,b="text")=>e.jsx("input",{type:b,placeholder:r,value:c,onChange:q=>h(q.target.value),className:"justify-items-center text-center w-40 rounded-full border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"}),P=r=>{d(t===r?0:r)},$=async r=>{r.preventDefault();const c=l.filter(h=>h.name.toLowerCase().includes(s.toLowerCase()));D(c)},Q=r=>{const c=l.filter(h=>h.category.toLowerCase()===r.toLowerCase());D(c)};return e.jsxs("div",{className:"grid mt-2 bg-sky-900 text-center justify-center items-center text-gray-700 bg-white shadow-md w-full  rounded-xl bg-clip-border",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Recipe List"}),e.jsxs("div",{className:"w-full flex flex-col items-center mb-4",children:[e.jsx(z,{id:1,title:"Add recipe",content:e.jsxs("div",{className:"mb-4",children:[y("Name",o,i),y("Category",a,m),y("Prep Time",j,R,"number"),y("Cook Time",S,C,"number"),y("Servings",v,O,"number"),y("Author",L,F),y("Image URL",I,A),e.jsx("textarea",{placeholder:"Instructions",value:k,onChange:r=>E(r.target.value),className:"justify-items-center text-center w-full rounded-xl border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"}),e.jsx("h3",{className:"font-bold mb-2",children:"Ingredients"}),f.map((r,c)=>e.jsxs("div",{className:"mb-2",children:[y("Ingredient Name",r.name,h=>B(c,"name",h)),y("Quantity",r.quantity,h=>B(c,"quantity",h)),e.jsx("button",{onClick:()=>H(c),className:"w-60 h-10 me-2 mb-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-red-500 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Remove"})]},c)),e.jsx("button",{onClick:J,className:"w-60 h-10 me-2 mb-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Add Ingredient"}),e.jsx("button",{onClick:W,className:"w-60 h-10 text-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Add Recipe"})]}),open:t,handleOpen:P}),e.jsx(z,{id:2,title:"Search recipe",content:e.jsx("div",{className:"bg-sky-900 justify-center items-center w-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:e.jsxs("form",{onSubmit:$,children:[e.jsx("input",{placeholder:"Search recipe",value:s,onChange:r=>u(r.target.value),className:"justify-items-center text-center w-full rounded-full mt-5 border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}),e.jsx("button",{className:"w-60 h-10 me-2 mb-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Search"})]})}),open:t,handleOpen:P}),e.jsx(z,{id:3,title:"Filter by category:",content:["Soup","Main food","Dessert","Lunch","Dinner","Meal food","Vegan","Pasta","Salad","Cake","Breakfast"].map(r=>e.jsx("button",{onClick:()=>Q(r),className:"justify-items-center py-2.5 h-full w-96 text-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:r},r)),open:t,handleOpen:P})]}),e.jsx("div",{children:e.jsx("div",{className:"grid",children:e.jsx("ul",{className:"grid grid-cols-3",children:T.map((r,c)=>e.jsxs("li",{className:"grid mt-2 bg-sky-900 justify-items-center text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border",children:[e.jsx("h2",{className:"text-xl font-bold",children:r.name}),e.jsxs("p",{children:["Category: ",r.category]}),e.jsx("div",{children:e.jsx("img",{src:r.imageUrl,alt:r.name,className:"w-40 h-40 justify-items-center object-cover"})}),e.jsxs("div",{children:[e.jsxs("p",{children:["Prep Time: ",r.prepTime," minutes"]}),e.jsxs("p",{children:["Cook Time: ",r.cookTime," minutes"]}),e.jsxs("p",{children:["Servings : ",r.servings]}),e.jsxs("p",{children:["Author : ",r.author]})]}),e.jsx(U,{trigger:e.jsx("button",{className:"w-60 h-10 mt-2 mb-5 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Show Recipe"}),modal:!0,children:h=>e.jsxs("div",{className:"overflow-scroll",children:[e.jsx("button",{onClick:h,className:"absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsxs("div",{className:"mb-2",children:[e.jsx("h3",{className:"font-bold",children:"Ingredients : "}),e.jsx("ul",{className:"list-disc list-inside",children:r.ingredients.map((b,q)=>e.jsxs("li",{children:[b.quantity," ",b.name]},q))})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("h3",{className:"font-bold",children:"Instructions : "}),e.jsx("p",{children:r.instructions})]})]})})]},c))})})})]})}function re(){const[t,d]=n.useState(!1),l=()=>{d(!t)};return e.jsxs("nav",{className:"bg-cyan-950 font-sans py-4",children:[e.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[e.jsx(x,{to:"/",className:"text-white text-2xl font-bold",children:"FoodApp"}),e.jsxs("div",{className:"hidden md:flex space-x-4",children:[e.jsx(x,{to:"/getrecipe",className:"text-white hover:text-gray-300",children:"Search Recipe"}),e.jsx(x,{to:"/shop-list",className:"text-white hover:text-gray-300",children:"Shop List"}),e.jsx(x,{to:"/supplies",className:"text-white hover:text-gray-300",children:"Supplies"})]}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{onClick:l,className:"text-white focus:outline-none",children:t?e.jsx(G,{size:24}):e.jsx(K,{size:24})})})]}),t&&e.jsx("div",{className:"md:hidden",children:e.jsxs("ul",{className:"flex flex-col items-center space-y-4 py-4",children:[e.jsx("li",{children:e.jsx(x,{to:"/getrecipe",className:"text-white hover:text-gray-300",onClick:l,children:"Search Recipe"})}),e.jsx("li",{children:e.jsx(x,{to:"/shop-list",className:"text-white hover:text-gray-300",onClick:l,children:"Shop List"})}),e.jsx("li",{children:e.jsx(x,{to:"/supplies",className:"text-white hover:text-gray-300",onClick:l,children:"Supplies"})})]})})]})}const te=()=>{const[t,d]=n.useState([]),[l,g]=n.useState("");n.useEffect(()=>{p.get("http://localhost:4000/tasks").then(a=>d(a.data)).catch(a=>console.error("Error fetching tasks:",a))},[]);const o=()=>{p.post("http://localhost:4000/tasks",{text:l}).then(a=>d([a.data,...t])).catch(a=>console.error("Error adding task:",a)),g("")},i=a=>{p.delete(`http://localhost:4000/tasks/${a}`).then(()=>d(t.filter(m=>m.text!==a))).catch(m=>console.error("Error deleting task:",m))};return e.jsx("div",{className:"grid justify-items-center mt-5",children:e.jsxs("div",{className:"mt-2 bg-sky-900 justify-center items-center text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border",children:[e.jsx("h1",{className:"mt-2 text-cyan text-2xl text-center font-bold mb-3",children:"Shopping List "}),e.jsxs("div",{className:"flex justify-center mt-2 min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700",children:[e.jsx("input",{className:"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:l,onChange:a=>g(a.target.value)}),e.jsx("button",{className:"py-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",onClick:o,children:"Add Task"}),e.jsx("ul",{children:t.map(a=>e.jsxs("li",{className:"list-inside flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:[a.text,"   ",e.jsx("button",{className:"py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",onClick:()=>i(a.text),children:"Delete"})]},a._id))})]})]})})},se=()=>{const[t,d]=n.useState([]),[l,g]=n.useState(""),[o,i]=n.useState(""),[a,m]=n.useState(""),[k,E]=n.useState(0),[j,R]=n.useState(0),[S,C]=n.useState([]),[v,O]=n.useState("");n.useEffect(()=>{p.get("http://localhost:4000/stores").then(s=>{d(s.data)}).catch(s=>console.error("Error fetching stores:",s))});const L=()=>{p.post("http://localhost:4000/stores",{category:o,name:l,quantity:parseInt(a,10)}).then(s=>d([s.data,...t])).catch(s=>console.error("Error adding supplies:",s)),i(""),g(""),m("")},F=s=>{p.delete(`http://localhost:4000/stores/${s}`).then(()=>setTodo(todo.filter(u=>u.name!==s))).catch(u=>console.error("Error deleting supplies:",u))},I=s=>E(k===s?0:s),A=s=>R(j===s?0:s),f=s=>{const u=t.filter(T=>T.category.toLowerCase()===s.toLowerCase());C(u)},w=async s=>{s.preventDefault();const u=t.filter(T=>T.name.toLowerCase().includes(v.toLowerCase()));C(u)};return e.jsxs("div",{className:"grid grid-row-2 text-center justify-items-center mt-5",children:[e.jsx(z,{id:1,title:"Search",content:e.jsxs("div",{children:[e.jsxs("form",{onSubmit:w,children:[e.jsx("input",{placeholder:"Search supply",value:v,onChange:s=>O(s.target.value),className:"justify-items-center text-center w-full rounded-full border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}),e.jsx("button",{className:"justify-items-center h-10 w-full text-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Search"})]}),e.jsx(z,{id:3,title:"Filter",content:e.jsx("div",{children:["Fish","Dairy","Fruit","Vegetables","Meal"].map(s=>e.jsx("button",{onClick:()=>f(s),className:"justify-items-center py-2.5 h-full w-96 text-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:s},s))}),open:j,handleOpen:A})]}),open:k,handleOpen:I}),e.jsxs("div",{className:"w-full h-full",children:[e.jsx("h3",{className:"text-center",children:"My storage"}),e.jsx(U,{trigger:e.jsx("div",{className:"object-left  w-16 h-16",children:e.jsx("button",{className:"h-full object-left w-16 text-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"+"})}),modal:!0,nested:!0,children:s=>e.jsxs("div",{className:"w-full h-96 grid",children:[e.jsx("button",{className:"absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none",onClick:s,children:"x"}),e.jsx("p",{className:"text-cyan text-xl text-center",children:"Category :"}),e.jsx("input",{className:"justify-items-center w-full rounded-full border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:o,onChange:u=>i(u.target.value)}),e.jsx("p",{className:"text-cyan text-xl text-center",children:"Name :"}),e.jsx("input",{className:"justify-items-center w-full rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:l,onChange:u=>g(u.target.value)}),e.jsx("p",{className:"text-cyan text-xl text-center",children:"How many :"}),e.jsx("input",{className:"justify-items-center w-full rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:a,onChange:u=>m(u.target.value)}),e.jsx("br",{}),e.jsx("button",{className:"justify-items-center mt-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",onClick:L,children:"Add Supply"})]})}),e.jsx("ul",{className:"items-center w-full h-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:S.map((s,u)=>e.jsx("li",{children:e.jsxs("div",{className:"grid grid-cols-5 gap-5 w-50 h-16 text-center mt-2 bg-sky-900 justify-center items-center text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:[e.jsxs("div",{className:"mt-2 bg-sky-900 justify-center items-center text-center text-gray-700 bg-white w-30 h-30 rounded-xl bg-clip-border",children:[s.name,e.jsx("br",{})]}),e.jsx("div",{className:"grid justify-items-center",children:e.jsx("button",{className:"justify-items-center w-5 h-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"-"})}),e.jsx("div",{className:"text-center w-30 h-30",children:s.quantity}),e.jsx("div",{className:"grid justify-items-center",children:e.jsx("button",{className:"justify-items-center rounded-full w-5 h-5 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"+"})}),e.jsx("button",{onClick:()=>F(s.name),className:"mr-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Delete"})]})},u))})]})]})},ae="/assets/welomefood-DD3JdJTC.jpg";function oe(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-2 mt-2",children:[e.jsx("div",{className:"h-50 w-50",children:e.jsx("img",{src:ae,alt:"food",className:"w-6/6 mt-2 rounded-lg"})}),e.jsx("div",{className:"flex items-center justify-center h-50 w-50",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-5xl ml-2 font-sans text-center text-cyan-900/100",children:"Welcome"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("p",{className:"text-2xl ml-2 font-sans text-center text-cyan-900/100",children:["People who love to eat are always the best people.",e.jsx("br",{}),"- Julia Child"]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"grid items-center justify-center grid-cols-2",children:[e.jsx(x,{to:"/sign",className:"text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Sing In"}),e.jsx(x,{to:"/login",className:"text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Log In"})]})]})})]})})}function ne(){const[t,d]=n.useState({name:"",email:"",password:""}),l=X(),g=i=>{d({...t,[i.target.name]:i.target.value})},o=async i=>{i.preventDefault();try{const m=await(await fetch("http://localhost:3000/sign",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();console.log(m),l("/login")}catch(a){console.error("Error submitting form:",a)}};return e.jsx(e.Fragment,{children:e.jsx("form",{className:"max-w-sm mx-auto mt-5",onSubmit:o,children:e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your name"}),e.jsx("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter your name here",type:"text",name:"name",value:t.name,onChange:g}),e.jsx("br",{}),e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your email"}),e.jsx("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter your email here",type:"email",name:"email",value:t.email,onChange:g}),e.jsx("br",{}),e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your password"}),e.jsx("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter your password here",type:"password",name:"password",value:t.password,onChange:g}),e.jsx("br",{}),e.jsxs("div",{className:"mb-5",children:[e.jsx("input",{className:"text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",type:"submit",value:"Sign In"}),e.jsx(x,{to:"/login",className:"text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Log In"})]})]})})})}function ie(){const[t,d]=n.useState({email:"",password:""}),l=o=>{d({...t,[o.target.name]:o.target.value})},g=async o=>{o.preventDefault();const a=await(await fetch("http://localhost:4000/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();console.log(a);try{console.log("Login form submitted:",t),t.email!==""&&t.password!==""&&console.log("your login was succesfull")}catch(m){console.error("Error submitting login form:",m)}};return e.jsx(e.Fragment,{children:e.jsx("form",{className:"max-w-sm mx-auto mt-5",onSubmit:g,children:e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Email"}),e.jsx("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter your email",type:"email",name:"email",value:t.email,onChange:l}),e.jsx("br",{}),e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),e.jsx("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Enter your password",type:"password",name:"password",value:t.password,onChange:l}),e.jsx("br",{}),e.jsxs("div",{className:"mb-5",children:[e.jsx("input",{className:"text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",type:"submit",value:"Login"}),e.jsx(x,{to:"/sign",className:"text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Sign Up"})]})]})})})}function le(){return e.jsx(_,{children:e.jsxs("div",{children:[e.jsx(re,{}),e.jsxs(Z,{children:[e.jsx(N,{path:"/",element:e.jsx(oe,{})}),e.jsx(N,{path:"/getrecipe",element:e.jsx(ee,{})}),e.jsx(N,{path:"/shop-list",element:e.jsx(te,{})}),e.jsx(N,{path:"/supplies",element:e.jsx(se,{})}),e.jsx(N,{path:"/sign",element:e.jsx(ne,{})}),e.jsx(N,{path:"/login",element:e.jsx(ie,{})})]})]})})}const ce=document.getElementById("root"),de=V(ce);de.render(e.jsx(le,{}));
