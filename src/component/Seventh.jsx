import React from 'react'

function Cup({guest}) {
    return <h2> The cup for guest # {guest} </h2>
}

const Seventh = () => {
  return (
    <div>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </div>
  );
}

export default Seventh
