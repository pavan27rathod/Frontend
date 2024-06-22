import React from 'react'
import { useState } from 'react'
const UseStateHook = () => {
    const [count, setCount] =useState(0);
    const [count2, setCount2]=useState(0);
    const [value, setValue]=useState("")
    const [userData, setUserData]=useState({
        firstName:"",
        lastName:"",
        email:""
    })
    const handleInputChange=(e)=>{
        const {name, value}=e.target;
        setUserData({...userData, [name]:value})
    }
    console.log(userData);
    

    const increment = () => {
        setCount(count+1);
    }
    const incrementBy3=()=>{
        setCount2((prev)=>prev+1);
        setCount2((prev)=>prev+1);
        setCount2((prev)=>prev+1);
    }
  return (
    <>
        <h3>useState Hook</h3>
        {/* useState is a React hook used to create a local state variable.
         This local state variable manages the state of a functional components & updates them */}
         <p>Example:</p>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>

        <p>Q. What will be the output of following code ?</p>
        <span>Count: {count2}</span>
        <button onClick={incrementBy3}>Increment By 3</button>
         <p>After clicking on button it should increase by 3 as we have set the logic to increase by 3 but why it is not increasing by only 1 ?</p>
         <p>Because we have used following logic in incrementBy3</p>
         <pre>
            setCount2(count2+1);<br/>
            setCount2(count2+1);<br/>
            setCount2(count2+1);<br/>
         </pre>
         <p>It is asynchronous operation so everytime count2 will retain its original value </p>
         <p>To fix this we need to make it synchronous operation by holding the previous value after every operation, like <br/>
            <pre>
                <code>
                    {/* setCount2((prev)=>prev+1)<br/>
                    setCount2((prev)=>prev+1)<br/>
                    setCount2((prev)=>prev+1)<br/> */}

                </code>
            </pre>
         </p>

         <p>Q. What is two way data binding & how can you achieve in React ?</p>
         <p>Input Value : {value}</p>
         <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />

         <p>Q. Build a form containing First Name, Last Name & Email. Use only one state to manage all fields</p>
         <h4>Form</h4>
         <input type='text' placeholder='First Name' name='firstName' onChange={handleInputChange} /><br/>
         <input type='text' placeholder='Last Name' name='lastName' onChange={handleInputChange}/><br/>
         <input type='email' placeholder='Email' name='email' onChange={handleInputChange}/><br/>
        
    </>
  )
}

export default UseStateHook