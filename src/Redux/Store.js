// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cart_red from "./Reducers.js/main";
const middleware=[thunk]
const  store = createStore(
        cart_red,applyMiddleware(...middleware)
    
)
export default store;