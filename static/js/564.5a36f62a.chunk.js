"use strict";(self.webpackChunkproject_money_guard=self.webpackChunkproject_money_guard||[]).push([[564],{1581:(e,t,n)=>{n.d(t,{A:()=>r});n(5043);const r=n.p+"static/media/sprite.d34226730588e01b4b6a1ba69b82af33.svg"},5341:(e,t,n)=>{n.d(t,{R:()=>a,e:()=>r});const r=n(1529).Ay.div`
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
`,a={control:(e,t)=>({...e,minWidth:280,maxWidth:280,minHeight:50,borderRadius:"8px",background:" rgba(133, 93, 175, 0.13) ",cursor:"pointer","@media only screen and (min-width:768px)":{...a["@media only screen and (min-width: 768px)"],minWidth:160,maxWidth:160},"@media only screen and (min-width:1280px)":{...a["@media only screen and (min-width: 1280px)"],minWidth:181,maxWidth:181}}),option:(e,t)=>({...e,backgroundColor:t.isSelected?"rgba(255, 255, 255, 0.10)":"",color:t.isSelected?"#FF868D":"",":hover":{background:"rgba(255, 255, 255, 0.10)",color:"#FF868D",cursor:"pointer"}}),menu:e=>({...e,background:"linear-gradient(0deg, rgba(87, 38, 146, 0.813) 0%, rgba(80, 48, 154, 0.9) 43.14%, rgba(99, 63, 159, 0.9) 73.27%, rgba(76, 46, 109, 0.8) 120.03%) ",border:"none ",borderRadius:"8px "}),menuList:e=>({...e,"::-webkit-scrollbar":{width:"4px",height:"0px"},"::-webkit-scrollbar-track":{background:"#9065d1"},"::-webkit-scrollbar-thumb":{background:"#6b438c"},"::-webkit-scrollbar-thumb:hover":{background:"#330a65"}})}},7564:(e,t,n)=>{n.r(t),n.d(t,{default:()=>qe});var r=n(5043),a=n(1581),i=n(1529);const o=i.Ay.button`
  width: 44px;
  height: 44px;
  background: ${e=>{let{theme:t}=e;return t.backgrounds.btnGradient}};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: fixed;
  bottom: 3vh;
  right: 5vw;
  z-index: 1000;

 &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.incomeColor}};
    box-shadow: 0px 6px 15px 0px rgba(255, 199, 39, 0.5);
  }
  @media only screen and (min-width: 768px) {
    bottom: 4vh;
    right: 4vw;
  }
  @media only screen and (min-width: 1280px) {
    bottom: 3vh;
    right: 3vw;
  }
`,d=()=>{const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(null);return(0,r.useEffect)((()=>{document.body.style.overflow=e?"hidden":"auto"}),[e]),{isOpen:e,close:()=>{t(!1)},open:e=>{t(!0),null!==e&&a(e)},toggle:()=>t((e=>!e)),data:n}},s=i.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;

  @media screen and (min-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;
  }
`,c=i.Ay.div`
  width: 320px;
  min-height: 600px;
  @media only screen and (max-width: 767px) {
    min-height: 700px;
  }
  padding: 41px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(#3f2e96, #5f478c);
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: calc(20 * (100vw / 480));
    min-width: 300px;
  }

  @media screen and (min-width: 768px) {
    max-width: 540px;
    max-height: 511px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1280px) {
    border-radius: 8px;
    padding: calc(20 * (100vw / 480));
    min-width: 300px;
  }
`,l=i.Ay.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  padding: 0;
  line-height: 0;
  border: none;
  cursor: pointer;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  &:hover {
    transform: scale(1.4);
    transition: transform 0.3s ease-in-out;
  }
  &:not(:hover) {
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }
`,p=i.Ay.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 50px;
  padding: 13px 68px;
  background-color: rgba(251, 251, 251, 1);
  border-radius: 20px;
  border: none;
  line-height: 1.5;
  font-size: 18px;
  letter-spacing: 1.8px;
  color: rgba(98, 63, 139, 1);
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;

  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }
`;var h=n(579);function x(e){let{children:t,showCloseIcon:n=!0,close:a}=e;(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.key&&a()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[a]);const i=e=>{"cancel"!==e.target.name&&"closeSvg"!==e.currentTarget.name||a()};return(0,h.jsx)(s,{onClick:e=>(e=>{e.currentTarget===e.target&&a()})(e),children:(0,h.jsxs)(c,{children:[n&&(0,h.jsx)(l,{type:"button",name:"closeSvg",onClick:i,children:(0,h.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M1 1L17 17",stroke:"#FBFBFB"}),(0,h.jsx)("path",{d:"M1 17L17 0.999999",stroke:"#FBFBFB"})]})}),t,(0,h.jsx)(p,{type:"button",name:"cancel",onClick:i,children:"Cancel"})]})})}var m=n(3516),u=n(1899),g=n.n(u);const b=i.I4.div`
  padding: 20px 0;
`,y=(0,i.I4)(m.lV)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;

  @media only screen and (min-width: 768px) {
    width: 394px;
  }
`,w=(0,i.I4)(m.D0)`
  width: 280px;
  height: 75px;
  color: ${e=>{let{theme:t}=e;return t.colors.editBtn}};
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 20px;
  outline: none;

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.editBtn}};
    font-weight: 600;

    @media only screen and (min-width: 768px) {
      text-align: center;
      font-weight: 700;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 181px;
  }
`,f=(0,i.I4)(m.D0)`
  width: 280px;
  height: 75px;
  color: ${e=>{let{theme:t}=e;return t.colors.editBtn}};
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 20px;
  outline: none;

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.editBtn}};
  }

  @media only screen and (min-width: 768px) {
    width: 394px;
  }
`,k=i.I4.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 34px;
`,j=i.I4.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`,v=i.I4.input`
  display: none;
`,E=i.I4.span`
  color: ${e=>{let{theme:t}=e;return t.colors.editBtn}};
  font-size: 16px;
  font-weight: 600;
`,_=i.I4.div`
  width: 80px;
  height: 40px;
  border-radius: 30px;
  background: #fff;
  position: relative;
`,S=i.I4.div`
  width: 44px;
  height: 44px;
  background: #ffb627;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  box-shadow: 0px 6px 15px 0px rgba(255, 199, 39, 0.5);
  top: -2px;
  left: -2px;
`,$=i.I4.div`
  width: 44px;
  height: 44px;
  background: #ff868d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  box-shadow: 0px 6px 15px 0px rgba(255, 134, 141, 0.5);
  top: -2px;
  left: 38px;
`,A=i.I4.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`,C=(0,i.I4)(g())`
  width: 280px;
  height: 75px;
  padding: 0 20px;
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  background: transparent;
  padding: 0 20px;
  border: none;
  outline: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  }

  @media only screen and (min-width: 768px) {
    width: 181px;
  }
`,D=i.I4.div`
  .react-datepicker__view-calendar-icon input {
    padding: 6px 5px 5px 20px;
  }
  .react-datepicker__input {
    border: 2px solid #333;
    border-radius: 4px;
    padding: 8px;
  }
  .react-datepicker__input-container {
    padding-bottom: 15px;
  }
  .react-datepicker__input-container .react-datepicker__calendar-icon {
    position: absolute;
    padding: 0.5rem;
    box-sizing: content-box;
    right: 5px;
    top: 25px;
  }
  .react-datepicker__calendar-icon {
    width: 24px;
    height: 24px;
    vertical-align: -0.125em;
  }
  .react-datepicker__month-container {
    float: left;
    background: radial-gradient(#3f2e96, #5f478c);
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name,
  .react-datepicker__current-month {
    color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  }
  .react-datepicker__day:hover {
    background: ${e=>{let{theme:t}=e;return t.backgrounds.active}};
  }
  .react-datepicker__header {
    background: ${e=>{let{theme:t}=e;return t.backgrounds.tableHead}};
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.white40}};
  }
  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.white40}};
    border-radius: 0;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.active}};
  }
`,I=i.I4.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,N=i.I4.button`
  width: 280px;
  height: 50px;
  padding: 13px 100px;
  border-radius: 20px;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  background: ${e=>{let{theme:t}=e;return t.backgrounds.btnGradient}};
  margin-top: 40px;
`,F=i.I4.div`
  width: 280px;

  @media only screen and (min-width: 768px) {
    width: 394px;
  }
`,M={control:(e,t)=>({...e,border:"none",borderRadius:"none",borderBottom:"1px solid gray",paddingTop:"42px","@media only screen and (min-width:768px)":{...M["@media only screen and (min-width: 768px)"],width:394}}),option:(e,t)=>({...e,backgroundColor:t.isSelected?"rgba(255, 255, 255, 0.10)":"",":hover":{background:"rgba(255, 255, 255, 0.10)"}}),menu:e=>({...e,background:"linear-gradient(0deg, rgba(87, 38, 146, 0.813) 0%, rgba(80, 48, 154, 0.9) 43.14%, rgba(99, 63, 159, 0.9) 73.27%, rgba(76, 46, 109, 0.8) 120.03%) ",border:"none "}),menuList:e=>({...e,"::-webkit-scrollbar":{width:"4px",height:"0px"},"::-webkit-scrollbar-track":{background:"#9065d1"},"::-webkit-scrollbar-thumb":{background:"#6b438c"},"::-webkit-scrollbar-thumb:hover":{background:"#330a65"}})};var P=n(3003),z=n(1341),B=n(899),O=(n(5015),n(1065)),X=n(1278);const W=i.Ay.div`
  padding: 20px;
`,R=i.Ay.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 32px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 30px;
  }
`,T=i.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 50px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,Y=(0,i.Ay)(m.lV)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
`,L=i.Ay.label`
  position: relative;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  color: ${e=>{let{value:t,selected:n}=e;return"INCOME"===n&&"INCOME"===t||"EXPENSE"===n&&"EXPENSE"===t?"INCOME"===t?"#FFB627":"#FF868D":"#E0E0E0"}};

  @media only screen and (min-width: 768px) {
    font-weight: 700;
  }
`,q=i.Ay.input`
  display: none;
`,V=i.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
    margin-bottom: 40px;
  }
`,H=(0,i.Ay)(m.D0)`
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  padding: 8px;
  padding-left: 20px;
  width: 280px;
  margin-bottom: 40px;
  outline: none;

  border: none;
  background: transparent;
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  border-bottom: ${e=>{let{theme:t}=e;return t.border.borderBottom}};

  @media only screen and (min-width: 768px) {
    width: 180px;
    text-align: center;
  }
`,G=i.Ay.span`
  position: absolute;
  font-size: 14px;
  right: 90px;
  bottom: 90px;
  color: ${e=>{let{theme:t}=e;return t.colors.expenseColor}};

  @media only screen and (min-width: 768px) {
    bottom: 20px;
    right: 210px;
  }
`,J=(i.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.colors.expenseColor}};
`,(0,i.Ay)(m.D0)`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  width: 280px;
  padding: 0 20px 8px 20px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: ${e=>{let{theme:t}=e;return t.border.borderBottom}};
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};

  @media only screen and (min-width: 768px) {
    width: 394px;
    padding: 0 8px 8px 8px;
  }
`),U=(0,i.Ay)(g())`
  width: 280px;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
  outline: none;

  background: transparent;
  border: none;
  border-bottom: ${e=>{let{theme:t}=e;return t.border.borderBottom}};
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  }

  @media only screen and (min-width: 768px) {
    width: 180px;
  }
`,Z=i.Ay.svg`
  cursor: pointer;
`,K=i.Ay.div`
  .react-datepicker__view-calendar-icon input {
    padding: 6px 5px 5px 20px;
  }
  .react-datepicker__input {
    border: 2px solid #333;
    border-radius: 4px;
    padding: 8px;
  }
  .react-datepicker__input-container {
    padding-bottom: 15px;
  }
  .react-datepicker__input-container .react-datepicker__calendar-icon {
    position: absolute;
    padding: 0.5rem;
    box-sizing: content-box;
    right: 5px;
    top: -2px;
  }
  .react-datepicker__calendar-icon {
    width: 24px;
    height: 24px;
    vertical-align: -0.125em;
  }
  .react-datepicker__month-container {
    float: left;
    background: ${e=>{let{theme:t}=e;return t.backgrounds.modalBg}};
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name,
  .react-datepicker__current-month {
    color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  }
  .react-datepicker__day:hover {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.active}};
  }
  .react-datepicker__header {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.tableHead}};
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.white40}};
  }
  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.white40}};
    border-radius: 0;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.active}};
  }
`,Q=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,ee=i.Ay.button`
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  width: 280px;
  height: 50px;
  padding: 13px 100px;
  margin-top: 40px;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  background: ${e=>{let{theme:t}=e;return t.backgrounds.btnGradient}};
`;i.Ay.button`
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  width: 280px;
  height: 50px;
  padding: 13px 100px;
  border-radius: 20px;
  color: #623f8b;
  background-color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
`;var te=n(1036);const ne=(0,B.Ik)({amount:(0,B.Yj)().required(),comment:(0,B.Yj)().min(2,"Too Short!").max(50,"Too Long!"),category:(0,B.Yj)()}),re=e=>{const t=e.target.value.replace(/[-+eE]/g,"");e.target.value=t},ae=e=>{let{close:t}=e;const n=(0,P.wA)(),[i,o]=(0,r.useState)({value:"Select a category",label:"Select a category"}),[d,s]=(0,r.useState)("EXPENSE"),[c,l]=(0,r.useState)(!1),[p,x]=(0,r.useState)(!0),u=(0,P.d4)(O.Y9);(0,r.useEffect)((()=>{n((0,z.bJ)())}),[n]);const[g,B]=(0,r.useState)(),W=e=>{"INCOME"===e&&(l(!0),x(!1)),"EXPENSE"===e&&(l(!1),x(!0))};return(0,h.jsx)("div",{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(k,{children:"Add transaction"}),(0,h.jsx)(m.l1,{initialValues:{type:"EXPENSE",category:"",amount:"",transactionDate:new Date,comment:""},validationSchema:ne,onSubmit:(e,r)=>{let{setFieldValue:a}=r;return((e,r)=>{const a={amount:"EXPENSE"===e.type?Number(-e.amount):Number(e.amount),categoryId:"EXPENSE"===e.type?r.id:"063f1132-ba5d-42b4-951d-44011ca46262",comment:e.comment,transactionDate:e.transactionDate,type:e.type};n((0,z.oV)(a)).unwrap().then((()=>{t(),te.oR.success("Transaction added\ud83d\udcb8")})).catch((()=>{te.oR.error("Something went wrong, enter amount or choose a category!\ud83e\udd37\u200d\u2640\ufe0f")}))})(e,i)},children:e=>{let{errors:t,touched:n,values:r,handleChange:m,setFieldValue:b}=e;return(0,h.jsxs)(y,{autoComplete:"off",children:[(0,h.jsx)("input",{type:"hidden",name:"type",value:r.type}),(0,h.jsxs)(j,{children:[(0,h.jsxs)("label",{children:[(0,h.jsx)(v,{type:"radio",name:"type",value:"INCOME",checked:"INCOME"===r.type,onChange:m,onClick:()=>W("INCOME")}),(0,h.jsx)(E,{style:{color:"INCOME"===r.type?"#FFB627":"#ffffff99"},children:"Income"})]}),(0,h.jsxs)(_,{onClick:()=>((e,t)=>{const n="EXPENSE"===d?"INCOME":"EXPENSE";s("EXPENSE"===d?"INCOME":"EXPENSE"),t("type",n),s(n),"EXPENSE"===d?(l(!0),x(!1)):(l(!1),x(!0))})(0,b),children:[c&&(0,h.jsx)(S,{children:(0,h.jsx)("svg",{width:"20",height:"20",children:(0,h.jsx)("use",{href:`${a.A}#plus`})})}),p&&(0,h.jsx)($,{children:(0,h.jsx)("svg",{width:"20",height:"20",children:(0,h.jsx)("use",{href:`${a.A}#minus`})})})]}),(0,h.jsxs)("label",{children:[(0,h.jsx)(v,{type:"radio",name:"type",value:"EXPENSE",checked:"EXPENSE"===r.type,onChange:m,onClick:()=>W("EXPENSE")}),(0,h.jsx)(E,{style:{color:"EXPENSE"===r.type?"#FF868D":"#ffffff99"},children:"Expense"})]})]}),"EXPENSE"===r.type?(0,h.jsx)(F,{children:(0,h.jsx)(X.Ay,{name:"category",styles:M,value:i,onChange:e=>{o(e)},options:null===u||void 0===u?void 0:u.filter((e=>"EXPENSE"===e.type)).map((e=>({value:e.type,label:e.name,id:e.id}))),placeholder:i.label,theme:e=>({...e,colors:{neutral50:"#fff"}})})}):null,(0,h.jsxs)(A,{children:[(0,h.jsx)(w,{name:"amount",type:"number",onInput:re,placeholder:"0.00",value:r.amount.toString().replace("-","")}),(0,h.jsx)(D,{children:(0,h.jsx)("label",{children:(0,h.jsx)(C,{name:"transactionDate",value:r.transactionDate,onChange:e=>{m({target:{name:"transactionDate",value:e}}),B(e)},dateFormat:"dd.MM.yyyy",placeholderText:`${(new Date).toLocaleDateString("uk-UA")}`,showIcon:!0,selected:g,maxDate:new Date,style:{float:"left"},icon:(0,h.jsx)(Z,{width:"24",height:"24",children:(0,h.jsx)("use",{href:`${a.A}#calendar`})})})})})]}),(0,h.jsx)(f,{name:"comment",type:"comment",placeholder:"Comment"}),t.comment&&n.comment?(0,h.jsx)("div",{children:t.comment}):null,(0,h.jsx)(I,{children:(0,h.jsx)(N,{type:"submit",children:"Add"})})]})}})]})})},ie=e=>{let{transaction:t}=e;const{open:n,close:r,isOpen:i,data:s}=d();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{type:"button",onClick:()=>n(t),children:(0,h.jsx)("svg",{width:"20",height:"20",children:(0,h.jsx)("use",{href:`${a.A}#plus`})})}),i&&(0,h.jsx)(x,{close:r,children:(0,h.jsx)(ae,{transaction:s,close:r})})]})},oe=i.Ay.li`
  margin: 0 auto;
  min-width: 280px;
  max-width: 360px;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.backgrounds.transactionBg}};
  border-left: 5px solid ${e=>e.$color};

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: block;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`,de=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: ${e=>{let{theme:t}=e;return t.border.borderBottom}};
`,se=i.Ay.p`
  text-align: right;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
`,ce=i.Ay.span`
  max-width: 120px;
`,le=i.Ay.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
`,pe=i.Ay.button`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  padding: 4px 12px;

  border-radius: 18px;
  background: ${e=>{let{theme:t}=e;return t.backgrounds.btnGradient}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.deleteBtnShadow}};
  transition: filter 0.3s;
  &:hover {
    filter: drop-shadow(0px 3px 10px rgba(255, 255, 255, 0.6));
  }
`,he=i.Ay.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;

  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  background-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.colors.editBtn}};
  transition: filter 0.3s;
  &:hover {
    filter: drop-shadow(0px 3px 5px rgba(255, 255, 255, 0.8));
  }
`,xe=i.Ay.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 80px;

  padding: 30px;
  width: 260px;
  height: 100px;
  border-radius: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.backgrounds.tableHead}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.default}};
`,me=i.Ay.h3`
  text-align: center;
`,ue=e=>{const t=e.target.value.replace(/[-+eE]/g,"");e.target.value=t},ge=e=>{let{transaction:t,close:n}=e;const i=(0,P.wA)(),[o,d]=(0,r.useState)(),[s,c]=(0,r.useState)(t.type),l=(0,B.Ik)({amount:(0,B.Yj)().required().min(1,"Too Short!").max(12,"Too Long!"),comment:(0,B.Yj)().max(50,"Too Long!"),type:(0,B.Yj)().oneOf(["INCOME","EXPENSE"],"Invalid transaction type")});return(0,h.jsx)("div",{children:(0,h.jsxs)(W,{children:[(0,h.jsx)(R,{children:"Edit transaction"}),(0,h.jsx)(m.l1,{initialValues:{id:t.id,amount:t.amount,transactionDate:new Date(Date.parse(t.transactionDate)),comment:t.comment,type:t.type},validationSchema:l,onSubmit:e=>{const r={id:t.id,amount:"EXPENSE"===e.type?-Math.abs(e.amount):Math.abs(e.amount),transactionDate:e.transactionDate,type:e.type,comment:e.comment,categoryId:t.categoryId};i((0,z._g)(r)),n()},children:e=>{let{errors:t,touched:n,values:r,handleChange:i,setFieldValue:l}=e;return(0,h.jsxs)(Y,{autoComplete:"off",children:[(0,h.jsxs)(T,{children:[(0,h.jsxs)(L,{value:"INCOME",selected:s,children:[(0,h.jsx)(q,{type:"radio",name:"type",value:"INCOME",disabled:"EXPENSE"===r.type,checked:"INCOME"===r.type,onChange:()=>{l("type","INCOME"),c("INCOME")}}),"Income"]}),(0,h.jsx)("span",{children:"/"}),(0,h.jsxs)(L,{value:"EXPENSE",selected:s,children:[(0,h.jsx)(q,{type:"radio",name:"type",disabled:"INCOME"===r.type,value:"EXPENSE",checked:"EXPENSE"===r.type,onChange:()=>{l("type","EXPENSE"),c("EXPENSE")}}),"Expense"]})]}),(0,h.jsxs)(V,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(H,{name:"amount",type:"number",onInput:ue,value:r.amount.toString().replace("-",""),placeholder:"0.0"}),t.amount&&n.amount?(0,h.jsx)(G,{children:t.amount}):null]}),(0,h.jsx)(K,{children:(0,h.jsx)("label",{children:(0,h.jsx)(U,{name:"transactionDate",value:r.transactionDate,onChange:e=>{i({target:{name:"transactionDate",value:e}}),d(e)},dateFormat:"dd.MM.yyyy",placeholderText:`${r.transactionDate.toLocaleDateString("uk-UA")}`,showIcon:!0,selected:o,maxDate:new Date,style:{float:"left"},icon:(0,h.jsx)(Z,{width:"24",height:"24",children:(0,h.jsx)("use",{href:`${a.A}#calendar`})})})})})]}),(0,h.jsx)(J,{name:"comment",type:"text",value:r.comment,placeholder:"Comment"}),(0,h.jsx)(Q,{children:(0,h.jsx)(ee,{type:"submit",children:"Save"})})]})}})]})})};function be(e){const t=new Date(e);return`${t.getDate().toString().padStart(2,"0")}.${(t.getMonth()+1).toString().padStart(2,"0")}.${t.getFullYear().toString().slice(-2)}`}const ye=e=>{let{transaction:t}=e;const n=(0,P.d4)(O.Y9),{open:r,close:i,isOpen:o}=d(),s=(0,P.wA)(),c=n.find((e=>e.id===t.categoryId));return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(oe,{$color:"INCOME"===t.type?"#FFB627":"#FF868D",children:[(0,h.jsxs)(de,{children:[(0,h.jsx)(se,{children:"Date"}),(0,h.jsx)("span",{children:be(t.transactionDate)})]}),(0,h.jsxs)(de,{children:[(0,h.jsx)(se,{children:"Type"}),(0,h.jsx)("span",{children:t.type})]}),(0,h.jsxs)(de,{children:[(0,h.jsx)(se,{children:"Category"}),(0,h.jsx)("span",{children:n?null===c||void 0===c?void 0:c.name:"-"})]}),(0,h.jsxs)(de,{children:[(0,h.jsx)(se,{children:"Comment"}),(0,h.jsx)(ce,{children:t.comment.length>=10?`${t.comment.slice(0,10)}...`:t.comment})]}),(0,h.jsxs)(de,{children:[(0,h.jsx)(se,{children:"Sum"}),(0,h.jsxs)("span",{children:[" ",t.amount.toString().replace("-","")]})]}),(0,h.jsxs)(le,{children:[(0,h.jsx)(pe,{onClick:()=>{return e=t.id,void s((0,z.SP)(e));var e},children:"Delete"}),(0,h.jsxs)(he,{onClick:()=>r(t),children:[(0,h.jsx)("svg",{width:"14",height:"14",children:(0,h.jsx)("use",{href:`${a.A}#edit`})}),"Edit"]})]}),o&&(0,h.jsx)(x,{close:i,children:(0,h.jsx)(ge,{transaction:t,close:i})})]})})};var we=n(3978),fe=n(1017);const ke=i.Ay.div`
  margin: 0 auto;
  @media only screen and (min-width: 1280px) {
    margin-top: 46px;
  }
`,je=i.Ay.ul`
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: block;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`,ve=i.Ay.div`
  display: none;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media only screen and (min-width: 1280px) {
    width: fit-content;
    margin-left: 55px;
  }
`,Ee=i.Ay.table`
  border-collapse: collapse;
  width: 100%;
`,_e=i.Ay.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 20px;

  border-radius: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.backgrounds.tableHead}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.default}};
  backdrop-filter: ${e=>{let{theme:t}=e;return t.blur.backdropFilter}};

  @media only screen and (min-width: 768px) {
    padding-right: calc(100% / 4.2);
  }
  @media only screen and (min-width: 1280px) {
    padding-right: calc(100% / 4.05);
  }
`,Se=i.Ay.th`
  text-align: center;
  font-size: 16px;
  font-weight: 400;

  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
`,$e=(0,i.Ay)(Se)`
  cursor: pointer;
`,Ae=i.Ay.svg`
  margin-left: 6px;
  transition: transform 0.3s ease;
  transform: rotate(180deg);
`,Ce=i.Ay.tbody`
  display: block;

  max-height: 50vh;
  overflow-y: scroll;
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>{let{theme:t}=e;return t.backgrounds.bgScrollBar}};
  }
  &::-webkit-scrollbar-track {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.scrollbarShadow}};
  }
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  @media only screen and (min-width: 1280px) {
    max-height: 70vh;
  }
`,De=i.Ay.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px 12px 20px;
  border-bottom: ${e=>{let{theme:t}=e;return t.border.borderBottom}};

  gap: 50px;
`,Ie=i.Ay.td`
  width: 50px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: ${e=>e.$color};
`,Ne=(0,i.Ay)(Ie)`
  flex-basis: 182px;
`,Fe=i.Ay.div`
  display: flex;
  justify-content: space-between;
`,Me=i.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 80px;

  padding: 30px;
  width: 600px;
  height: 200px;
  border-radius: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.backgrounds.tableHead}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.default}};
`;var Pe=n(5341);const ze=i.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5em;
`,Be={control:(e,t)=>({...e,width:150,borderRadius:"8px",background:" rgba(133, 93, 175, 0.13) ",borderColor:"rgba(255, 255, 255, 0.3)"})},Oe=e=>{let{value:t,setSortCriteria:n}=e;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(X.Ay,{styles:{...Pe.R,...Be},value:t,onChange:e=>n(e),options:[{value:"date",label:"Date"},{value:"amount",label:"Amount"},{value:"category",label:"Category"}],placeholder:t.label,theme:e=>({...e,colors:{neutral50:"#fff"}})})})},Xe=()=>{const e=(0,P.wA)(),t=(0,P.d4)(O.uw),[n,a]=(0,r.useState)({value:"date",label:"Date"}),i=(0,P.d4)((e=>(0,O.qx)(e,n))),o=(0,P.d4)(we.Nz),d=(0,P.d4)(O.nT);return(0,r.useEffect)((()=>{e((0,z.g4)()),e((0,z.bJ)())}),[e]),(0,h.jsxs)(h.Fragment,{children:[o&&(0,h.jsx)(fe.A,{}),d&&(0,h.jsx)("h1",{children:"Something went wrong... \ud83d\ude22"}),(0,h.jsx)(ze,{children:(0,h.jsx)(Oe,{id:"sortSelect",setSortCriteria:a,value:n})}),t.length>0?(0,h.jsx)(je,{children:i.map((e=>(0,h.jsx)(ye,{transaction:e},e.id)))}):(0,h.jsx)(xe,{children:(0,h.jsx)(me,{children:"No transactions found, lets create!"})})]})};function We(e){const t=new Date(e);return`${t.getDate().toString().padStart(2,"0")}.${(t.getMonth()+1).toString().padStart(2,"0")}.${t.getFullYear().toString().slice(-2)}`}const Re=()=>{const e=(0,P.wA)(),[t,n]=(0,r.useState)({value:"date",label:"Date",isReverse:!1}),{open:i,close:o,isOpen:s,data:c}=d(),l=(0,P.d4)(O.Y9),p=(0,P.d4)((e=>(0,O.qx)(e,t))),m=(0,P.d4)(O.Nz),u=(0,P.d4)(O.nT),g=(0,r.useRef)(null),b=(0,r.useRef)(null),y=(0,r.useRef)(null);(0,r.useEffect)((()=>{e((0,z.g4)()),e((0,z.bJ)())}),[e]);const w=e=>{t.value===e.value?n((e=>({...e,isReverse:!e.isReverse}))):n({...e,isReverse:!1})},f=e=>{switch(e){case"date":g.current.style.transform="rotate(0)",b.current.style.transform="rotate(180deg)",y.current.style.transform="rotate(180deg)";break;case"category":g.current.style.transform="rotate(180deg)",b.current.style.transform="rotate(180deg)",y.current.style.transform="rotate(0)";break;case"amount":g.current.style.transform="rotate(180deg)",b.current.style.transform="rotate(0)",y.current.style.transform="rotate(180deg)"}};return(0,h.jsxs)(h.Fragment,{children:[m&&(0,h.jsx)(fe.A,{}),u&&(0,h.jsx)("h1",{children:"Something went wrong... \ud83d\ude22"}),p.length>0?(0,h.jsxs)(ke,{children:[(0,h.jsx)(ve,{children:(0,h.jsxs)(Ee,{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)(_e,{children:[(0,h.jsxs)($e,{onClick:()=>{w({value:"date"}),f("date")},children:["Date",(0,h.jsx)(Ae,{ref:g,width:"14",height:"14",children:(0,h.jsx)("use",{href:`${a.A}#arrow_down`})})]}),(0,h.jsx)(Se,{children:"Type"}),(0,h.jsxs)($e,{onClick:()=>{w({value:"category"}),f("category")},children:["Category",(0,h.jsx)(Ae,{ref:y,width:"14",height:"14",children:(0,h.jsx)("use",{href:`${a.A}#arrow_down`})})]}),(0,h.jsx)(Se,{children:"Comment"}),(0,h.jsxs)($e,{onClick:()=>{w({value:"amount"}),f("amount")},children:["Sum",(0,h.jsx)(Ae,{ref:b,width:"14",height:"14",children:(0,h.jsx)("use",{href:`${a.A}#arrow_down`})})]})]})}),(0,h.jsx)(Ce,{children:p.map((t=>{var n;return(0,h.jsxs)(De,{children:[(0,h.jsx)(Ie,{children:We(t.transactionDate)}),(0,h.jsx)(Ie,{children:"INCOME"===t.type?"+":"-"}),(0,h.jsx)(Ie,{children:(null===(n=l.find((e=>e.id===t.categoryId)))||void 0===n?void 0:n.name)||"Other"}),(0,h.jsx)(Ne,{children:t.comment.length>15?`${t.comment.slice(0,15)}...`:t.comment}),(0,h.jsx)(Ie,{$color:"INCOME"===t.type?"#FFB627":"#FF868D",children:t.amount.toString().replace("-","")}),(0,h.jsx)("td",{children:(0,h.jsxs)(Fe,{children:[(0,h.jsx)(he,{onClick:()=>i(t),children:(0,h.jsx)("svg",{width:"14",height:"14",children:(0,h.jsx)("use",{href:`${a.A}#edit`})})}),(0,h.jsx)(pe,{onClick:()=>{return n=t.id,void e((0,z.SP)(n));var n},children:"Delete"})]})})]},t.id)}))})]})}),s&&(0,h.jsx)(x,{close:o,children:(0,h.jsx)(ge,{transaction:c,close:o})})]}):(0,h.jsx)(Me,{children:(0,h.jsx)("h2",{children:"No transactions found, lets create!"})})]})};var Te=n(9657),Ye=n(9404);const Le=(0,i.Ay)(Ye.r)`
  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`,qe=()=>{const e=(0,Te.Ub)({query:"(min-width:768px)"});return(0,h.jsxs)(Le,{children:[e?(0,h.jsx)(Re,{}):(0,h.jsx)(Xe,{}),(0,h.jsx)(ie,{})]})}},1065:(e,t,n)=>{n.d(t,{Ch:()=>p,DL:()=>h,Nz:()=>i,Y9:()=>s,ZH:()=>l,nT:()=>o,qx:()=>c,ub:()=>x,uw:()=>a});var r=n(2099);const a=e=>e.transactions.transactions.items,i=e=>e.transactions.transactions.isLoading,o=e=>e.transactions.transactions.error,d=e=>e.transactions.transactions.categories,s=(0,r.Mz)([d],(e=>e)),c=(e,t)=>{const n=a(e),r=d(e),i=[...n];switch(t.value){case"date":i.sort(((e,n)=>{const r=new Date(e.transactionDate),a=new Date(n.transactionDate);return t.isReverse?r-a:a-r}));break;case"amount":i.sort(((e,n)=>t.isReverse?n.amount-e.amount:e.amount-n.amount));break;case"category":i.sort(((e,n)=>{var a,i;const o=(null===(a=r.find((t=>t.id===e.categoryId)))||void 0===a?void 0:a.name)||"",d=(null===(i=r.find((e=>e.id===n.categoryId)))||void 0===i?void 0:i.name)||"";return t.isReverse?d.localeCompare(o):o.localeCompare(d)}));break;default:return i.sort(((e,t)=>new Date(t.transactionDate)-new Date(e.transactionDate)))}return i},l=e=>e.transactions.summary.categoriesSummary,p=e=>e.transactions.summary.incomeSummary,h=e=>e.transactions.summary.expenseSummary,x=e=>e.transactions.summary.periodTotal}}]);
//# sourceMappingURL=564.5a36f62a.chunk.js.map