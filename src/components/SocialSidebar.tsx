import { motion } from 'motion/react'
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react'

const SocialSidebar = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Eyup-16', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/eyup16', icon: Linkedin },
    { name: 'Twitter', href: 'https://x.com/EyupUskuplu_16', icon: Twitter },
    { name: 'Email', href: 'mailto:eyupcoder@gmail.com', icon: Mail },
    { name: 'Instagram', href: 'https://www.instagram.com/ayoub.a_16/', icon: Instagram },
  ]

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="hidden lg:fixed right-0 top-0 h-full z-50 lg:flex flex-col justify-center"
    >
      <div className="bg-black/20 backdrop-blur-xl border-l border-white/10 h-full flex flex-col justify-center px-4">
        <div className="space-y-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              className="block text-white/60 transition-all duration-300 hover:text-white p-2 rounded-lg hover:bg-white/5"
              aria-label={social.name}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>
        
        {/* Decorative line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto mt-8"
        />
      </div>
    </motion.div>
  )
}

export default SocialSidebar
