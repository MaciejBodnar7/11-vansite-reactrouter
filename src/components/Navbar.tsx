import "../App.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="flex items-center h-24 justify-center">
        <div className="flex justify-between items-center w-5/6">
          <Link className="mr-6" to="/">
            <p className="text-2xl font-black">#VANLIFE</p>
          </Link>
          <div>
            <Link className="mr-6 font-bold text-gray-600" to="/host">
              Host
            </Link>
            <Link className="mr-6 font-bold text-gray-600" to="/about">
              About
            </Link>
            <Link className="font-bold text-gray-600" to="/vans">
              Vans
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
