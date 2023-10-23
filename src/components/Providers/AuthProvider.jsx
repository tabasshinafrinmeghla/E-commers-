import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

  const createUser = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password);

  }

  const signIn = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password);

  }

  const logOut = () => {
    return signOut(auth)
  }

  /**
   * observer user auth state {যখন ইউজার অথ চেঞ্জ হবে তখব কিছু একটা হবে }
   * */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    }
  },
    [])


  /**
   * stop observing while unmounting 
   */




  const authInfo = {
    user, createUser, signIn, logOut

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}

      {/* {console.log(auth)} */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;






