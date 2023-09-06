import React from 'react'
// rendering list
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];
const Forth = () => {



    // {
    //  use nahi  karna hai kyuki li likha hai
    //}
    //  const listItem =  People.map((Person) => {
    //    <li>{Person}</li>;
    //  });

    const listItems = people.map((person) =>
    <li>{person}</li>
  );
  return (    
    <ul>   hii {listItems} </ul>

  )
}

export default Forth