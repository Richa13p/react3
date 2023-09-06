import React, { useState } from 'react'

const Second = () => {
    const [loggin , setLoggin] = useState(1)
  return (
<div>

    {/* {
       // loggin? <h1> hello me</h1> :<h1> hello you </h1>
       
    } */}
    { loggin ===1 ? <h1> welcome user1</h1>:
     loggin ===2? <h1> welcome user2 </h1>
     :<h1> welcome user3 </h1>
    
    }
</div>
   
  )
}

export default Second