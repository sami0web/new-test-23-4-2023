import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',

  initialState:{
    user:[],
  },


  reducers: {

    Load : (state, action) => {
    state.user= action.payload;
    
    },
 
  },



})


export const { Load } = counterSlice.actions

export default counterSlice.reducer