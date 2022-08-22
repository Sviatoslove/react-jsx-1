import React from "react";

const Person = props => {
 return(
  <div>
   <h2>Name: {props.name}</h2>
   <p>Years: {props.age}</p>
    <button>{props.nameOfBtn}</button>
  </div>
 )
}

export default Person;