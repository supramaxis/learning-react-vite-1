import { Children, useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {useItems} from '../../context/ItemsContext';
import { supabase } from "../../supabase/client";

export default function ProtectedRoute({ children }) {
  // const [user, setUser] = useState(null);
  const { user } = useItems();
  const location = useLocation()

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{path: location.pathname}}/>
  )
  // useEffect(() => {
  //   const usr = supabase.auth.getUser();
  //   console.log(usr)
  //   setUser(usr);
  //   // console.log(usr);
  // }, []);
  // console.log(user);
  // if (!user) {
  //   return <Navigate to="/login" />;
  // }
  // return children
}
