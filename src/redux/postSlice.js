import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('getPosts' , async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
})

export const getUsers = createAsyncThunk('getUsers' , async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
})

const postSlice = createSlice({
    name : 'Posts and Users',
    initialState : {
        posts : [],
        users : [],
    },
    extraReducers : (builder)=>{
        builder.addCase(getPosts.fulfilled , (state , action)=>{
            console.log(action.payload)
            return {...state , posts : action.payload}
        })
        builder.addCase(getUsers.fulfilled , (state , action)=>{
            console.log(action.payload)
            return {
                ...state , users : action.payload
            }
        })
    }
})

export default postSlice.reducer