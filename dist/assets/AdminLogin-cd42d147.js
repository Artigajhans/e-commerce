import{i as h,s as g,r as t,n,j as s,B as j,p as w}from"./index-85022d51.js";import{u as C,c as E,a as m}from"./index.esm-99a7fa0c.js";import{S}from"./Spinner-409d44ee.js";import{C as b}from"./Container-6e264dbc.js";import{R as F}from"./Row-f09c62b3.js";import{C as N}from"./Col-92704052.js";import{C as l,a as v}from"./Card-d4781f5b.js";import{F as d}from"./FormControl-67ae3d76.js";import"./CardHeaderContext-1545ef70.js";import"./index-911c7d00.js";const M=()=>{const c=h(),[p,{isSuccess:a,isLoading:u,isError:i,error:f}]=g(),e=C({enableReinitialize:!0,initialValues:{password:"",email:""},validationSchema:E({password:m().required("Enter Name"),email:m().required("Enter email")}),onSubmit:(r,{resetForm:x})=>{p(r),x()}});if(t.useEffect(()=>{a&&(n.success("admin login success"),c("/admin"))},[a]),t.useEffect(()=>{i&&n.error(f.data.message||"something went wrong")},[i]),u)return s.jsxs(s.Fragment,{children:["Please wait...",s.jsx(S,{})]});const o=r=>w({"form-control my-2":!0,"is-invalid":e.touched[r]&&e.errors[r],"is-valid":e.touched[r]&&!e.errors[r]});return s.jsx(b,{children:s.jsx(F,{children:s.jsx(N,{sm:{span:6,offset:3},children:s.jsxs(l,{className:"mb-5",children:[s.jsx(v,{children:" Admin Login"}),s.jsx(l.Body,{children:s.jsxs("form",{onSubmit:e.handleSubmit,children:[s.jsx(d,{type:"text",placeholder:"Enter Product email",className:o("email"),...e.getFieldProps("email")}),s.jsx(d,{type:"text",placeholder:"Enter Password name",className:o("password"),...e.getFieldProps("password")}),s.jsx(j,{className:"w-100 btn-lg",type:"submit",children:"Login"})]})})]})})})})};export{M as default};