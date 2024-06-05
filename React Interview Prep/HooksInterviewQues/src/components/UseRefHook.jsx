import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    const ref=useRef(0);
    const [count,setCount]=useState(0)

    // console.log(ref.current);

    //Accessing DOM Elements
    const inputRef=useRef(null);
    //Now we have created a input element and used inputRef as ref, just trying to access that from DOM element
    console.log(inputRef); //this will return the object of input tag

  return (
    <div>
        <h3>UseRefHook</h3>
        <p><strong>Q. What is useRef in React ?</strong></p>
        <p>
            1. When the state of a React component changes, the component re-renders & new state value is used for the render.
            Local varialbles are also reset to their initial values in re-render. 
            <br></br>
            2. useRef Hook provides a way to persists values across renders without causing re-render & allows to store and access the previous value 
        </p>
        <p><strong>Q. How to use useRef in React ?</strong></p>
        It returns .current property which will return the current value 
        <br></br>

        <p>
            Following button will increment the value of ref and we are trying to render it but it will not render as useRef doesnot cause re-render when the 
            component when state changes so we just trying to console that, click on following button and go to console tab to see the result.
        </p>
        <p>Ref current value :{ref.current}</p>
        <button 
            onClick={()=>{
                ref.current+=1; {console.log(ref.current);}
            }}> 
            Increment State
        </button>

        <p>
            Now, just try to re-render the component again using this state only, So I am creating a new button just for the re-rendering purpose, now click on Increment State button 5 time and click on Increment Count button once
            and see you will get the Ref current value : 5, as ref was holding previous values too
        </p>
        <p>ref value after re-rendering component :{count}</p>
        <button onClick={()=>{
            setCount(count+1);
        }}>
            Increment Count
        </button>

        <p><strong>Q. When do you use useRef ? How can you access and manipulate DOM element using ref </strong> </p>
        <p>1. When you want to store a value that you want to access later in the component lifecycle, without causing re-rendering<br/>
            2. Accessing DOM Elements 
        </p>

        <input ref={inputRef}/>
        <button
         onClick={()=>{inputRef.current.focus()
            inputRef.current.value= 10 //Updating the value inside input element using ref when I click on Set Focus Button
          } }>
            Set Focus 
        </button>
        <p>
            1. Just creating an input element, defining ref for that
            2. Using that defined ref, we are trying to set focus & set some value like 10 using ref when I click on Set Focus button 
        </p>

    </div>
  )
}

export default UseRefHook