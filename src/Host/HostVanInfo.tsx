import "../App.css"
import { useParams } from "react-router-dom"
import React from "react"

function HostVanInfo() {
  const params = useParams()

  const [van, setVan] = React.useState(null)

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params])

  return (
    <>
      {van ? (
        <div className="text-sm flex flex-col gap-4">
          <p>
            <span className="font-bold">Name:</span> {van.name}
          </p>
          <p>
            <span className="font-bold">Category:</span> {van.type}
          </p>
          <p>
            <span className="font-bold">Description:</span> {van.description}
          </p>
          <p>
            <span className="font-bold">Visability:</span> Public
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default HostVanInfo
