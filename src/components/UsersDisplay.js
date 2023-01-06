import React from "react";
import IndividualUserDisplay from "./IndividualUserDisplay";
import { nanoid } from "nanoid";

function UsersDisplay(props) {
  const usersCollection = props.content.map((user) => (
    <IndividualUserDisplay
      username={user.username}
      age={user.age}
      key={nanoid()}
    />
  ));

  return (
    <div className="flex flex-col gap-2 bg-zinc-200 p-4 rounded-md w-[20rem]">
      {usersCollection}
    </div>
  );
}

export default UsersDisplay;
