"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import s from "./style.module.scss";
import Magnetic from "@/components/common/Magnetic";
import Rounded from "@/components/common/RoundedButton";
import { AnimatePresence } from "framer-motion";
import Nav from './Nav'

const index = () => {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={s.header}>
        <div className={s.logo}>
          <p className={s.copyright}>©</p>
          <div className={s.name}>
            <p className={s.codeBy}>Code by</p>
            <p className={s.dennis}>Dennis</p>
            <p className={s.snellenberg}>Snellenberg</p>
          </div>
        </div>
        <div className={s.nav}>
          <Magnetic>
            <div className={s.el}>
              <a>Work</a>
              <div className={s.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={s.el}>
              <a>About</a>
              <div className={s.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={s.el}>
              <a>Contact</a>
              <div className={s.indicator}></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className={s.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          classNam={`${s.button}`}
        >
          <div className={`${s.burger} ${isActive ? s.burgerActive : ""}`} />
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default index;
