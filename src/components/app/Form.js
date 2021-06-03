import { useState } from "react";
import { useUser } from "../UserProvider";

const Form = () => {
  const { login } = useUser();
  const [logUser, setLogUser] = useState({});

  // Storing the Insert User Form Data.
  const setLogUserData = (e, field) => {
    setLogUser({
      ...logUser,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const loginUser = (e) => {
    e.preventDefault();
    login(logUser);
    e.target.reset();
  };

  return (
    <form className="loginForm" onSubmit={loginUser}>
      <h2>Login</h2>
      <label htmlFor="_email">Email</label>
      <input
        type="email"
        id="_email"
        onChange={(e) => setLogUserData(e, "email")}
        placeholder="Enter email"
        autoComplete="off"
        required
      />
      <label htmlFor="_name">Password</label>
      <input
        type="password"
        id="_password"
        onChange={(e) => setLogUserData(e, "password")}
        placeholder="Enter password"
        autoComplete="off"
        required
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Form;