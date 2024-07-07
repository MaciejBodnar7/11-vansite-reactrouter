import "./App.css"
import React from "react"

function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(loginFormData)
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
