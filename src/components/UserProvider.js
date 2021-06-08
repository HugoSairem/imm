import React, { createContext, useContext, useState, useCallback } from 'react';
import createPersistedState from 'use-persisted-state';

import App from './app/App';
import post from '../utils/ApiExecutor';

const useUserState = createPersistedState('user');

const StateContext = createContext({
  user: {
    email: '',
    username: '',
  },
  login: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useUserState(null);

  const login = useCallback(newUser => {
    post('user/login', newUser, setUser);
  }, []);

  return (
    <StateContext.Provider value={{ user, login }}>
      <App />
    </StateContext.Provider>
  );
}

export const useUser = () => useContext(StateContext);

export default UserProvider;