"use strict";(self.webpackChunkproject_money_guard=self.webpackChunkproject_money_guard||[]).push([[70],{9252:(e,t,i)=>{i.d(t,{A:()=>n});i(5043);const n=i.p+"static/media/logo_money_guard.fce5decc9b22ef0ca025e9630273e85c.svg"},1581:(e,t,i)=>{i.d(t,{A:()=>n});i(5043);const n=i.p+"static/media/sprite.d34226730588e01b4b6a1ba69b82af33.svg"},9175:(e,t,i)=>{i.d(t,{A:()=>u});var n=i(6213),o=i(5043),r=i(1529);const d=r.Ay.div`
  position: relative;
  background-color: rgba(74, 86, 226, 0.1);
  width: 320px;
  height: 220px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    min-width: 336px;

    margin: 0;
  }
  @media only screen and (min-width: 1280px) {
    width: 100%;
    max-height: 395px;
    height: 350px;
  }
`,s=r.Ay.div`
  position: relative;
  width: 100%;

  top: -6px;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #563eaf;
    border: solid 1px #ff868d;
    left: 39px;
    top: 21px;
    z-index: 1000;
  }

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #563eaf;
    border: solid 1px #ff868d;
    left: 242px;
    top: -2px;
    z-index: 1000;
  }
  @media only screen and (min-width: 768px) {
    &::before {
      left: 42px;
      top: 21px;
    }
    &::after {
      left: 254px;
      top: -2px;
    }
  }
  @media only screen and (min-width: 1280px) {
    &::before {
      left: 58px;
      top: 29px;
      width: 9px;
      height: 9px;
    }
    &::after {
      left: 364px;
      top: -4px;
      width: 9px;
      height: 9px;
    }
    top: 26px;
  }
`,a=r.Ay.table`
  width: 100%;
  font-size: 16px;
  line-height: normal;
  border-collapse: collapse;
  padding-left: 20px;
  @media only screen and (min-width: 1280px) {
  }
`,p=r.Ay.thead`
  background: rgba(255, 255, 255, 0.2);
  font-weight: 600;
  @media only screen and (min-width: 1280px) {
  }
`,l=r.Ay.th`
  padding-top: 13px;
  padding-bottom: 13px;
  width: 33%;
  padding-left: 20px;
  @media only screen and (min-width: 1280px) {
    &:first-child {
      padding-left: 62px;
    }
    &:last-child {
      padding-right: 111px;
    }
  }
`,x=r.Ay.td`
  padding-top: 8px;
  padding-bottom: 8px;
  width: 30%;
  padding-left: 25px;
  &:last-child {
    padding-left: 46px;
  }
  @media only screen and (min-width: 1280px) {
    text-align: center;
    &:first-child {
      padding-left: 62px;
    }
    &:last-child {
      padding-right: 131px;
    }
  }
`,c=r.Ay.svg`
  position: absolute;
  width: 100%;
`,h=r.Ay.svg`
  width: 100%;
  position: absolute;
  top: 6px;
  @media only screen and (min-width: 1280px) {
    top: 20px;
  }
`,g=r.Ay.div`
  position: absolute;
  left: 48px;
  top: 8px;
  color: var(--dashboard-text, #ff868d);
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`,f=r.Ay.div`
  position: absolute;
  left: 352px;
  top: -27px;
  color: var(--dashboard-text, #ff868d);
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;var m=i(9657),w=i(579);const u=()=>{const[e,t]=(0,o.useState)(null);(0,o.useEffect)((()=>{const e=async()=>{try{const e=(await n.A.get("https://api.monobank.ua/bank/currency")).data,i=(new Date).getTime();localStorage.setItem("MONO",JSON.stringify({data:e,fetchTime:i})),t(e)}catch(e){console.error("Error fetching data:",e)}},i=localStorage.getItem("MONO");if(i){const{data:n,fetchTime:o}=JSON.parse(i);(new Date).getTime()-o<36e5?t(n):e()}else e()}),[]);const i=null===e||void 0===e?void 0:e.find((e=>840===e.currencyCodeA)),r=null===e||void 0===e?void 0:e.find((e=>978===e.currencyCodeA)),u=null===i||void 0===i?void 0:i.rateBuy.toFixed(2),b=null===i||void 0===i?void 0:i.rateSell.toFixed(2),y=null===r||void 0===r?void 0:r.rateBuy.toFixed(2),j=null===r||void 0===r?void 0:r.rateSell.toFixed(2),C=(0,m.Ub)({query:"(max-width: 767px)"}),v=(0,m.Ub)({query:"(min-width: 768px)"}),L=(0,m.Ub)({query:"(max-width: 1279px)"}),k=(0,m.Ub)({query:"(min-width: 1280px)"});return(0,w.jsxs)(d,{children:[(0,w.jsxs)(a,{children:[(0,w.jsx)(p,{children:(0,w.jsxs)("tr",{children:[(0,w.jsx)(l,{children:"Currency"}),(0,w.jsx)(l,{children:"Purchase"}),(0,w.jsx)(l,{children:"Sale"})]})}),(0,w.jsxs)("tbody",{children:[(0,w.jsxs)("tr",{children:[(0,w.jsx)(x,{children:"USD"}),(0,w.jsx)(x,{children:u}),(0,w.jsx)(x,{children:b})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)(x,{children:"EUR"}),(0,w.jsx)(x,{children:y}),(0,w.jsx)(x,{children:j})]})]})]}),C?(0,w.jsxs)(s,{children:[(0,w.jsx)(c,{xmlns:"http://www.w3.org/2000/svg",width:"320",height:"72",viewBox:"0 0 320 72",fill:"none",children:(0,w.jsx)("path",{d:"M0 48.1232L25.6 30.368C27.8187 28.4332 33.9968 24.5634 40.96 24.5634C47.9232 24.5634 53.4187 27.295 55.296 28.6608L110.08 67.5855C111.616 68.7237 116.326 71 122.88 71C129.434 71 134.144 68.7237 135.68 67.5855L230.4 6.46313C232.789 4.64208 238.08 1 244.736 1C251.392 1 257.365 4.64208 260.096 6.46313L280.576 20.8038C281.941 21.7144 286.208 23.5354 292.352 23.5354C298.496 23.5354 301.818 21.5514 303.104 20.8038C307.586 18.1985 310.805 15.3875 316.416 15.6821C317.137 15.72 318.834 15.8815 320 16.365",stroke:"#FF868D"})}),(0,w.jsxs)(h,{xmlns:"http://www.w3.org/2000/svg",width:"320",height:"88",viewBox:"0 0 320 88",fill:"none",children:[(0,w.jsx)("path",{d:"M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z",fill:"url(#paint0_linear_34_6965)",fillOpacity:"0.6"}),(0,w.jsx)("path",{d:"M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z",fill:"#390096",fillOpacity:"0.2"}),(0,w.jsx)("defs",{children:(0,w.jsxs)("linearGradient",{id:"paint0_linear_34_6965",x1:"160",y1:"12.95",x2:"160",y2:"102.2",gradientUnits:"userSpaceOnUse",children:[(0,w.jsx)("stop",{stopColor:"white"}),(0,w.jsx)("stop",{offset:"0.374892",stopColor:"white",stopOpacity:"0.536458"}),(0,w.jsx)("stop",{offset:"0.6091",stopColor:"white",stopOpacity:"0.269957"}),(0,w.jsx)("stop",{offset:"0.766012",stopColor:"white",stopOpacity:"0.151176"}),(0,w.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})})]})]}):"",v&L?(0,w.jsxs)(s,{children:[(0,w.jsx)(c,{xmlns:"http://www.w3.org/2000/svg",width:"338",height:"72",viewBox:"0 0 338 72",fill:"none",children:(0,w.jsx)("path",{d:"M1 48.291L27.88 30.4726C30.2096 28.5309 36.6966 24.6474 44.008 24.6474C51.3194 24.6474 57.0896 27.3886 59.0608 28.7593L116.584 67.8227C118.197 68.9649 123.143 71.2493 130.024 71.2493C136.905 71.2493 141.851 68.9649 143.464 67.8227L242.92 6.48258C245.429 4.65505 250.984 1 257.973 1C264.962 1 271.234 4.65505 274.101 6.48258L295.605 20.8744C297.038 21.7881 301.518 23.6156 307.97 23.6156C314.421 23.6156 317.909 21.6246 319.259 20.8744C323.966 18.2597 327.345 15.4387 333.237 15.7344C333.993 15.7724 335.776 15.9345 337 16.4198",stroke:"#FF868D"})}),(0,w.jsxs)(h,{xmlns:"http://www.w3.org/2000/svg",width:"336",height:"88",viewBox:"0 0 336 88",fill:"none",children:[(0,w.jsx)("path",{d:"M26.88 29.4724L0 47.2907V80C0 84.4183 3.58173 88 8.00001 88H328C332.418 88 336 84.4183 336 80V15.4195C334.776 14.9343 332.993 14.7722 332.237 14.7342C326.345 14.4385 322.966 17.2595 318.259 19.8741L318.201 19.9066C316.81 20.6801 313.33 22.6154 306.97 22.6154C300.518 22.6154 296.038 20.7879 294.605 19.8741L273.101 5.48234C270.234 3.65481 263.962 -0.000244141 256.973 -0.000244141C249.984 -0.000244141 244.429 3.65481 241.92 5.48234L142.464 66.8224C140.851 67.9646 135.905 70.249 129.024 70.249C122.143 70.249 117.197 67.9646 115.584 66.8224L58.0608 27.759C56.0896 26.3884 50.3194 23.6471 43.008 23.6471C35.6966 23.6471 29.2096 27.5306 26.88 29.4724Z",fill:"url(#paint0_linear_32_4883)",fillOpacity:"0.6"}),(0,w.jsx)("path",{d:"M26.88 29.4724L0 47.2907V80C0 84.4183 3.58173 88 8.00001 88H328C332.418 88 336 84.4183 336 80V15.4195C334.776 14.9343 332.993 14.7722 332.237 14.7342C326.345 14.4385 322.966 17.2595 318.259 19.8741L318.201 19.9066C316.81 20.6801 313.33 22.6154 306.97 22.6154C300.518 22.6154 296.038 20.7879 294.605 19.8741L273.101 5.48234C270.234 3.65481 263.962 -0.000244141 256.973 -0.000244141C249.984 -0.000244141 244.429 3.65481 241.92 5.48234L142.464 66.8224C140.851 67.9646 135.905 70.249 129.024 70.249C122.143 70.249 117.197 67.9646 115.584 66.8224L58.0608 27.759C56.0896 26.3884 50.3194 23.6471 43.008 23.6471C35.6966 23.6471 29.2096 27.5306 26.88 29.4724Z",fill:"#390096",fillOpacity:"0.2"}),(0,w.jsx)("defs",{children:(0,w.jsxs)("linearGradient",{id:"paint0_linear_32_4883",x1:"168",y1:"12.9498",x2:"168",y2:"102.2",gradientUnits:"userSpaceOnUse",children:[(0,w.jsx)("stop",{stopColor:"white"}),(0,w.jsx)("stop",{offset:"0.374892",stopColor:"white",stopOpacity:"0.536458"}),(0,w.jsx)("stop",{offset:"0.6091",stopColor:"white",stopOpacity:"0.269957"}),(0,w.jsx)("stop",{offset:"0.766012",stopColor:"white",stopOpacity:"0.151176"}),(0,w.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})})]})]}):"",k?(0,w.jsxs)(s,{$usd:u,children:[(0,w.jsx)(g,{children:u}),(0,w.jsx)(f,{children:y}),(0,w.jsx)(c,{xmlns:"http://www.w3.org/2000/svg",width:"480",height:"102",viewBox:"0 0 480 102",fill:"none",children:(0,w.jsx)("path",{d:"M0 68.5585L38.4 43.1037C41.728 40.3298 50.9952 34.7819 61.44 34.7819C71.8848 34.7819 80.128 38.6981 82.944 40.6561L165.12 96.461C167.424 98.0927 174.49 101.356 184.32 101.356C194.15 101.356 201.216 98.0927 203.52 96.461L345.6 8.83226C349.184 6.22151 357.12 1 367.104 1C377.088 1 386.048 6.22151 390.144 8.83226L420.864 29.3919C422.912 30.6973 429.312 33.3081 438.528 33.3081C447.744 33.3081 452.727 30.4637 454.656 29.3919C461.379 25.6567 466.207 21.6267 474.624 22.0492C475.705 22.1035 478.251 22.335 480 23.0282",stroke:"#FF868D"})}),(0,w.jsxs)(h,{xmlns:"http://www.w3.org/2000/svg",width:"480",height:"167",viewBox:"0 0 480 167",fill:"none",children:[(0,w.jsx)("path",{d:"M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z",fill:"url(#paint0_linear_15_252)",fillOpacity:"0.6"}),(0,w.jsx)("path",{d:"M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z",fill:"#390096",fillOpacity:"0.2"}),(0,w.jsx)("defs",{children:(0,w.jsxs)("linearGradient",{id:"paint0_linear_15_252",x1:"240",y1:"18.5",x2:"240",y2:"146",gradientUnits:"userSpaceOnUse",children:[(0,w.jsx)("stop",{stopColor:"white"}),(0,w.jsx)("stop",{offset:"0.374892",stopColor:"white",stopOpacity:"0.536458"}),(0,w.jsx)("stop",{offset:"0.6091",stopColor:"white",stopOpacity:"0.269957"}),(0,w.jsx)("stop",{offset:"0.766012",stopColor:"white",stopOpacity:"0.151176"}),(0,w.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})})]})]}):""]})}},7070:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Q});var n=i(5043),o=i(1529);const r=o.Ay.div`
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  padding: 8px 74px 12px 32px;
  width: 280px;
  height: 80px;

  @media only screen and (min-width: 768px) {
    padding: 8px 122px 12px 40px;
    width: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 100%;
  }
`,d=o.Ay.h2`
  font-size: 30px;
  font-weight: 700;
`,s=o.Ay.h4`
  color: ${e=>{let{theme:t}=e;return t.colors.subColor}};
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 12px;
`;var a=i(3003),p=i(3978),l=i(579);const x=()=>{const e=(0,a.d4)(p.Bv);return(0,l.jsxs)(r,{children:[(0,l.jsx)(s,{children:"Your Balance"}),(0,l.jsxs)(d,{children:["\u20b4",e.toFixed(2)]})]})};var c=i(9404);const h=(0,o.I4)(c.r)`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
  @media only screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 15px;
  }
`,g=o.I4.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`,f=(o.I4.header`
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
`,o.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 0.8; 
    transform: translateY(-1px); 
  }

`),m=o.I4.img`
  width: 13px;
  height: 17px;
`,w=o.I4.span`
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  font-size: 13px;

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,u=o.I4.p`
  font-size: 16px;
  color: ${e=>{let{theme:t}=e;return t.colors.editBtn}};
`,b=o.I4.img`
  margin-right: 12px;
  margin-left: 4px;
`,y=o.I4.p`
  font-size: 16px;
  color: ${e=>{let{theme:t}=e;return t.colors.editBtn}};
  margin-left: 8px;
`,j=o.I4.button`
  padding: 0;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.3s;
  &:hover {
    filter: drop-shadow(0px 3px 5px rgba(255, 255, 255, 0.8));
  }
`,C=o.I4.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
  z-index: 1200;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(7px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;

  @media screen and (min-width: 768px) {
    position: fixed;
    height: 100%;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;
  }
`,v=o.I4.div`
  width: 100%;
  min-height: 691px;
  padding: 41px 40px;
  margin: 56px, auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(#3f2e96, #5f478c);
  border-radius: 8px;
  position: relative;
  bottom: 0;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 477px;
  }
`,L=o.I4.img`
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,k=o.I4.span`
  color: #fbfbfb;
  font-size: 19px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 27px;
    margin-bottom: 52px;
  }
`,A=o.I4.p`
  font-size: 18px;
  line-height: normal;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 65px;
  }
`,O=o.I4.button`
  min-width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  margin: auto;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.8;
  word-wrap: break-word;
  text-align: center;
  cursor: pointer;
  background-color: #ffffff;
  color: #623f8b;

  &:hover {
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    width: 319px;
    height: 50px;
  }
`,_=o.I4.button`
  min-width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4a56e2;
  margin: auto;
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.8;
  word-wrap: break-word;
  text-align: center;
  cursor: pointer;
  background: linear-gradient(97deg, #ffc727 0%, #9e40ba 61%, #7000ff 91%);
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  &:hover {
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    width: 319px;
    height: 50px;
  }
`,I=o.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;var z=i(9252);const S=i.p+"static/media/exit.e630083d99c67516c6d0428369e2c7e6.svg";const U=i.p+"static/media/straight_line.af8513ecc3ad6b6637fe1f628e65400e.svg";var F=i(9657),B=i(1672),M=i(5475);const $=()=>{const e=(0,a.wA)(),t=(0,F.Ub)({query:"(min-width: 768px)"}),i=(0,a.d4)(p.mB),o=(null===i||void 0===i?void 0:i.email)||"name.surname",r=o.indexOf("@"),d=o.slice(0,r),[s,x]=(0,n.useState)(!1),c=(0,n.useCallback)((()=>{document.body.style.overflow="auto"}),[]),$=(0,n.useCallback)((e=>{"Escape"===e.key&&(x(!1),c())}),[c]);return(0,n.useEffect)((()=>()=>{document.removeEventListener("keydown",$)}),[$]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("header",{children:(0,l.jsxs)(h,{children:[(0,l.jsx)(M.N_,{to:"/",children:(0,l.jsxs)(f,{children:[(0,l.jsx)(m,{src:z.A,alt:"logo"}),(0,l.jsx)(w,{children:"Money Guard"})]})}),(0,l.jsxs)(g,{children:[(0,l.jsx)(u,{children:d}),t&&(0,l.jsx)(b,{src:U,alt:"divider-icon"}),(0,l.jsxs)(j,{onClick:()=>{x(!0),document.body.style.overflow="hidden",document.addEventListener("keydown",$)},children:[(0,l.jsx)("img",{src:S,alt:"exit"}),t&&(0,l.jsx)(y,{children:"Exit"})]})]})]})}),s&&(0,l.jsx)(C,{children:(0,l.jsxs)(v,{children:[(0,l.jsxs)(I,{children:[(0,l.jsx)(L,{src:z.A,alt:"logo"}),(0,l.jsx)(k,{children:"Money Guard"})]}),(0,l.jsx)(A,{children:"Are you sure you want to logout?"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(_,{onClick:()=>{e((0,B.P3)()),x(!1),c(),document.removeEventListener("keydown",$)},children:"Logout"}),(0,l.jsx)(O,{onClick:()=>{x(!1),c()},children:"Cancel"})]})]})})]})};var V=i(1581);const E=(0,o.I4)(c.r)`
  @media only screen and (min-width: 768px) and (max-width: 1279px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 40px;
    padding-bottom: 28px;
  }
`,q=(o.I4.nav``,o.I4.ul`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;
  overflow: visible;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 12px;
  }
`),H=(0,o.I4)(M.k2)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  transition: all 0.3s;
  &:hover {
    filter: drop-shadow(0px 3px 10px rgba(255, 255, 255, 0.6));
  }
  &div {
    border-radius: 6px;
    width: 37px;
    height: 37px;
    overflow: hidden;
  }
  &.active {
    color: blue;
    border-radius: 5px;
    transition: all 0.3s;
    & div {
      background: white;
      border-radius: 6px;
      width: 37px;
      height: 37px;
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }

  & svg {
    fill: currentColor;
  }

  @media only screen and (min-width: 768px) {
    &.active {
      font-weight: 600;
      & div {
        width: 24px;
        height: 24px;
      }
    }

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`,D=o.I4.span`
  color: ${e=>{let{theme:t}=e;return t.colors.mainWhite}};
  font-size: 18px;
  margin-left: 20px;
`,N=()=>{const e=(0,F.Ub)({query:"(min-width: 768px)"}),t=(0,F.Ub)({query:"(max-width: 767px)"});return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("nav",{children:(0,l.jsx)(E,{children:(0,l.jsxs)(q,{children:[(0,l.jsx)("li",{children:(0,l.jsxs)(H,{to:"/",children:[(0,l.jsxs)("div",{children:[" ",(0,l.jsx)("svg",{width:"38",height:"38",children:(0,l.jsx)("use",{href:`${V.A}#homepage`})})]}),e&&(0,l.jsx)(D,{children:"Home"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(H,{to:"/statistics",children:[(0,l.jsx)("div",{children:(0,l.jsx)("svg",{width:"38",height:"38",children:(0,l.jsx)("use",{href:`${V.A}#statistics`})})}),e&&(0,l.jsx)(D,{children:"Statistics"})]})}),t?(0,l.jsx)("li",{children:(0,l.jsx)(H,{to:"/currency",children:(0,l.jsxs)("div",{children:[" ",(0,l.jsx)("svg",{width:"38",height:"38",children:(0,l.jsx)("use",{href:`${V.A}#dollar`})})]})})}):null]})})})})};var T=i(3216),Z=i(9175);const G=(0,o.Ay)(c.r)`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
    margin-bottom: 20px;

    &::before {
      content: '';
      width: 330px;
      height: 333px;
      border-radius: 333px;
      background: #b223c4;
      position: absolute;
      left: 420px;
      top: 600px;

      filter: blur(150px);
    }
  }
  @media only screen and (min-width: 1280px) {
    flex-direction: column;
    max-width: 480px;
    padding: 0;
    margin: 0;
    height: calc(100vh - 70px);
    justify-content: space-between;
    gap: 32px;
    border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.subColor}};
    &::after {
      content: '';
      width: 285px;
      height: 265.381px;
      top: 430px;
      left: calc(100vw - 400px);
      z-index: -1;
      position: absolute;
      border-radius: 362.381px;
      background: linear-gradient(220deg, #cd54eb 28.31%, #9902ff 66.76%);
      filter: blur(150px);
    }
  }
`,P=o.Ay.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  gap: 12px;

  margin-top: 12px;
  margin-bottom: 32px;
  @media only screen and (min-width: 768px) {
    gap: 28px;
    margin-bottom: 0;
    margin-top: 40px;
    align-items: baseline;
  }
  @media only screen and (min-width: 1280px) {
    &::before {
      content: '';
      width: 739px;
      height: 500px;
      border-radius: 366.105px;
      background: #5e3ede;

      filter: blur(200px);
      z-index: -1;

      position: absolute;
      left: -30px;
      top: 100px;
    }
    &::after {
      content: '';
      width: 363px;
      height: 366px;
      border-radius: 366px;
      background: #2f2da3;
      z-index: -1;
      filter: blur(150px);
      position: absolute;
      left: calc(100vw - 450px);
      top: 80px;
    }
  }
`,Y=(0,o.Ay)(c.r)`
  @media only screen and (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media only screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 480px auto;
    padding-left: 0;
    padding-right: 0;
    gap: 69px;
  }
`;var J=i(1017),W=i(2138);const R=o.Ay.div`
  opacity: ${e=>e.$opacity};
  position: fixed;
  bottom: 21vh;
  right: 4.5vw;
  height: 20px;
  font-size: 3rem;
  z-index: 100;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s;
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`,K=()=>{const[e,t]=(0,n.useState)(!1),[i,o]=(0,n.useState)(0);return window.addEventListener("scroll",(()=>{document.documentElement.scrollTop>200?(t(!0),o(1)):(t(!1),o(0))})),(0,l.jsx)(R,{$opacity:i,children:(0,l.jsx)(W.UN8,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},style:{display:e?"inline-block":"none"}})})},Q=()=>{const e=(0,F.Ub)({query:"(min-width: 768px)"});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)($,{}),(0,l.jsxs)(Y,{children:[(0,l.jsxs)(G,{children:[(0,l.jsxs)(P,{children:[(0,l.jsx)(N,{}),(0,l.jsx)(x,{})]}),e&&(0,l.jsx)(Z.A,{})]}),(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)(J.A,{}),children:(0,l.jsx)(T.sv,{})}),(0,l.jsx)(K,{})]})]})}}}]);
//# sourceMappingURL=70.48b6a091.chunk.js.map