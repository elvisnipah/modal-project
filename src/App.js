import { useState } from "react";
import UserForm from "./components/UserForm";
import UsersDisplay from "./components/UsersDisplay";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);

  const [invalidInput, setInvalidInput] = useState(false);

  const addUser = (username, age) => {
    const user = {
      username: username,
      age: age,
    };
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
    // console.log(users);
  };

  const closeModal = () => {
    setInvalidInput(false);
  };

  const throwInvalidError = () => {
    setInvalidInput(true);
  };

  return (
    <div className="flex flex-col justify-center items-center grow bg-zinc-300 gap-8">
      <UserForm addUser={addUser} throwError={throwInvalidError} />
      {users.length > 0 && <UsersDisplay content={users} />}
      {invalidInput && <ErrorModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
