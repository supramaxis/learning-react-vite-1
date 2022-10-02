import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
}
