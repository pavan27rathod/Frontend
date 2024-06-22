import { useState } from "react";

const UseCounter = (initialCount , step ) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(prevCount => prevCount + step);
    };
    const decrement = () => {
        setCount(prevCount => prevCount - step);
    };
    const reset = () => {
        setCount(initialCount);
    };

    return [count, increment, decrement, reset];
};

export default UseCounter;

// import { useState } from "react";
// const UseCounter=(initial, step)=>{
//     const [count, setCount]=useState(initial);
//     const increment=()=>{
//         setCount(prevCount=>prevCount+step);
//     }

//     const decrement=()=>{
//         setCount(prevCount=>prevCount-step);
//     }

//     const reset=()=>{
//         setCount(initial);
//     }
//     return [increment, decrement, reset,count]
// }

// export default UseCounter;