import React from "react";

const Params = props => {
  return (
    <>
      <p>paramsy</p>
      <p>{console.log(props)}</p>
      <p>{console.log(props.match.params.id)}</p>
      <p> welcom {props.match.params.id}</p>
    </>
  );
};

export default Params;
