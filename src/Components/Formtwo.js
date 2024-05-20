import React, { useState } from 'react'

export const Formtwo = () => {
    const [user,setUser] = useState({
        name:"Ram Kumar",
        age: 23,
        gender:"male",
        isMarried : true,
        country : "India",

    });
    function changeHandler(e){
  const name = e.target.name;
  const value = e.target.type === "checkbox" ? e.target.checked :e.target.value;
  setUser({...user, [name] : value});

    }
  return (
    <>
    <h1>
       {user.name}
       {user.age}
       {user.gender}
       {user.isMarried ?  "Married" : "Single"}
       {user.country}


    </h1>
<form>
<label>Name</label>
<input  type="text" placeholder='name' onChange={changeHandler} value={user.name}  name = "name"/>
<label>Age</label>
<input  type="text" placeholder='age' onChange={changeHandler}  value={user.age} name = "age"/>
<label>Gender</label>

<label>
<input  type="radio" placeholder='gender' onChange={changeHandler}  value="Male"  checked={user.gender == "Male"} name = "gender" />
male</label>

<label>
<input  type="radio" placeholder='gender' onChange={changeHandler}  value="Female" checked={user.gender == "Female" } name = "gender" />
female</label>

<label>
<input  type="checkbox" placeholder='maratial status' onChange={changeHandler} value={user.isMarried} checked={user.isMarried} name = "isMarried"/>
maratial status</label>

<label>Country</label>
<select name='country' value={user.country}  onChange={changeHandler}>
<option value ="India">India</option>
<option value ="Usa">Usa</option>
<option value ="Uk">Uk</option>

</select>

</form>


    
    
    </>
  )
}
