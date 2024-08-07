import { Navigate } from "react-router-dom";
import useAuth from "../hookUseAuth/HookUseAuth";

const PrivateRoute = ({ children: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;