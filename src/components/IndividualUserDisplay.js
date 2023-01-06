import React from "react";

function IndividualUserDisplay(props) {
  return (
    <div className="bg-white rounded-md p-2">
      {props.username} ({props.age}) years old
    </div>
  );
}

export default IndividualUserDisplay;
