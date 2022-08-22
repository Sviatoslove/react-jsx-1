import React from "react";
import './Bio.css';

const FullName = props => {
 return(
  <h2 className="bio">
   {props.firstName} {props.lastName}
   </h2>
 )
}

export default FullName;