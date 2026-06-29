import { Navigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";

function ProtectedRoute({ children }) {
  const { currentUser } = useUsers();

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;