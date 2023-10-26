"use client";

import PreLoader from "@/components/PreLoader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Landing from "@/components/Landing";
import Description from "@/components/Description";
import Projects from "@/components/Projects";
import SlidingImages from "@/components/SlidingImages";
import Contact from '@/components/Contact'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages/>
      <Contact />
    </main>
  );
};

export default Home;
