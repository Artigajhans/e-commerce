import{i as d,q as u,r as p,n as x,j as e,B as h,p as f}from"./index-85022d51.js";import{u as b,c as j,a}from"./index.esm-99a7fa0c.js";import{C as g}from"./Container-6e264dbc.js";import{R as E}from"./Row-f09c62b3.js";import{C}from"./Col-92704052.js";import{C as o}from"./Card-d4781f5b.js";import{F as i}from"./FormControl-67ae3d76.js";import"./CardHeaderContext-1545ef70.js";import"./index-911c7d00.js";const B=()=>{const l=d(),[n,{isSuccess:m}]=u(),s=b({enableReinitialize:!0,initialValues:{name:"",email:"",mobile:"",password:""},validationSchema:j({name:a().required("Enter Name"),email:a().required("Enter email"),mobile:a().required("Enter mobile"),password:a().required("Enter mobile")}),onSubmit:(r,{resetForm:c})=>{n(r),c()}});p.useEffect(()=>{m&&(x.success("customer register success"),l("/login"))},[m]);const t=r=>f({"form-control my-2":!0,"is-invalid":s.touched[r]&&s.errors[r],"is-valid":s.touched[r]&&!s.errors[r]});return e.jsx(g,{children:e.jsx(E,{children:e.jsx(C,{sm:{span:6,offset:3},children:e.jsxs(o,{className:"mb-5",children:[e.jsx(o.Header,{children:"Register"}),e.jsx(o.Body,{children:e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsx(i,{type:"text",placeholder:"Enter Product name",className:t("name"),...s.getFieldProps("name")}),e.jsx(i,{type:"email",placeholder:"Enter Product email",className:t("email"),...s.getFieldProps("email")}),e.jsx(i,{type:"number",placeholder:"Enter Product mobile",className:t("mobile"),...s.getFieldProps("mobile")}),e.jsx(i,{type:"text",placeholder:"Enter Product password",className:t("password"),...s.getFieldProps("password")}),e.jsx(h,{variant:"primary",className:"w-100",type:"submit",children:"Register"})]})})]})})})})};export{B as default};