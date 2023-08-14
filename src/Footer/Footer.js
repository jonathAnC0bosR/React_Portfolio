import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 mt-8">
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link
          to={
            "https://www.linkedin.com/in/jonathan-abraham-cobos-ram%C3%ADrez-b467ab246/"
          }
        >
          <CiLinkedin size={"3em"} />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link to={"https://github.com/jonathAnC0bosR"}>
          <FiGithub size={"3em"} />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link to={"https://leetcode.com/SmiledJona5/"}>
          <SiLeetcode size={"3em"} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Footer;
