import React, { useEffect , useLayoutEffect, useState} from 'react'

const UseEffectHook = () => {
    const [user, setUser]=useState({});
    const [data, setData]=useState({});

    const fetchUser=async()=>{
       const res= await fetch('https://dummyjson.com/users/1');
       const data=await res.json();
    //    console.log(data);
       setUser(data);
       console.log(data);
    }

    useEffect(()=>{
        fetchUser();

    },[]);

    //How to perform cleanup un useEffect?
    const [second, setSecond]=useState(0);

    useEffect(()=>{
      //Just writing the function to render seconds on UI
      const interval=setInterval(()=>{
        setSecond((prevSecond)=>prevSecond+1);
      },1000)

      //Writing the cleanup task
      return()=>{
        clearInterval(interval);
        console.log("Interval cleared when this component <UseEffectHook /> is unmounted");
      }
    },[]);

    //Difference between useEffect & useLayoutEffect
    useEffect(()=>{
      console.log("useEffect is rendered after useLayoutEffect");
    },[])

    useLayoutEffect(()=>{
      console.log("useLayoutEffect is rendered before useEffect");
    },[])
    
  return (
    <div>
        <h3>useEffect Hook</h3>
        <p>Q. What is useEffect in React ?</p>
        <p>Q. Why is dependency array is used in useEffect ?</p>
        <p>Q. Example of useEffect for data fetching</p>
        <p>Displaying user data</p>
        <p>{user.firstName} {user.lastName}</p>
        <p>Q. How to perform cleanup in useEffect ?</p>
        <p>Rendering Seconds : {second}</p>
        <p> Cleanup task will be called when this UseEffectHook component will unmount, 
          just try to comment it from App component and go to console tab to see the result
        </p>
        <p>Q. Explain useLayoutEffect & how it is different from useEffect ?</p>
        <p>useLayoutEffect is rendered first and then useEffect. See the console tab</p>

    </div>
  )
}

export default UseEffectHook ;