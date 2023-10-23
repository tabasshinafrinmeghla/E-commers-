
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {



  /**data gula authContext theke nibe */
  const { user, loading } = useContext(AuthContext);


  const location = useLocation();
  console.log(location);

  
  if (loading) {
    <div>Loading... . .   .</div>

  }
  /**
   * jodi user thake tahole data gula dekhabe condition diye  */

  if (user) {
    return children;
  }


  return <Navigate to='/Login'>

  </Navigate>;
};

export default PrivateRoutes;