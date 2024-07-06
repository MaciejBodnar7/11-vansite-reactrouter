import "./App.css"
import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"

function VanDetail() {
  const params = useParams()
  const location = useLocation()
  const [van, setVan] = React.useState(null)

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(resp => resp.json())
      .then(data => setVan(data.vans))
  }, [params.id])

  const search = location.state?.search || ""
  const typeVan = location.state?.type || "all"

  return (
    <>
      <main>
        <section className="flex items-center flex-col w-full overflow-scroll">
          {van ? (
            <div className="flex flex-col w-5/6 pb-8">
              <Link to={`..?${search}`} relative="path">
                <p className="underline text-sm">
                  <i className="fa-solid fa-arrow-left"></i>
                  <span className="font-bold ml-1">Back to {typeVan} vans</span>
                </p>
              </Link>
              <img className="rounded-md self-center mt-4" src={van.imageUrl} alt="" />
              <p className={`${van.type} mt-8`}>{van.type}</p>

              <p className="font-bold text-xl mt-2">{van.name}</p>
              <p className="text-sm font-bold mt-2">
                ${van.price}
                <span className="font-normal text-sm">/day</span>
              </p>
              <p className="mt-2">{van.description}</p>
              <button className="bg-orange-400 py-2 px-4 rounded-md text-white font-bold mt-4">Rent this van</button>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
    </>
  )
}

export default VanDetail
