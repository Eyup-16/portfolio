import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Controls the delay between each letter's animation
    },
  },
};

const bounce = {
  hidden: { y: 0 },
  show: {
    x: [0, -15, 0], // Bounce up and down (start at 0, up to -15, back to 0)
    transition: {
      duration: 2, // Duration of one bounce cycle
      ease: "easeInOut",
      repeat: Infinity, // Loop infinitely
      repeatType: "loop" as const,
    },
  },
};

type BouncyTextProps = {
  text: string;
  className?: string;
};

const BouncyText: React.FC<BouncyTextProps> = ({ text, className = "" }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`flex ${className}`} // Use flex to handle spacing better
    >
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          variants={bounce}
          custom={i}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BouncyText;