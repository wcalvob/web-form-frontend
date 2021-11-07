import React, { useState, useEffect } from "react";
import List from "./components/List";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const url = "http://localhost:8080/users";
    const resp = await fetch(url);
    const { users } = await resp.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container mt-5">
      <RegistrationForm getUsers={getUsers} />
      <hr />
      <List users={users} />
    </div>
  );
};

export default App;
