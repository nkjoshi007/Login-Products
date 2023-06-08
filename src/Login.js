import './App.css';
import React from 'react';
import {Button, ButtonGroup, Container} from "@mui/material"
import {TextField} from "@mui/material"
import {Grid} from "@mui/material"
import { useFormik } from 'formik';
import { Signup_validation } from './Schemas';

const initialValues={
  fname:"",
  lname:"",
  mobile:"",
  password:"",
  email:"",
  faname:"",
  gender:"",
  DOB:""
}
export const Login=()=> {
 const Formik= useFormik({
    initialValues:initialValues,
    validationSchema:Signup_validation,
    onSubmit:(values)=>{
    console.log("Login",values)
    }
  })
  // console.log("Formik",Formik)
  return (
    <>
<div style={{padding:'4rem'}}>
<Container fixed className='loginPage'>
<div style={{marginBottom:'100px'}}>
<h1 style={{textAlign:'center'}}>Login Page</h1>
<hr/>
</div>
<form onSubmit={Formik.handleSubmit}>
  <Grid container spacing={2} item sx={{width:'40rem',mx:'auto'}}>
  <Grid xs={12} md={12} sx={{ml:"12rem"}} item>
  <TextField label="Email Address" variant="outlined" color='warning' type='email' name='email' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur}/>
  {Formik.errors.email && Formik.touched.email ? <p style={{color:"red"}}>{Formik.errors.email}</p>:null}
  </Grid>
  <Grid xs={12} md={12} sx={{ml:"12rem",my:"3rem"}} item >
  <TextField label="Password" variant="outlined" color='warning' type='password' name='password' value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur}/>
  {Formik.errors.password && Formik.touched.password ? <p style={{color:"red"}}>{Formik.errors.password}</p>:null}
  </Grid>
<ButtonGroup sx={{mx:"auto",mt:"2rem"}}>
 {/* <FormControlLabel control={<Button color='primary' variant='contained'>Login</Button>}/> */}
 <Button color='secondary' type='submit' variant='contained'>Login</Button>
</ButtonGroup>

{/* <Grid xs={12} md={12} sx={{mt:"2rem"}}>
<FormControlLabel control={<Checkbox />} label="I agree to fill this form under the terms and conditions apply" />
</Grid> */}
</Grid>
</form>
</Container>
</div>
</>
  );
}

