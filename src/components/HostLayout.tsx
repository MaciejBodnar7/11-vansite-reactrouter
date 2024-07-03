import "../App.css"
import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

function HostLayout() {
  return (
    <>
      <nav className="ndNav flex justify-center">
        <div className="w-5/6 flex font-bold text-gray-600 pb-8 pt-4 text-base">
          <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="/host" end>
            Dashboard
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="/host/income">
            Income
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="/host/host-vans">
            Vans
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="/host/reviews">
            Reviews
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout