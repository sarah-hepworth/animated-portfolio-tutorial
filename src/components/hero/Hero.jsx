import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20
    }
  }
};

const Hero = () => {
  return (
    <motion.div className="hero">
      <motion.div className="wrapper" variants={textVariants} initial="initial" animate="animate">
        <motion.div className="textContainer" variants={textVariants}>
          <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>
          <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>

          <motion.img src="/scroll.png" alt="Scroll icon" variants={textVariants} animate="scrollButton" />
        </motion.div>
      </motion.div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator Influencer
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="Hero image" />
      </div>
    </motion.div>
  );
};

export default Hero;
