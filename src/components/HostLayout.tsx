import "../App.css"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

function HostLayout() {
  return (
    <>
      <nav className="ndNav flex justify-center">
        <div className="w-5/6 flex gap-6 font-bold text-gray-600 pb-8 pt-4 text-base">
          <Link to="/host">Dashboard</Link>
          <Link to="/host/income">Income</Link>
          <Link to="/host/reviews">Reviews</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout
