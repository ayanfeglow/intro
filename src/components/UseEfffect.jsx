import React, { use, useActionState, useState } from 'react'
import { useEffect } from 'react'
const UseEfffect = () => {
    const [ count, setCount] = useState(0)


    useEffect(()=>{
        const interval = setInterval(() => {
            setCount((prev)=> prev + 1)
        }, 1000); 

       return ()=> clearInterval(interval)
    },[])
    
    useEffect(()=>{
      const alert2 = setTimeout(() => {
        alert("useEffect hook")
      }, 10000);

       return ()=> clearTimeout(alert2)

    },[])

    const handleClick=()=>{
      alert("hello world")
    }

    // const interval = setInterval(() => {
    //   console.log()
    // }, 1000);

    const [countdown, setCountdown] = useState(10);

    // const setCountdown = () =>{
    //   if (countdown < 10) {
    //     setCountdown(-1)
    //   }
    // }

    useEffect(()=>{
        const interval = setInterval(() => {
            setCountdown((prev)=> prev - 1)
            
            if (countdown > 0){
      // setCountdown (countdown - 1)
    }
        }, 1000); 

       return ()=> clearInterval(interval)
    },[])

//     useEffect(() =>{
//   setTimeout(() => {
//     alert("This is an alert")
//   }, 5000);

// })


    // return () => clearInterval(interval) 

  return (
    <div> 
        <p>{count} counts</p>
        <button onClick={handleClick}>click me</button>
        <h1>The party will begin in {countdown} seconds</h1>
    </div>
  )
}

export default UseEfffect