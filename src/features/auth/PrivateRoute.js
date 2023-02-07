import { useNavigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if (isLoggedIn === null || !isLoggedIn) {
    window.location.href = "/login";
  } else {
    return children;
  }
};
export default PrivateRoute;
