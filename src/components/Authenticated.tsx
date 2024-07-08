import "../App.css"
import { Navigate, Outlet } from "react-router-dom"

function Authenticated() {
  const isLoggedIn = localStorage.getItem("loggedin")

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ message: "You must log in first" }} replace />
  }

  return <Outlet />
}

export default Authenticated
