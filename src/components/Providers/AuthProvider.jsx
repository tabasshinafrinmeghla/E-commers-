import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
/**
 * আমরা auth provider বানাইলাম 
 */

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const user = { email: 'Megh' }

  const authInfo = {
    user,

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;