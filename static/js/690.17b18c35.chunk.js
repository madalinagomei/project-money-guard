"use strict";(self.webpackChunkproject_money_guard=self.webpackChunkproject_money_guard||[]).push([[690],{9252:(e,r,i)=>{i.d(r,{A:()=>t});i(5043);const t=i.p+"static/media/logo_money_guard.fce5decc9b22ef0ca025e9630273e85c.svg"},4683:(e,r,i)=>{i.d(r,{Li:()=>p,jp:()=>c,V_:()=>x,q:()=>g,ah:()=>h,RQ:()=>u,PZ:()=>l});var t=i(1529),a=i(5475);const o=i.p+"static/media/bg-login-mobile.d23b0ea399498cd178ad.webp";var n=i(9641),s=i(1833),d=i(6983);const l=t.Ay.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1e0646;
  background-image: url(${o});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${n});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${s});
  }
`,p=t.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,c=t.Ay.img`
  margin-top: 80px;
  width: 25px;
  height: 25px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,x=t.Ay.span`
  color: #fbfbfb;
  font-size: 19px;

  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`,g=t.Ay.form`
  display: block;
  position: relative;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 620px;
    background: radial-gradient(#2f1f81, #ffffff3a);
    backdrop-filter: blur(50px);
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
  }
`,h=(0,t.Ay)(a.k2)`
  width: 319px;
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
`,u=(0,t.Ay)(d.A)`
  fieldset {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 0;
    &:hover {
      border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.backgrounds.active}};
    }
  }
`},5204:(e,r,i)=>{i.r(r),i.d(r,{default:()=>b});i(5043);var t=i(3516),a=i(899),o=i(3216),n=i(3003),s=i(1672),d=i(7243),l=i(4900),p=i(7555),c=i(3978),x=i(9252),g=i(4683),h=i(579);const u=a.Ik({email:a.Yj("Enter your email").email("Enter a valid email").required("Email is required"),password:a.Yj("Enter your password").min(6,"Password should be at least 6 characters length").required("Password is required")}),m=()=>{const e=(0,n.wA)(),r=(0,n.d4)(c.Ep),i=(0,t.Wx)({initialValues:{email:"",password:""},validationSchema:u,onSubmit:e=>{a(e)}});if(r)return(0,h.jsx)(o.C5,{to:"/"});const a=r=>{e((0,s.eB)(r))};return(0,h.jsx)(g.PZ,{children:(0,h.jsxs)(g.q,{onSubmit:i.handleSubmit,children:[(0,h.jsxs)(g.Li,{children:[(0,h.jsx)(g.jp,{src:x.A,alt:"logo"}),(0,h.jsx)(g.V_,{children:"Money Guard"})]}),(0,h.jsx)(g.RQ,{fullWidth:!0,id:"email",name:"email",label:(0,h.jsxs)("span",{style:{color:"rgba(255, 255, 255, 0.60)",fontSize:"18px",lineHeight:"27px"},children:[(0,h.jsx)(l.A,{style:{verticalAlign:"middle",marginRight:"20px"}})," ","E-mail"]}),type:"email",value:i.values.email,onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.email&&Boolean(i.errors.email),helperText:i.touched.email&&i.errors.email,InputProps:{inputProps:{style:{color:"#FFFFFF99"}}},style:{width:"90%",marginTop:"52px",outline:"none"}}),(0,h.jsx)(g.RQ,{fullWidth:!0,id:"password",name:"password",label:(0,h.jsxs)("span",{style:{color:"rgba(255, 255, 255, 0.60)",fontSize:"18px",lineHeight:"27px"},children:[(0,h.jsx)(p.A,{style:{verticalAlign:"middle",marginRight:"20px"}})," ","Password"]}),type:"password",value:i.values.password,onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.password&&Boolean(i.errors.password),helperText:i.touched.password&&i.errors.password,InputProps:{inputProps:{style:{color:"#FFFFFF99"}}},style:{width:"90%",marginTop:"40px"}}),(0,h.jsx)(d.A,{type:"submit",style:{width:"319px",height:"50px",background:"linear-gradient(97deg, #FFC727 0%, #9E40BA 61%, #7000FF 91%)",boxShadow:"1px 9px 15px rgba(0, 0, 0, 0.20)",borderRadius:"20px",color:"#ffffff",fontWeight:400,fontSize:"18px",textTransform:"uppercase",letterSpacing:"1.80",textAlign:"center",cursor:"pointer",marginTop:"52px",marginBottom:"20px",transition:"background 0.3s, font-weight 0.3s"},children:"Log In"}),(0,h.jsx)(g.ah,{to:"/registration",children:"Register"})]})})},b=()=>(0,h.jsx)("div",{children:(0,h.jsx)(m,{})})},9641:(e,r,i)=>{e.exports=i.p+"static/media/bg-login-tablet.ab18a063b82a9548ddfd.webp"},1833:(e,r,i)=>{e.exports=i.p+"static/media/bg-login-web.747b29205909b74382b4.webp"}}]);
//# sourceMappingURL=690.17b18c35.chunk.js.map