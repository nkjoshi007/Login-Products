import { combineReducers } from "redux"
import cartreducer from "./reducer"
import Products from "../Cartfetch"
// import  {Logincheck}  from "./userReducer"
const cart_red=combineReducers({
 cartreducer,Cart:Products.reducer
})
export default cart_red;