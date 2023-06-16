import { AppBar, Badge, Box, Button, ButtonGroup, Container, FormControlLabel, Toolbar } from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Navbar=()=>{
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
    const Cart_len =useSelector((state)=>state.cartreducer.Cart)

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
                   <h3 style={{marginTop:"5vh",marginLeft:'3rem'}}><Link to='/productsdata' className="link">Products Data</Link></h3>
                   {isAuthenticated &&<h3 style={{marginTop:"5vh",marginLeft:'auto',border:"1px solid white"}}><Link to='/Contactus' className="link"> {user.name}</Link></h3>}
                   <FormControlLabel sx={{ml:"auto"}}  
                   control={<ButtonGroup>
                    {/* <Button sx={{mx:"2rem",}} color='secondary' variant='contained'><Link to='/signup' className="link">Signup</Link></Button> */}
                {isAuthenticated ? (
                    <>
                   <Button sx={{mx:2}} color='secondary' variant='contained' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
                <FormControlLabel sx={{marginLeft:"auto"}}  control={<Link to='/cart' className="link"><Badge badgeContent={Cart_len.length} color="secondary"><ShoppingCartIcon fontSize="large"  sx={{color:"black"}}/></Badge></Link>}/>
                   </>
                ):(
                   <Button sx={{mx:2}} color='secondary' variant='contained' onClick={() => loginWithRedirect()}>Login</Button>
                )}
                   </ButtonGroup>}/>
                  </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <Outlet/>
        </>
    )
}