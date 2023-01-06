import React from "react";

function ErrorModal(props) {
  return (
    <div
      className="rounded-md fixed w-full h-full z-[1] bg-[rgba(0,0,0,0.5)] left-0 top-0 pt-[8rem] flex justify-center cursor-pointer"
      onClick={props.closeModal}
    >
      <div className="w-[50%] h-[20%]">
        <div className="bg-black text-white p-2 rounded-t-md">
          Invalid Input
        </div>
        <div className="bg-white p-2 flex flex-col">
          <p>Please enter a valid name and age(non-empty values)</p>
          <button
            className="rounded-md p-2 bg-black text-white self-end"
            onClick={props.closeModal}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
