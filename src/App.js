import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./Signup"
import { Aboutus } from "./Aboutus"
import { Contactus } from "./Contactus"
import { Product } from "./Products"
import { Home } from "./Home"
import { Showcart } from "./Showcart"

export const App =()=>{
  return(
    <>
    <BrowserRouter>
    <Home/>
    <Routes>
      <Route exact path="/" Component={Signup}/>
      <Route exact path="/" Component={Signup}/>
      <Route exact path="/Aboutus" Component={Aboutus}/>
      <Route exact path="/Contactus" Component={Contactus}/>
      <Route exact path="/Products" Component={Product}/>
      <Route exact path="/cart" Component={Showcart}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}