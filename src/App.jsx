import { BrowserRouter, Route, Routes } from "react-router"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-secondary'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
