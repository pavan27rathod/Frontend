// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"

// const UseWindowSize=()=>{
//     const [windowSize, setWindowSize]=useState({
//         width:window.innerWidth,
//         height:window.innerHeight
//     })

//     const handleResize=()=>{
//         setWindowSize({
//             width:window.innerWidth,
//             height:window.innerHeight
//         })
//     };

//     useEffect(()=>{
//         window.addEventListener('resize',handleResize);
//         return ()=> window.removeEventListener('resize', handleResize);
//     },[])
//     return windowSize;

// }

// export default UseWindowSize;


// import { useState , useEffect} from "react"
// const UseWindowSize=()=>{
//     const [windowSize, setWindowSize]=useState({
//         height:window.innerHeight,
//         width: window.innerWidth
//     })

//     const handleResize=()=>{
//         setWindowSize({
//             height:window.innerHeight,
//             width: window.innerWidth
//         })
//     }

//     useEffect(()=>{
//         window.addEventListener("resize",handleResize);

//         return()=>window.removeEventListener("resize", handleResize);
//     },[])
//     return windowSize;
// }

// export default UseWindowSize;


const UseWindowSize=()=>{
    const [windowSize, setWindowSize]=useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    const handleResize=()=>{
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);

        return ()=>window.removeEventListener("resize",handleResize)

    },[])

    return windowSize;

}

export default UseWindowSize;