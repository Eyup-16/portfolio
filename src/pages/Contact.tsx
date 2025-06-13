import { motion } from 'motion/react'
import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Zap, Target, Wrench, Search } from 'lucide-react'

const NewContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'eyupcoder@gmail.com',
      description: 'Drop me a line anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+213 (555) 123-4567',
      description: 'Available 9 AM - 6 PM EST',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Algiers, Algeria',
      description: 'Open to remote work',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      description: 'Professional network',
    },
  ]

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may require 2-6 months. I provide detailed timelines during our consultation.',
    },
    {
      question: 'Do you work with clients remotely?',
      answer: 'Absolutely! I work with clients worldwide using modern collaboration tools and maintain regular communication throughout the project.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in React, Node.js, TypeScript, Python, and cloud platforms like AWS. I stay updated with the latest technologies to deliver cutting-edge solutions.',
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'I offer both fixed-price and hourly billing options. After understanding your requirements, I provide a detailed quote with clear deliverables and milestones.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! I offer various support packages including maintenance, updates, and feature enhancements. I believe in building long-term relationships with clients.',
    },
  ]

  return (
    <div id="contact-top" className="min-h-screen px-4 md:px-8 py-10 md:py-20 relative scroll-mt-0">
      {/* Floating background elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 6, repeat: Infinity },
        }}
        className="absolute top-20 right-32 w-20 h-20 border border-white/20 rounded-full"
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
            <MessageCircle size={64} className="text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Let's Connect
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 text-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="mb-4 flex justify-center"
                >
                  <method.icon size={32} className="text-white" />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-white font-medium mb-2">{method.value}</p>
                <p className="text-white/60 text-sm">{method.description}</p>
                
                {/* Gradient border effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/20 opacity-0 -z-10 blur-xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-white/50 transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-white/50 transition-all duration-300"
                  />
                </motion.div>
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }}>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-white/50 transition-all duration-300"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-white/50 transition-all duration-300 resize-none"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-white text-black font-bold rounded-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Why Work With Me?</h2>
            
            <div className="space-y-6">
              {[
                { title: 'Fast Response', desc: '24-hour reply guarantee', icon: Zap },
                { title: 'Quality Focus', desc: 'Clean, maintainable code', icon: Target },
                { title: 'Ongoing Support', desc: 'Post-launch assistance', icon: Wrench },
                { title: 'Transparent Process', desc: 'Regular updates & communication', icon: Search },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <item.icon size={24} className="text-white" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  className="w-full text-left p-6 flex items-center justify-between transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <motion.svg
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-white flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NewContact
