import React, { useEffect, useState } from 'react';


// useEffect takes two arguments, a callback and a dependency. when you use an empty array [], it mounts once, but when you pass in a variable/parameter it get mounted each time the change takes place.

const UseEffect = () => {

    const [count, setCount] = useState(0);

    const [mult, setMult] = useState(1);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count + 1)
        }, 10)
    },[mult]);

  return (
    <>
        <h2>{count}</h2>

        <br />

        <h1>Result: {mult}</h1>

        <button onClick={()=>setMult((mult)=> mult * 5)}>Let's Go!</button>

    </>
  )
};

export default UseEffect;