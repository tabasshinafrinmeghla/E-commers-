import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/fire.config';

export const AuthContext = createContext(null);
/**
 * আমরা auth provider বানাইলাম 
 */

// const auth = getAuth(app);
/* app টা পরে ইমপোরট করতে হবে না হ্লে ইরর দিবে */


const auth = getAuth(app);




const AuthProvider = ({ children }) => {
  // const user = { email: 'Megh' }

  /**আমাদের যখন ইউজার থাকবে না তখন নাল দেখাবে ইউজার থাকলে দেখাবে এই জন্য আমরা useSate diye user  ব্যবহার করব */

  const [user, setUser] = useState(null);



  /**
   * 
*/

  const createUser = async (email, password) => {

    return await createUserWithEmailAndPassword(auth, email, password);

  }

  const authInfo = {
    user, createUser

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}

      {/* {console.log(auth)} */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;






