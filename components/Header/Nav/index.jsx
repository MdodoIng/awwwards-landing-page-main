import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuSlide } from "../anim";
import Link from "./Link";
import Footer from "./Footer";
import Curve from "./Curve";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const index = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="exit"
      className="h-screen bg-[rgb(41,41,41)] fixed right-0 top-0 text-white z-[3]"
    >
      <div className="h-full p-[100px] flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-[56px] gap-[12px] mt-20"
        >
          <div className="uppercase text-[11px] mb-10 text-[rgb(153,153,153)] border border-[rgb(153,153,153)]">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Link
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator == data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
};

export default index;
