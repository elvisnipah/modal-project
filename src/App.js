import { useState } from "react";
import UserForm from "./components/UserForm";
import UsersDisplay from "./components/UsersDisplay";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);

  const [error, setError] = useState("");

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
    setError("");
  };

  const throwError = (message) => {
    setError(message.message);
  };

  return (
    <div className="flex flex-col justify-center items-center grow bg-zinc-300 gap-8">
      <UserForm addUser={addUser} throwError={throwError} />
      {users.length > 0 && <UsersDisplay content={users} />}
      {error && <ErrorModal closeModal={closeModal} message={error} />}
    </div>
  );
}

export default App;
