import{i as h,s as g,r as t,n,j as s,B as j,p as w}from"./index-cf5e3556.js";import{u as C,c as E,a as m}from"./index.esm-e77a5b05.js";import{S}from"./Spinner-c00d3328.js";import{C as b}from"./Container-0c44e838.js";import{R as F}from"./Row-58f2e8f7.js";import{C as N}from"./Col-412e4646.js";import{C as l,a as v}from"./Card-f3c16912.js";import{F as d}from"./FormControl-bd608571.js";import"./CardHeaderContext-5ca370df.js";import"./index-b3d977b9.js";const M=()=>{const c=h(),[u,{isSuccess:a,isLoading:p,isError:i,error:f}]=g(),e=C({enableReinitialize:!0,initialValues:{password:"",email:""},validationSchema:E({password:m().required("Enter Name"),email:m().required("Enter email")}),onSubmit:(r,{resetForm:x})=>{u(r),x()}});if(t.useEffect(()=>{a&&(n.success("admin login success"),c("/admin"))},[a]),t.useEffect(()=>{i&&n.error(f.data.message||"something went wrong")},[i]),p)return s.jsxs(s.Fragment,{children:["Please wait...",s.jsx(S,{})]});const o=r=>w({"form-control my-2":!0,"is-invalid":e.touched[r]&&e.errors[r],"is-valid":e.touched[r]&&!e.errors[r]});return s.jsx(b,{children:s.jsx(F,{children:s.jsx(N,{sm:{span:6,offset:3},children:s.jsxs(l,{className:"mb-5",children:[s.jsx(v,{children:" Admin Login"}),s.jsx(l.Body,{children:s.jsxs("form",{onSubmit:e.handleSubmit,children:[s.jsx(d,{type:"text",placeholder:"Enter Product email",className:o("email"),...e.getFieldProps("email")}),s.jsx(d,{type:"text",placeholder:"Enter Product name",className:o("password"),...e.getFieldProps("password")}),s.jsx(j,{className:"w-100 btn-lg",type:"submit",children:"Login"})]})})]})})})})};export{M as default};
