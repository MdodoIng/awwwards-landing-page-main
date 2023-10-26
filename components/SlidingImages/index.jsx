import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "c2.jpg",
  },
  {
    color: "#d6d7dc",
    src: "decimal.jpg",
  },
  {
    color: "#e3e3e3",
    src: "funny.jpg",
  },
  {
    color: "#21242b",
    src: "google.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg",
  },
  {
    color: "#e5e0e1",
    src: "panda.jpg",
  },
  {
    color: "#d7d4cf",
    src: "powell.jpg",
  },
  {
    color: "#e1dad6",
    src: "wix.jpg",
  },
];

const index = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div
      ref={container}
      className="flex flex-col gap-[3vw] relative mt-[200px] bg-white z-[1]"
    >
      <motion.div
        style={{
          x: x1,
        }}
        className="flex relative gap-[3vw] w-[120vw] left-[-10vw]"
      >
        {slider1.map((project, index) => (
          <div
            key={index}
            className="w-[25%] h-[20vw] flex items-center justify-center "
            style={{
              backgroundColor: project.color,
            }}
          >
            <div className="relative w-[80%] h-[80%]">
              <Image
                fill={true}
                alt={"image"}
                src={`/images/${project.src}`}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        style={{
          x: x2,
        }}
        className="flex relative gap-[3vw] w-[120vw] left-[-10vw]"
      >
        {slider2.map((project, index) => (
          <div
            key={index}
            className="w-[25%] h-[20vw] flex items-center justify-center "
            style={{
              backgroundColor: project.color,
            }}
          >
            <div className="relative w-[80%] h-[80%]">
              <Image
                fill={true}
                alt={"image"}
                src={`/images/${project.src}`}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        style={{
          height,
        }}
        className="bg-red-700 relative mt-[100px]"
      >
        <div
          style={{
            boxShadow: "0px 60px 50px rgba(0, 0, 0, 0.748)",
            borderRadius : "0 0 50% 50%"

          }}
          className="h-[1550%] w-[120%] left-[-10%]  bg-white z-[1] absolute"
        />
      </motion.div>
    </div>
  );
};

export default index;
