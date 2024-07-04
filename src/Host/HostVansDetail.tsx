import { useParams } from "react-router-dom"
import "../App.css"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

function HostVanDetail() {
  const params = useParams()
  const [van, setVan] = React.useState(null)

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params])

  return (
    <>
      <main>
        <article className="flex flex-col items-center">
          <div className="flex flex-col w-5/6">
            <Link to=".." relative="path">
              <p className="underline text-sm mb-6">
                <i className="fa-solid fa-arrow-left"></i>
                <span className="font-bold ml-1">Back to all vans</span>
              </p>
            </Link>
            {van ? (
              <div className="bg-white p-4 mb-4">
                <div className="flex">
                  <img className="rounded-md object-cover w-2/5" src={van.imageUrl} />
                  <div className="flex flex-col ml-4 justify-center">
                    <p className={`${van.type} mb-2`}>{van.type}</p>
                    <p className="text-xl font-bold">{van.name}</p>
                    <p className="text-xs text-gray-700 font-bold mt-1">${van.price}/day</p>
                  </div>
                </div>
                <div>
                  <div className="w-5/6 flex font-bold text-gray-600 mt-6 mb-6 text-base">
                    <NavLink className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")} to="." end>
                      Details
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")}
                      to="pricing"
                    >
                      Pricing
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? "my-link my-link-active" : "my-link")}
                      to="photos"
                    >
                      Photos
                    </NavLink>
                  </div>
                  <Outlet context={[van]} />
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </article>
      </main>
    </>
  )
}

export default HostVanDetail
