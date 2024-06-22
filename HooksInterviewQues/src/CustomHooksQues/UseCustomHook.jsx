import React, { useState } from 'react'
import UseCounter from './hooks/UseCounter'
import UseWindowSize from "./hooks/UseWindowSize"
import UseFetch from './hooks/UseFetch'

const UseCustomHook = () => {
  const [value, setValue]=useState("");
  const [count, increment, decrement, reset] = UseCounter(0, 2)
  const {height, width} =UseWindowSize()

  //UseFetch custom hook

  //"https://jsonplaceholder.typicode.com/posts"
  const [data,error,loading]=UseFetch("https://jsonplaceholder.typicode.com/posts");

  if(loading) 
    return <div>Loading.....</div>
  if (error)
    return <div>Error :{error}</div>


  return (
    <div>
        <p><strong>Q. What are custom hooks ?</strong></p> <br />
        <p>Custom hooks are just like a normal javascript functions which has some logic that can be applied on a single or multiple components</p>

        <p><strong>Q. What are the advantages of using custom hooks over normal javascript functions ?</strong></p>
        <p>1. Using custom hooks allows you to access the states and lifecycle of hooks</p>
        <p>2. It can avoid prop drilling as it can access context or other state management features, can use useReducer and other react features.</p>
        <p>3. Custom hooks can preserve state across re-renders</p>
        <p><strong>Q. Build a custom hook to manage and update a counter </strong></p>
        <p>Count : {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>

        <p>Build a custom hook to efficiently track and update window dimensions dynamically</p>
        <p>Window Height: {height}</p>
        <p>Window Width :{width}</p>

      {/* <p>Q. Build a custom hook to fetch data from a given URL, handle loading and error states as well</p>
      {data && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <p>{post.title} </p>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )} */}

      <p><strong>Q. Build a custom hook that stores & retrieves the data from the browser local storage</strong></p>

      


    </div>
  )
}

export default UseCustomHook

// import React from 'react'
// import UseCounter from './hooks/UseCounter'

// const UseCustomHook = () => {
//   const [increment, decrement, reset, count] = UseCounter(0, 2) //While destruring, order of element must be same
//   return (
//     <div>
//       <p>Count : {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default UseCustomHook

// import React from 'react'
// import UseWindowSize from './hooks/UseWindowSize'

// const UseCustomHook = () => {
//   const {height, width}=UseWindowSize();
//   return (
//     <div>
//       <p>Height : {height}</p>
//       <p>Width : {width}</p>
//     </div>
//   )
// }

// export default UseCustomHook