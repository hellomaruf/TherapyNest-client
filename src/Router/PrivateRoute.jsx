import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContaxt } from "../services/AuthProvider";
import Loading from "../Page/Loading";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContaxt);
  const navigate = useNavigate();
  const location = useLocation();
  if (user === null) {
    navigate("/login");
  }
  if (user) {
    return children;
  }
  if (loading) {
    return <Loading/>;
  }
  return <Navigate to="/login" state={location.pathname} replace="true" />;
}

export default PrivateRoute;
