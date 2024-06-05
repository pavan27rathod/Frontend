import React, { useState, useMemo } from 'react'

const UseMemoUseCallback = () => {
  const [count, setCount]=useState(0);
  const [count2, setCount2]=useState(0);
  const [count3, setCount3]=useState(0);
  const [count4, setCount4]= useState(0);
  // Without using useMemo
  const squaredValue=()=>{
    console.log("Expensive operation occurred");
    return count*count;
  }

  //Using useMemo
  const squaredValueUsingMemo=useMemo(()=>{
    console.log("Expensive operation occurred");
    return count2*count2;
  },[count2])

 
  return (
    <div>
      <h3>useMemo & usecallback</h3>
      <p>Q. What is useMemo ?</p>
      <p>It is a hook used to memoize the result of a function & cache it & recalculates only if the dependency changes.</p>

      <p>Consider we have added a button which will increment the count by 1 and after its increment count's squaredValue will be displayed. As of now we have not used useMemo </p>

      <p>Squared Value : {squaredValueUsingMemo}</p>
      <button onClick={()=>setCount(count+1)}>Increment By 1</button>

      <p>Now consider we are adding another button, that will decrement count value by 1</p>
      <p>Count : {count2}</p>
      <button onClick={()=>setCount2(count2-1)}>Decrement Count by 1</button>

      

    </div>
  )
}

export default UseMemoUseCallback;
