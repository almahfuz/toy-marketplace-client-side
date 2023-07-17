import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    let location = useLocation();
    const from = location?.state?.from?.pathname || "/";
  
    if (!user) {
      return <Navigate state={{ from: location }} to="/login" replace />;
    }
    return children;
};

export default PrivateRoute;