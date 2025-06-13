import { motion, AnimatePresence } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Home, Briefcase, MessageCircle } from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()
  const [isExpanded, setIsExpanded] = useState(false)

  const navItems = [
    { name: 'Home', path: '/', icon: Home, anchor: '#home-top' },
    { name: 'Services', path: '/services', icon: Briefcase, anchor: '#services-top' },
    { name: 'Contact', path: '/contact', icon: MessageCircle, anchor: '#contact-top' },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:fixed left-0 top-0 h-full z-50 lg:flex flex-col justify-center"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="bg-black/20 backdrop-blur-xl border-r border-white/10 h-full flex flex-col justify-center px-4">
        <nav className="space-y-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Link
                to={item.path}
                className="group relative flex items-center space-x-3 py-3 px-2 rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white"
                >
                  <item.icon size={24} />
                </motion.div>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`text-sm font-medium whitespace-nowrap ${
                        location.pathname === item.path
                          ? 'text-white'
                          : 'text-white/80 group-hover:text-white'
                      }`}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 w-1 h-8 bg-white rounded-r-full"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>

    {/* Mobile Bottom Navigation */}
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-white/10"
    >
      <nav className="flex justify-around items-center py-4 px-6">
        {navItems.map((item) => (
          <motion.div key={item.name} whileTap={{ scale: 0.95 }}>
            <Link
              to={item.path}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs font-medium">{item.name}</span>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="mobileIndicator"
                  className="w-1 h-1 bg-white rounded-full"
                />
              )}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
    </>
  )
}

export default Sidebar
