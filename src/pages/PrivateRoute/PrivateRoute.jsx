import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  if (loading) {
   return <div className="flex justify-center  items-center min-h-[calc(100vh-136px)]">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>;
  }
  if (!user?.email) {
    return <Navigate state={{ from: location }} to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
