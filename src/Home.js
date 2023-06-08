import { AppBar, Badge, Box, Button, ButtonGroup, Container, FormControlLabel, Toolbar } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Outlet } from "react-router-dom"
import { useSelector } from "react-redux";

export const Home =()=>{
    const Cart_len =useSelector((state)=>state.cartreducer.Cart)
    console.log("length",Cart_len);
    return(
        <>
        <AppBar position="sticky">
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                 <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                   <h1><Link to='/' className="link mt-4">Apni Dukaan</Link></h1>
                   <h3 style={{marginTop:"5vh",marginLeft:'3rem'}}><Link to='/' className="link">Home</Link></h3>
                   <h3 style={{marginTop:"5vh",marginLeft:'3rem'}}><Link to='/Aboutus' className="link">About us</Link></h3>
                   <h3 style={{marginTop:"5vh",marginLeft:'3rem'}}><Link to='/Products' className="link">Products</Link></h3>
                   <h3 style={{marginTop:"5vh",marginLeft:'3rem'}}><Link to='/Contactus' className="link">Contact us</Link></h3>
                   <FormControlLabel sx={{ml:"30vw"}}  
                   control={<ButtonGroup>
                    <Button sx={{mx:"2rem",}} color='secondary' variant='contained'><Link to='/signup' className="link">Signup</Link></Button>
                   <Button color='secondary' variant='contained'><Link to='/' className="link">Login</Link></Button>
                   </ButtonGroup>}/>
                   <FormControlLabel sx={{marginLeft:"auto"}}  control={<Link to='/cart' className="link"><Badge badgeContent={Cart_len.length} color="secondary"><ShoppingCartIcon fontSize="large"  sx={{color:"black"}}/></Badge></Link>}/>
                  </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <Outlet/>
        </>
    )
}