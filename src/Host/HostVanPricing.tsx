import "../App.css"
import { useOutletContext } from "react-router-dom"

function HostVanPricing() {
  const [van] = useOutletContext()

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
