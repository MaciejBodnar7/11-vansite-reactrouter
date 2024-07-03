import "../App.css"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="flex items-center h-24 justify-center">
        <div className="flex justify-between items-center w-5/6">
          <NavLink className="mr-6" to="/" end>
            <p className="text-2xl font-black">#VANLIFE</p>
          </NavLink>
          <div>
            <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="/host">
              Host
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="/about">
              About
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="/vans">
              Vans
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar