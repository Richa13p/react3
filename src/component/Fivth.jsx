import React from 'react'
import { people } from "../data.js";
import { getImageUrl } from "../utils.js";
//filtering array of the items
const Fifth = () => {
    const chemists = people.filter( person =>
         person.profession === 'chemist')

const listItems = chemists.map(
    person => <li>
    <img  src = {getImageUrl(person)} 
    alt = {person.name}/>  
    <p>
     <b> {person.name}</b>
     {` ${person.profession} known for ${person.accoplishment}`}
    </p>                                              
    </li>
)


  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Fifth
//   {
//     ` ${person.profession} known for ${person.accoplishment}`;
//   }

//react.dev mai
//  {' ' + person.profession + ' '}
     //   known for {person.accomplishment}