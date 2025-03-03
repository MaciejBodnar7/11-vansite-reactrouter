import "../App.css"
import React from "react"
import { Link } from "react-router-dom"

function HostVans() {
  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const vansElement = vans.map(van => {
    return (
      <div key={van.id}>
        <Link to={`${van.id}`}>
          <div className="flex w-full bg-white p-4 mb-4 h-24">
            <img className="rounded-md object-cover" src={van.imageUrl} />
            <div className="flex flex-col ml-4 justify-center">
              <p className="text-lg font-bold">{van.name}</p>
              <p className="text-xs text-gray-700 font-bold">${van.price}/day</p>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <>
      <article className="flex items-center flex-col w-full">
        <div className="w-5/6">
          <p className="text-2xl font-bold mb-6">Your listed vans</p>
          <div>{vansElement}</div>
        </div>
      </article>
    </>
  )
}

export default HostVans
