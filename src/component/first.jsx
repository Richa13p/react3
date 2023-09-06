import React, { useState } from 'react'

const First = () => {
    //toggal
    const [status , setStatus] = useState(true)
  return (
    <div>
      {
        status ? <h1> hello world</h1>: null
      }
        

       
        <button onClick={()=> setStatus(!status)}>show</button>
    </div>
  )
}

export default First