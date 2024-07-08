import "./App.css"
import React from "react"
import { useLocation } from "react-router-dom"
import { loginUser } from "./api"

function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
  const location = useLocation()

  function handleSubmit(e) {
    e.preventDefault()
    loginUser(loginFormData).then(data => console.log(data))
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <main className="flex flex-col">
        <section className="flex flex-col items-center">
          <div className="w-5/6 h-full flex flex-col items-center mt-10">
            {location.state?.message ? (
              <p className="mb-2 bg-white rounded-lg py-2 px-4 font-bold">
                {location.state?.message && location.state.message}
              </p>
            ) : null}
            <h1 className="font-bold text-3xl">Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col w-full">
              <input
                className="p-2 rounded-lg border border-gray-300 rounded-b-none"
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                value={loginFormData.email}
              />
              <input
                className="p-2 rounded-lg border border-gray-300 border-t-0 rounded-t-none"
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                value={loginFormData.password}
              />
              <button className="bg-orange-400 text-white py-4 rounded-lg mt-6 font-bold">Log in</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login
