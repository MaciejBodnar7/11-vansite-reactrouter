import { Outlet } from "react-router-dom" //it create hole for other <Route /> in main.tsx to display children
import Navbar from "./Navbar"
import Footer from "./Footer"
//<Outlet /> it create hole for other <Route /> in main.tsx to display children
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
