import './App.css';
import React from 'react';
import {Button, ButtonGroup, Checkbox, Container,  FormControl,  InputLabel,  MenuItem, Select} from "@mui/material"
import {TextField} from "@mui/material"
import {Grid} from "@mui/material"
import {FormControlLabel} from "@mui/material"
import { useFormik } from 'formik';
import { Signup_validation } from './Schemas';
import { Link } from 'react-router-dom';

const initialValues={
  fname:"",
  lname:"",
  mobile:"",
  password:"",
  email:"",
  faname:"",
  gender:"",
  DOB:"",
  terms:false
}
export const Signup=()=> {
 const Formik= useFormik({
    initialValues:initialValues,
    validationSchema:Signup_validation,
    onSubmit:(values)=>{
console.log("signup",values)
    }
  })
  // console.log("Formik",Formik)
  return (
    <>
<div style={{padding:'4rem'}}>
<Container fixed className='loginPage'>
<div style={{marginBottom:'100px'}}>
<h1 style={{textAlign:'center'}}>signup Page</h1>
<hr/>
</div>
<form onSubmit={Formik.handleSubmit}>
  <Grid container spacing={2} item sx={{width:'40rem',mx:'auto'}}>
  <Grid xs={6} md={6} item>
  <TextField label="First name" variant="outlined" color='secondary' type='text' name='fname' value={Formik.values.fname} onChange={Formik.handleChange} onBlur={Formik.handleBlur}/>
  {Formik.errors.fname && Formik.touched.fname ? <p style={{color:"red"}}>{Formik.errors.fname}</p>:null}
  </Grid>
  <Grid xs={6} md={6} item>
  <TextField label="Last name" variant="outlined" color='info' type='text' name='lname' value={Formik.values.lname} onChange={Formik.handleChange} onBlur={Formik.handleBlur}/>
  {Formik.errors.lname && Formik.touched.lname ? <p style={{color:"red"}}>{Formik.errors.lname}</p>:null}
  </Grid>
  <Grid xs={6} md={6} item>
  <TextField label="Email Address" variant="outlined" color='warning' type='email' name='email' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur}/>
  {Formik.errors.email && Formik.touched.email ? <p style={{color:"red"}}>{Formik.errors.email}</p>:null}
  </Grid>
  <Grid xs={6} md={6} item>
  <TextField label="Password" variant="outlined" color='warning' type='password' name='password' value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur}/>
  {Formik.errors.password && Formik.touched.password ? <p style={{color:"red"}}>{Formik.errors.password}</p>:null}
  </Grid>
  <Grid xs={6} md={6} item>
  <TextField label="Father's name" variant="outlined" color='success' type='text' name='faname' value={Formik.values.faname} onChange={Formik.handleChange} onBlur={Formik.handleBlur}/>
  {Formik.errors.faname && Formik.touched.faname ? <p style={{color:"red"}}>{Formik.errors.faname}</p>:null}
  </Grid>
  <Grid xs={6} md={6} item>
  <TextField label="Mobile" variant="outlined" color='success' type='mobilenumber' name='mobile' value={Formik.values.mobile} onChange={Formik.handleChange} onBlur={Formik.handleBlur}/>
  {Formik.errors.mobile && Formik.touched.mobile ? <p style={{color:"red"}}>{Formik.errors.mobile}</p>:null}
  </Grid>
  <Grid xs={6} md={6} item>
    <FormControl fullWidth>
      <InputLabel>Gender</InputLabel>
      <Select 
      labelId="demo-simple-select-label"
      id="demo-simple-select"
          label="Age"
          name='gender'
          value={Formik.values.gender} onChange={Formik.handleChange} onBlur={Formik.handleBlur}>
        <MenuItem value={'Male'}>Male</MenuItem>
        <MenuItem value={'Female'}>Female</MenuItem>
        <MenuItem value={'other'}>other</MenuItem>
      </Select>
    </FormControl>
    {Formik.errors.gender && Formik.touched.gender ? <p style={{color:"red"}}>{Formik.errors.gender}</p>:null}
  </Grid>
  <Grid xs={12} md={12} item sx={{mt:'2rem'}}>
  <input className='DOB'  label={"Date of birth"} type='date' name='DOB' value={Formik.values.DOB} onChange={Formik.handleChange} onBlur={Formik.handleBlur}/>
  {Formik.errors.DOB && Formik.touched.DOB ? <p style={{color:"red"}}>{Formik.errors.DOB}</p>:null}
  </Grid>
<ButtonGroup sx={{mx:"auto",mt:"2rem"}}>
 {/* <FormControlLabel control={<Button color='primary' variant='contained'>Login</Button>}/> */}
 <Button color='secondary' type='submit' variant='contained'>signup</Button>
</ButtonGroup>
<Grid xs={12} md={12}  item>
<p style={{textAlign:"center"}}><strong style={{marginRight:"3px"}}>you have already an account?</strong><Link className='link1' to="/">Login</Link></p>
</Grid>
<Grid xs={12} md={12} sx={{mt:"2rem"}}>
<FormControlLabel control={<Checkbox name='terms' />} label="I agree to fill this form under the terms and conditions apply" />
{Formik.errors.terms && Formik.touched.terms ? <p style={{color:"red"}}>{Formik.errors.terms}</p>:null}

</Grid>
</Grid>
</form>
</Container>
</div>
</>
  );
}

