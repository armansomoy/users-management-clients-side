import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();

    const name = e.target.email.value;
    const email = e.target.email.value;
    const user = { email, name };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  console.log(users);
  return (
    <>
      <h1>Users management system</h1>
      <h2>Users : {users.length}</h2>
      <form onSubmit={handleAddUser} style={{ border: "1px solid gray" }}>
        <input type="text" name="name" id="name" required />
        <br />
        <input type="email" name="email" id="email" required />
        <br />
        <input type="submit" value="Add User" />
      </form>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} <br /> {user.email}
        </li>
      ))}
    </>
  );
}

export default App;
