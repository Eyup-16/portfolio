import { Routes, Route,useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import SocialSidebar from './components/SocialSidebar'
import Background from './components/Background'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    // Force dark mode for this design
    document.documentElement.classList.add('dark')
    document.body.style.backgroundColor = '#000000'
  }, [])

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      <Background />
      <Sidebar />
      <SocialSidebar />
      
      <main className="lg:pl-20 lg:pr-20 pl-4 pr-4 min-h-screen pb-20 lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="lg:pl-20 lg:pr-20 pl-4 pr-4 pb-20 lg:pb-4">
        <div className="text-center py-6 border-t border-white/10">
          <p className="text-white/60 text-sm font-semibold">
            Made with ❤️ By Eyup
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App