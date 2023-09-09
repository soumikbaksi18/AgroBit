import React, { useRef } from "react";

const CityForm = (props) => {
const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredCity = cityInputRef.current.value;
    props.onSubmitHandler(enteredCity);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <input className="w-full mt-2 p-2 rounded-md border-2 border-black focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="Select Location" ref={cityInputRef}/>
        </div>
      </form>
    </>
  );
};

export default CityForm;