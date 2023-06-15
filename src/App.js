import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./Signup"
import { Aboutus } from "./Aboutus"
import { Contactus } from "./Contactus"
import { Home } from "./Home"
import { Showcart } from "./Showcart"
import { Login } from "./Login"
import { ProductsDetails } from "./Products_Details"
import { Navbar } from "./Navbar"
import { showProducts } from "./showProducts"
import { ProductsData } from "./ProductsData"

export const App =()=>{
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/signup" Component={Signup}/>
      <Route exact path="/signup" Component={Signup}/>
      <Route exact path="/login" Component={Login}/>
      <Route exact path="/Aboutus" Component={Aboutus}/>
      <Route exact path="/Contactus" Component={Contactus}/>
      <Route exact path="/Products" Component={showProducts}/>
      <Route exact path="/cart" Component={Showcart}/>
      <Route exact path="/productsdata" Component={ProductsData}/>
      <Route path="/Products/:Product_id" element={<ProductsDetails/>} exact />
      {/* <Route exact path="/Products/:Product_id" component={Products_details} /> */}
    </Routes>
    </BrowserRouter>
      <div className="footer">
       @Copyright - ApniDukaan.com All rights Reserved By NK JOSHI
      </div>
    </>
  )
}