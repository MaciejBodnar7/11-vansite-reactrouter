import ReactDOM from "react-dom/client"
import Home from "./Home.tsx"
import About from "./About.tsx"
import Vans from "./Vans.tsx"
import VanDetail from "./VanDetail.tsx"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./server.tsx"
import Layout from "./components/Layout.tsx"
import Dashboard from "./Host/Dashboard.tsx"
import Income from "./Host/Income.tsx"
import Reviews from "./Host/Reviews.tsx"
import HostLayout from "./components/HostLayout.tsx"
import HostVans from "./Host/HostVans.tsx"
import HostVanDetail from "./Host/HostVansDetail.tsx"
import HostVanInfo from "./Host/HostVanInfo.tsx"
import HostVanPhotos from "./Host/HostVanPhotos.tsx"
import HostVanPricing from "./Host/HostVanPricing.tsx"
import ErrorPage from "./ErrorPage.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="host-vans" element={<HostVans />} />
          <Route path="host-vans/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />}></Route>
            <Route path="photos" element={<HostVanPhotos />}></Route>
            <Route path="pricing" element={<HostVanPricing />}></Route>
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
