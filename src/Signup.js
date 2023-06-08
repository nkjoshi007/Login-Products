import './App.css';
import React from 'react';
import {Button, ButtonGroup, Checkbox, Container,  FormControl,  InputLabel,  MenuItem, Select} from "@mui/material"
import {TextField} from "@mui/material"
import {Grid} from "@mui/material"
import {FormControlLabel} from "@mui/material"
export const Signup=()=> {
  return (
    <>
<div style={{padding:'4rem'}}>
<Container fixed className='loginPage'>
<div style={{marginBottom:'100px'}}>
<h1 style={{textAlign:'center'}}>signup Page</h1>
<hr/>
</div>
<Grid container spacing={2} item sx={{width:'40rem',mx:'auto'}}>
  <Grid xs={6} md={6} item>
  <TextField label="First name" variant="outlined" color='secondary' type='text'/>
  </Grid>
  <Grid xs={6} md={6} item>
  <TextField label="Last name" variant="outlined" color='info' type='text'/>
  </Grid>
  <Grid xs={6} md={6} item>
  <TextField label="Email Address" variant="outlined" color='warning' type='gmail'/>
  </Grid>
  <Grid xs={6} md={6} item>
  <TextField label="Password" variant="outlined" color='warning' type='password'/>
  </Grid>
  <Grid xs={6} md={6} item>
  <TextField label="Father's name" variant="outlined" color='success' type='mobilenumber'/>
  </Grid>
  <Grid xs={6} md={6} item>
  <TextField label="Mobile" variant="outlined" color='success' type='mobilenumber'/>
  </Grid>
  <Grid xs={6} md={6} item>
    <FormControl fullWidth>
      <InputLabel>Gender</InputLabel>
      <Select 
      labelId="demo-simple-select-label"
      id="demo-simple-select"
          label="Age"
          >
        <MenuItem value={'Male'}>Male</MenuItem>
        <MenuItem value={'Female'}>Female</MenuItem>
        <MenuItem value={'other'}>other</MenuItem>
      </Select>
    </FormControl>
  </Grid>
  <Grid xs={6} md={6} item sx={{mt:'2rem'}}>
  <TextField label={"Date of birth"}/>
  </Grid>
<ButtonGroup sx={{mx:"auto",mt:"2rem"}}>
 {/* <FormControlLabel control={<Button color='primary' variant='contained'>Login</Button>}/> */}
 <FormControlLabel  control={<Button color='secondary' variant='contained'>signup</Button>}/>
</ButtonGroup>
<Grid xs={12} md={12} sx={{mt:"2rem"}}>
<FormControlLabel control={<Checkbox />} label="I agree to fill this form under the terms and conditions apply" />
</Grid>
</Grid>
</Container>
</div>
</>
  );
}

