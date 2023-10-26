import { motion } from "framer-motion";
import { scale, slide } from "../../anim";

const index = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;
  return (
    <motion.div
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="relative flex items-center"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10px] h-[10px] bg-white rounded-full absolute left-[30px]"
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default index;
