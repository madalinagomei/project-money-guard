"use strict";(self.webpackChunkproject_money_guard=self.webpackChunkproject_money_guard||[]).push([[809],{5341:(e,t,n)=>{n.d(t,{R:()=>a,e:()=>i});const i=n(1529).Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 0;
  min-width: 280px;
  max-width: 280px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    padding: 20px 0 0 0;
    min-width: 192px;
    max-width: 192px;
    margin: 0;
  }
  @media only screen and (min-width: 1280px) {
    margin-top: 60px;
    min-width: 213px;
    max-width: 213px;
    gap: 32px;
  }
`,a={control:(e,t)=>({...e,minWidth:280,maxWidth:280,minHeight:50,borderRadius:"8px",background:" rgba(133, 93, 175, 0.13) ",cursor:"pointer","@media only screen and (min-width:768px)":{...a["@media only screen and (min-width: 768px)"],minWidth:160,maxWidth:160},"@media only screen and (min-width:1280px)":{...a["@media only screen and (min-width: 1280px)"],minWidth:181,maxWidth:181}}),option:(e,t)=>({...e,backgroundColor:t.isSelected?"rgba(255, 255, 255, 0.10)":"",color:t.isSelected?"#FF868D":"",":hover":{background:"rgba(255, 255, 255, 0.10)",color:"#FF868D",cursor:"pointer"}}),menu:e=>({...e,background:"linear-gradient(0deg, rgba(87, 38, 146, 0.813) 0%, rgba(80, 48, 154, 0.9) 43.14%, rgba(99, 63, 159, 0.9) 73.27%, rgba(76, 46, 109, 0.8) 120.03%) ",border:"none ",borderRadius:"8px "}),menuList:e=>({...e,"::-webkit-scrollbar":{width:"4px",height:"0px"},"::-webkit-scrollbar-track":{background:"#9065d1"},"::-webkit-scrollbar-thumb":{background:"#6b438c"},"::-webkit-scrollbar-thumb:hover":{background:"#330a65"}})}},7921:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var i=n(5043),a=n(461),r=n(6058);const d=n.p+"static/media/pngwing.059b6a6d1e4ba7cea95a.webp";var o=n(1529);const s=o.Ay.p`
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);
  color: var(--white, #fbfbfb);
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
`,c=o.Ay.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin-top: 8px;
  padding: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
    margin-top: 20px;
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;var l=n(1065),x=n(3003),p=n(579);a.t1.register(a.Bs,a.m_,a.s$);const h=e=>{let{dataDoughnut:t,categories:n}=e;const i=(0,x.d4)(l.ub);return(0,p.jsx)(c,{children:n.length>1?(0,p.jsxs)("div",{children:[(0,p.jsx)(r.nu,{data:t}),(0,p.jsxs)(s,{children:["\u20b4 ",i]})]}):(0,p.jsx)("img",{src:d,alt:"fff"})})};var m=n(423),g=n(1341),u=n(5341);const b=["January","February","March","April","May","June","July","August","September","October","November","December"],w=()=>{const e=(0,x.wA)(),[t,n]=(0,i.useState)((new Date).getMonth()+1),[a,r]=(0,i.useState)((new Date).getFullYear()),[d,o]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1);(0,i.useEffect)((()=>{e((0,g.Y0)({month:t,year:a}))}),[e,t,a]);const l=Array.from({length:10},((e,t)=>(new Date).getFullYear()-t));return(0,p.jsxs)(u.e,{children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{onClick:()=>{o(!d),c(!1)},children:[b[t-1],(0,p.jsx)(m.pte,{})]}),d&&(0,p.jsx)("div",{children:b.map(((e,t)=>(0,p.jsx)("div",{onClick:()=>(e=>{n(b.indexOf(e)+1),o(!1)})(e),children:e},t)))})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{onClick:()=>{c(!s),o(!1)},children:[a,(0,p.jsx)(m.pte,{})]}),s&&(0,p.jsx)("div",{children:l.map(((e,t)=>(0,p.jsx)("div",{onClick:()=>(e=>{r(parseInt(e)),c(!1)})(e),children:e},t)))})]})]})},y=o.Ay.div`
  width: 280px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 336px;
    padding: 0;
  }
  @media only screen and (min-width: 1280px) {
    width: 395px;
  }
`,f=o.Ay.td`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
  align-items: center;
`,j=o.Ay.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  padding: 16px;
`,v=o.Ay.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  padding: 16px;
  margin-top: 20px;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  width: 280px;
  max-height: 56px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);

  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 395px;
  }
`,k=o.Ay.th`
  display: inline-block;
`,D=o.Ay.h3`
  margin: 30px auto;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  max-width: 320px;
  line-height: 1.5;

  padding: 15px 0;
  border-top: 1px solid white;
  border-bottom: 2px solid white;
  @media only screen and (min-width: 768px) {
    margin: 200px 50px 50px 50px;
  }
`,A=o.Ay.tbody`
  display: flex;
  flex-direction: column;

  max-width: 280px;
  overflow-y: scroll;
  @media only screen and (min-width: 768px) {
    max-width: 336px;
    height: 450px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 395px;
    height: calc(100vh - 400px);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(82, 59, 126, 0.3);
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar {
    width: 0.5em;
  }
`,C=e=>{let{categories:t,dataDoughnut:n}=e;const i=(0,x.d4)(l.Ch),a=(0,x.d4)(l.DL);return(0,p.jsx)(y,{children:t.length>1?(0,p.jsxs)("table",{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)(v,{children:[(0,p.jsx)(k,{children:"Category"}),(0,p.jsx)(k,{children:"Sum"})]})}),(0,p.jsx)(A,{children:t.map(((e,t)=>{let{name:i,total:a,type:r}=e;return"INCOME"!==r?(0,p.jsxs)(j,{children:[(0,p.jsxs)(f,{children:[(0,p.jsx)("div",{style:{backgroundColor:`${n.datasets[0].backgroundColor[t]}`,width:"24px",height:"24px"}}),i]}),(0,p.jsx)("td",{style:{fontSize:"14px"},children:a<0?-a:a})]},i):""}))}),(0,p.jsxs)("tfoot",{children:[(0,p.jsxs)(j,{style:{border:"none"},children:[(0,p.jsx)("td",{children:"Expenses:"}),(0,p.jsx)("td",{style:{color:"#FF868D"},children:-a})]}),(0,p.jsxs)(j,{style:{border:"none"},children:[(0,p.jsx)("td",{children:"Income:"}),(0,p.jsx)("td",{style:{color:"#FF868D"},children:i})]})]})]}):(0,p.jsx)(D,{children:"It looks like you have not made any monetary transactions during this time period"})})};var F=n(9404);const S=(0,o.Ay)(F.r)`
  color: white;
  display: block;
  position: relative;

  @media only screen and (min-width: 768px) {
    display: flex;
    margin: 0;
    justify-content: space-between;

    max-width: 100%;
    height: 720px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 803px;
    height: calc(100vh - 70px);

    padding: 20px 20px 0 0;
  }
`,z=o.Ay.div`
  position: relative;
  width: 280px;
  padding: 16px 0;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 336px;
    padding: 0;
    margin: 0;
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
  }
`,E=o.Ay.h2`
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  text-align: left;
  font-size: 30px;
  font-weight: 400;
  max-width: 280px;
`,I=()=>{const e=(0,x.d4)(l.ZH),t={labels:[],datasets:[{data:[...e.map((e=>{let{total:t,type:n}=e;return"INCOME"!==n?t<0?-t:t:""}))],backgroundColor:["#00ff3c","#FED057","#006825","#FFD8D0","#4A56E2","#ffff00","#6E78E8","#81E1FF","#C5BAFF","#e0661b","#FD9498"],borderColor:["#018f6e93","#c5a04478","#198d7389","#b79993a2","#333c9c8d","#18876f94","#4d54a39c","#5695a98f","#877fb09d","#40a8929e","#b7696ca4"],borderWidth:1,cutout:"70%"}]};return(0,p.jsxs)(S,{children:[(0,p.jsxs)(z,{style:{zIndex:"2"},children:[(0,p.jsx)(E,{children:"Statistics"}),(0,p.jsx)(h,{dataDoughnut:t,categories:e})]}),(0,p.jsxs)("div",{style:{zIndex:"2"},children:[(0,p.jsx)(w,{}),(0,p.jsx)(C,{categories:e,dataDoughnut:t})]})]})}},1065:(e,t,n)=>{n.d(t,{Ch:()=>x,DL:()=>p,Nz:()=>r,Y9:()=>s,ZH:()=>l,nT:()=>d,qx:()=>c,ub:()=>h,uw:()=>a});var i=n(2099);const a=e=>e.transactions.transactions.items,r=e=>e.transactions.transactions.isLoading,d=e=>e.transactions.transactions.error,o=e=>e.transactions.transactions.categories,s=(0,i.Mz)([o],(e=>e)),c=(e,t)=>{const n=a(e),i=o(e),r=[...n];switch(t.value){case"date":r.sort(((e,n)=>{const i=new Date(e.transactionDate),a=new Date(n.transactionDate);return t.isReverse?i-a:a-i}));break;case"amount":r.sort(((e,n)=>t.isReverse?n.amount-e.amount:e.amount-n.amount));break;case"category":r.sort(((e,n)=>{var a,r;const d=(null===(a=i.find((t=>t.id===e.categoryId)))||void 0===a?void 0:a.name)||"",o=(null===(r=i.find((e=>e.id===n.categoryId)))||void 0===r?void 0:r.name)||"";return t.isReverse?o.localeCompare(d):d.localeCompare(o)}));break;default:return r.sort(((e,t)=>new Date(t.transactionDate)-new Date(e.transactionDate)))}return r},l=e=>e.transactions.summary.categoriesSummary,x=e=>e.transactions.summary.incomeSummary,p=e=>e.transactions.summary.expenseSummary,h=e=>e.transactions.summary.periodTotal}}]);
//# sourceMappingURL=809.bf7e9f8a.chunk.js.map