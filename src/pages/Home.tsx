import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import ElegantAvatar from '../components/ElegantAvatar'
import { Link } from 'react-router'
import resumePDF from '../assets/resume.pdf'; // Import your PDF file

const NewHome = () => {
  const avatarRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Avatar floating animation
    if (avatarRef.current) {
      gsap.to(avatarRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })
    }

    // Stats counter animation
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll('.counter')
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0')
        gsap.to(counter, {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
          },
        })
      })
    }
  }, [])

  const stats = [
    { number: 10, label: 'Projects Completed', suffix: '+' },
    { number: 5, label: 'Happy Clients', suffix: '+' },
    { number: 3, label: 'Years Experience', suffix: '+' },
    { number: 15, label: 'Technologies', suffix: '+' },
  ]
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/Eyup-16' },
    { Icon: Linkedin, href: 'www.linkedin.com/in/eyup16' },
    { Icon: Twitter, href: 'https://x.com/EyupUskuplu_16' },
    { Icon: Mail, href: 'mailto:eyupcoder@gmail.com' }
  ]
  return (
    <div id="home-top" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-10 md:py-20 relative scroll-mt-0">
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity },
        }}
        className="absolute top-20 left-1/4 w-16 h-16 border border-white/20 rounded-lg"
      />
      
      <motion.div
        animate={{
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          y: { duration: 5, repeat: Infinity },
        }}
        className="absolute bottom-32 right-1/4 w-12 h-12 bg-gradient-to-r from-white/10 to-white/20 rounded-full"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Avatar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start"
        >
          <div ref={avatarRef} className="relative">
            {/* Avatar container with glow effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 overflow-hidden"
            >
              {/* Animated border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-3xl opacity-10"
                style={{
                  background: 'conic-gradient(from 0deg, #ffffff, #666666, #ffffff)',
                }}
              />
              
              {/* Avatar content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <ElegantAvatar />
              </div>
              
              {/* Floating particles around avatar */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 bg-white/50 rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${10 + (i % 2) * 70}%`,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-3"
          >
            <span className="text-2xl">👋</span>
            <span className="text-xl text-white/60">Hello, I'm</span>
          </motion.div>

          {/* Name */}
<motion.h1
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
>
  Eyup A{" "}
  <span className="text-base md:text-lg text-white/60 font-normal">
    (Legally as Ayoub)
  </span>
</motion.h1>

{/* Description */}
<motion.p
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg"
>
  A passionate <span className="text-white font-semibold">Software Developer</span> who crafts 
  digital experiences that combine stunning design with powerful functionality. 
  I turn complex problems into elegant solutions.
</motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to={{pathname:'/services'}}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                />
            </motion.button>
            </Link>
            
            <motion.button
            onClick={()=>{
              // window.open(resumePDF, '_blank', 'noopener,noreferrer')
              const link =  document.createElement('a')
              link.href = resumePDF
              link.download ='resume.pdf'
              link.click()
            }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/60 text-white/80 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">Download CV</span>
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              />
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex space-x-6"
          >
            {socialLinks.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  <span className="counter" data-target={stat.number}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xs md:text-sm text-white/60 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NewHome
