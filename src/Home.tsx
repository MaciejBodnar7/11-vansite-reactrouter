import "./App.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <main className="flex flex-col">
        <section className="flex landing-photo justify-center">
          <div className="w-5/6 h-full text-white">
            <h1 className="mt-12 text-3xl font-bold">You got the travel plans, we got the travel vans.</h1>
            <p className="mt-6 text-xs">
              Add adventure to your life by joining the #vanlife movement. <br /> Rent the perfect van to make your
              perfect road trip.
            </p>
            <Link to="/vans">
              <button className="bg-orange-400 py-2 px-8 font-bold mt-6 text-sm">Find your van</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
