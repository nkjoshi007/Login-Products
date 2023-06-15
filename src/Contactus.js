import "./App.css";
// import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  Container,
} from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import { Signup_validation } from "./Schemas";
import {  useState } from "react";
export const Contactus=()=>{
    
  const initialValues = {
    uname: "",
    mobile: "",
    email: "",
    Msg:""
  };
  
  const [data,setData] = useState([])

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: Signup_validation,
    onSubmit: (values,action) => {
      setData([...data,values])
      // action.resetForm()
    },
  });
  localStorage.setItem("user", JSON.stringify(data));
  // const Data = JSON.parse(localStorage.getItem("user"))
  //  console.log("users data",Data);
    return(
        <>
      <div style={{ padding: "4rem" }}>
        <Container fixed className="loginPage">
          <div style={{ marginBottom: "10vh" }}>
            <h1 style={{ textAlign: "center" }}>Contact us</h1>
            <hr />
          </div>
          <form onSubmit={Formik.handleSubmit}>
            <Grid
              container
              spacing={2}
              item
              sx={{ width: "40rem", mx: "auto" }}
            >
              <Grid xs={12} md={12}  item>
                <TextField
                sx={{width:"100%"}}
                  label="User Name"
                  variant="standard"
                  color="info"
                  type="text"
                  name="uname"
                  value={Formik.values.uname}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.uname && Formik.touched.uname ? (
                  <p style={{ color: "red" }}>{Formik.errors.uname}</p>
                ) : null}
              </Grid>
              <Grid xs={12} md={12} item>
                <TextField
                sx={{width:"100%"}}
                  label="Email Address"
                  variant="standard"
                  color="warning"
                  type="email"
                  name="email"
                  value={Formik.values.email}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.email && Formik.touched.email ? (
                  <p style={{ color: "red" }}>{Formik.errors.email}</p>
                ) : null}
              </Grid>
              <Grid xs={12} md={12} item>
                <TextField
                sx={{width:"100%"}}
                  label="Mobile Number"
                  variant="standard"
                  color="success"
                  type="mobilenumber"
                  name="mobile"
                  value={Formik.values.mobile}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.mobile && Formik.touched.mobile ? (
                  <p style={{ color: "red" }}>{Formik.errors.mobile}</p>
                ) : null}
              </Grid>
              <Grid xs={12} md={12} item>
                 <TextField
                        fullWidth
                        multiline
                        label="Mobile Number"
                  variant="standard"
                  color="success"
                 
                    />
                    <textarea 
                    style={{backgroundColor:"transparent",marginTop:"5vh",border:"2px solid black"}} 
                    placeholder="enter your message here"
                    rows={10}
                    cols={85}
                    type="text"
                  name="Msg"
                  value={Formik.values.mobile}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  />
                {Formik.errors.mobile && Formik.touched.mobile ? (
                  <p style={{ color: "red" }}>{Formik.errors.mobile}</p>
                ) : null}
              </Grid>

              <ButtonGroup sx={{ mx: "auto", mt: "2rem" }}>
                {/* <FormControlLabel control={<Button color='primary' variant='contained'>Login</Button>}/> */}
                <Button color="secondary" type="submit" variant="contained">
                  submit
                </Button>
              </ButtonGroup>
              <Grid xs={12} md={12} sx={{ mt: "2rem" }} item>
                <FormControlLabel
                  control={<Checkbox name="terms" />}
                  label="I agree to fill this form under the terms and conditions apply"
                />
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </>
 

    )
}