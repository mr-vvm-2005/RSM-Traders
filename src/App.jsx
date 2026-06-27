import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col font-body bg-espresso text-cream">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          {/* M5 FIX: Catch-all 404 route */}
          <Route path="*"         element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
