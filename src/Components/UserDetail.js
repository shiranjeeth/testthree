import React, { useState } from 'react'

export const UserDetail = () => {
    const [name,Setname] = useState("shiran");
    const [age,Setage] = useState(23);
    const updateUser = ()=>{
        name == "shiran" ? Setname("starry"):Setname("shiran");
    }
    const updateage = ()=>{
        age == 23 ? Setage(24) : Setage(25);
    }
  return (
    <>
  <h1>UserDetail</h1>
  <h3>{name}</h3>
  <h3>{age}</h3>
<button onClick={()=>updateUser()}>changeName</button>
<button onClick={()=>updateage()}>changeAge</button>
    
    
    </>
  )
}
