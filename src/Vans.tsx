import "./App.css"
import React from "react"
import { NavLink, useSearchParams } from "react-router-dom"
import { getVans } from "./api"

function Vans() {
  const [vans, setVans] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const typeFilter = searchParams.get("type")

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans()
        setVans(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadVans()
  }, [])

  const displayVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

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

  if (loading) {
    return (
      <section className="flex items-center flex-col w-full overflow-scroll">
        <div className="w-5/6">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="flex items-center flex-col w-full overflow-scroll">
        <div className="w-5/6">
          <h1 className="text-2xl font-bold">
            There was an error: <br /> {error.message}
          </h1>
        </div>
      </section>
    )
  }

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
