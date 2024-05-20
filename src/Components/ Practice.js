import React, { useState } from 'react'

export const Practice = () => {
  const [cart ,setCart] =useState(0)

  const handleClick = ()=>{
    setCart(cart + 1);
  }
    
  return (
   <>
   <h1>Number of items in cart : {cart}</h1>
   <button onClick ={()=>handleClick()}>incease</button>  
   
   </>
  )
}
