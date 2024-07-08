import "../App.css"
import { NavLink } from "react-router-dom"

function Navbar() {
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }
  return (
    <>
      <nav className="flex items-center h-24 justify-center">
        <div className="flex justify-between items-center w-5/6">
          <NavLink className="mr-6" to="/" end>
            <p className="text-2xl font-black">#VANLIFE</p>
          </NavLink>
          <div>
            <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="host">
              Host
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="about">
              About
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="vans">
              Vans
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "my-link my-link-login my-link-active border-0" : "my-link my-link-login border-0"
              }
              to="login"
            >
              <i className="fa-solid fa-circle-user"></i>
            </NavLink>
            <button className="bg-slate-200 -ml-5 px-2 rounded-full text-sm" onClick={fakeLogOut}>
              x
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
