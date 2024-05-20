import React, { useState } from 'react'

export const Formone = () => { 
    const [user,setUser] = useState({name:"Ram",lname:"kumar",age:25});

    function changeHandler(e){
setUser({...user,[e.target.name]:[e.target.value]});
    }
  return (
    <>
        <h2> {user.name}, {user.lname}, {user.age} </h2>
   
   <input type="text" placeholder='firstname'   onChange={changeHandler}  name='name' value={user.name}/>
   <input type="text"  placeholder='lastname'onChange={changeHandler} name="lname"  value={user.lname}/>
   <input  type="text" placeholder='Age'  onChange={changeHandler}  name="age" value={user.age} />
    
    </>

  ) 
}
