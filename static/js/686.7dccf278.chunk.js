"use strict";(self.webpackChunkproject_money_guard=self.webpackChunkproject_money_guard||[]).push([[686],{9252:(e,r,a)=>{a.d(r,{A:()=>i});a(5043);const i=a.p+"static/media/logo_money_guard.fce5decc9b22ef0ca025e9630273e85c.svg"},4683:(e,r,a)=>{a.d(r,{Li:()=>p,jp:()=>c,V_:()=>x,q:()=>g,ah:()=>m,RQ:()=>h,PZ:()=>l});var i=a(1529),o=a(5475);const t=a.p+"static/media/bg-login-mobile.d23b0ea399498cd178ad.webp";var n=a(9641),s=a(1833),d=a(6983);const l=i.Ay.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1e0646;
  background-image: url(${t});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${n});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${s});
  }
`,p=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,c=i.Ay.img`
  margin-top: 80px;
  width: 25px;
  height: 25px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,x=i.Ay.span`
  color: #fbfbfb;
  font-size: 19px;

  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`,g=i.Ay.form`
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
`,m=(0,i.Ay)(o.k2)`
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
`,h=(0,i.Ay)(d.A)`
  fieldset {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 0;
    &:hover {
      border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.backgrounds.active}};
    }
  }
`},4614:(e,r,a)=>{a.r(r),a.d(r,{default:()=>R});var i=a(5043),o=a(3516),t=a(899),n=a(3216),s=a(3003),d=a(1672),l=a(3978),p=a(7243),c=a(4900),x=a(7555),g=a(2177),m=a(9252),h=a(3034),u=a.n(h),b=a(579);const f=e=>{let{password:r}=e;const a=u()(r),i=100*a.score/4,o=()=>{switch(a.score){case 1:case 2:case 3:case 4:return"#FFC727";default:return"none"}};return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:"progress",style:{zIndex:"1",margin:"auto",width:"90%",height:"4px",borderRadius:"8px",backgroundColor:"#FFFFFF99",boxShadow:"0px 1px 8px rgba(255, 255, 255, 0.40)"},children:(0,b.jsx)("div",{className:"progress-bar",style:{width:`${i}%`,background:o(),height:"4px",borderRadius:"8px",zIndex:"2",boxShadow:"0px 1px 8px rgba(255, 199, 39, 0.50)",transition:"all 0.5s linear"}})})})};var w=a(4683),y=a(1529),j=a(5863);const F=a.p+"static/media/bg-register-mobile.d23b0ea399498cd178ad.webp",v=a.p+"static/media/bg-register-tablet.26ec0e1c8612aec121d0.webp",k=a.p+"static/media/bg-register-desktop.bcc8fbdd5891f99a5b26.webp",A=y.Ay.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1e0646;
  background-image: url(${F});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${v});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${k});
  }
`,P=y.Ay.form`
  display: block;
  position: relative;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 680px;
    background: radial-gradient(#2f1f81, #ffffff3a);
    backdrop-filter: blur(50px);
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
  }
`,C=((0,y.Ay)(j.A)`
  width: 100%;
`,t.Ik({name:t.Yj("Enter your name").required("Name is required"),email:t.Yj("Enter your email").email("Enter a valid email").required("Email is required"),password:t.Yj("Enter your password").min(6,"Password should be at least 6 characters length").required("Password is required"),confirmPassword:t.Yj("Confirm your password").oneOf([t.KR("password"),null],"Passwords must match").required("Confirm Password is required")})),B=()=>{const e=(0,s.wA)(),r=(0,s.d4)(l.Ep),[a,t]=(0,i.useState)(""),h=(0,o.Wx)({initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:C,onSubmit:e=>{u(e)}});if(r)return(0,b.jsx)(n.C5,{to:"/",replace:!0});const u=r=>{e((0,d.C8)(r))};return(0,b.jsx)(A,{children:(0,b.jsxs)(P,{onSubmit:h.handleSubmit,children:[(0,b.jsxs)(w.Li,{children:[(0,b.jsx)(w.jp,{src:m.A,alt:"logo",style:{marginTop:"30px"}}),(0,b.jsx)(w.V_,{children:"Money Guard"})]}),(0,b.jsx)(w.RQ,{fullWidth:!0,id:"name",name:"name",label:(0,b.jsxs)("span",{style:{color:"rgba(255, 255, 255, 0.60)",fontSize:"18px",lineHeight:"27px"},children:[(0,b.jsx)(g.A,{style:{verticalAlign:"middle",marginRight:"20px"}})," ","Name"]}),type:"text",value:h.values.name,onChange:h.handleChange,onBlur:h.handleBlur,error:h.touched.name&&Boolean(h.errors.name),helperText:h.touched.name&&h.errors.name,InputProps:{inputProps:{style:{color:"#FFFFFF99"}}},style:{width:"90%",marginTop:"20px"}}),(0,b.jsx)(w.RQ,{fullWidth:!0,id:"email",name:"email",label:(0,b.jsxs)("span",{style:{color:"rgba(255, 255, 255, 0.60)",fontSize:"18px",lineHeight:"27px"},children:[(0,b.jsx)(c.A,{style:{verticalAlign:"middle",marginRight:"20px"}})," ","Email"]}),type:"email",value:h.values.email,onChange:h.handleChange,onBlur:h.handleBlur,error:h.touched.email&&Boolean(h.errors.email),helperText:h.touched.email&&h.errors.email,InputProps:{inputProps:{style:{color:"#FFFFFF99"}}},style:{width:"90%",marginTop:"20px"}}),(0,b.jsx)(w.RQ,{fullWidth:!0,id:"password",name:"password",label:(0,b.jsxs)("span",{style:{color:"rgba(255, 255, 255, 0.60)",fontSize:"18px",lineHeight:"27px"},children:[(0,b.jsx)(x.A,{style:{verticalAlign:"middle",marginRight:"20px"}})," ","Password"]}),type:"password",value:h.values.password,onChange:e=>{h.handleChange(e),t(e.target.value)},onBlur:h.handleBlur,error:h.touched.password&&Boolean(h.errors.password),helperText:h.touched.password&&h.errors.password,InputProps:{inputProps:{style:{color:"#FFFFFF99"}}},style:{width:"90%",marginTop:"20px"}}),(0,b.jsx)(w.RQ,{fullWidth:!0,id:"confirmPassword",name:"confirmPassword",label:(0,b.jsxs)("span",{style:{color:"rgba(255, 255, 255, 0.60)",fontSize:"18px",lineHeight:"27px"},children:[(0,b.jsx)(x.A,{style:{verticalAlign:"middle",marginRight:"20px"}})," ","Confirm password"]}),type:"password",value:h.values.confirmPassword,onChange:h.handleChange,onBlur:h.handleBlur,error:h.touched.confirmPassword&&Boolean(h.errors.confirmPassword),helperText:h.touched.confirmPassword&&h.errors.confirmPassword,InputProps:{inputProps:{style:{color:"#FFFFFF99"}}},style:{width:"90%",marginTop:"20px",marginBottom:"5px"}}),(0,b.jsx)("div",{children:(0,b.jsx)(f,{password:a})}),(0,b.jsx)(p.A,{type:"submit",style:{width:"319px",height:"50px",background:"linear-gradient(97deg, #FFC727 0%, #9E40BA 61%, #7000FF 91%)",boxShadow:"1px 9px 15px rgba(0, 0, 0, 0.20)",borderRadius:"20px",color:"#ffffff",fontWeight:400,fontSize:"18px",textTransform:"uppercase",letterSpacing:"1.80",textAlign:"center",cursor:"pointer",marginTop:"40px",marginBottom:"20px",transition:"background 0.3s, font-weight 0.3s"},children:"Register"}),(0,b.jsx)(w.ah,{to:"/login",children:"Log in"})]})})},R=()=>(0,b.jsx)("div",{children:(0,b.jsx)(B,{})})},9641:(e,r,a)=>{e.exports=a.p+"static/media/bg-login-tablet.ab18a063b82a9548ddfd.webp"},1833:(e,r,a)=>{e.exports=a.p+"static/media/bg-login-web.747b29205909b74382b4.webp"}}]);
//# sourceMappingURL=686.7dccf278.chunk.js.map