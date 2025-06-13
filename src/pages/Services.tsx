import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, Smartphone, Palette, Cloud, Zap, ExternalLink, Github, Code2, Database, Layers, Figma } from 'lucide-react'
import { Link } from 'react-router'

gsap.registerPlugin(ScrollTrigger)

const NewServices = () => {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current.children,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          },
        }
      )
    }
  }, [])

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      price: '$50',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React/Next.js', 'Responsive Design', 'Performance Optimized', 'SEO Ready'],
      projects: '7+',
      satisfaction: '98%',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      price: '$100',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'Flutter', 'App Store Ready', 'Push Notifications'],
      projects: '1+',
      satisfaction: '100%',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      price: '$40',
      description: 'User-centered design solutions that balance aesthetics with functionality.',
      features: ['Figma/Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
      projects: '2+',
      satisfaction: '96%',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      price: '$500',
      description: 'Scalable cloud infrastructure and deployment strategies.',
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Monitoring', 'Security'],
      projects: '0',
      satisfaction: '99%',
    },
  ]

  return (
    <div id="services-top" className="min-h-screen px-4 md:px-8 py-10 md:py-20 relative scroll-mt-0">
      {/* Floating background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity },
        }}
        className="absolute top-32 right-20 w-32 h-32 border-2 border-white/10 rounded-full"
      />
      
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6 flex justify-center"
          >
            <Zap size={64} className="text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            My Services
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Transforming ideas into digital reality with cutting-edge technology and creative excellence
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-xl"
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col items-center text-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-3"
                    >
                      <service.icon size={28} className="text-white" />
                    </motion.div>
                    
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">{service.price}</div>
                      <div className="text-xs text-white/50">Starting from</div>
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 leading-relaxed text-sm text-center">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                        <span className="text-white/80 text-xs text-center">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-white">{service.projects}</div>
                      <div className="text-xs text-white/50">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-white">{service.satisfaction}</div>
                      <div className="text-xs text-white/50">Satisfaction</div>
                    </div>
                  </div>

                  {/* Action button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 border border-white/50 text-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get Started</span>
                    <motion.div
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    />
                  </motion.button>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  initial={{ scale: 0, rotate: 45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: 'spring' }}
                  className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-50"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A showcase of my recent work and the impact delivered for clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: 'Kaarbi Platform',
                description: 'Modern Marketplace with advanced features and seamless UX',
                technologies: ['Next.js', 'Better-Auth', 'Mapbox', 'Prisma ORM'],
                status: 'Recently Completed',
                githubLink:'https://github.com/Eyup-16/Kaarbi',
                externalLink:'https://kaarbi.vercel.app/'
              },
              {
                title: 'Samobile',
                description: 'Landing page for a Phone Selling Store with Beautiful Animation & UI',
                technologies: ['React', 'Framer-Motion', 'ShadcnUI', 'Tailwind'],
                status: 'Live Project',
                githubLink:'https://github.com/Eyup-16/Samobile',
                externalLink:'https://samobile.netlify.app/'
              },
              {
                title: 'SkillBridge',
                description: 'Modern Platform that Link between Workers & Customers',
                technologies: ['React', 'TypeScript', 'Next.js', 'Supabase'],
                status: 'Competition Project',
                githubLink:'https://github.com/Eyup-16/SkillBridge',
                externalLink:''
              },
              {
                title: 'Track Calorie',
                description: 'Calories Tracker platform with advanced OOP capabilty ',
                technologies: ['Vanilla JavaScript', 'OOP', 'CSS', 'Webpack'],
                status: 'Learning Project',
                githubLink:'https://github.com/Eyup-16/Tracalorie-Webpack',
                externalLink:''
              },
              {
                title: 'Eyup Portfolio',
                description: 'Portfolio for Listing Personal Project & Showing Personal Skills',
                technologies: ['React', 'TypeScript', 'Motion & GSAP', 'React-router'],
                status: 'Portfolio Project',
                githubLink:'https://github.com/Eyup-16/portfolio',
                externalLink:''
              },
              {
                title: 'Assembly-EndGame',
                description: 'A fun Hangman game, where players try to guess the hidden word before making too many mistakes!',
                technologies: ['Angular', 'NestJS', 'PostgreSQL', 'AWS'],
                status: 'Client Project',
                githubLink:'https://github.com/Eyup-16/Assembly-EndGame',
                externalLink:'https://assemblydev-game.netlify.app/'
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg border border-white/20 hover:border-white/40 text-white/60 hover:text-white transition-all cursor-pointer"
                        onClick={()=>{
                          window.open(project.externalLink,'_blank')
                        }}
                      >
                        <ExternalLink size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg border border-white/20 hover:border-white/40 text-white/60 hover:text-white transition-all cursor-pointer"
                        onClick={()=>{
                          window.open(project.githubLink,'_blank')
                        }}
                      >
                        <Github size={16} />
                      </motion.button>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-xs text-white/50 font-medium">
                    {project.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Tech Stack & Tools
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Technologies, languages, and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Programming Languages */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code2 size={28} className="mr-3" />
                Programming Languages
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'JavaScript', level: 95 },
                  { name: 'TypeScript', level: 90 },
                  { name: 'Python', level: 80 },
                  { name: 'PHP', level: 70 },
                  { name: 'Java', level: 50 },
                  { name: 'C++', level: 45 },
                ].map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="text-white/60 text-sm">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        className="h-2 bg-white rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks & Libraries */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Layers size={28} className="mr-3" />
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'React', 'Next.js', 'Better-Auth', 'Prisma ORM',
                  'Node.js', 'Laravel (soon)', 'Rest-API', 'Next.js API',
                  'Tailwind CSS', 'Bootstrap', 'ShadCn-UI', 'Material UI'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 text-center transition-all duration-300"
                  >
                    <span className="text-white/80 text-sm font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Databases */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database size={28} className="mr-3" />
                Tools & Databases
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-3">Development Tools</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'VS Code', icon: Code2 },
                      { name: 'Figma', icon: Figma },
                      { name: 'Git', icon: Github },
                      { name: 'Notion', icon: Database },
                    ].map((tool, index) => (
                      <motion.div
                        key={tool.name}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 flex items-center space-x-2 transition-all duration-300"
                      >
                        <tool.icon size={16} className="text-white/60" />
                        <span className="text-white/80 text-sm">{tool.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-3">Databases</h4>
                  <div className="space-y-2">
                    {['PostgreSQL', 'MySQL', 'SupaBase', 'Neon', 'MongoDB (soon)'].map((db, index) => (
                      <motion.div
                        key={db}
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all"
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-white/80 text-sm">{db}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-32"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Link to={{pathname:'/contact'}}>
            <motion.button
              whileHover={{ 
                boxShadow: '0 0 40px rgba(255, 255, 255, 0.4)',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-white text-black font-bold rounded-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Need Something Custom?</span>
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                />
            </motion.button>
                </Link>
          </motion.div>
          
          <p className="text-white/60 mt-4">
            Let's discuss your unique project requirements
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default NewServices
