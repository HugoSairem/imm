import React, { useEffect, createContext, useContext, useState, useCallback } from 'react';

import Form from './app/Form';
import App from './app/App';

const StateContext = createContext({
  user: {
    email: '',
    username: '',
  },
  login: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = useCallback(newUser => {
    fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <StateContext.Provider value={{ user, login }}>
      <App />
      {!user && <Form />}
    </StateContext.Provider>
  );
}

export const useUser = () => useContext(StateContext);

export default UserProvider;