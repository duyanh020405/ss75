import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'
//ham lay tat ca san pham
export const getAllProduct:any =createAsyncThunk("product/getAllProduct",async ()=>{
    const response =await axios.get("http://localhost:8080/products")
    return response.data
})
export const addToList:any =createAsyncThunk("product/addToList",async (item:any)=>{
    const response = await axios.post("http://localhost:8080/products",item)
    return response.data
})
export const getAllCart:any =createAsyncThunk("product/getAllCart",async ()=>{
    const response =await axios.get("http://localhost:8080/cart")
    return response.data
})
export const addToCart:any =createAsyncThunk("product/addToCart",async (item:any)=>{
    const response = await axios.post("http://localhost:8080/cart",item)
    return response.data
})
export const delteteItemCart:any =createAsyncThunk("product/deleteItem",async (item:any)=>{
    const response = await axios.delete(`http://localhost:8080/${item.id}`,item)
    return item.id
})

const productReducer = createSlice({
    name:"reducer",
    initialState:{
        products:[],
        cart:[]
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            state.products =action.payload
        })
        .addCase(getAllCart.fulfilled,(state,action)=>{
            state.cart =action.payload
        })
        .addCase(delteteItemCart.fulfilled, (state, action) => {
            state.cart = state.cart.filter((item:any) => item.id !== action.payload);
          });
    }
})
export default productReducer.reducer
