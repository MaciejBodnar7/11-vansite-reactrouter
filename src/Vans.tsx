import "./App.css"
import React from "react"
import { Link } from "react-router-dom"

function Vans() {
  const [vans, setVans] = React.useState([]) //setting up state for saving data from fetch

  React.useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans)) //save data in state
  }, [])

  const vansElement = vans.map(van => {
    return (
      <div className="van h-fit" key={van.id}>
        <Link to={`/vans/${van.id}`} aria-label={`view details for ${van.name} priced at $${van.price} per day`}>
          <img className="rounded-md" src={van.imageUrl} />
          <div className="flex justify-between mt-2">
            <p className="text-sm font-bold">{van.name}</p>
            <p className="text-sm font-bold">
              ${van.price} <br /> <span className="font-normal text-xs">/day</span>
            </p>
          </div>
          <p className={`${van.type}`}>{van.type}</p>
        </Link>
      </div>
    )
  })

  return (
    <>
      <main>
        <section className="flex items-center flex-col w-full overflow-scroll">
          <div className="w-5/6 pb-8">
            <p className="text-xl font-bold ">Expolre our van options</p>
            <div className="flex gap-3 mt-3">
              <button className="btn-f py-1 px-3 text-xs rounded-md text-gray-600 font-bold">Simple</button>
              <button className="btn-f py-1 px-3 text-xs rounded-md text-gray-600 font-bold">Luxury</button>
              <button className="btn-f py-1 px-3 text-xs rounded-md text-gray-600 font-bold">Rugged</button>
            </div>
            <div className="vans flex flex-wrap justify-between mt-8">{vansElement}</div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Vans
