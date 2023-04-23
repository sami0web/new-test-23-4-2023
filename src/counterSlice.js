import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',

  initialState:{
    user:[],
  },


  reducers: {
    Load : (state, action) => {
    state.user= action.payload; },

    Supr:(state, action) =>{

    state.user.splice(action.index, 1)}

 
  },



})


export const { Load,Supr } = counterSlice.actions

export default counterSlice.reducer