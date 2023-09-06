import React, {useState} from 'react'
// hook
const Third = () => {
   const [data , setData ] = useState ("hello")
  return (
    <div>
      <div>
        {" "}
        <h1>{data}</h1>
        <button onClick={() => setData("React")}>Update</button>
       
      </div>
    </div>
  );
}

export default Third