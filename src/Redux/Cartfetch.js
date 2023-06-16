import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Cartfetch = createAsyncThunk(
    "Cart/getProducts",
    async(arg,{ rejectWithValue })=>{
        try{
            const data = await axios.get("https://dummyjson.com/products")
            console.log("data of Products : ",data)
            return data;
        }catch(error){
          rejectWithValue(error.response.data)
        }
    }
)
const Products=createSlice({
    name:"Products",
    initialState:{
        data:[],
        getData:false,
        message:""
    },
    reducers:{},
    extraReducers:{
        [Cartfetch.pending]:(state,{payload})=>{
            console.log("pending",payload)
            state.getData=false;
            state.message="the link has pending"
        },
        [Cartfetch.fulfilled]:(state,{payload})=>{
            console.log("fulfilled")
            state.data=payload.data.products;
            state.getData=false;
            state.message="the link has fulfilled"
        },
        [Cartfetch.rejected]:(state,{payload})=>{
            console.log("rejected")
            state.getData=false;
            state.message="the link has rejected"
        },
    }
})
export default Products;