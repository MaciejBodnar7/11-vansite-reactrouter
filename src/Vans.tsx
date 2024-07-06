import "./App.css"
import React from "react"
import { NavLink, useSearchParams } from "react-router-dom"

function Vans() {
  const [vans, setVans] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  console.log()

  const typeFilter = searchParams.get("type")
  const displayVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

  React.useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const vansElement = displayVans.map(van => {
    return (
      <div className="van h-fit" key={van.id}>
        <NavLink
          to={`${van.id}`}
          state={{ search: searchParams.toString(), type: typeFilter }}
          aria-label={`view details for ${van.name} priced at $${van.price} per day`}
        >
          <img className="rounded-md" src={van.imageUrl} />
          <div className="flex justify-between mt-2">
            <p className="text-sm font-bold">{van.name}</p>
            <p className="text-sm font-bold">
              ${van.price} <br /> <span className="font-normal text-xs">/day</span>
            </p>
          </div>
          <p className={`${van.type}`}>{van.type}</p>
        </NavLink>
      </div>
    )
  })

  return (
    <>
      <main>
        <section className="flex items-center flex-col w-full overflow-scroll">
          <div className="w-5/6 pb-8">
            <p className="text-xl font-bold ">Expolre our van options</p>
            <div className="flex gap-3 mt-3 w-full tracking-wide">
              <button
                onClick={() => (typeFilter === "simple" ? setSearchParams({}) : setSearchParams({ type: "simple" }))}
                className={`btn-f py-1 px-3 text-xs rounded-md text-gray-600 font-bold ${
                  typeFilter === "simple" ? "simple-f text-white" : null
                }`}
              >
                Simple
              </button>
              <button
                onClick={() => (typeFilter === "luxury" ? setSearchParams({}) : setSearchParams({ type: "luxury" }))}
                className={`btn-f py-1 px-3 text-xs rounded-md text-gray-600 font-bold ${
                  typeFilter === "luxury" ? "luxury-f text-white" : null
                }`}
              >
                Luxury
              </button>
              <button
                onClick={() => (typeFilter === "rugged" ? setSearchParams({}) : setSearchParams({ type: "rugged" }))}
                className={`btn-f py-1 px-3 text-xs rounded-md text-gray-600 font-bold ${
                  typeFilter === "rugged" ? "rugged-f text-white" : null
                }`}
              >
                Rugged
              </button>
              {typeFilter ? (
                <button
                  onClick={() => setSearchParams({})}
                  className="bg-red-400 text-white py-1 px-3 text-xs rounded-md font-bold ml-auto"
                >
                  Clear filters
                </button>
              ) : null}
            </div>
            <div className="vans flex flex-wrap justify-between mt-8">{vansElement}</div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Vans
