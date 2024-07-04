import "../App.css"
import { useOutletContext } from "react-router-dom"

function HostVanInfo() {
  const [van] = useOutletContext()

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
