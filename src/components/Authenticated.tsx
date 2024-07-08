import "../App.css"
import { Navigate, Outlet } from "react-router-dom"

function Authenticated() {
  const authenticated = false

  if (!authenticated) {
    return <Navigate to="/login" state={{ message: "You must log in first" }} />
  }

  return <Outlet />
}

export default Authenticated
