import React, { useState, useEffect, useReducer  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Load,Supr } from './counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const user = useSelector( (state) => state.counter.user);



  const Commencer=  async  () => {
    const response = await fetch('https://reqres.in/api/users/');
    const data = await response.json();
    dispatch(Load(data.data)); 
  };


console.log(user)





  return (
<div>

<button onClick={() => Commencer()} >Commencer </button>

<button onClick={() => dispatch(increment())} >Modif</button>

<button onClick={() => dispatch(Supr(1))} >Supr</button>        



</div>





  )}


export default Counter;