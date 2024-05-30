import React, { useState } from 'react'

function Counter() {
    //state creation
    const[counter,setCounter]=useState(0)
    //function definition
function increment(){
    setCounter(counter+1)
}
function decrement(){
  if (counter>0){
  setCounter(counter-1)
  }
}
function reset(){
  setCounter(0)
}
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        
    </div>
  )
}

export default Counter