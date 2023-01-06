import React, { useState } from "react";

function UserForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "" || age === "") {
      props.throwError();
      return;
    }
    if (age < 1) {
      props.throwError();
      return;
    }
    props.addUser(username, age);
    setUsername("");
    setAge("");
  };

  return (
    <div className="bg-zinc-200 p-8 rounded-xl w-[20rem]">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="rounded-md border p-1"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            name="age"
            id="age"
            className="rounded-md border p-1"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <button
          type="submit"
          className="bg-zinc-800 text-white self-start p-3 rounded-md"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default UserForm;
