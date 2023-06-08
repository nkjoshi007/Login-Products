import { AppBar, Box, Button, Container, FormControlLabel, Toolbar } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Outlet } from "react-router-dom"

export const Home =()=>{
    return(
        <>
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                 <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                   <h1><Link to='/' className="link mt-4">Apni Dukaan</Link></h1>
                   <h3 style={{marginTop:"5vh",marginLeft:'3rem'}}><Link to='/' className="link">Home</Link></h3>
                   <h3 style={{marginTop:"5vh",marginLeft:'3rem'}}><Link to='/Aboutus' className="link">About us</Link></h3>
                   <h3 style={{marginTop:"5vh",marginLeft:'3rem'}}><Link to='/Products' className="link">Products</Link></h3>
                   <h3 style={{marginTop:"5vh",marginLeft:'3rem'}}><Link to='/Contactus' className="link">Contact us</Link></h3>
                   <FormControlLabel sx={{marginLeft:"auto"}}  control={<Button color='secondary' variant='contained'><Link to='/' className="link">Signup</Link></Button>}/>
                   <FormControlLabel sx={{marginLeft:"auto"}}  control={<Link to='/cart' className="link"><ShoppingCartIcon/></Link>}/>
                 </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <Outlet/>
        </>
    )
}