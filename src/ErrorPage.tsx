import { NavLink } from "react-router-dom"
import "./App.css"

function ErrorPage() {
  return (
    <>
      <main>
        <section className="flex items-center flex-col w-full">
          <div className="w-5/6">
            <p className="text-2xl font-bold mt-28">Sorry, the page you were looking for was not found</p>
            <NavLink to={"/"}>
              <button className="gray-color text-white font-bold w-full py-4 rounded-lg mt-5">Return to home</button>
            </NavLink>
          </div>
        </section>
      </main>
    </>
  )
}

export default ErrorPage
