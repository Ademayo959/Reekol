import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  const isTokenValid = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    const tokenInfo = JSON.parse(atob(token.split(".")[1]))
    const now = Date.now() / 1000;
    if (tokenInfo.exp < now) {
      return false;
    } else {
      return true;
    }
  }

  if (!isTokenValid()) {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;