import React, { useState, useMemo } from 'react'

const UseMemoUseCallback = () => {
  
  const [count, setCount]=useState(0);
  const [countValue, setCountValue]=useState(0);
  const squaredValue=useMemo(()=>{
    console.log("Heavy operation performed...");
    return count*count;
  },[count])

 
  return (
    <div>
      <h3>useMemo & usecallback</h3>
      <p>Q. What is useMemo ?</p>
      <p>1.It is a hook used to memoize the result of a function & cache it & recalculates only if the dependency changes.<br/>
         2. The component re-renders when any of the state changes, it doesn't matter if the state change directly affects all parts of the UI.
         <br/>
         3. If you have multiple state variables inside your component, whenever any of them changes, component gets re-rendered 
      </p>

      <p>4. Consider we are creating 2 buttons, first button will calculate the squared value as well as it will increase the count. <br/>
          The second button will increase its count only. Whenever I click on second button, function associated with first button will also be triggered as the component re-renders for each and every state change. 
          <br/>
          <br/>
         <span>Squared Value : {squaredValue}</span> <br></br>
         <button onClick={()=>setCount(count+1)}>Increase by 1</button>
         <br></br>
         <span>Count : {countValue}</span> <br />
         <button onClick={()=>setCountValue(countValue+1)}>Increase By 1</button>
      </p>

      <p>5. Retriggering of functions after re-rendering mat lead to performance issues, so here the hook useMemo comes into the picture <br/>
         6. useMemo hook memoizes the result of a function & caches it & recalculates only if the dependency changes. <br />
         7. useMemo hook helps to avoid retriggering of a function & helps in performance issues.
      </p> 
        <p>Q.When should you use useMemo</p>
        <p>
          1. Whenever you are performing heavy operations
          <br />
          2. When you want to prevent recalculations across re-renders  <br />
          3. When you derive a state from props or a state, useMemo can be used to avoid unnecessary recalculations  <br/>
          4. When using context provider, useMemo can be used to avoid recalculations.
        </p>

        <p>Q. What's the difference between useMemo and useState</p>
        <p>
          useMemo memoizes the result of a function and caches it & returns the cached result without causing re-render while useState updates the component after every state changes.
        </p>

        <p>Q. What is useCallback ?</p>
        <p>1. It is a hook used to memoize a provided callback function , returning the memoized version of a callback function only when the dependency changes. </p> <br />
        <p>2. useCallback hook returns the memoized version of a callback function while useMemo hook returns the memoized result of a callback function.</p> <br />
        <p>3. useCallback is useful for optimizing performance, especially in large and complex applications where unnecessary re-renders can impact performance.</p> <br />
        <p>4. The callback function wrapped with useCallback is only re-created when one of its dependencies changes. If the dependencies do not change between renders, the same memoized function is used.</p> <br/>
        <p>5. When the dependency array for useCallback is empty ([]), the callback function is created only once and will never change across re-renders. </p>

        
    </div>
  )
}

export default UseMemoUseCallback;

//useMemo example, use this  not the above one

// import React, { useMemo, useState } from 'react'

// const UseMemoUseCallback = () => {
//   const [count, setCount]=useState(0);
//   const [countValue, setCountValue]=useState(0);

//   const squaredValue=useMemo(()=>{
//     console.log("Excessive operation performed..");
//     return count*count;
//   },[count])

//   return (
//     <div>
//       <p>Squared Value : {squaredValue}</p>
//       <button onClick={()=>setCount(count+1)}>Increase by 1</button>

//       <p>Count : {countValue}</p>
//       <button onClick={()=>setCountValue(countValue+1)}>Increase By 1</button>
//     </div>
//   )
// }

// export default UseMemoUseCallback;

//useCallback example, use this example not the above one

// import React, { useMemo, useState, useCallback } from 'react';

// const UseMemoUseCallback = () => {
//   const [count, setCount] = useState(0);
//   const [countValue, setCountValue] = useState(0);

//   const squaredValue = useMemo(() => {
//     console.log("Excessive operation performed..");
//     return count * count;
//   }, [count]);

//   const handleIncreaseCount = useCallback(() => {
//     console.log("Current Count: ", count);
//     setCount(count + 1);
//   }, [count]);

//   const handleIncreaseCountValue = useCallback(() => {
//     console.log("Current Count Value : ", countValue);
//     setCountValue(countValue + 1);
//   }, [countValue]);

//   return (
//     <div>
//       <p>Squared Value: {squaredValue}</p>
//       <button onClick={handleIncreaseCount}>Increase by 1</button>

//       <p>Count: {countValue}</p>
//       <button onClick={handleIncreaseCountValue}>Increase by 1</button>
//     </div>
//   );
// };

// export default UseMemoUseCallback;
