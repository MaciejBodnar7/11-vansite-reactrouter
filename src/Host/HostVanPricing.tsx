import "../App.css"
import { useParams } from "react-router-dom"
import React from "react"

function HostVanPricing() {
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
        <div className="text-xl flex flex-col gap-2 font-bold pb-4">
          <p>
            {" "}
            ${van.price} <span className="font-normal">/day</span>
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default HostVanPricing
