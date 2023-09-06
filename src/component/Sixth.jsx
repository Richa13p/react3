import React from 'react'

//pure function in react
function Recipe({drinkers}) {
    return(
    <ol>
      <li> Boli {drinkers} cup of water</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
 );
}

const Sixth = () => {
  return (
    <div>
    <section>
     <h1> Spiced chai Recipe</h1>
     <h2> For two </h2>
     <Recipe drinkers={2}/>


     <h2> For a gathering</h2>
     <Recipe drinkers={4}/>
    
    </section>
      
    </div>
  )
}

export default Sixth
