import { Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import { Home, Services, Contact, Booking, About } from "./pages"


function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/booking" element={<Booking/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
