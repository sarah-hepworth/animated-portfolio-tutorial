import "./services.scss";
import { motion } from "framer-motion";

const variants = {};

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr></hr>
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business
          </h1>
          <button>WHAT WE DO</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et laoreet odio, condimentum tempus dolor.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc malesuada sapien tortor, non varius ante
            vehicula a. Proin sed efficitur risus. Sed viverra convallis ligula semper sagittis. Donec in risus ut risus
            interdum faucibus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et laoreet odio, condimentum tempus dolor.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc malesuada sapien tortor, non varius ante
            vehicula a. Proin sed efficitur risus. Sed viverra convallis ligula semper sagittis. Donec in risus ut risus
            interdum faucibus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et laoreet odio, condimentum tempus dolor.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc malesuada sapien tortor, non varius ante
            vehicula a. Proin sed efficitur risus. Sed viverra convallis ligula semper sagittis. Donec in risus ut risus
            interdum faucibus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et laoreet odio, condimentum tempus dolor.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc malesuada sapien tortor, non varius ante
            vehicula a. Proin sed efficitur risus. Sed viverra convallis ligula semper sagittis. Donec in risus ut risus
            interdum faucibus.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
