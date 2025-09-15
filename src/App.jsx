import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import Organize from './pages/Organize'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Organize", path: "/organize" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header at the top */}
      <Header navLinks={navLinks} />
      {/* Main content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/organize" element={<Organize />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* Footer at the bottom */}
      <Footer navLinks={navLinks} />
    </div>
  )
}

export default App