import "../App.css"
import { useOutletContext } from "react-router-dom"

function HostVanPhotos() {
  const [van] = useOutletContext()

  return (
    <>
      <>
        {van ? (
          <div className="text-xl flex flex-col gap-2 font-bold pb-4">
            <img className="rounded-md w-20" src={van.imageUrl} alt="" />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    </>
  )
}

export default HostVanPhotos
