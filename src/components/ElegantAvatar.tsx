import { motion } from 'motion/react'

const ElegantAvatar = () => {
  return (
    <motion.svg
      width="320"
      height="320"
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Face outline */}
      <motion.ellipse
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        cx="160"
        cy="140"
        rx="60"
        ry="75"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Hair */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        d="M100 100 Q160 50 220 100 Q210 80 160 75 Q110 80 100 100"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Eyes */}
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        cx="140"
        cy="125"
        r="3"
        fill="white"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        cx="180"
        cy="125"
        r="3"
        fill="white"
      />
      
      {/* Nose */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        d="M160 135 L160 145"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Mouth */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        d="M150 160 Q160 170 170 160"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Neck */}
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        x1="160"
        y1="215"
        x2="160"
        y2="250"
        stroke="white"
        strokeWidth="2"
      />
      
      {/* Shoulders */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        d="M110 250 Q160 240 210 250"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Shirt/Collar */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        d="M140 250 L160 240 L180 250"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Decorative elements - floating dots */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -20, -40]
          }}
          transition={{
            duration: 3,
            delay: 2 + i * 0.2,
            repeat: Infinity,
            repeatDelay: 4
          }}
          cx={120 + (i % 4) * 30}
          cy={280 - (i % 2) * 20}
          r="2"
          fill="white"
          opacity="0.6"
        />
      ))}
      
      {/* Geometric frame */}
      <motion.rect
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        x="50"
        y="50"
        width="220"
        height="220"
        rx="20"
        stroke="white"
        strokeWidth="1"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.3"
      />
    </motion.svg>
  )
}

export default ElegantAvatar
